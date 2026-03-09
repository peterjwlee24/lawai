"use client";

import { motion } from "framer-motion";

const differentiators = [
  {
    title: "Multi-Pass Verification",
    description: "Every output cross-references source documents. Dollar amounts, dates, and obligations are verified in a separate pass before anything reaches an attorney.",
  },
  {
    title: "Mandatory Citations",
    description: "Every claim references a specific section and page. No unsourced statements.",
  },
  {
    title: "Ethical Wall Enforcement",
    description: "Per-client data isolation. Client A's information never surfaces in Client B's context.",
  },
  {
    title: "Direct Integration With Your Tools",
    description: "Processed documents flow back into iManage, Clio, or NetDocuments automatically via custom software connectors. No copying, no exporting.",
  },
  {
    title: "Your Data Stays Yours",
    description: "Your documents never leave your firm's systems. We never store, access, or train AI on your data. Attorney-client privilege stays intact.",
  },
  {
    title: "Deploy and Hand Off",
    description: "We build it, deploy it, train your team, and hand over everything. No ongoing dependency.",
  },
];

const beforeAfter = [
  {
    task: "Contract change analysis",
    before: "2-3 hours",
    after: "5 minutes",
    savings: "up to 96%",
    howItWorks: "AI explains why each change matters, not just what changed",
  },
  {
    task: "100-page document triage",
    before: "Hours of attorney time",
    after: "45 min guided read",
    savings: "~80%",
    howItWorks: "Attorneys focus on the 20% of pages that actually need attention",
  },
  {
    task: "Closing checklist from purchase agreement",
    before: "1-2 hours",
    after: "2 minutes",
    savings: "~97%",
    howItWorks: "AI reads the purchase agreement and generates the full list",
  },
  {
    task: "Cross-document impact check",
    before: "Currently impossible",
    after: "30 seconds",
    savings: "New",
    howItWorks: "Change a term in the purchase agreement, see every affected document instantly",
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
            How We&apos;re Different
          </span>
          <h2 className="text-headline text-neutral-900">
            Built-in safeguards.{" "}
            <span className="font-serif italic font-normal">Real time savings.</span>
          </h2>
          <p className="mt-3 text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Every tool we build includes verification, citations, and data isolation.
            Here&apos;s what that means in practice.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left: What's built into every tool */}
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
                <h3 className="text-lg font-semibold text-neutral-900">What&apos;s Built Into Every Tool</h3>
                <p className="text-xs text-neutral-600">Cross-cutting safeguards and integrations</p>
              </div>
            </div>

            <div className="space-y-4">
              {differentiators.map((feature, i) => (
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
                  <h3 className="text-lg font-semibold text-white">Before &amp; After</h3>
                  <p className="text-xs text-neutral-300">Time savings your team will see</p>
                </div>
              </div>

              <div className="space-y-3">
                {beforeAfter.map((item, i) => (
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
                        {item.savings === "New" ? "NEW" : `${item.savings} faster`}
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
