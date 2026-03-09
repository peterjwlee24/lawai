"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import type { DemoTab } from "@/data/industries";

type AccentTheme = "navy" | "emerald" | "sky" | "amber" | "rose";

/* ─── Per-theme visual configs ─── */

const themes: Record<AccentTheme, {
  badge: string;
  inputBg: string;
  inputIconBg: string;
  inputIconColor: string;
  inputLabelColor: string;
  inputSubColor: string;
  inputBorder: string;
  outputBg: string;
  outputIconBg: string;
  outputIconColor: string;
  progressGradient: string;
  successBg: string;
  successBorder: string;
  successText: string;
  tabActive: string;
  tabHover: string;
  containerBorder: string;
  containerShadow: string;
  actionBtn: string;
  actionBtnHover: string;
  tableHeaderBg: string;
  tableHeaderText: string;
  tableHighlight: string;
  emailHeaderBg: string;
  emailIconBg: string;
  emailIconColor: string;
  recBg: string;
  recBorder: string;
  recLabelColor: string;
  idleIconBg: string;
  idleIconColor: string;
  pattern: string;
}> = {
  navy: {
    badge: "bg-violet-50 border-violet-100 text-violet-600",
    inputBg: "from-amber-50/80 to-orange-50/40",
    inputIconBg: "bg-amber-100",
    inputIconColor: "text-amber-600",
    inputLabelColor: "text-amber-700",
    inputSubColor: "text-amber-600/70",
    inputBorder: "border-amber-200/60",
    outputBg: "from-slate-50 to-violet-50/30",
    outputIconBg: "bg-navy-100",
    outputIconColor: "text-navy",
    progressGradient: "from-navy to-violet-500",
    successBg: "bg-emerald-50",
    successBorder: "border-emerald-200",
    successText: "text-emerald-600",
    tabActive: "bg-navy text-white shadow-lg shadow-navy/20",
    tabHover: "hover:border-navy-200 hover:text-navy",
    containerBorder: "border-navy-200/40",
    containerShadow: "shadow-[0_8px_40px_rgba(30,58,95,0.08)]",
    actionBtn: "bg-navy",
    actionBtnHover: "hover:bg-navy-900",
    tableHeaderBg: "bg-navy-50",
    tableHeaderText: "text-navy-700",
    tableHighlight: "bg-navy-50/50",
    emailHeaderBg: "bg-gradient-to-r from-navy-50 to-violet-50",
    emailIconBg: "bg-navy",
    emailIconColor: "text-gold",
    recBg: "bg-navy-50",
    recBorder: "border-navy-100",
    recLabelColor: "text-navy/60",
    idleIconBg: "bg-navy-100/60",
    idleIconColor: "text-navy/40",
    pattern: "radial-gradient(circle at 1px 1px, rgba(30,58,95,0.04) 1px, transparent 0)",
  },
  emerald: {
    badge: "bg-emerald-50 border-emerald-100 text-emerald-600",
    inputBg: "from-emerald-50/80 to-teal-50/40",
    inputIconBg: "bg-emerald-100",
    inputIconColor: "text-emerald-600",
    inputLabelColor: "text-emerald-700",
    inputSubColor: "text-emerald-600/70",
    inputBorder: "border-emerald-200/60",
    outputBg: "from-slate-50 to-emerald-50/20",
    outputIconBg: "bg-emerald-100",
    outputIconColor: "text-emerald-600",
    progressGradient: "from-emerald-500 to-teal-500",
    successBg: "bg-emerald-50",
    successBorder: "border-emerald-200",
    successText: "text-emerald-600",
    tabActive: "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20",
    tabHover: "hover:border-emerald-200 hover:text-emerald-700",
    containerBorder: "border-emerald-200/40",
    containerShadow: "shadow-[0_8px_40px_rgba(16,185,129,0.06)]",
    actionBtn: "bg-emerald-600",
    actionBtnHover: "hover:bg-emerald-700",
    tableHeaderBg: "bg-emerald-50",
    tableHeaderText: "text-emerald-700",
    tableHighlight: "bg-emerald-50/50",
    emailHeaderBg: "bg-gradient-to-r from-emerald-50 to-teal-50",
    emailIconBg: "bg-emerald-600",
    emailIconColor: "text-white",
    recBg: "bg-emerald-50",
    recBorder: "border-emerald-100",
    recLabelColor: "text-emerald-600/60",
    idleIconBg: "bg-emerald-100/60",
    idleIconColor: "text-emerald-500/40",
    pattern: "repeating-linear-gradient(45deg, rgba(16,185,129,0.02) 0px, rgba(16,185,129,0.02) 1px, transparent 1px, transparent 12px)",
  },
  sky: {
    badge: "bg-sky-50 border-sky-100 text-sky-600",
    inputBg: "from-sky-50/80 to-cyan-50/40",
    inputIconBg: "bg-sky-100",
    inputIconColor: "text-sky-600",
    inputLabelColor: "text-sky-700",
    inputSubColor: "text-sky-600/70",
    inputBorder: "border-sky-200/60",
    outputBg: "from-slate-50 to-sky-50/20",
    outputIconBg: "bg-sky-100",
    outputIconColor: "text-sky-600",
    progressGradient: "from-sky-500 to-cyan-400",
    successBg: "bg-sky-50",
    successBorder: "border-sky-200",
    successText: "text-sky-600",
    tabActive: "bg-sky-600 text-white shadow-lg shadow-sky-600/20",
    tabHover: "hover:border-sky-200 hover:text-sky-700",
    containerBorder: "border-sky-200/40",
    containerShadow: "shadow-[0_8px_40px_rgba(14,165,233,0.06)]",
    actionBtn: "bg-sky-600",
    actionBtnHover: "hover:bg-sky-700",
    tableHeaderBg: "bg-sky-50",
    tableHeaderText: "text-sky-700",
    tableHighlight: "bg-sky-50/50",
    emailHeaderBg: "bg-gradient-to-r from-sky-50 to-cyan-50",
    emailIconBg: "bg-sky-600",
    emailIconColor: "text-white",
    recBg: "bg-sky-50",
    recBorder: "border-sky-100",
    recLabelColor: "text-sky-600/60",
    idleIconBg: "bg-sky-100/60",
    idleIconColor: "text-sky-500/40",
    pattern: "radial-gradient(circle at 2px 2px, rgba(14,165,233,0.03) 2px, transparent 0)",
  },
  amber: {
    badge: "bg-amber-50 border-amber-100 text-amber-600",
    inputBg: "from-amber-50/80 to-yellow-50/40",
    inputIconBg: "bg-amber-100",
    inputIconColor: "text-amber-600",
    inputLabelColor: "text-amber-700",
    inputSubColor: "text-amber-600/70",
    inputBorder: "border-amber-200/60",
    outputBg: "from-slate-50 to-amber-50/20",
    outputIconBg: "bg-amber-100",
    outputIconColor: "text-amber-600",
    progressGradient: "from-amber-500 to-orange-400",
    successBg: "bg-amber-50",
    successBorder: "border-amber-200",
    successText: "text-amber-600",
    tabActive: "bg-amber-600 text-white shadow-lg shadow-amber-600/20",
    tabHover: "hover:border-amber-200 hover:text-amber-700",
    containerBorder: "border-amber-200/40",
    containerShadow: "shadow-[0_8px_40px_rgba(245,158,11,0.06)]",
    actionBtn: "bg-amber-600",
    actionBtnHover: "hover:bg-amber-700",
    tableHeaderBg: "bg-amber-50",
    tableHeaderText: "text-amber-700",
    tableHighlight: "bg-amber-50/50",
    emailHeaderBg: "bg-gradient-to-r from-amber-50 to-yellow-50",
    emailIconBg: "bg-amber-600",
    emailIconColor: "text-white",
    recBg: "bg-amber-50",
    recBorder: "border-amber-100",
    recLabelColor: "text-amber-600/60",
    idleIconBg: "bg-amber-100/60",
    idleIconColor: "text-amber-500/40",
    pattern: "repeating-linear-gradient(-45deg, rgba(245,158,11,0.02) 0px, rgba(245,158,11,0.02) 1px, transparent 1px, transparent 10px)",
  },
  rose: {
    badge: "bg-rose-50 border-rose-100 text-rose-600",
    inputBg: "from-rose-50/80 to-pink-50/40",
    inputIconBg: "bg-rose-100",
    inputIconColor: "text-rose-600",
    inputLabelColor: "text-rose-700",
    inputSubColor: "text-rose-600/70",
    inputBorder: "border-rose-200/60",
    outputBg: "from-slate-50 to-rose-50/20",
    outputIconBg: "bg-rose-100",
    outputIconColor: "text-rose-600",
    progressGradient: "from-rose-500 to-pink-400",
    successBg: "bg-rose-50",
    successBorder: "border-rose-200",
    successText: "text-rose-600",
    tabActive: "bg-rose-600 text-white shadow-lg shadow-rose-600/20",
    tabHover: "hover:border-rose-200 hover:text-rose-700",
    containerBorder: "border-rose-200/40",
    containerShadow: "shadow-[0_8px_40px_rgba(244,63,94,0.06)]",
    actionBtn: "bg-rose-600",
    actionBtnHover: "hover:bg-rose-700",
    tableHeaderBg: "bg-rose-50",
    tableHeaderText: "text-rose-700",
    tableHighlight: "bg-rose-50/50",
    emailHeaderBg: "bg-gradient-to-r from-rose-50 to-pink-50",
    emailIconBg: "bg-rose-600",
    emailIconColor: "text-white",
    recBg: "bg-rose-50",
    recBorder: "border-rose-100",
    recLabelColor: "text-rose-600/60",
    idleIconBg: "bg-rose-100/60",
    idleIconColor: "text-rose-500/40",
    pattern: "radial-gradient(circle at 3px 3px, rgba(244,63,94,0.03) 1.5px, transparent 0)",
  },
};

