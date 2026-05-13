import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/pages/PageHero";
import PageCTABand from "@/components/pages/PageCTABand";

export const metadata: Metadata = {
  title: "Bar Ethics & Confidentiality — How Sidebar AI Builds for the Rules You Practice Under",
  description:
    "Every Sidebar AI deployment is built to ABA Model Rules 1.1, 1.6, and 5.3 and your state's professional conduct rules. Anthropic's data-handling guarantees, matter-level access controls, conflict walls at the integration layer, malpractice-carrier-ready usage policy templates — explained honestly, mapped to specific rules. Built for the bar, not against it.",
  alternates: { canonical: "https://sidebarai.us/bar-ethics" },
  openGraph: {
    title: "Bar Ethics & Confidentiality — Sidebar AI",
    description:
      "Every deployment mapped to ABA Model Rules 1.1, 1.6, 5.3 and your state's bar rules. Built for the bar, not against it.",
    url: "https://sidebarai.us/bar-ethics",
    siteName: "Sidebar AI",
    type: "website",
  },
};

const rules = [
  {
    rule: "ABA Model Rule 1.1",
    name: "Competence — Comment 8 (technological competence)",
    body: "Comment 8 to Rule 1.1 made technological competence part of the duty of competence in 2012; the 2024 update made AI fluency squarely part of that obligation. The question isn't whether your firm needs to understand AI — that's settled. The question is what \"reasonable understanding\" looks like operationally for your practice.",
    howWeBuild: [
      "During discovery we map your current technical baseline so the eventual usage policy reflects what your team actually knows",
      "Live training sessions ensure every attorney and staff member meets the competence threshold for the workflows they trigger",
      "Custom-recorded video course your firm keeps forever — Rule 1.1 doesn't end when we leave; the video library trains new hires the same way",
      "Annual tune-ups available via retainer — Anthropic ships new capabilities monthly, and the competence baseline shifts with the product",
    ],
  },
  {
    rule: "ABA Model Rule 1.6",
    name: "Confidentiality of Information",
    body: "The most-asked question, and the one with the most defensible answer. Anthropic does not train Claude on customer data — that's contractual, verifiable, and enforceable. The harder questions are about who inside your firm sees what, how a matter is sealed off from another matter, and whether the safeguards are evidence-able to your bar counsel and your malpractice carrier.",
    howWeBuild: [
      "Matter-level access controls enforced inside the integration layer, not just on the screen — your existing iManage or NetDocuments permissions carry over",
      "Confidentiality posture review during async discovery, mapped to your specific carrier's questionnaire",
      "Anthropic's zero-retention and customer-managed-keys modes configured where your firm's posture warrants",
      "Usage policy template references the specific contract clause that prohibits training and where in the Anthropic Trust Center you find it",
      "Every workflow we build runs a confidentiality scan before output — no inadvertent client identification across matter walls",
    ],
  },
  {
    rule: "ABA Model Rule 5.3",
    name: "Supervision of Non-Lawyer Assistance",
    body: "AI is non-lawyer assistance under Rule 5.3. Your supervisory obligation doesn't go away — it scales. The question is what supervision looks like in practice: where the review checkpoints sit, what citations are required, what gets escalated, what audit trail you'd want in front of a bar inquiry.",
    howWeBuild: [
      "Every workflow we build includes mandatory citation to source documents — no unverified statements reach an attorney",
      "Review checkpoints baked into the workflow: \"draft for partner review,\" \"draft for senior associate sign-off,\" depending on the matter type",
      "Audit trail captured in the matter folder — what was generated, when, by whom, what was edited before final",
      "Escalation triggers defined during discovery — what AI output requires partner sign-off vs. associate sign-off vs. paralegal handling",
      "The supervisory framework is part of the runbook your firm keeps — not just our internal documentation",
    ],
  },
  {
    rule: "Your state's rules",
    name: "Illinois, New York, California, and other state RPCs",
    body: "Most states' professional conduct rules are aligned with the ABA Model Rules, but the specifics matter. Illinois RPC 7.1 governs attorney advertising (relevant if you build a LinkedIn skill that drafts posts). California's confidentiality rule is stricter than ABA 1.6 on prospective clients. New York's 22 NYCRR has technology-specific provisions. We map your specific jurisdiction during async discovery.",
    howWeBuild: [
      "Jurisdiction-specific usage policy — Illinois RPC, New York 22 NYCRR, California RPC, Texas Rules, Delaware RPC, Florida Bar Rules, others on request",
      "If your firm practices in multiple jurisdictions, the policy maps the strictest applicable rule",
      "Advertising-rule guardrails baked into any content workflow (e.g., LinkedIn drafting) so output never violates 7.1 or its state analogs",
      "Reciprocity considerations: when partners practice across state lines, the workflow respects the rule that governs the matter, not just the office",
    ],
  },
];

