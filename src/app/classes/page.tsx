import type { Metadata } from "next";
import ClassesHero from "@/components/classes/ClassesHero";
import ClassesGrid from "@/components/classes/ClassesGrid";
import ClassComponents from "@/components/classes/ClassComponents";
import Schedule from "@/components/classes/Schedule";
import FAQSection from "@/components/ui/FAQSection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import { constructMetadata } from "@/lib/generateMetadata";
import {
  getWebPageSchema,
  getCourseSchema,
  getFAQSchema,
  getBreadcrumbSchema,
} from "@/data/schemas";
import { CLASSES_FAQS } from "@/data/faqData";
import { PAGE_KEYWORDS } from "@/data/seoKeywords";

export const metadata: Metadata = constructMetadata({
  title: "Yoga Classes in Hyderabad — Hatha, Vinyasa & Therapeutic | Arunayoga",
  description:
    "Join daily morning and evening yoga classes in Hyderabad at Arunayoga Banjara Hills. Hatha, Ashtanga, Vinyasa, Power Yoga, and Therapeutic Yoga sessions for beginners & experts.",
  urlPath: "/classes",
  keywords: PAGE_KEYWORDS.classes,
});

export default function ClassesPage() {
  const webPageSchema = getWebPageSchema(
    "Yoga Classes in Hyderabad | Arunayoga",
    "Join daily morning and evening yoga classes in Hyderabad at Arunayoga Banjara Hills. Hatha, Vinyasa, Ashtanga, and Therapeutic sessions.",
    "/classes"
  );

  const courseSchema = getCourseSchema(
    "Authentic Yoga Classes & Daily Practice",
    "Comprehensive daily yoga program covering Hatha, Vinyasa, Ashtanga, and Therapeutic Yoga in Hyderabad."
  );

  const faqSchema = getFAQSchema(CLASSES_FAQS);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Classes", url: "/classes" },
  ]);

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ClassesHero />

      <div className="container mx-auto px-4 max-w-7xl pt-6">
        <Breadcrumb items={[{ label: "Yoga Classes" }]} />
      </div>

      <ClassesGrid />
      <ClassComponents />
      <Schedule />
      <FAQSection
        title="Yoga Classes FAQs"
        subtitle="Common questions about our daily batch timings, yoga styles, and beginner guidelines."
        faqs={CLASSES_FAQS}
      />
      <CTASection
        title="Ready to Join Yoga Classes in Hyderabad?"
        subtitle="Book a complimentary demo class and experience the transformational power of traditional yoga."
        primaryButtonText="Book a Free Trial Class"
        primaryButtonHref="/contact"
        secondaryButtonText="Talk to Our Experts"
        secondaryButtonHref="tel:+919876543210"
      />
    </main>
  );
}
