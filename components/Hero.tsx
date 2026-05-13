"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

function AnimatedStat({ value, suffix = "" }: { value: number; suffix?: string }) {
  const springRef = useRef(useSpring(0, { stiffness: 50, damping: 20 }));
  const spring = springRef.current;
  const display = useTransform(spring, (v) => Math.round(v));
  const [current, setCurrent] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (hasAnimatedRef.current) return;
    const timer = setTimeout(() => {
      spring.set(value);
      hasAnimatedRef.current = true;
    }, 800);
    return () => clearTimeout(timer);
  }, [spring, value]);

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => setCurrent(v));
    return unsubscribe;
  }, [display]);

  return <><motion.span>{current}</motion.span>{suffix}</>;
}

interface HeroProps {
  badge?: string;
  headline?: string;
  accentHeadline?: string;
  subheadline?: string;
  heroStats?: { value: number; suffix?: string; label: string; source?: string }[];
  heroDemoCard?: import("@/data/industries").HeroDemoCard;
  brandName?: string;
  trustItems?: string[];
  urgencyText?: string;
}

export default function Hero(_props?: HeroProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const trustItems = [
    "Up to three weeks of async prep — often less; no calendar pile-up on your partners",
    "One live Mon–Fri integration sprint — senior engineer on every call",
    "Working firm in a matter of weeks, not months",
  ];

  const stats = [
    { value: 4, suffix: " weeks", label: "typical end-to-end — up to 3 weeks async prep, 1 week live integration sprint" },
    { value: 12, suffix: "", label: "practice-area workflows turned on — Corporate, M&A, IP, Employment, more" },
    { value: 20, suffix: "+", label: "secure connections into iManage, NetDocuments, Clio, Outlook, Word" },
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-[#0F2240]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#132D54]/90 via-[#163052] to-[#0F2240]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,rgba(40,75,120,0.35),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(212,165,116,0.15),transparent)] pointer-events-none" />

      {/* Grain */}
      <div className="absolute inset-0 grain opacity-[0.03]" />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Nav spacer */}
      <div className="h-[72px]" />

      <div className="flex-1 flex items-center relative">
        <div className="container-main py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-semibold text-gold/90 uppercase tracking-[0.15em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  Claude for Legal — Implementation Partner
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-display font-semibold text-white tracking-tight leading-[1.08]"
              >
                Anthropic launched Claude for Legal.
                <br />
                <span className="font-serif italic font-normal text-gold">Your firm runs on it weeks later — not months.</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="mt-6 text-lg md:text-xl text-neutral-200 max-w-xl leading-relaxed"
              >
                We&apos;re a fully remote implementation partner for boutique law firms. The work splits into two phases: up to three weeks of async prep — discovery, custom integrations coded, workflows drafted, bar-compliant policy prepared, training videos recorded — followed by a single live Mon–Fri integration sprint where we put everything into your firm&apos;s environment, test it on your real matter data, and train your team live. Simpler stacks finish faster. No coding on your side. Your firm owns it on Friday of sprint week.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <button
                  onClick={() => scrollToSection("contact")}
                  className="group px-8 py-4 text-lg font-semibold text-navy-900 bg-gold rounded-xl hover:bg-gold-hover transition-all shadow-[0_4px_20px_rgba(212,165,116,0.3)] hover:shadow-[0_8px_30px_rgba(212,165,116,0.4)] hover:-translate-y-0.5 flex items-center gap-2"
                >
                  Book an initial consultation
                  <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="px-8 py-4 text-lg font-semibold text-white/90 bg-white/[0.06] border border-white/[0.12] rounded-xl hover:bg-white/[0.1] hover:border-white/[0.2] transition-all backdrop-blur-sm"
                >
                  See the plan
                </button>
              </motion.div>

              {/* Trust markers */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mt-8"
              >
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
                  {trustItems.map((item) => (
                    <span key={item} className="flex items-center gap-1.5 text-sm text-neutral-300">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Product Preview Card — The Week, Visualized */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Glow effects */}
                <div className="absolute -top-8 -right-8 w-80 h-80 bg-gold/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute -bottom-8 -left-8 w-80 h-80 bg-navy/20 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative rounded-2xl border border-white/[0.15] bg-[#1a3354] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
                  {/* Window chrome */}
                  <div className="px-5 py-3 bg-white/[0.06] border-b border-white/[0.1] flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/70" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/70" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
                    </div>
                    <span className="text-xs font-medium text-neutral-300 ml-2">Sidebar AI — Implementation plan</span>
                  </div>

                  {/* Day-by-day plan */}
                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                      <span className="text-xs font-semibold text-gold uppercase tracking-wider">Async prep + live sprint</span>
                    </div>

                    {[
                      { day: "01", phase: "Async Discovery", note: "Intake form, sanitized matter samples, screen-recorded workflow walkthroughs. We learn how your firm runs without scheduling a single call.", color: "bg-violet-500/15 border-violet-500/30 text-violet-200" },
                      { day: "02", phase: "Async Build", note: "Custom integration code written, workflows authored against your playbook, bar-compliant usage policy drafted to your jurisdiction.", color: "bg-indigo-500/15 border-indigo-500/30 text-indigo-200" },
                      { day: "03", phase: "Async Prep", note: "Training video course recorded on your configured tenant. Policy reviewed by your malpractice carrier. Final scope confirmed.", color: "bg-sky-500/15 border-sky-500/30 text-sky-200" },
                      { day: "04", phase: "Live Sprint · Mon–Fri", note: "Five live days — integration go-live, real-matter-data testing, refinement, live training, handover. The sprint week.", color: "bg-amber-500/15 border-amber-500/30 text-amber-200" },
                      { day: "05", phase: "Working firm", note: "30/60/90-day async check-ins. Email support. Your firm running independently on Claude for Legal.", color: "bg-emerald-500/15 border-emerald-500/30 text-emerald-200" },
                    ].map((row) => (
                      <div key={row.day} className={`flex items-start gap-3 p-3 rounded-lg border ${row.color}`}>
                        <span className="flex-shrink-0 w-9 text-center font-mono text-[11px] font-bold uppercase tracking-wider">{row.day}</span>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-white leading-tight">{row.phase}</p>
                          <p className="text-[11px] text-neutral-300 leading-relaxed mt-0.5">{row.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="px-5 py-3 bg-[#0d1c33] border-t border-white/[0.1] flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-[10px] text-neutral-400 uppercase tracking-wider">Built on</p>
                        <p className="text-sm font-bold text-gold">Anthropic Claude for Legal</p>
                      </div>
                      <div className="w-px h-6 bg-white/15" />
                      <div>
                        <p className="text-[10px] text-neutral-400 uppercase tracking-wider">Bar-compliant</p>
                        <p className="text-sm font-bold text-white">ABA 1.1 · 1.6 · 5.3</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] text-emerald-400 font-medium">Weeks, not months</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid sm:grid-cols-3 gap-px rounded-2xl overflow-hidden bg-white/[0.06] border border-white/[0.08]"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="bg-white/[0.02] backdrop-blur-sm p-6 text-center border-r border-b border-white/[0.06] last:border-r-0"
              >
                <p className="text-3xl md:text-4xl font-semibold text-gold tracking-tight">
                  <AnimatedStat value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1.5 text-sm text-neutral-200 leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
