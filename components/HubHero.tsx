"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const industryLinks = [
  { name: "Law Firms", slug: "law-firms" },
  { name: "CPA Firms", slug: "cpa-firms" },
  { name: "Real Estate", slug: "real-estate" },
  { name: "Insurance", slug: "insurance" },
  { name: "Restaurants", slug: "restaurants" },
];

const toolkitItems = [
  {
    label: "10-15 Custom Commands",
    description: "One-click actions built for your daily tasks",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    preview: "/draft-email  ·  /billing-narrative  ·  /intake-summary",
  },
  {
    label: "Software Connections",
    description: "AI reads from the tools you already use",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    preview: "QuickBooks  ·  Clio  ·  Google Drive  ·  Square  ·  Xero",
  },
  {
    label: "2 Training Sessions",
    description: "Hands-on training for every role on your team",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    preview: "2-hr onboarding  ·  2-hr follow-up  ·  30-day support",
  },
  {
    label: "Printed Cheat Sheets",
    description: "Laminated reference card for every desk",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    preview: "Paralegal Card  ·  Billing Staff  ·  Front Desk  ·  Partners",
  },
];

export default function HubHero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#fafbfd]">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-50/60 via-transparent to-gold-50/30" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-navy-100/20 to-transparent rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-gold-100/15 to-transparent rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="h-16" />

      <div className="flex-1 flex items-center relative">
        <div className="container-main py-12 md:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-overline text-navy uppercase shadow-subtle">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  AI Implementation for Service Businesses
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-neutral-900 tracking-tight leading-[1.1]"
              >
                We don&apos;t teach AI.
                <br />
                <span className="font-serif italic font-normal text-navy">
                  We build your AI system.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-xl"
              >
                Other consultants give you a workshop and a slide deck. We build a
                complete AI toolkit custom to your business — ready-to-use commands,
                template libraries, software connections — then train your team to
                run it all independently.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <button
                  onClick={() => scrollToSection("contact")}
                  className="group px-7 py-3.5 text-[15px] font-semibold text-white bg-navy rounded-xl hover:bg-navy-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
                >
                  See what we&apos;d build for you
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollToSection("what-we-build")}
                  className="px-7 py-3.5 text-[15px] font-semibold text-neutral-700 bg-white border border-neutral-200 rounded-xl hover:border-navy-200 hover:text-navy transition-all shadow-subtle hover:shadow-elevated"
                >
                  How it works
                </button>
              </motion.div>

              {/* Trust markers */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
              >
                {["No coding required", "Set up & hand off", "Results in weeks"].map((item) => (
                  <span key={item} className="flex items-center gap-1.5 text-sm text-neutral-500">
                    <svg className="w-4 h-4 text-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right: Toolkit Visual */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl border border-neutral-200/80 shadow-elevated overflow-hidden">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-neutral-100 bg-neutral-50/50">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <span className="text-xs font-medium text-neutral-500 tracking-wide">Your AI Toolkit</span>
                  </div>
                  <div className="w-12" />
                </div>

                {/* Toolkit items */}
                <div className="p-4 space-y-3">
                  {toolkitItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="group flex items-start gap-3.5 p-3.5 rounded-xl border border-neutral-100 hover:border-navy-100 hover:bg-navy-50/30 transition-all duration-300 cursor-default"
                    >
                      <div className="w-9 h-9 rounded-lg bg-navy-50 text-navy flex items-center justify-center flex-shrink-0 group-hover:bg-navy-100 transition-colors">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-neutral-900">{item.label}</span>
                          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-gold-50 border border-gold-100 text-[10px] font-semibold text-gold-700 uppercase tracking-wider">
                            Built for you
                          </span>
                        </div>
                        <p className="text-xs text-neutral-600 mt-0.5">{item.description}</p>
                        <div className="mt-2 px-2.5 py-1.5 rounded-md bg-neutral-50 border border-neutral-100">
                          <code className="text-[11px] text-neutral-600 font-mono">{item.preview}</code>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom bar */}
                <div className="px-5 py-3 border-t border-neutral-100 bg-gradient-to-r from-navy-50/50 to-gold-50/30 flex items-center justify-between">
                  <span className="text-xs text-neutral-600">
                    Customized for <span className="font-semibold text-navy">your business</span>
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-success">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                    Ready to use
                  </span>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-br from-navy-100/40 to-gold-100/40" />
            </motion.div>
          </div>

          {/* Industry links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 pt-10 border-t border-neutral-200/60"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider whitespace-nowrap">We specialize in</span>
              <div className="flex flex-wrap justify-center gap-2">
                {industryLinks.map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/${industry.slug}`}
                    className="px-4 py-2 text-sm font-medium text-neutral-600 bg-white border border-neutral-200 rounded-full hover:border-navy-200 hover:text-navy hover:bg-navy-50 transition-all shadow-subtle hover:shadow-elevated"
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
