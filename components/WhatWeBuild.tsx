"use client";

import { motion } from "framer-motion";

const phase1 = [
  {
    number: "01",
    title: "Contract Change Analysis",
    subtitle: "AI explains why each change matters — not just what changed.",
    description:
      "Other tools detect redlines. We explain the risk direction, exposure impact, and draft pushback language for every change. Your attorneys get a plain-English brief on what shifted, why it matters, and what to push back on — before they read a single page.",
    example: {
      label: "What you see",
      content: "\"§4.2 Indemnification — Liability cap removed. Previous draft capped at 2x contract value. Exposure now unlimited. Suggested response: reinstate cap or propose mutual carve-outs for gross negligence.\"",
    },
    color: "navy" as const,
  },
  {
    number: "02",
    title: "Smart Skim",
    subtitle: "AI reads 100+ pages and tells your team which sections need attention.",
    description:
      "Standard tools don't tell you which pages to read first. AI reads the full document and marks each section: red (needs careful review), yellow (non-standard language), or green (standard boilerplate — skim). Your attorneys focus on the 20% of pages that actually matter.",
    example: {
      label: "What you see",
      content: "\"§7.1 Termination (RED) — Non-standard cure period. §12.4 Governing Law (GREEN) — Standard Delaware choice of law. §9.2 Non-Compete (YELLOW) — Broader geographic scope than typical.\"",
    },
    color: "gold" as const,
  },
];

const phase2 = [
  {
    number: "03",
    title: "Deal Context Graph",
    subtitle: "Maps cross-document relationships across your entire deal.",
    description:
      "When a defined term changes in the purchase agreement, the system flags every related document affected — transition services agreement, escrow agreement, IP license, employment agreements. Tracks dependencies across the full deal that no manual review catches.",
    example: {
      label: "What you see",
      content: "\"'Material Adverse Effect' definition changed in Purchase Agreement §1.1 → Impacts: Escrow Agreement §3.2, Transition Services Agreement §5.1(b), IP License §2.4. 3 documents need updates.\"",
    },
    note: "Includes a one-time security review with your firm's IT team (typically 1-3 weeks)",
    color: "navy" as const,
  },
  {
    number: "04",
    title: "Client Intelligence",
    subtitle: "Per-client knowledge with ethical wall isolation.",
    description:
      "We build per-client knowledge bases — past arguments, negotiation positions, opposing counsel history — with strict ethical wall enforcement. Each client's context stays sealed from every other. Your attorneys walk into every meeting with complete background.",
    example: {
      label: "What you see",
      content: "\"Acme Corp — 12 past matters, prefers arbitration over litigation, last 3 deals included accelerated payment terms. Opposing counsel (Baker & Sterling) typically concedes on indemnity caps.\"",
    },
    note: "Includes a one-time security review with your firm's IT team (typically 1-3 weeks)",
    color: "gold" as const,
  },
  {
    number: "05",
    title: "Negotiation Playbooks",
    subtitle: "AI learns how opposing counsel negotiates — before your next round.",
    description:
      "AI analyzes how opposing counsel has negotiated across past deals — their patterns, concessions, holdouts, and typical negotiation timeline. Generates a deal-specific strategy with predicted pushback points before your team sits down.",
    example: {
      label: "What you see",
      content: "\"Baker & Sterling: Avg 4 rounds. Typically concedes on representations, holds firm on indemnity. Pattern: aggressive initial position, significant movement in round 3.\"",
    },
    note: "Includes a one-time security review with your firm's IT team (typically 1-3 weeks)",
    color: "navy" as const,
  },
  {
    number: "06",
    title: "M&A Closing Automation",
    subtitle: "AI reads the purchase agreement and generates the complete closing checklist.",
    description:
      "AI extracts every closing condition, deliverable, and required signature from the purchase agreement. Tracks what's done, what's missing, and who needs to act. Current tools are manual checklists — this is AI-generated and continuously updated.",
    example: {
      label: "What you see",
      content: "\"12/18 conditions satisfied. Missing: antitrust approval (Buyer), landlord consents for 3 leases (Seller), employment agreements for 2 key employees (Target). Next deadline: Jan 15.\"",
    },
    note: "Includes a one-time security review with your firm's IT team (typically 1-3 weeks)",
    color: "gold" as const,
  },
];

