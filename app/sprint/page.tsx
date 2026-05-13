import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import PageHero from "@/components/pages/PageHero";
import PageCTABand from "@/components/pages/PageCTABand";
import ContactForm from "@/components/ContactForm";
import WhatDoesntDisappear from "@/components/WhatDoesntDisappear";
import ServiceTiers from "@/components/ServiceTiers";

export const metadata: Metadata = {
  title: "The Claude for Legal Implementation Engagement",
  description:
    "A two-phase engagement: up to three weeks of async prep (discovery, custom integrations coded, workflows authored, bar-compliant policy drafted, training videos recorded) followed by one live Mon–Fri integration sprint where everything goes live, gets tested on your real matter data, and your team is trained. Working firm in weeks, not months. Bar-compliant by design.",
  alternates: { canonical: "https://sidebarai.us/sprint" },
  openGraph: {
    title: "Claude for Legal Implementation Engagement — Sidebar AI",
    description:
      "Up to three weeks of async prep + one live Mon–Fri integration sprint. A configured Claude for Legal deployment, your team trained, runbook in hand. Bar-compliant by design.",
    url: "https://sidebarai.us/sprint",
    siteName: "Sidebar AI",
    type: "website",
  },
};

const prepPhases = [
  {
    id: "01",
    label: "Async Discovery",
    summary: "We learn how your firm runs — without a single scheduled call.",
    bullets: [
      "Structured intake form delivered after the initial consultation (30–40 minutes for your team to complete)",
      "Screen-recorded workflow walkthroughs — your associates show us one real matter intake, one contract review, one conflict check, on their own time",
      "System inventory: document management, billing, calendar, email, conflict database, practice management",
      "Bar-ethics and confidentiality posture review against your jurisdiction and malpractice carrier's questionnaire",
      "Asynchronous Q&A: we send back a 5–7 minute Loom video summarizing what we heard and confirming the workflows we'll automate",
    ],
    deliverable: "Implementation Plan signed off by the managing partner before async build begins.",
  },
  {
    id: "02",
    label: "Async Build",
    summary: "All the configuration and custom code, written without your team in the room.",
    bullets: [
      "Claude account provisioned with security configuration matched to your firm size",
      "Up to five practice-area toolsets selected and tuned to your firm's playbook",
      "Up to five custom one-click workflows authored against your standard positions and house style",
      "Custom integration code written for any bespoke firm software that doesn't have a standard connector",
      "Bar-compliant AI usage policy drafted to your jurisdiction and your carrier's questionnaire",
      "Firm templates, brief bank, and prior matters prepared for ingestion in sprint week",
    ],
    deliverable: "A fully configured Claude tenant and integration package, ready for live deployment on Day 1 of sprint week.",
  },
  {
    id: "03",
    label: "Async Prep",
    summary: "Final preparation so sprint week is pure deployment — no last-minute discovery.",
    bullets: [
      "Custom video training course recorded on your configured tenant (8–12 short modules) — your firm keeps the library forever for new-hire onboarding",
      "Bar-compliant usage policy reviewed by your malpractice carrier before sprint week begins",
      "Single sign-on configuration validated against your identity provider (Microsoft Entra or Google Workspace)",
      "Sprint-week calendar locked: Monday kickoff, two Friday training sessions, 30/60/90-day check-ins",
      "Designated firm AI champion identified and pre-briefed",
    ],
    deliverable: "Everything ready for a clean Monday kickoff. Sprint week becomes pure execution.",
  },
];

