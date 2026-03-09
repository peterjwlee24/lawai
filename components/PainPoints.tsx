"use client";

import { motion } from "framer-motion";
import type { PainPoint } from "@/data/industries";

const iconMap: Record<string, React.ReactNode> = {
  "text-rose-500": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "text-amber-600": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  ),
  "text-sky-600": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  "text-violet-600": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
    </svg>
  ),
};

interface PainPointsProps {
  painPoints?: PainPoint[];
  sectionLabel?: string;
}

export default function PainPoints({ painPoints: propPainPoints, sectionLabel = "every law firm" }: PainPointsProps) {
  const points = propPainPoints || defaultPainPoints;

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/80 via-white to-white pointer-events-none" />

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-xs font-semibold text-rose-600 uppercase tracking-wider mb-4">
            The Problem
          </span>
          <h2 className="text-headline text-neutral-900">
            The operational tax on{" "}
            <span className="font-serif italic font-normal">{sectionLabel}</span>
          </h2>
          <p className="mt-3 text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Your team may have heard of AI. But the business side — communications, admin,
            reporting, and marketing — has dozens of AI use cases most businesses don&apos;t even know about yet.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl bg-white border border-neutral-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden"
            >
              {/* Accent top border */}
              <div className={`h-1 w-full ${point.bg}`} />

              <div className="p-6 md:p-7">
                <div className="flex items-start gap-5">
                  {/* Big stat number */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className={`text-4xl md:text-5xl font-bold ${point.color} tracking-tight leading-none`}>
                      {point.stat}
                    </div>
                    <div className={`mt-2 w-10 h-10 rounded-xl ${point.bg} ${point.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {iconMap[point.color] || iconMap["text-rose-500"]}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-neutral-900 leading-tight">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                      {point.description}
                    </p>

                    {/* How we fix it */}
                    <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-navy-50 to-navy-50/50 border border-navy-100/60">
                      <p className="text-[10px] font-bold text-navy/60 uppercase tracking-[0.12em] mb-1.5">How we fix it</p>
                      <p className="text-xs font-medium text-navy leading-relaxed">
                        {point.tools}
                      </p>
                    </div>

                    <p className="mt-3 text-xs text-neutral-500 italic">{point.source}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-br from-navy-900 via-[#1a3a5f] to-navy-900 border border-navy-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(212,165,116,0.08),transparent)] pointer-events-none" />
            <div className="relative">
              <p className="text-lg font-semibold text-white mb-2">
                Most businesses know AI can help. Few actually implement it.
              </p>
              <p className="text-sm text-neutral-200 mb-6 leading-relaxed">
                Businesses try ChatGPT once, get a generic result, and stop.
                We know exactly which tasks to automate, build the templates for you, and make sure your team actually uses them daily.
              </p>
              <button
                onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-navy-900 bg-gold rounded-xl hover:bg-gold-hover transition-all shadow-[0_4px_16px_rgba(212,165,116,0.3)] hover:-translate-y-0.5"
              >
                See how we fix this
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const defaultPainPoints: PainPoint[] = [
  { stat: "63%", title: "of your day is non-billable", description: "Attorneys average just 2.9 billable hours out of an 8-hour day.", source: "Clio 2024 Legal Trends Report", tools: "We set up Claude with ready-made templates so your team drafts emails, formats documents, and summarizes notes in seconds.", color: "text-rose-500", bg: "bg-rose-50", border: "border-rose-100" },
  { stat: "$50K+", title: "lost per lawyer, per year", description: "Delayed time entries cause massive revenue leakage.", source: "LawBillity / LeanLaw industry estimates", tools: "With our billing template, your staff pastes time entries into Claude and gets clean, professional billing language back in seconds.", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
  { stat: "60%", title: "of calls go unanswered", description: "Only 40% of law firms answer client calls.", source: "Clio 2024 Secret Shopper Study", tools: "We build follow-up email templates so your team responds to every inquiry within minutes.", color: "text-sky-600", bg: "bg-sky-50", border: "border-sky-100" },
  { stat: "51%", title: "burnout rate for associates", description: "Over half of mid-level associates experience burnout from repetitive operational busywork.", source: "Bloomberg Law 2024 Attorney Workload Survey", tools: "Ready-made templates let your team offload repetitive work to Claude.", color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100" },
];
