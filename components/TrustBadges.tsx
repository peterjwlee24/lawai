"use client";

import { motion } from "framer-motion";

const trustChips = [
  {
    label: "Built on Anthropic Claude for Legal",
    detail: "Launched May 12, 2026",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    label: "ABA Model Rules 1.1 · 1.6 · 5.3",
    detail: "Mapped and documented",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    label: "Live consultation, fully remote",
    detail: "Senior engineer on the call",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72M6.633 10.5h10.734M3 17.25v-9a4.5 4.5 0 014.5-4.5h9a4.5 4.5 0 014.5 4.5v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 17.25z" />
      </svg>
    ),
  },
  {
    label: "Fixed scope, fixed timeline",
    detail: "Up to 3 weeks async prep + 1 live sprint week",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
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
          {trustChips.map((item) => (
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
