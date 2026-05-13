/* =========================================================================
 * createInquiry Lambda  (sidebarai-createInquiry)
 *
 *   Mirrors the aicollegeprep createInquiry pattern with adaptations for
 *   sidebarai.us:
 *     - DDB table: sidebarai-Inquiries (PK: inquiryId)
 *     - Three inquiry types:
 *         * consultation        — generic AI-implementation consultation
 *                                  request from the homepage / contact form.
 *         * implementation-sprint — explicit 5-day Claude for Legal sprint
 *                                  request (referenced on /sprint future page).
 *         * seminar             — partner-grade AI seminar inquiry from the
 *                                  /seminars page. Adds firmRole + seminarTopic.
 *     - SendGrid template: d-6264f53f58ad4afaa0892de0c67fb9d2 (sidebar-ai)
 *     - Recipients: peterjlee17@gmail.com (interim before sidebarai.us mailbox)
 *     - From: noreply@jenniai.social (authenticated SendGrid sender)
 *     - Honeypot field `company` -> silent 200 reject if non-empty (matches
 *       the aicollegeprep honeypot pattern verified across 152 Playwright tests)
 *
 *   Pipeline: validate -> DDB put -> SendGrid send -> JSON response
 *
 *   Lessons applied from aicollegeprep history:
 *     - Never use "*" CORS wildcard (commit 67e112f review-fix lesson).
 *     - Wrap SendGrid in try/catch — a 4xx from SendGrid should not nuke the
 *       inquiry record (consistent across all aicollegeprep handler updates).
 *     - Use UTF-8 charset on Content-Type — defensive against intermediary
 *       transcoders mojibake'ing accented firm names (Östberg, O'Donnell…).
 *     - Honeypot returns 200 OK (not 4xx) — bots don't learn what tripped.
 * ========================================================================= */

const AWS  = require("aws-sdk");
const uuid = require("uuid");
const sendgrid = require("./sendgridClient");

const REGION          = process.env.AWS_REGION || "us-west-2";
const INQUIRIES_TABLE = process.env.DDB_INQUIRIES_TABLE || "sidebarai-Inquiries";

/* ---------- CORS allow-list (LOCKED) ---------- */
const STATIC_ALLOWED_ORIGINS = [
  "https://sidebarai.us",
  "https://www.sidebarai.us",
  "http://localhost:3000",
];
const ORIGIN_REGEXES = [
  /^https:\/\/sidebarai(?:-[a-z0-9-]+)?\.vercel\.app$/,
  /^https:\/\/lawaihelp(?:-[a-z0-9-]+)?\.vercel\.app$/,
];
function pickAllowedOrigin(origin) {
  if (!origin) return STATIC_ALLOWED_ORIGINS[0];
  if (STATIC_ALLOWED_ORIGINS.includes(origin)) return origin;
  if (ORIGIN_REGEXES.some(rx => rx.test(origin))) return origin;
  return STATIC_ALLOWED_ORIGINS[0];
}

/* ---------- SDK clients ---------- */
AWS.config.update({ region: REGION });
const dynamodb = new AWS.DynamoDB.DocumentClient();

/* ---------- helpers ---------- */
class ApiError extends Error {
  constructor(msg, code = 400) { super(msg); this.code = code; }
}

const buildResponse = (code, body, allowOrigin) => ({
  statusCode: code,
  headers: {
    "Content-Type"                     : "application/json; charset=utf-8",
    "Access-Control-Allow-Origin"      : allowOrigin,
    "Access-Control-Allow-Methods"     : "OPTIONS,POST",
    "Access-Control-Allow-Headers"     :
      "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
    "Access-Control-Allow-Credentials" : "true",
    "Vary"                             : "Origin",
  },
  body: JSON.stringify(body),
});

const isPreflightRequest = (event) =>
  ((event?.httpMethod || event?.requestContext?.http?.method || "").toUpperCase() === "OPTIONS");

