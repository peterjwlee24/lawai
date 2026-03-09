"use client";

import { motion } from "framer-motion";
import { useState, useEffect, FormEvent } from "react";
import type { SelectOption } from "@/data/industries";

interface FormData {
  name: string;
  email: string;
  firmName: string;
  firmSize: string;
  practiceArea: string;
  message: string;
}

interface ContactFormProps {
  sizeOptions?: SelectOption[];
  specialtyOptions?: SelectOption[];
  specialtyLabel?: string;
  clientNoun?: string;
}

export default function ContactForm({
  sizeOptions: propSizeOptions,
  specialtyOptions: propSpecialtyOptions,
  specialtyLabel = "Practice Area",
  clientNoun = "firm",
}: ContactFormProps) {
  const sizeOptions = propSizeOptions || defaultSizeOptions;
  const specialtyOptions = propSpecialtyOptions || defaultSpecialtyOptions;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    firmName: "",
    firmSize: "",
    practiceArea: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.firmName.trim()) newErrors.firmName = `${clientNoun.charAt(0).toUpperCase() + clientNoun.slice(1)} name is required`;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
              Thank you!
            </h3>
            <p className="text-lg text-neutral-600 mb-8">
              We&apos;ll be in touch within 24 hours to schedule your consultation.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: "", email: "", firmName: "", firmSize: "", practiceArea: "", message: "" });
              }}
              className="px-6 py-3 text-base font-medium text-neutral-700 bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-colors"
            >
              Send Another Message
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

  const nounCapitalized = clientNoun.charAt(0).toUpperCase() + clientNoun.slice(1);

  return (
    <>
      {showStickyButton && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.15 }}
          onClick={scrollToContact}
          className="fixed bottom-6 right-6 z-50 px-5 py-3 bg-navy text-white text-sm font-medium rounded-full shadow-lg hover:bg-navy-900 hover:shadow-xl transition-all duration-150 flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Contact Us
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
                Let&apos;s Talk
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                Ready to modernize{" "}
                <span className="font-serif italic font-normal">your {clientNoun}?</span>
              </h2>
              <p className="text-xl text-neutral-300 mb-6 leading-relaxed">
                Schedule a free consultation to see how AI can save your team hours every week.
              </p>

              <div className="flex items-center gap-3 mb-10 px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <span className="relative flex h-3 w-3 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
                </span>
                <span className="text-base text-amber-200 font-medium">
                  Limited availability this quarter
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base text-neutral-300">Email</p>
                    <a href="mailto:hello@blueprintaihq.com" className="text-lg font-medium text-white hover:text-gold transition-colors">
                      hello@blueprintaihq.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base text-neutral-300">Response Time</p>
                    <p className="text-lg font-medium text-white">Within 24 hours</p>
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
              className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-neutral-900 mb-2">Schedule a Consultation</h3>
              <p className="text-base text-neutral-600 mb-8">Free 30-minute assessment of your {clientNoun}&apos;s AI opportunities.</p>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-base font-medium text-neutral-800 mb-2">Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`input-field text-lg py-4 ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`} placeholder="Your full name" />
                  {errors.name && <p className="mt-2 text-base text-red-600 font-medium">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-base font-medium text-neutral-800 mb-2">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`input-field text-lg py-4 ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`} placeholder="you@yourbusiness.com" />
                  {errors.email && <p className="mt-2 text-base text-red-600 font-medium">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="firmName" className="block text-base font-medium text-neutral-800 mb-2">{nounCapitalized} Name *</label>
                  <input type="text" id="firmName" name="firmName" value={formData.firmName} onChange={handleChange} className={`input-field text-lg py-4 ${errors.firmName ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`} placeholder={`Your ${clientNoun}'s name`} />
                  {errors.firmName && <p className="mt-2 text-base text-red-600 font-medium">{errors.firmName}</p>}
                </div>

                <div>
                  <label htmlFor="firmSize" className="block text-base font-medium text-neutral-800 mb-2">{nounCapitalized} Size</label>
                  <select id="firmSize" name="firmSize" value={formData.firmSize} onChange={handleChange} className={selectClasses}>
                    {sizeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="practiceArea" className="block text-base font-medium text-neutral-800 mb-2">{specialtyLabel}</label>
                  <select id="practiceArea" name="practiceArea" value={formData.practiceArea} onChange={handleChange} className={selectClasses}>
                    {specialtyOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-medium text-neutral-800 mb-2">Message <span className="text-neutral-500 font-normal">(optional)</span></label>
                  <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange} className="input-field text-lg py-4 resize-none" placeholder={`Tell us about your ${clientNoun}'s biggest operational challenges...`} />
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full py-4 text-lg font-semibold text-white bg-navy rounded-xl hover:bg-navy-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg flex items-center justify-center gap-2">
                  {isSubmitting && (
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  )}
                  {isSubmitting ? "Sending..." : "Schedule Consultation"}
                </button>

                <p className="text-center text-base text-neutral-500">
                  Free consultation · No commitment · No data access
                </p>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}

const defaultSizeOptions: SelectOption[] = [
  { value: "", label: "Select firm size" },
  { value: "solo", label: "Solo Practitioner" },
  { value: "small", label: "Small (2-10)" },
  { value: "medium", label: "Medium (11-50)" },
  { value: "large", label: "Large (50+)" },
];

const defaultSpecialtyOptions: SelectOption[] = [
  { value: "", label: "Select practice area (optional)" },
  { value: "general", label: "General Practice" },
  { value: "other", label: "Other" },
];
