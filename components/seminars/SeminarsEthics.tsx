"use client";

import { motion } from "framer-motion";

const commitments = [
  {
    rule: "ABA Model Rule 1.1 · Competence",
    body: "Comment 8 puts AI fluency squarely inside the duty of technological competence. The seminar shows your partners and associates what \"reasonable understanding\" of AI looks like in 2026 — and gives them the technical baseline to supervise its use without bluffing.",
  },
  {
    rule: "ABA Model Rule 1.6 · Confidentiality",
    body: "Anthropic does not train Claude on customer data — that's a verifiable guarantee, not marketing. We walk your team through where that guarantee sits in the contract, how the enterprise privacy settings work, and how to evidence the safeguard to your malpractice carrier and your bar.",
  },
  {
    rule: "ABA Model Rule 5.3 · Supervision",
    body: "AI is non-lawyer assistance under 5.3. Your supervisory obligation doesn't go away — it scales. The seminar covers what supervision looks like in practice: review checkpoints, citation requirements, escalation triggers, and the audit trail you'd want in front of a bar inquiry.",
  },
  {
    rule: "Your state's rules",
    body: "We map the seminar to your jurisdiction during the intake call. Illinois RPC, New York 22 NYCRR, California Rules of Professional Conduct, Delaware, Texas, Florida — name the state, we run the rule-by-rule analysis and tailor the deliverables.",
  },
];

export default function SeminarsEthics() {
  return (
    <section className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F2240] via-[#132D54] to-[#0F2240]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(212,165,116,0.08),transparent)] pointer-events-none" />
      <div className="absolute inset-0 grain opacity-[0.03]" />

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-semibold text-gold/90 uppercase tracking-[0.15em] mb-4">
            Bar-compliant by design
          </span>
          <h2 className="text-3xl md:text-headline font-semibold text-white tracking-tight">
            Every example, every workflow, every recommendation —{" "}
            <span className="font-serif italic font-normal text-gold">mapped to the rules you already practice under.</span>
          </h2>
          <p className="mt-4 text-body-lg text-neutral-300 leading-relaxed">
            We refuse to recommend any approach we wouldn&apos;t put in writing for your bar counsel. The seminar leaves your firm with a usage policy template, an annotated briefing for your jurisdiction, and a checklist your malpractice carrier can review.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {commitments.map((c, idx) => (
            <motion.div
              key={c.rule}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 md:p-7 rounded-2xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-500"
            >
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.12em] text-gold mb-3">
                {c.rule}
              </p>
              <p className="text-sm text-neutral-200 leading-relaxed">
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
