"use client";

import { motion } from "framer-motion";

const sprintPillars = [
  {
    number: "01",
    title: "The right practice-area tools, turned on",
    subtitle: "Anthropic shipped twelve practice-area workflows. We turn on the three to five your firm actually needs.",
    description:
      "Claude for Legal comes with built-in tools for Corporate, M&A, IP, Litigation, Employment, Privacy, Tax, Regulatory, AI Governance, and Product — plus Law Student and Legal Clinic add-ons. Generic out of the box, useful only when customized. We pick the ones that match your practice areas and tune them with your firm's actual playbooks, your drafting library, your house style.",
    example: {
      label: "What this looks like for your firm",
      content:
        "An estate planning firm walks away with the Corporate toolset tuned to their trust-funding workflow, their beneficiary-intake template, their state-specific drafting library, and a conflict-check workflow that handles multigenerational client families.",
    },
    color: "navy" as const,
  },
  {
    number: "02",
    title: "Securely connected to the software your firm already uses",
    subtitle: "Up to eight connections into your DMS, billing, calendar, email, and research tools — verified on real matter data.",
    description:
      "Claude reads and writes inside the apps your team already lives in — iManage, NetDocuments, Clio, Microsoft 365 (Word + Outlook), Thomson Reuters CoCounsel, DocuSign, Box, Everlaw, Ironclad, plus your billing and practice management system. No copy-pasting between apps. Your existing matter-level permissions and ethical walls carry over.",
    example: {
      label: "What this looks like for your firm",
      content:
        "An associate drafts in Word; Claude flags a non-standard indemnity removal; the matter notes update in iManage; the timer pushes into your billing system. The associate never left Word.",
    },
    color: "gold" as const,
  },
];

