"use client";

import Hero from "@/components/home/Hero";
import TrustIndicators from "@/components/home/TrustIndicators";
import MediaCoverage from "@/components/home/MediaCoverage";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesOverview from "@/components/home/ServicesOverview";
import TargetAudience from "@/components/home/TargetAudience";
import Certifications from "@/components/home/Certifications";
import Testimonials from "@/components/home/Testimonials";
import BlogList from "@/components/blog/BlogList";
import FAQSection from "@/components/ui/FAQSection";
import CTASection from "@/components/ui/CTASection";
import { HOME_FAQS } from "@/data/faqData";

export default function HomeClientContent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <TrustIndicators />
      <MediaCoverage />
      <AboutPreview />
      <ServicesOverview />
      <TargetAudience />
      <Certifications />
      <Testimonials />

      {/* Latest Articles Section on Home Page */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">
              Knowledge & Insights
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-primary text-brand-dark-grey mb-4">
              Latest Articles from Our Yoga Blog
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Explore authentic guidance on traditional yoga practices, meditation techniques, therapeutic healing, and holistic healthy living.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <BlogList limit={3} showHeader={false} />
        </div>
      </section>

      <FAQSection
        title="Frequently Asked Questions — Arunayoga Hyderabad"
        subtitle="Learn more about our classes, teacher training, therapeutic programs, and facility in Banjara Hills, Hyderabad."
        faqs={HOME_FAQS}
      />
      <CTASection
        title="Book Your Free Trial Yoga Class Today"
        subtitle="Experience authentic traditional yoga, therapeutic healing, and guided meditation at Arunayoga Banjara Hills, Hyderabad."
        primaryButtonText="Book a Free Trial Class"
        primaryButtonHref="/contact"
        secondaryButtonText="Contact Arunayoga Today"
        secondaryButtonHref="tel:+919876543210"
      />
    </div>
  );
}