const insuranceFacts = [
  "Most malpractice carriers added AI clauses to their policy renewal questionnaires in 2025",
  "Several carriers now require a written AI usage policy as a precondition of renewal",
  "Two major Illinois carriers have started asking specifically about \"vendor-implemented AI\" in addition to general AI use",
  "We provide the usage policy template before signing, so your carrier can review it before you commit",
];

const safeguards = [
  {
    title: "Anthropic's data-handling commitments",
    body: "Claude does not train on customer data. That's a contractual commitment from Anthropic, not a marketing claim. We walk your team through where the contract clause sits, where Anthropic's Trust Center documents the technical enforcement, and what evidence your malpractice carrier can verify on their own.",
  },
  {
    title: "Matter-level access controls",
    body: "Conflict walls enforced inside the integration layer. Client A's matters are sealed from Client B at the data-fetch step, not just the UI. Verifiable, auditable, and defensible if a partner is ever asked about it under oath.",
  },
  {
    title: "Retention and deletion policies",
    body: "Your firm chooses how long inputs and outputs persist inside Claude. Zero-retention mode is available for the most sensitive workflows. Custom retention windows mapped to your matter-management policy.",
  },
  {
    title: "Mandatory citations on every workflow",
    body: "No unsourced AI output reaches an attorney. Every claim references a specific source document and a specific page. If the workflow cannot find a source, it flags the gap rather than guessing — the supervisory obligation under Rule 5.3 stays intact.",
  },
  {
    title: "Pre-output confidentiality scan",
    body: "Every workflow runs a final pass that cross-references the output against the firm matter database to catch inadvertent client identification across ethical walls. Built once, applied to every workflow.",
  },
  {
    title: "Bar-rule guardrails on content workflows",
    body: "Any workflow that drafts attorney-facing content (LinkedIn posts, blog drafts, marketing copy) runs through a compliance check before delivery — no prohibited testimonials, no result-prediction language, no required disclaimers missing.",
  },
];

