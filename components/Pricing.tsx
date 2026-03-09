"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const tiers = [
  {
    name: "Starter",
    description: "Contract Change Analysis + Smart Skim — deployed into your environment in 2-4 weeks.",
    founding: "$3,500",
    standard: "$8,000",
    foundingNote: "one-time",
    includes: [
      "1-2 day workflow audit",
      "Contract Change Analysis tool",
      "Smart Skim document triage tool",
      "Integration with your document management system",
      "Team training session",
      "30 days of post-deployment support",
    ],
    highlight: false,
    phase: "Phase 1",
    timeline: "2-4 weeks",
  },
  {
    name: "Professional",
    description: "Everything in Starter, plus Deal Context Graph, Client Intelligence, and Negotiation Playbooks.",
    founding: "$12,000",
    standard: "$30,000",
    foundingNote: "one-time",
    includes: [
      "Everything in Starter",
      "Deal Context Graph — cross-document impact analysis",
      "Client Intelligence — per-client knowledge base with ethical walls",
      "Negotiation Playbooks — opposing counsel profiling",
      "Security review with your IT team",
      "Extended training for all user roles",
      "60 days of post-deployment support",
    ],
    highlight: true,
    phase: "Phase 1 + 2",
    timeline: "6-10 weeks",
  },
  {
    name: "Enterprise",
    description: "Full platform build — all tools plus M&A Closing Automation and custom workflows.",
    founding: "$28,000",
    standard: "$65,000",
    foundingNote: "one-time",
    includes: [
      "Everything in Professional",
      "M&A Closing Automation — AI-generated checklists with status tracking",
      "Custom workflow automations for your firm",
      "Priority security review and compliance documentation",
      "Dedicated onboarding for every practice group",
      "90 days of post-deployment support",
      "Quarterly check-in for first year",
    ],
    highlight: false,
    phase: "Phase 1 + 2 + 3",
    timeline: "10-16 weeks",
  },
];

export default function Pricing() {
  const [showFounding, setShowFounding] = useState(true);

  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/50 via-white to-neutral-50/30 pointer-events-none" />

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-xs font-semibold text-gold-700 uppercase tracking-wider mb-4">
            Pricing
          </span>
          <h2 className="text-headline text-neutral-900">
            One-time project fees.{" "}
            <span className="font-serif italic font-normal">No subscriptions.</span>
          </h2>
          <p className="mt-3 text-body-lg text-neutral-600 max-w-2xl mx-auto">
            We build it, deploy it, train your team, and hand it over. You own everything.
          </p>

          {/* Founding / Standard toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1 rounded-full bg-neutral-100 border border-neutral-200">
            <button
              onClick={() => setShowFounding(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                showFounding
                  ? "bg-navy text-white shadow-sm"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Founding Firm Pricing
            </button>
            <button
              onClick={() => setShowFounding(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !showFounding
                  ? "bg-navy text-white shadow-sm"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Standard Pricing
            </button>
          </div>
          {showFounding && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-sm text-gold-700 font-medium"
            >
              Limited availability — early adopter pricing for our first partner firms
            </motion.p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                tier.highlight
                  ? "bg-gradient-to-b from-[#0F2240] to-[#163052] border-2 border-gold/30 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                  : "bg-white border border-neutral-200 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/60 via-gold to-gold/60" />
              )}

              <div className="p-6 md:p-7">
                {/* Phase badge + name */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${
                      tier.highlight ? "text-gold/70" : "text-neutral-400"
                    }`}>
                      {tier.phase}
                    </span>
                    <h3 className={`text-xl font-semibold ${
                      tier.highlight ? "text-white" : "text-neutral-900"
                    }`}>
                      {tier.name}
                    </h3>
                  </div>
                  {tier.highlight && (
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-900 bg-gold rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-3xl md:text-4xl font-bold tracking-tight ${
                      tier.highlight ? "text-gold" : "text-navy"
                    }`}>
                      {showFounding ? tier.founding : tier.standard}
                    </span>
                    <span className={`text-sm ${
                      tier.highlight ? "text-neutral-300" : "text-neutral-500"
                    }`}>
                      {tier.foundingNote}
                    </span>
                  </div>
                  {showFounding && (
                    <p className={`text-xs mt-1 ${
                      tier.highlight ? "text-neutral-400" : "text-neutral-400"
                    }`}>
                      Standard: <span className="line-through">{tier.standard}</span>
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-5 ${
                  tier.highlight ? "text-neutral-300" : "text-neutral-600"
                }`}>
                  {tier.description}
                </p>

                {/* Timeline */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium mb-5 ${
                  tier.highlight
                    ? "bg-white/[0.06] border border-white/[0.1] text-neutral-200"
                    : "bg-neutral-50 border border-neutral-100 text-neutral-600"
                }`}>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {tier.timeline}
                </div>

                {/* Includes */}
                <ul className="space-y-2.5">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        tier.highlight ? "text-emerald-400" : "text-emerald-500"
                      }`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm leading-snug ${
                        tier.highlight ? "text-neutral-200" : "text-neutral-700"
                      }`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className={`mt-6 w-full py-3 rounded-xl text-sm font-semibold transition-all ${
                    tier.highlight
                      ? "bg-gold text-navy-900 hover:bg-gold-hover shadow-[0_4px_20px_rgba(212,165,116,0.3)]"
                      : "bg-navy-50 text-navy hover:bg-navy-100 border border-navy-100"
                  }`}
                >
                  Schedule a Consultation
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What's NOT included (transparency) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 p-6 md:p-8 rounded-2xl bg-neutral-50 border border-neutral-100"
        >
          <h3 className="text-sm font-semibold text-neutral-900 mb-3">What your firm handles separately</h3>
          <p className="text-sm text-neutral-600 leading-relaxed mb-4">
            Our fees cover consulting, building, training, and support. Your firm pays for the AI platform directly — this keeps your data under your control and your costs transparent.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900">Claude Team or Pro subscription</p>
                <p className="text-xs text-neutral-500 mt-0.5">$20-30/user/month — your team&apos;s access to Claude for daily work. You sign up directly with Anthropic.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900">API usage for custom tools (Phase 2+)</p>
                <p className="text-xs text-neutral-500 mt-0.5">Typically $50-500/month depending on document volume. Pay-as-you-go, billed directly by Anthropic.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
