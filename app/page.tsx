import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import PlainEnglish from "@/components/PlainEnglish";
import WhatWeBuild from "@/components/WhatWeBuild";
import HowItWorks from "@/components/HowItWorks";
import ServicesFeatures from "@/components/ServicesFeatures";
import InteractiveDemo from "@/components/InteractiveDemo";
import FAQ from "@/components/FAQ";
import WhySidebarAI from "@/components/WhySidebarAI";
import SocialProof from "@/components/SocialProof";
import ServiceTiers from "@/components/ServiceTiers";
import WhatDoesntDisappear from "@/components/WhatDoesntDisappear";
import ValuePropReanchor from "@/components/ValuePropReanchor";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import type { DemoTab, FAQItem } from "@/data/industries";

const legalDemos: DemoTab[] = [
  {
    id: "change-analysis",
    label: "Change Analysis",
    demoType: "text",
    description:
      "A custom Claude Cowork skill, built on Day 4, reads both contract versions side-by-side and explains what changed, why it matters, and what your partner usually pushes back on — in your firm's voice.",
    inputLabel: "Contract Versions",
    inputContent:
      "Supply Agreement v3 → v4\nUploaded: SupplyAgreement_v3_clean.docx\nUploaded: SupplyAgreement_v4_redline.docx\n\n14 changes detected across 8 sections.\nAnalyzing risk direction against your firm's standard positions…",
    outputLabel: "Change Analysis",
    outputContent: `§4.2 Indemnification — HIGH RISK
Liability cap removed entirely. Your firm's standard position is 2x contract value ($4.2M cap on this deal).
Risk: Unlimited exposure on indemnification claims.
Drafted pushback (in Margaret's voice):
"§4.2 — Reinstate cap at 2x contract value, or mutual carve-outs limited to gross negligence and willful misconduct per our standard."

§7.1 Termination for Breach — REVIEW
Cure period shortened from 30 days to 10 days.
Risk: 10 days insufficient for complex supply chain breaches per Margaret's last three matters.
Drafted pushback: 20-day cure with written notice.

§2.1 Payment Terms — STANDARD
Net 30 → Net 45. Within firm tolerance. No action needed.

§9.3 Non-Compete — REVIEW
Geographic scope expanded from "North America" to "worldwide."
Risk: Likely unenforceable in EU and APAC jurisdictions.

All citations grounded in source documents. 14 changes analyzed, 3 require partner sign-off.`,
  },
  {
    id: "smart-skim",
    label: "Smart Skim",
    demoType: "checklist",
    description:
      "A Cowork skill built around your firm's contract review playbook — reads a full document and grades each section against your house standards. Your associates focus on the 20% of pages that actually matter.",
    inputLabel: "Document Upload",
    inputContent:
      "Uploaded: CreditAgreement_Draft_124pages.pdf\n\n124 pages · 47 sections\nGrading against your firm's standard positions and recent matter history…",
    outputLabel: "Reading Guide",
    outputContent: "",
    successMessage: "Reading guide complete — 12 sections flagged for partner review",
    checklistItems: [
      { text: "§4.2 Indemnification — Non-standard uncapped liability. PARTNER REVIEW.", status: "missing" as const },
      { text: "§7.1 Termination — Shortened cure period (10 days). Confirm with client.", status: "missing" as const },
      { text: "§9.3 Non-Compete — Worldwide scope, likely unenforceable. REVIEW.", status: "flag" as const },
      { text: "§11.2 Force Majeure — Excludes pandemic events. Non-standard.", status: "flag" as const },
      { text: "§5.4 Representations — Broader than firm standard. Check knowledge qualifiers.", status: "flag" as const },
      { text: "§2.1 Payment Terms — Net 45, within firm tolerance. Skim.", status: "done" as const },
      { text: "§3.1 Delivery — Standard shipping terms. Skim.", status: "done" as const },
      { text: "§12.4 Governing Law — Standard Delaware choice of law. Skim.", status: "done" as const },
      { text: "§13.1 Notices — Standard form. Skim.", status: "done" as const },
      { text: "§14.2 Entire Agreement — Boilerplate. Skim.", status: "done" as const },
    ],
  },
  {
    id: "closing-tracker",
    label: "Closing Tracker",
    demoType: "checklist",
    description:
      "The Corporate Legal plugin plus a firm-specific Cowork skill — reads the purchase agreement, extracts every closing condition, and maps each to a responsible party.",
    inputLabel: "Purchase Agreement",
    inputContent:
      "Uploaded: StockPurchaseAgreement_Executed.pdf\n\nExtracting closing conditions from Article VIII…\nMapping deliverables from Schedules 2.4, 3.1, 5.2…\nAssigning responsible parties from your firm's deal team…",
    outputLabel: "Closing Checklist",
    outputContent: "",
    successMessage: "12 of 18 closing conditions satisfied",
    checklistItems: [
      { text: "Antitrust Approval (HSR) — Buyer responsibility. Filed 1/3. Waiting period expires 2/2.", status: "flag" as const },
      { text: "Board Resolutions (Buyer) — Received 12/15.", status: "done" as const },
      { text: "Board Resolutions (Seller) — Received 12/18.", status: "done" as const },
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
    description:
      "A Cowork skill plus Claude Projects — when a defined term changes in the purchase agreement, every related document is checked for cascade impact.",
    inputLabel: "Change Detected",
    inputContent:
      "Change detected in Purchase Agreement §1.1:\n\n\"Material Adverse Effect\" definition modified —\nadded carve-out for \"changes in applicable law\"\n\nScanning 8 related documents for references\nto this definition…",
    outputLabel: "Impact Analysis",
    outputContent: "",
    tableData: {
      headers: ["Document", "Section", "Reference", "Action Required"],
      rows: [
        ["Escrow Agreement", "§3.2(a)", "Uses this definition as closing condition", "⚠ Update cross-reference"],
        ["Transition Services Agreement", "§5.1(b)", "Triggers early termination", "⚠ Conforming amendment needed"],
        ["IP License", "§2.4", "Voids license grant", "⚠ Review scope of carve-out"],
        ["Employment Agreement (Smith)", "§4.1", "Standalone definition", "✓ No update needed"],
        ["Employment Agreement (Patel)", "§4.1", "Standalone definition", "✓ No update needed"],
        ["Non-Compete", "§1.2", "References Purchase Agreement definitions", "⚠ Verify scope"],
        ["Disclosure Schedules", "Schedule 4.8", "Qualifies representations", "⚠ Review against carve-out"],
        ["Side Letter", "—", "No reference", "✓ No action"],
      ],
      recommendation:
        "3 documents require conforming amendments. 1 needs scope review. 2 employment agreements use standalone definitions. Recommend updating Escrow Agreement and Transition Services Agreement before closing.",
    },
  },
  {
    id: "counsel-profile",
    label: "Counsel Profile",
    demoType: "fields",
    description:
      "A firm-specific Cowork skill that profiles opposing counsel from your historical matter data — their patterns, tactics, and typical concession points.",
    inputLabel: "Query",
    inputContent:
      "Opposing counsel: Baker & Sterling LLP\nLead partner: Margaret Chen\n\nSearching firm knowledge base via iManage MCP connector…\nAnalyzing 8 past matters against Baker & Sterling…\nMapping negotiation patterns across 3 deal types…",
    outputLabel: "Counsel Profile",
    outputContent: "",
    successMessage: "Profile generated from 8 historical matters",
    fields: [
      { label: "Firm", value: "Baker & Sterling LLP" },
      { label: "Lead Partner", value: "Margaret Chen (Corporate/M&A)" },
      { label: "Matters Against", value: "8 matters (2019–2025)" },
      { label: "Avg Negotiation Rounds", value: "4 rounds to close" },
      { label: "Common Tactic", value: "Aggressive initial position on indemnity; significant movement round 3" },
      { label: "Typical Concessions", value: "Representations & warranties scope, payment timing" },
      { label: "Typical Holdouts", value: "Indemnity caps, non-compete geography, governing law" },
      { label: "Recommended Strategy", value: "Open strong on indemnity cap — expect pushback rounds 1–2, concession in round 3. Prepare fallback on non-compete scope." },
    ],
  },
];

const legalFaqItems: FAQItem[] = [
  {
    question: "What is Claude for Legal?",
    answer:
      "It's a product Anthropic launched on May 12, 2026. Twelve practice-area plugins (Corporate, Employment, IP, Litigation, Tax, Regulatory, Privacy, AI Governance, Product, plus Law Student, Legal Clinic, and a Legal Builder Hub), twenty-plus MCP connectors into the software your firm already uses (iManage, NetDocuments, Clio, Thomson Reuters CoCounsel, DocuSign, Box, Everlaw, Ironclad, and more), and deep integration with Microsoft Word and Outlook. All included with any paying Claude subscription. The difficulty isn't access — it's configuration and adoption.",
  },
  {
    question: "Can't we just configure this ourselves?",
    answer:
      "Technically yes. In practice, no boutique firm has the time. Anthropic's own AGC, Mark Pike, said on launch day that the plugins are at their best when customized with the firm's playbooks. A 2–20 attorney firm with partners billing $400–$800 an hour, no in-house AI lead, and a part-time IT contractor cannot do this in a reasonable window. We've done it before. We do it in a week — Monday discovery through Friday training, with a 25–40 page runbook you own.",
  },
  {
    question: "What does a five-day sprint actually deliver?",
    answer:
      "Monday: live discovery call, partner interviews, and workflow shadowing over screen-share. Tuesday: Claude account, single sign-on, bar-compliant usage policy, practice-area tools activated. Wednesday: secure connections wired into your document system, billing, calendar, email, and Microsoft 365 — including custom connections if your firm runs bespoke software. Thursday: up to five custom one-click workflows built around your firm's playbook. Friday: two live training sessions (attorneys, then staff), a written runbook, and 30/60/90-day check-ins booked. By Friday afternoon your firm has a working, integrated, bar-compliant Claude for Legal deployment.",
  },
  {
    question: "How does the initial consultation work?",
    answer:
      "It's a live remote call over video — about twenty minutes with the managing partner and whoever runs operations. Fully remote, no travel required, just real human time with a senior engineer. We walk one of your highest-volume workflows together (intake, contract review, closing checks, conflict checks), quantify the hours and pain, and tell you straight whether a sprint fits your firm right now. If it doesn't, we'll tell you what to do instead. No slide deck, no pitch.",
  },
  {
    question: "What about bar ethics and confidentiality?",
    answer:
      "Every engagement is built to ABA Model Rules 1.1 (competence), 1.6 (confidentiality), and 5.3 (supervision of non-lawyer assistance), plus your state RPC. We map your jurisdiction during discovery, configure matter-level access controls and ethical walls at the connector layer, draft a firm-specific usage policy (your malpractice carrier can review it before signing), and run a confidentiality posture review. Claude does not train on your data — that's an Anthropic guarantee, not ours.",
  },
  {
    question: "What if our DMS or billing system isn't standard?",
    answer:
      "We support iManage, NetDocuments, Clio, MyCase, Centerbase, PracticePanther, Smokeball, and Microsoft SharePoint as part of a standard sprint. Non-standard or legacy systems are scoped separately during discovery so the sprint scope stays predictable.",
  },
  {
    question: "What about ongoing support?",
    answer:
      "Ninety days of email support is included with every sprint, plus 30/60/90-day check-ins booked on Friday afternoon. After that you can convert to a monthly retainer for ongoing skill development, new plugin rollouts, and quarterly tune-ups — or run independently. Your firm owns everything.",
  },
  {
    question: "How is this different from Harvey, Legora, or CoCounsel?",
    answer:
      "Harvey, Legora, and CoCounsel are products — built for AmLaw 200 firms with dedicated innovation teams and five-figure monthly contracts. Sidebar AI is an implementation partner, not a product. We sit on top of Claude for Legal — the native Anthropic platform that ships with twenty-plus connectors, including CoCounsel. Boutique firms get more value from a native, customized Claude deployment than from layering another vendor on top. If you grow past 30 attorneys we'll help you migrate.",
  },
  {
    question: "Who's behind Sidebar AI?",
    answer:
      "Sidebar AI is led by founder Jinwoong Lee — Berkeley Cognitive Science, eight-plus years building production AI and authentication systems at companies including Amazon and Ring (used by tens of millions of customers), and founder of CareMAR (caremar.us), AI-assisted software for small care homes and hospice facilities operating under strict healthcare-privacy rules. That CareMAR experience — shipping production AI for non-technical users in a regulated industry — is directly the skillset Sidebar AI brings to law firms. We work exclusively with boutique and mid-market firms on Claude for Legal implementation. We are not a generalist AI consultancy.",
  },
];

export default function Home() {
  return (
    <>
      <Navigation darkHero={true} />
      <main>
        <Hero />
        <TrustBadges />
        <PlainEnglish />
        <WhatWeBuild />
        <HowItWorks />
        <ServicesFeatures />
        <InteractiveDemo demos={legalDemos} clientNoun="firm" accent="navy" />
        <WhySidebarAI />
        <ServiceTiers />
        <WhatDoesntDisappear />
        <SocialProof />
        <ValuePropReanchor />
        <FAQ faqItems={legalFaqItems} clientNoun="firm" />
        <ContactForm clientNoun="firm" specialtyLabel="Primary practice area" />
      </main>
      <Footer />

      {/* JSON-LD Structured Data — ProfessionalService */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Sidebar AI",
            description:
              "Claude for Legal implementation partner for boutique law firms. Five-day implementation sprints, fully remote and live with a senior engineer. Customized Claude workflows, integration into iManage, NetDocuments, and Clio (plus custom connections to your bespoke software), Microsoft 365 embedding, and a bar-compliant usage policy mapped to ABA Model Rules 1.1, 1.6, and 5.3.",
            url: "https://sidebarai.us",
            email: "hello@sidebarai.us",
            serviceType: "Claude for Legal Implementation Partner",
            areaServed: "United States",
            knowsAbout: [
              "Claude for Legal",
              "Anthropic Claude implementation",
              "MCP connectors",
              "iManage AI integration",
              "Clio AI integration",
              "NetDocuments AI integration",
              "Microsoft 365 AI for law firms",
              "Claude Cowork skills",
              "Law firm AI consulting",
              "ABA Model Rule 1.1",
              "ABA Model Rule 1.6",
              "ABA Model Rule 5.3",
              "Boutique law firm technology",
              "Contract review AI",
              "M&A closing automation AI",
            ],
            offers: [
              {
                "@type": "Offer",
                name: "Initial live consultation",
                description: "Twenty-minute live remote call with your firm to scope a Claude for Legal implementation sprint. Fully remote, real human time with a senior engineer — never async chat or a sales pitch.",
                category: "Consultation",
              },
              {
                "@type": "Offer",
                name: "Five-day Claude for Legal implementation sprint",
                description:
                  "Fully remote Monday-through-Friday engagement that delivers a configured, integrated, and firm-customized Claude for Legal deployment — including custom secure connections to bespoke firm software — with live attorney and staff training and a 90-day support window.",
                category: "Implementation",
              },
            ],
          }),
        }}
      />

      {/* JSON-LD FAQPage — surfaces FAQ as rich results on Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: legalFaqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
    </>
  );
}
