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
  title: "The Five-Day Claude for Legal Implementation Sprint",
  description:
    "Monday discovery through Friday handover — a fully remote, live, async-first Claude for Legal implementation sprint for boutique law firms. Anthropic's twelve practice-area tools configured to your matter playbook, secure connections into iManage, NetDocuments, Clio, Microsoft 365, custom-coded integrations for bespoke firm software, and a bar-compliant usage policy mapped to ABA Model Rules 1.1, 1.6, and 5.3. Five business days. Working firm by Friday.",
  alternates: { canonical: "https://sidebarai.us/sprint" },
  openGraph: {
    title: "The Five-Day Claude for Legal Sprint — Sidebar AI",
    description:
      "Monday-through-Friday async-first sprint that configures Claude for Legal to your firm and hands it over fully trained. Bar-compliant by design.",
    url: "https://sidebarai.us/sprint",
    siteName: "Sidebar AI",
    type: "website",
  },
};

const days = [
  {
    label: "Monday",
    phase: "Discovery",
    summary: "Live working call where we learn your firm.",
    bullets: [
      "Two- to three-hour live working call with the managing partner and key practice leaders",
      "Workflow shadowing over screen-share — we watch one real matter intake, one contract review, one conflict check",
      "Inventory of your systems: document management, billing, calendar, email, conflict database, practice management",
      "Identification of the top five workflows where AI moves the needle for your firm",
      "Bar ethics and confidentiality posture review — your jurisdiction, your malpractice carrier's posture, your existing policies",
    ],
    deliverable: "Implementation Plan document, signed off by the managing partner before Tuesday begins.",
    image: "/images/sprint-monday.jpg",
    imageAlt: "Discovery video call viewed across a partner's walnut conference table — the senior engineer and two attorneys on screen, a printed contract draft, leather discovery-call notebook, fountain pen, and stoneware coffee mug staged alongside.",
    hasImage: true,
  },
  {
    label: "Tuesday",
    phase: "Foundation",
    summary: "Account, policy, and the right practice tools turned on.",
    bullets: [
      "Claude Team or Enterprise account provisioned with security configuration matched to your firm size",
      "Single sign-on configured against your existing Microsoft Entra or Google Workspace identity",
      "Data retention, confidentiality, and matter-level access policies set up",
      "A bar-compliant AI usage policy drafted for your firm, mapped to ABA Model Rules 1.1, 1.6, 5.3 and your state's RPC",
      "Three to five practice-area toolsets activated and tuned for your firm — Corporate, M&A, IP, Employment, Litigation, Tax, and others as relevant",
      "Matter folders set up as templates for two or three of your active matters",
    ],
    deliverable: "A configured Claude tenant your team could log into, plus a written usage policy ready for your malpractice carrier.",
    image: "/images/sprint-tuesday.jpg",
    imageAlt: "A monitor showing the Claude for Legal Configure-tenant page for a fictional Acme Law Partners LLP — Okta single sign-on connected, and four practice-area toolsets (Corporate, M&A, Intellectual Property, Employment) toggled on. A printed Attorney Firm — Implementation Checklist sits to the right, with a stoneware coffee mug and Mont Blanc fountain pen staged on a walnut desk.",
    hasImage: true,
  },
  {
    label: "Wednesday",
    phase: "Integration",
    summary: "Secure connections into the software your firm already uses.",
    bullets: [
      "Secure connections wired into your document management system — iManage, NetDocuments, Clio, MyCase, Centerbase, PracticePanther, Smokeball, or SharePoint",
      "Microsoft 365 integration so Claude lives inside Word for drafting and Outlook for matter triage",
      "Optional connections: Thomson Reuters CoCounsel, DocuSign, Box, Everlaw, Ironclad, depending on your stack",
      "Custom-coded integrations for any bespoke firm software a standard connector doesn't cover — same secure engineering your IT team would write, but Claude-fluent",
      "Bidirectional flow tested on real matter data before we leave Wednesday",
    ],
    deliverable: "Every integration verified working against your actual data — not a demo tenant.",
    image: "/images/sprint-wednesday.jpg",
    imageAlt: "A senior engineer at a dual-monitor walnut-desk setup, golden-hour light streaming in. The left monitor shows a VS Code editor with secure_integration.py — Python OAuth 2.0 + PKCE code wiring Claude for Legal into a firm system. The right monitor shows a Document Center listing real deal documents (Term Sheet, SPA, Investor Rights Agreement, Board Consent, Cap Table, Due Diligence Request, Employment Agreement, IP Assignment, Closing Checklist) for ACME Holdings - Series B. An open notebook in the foreground holds a hand-drawn Claude for Legal Integration Architecture diagram with DMS, Integration Service, Auth, Tokens/Refresh, and Claude for Legal API, plus Key Flows annotations.",
    hasImage: true,
  },
  {
    label: "Thursday",
    phase: "Customization",
    summary: "Your firm's playbook turned into one-click workflows.",
    bullets: [
      "Up to five custom one-click workflows built around the workflows Monday surfaced — contract review against your standard positions, matter intake summary, conflict checks, deposition prep memos, due-diligence chronologies",
      "Firm templates loaded: engagement letters, fee agreements, retainers, NDA playbooks, drafting libraries",
      "Brief bank and prior matters indexed into matter folders for grounded answers from your firm's own work",
      "Firm-specific contract review playbook codified — your standard indemnity positions, your typical pushback language, your house style",
      "Conflict-check workflow automated, including walls between adverse client families",
    ],
    deliverable: "Five workflows your associates trigger by name, configured to your firm's actual playbook — not a generic prompt pack.",
    image: "/images/sprint-thursday.jpg",
    imageAlt: "Top-down editorial photograph of an attorney's hand annotating a printed Contract Review Playbook — Indemnification. The page shows the firm's Standard Positions (Cap: 2x contract value, Survival: 3-5 years post-termination, Mutual carve-outs for gross negligence only, Defense Obligations, Insurance) with two hand-circled positions and a handwritten marginal note reading 'Push for 2x cap + mutual gross neg. only.' A purchase agreement with yellow sticky notes ('Check survival period,' 'Confirm insurance requirements') sits to the right, alongside a stoneware coffee mug and tortoise-shell reading glasses on a walnut desk.",
    hasImage: true,
  },
  {
    label: "Friday",
    phase: "Training & Handover",
    summary: "Two live training sessions. A printed runbook. Your firm owns it.",
    bullets: [
      "Two 90-minute live training sessions — one for attorneys, one for staff",
      "Custom-recorded video course your firm keeps forever: 8–12 short modules recorded on your configured tenant for re-watch and new-hire onboarding",
      "A written runbook (typically 25–40 pages) documenting every setting, every connection, every workflow",
      "Usage dashboard and governance baseline established",
      "30 / 60 / 90-day check-ins scheduled on your calendar before we leave",
      "A designated firm AI champion credentialed and walked through their first real matter use",
    ],
    deliverable: "Your firm running independently from week two — with a runbook, a video library, and a calendar of check-ins.",
    image: "/images/sprint-friday.jpg",
    imageAlt: "A printed Sidebar AI Runbook open to the Workflow 03 — Matter Intake page, showing the firm's Overview, five Workflow Steps (Create Matter, Conflict Check, Collect Documents, Initial Triage, Confirm & Notify), Key Benefits, and Best Practices panels. Beside it on the walnut desk: a stoneware coffee mug with steam rising, a closed MacBook, tortoise-shell reading glasses, a small succulent, and an open leather notebook with handwritten Handover Notes — Intake workflow live, Team training complete, Templates uploaded, Monitoring dashboard set, Next: Review feedback — ending with the line 'Great week. Strong foundation for the team.' Late-afternoon golden-hour light streams across the desk.",
    hasImage: true,
  },
];

