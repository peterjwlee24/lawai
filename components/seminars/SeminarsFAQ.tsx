"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SEMINARS_FAQ_ITEMS } from "@/lib/seminars-faq";

const faqItems = SEMINARS_FAQ_ITEMS;

export default function SeminarsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/40 to-white pointer-events-none" />

      <div className="container-main relative">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-headline font-semibold text-neutral-900 tracking-tight">
              The questions managing partners{" "}
              <span className="font-serif italic font-normal">actually ask.</span>
            </h2>
            <p className="mt-4 text-body text-neutral-600 leading-relaxed">
              We&apos;ll answer the rest in the twenty-minute intake call after you submit a request.
            </p>
            <p className="mt-6 text-body text-neutral-500">
              Still have questions?{" "}
              <button
                onClick={() => document.getElementById("seminar-inquiry")?.scrollIntoView({ behavior: "smooth" })}
                className="text-navy hover:text-navy-900 font-medium"
              >
                Send us the question
              </button>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="divide-y divide-neutral-200">
              {faqItems.map((faq, index) => (
                <div key={faq.question}>
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <span className="text-body-lg font-medium text-neutral-900 pr-4 group-hover:text-navy transition-colors">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <svg className="w-5 h-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-body text-neutral-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

