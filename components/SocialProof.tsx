"use client";

import { motion } from "framer-motion";

const results = [
  {
    stat: "Weeks, not months",
    label: "from kickoff to handover",
    detail: "Up to three weeks of async prep + one live Mon–Fri integration sprint — no scope creep, no rolling timelines, fully remote",
    icon: "clock",
  },
  {
    stat: "12",
    label: "Claude for Legal plugins activated to your practice",
    detail: "Corporate, M&A, IP, Employment, Litigation, Tax, Privacy, AI Governance, Regulatory, Product, Law Student, Legal Clinic",
    icon: "stack",
  },
  {
    stat: "8 connectors",
    label: "into the software your firm already uses",
    detail: "iManage, NetDocuments, Clio, SharePoint, Outlook, Word, Thomson Reuters CoCounsel, DocuSign — verified on real matter data",
    icon: "plug",
  },
  {
    stat: "90 days",
    label: "of post-handoff support",
    detail: "Email support included; 30 / 60 / 90-day check-ins scheduled in your calendar on Friday afternoon",
    icon: "shield",
  },
];

const iconComponents: Record<string, React.ReactNode> = {
  clock: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  stack: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
    </svg>
  ),
  plug: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
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
            What you walk away with
          </span>
          <h2 className="text-headline text-neutral-900">
            Weeks, not months.{" "}
            <span className="font-serif italic font-normal">A working firm.</span>
          </h2>
          <p className="mt-3 text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Every engagement ends the same way — your firm operating on a configured, integrated, bar-compliant Claude for Legal, with your team trained and your runbook in hand. Up to three weeks of async prep, then one live sprint week.
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
                {iconComponents[result.icon] || iconComponents.clock}
              </div>

              <p className="text-2xl md:text-3xl font-bold text-navy tracking-tight">{result.stat}</p>
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
