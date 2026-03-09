"use client";

import { motion } from "framer-motion";

const results = [
  { stat: "2-4 wks", label: "Phase 1 deployment", detail: "Contract analysis and Smart Skim live in your environment within weeks", icon: "clock" },
  { stat: "80%+", label: "faster first-pass review", detail: "Contract change analysis drops from hours of manual review to minutes with full risk explanations", icon: "bolt" },
  { stat: "100+ pg", label: "contracts triaged in minutes", detail: "Smart Skim reads the full document and tells your team which 20% of pages need attention", icon: "doc" },
  { stat: "0", label: "hallucinations shipped", detail: "Multi-pass verification, mandatory citations, and uncertainty flags on every output", icon: "shield" },
];

const iconComponents: Record<string, React.ReactNode> = {
  clock: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  bolt: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  doc: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
};

interface SocialProofProps {
  clientNoun?: string;
  isHub?: boolean;
}

export default function SocialProof(_props?: SocialProofProps) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/50 to-white pointer-events-none" />

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-4">
            What To Expect
          </span>
          <h2 className="text-headline text-neutral-900">
            The impact on{" "}
            <span className="font-serif italic font-normal">your firm</span>
          </h2>
          <p className="mt-3 text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Here&apos;s what law firms gain when they put these systems in place.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 rounded-2xl bg-white border border-neutral-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy-50 text-navy mb-4 group-hover:scale-110 transition-transform duration-300">
                {iconComponents[result.icon] || iconComponents.bolt}
              </div>

              <p className="text-3xl md:text-4xl font-bold text-navy tracking-tight">{result.stat}</p>
              <p className="mt-1.5 text-sm font-semibold text-neutral-800">{result.label}</p>
              <p className="mt-2 text-xs text-neutral-600 leading-relaxed">{result.detail}</p>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
