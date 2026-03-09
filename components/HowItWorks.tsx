"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Map",
    description:
      "We spend 1-2 days with your team mapping how documents move through your firm — contract review, due diligence, closings. We identify where AI creates the biggest impact.",
    detail: "1-2 day workflow audit",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: "Build",
    description:
      "We build your AI tools and connect them to iManage, Clio, or NetDocuments. Every output runs through our verification pipeline before it reaches an attorney.",
    detail: "Custom tools + software integration",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
      </svg>
    ),
  },
  {
    title: "Deploy & Hand Off",
    description:
      "We deploy into your environment, walk every role through their tools, and hand over complete documentation. Your team runs it independently.",
    detail: "Hands-on training + 30-day support",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
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
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-headline font-semibold text-white tracking-tight">
            How we get your firm{" "}
            <span className="font-serif italic font-normal text-gold">up and running</span>
          </h2>
          <p className="mt-3 text-body-lg text-neutral-300">
            A simple three-step process. Most firms are live within 2-4 weeks.
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
