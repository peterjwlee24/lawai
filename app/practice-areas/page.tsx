import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/pages/PageHero";
import PageCTABand from "@/components/pages/PageCTABand";
import PracticeAreasList from "@/components/pages/PracticeAreasList";

export const metadata: Metadata = {
  title: "Practice Areas We Serve — Claude for Legal Workflows for Boutique Law Firms",
  description:
    "Sidebar AI configures Claude for Legal to twelve practice areas: estate planning, corporate, IP, tax, employment, real estate, healthcare regulatory, white-collar criminal defense, lower-middle-market M&A, construction, business immigration, and others. Each engagement is built around your firm's actual matter playbook, not a generic prompt pack.",
  alternates: { canonical: "https://sidebarai.us/practice-areas" },
  openGraph: {
    title: "Practice Areas We Serve — Sidebar AI",
    description:
      "Claude for Legal workflows customized to your practice area — estate planning, corporate, IP, tax, employment, M&A, real estate, healthcare regulatory, and more.",
    url: "https://sidebarai.us/practice-areas",
    siteName: "Sidebar AI",
    type: "website",
  },
};

const areas = [
  {
    name: "Estate Planning, Trusts & Estates",
    slug: "estate-planning",
    framing:
      "Multigenerational client families, state-specific drafting libraries, and trust funding workflows that touch dozens of accounts per matter. Standard plugins won't handle the conflict-check complexity of representing parents, children, and grandchildren with overlapping but adverse interests.",
    workflows: [
      "Trust funding workflow — pulls account inventory from the engagement letter and drafts the transfer documents per institution",
      "Beneficiary intake summary — combines the intake form, the existing trust documents, and the family chart into a partner-ready brief",
      "Multigenerational conflict checks — flags representations that involve adverse interests across parent / child / grandchild representations",
      "State-specific drafting — pulls your firm's preferred trust templates for the relevant state and inserts the client-specific provisions",
      "Distribution-event triggers — surfaces when a trust enters a distribution window so the firm can proactively reach out to trustees",
    ],
  },
  {
    name: "Corporate & Business Law (small-to-mid-market)",
    slug: "corporate",
    framing:
      "Owner-operated businesses, family-held companies, lower-middle-market deals where the partner is often counsel to the founder personally as well. Workflows have to handle the dual-representation nuance and the operational fact that the same partner is on a contract review and a board minutes draft in the same week.",
    workflows: [
      "Standard-position contract review — flags every deviation from your firm's standard positions on indemnity, termination, governing law, and non-compete",
      "Operating agreement diligence — reads an existing OA and surfaces every governance, capitalization, and transfer-restriction provision a buyer would care about",
      "Board minutes drafter — takes the agenda + decisions captured live and produces minutes in your firm's voice for partner review",
      "Series-by-series capitalization tracker — keeps a current cap table fed by the deal documents Claude has read",
      "Founder counsel intake — combines the operating agreement, employment agreements, and IP assignments into a single brief on the founder's personal exposure",
    ],
  },
  {
    name: "Intellectual Property",
    slug: "ip",
    framing:
      "Patent and trademark prosecution, copyright analysis, IP licensing. The workflow rhythm is steady prosecution work punctuated by litigation or licensing matters that require deep reading of the prosecution history. Standard plugins handle the search but not your firm's specific positions on claim scope or licensing terms.",
    workflows: [
      "Prosecution history summarizer — reads a full file wrapper and produces a brief that includes every claim amendment, every examiner argument, and every applicant response",
      "Claim chart generator — builds a claim chart against accused products from the patent claims and the product specifications",
      "Trademark clearance — pulls a USPTO search, surfaces the closest existing marks, and drafts the clearance opinion in your firm's voice",
      "Licensing-position playbook — your firm's standard royalty rates, exclusivity carve-outs, and field-of-use definitions baked into a contract-review workflow",
      "Office-action response drafter — takes the office action and a target argument from a partner and drafts the response per your firm's prosecution style",
    ],
  },
  {
    name: "Tax",
    slug: "tax",
    framing:
      "Federal income tax, state income tax, transfer pricing for the bigger boutiques. Tax workflows touch huge volumes of authority — Internal Revenue Code, Treasury regulations, revenue rulings, private letter rulings, case law. The verification posture matters more here than in any other practice area because a wrong citation is malpractice.",
    workflows: [
      "Authority research — pulls relevant IRC sections, Treasury regulations, revenue rulings, and case law for a specific transaction type, with full citations to verify",
      "Section 1031 exchange tracker — reads the exchange documents and surfaces every identification, every replacement, and every timing window",
      "PLR / TAM summarizer — produces a summary of relevant private letter rulings and technical advice memoranda for a position",
      "Partnership audit / BBA workflow — surfaces every BBA-relevant provision in the operating agreement and drafts the partnership representative analysis",
      "State tax nexus analysis — combines the client's operational footprint with state tax authority to flag nexus exposure",
    ],
  },
  {
    name: "Employment Law (defense-side and counsel)",
    slug: "employment",
    framing:
      "Defense-side employment work and corporate-counsel-style employee-relations work — classification audits, severance, EEOC posture, executive separations. The workflow rhythm is steady advice work punctuated by litigation or regulatory inquiries that require deep document review.",
    workflows: [
      "Employment-agreement review — flags non-compete enforceability, restrictive-covenant scope, and severance trigger language against your firm's standard positions",
      "EEOC-charge response drafter — combines the charge, the employee file, and the firm's position into a partner-ready response",
      "Classification audit — runs a wage-and-hour classification analysis against the FLSA factors and your state's equivalent",
      "Severance / separation drafter — pulls your firm's template, the executive's compensation history, and the negotiated terms into a final agreement",
      "Reduction-in-force documentation — produces the disparate-impact analysis and the required documentation for a planned RIF",
    ],
  },
  {
    name: "Real Estate (commercial and residential development)",
    slug: "real-estate",
    framing:
      "Real estate boutiques sit at the intersection of contract drafting, title work, financing, and entity formation. The workflow rhythm involves heavy volume of standardized documents with occasional bespoke deals that touch every one of those domains.",
    workflows: [
      "Purchase agreement review — flags every deviation from your firm's standard positions on financing contingencies, inspection windows, and closing conditions",
      "Title commitment review — reads the commitment and surfaces every exception, every requirement, and the specific objections your firm typically raises",
      "Estoppel certificate drafter — pulls from the lease and produces estoppel certificates for every tenant in a multi-tenant property",
      "Loan document diligence — reads the loan agreement, security documents, and intercreditor agreements and produces a summary against your firm's checklist",
      "Construction-payment tracking — surfaces lien waivers, payment applications, and conditional vs. unconditional waiver requirements",
    ],
  },
  {
    name: "Healthcare Regulatory",
    slug: "healthcare-regulatory",
    framing:
      "Stark Law, Anti-Kickback Statute, HIPAA, state-level health-facility regulation. Healthcare regulatory work is heavily authority-driven and has the same malpractice exposure profile as tax — a wrong citation is career-ending.",
    workflows: [
      "Stark / AKS exception analysis — combines the proposed arrangement with the applicable safe harbors and produces a memo in your firm's voice",
      "HIPAA breach assessment — runs through the 4-factor risk assessment against your firm's breach-decision tree",
      "Provider-employment contract review — flags compensation models against Stark fair-market-value and commercial-reasonableness requirements",
      "Compliance program documentation — produces the OIG-aligned documentation for a client's compliance program",
      "State licensure tracker — surfaces every state where a multistate practice has licensure exposure and the renewal windows",
    ],
  },
  {
    name: "White-Collar Criminal Defense",
    slug: "white-collar",
    framing:
      "Government investigations, FCPA matters, healthcare fraud, securities enforcement. The workflow rhythm involves long document-review-heavy projects punctuated by motion practice that requires deep mastery of prior matters.",
    workflows: [
      "Government-production review — runs first-pass relevance and privilege on a production set against your firm's standard tags",
      "Witness-prep memo drafter — combines the witness's prior testimony, the government's known questions, and your firm's preparation playbook into a prep memo",
      "Sentencing memo drafter — pulls the client's mitigation evidence and the government's position into a sentencing memo in your firm's voice",
      "Compliance-program assessment — runs a client's existing compliance program against the DOJ's most recent evaluation guidance",
      "Whistleblower-claim early assessment — combines the claim, the client's records, and the relevant statute into a privileged early-case brief",
    ],
  },
  {
    name: "M&A (lower-middle-market)",
    slug: "ma",
    framing:
      "Deals between $5M and $250M where the boutique firm is on the buy side or the sell side and the partner is doing the full job — drafting, negotiating, closing. The workflow rhythm is intense bursts of due diligence and negotiation punctuated by closing checklists that have to be tracked across dozens of conditions.",
    workflows: [
      "Disclosure-schedules drafter — produces the schedules from the data room, flagging every exception that needs to be carved out of representations",
      "Closing-checklist tracker — extracts every closing condition from the purchase agreement and tracks completion status across the deal team",
      "Defined-term propagation — when a defined term changes in the purchase agreement, the workflow surfaces every related document that needs a conforming amendment",
      "Working-capital adjustment workflow — pulls the financial statements and produces the post-closing adjustment calculation per the agreement",
      "Earnout-monitoring runbook — surfaces every earnout trigger from the agreement and tracks the post-closing data needed to compute it",
    ],
  },
  {
    name: "Construction Law",
    slug: "construction",
    framing:
      "Owner-side and contractor-side construction work — drafting AIA documents, claims, defects, payment disputes. The workflow rhythm involves heavy volume of standardized AIA forms with occasional bespoke deals where the partner has to track ten parties across thirty months.",
    workflows: [
      "AIA document review — flags every deviation from your firm's standard positions on AIA A201, A101, and related forms",
      "Schedule-of-values builder — produces the schedule of values from the contract and tracks payment applications against it",
      "Differing-site-conditions notice — combines the contract notice provisions with the field documentation to draft a timely notice",
      "Mechanic's-lien tracker — surfaces every notice deadline, filing deadline, and foreclosure deadline across all liens on a project",
      "Pay-application review — runs the contractor's pay app against the contract, the prior pay apps, and the lien waivers",
    ],
  },
  {
    name: "Business Immigration",
    slug: "immigration-business",
    framing:
      "Employer-side immigration work — H-1Bs, L-1s, EB-1A and EB-1B, PERM filings. The workflow is heavily document-driven, deadline-sensitive, and has to track every form against every requirement for every petition.",
    workflows: [
      "H-1B petition drafter — assembles the petition from the employer's documentation, the position description, and the beneficiary's credentials",
      "PERM advertising tracker — manages the recruitment timeline, advertising venues, and required documentation across the PERM process",
      "Specialty-occupation argument builder — produces the specialty-occupation analysis from the position description and the regulatory criteria",
      "RFE-response drafter — combines the RFE, the original petition, and your firm's response playbook into a response in your firm's voice",
      "Multi-petition portfolio tracker — surfaces every approaching petition deadline across a corporate client's full workforce",
    ],
  },
  {
    name: "General Practice & Mid-Sized Boutiques",
    slug: "general",
    framing:
      "Firms that don't sit in a single practice area — general practitioners, mid-sized boutiques with three or four complementary practice groups, regional firms. The workflow rhythm shifts daily, so the workflows have to be discoverable, well-documented, and usable by associates rotating across matter types.",
    workflows: [
      "Matter-intake router — pulls the intake form and routes the new matter to the right practice group with a drafted intake summary",
      "Cross-practice conflict checks — runs the conflict check across every active matter in every practice group and surfaces conflicts the standard check would miss",
      "Multi-practice client briefs — combines a long-time client's history across litigation, corporate, employment, and real estate work into a single partner-ready brief",
      "Generalist-counsel review — runs a contract review against your firm's standard positions for whichever practice area the contract sits in",
      "Cross-practice billing narratives — drafts billing narratives in the voice of whichever practice group the matter sits in",
    ],
  },
];

