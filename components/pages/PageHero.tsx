"use client";

import { motion } from "framer-motion";

/* Reusable hero block for the secondary content pages (/sprint, /why-now,
 * /bar-ethics, /practice-areas). Matches the homepage navy + gold palette but
 * leaves more breathing room above-the-fold for long-form copy below.        */

interface PageHeroProps {
  eyebrow: string;
  headline: string;
  accentHeadline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustItems?: string[];
}

export default function PageHero({
  eyebrow,
  headline,
  accentHeadline,
  subheadline,
  primaryCta,
  secondaryCta,
  trustItems,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0F2240]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#132D54]/90 via-[#163052] to-[#0F2240]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,rgba(40,75,120,0.35),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(212,165,116,0.16),transparent)] pointer-events-none" />
      <div className="absolute inset-0 grain opacity-[0.03]" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-semibold text-gold/90 uppercase tracking-[0.15em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            {eyebrow}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-display font-semibold text-white tracking-tight leading-[1.08]">
            {headline}
            <br />
            <span className="font-serif italic font-normal text-gold">{accentHeadline}</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-neutral-200 max-w-2xl leading-relaxed">
            {subheadline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={primaryCta.href}
              className="group px-7 py-3.5 text-base font-semibold text-navy-900 bg-gold rounded-xl hover:bg-gold-hover transition-all shadow-[0_4px_20px_rgba(212,165,116,0.3)] hover:shadow-[0_8px_30px_rgba(212,165,116,0.4)] hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              {primaryCta.label}
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="px-7 py-3.5 text-base font-semibold text-white/90 bg-white/[0.06] border border-white/[0.12] rounded-xl hover:bg-white/[0.1] hover:border-white/[0.2] transition-all backdrop-blur-sm inline-flex items-center"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>

          {trustItems && trustItems.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-1">
              {trustItems.map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-sm text-neutral-300">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
