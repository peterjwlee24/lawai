import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatWeBuild from "@/components/WhatWeBuild";
import HowItWorks from "@/components/HowItWorks";
import ServicesFeatures from "@/components/ServicesFeatures";
import InteractiveDemo from "@/components/InteractiveDemo";
import FAQ from "@/components/FAQ";
import WhySidebarAI from "@/components/WhySidebarAI";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import type { DemoTab, FAQItem } from "@/data/industries";

const legalDemos: DemoTab[] = [
  {
    id: "change-analysis",
    label: "Change Analysis",
    demoType: "text",
    description: "AI reads both contract versions and explains what changed, why it matters, and what to push back on.",
    inputLabel: "Contract Versions",
    inputContent: "Supply Agreement v3 → v4\nUploaded: SupplyAgreement_v3_clean.docx\nUploaded: SupplyAgreement_v4_redline.docx\n\n14 changes detected across 8 sections.\nAnalyzing risk direction for each change...",
    outputLabel: "Change Analysis",
    outputContent: `§4.2 Indemnification — HIGH RISK
Liability cap removed entirely. Previous draft capped indemnification at 2x total contract value ($4.2M). New draft has no cap.
Risk: Unlimited exposure on indemnification claims.
Suggested response: Reinstate cap at 2x contract value, or propose mutual carve-outs limited to gross negligence and willful misconduct.

§7.1 Termination for Breach — REVIEW
Cure period shortened from 30 days to 10 days.
Risk: 10 days may be insufficient to cure complex supply chain breaches.
Suggested response: Propose 20-day cure period with written notice requirement.

§2.1 Payment Terms — STANDARD
Net 30 changed to Net 45. Minor change, favorable to client. No action needed.

§9.3 Non-Compete — REVIEW
Geographic scope expanded from "North America" to "worldwide."
Risk: May be unenforceable in certain jurisdictions. Broader than necessary for a supply agreement.

All citations verified against source documents. 14 changes analyzed, 3 require attorney review.`,
  },
  {
    id: "smart-skim",
    label: "Smart Skim",
    demoType: "checklist",
    description: "AI reads the full document and tells your team which sections need careful review, which are non-standard, and which are standard boilerplate.",
    inputLabel: "Document Upload",
    inputContent: "Uploaded: CreditAgreement_Draft_124pages.pdf\n\n124 pages · 47 sections\nScanning for non-standard language, risk provisions,\nand boilerplate patterns...",
    outputLabel: "Reading Guide",
    outputContent: "",
    successMessage: "Reading guide complete — 12 sections flagged for review",
    checklistItems: [
      { text: "§4.2 Indemnification — Non-standard uncapped liability. MUST REVIEW.", status: "missing" as const },
      { text: "§7.1 Termination — Shortened cure period (10 days). Verify with client.", status: "missing" as const },
      { text: "§9.3 Non-Compete — Worldwide scope, potentially unenforceable. REVIEW.", status: "flag" as const },
      { text: "§11.2 Force Majeure — Excludes pandemic events. Non-standard.", status: "flag" as const },
      { text: "§5.4 Representations — Broader than typical. Check knowledge qualifiers.", status: "flag" as const },
      { text: "§2.1 Payment Terms — Net 45, standard. Low priority.", status: "done" as const },
      { text: "§3.1 Delivery — Standard shipping terms. Low priority.", status: "done" as const },
      { text: "§12.4 Governing Law — Standard Delaware choice of law. Low priority.", status: "done" as const },
      { text: "§13.1 Notices — Standard form. Low priority.", status: "done" as const },
      { text: "§14.2 Entire Agreement — Boilerplate. Low priority.", status: "done" as const },
    ],
  },
  {
    id: "closing-tracker",
    label: "Closing Tracker",
    demoType: "checklist",
    description: "AI reads the purchase agreement and generates the complete closing checklist with status tracking.",
    inputLabel: "Purchase Agreement",
    inputContent: "Uploaded: StockPurchaseAgreement_Executed.pdf\n\nExtracting closing conditions from Article VIII...\nMapping deliverables from Schedules 2.4, 3.1, 5.2...\nIdentifying responsible parties...",
    outputLabel: "Closing Checklist",
    outputContent: "",
    successMessage: "12 of 18 closing conditions satisfied",
    checklistItems: [
      { text: "Antitrust Approval (Hart-Scott-Rodino) — Buyer responsibility. Filed 1/3. Waiting period expires 2/2.", status: "flag" as const },
      { text: "Board Resolutions (Buyer) — Received and approved 12/15.", status: "done" as const },
      { text: "Board Resolutions (Seller) — Received and approved 12/18.", status: "done" as const },
      { text: "Officer's Certificate (Seller) — Received 12/20.", status: "done" as const },
      { text: "Landlord Consent — 123 Main St — MISSING. Seller to obtain.", status: "missing" as const },
      { text: "Landlord Consent — 456 Oak Ave — MISSING. Seller to obtain.", status: "missing" as const },
      { text: "Landlord Consent — 789 Park Blvd — Received 1/5.", status: "done" as const },
      { text: "Key Employee Agreement — J. Smith — Executed 12/22.", status: "done" as const },
      { text: "Key Employee Agreement — R. Patel — MISSING. Target to obtain.", status: "missing" as const },
      { text: "Escrow Agreement — Executed 12/28. Funds deposited.", status: "done" as const },
      { text: "IP Assignment — All patents assigned 1/2.", status: "done" as const },
      { text: "Tax Withholding Certificate (FIRPTA) — Received 1/4.", status: "done" as const },
    ],
  },
  {
    id: "deal-context",
    label: "Deal Context",
    demoType: "table",
    description: "When a term changes in one document, see every other document in the deal that's affected.",
    inputLabel: "Change Detected",
    inputContent: "Change detected in Purchase Agreement §1.1:\n\n\"Material Adverse Effect\" definition modified —\nadded carve-out for \"changes in applicable law\"\n\nScanning 8 related documents for references\nto this definition...",
    outputLabel: "Impact Analysis",
    outputContent: "",
    tableData: {
      headers: ["Document", "Section", "Reference", "Action Required"],
      rows: [
        ["Escrow Agreement", "§3.2(a)", "Uses this definition as closing condition", "⚠ Update cross-reference"],
        ["Transition Services Agreement", "§5.1(b)", "This definition triggers early termination", "⚠ Conforming amendment needed"],
        ["IP License", "§2.4", "This definition voids license grant", "⚠ Review scope of carve-out"],
        ["Employment Agreement (Smith)", "§4.1", "Has its own separate definition", "✓ No update needed"],
        ["Employment Agreement (Patel)", "§4.1", "Has its own separate definition", "✓ No update needed"],
        ["Non-Compete", "§1.2", "References Purchase Agreement definitions", "⚠ Verify no unintended scope change"],
        ["Disclosure Schedules", "Schedule 4.8", "Uses this definition to qualify representations", "⚠ Review in light of new carve-out"],
        ["Side Letter", "—", "No reference to this definition", "✓ No action"],
      ],
      recommendation: "3 documents require conforming amendments. 1 document needs scope review. 2 employment agreements use their own definitions — no changes needed. Recommend updating Escrow Agreement and Transition Services Agreement before closing.",
    },
  },
  {
    id: "counsel-profile",
    label: "Counsel Profile",
    demoType: "fields",
    description: "AI builds a profile of opposing counsel from your firm's historical data — their patterns, tactics, and typical concession points.",
    inputLabel: "Query",
    inputContent: "Opposing counsel: Baker & Sterling LLP\nLead partner: Margaret Chen\n\nSearching firm knowledge base...\nAnalyzing 8 past matters against Baker & Sterling...\nMapping negotiation patterns across 3 deal types...",
    outputLabel: "Counsel Profile",
    outputContent: "",
    successMessage: "Profile generated from 8 historical matters",
    fields: [
      { label: "Firm", value: "Baker & Sterling LLP" },
      { label: "Lead Partner", value: "Margaret Chen (Corporate/M&A)" },
      { label: "Matters Against", value: "8 matters (2019-2025)" },
      { label: "Avg Negotiation Rounds", value: "4 rounds to close" },
      { label: "Common Tactic", value: "Aggressive initial position on indemnity, significant movement in round 3" },
      { label: "Typical Concessions", value: "Representations & warranties scope, payment timing" },
      { label: "Typical Holdouts", value: "Indemnity caps, non-compete geography, governing law" },
      { label: "Recommended Strategy", value: "Open with strong position on indemnity cap — expect pushback rounds 1-2, concession in round 3. Prepare fallback on non-compete scope." },
    ],
  },
];

