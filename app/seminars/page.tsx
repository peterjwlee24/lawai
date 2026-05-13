import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import SeminarsHero from "@/components/seminars/SeminarsHero";
import SeminarsWhy from "@/components/seminars/SeminarsWhy";
import SeminarsAudience from "@/components/seminars/SeminarsAudience";
import SeminarsCurriculum from "@/components/seminars/SeminarsCurriculum";
import SeminarsFounder from "@/components/seminars/SeminarsFounder";
import SeminarsEthics from "@/components/seminars/SeminarsEthics";
import SeminarsFAQ from "@/components/seminars/SeminarsFAQ";
import SeminarsInquiryForm from "@/components/seminars/SeminarsInquiryForm";
import { SEMINARS_FAQ_ITEMS } from "@/lib/seminars-faq";

export const metadata: Metadata = {
  title: "Partner-Grade AI Seminars for Law Firms · Claude for Legal Training",
  description:
    "A live remote, working-session AI seminar for managing partners, practice leaders, and operations leads at mid-market and large law firms. Built around Anthropic's Claude for Legal, mapped to ABA Model Rules 1.1, 1.6, and 5.3 and your state's bar rules. Fully remote — your team leaves with a working Claude workflow on your real matter data and a written firm plan.",
  keywords: [
    "AI seminar for law firms",
    "Claude for Legal training",
    "law firm AI workshop",
    "partner-grade AI seminar",
    "ABA compliant AI training",
    "ABA Model Rule 1.1 AI",
    "ABA Model Rule 1.6 confidentiality AI",
    "ABA Model Rule 5.3 supervision AI",
    "boutique law firm AI seminar",
    "managing partner AI training",
    "remote AI seminar lawyers",
    "live AI seminar lawyers",
    "Anthropic Claude law firm training",
    "Sidebar AI seminar",
    "implementation seminar Claude for Legal",
    "legal technology seminar",
    "law firm Claude Cowork training",
    "Microsoft 365 AI for lawyers seminar",
    "iManage AI training",
    "Clio AI training",
    "NetDocuments AI training",
    "custom MCP connector law firm",
  ].join(", "),
  alternates: { canonical: "https://sidebarai.us/seminars" },
  openGraph: {
    title: "Partner-Grade AI Seminars for Law Firms — Sidebar AI",
    description:
      "A live remote, working-session AI seminar for managing partners, practice leaders, and operations leads. Built around Claude for Legal. Bar-compliant by design.",
    url: "https://sidebarai.us/seminars",
    siteName: "Sidebar AI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner-Grade AI Seminars for Law Firms",
    description:
      "A live remote working-session AI seminar for managing partners, practice leaders, and operations leads. Built around Claude for Legal.",
  },
};

export default function SeminarsPage() {
  return (
    <>
      <Navigation darkHero={true} />
      <main>
        <SeminarsHero />
        <TrustBadges />
        <SeminarsWhy />
        <SeminarsAudience />
        <SeminarsCurriculum />
        <SeminarsEthics />
        <SeminarsFounder />
        <SeminarsFAQ />
        <SeminarsInquiryForm />
      </main>
      <Footer />

      {/* JSON-LD — Course (the seminar) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Partner-Grade AI Seminar for Law Firms",
            description:
              "A live remote working-session AI seminar for managing partners, practice leaders, and operations leads at mid-market and large law firms. Built around Anthropic's Claude for Legal, mapped to ABA Model Rules 1.1, 1.6, and 5.3.",
            provider: {
              "@type": "ProfessionalService",
              name: "Sidebar AI",
              url: "https://sidebarai.us",
            },
            url: "https://sidebarai.us/seminars",
            educationalCredentialAwarded: "Internal firm-readiness assessment + written one-page plan",
            occupationalCredentialAwarded: "Technical-competence training under ABA Model Rule 1.1 (state CLE eligibility varies)",
            hasCourseInstance: [
              {
                "@type": "CourseInstance",
                courseMode: "online",
                courseWorkload: "PT3H30M",
                name: "Half-day live remote seminar",
                location: { "@type": "VirtualLocation", url: "https://sidebarai.us/seminars" },
              },
              {
                "@type": "CourseInstance",
                courseMode: "online",
                courseWorkload: "PT7H",
                name: "Full-day live remote seminar",
                location: { "@type": "VirtualLocation", url: "https://sidebarai.us/seminars" },
              },
            ],
          }),
        }}
      />

      {/* JSON-LD — FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: SEMINARS_FAQ_ITEMS.map((item) => ({
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