const colorMap = {
  navy: {
    badge: "bg-navy-50 border-navy-100 text-navy",
    number: "text-navy",
    accent: "bg-navy-50 border-navy-100",
    dot: "bg-navy",
  },
  gold: {
    badge: "bg-gold-50 border-gold-100 text-gold-700",
    number: "text-gold-700",
    accent: "bg-gold-50 border-gold-100",
    dot: "bg-gold",
  },
};

function DeliverableCard({ item, index, badgeText }: { item: typeof phase1[0] & { note?: string }; index: number; badgeText: string }) {
  const colors = colorMap[item.color];
  return (
    <motion.div
      key={item.number}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
    >
      <div className="h-full p-7 md:p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-subtle hover:shadow-elevated transition-all duration-500">
        <div className="flex items-start justify-between mb-5">
          <span className={`text-3xl font-bold ${colors.number} opacity-30 font-mono`}>
            {item.number}
          </span>
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full border text-[10px] font-semibold uppercase tracking-wider ${colors.badge}`}>
            {badgeText}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-neutral-900 mb-1">
          {item.title}
        </h3>
        <p className="text-sm font-medium text-navy mb-3">
          {item.subtitle}
        </p>
        <p className="text-sm text-neutral-600 leading-relaxed mb-5">
          {item.description}
        </p>

        <div className={`p-4 rounded-xl ${colors.accent} border`}>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 block mb-1.5">
            {item.example.label}
          </span>
          <p className="text-sm text-neutral-700 leading-relaxed">
            {item.example.content}
          </p>
        </div>

        {item.note && (
          <p className="mt-4 text-xs text-neutral-400 italic">
            {item.note}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function WhatWeBuild() {
  return (
    <section id="what-we-build" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/50 to-white pointer-events-none" />

      <div className="container-main relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-100 text-xs font-semibold text-navy uppercase tracking-wider mb-5">
            What We Build For Your Firm
          </span>
          <h2 className="text-3xl md:text-headline font-semibold text-neutral-900 tracking-tight">
            Tools that don&apos;t exist yet.{" "}
          </h2>
          <p className="mt-4 text-body-lg text-neutral-600 leading-relaxed">
            Harvey handles research and drafting. iManage and Clio handle storage. We build the legal intelligence
            layer that sits between them — the tools no one else has built.
          </p>
        </motion.div>

        {/* Phase 1 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-100 text-xs font-bold text-emerald-700 uppercase tracking-wider">
              Phase 1 — Start Here
            </span>
            <span className="text-sm text-neutral-500">Deploy in weeks — no infrastructure changes required</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {phase1.map((item, index) => (
            <DeliverableCard key={item.number} item={item} index={index} badgeText="Deploy in weeks" />
          ))}
        </div>

        {/* Phase 2 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1.5 rounded-lg bg-navy-50 border border-navy-100 text-xs font-bold text-navy uppercase tracking-wider">
              Phase 2 — Deep Integration
            </span>
            <span className="text-sm text-neutral-500">Built to order — includes security review with your IT team</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {phase2.map((item, index) => (
            <DeliverableCard key={item.number} item={item} index={index} badgeText="Custom build" />
          ))}
        </div>

        {/* Bottom comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block mb-3">
                What Harvey does well
              </span>
              <ul className="space-y-2">
                {[
                  "Research and case law",
                  "Drafting and summarization",
                  "Firm-wide document search",
                  "Basic redline detection",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-neutral-500">
                    <svg className="w-4 h-4 text-neutral-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-navy-50 border border-navy-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy block mb-3">
                What we build (that Harvey doesn&apos;t)
              </span>
              <ul className="space-y-2">
                {[
                  "Per-client intelligence with ethical walls",
                  "Opposing counsel profiling",
                  "Deal relationship mapping",
                  "AI-powered change analysis",
                  "Document triage reading guides",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-neutral-800">
                    <svg className="w-4 h-4 text-navy flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
