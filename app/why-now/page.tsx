import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/pages/PageHero";
import PageCTABand from "@/components/pages/PageCTABand";

export const metadata: Metadata = {
  title: "Why Now — A Partner's Briefing on Claude for Legal",
  description:
    "A partner-grade briefing on what Anthropic shipped with Claude for Legal on May 12, 2026, what it means for boutique law firms specifically, why the customization gap is the real bottleneck, and what a managing partner should do this week. Written like a memo from a peer, not a marketing page.",
  alternates: { canonical: "https://sidebarai.us/why-now" },
  openGraph: {
    title: "Why Now — A Partner's Briefing on Claude for Legal · Sidebar AI",
    description:
      "What Anthropic shipped, what it means for boutique firms, why customization is the bottleneck, and what to do this week.",
    url: "https://sidebarai.us/why-now",
    siteName: "Sidebar AI",
    type: "article",
  },
};

const launchFacts = [
  { label: "Launch date", value: "May 12, 2026" },
  { label: "Practice-area tools shipped", value: "12" },
  { label: "Secure connections shipped", value: "20+" },
  { label: "Microsoft 365 integration", value: "Word + Outlook" },
  { label: "Pricing access", value: "Included with any paying Claude subscription" },
  { label: "Coverage same morning", value: "Bloomberg · Reuters · TechCrunch · LawSites · Artificial Lawyer" },
];

const plugins = [
  { name: "Commercial Legal", scope: "General commercial contracts, vendor agreements, NDAs, MSAs" },
  { name: "Corporate Legal", scope: "M&A diligence, closing checklists, deal-document review" },
  { name: "Employment Legal", scope: "Employment agreements, severance, EEOC posture, classification" },
  { name: "Privacy Legal", scope: "Privacy policies, DSAR responses, GDPR / CCPA compliance" },
  { name: "Product Legal", scope: "Terms of service, EULAs, product-counsel reviews" },
  { name: "Regulatory Legal", scope: "Industry regulatory analysis, agency filings" },
  { name: "AI Governance Legal", scope: "AI usage policies, model governance, EU AI Act compliance" },
  { name: "IP Legal", scope: "Patent prosecution, trademark filings, copyright analysis" },
  { name: "Litigation Legal", scope: "Discovery, deposition prep, motion drafting" },
  { name: "Law Student", scope: "Casebook study, brief writing, exam outlining" },
  { name: "Legal Clinic", scope: "Pro bono workflows, clinic case management" },
  { name: "Legal Builder Hub", scope: "Community-contributed skills marketplace" },
];

const checklist = [
  {
    week: "This week",
    actions: [
      "Read the Bob Ambrogi LawSites coverage of the May 12 launch — most thorough summary in legal media",
      "Pull your current AI usage policy (if any) and the language your malpractice carrier asks about",
      "Ask one practice leader to identify the single workflow that eats the most associate time",
    ],
  },
  {
    week: "Within 30 days",
    actions: [
      "If you have a Claude Team or Enterprise subscription already, log in and activate two practice-area tools relevant to your firm",
      "If you don't, book a consultation (with us or anyone qualified) to size what your firm would need",
      "Bring up AI usage policy at your next partners' meeting — even if no decision is made, get it on the agenda",
    ],
  },
  {
    week: "Within 90 days",
    actions: [
      "Have a written AI usage policy your malpractice carrier has reviewed",
      "Identify a designated firm AI champion (often a forward-leaning junior partner, not the managing partner)",
      "Either run a sprint, a pilot on one practice area, or document why waiting another 90 days is the right call",
    ],
  },
];

