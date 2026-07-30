"use client";

import Hero from "@/components/home/Hero";
import TrustIndicators from "@/components/home/TrustIndicators";
import MediaCoverage from "@/components/home/MediaCoverage";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesOverview from "@/components/home/ServicesOverview";
import TargetAudience from "@/components/home/TargetAudience";
import Certifications from "@/components/home/Certifications";
import Testimonials from "@/components/home/Testimonials";
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
