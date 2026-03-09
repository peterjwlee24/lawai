"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { FirmVoiceContent } from "@/data/industries";

interface FirmVoiceProps {
  firmVoice?: FirmVoiceContent;
  clientNoun?: string;
}

export default function FirmVoice({ firmVoice: propFirmVoice, clientNoun = "firm" }: FirmVoiceProps) {
  const voice = propFirmVoice || defaultFirmVoice;
  const [showFirmVoice, setShowFirmVoice] = useState(false);

  const steps = [
    {
      number: "1",
      title: "You pick your best writing",
      description: `We ask your team to gather 10-20 examples of emails, letters, or newsletters they've sent — the ones you're proud of, the ones that sound like your ${clientNoun}.`,
    },
    {
      number: "2",
      title: "Your team loads them into Claude",
      description: "We show your designated person how to load those samples into a Claude workspace. Claude reads them and learns your tone, vocabulary, and structure. We never touch or see the files ourselves.",
    },
    {
      number: "3",
      title: "Your team writes in seconds",
      description: `When anyone on your team asks Claude to draft an email or letter, it automatically matches your ${clientNoun}'s voice. No more generic AI writing.`,
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/10 to-white pointer-events-none" />

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-xs font-semibold text-violet-700 uppercase tracking-wider mb-4">
            {voice.voiceLabel}
          </span>
          <h2 className="text-headline text-neutral-900">
            AI that writes like{" "}
            <span className="font-serif italic font-normal">your {clientNoun}</span>
          </h2>
          <p className="mt-3 text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Most AI sounds like a robot. We set up Claude so it matches the way your {clientNoun}{" "}
            actually communicates — your tone, your style, your voice.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Before/After Demo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-2xl border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
              {/* Tabs */}
              <div className="flex">
                <button
                  onClick={() => setShowFirmVoice(false)}
                  className={`flex-1 px-4 py-3.5 text-sm font-medium transition-all duration-300 ${
                    !showFirmVoice
                      ? "bg-neutral-100 text-neutral-900 border-b-2 border-neutral-900"
                      : "bg-white text-neutral-400 hover:text-neutral-600 border-b border-neutral-100"
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    Generic AI
                  </span>
                </button>
                <button
                  onClick={() => setShowFirmVoice(true)}
                  className={`flex-1 px-4 py-3.5 text-sm font-medium transition-all duration-300 ${
                    showFirmVoice
                      ? "bg-navy-50 text-navy border-b-2 border-navy"
                      : "bg-white text-neutral-400 hover:text-neutral-600 border-b border-neutral-100"
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {voice.voiceLabel}
                  </span>
                </button>
              </div>

              {/* Email content */}
              <div className="p-6 bg-white min-h-[320px]">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-100">
                  <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${showFirmVoice ? "bg-emerald-400" : "bg-neutral-300"}`} />
                  <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    {showFirmVoice ? "Trained on your writing samples" : "Default AI output"}
                  </span>
                </div>
                <pre className="text-sm text-neutral-700 leading-relaxed whitespace-pre-wrap font-sans">
                  {showFirmVoice ? voice.firmVoiceEmail : voice.genericEmail}
                </pre>
              </div>

              {/* Status bar */}
              <div className={`px-6 py-3 text-center text-xs font-medium transition-all duration-300 ${
                showFirmVoice
                  ? "bg-emerald-50 text-emerald-600 border-t border-emerald-100"
                  : "bg-neutral-50 text-neutral-400 border-t border-neutral-100"
              }`}>
                {showFirmVoice
                  ? "Sounds like it came from your office"
                  : "Sounds like it came from a robot"}
              </div>
            </div>
          </motion.div>

          {/* Right: How It Works */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              How we teach Claude your voice
            </h3>
            <p className="text-sm text-neutral-600 mb-8 leading-relaxed">
              Think of it like onboarding a new assistant. You&apos;d show them how you write
              emails, how formal to be, what phrases to use. We do the same thing with Claude —
              except it takes minutes, not months.
            </p>

            <div className="space-y-5">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-50 to-navy-100/50 border border-navy-100/60 text-navy flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {step.number}
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">{step.title}</p>
                    <p className="mt-1 text-sm text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-neutral-50 to-neutral-50/50 border border-neutral-100">
              <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.12em] mb-3">
                Works for
              </p>
              <div className="flex flex-wrap gap-2">
                {voice.worksFor.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs font-medium text-neutral-700 bg-white border border-neutral-200/60 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const defaultFirmVoice: FirmVoiceContent = {
  genericEmail: `Dear Client,

This is to inform you that your case has been updated. We have received the documents you submitted. Our team is currently reviewing them. We will contact you when we have more information.

Please do not hesitate to reach out if you have any questions.

Regards,
The Law Office`,
  firmVoiceEmail: `Hi Sarah,

Quick update — we received the documents you sent over on Tuesday, and everything looks good. David is reviewing them now and should have a full summary for you by Friday.

One thing we noticed: the HOA disclosure on page 3 is missing a signature. Could you get that signed and send it back when you get a chance? No rush — anytime this week works.

If anything comes up before then, just reply here or call the office. We're on it.

Best,
Lisa
Greenfield & Associates`,
  voiceLabel: "Your Firm's Voice",
  worksFor: ["Client emails", "Follow-up letters", "Newsletters", "Collection notices", "Marketing copy", "Social posts", "Internal memos", "Engagement letters"],
};
