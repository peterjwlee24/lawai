/* createInquiry unit tests — pure logic, no AWS or SendGrid calls.
 * Mirrors the aicollegeprep test pattern (52/52 stable).               */

const { _test } = require("../index");
const {
  validate,
  pickAllowedOrigin,
  inquiryTypeLabel,
  firmRoleLabel,
  firmSizeLabel,
  practiceAreaLabel,
  seminarFormatLabel,
  ApiError,
} = _test;

const baseConsultation = {
  inquiryType: "consultation",
  fullName: "Jane Doe",
  email: "jane.doe@example-firm.com",
  firmName: "Doe & Partners LLP",
  phoneNumber: "+1 (312) 555-0142",
  firmSize: "6-10",
  practiceArea: "corporate",
  message: "Interested in the in-person initial consultation.",
};

const baseSprint = {
  ...baseConsultation,
  inquiryType: "implementation-sprint",
};

const baseSeminar = {
  inquiryType: "seminar",
  fullName: "Margaret Chen",
  email: "margaret@boutique-law.com",
  firmName: "Chen Estate Planning",
  phoneNumber: "+1 (847) 555-0199",
  firmSize: "2-5",
  practiceArea: "estate-planning",
  firmRole: "managing-partner",
  seminarFormat: "half-day",
  message: "Looking at hosting a partner-grade AI seminar.",
};

describe("validate() — consultation", () => {
  test("happy path: valid consultation returns normalized object", () => {
    const out = validate({ ...baseConsultation });
    expect(out.silentReject).toBeUndefined();
    expect(out.inquiryType).toBe("consultation");
    expect(out.email).toBe("jane.doe@example-firm.com");
    expect(out.firmName).toBe("Doe & Partners LLP");
  });

  test("defaults inquiryType to consultation when missing", () => {
    const out = validate({ ...baseConsultation, inquiryType: undefined });
    expect(out.inquiryType).toBe("consultation");
  });

  test("defaults inquiryType to consultation when invalid enum", () => {
    const out = validate({ ...baseConsultation, inquiryType: "bogus-type" });
    expect(out.inquiryType).toBe("consultation");
  });

  test("missing email throws 400", () => {
    expect(() => validate({ ...baseConsultation, email: "" })).toThrow(/email invalid/);
  });

  test("malformed email throws 400", () => {
    expect(() => validate({ ...baseConsultation, email: "not-an-email" })).toThrow(/email invalid/);
  });

  test("missing fullName throws 400", () => {
    expect(() => validate({ ...baseConsultation, fullName: "" })).toThrow(/fullName length 2-80/);
  });

  test("fullName too long throws 400", () => {
    expect(() => validate({ ...baseConsultation, fullName: "x".repeat(81) })).toThrow(/fullName length 2-80/);
  });

  test("missing firmName throws 400", () => {
    expect(() => validate({ ...baseConsultation, firmName: "" })).toThrow(/firmName length/);
  });

  test("phone optional for consultation", () => {
    const out = validate({ ...baseConsultation, phoneNumber: "" });
    expect(out.phoneNumber).toBe("");
  });

  test("malformed phone (if provided) throws 400", () => {
    expect(() => validate({ ...baseConsultation, phoneNumber: "xyz" })).toThrow(/phoneNumber invalid/);
  });

  test("firmSize optional", () => {
    const out = validate({ ...baseConsultation, firmSize: undefined });
    expect(out.firmSize).toBeUndefined();
  });

  test("invalid firmSize enum throws 400", () => {
    expect(() => validate({ ...baseConsultation, firmSize: "bogus" })).toThrow(/firmSize invalid/);
  });

  test("invalid practiceArea enum throws 400", () => {
    expect(() => validate({ ...baseConsultation, practiceArea: "made-up" })).toThrow(/practiceArea invalid/);
  });

  test("message > 2000 chars throws 400", () => {
    expect(() => validate({ ...baseConsultation, message: "x".repeat(2001) })).toThrow(/message too long/);
  });

  test("message empty allowed", () => {
    const out = validate({ ...baseConsultation, message: "" });
    expect(out.message).toBe("");
  });
});

describe("validate() — implementation-sprint", () => {
  test("happy path: valid sprint inquiry returns normalized object", () => {
    const out = validate({ ...baseSprint });
    expect(out.inquiryType).toBe("implementation-sprint");
  });

  test("sprint requires phone number", () => {
    expect(() => validate({ ...baseSprint, phoneNumber: "" })).toThrow(/phoneNumber invalid/);
  });
});

describe("validate() — seminar", () => {
  test("happy path: valid seminar inquiry returns normalized object", () => {
    const out = validate({ ...baseSeminar });
    expect(out.inquiryType).toBe("seminar");
    expect(out.firmRole).toBe("managing-partner");
    expect(out.seminarFormat).toBe("half-day");
  });

  test("seminar requires firmRole", () => {
    expect(() => validate({ ...baseSeminar, firmRole: undefined })).toThrow(/firmRole invalid/);
  });

  test("seminar requires seminarFormat", () => {
    expect(() => validate({ ...baseSeminar, seminarFormat: undefined })).toThrow(/seminarFormat invalid/);
  });

  test("seminar requires phone number", () => {
    expect(() => validate({ ...baseSeminar, phoneNumber: "" })).toThrow(/phoneNumber invalid/);
  });

  test("invalid firmRole throws 400", () => {
    expect(() => validate({ ...baseSeminar, firmRole: "intern" })).toThrow(/firmRole invalid/);
  });

  test("invalid seminarFormat throws 400", () => {
    expect(() => validate({ ...baseSeminar, seminarFormat: "metaverse" })).toThrow(/seminarFormat invalid/);
  });

  test("accepts full-day seminar format", () => {
    const out = validate({ ...baseSeminar, seminarFormat: "full-day" });
    expect(out.seminarFormat).toBe("full-day");
  });

  test("accepts split seminar format", () => {
    const out = validate({ ...baseSeminar, seminarFormat: "split" });
    expect(out.seminarFormat).toBe("split");
  });
});

