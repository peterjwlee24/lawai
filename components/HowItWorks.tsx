"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Initial Consultation",
    description:
      "A live working call with your team to understand your matter playbook, the systems you use today, and the workflows that eat the most partner and associate time. No slide deck — just a working conversation. Fully remote, live with a senior engineer, scheduled on your calendar.",
    detail: "Live remote call · scope captured the same day",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    title: "Five-Day Build",
    description:
      "Monday discovery · Tuesday foundation · Wednesday integration · Thursday customization · Friday training. By Friday afternoon your firm has Claude for Legal configured to your matter playbook, wired into your DMS, and a written runbook in your hands.",
    detail: "Monday → Friday · five days",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: "Live Handover",
    description:
      "Two live training sessions on Friday — one for attorneys, one for staff. Every team member finishes the call knowing exactly what to do, with a written runbook in their inbox, a usage dashboard bookmarked, and 90 days of email support. Your firm runs it independently from week two.",
    detail: "Live handoff · 30/60/90-day check-ins",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
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
            <span className="font-serif italic font-normal text-gold">to a working firm in a week.</span>
          </h2>
          <p className="mt-3 text-body-lg text-neutral-300 max-w-2xl mx-auto">
            One live consultation. Five business days. A configured, integrated, bar-compliant Claude for Legal deployment your team owns. Fully remote — never async, always with a senior engineer on the call.
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