/* ---------- enums ---------- */
const VALID_INQUIRY_TYPES = [
  "consultation",
  "implementation-sprint",
  "seminar",
];
const VALID_FIRM_SIZES = [
  "solo",
  "2-5",
  "6-10",
  "11-20",
  "21-50",
  "50+",
];
const VALID_FIRM_ROLES = [
  "managing-partner",
  "partner",
  "associate",
  "operations",
  "in-house-counsel",
  "other",
];
const VALID_SEMINAR_AUDIENCES = [
  "half-day",
  "full-day",
  "split",
];
const VALID_PRACTICE_AREAS = [
  "corporate",
  "estate-planning",
  "ip",
  "tax",
  "employment",
  "real-estate",
  "litigation",
  "ma",
  "healthcare-regulatory",
  "white-collar",
  "construction",
  "immigration-business",
  "general",
  "other",
];

function validate(payload) {
  if (typeof payload !== "object" || payload === null) {
    throw new ApiError("Body must be valid JSON object");
  }

  // Honeypot — silent reject
  if (typeof payload.company === "string" && payload.company.trim() !== "") {
    return { silentReject: true };
  }

  // inquiryType defaults to "consultation" so a stripped-down homepage form
  // still works without specifying it.
  const inquiryType = VALID_INQUIRY_TYPES.includes(payload.inquiryType)
    ? payload.inquiryType
    : "consultation";

  const isSeminar              = inquiryType === "seminar";
  const isImplementationSprint = inquiryType === "implementation-sprint";

  const errors = [];

  const fullName = typeof payload.fullName === "string" ? payload.fullName.trim() : "";
  if (fullName.length < 2 || fullName.length > 80) errors.push("fullName length 2-80");

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("email invalid");

  const firmName = typeof payload.firmName === "string" ? payload.firmName.trim() : "";
  if (firmName.length < 2 || firmName.length > 120) errors.push("firmName length 2-120");

  const phoneNumber = typeof payload.phoneNumber === "string" ? payload.phoneNumber.trim() : "";
  // Phone is optional for the homepage consultation but required for sprint /
  // seminar inquiries (so we can call back to schedule the in-person session).
  if (isSeminar || isImplementationSprint) {
    if (!/^[+()\d\s.-]{7,}$/.test(phoneNumber)) errors.push("phoneNumber invalid");
  } else if (phoneNumber && !/^[+()\d\s.-]{7,}$/.test(phoneNumber)) {
    errors.push("phoneNumber invalid format");
  }

  // firmSize is optional everywhere; if provided it must be a known enum.
  if (payload.firmSize && !VALID_FIRM_SIZES.includes(payload.firmSize)) {
    errors.push("firmSize invalid");
  }

  // practiceArea is optional everywhere; if provided it must be a known enum.
  if (payload.practiceArea && !VALID_PRACTICE_AREAS.includes(payload.practiceArea)) {
    errors.push("practiceArea invalid");
  }

  // Seminar-only required fields.
  if (isSeminar) {
    if (!VALID_FIRM_ROLES.includes(payload.firmRole)) errors.push("firmRole invalid");
    if (!VALID_SEMINAR_AUDIENCES.includes(payload.seminarFormat)) errors.push("seminarFormat invalid");
  } else {
    // Optional firmRole still validated if present.
    if (payload.firmRole && !VALID_FIRM_ROLES.includes(payload.firmRole)) {
      errors.push("firmRole invalid");
    }
  }

  const message = typeof payload.message === "string" ? payload.message : "";
  if (message.length > 2000) errors.push("message too long (max 2000)");

  if (errors.length) throw new ApiError(errors.join("; "), 400);

  return {
    inquiryType,
    fullName,
    email,
    firmName,
    phoneNumber,
    message,
    ...(payload.firmSize     && { firmSize: payload.firmSize }),
    ...(payload.practiceArea && { practiceArea: payload.practiceArea }),
    ...(payload.firmRole     && { firmRole: payload.firmRole }),
    ...(isSeminar && {
      firmRole: payload.firmRole,
      seminarFormat: payload.seminarFormat,
    }),
  };
}