describe("validate() — honeypot", () => {
  test("honeypot company field returns silentReject", () => {
    const out = validate({ ...baseConsultation, company: "Acme Spam Inc" });
    expect(out).toEqual({ silentReject: true });
  });

  test("empty honeypot is fine", () => {
    const out = validate({ ...baseConsultation, company: "" });
    expect(out.silentReject).toBeUndefined();
  });

  test("whitespace-only honeypot is fine (just looks empty)", () => {
    const out = validate({ ...baseConsultation, company: "   " });
    expect(out.silentReject).toBeUndefined();
  });
});

describe("validate() — body shape", () => {
  test("null payload throws", () => {
    expect(() => validate(null)).toThrow(/JSON object/);
  });

  test("array payload throws", () => {
    // Arrays are typeof "object" — be defensive.
    expect(() => validate(["a"])).toThrow();
  });
});

describe("pickAllowedOrigin()", () => {
  test("static sidebarai.us origin allowed", () => {
    expect(pickAllowedOrigin("https://sidebarai.us")).toBe("https://sidebarai.us");
  });
  test("www subdomain allowed", () => {
    expect(pickAllowedOrigin("https://www.sidebarai.us")).toBe("https://www.sidebarai.us");
  });
  test("localhost allowed for dev", () => {
    expect(pickAllowedOrigin("http://localhost:3000")).toBe("http://localhost:3000");
  });
  test("sidebarai vercel preview matches regex", () => {
    expect(pickAllowedOrigin("https://sidebarai-abc123.vercel.app"))
      .toBe("https://sidebarai-abc123.vercel.app");
  });
  test("lawaihelp vercel preview matches regex (legacy project name)", () => {
    expect(pickAllowedOrigin("https://lawaihelp-xyz.vercel.app"))
      .toBe("https://lawaihelp-xyz.vercel.app");
  });
  test("third-party origin falls back to static[0] — never wildcard", () => {
    const out = pickAllowedOrigin("https://evil.example.com");
    expect(out).toBe("https://sidebarai.us");
    expect(out).not.toBe("*");
  });
  test("empty origin falls back to static[0]", () => {
    expect(pickAllowedOrigin("")).toBe("https://sidebarai.us");
  });
  test("undefined origin falls back to static[0]", () => {
    expect(pickAllowedOrigin(undefined)).toBe("https://sidebarai.us");
  });
});

describe("label helpers", () => {
  test("inquiryTypeLabel renders all enums", () => {
    expect(inquiryTypeLabel("consultation")).toBe("Consultation request");
    expect(inquiryTypeLabel("implementation-sprint")).toBe("5-day Claude for Legal sprint");
    expect(inquiryTypeLabel("seminar")).toBe("Partner-grade AI seminar");
    // Passthrough for unknown values keeps the label resilient.
    expect(inquiryTypeLabel("other")).toBe("other");
  });

  test("firmRoleLabel renders all enums", () => {
    expect(firmRoleLabel("managing-partner")).toBe("Managing Partner");
    expect(firmRoleLabel("partner")).toBe("Partner");
    expect(firmRoleLabel("associate")).toBe("Associate");
    expect(firmRoleLabel("operations")).toBe("Operations / COO / Office Manager");
    expect(firmRoleLabel("in-house-counsel")).toBe("In-house Counsel");
    expect(firmRoleLabel("other")).toBe("Other");
    expect(firmRoleLabel("")).toBe("");
    expect(firmRoleLabel(undefined)).toBe("");
  });

  test("firmSizeLabel renders all enums", () => {
    expect(firmSizeLabel("solo")).toBe("Solo practitioner");
    expect(firmSizeLabel("2-5")).toBe("2–5 attorneys");
    expect(firmSizeLabel("6-10")).toBe("6–10 attorneys");
    expect(firmSizeLabel("11-20")).toBe("11–20 attorneys");
    expect(firmSizeLabel("21-50")).toBe("21–50 attorneys");
    expect(firmSizeLabel("50+")).toBe("50+ attorneys");
    expect(firmSizeLabel(undefined)).toBe("");
  });

  test("practiceAreaLabel renders representative enums", () => {
    expect(practiceAreaLabel("estate-planning")).toBe("Estate Planning / Trusts & Estates");
    expect(practiceAreaLabel("ma")).toBe("M&A (lower-middle-market)");
    expect(practiceAreaLabel("general")).toBe("General Practice");
    expect(practiceAreaLabel(undefined)).toBe("");
  });

  test("seminarFormatLabel renders all enums", () => {
    expect(seminarFormatLabel("half-day")).toBe("Half-day live session (~3.5 hours)");
    expect(seminarFormatLabel("full-day")).toBe("Full-day live session (~7 hours)");
    expect(seminarFormatLabel("split")).toBe("Split across two scheduled days");
    expect(seminarFormatLabel(undefined)).toBe("");
  });
});

describe("ApiError", () => {
  test("default code 400", () => {
    const e = new ApiError("bad");
    expect(e.code).toBe(400);
    expect(e.message).toBe("bad");
  });
  test("custom code preserved", () => {
    const e = new ApiError("nope", 503);
    expect(e.code).toBe(503);
  });
});
