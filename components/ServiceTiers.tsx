"use client";

import { motion } from "framer-motion";

/* Five-tier service ladder.
 * - No prices on the page (discussed on the consult call).
 * - No commitment to specific hour counts — described by scope, not labor units.
 * - Async-first delivery is the positioning frame: this is the premium choice,
 *   not a budget option.                                                       */

const tiers = [
  {
    id: "01",
    name: "Diagnostic Workshop",
    subhead: "Live 90-minute working session for partners deciding whether AI fits their firm right now.",
    forFirms: "Any size · curious, evaluating, not ready to commit",
    includes: [
      "Live working call over video with a senior engineer",
      "Walkthrough of Claude for Legal against a workflow you pick",
      "Written Implementation Readiness Assessment within two business days",
      "Workshop fee credited toward any sprint booked afterward",
    ],
    note: "Built as a low-commitment entry point. Not configuration work — diagnostic only.",
    accent: "navy",
  },
  {
    id: "02",
    name: "Foundation Setup",
    subhead: "The right answer for solo and very small firms running on a tight stack.",
    forFirms: "Solo and 2-attorney firms · single practice area · standard stack",
    includes: [
      "Claude account provisioned with baseline security configuration",
      "Two practice-area toolsets activated and tuned for your firm",
      "Two secure connections — your document system, email, calendar, or billing",
      "One custom workflow built around your firm's playbook + live training",
      "A bar-compliant usage policy template for your jurisdiction",
      "A written runbook and 30 days of email support",
    ],
    note: "Productized down — not the Standard sprint with corners cut.",
    accent: "gold",
  },
  {
    id: "03",
    name: "Sprint Lite",
    subhead: "Right-sized for small firms who want the full sprint, not a starter kit.",
    forFirms: "3–4 attorneys · 1–2 paralegals · single dominant practice area",
    includes: [
      "Three practice-area toolsets activated and tuned",
      "Four secure connections — document system, email, calendar, practice management",
      "Two custom workflows built around your firm's playbook",
      "Bar-compliant usage policy + two live training sessions",
      "Written runbook, 60 days of support, one 30-day check-in",
    ],
    note: "Best fit-to-value ratio for small firms with one or two priority workflows.",
    accent: "navy",
  },
  {
    id: "04",
    name: "Standard Sprint",
    subhead: "The flagship engagement. Monday through Friday, working firm by week's end.",
    forFirms: "5–10 attorneys · 2–5 paralegals · one or two practice areas",
    includes: [
      "Up to five practice-area toolsets + up to eight secure connections",
      "Microsoft 365 integration — Claude inside Word and Outlook",
      "Up to five custom workflows + custom secure bridges for bespoke firm software",
      "Bar-compliant usage policy customized to your practice and state",
      "Two live training sessions, runbook, and 30/60/90-day check-ins for 90 days",
    ],
    note: "The right engagement for most firms — most boutique partners self-select here once they read the scope.",
    accent: "gold",
    flagship: true,
  },
  {
    id: "05",
    name: "Boutique Plus",
    subhead: "Deeper scope for larger boutiques with multiple practice areas or non-standard stacks.",
    forFirms: "11–20 attorneys · multiple practice areas · complex or non-standard software",
    includes: [
      "Multi-practice-area customization — separate playbooks per group",
      "Up to twelve secure connections including specialty platforms (CoCounsel, Everlaw, Ironclad, DocuSign, Box)",
      "Up to eight custom workflows tailored per practice group",
      "Dedicated training per group + named firm champions credentialed per group",
      "Governance dashboard, 120 days of support, quarterly check-ins for a year",
    ],
    note: "Premium offering — lower volume per quarter so the work stays partner-grade.",
    accent: "navy",
  },
];

const recurring = [
  {
    name: "Steward",
    subhead: "Light-touch monthly retainer.",
    body: "Quarterly check-ins, new-tool rollouts as Anthropic ships them, minor adjustments to your firm's workflows. The right fit for firms who want a standing line into a senior engineer without an active build cadence.",
  },
  {
    name: "Operator",
    subhead: "Monthly retainer for active firms.",
    body: "Monthly working call, two new workflows per quarter, on-call email support inside one business day. Where most firms convert after the 90-day post-sprint window.",
  },
  {
    name: "Partner",
    subhead: "Highest-touch retainer.",
    body: "Bi-weekly working call, four new workflows per quarter, priority support, and a LinkedIn Authority Skill build included. For firms making Claude central to how their attorneys work — not optional.",
  },
];

const accentMap = {
  navy: { card: "bg-white border-neutral-200/80", number: "text-navy", chip: "bg-navy-50 text-navy border-navy-100" },
  gold: { card: "bg-white border-neutral-200/80", number: "text-gold-700", chip: "bg-gold-50 text-gold-700 border-gold-100" },
};

