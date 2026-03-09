import { ReactNode } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
  source: string;
}

export interface HeroDemoCard {
  headerLabel: string;
  beforeLabel: string;
  beforeTime: string;
  beforeLines: string[];
  processingLabel: string;
  afterLabel: string;
  afterTime: string;
  afterTitle: string;
  afterLines: { date: string; hours: string; description: string }[];
  footerStat: string;
  footerStatLabel: string;
  footerStatus: string;
}

export interface PainPoint {
  stat: string;
  title: string;
  description: string;
  source: string;
  tools: string;
  color: string;
  bg: string;
  border: string;
}

export interface Role {
  name: string;
  description: string;
}

export interface DemoTab {
  id: string;
  label: string;
  description: string;
  inputLabel: string;
  inputContent: string;
  outputLabel: string;
  outputContent: string;
  successMessage?: string;
  fields?: { label: string; value: string }[];
  demoType?: "fields" | "text" | "table" | "checklist" | "email";
  tableData?: { headers: string[]; rows: string[][]; recommendation?: string };
  checklistItems?: { text: string; status: "done" | "missing" | "flag" }[];
}

export interface UseCase {
  task: string;
  howItWorks: string;
  before: string;
  after: string;
  savings: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface FirmVoiceContent {
  genericEmail: string;
  firmVoiceEmail: string;
  voiceLabel: string;
  worksFor: string[];
}

export interface IndustryConfig {
  slug: string;
  name: string;
  brandName: string;
  clientNoun: string;
  clientNounPlural: string;
  badge: string;
  headline: string;
  accentHeadline: string;
  subheadline: string;
  heroStats: HeroStat[];
  heroDemoCard: HeroDemoCard;
  painPoints: PainPoint[];
  sectionLabel: string;
  roles: Role[];
  demos: DemoTab[];
  automationUseCases: UseCase[];
  faqItems: FAQItem[];
  sizeOptions: SelectOption[];
  specialtyOptions: SelectOption[];
  specialtyLabel: string;
  firmVoice: FirmVoiceContent;
  trustItems: string[];
  urgencyText: string;
  metaTitle: string;
  metaDescription: string;
}

// ─── Law Firms ───────────────────────────────────────────────────────────────

const lawFirms: IndustryConfig = {
  slug: "law-firms",
  name: "Law Firms",
  brandName: "Blueprint AI",
  clientNoun: "firm",
  clientNounPlural: "firms",
  badge: "AI Consulting for Law Firms",
  headline: "Your attorneys practice law.",
  accentHeadline: "We automate everything else.",
  subheadline:
    'Your attorneys bill <span class="font-semibold text-neutral-800">2.9 hours</span> of an 8-hour day. The rest disappears into intake, billing, emails, and admin. We show you the dozens of tasks AI can already handle, set up tools that write in your firm\'s voice, and leave your team with a simple system they run on their own.',
  heroStats: [
    { value: 63, suffix: "%", label: "of an attorney's day is non-billable work", source: "Clio 2024 Legal Trends" },
    { value: 60, suffix: "%", label: "of firms don't answer the phone", source: "Clio 2024 Secret Shopper" },
    { value: 50, suffix: "K+", label: "lost per lawyer yearly from billing delays", source: "LawBillity industry estimates" },
    { value: 53, suffix: "%", label: "of small firms now use AI — is yours one?", source: "ABA 2024 Tech Survey" },
  ],
  heroDemoCard: {
    headerLabel: "Billing Narrative Template",
    beforeLabel: "Before",
    beforeTime: "30 min per batch",
    beforeLines: [
      "1/15 - 1.5h - call w/ client re: contract terms",
      "1/16 - 2.0h - reviewed draft, redlined sec 4-7",
      "1/17 - 0.5h - emails w/ opposing counsel",
    ],
    processingLabel: "Processed by Claude in seconds",
    afterLabel: "After",
    afterTime: "5 min — ready for invoice",
    afterTitle: "Professional Services — Chen v. Pacific Properties LLC",
    afterLines: [
      { date: "1/15/2025 — 1.5 hrs", hours: "", description: "Telephone conference with client regarding contract terms; analyzed indemnification provisions and liability allocation." },
      { date: "1/16/2025 — 2.0 hrs", hours: "", description: "Comprehensive review of opposing party's draft; prepared redline of Sections 4-7, including payment terms and dispute resolution." },
      { date: "1/17/2025 — 0.5 hrs", hours: "", description: "Correspondence with opposing counsel regarding scheduling of mediation; coordinated availability." },
    ],
    footerStat: "83%",
    footerStatLabel: "Time saved",
    footerStatus: "Invoice-ready",
  },
  painPoints: [
    {
      stat: "63%",
      title: "of your day is non-billable",
      description: "Attorneys average just 2.9 billable hours out of an 8-hour day. The rest goes to emails, scheduling, formatting, and admin that doesn't generate revenue.",
      source: "Clio 2024 Legal Trends Report",
      tools: "We set up AI templates so your team drafts emails, formats documents, and summarizes notes in seconds.",
      color: "text-rose-500",
      bg: "bg-rose-50",
      border: "border-rose-100",
    },
    {
      stat: "$50K+",
      title: "lost per lawyer, per year",
      description: "Delayed time entries cause massive revenue leakage. Waiting until week's end loses up to 50% of billable hours.",
      source: "LawBillity / LeanLaw industry estimates",
      tools: "We build billing templates: paste time entries, get clean professional billing language back in seconds.",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100",
    },
    {
      stat: "60%",
      title: "of calls go unanswered",
      description: "Only 40% of law firms answer client calls. Every missed call is a missed client. The average web lead response time is 17 hours.",
      source: "Clio 2024 Secret Shopper Study",
      tools: "We build follow-up email templates so your team responds to every inquiry within minutes.",
      color: "text-sky-600",
      bg: "bg-sky-50",
      border: "border-sky-100",
    },
    {
      stat: "51%",
      title: "burnout rate for associates",
      description: "Over half of mid-level associates experience burnout from repetitive operational busywork — not the practice of law itself.",
      source: "Bloomberg Law 2024 Attorney Workload Survey",
      tools: "Ready-made templates let your team offload repetitive work so they focus on actual legal work.",
      color: "text-violet-600",
      bg: "bg-violet-50",
      border: "border-violet-100",
    },
  ],
  sectionLabel: "every law firm",
  roles: [
    { name: "Paralegals", description: "Intake processing, document summaries, deadline reminders" },
    { name: "Office Managers", description: "Internal emails, vendor letters, weekly reports" },
    { name: "Marketing", description: "Newsletters, social posts, client outreach" },
    { name: "Billing Staff", description: "Billing narratives, collection emails, invoice prep" },
    { name: "Legal Assistants", description: "Client emails, follow-ups, scheduling confirmations" },
    { name: "Partners", description: "Meeting summaries, firm updates, strategy drafts" },
  ],
  demos: [
    {
      id: "intake",
      label: "Client Intake",
      description: "AI extracts structured data from messy intake notes.",
      inputLabel: "Raw Intake Notes",
      inputContent: `Name: sarah m. chen
Business: chen's family restaurant LLC
Issue: lease dispute w/ landlord, landlord threatening eviction, need help ASAP
Phone: (626) 555-0187
Email: sarah.chen88@gmail.com
Referred by: mike at the chamber of commerce
Notes: she called twice, sounds urgent, something about lease ending in 30 days`,
      outputLabel: "Extracted Data",
      outputContent: "",
      successMessage: "8 fields extracted — Ready for CRM import",
      fields: [
        { label: "Client Name", value: "Sarah M. Chen" },
        { label: "Business Entity", value: "Chen's Family Restaurant LLC" },
        { label: "Matter Type", value: "Commercial Lease Dispute" },
        { label: "Urgency", value: "High — 30-day deadline" },
        { label: "Phone", value: "(626) 555-0187" },
        { label: "Email", value: "sarah.chen88@gmail.com" },
        { label: "Referral Source", value: "Mike — Chamber of Commerce" },
        { label: "Key Issue", value: "Landlord threatening eviction; lease expiring in 30 days" },
      ],
    },
    {
      id: "billing",
      label: "Smart Billing",
      description: "Transform raw time entries into professional billing narratives in seconds.",
      inputLabel: "Raw Time Entries",
      inputContent: `1/15 - 1.5h - call w/ client re: contract terms, discussed indemnification clause
1/16 - 2.0h - reviewed opposing party draft, redlined sections 4-7
1/17 - 0.5h - email chain w/ opposing counsel, scheduling mediation
1/18 - 3.0h - drafted revised agreement incorporating client feedback`,
      outputLabel: "Generated Billing Narrative",
      outputContent: `Professional Services — Chen v. Pacific Properties LLC

1/15/2025 — 1.5 hrs — Telephone conference with client regarding contract terms; analyzed and discussed indemnification provisions and liability allocation framework.

1/16/2025 — 2.0 hrs — Comprehensive review of opposing party's draft agreement; prepared detailed redline of Sections 4 through 7, including modifications to payment terms, termination clauses, and dispute resolution provisions.

1/17/2025 — 0.5 hrs — Correspondence with opposing counsel regarding scheduling of mediation session; coordinated availability of all parties.

1/18/2025 — 3.0 hrs — Drafted revised agreement incorporating client's feedback and prior negotiation points; updated indemnification language per client instructions.

Total: 7.0 hours`,
    },
    {
      id: "comms",
      label: "Office Communications",
      description: "Turn meeting notes into structured summaries with action items.",
      inputLabel: "Meeting Notes (Raw)",
      inputContent: `team mtg 1/20 - smith case update
attendees: sarah, mike, jenny, david
- david says discovery deadline moved to march 15
- jenny needs to follow up with expert witness dr. thompson
- mike raised concern about budget, client pushing back on fees
- need to schedule deposition for feb 10-12
- sarah will draft motion to compel by end of week
- client wants monthly status updates going forward
- next meeting tuesday 2pm`,
      outputLabel: "Formatted Summary",
      outputContent: `Meeting Summary — Smith Case Update
Date: January 20, 2025 | Duration: ~30 min

Attendees: Sarah, Mike, Jenny, David

Key Discussion Points:
• Discovery deadline extended to March 15
• Budget concerns raised — client pushing back on current fee structure
• Expert witness (Dr. Thompson) follow-up needed

Action Items:
□ Jenny — Follow up with Dr. Thompson (expert witness) — Due: Jan 24
□ Sarah — Draft motion to compel — Due: Jan 24 (end of week)
□ Mike — Address client billing concerns — Due: Jan 22
□ David — Schedule depositions for Feb 10-12 window — Due: Jan 27

Ongoing:
• Implement monthly client status updates (starting February)

Next Meeting: Tuesday, 2:00 PM`,
    },
    {
      id: "marketing",
      label: "Marketing & Outreach",
      description: "Generate professional legal marketing content from simple prompts.",
      inputLabel: "Prompt",
      inputContent: "Write a LinkedIn post about commercial lease renewal tips for small business owners. Professional but approachable tone.",
      outputLabel: "Generated Content",
      outputContent: `Is your business lease up for renewal? Here are 3 things every small business owner should review before signing:

1. Escalation clauses — Know exactly how much your rent can increase and when. Don't get surprised by a 15% jump in Year 3.

2. Personal guarantees — Understand your personal liability. There may be room to negotiate a cap or a burn-off provision.

3. Assignment & subletting rights — If your business evolves, you want flexibility. Make sure you're not locked into a space you can't adapt.

At Chen & Associates, we've helped dozens of local businesses negotiate leases that protect their interests. If your renewal is coming up, let's talk before you sign.

#SmallBusiness #CommercialLease #LegalTips #BusinessLaw`,
    },
  ],
  automationUseCases: [
    { task: "Client intake processing", howItWorks: "Your receptionist pastes messy intake notes into Claude with our pre-built prompt. Claude instantly organizes the info and drafts a follow-up email.", before: "45 min", after: "2 min", savings: "96%" },
    { task: "Billing narratives", howItWorks: "Your billing clerk pastes raw time entries into Claude with our billing prompt. Claude rewrites them into professional language.", before: "30 min", after: "5 min", savings: "83%" },
    { task: "Meeting summaries", howItWorks: "After any Zoom call, Zoom AI Companion automatically generates a summary with attendees, key decisions, and action items.", before: "15 min", after: "Instant", savings: "100%" },
    { task: "Client follow-up emails", howItWorks: "Your assistant pastes a quick case update into Claude with our email prompt. Claude drafts a personalized, professional email in seconds.", before: "20 min", after: "2 min", savings: "90%" },
  ],
  faqItems: [
    { question: "Is this about automating our legal work?", answer: "No — we don't touch your case work, legal research, or client matters. We focus entirely on the operational side of your firm: client intake, billing, emails, marketing, scheduling, and admin tasks. These are the repetitive, time-consuming tasks that eat up your staff's day but don't require a law degree." },
    { question: "What is Claude and how does it work?", answer: "Claude is an AI assistant made by Anthropic. Think of it like a very smart writing helper. You type in a request — like 'rewrite these time entries into billing language' — and it gives you a polished result in seconds. We make it even simpler by creating pre-written prompts so your team doesn't have to figure out what to type." },
    { question: "What are prompt templates?", answer: "A prompt template is a pre-written instruction that tells Claude exactly what to do. Think of it like a recipe: instead of figuring out how to cook from scratch, you follow the steps and get a great result every time. Your staff just pastes their info below it and Claude handles the rest. No technical skills needed." },
    { question: "Do you access any of our firm's data?", answer: "No — we never access, handle, or store any of your firm's data. We simply teach your team how to use AI tools like Claude and Zoom AI on their own. We build prompt templates and show your staff how to copy and paste them." },
    { question: "What if our staff isn't tech-savvy?", answer: "That's exactly who we build for. If your staff can copy and paste, they can use Claude. We create the templates, organize them by role, and show each person exactly how to use them." },
    { question: "Can Claude really help with billing?", answer: "It's one of the biggest wins. Industry estimates show that delayed time entries cost $50,000+ in lost revenue per lawyer per year. With our billing prompts, your staff pastes raw time entries into Claude and gets clean, professional billing language back in seconds." },
    { question: "Can Claude really match our firm's writing style?", answer: "Yes. During setup, we show your team how to load 10-20 examples of your firm's best writing into a Claude workspace. Claude reads those samples and matches your tone, vocabulary, and structure in everything it writes." },
    { question: "What about meeting notes?", answer: "We turn on a built-in feature in Zoom that automatically writes up your meetings after every call — who was there, what was discussed, and what needs to happen next." },
    { question: "Do we need to review what AI writes before sending?", answer: "Always. Claude is a tool that drafts content for your team — it doesn't send anything on its own. Your staff reviews, edits, and approves everything before it goes out." },
    { question: "How long does the setup take?", answer: "Most firms are up and running within 2-4 weeks. Week 1 is an audit, Weeks 2-3 we create templates and train each role, Week 4 is handoff with full documentation." },
    { question: "Do we need ongoing support from you?", answer: "No — that's the whole point. We set up the prompt templates, train your team, and hand over full documentation so you run independently. No ongoing fees, no retainer, no dependency." },
  ],
  sizeOptions: [
    { value: "", label: "Select firm size" },
    { value: "solo", label: "Solo Practitioner" },
    { value: "small", label: "Small (2-10 attorneys)" },
    { value: "medium", label: "Medium (11-50 attorneys)" },
    { value: "large", label: "Large (50+ attorneys)" },
  ],
  specialtyOptions: [
    { value: "", label: "Select practice area (optional)" },
    { value: "corporate", label: "Corporate / Business Law" },
    { value: "family", label: "Family Law" },
    { value: "real-estate", label: "Real Estate" },
    { value: "personal-injury", label: "Personal Injury" },
    { value: "immigration", label: "Immigration" },
    { value: "criminal", label: "Criminal Defense" },
    { value: "estate", label: "Estate Planning" },
    { value: "employment", label: "Employment Law" },
    { value: "general", label: "General Practice" },
    { value: "other", label: "Other" },
  ],
  specialtyLabel: "Practice Area",
  firmVoice: {
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
  },
  trustItems: ["We never touch your data", "Not case work — operations only", "Results in weeks"],
  urgencyText: "5 new firms",
  metaTitle: "Blueprint AI | AI Consulting & Training for Law Firms",
  metaDescription: "We teach law firms to automate client intake, billing, marketing, and operations with AI. Not case work — we help your firm run smoother.",
};

// ─── CPA Firms ───────────────────────────────────────────────────────────────

const cpaFirms: IndustryConfig = {
  slug: "cpa-firms",
  name: "CPA Firms",
  brandName: "Blueprint AI",
  clientNoun: "practice",
  clientNounPlural: "firms",
  badge: "AI Consulting for CPA Firms",
  headline: "Your accountants crunch numbers.",
  accentHeadline: "We automate everything else.",
  subheadline:
    'Your accountants spend <span class="font-semibold text-neutral-800">50% of their time</span> on tasks a machine could handle. Data entry, document chasing, reconciliation — it adds up to lost advisory hours and 80-hour tax seasons. We set up AI tools that connect to your QuickBooks or Xero, build ready-to-use templates, and hand your team a system they run on their own.',
  heroStats: [
    { value: 50, suffix: "%", label: "of accounting tasks are automatable today", source: "Intuit 2024 Accountant Tech Survey" },
    { value: 6, suffix: "+", label: "days to close the books each month — most firms", source: "Ledge 2025 Month-End Benchmarks" },
    { value: 80, suffix: "hr", label: "weeks during tax season, 200K+ positions unfilled", source: "AICPA 2025" },
    { value: 17, suffix: "%", label: "revenue growth for firms offering advisory", source: "Future Firm 2025" },
  ],
  heroDemoCard: {
    headerLabel: "Transaction Categorization",
    beforeLabel: "Before",
    beforeTime: "3 hrs per client",
    beforeLines: [
      "01/15 - $2,847.50 - AMZN MKTP US*RT4K",
      "01/15 - $156.00 - STAPLES #0472",
      "01/16 - $1,200.00 - GUSTO PAYROLL",
    ],
    processingLabel: "Categorized by AI in seconds",
    afterLabel: "After",
    afterTime: "20 min review — ready for books",
    afterTitle: "Q1 Transaction Categorization — Chen CPA Group",
    afterLines: [
      { date: "01/15 — $2,847.50", hours: "", description: "Office Supplies & Equipment (Amazon) — Categorized: 5200 · Office Supplies" },
      { date: "01/15 — $156.00", hours: "", description: "Office Supplies (Staples) — Categorized: 5200 · Office Supplies" },
      { date: "01/16 — $1,200.00", hours: "", description: "Payroll (Gusto) — Categorized: 6200 · Wages & Salaries" },
    ],
    footerStat: "89%",
    footerStatLabel: "Time saved",
    footerStatus: "Books-ready",
  },
  painPoints: [
    {
      stat: "50%",
      title: "of your work is automatable",
      description: "69% of firms say data entry is their #1 AI use case because it dominates the workday. Yet most still do it by hand.",
      source: "Intuit 2024 Accountant Tech Survey",
      tools: "We connect AI directly to your QuickBooks or Xero. Your team asks questions in plain English and gets answers from your own financial data.",
      color: "text-rose-500",
      bg: "bg-rose-50",
      border: "border-rose-100",
    },
    {
      stat: "6+",
      title: "days to close the books",
      description: "94% of firms still rely on Excel for month-end. Cash reconciliations alone eat 20-50 hours.",
      source: "Ledge 2025 Month-End Benchmarks",
      tools: "AI automatically matches transactions, identifies discrepancies, and presents only the exceptions. Days become hours.",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100",
    },
    {
      stat: "80hr",
      title: "weeks during tax season",
      description: "50-80 hour weeks, and the #1 bottleneck is chasing client documents. The talent shortage makes it worse — 200K+ positions unfilled.",
      source: "AICPA 2025 Workforce Survey",
      tools: "AI sends automated document checklists, extracts data from uploaded W-2s and 1099s, and flags what's missing — before you ask.",
      color: "text-sky-600",
      bg: "bg-sky-50",
      border: "border-sky-100",
    },
    {
      stat: "17%",
      title: "revenue growth from advisory",
      description: "83% of firms offer advisory services now, but compliance work eats the time needed to actually deliver it.",
      source: "Future Firm 2025 Benchmarks",
      tools: "We free up 10-15 hours per week per staff member so your team can focus on advising, not data entry.",
      color: "text-violet-600",
      bg: "bg-violet-50",
      border: "border-violet-100",
    },
  ],
  sectionLabel: "every CPA firm",
  roles: [
    { name: "Staff Accountants", description: "Transaction categorization, reconciliations, journal entries" },
    { name: "Bookkeepers", description: "Data entry, bank feeds, vendor payments" },
    { name: "Tax Preparers", description: "Document collection, data extraction, return prep" },
    { name: "Admin Staff", description: "Client emails, scheduling, document requests" },
    { name: "Client Managers", description: "Advisory emails, quarterly reviews, client check-ins" },
    { name: "Partners", description: "Firm strategy, advisory services, business development" },
  ],
  demos: [
    {
      id: "tax-organizer",
      label: "Client Tax Organizer",
      description: "Messy client docs → organized document checklist with missing items flagged.",
      demoType: "checklist",
      inputLabel: "Client Upload Notes",
      inputContent: `Client: Johnson Family Trust
Uploaded: W-2 (Mike), W-2 (Sarah), 1099-INT (Chase), mortgage statement
Email says: "here's most of our stuff, think we're missing a few things"
Filing: MFJ, 2 dependents
Last year had: rental income, HSA contributions, charitable donations`,
      outputLabel: "Organized Tax Checklist",
      successMessage: "4 received, 4 missing, 2 need verification",
      checklistItems: [
        { text: "W-2 — Michael Johnson", status: "done" },
        { text: "W-2 — Sarah Johnson", status: "done" },
        { text: "1099-INT — Chase Bank", status: "done" },
        { text: "Mortgage Interest (Form 1098)", status: "done" },
        { text: "Rental income docs (Schedule E)", status: "missing" },
        { text: "HSA contributions (Form 5498-SA)", status: "missing" },
        { text: "Charitable donation receipts", status: "missing" },
        { text: "Property tax statement", status: "missing" },
        { text: "1099-DIV — Investment dividends", status: "flag" },
        { text: "Dependent SSNs — verify on file", status: "flag" },
      ],
      outputContent: `Tax Document Organizer — Johnson Family Trust
Filing Status: Married Filing Jointly | 2 Dependents

RECEIVED ✓
✓ W-2 — Michael Johnson (employer TBD)
✓ W-2 — Sarah Johnson (employer TBD)
✓ 1099-INT — Chase Bank
✓ Mortgage Interest Statement (Form 1098)

MISSING — Action Required:
□ 1099-MISC or Schedule E — Rental income (reported last year)
□ Form 5498-SA — HSA contributions
□ Charitable donation receipts/log
□ Property tax statement
□ 1099-DIV — Investment dividends (if applicable)
□ Dependent SSNs — Verify on file

NEXT STEP: Send client checklist email requesting missing items.
Priority: Rental income docs (affects Schedule E)`,
    },
    {
      id: "categorizer",
      label: "Transaction Categorizer",
      description: "Bank transactions → auto-categorized with exceptions flagged.",
      demoType: "table",
      inputLabel: "Raw Bank Transactions",
      tableData: {
        headers: ["Date", "Amount", "Vendor", "Category", "Status"],
        rows: [
          ["01/15", "$2,847", "Amazon", "Office", "⚠ Review"],
          ["01/15", "$156", "Staples", "Office", "✓ Auto"],
          ["01/16", "$1,200", "Gusto", "Payroll", "✓ Auto"],
          ["01/17", "$89.99", "Zoom", "Software", "✓ Auto"],
          ["01/18", "$4,500", "Check #1847", "Unknown", "⚠ Review"],
          ["01/19", "$234", "Uber", "Travel", "✓ Auto"],
        ],
        recommendation: "5 of 6 auto-categorized. Check #1847 needs manual review — no vendor match. Amazon purchase exceeds $2,500 — may be a capital expense.",
      },
      inputContent: `01/15 - $2,847.50 - AMZN MKTP US*RT4K
01/15 - $156.00 - STAPLES #0472
01/16 - $1,200.00 - GUSTO PAYROLL
01/17 - $89.99 - ZOOM VIDEO COMM
01/18 - $4,500.00 - CHECK #1847
01/19 - $234.56 - UBER TRIP`,
      outputLabel: "Categorized Transactions",
      outputContent: `Transaction Categorization — January 2025

01/15 — $2,847.50 — Amazon Marketplace
→ Category: 5200 · Office Supplies & Equipment
⚠ Flag: Amount >$2,500 — verify if capital expense

01/15 — $156.00 — Staples
→ Category: 5200 · Office Supplies

01/16 — $1,200.00 — Gusto Payroll
→ Category: 6200 · Wages & Salaries

01/17 — $89.99 — Zoom
→ Category: 6100 · Software & Subscriptions

01/18 — $4,500.00 — Check #1847
→ Category: ❓ NEEDS REVIEW — No vendor match
⚠ Flag: Large check with no clear description

01/19 — $234.56 — Uber
→ Category: 6300 · Travel & Transportation

Summary: 5 auto-categorized | 1 needs review`,
    },
    {
      id: "advisory",
      label: "Client Advisory Email",
      description: "Financial summary → professional quarterly advisory email.",
      demoType: "email",
      inputLabel: "Client Financials Summary",
      inputContent: "Q4 revenue up 12% YoY, expenses up 18%. Payroll is 42% of revenue (was 36%). New equipment lease started Oct. Tax estimates may need adjustment for Q1.",
      outputLabel: "Advisory Email Draft",
      outputContent: `Subject: Q4 Financial Review & Recommendations — Johnson Consulting

Hi Mike,

Hope the new year is off to a great start. I wanted to share some observations from your Q4 numbers and a few things to think about heading into 2025.

The Good News: Revenue grew 12% year-over-year — strong performance. Your top line is moving in the right direction.

What to Watch: Expenses grew faster than revenue (18% vs. 12%). The biggest driver is payroll, which jumped from 36% to 42% of revenue. With the new equipment lease starting in October, your fixed costs have increased meaningfully.

Recommendations:
1. Review staffing efficiency — at 42%, payroll is above the 35-38% benchmark for your industry
2. Revisit Q1 estimated tax payments — the expense increase may create an overpayment situation
3. Consider the Section 179 deduction for the new equipment lease

I'd suggest we schedule a 30-minute call this month to walk through the numbers together. I can have a full comparison report ready.

Best,
[Your Name]`,
    },
    {
      id: "month-end",
      label: "Month-End Close",
      description: "Business type → customized close checklist.",
      inputLabel: "Business Details",
      inputContent: "Professional services firm, 15 employees, QuickBooks Online, monthly close for January 2025. Has payroll through Gusto, uses Amex corporate cards.",
      outputLabel: "Month-End Close Checklist",
      outputContent: `Month-End Close Checklist — January 2025
Business: Professional Services | 15 Employees | QBO

PRE-CLOSE (Days 1-2):
□ Download & import Amex corporate card transactions
□ Reconcile Gusto payroll entries to QBO
□ Review & categorize uncategorized transactions
□ Follow up on outstanding vendor invoices

RECONCILIATION (Days 2-3):
□ Bank reconciliation — all accounts
□ Credit card reconciliation — Amex
□ Accounts receivable aging review
□ Accounts payable aging review

ADJUSTMENTS (Day 3):
□ Record prepaid expense amortization
□ Record depreciation entries
□ Accrue any known but unbilled expenses
□ Review intercompany transactions (if applicable)

REVIEW & CLOSE (Day 4):
□ Run P&L comparison — Jan vs. prior month & Jan prior year
□ Review balance sheet for unusual balances
□ Verify all reconciliations are complete
□ Generate management reports
□ Close period in QBO

Target: 4-day close (industry benchmark: 6+ days)`,
    },
  ],
  automationUseCases: [
    { task: "Transaction categorization", howItWorks: "AI reads bank transactions and auto-categorizes them using your chart of accounts. Flags exceptions for review.", before: "3 hrs/client/mo", after: "20 min", savings: "89%" },
    { task: "Client document collection", howItWorks: "AI generates personalized document checklists, sends follow-ups, and tracks what's been received vs. what's missing.", before: "2 weeks chasing", after: "2 days automated", savings: "85%" },
    { task: "Month-end reconciliation", howItWorks: "AI matches transactions, identifies discrepancies, and presents only exceptions that need human review.", before: "20-50 hrs", after: "5-10 hrs", savings: "75%" },
    { task: "Tax return data entry", howItWorks: "AI extracts data from W-2s, 1099s, and other documents, pre-populating return fields for review.", before: "1-2 hrs/return", after: "15 min review", savings: "88%" },
  ],
  faqItems: [
    { question: "Does AI access our clients' financial data?", answer: "Only through tools your team controls. We set up connections to QuickBooks or Xero that your team manages. We never access your clients' data directly — we teach your team how to use AI tools on their own." },
    { question: "How does this connect to QuickBooks/Xero?", answer: "We set up official AI integrations that connect directly to your accounting software. Your team can ask questions in plain English — like 'show me all uncategorized transactions over $500' — and get answers from your own data instantly." },
    { question: "Is this secure for sensitive financial data?", answer: "Yes. All data stays within your existing accounting platforms. AI processes requests in real-time without storing your financial data. We follow the same security standards your firm already maintains." },
    { question: "Will this work during tax season?", answer: "Tax season is where it shines most. AI handles document collection, data extraction, and return prep — the exact bottlenecks that create 80-hour weeks. Most firms see 40-60% time savings on these tasks." },
    { question: "What if our staff isn't tech-savvy?", answer: "If they can copy and paste, they can use this. We create ready-made templates for every task and train each role on exactly what they need. No coding, no technical skills required." },
    { question: "How long does setup take?", answer: "Most firms are up and running within 2-4 weeks. We audit your workflows, build templates, connect your accounting software, train your team, and hand over everything with full documentation." },
    { question: "Do we need ongoing support?", answer: "No — we set it up, train your team, and hand over the keys. Your team runs everything independently. No retainer, no ongoing dependency." },
    { question: "What's the ROI look like?", answer: "Most firms recover 10-15 hours per staff member per week. During tax season, that compounds dramatically. The setup typically pays for itself within the first month of use." },
  ],
  sizeOptions: [
    { value: "", label: "Select firm size" },
    { value: "solo", label: "Solo Practitioner" },
    { value: "small", label: "Small (2-10 staff)" },
    { value: "medium", label: "Medium (11-30 staff)" },
    { value: "large", label: "Large (30+ staff)" },
  ],
  specialtyOptions: [
    { value: "", label: "Select specialty (optional)" },
    { value: "tax", label: "Tax Preparation" },
    { value: "audit", label: "Audit & Assurance" },
    { value: "bookkeeping", label: "Bookkeeping" },
    { value: "advisory", label: "Advisory / Consulting" },
    { value: "payroll", label: "Payroll Services" },
    { value: "forensic", label: "Forensic Accounting" },
    { value: "general", label: "Full Service" },
    { value: "other", label: "Other" },
  ],
  specialtyLabel: "Specialty",
  firmVoice: {
    genericEmail: `Dear Client,

This is to inform you that we have completed the review of your financial statements. Please find attached the updated reports. Let us know if you have any questions.

Regards,
The Accounting Team`,
    firmVoiceEmail: `Hi Mike,

Quick update on your January financials — everything looks solid. Revenue was up 8% from December, and your expenses stayed in line.

One thing I want to flag: your payroll costs jumped about 6% this month. Looks like it's from the new hire onboarding. Nothing alarming, but worth keeping an eye on going into Q2.

I'll have the full monthly package ready by Friday. Let me know if you want to hop on a quick call to walk through anything.

Best,
Jennifer
Westfield CPA Group`,
    voiceLabel: "Your Firm's Voice",
    worksFor: ["Client emails", "Advisory letters", "Engagement letters", "Financial summaries", "Newsletter updates", "Tax deadline reminders", "Collection notices", "Proposal letters"],
  },
  trustItems: ["We never touch your data", "Your team controls all access", "Results in weeks"],
  urgencyText: "5 new firms",
  metaTitle: "Blueprint AI | AI Consulting & Training for CPA Firms",
  metaDescription: "We help CPA firms automate data entry, document collection, reconciliation, and client communications with AI. 50% of accounting tasks are automatable today.",
};

// ─── Real Estate ─────────────────────────────────────────────────────────────

const realEstate: IndustryConfig = {
  slug: "real-estate",
  name: "Real Estate",
  brandName: "Blueprint AI",
  clientNoun: "brokerage",
  clientNounPlural: "brokerages",
  badge: "AI Consulting for Real Estate",
  headline: "Your agents close deals.",
  accentHeadline: "We automate everything else.",
  subheadline:
    '<span class="font-semibold text-neutral-800">75% of transaction time</span> is admin — not selling. Scheduling, data entry, document tracking, and follow-ups eat your agents\' days. We set up AI tools that handle the paperwork, respond to leads instantly, and generate listing content in seconds.',
  heroStats: [
    { value: 75, suffix: "%", label: "of transaction time is admin — not selling", source: "NAR / Avenue Transactions" },
    { value: 391, suffix: "%", label: "more conversions when you respond in under 1 min", source: "Real Geeks 2024" },
    { value: 5, suffix: "x", label: "faster closing with digital transaction coordination", source: "AgentUp 2025" },
    { value: 72, suffix: "%", label: "of buyers research agents on social media first", source: "NAR 2024 Profile" },
  ],
  heroDemoCard: {
    headerLabel: "Listing Description Generator",
    beforeLabel: "Before",
    beforeTime: "45 min per listing",
    beforeLines: [
      "3bd/2ba ranch, 1,850 sqft, updated kitchen",
      "new roof 2023, hardwood floors throughout",
      "corner lot, mature trees, close to schools",
    ],
    processingLabel: "Written by AI in seconds",
    afterLabel: "After",
    afterTime: "5 min — MLS-ready",
    afterTitle: "123 Oak Street — Westridge Estates",
    afterLines: [
      { date: "Welcome Home", hours: "", description: "Charming 3-bedroom, 2-bath ranch in sought-after Westridge Estates. 1,850 sq ft of thoughtfully updated living space." },
      { date: "Key Features", hours: "", description: "Renovated kitchen with quartz counters and stainless appliances. Hardwood floors throughout. Brand new roof (2023)." },
      { date: "Outdoor Living", hours: "", description: "Spacious corner lot with mature shade trees. Minutes from top-rated schools and neighborhood parks." },
    ],
    footerStat: "89%",
    footerStatLabel: "Time saved",
    footerStatus: "MLS-ready",
  },
  painPoints: [
    {
      stat: "75%",
      title: "of your time is paperwork",
      description: "Out of 40 hours per transaction, 30 are admin: scheduling, data entry, coordination. Your agents are drowning in busywork instead of selling.",
      source: "NAR / Avenue Transactions",
      tools: "AI handles transaction checklists, deadline reminders, and document tracking so you sell instead of shuffle paper.",
      color: "text-rose-500",
      bg: "bg-rose-50",
      border: "border-rose-100",
    },
    {
      stat: "391%",
      title: "more conversions in under 1 min",
      description: "Average conversion is 0.5%. Responding in under 1 minute increases it by 391%. You can't be on the phone 24/7.",
      source: "Real Geeks 2024 Lead Study",
      tools: "AI responds to every inquiry instantly — day or night. Qualifies leads, books showings, sends personalized follow-ups automatically.",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100",
    },
    {
      stat: "45min",
      title: "per listing description",
      description: "Writing a unique, compelling description for every listing eats 30-60 minutes each time. And it still might not stand out.",
      source: "Real estate industry benchmarks",
      tools: "Paste the property details, AI writes an MLS-ready description in 30 seconds. Tweak a sentence and post.",
      color: "text-sky-600",
      bg: "bg-sky-50",
      border: "border-sky-100",
    },
    {
      stat: "72%",
      title: "of buyers check your social media",
      description: "72% of buyers research agents on social media before reaching out. But you barely have time to post consistently.",
      source: "NAR 2024 Profile of Home Buyers and Sellers",
      tools: "AI generates a month of content in under an hour — posts, captions, market updates, neighborhood spotlights.",
      color: "text-violet-600",
      bg: "bg-violet-50",
      border: "border-violet-100",
    },
  ],
  sectionLabel: "every real estate team",
  roles: [
    { name: "Agents", description: "Listing descriptions, lead follow-ups, client communications" },
    { name: "Transaction Coordinators", description: "Checklists, deadline tracking, document management" },
    { name: "Marketing", description: "Social media, property flyers, email campaigns" },
    { name: "Admin Staff", description: "Scheduling, data entry, client emails" },
    { name: "Brokers", description: "Market reports, agent communications, strategy" },
    { name: "Client Services", description: "Buyer/seller updates, closing coordination" },
  ],
  demos: [
    {
      id: "listing",
      label: "Listing Description",
      description: "Property details → polished MLS-ready listing description.",
      inputLabel: "Property Details",
      inputContent: `3bd/2ba ranch, 1,850 sqft, built 1998
Updated kitchen — quartz counters, stainless appliances, soft-close cabinets
New roof 2023, hardwood floors throughout main level
Corner lot, mature oak trees, fenced backyard
2-car attached garage, new water heater 2024
Westridge Estates subdivision, top-rated school district
Listed at $425,000`,
      outputLabel: "MLS-Ready Description",
      outputContent: `Welcome to 123 Oak Street — a beautifully updated 3-bedroom, 2-bath ranch in the heart of sought-after Westridge Estates.

Step inside to discover 1,850 square feet of thoughtfully maintained living space, featuring hardwood floors throughout the main level and a stunning renovated kitchen with quartz countertops, stainless steel appliances, and soft-close cabinetry.

Major updates include a brand-new roof (2023) and water heater (2024) — giving you peace of mind for years to come.

Outside, enjoy a spacious corner lot shaded by mature oak trees, with a fully fenced backyard perfect for entertaining or relaxing. The attached 2-car garage provides ample storage and convenience.

Located in a top-rated school district with easy access to parks, shopping, and dining. This is the one you've been waiting for.

Offered at $425,000 | Schedule your private showing today.`,
    },
    {
      id: "lead-response",
      label: "Lead Response",
      description: "Inquiry details → instant personalized follow-up email.",
      demoType: "email",
      inputLabel: "Lead Inquiry",
      inputContent: "Online inquiry from Jennifer Walsh, interested in homes in Westridge area, budget $400-500K, 3+ bedrooms, good schools important, pre-approved, looking to move by summer.",
      outputLabel: "Follow-Up Email",
      outputContent: `Subject: Westridge Homes in Your Budget — Let's Find Your Perfect Fit

Hi Jennifer,

Thank you for reaching out! I'd love to help you find the right home in Westridge.

Great news — there are several beautiful 3+ bedroom homes in the $400-500K range right now, and the school district is one of the best in the area. With your pre-approval in hand, you're in a strong position.

I've been working this neighborhood for years and know the inventory well. A few properties come to mind that I think you'd love — including one that just hit the market this week.

Would you be available for a quick call this week? I'd like to learn a bit more about your wishlist and set up some showings. With your summer timeline, we're in a great spot to move at a comfortable pace.

Looking forward to connecting!

Best,
[Your Name]
[Your Brokerage]`,
    },
    {
      id: "cma",
      label: "CMA Narrator",
      description: "Comparable data → plain-language market analysis for clients.",
      demoType: "table",
      tableData: {
        headers: ["Property", "Bed/Bath", "Sq Ft", "Price", "Days"],
        rows: [
          ["123 Oak St (Subject)", "3/2", "1,850", "$425,000", "Listed"],
          ["145 Elm St", "3/2", "1,780", "$415,000", "45"],
          ["89 Maple Dr", "3/2", "1,900", "$435,000", "21"],
          ["201 Pine Ave", "4/2", "2,100", "$455,000", "30"],
        ],
        recommendation: "List at $425,000. The 21-day sale at $435K for a similar home suggests strong buyer interest. Your kitchen renovation and new roof add value competitors lacked.",
      },
      inputLabel: "Comparable Sales Data",
      inputContent: "Subject: 123 Oak St, 3/2, 1,850sf, listed $425K. Comp 1: 145 Elm, 3/2, 1,780sf, sold $415K (45 days). Comp 2: 89 Maple, 3/2, 1,900sf, sold $435K (21 days). Comp 3: 201 Pine, 4/2, 2,100sf, sold $455K (30 days). Market avg DOM: 32 days.",
      outputLabel: "Client-Ready Market Analysis",
      outputContent: `Comparative Market Analysis — 123 Oak Street

Based on recent sales of similar homes in your area, here's what the market is telling us:

COMPARABLE SALES:
• 145 Elm St — 3/2, 1,780 sf — Sold at $415,000 (45 days on market)
  Slightly smaller than your home, took longer to sell — suggests pricing was initially high.

• 89 Maple Dr — 3/2, 1,900 sf — Sold at $435,000 (21 days on market)
  Very similar to your home, sold quickly — strong buyer interest at this price point.

• 201 Pine Ave — 4/2, 2,100 sf — Sold at $455,000 (30 days on market)
  Larger home with extra bedroom commands a premium, as expected.

YOUR HOME'S POSITION:
At $425,000, your listing is competitively positioned. The kitchen renovation and new roof add value that comparable homes didn't have. Based on the data, I'd expect strong interest within the first 3-4 weeks.

RECOMMENDATION: List at $425,000 with room for negotiation to $415,000 floor. The recent 21-day sale at $435K for a similar home suggests you may receive offers at or near asking.`,
    },
    {
      id: "social",
      label: "Social Content",
      description: "Topic/property → month of social media posts with captions.",
      inputLabel: "Content Request",
      inputContent: "Generate 4 social media posts for January: 1 new listing (123 Oak St), 1 market update, 1 homebuyer tip, 1 neighborhood spotlight (Westridge).",
      outputLabel: "Social Media Content Calendar",
      outputContent: `JANUARY SOCIAL CONTENT — 4 Posts

📸 Post 1: New Listing (Week 1)
"Just listed! 3bd/2ba ranch in Westridge Estates — $425K
✨ Updated kitchen with quartz counters
🏠 Hardwood floors throughout
🌳 Corner lot with mature trees
📍 Top-rated school district

DM me for a private showing! Link in bio.
#JustListed #WestridgeEstates #RealEstate"

📊 Post 2: Market Update (Week 2)
"2025 Real Estate Check-In: What buyers need to know 👇

• Average days on market: 32 (down from 45 last year)
• Inventory is still tight in the $400-500K range
• Pre-approved buyers are winning — get ahead of spring

Thinking about buying this year? Let's chat about your timing.
#RealEstateMarket #2025Housing #HomeBuying"

💡 Post 3: Homebuyer Tip (Week 3)
"The #1 mistake first-time buyers make? Waiting to get pre-approved.

Here's why it matters:
→ Sellers take you more seriously
→ You know your real budget (not just your wish list)
→ You can move fast when the right home hits

Pre-approval takes 24-48 hours. There's no reason to wait.
#FirstTimeBuyer #HomeBuyingTips #RealEstateAdvice"

🏘 Post 4: Neighborhood Spotlight (Week 4)
"Neighborhood Spotlight: Westridge Estates 🌳

Why families love it here:
🎓 Top-rated schools (9/10 GreatSchools rating)
🌿 Tree-lined streets with walking trails
🛒 5 min to shopping, dining & parks
🏡 Homes ranging $380K-$520K

Curious what's available? Drop a 🏠 and I'll send you current listings.
#WestridgeEstates #NeighborhoodSpotlight #DreamHome"`,
    },
  ],
  automationUseCases: [
    { task: "Listing descriptions", howItWorks: "Paste property details, AI writes a compelling MLS-ready description in seconds. Review, tweak, post.", before: "45 min", after: "5 min", savings: "89%" },
    { task: "Lead follow-up emails", howItWorks: "AI drafts personalized responses to every inquiry instantly — qualified, professional, and on-brand.", before: "15 min (if at all)", after: "Instant", savings: "100%" },
    { task: "Transaction checklists", howItWorks: "AI generates customized checklists for each transaction type with deadlines and responsible parties.", before: "1 hr per file", after: "2 min", savings: "97%" },
    { task: "Monthly social content", howItWorks: "AI creates a full month of social media posts with captions, hashtags, and posting schedule.", before: "8 hrs", after: "1 hr", savings: "88%" },
  ],
  faqItems: [
    { question: "Does AI write better than I do?", answer: "It writes faster. The quality matches your voice because we train it on your best writing samples — past listings, emails, and marketing. You review everything before it goes out." },
    { question: "Will this work with my MLS?", answer: "AI generates the content — you paste it into your MLS. It works with any MLS system because you control the final output." },
    { question: "Can AI really respond to leads instantly?", answer: "Yes. We set up templates that generate personalized responses the moment an inquiry comes in. Your lead gets a professional, relevant response while you're showing a property." },
    { question: "What about my personal brand/voice?", answer: "We load your best writing samples into AI so every output matches your tone and style. It sounds like you, not a robot." },
    { question: "I'm not tech-savvy. Can I still use this?", answer: "If you can copy and paste, you can use this. We build every template as a simple fill-in-the-blank. No coding, no technical skills." },
    { question: "How long does setup take?", answer: "Most teams are up and running in 2-3 weeks. We audit your workflows, build templates, train your team, and hand over everything." },
    { question: "Do I need ongoing support?", answer: "No — we hand off everything. Your team runs it independently. No retainer required." },
    { question: "What's the ROI?", answer: "Agents typically save 10-15 hours per week on admin tasks. That's time back for showings, prospecting, and closing deals. One extra closing per quarter more than pays for the setup." },
  ],
  sizeOptions: [
    { value: "", label: "Select team size" },
    { value: "solo", label: "Solo Agent" },
    { value: "small", label: "Small Team (2-5 agents)" },
    { value: "medium", label: "Mid-Size (6-20 agents)" },
    { value: "large", label: "Large Brokerage (20+ agents)" },
  ],
  specialtyOptions: [
    { value: "", label: "Select specialty (optional)" },
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "luxury", label: "Luxury" },
    { value: "property-management", label: "Property Management" },
    { value: "new-construction", label: "New Construction" },
    { value: "general", label: "General" },
    { value: "other", label: "Other" },
  ],
  specialtyLabel: "Specialty",
  firmVoice: {
    genericEmail: `Dear Client,

This is to inform you that we have an update regarding your property search. We have found some listings that may be of interest. Please let us know when you would like to schedule viewings.

Regards,
The Real Estate Team`,
    firmVoiceEmail: `Hi Jennifer,

Great news — a few homes just hit the market this week that I think are right up your alley. One in particular at 123 Oak Street checks every box: 3 bedrooms, updated kitchen, great school district, and it's listed at $425K.

Want to see it this weekend? I can set up a private showing Saturday morning before it gets too much traffic.

Also — the market report for Westridge came in and inventory is still tight. If you see something you like, I'd recommend moving quickly. Happy to walk you through the numbers on a call.

Talk soon,
Sarah
Westridge Realty Group`,
    voiceLabel: "Your Brand Voice",
    worksFor: ["Listing descriptions", "Client emails", "Market updates", "Social media posts", "Newsletters", "Open house invites", "Buyer/seller guides", "Thank you notes"],
  },
  trustItems: ["We never touch your data", "Your team controls everything", "Results in weeks"],
  urgencyText: "5 new teams",
  metaTitle: "Blueprint AI | AI Consulting for Real Estate Teams",
  metaDescription: "We help real estate agents automate listings, lead follow-ups, transaction coordination, and marketing with AI. 75% of your time is paperwork — we fix that.",
};

