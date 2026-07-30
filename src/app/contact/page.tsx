import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactContent from "@/components/contact/ContactContent";
import LocationMap from "@/components/contact/LocationMap";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { constructMetadata } from "@/lib/generateMetadata";
import { getWebPageSchema, getBreadcrumbSchema } from "@/data/schemas";
import { PAGE_KEYWORDS } from "@/data/seoKeywords";

export const metadata: Metadata = constructMetadata({
  title: "Contact Arunayoga — Yoga Centre in Banjara Hills, Hyderabad",
  description:
    "Get in touch with Arunayoga in Banjara Hills, Hyderabad for Yoga Classes, Teacher Training admissions, Meditation, and Therapeutic consultations. Call or visit us today.",
  urlPath: "/contact",
  keywords: PAGE_KEYWORDS.contact,
});

export default function ContactPage() {
  const webPageSchema = getWebPageSchema(
    "Contact Arunayoga — Yoga Centre in Banjara Hills, Hyderabad",
    "Get in touch with Arunayoga in Banjara Hills, Hyderabad for Yoga Classes, Teacher Training admissions, and Therapeutic consultations.",
    "/contact"
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
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

      <ContactHero />

      <div className="container mx-auto px-4 max-w-7xl pt-6">
        <Breadcrumb items={[{ label: "Contact Us" }]} />
      </div>

      <ContactContent />
      <LocationMap />
    </main>
  );
}