const days = [
  {
    label: "Monday",
    phase: "Kickoff & Go-Live",
    summary: "The configuration we built async goes live in your firm's environment.",
    bullets: [
      "Live kickoff call with your firm — managing partner, designated AI champion, IT lead",
      "Claude tenant goes live with your firm's identity provider (Microsoft Entra or Google Workspace)",
      "Bar-compliant usage policy published to the firm — every attorney signs the acknowledgment",
      "Practice-area toolsets activated for the attorneys who will use them",
      "First sanity-check: a single test matter run end-to-end while we're on the call",
    ],
    deliverable: "Claude for Legal live in your firm by end of Monday, with first-day usage logged.",
    image: "/images/sprint-monday.jpg",
    imageAlt: "Live kickoff video call viewed across a partner's walnut conference table — the senior engineer and two attorneys on screen, a printed contract draft, leather notebook, fountain pen, and stoneware coffee mug staged alongside.",
    hasImage: true,
  },
  {
    label: "Tuesday",
    phase: "Connections Wired",
    summary: "The integrations we coded async get deployed into your firm's systems.",
    bullets: [
      "Document management connection deployed live — iManage, NetDocuments, Clio, MyCase, Centerbase, PracticePanther, Smokeball, or SharePoint",
      "Microsoft 365 integration deployed — Claude lives inside Word for drafting and Outlook for matter triage",
      "Optional connections deployed where applicable: Thomson Reuters CoCounsel, DocuSign, Box, Everlaw, Ironclad",
      "Custom secure bridges to bespoke firm software (coded during async prep) go live on your firm's network",
      "Bidirectional flow tested against real matter data — not a demo tenant",
    ],
    deliverable: "Every integration verified live in production with your firm's actual systems.",
    image: "/images/sprint-tuesday.jpg",
    imageAlt: "A monitor showing the Claude for Legal Configure-tenant page for a fictional Acme Law Partners LLP — Okta single sign-on connected, and four practice-area toolsets (Corporate, M&A, Intellectual Property, Employment) toggled on. A printed Attorney Firm — Implementation Checklist sits to the right, with a stoneware coffee mug and fountain pen staged on a walnut desk.",
    hasImage: true,
  },
  {
    label: "Wednesday",
    phase: "Workflows Deployed",
    summary: "The custom workflows we authored async get deployed and tested live.",
    bullets: [
      "Up to five custom one-click workflows deployed to your firm's tenant — contract review against your standard positions, matter intake summary, conflict checks, deposition prep memos, due-diligence chronologies",
      "Firm templates loaded: engagement letters, fee agreements, retainers, NDA playbooks, drafting libraries",
      "Brief bank and prior matters indexed into matter folders for grounded answers from your firm's own work",
      "Conflict-check workflow with ethical walls between adverse client families validated live",
      "Each workflow run against three sample matters end-to-end to verify production-grade behavior",
    ],
    deliverable: "Five live workflows your associates trigger by name, validated against your real matters.",
    image: "/images/sprint-wednesday.jpg",
    imageAlt: "A senior engineer at a dual-monitor walnut-desk setup, golden-hour light streaming in. The left monitor shows a VS Code editor with secure_integration.py — Python OAuth 2.0 + PKCE code wiring Claude for Legal into a firm system. The right monitor shows a Document Center listing real deal documents (Term Sheet, SPA, Investor Rights Agreement, Board Consent, Cap Table, Due Diligence Request, Employment Agreement, IP Assignment, Closing Checklist) for ACME Holdings - Series B. An open notebook in the foreground holds a hand-drawn Claude for Legal Integration Architecture diagram with DMS, Integration Service, Auth, Tokens/Refresh, and Claude for Legal API, plus Key Flows annotations.",
    hasImage: true,
  },
  {
    label: "Thursday",
    phase: "Refinement & Real-Data Testing",
    summary: "We tune everything live against your team's first real-day usage.",
    bullets: [
      "Designated attorneys run their first real matter work through the workflows — we're on the call live",
      "Refinement loop: any edge cases, missing context, or wrong defaults get tuned in real time",
      "Edge-case validation: how each workflow handles non-standard matters, opposing counsel from outside the playbook, unusual practice-area overlaps",
      "Governance dashboard validated — usage logging, audit trail, matter-level access controls all confirmed",
      "Final bar-compliance walk-through with the managing partner — every safeguard documented",
    ],
    deliverable: "A production-tuned deployment your firm has already used on real work.",
    image: "/images/sprint-thursday.jpg",
    imageAlt: "Top-down editorial photograph of an attorney's hand annotating a printed Contract Review Playbook — Indemnification. The page shows the firm's Standard Positions (Cap: 2x contract value, Survival: 3-5 years post-termination, Mutual carve-outs for gross negligence only, Defense Obligations, Insurance) with two hand-circled positions and a handwritten marginal note reading 'Push for 2x cap + mutual gross neg. only.' A purchase agreement with yellow sticky notes ('Check survival period,' 'Confirm insurance requirements') sits to the right, alongside a stoneware coffee mug and tortoise-shell reading glasses on a walnut desk.",
    hasImage: true,
  },
  {
    label: "Friday",
    phase: "Training & Handover",
    summary: "Two live training sessions. A written runbook. Your firm owns it.",
    bullets: [
      "Two 90-minute live training sessions — one for attorneys, one for staff",
      "Custom-recorded video course (8–12 short modules recorded during async prep) handed over — your firm keeps the library forever for new-hire onboarding",
      "A written runbook (typically 25–40 pages) documenting every setting, every connection, every workflow",
      "Usage dashboard live and the governance baseline established",
      "30 / 60 / 90-day check-ins scheduled on your calendar before we leave",
      "Designated firm AI champion credentialed and walked through their first real matter use",
    ],
    deliverable: "Your firm running independently from the following Monday — with a runbook, a video library, and a calendar of check-ins.",
    image: "/images/sprint-friday.jpg",
    imageAlt: "A printed Sidebar AI Runbook open to the Workflow 03 — Matter Intake page, showing the firm's Overview, five Workflow Steps (Create Matter, Conflict Check, Collect Documents, Initial Triage, Confirm & Notify), Key Benefits, and Best Practices panels. Beside it on the walnut desk: a stoneware coffee mug with steam rising, a closed MacBook, tortoise-shell reading glasses, a small succulent, and an open leather notebook with handwritten Handover Notes — Intake workflow live, Team training complete, Templates uploaded, Monitoring dashboard set, Next: Review feedback — ending with the line 'Great week. Strong foundation for the team.' Late-afternoon golden-hour light streams across the desk.",
    hasImage: true,
  },
];

