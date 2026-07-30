import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import { constructMetadata } from "@/lib/generateMetadata";
import { getWebPageSchema, getBreadcrumbSchema } from "@/data/schemas";

export const metadata: Metadata = constructMetadata({
  title: "Yoga & Meditation Blog | Tips, Benefits & Guides | Arunayoga",
  description:
    "Read expert articles on yoga benefits, meditation for stress relief, therapeutic yoga, Shat Karma, and choosing the best yoga centre in Hyderabad.",
  urlPath: "/blog",
  keywords: [
    "Yoga Blog Hyderabad",
    "Yoga Benefits",
    "Meditation Stress Relief",
    "Ayurveda Therapy Blog",
  ],
});

export default function BlogPage() {
  const webPageSchema = getWebPageSchema(
    "Yoga & Meditation Blog | Arunayoga",
    "Read expert articles on yoga benefits, meditation for stress relief, and therapeutic yoga.",
    "/blog"
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <BlogHero />

      <div className="container mx-auto px-4 max-w-7xl pt-6">
        <Breadcrumb items={[{ label: "Blog" }]} />
      </div>

      <BlogList />

      <CTASection
        title="Ready to Begin Your Yoga Journey?"
        subtitle="Join our daily yoga and meditation classes at Arunayoga Banjara Hills, Hyderabad."
        primaryButtonText="Book a Free Trial Class"
        primaryButtonHref="/contact"
        secondaryButtonText="Contact Us Today"
        secondaryButtonHref="tel:+919876543210"
      />
    </main>
  );
}
