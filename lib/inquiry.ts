/* =========================================================================
 * lib/inquiry.ts
 *
 *   Typed client + server validation for the sidebarai inquiry form.
 *   Mirrors the aicollegeprep lib/server/inquiry.ts pattern but adapted to
 *   the sidebarai schema (legal-firm consultation, 5-day sprint, partner-grade
 *   seminar). Used by:
 *     - components/ContactForm.tsx        (consultation + sprint)
 *     - components/SeminarInquiryForm.tsx (seminar)
 *
 *   Submission flow:
 *     client -> POST {API_BASE}/inquiries -> Lambda
 *
 *   API_BASE comes from NEXT_PUBLIC_API_BASE at build time. If unset (local
 *   dev without a backend) the helper falls back to a logged no-op so the
 *   UI can be exercised without the Lambda standing up.
 * ========================================================================= */

export type InquiryType =
  | "consultation"
  | "implementation-sprint"
  | "seminar";

export type FirmSize =
  | "solo"
  | "2-5"
  | "6-10"
  | "11-20"
  | "21-50"
  | "50+";

export type FirmRole =
  | "managing-partner"
  | "partner"
  | "associate"
  | "operations"
  | "in-house-counsel"
  | "other";

export type SeminarFormat = "half-day" | "full-day" | "split";

export type PracticeArea =
  | "corporate"
  | "estate-planning"
  | "ip"
  | "tax"
  | "employment"
  | "real-estate"
  | "litigation"
  | "ma"
  | "healthcare-regulatory"
  | "white-collar"
  | "construction"
  | "immigration-business"
  | "general"
  | "other";

export interface InquiryInput {
  inquiryType: InquiryType;
  fullName: string;
  email: string;
  firmName: string;
  phoneNumber?: string;
  firmSize?: FirmSize;
  practiceArea?: PracticeArea;
  firmRole?: FirmRole;
  seminarFormat?: SeminarFormat;
  message?: string;
  // Honeypot — bots fill, humans never see.
  company?: string;
}

export type InquiryResult =
  | { ok: true; inquiryId: string }
  | { ok: false; errors: string[] };

/* ---------- regex constants — shared with the Lambda validator ---------- */
export const EMAIL_REGEX  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_REGEX  = /^[+()\d\s.-]{7,}$/;

/* ---------- option lists for selects / radios ---------- */
export const FIRM_SIZE_OPTIONS: Array<{ value: FirmSize | ""; label: string }> = [
  { value: "",       label: "Select firm size" },
  { value: "solo",   label: "Solo practitioner" },
  { value: "2-5",    label: "2–5 attorneys" },
  { value: "6-10",   label: "6–10 attorneys" },
  { value: "11-20",  label: "11–20 attorneys" },
  { value: "21-50",  label: "21–50 attorneys" },
  { value: "50+",    label: "50+ attorneys" },
];

export const PRACTICE_AREA_OPTIONS: Array<{ value: PracticeArea | ""; label: string }> = [
  { value: "",                     label: "Select practice area (optional)" },
  { value: "corporate",            label: "Corporate / Business Law" },
  { value: "estate-planning",      label: "Estate Planning / Trusts & Estates" },
  { value: "ip",                   label: "Intellectual Property" },
  { value: "tax",                  label: "Tax" },
  { value: "employment",           label: "Employment" },
  { value: "real-estate",          label: "Real Estate" },
  { value: "litigation",           label: "Litigation" },
  { value: "ma",                   label: "M&A (lower-middle-market)" },
  { value: "healthcare-regulatory", label: "Healthcare Regulatory" },
  { value: "white-collar",         label: "White-collar Criminal Defense" },
  { value: "construction",         label: "Construction" },
  { value: "immigration-business", label: "Immigration (business-side)" },
  { value: "general",              label: "General Practice" },
  { value: "other",                label: "Other" },
];

export const FIRM_ROLE_OPTIONS: Array<{ value: FirmRole; label: string }> = [
  { value: "managing-partner", label: "Managing Partner" },
  { value: "partner",          label: "Partner" },
  { value: "associate",        label: "Associate" },
  { value: "operations",       label: "Operations / COO / Office Manager" },
  { value: "in-house-counsel", label: "In-house Counsel" },
  { value: "other",            label: "Other" },
];

export const SEMINAR_FORMAT_OPTIONS: Array<{ value: SeminarFormat; label: string }> = [
  { value: "half-day", label: "Half-day live session (~3.5 hours, one call)" },
  { value: "full-day", label: "Full-day live session (~7 hours, one call)" },
  { value: "split",    label: "Split across two scheduled days" },
];

/* ---------- client-side validator ----------
 * Mirrors the Lambda validator. The Lambda is the source of truth — this is
 * for fast UX feedback only. Always re-run on the server.                     */
export function validateInquiryClient(input: InquiryInput): Record<string, string> {
  const errs: Record<string, string> = {};
  const isSeminar = input.inquiryType === "seminar";
  const isSprint  = input.inquiryType === "implementation-sprint";

  if (!input.fullName || input.fullName.trim().length < 2 || input.fullName.trim().length > 80) {
    errs.fullName = "Enter your full name.";
  }
  if (!input.email || !EMAIL_REGEX.test(input.email.trim())) {
    errs.email = "Enter a valid email address.";
  }
  if (!input.firmName || input.firmName.trim().length < 2 || input.firmName.trim().length > 120) {
    errs.firmName = "Enter the firm name.";
  }
  if (isSeminar || isSprint) {
    if (!input.phoneNumber || !PHONE_REGEX.test(input.phoneNumber.trim())) {
      errs.phoneNumber = "Enter a phone number we can call you back on.";
    }
  } else if (input.phoneNumber && !PHONE_REGEX.test(input.phoneNumber.trim())) {
    errs.phoneNumber = "Phone number format looks off.";
  }
  if (isSeminar) {
    if (!input.firmRole) errs.firmRole = "Select your role at the firm.";
    if (!input.seminarFormat) errs.seminarFormat = "Pick in-person, virtual, or either.";
  }
  if (input.message && input.message.length > 2000) {
    errs.message = "Message must be 2000 characters or fewer.";
  }
  return errs;
}

function getApiBase(): string {
  if (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_API_BASE) {
    return process.env.NEXT_PUBLIC_API_BASE.replace(/\/$/, "");
  }
  return "";
}

/* ---------- submit ---------- */
export async function submitInquiry(input: InquiryInput): Promise<InquiryResult> {
  const clientErrors = validateInquiryClient(input);
  if (Object.keys(clientErrors).length > 0) {
    return { ok: false, errors: Object.values(clientErrors) };
  }

  const apiBase = getApiBase();
  if (!apiBase) {
    // Dev-mode no-op: stand in for the Lambda so the UI can still demo.
    // Production builds set NEXT_PUBLIC_API_BASE in Vercel.
    if (typeof window !== "undefined") {
      console.warn("[submitInquiry] NEXT_PUBLIC_API_BASE not set — dev no-op mode");
    }
    return { ok: true, inquiryId: "dev-no-op-" + Date.now().toString(36) };
  }

  try {
    const resp = await fetch(`${apiBase}/inquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    const json = await resp.json().catch(() => ({}));
    if (resp.ok && json?.inquiryId) {
      return { ok: true, inquiryId: json.inquiryId as string };
    }
    const serverError = typeof json?.error === "string" ? json.error : `HTTP ${resp.status}`;
    return { ok: false, errors: serverError.split(";").map((s: string) => s.trim()).filter(Boolean) };
  } catch (e) {
    return {
      ok: false,
      errors: [(e as Error)?.message || "Network error — try again in a moment."],
    };
  }
}
