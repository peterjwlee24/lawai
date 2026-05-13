"use client";

import { motion } from "framer-motion";

/* This section was originally drafted as a "Plain English" glossary which read
 * condescendingly — it implied the rest of the page wasn't in plain English and
 * the closing line assumed partners couldn't follow the rest. Reframed as a
 * product-structure reference: what Anthropic shipped, and how each part shows
 * up in a sprint. Same content, more respectful framing. */

const buildingBlocks = [
  {
    name: "Practice-area workflows",
    purpose: "The legal work, already wrapped up",
    body: "Anthropic shipped twelve of these — Corporate, M&A, IP, Litigation, Employment, Tax, Privacy, Regulatory, AI Governance, Product, Law Student, Legal Clinic. Each one is a pre-built set of tools tuned to that specialty. We turn on the three to five that match your firm's practice and customize them with your playbook.",
    inSprint: "Selected and tuned on Tuesday",
  },
  {
    name: "Connections to your software",
    purpose: "Claude reading and writing inside the apps your team already uses",
    body: "Twenty-plus secure connections ship with the product — iManage, NetDocuments, Clio, Microsoft 365 (Word, Outlook), Thomson Reuters CoCounsel, DocuSign, Box, Everlaw, Ironclad, and more. No copy-pasting between apps; your existing permissions and ethical walls carry over. If your firm runs a bespoke system that doesn't have a standard connection, we write one ourselves — same secure engineering your IT team would insist on, but Claude-fluent.",
    inSprint: "Wired in on Wednesday — custom connections too if your firm needs them",
  },
  {
    name: "Custom firm workflows",
    purpose: "One-click actions built around your playbook",
    body: "A workflow your team triggers by name — \"run the indemnity check,\" \"draft the matter intake.\" The workflow knows your firm's standard positions, your typical pushback, your house style. Without these, the product is generic; with them, it's your firm.",
    inSprint: "Built on Thursday, up to five",
  },
  {
    name: "Matter-scoped folders",
    purpose: "A binder Claude has actually read",
    body: "Drop a matter's documents into a folder once and Claude answers from those files only — cited to the page. No hallucination on facts that live in your documents. Useful for due-diligence chronologies, deal-document cross-referencing, brief banks, and prior-matter lookups.",
    inSprint: "Set up alongside each workflow on Thursday",
  },
];

export default function PlainEnglish() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/60 to-white pointer-events-none" />

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-4">
            How Claude for Legal is structured
          </span>
          <h2 className="text-3xl md:text-headline font-semibold text-neutral-900 tracking-tight">
            Anthropic shipped four building blocks.{" "}
            <span className="font-serif italic font-normal">A sprint puts them to work.</span>
          </h2>
          <p className="mt-4 text-body-lg text-neutral-600 leading-relaxed">
            The platform is the same whether your firm has two attorneys or two hundred. What separates a deployment that actually moves the needle from one that sits unused is whether each piece is customized to how your firm runs matters. Here&apos;s what each piece does, and what we do with it during a sprint.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {buildingBlocks.map((b, index) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.12em] text-neutral-400 mb-2">
                Building block 0{index + 1}
              </span>

              <h3 className="text-xl font-semibold text-neutral-900 mb-1 leading-tight">
                {b.name}
              </h3>
              <p className="text-sm font-medium text-navy mb-3 leading-snug">
                {b.purpose}
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed flex-1 mb-4">
                {b.body}
              </p>
              <div className="pt-3 border-t border-neutral-100">
                <p className="text-xs text-neutral-500 leading-relaxed">
                  <span className="text-amber-600 not-italic font-semibold">In a sprint —</span>{" "}
                  <span className="text-neutral-700">{b.inSprint}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
