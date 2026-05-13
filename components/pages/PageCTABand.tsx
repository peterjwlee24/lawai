"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PageCTABandProps {
  headline: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function PageCTABand({
  headline,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: PageCTABandProps) {
  return (
    <section className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F2240] via-navy-900 to-[#0F2240]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(212,165,116,0.1),transparent)] pointer-events-none" />
      <div className="absolute inset-0 grain opacity-[0.03]" />

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-headline font-semibold text-white tracking-tight">
            {headline}
          </h2>
          <p className="mt-4 text-body-lg text-neutral-300 leading-relaxed">
            {body}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={primaryHref}
              className="group px-8 py-4 text-lg font-semibold text-navy-900 bg-gold rounded-xl hover:bg-gold-hover transition-all shadow-[0_4px_20px_rgba(212,165,116,0.3)] hover:shadow-[0_8px_30px_rgba(212,165,116,0.4)] hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              {primaryLabel}
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="px-8 py-4 text-lg font-semibold text-white/90 bg-white/[0.06] border border-white/[0.12] rounded-xl hover:bg-white/[0.1] hover:border-white/[0.2] transition-all backdrop-blur-sm"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