// ─── Insurance Agencies ──────────────────────────────────────────────────────

const insurance: IndustryConfig = {
  slug: "insurance",
  name: "Insurance Agencies",
  brandName: "Blueprint AI",
  clientNoun: "agency",
  clientNounPlural: "agencies",
  badge: "AI Consulting for Insurance Agencies",
  headline: "Your producers sell coverage.",
  accentHeadline: "We automate everything else.",
  subheadline:
    'Your producers spend <span class="font-semibold text-neutral-800">4 hours comparing quotes</span> by hand across carrier portals. Renewals slip through the cracks, claims have errors, and cross-sell opportunities go unnoticed. We set up AI tools that cut quote comparison to minutes, automate renewal outreach, and keep your agency ahead.',
  heroStats: [
    { value: 4, suffix: "hrs", label: "to manually compare quotes across carrier portals", source: "Patra 2025" },
    { value: 37, suffix: "%", label: "of agencies report sales and renewals are down", source: "PropertyCasualty360 2025" },
    { value: 60, suffix: "%", label: "of manually entered claims have errors", source: "Riskonnect Claims Research" },
    { value: 12, suffix: "hrs", label: "per week recovered per staff member with automation", source: "Patra AI 2025" },
  ],
  heroDemoCard: {
    headerLabel: "Quote Comparison Report",
    beforeLabel: "Before",
    beforeTime: "4 hours per comparison",
    beforeLines: [
      "Log into State Farm portal → enter client info",
      "Log into Hartford portal → enter same info",
      "Log into Travelers portal → enter same info again",
    ],
    processingLabel: "Compared by AI in minutes",
    afterLabel: "After",
    afterTime: "30 min — client-ready",
    afterTitle: "Quote Comparison — Johnson Manufacturing BOP",
    afterLines: [
      { date: "State Farm — $4,200/yr", hours: "", description: "Best general liability limits. $1M/$2M occurrence. Includes cyber coverage add-on." },
      { date: "Hartford — $3,850/yr", hours: "", description: "Lowest premium. Strong property coverage. No cyber included — available as endorsement +$300." },
      { date: "Travelers — $4,100/yr", hours: "", description: "Best claims service rating. Includes business interruption. 5% multi-policy discount available." },
    ],
    footerStat: "88%",
    footerStatLabel: "Time saved",
    footerStatus: "Client-ready",
  },
  painPoints: [
    {
      stat: "4hrs",
      title: "to compare one set of quotes",
      description: "Your producers log into 4-6 carrier portals, enter the same info into each, then build a spreadsheet comparison by hand.",
      source: "Patra 2025 Insurance Operations Report",
      tools: "AI enters client info once, pulls quotes from multiple carriers, and generates a side-by-side comparison in minutes.",
      color: "text-rose-500",
      bg: "bg-rose-50",
      border: "border-rose-100",
    },
    {
      stat: "37%",
      title: "of agencies say renewals are down",
      description: "Hundreds of renewals per month, many with rate increases. Clients leave silently when nobody reaches out proactively.",
      source: "PropertyCasualty360 2025 Agency Survey",
      tools: "AI identifies renewals 60-90 days out, generates personalized outreach, flags accounts with big rate changes.",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100",
    },
    {
      stat: "60%",
      title: "of claims have manual entry errors",
      description: "Hand-typing FNOL forms while a stressed client is on the phone leads to mistakes, delays, and denied claims.",
      source: "Riskonnect Claims Research",
      tools: "AI captures claim details from the call, auto-populates carrier forms, flags missing info before submission.",
      color: "text-sky-600",
      bg: "bg-sky-50",
      border: "border-sky-100",
    },
    {
      stat: "12hrs",
      title: "per week recovered with automation",
      description: "No time for cross-selling. Your clients have life events constantly — new homes, cars, businesses — but no system catches them.",
      source: "Patra AI 2025",
      tools: "AI identifies coverage gaps and life events, then drafts personalized outreach automatically.",
      color: "text-violet-600",
      bg: "bg-violet-50",
      border: "border-violet-100",
    },
  ],
  sectionLabel: "every insurance agency",
  roles: [
    { name: "Producers", description: "Quote comparisons, proposals, new business development" },
    { name: "CSRs", description: "Policy changes, client inquiries, certificate issuance" },
    { name: "Claims Staff", description: "FNOL processing, claims documentation, carrier follow-up" },
    { name: "Marketing", description: "Cross-sell campaigns, newsletters, social content" },
    { name: "Admin", description: "Document management, data entry, renewals tracking" },
    { name: "Agency Owners", description: "Reports, strategy, retention analysis" },
  ],
  demos: [
    {
      id: "quote-compare",
      label: "Quote Comparison",
      description: "Multiple carrier quotes → plain-language side-by-side comparison.",
      demoType: "table",
      tableData: {
        headers: ["Coverage", "State Farm", "Hartford", "Travelers"],
        rows: [
          ["Premium/yr", "$4,200", "$3,850", "$4,100"],
          ["Gen. Liability", "$1M/$2M", "$1M/$2M", "$1M/$2M"],
          ["Property", "$500K", "$450K", "$500K"],
          ["Deductible", "$1,000", "$2,500", "$1,000"],
          ["Cyber", "✓ Included", "✗ +$300", "✗ N/A"],
          ["Business Intpt.", "✗ N/A", "✗ N/A", "✓ Included"],
        ],
        recommendation: "Travelers at $4,100/yr — matches State Farm coverage at lower cost, includes business interruption (critical for manufacturing), and 5% multi-policy discount brings it to $3,895.",
      },
      inputLabel: "Carrier Quotes (Raw)",
      inputContent: `Client: Johnson Manufacturing LLC — BOP Quote
State Farm: $4,200/yr, $1M/$2M GL, $500K property, $1K deductible, includes cyber rider
Hartford: $3,850/yr, $1M/$2M GL, $450K property, $2.5K deductible, no cyber
Travelers: $4,100/yr, $1M/$2M GL, $500K property, $1K deductible, includes BI, 5% multi-policy discount available`,
      outputLabel: "Client-Ready Comparison",
      outputContent: `Quote Comparison — Johnson Manufacturing BOP
Prepared for: Mike Johnson | Date: January 2025

                    State Farm    Hartford      Travelers
Premium (Annual)    $4,200        $3,850        $4,100
General Liability   $1M/$2M       $1M/$2M       $1M/$2M
Property Coverage   $500,000      $450,000      $500,000
Deductible          $1,000        $2,500        $1,000
Cyber Coverage      ✓ Included    ✗ (+$300)     ✗ N/A
Business Interrupt. ✗ N/A         ✗ N/A         ✓ Included
Multi-Policy Disc.  N/A           N/A           5% available

RECOMMENDATION:
For your manufacturing operation, I'd suggest Travelers at $4,100/yr. Here's why:
• Matches State Farm on coverage limits at lower cost
• Includes business interruption — critical for a manufacturer
• 5% multi-policy discount brings it to $3,895 if we bundle
• Only $45/yr more than Hartford, but significantly better coverage

If cyber liability is a priority, State Farm's inclusive package is worth the extra $100.

Shall I put together a proposal with the Travelers option?`,
    },
    {
      id: "renewal",
      label: "Renewal Outreach",
      description: "Account details → personalized renewal review email.",
      demoType: "email",
      inputLabel: "Account Details",
      inputContent: "Client: Sarah Chen, personal lines, auto + home bundle. Home renewing March 15. Current premium $2,400/yr. New premium $2,850/yr (19% increase). Been with agency 8 years. No claims in 5 years.",
      outputLabel: "Renewal Email Draft",
      outputContent: `Subject: Your Home Policy Renewal — Let's Review Your Options

Hi Sarah,

I wanted to reach out ahead of your homeowner's renewal on March 15th. I've already reviewed your account, and I want to be upfront — your premium is increasing from $2,400 to $2,850, about a 19% jump.

I know that's not the news anyone wants, but here's the good news: with your 8-year loyalty and clean claims history (5+ years claim-free!), we have some strong options.

Here's what I'm working on for you:
1. I'm shopping your policy with 3 other carriers to find competitive rates
2. I'm reviewing your current coverage for any bundling discounts we might be missing
3. Your claims-free status qualifies you for several preferred programs

Can we schedule a 15-minute call this week to walk through your options? I want to make sure you're getting the best value — whether that's staying with your current carrier or making a switch.

You've been a great client, Sarah, and I want to make sure your coverage works for you.

Best,
[Your Name]
[Agency Name]`,
    },
    {
      id: "claims",
      label: "Claims Documentation",
      description: "Incident description → carrier-ready FNOL format.",
      demoType: "fields",
      fields: [
        { label: "Policy Number", value: "HO-2024-8847" },
        { label: "Named Insured", value: "Sarah Chen" },
        { label: "Date of Loss", value: "January 15, 2025 — approx. 6:00 AM" },
        { label: "Type of Loss", value: "Water Damage — Burst pipe under kitchen sink" },
        { label: "Areas Affected", value: "Kitchen flooring, dining room (water spread)" },
        { label: "Mitigation Taken", value: "Main water line shut off, photos taken" },
        { label: "Pending", value: "Plumber scheduled Jan 16, adjuster inspection needed" },
      ],
      successMessage: "FNOL report structured and ready for carrier submission",
      inputLabel: "Incident Notes (from call)",
      inputContent: `Called in at 2:30pm. Sarah Chen, policy #HO-2024-8847. Water damage in kitchen. Pipe burst under sink this morning around 6am. Kitchen floor damaged, water spread to dining room. She shut off the main water line. Has photos. Plumber coming tomorrow. She's worried about the hardwood floors.`,
      outputLabel: "FNOL Report (Carrier-Ready)",
      outputContent: `FIRST NOTICE OF LOSS

Date of Report: January 15, 2025 | Time: 2:30 PM
Reported By: Sarah Chen (Insured)

POLICY INFORMATION:
Policy Number: HO-2024-8847
Named Insured: Sarah Chen
Coverage Type: Homeowner's

LOSS DETAILS:
Date of Loss: January 15, 2025
Time of Loss: Approximately 6:00 AM
Location: Insured's residence (address on file)
Cause of Loss: Water damage — burst pipe under kitchen sink

DESCRIPTION OF DAMAGE:
• Kitchen: Water damage to flooring from burst pipe under sink
• Dining Room: Water spread from kitchen, flooring affected
• Primary Concern: Hardwood floor damage in both rooms

ACTIONS TAKEN:
✓ Insured shut off main water line
✓ Photos taken and available
□ Plumber scheduled for January 16, 2025

FOLLOW-UP REQUIRED:
□ Obtain plumber's report and repair estimate
□ Request photos from insured
□ Schedule adjuster inspection
□ Verify water damage coverage limits and deductible

STATUS: Ready for carrier submission`,
    },
    {
      id: "coverage-gap",
      label: "Coverage Gap Analyzer",
      description: "Current policy summary → identified gaps with recommendations.",
      demoType: "checklist",
      checklistItems: [
        { text: "Business Owner's Policy (BOP) — $1M GL", status: "done" as const },
        { text: "Commercial Auto — 3 vehicles covered", status: "done" as const },
        { text: "Cyber Liability — MISSING (new e-commerce site creates exposure)", status: "missing" as const },
        { text: "Employment Practices Liability — MISSING (12 employees = real exposure)", status: "missing" as const },
        { text: "Commercial Umbrella — MISSING ($1M GL may be insufficient for manufacturing)", status: "missing" as const },
        { text: "Business Interruption — review needed (verify limits match $2M revenue)", status: "flag" as const },
        { text: "Workers' Compensation — verify compliance for 12 employees", status: "flag" as const },
      ],
      successMessage: "3 critical coverage gaps identified — outreach email ready to send",
      inputLabel: "Current Coverage Summary",
      inputContent: "Client: Mike Johnson, small business owner (manufacturing). Has BOP ($1M GL), commercial auto (3 vehicles). No umbrella, no cyber, no EPLI. 12 employees. Revenue $2M. Recently added e-commerce website.",
      outputLabel: "Coverage Gap Analysis",
      outputContent: `Coverage Gap Analysis — Mike Johnson, Johnson Manufacturing

CURRENT COVERAGE:
✓ Business Owner's Policy (BOP) — $1M GL
✓ Commercial Auto — 3 vehicles

IDENTIFIED GAPS:

🔴 HIGH PRIORITY:
1. Cyber Liability — MISSING
   Why: New e-commerce website creates significant exposure. Data breach costs average $4.45M.
   Recommendation: $1M cyber policy, est. $1,200-1,800/yr

2. Employment Practices Liability (EPLI) — MISSING
   Why: 12 employees = real exposure to wrongful termination, discrimination, harassment claims.
   Recommendation: $1M EPLI policy, est. $2,500-3,500/yr

🟡 MODERATE PRIORITY:
3. Commercial Umbrella — MISSING
   Why: $1M GL may be insufficient for manufacturing liability. One serious claim could exceed limits.
   Recommendation: $2M umbrella, est. $1,500-2,500/yr

4. Business Interruption — REVIEW NEEDED
   Why: Manufacturing operations need adequate BI coverage. Verify current BOP limits are sufficient for $2M revenue.

RECOMMENDED OUTREACH:
"Hi Mike — I noticed a few gaps in your coverage that I'd like to flag, especially with the new e-commerce site. Can we schedule 15 minutes this week to review? Nothing urgent, but worth addressing before renewal."`,
    },
  ],
  automationUseCases: [
    { task: "Quote comparison", howItWorks: "AI generates side-by-side carrier comparisons with coverage analysis and client-ready recommendations.", before: "4 hrs", after: "30 min", savings: "88%" },
    { task: "Renewal outreach emails", howItWorks: "AI identifies upcoming renewals and drafts personalized outreach with rate change details and re-shop options.", before: "20 min each", after: "2 min each", savings: "90%" },
    { task: "Claims intake documentation", howItWorks: "AI captures details from client calls and generates carrier-ready FNOL reports with all required fields.", before: "45 min", after: "10 min", savings: "78%" },
    { task: "COI issuance", howItWorks: "AI generates certificates of insurance from policy data in the correct format for any requesting party.", before: "15 min each", after: "2 min", savings: "87%" },
  ],
  faqItems: [
    { question: "Does this connect to our agency management system?", answer: "We set up AI tools that work alongside your existing systems. Your team continues using your AMS as normal — AI handles the repetitive tasks like drafting emails, comparing quotes, and generating documents." },
    { question: "Can AI really compare carrier quotes?", answer: "Yes. AI generates plain-language side-by-side comparisons with coverage analysis and recommendations. Your producers review and present to clients — but the manual spreadsheet work is eliminated." },
    { question: "What about compliance and E&O?", answer: "AI drafts documents — your team reviews and approves everything. Nothing goes to a client or carrier without human review. We build templates that include required disclosures and compliance language." },
    { question: "Will our carriers accept AI-generated documents?", answer: "AI generates content in standard carrier formats. Your team reviews, approves, and submits through normal channels. Carriers see professional, properly formatted documentation." },
    { question: "Is this secure for sensitive client data?", answer: "Yes. AI processes requests in real-time without storing your data. All client information stays within your existing systems and security protocols." },
    { question: "How long does setup take?", answer: "Most agencies are up and running in 2-3 weeks. We audit workflows, build templates for each role, train your team, and hand over full documentation." },
    { question: "Do we need ongoing support?", answer: "No — we set it up and hand it off. Your team runs everything independently. No retainer, no ongoing fees." },
  ],
  sizeOptions: [
    { value: "", label: "Select agency size" },
    { value: "solo", label: "Solo Agent" },
    { value: "small", label: "Small (2-5 staff)" },
    { value: "medium", label: "Medium (6-20 staff)" },
    { value: "large", label: "Large (20+ staff)" },
  ],
  specialtyOptions: [
    { value: "", label: "Select specialty (optional)" },
    { value: "personal", label: "Personal Lines" },
    { value: "commercial", label: "Commercial Lines" },
    { value: "life-health", label: "Life & Health" },
    { value: "benefits", label: "Employee Benefits" },
    { value: "specialty", label: "Specialty / Surplus" },
    { value: "general", label: "Full Service" },
    { value: "other", label: "Other" },
  ],
  specialtyLabel: "Specialty",
  firmVoice: {
    genericEmail: `Dear Policyholder,

This is to inform you that your policy is up for renewal. Please contact our office to discuss your coverage options. We look forward to continuing to serve your insurance needs.

Regards,
Your Insurance Agency`,
    firmVoiceEmail: `Hi Sarah,

Just a heads-up — your homeowner's policy is coming up for renewal on March 15th. I've already taken a look at it, and I want to make sure you're getting the best value.

Your premium is going up about 19% this year (I know, not what anyone wants to hear). But with your clean claims history, I think we can do better. I'm shopping it with a few other carriers this week.

Can we do a quick 15-minute call? I'll have options ready for you by then. No pressure — just want to make sure you're covered and not overpaying.

Talk soon,
David
Lakeside Insurance Group`,
    voiceLabel: "Your Agency's Voice",
    worksFor: ["Renewal emails", "Quote presentations", "Claims updates", "Cross-sell outreach", "Welcome letters", "Policy change confirmations", "Newsletter updates", "Review responses"],
  },
  trustItems: ["We never touch your data", "Your team controls all access", "Results in weeks"],
  urgencyText: "5 new agencies",
  metaTitle: "Blueprint AI | AI Consulting for Insurance Agencies",
  metaDescription: "We help insurance agencies automate quote comparisons, renewal outreach, claims documentation, and client communications with AI. Cut 4-hour tasks to 30 minutes.",
};

