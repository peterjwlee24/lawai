"use client";

import { motion } from "framer-motion";

const audiences = [
  {
    role: "Managing partners",
    color: "navy" as const,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    tagline: "Decide with conviction on the call",
    body: "You've read the Reuters piece, the LawSites coverage, the Bloomberg article. You've heard from three vendors. You don't need another pitch. You need a working session that ends with a clear yes or no on whether to put your firm on Claude for Legal this quarter — and the written plan that goes with it.",
    walkAway: "A signed-off one-page plan and a defensible recommendation for your partners' meeting on Monday.",
  },
  {
    role: "Practice leaders",
    color: "gold" as const,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    tagline: "Build the workflow your group runs ten times a day",
    body: "You run a practice group, you set the playbook for how matters move, and you're the one your partners will turn to once the firm signs off. The seminar centers on your real workflow — contract review against your group's standards, intake summarization for your matter type, conflict-check propagation across your client families. You leave with that workflow built.",
    walkAway: "A working version of your group's most-run workflow, saved to your firm's Claude account, ready for Monday.",
  },
  {
    role: "Operations & COO",
    color: "navy" as const,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    tagline: "Plan the rollout your firm will actually execute",
    body: "You'll be the one who keeps the rollout on the rails after the partners say yes. The seminar gives you a written runbook, a usage dashboard mock-up, IT prerequisites for your DMS and identity provider, a 30/60/90-day check-in cadence, and a malpractice-carrier-ready policy template. You leave with the operational picture, not the marketing version.",
    walkAway: "A rollout runbook with IT prerequisites and a 30/60/90-day operating plan — review with your IT MSP on Monday.",
  },
];

const colorMap = {
  navy: { bg: "bg-navy-50", text: "text-navy", border: "border-navy-100", gradient: "from-navy-50/80 to-white" },
  gold: { bg: "bg-gold-50", text: "text-gold-700", border: "border-gold-100", gradient: "from-gold-50/80 to-white" },
};

export default function SeminarsAudience() {
  return (
    <section className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/30 to-white pointer-events-none" />

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-4">
            Who it&apos;s built for
          </span>
          <h2 className="text-3xl md:text-headline font-semibold text-neutral-900 tracking-tight">
            Three roles on the same call.{" "}
            <span className="font-serif italic font-normal">All three leave with their own answer.</span>
          </h2>
          <p className="mt-4 text-body-lg text-neutral-600 leading-relaxed">
            We design the seminar around the three people who actually decide whether a firm adopts Claude for Legal — and what each of them needs to walk out with. No vendors. No spectators.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {audiences.map((a, index) => {
            const c = colorMap[a.color];
            return (
              <motion.article
                key={a.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col p-7 rounded-2xl bg-gradient-to-b ${c.gradient} border ${c.border} shadow-subtle hover:shadow-elevated transition-all duration-500`}
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.text} flex items-center justify-center mb-4`}>
                  {a.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 leading-tight mb-1">
                  {a.role}
                </h3>
                <p className={`text-sm font-medium ${c.text} mb-3`}>
                  {a.tagline}
                </p>
                <p className="text-sm text-neutral-700 leading-relaxed flex-1">
                  {a.body}
                </p>
                <div className="mt-5 pt-5 border-t border-neutral-200/80">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-[0.12em] text-neutral-400 mb-1">
                    Walks away with
                  </p>
                  <p className="text-sm text-neutral-800 leading-relaxed">
                    {a.walkAway}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
