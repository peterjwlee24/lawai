"use client";

import { motion } from "framer-motion";

const safeguards = [
  {
    title: "Built to the rules your bar already enforces",
    description:
      "Every deployment is built to ABA Model Rules 1.1 (competence), 1.6 (confidentiality), and 5.3 (supervision of non-lawyer assistance). Your state's professional conduct rules are mapped during discovery — Illinois, New York, California, Delaware, and others.",
  },
  {
    title: "Strict matter-by-matter access",
    description:
      "Conflict walls are enforced inside the integration itself, not just on the screen. Client A's matters are sealed off from Client B — verifiable, auditable, defensible if a partner is ever asked.",
  },
  {
    title: "Your data never trains the AI",
    description:
      "Anthropic guarantees Claude does not train on your data. Enterprise-grade privacy settings, no-retention modes, and customer-managed keys are configured to your firm's confidentiality posture.",
  },
  {
    title: "Workflows built around your firm's actual playbook",
    description:
      "Not a generic prompt pack from the internet. Your standard contract positions, your conflict-check process, your intake summary style — captured during async discovery, authored during the async build phase, deployed live in sprint week.",
  },
  {
    title: "Lives inside Word, Outlook, and your DMS",
    description:
      "Your team uses Claude where they already work — Microsoft Word, Outlook, iManage, NetDocuments, Clio, Centerbase, SharePoint, plus Thomson Reuters CoCounsel and DocuSign. No new app to learn. No tabs to juggle.",
  },
  {
    title: "We hand it over — your firm owns it",
    description:
      "Friday is training day. You leave with a 25–40 page printed runbook, every configuration documented, a designated firm champion, and 30/60/90-day check-ins booked. No retainer required to keep the lights on.",
  },
];

const sprintImpact = [
  {
    task: "Reviewing a contract against your firm's standard positions",
    before: "2–3 partner hours",
    after: "10 minutes, with drafted pushback",
    savings: "~93% faster",
    howItWorks: "Your firm's playbook saved as a one-click workflow — pulls your standard indemnity cap, your termination cure window, your governing-law preference",
  },
  {
    task: "Drafting the matter-intake summary",
    before: "1–2 hours of associate time",
    after: "Drafted while the intake call is still happening",
    savings: "~90% faster",
    howItWorks: "Outlook and Claude triage the email, the workflow pulls your intake template, and the conflict check runs against your document system in parallel",
  },
  {
    task: "Building the closing checklist from a purchase agreement",
    before: "1–2 hours, items easy to miss",
    after: "2 minutes, every condition tagged",
    savings: "~97% faster",
    howItWorks: "Anthropic's Corporate-law toolset reads the agreement; your firm's Closing workflow maps each condition to a responsible party with a deadline",
  },
  {
    task: "Tracking the impact of a defined-term change across every deal document",
    before: "Manual fire-drill, often missed",
    after: "30 seconds across every related document",
    savings: "New capability",
    howItWorks: "Every deal document lives in a shared Claude folder; a custom workflow surfaces every reference that needs updating",
  },
];

interface ServicesFeaturesProps {
  automationUseCases?: { task: string; howItWorks: string; before: string; after: string; savings: string }[];
  clientNoun?: string;
}

export default function ServicesFeatures(_props?: ServicesFeaturesProps) {
  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/50 via-white to-neutral-50/30 pointer-events-none" />

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-100 text-xs font-semibold text-navy uppercase tracking-wider mb-4">
            Bar-compliant by design
          </span>
          <h2 className="text-headline text-neutral-900">
            Partner-grade safeguards.{" "}
            <span className="font-serif italic font-normal">Real time savings.</span>
          </h2>
          <p className="mt-3 text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Every sprint ships with ABA-aligned controls, your playbook codified into Claude, and the verification posture your malpractice carrier wants to see.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left: What's built into every sprint */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 md:p-8 rounded-2xl bg-white border border-neutral-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-navy-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">Every sprint ships with</h3>
                <p className="text-xs text-neutral-600">The standard configuration — non-negotiable</p>
              </div>
            </div>

            <div className="space-y-4">
              {safeguards.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-neutral-900 text-sm">{feature.title}</p>
                    <p className="text-xs text-neutral-600 leading-relaxed mt-0.5">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Before/After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#0B1A2E] via-navy-900 to-[#0F2847] border border-navy-800 relative overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-gold/5 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Where the hours come back</h3>
                  <p className="text-xs text-neutral-300">Time your team gets back on week one</p>
                </div>
              </div>

              <div className="space-y-3">
                {sprintImpact.map((item, i) => (
                  <motion.div
                    key={item.task}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    className="group/card p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="font-medium text-white text-sm">{item.task}</p>
                      <span className="text-xs font-bold text-navy-900 bg-gold px-2.5 py-0.5 rounded-full shadow-[0_2px_8px_rgba(212,165,116,0.3)]">
                        {item.savings}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 mb-3 leading-relaxed">{item.howItWorks}</p>
                    <div className="grid grid-cols-2 gap-4 text-small">
                      <div>
                        <p className="text-neutral-400 mb-1 text-[10px] font-bold uppercase tracking-wider">Before</p>
                        <p className="text-neutral-400 line-through decoration-neutral-500">{item.before}</p>
                      </div>
                      <div>
                        <p className="text-gold mb-1 text-[10px] font-bold uppercase tracking-wider">After</p>
                        <p className="text-white font-semibold">{item.after}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
