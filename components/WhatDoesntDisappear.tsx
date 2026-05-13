"use client";

import { motion } from "framer-motion";

/* Hardens the differentiator: the work that survives even if Anthropic ships
 * a great first-party onboarding wizard. Five durable services that aren't
 * subject to product improvement.                                            */

const durable = [
  {
    title: "Eliciting your firm's playbook",
    body: "Your standard positions, your typical pushback language, your house style — none of this is written down anywhere a wizard can read. It surfaces during discovery interviews with a human who knows what to ask for.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Translating bar rules into configuration",
    body: "ABA Model Rules and your state's RPCs live in case law and ethics opinions — not product documentation. Mapping Rule 1.6 to a configuration your malpractice carrier will sign off on is regulated services work. Anthropic won't do it for you.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
      </svg>
    ),
  },
  {
    title: "Custom secure bridges to bespoke firm software",
    body: "Most firms have at least one piece of software nobody else uses — a partner-built matter tracker, a custom intake form, a billing add-on. When the standard integrations don't reach it, we build a careful secure bridge ourselves. Anthropic will never ship a connector for software only your firm uses.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
      </svg>
    ),
  },
  {
    title: "Ongoing tune-ups as the platform evolves",
    body: "Anthropic ships new practice tools monthly. State bars publish AI opinions quarterly. Your matter mix shifts year over year. The runbook stays current via the retainer — without re-doing a sprint.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    title: "The judgment call your partners actually need",
    body: "Sprint now, pilot, or wait six months? Customize for the trusts group or the real-estate group first? Is your carrier's AI clause going to bite at renewal? These are judgment calls a wizard cannot make. They're what your partners are paying for.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.354a15.998 15.998 0 01-3 0M9.75 18.27c-.378.052-.756.092-1.137.117M14.25 18.27c.378.052.756.092 1.137.117m-7.137.117c.378.052.756.092 1.137.117m4.863-.234a48.27 48.27 0 00-5.012 0M15.75 12.75a6 6 0 11-12 0 6 6 0 0112 0z" />
    </svg>
    ),
  },
  {
    title: "Carrier-renewal documentation, every year",
    body: "Malpractice carriers added AI clauses to renewal questionnaires in 2025. Some now require a written AI usage policy to renew. The policies need re-validation every year against the carrier's current questions — recurring liaison work no product roadmap covers.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
];

export default function WhatDoesntDisappear() {
  return (
    <section className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1A2E] via-navy-900 to-[#0F2240]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(212,165,116,0.08),transparent)] pointer-events-none" />
      <div className="absolute inset-0 grain opacity-[0.03]" />

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-semibold text-gold/90 uppercase tracking-[0.15em] mb-4">
            The durable work
          </span>
          <h2 className="text-3xl md:text-headline font-semibold text-white tracking-tight">
            What still needs a senior engineer{" "}
            <span className="font-serif italic font-normal text-gold">even after the product gets better.</span>
          </h2>
          <p className="mt-4 text-body-lg text-neutral-300 leading-relaxed">
            Anthropic will keep shipping. Onboarding will get easier. Some of what we do today will be a button in eighteen months — that&apos;s the right direction for the platform, and we want it to happen. But the work that&apos;s genuinely hard for a firm to do on its own — eliciting your playbook, translating bar rules, writing connections to your bespoke software, keeping up with the platform, and making the call — that work is the actual service. It does not go away when the product matures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {durable.map((d, idx) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 md:p-7 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-500"
            >
              <div className="w-11 h-11 rounded-xl bg-gold/15 text-gold flex items-center justify-center mb-4">
                {d.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 leading-tight">{d.title}</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">{d.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-2xl mx-auto text-center"
        >
          <p className="text-base text-neutral-300 leading-relaxed italic">
            &ldquo;The product just got cheap and powerful. The configuration is the bottleneck. For boutique firms with no internal AI lead, that bottleneck is a wall.&rdquo;
          </p>
          <p className="mt-2 text-xs font-mono uppercase tracking-[0.12em] text-gold/70">
            Our own framing, since launch day
          </p>
        </motion.div>
      </div>
    </section>
  );
}
