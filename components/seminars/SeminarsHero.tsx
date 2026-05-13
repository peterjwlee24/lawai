"use client";

import { motion } from "framer-motion";

export default function SeminarsHero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-[88vh] flex flex-col overflow-hidden">
      {/* Layered background — same palette as homepage Hero so the brand feels continuous */}
      <div className="absolute inset-0 bg-[#0F2240]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#132D54]/90 via-[#163052] to-[#0F2240]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,rgba(40,75,120,0.35),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(212,165,116,0.18),transparent)] pointer-events-none" />
      <div className="absolute inset-0 grain opacity-[0.03]" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="h-[72px]" />

      <div className="flex-1 flex items-center relative">
        <div className="container-main py-12 md:py-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-semibold text-gold/90 uppercase tracking-[0.15em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  Partner-grade AI seminars · live remote
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-display font-semibold text-white tracking-tight leading-[1.06]"
              >
                The AI seminar your bar counsel{" "}
                <span className="font-serif italic font-normal text-gold">would actually approve.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="mt-6 text-lg md:text-xl text-neutral-200 max-w-2xl leading-relaxed"
              >
                A live working session, not a slide deck. Built for managing partners, practice leaders, and operations directors at mid-market and large law firms who want to make a real decision about Claude for Legal on a single call. Fully remote — we bring the platform, your matter playbook, and a working configuration over screen-share, and your team leaves with a written plan they can ship.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <button
                  onClick={() => scrollTo("seminar-inquiry")}
                  className="group px-8 py-4 text-lg font-semibold text-navy-900 bg-gold rounded-xl hover:bg-gold-hover transition-all shadow-[0_4px_20px_rgba(212,165,116,0.3)] hover:shadow-[0_8px_30px_rgba(212,165,116,0.4)] hover:-translate-y-0.5 flex items-center gap-2"
                >
                  Request a seminar for your firm
                  <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollTo("seminar-curriculum")}
                  className="px-8 py-4 text-lg font-semibold text-white/90 bg-white/[0.06] border border-white/[0.12] rounded-xl hover:bg-white/[0.1] hover:border-white/[0.2] transition-all backdrop-blur-sm"
                >
                  See the curriculum
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-1"
              >
                {[
                  "Fully remote — live working session over video",
                  "Half-day or full-day formats",
                  "Bar-compliant by design",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-1.5 text-sm text-neutral-300">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right column — module preview card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-72 h-72 bg-gold/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-navy/20 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative rounded-2xl border border-white/[0.15] bg-[#1a3354] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="px-5 py-3 bg-white/[0.06] border-b border-white/[0.1] flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/70" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/70" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
                    </div>
                    <span className="text-xs font-medium text-neutral-300 ml-2">Seminar agenda · half-day</span>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                      <span className="text-xs font-semibold text-gold uppercase tracking-wider">What you&apos;ll cover</span>
                    </div>

                    {[
                      { time: "00:00", title: "Where AI in law actually is right now", note: "Anthropic, Harvey, Legora — what's hype, what's shipped" },
                      { time: "00:45", title: "Walking the platform live", note: "Practice tools, connections, custom workflows, matter folders" },
                      { time: "01:30", title: "Bar ethics in the Claude era", note: "ABA 1.1 · 1.6 · 5.3 — your jurisdiction mapped" },
                      { time: "02:30", title: "Your firm's first workflow", note: "We build one with your real matter data on the call" },
                      { time: "03:30", title: "The decision on the call", note: "Written plan: sprint, pilot, or wait — straight answer" },
                    ].map((row) => (
                      <div key={row.time} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] transition-colors">
                        <span className="flex-shrink-0 w-14 text-center font-mono text-[10px] font-bold uppercase tracking-wider text-amber-200">{row.time}</span>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-white leading-tight">{row.title}</p>
                          <p className="text-[11px] text-neutral-300 leading-relaxed mt-0.5">{row.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="px-5 py-3 bg-[#0d1c33] border-t border-white/[0.1] flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-neutral-400 uppercase tracking-wider">Format</p>
                      <p className="text-sm font-bold text-gold">Live remote · screen-share over video</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] text-emerald-400 font-medium">Decision-grade</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