/* ─── Per-demo-type icons ─── */
const demoTypeIcons: Record<string, React.ReactNode> = {
  fields: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
    </svg>
  ),
  text: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  table: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 0v1.5c0 .621-.504 1.125-1.125 1.125" />
    </svg>
  ),
  checklist: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  email: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  ),
};

interface InteractiveDemoProps {
  demos?: DemoTab[];
  clientNoun?: string;
  accent?: AccentTheme;
}

export default function InteractiveDemo({ demos: propDemos, clientNoun = "firm", accent = "navy" }: InteractiveDemoProps) {
  const demos = propDemos || defaultDemos;
  const [activeTab, setActiveTab] = useState(demos[0]?.id || "intake");
  const activeTabData = demos.find((tab) => tab.id === activeTab);
  const theme = themes[accent] || themes.navy;

  return (
    <section id="demo" className="section-gap relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/80 via-white to-neutral-50/50 pointer-events-none" />

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wider mb-4 ${theme.badge}`}>
            Preview
          </span>
          <h2 className="text-headline text-neutral-900">
            What we&apos;ll build for{" "}
            <span className="font-serif italic font-normal">your {clientNoun}</span>
          </h2>
          <p className="mt-3 text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Each tool below is custom-built for your {clientNoun} and connects directly to your documents and systems.
            These sample workflows show what your team will see.
          </p>
        </motion.div>

        {/* Tab Pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {demos.map((tab, index) => {
            const demoType = tab.demoType || (tab.fields ? "fields" : "text");
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? theme.tabActive
                    : `bg-white text-neutral-600 border border-neutral-200 ${theme.tabHover} shadow-subtle`
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-md flex items-center justify-center ${
                    activeTab === tab.id ? "text-white/80" : "text-neutral-500"
                  }`}>
                    {demoTypeIcons[demoType] || demoTypeIcons.text}
                  </span>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Demo Content */}
        <AnimatePresence mode="wait">
          {activeTabData && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <DemoShell demo={activeTabData} theme={theme} accent={accent} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─── Typewriter ─── */

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayed}
      {!done && <span className="inline-block w-0.5 h-4 bg-current ml-0.5 animate-pulse align-middle opacity-60" />}
    </span>
  );
}

