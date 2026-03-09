"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import type { HeroStat, HeroDemoCard } from "@/data/industries";

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
  heroStats?: HeroStat[];
  heroDemoCard?: HeroDemoCard;
  brandName?: string;
  trustItems?: string[];
  urgencyText?: string;
}

export default function Hero({
  badge = "AI Consulting for Law Firms",
  headline = "Your attorneys practice law.",
  accentHeadline = "We automate everything else.",
  subheadline,
  heroStats,
  heroDemoCard,
  trustItems = ["We never touch your data", "Not case work — operations only", "Results in weeks"],
  urgencyText = "5 new firms",
}: HeroProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = heroStats || [
    { value: 63, suffix: "%", label: "of an attorney's day is non-billable work", source: "Clio 2024 Legal Trends" },
    { value: 60, suffix: "%", label: "of firms don't answer the phone", source: "Clio 2024 Secret Shopper" },
    { value: 50, suffix: "K+", label: "lost per lawyer yearly from billing delays", source: "Industry estimates" },
    { value: 70, suffix: "%", label: "of firms have no formal AI tools", source: "ABA 2024 Tech Survey" },
  ];

  const demo = heroDemoCard || {
    headerLabel: "Billing Narrative Template",
    beforeLabel: "Before",
    beforeTime: "30 min per batch",
    beforeLines: [
      "1/15 - 1.5h - call w/ client re: contract terms",
      "1/16 - 2.0h - reviewed draft, redlined sec 4-7",
      "1/17 - 0.5h - emails w/ opposing counsel",
    ],
    processingLabel: "Processed by Claude in seconds",
    afterLabel: "After",
    afterTime: "5 min — ready for invoice",
    afterTitle: "Professional Services — Chen v. Pacific Properties LLC",
    afterLines: [
      { date: "1/15/2025 — 1.5 hrs", hours: "", description: "Telephone conference with client regarding contract terms; analyzed indemnification provisions and liability allocation." },
      { date: "1/16/2025 — 2.0 hrs", hours: "", description: "Comprehensive review of opposing party's draft; prepared redline of Sections 4-7, including payment terms and dispute resolution." },
      { date: "1/17/2025 — 0.5 hrs", hours: "", description: "Correspondence with opposing counsel regarding scheduling of mediation; coordinated availability." },
    ],
    footerStat: "83%",
    footerStatLabel: "Time saved",
    footerStatus: "Invoice-ready",
  };

  const defaultSubheadline = 'Your attorneys bill <span class="font-semibold text-neutral-800">2.9 hours</span> of an 8-hour day. The rest disappears into intake, billing, emails, and admin. We show you the dozens of tasks AI can already handle, set up tools that write in your firm\'s voice, and leave your team with a simple system they run on their own.';

  return (
    <section className="relative min-h-[92vh] flex flex-col overflow-hidden">
      {/* Layered background — softened navy with warmer tones */}
      <div className="absolute inset-0 bg-[#0F2240]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#132D54]/90 via-[#163052] to-[#0F2240]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,rgba(40,75,120,0.35),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(212,165,116,0.15),transparent)] pointer-events-none" />

      {/* Grain */}
      <div className="absolute inset-0 grain opacity-[0.03]" />

      {/* Subtle grid lines */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Spacer: 64px nav + 44px industry bar */}
      <div className="h-[108px]" />

      <div className="flex-1 flex items-center relative">
        <div className="container-main py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              {/* Pre-headline badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-semibold text-gold/90 uppercase tracking-[0.15em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  {badge}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-display font-semibold text-white tracking-tight leading-[1.08]"
              >
                {headline}
                <br />
                <span className="font-serif italic font-normal text-gold">{accentHeadline}</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="mt-6 text-lg md:text-xl text-neutral-200 max-w-xl leading-relaxed [&_span]:text-white [&_span]:font-semibold"
                dangerouslySetInnerHTML={{ __html: subheadline || defaultSubheadline }}
              />

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <button
                  onClick={() => scrollToSection("demo")}
                  className="group px-8 py-4 text-lg font-semibold text-navy-900 bg-gold rounded-xl hover:bg-gold-hover transition-all shadow-[0_4px_20px_rgba(212,165,116,0.3)] hover:shadow-[0_8px_30px_rgba(212,165,116,0.4)] hover:-translate-y-0.5 flex items-center gap-2"
                >
                  See It In Action
                  <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 text-lg font-semibold text-white/90 bg-white/[0.06] border border-white/[0.12] rounded-xl hover:bg-white/[0.1] hover:border-white/[0.2] transition-all backdrop-blur-sm"
                >
                  Free Assessment
                </button>
              </motion.div>

              {/* Trust + urgency */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mt-8 space-y-3"
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
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold/60 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold" />
                  </span>
                  <span className="text-sm font-medium text-neutral-300">
                    Accepting <span className="text-gold font-semibold">{urgencyText}</span> this quarter
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right: Before/After Demo Card */}
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
                  {/* Header */}
                  <div className="px-5 py-3 bg-white/[0.06] border-b border-white/[0.1] flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/70" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/70" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
                    </div>
                    <span className="text-xs font-medium text-neutral-300 ml-2">{demo.headerLabel}</span>
                  </div>

                  {/* Before */}
                  <div className="p-5 border-b border-white/[0.1]">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-300 bg-red-500/20 border border-red-500/30 rounded-full">{demo.beforeLabel}</span>
                      <span className="text-xs text-neutral-400">{demo.beforeTime}</span>
                    </div>
                    <div className="font-mono text-xs text-neutral-300 space-y-1.5 bg-black/20 rounded-lg p-3.5 border border-white/[0.08]">
                      {demo.beforeLines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>

                  {/* AI Processing indicator */}
                  <div className="px-5 py-3 bg-gold/[0.12] border-y border-gold/[0.15] flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                    <span className="text-xs font-semibold text-gold">{demo.processingLabel}</span>
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                  </div>

                  {/* After */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/20 border border-emerald-500/30 rounded-full">{demo.afterLabel}</span>
                      <span className="text-xs text-neutral-400">{demo.afterTime}</span>
                    </div>
                    <div className="text-[13px] text-neutral-200 space-y-2.5 bg-black/15 rounded-lg p-3.5 border border-white/[0.1]">
                      <p className="font-semibold text-white text-sm">{demo.afterTitle}</p>
                      {demo.afterLines.map((line) => (
                        <p key={line.date} className="leading-relaxed"><span className="text-neutral-400">{line.date}</span> — {line.description}</p>
                      ))}
                    </div>
                  </div>

                  {/* Footer stats */}
                  <div className="px-5 py-3 bg-[#0d1c33] border-t border-white/[0.1] flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-[10px] text-neutral-400 uppercase tracking-wider">{demo.footerStatLabel}</p>
                        <p className="text-sm font-bold text-gold">{demo.footerStat}</p>
                      </div>
                      <div className="w-px h-6 bg-white/15" />
                      <div>
                        <p className="text-[10px] text-neutral-400 uppercase tracking-wider">Copy &amp; paste</p>
                        <p className="text-sm font-bold text-white">No code</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] text-emerald-400 font-medium">{demo.footerStatus}</span>
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
            className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-white/[0.06] border border-white/[0.08]"
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
                <p className="mt-1 text-xs text-neutral-400">{stat.source}</p>
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
