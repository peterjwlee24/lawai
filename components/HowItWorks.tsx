"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Initial Consultation",
    description:
      "A live twenty-minute call with your managing partner and operations lead to understand your matter playbook, the systems you use today, and the workflows that eat the most partner and associate time. No slide deck — just a working conversation. Fully remote, scheduled on your calendar.",
    detail: "Live remote call · 20 minutes · scope captured the same day",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    title: "Async Prep Phase",
    description:
      "All the work that doesn't need your partners' calendars happens here, async — typically completes in two to three weeks; simpler stacks finish faster. Three things in sequence: discovery (intake form, screen-recorded workflow walkthroughs, system inventory) → build (custom integration code, workflows authored to your playbook, bar-compliant usage policy drafted) → prep (training videos recorded on your tenant, policy reviewed by your carrier, final scope confirmed).",
    detail: "Up to three weeks · async-first · no calendar pile-up on partners",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Live Integration Sprint",
    description:
      "Once prep is complete, we lock a single Mon–Fri sprint on your calendar — senior engineer on the call every day. Monday: kickoff and integration go-live. Tuesday–Thursday: connections wired, workflows deployed, everything tested against your real matter data. Friday: two live training sessions (attorneys, then staff), written runbook handed over, 30/60/90-day check-ins booked. Your firm runs independently from the following Monday.",
    detail: "Mon–Fri live · senior engineer on every call · once prep is complete",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

interface HowItWorksProps {
  clientNoun?: string;
  isHub?: boolean;
}

export default function HowItWorks(_props?: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#0F2240]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#132D54]/80 via-[#163052] to-[#0F2240]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(212,165,116,0.06),transparent)] pointer-events-none" />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-semibold text-gold/90 uppercase tracking-[0.15em] mb-4">
            How a sprint runs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-headline font-semibold text-white tracking-tight">
            From a live call{" "}
            <span className="font-serif italic font-normal text-gold">to a working firm — weeks, not months.</span>
          </h2>
          <p className="mt-3 text-body-lg text-neutral-300 max-w-2xl mx-auto">
            Up to three weeks of async prep so your partners aren&apos;t hosting consultants — often less. Then one live Mon–Fri integration sprint to put everything into your firm. A configured, integrated, bar-compliant Claude for Legal deployment your team owns.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-white/10 via-gold/20 to-white/10" />
              )}

              <div className="relative h-full flex flex-col p-6 md:p-8 rounded-2xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.14] transition-all duration-500 text-center">
                {/* Step number + icon */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center text-gold group-hover:scale-105 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold text-navy-900 text-xs font-bold flex items-center justify-center shadow-[0_4px_12px_rgba(212,165,116,0.3)]">
                    {index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-200 leading-relaxed flex-1">
                  {step.description}
                </p>
                {step.detail && (
                  <span className="inline-flex items-center mt-5 px-4 py-2 rounded-lg bg-white/[0.06] border border-white/[0.1] text-xs font-semibold text-gold">
                    {step.detail}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