const inquiryTypeLabel = (t) =>
  t === "consultation"           ? "Consultation request"
  : t === "implementation-sprint" ? "5-day Claude for Legal sprint"
  : t === "seminar"               ? "Partner-grade AI seminar"
  : t;

const firmRoleLabel = (r) =>
  r === "managing-partner" ? "Managing Partner"
  : r === "partner"        ? "Partner"
  : r === "associate"      ? "Associate"
  : r === "operations"     ? "Operations / COO / Office Manager"
  : r === "in-house-counsel" ? "In-house Counsel"
  : r === "other"          ? "Other"
  : r || "";

const firmSizeLabel = (s) =>
  s === "solo"  ? "Solo practitioner"
  : s === "2-5"  ? "2–5 attorneys"
  : s === "6-10" ? "6–10 attorneys"
  : s === "11-20" ? "11–20 attorneys"
  : s === "21-50" ? "21–50 attorneys"
  : s === "50+"   ? "50+ attorneys"
  : s || "";

const practiceAreaLabel = (p) =>
  p === "corporate"             ? "Corporate / Business Law"
  : p === "estate-planning"      ? "Estate Planning / Trusts & Estates"
  : p === "ip"                   ? "Intellectual Property"
  : p === "tax"                  ? "Tax"
  : p === "employment"           ? "Employment"
  : p === "real-estate"          ? "Real Estate"
  : p === "litigation"           ? "Litigation"
  : p === "ma"                   ? "M&A (lower-middle-market)"
  : p === "healthcare-regulatory" ? "Healthcare Regulatory"
  : p === "white-collar"         ? "White-collar Criminal Defense"
  : p === "construction"         ? "Construction"
  : p === "immigration-business" ? "Immigration (business-side)"
  : p === "general"              ? "General Practice"
  : p === "other"                ? "Other"
  : p || "";

const seminarFormatLabel = (f) =>
  f === "half-day" ? "Half-day live session (~3.5 hours)"
  : f === "full-day" ? "Full-day live session (~7 hours)"
  : f === "split"    ? "Split across two scheduled days"
  : f || "";

