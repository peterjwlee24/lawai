"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Run by the engineer who builds the deployments",
    body: "Most AI seminars for law firms are run by ex-marketers or ex-consultants. This one is run by the engineer who personally configures Claude for Legal at boutique and mid-market firms — Berkeley Cognitive Science, eight-plus years building production AI used by tens of millions of customers at companies including Amazon and Ring, founder of CareMAR (healthcare AI for care homes operating under strict privacy rules). Your team gets answers from the person who would do the work, not a salesperson.",
    contrast: "vs. coach / marketer / generalist consultant-turned-AI-expert",
  },
  {
    title: "We build a workflow with your real matter data on the call",
    body: "Other seminars demo on toy data. We bring a sanitized, anonymized version of one of your firm's real workflows (intake summary, contract review, conflict check) and build a working Claude for Legal version of it live — your associates can use it Monday morning. If it doesn't work, you saw it not work. No vendor theater.",
    contrast: "vs. \"watch this demo on a fake company called Acme Corp\"",
  },
  {
    title: "Built for the bar — not against it",
    body: "Every example, every workflow, every recommendation is mapped to ABA Model Rules 1.1, 1.6, and 5.3 and your state's professional conduct rules. We refuse to recommend any approach we wouldn't put in writing for your bar counsel. The seminar leaves you with a written usage policy template your malpractice carrier can review.",
    contrast: "vs. \"figure out the ethics part on your own\"",
  },
  {
    title: "A decision on the call — not three follow-up calls",
    body: "The seminar ends with a written one-page plan: sprint now, run a pilot, or wait six months. We&apos;ll tell you straight which one fits your firm — even if the answer is \"wait.\" Most firms end the call with a clear next step. The ones that don&apos;t didn&apos;t need our sprint and we said so.",
    contrast: "vs. \"thanks for attending, here's our pricing PDF\"",
  },
];

export default function SeminarsWhy() {
  return (
    <section className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/40 to-white pointer-events-none" />

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-100 text-xs font-semibold text-navy uppercase tracking-wider mb-4">
            Why this seminar
          </span>
          <h2 className="text-3xl md:text-headline font-semibold text-neutral-900 tracking-tight">
            Most AI seminars for law firms are run by people who&apos;ve never shipped AI.{" "}
            <span className="font-serif italic font-normal">This isn&apos;t one of them.</span>
          </h2>
          <p className="mt-4 text-body-lg text-neutral-600 leading-relaxed">
            There&apos;s a wave of generic &quot;AI for law&quot; events in every market right now. Most are 90 minutes of slide-deck hype. We built this seminar to be the opposite: a live working session over video, fully remote, where your team walks one of your own workflows and leaves with a decision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {reasons.map((r, index) => (
            <motion.article
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-7 md:p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-subtle hover:shadow-elevated transition-all duration-500 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.12em] text-navy">
                  Reason 0{index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3 leading-tight">
                {r.title}
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed flex-1">
                {r.body}
              </p>
              <p className="mt-5 inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-neutral-50 border border-neutral-200 text-[11px] font-mono uppercase tracking-[0.08em] text-neutral-500">
                <span aria-hidden="true">↳</span>
                {r.contrast}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