export default function PracticeAreasPage() {
  return (
    <>
      <Navigation darkHero={true} />
      <main>
        <PageHero
          eyebrow="Practice areas we serve"
          headline="Twelve practice areas."
          accentHeadline="Your firm's workflow, not a generic toolkit."
          subheadline="Anthropic ships practice-area tools that are generic on day one. We turn them into workflows your firm actually runs — built around your standard positions, your house style, your conflict-check ritual, your jurisdictional posture. Twelve practice areas where we've done this work; the framing for each below covers the workflows we typically author during the async prep phase and deploy live in sprint week."
          primaryCta={{ label: "Book the consultation", href: "/#contact" }}
          secondaryCta={{ label: "See the sprint", href: "/sprint" }}
          trustItems={[
            "Workflows built around your firm's playbook",
            "Customized during async prep, deployed in sprint week",
            "Re-usable across every matter in the practice area",
          ]}
        />

        {/* Practice-area photo plate — sets the editorial tone before the TOC */}
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
                      src="/images/practice-areas-hero.jpg"
                      alt="A row of labeled file folders standing in a walnut shelf organizer in a partner's office — Estate Planning, Corporate / M&A, IP, Tax, Employment, Real Estate, and Litigation. A hand enters from the left edge mid-reach, pulling the Estate Planning folder partway forward. Softly out-of-focus professional certificates frame the wall above; a stoneware mug rests on a side table below. Warm walnut paneling, soft directional daylight."
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover"
                      quality={88}
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.12em] text-navy mb-3 block">
                  Pick your practice
                </span>
                <h2 className="text-3xl md:text-headline font-semibold text-neutral-900 leading-tight tracking-tight">
                  Twelve folders, twelve playbooks,{" "}
                  <span className="font-serif italic font-normal">one sprint shape.</span>
                </h2>
                <p className="mt-5 text-body-lg text-neutral-700 leading-relaxed">
                  The engagement shape is identical across practice areas — async discovery, async build, then a live Mon–Fri sprint week. What changes is the playbook we capture during async discovery and the workflows we author during async build. Each of the twelve folders below opens to the workflows we typically build for that practice.
                </p>
              </div>
            </div>
          </div>
        </section>

        <PracticeAreasList areas={areas} />

        {/* Not on this list */}
        <section className="py-20 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-neutral-50 pointer-events-none" />
          <div className="container-main relative">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-4">
                Your practice not listed?
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 leading-tight">
                We work with adjacent practice areas all the time. Book the call.
              </h2>
              <p className="mt-4 text-body text-neutral-600 leading-relaxed">
                Family law, bankruptcy, securities enforcement, government contracts, environmental, education, and other adjacent practices have all engaged us. The workflows differ but the sprint framework is the same. If your firm sits in a practice area we haven&apos;t mentioned, the consultation is the right place to figure out whether we&apos;re a fit.
              </p>
            </div>
          </div>
        </section>

        <PageCTABand
          headline="Same engagement shape. Built to your practice area."
          body="The platform Anthropic ships is generic on day one. The version your firm runs on day five is your firm. Book the consultation to scope which workflows we&rsquo;d build during your sprint."
          primaryLabel="Book the consultation"
          primaryHref="/#contact"
          secondaryLabel="See the sprint scope"
          secondaryHref="/sprint"
        />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Practice Areas We Serve — Sidebar AI",
            description:
              "Sidebar AI configures Claude for Legal to twelve practice areas including estate planning, corporate, IP, tax, employment, real estate, healthcare regulatory, white-collar criminal defense, lower-middle-market M&A, construction, business immigration, and general practice.",
            url: "https://sidebarai.us/practice-areas",
            provider: { "@type": "ProfessionalService", name: "Sidebar AI", url: "https://sidebarai.us" },
          }),
        }}
      />
    </>
  );
}
