/* Unit tests for the frontend inquiry helper.                                */

import {
  validateInquiryClient,
  submitInquiry,
  FIRM_SIZE_OPTIONS,
  PRACTICE_AREA_OPTIONS,
  FIRM_ROLE_OPTIONS,
  SEMINAR_FORMAT_OPTIONS,
  EMAIL_REGEX,
  PHONE_REGEX,
} from "@/lib/inquiry";

const baseConsultation = {
  inquiryType: "consultation" as const,
  fullName: "Jane Doe",
  email: "jane@firm.example",
  firmName: "Doe & Partners",
};

describe("regex constants", () => {
  test("EMAIL_REGEX accepts common emails", () => {
    expect(EMAIL_REGEX.test("a@b.co")).toBe(true);
    expect(EMAIL_REGEX.test("first.last+tag@example.com")).toBe(true);
  });
  test("EMAIL_REGEX rejects malformed", () => {
    expect(EMAIL_REGEX.test("no-at-sign")).toBe(false);
    expect(EMAIL_REGEX.test("missing@dot")).toBe(false);
  });

  test("PHONE_REGEX accepts US formats", () => {
    expect(PHONE_REGEX.test("+1 (312) 555-0142")).toBe(true);
    expect(PHONE_REGEX.test("312.555.0142")).toBe(true);
    expect(PHONE_REGEX.test("3125550142")).toBe(true);
  });
  test("PHONE_REGEX rejects garbage", () => {
    expect(PHONE_REGEX.test("call me")).toBe(false);
  });
});

describe("validateInquiryClient — consultation", () => {
  test("happy path returns no errors", () => {
    expect(Object.keys(validateInquiryClient(baseConsultation))).toHaveLength(0);
  });
  test("missing fullName produces error", () => {
    expect(validateInquiryClient({ ...baseConsultation, fullName: "" }).fullName).toBeDefined();
  });
  test("invalid email produces error", () => {
    expect(validateInquiryClient({ ...baseConsultation, email: "not-email" }).email).toBeDefined();
  });
  test("missing firmName produces error", () => {
    expect(validateInquiryClient({ ...baseConsultation, firmName: "" }).firmName).toBeDefined();
  });
  test("consultation does not require phone", () => {
    expect(validateInquiryClient({ ...baseConsultation, phoneNumber: "" }).phoneNumber).toBeUndefined();
  });
  test("consultation rejects bad phone if provided", () => {
    expect(validateInquiryClient({ ...baseConsultation, phoneNumber: "?@" }).phoneNumber).toBeDefined();
  });
  test("rejects message > 2000 chars", () => {
    expect(validateInquiryClient({ ...baseConsultation, message: "x".repeat(2001) }).message).toBeDefined();
  });
});

describe("validateInquiryClient — implementation-sprint", () => {
  test("requires phone", () => {
    const errs = validateInquiryClient({
      ...baseConsultation,
      inquiryType: "implementation-sprint",
      phoneNumber: "",
    });
    expect(errs.phoneNumber).toBeDefined();
  });
  test("happy path with phone", () => {
    const errs = validateInquiryClient({
      ...baseConsultation,
      inquiryType: "implementation-sprint",
      phoneNumber: "+1 312 555 0142",
    });
    expect(Object.keys(errs)).toHaveLength(0);
  });
});

describe("validateInquiryClient — seminar", () => {
  test("requires firmRole + seminarFormat + phone", () => {
    const errs = validateInquiryClient({
      ...baseConsultation,
      inquiryType: "seminar",
    });
    expect(errs.firmRole).toBeDefined();
    expect(errs.seminarFormat).toBeDefined();
    expect(errs.phoneNumber).toBeDefined();
  });
  test("happy path", () => {
    const errs = validateInquiryClient({
      ...baseConsultation,
      inquiryType: "seminar",
      phoneNumber: "+1 312 555 0142",
      firmRole: "managing-partner",
      seminarFormat: "in-person",
    });
    expect(Object.keys(errs)).toHaveLength(0);
  });
});