const included = [
  "Up to three weeks of async prep work — discovery, configuration, code, workflow authoring, policy drafting, training video recording",
  "One live Mon–Fri integration sprint week — kickoff, deployment, testing, refinement, training, handover",
  "Up to five custom one-click workflows built around your firm's playbook",
  "Up to eight secure connections to your existing software",
  "Custom-coded integrations for bespoke firm software the standard connectors don't reach",
  "Bar-compliant usage policy template, mapped to your jurisdiction and reviewed by your malpractice carrier",
  "Written runbook documenting every configuration",
  "Custom-recorded video training course (8–12 modules) your firm keeps forever",
  "Two live training sessions on the Friday of sprint week — one for attorneys, one for staff",
  "30 / 60 / 90-day check-ins, each one hour, on your calendar",
  "Email support for 90 days post-handover",
];

const notIncluded = [
  "Your Claude subscription fees — your firm pays Anthropic directly (recommended at the Team or Enterprise tier based on firm size)",
  "Third-party platform subscription fees (Thomson Reuters, Harvey, Everlaw if added)",
  "Beyond-90-day support (offered as an optional monthly retainer)",
  "Extensive bespoke software integrations that need more than two engineer-days of custom coding (scoped separately during discovery)",
];

export default function SprintPage() {
  return (
    <>
      <Navigation darkHero={true} />
      <main>
        <PageHero
          eyebrow="The implementation engagement"
          headline="Up to three weeks of async prep."
          accentHeadline="One live sprint week."
          subheadline="A fully remote, two-phase engagement. The first phase is async — up to three weeks (often less) of discovery, custom integration code, workflow authoring, bar-compliant policy drafting, and training video recording, all without your partners' calendars. Then one live Mon–Fri sprint week with a senior engineer on every call: kickoff, deployment, real-data testing, refinement, training, handover. Bar-compliant by design."
          primaryCta={{ label: "Book the consultation", href: "#contact" }}
          secondaryCta={{ label: "See the two phases", href: "#phases" }}
          trustItems={[
            "Fully remote · senior engineer on every live call",
            "Async prep so your partners aren't hosting consultants",
            "Mapped to ABA Model Rules 1.1, 1.6, 5.3",
          ]}
        />
        <TrustBadges />

        {/* Phase 1: Async Prep */}
        <section id="phases" className="py-24 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/40 to-white pointer-events-none" />
          <div className="container-main relative">
            <div className="max-w-3xl mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-4">
                Phase 1 · Async Prep · Up to 3 weeks
              </span>
              <h2 className="text-3xl md:text-headline font-semibold text-neutral-900 tracking-tight">
                All the work that doesn&apos;t need your partners&apos; calendars{" "}
                <span className="font-serif italic font-normal">happens here.</span>
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600 leading-relaxed">
                Three sequential async stages — typically completed in two to three weeks; simpler stacks finish faster. By the time sprint week begins, your tenant is configured, the workflows are authored, the policy is reviewed, and the training videos are recorded. Sprint week becomes pure execution.
              </p>
            </div>

            <div className="space-y-5">
              {prepPhases.map((p) => (
                <article key={p.id} className="grid lg:grid-cols-12 gap-6 lg:gap-8 p-6 md:p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-subtle hover:shadow-elevated transition-all duration-500">
                  <div className="lg:col-span-3">
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="font-mono text-2xl font-bold text-navy/25">{p.id}</span>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700">Async</span>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 leading-tight mb-2">{p.label}</h3>
                    <p className="text-sm font-medium text-navy leading-snug">{p.summary}</p>
                  </div>
                  <div className="lg:col-span-9">
                    <ul className="space-y-3 mb-5">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <svg className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-neutral-700 leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100">
                      <p className="text-[10px] font-mono font-bold uppercase tracking-[0.12em] text-emerald-700 mb-1">Stage deliverable</p>
                      <p className="text-sm text-neutral-800 leading-relaxed">{p.deliverable}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Phase 2: Sprint Week */}
        <section id="days" className="py-24 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/40 via-white to-neutral-50/40 pointer-events-none" />
          <div className="container-main relative">
            <div className="max-w-3xl mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-100 text-xs font-semibold text-navy uppercase tracking-wider mb-4">
                Phase 2 · Sprint Week · Mon–Fri live
              </span>
              <h2 className="text-3xl md:text-headline font-semibold text-neutral-900 tracking-tight">
                Five live days.{" "}
                <span className="font-serif italic font-normal">Pure execution.</span>
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600 leading-relaxed">
                Because everything was built during async prep, sprint week is integration, deployment, real-data testing, refinement, and training — not discovery. A senior engineer is on every call. Each day has a clear deliverable. By Friday afternoon your firm has a working, integrated, bar-compliant Claude for Legal deployment your team has already used on real matters.
              </p>
            </div>

            <div className="space-y-8">
              {days.map((day, idx) => (
                <article key={day.label} className="grid lg:grid-cols-12 gap-8 lg:gap-10 p-6 md:p-8 lg:p-10 rounded-2xl bg-white border border-neutral-200/80 shadow-subtle hover:shadow-elevated transition-all duration-500">
                  {/* Left: day marker + image placeholder */}
                  <div className="lg:col-span-5">
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="font-mono text-3xl font-bold text-navy/30">0{idx + 1}</span>
                      <div>
                        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-amber-700">{day.label}</span>
                        <h3 className="text-2xl font-semibold text-neutral-900 leading-tight">{day.phase}</h3>
                      </div>
                    </div>
                    <p className="text-body font-medium text-navy mb-5 leading-relaxed">{day.summary}</p>

                    {/* Real photo (if available) with editorial bracket corners.
                        Falls back to a navy placeholder card when the photo
                        for this day hasn't been generated yet. */}
                    <div className="relative">
                      <span aria-hidden="true" className="absolute -left-3 -top-3 z-10 h-8 w-8 border-l-2 border-t-2 border-navy" />
                      <span aria-hidden="true" className="absolute -bottom-3 -right-3 z-10 h-8 w-8 border-b-2 border-r-2 border-gold" />
                      {day.hasImage ? (
                        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
                          <Image
                            src={day.image}
                            alt={day.imageAlt}
                            fill
                            sizes="(min-width: 1024px) 42vw, 100vw"
                            className="object-cover"
                            quality={88}
                          />
                        </div>
                      ) : (
                        <div className="relative aspect-[16/10] rounded-2xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 overflow-hidden flex items-end p-6 border border-neutral-200">
                          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_30%,rgba(212,165,116,0.16),transparent)]" />
                          <div className="absolute inset-0 grain opacity-[0.04]" />
                          <div className="relative">
                            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.14em] text-gold/80 mb-1">
                              Photo placeholder · {day.label}
                            </p>
                            <p className="text-xs text-neutral-300 leading-relaxed">{day.imageAlt}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right: bullets + deliverable */}
                  <div className="lg:col-span-7">
                    <ul className="space-y-3 mb-6">
                      {day.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <svg className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-neutral-700 leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="p-4 rounded-xl bg-navy-50 border border-navy-100">
                      <p className="text-[10px] font-mono font-bold uppercase tracking-[0.12em] text-navy mb-1">End-of-day deliverable</p>
                      <p className="text-sm text-neutral-800 leading-relaxed">{day.deliverable}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Included / Not Included */}
        <section className="py-24 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/40 via-white to-neutral-50/40 pointer-events-none" />
          <div className="container-main relative">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Included */}
              <div className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-subtle">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-5">
                  What&apos;s included
                </span>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-5 leading-tight">Every sprint ships with</h3>
                <ul className="space-y-3">
                  {included.map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-neutral-700 leading-relaxed">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Included — transparency */}
              <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-5">
                  What&apos;s not included
                </span>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-5 leading-tight">Captured separately</h3>
                <ul className="space-y-3">
                  {notIncluded.map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-neutral-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-sm text-neutral-700 leading-relaxed">{i}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-neutral-500 italic leading-relaxed">
                  <span className="text-navy not-italic font-semibold">Why we&apos;re explicit about this:</span> the boutique market is suspicious of vague pricing. Transparency on scope earns the partner&apos;s respect before the first dollar changes hands.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ServiceTiers />
        <WhatDoesntDisappear />

        <PageCTABand
          headline="Twenty-minute consultation. A clear yes or no."
          body="If the sprint fits your firm we&rsquo;ll tell you. If a pilot or wait is the better call we&rsquo;ll tell you that too — and what to do instead. Book the call below."
          primaryLabel="Book the consultation"
          primaryHref="#contact"
          secondaryLabel="Or attend a seminar first"
          secondaryHref="/seminars"
        />

        <ContactForm clientNoun="firm" specialtyLabel="Primary practice area" />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Claude for Legal Implementation Engagement — Async Prep + Live Sprint Week",
            description:
              "A fully remote, two-phase engagement: up to three weeks of async prep followed by one live Mon–Fri integration sprint week that delivers a configured, integrated, and firm-customized Claude for Legal deployment with attorney and staff training and a 90-day support window. Bar-compliant by design.",
            provider: { "@type": "ProfessionalService", name: "Sidebar AI", url: "https://sidebarai.us" },
            url: "https://sidebarai.us/sprint",
            areaServed: "United States",
            serviceType: "Claude for Legal implementation services",
          }),
        }}
      />
    </>
  );
}