const included = [
  "Five business days of live and async work, Monday through Friday",
  "Up to five custom one-click workflows built around your firm's playbook",
  "Up to eight secure connections to your existing software",
  "Custom-coded integrations for bespoke firm software the standard connectors don't reach",
  "Bar-compliant usage policy template, mapped to your jurisdiction",
  "Written runbook documenting every configuration",
  "Custom-recorded video training course (8–12 modules) your firm keeps forever",
  "Two live training sessions — one for attorneys, one for staff",
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
          eyebrow="The five-day implementation sprint"
          headline="Monday discovery."
          accentHeadline="Working firm by Friday."
          subheadline="A fully remote, live, async-first engagement that delivers a configured, integrated, and firm-customized Claude for Legal deployment — including custom-coded connections to bespoke firm software — with live attorney and staff training and a 90-day support window. Five business days. One price, captured on the consultation call. Bar-compliant by design."
          primaryCta={{ label: "Book the consultation", href: "#contact" }}
          secondaryCta={{ label: "See the day-by-day", href: "#days" }}
          trustItems={[
            "Fully remote · live with a senior engineer",
            "Async-first delivery — no consultants in your office",
            "Mapped to ABA Model Rules 1.1, 1.6, 5.3",
          ]}
        />
        <TrustBadges />

        {/* Days */}
        <section id="days" className="py-24 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/40 to-white pointer-events-none" />
          <div className="container-main relative">
            <div className="max-w-3xl mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-100 text-xs font-semibold text-navy uppercase tracking-wider mb-4">
                Day by day
              </span>
              <h2 className="text-3xl md:text-headline font-semibold text-neutral-900 tracking-tight">
                Five days.{" "}
                <span className="font-serif italic font-normal">Each one a deliverable.</span>
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600 leading-relaxed">
                No rolling timelines. No scope creep. Each day has a clear deliverable, captured at the end of the day before we move to the next. The sprint plan is signed off Monday afternoon and held to for the rest of the week.
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
            name: "Five-Day Claude for Legal Implementation Sprint",
            description:
              "A fully remote, async-first, Monday-through-Friday engagement that delivers a configured, integrated, and firm-customized Claude for Legal deployment with attorney and staff training and a 90-day support window. Bar-compliant by design.",
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
