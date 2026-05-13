"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* Re-anchors the value prop after the long scroll. Sits just above FAQ on
 * the home page. Designed as a single, scannable "What we sell, in one
 * paragraph" callout so a partner who's been reading for 90 seconds can be
 * reminded of the offer before they hit objection-handling content.        */

export default function ValuePropReanchor() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/40 to-white pointer-events-none" />
      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-12 gap-8 items-center p-7 md:p-10 rounded-2xl bg-white border border-neutral-200/80 shadow-elevated">
            <div className="md:col-span-8">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.12em] text-amber-700 mb-3 block">
                What we sell, in one paragraph
              </span>
              <p className="text-xl md:text-2xl font-serif font-normal text-neutral-900 leading-snug">
                A two-phase engagement — up to three weeks of async prep + one live Mon–Fri integration sprint with a senior engineer — that turns Anthropic&apos;s Claude for Legal into your firm&apos;s working operating system. Configured to your matter playbook, securely wired into the software you already use, mapped to your bar&apos;s rules,{" "}
                <span className="font-serif italic text-navy">and handed over with everything documented.</span>
              </p>
              <p className="mt-5 text-sm text-neutral-600 leading-relaxed">
                One twenty-minute live consultation tells you whether a sprint fits your firm right now. If it doesn&apos;t, we&apos;ll tell you straight what to do instead.
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="flex md:flex-col gap-3">
                <Link
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-navy rounded-xl hover:bg-navy-900 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Book the consultation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/sprint"
                  className="flex-1 inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-navy bg-navy-50 border border-navy-100 rounded-xl hover:bg-navy-100 transition-all"
                >
                  See sprint detail
                </Link>
              </div>
              <p className="mt-3 text-xs text-neutral-500 text-center md:text-left">
                No commitment · Bar-compliant by design · Built for boutique firms
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
