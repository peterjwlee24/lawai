"use client";

import { motion } from "framer-motion";

const differentiators = [
  {
    label: "Not a workshop",
    detail: "We build your system, not a slide deck",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
      </svg>
    ),
  },
  {
    label: "We never touch your data",
    detail: "Your team uses the tools directly",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    label: "Operations only",
    detail: "We don't touch your case work",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Set up & hand off",
    detail: "No retainer, no dependency",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function TrustBadges() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="bg-white border-y border-neutral-100 py-5"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {differentiators.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2.5 group"
            >
              <div className="text-navy-400 group-hover:text-navy transition-colors">
                {item.icon}
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm font-semibold text-neutral-700">
                  {item.label}
                </span>
                <span className="hidden sm:inline text-xs text-neutral-600">
                  — {item.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
