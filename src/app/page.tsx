import type { Metadata } from "next";
import HomeClientContent from "@/components/home/HomeClientContent";
import { constructMetadata } from "@/lib/generateMetadata";
import {
  getWebPageSchema,
  getFAQSchema,
  getBreadcrumbSchema,
} from "@/data/schemas";
import { HOME_FAQS } from "@/data/faqData";
import { PAGE_KEYWORDS } from "@/data/seoKeywords";

export const metadata: Metadata = constructMetadata({
  title: "Best Yoga Centre in Hyderabad | Arunayoga Training & Research Institute",
  description:
    "Arunayoga (ATRI) is the premier Yoga Centre in Hyderabad offering Yoga Alliance certified Teacher Training, Daily Yoga Classes, Meditation, & Therapeutic Yoga in Banjara Hills.",
  urlPath: "",
  keywords: PAGE_KEYWORDS.home,
});

export default function Home() {
  const webPageSchema = getWebPageSchema(
    "Best Yoga Centre in Hyderabad | Arunayoga",
    "Arunayoga is the premier Yoga Centre in Hyderabad offering Yoga Alliance certified Teacher Training, Daily Yoga Classes, Meditation, & Therapeutic Yoga.",
    ""
  );

  const faqSchema = getFAQSchema(HOME_FAQS);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
  ]);

  return (
    <main>
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

      <HomeClientContent />
    </main>
  );
}
