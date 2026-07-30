import type { Metadata } from "next";
import AboutHero from "@/components/about-main/AboutHero";
import MissionValues from "@/components/about-main/MissionValues";
import TeamGrid from "@/components/about-main/TeamGrid";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import { constructMetadata } from "@/lib/generateMetadata";
import { getWebPageSchema, getBreadcrumbSchema } from "@/data/schemas";
import { PAGE_KEYWORDS } from "@/data/seoKeywords";

export const metadata: Metadata = constructMetadata({
  title: "About Arunayoga Hyderabad | Premier Yoga Training & Research Institute",
  description:
    "Learn about Arunayoga (ATRI) Hyderabad — 30+ years of authentic yoga lineage, Yogini Arunadevi's mission, Yoga Alliance accreditation, and our expert team in Banjara Hills.",
  urlPath: "/about",
  keywords: PAGE_KEYWORDS.about,
});

export default function AboutPage() {
  const webPageSchema = getWebPageSchema(
    "About Arunayoga Hyderabad | Institute & History",
    "30+ years of authentic yoga lineage, Yogini Arunadevi's mission, and Yoga Alliance accreditation in Banjara Hills, Hyderabad.",
    "/about"
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
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

      <AboutHero />

      <div className="container mx-auto px-4 max-w-7xl pt-6">
        <Breadcrumb items={[{ label: "About Us" }]} />
      </div>

      <MissionValues />
      <TeamGrid />

      <CTASection
        title="Experience Authentic Traditional Yoga"
        subtitle="Schedule your visit to our peaceful Banjara Hills institute or book a free trial class."
        primaryButtonText="Schedule Your Visit"
        primaryButtonHref="/contact"
        secondaryButtonText="Talk to Our Experts"
        secondaryButtonHref="tel:+919876543210"
      />
    </main>
  );
}