describe("option lists", () => {
  test("FIRM_SIZE_OPTIONS has expected enums", () => {
    expect(FIRM_SIZE_OPTIONS.map((o) => o.value)).toEqual(
      expect.arrayContaining(["", "solo", "2-5", "6-10", "11-20", "21-50", "50+"]),
    );
  });
  test("PRACTICE_AREA_OPTIONS covers core practice areas", () => {
    const values = PRACTICE_AREA_OPTIONS.map((o) => o.value);
    expect(values).toEqual(expect.arrayContaining(["corporate", "estate-planning", "ip", "tax", "employment", "ma"]));
  });
  test("FIRM_ROLE_OPTIONS covers expected roles", () => {
    expect(FIRM_ROLE_OPTIONS.map((o) => o.value)).toEqual([
      "managing-partner",
      "partner",
      "associate",
      "operations",
      "in-house-counsel",
      "other",
    ]);
  });
  test("SEMINAR_FORMAT_OPTIONS includes half-day + full-day + split", () => {
    expect(SEMINAR_FORMAT_OPTIONS.map((o) => o.value)).toEqual(["half-day", "full-day", "split"]);
  });
});

describe("submitInquiry — dev no-op mode", () => {
  beforeEach(() => {
    // No NEXT_PUBLIC_API_BASE in test env triggers the no-op path.
    delete (process.env as Record<string, string | undefined>).NEXT_PUBLIC_API_BASE;
  });

  test("returns ok with synthetic id when API base missing", async () => {
    const r = await submitInquiry({ ...baseConsultation });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.inquiryId).toMatch(/^dev-no-op-/);
  });

  test("returns validation errors before hitting network", async () => {
    const r = await submitInquiry({ ...baseConsultation, email: "bad" });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.length).toBeGreaterThan(0);
  });
});

describe("submitInquiry — network failure", () => {
  let originalFetch: typeof fetch;
  beforeEach(() => {
    originalFetch = global.fetch;
    process.env.NEXT_PUBLIC_API_BASE = "https://example.test";
    global.fetch = jest.fn(() => Promise.reject(new Error("ECONNREFUSED"))) as unknown as typeof fetch;
  });
  afterEach(() => {
    global.fetch = originalFetch;
    delete (process.env as Record<string, string | undefined>).NEXT_PUBLIC_API_BASE;
  });

  test("returns ok:false with the network error", async () => {
    const r = await submitInquiry({ ...baseConsultation });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(",")).toContain("ECONNREFUSED");
  });
});

function fakeResponse(body: unknown, status: number) {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => body,
  } as unknown as Response;
}

describe("submitInquiry — server error", () => {
  let originalFetch: typeof fetch;
  beforeEach(() => {
    originalFetch = global.fetch;
    process.env.NEXT_PUBLIC_API_BASE = "https://example.test";
    global.fetch = jest.fn(() =>
      Promise.resolve(fakeResponse({ error: "firmName length 2-120; email invalid" }, 400)),
    ) as unknown as typeof fetch;
  });
  afterEach(() => {
    global.fetch = originalFetch;
    delete (process.env as Record<string, string | undefined>).NEXT_PUBLIC_API_BASE;
  });

  test("surfaces semicolon-split server errors", async () => {
    const r = await submitInquiry({ ...baseConsultation });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.errors).toContain("firmName length 2-120");
      expect(r.errors).toContain("email invalid");
    }
  });
});

describe("submitInquiry — happy path", () => {
  let originalFetch: typeof fetch;
  beforeEach(() => {
    originalFetch = global.fetch;
    process.env.NEXT_PUBLIC_API_BASE = "https://example.test";
    global.fetch = jest.fn(() =>
      Promise.resolve(fakeResponse({ message: "Inquiry registered", inquiryId: "abc-123", status: "OPEN" }, 201)),
    ) as unknown as typeof fetch;
  });
  afterEach(() => {
    global.fetch = originalFetch;
    delete (process.env as Record<string, string | undefined>).NEXT_PUBLIC_API_BASE;
  });

  test("returns inquiryId on 201", async () => {
    const r = await submitInquiry({ ...baseConsultation });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.inquiryId).toBe("abc-123");
  });
});
