import { notFound } from "next/navigation";
import { Metadata } from "next";
import { industries, getIndustryBySlug } from "@/data/industries";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import PainPoints from "@/components/PainPoints";
import WhoWeHelp from "@/components/WhoWeHelp";
import InteractiveDemo from "@/components/InteractiveDemo";

const slugAccentMap: Record<string, "navy" | "emerald" | "sky" | "amber" | "rose"> = {
  "law-firms": "navy",
  "cpa-firms": "emerald",
  "real-estate": "sky",
  "insurance": "amber",
  "restaurants": "rose",
};
import HowItWorks from "@/components/HowItWorks";
import WhySidebarAI from "@/components/WhySidebarAI";
import ServicesFeatures from "@/components/ServicesFeatures";
import FirmVoice from "@/components/FirmVoice";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  // Sidebarai is now exclusively a Claude for Legal implementation partner
  // for law firms. The legacy multi-industry slug system is preserved at the
  // code level (data/industries.ts still has multi-vertical content for the
  // [slug] template) but only the law-firms hub is publicly built. Other
  // slugs 404 by default.
  return industries
    .filter((industry) => industry.slug === "law-firms")
    .map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `https://sidebarai.us/${industry.slug}`,
      siteName: "Sidebar AI",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: industry.metaTitle,
      description: industry.metaDescription,
    },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <Navigation brandName={industry.brandName} currentSlug={industry.slug} />
      <main>
        <Hero
          badge={industry.badge}
          headline={industry.headline}
          accentHeadline={industry.accentHeadline}
          subheadline={industry.subheadline}
          heroStats={industry.heroStats}
          heroDemoCard={industry.heroDemoCard}
          trustItems={industry.trustItems}
          urgencyText={industry.urgencyText}
        />
        <TrustBadges />
        <PainPoints
          painPoints={industry.painPoints}
          sectionLabel={industry.sectionLabel}
        />
        <WhoWeHelp
          roles={industry.roles}
          clientNoun={industry.clientNoun}
        />
        <InteractiveDemo
          demos={industry.demos}
          clientNoun={industry.clientNoun}
          accent={slugAccentMap[industry.slug] || "navy"}
        />
        <HowItWorks clientNoun={industry.clientNoun} />
        <WhySidebarAI clientNoun={industry.clientNoun} />
        <ServicesFeatures
          automationUseCases={industry.automationUseCases}
          clientNoun={industry.clientNoun}
        />
        <FirmVoice
          firmVoice={industry.firmVoice}
          clientNoun={industry.clientNoun}
        />
        <SocialProof clientNoun={industry.clientNoun} />
        <FAQ
          faqItems={industry.faqItems}
          clientNoun={industry.clientNoun}
        />
        <ContactForm
          sizeOptions={industry.sizeOptions}
          specialtyOptions={industry.specialtyOptions}
          specialtyLabel={industry.specialtyLabel}
          clientNoun={industry.clientNoun}
        />
      </main>
      <Footer brandName={industry.brandName} />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Sidebar AI",
            description: industry.metaDescription,
            url: `https://sidebarai.us/${industry.slug}`,
            email: "hello@sidebarai.us",
            serviceType: "AI Consulting & Training",
            areaServed: "US",
            priceRange: "$$",
            knowsAbout: [
              "Artificial Intelligence",
              industry.name,
              "Workflow Automation",
              "AI Training",
            ],
          }),
        }}
      />
    </>
  );
}
