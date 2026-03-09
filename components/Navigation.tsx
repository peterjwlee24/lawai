"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface NavigationProps {
  brandName?: string;
  currentSlug?: string;
  darkHero?: boolean;
}

const industries = [
  { name: "Law Firms", slug: "law-firms", icon: "scale" },
  { name: "CPA Firms", slug: "cpa-firms", icon: "calculator" },
  { name: "Real Estate", slug: "real-estate", icon: "home" },
  { name: "Insurance", slug: "insurance", icon: "shield" },
  { name: "Restaurants", slug: "restaurants", icon: "utensils" },
];

const industryIcons: Record<string, React.ReactNode> = {
  scale: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
    </svg>
  ),
  calculator: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
    </svg>
  ),
  home: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  shield: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  utensils: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
    </svg>
  ),
};

export default function Navigation({ brandName = "Blueprint AI", currentSlug, darkHero = true }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Use dark text when scrolled OR when hero is light-colored
  const useDark = scrolled || !darkHero;

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Services", href: "#features" },
    { label: "Demo", href: "#demo" },
    { label: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hrefs = ["#how-it-works", "#features", "#demo", "#faq"];
    const sections = hrefs.map((href) => document.querySelector(href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIndustriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass border-b border-neutral-200/50 shadow-subtle"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-navy rounded-xl flex items-center justify-center shadow-subtle">
                <svg
                  className="w-5 h-5 text-gold-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"
                  />
                </svg>
              </div>
              <span className={`text-lg font-semibold transition-colors duration-300 ${useDark ? "text-neutral-900" : "text-white"}`}>
                {brandName}
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {/* Industries Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIndustriesOpen(!industriesOpen)}
                  onMouseEnter={() => setIndustriesOpen(true)}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    industriesOpen
                      ? useDark ? "text-neutral-900 bg-neutral-100" : "text-white bg-white/10"
                      : useDark ? "text-neutral-500 hover:text-neutral-900" : "text-white/70 hover:text-white"
                  }`}
                >
                  Industries
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                <AnimatePresence>
                  {industriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      onMouseLeave={() => setIndustriesOpen(false)}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl border border-neutral-200 shadow-elevated overflow-hidden"
                    >
                      <div className="p-2">
                        {industries.map((industry) => (
                          <Link
                            key={industry.slug}
                            href={`/${industry.slug}`}
                            onClick={() => setIndustriesOpen(false)}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-700 hover:bg-navy-50 hover:text-navy transition-colors"
                          >
                            <span className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-500 group-hover:bg-navy-50 group-hover:text-navy">
                              {industryIcons[industry.icon]}
                            </span>
                            {industry.name}
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-neutral-100 p-2">
                        <Link
                          href="/#industries"
                          onClick={() => setIndustriesOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-neutral-500 hover:text-navy hover:bg-navy-50 transition-colors"
                        >
                          View all industries
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    activeSection === link.href
                      ? useDark ? "text-neutral-900" : "text-white"
                      : useDark ? "text-neutral-500 hover:text-neutral-900" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full ${useDark ? "bg-navy" : "bg-gold"}`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => scrollToSection("#contact")}
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
                  useDark
                    ? "text-white bg-navy hover:bg-navy-900"
                    : "text-navy-900 bg-gold hover:bg-gold-hover"
                }`}
              >
                Schedule Consultation
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 transition-colors duration-300 ${useDark ? "text-neutral-700" : "text-white"}`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Industry Quick-Switch Bar (industry pages only) */}
      {currentSlug && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className={`fixed top-[64px] left-0 right-0 z-40 transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-subtle"
              : "bg-white/[0.04] backdrop-blur-sm border-b border-white/[0.06]"
          }`}
        >
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="flex items-center gap-1 py-2 overflow-x-auto no-scrollbar">
              <span className={`text-[11px] font-medium uppercase tracking-wider mr-2 whitespace-nowrap ${
                scrolled ? "text-neutral-500" : "text-white/60"
              }`}>
                Industries
              </span>
              {industries.map((industry) => {
                const isActive = currentSlug === industry.slug;
                return (
                  <Link
                    key={industry.slug}
                    href={`/${industry.slug}`}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? scrolled
                          ? "bg-navy text-white shadow-sm"
                          : "bg-white/15 text-white border border-white/20"
                        : scrolled
                          ? "text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100"
                          : "text-white/50 hover:text-white/80 hover:bg-white/[0.08]"
                    }`}
                  >
                    <span className="w-4 h-4 flex items-center justify-center opacity-70">
                      {industryIcons[industry.icon]}
                    </span>
                    {industry.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}

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
                  <span className="text-lg font-semibold text-neutral-900">
                    Menu
                  </span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 text-neutral-500"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex-1 p-5 space-y-1 overflow-y-auto">
                  {/* Mobile Industry Links */}
                  <p className="px-4 pt-2 pb-1 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Industries
                  </p>
                  {industries.map((industry) => (
                    <Link
                      key={industry.slug}
                      href={`/${industry.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-neutral-600 hover:bg-navy-50 hover:text-navy transition-colors"
                    >
                      <span className="w-7 h-7 rounded-md bg-neutral-100 flex items-center justify-center text-neutral-500">
                        {industryIcons[industry.icon]}
                      </span>
                      {industry.name}
                    </Link>
                  ))}

                  <div className="my-3 border-t border-neutral-100" />

                  {/* Mobile Nav Links */}
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        activeSection === link.href
                          ? "bg-accent-subtle text-navy"
                          : "text-neutral-700 hover:bg-neutral-50"
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>

                <div className="p-5 border-t border-neutral-100">
                  <button
                    onClick={() => scrollToSection("#contact")}
                    className="w-full py-3 text-base font-semibold text-white bg-navy rounded-xl hover:bg-navy-900 transition-colors"
                  >
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
