"use client";

import { motion } from "framer-motion";

const deliverables = [
  {
    number: "01",
    title: "10-15 Custom AI Commands",
    subtitle: "Your team types a shortcut. AI does the rest.",
    description:
      "We build one-click commands tailored to your daily tasks — draft emails, summarize meetings, generate reports, write marketing content. Each command is professionally engineered to produce consistent, polished results every time.",
    example: {
      label: "Example",
      content: "Type /draft-followup → AI writes a personalized client email in your firm's tone, ready to send in seconds.",
    },
    color: "navy" as const,
  },
  {
    number: "02",
    title: "Software Connections",
    subtitle: "AI that reads from the tools you already use.",
    description:
      "We connect AI directly to your existing software — Clio, QuickBooks, Xero, Google Drive, Square, and more. Your team asks questions in plain English and gets answers from your own live business data. No exports, no copy-pasting.",
    example: {
      label: "Example",
      content: "\"What invoices are overdue this month?\" → AI checks your QuickBooks and answers instantly.",
    },
    color: "gold" as const,
  },
  {
    number: "03",
    title: "Software Setup & Onboarding",
    subtitle: "Don't have the right tools yet? We set them up.",
    description:
      "If your firm doesn't have practice management or accounting software, we help you select the right platform, set it up from scratch, migrate your data, and configure everything so it's ready for AI integration from day one.",
    example: {
      label: "Example",
      content: "Need Clio for case management? We select it, set it up, configure your matters, and connect it to AI — all in one engagement.",
    },
    color: "navy" as const,
  },
  {
    number: "04",
    title: "Training & Cheat Sheets",
    subtitle: "Every role knows exactly what to do.",
    description:
      "Two hands-on training sessions teach each role their specific AI tools. We deliver printed cheat sheets for every desk — a one-page reference card your staff actually uses. Plus 30 days of email support to make sure everything sticks.",
    example: {
      label: "Example",
      content: "Your paralegal gets a laminated card with 12 commands built for their daily workflow. No guessing, no searching. Just their tasks, their tools.",
    },
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
            What We Deliver
          </span>
          <h2 className="text-3xl md:text-headline font-semibold text-neutral-900 tracking-tight">
            A complete AI system.{" "}
            <span className="font-serif italic font-normal">Not a slide deck.</span>
          </h2>
          <p className="mt-4 text-body-lg text-neutral-600 leading-relaxed">
            Most AI consultants teach concepts. We build a working system — custom commands,
            templates, software connections, and role-specific playbooks — then train your team
            to run it without us.
          </p>
        </motion.div>

        {/* Deliverables grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {deliverables.map((item, index) => {
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
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <span className={`text-3xl font-bold ${colors.number} opacity-30 font-mono`}>
                      {item.number}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full border text-[10px] font-semibold uppercase tracking-wider ${colors.badge}`}>
                      We build this
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-navy mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Example box */}
                  <div className={`p-4 rounded-xl ${colors.accent} border`}>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 block mb-1.5">
                      {item.example.label}
                    </span>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      {item.example.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {/* Others */}
            <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block mb-3">
                Typical AI consultant
              </span>
              <ul className="space-y-2">
                {[
                  "General AI workshop",
                  "PowerPoint about possibilities",
                  "\"Go try ChatGPT\"",
                  "Monthly retainer to keep going",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-neutral-500">
                    <svg className="w-4 h-4 text-neutral-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Us */}
            <div className="p-5 rounded-xl bg-navy-50 border border-navy-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy block mb-3">
                What we deliver
              </span>
              <ul className="space-y-2">
                {[
                  "Custom AI commands for your tasks",
                  "Template library your team uses daily",
                  "AI connected to your software",
                  "Set up, train, hand off — done",
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
