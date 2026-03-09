import Navigation from "@/components/Navigation";
import HubHero from "@/components/HubHero";
import WhatWeBuild from "@/components/WhatWeBuild";
import IndustriesSection from "@/components/IndustriesSection";
import HowItWorks from "@/components/HowItWorks";
import ServicesFeatures from "@/components/ServicesFeatures";
import InteractiveDemo from "@/components/InteractiveDemo";
import FAQ from "@/components/FAQ";
import WhySidebarAI from "@/components/WhySidebarAI";
import SocialProof from "@/components/SocialProof";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const hubSizeOptions = [
  { value: "", label: "Select business size" },
  { value: "solo", label: "Solo / 1 person" },
  { value: "small", label: "Small (2-10 staff)" },
  { value: "medium", label: "Medium (11-50 staff)" },
  { value: "large", label: "Large (50+ staff)" },
];

const hubSpecialtyOptions = [
  { value: "", label: "Select industry" },
  { value: "law", label: "Law Firm" },
  { value: "cpa", label: "CPA / Accounting Firm" },
  { value: "real-estate", label: "Real Estate" },
  { value: "insurance", label: "Insurance Agency" },
  { value: "restaurant", label: "Restaurant" },
  { value: "other", label: "Other" },
];

export default function Home() {
  return (
    <>
      <Navigation darkHero={false} />
      <main>
        <HubHero />
        <WhatWeBuild />
        <IndustriesSection />
        <ServicesFeatures clientNoun="business" />
        <HowItWorks clientNoun="business" isHub />
        <InteractiveDemo clientNoun="business" />
        <FAQ clientNoun="business" />
        <WhySidebarAI clientNoun="business" />
        <SocialProof clientNoun="business" isHub />
        <ContactForm
          sizeOptions={hubSizeOptions}
          specialtyOptions={hubSpecialtyOptions}
          specialtyLabel="Industry"
          clientNoun="business"
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
            name: "Blueprint AI",
            description:
              "AI consulting and training for businesses. We connect AI to the tools you already use and train your team to use it.",
            url: "https://blueprintaihq.com",
            email: "hello@blueprintaihq.com",
            serviceType: "AI Consulting & Training",
            areaServed: "US",
            priceRange: "$$",
            knowsAbout: [
              "Artificial Intelligence",
              "Business Operations",
              "Workflow Automation",
              "AI Training",
            ],
          }),
        }}
      />
    </>
  );
}
