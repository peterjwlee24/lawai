"use client";

import { motion } from "framer-motion";
import { useState, useEffect, FormEvent } from "react";
import type { SelectOption } from "@/data/industries";
import {
  submitInquiry,
  FIRM_SIZE_OPTIONS,
  PRACTICE_AREA_OPTIONS,
  type InquiryType,
  type FirmSize,
  type PracticeArea,
} from "@/lib/inquiry";

interface FormData {
  inquiryType: InquiryType;
  fullName: string;
  email: string;
  firmName: string;
  phoneNumber: string;
  firmSize: FirmSize | "";
  practiceArea: PracticeArea | "";
  message: string;
  // Honeypot — must always be controlled with empty default.
  company: string;
}

interface ContactFormProps {
  sizeOptions?: SelectOption[];
  specialtyOptions?: SelectOption[];
  specialtyLabel?: string;
  clientNoun?: string;
}

export default function ContactForm({
  specialtyLabel = "Primary practice area",
  clientNoun = "firm",
}: ContactFormProps) {
  // Always-controlled defaults to avoid the controlled/uncontrolled flip
  // bug that hit aicollegeprep before commit 864cb4d.
  const [formData, setFormData] = useState<FormData>({
    inquiryType: "consultation",
    fullName: "",
    email: "",
    firmName: "",
    phoneNumber: "",
    firmSize: "",
    practiceArea: "",
    message: "",
    company: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [serverErrors, setServerErrors] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        setShowStickyButton(window.scrollY > 400 && rect.top > window.innerHeight);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Your full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.firmName.trim()) newErrors.firmName = "Firm name is required";
    if (formData.inquiryType === "implementation-sprint") {
      if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = "Phone number is required for sprint inquiries";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setServerErrors([]);
    if (!validate()) return;
    setIsSubmitting(true);

    const result = await submitInquiry({
      inquiryType: formData.inquiryType,
      fullName: formData.fullName,
      email: formData.email,
      firmName: formData.firmName,
      phoneNumber: formData.phoneNumber || undefined,
      firmSize: formData.firmSize || undefined,
      practiceArea: formData.practiceArea || undefined,
      message: formData.message || undefined,
      company: formData.company,
    });

    setIsSubmitting(false);

    if (result.ok) {
      setInquiryId(result.inquiryId);
      setIsSubmitted(true);
    } else {
      setServerErrors(result.errors);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,165,116,0.15),transparent_50%)]" />
        <div className="container-main relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center py-16 px-8 bg-white rounded-3xl shadow-2xl"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-success rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
              We&apos;ve got your request.
            </h3>
            <p className="text-lg text-neutral-600 mb-3">
              We&apos;ll respond within one business day to schedule the live initial consultation call.
            </p>
            {inquiryId && (
              <p className="text-xs text-neutral-400 mb-8">
                Reference: <code className="font-mono">{inquiryId}</code>
              </p>
            )}
            <button
              onClick={() => {
                setIsSubmitted(false);
                setInquiryId("");
                setFormData({
                  inquiryType: "consultation",
                  fullName: "",
                  email: "",
                  firmName: "",
                  phoneNumber: "",
                  firmSize: "",
                  practiceArea: "",
                  message: "",
                  company: "",
                });
              }}
              className="px-6 py-3 text-base font-medium text-neutral-700 bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-colors"
            >
              Submit another inquiry
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const selectClasses =
    "input-field text-lg py-4 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%23737373%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5rem_1.5rem] bg-[right_1rem_center] bg-no-repeat pr-12";

  return (
    <>
      {showStickyButton && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.15 }}
          onClick={scrollToContact}
          className="fixed bottom-6 right-6 z-40 px-5 py-3 bg-navy text-white text-sm font-medium rounded-full shadow-lg hover:bg-navy-900 hover:shadow-xl transition-all duration-150 flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Book a consultation
        </motion.button>
      )}

      <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,165,116,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,165,116,0.1),transparent_50%)]" />

        <div className="container-main relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-base font-medium mb-6">
                Book the initial consultation
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                Twenty minutes.{" "}
                <span className="font-serif italic font-normal">A straight answer.</span>
              </h2>
              <p className="text-xl text-neutral-300 mb-6 leading-relaxed">
                This isn&apos;t a sales pitch. We&apos;ll meet your team live over a screen-share, walk one of your highest-volume workflows together, and tell you straight whether the Claude for Legal implementation engagement is the right move — or not yet.
              </p>

              <div className="flex items-center gap-3 mb-10 px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <span className="relative flex h-3 w-3 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
                </span>
                <span className="text-base text-amber-200 font-medium">
                  Limited sprint capacity through the next quarter
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base text-neutral-300">Live, remote — no travel required</p>
                    <p className="text-lg font-medium text-white">Scheduled on your calendar, real human time</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base text-neutral-300">Response time</p>
                    <p className="text-lg font-medium text-white">Within one business day</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side — Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              onSubmit={handleSubmit}
              noValidate
              className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl"
              data-testid="consultation-form"
            >
              <h3 className="text-2xl font-semibold text-neutral-900 mb-2">Book an initial consultation</h3>
              <p className="text-base text-neutral-600 mb-8">In-person · twenty minutes · we&apos;ll tell you straight whether a sprint fits your {clientNoun} right now.</p>

              {/* Honeypot — hidden from humans */}
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                aria-hidden="true"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
                data-testid="honeypot"
              />

              <fieldset className="space-y-5" disabled={isSubmitting}>
                <div>
                  <label htmlFor="inquiryType" className="block text-base font-medium text-neutral-800 mb-2">I&apos;m asking about</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className={selectClasses}
                  >
                    <option value="consultation">An initial consultation</option>
                    <option value="implementation-sprint">The Claude for Legal implementation engagement</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="fullName" className="block text-base font-medium text-neutral-800 mb-2">Your name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`input-field text-lg py-4 ${errors.fullName ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`}
                    placeholder="Margaret Chen"
                  />
                  {errors.fullName && <p className="mt-2 text-base text-red-600 font-medium">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-base font-medium text-neutral-800 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input-field text-lg py-4 ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`}
                    placeholder="mchen@example-firm.com"
                  />
                  {errors.email && <p className="mt-2 text-base text-red-600 font-medium">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="firmName" className="block text-base font-medium text-neutral-800 mb-2">Firm name *</label>
                  <input
                    type="text"
                    id="firmName"
                    name="firmName"
                    autoComplete="organization"
                    value={formData.firmName}
                    onChange={handleChange}
                    className={`input-field text-lg py-4 ${errors.firmName ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`}
                    placeholder="Chen Estate Planning LLP"
                  />
                  {errors.firmName && <p className="mt-2 text-base text-red-600 font-medium">{errors.firmName}</p>}
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-base font-medium text-neutral-800 mb-2">
                    Phone {formData.inquiryType === "implementation-sprint" ? "*" : "(optional)"}
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    autoComplete="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`input-field text-lg py-4 ${errors.phoneNumber ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`}
                    placeholder="+1 (312) 555-0142"
                  />
                  {errors.phoneNumber && <p className="mt-2 text-base text-red-600 font-medium">{errors.phoneNumber}</p>}
                </div>

                <div>
                  <label htmlFor="firmSize" className="block text-base font-medium text-neutral-800 mb-2">Firm size</label>
                  <select id="firmSize" name="firmSize" value={formData.firmSize} onChange={handleChange} className={selectClasses}>
                    {FIRM_SIZE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="practiceArea" className="block text-base font-medium text-neutral-800 mb-2">{specialtyLabel}</label>
                  <select id="practiceArea" name="practiceArea" value={formData.practiceArea} onChange={handleChange} className={selectClasses}>
                    {PRACTICE_AREA_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-medium text-neutral-800 mb-2">
                    Anything we should know? <span className="text-neutral-500 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    maxLength={2000}
                    value={formData.message}
                    onChange={handleChange}
                    className="input-field text-lg py-4 resize-none"
                    placeholder="The workflows eating the most partner time, your current stack, or anything else useful for the consultation."
                  />
                </div>

                {serverErrors.length > 0 && (
                  <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    <p className="font-semibold">We couldn&rsquo;t send your inquiry:</p>
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
                  data-testid="consultation-submit"
                >
                  {isSubmitting && (
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  )}
                  {isSubmitting ? "Sending…" : "Book the consultation"}
                </button>

                <p className="text-center text-base text-neutral-500">
                  In-person · no commitment · bar-compliant by design
                </p>
              </fieldset>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}
