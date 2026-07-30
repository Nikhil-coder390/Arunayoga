import type { Metadata } from "next";
import FounderHero from "@/components/about/FounderHero";
import YogaLineageJourney from "@/components/about/YogaLineageJourney";
import Achievements from "@/components/about/Achievements";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import { constructMetadata } from "@/lib/generateMetadata";
import { getWebPageSchema, getBreadcrumbSchema } from "@/data/schemas";

export const metadata: Metadata = constructMetadata({
  title: "Yogini Arunadevi | Founder of Arunayoga Training & Research Institute",
  description:
    "Meet Yogini Arunadevi, visionary founder of Arunayoga (ATRI) Hyderabad with 35+ years of dedicated experience in traditional yoga, therapy, and research.",
  urlPath: "/about/founder",
  keywords: ["Yogini Arunadevi", "Arunayoga Founder", "Yoga Guru Hyderabad"],
});

export default function FounderPage() {
  const webPageSchema = getWebPageSchema(
    "Yogini Arunadevi | Founder of Arunayoga",
    "Meet Yogini Arunadevi, visionary founder of Arunayoga (ATRI) Hyderabad with 35+ years of experience.",
    "/about/founder"
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Founder", url: "/about/founder" },
  ]);

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <FounderHero />

      <div className="container mx-auto px-4 max-w-7xl pt-6">
        <Breadcrumb
          items={[
            { label: "About", href: "/about" },
            { label: "Founder" },
          ]}
        />
      </div>

      <YogaLineageJourney />
      <Achievements />

      <CTASection
        title="Learn from Master Instructors"
        subtitle="Book a session or enroll in our teacher training under the guidance of Yogini Arunadevi."
        primaryButtonText="Book a Free Trial"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Teacher Training"
        secondaryButtonHref="/teacher-training"
      />
    </main>
  );
}