/* ─── Unified Demo Shell ─── */

type ThemeConfig = (typeof themes)[AccentTheme];

const demoLabels: Record<string, { action: string; idle: string; idleSub: string; processing: string }> = {
  fields: { action: "Extract Data", idle: "Ready to extract", idleSub: "AI pulls structured data from raw notes", processing: "Extracting fields..." },
  text: { action: "Generate", idle: "Ready to generate", idleSub: "AI creates polished content instantly", processing: "Writing..." },
  table: { action: "Analyze", idle: "Ready to analyze", idleSub: "AI organizes and compares your data", processing: "Analyzing data..." },
  checklist: { action: "Scan & Verify", idle: "Ready to scan", idleSub: "AI checks what\u2019s received vs. missing", processing: "Scanning..." },
  email: { action: "Draft Email", idle: "Ready to draft", idleSub: "AI writes a professional email for you", processing: "Drafting..." },
};

function DemoShell({ demo, theme, accent }: { demo: DemoTab; theme: ThemeConfig; accent: AccentTheme }) {
  const [done, setDone] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const demoType = demo.demoType || (demo.fields ? "fields" : "text");
  const l = demoLabels[demoType] || demoLabels.text;
  const duration = demoType === "fields" || demoType === "checklist" ? 1800 : 1200;
  const showCopy = demoType === "text" || demoType === "email";

  useEffect(() => {
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  // Reset state when demo changes
  useEffect(() => {
    setDone(false);
    setProcessing(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  }, [demo.id]);

  const handleProcess = () => {
    setProcessing(true);
    timerRef.current = setTimeout(() => {
      setProcessing(false);
      setDone(true);
    }, duration);
  };

  const handleReset = () => {
    setDone(false);
    setProcessing(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Main container with theme-specific border and shadow */}
      <div className={`relative rounded-2xl overflow-hidden border ${theme.containerBorder} ${theme.containerShadow} bg-white`}>
        {/* Subtle background pattern per theme */}
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{ backgroundImage: theme.pattern, backgroundSize: "20px 20px" }}
        />

        <div className="relative grid md:grid-cols-2 gap-0">
          {/* Left: Input Panel */}
          <div className={`p-6 md:p-8 bg-gradient-to-br ${theme.inputBg} border-b md:border-b-0 md:border-r border-neutral-200/60`}>
            <div className="flex items-center gap-2.5 mb-4">
              <div className={`w-8 h-8 rounded-lg ${theme.inputIconBg} flex items-center justify-center`}>
                <span className={theme.inputIconColor}>
                  {demoTypeIcons[demoType] || demoTypeIcons.text}
                </span>
              </div>
              <div>
                <p className={`text-xs font-semibold ${theme.inputLabelColor} uppercase tracking-wider`}>{demo.inputLabel}</p>
                <p className={`text-[11px] ${theme.inputSubColor}`}>What your team pastes in</p>
              </div>
            </div>
            <div className={`p-4 rounded-xl bg-white/90 border ${theme.inputBorder} font-mono text-sm text-neutral-700 whitespace-pre-line leading-relaxed min-h-[180px] shadow-sm`}>
              {demo.inputContent}
            </div>
          </div>

          {/* Right: Output Panel */}
          <div className={`p-6 md:p-8 bg-gradient-to-br ${theme.outputBg}`}>
            <div className="flex items-center gap-2.5 mb-4">
              <div className={`w-8 h-8 rounded-lg ${theme.outputIconBg} flex items-center justify-center`}>
                <svg className={`w-4 h-4 ${theme.outputIconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </div>
              <div>
                <p className={`text-xs font-semibold ${theme.outputIconColor} uppercase tracking-wider`}>{demo.outputLabel || "AI Output"}</p>
                <p className="text-[11px] text-neutral-500">What AI returns in seconds</p>
              </div>
            </div>

            <div className="min-h-[220px]">
              {/* Idle */}
              {!done && !processing && (
                <div className="flex flex-col items-center justify-center h-[220px] text-center">
                  <div className={`w-14 h-14 rounded-2xl ${theme.idleIconBg} flex items-center justify-center mb-4`}>
                    <span className={theme.idleIconColor}>
                      {demoTypeIcons[demoType] || demoTypeIcons.text}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-neutral-600 mb-1">{l.idle}</p>
                  <p className="text-xs text-neutral-500">{l.idleSub}</p>
                </div>
              )}

              {/* Processing */}
              {processing && (
                <div className="flex flex-col items-center justify-center h-[220px]">
                  <div className="relative w-full max-w-xs mb-5">
                    <div className="h-2.5 bg-neutral-100 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${theme.progressGradient} rounded-full`}
                        animate={{ width: ["0%", "100%"] }}
                        transition={{ duration: duration / 1000, ease: "easeInOut" }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}>
                      <svg className={`w-4 h-4 ${theme.outputIconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                    </motion.div>
                    <span className="text-sm font-medium text-neutral-600">{l.processing}</span>
                  </div>
                </div>
              )}

              {/* Done */}
              {done && <OutputRenderer demo={demo} theme={theme} demoType={demoType} />}
            </div>
          </div>
        </div>
      </div>

      {/* Action bar */}
      <div className="mt-5 flex flex-col items-center gap-3">
        {!done && !processing && (
          <button
            onClick={handleProcess}
            aria-label={l.action}
            className={`group px-8 py-3.5 text-sm font-semibold text-white ${theme.actionBtn} rounded-xl ${theme.actionBtnHover} transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2`}
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            {l.action}
          </button>
        )}
        {done && (
          <div className="flex gap-3">
            <button
              onClick={handleReset}
              className="px-6 py-3 text-sm font-medium text-neutral-600 bg-neutral-100 rounded-xl hover:bg-neutral-200 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              Try again
            </button>
            {showCopy && (
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(demo.outputContent);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                aria-label="Copy output"
                className={`px-6 py-3 text-sm font-medium text-white ${theme.actionBtn} rounded-xl ${theme.actionBtnHover} transition-colors flex items-center gap-2`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                </svg>
                {copied ? "Copied!" : "Copy"}
              </button>
            )}
          </div>
        )}
        <p className="text-center text-sm text-neutral-500 max-w-md">
          {demo.description}
        </p>
      </div>
    </div>
  );
}

/* ─── Output Renderers ─── */

function OutputRenderer({ demo, theme, demoType }: { demo: DemoTab; theme: ThemeConfig; demoType: string }) {
  switch (demoType) {
    case "fields": return <FieldsOutput demo={demo} theme={theme} />;
    case "table": return <TableOutput demo={demo} theme={theme} />;
    case "checklist": return <ChecklistOutput demo={demo} theme={theme} />;
    case "email": return <EmailOutput demo={demo} theme={theme} />;
    default: return <TextOutput demo={demo} theme={theme} />;
  }
}

/* Fields — extracted key-value cards with staggered animation */
function FieldsOutput({ demo, theme }: { demo: DemoTab; theme: ThemeConfig }) {
  if (!demo.fields) return null;
  return (
    <div className="space-y-2">
      {demo.successMessage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`flex items-center gap-2 mb-3 px-3 py-2.5 rounded-lg ${theme.successBg} border ${theme.successBorder}`}
        >
          <svg className={`w-4 h-4 ${theme.successText} flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className={`text-xs font-semibold ${theme.successText}`}>{demo.successMessage}</span>
        </motion.div>
      )}
      {demo.fields.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: 16, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: i * 0.08, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-neutral-200/80 shadow-subtle hover:shadow-elevated transition-shadow"
        >
          <div>
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.1em]">{item.label}</p>
            <p className="text-sm font-semibold text-neutral-900 mt-0.5">{item.value}</p>
          </div>
          <div className={`w-6 h-6 rounded-full ${theme.successBg} ${theme.successBorder} border flex items-center justify-center`}>
            <svg className={`w-3.5 h-3.5 ${theme.successText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* Text — typewriter prose with themed border */
function TextOutput({ demo, theme }: { demo: DemoTab; theme: ThemeConfig }) {
  return (
    <div className={`p-4 rounded-xl bg-white border ${theme.recBorder} text-sm text-neutral-700 whitespace-pre-line leading-relaxed max-h-[280px] overflow-y-auto shadow-sm`}>
      <TypewriterText text={demo.outputContent} />
    </div>
  );
}

/* Table — themed comparison grid with colored header */
function TableOutput({ demo, theme }: { demo: DemoTab; theme: ThemeConfig }) {
  if (!demo.tableData) return <TextOutput demo={demo} theme={theme} />;
  const { headers, rows, recommendation } = demo.tableData;
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-neutral-200 overflow-hidden shadow-sm overflow-x-auto">
        <table className="w-full text-xs min-w-[400px]">
          <thead>
            <tr className={`${theme.tableHeaderBg} border-b border-neutral-200`}>
              {headers.map((h) => (
                <th key={h} className={`px-2.5 py-2.5 text-left font-bold ${theme.tableHeaderText} uppercase tracking-wider text-[10px]`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className={`border-b border-neutral-100 last:border-0 ${i % 2 === 1 ? theme.tableHighlight : "bg-white"}`}
              >
                {row.map((cell, j) => (
                  <td key={`${i}-${j}`} className={`px-2.5 py-2 ${j === 0 ? "font-semibold text-neutral-900 whitespace-nowrap" : "text-neutral-600"}`}>
                    {renderCell(cell)}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      {recommendation && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`p-4 rounded-xl ${theme.recBg} border ${theme.recBorder}`}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <svg className={`w-4 h-4 ${theme.recLabelColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
            <p className={`text-[10px] font-bold ${theme.recLabelColor} uppercase tracking-[0.12em]`}>AI Recommendation</p>
          </div>
          <p className="text-xs text-neutral-700 leading-relaxed">{recommendation}</p>
        </motion.div>
      )}
    </div>
  );
}

function renderCell(cell: string) {
  if (cell.startsWith("\u2713")) return <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold"><span className="w-4 h-4 rounded-full bg-emerald-100 inline-flex items-center justify-center text-[10px]">{"\u2713"}</span>{cell.slice(1).trim()}</span>;
  if (cell.startsWith("\u2717")) return <span className="inline-flex items-center gap-1 text-neutral-400"><span className="w-4 h-4 rounded-full bg-neutral-100 inline-flex items-center justify-center text-[10px]">{"\u2717"}</span><span className="line-through">{cell.slice(1).trim()}</span></span>;
  if (cell.startsWith("\u26a0")) return <span className="inline-flex items-center gap-1 text-amber-600 font-medium"><span className="w-4 h-4 rounded-full bg-amber-100 inline-flex items-center justify-center text-[10px]">{"\u26a0"}</span>{cell.slice(1).trim()}</span>;
  return <>{cell}</>;
}

/* Checklist — status items with progress summary */
function ChecklistOutput({ demo, theme }: { demo: DemoTab; theme: ThemeConfig }) {
  if (!demo.checklistItems) return <TextOutput demo={demo} theme={theme} />;
  const doneCount = demo.checklistItems.filter(i => i.status === "done").length;
  const total = demo.checklistItems.length;
  return (
    <div className="space-y-2 max-h-[320px] overflow-y-auto">
      {/* Progress summary bar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-3 mb-2 px-3 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200"
      >
        <div className="flex-1">
          <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-emerald-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(doneCount / total) * 100}%` }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </div>
        <span className="text-xs font-bold text-neutral-600 whitespace-nowrap">{doneCount}/{total} received</span>
      </motion.div>

      {demo.successMessage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg ${theme.successBg} border ${theme.successBorder}`}
        >
          <svg className={`w-4 h-4 ${theme.successText} flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className={`text-xs font-semibold ${theme.successText}`}>{demo.successMessage}</span>
        </motion.div>
      )}

      {demo.checklistItems.map((item, i) => (
        <motion.div
          key={item.text}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-colors ${
            item.status === "done" ? "bg-emerald-50/60 border-emerald-200/60" :
            item.status === "missing" ? "bg-red-50/60 border-red-200/60" :
            "bg-amber-50/60 border-amber-200/60"
          }`}
        >
          {item.status === "done" ? (
            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          ) : item.status === "missing" ? (
            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          ) : (
            <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg className="w-3.5 h-3.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" />
              </svg>
            </div>
          )}
          <span className={`text-sm leading-snug ${item.status === "done" ? "text-neutral-600" : "text-neutral-800 font-medium"}`}>
            {item.text}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

/* Email — themed email client mockup */
function EmailOutput({ demo, theme }: { demo: DemoTab; theme: ThemeConfig }) {
  const lines = demo.outputContent.split("\n");
  const subjectLine = lines.find(l => l.startsWith("Subject:"));
  const subject = subjectLine ? subjectLine.replace("Subject:", "").trim() : "Email Draft";
  const bodyStart = subjectLine ? lines.indexOf(subjectLine) + 2 : 0;
  const body = lines.slice(bodyStart).join("\n").trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-neutral-200 overflow-hidden bg-white shadow-sm"
    >
      {/* Email chrome header */}
      <div className={`px-4 py-3 ${theme.emailHeaderBg} border-b border-neutral-200/80`}>
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full ${theme.emailIconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
            <svg className={`w-4 h-4 ${theme.emailIconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.1em]">New Draft</p>
              <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${theme.successBg} ${theme.successText}`}>AI Generated</span>
            </div>
            <p className="text-sm font-semibold text-neutral-900 truncate mt-0.5">{subject}</p>
          </div>
        </div>
      </div>
      {/* Email body */}
      <div className="p-4 text-sm text-neutral-700 leading-relaxed max-h-[240px] overflow-y-auto whitespace-pre-line">
        <TypewriterText text={body} />
      </div>
      {/* Email footer */}
      <div className="px-4 py-2.5 bg-neutral-50/80 border-t border-neutral-100 flex items-center justify-between">
        <span className="text-[10px] text-neutral-400 font-medium">Ready to send</span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-emerald-500 font-semibold">Draft complete</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Default Demos ─── */

const defaultDemos: DemoTab[] = [
  {
    id: "intake",
    label: "Client Intake",
    description: "AI extracts structured data from messy intake notes.",
    inputLabel: "Raw Intake Notes",
    inputContent: "Name: sarah m. chen\nBusiness: chen's family restaurant LLC\nNeeds help with: website redesign + online ordering\nPhone: (626) 555-0187",
    outputLabel: "Extracted Data",
    outputContent: "",
    successMessage: "4 fields extracted — Ready for CRM import",
    fields: [
      { label: "Client Name", value: "Sarah M. Chen" },
      { label: "Business", value: "Chen's Family Restaurant LLC" },
      { label: "Service Needed", value: "Website Redesign & Online Ordering" },
      { label: "Phone", value: "(626) 555-0187" },
    ],
  },
];
