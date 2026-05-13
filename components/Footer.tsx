"use client";

import Link from "next/link";

interface FooterProps {
  brandName?: string;
}

export default function Footer(_props?: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-900">
      <div className="container-main py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-gold-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-white">Sidebar AI</span>
            </Link>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Claude for Legal implementation partner for boutique law firms. Up to three weeks of async prep + one live Mon–Fri sprint week. Bar-compliant by design.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider mb-4">
              Engagement
            </h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection("how-it-works")} className="text-sm text-neutral-300 hover:text-white transition-colors">
                  The implementation sprint
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("what-we-build")} className="text-sm text-neutral-300 hover:text-white transition-colors">
                  What ships
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("features")} className="text-sm text-neutral-300 hover:text-white transition-colors">
                  Bar-compliant safeguards
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("faq")} className="text-sm text-neutral-300 hover:text-white transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Programs + sub-pages */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider mb-4">
              Programs &amp; pages
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/seminars" className="text-sm text-neutral-300 hover:text-white transition-colors">
                  Partner-grade AI seminars
                </Link>
              </li>
              <li>
                <Link href="/sprint" className="text-sm text-neutral-300 hover:text-white transition-colors">
                  The implementation sprint
                </Link>
              </li>
              <li>
                <Link href="/why-now" className="text-sm text-neutral-300 hover:text-white transition-colors">
                  Why now — Claude for Legal briefing
                </Link>
              </li>
              <li>
                <Link href="/bar-ethics" className="text-sm text-neutral-300 hover:text-white transition-colors">
                  Bar ethics &amp; confidentiality
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="text-sm text-neutral-300 hover:text-white transition-colors">
                  Practice areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@sidebarai.us" className="text-sm text-neutral-300 hover:text-white transition-colors">
                  hello@sidebarai.us
                </a>
              </li>
              <li className="text-sm text-neutral-400">
                Live remote consultations
              </li>
              <li className="text-sm text-neutral-400">
                Response within one business day
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            &copy; {currentYear} Sidebar AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-xs text-neutral-500">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              Built on Anthropic Claude for Legal
            </span>
            <span className="flex items-center gap-1.5 text-xs text-neutral-500">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              ABA Model Rules 1.1 · 1.6 · 5.3
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
