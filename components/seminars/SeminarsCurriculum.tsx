"use client";

import { motion } from "framer-motion";

const modules = [
  {
    id: "01",
    time: "00:00 — 00:45",
    title: "Where legal AI actually stands today",
    deliverable: "A current-state briefing in plain English",
    bullets: [
      "What Anthropic shipped on May 12, 2026 — the practice-area tools, the integrations, the Microsoft 365 surface",
      "How Claude for Legal differs from Harvey, Legora, CoCounsel, and Luminance",
      "What Big Law has already adopted (Freshfields' 500%+ usage growth in six weeks) and what that means for boutique firms in the next twelve months",
      "Honest assessment: what works on day one, what doesn't, where the edges of the platform are",
    ],
  },
  {
    id: "02",
    time: "00:45 — 01:30",
    title: "Walking the platform live, end to end",
    deliverable: "Hands-on tour with your team driving",
    bullets: [
      "The four building blocks of Claude for Legal — practice-area workflows, connections to your DMS and email, custom firm workflows, matter-scoped folders",
      "Live tour of every integration that matters to your firm: iManage, NetDocuments, Clio, Word, Outlook, Thomson Reuters CoCounsel, DocuSign",
      "Where AI sits in your associate's day vs. your partner's day — different shape, same product",
      "What it costs to run, who owns the data, and what happens if Anthropic shuts down (the answer is comforting — we'll cover it)",
    ],
  },
  {
    id: "03",
    time: "01:30 — 02:30",
    title: "Bar ethics in the Claude era",
    deliverable: "Annotated ABA + state-RPC briefing for your jurisdiction",
    bullets: [
      "ABA Model Rule 1.1 (competence) — what \"reasonable understanding\" of AI now means after the comment 8 update",
      "ABA Model Rule 1.6 (confidentiality) — Anthropic's data-handling guarantees, and how to verify them for your malpractice carrier",
      "ABA Model Rule 5.3 (supervision of non-lawyer assistance) — how AI fits into the rule, and what supervisory obligations attach",
      "Your state's rules mapped (Illinois RPC 7.1, California Rule 1.6, New York 22 NYCRR — name your jurisdiction)",
      "A usage policy template that maps to your specific bar — yours to keep",
    ],
  },
  {
    id: "04",
    time: "02:30 — 03:30",
    title: "Your firm's first workflow — built live on the call",
    deliverable: "A working Claude for Legal workflow on your real matter data",
    bullets: [
      "Pick one workflow in advance — contract review, intake summary, conflict check, deposition prep, due-diligence chronology",
      "We build a working version using sanitized samples from your firm during the seminar",
      "Your team triggers it live, sees what it produces, marks it up, we iterate",
      "Walk away with the workflow saved — Monday morning your team uses it on a real matter",
    ],
  },
  {
    id: "05",
    time: "03:30 — 04:00",
    title: "The decision on the call — sprint, pilot, or wait",
    deliverable: "A one-page written plan: sprint, pilot, or wait",
    bullets: [
      "Honest assessment of whether your firm should run a five-day implementation sprint this quarter",
      "If yes: a written plan, calendar dates, and the sprint scope captured before we leave",
      "If pilot: a thirty-day pilot scope you can run with your current Claude subscription",
      "If wait: a list of what would change the recommendation in six months — and we follow up at that mark",
    ],
  },
];

export default function SeminarsCurriculum() {
  return (
    <section id="seminar-curriculum" className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/40 via-white to-neutral-50/40 pointer-events-none" />

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-4">
            The curriculum
          </span>
          <h2 className="text-3xl md:text-headline font-semibold text-neutral-900 tracking-tight">
            Five modules. One half-day.{" "}
            <span className="font-serif italic font-normal">A working firm decision.</span>
          </h2>
          <p className="mt-4 text-body-lg text-neutral-600 leading-relaxed">
            The half-day format runs three-and-a-half hours plus a working break. A full-day format adds two longer build modules on your second-highest-volume workflow and an extended bar-counsel Q&amp;A. Both versions end the same way: a written one-page plan in your hand before we leave.
          </p>
        </motion.div>

        <div className="space-y-5">
          {modules.map((m, idx) => (
            <motion.article
              key={m.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-12 gap-6 p-6 md:p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-subtle hover:shadow-elevated transition-all duration-500"
            >
              <div className="md:col-span-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-2xl font-bold text-navy/30">{m.id}</span>
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-amber-700">{m.time}</span>
                </div>
                <p className="mt-3 text-[10px] font-mono font-bold uppercase tracking-[0.12em] text-neutral-400">
                  Deliverable
                </p>
                <p className="mt-1 text-sm font-medium text-navy leading-snug">
                  {m.deliverable}
                </p>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3 leading-tight">
                  {m.title}
                </h3>
                <ul className="space-y-2">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-navy mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-neutral-700 leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