// ─── Restaurants ─────────────────────────────────────────────────────────────

const restaurants: IndustryConfig = {
  slug: "restaurants",
  name: "Restaurants",
  brandName: "Blueprint AI",
  clientNoun: "restaurant",
  clientNounPlural: "restaurants",
  badge: "AI Consulting for Restaurants",
  headline: "You opened a restaurant to cook.",
  accentHeadline: "Not to build spreadsheets.",
  subheadline:
    'Food costs are up, you\'re missing <span class="font-semibold text-neutral-800">150 calls a month</span>, and scheduling takes hours you don\'t have. We set up AI tools that track food costs automatically, answer every phone call, and build optimized schedules — so you can focus on the food and the people.',
  heroStats: [
    { value: 91, suffix: "%", label: "of restaurant owners saw food costs increase in 2025", source: "Toast 2025 Survey" },
    { value: 150, suffix: "", label: "calls missed per month — $27K/year in lost orders", source: "Loman AI Research" },
    { value: 36, suffix: "%", label: "of revenue goes to labor — highest in years", source: "NRA 2024" },
    { value: 72, suffix: "%", label: "of diners check your social media before visiting", source: "Cropink 2025" },
  ],
  heroDemoCard: {
    headerLabel: "Menu Description Writer",
    beforeLabel: "Before",
    beforeTime: "30 min per item",
    beforeLines: [
      "grilled salmon, miso glaze, rice, vegetables",
      "need to make it sound good for the menu",
      "also need a short description for online ordering",
    ],
    processingLabel: "Written by AI in seconds",
    afterLabel: "After",
    afterTime: "2 min — menu-ready",
    afterTitle: "Miso-Glazed Pacific Salmon",
    afterLines: [
      { date: "Menu Description", hours: "", description: "Wild-caught Pacific salmon, caramelized with our house-made white miso glaze. Served over jasmine rice with seasonal vegetables. Light, flavorful, unforgettable." },
      { date: "Online Ordering", hours: "", description: "Miso-glazed salmon with jasmine rice & seasonal vegetables. Gluten-free." },
      { date: "Allergens", hours: "", description: "Contains: Fish, Soy. Gluten-Free. Can be made dairy-free on request." },
    ],
    footerStat: "93%",
    footerStatLabel: "Time saved",
    footerStatus: "Menu-ready",
  },
  painPoints: [
    {
      stat: "91%",
      title: "saw food costs increase",
      description: "Ingredients consume 25-35% of revenue, and 4-10% of everything you buy goes in the trash. By the time you notice a spike, the money's gone.",
      source: "Toast 2025 Restaurant Industry Survey",
      tools: "AI tracks purchases from vendor invoices automatically, compares what you should have spent vs. what you did, and alerts you the moment something's off.",
      color: "text-rose-500",
      bg: "bg-rose-50",
      border: "border-rose-100",
    },
    {
      stat: "150",
      title: "calls missed per month",
      description: "Phone rings during the rush, nobody picks up. That's roughly $27,000 a year in lost takeout orders and reservations.",
      source: "Loman AI Research 2025",
      tools: "AI answers every call instantly — takes orders, handles allergy questions, processes payments, sends orders to the kitchen.",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100",
    },
    {
      stat: "36%",
      title: "of revenue goes to labor",
      description: "2-4 hours per week building the schedule. Someone calls out, you text 10 people. Overstaffed on slow nights, understaffed on busy ones.",
      source: "NRA 2024 State of the Industry",
      tools: "AI builds optimized schedules from your sales history and handles shift swaps through a mobile app. 4-6% labor cost reduction.",
      color: "text-sky-600",
      bg: "bg-sky-50",
      border: "border-sky-100",
    },
    {
      stat: "72%",
      title: "of diners check your social media",
      description: "72% of diners research you on social media before visiting, but you barely post. Reviews go unanswered for weeks.",
      source: "Cropink 2025 Restaurant Marketing",
      tools: "AI generates a month of posts from your food photos, responds to reviews professionally, and keeps your presence consistent.",
      color: "text-violet-600",
      bg: "bg-violet-50",
      border: "border-violet-100",
    },
  ],
  sectionLabel: "every restaurant",
  roles: [
    { name: "Owners", description: "P&L monitoring, vendor management, strategic decisions" },
    { name: "Kitchen Managers", description: "Food cost tracking, inventory, menu updates" },
    { name: "FOH Managers", description: "Scheduling, reservations, customer service" },
    { name: "Bookkeepers", description: "Invoice processing, payroll, financial reports" },
    { name: "Marketing", description: "Social media, review responses, promotions" },
    { name: "Shift Leads", description: "Staff communications, daily checklists, inventory counts" },
  ],
  demos: [
    {
      id: "menu",
      label: "Menu Description Writer",
      description: "Ingredient list → compelling menu item descriptions.",
      inputLabel: "Dish Details",
      inputContent: `Dish: Grilled salmon
Prep: miso glaze (house-made white miso, mirin, sake), grilled to medium
Sides: jasmine rice, seasonal vegetables (currently broccolini and carrots)
Allergens: fish, soy
Price: $28
Notes: popular item, want it to sound premium but approachable`,
      outputLabel: "Menu Descriptions",
      outputContent: `MISO-GLAZED PACIFIC SALMON — $28
Wild-caught Pacific salmon, caramelized with our house-made white miso glaze. Served over fluffy jasmine rice with broccolini and roasted carrots. Light, flavorful, unforgettable.

SHORT (Online Ordering):
Miso-glazed wild salmon with jasmine rice & seasonal vegetables. GF.

ALLERGY NOTE:
Contains: Fish, Soy | Gluten-Free | Can be made dairy-free

---

PAIRING SUGGESTION (for server training):
Pairs beautifully with a crisp Sauvignon Blanc or our house Riesling. For non-alcoholic, suggest the yuzu sparkling water.

---

SOCIAL MEDIA CAPTION:
"Our miso-glazed salmon is back and better than ever 🐟 Wild-caught, house-glazed, and served with the freshest seasonal vegetables. This one sells out every weekend — reserve your table tonight. #FreshCatch #MisoSalmon #[YourRestaurant]"`,
    },
    {
      id: "vendor",
      label: "Vendor Email Writer",
      description: "Order details → professional purchase order email.",
      demoType: "email",
      inputLabel: "Order Request",
      inputContent: "Need to order from Pacific Seafood: 40 lbs salmon fillets, 20 lbs shrimp (16-20 count), 15 lbs halibut. Delivery needed by Thursday. Last order had some salmon that was a little off — need to mention it professionally.",
      outputLabel: "Vendor Email",
      outputContent: `Subject: Weekly Order — Delivery by Thursday, January 16

Hi Pacific Seafood Team,

Here's our order for this week. We'll need delivery by Thursday, January 16.

ORDER:
• Salmon fillets, wild-caught — 40 lbs
• Shrimp, 16-20 count — 20 lbs
• Halibut fillets — 15 lbs

Quick note on quality: A few of the salmon fillets in last week's delivery weren't up to the usual standard — slight discoloration and texture was off. I know this isn't typical for you, so I just wanted to flag it. If there's a different lot available for this week, that would be great.

Please confirm availability and delivery time when you get a chance.

Thanks,
[Your Name]
[Restaurant Name]`,
    },
    {
      id: "food-cost",
      label: "Food Cost Analyzer",
      description: "Sales + purchase data → theoretical vs actual food cost breakdown.",
      demoType: "table",
      tableData: {
        headers: ["Metric", "Value", "Target", "Status"],
        rows: [
          ["Food Sales", "$18,500", "—", "—"],
          ["Food Purchases", "$6,200", "—", "—"],
          ["COGS", "$6,800", "—", "—"],
          ["Food Cost %", "36.8%", "30-32%", "⚠ +4.8% over"],
          ["Appetizers (15%)", "$777", "28%", "✓ On track"],
          ["Entrees (55%)", "$3,564", "35%", "⚠ High"],
          ["Desserts (10%)", "$463", "25%", "✓ On track"],
          ["Beverages (20%)", "$814", "22%", "✓ On track"],
        ],
        recommendation: "Entree cost is driving the 4.8% variance. Check salmon/protein portions and review vendor pricing. Saving 4 points = $740/week = $38,480/year.",
      },
      inputLabel: "Weekly Data",
      inputContent: "Week of Jan 13: Food sales $18,500. Food purchases $6,200. Beginning inventory $4,800. Ending inventory $4,200. Menu mix: appetizers 15%, entrees 55%, desserts 10%, beverages 20%.",
      outputLabel: "Food Cost Analysis",
      outputContent: `Weekly Food Cost Analysis — Week of January 13

COST OF GOODS SOLD:
Beginning Inventory:     $4,800
+ Purchases:             $6,200
- Ending Inventory:      $4,200
= COGS:                  $6,800

ACTUAL Food Cost:        36.8% ($6,800 / $18,500)
TARGET Food Cost:        30-32%
VARIANCE:                +4.8% over target ⚠️

WHERE THE MONEY IS GOING:
Category      Sales Mix    Typical FC%    Est. Cost
Appetizers    15%          28%            $777
Entrees       55%          35%            $3,564
Desserts      10%          25%            $463
Beverages     20%          22%            $814

RED FLAGS:
⚠ Actual FC% is 4.8 points above target
⚠ Inventory decreased $600 — check for waste or theft
⚠ Entree cost appears high — review portion sizes

RECOMMENDED ACTIONS:
1. Check salmon and protein portions — likely the biggest driver
2. Review waste log for the week
3. Compare vendor prices to last month — any increases?
4. Consider running a pasta or chicken special to offset high protein costs

Saving 4 points on food cost = $740/week = $38,480/year`,
    },
    {
      id: "review-response",
      label: "Customer Response",
      description: "Complaint details → professional, personalized response.",
      inputLabel: "Customer Review",
      inputContent: `3-star Google review from "Lisa M.": "Food was good but the wait was really long. We waited 20 minutes for a table even though we had a reservation. Our server seemed overwhelmed. The salmon was excellent though."`,
      outputLabel: "Professional Response",
      outputContent: `Response to Lisa M. — Google Review (3 stars)

Hi Lisa,

Thank you for taking the time to share your experience — and I'm really glad you enjoyed the salmon!

I sincerely apologize about the wait. A 20-minute delay with a reservation is not the experience we aim for, and I completely understand the frustration. We had an unusually high volume that evening, but that's on us to manage better — not on our guests to endure.

I've already spoken with our host team about reservation pacing, and we're making adjustments to prevent this from happening again. Your feedback is genuinely helpful.

We'd love the chance to make it up to you. If you're open to it, please email us at [email] — I'd like to personally ensure your next visit is the experience you deserve.

Thank you again for the honest feedback, Lisa. We appreciate it.

Warm regards,
[Owner Name]
[Restaurant Name]`,
    },
  ],
  automationUseCases: [
    { task: "Menu descriptions", howItWorks: "Paste dish details, AI writes compelling menu-ready descriptions, online ordering copy, and allergen info.", before: "30 min/item", after: "2 min", savings: "93%" },
    { task: "Weekly food cost analysis", howItWorks: "Input sales and purchase numbers, AI calculates COGS, identifies variances, and flags cost issues.", before: "3 hrs", after: "15 min", savings: "92%" },
    { task: "Vendor communications", howItWorks: "Describe what you need, AI drafts professional order emails, quality issue notices, and pricing requests.", before: "20 min each", after: "3 min", savings: "85%" },
    { task: "Social media content (monthly)", howItWorks: "AI generates a full month of posts, captions, and hashtags from your food photos and promotions.", before: "10 hrs", after: "1 hr", savings: "90%" },
  ],
  faqItems: [
    { question: "I'm not tech-savvy. Can I really use this?", answer: "If you can copy and paste, you can use this. We build simple fill-in-the-blank templates for every task. Your staff follows the recipe — just like in the kitchen." },
    { question: "Does AI answer my phones?", answer: "We can set up AI phone answering that takes orders, handles reservation requests, and answers common questions like hours, directions, and allergy info. Calls you need to handle personally get routed to you." },
    { question: "How does food cost tracking work?", answer: "AI reads your vendor invoices and POS sales data to calculate actual vs. theoretical food cost. It flags variances automatically — you see the problem before it becomes a trend." },
    { question: "Can AI really write my menu?", answer: "AI drafts menu descriptions that you review and tweak. It handles the heavy lifting — compelling language, consistent formatting, online ordering descriptions, allergen info — in seconds instead of hours." },
    { question: "What about my social media?", answer: "AI generates a month of posts from your food photos, specials, and events. You review and approve before anything goes live. It also drafts professional responses to reviews." },
    { question: "How long does setup take?", answer: "Most restaurants are up and running in 2-3 weeks. We audit your operations, build templates, connect to your POS if applicable, train your team, and hand off everything." },
    { question: "Is this affordable for an independent restaurant?", answer: "The setup pays for itself quickly. If AI saves you $740/week on food cost alone (a 4-point improvement), that's $38,000/year. Add in the revenue from answered phone calls and it compounds fast." },
    { question: "Do I need ongoing support?", answer: "No — we set it up, train your team, and hand over everything. No monthly fees, no retainer. Your team runs it independently." },
  ],
  sizeOptions: [
    { value: "", label: "Select restaurant type" },
    { value: "single", label: "Single Location" },
    { value: "multi-2-5", label: "2-5 Locations" },
    { value: "multi-5-plus", label: "5+ Locations" },
    { value: "franchise", label: "Franchise" },
  ],
  specialtyOptions: [
    { value: "", label: "Select cuisine/type (optional)" },
    { value: "full-service", label: "Full Service / Fine Dining" },
    { value: "casual", label: "Casual Dining" },
    { value: "fast-casual", label: "Fast Casual" },
    { value: "qsr", label: "Quick Service / Fast Food" },
    { value: "bar", label: "Bar / Brewery / Winery" },
    { value: "cafe", label: "Café / Bakery" },
    { value: "catering", label: "Catering" },
    { value: "other", label: "Other" },
  ],
  specialtyLabel: "Cuisine / Type",
  firmVoice: {
    genericEmail: `Dear Customer,

Thank you for your recent visit. We hope you enjoyed your dining experience. We value your feedback and look forward to serving you again.

Regards,
The Restaurant Team`,
    firmVoiceEmail: `Hi Lisa,

Thanks so much for coming in last Saturday! I'm glad you enjoyed the salmon — our chef has been perfecting that miso glaze for months, and it's become a real favorite.

I'm sorry about the wait — that's on us, and we're fixing it. We've already adjusted our reservation pacing so nobody has to deal with that again.

I'd love to have you back. Your next appetizer is on me — just mention this email when you come in. You've earned it!

Cheers,
Marco
Ember & Oak`,
    voiceLabel: "Your Restaurant's Voice",
    worksFor: ["Review responses", "Menu descriptions", "Social posts", "Vendor emails", "Staff announcements", "Event promotions", "Loyalty emails", "Catering proposals"],
  },
  trustItems: ["We never touch your data", "Your team controls everything", "Results in weeks"],
  urgencyText: "5 new restaurants",
  metaTitle: "Blueprint AI | AI Consulting for Restaurants",
  metaDescription: "We help restaurants automate food cost tracking, phone answering, scheduling, menu writing, and social media with AI. You opened a restaurant to cook — not to build spreadsheets.",
};

