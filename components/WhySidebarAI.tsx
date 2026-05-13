"use client";

import { motion } from "framer-motion";

const comparisons = [
  {
    challenge: "Why not just set this up ourselves?",
    description:
      "You can. In practice, no boutique firm has the time. Anthropic's own General Counsel said on launch day that the new legal tools are at their best when customized with the firm's own playbooks. We've done that for other firms — we do it in a week, so your partners stay billable.",
    stat: "5 days",
    statLabel: "Mon → Fri, working firm",
    color: "from-navy/10 to-navy/5",
    borderColor: "border-navy-200/50",
    accentColor: "text-navy",
    iconBg: "bg-navy-50",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    challenge: "What about bar ethics and confidentiality?",
    description:
      "Every deployment is built to ABA Model Rules 1.1, 1.6, and 5.3 — and your state's bar rules. Matter-by-matter access controls, ethical walls enforced inside the integration itself, a confidentiality posture review, and a usage policy template your malpractice carrier can sign off on. Claude does not train on your data — Anthropic guarantees that, not us.",
    stat: "ABA 1.1 · 1.6 · 5.3",
    statLabel: "mapped, documented, enforced",
    color: "from-emerald-500/10 to-emerald-500/5",
    borderColor: "border-emerald-200/50",
    accentColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    challenge: "Why not Harvey or Legora?",
    description:
      "Harvey and Legora are great products — built for AmLaw 200 firms with dedicated innovation teams and five-figure monthly contracts. Boutique firms get more value from Anthropic's native Claude for Legal customized to their playbook, at a fraction of the cost. If your firm grows past 30 attorneys, we'll help you migrate.",
    stat: "Boutique-fit",
    statLabel: "2–20 attorneys, partner-discretionary",
    color: "from-amber-500/10 to-amber-500/5",
    borderColor: "border-amber-200/50",
    accentColor: "text-amber-600",
    iconBg: "bg-amber-50",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
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
            The objections, answered
          </span>
          <h2 className="text-headline text-neutral-900">
            What every managing partner asks{" "}
            <span className="font-serif italic font-normal">before they pick up the phone.</span>
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
                <span className={`text-lg font-bold ${item.accentColor}`}>{item.stat}</span>
                <span className="text-xs text-neutral-500">{item.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