const legalFaqItems: FAQItem[] = [
  {
    question: "What exactly does Sidebar AI build?",
    answer: "We build AI tools that sit on top of your existing systems — contract change analysis, document triage (Smart Skim), M&A closing automation, client knowledge bases, and negotiation playbooks. Each tool connects directly to the software you already use (iManage, Clio, or NetDocuments) through custom integrations. We consult on your workflows, build the tools, deploy them, train your team, and hand everything over.",
  },
  {
    question: "How do you prevent AI hallucination?",
    answer: "Every output runs through a multi-pass verification pipeline. Dollar amounts, dates, and obligations are cross-referenced against source documents in a separate verification pass. Every claim includes a mandatory citation to a specific section and page number. If the AI is uncertain, it flags the output rather than guessing. Nothing reaches an attorney unverified.",
  },
  {
    question: "Does Sidebar AI access our client data?",
    answer: "No. We never store, access, or see your client data. The tools we build run inside your firm's environment — your documents never leave your systems and are never used to train AI models. Attorney-client privilege stays fully intact. After we deploy and train your team, your firm operates everything independently.",
  },
  {
    question: "How do the integrations work?",
    answer: "We build custom software connectors that let AI read and write to iManage, Clio, or NetDocuments directly — with your firm's security controls in place. Instead of copying documents into a separate AI tool, the AI works inside your existing systems. Think of it as a secure bridge between AI and the software your team already uses. The technical standard behind this is called MCP (Model Context Protocol), but your team never needs to know that — they just use the tools.",
  },
  {
    question: "How long does deployment take?",
    answer: "Phase 1 tools (Contract Change Analysis and Smart Skim) deploy in 2-4 weeks with no infrastructure changes. Phase 2 tools (Deal Context Graph, Client Intelligence, Negotiation Playbooks, Closing Automation) are built to order and include a security review with your IT team, typically adding 1-3 weeks per tool.",
  },
  {
    question: "Will this disrupt our current workflows?",
    answer: "No. We start with a 1-2 day audit to map how documents move through your firm. Tools are built to fit into your existing workflows, not replace them. Documents flow back into iManage, Clio, or NetDocuments automatically. Your attorneys use the same systems they already know — they just get better information, faster.",
  },
  {
    question: "How is this different from Harvey, CoCounsel, or Luminance?",
    answer: "Those tools handle research, drafting, and basic document review well. We build what they don't — per-client knowledge bases with ethical wall isolation, opposing counsel profiling from your historical data, cross-document deal relationship mapping, and AI-powered change analysis that explains why each change matters. Most firms use Sidebar AI alongside their existing legal AI tools.",
  },
  {
    question: "How is pricing structured?",
    answer: "Phase 1 tools are fixed-price project engagements — you know the cost before we start. Phase 2 tools are scoped after the initial workflow audit, with pricing based on complexity and integration requirements. There are no ongoing subscription fees. We build it, hand it over, and include 30 days of support.",
  },
];

export default function Home() {
  return (
    <>
      <Navigation darkHero={true} />
      <main>
        <Hero />
        <WhatWeBuild />
        <ServicesFeatures />
        <HowItWorks />
        <InteractiveDemo
          demos={legalDemos}
          clientNoun="firm"
          accent="navy"
        />
        <FAQ
          faqItems={legalFaqItems}
          clientNoun="firm"
        />
        <WhySidebarAI />
        <SocialProof />
        {/* <Pricing /> — uncomment when ready to show pricing publicly */}
        <ContactForm
          clientNoun="firm"
          specialtyLabel="Primary Practice Area"
        />
      </main>
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Sidebar AI",
            description:
              "AI consulting, training, and custom integrations for law firms. We build contract analysis, document triage, and closing automation tools connected to your existing software.",
            url: "https://sidebarai.us",
            email: "hello@sidebarai.us",
            serviceType: "Legal AI Consulting, Training & Integration",
            areaServed: "US",
            priceRange: "$$",
            knowsAbout: [
              "Legal AI",
              "Contract Analysis",
              "Document Triage",
              "MCP Integration",
              "Law Firm Technology",
              "iManage Integration",
              "M&A Closing Automation",
            ],
          }),
        }}
      />
    </>
  );
}