export default function ServiceTiers() {
  return (
    <section id="tiers" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/40 via-white to-neutral-50/40 pointer-events-none" />

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-4">
            Engagement scopes
          </span>
          <h2 className="text-3xl md:text-headline font-semibold text-neutral-900 tracking-tight">
            Five scopes.{" "}
            <span className="font-serif italic font-normal">Same async-first delivery posture across every one.</span>
          </h2>
          <p className="mt-4 text-body-lg text-neutral-600 leading-relaxed">
            Every engagement is delivered async-first — no consultants camped in your conference room, no calendar Tetris across your partners. You get daily progress updates over screen-recordings, a custom-recorded training course your firm keeps forever, and async check-ins for the next 90 days. The only required synchronous time is the initial twenty-minute consultation. Live calls are available as optional add-ons on any engagement.
          </p>
          <p className="mt-4 text-body-lg text-neutral-600 leading-relaxed">
            Pricing is discussed on the consultation call. We don&apos;t publish numbers here because the right scope and price depend on your firm&apos;s size, stack, and how deep your matter playbook runs.
          </p>
        </motion.div>

        {/* Async-first manifesto card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-7 rounded-2xl bg-gradient-to-br from-[#0F2240] via-navy-900 to-[#0F2240] text-white shadow-elevated relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_85%_20%,rgba(212,165,116,0.18),transparent)] pointer-events-none" />
          <div className="relative grid md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.12em] text-gold mb-2 block">Why async-first</span>
              <h3 className="text-2xl font-semibold leading-tight text-white">No consultants in your office. Working firm in weeks, not months.</h3>
            </div>
            <div className="md:col-span-3 grid sm:grid-cols-2 gap-4 text-sm text-neutral-200">
              <div>
                <p className="font-semibold text-white mb-1">No hosting duties for your firm</p>
                <p className="leading-relaxed">No conference-room logistics, no desk to set up, no Monday-morning calendar pile-up for five partners. The async-first delivery model is the boutique-friendly choice.</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Daily progress updates</p>
                <p className="leading-relaxed">Mon–Thu you get a five-to-eight-minute screen recording: what was configured, what was tested, what&apos;s left. Watch on your own time. No status meetings.</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Custom-recorded training, your firm keeps forever</p>
                <p className="leading-relaxed">Friday training is a custom video course recorded on your configured tenant. Eight to twelve short modules. Onboard a new associate eighteen months later with the same library.</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Async-friendly, not async-only</p>
                <p className="leading-relaxed">Live working sessions are available as add-ons on every engagement — at the start, at training, or any check-in. We work how your firm works best.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tier cards */}
        <div className="space-y-5">
          {tiers.map((tier, idx) => {
            const c = accentMap[tier.accent as "navy" | "gold"];
            return (
              <motion.article
                key={tier.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`grid md:grid-cols-12 gap-6 p-6 md:p-8 rounded-2xl ${c.card} border shadow-subtle hover:shadow-elevated transition-all duration-500 ${tier.flagship ? "ring-1 ring-gold/30" : ""}`}
              >
                <div className="md:col-span-3 flex md:flex-col justify-between md:justify-start md:items-start gap-4">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className={`font-mono text-3xl font-bold ${c.number} opacity-25`}>{tier.id}</span>
                      {tier.flagship && (
                        <span className="px-2 py-0.5 rounded-full bg-gold text-navy-900 text-[10px] font-bold uppercase tracking-wider">Flagship</span>
                      )}
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold text-neutral-900 leading-tight">{tier.name}</h3>
                  </div>
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-medium border ${c.chip}`}>
                    {tier.forFirms}
                  </span>
                </div>

                <div className="md:col-span-9">
                  <p className="text-base font-medium text-navy mb-4 leading-relaxed">
                    {tier.subhead}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-neutral-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {tier.note && (
                    <p className="mt-4 text-xs text-neutral-500 italic">
                      <span className="text-navy not-italic font-semibold">Note —</span> {tier.note}
                    </p>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-2xl bg-neutral-50 border border-neutral-200"
        >
          <p className="text-sm font-semibold text-neutral-900 mb-3">Common add-ons (any tier)</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-neutral-700">
            <div>
              <span className="block font-medium text-neutral-900">Live training day</span>
              <span className="block text-xs text-neutral-500">Switch async training to a live session on Friday.</span>
            </div>
            <div>
              <span className="block font-medium text-neutral-900">Extra custom workflow</span>
              <span className="block text-xs text-neutral-500">Beyond the workflows included in the tier.</span>
            </div>
            <div>
              <span className="block font-medium text-neutral-900">Custom-coded integration</span>
              <span className="block text-xs text-neutral-500">For bespoke firm software without a standard connector.</span>
            </div>
            <div>
              <span className="block font-medium text-neutral-900">LinkedIn Authority Skill build</span>
              <span className="block text-xs text-neutral-500">Partner-led content engine, bar-rule guardrails baked in.</span>
            </div>
          </div>
        </motion.div>

        {/* Recurring retainers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <h3 className="text-2xl font-semibold text-neutral-900 mb-2">After the sprint — three retainer postures</h3>
          <p className="text-body text-neutral-600 leading-relaxed mb-8 max-w-2xl">
            Anthropic ships new tools monthly. State bars revise their rules quarterly. Your firm&apos;s matter mix shifts every year. A retainer is how the work stays current — and how the runbook stays a living document instead of a snapshot. Conversion happens after the 90-day post-sprint window. Optional.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {recurring.map((r, idx) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-subtle"
              >
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.12em] text-amber-700 mb-2 block">Retainer · {idx === 0 ? "light" : idx === 1 ? "standard" : "active"}</span>
                <h4 className="text-xl font-semibold text-neutral-900 mb-1">{r.name}</h4>
                <p className="text-sm font-medium text-navy mb-3">{r.subhead}</p>
                <p className="text-sm text-neutral-700 leading-relaxed">{r.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-navy-50 via-white to-gold-50 border border-neutral-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
        >
          <div>
            <p className="text-lg font-semibold text-neutral-900 leading-tight">Not sure which scope fits your firm?</p>
            <p className="text-sm text-neutral-600 mt-1 leading-relaxed">Book the twenty-minute consultation. We&apos;ll tell you straight which tier — or whether to wait.</p>
          </div>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 text-base font-semibold text-white bg-navy rounded-xl hover:bg-navy-900 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Book the consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
