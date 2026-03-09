"use client";

import { motion } from "framer-motion";

const comparisons = [
  {
    challenge: "Already using Harvey?",
    description:
      "Harvey handles research and drafting. We build what Harvey doesn't — per-client knowledge bases, opposing counsel profiling, cross-document deal mapping, and AI-powered change analysis. Firms use both.",
    stat: "Complementary",
    statLabel: "not competitive",
    color: "from-navy/10 to-navy/5",
    borderColor: "border-navy-200/50",
    accentColor: "text-navy",
    iconBg: "bg-navy-50",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    challenge: "Worried about AI hallucination?",
    description:
      "Generic AI tools guess. Our multi-pass pipeline verifies every output against source documents — mandatory citations, number verification, and uncertainty flags. Nothing reaches an attorney unverified.",
    stat: "0",
    statLabel: "unverified outputs",
    color: "from-rose-500/10 to-rose-500/5",
    borderColor: "border-rose-200/50",
    accentColor: "text-rose-500",
    iconBg: "bg-rose-50",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    challenge: "Your software has \"AI features\"?",
    description:
      "iManage Insight finds documents. Clio has drafting helpers. Neither reads 100-page contracts and tells your team which pages matter. Neither maps how a term change in the purchase agreement affects every related document. That's what we build.",
    stat: "10x",
    statLabel: "beyond built-in AI",
    color: "from-amber-500/10 to-amber-500/5",
    borderColor: "border-amber-200/50",
    accentColor: "text-amber-600",
    iconBg: "bg-amber-50",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

interface WhySidebarAIProps {
  clientNoun?: string;
  brandName?: string;
}

export default function WhySidebarAI(_props?: WhySidebarAIProps) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/30 to-white pointer-events-none" />

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-100 text-xs font-semibold text-navy uppercase tracking-wider mb-4">
            Why Sidebar AI
          </span>
          <h2 className="text-headline text-neutral-900">
            Your firm has options.{" "}
            <span className="font-serif italic font-normal">Here&apos;s why they choose us.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {comparisons.map((item, index) => (
            <motion.div
              key={item.challenge}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-2xl bg-gradient-to-b ${item.color} border ${item.borderColor} hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden`}
            >
              <div className="p-6 md:p-7">
                <div className={`w-11 h-11 rounded-xl ${item.iconBg} ${item.accentColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {item.challenge}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="px-6 md:px-7 py-4 bg-white/60 border-t border-neutral-100/80 flex items-center gap-2">
                <span className={`text-xl font-bold ${item.accentColor}`}>{item.stat}</span>
                <span className="text-xs text-neutral-500">{item.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