export default function BarEthicsPage() {
  return (
    <>
      <Navigation darkHero={true} />
      <main>
        <PageHero
          eyebrow="Bar ethics & confidentiality"
          headline="Built to the rules"
          accentHeadline="your bar already enforces."
          subheadline="Every Sidebar AI deployment is mapped to ABA Model Rules 1.1, 1.6, and 5.3, plus your state's professional conduct rules. Matter-level access controls, ethical walls at the integration layer, Anthropic's data-handling guarantees, malpractice-carrier-ready policy templates. Built for the bar, not against it."
          primaryCta={{ label: "Book the consultation", href: "/#contact" }}
          secondaryCta={{ label: "See the sprint", href: "/sprint" }}
          trustItems={[
            "ABA Model Rules 1.1 · 1.6 · 5.3",
            "State RPCs mapped during discovery",
            "Malpractice-carrier-reviewed policy template",
          ]}
        />

        {/* Hero artifact — the actual policy document we draft */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/40 to-white pointer-events-none" />
          <div className="container-main relative">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.12em] text-navy mb-3 block">
                  The deliverable
                </span>
                <h2 className="text-3xl md:text-headline font-semibold text-neutral-900 leading-tight tracking-tight">
                  Every engagement ships with a{" "}
                  <span className="font-serif italic font-normal">bar-compliant AI usage policy</span> your malpractice carrier can sign off on.
                </h2>
                <p className="mt-5 text-body-lg text-neutral-700 leading-relaxed">
                  Three sections every policy covers: confidentiality and data security, competence and supervision, and candor and compliance. Each one is mapped to the specific ABA Model Rule and your state&apos;s equivalent. The template you walk away with is the document we draft for your firm, customized to your jurisdiction and your matter mix.
                </p>
                <p className="mt-4 text-sm text-neutral-500 italic leading-relaxed">
                  The policy is yours to keep after the sprint — no licensing, no per-attorney fee, no expiration. It lives on the firm letterhead. We update it for you at carrier-renewal time via the retainer.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="relative">
                  <span aria-hidden="true" className="absolute -left-3 -top-3 z-10 h-8 w-8 border-l-2 border-t-2 border-navy" />
                  <span aria-hidden="true" className="absolute -bottom-3 -right-3 z-10 h-8 w-8 border-b-2 border-r-2 border-gold" />
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-elevated">
                    <Image
                      src="/images/bar-ethics-desk.jpg"
                      alt="An attorney's working desk: a printed Sidebar AI Bar-compliant AI usage policy with three sections (Confidentiality and data security, Competence and supervision, Candor and compliance), an open notebook with handwritten cursive notes, a black fountain pen with gold trim, tortoise-shell reading glasses, a stoneware coffee mug, a brass paperweight, all on warm walnut with soft diagonal daylight."
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                      quality={88}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rules grid */}
        <section className="py-24 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/30 to-white pointer-events-none" />
          <div className="container-main relative space-y-10">
            {rules.map((r, idx) => (
              <article key={r.rule} className="grid lg:grid-cols-12 gap-8 lg:gap-10 p-6 md:p-8 lg:p-10 rounded-2xl bg-white border border-neutral-200/80 shadow-subtle">
                <div className="lg:col-span-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[0.12em] text-navy mb-3 block">
                    Rule 0{idx + 1}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 leading-tight">{r.rule}</h2>
                  <p className="mt-2 text-sm font-medium text-navy">{r.name}</p>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-body text-neutral-700 leading-relaxed">{r.body}</p>
                  <div className="mt-6 p-5 rounded-xl bg-navy-50 border border-navy-100">
                    <p className="text-[10px] font-mono font-bold uppercase tracking-[0.12em] text-navy mb-3">How we build to it</p>
                    <ul className="space-y-2.5">
                      {r.howWeBuild.map((h) => (
                        <li key={h} className="flex items-start gap-2.5">
                          <svg className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-neutral-700 leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Safeguards */}
        <section className="py-24 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/40 via-white to-neutral-50/40 pointer-events-none" />
          <div className="container-main relative">
            <div className="max-w-3xl mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-4">
                Concrete safeguards
              </span>
              <h2 className="text-3xl md:text-headline font-semibold text-neutral-900 tracking-tight">
                Six safeguards baked into every deployment.
              </h2>
              <p className="mt-4 text-body-lg text-neutral-600 leading-relaxed">
                Marketing prose about &ldquo;security and compliance&rdquo; is cheap. Here are the specific safeguards your firm walks away with — each tied to a specific rule, each verifiable by your bar counsel or malpractice carrier on their own.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {safeguards.map((s, idx) => (
                <div key={s.title} className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-subtle hover:shadow-elevated transition-all duration-500">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.12em] text-navy mb-3 block">Safeguard 0{idx + 1}</span>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2 leading-tight">{s.title}</h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insurance / carrier framing */}
        <section className="py-24 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F2240] via-navy-900 to-[#0F2240]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(212,165,116,0.1),transparent)] pointer-events-none" />
          <div className="absolute inset-0 grain opacity-[0.03]" />
          <div className="container-main relative">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-semibold text-gold/90 uppercase tracking-[0.15em] mb-4">
                Insurance carrier framing
              </span>
              <h2 className="text-3xl md:text-headline font-semibold text-white tracking-tight">
                Your malpractice carrier is going to ask. We&apos;re ready for it.
              </h2>
              <p className="mt-4 text-body-lg text-neutral-300 leading-relaxed">
                Most malpractice carriers have updated their renewal questionnaires to ask about AI usage. Several Illinois carriers now require a written AI usage policy as a precondition of renewal. The usage policy we draft is built to be the document your carrier asks for — not a marketing artifact.
              </p>
            </div>
            <div className="mt-10 grid md:grid-cols-2 gap-5">
              {insuranceFacts.map((f, idx) => (
                <div key={f} className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.12em] text-gold mb-2 block">Fact 0{idx + 1}</span>
                  <p className="text-sm text-neutral-200 leading-relaxed">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PageCTABand
          headline="We won't recommend any approach we wouldn't put in writing for your bar counsel."
          body="Book the consultation. If your firm&rsquo;s posture is too cautious for a sprint right now — or too aggressive — we&rsquo;ll tell you, and what to do instead."
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
            "@type": "Article",
            headline: "Bar Ethics & Confidentiality — How Sidebar AI Builds for the Rules You Practice Under",
            description:
              "Every Sidebar AI deployment is built to ABA Model Rules 1.1, 1.6, and 5.3 and your state's professional conduct rules. Anthropic's data-handling guarantees, matter-level access controls, conflict walls at the integration layer, malpractice-carrier-ready usage policy templates.",
            author: { "@type": "Organization", name: "Sidebar AI", url: "https://sidebarai.us" },
            publisher: { "@type": "Organization", name: "Sidebar AI" },
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://sidebarai.us/bar-ethics" },
          }),
        }}
      />
    </>
  );
}
