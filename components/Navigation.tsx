"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  brandName?: string;
  currentSlug?: string;
  darkHero?: boolean;
}

/* All nav links are routed through Next.js Link so they work from any page.
 * Anchor links use the /#hash form — on the home page Next handles this as a
 * smooth-scroll-to-hash; on other pages it navigates to home first and the
 * browser's native hash handling scrolls. This is the documented Next 15+/16
 * pattern and resolves the bug where #how-it-works/#tiers/#faq were dead
 * clicks on /seminars and /sprint.                                          */

interface NavLink {
  label: string;
  /** anchor-on-home routes (e.g. /#how-it-works) OR full route paths (/seminars) */
  href: string;
  /** the bare anchor (e.g. #how-it-works) used for the on-home IntersectionObserver */
  homeAnchor?: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "How it works", href: "/#how-it-works", homeAnchor: "#how-it-works" },
  { label: "Engagements",  href: "/#tiers",        homeAnchor: "#tiers" },
  { label: "Seminars",     href: "/seminars" },
  { label: "Sprint",       href: "/sprint" },
  { label: "Why now",      href: "/why-now" },
  { label: "FAQ",          href: "/#faq",          homeAnchor: "#faq" },
];

export default function Navigation({ brandName = "Sidebar AI", darkHero = true }: NavigationProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === "/";
  const useDark = scrolled || !darkHero;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver only meaningful on the home page (the only place the
  // hash sections exist). On other routes the activeSection state is unused.
  useEffect(() => {
    if (!isHome) return;
    const anchors = NAV_LINKS.filter((l) => l.homeAnchor).map((l) => l.homeAnchor as string);
    const sections = anchors
      .map((href) => document.querySelector(href))
      .filter((el): el is Element => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // For on-home anchor clicks, smooth-scroll without triggering a full route push.
  // For cross-page links, fall through to the default Link behavior.
  const handleLinkClick = (link: NavLink, e: React.MouseEvent) => {
    setMobileOpen(false);
    if (isHome && link.homeAnchor) {
      e.preventDefault();
      const el = document.querySelector(link.homeAnchor);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      // Keep the URL in sync so back-button works.
      if (typeof window !== "undefined") {
        history.pushState(null, "", link.homeAnchor);
      }
    }
  };

  const ctaHref = isHome ? "#contact" : "/#contact";
  const handleCtaClick = (e: React.MouseEvent) => {
    setMobileOpen(false);
    if (isHome) {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass border-b border-neutral-200/50 shadow-subtle" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-navy rounded-xl flex items-center justify-center shadow-subtle">
                <svg className="w-5 h-5 text-gold-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" />
                </svg>
              </div>
              <span className={`text-lg font-semibold transition-colors duration-300 ${useDark ? "text-neutral-900" : "text-white"}`}>
                {brandName}
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive =
                  // anchor active when on home and observer says so
                  (isHome && link.homeAnchor && activeSection === link.homeAnchor) ||
                  // cross-page active when pathname matches
                  (!link.homeAnchor && pathname === link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(link, e)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                      isActive
                        ? useDark ? "text-neutral-900" : "text-white"
                        : useDark ? "text-neutral-500 hover:text-neutral-900" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full ${useDark ? "bg-navy" : "bg-gold"}`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href={ctaHref}
                onClick={handleCtaClick}
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
                  useDark ? "text-white bg-navy hover:bg-navy-900" : "text-navy-900 bg-gold hover:bg-gold-hover"
                }`}
              >
                Book a consultation
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 transition-colors duration-300 ${useDark ? "text-neutral-700" : "text-white"}`}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Slide-in Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-prominent z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-5 border-b border-neutral-100">
                  <span className="text-lg font-semibold text-neutral-900">Menu</span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 text-neutral-500"
                    aria-label="Close menu"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex-1 p-5 space-y-1 overflow-y-auto">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(link, e)}
                      className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="p-5 border-t border-neutral-100">
                  <Link
                    href={ctaHref}
                    onClick={handleCtaClick}
                    className="block w-full text-center py-3 text-base font-semibold text-white bg-navy rounded-xl hover:bg-navy-900 transition-colors"
                  >
                    Book a consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
