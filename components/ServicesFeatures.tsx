"use client";

import { motion } from "framer-motion";
import type { UseCase } from "@/data/industries";

const systemsWeSetUp = [
  { title: "We Find the Tasks You Didn't Know AI Could Do", description: "Most businesses have no idea how many daily tasks AI can already handle. We audit your workflows and uncover dozens of opportunities." },
  { title: "Ready-to-Use Templates", description: "For every task we find, we build a ready-made template — a fill-in-the-blank instruction your team copies into Claude. Just copy the template, paste your info, and get a polished result in seconds." },
  { title: "A Playbook for Every Role", description: "Everyone gets a simple guide written for exactly what they do each day. No guessing, no figuring it out on the fly." },
  { title: "Zoom AI for Meeting Notes", description: "We turn on Zoom's built-in AI so it automatically writes up your meetings — who attended, what was discussed, and what needs to happen next." },
  { title: "AI That Writes In Your Voice", description: "We show your team how to load samples of your writing into Claude so every output matches your tone and style. It sounds like your office, not a robot." },
  { title: "Full Handoff — You Run It From Here", description: "We leave you with a complete playbook: every prompt, every workflow, step-by-step instructions. Your team runs everything independently." },
];

interface ServicesFeaturesProps {
  automationUseCases?: UseCase[];
  clientNoun?: string;
}

export default function ServicesFeatures({ automationUseCases: propUseCases, clientNoun = "firm" }: ServicesFeaturesProps) {
  const useCases = propUseCases || defaultUseCases;

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
            What We Do
          </span>
          <h2 className="text-headline text-neutral-900">
            We find what you&apos;re missing,{" "}
            <span className="font-serif italic font-normal">then set it up for you</span>
          </h2>
          <p className="mt-3 text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Most {clientNoun}s don&apos;t realize how much daily work AI can already do. We find the tasks,
            build ready-to-use templates for each one, train your team, and hand over the keys.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Systems We Set Up */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">What We Set Up For You</h3>
                <p className="text-xs text-neutral-600">Discover, build, hand off</p>
              </div>
            </div>

            <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
              We don&apos;t run a workshop and leave you with a slide deck. We build a complete, ready-to-use system
              tailored to your {clientNoun} — then hand you the keys.
            </p>

            <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-navy-50 to-navy-50/50 border border-navy-100/60">
              <p className="text-[10px] font-bold text-navy/60 uppercase tracking-[0.12em] mb-3">What your {clientNoun} walks away with</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Custom prompt templates per role",
                  "Voice-matched AI outputs",
                  "Role-by-role playbook",
                  "Zoom AI configured",
                  "Team training completed",
                  "Full documentation & guides",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-navy flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs font-medium text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {systemsWeSetUp.map((feature, i) => (
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

          {/* Before/After */}
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
                  <h3 className="text-lg font-semibold text-white">How It Works In Practice</h3>
                  <p className="text-xs text-neutral-300">Copy the prompt. Paste it in. Done.</p>
                </div>
              </div>

              <p className="text-sm text-neutral-200 mb-6 leading-relaxed">
                Here&apos;s what your team&apos;s day looks like after we set things up.
                Each task uses a simple copy-and-paste prompt — no technical skills required.
              </p>

              <div className="space-y-3">
                {useCases.map((item, i) => (
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
                        {item.savings} faster
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

const defaultUseCases: UseCase[] = [
  { task: "Client intake processing", howItWorks: "Your front desk pastes messy intake notes into Claude with our pre-built prompt.", before: "45 min", after: "2 min", savings: "96%" },
  { task: "Professional emails", howItWorks: "Your team pastes a quick update into Claude with our email prompt and gets a polished draft.", before: "20 min", after: "2 min", savings: "90%" },
  { task: "Meeting summaries", howItWorks: "After any Zoom call, Zoom AI Companion automatically generates a summary.", before: "15 min", after: "Instant", savings: "100%" },
  { task: "Document drafting", howItWorks: "Your staff pastes key details into Claude with our template and gets a formatted document back.", before: "30 min", after: "5 min", savings: "83%" },
];