const customizationPillars = [
  {
    number: "03",
    title: "Up to five one-click workflows, built around your playbook",
    subtitle: "The actions your team runs ten times a day, captured as named workflows anyone can trigger.",
    description:
      "On Thursday we build the workflows that move the needle for your firm: contract review against your standard positions, matter-intake summaries, conflict checks, billing narratives, deposition prep memos, due-diligence chronologies. Each one is built around your firm's playbook — your standard positions, your house style, your typical pushback language — not a generic prompt library off the internet.",
    example: {
      label: "What this looks like for your firm",
      content:
        "An associate types \"run the indemnity check\" — and gets back your firm's standard positions, your typical pushback language, and a drafted email to opposing counsel in your partner's voice. Two minutes instead of two hours.",
    },
    note: "Anthropic's General Counsel said on launch day: \"Don't use it out of the box — it's at its best when you customize it with your own legal playbooks.\"",
    color: "navy" as const,
  },
  {
    number: "04",
    title: "Lives inside Word and Outlook",
    subtitle: "Your team uses Claude the same way they already use Word and Outlook — no new app to learn.",
    description:
      "Drafting a contract in Word? A button in Word runs your firm's review workflow. Triaging email in Outlook? A button in Outlook drafts the intake summary. No one has to learn a new application or copy text between apps. Your team works in the tools they already know.",
    example: {
      label: "What this looks like for your firm",
      content:
        "An associate redlines a supply agreement in Word, clicks \"run review\" in the toolbar, and Claude flags the indemnity change, drafts the pushback paragraph, and updates the matter notes — all without leaving Word.",
    },
    color: "gold" as const,
  },
  {
    number: "05",
    title: "A bar-compliant usage policy your carrier can sign off on",
    subtitle: "Mapped to ABA Model Rules 1.1, 1.6, 5.3 — plus your state's bar rules.",
    description:
      "Every engagement ships with a firm-specific AI usage policy that covers attorney competence, client confidentiality, supervision of non-lawyer assistance, and your state's professional conduct rules. Matter-level access controls, ethical walls, document retention, and a confidentiality posture review are all baked in. Your malpractice carrier reviews the policy before you sign.",
    example: {
      label: "What this looks like for your firm",
      content:
        "A 25–40 page runbook that documents every setting, every connection, every workflow — plus a written usage policy your bar counsel and malpractice carrier can sign off on without back-and-forth.",
    },
    color: "navy" as const,
  },
  {
    number: "06",
    title: "On-site training and a clean handover",
    subtitle: "Two 90-minute sessions Friday afternoon — one for attorneys, one for staff.",
    description:
      "Friday afternoon is live training over a screen-share. Every team member runs their first real workflow on a real matter while we&apos;re on the call with them. You walk away with a written runbook in your inbox, a usage dashboard bookmarked, and 30/60/90-day check-ins already on the calendar — so the wheels stay on after the sprint ends.",
    example: {
      label: "What this looks like for your firm",
      content:
        "By Friday evening your firm has a designated AI champion, every attorney has run their first workflow on a real matter, and your operations lead has the dashboard pulled up on Monday morning.",
    },
    color: "gold" as const,
  },
  {
    number: "07",
    title: "Custom connections to your firm's bespoke software",
    subtitle: "If the off-the-shelf integrations don't reach a system that matters, we write the connection ourselves.",
    description:
      "Most firms run on standard systems and the connectors that ship with Claude for Legal cover them. But every firm has at least one piece of software that's idiosyncratic — a partner-built matter tracker, a custom intake form, a billing add-on, a deal-document repository nobody else uses. We write secure custom connections to those systems as part of the sprint when the build is small, or scope them separately if it's deeper. Same engineering work your IT consultancy would do, if they happened to be Claude-fluent.",
    example: {
      label: "What this looks like for your firm",
      content:
        "A firm's twenty-year-old matter tracker has no public API — but it speaks SQL. We write a secure read-only connection that lets Claude pull conflict-check data straight from it during a matter intake, without exposing the database to the wider internet. Same security posture your IT team would insist on, implemented in two days instead of two months.",
    },
    color: "navy" as const,
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

function DeliverableCard({
  item,
  index,
  badgeText,
}: {
  item: (typeof sprintPillars)[0] & { note?: string };
  index: number;
  badgeText: string;
}) {
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
          <p className="mt-4 text-xs text-neutral-500 italic leading-relaxed">
            <span className="font-semibold text-navy not-italic">From Anthropic on launch day —</span>{" "}
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
            What ships in a sprint
          </span>
          <h2 className="text-3xl md:text-headline font-semibold text-neutral-900 tracking-tight">
            Anthropic shipped the platform.{" "}
            <span className="font-serif italic font-normal">We bring the furniture.</span>
          </h2>
          <p className="mt-4 text-body-lg text-neutral-600 leading-relaxed">
            Claude for Legal launched with twelve practice-area plugins and twenty-plus connectors — all included with any paying Claude subscription. The product is cheap and powerful. The configuration is the bottleneck. That&apos;s where we come in.
          </p>
        </motion.div>

        {/* Pillars 1-2 — The platform */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-100 text-xs font-bold text-emerald-700 uppercase tracking-wider">
              Platform · activated
            </span>
            <span className="text-sm text-neutral-500">What we light up first — the surfaces Anthropic shipped, configured to your firm</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {sprintPillars.map((item, index) => (
            <DeliverableCard key={item.number} item={item} index={index} badgeText="Day 1–3" />
          ))}
        </div>

        {/* Pillars 3-6 — The customization */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1.5 rounded-lg bg-navy-50 border border-navy-100 text-xs font-bold text-navy uppercase tracking-wider">
              Customization · the wedge
            </span>
            <span className="text-sm text-neutral-500">What boutique firms can&apos;t build alone — your playbook, codified into Claude</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {customizationPillars.map((item, index) => (
            <DeliverableCard key={item.number} item={item} index={index} badgeText="Day 3–5" />
          ))}
        </div>

        {/* Bottom comparison — Sprint vs DIY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block mb-3">
                If you self-implement
              </span>
              <ul className="space-y-2">
                {[
                  "Three to nine months of partner time on integrations",
                  "An IT generalist learning MCP on your firm's clock",
                  "No bar-compliant usage policy reviewed by counsel",
                  "Generic out-of-the-box plugins, not your playbook",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-neutral-500">
                    <svg className="w-4 h-4 text-neutral-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-navy-50 border border-navy-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy block mb-3">
                With a five-day sprint
              </span>
              <ul className="space-y-2">
                {[
                  "Working firm by Friday afternoon",
                  "Five custom skills built to your playbook",
                  "Bar-compliant usage policy your carrier can review",
                  "Up to eight MCP connectors verified on real matter data",
                  "Two live training sessions + a written runbook",
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
