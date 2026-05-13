#!/usr/bin/env bash
# =============================================================================
# deploy-backend.sh
#
# Idempotent provisioning of the sidebarai backend on AWS account 905418423963:
#   - DynamoDB table:   sidebarai-Inquiries   (PK: inquiryId)
#   - IAM role:         sidebarai-createInquiry-role
#   - Lambda function:  sidebarai-createInquiry
#   - API Gateway:      sidebarai-api  with  POST /inquiries  +  OPTIONS preflight
#
# Usage:
#   AWS_REGION=us-west-2 AWS_PROFILE=jenni ./deploy-backend.sh
#
# Pattern mirrors apis/deploy-api-gateway.sh from aicollegeprep, simplified to
# the single public inquiry route. Admin endpoints can be added later.
# =============================================================================

set -euo pipefail

REGION=${AWS_REGION:-us-west-2}
PROFILE=${AWS_PROFILE:-jenni}
ACCOUNT=905418423963

LAMBDA_NAME=sidebarai-createInquiry
ROLE_NAME=sidebarai-createInquiry-role
TABLE_NAME=sidebarai-Inquiries
API_NAME=sidebarai-api
STAGE=prod

LAMBDA_DIR="$(cd "$(dirname "$0")" && pwd)/createInquiry"
DEPLOY_ZIP="${LAMBDA_DIR}/createInquiry-deploy.zip"

# SendGrid + email config (override via env if needed)
SENDGRID_API_KEY=${SENDGRID_API_KEY:?must set SENDGRID_API_KEY env var before deploy}
SENDGRID_FROM_EMAIL=${SENDGRID_FROM_EMAIL:-noreply@jenniai.social}
SENDGRID_FROM_NAME=${SENDGRID_FROM_NAME:-Sidebar AI}
SENDGRID_TEMPLATE_ID=${SENDGRID_TEMPLATE_ID:-d-6264f53f58ad4afaa0892de0c67fb9d2}
SUPPORT_EMAIL_PRIMARY=${SUPPORT_EMAIL_PRIMARY:-peterjlee17@gmail.com}

guard() {
  local r="$1"
  if [[ ! "$r" =~ ^sidebarai ]]; then
    echo "ABORT: $r is not sidebarai- prefixed" >&2
    exit 1
  fi
}

guard "$LAMBDA_NAME"
guard "$ROLE_NAME"
guard "$TABLE_NAME"
guard "$API_NAME"

echo "==> Region: $REGION   Profile: $PROFILE   Account: $ACCOUNT"

# ----- DynamoDB -----
if ! aws dynamodb describe-table --table-name "$TABLE_NAME" \
       --region "$REGION" --profile "$PROFILE" >/dev/null 2>&1; then
  echo "Creating DDB table $TABLE_NAME"
  aws dynamodb create-table \
    --table-name "$TABLE_NAME" \
    --attribute-definitions AttributeName=inquiryId,AttributeType=S \
    --key-schema AttributeName=inquiryId,KeyType=HASH \
    --billing-mode PAY_PER_REQUEST \
    --region "$REGION" --profile "$PROFILE" >/dev/null
  aws dynamodb wait table-exists --table-name "$TABLE_NAME" \
    --region "$REGION" --profile "$PROFILE"
else
  echo "Using existing DDB table $TABLE_NAME"
fi

# ----- IAM role -----
if ! aws iam get-role --role-name "$ROLE_NAME" --profile "$PROFILE" >/dev/null 2>&1; then
  echo "Creating IAM role $ROLE_NAME"
  aws iam create-role \
    --role-name "$ROLE_NAME" \
    --profile "$PROFILE" \
    --assume-role-policy-document '{
      "Version":"2012-10-17",
      "Statement":[{"Effect":"Allow","Principal":{"Service":"lambda.amazonaws.com"},"Action":"sts:AssumeRole"}]
    }' >/dev/null
else
  echo "Using existing IAM role $ROLE_NAME"
fi

aws iam attach-role-policy \
  --role-name "$ROLE_NAME" \
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole \
  --profile "$PROFILE" 2>/dev/null || true

# Inline policy: only PutItem on the sidebarai-Inquiries table (least privilege).
aws iam put-role-policy \
  --role-name "$ROLE_NAME" \
  --policy-name sidebarai-createInquiry-ddb \
  --profile "$PROFILE" \
  --policy-document "{
    \"Version\":\"2012-10-17\",
    \"Statement\":[{
      \"Effect\":\"Allow\",
      \"Action\":[\"dynamodb:PutItem\"],
      \"Resource\":\"arn:aws:dynamodb:${REGION}:${ACCOUNT}:table/${TABLE_NAME}\"
    }]
  }" >/dev/null

ROLE_ARN=$(aws iam get-role --role-name "$ROLE_NAME" --profile "$PROFILE" \
  --query "Role.Arn" --output text)
echo "Role ARN: $ROLE_ARN"

# ----- Build Lambda package -----
echo "Packaging Lambda code"
(
  cd "$LAMBDA_DIR"
  if [ ! -d node_modules ]; then
    npm install --omit=dev --no-audit --no-fund
  fi
  rm -f "$DEPLOY_ZIP"
  zip -qr "$DEPLOY_ZIP" index.js sendgridClient.js package.json node_modules
)
echo "Zip: $DEPLOY_ZIP ($(du -h "$DEPLOY_ZIP" | cut -f1))"

