"use client";

import { motion } from "framer-motion";

const defaultResults = [
  { stat: "2-4 wks", label: "to full setup", detail: "From first audit to complete handoff with prompt templates and documentation", icon: "clock" },
  { stat: "96%", label: "faster intake", detail: "Client intake drops from 45 min to 2 min with ready-made Claude prompts", icon: "bolt" },
  { stat: "$50K+", label: "revenue at risk", detail: "Per lawyer per year from billing delays alone — recoverable with AI prompts", icon: "dollar" },
  { stat: "0", label: "ongoing dependency", detail: "We hand off everything — your team runs Claude and Zoom AI on their own", icon: "key" },
];

const hubResults = [
  { stat: "2-4 wks", label: "to full setup", detail: "From first audit to a complete AI toolkit your team uses daily", icon: "clock" },
  { stat: "85-96%", label: "time saved per task", detail: "Tasks that took 30-60 minutes drop to 2-5 minutes with custom AI commands", icon: "bolt" },
  { stat: "20+", label: "AI tools per business", detail: "Custom commands, templates, and connections built for your specific workflows", icon: "tools" },
  { stat: "0", label: "ongoing dependency", detail: "We hand off everything — your team runs it all independently", icon: "key" },
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
  dollar: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  tools: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
    </svg>
  ),
  key: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
    </svg>
  ),
};

interface SocialProofProps {
  clientNoun?: string;
  isHub?: boolean;
}

export default function SocialProof({ clientNoun = "firm", isHub = false }: SocialProofProps) {
  const results = isHub ? hubResults : defaultResults;
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
            <span className="font-serif italic font-normal">your {clientNoun}</span>
          </h2>
          <p className="mt-3 text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Here&apos;s what businesses gain when they put these systems in place.
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
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy-50 text-navy mb-4 group-hover:scale-110 transition-transform duration-300">
                {iconComponents[result.icon] || iconComponents.bolt}
              </div>

              <p className="text-3xl md:text-4xl font-bold text-navy tracking-tight">{result.stat}</p>
              <p className="mt-1.5 text-sm font-semibold text-neutral-800">{result.label}</p>
              <p className="mt-2 text-xs text-neutral-600 leading-relaxed">{result.detail}</p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
