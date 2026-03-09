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
    "Your data stays in your systems — we never store it",
    "Every output verified with citations",
    "Live in weeks, not months",
  ];

  const stats = [
    { value: 80, suffix: "%+", label: "faster first-pass contract review" },
    { value: 100, suffix: "+", label: "page documents triaged in minutes" },
    { value: 0, suffix: "", label: "unverified outputs shipped" },
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
                  AI Consulting &amp; Integration for Law Firms
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-display font-semibold text-white tracking-tight leading-[1.08]"
              >
                Your attorneys practice law.
                <br />
                <span className="font-serif italic font-normal text-gold">We build the AI behind it.</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="mt-6 text-lg md:text-xl text-neutral-200 max-w-xl leading-relaxed"
              >
                We consult on your workflows, build AI tools that read your contracts and flag what matters, and connect everything to iManage, Clio, or NetDocuments. Then we train your team to run it all. No coding. No disruption.
              </motion.p>

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
                  See How It Works
                  <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 text-lg font-semibold text-white/90 bg-white/[0.06] border border-white/[0.12] rounded-xl hover:bg-white/[0.1] hover:border-white/[0.2] transition-all backdrop-blur-sm"
                >
                  Schedule a Consultation
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

            {/* Right: Product Preview Card — Redline Summary */}
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
                    <span className="text-xs font-medium text-neutral-300 ml-2">Sidebar AI — Contract Review</span>
                  </div>

                  {/* User message — shows it's a conversation */}
                  <div className="px-5 pt-4 pb-2">
                    <div className="flex items-start gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[9px] font-bold text-gold">JL</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-medium text-neutral-200">You</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mb-1">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[10px] text-neutral-300">
                            <svg className="w-3 h-3 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                            </svg>
                            SupplyAgreement_v3.docx
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[10px] text-neutral-300">
                            <svg className="w-3 h-3 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                            </svg>
                            SupplyAgreement_v4.docx
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-300 leading-relaxed">Compare these — I&apos;m representing the Buyer.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mx-5 border-t border-white/[0.06]" />

                  {/* AI response */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                      <span className="text-xs font-semibold text-gold uppercase tracking-wider">AI Analysis Complete</span>
                    </div>

                    {/* Red flag item */}
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-red-300 bg-red-500/20 rounded-full">HIGH RISK</span>
                        <span className="text-[10px] text-neutral-400">§4.2 Indemnification</span>
                      </div>
                      <p className="text-xs text-neutral-200 leading-relaxed">Liability cap removed entirely. Previous draft capped at 2x contract value. <span className="text-red-300 font-medium">Exposure now unlimited.</span></p>
                      <p className="text-[11px] text-neutral-400 mt-1.5 italic">Suggested response: Reinstate cap at 2x or propose mutual carve-outs for gross negligence only.</p>
                    </div>

                    {/* Yellow flag item */}
                    <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/20 rounded-full">REVIEW</span>
                        <span className="text-[10px] text-neutral-400">§7.1 Termination</span>
                      </div>
                      <p className="text-xs text-neutral-200 leading-relaxed">Cure period shortened from 30 days to 10 days. <span className="text-amber-300 font-medium">May be insufficient for complex breaches.</span></p>
                    </div>

                    {/* Green item */}
                    <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/20 rounded-full">STANDARD</span>
                        <span className="text-[10px] text-neutral-400">§2.1 Payment Terms</span>
                      </div>
                      <p className="text-xs text-neutral-200 leading-relaxed">Net 30 → Net 45. Minor change, favorable to client.</p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-5 py-3 bg-[#0d1c33] border-t border-white/[0.1] flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-[10px] text-neutral-400 uppercase tracking-wider">Changes found</p>
                        <p className="text-sm font-bold text-gold">14 changes</p>
                      </div>
                      <div className="w-px h-6 bg-white/15" />
                      <div>
                        <p className="text-[10px] text-neutral-400 uppercase tracking-wider">First-pass time saved</p>
                        <p className="text-sm font-bold text-white">~80%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] text-emerald-400 font-medium">All citations verified</span>
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