# ----- Lambda -----
ENV_VARS="Variables={DDB_INQUIRIES_TABLE=${TABLE_NAME},SENDGRID_API_KEY=${SENDGRID_API_KEY},SENDGRID_FROM_EMAIL=${SENDGRID_FROM_EMAIL},SENDGRID_FROM_NAME=${SENDGRID_FROM_NAME},SENDGRID_TEMPLATE_ID=${SENDGRID_TEMPLATE_ID},SUPPORT_EMAIL_PRIMARY=${SUPPORT_EMAIL_PRIMARY}}"

if aws lambda get-function --function-name "$LAMBDA_NAME" \
     --region "$REGION" --profile "$PROFILE" >/dev/null 2>&1; then
  echo "Updating existing Lambda $LAMBDA_NAME"
  aws lambda update-function-code \
    --function-name "$LAMBDA_NAME" \
    --zip-file "fileb://${DEPLOY_ZIP}" \
    --region "$REGION" --profile "$PROFILE" >/dev/null
  aws lambda wait function-updated --function-name "$LAMBDA_NAME" \
    --region "$REGION" --profile "$PROFILE"
  aws lambda update-function-configuration \
    --function-name "$LAMBDA_NAME" \
    --runtime nodejs20.x \
    --handler index.handler \
    --timeout 15 \
    --memory-size 512 \
    --environment "$ENV_VARS" \
    --region "$REGION" --profile "$PROFILE" >/dev/null
else
  echo "Creating Lambda $LAMBDA_NAME"
  aws lambda create-function \
    --function-name "$LAMBDA_NAME" \
    --runtime nodejs20.x \
    --handler index.handler \
    --role "$ROLE_ARN" \
    --timeout 15 \
    --memory-size 512 \
    --zip-file "fileb://${DEPLOY_ZIP}" \
    --environment "$ENV_VARS" \
    --region "$REGION" --profile "$PROFILE" >/dev/null
fi

# ----- API Gateway -----
API_ID=$(aws apigateway get-rest-apis --region "$REGION" --profile "$PROFILE" \
  --query "items[?name=='$API_NAME'].id" --output text)
if [ -z "$API_ID" ] || [ "$API_ID" = "None" ]; then
  API_ID=$(aws apigateway create-rest-api --name "$API_NAME" \
    --endpoint-configuration types=REGIONAL \
    --region "$REGION" --profile "$PROFILE" \
    --query "id" --output text)
  echo "Created REST API: $API_ID"
else
  echo "Using existing REST API: $API_ID"
fi

ROOT_ID=$(aws apigateway get-resources --rest-api-id "$API_ID" \
  --region "$REGION" --profile "$PROFILE" \
  --query "items[?path=='/'].id" --output text)

INQ_ID=$(aws apigateway get-resources --rest-api-id "$API_ID" \
  --region "$REGION" --profile "$PROFILE" \
  --query "items[?path=='/inquiries'].id" --output text)
if [ -z "$INQ_ID" ] || [ "$INQ_ID" = "None" ]; then
  INQ_ID=$(aws apigateway create-resource --rest-api-id "$API_ID" \
    --parent-id "$ROOT_ID" --path-part "inquiries" \
    --region "$REGION" --profile "$PROFILE" \
    --query "id" --output text)
fi

put_route() {
  local method="$1"

  aws apigateway put-method \
    --rest-api-id "$API_ID" --resource-id "$INQ_ID" --http-method "$method" \
    --authorization-type NONE \
    --region "$REGION" --profile "$PROFILE" >/dev/null 2>&1 || true

  aws apigateway put-integration \
    --rest-api-id "$API_ID" --resource-id "$INQ_ID" --http-method "$method" \
    --type AWS_PROXY --integration-http-method POST \
    --uri "arn:aws:apigateway:${REGION}:lambda:path/2015-03-31/functions/arn:aws:lambda:${REGION}:${ACCOUNT}:function:${LAMBDA_NAME}/invocations" \
    --region "$REGION" --profile "$PROFILE" >/dev/null

  aws lambda add-permission \
    --function-name "$LAMBDA_NAME" \
    --statement-id "apigateway-invoke-inquiries-${method}" \
    --action lambda:InvokeFunction \
    --principal apigateway.amazonaws.com \
    --source-arn "arn:aws:execute-api:${REGION}:${ACCOUNT}:${API_ID}/*/${method}/inquiries" \
    --region "$REGION" --profile "$PROFILE" 2>/dev/null || true
}

put_route POST
put_route OPTIONS

aws apigateway create-deployment \
  --rest-api-id "$API_ID" --stage-name "$STAGE" \
  --description "sidebarai backend deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  --region "$REGION" --profile "$PROFILE" >/dev/null

INVOKE_URL="https://${API_ID}.execute-api.${REGION}.amazonaws.com/${STAGE}"
echo
echo "==> Deployed."
echo "    API_ID:      $API_ID"
echo "    Stage:       $STAGE"
echo "    Invoke URL:  $INVOKE_URL"
echo "    POST route:  $INVOKE_URL/inquiries"
echo
echo "Set NEXT_PUBLIC_API_BASE=\"$INVOKE_URL\" in Vercel for the frontend."