export default function WhyNowPage() {
  return (
    <>
      <Navigation darkHero={true} />
      <main>
        <PageHero
          eyebrow="A partner's briefing"
          headline="Anthropic launched Claude for Legal."
          accentHeadline="Here's what that means for your firm."
          subheadline="A partner-grade briefing on what shipped, what it means for boutique firms specifically, why the customization gap is the real bottleneck, and what a managing partner should do this week. Written like a memo from a peer — not a marketing page."
          primaryCta={{ label: "Book the consultation", href: "/#contact" }}
          secondaryCta={{ label: "See the sprint", href: "/sprint" }}
          trustItems={[
            "Updated for the May 12, 2026 launch",
            "Anthropic-validated framing",
            "Bar-ethics-literate analysis",
          ]}
        />

        {/* The week-of moment — what every managing partner did when the news broke */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/40 to-white pointer-events-none" />
          <div className="container-main relative">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <div className="relative">
                  <span aria-hidden="true" className="absolute -left-3 -top-3 z-10 h-8 w-8 border-l-2 border-t-2 border-navy" />
                  <span aria-hidden="true" className="absolute -bottom-3 -right-3 z-10 h-8 w-8 border-b-2 border-r-2 border-gold" />
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-elevated">
                    <Image
                      src="/images/why-now-hero.jpg"
                      alt="Over-the-shoulder view of a managing partner at a breakfast table, holding a tablet showing a soft-focus legal news article with a hero photograph of a classical-columned institutional building. A stoneware mug, French press, half-eaten croissant on a small plate, leather portfolio with a black fountain pen with gold trim, and a folded broadsheet newspaper are staged on the warm walnut surface. A brick wall is visible through the window beyond — soft morning daylight."
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover"
                      quality={88}
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.12em] text-amber-700 mb-3 block">
                  The week of May 12, 2026
                </span>
                <h2 className="text-3xl md:text-headline font-semibold text-neutral-900 leading-tight tracking-tight">
                  Every managing partner you know{" "}
                  <span className="font-serif italic font-normal">had this exact morning.</span>
                </h2>
                <p className="mt-5 text-body-lg text-neutral-700 leading-relaxed">
                  Bloomberg, Reuters, TechCrunch, the <em>LawSites</em> blog, and <em>Artificial Lawyer</em> all covered the Claude for Legal launch the same morning. Across Chicagoland, every managing partner of a boutique firm either read one of those pieces before their first call, or got an email from a colleague who did. The question changed that day from <em>&ldquo;should we look at legal AI&rdquo;</em> to <em>&ldquo;why don&apos;t we already have a plan&rdquo;</em>.
                </p>
                <p className="mt-4 text-sm text-neutral-500 italic leading-relaxed">
                  The five sections below are the briefing you wish landed in your inbox instead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: What launched */}
        <section className="py-24 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/40 to-white pointer-events-none" />
          <div className="container-main relative">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-100 text-xs font-semibold text-navy uppercase tracking-wider mb-4">
                  Section 01
                </span>
                <h2 className="text-3xl md:text-headline font-semibold text-neutral-900 tracking-tight">
                  What Anthropic shipped on May 12, 2026.
                </h2>
                <div className="mt-5 prose prose-neutral max-w-none">
                  <p className="text-body-lg text-neutral-700 leading-relaxed">
                    On May 12, 2026, Anthropic released what the <em>LawSites</em> blog called &ldquo;its biggest step yet into the legal market.&rdquo; The release expanded what had been a narrower February plugin into a full legal product surface — twelve practice-area toolsets, twenty-plus secure connections into the software law firms already use, and deep integration with Microsoft Word and Outlook.
                  </p>
                  <p className="text-body text-neutral-600 leading-relaxed mt-4">
                    Critically, none of this requires a separate subscription. Anthropic shipped Claude for Legal as a capability included with every paying Claude account — Team, Enterprise, or otherwise. The pricing change was the most significant part of the announcement from a market-structure standpoint: every existing Claude customer woke up on May 12 holding the legal-AI capability that competitors charge $5,000–$15,000 per attorney per month for.
                  </p>
                  <p className="text-body text-neutral-600 leading-relaxed mt-4">
                    Bloomberg, Reuters, TechCrunch, the <em>LawSites</em> blog, and <em>Artificial Lawyer</em> all covered the launch the same morning. Every managing partner in the country saw at least one of those headlines this week.
                  </p>
                </div>
              </div>

              <aside className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[0.12em] text-navy mb-3 block">Launch fact sheet</span>
                  <dl className="space-y-3 text-sm">
                    {launchFacts.map((f) => (
                      <div key={f.label}>
                        <dt className="text-[10px] font-mono font-bold uppercase tracking-[0.12em] text-neutral-400">{f.label}</dt>
                        <dd className="text-neutral-800 font-medium">{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </aside>
            </div>

            {/* Plugins grid */}
            <div className="mt-14">
              <h3 className="text-xl font-semibold text-neutral-900 mb-1">The twelve practice-area toolsets</h3>
              <p className="text-sm text-neutral-600 mb-6">All twelve come with every paying Claude subscription. We activate three to five during a sprint based on your firm&apos;s practice areas.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {plugins.map((p) => (
                  <div key={p.name} className="p-4 rounded-xl bg-white border border-neutral-200/80">
                    <p className="text-sm font-semibold text-navy">{p.name}</p>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">{p.scope}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Why boutique */}
        <section className="py-24 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/40 via-white to-neutral-50/40 pointer-events-none" />
          <div className="container-main relative">
            <div className="max-w-3xl mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-4">
                Section 02
              </span>
              <h2 className="text-3xl md:text-headline font-semibold text-neutral-900 tracking-tight">
                Why this matters for boutique firms specifically — not just AmLaw.
              </h2>
            </div>
            <div className="prose prose-neutral max-w-3xl">
              <p className="text-body-lg text-neutral-700 leading-relaxed">
                AmLaw 200 firms have already adopted some flavor of legal AI. Freshfields published growth numbers showing 500%+ Claude usage growth in six weeks. They have dedicated innovation officers, $50,000 procurement budgets that don&apos;t require a partners&apos; meeting, and an internal AI working group that can spend a quarter standing up a deployment.
              </p>
              <p className="text-body text-neutral-600 leading-relaxed mt-4">
                Boutique firms — the 2-to-20-attorney shops doing $2M to $25M in annual revenue — have none of that. They have one part-time IT consultant who keeps email working, a managing partner billing $600 an hour who genuinely cannot spend a week reading documentation, and a paralegal who is technically the most software-fluent person on staff.
              </p>
              <p className="text-body text-neutral-600 leading-relaxed mt-4">
                The May 12 launch closed the access gap between boutique and Big Law — every Claude subscription includes the legal toolset, and Anthropic doesn&apos;t price-discriminate by firm size. But it widened the configuration gap. Boutique firms now have the same platform AmLaw has, and the same problem AmLaw doesn&apos;t: nobody on staff to configure it.
              </p>
              <p className="text-body text-neutral-600 leading-relaxed mt-4">
                That configuration gap is where boutique firms either fall behind their peers over the next twelve to eighteen months, or get help and leapfrog them. The window matters because boutique firms compete on referrals, and referrals depend on operational responsiveness. A firm that can return a contract review in two hours wins the next referral over a firm that takes three days.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Customization gap with Mark Pike quote */}
        <section className="py-24 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F2240] via-navy-900 to-[#0F2240]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(212,165,116,0.1),transparent)] pointer-events-none" />
          <div className="absolute inset-0 grain opacity-[0.03]" />

          <div className="container-main relative">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-semibold text-gold/90 uppercase tracking-[0.15em] mb-4">
                Section 03
              </span>
              <h2 className="text-3xl md:text-headline font-semibold text-white tracking-tight">
                The customization gap is the entire opportunity.
              </h2>
            </div>

            {/* Pull quote */}
            <blockquote className="mt-10 max-w-3xl border-l-4 border-gold pl-6 md:pl-8">
              <p className="font-serif italic text-2xl md:text-3xl text-white leading-snug">
                &ldquo;Don&apos;t use it out of the box — it&apos;s at its best when you customize it with your own legal playbooks.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-gold">
                — Mark Pike, Associate General Counsel, Anthropic · launch day, May 12, 2026
              </footer>
            </blockquote>

            <div className="mt-10 max-w-3xl prose prose-invert">
              <p className="text-body-lg text-neutral-200 leading-relaxed">
                That sentence is the entire opportunity. Anthropic&apos;s own General Counsel said on the launch announcement that the practice-area tools are <em>at their best</em> when customized to a firm&apos;s playbooks. Out-of-the-box, they&apos;re a generic Corporate or M&amp;A or IP toolset — useful, but not your firm. Customized, they encode your standard positions, your typical pushback language, your house style, your conflict-check ritual.
              </p>
              <p className="text-body text-neutral-300 leading-relaxed mt-4">
                Anthropic shipped the framing. Boutique firms have to bring the furniture. The furniture is what we build during a sprint.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: The window */}
        <section className="py-24 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/40 to-white pointer-events-none" />
          <div className="container-main relative">
            <div className="max-w-3xl mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-4">
                Section 04
              </span>
              <h2 className="text-3xl md:text-headline font-semibold text-neutral-900 tracking-tight">
                The window is twelve to eighteen months. Then this is table stakes.
              </h2>
            </div>
            <div className="prose prose-neutral max-w-3xl">
              <p className="text-body-lg text-neutral-700 leading-relaxed">
                Honest framing: the early-adopter window for boutique firms in any given practice area is probably twelve to eighteen months. After that, your competitors in the same practice area in your geography will have adopted some version of this, and the firm that hasn&apos;t will start losing referrals on operational reasons partners won&apos;t articulate out loud.
              </p>
              <p className="text-body text-neutral-600 leading-relaxed mt-4">
                That doesn&apos;t mean every firm should sprint tomorrow. There are real reasons to wait — a leadership transition, a pending merger, a malpractice carrier renewal that&apos;s coming up. But &ldquo;we&apos;ll see&rdquo; is rarely one of them, because the &ldquo;see&rdquo; quietly turns into &ldquo;catch up.&rdquo;
              </p>
              <p className="text-body text-neutral-600 leading-relaxed mt-4">
                The right answer is decision-grade, not action-grade: sprint now, run a pilot, or write down what would change your mind in 90 days. Then put a calendar item on the date that 90 days lands.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Checklist */}
        <section className="py-24 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/40 via-white to-neutral-50/40 pointer-events-none" />
          <div className="container-main relative">
            <div className="max-w-3xl mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-100 text-xs font-semibold text-navy uppercase tracking-wider mb-4">
                Section 05
              </span>
              <h2 className="text-3xl md:text-headline font-semibold text-neutral-900 tracking-tight">
                What a managing partner should do this week, this month, this quarter.
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600 leading-relaxed">
                A short checklist. None of these require hiring anyone, signing anything with us, or committing to a budget.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {checklist.map((c, idx) => (
                <div key={c.week} className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-subtle">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[0.12em] text-amber-700 mb-3 block">Window 0{idx + 1}</span>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">{c.week}</h3>
                  <ul className="space-y-3">
                    {c.actions.map((a) => (
                      <li key={a} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-neutral-700 leading-relaxed">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PageCTABand
          headline="Want to skip the twelve months of figuring this out yourself?"
          body="Book the twenty-minute consultation. We&rsquo;ll tell you straight whether a full implementation engagement fits your firm right now — or what to do instead."
          primaryLabel="Book the consultation"
          primaryHref="/#contact"
          secondaryLabel="Or attend a seminar first"
          secondaryHref="/seminars"
        />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Why Now — A Partner's Briefing on Claude for Legal",
            description:
              "A partner-grade briefing on Anthropic's May 12, 2026 Claude for Legal launch, what it means for boutique firms specifically, the customization gap, the 12-18 month window, and what a managing partner should do this week.",
            datePublished: "2026-05-12",
            dateModified: "2026-05-12",
            author: { "@type": "Organization", name: "Sidebar AI", url: "https://sidebarai.us" },
            publisher: { "@type": "Organization", name: "Sidebar AI", url: "https://sidebarai.us" },
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://sidebarai.us/why-now" },
          }),
        }}
      />
    </>
  );
}