/* ---------- handler ---------- */
exports.handler = async (event = {}) => {
  const origin      = (event.headers?.origin ?? event.headers?.Origin) || "";
  const allowOrigin = pickAllowedOrigin(origin);

  if (isPreflightRequest(event)) {
    return buildResponse(200, { ok: true }, allowOrigin);
  }

  try {
    let parsed;
    try { parsed = JSON.parse(event.body || "{}"); }
    catch { throw new ApiError("Body must be valid JSON"); }

    const validated = validate(parsed);

    if (validated.silentReject) {
      console.info("[createInquiry] honeypot tripped - silent reject");
      return buildResponse(200, { message: "OK" }, allowOrigin);
    }

    const data      = validated;
    const inquiryId = uuid.v4();

    /* timestamps in CT (Chicagoland) — matches the business focus area. */
    const nowUtc = new Date();
    const fmtDate = new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/Chicago",
    }).format(nowUtc); // YYYY-MM-DD
    const fmtTime = new Intl.DateTimeFormat("en-GB", {
      timeZone: "America/Chicago",
      hour12: false,
      hour: "2-digit", minute: "2-digit", second: "2-digit",
    }).format(nowUtc); // HH:mm:ss

    /* 1. DDB write */
    const item = {
      inquiryId,
      inquiryType        : data.inquiryType,
      inquiryTypeLabel   : inquiryTypeLabel(data.inquiryType),
      fullName           : data.fullName,
      email              : data.email,
      firmName           : data.firmName,
      phoneNumber        : data.phoneNumber || "",
      message            : data.message || "",
      status             : "OPEN",
      createdAt          : nowUtc.toISOString(),
      createdDate        : fmtDate,
      createdTime        : fmtTime,
      source             : "web-inquiry",
      ...(data.firmSize     && { firmSize: data.firmSize, firmSizeLabel: firmSizeLabel(data.firmSize) }),
      ...(data.practiceArea && { practiceArea: data.practiceArea, practiceAreaLabel: practiceAreaLabel(data.practiceArea) }),
      ...(data.firmRole     && { firmRole: data.firmRole, firmRoleLabel: firmRoleLabel(data.firmRole) }),
      ...(data.seminarFormat && { seminarFormat: data.seminarFormat, seminarFormatLabel: seminarFormatLabel(data.seminarFormat) }),
    };
    await dynamodb.put({ TableName: INQUIRIES_TABLE, Item: item }).promise();
    console.info(`[createInquiry] DDB write OK inquiryId=${inquiryId}`);

    /* 2. SendGrid notification */
    const supportEmail = process.env.SUPPORT_EMAIL_PRIMARY || "peterjlee17@gmail.com";
    try {
      await sendgrid.sendInquiryNotification({
        to:        supportEmail.split(",").map(s => s.trim()).filter(Boolean),
        replyTo:   data.email,
        fromEmail: process.env.SENDGRID_FROM_EMAIL || "noreply@jenniai.social",
        fromName:  process.env.SENDGRID_FROM_NAME  || "Sidebar AI",
        templateId: process.env.SENDGRID_TEMPLATE_ID
                  || "d-6264f53f58ad4afaa0892de0c67fb9d2",
        apiKey:    process.env.SENDGRID_API_KEY,
        dynamicTemplateData: {
          // Routing / type
          inquiryType        : data.inquiryType,
          inquiryTypeLabel   : inquiryTypeLabel(data.inquiryType),
          isConsultation     : data.inquiryType === "consultation",
          isImplementationSprint: data.inquiryType === "implementation-sprint",
          isSeminar          : data.inquiryType === "seminar",
          // Common contact fields
          fullName           : data.fullName,
          email              : data.email,
          firmName           : data.firmName,
          phoneNumber        : data.phoneNumber || "",
          message            : data.message || "",
          firmSize           : data.firmSize         || "",
          firmSizeLabel      : data.firmSize ? firmSizeLabel(data.firmSize) : "",
          practiceArea       : data.practiceArea     || "",
          practiceAreaLabel  : data.practiceArea ? practiceAreaLabel(data.practiceArea) : "",
          firmRole           : data.firmRole         || "",
          firmRoleLabel      : data.firmRole ? firmRoleLabel(data.firmRole) : "",
          seminarFormat      : data.seminarFormat    || "",
          seminarFormatLabel : data.seminarFormat ? seminarFormatLabel(data.seminarFormat) : "",
          // Metadata
          inquiryId          : inquiryId,
          createdDate        : fmtDate,
          createdTime        : fmtTime,
          status             : "OPEN",
          supportEmail       : supportEmail,
        },
      });
    } catch (mailErr) {
      // Email failure is non-fatal — the inquiry record is already written.
      // Operator follows up via the dashboard. (Same pattern as aicollegeprep.)
      console.error("[createInquiry] SendGrid send failed:", mailErr?.message || "unknown");
    }

    return buildResponse(201, { message: "Inquiry registered", inquiryId, status: "OPEN" }, allowOrigin);

  } catch (err) {
    console.error("[createInquiry] error:", err?.message || "unknown");
    const code    = err instanceof ApiError ? err.code    : 500;
    const message = err instanceof ApiError ? err.message : "Internal server error";
    return buildResponse(code, { error: message }, allowOrigin);
  }
};

// Exported for unit tests
exports._test = {
  validate,
  pickAllowedOrigin,
  inquiryTypeLabel,
  firmRoleLabel,
  firmSizeLabel,
  practiceAreaLabel,
  seminarFormatLabel,
  ApiError,
  VALID_INQUIRY_TYPES,
  VALID_FIRM_ROLES,
  VALID_SEMINAR_AUDIENCES,
};
