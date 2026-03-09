"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

interface NavigationProps {
  brandName?: string;
  currentSlug?: string;
  darkHero?: boolean;
}

export default function Navigation({ brandName = "Sidebar AI", currentSlug, darkHero = true }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const useDark = scrolled || !darkHero;

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Services", href: "#features" },
    { label: "Demo", href: "#demo" },
    // { label: "Pricing", href: "#pricing" }, // uncomment when Pricing section is live
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
