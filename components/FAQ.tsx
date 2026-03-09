"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { FAQItem } from "@/data/industries";

interface FAQProps {
  faqItems?: FAQItem[];
  clientNoun?: string;
}

export default function FAQ({ faqItems: propFaqItems, clientNoun = "firm" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = propFaqItems || defaultFaqItems;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-gap">
      <div className="container-main">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-headline text-neutral-900">
              Frequently asked{" "}
              <span className="font-serif italic font-normal">questions</span>
            </h2>
            <p className="mt-4 text-body-lg text-neutral-600">
              Everything you need to know about how we set up AI for your {clientNoun}.
            </p>
            <p className="mt-6 text-body text-neutral-500">
              Still have questions?{" "}
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-navy hover:text-navy-900 font-medium"
              >
                Get in touch
              </button>
            </p>
          </motion.div>

          {/* Right — Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="divide-y divide-neutral-200">
              {items.map((faq, index) => (
                <div key={faq.question}>
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <span className="text-body-lg font-medium text-neutral-900 pr-4 group-hover:text-navy transition-colors">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <svg
                        className="w-5 h-5 text-neutral-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-body text-neutral-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const defaultFaqItems: FAQItem[] = [
  { question: "What exactly do you do for my business?", answer: "We audit your daily workflows, identify every task AI can already handle, and build ready-to-use prompt templates for each one. Then we train your team on how to use them and hand over everything — templates, playbooks, and documentation. Your team runs it all independently from day one." },
  { question: "What is Claude and how does it work?", answer: "Claude is an AI assistant made by Anthropic. Think of it like a very smart writing helper. You type in a request and it gives you a polished result in seconds. We make it even simpler by creating pre-written prompts so your team doesn't have to figure out what to type." },
  { question: "What if our staff isn't tech-savvy?", answer: "That's exactly who we build for. If your staff can copy and paste, they can use this. We create ready-made templates for every task and train each person on exactly what they need. No coding, no technical skills required." },
  { question: "Do you access any of our data?", answer: "No — we never access, handle, or store any of your data. We teach your team how to use AI tools on their own. We build prompt templates and show your staff how to use them." },
  { question: "How long does setup take?", answer: "Most businesses are up and running within 2-4 weeks. Week 1 is a workflow audit, Weeks 2-3 we build templates and train each role, Week 4 is handoff with full documentation." },
  { question: "Do we need ongoing support from you?", answer: "No — that's the whole point. We set up the prompt templates, train your team, and hand over full documentation so you run independently. No ongoing fees, no retainer, no dependency." },
  { question: "What's the ROI?", answer: "Most businesses recover 10-15 hours per staff member per week on repetitive tasks like emails, scheduling, intake, and document drafting. The setup typically pays for itself within the first month of use." },
  { question: "Do we need to review what AI writes?", answer: "Always. AI is a tool that drafts content for your team — it doesn't send anything on its own. Your staff reviews, edits, and approves everything before it goes out." },
];