// ─── Exports ─────────────────────────────────────────────────────────────────

export const industries: IndustryConfig[] = [
  lawFirms,
  cpaFirms,
  realEstate,
  insurance,
  restaurants,
];

export const industryBySlug: Record<string, IndustryConfig> = Object.fromEntries(
  industries.map((i) => [i.slug, i])
);

export function getIndustryBySlug(slug: string): IndustryConfig | undefined {
  return industryBySlug[slug];
}

// Hub page content
export const hubIndustryCards = [
  {
    slug: "law-firms",
    name: "Law Firms",
    pitch: "Your attorneys bill 2.9 hours of an 8-hour day. We automate the rest.",
    stat: "63%",
    statLabel: "of attorney time is non-billable",
    icon: "scale",
  },
  {
    slug: "cpa-firms",
    name: "CPA Firms",
    pitch: "Your accountants spend 50% of their time on tasks a machine could handle. We fix that.",
    stat: "50%",
    statLabel: "of accounting tasks are automatable",
    icon: "calculator",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    pitch: "75% of your transaction time is paperwork. AI handles it in minutes.",
    stat: "75%",
    statLabel: "of transaction time is admin",
    icon: "home",
  },
  {
    slug: "insurance",
    name: "Insurance Agencies",
    pitch: "Your producers spend 4 hours comparing quotes by hand. We cut that to 30 minutes.",
    stat: "4hrs",
    statLabel: "to compare quotes manually",
    icon: "shield",
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    pitch: "You didn't open a restaurant to build schedules in Excel. AI does it in seconds.",
    stat: "150",
    statLabel: "calls missed per month",
    icon: "utensils",
  },
];
