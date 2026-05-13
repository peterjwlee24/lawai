"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import {
  submitInquiry,
  FIRM_SIZE_OPTIONS,
  PRACTICE_AREA_OPTIONS,
  FIRM_ROLE_OPTIONS,
  SEMINAR_FORMAT_OPTIONS,
  type FirmSize,
  type PracticeArea,
  type FirmRole,
  type SeminarFormat,
} from "@/lib/inquiry";

interface FormState {
  fullName: string;
  email: string;
  firmName: string;
  phoneNumber: string;
  firmRole: FirmRole | "";
  firmSize: FirmSize | "";
  practiceArea: PracticeArea | "";
  seminarFormat: SeminarFormat | "";
  message: string;
  // Honeypot — must always be controlled with empty default.
  company: string;
}

export default function SeminarsInquiryForm() {
  const [state, setState] = useState<FormState>({
    fullName: "",
    email: "",
    firmName: "",
    phoneNumber: "",
    firmRole: "",
    firmSize: "",
    practiceArea: "",
    seminarFormat: "",
    message: "",
    company: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [serverErrors, setServerErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setState((prev) => ({ ...prev, [key]: value }));

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!state.fullName.trim()) e.fullName = "Your full name is required.";
    if (!state.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) e.email = "Enter a valid email.";
    if (!state.firmName.trim()) e.firmName = "Firm name is required.";
    if (!state.phoneNumber.trim()) e.phoneNumber = "A phone number is required for seminar bookings.";
    if (!state.firmRole) e.firmRole = "Select your role at the firm.";
    if (!state.seminarFormat) e.seminarFormat = "Pick a session length.";
    if (state.message.length > 2000) e.message = "Message must be 2000 characters or fewer.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setServerErrors([]);
    if (!validate()) return;
    setIsSubmitting(true);

    const result = await submitInquiry({
      inquiryType: "seminar",
      fullName: state.fullName,
      email: state.email,
      firmName: state.firmName,
      phoneNumber: state.phoneNumber,
      firmRole: state.firmRole as FirmRole,
      firmSize: state.firmSize || undefined,
      practiceArea: state.practiceArea || undefined,
      seminarFormat: state.seminarFormat as SeminarFormat,
      message: state.message || undefined,
      company: state.company,
    });

    setIsSubmitting(false);
    if (result.ok) {
      setInquiryId(result.inquiryId);
      setSubmitted(true);
    } else {
      setServerErrors(result.errors);
    }
  };

  const selectClasses =
    "input-field text-lg py-4 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%23737373%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5rem_1.5rem] bg-[right_1rem_center] bg-no-repeat pr-12";

  if (submitted) {
    return (
      <section id="seminar-inquiry" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,165,116,0.15),transparent_50%)]" />
        <div className="container-main relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center py-16 px-8 bg-white rounded-3xl shadow-2xl"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-emerald-500 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
              Seminar request received.
            </h3>
            <p className="text-lg text-neutral-600 mb-3">
              We&apos;ll respond within one business day to set up the thirty-minute intake call.
            </p>
            {inquiryId && (
              <p className="text-xs text-neutral-400 mb-8">
                Reference: <code className="font-mono">{inquiryId}</code>
              </p>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="seminar-inquiry" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,165,116,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,165,116,0.1),transparent_50%)]" />

      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-base font-medium mb-6">
              Request a seminar
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
              Tell us about your firm.{" "}
              <span className="font-serif italic font-normal">We&apos;ll book the intake call.</span>
            </h2>
            <p className="text-xl text-neutral-300 mb-6 leading-relaxed">
              The thirty-minute intake call sets up the seminar: which workflow we&apos;ll build, your jurisdiction&apos;s bar rules to map, your firm&apos;s integration prerequisites, and a date that works. No commitment until we both agree the seminar is the right call.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-base text-neutral-300">Response within</p>
                  <p className="text-lg font-medium text-white">One business day</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-base text-neutral-300">Format</p>
                  <p className="text-lg font-medium text-white">Fully remote · live working session</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl"
            data-testid="seminar-form"
          >
            <h3 className="text-2xl font-semibold text-neutral-900 mb-2">Seminar request</h3>
            <p className="text-base text-neutral-600 mb-8">
              The intake call follows within one business day.
            </p>

            {/* Honeypot */}
            <input
              type="text"
              name="company"
              value={state.company}
              onChange={(e) => update("company", e.target.value)}
              aria-hidden="true"
              tabIndex={-1}
              autoComplete="off"
              style={{ display: "none" }}
              data-testid="seminar-honeypot"
            />

            <fieldset className="space-y-5" disabled={isSubmitting}>
              <div>
                <label htmlFor="seminar-fullName" className="block text-base font-medium text-neutral-800 mb-2">Your name *</label>
                <input
                  type="text"
                  id="seminar-fullName"
                  name="fullName"
                  autoComplete="name"
                  value={state.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  className={`input-field text-lg py-4 ${errors.fullName ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`}
                  placeholder="Margaret Chen"
                />
                {errors.fullName && <p className="mt-2 text-base text-red-600 font-medium">{errors.fullName}</p>}
              </div>

              <div>
                <label htmlFor="seminar-email" className="block text-base font-medium text-neutral-800 mb-2">Email *</label>
                <input
                  type="email"
                  id="seminar-email"
                  name="email"
                  autoComplete="email"
                  value={state.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={`input-field text-lg py-4 ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`}
                  placeholder="mchen@example-firm.com"
                />
                {errors.email && <p className="mt-2 text-base text-red-600 font-medium">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="seminar-firmName" className="block text-base font-medium text-neutral-800 mb-2">Firm name *</label>
                <input
                  type="text"
                  id="seminar-firmName"
                  name="firmName"
                  autoComplete="organization"
                  value={state.firmName}
                  onChange={(e) => update("firmName", e.target.value)}
                  className={`input-field text-lg py-4 ${errors.firmName ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`}
                  placeholder="Chen, Williams & Associates LLP"
                />
                {errors.firmName && <p className="mt-2 text-base text-red-600 font-medium">{errors.firmName}</p>}
              </div>

              <div>
                <label htmlFor="seminar-phoneNumber" className="block text-base font-medium text-neutral-800 mb-2">Phone *</label>
                <input
                  type="tel"
                  id="seminar-phoneNumber"
                  name="phoneNumber"
                  autoComplete="tel"
                  value={state.phoneNumber}
                  onChange={(e) => update("phoneNumber", e.target.value)}
                  className={`input-field text-lg py-4 ${errors.phoneNumber ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`}
                  placeholder="+1 (312) 555-0142"
                />
                {errors.phoneNumber && <p className="mt-2 text-base text-red-600 font-medium">{errors.phoneNumber}</p>}
              </div>

              <div>
                <label htmlFor="seminar-firmRole" className="block text-base font-medium text-neutral-800 mb-2">Your role *</label>
                <select
                  id="seminar-firmRole"
                  name="firmRole"
                  value={state.firmRole}
                  onChange={(e) => update("firmRole", e.target.value as FirmRole)}
                  className={`${selectClasses} ${errors.firmRole ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`}
                >
                  <option value="">Select your role</option>
                  {FIRM_ROLE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.firmRole && <p className="mt-2 text-base text-red-600 font-medium">{errors.firmRole}</p>}
              </div>

              <div>
                <label htmlFor="seminar-firmSize" className="block text-base font-medium text-neutral-800 mb-2">Firm size</label>
                <select
                  id="seminar-firmSize"
                  name="firmSize"
                  value={state.firmSize}
                  onChange={(e) => update("firmSize", e.target.value as FirmSize)}
                  className={selectClasses}
                >
                  {FIRM_SIZE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="seminar-practiceArea" className="block text-base font-medium text-neutral-800 mb-2">Primary practice area</label>
                <select
                  id="seminar-practiceArea"
                  name="practiceArea"
                  value={state.practiceArea}
                  onChange={(e) => update("practiceArea", e.target.value as PracticeArea)}
                  className={selectClasses}
                >
                  {PRACTICE_AREA_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="seminar-seminarFormat" className="block text-base font-medium text-neutral-800 mb-2">Preferred format *</label>
                <select
                  id="seminar-seminarFormat"
                  name="seminarFormat"
                  value={state.seminarFormat}
                  onChange={(e) => update("seminarFormat", e.target.value as SeminarFormat)}
                  className={`${selectClasses} ${errors.seminarFormat ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`}
                >
                  <option value="">Select format</option>
                  {SEMINAR_FORMAT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.seminarFormat && <p className="mt-2 text-base text-red-600 font-medium">{errors.seminarFormat}</p>}
              </div>

              <div>
                <label htmlFor="seminar-message" className="block text-base font-medium text-neutral-800 mb-2">
                  Anything we should know? <span className="text-neutral-500 font-normal">(optional)</span>
                </label>
                <textarea
                  id="seminar-message"
                  name="message"
                  rows={3}
                  maxLength={2000}
                  value={state.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="input-field text-lg py-4 resize-none"
                  placeholder="Workflow you'd want us to build during the seminar, your jurisdiction, any constraints on timing, or context that would help."
                />
                {errors.message && <p className="mt-2 text-base text-red-600 font-medium">{errors.message}</p>}
              </div>

              {serverErrors.length > 0 && (
                <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  <p className="font-semibold">We couldn&rsquo;t send your request:</p>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    {serverErrors.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-lg font-semibold text-white bg-navy rounded-xl hover:bg-navy-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg flex items-center justify-center gap-2"
                data-testid="seminar-submit"
              >
                {isSubmitting && (
                  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {isSubmitting ? "Sending…" : "Request the seminar"}
              </button>

              <p className="text-center text-base text-neutral-500">
                In-person · no commitment · bar-compliant by design
              </p>
            </fieldset>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
