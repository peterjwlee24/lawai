/* =========================================================================
 * sendgridClient.js
 *   Thin wrapper around @sendgrid/mail for the sidebarai createInquiry Lambda.
 *   Sender authenticated under jenniai.social (the SendGrid authenticated
 *   sender already verified in this account); the display name "Sidebar AI"
 *   does the brand work in the inbox.
 *
 *   Mirrors the aicollegeprep wrapper verbatim except for the default fromName.
 * ========================================================================= */

const sgMail = require("@sendgrid/mail");

async function sendInquiryNotification({
  to,
  cc,
  replyTo,
  fromEmail = "noreply@jenniai.social",
  fromName  = "Sidebar AI",
  templateId,
  apiKey,
  dynamicTemplateData,
}) {
  if (!apiKey)     throw new Error("SendGrid API key is required (SENDGRID_API_KEY env)");
  if (!templateId) throw new Error("SendGrid template ID is required");
  if (!to)         throw new Error("Recipient email is required");

  sgMail.setApiKey(apiKey);

  const msg = {
    to,
    ...(cc && { cc }),
    from: { email: fromEmail, name: fromName },
    ...(replyTo && { replyTo: { email: replyTo } }),
    templateId,
    dynamicTemplateData,
    categories: ["sidebarai-inquiry", "internal-notification"],
    customArgs: {
      environment: process.env.ENVIRONMENT || "production",
      inquiryId: dynamicTemplateData?.inquiryId || "",
    },
  };

  try {
    console.info(
      `[sendInquiryNotification] sending inquiryId=${dynamicTemplateData?.inquiryId || "(none)"}`,
    );

    const response = await sgMail.send(msg);
    const messageId = response?.[0]?.headers?.["x-message-id"];
    console.info(`[sendInquiryNotification] sent. x-message-id=${messageId}`);
    return { statusCode: 200, messageId };
  } catch (error) {
    const statusCode = error?.response?.statusCode || error?.code || "unknown";
    console.error(
      `[sendInquiryNotification] SendGrid send failed status=${statusCode}: ${error?.message || "unknown"}`,
    );
    throw error;
  }
}

module.exports = { sendInquiryNotification };
