"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/* Practice-areas content rendered with a sticky left-rail TOC + click-to-
 * expand cards. Solves the 12-section-scroll-of-doom problem on /practice-
 * areas while keeping every workflow searchable for SEO. The first
 * practice area is open by default so the page reads informative even
 * without any clicks.                                                      */

export interface PracticeArea {
  name: string;
  slug: string;
  framing: string;
  workflows: string[];
}

interface PracticeAreasListProps {
  areas: PracticeArea[];
}

export default function PracticeAreasList({ areas }: PracticeAreasListProps) {
  const [openSlug, setOpenSlug] = useState<string>(areas[0]?.slug ?? "");

  const handleTocClick = (slug: string) => {
    setOpenSlug(slug);
    // Smooth-scroll the heading into view, accounting for the sticky nav.
    requestAnimationFrame(() => {
      document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <section className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/30 to-white pointer-events-none" />
      <div className="container-main relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sticky TOC on desktop */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.12em] text-navy mb-3">
                Twelve practice areas
              </p>
              <nav aria-label="Practice areas table of contents">
                <ol className="space-y-1">
                  {areas.map((area, idx) => {
                    const isActive = openSlug === area.slug;
                    return (
                      <li key={area.slug}>
                        <button
                          onClick={() => handleTocClick(area.slug)}
                          className={`group flex w-full items-baseline gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
                            isActive
                              ? "bg-navy-50 text-navy"
                              : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                          }`}
                        >
                          <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.12em] ${isActive ? "text-navy" : "text-neutral-400 group-hover:text-neutral-600"}`}>
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm font-medium leading-snug">
                            {area.name}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </nav>
            </div>
          </aside>

          {/* Content column with expandable cards */}
          <div className="lg:col-span-9 space-y-4">
            {areas.map((area, idx) => {
              const isOpen = openSlug === area.slug;
              return (
                <motion.article
                  key={area.slug}
                  id={area.slug}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  className={`rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-navy-200/70 shadow-elevated"
                      : "border-neutral-200/80 shadow-subtle hover:border-neutral-300/80"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenSlug(isOpen ? "" : area.slug)}
                    className="flex w-full items-start justify-between gap-4 p-6 md:p-7 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.12em] text-navy mb-2 block">
                        {String(idx + 1).padStart(2, "0")} · practice area
                      </span>
                      <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 leading-tight">
                        {area.name}
                      </h2>
                      {!isOpen && (
                        <p className="mt-2 text-sm text-neutral-600 leading-relaxed line-clamp-2">
                          {area.framing}
                        </p>
                      )}
                    </div>
                    <span
                      className={`flex-shrink-0 mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
                        isOpen
                          ? "bg-navy text-white border-navy"
                          : "bg-white text-neutral-500 border-neutral-200 group-hover:border-neutral-400"
                      }`}
                      aria-hidden="true"
                    >
                      <svg className={`w-4 h-4 transition-transform ${isOpen ? "rotate-45" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-7 pb-7">
                        <p className="text-sm text-neutral-700 leading-relaxed mb-5">
                          {area.framing}
                        </p>
                        <div className="p-5 rounded-xl bg-navy-50/70 border border-navy-100">
                          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.12em] text-navy mb-3">
                            Workflows we typically author for this practice
                          </p>
                          <ul className="space-y-3">
                            {area.workflows.map((w) => (
                              <li key={w} className="flex items-start gap-3">
                                <svg className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-sm text-neutral-800 leading-relaxed">{w}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
