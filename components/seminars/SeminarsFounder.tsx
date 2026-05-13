"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FounderExternalLinks, { FOUNDER_LINKS } from "@/components/FounderExternalLinks";

const credibility = [
  {
    label: "Berkeley · Cognitive Science",
    body: "Trained at the intersection of computer science and how humans actually think and make decisions — the academic foundation that separates real AI work from prompt-tinkering.",
  },
  {
    label: "8+ years building production AI",
    body: "Senior software engineer at companies including Amazon and Ring — production AI and authentication systems used by tens of millions of customers, with the kind of confidentiality and compliance pressure that lawyers will recognize.",
  },
  {
    label: "Founder · CareMAR (healthcare AI)",
    body: "Built AI software for small care homes and hospice facilities — replacing paper-based medication tracking with an AI-assisted app that non-technical owners actually use, in an industry governed by strict healthcare-privacy rules. Directly the same skillset Sidebar AI brings to law firms.",
  },
  {
    label: "Founder · Sidebar AI",
    body: "Personally configures every Claude for Legal deployment Sidebar AI ships. When you book a seminar, the engineer who would run your implementation is the one teaching on the call.",
  },
];

export default function SeminarsFounder() {
  return (
    <section className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/40 via-white to-neutral-50/40 pointer-events-none" />

      <div className="container-main relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-100 text-xs font-semibold text-navy uppercase tracking-wider mb-4">
              Who runs the seminar
            </span>
            <h2 className="text-3xl md:text-headline font-semibold text-neutral-900 tracking-tight">
              Jinwoong Lee.{" "}
              <span className="font-serif italic font-normal">Engineer first. Educator second. Vendor last.</span>
            </h2>
            <p className="mt-4 text-body-lg text-neutral-700 leading-relaxed">
              Jin trained at UC Berkeley in Cognitive Science, then spent eight-plus years building production AI and authentication systems at companies including Amazon and Ring — work used by tens of millions of customers, the kind of engineering where a quiet bug means a press cycle and a confidentiality slip ends a career. He also founded <a href="https://caremar.us" target="_blank" rel="noopener noreferrer" className="text-navy underline-offset-4 hover:underline font-medium">CareMAR (caremar.us)</a>, AI-assisted software for small care homes and hospice facilities operating under strict healthcare-privacy rules — directly the same skill Sidebar AI brings to law firms: shipping production AI that non-technical users in a regulated industry actually adopt.
            </p>
            <p className="mt-4 text-body text-neutral-600 leading-relaxed">
              The reason this matters for your firm: most AI seminars in your inbox are run by ex-marketers, ex-recruiters, or coaches who took a six-week prompt course. They&apos;ve never shipped AI in front of paying customers, never debugged a production confidentiality incident in a regulated industry, never sat across from compliance counsel about a real deployment. Jin has — at Amazon, at Ring, and at CareMAR. When your firm books a seminar, Jin is the one on the call — not a sales lead, not a junior associate, not a polished slide-deck presenter.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {credibility.map((c, idx) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-subtle"
                >
                  <p className="text-[10px] font-mono font-bold uppercase tracking-[0.12em] text-navy mb-2">
                    {c.label}
                  </p>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {c.body}
                  </p>
                </motion.div>
              ))}
            </div>

            <FounderExternalLinks links={FOUNDER_LINKS} className="mt-8" />
          </motion.div>

          {/* Right — portrait card */}
          <motion.aside
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start"
          >
            <div className="relative">
              {/* Bracket corners */}
              <span aria-hidden="true" className="absolute -left-3 -top-3 z-10 h-8 w-8 border-l-2 border-t-2 border-navy" />
              <span aria-hidden="true" className="absolute -bottom-3 -right-3 z-10 h-8 w-8 border-b-2 border-r-2 border-gold" />

              <div className="relative rounded-2xl bg-white border border-neutral-200 shadow-elevated overflow-hidden">
                <div className="relative aspect-[4/5] bg-neutral-100">
                  <Image
                    src="/images/founder-jinwoong-lee.jpg"
                    alt="Portrait of Jinwoong Lee, founder of Sidebar AI"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                    priority
                    quality={88}
                  />
                </div>
                <div className="px-6 py-4 border-t border-neutral-100 bg-neutral-50/60">
                  <p className="text-sm font-semibold text-neutral-900">Jinwoong Lee</p>
                  <p className="text-xs text-neutral-600">Founder · Sidebar AI</p>
                  <p className="text-xs text-neutral-500 mt-2 italic">
                    &ldquo;If your firm wouldn&apos;t want me on the engagement, the seminar isn&apos;t the right call. We&apos;ll be honest about that on the call.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
