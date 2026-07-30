import type { Metadata } from "next";
import WellnessHero from "@/components/wellness/WellnessHero";
import TreatmentsGrid from "@/components/wellness/TreatmentsGrid";
import ConsultationProcess from "@/components/wellness/ConsultationProcess";
import WellnessTestimonials from "@/components/wellness/WellnessTestimonials";
import FAQSection from "@/components/ui/FAQSection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import { constructMetadata } from "@/lib/generateMetadata";
import {
  getWebPageSchema,
  getFAQSchema,
  getBreadcrumbSchema,
} from "@/data/schemas";
import { WELLNESS_FAQS } from "@/data/faqData";
import { PAGE_KEYWORDS } from "@/data/seoKeywords";

export const metadata: Metadata = constructMetadata({
  title: "Therapeutic Yoga & Meditation Classes in Hyderabad | Arunayoga",
  description:
    "Specialized Therapeutic Yoga, Meditation Classes, Naturopathy, & Ayurvedic Wellness in Hyderabad at Arunayoga Banjara Hills. Expert healing for paralysis, spinal care, & stress.",
  urlPath: "/wellness",
  keywords: PAGE_KEYWORDS.wellness,
});

export default function WellnessPage() {
  const webPageSchema = getWebPageSchema(
    "Therapeutic Yoga & Wellness Programs in Hyderabad | Arunayoga",
    "Specialized Therapeutic Yoga, Meditation Classes, Naturopathy, & Ayurvedic Wellness in Hyderabad at Arunayoga Banjara Hills.",
    "/wellness"
  );

  const faqSchema = getFAQSchema(WELLNESS_FAQS);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Wellness & Therapy", url: "/wellness" },
  ]);

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <WellnessHero />

      <div className="container mx-auto px-4 max-w-7xl pt-6">
        <Breadcrumb items={[{ label: "Wellness & Therapy" }]} />
      </div>

      <TreatmentsGrid />
      <ConsultationProcess />
      <WellnessTestimonials />

      <FAQSection
        title="Therapeutic Yoga & Wellness FAQs"
        subtitle="Answers to common questions about therapeutic yoga protocols, doctor consultations, and paralysis recovery."
        faqs={WELLNESS_FAQS}
      />

      <CTASection
        title="Begin Your Healing Journey Today"
        subtitle="Consult our experienced doctors and senior yoga therapists for a personalized therapeutic wellness plan."
        primaryButtonText="Contact Us Today"
        primaryButtonHref="/contact"
        secondaryButtonText="Talk to Our Experts"
        secondaryButtonHref="tel:+919876543210"
      />
    </main>
  );
}
