"use client";

import Hero from "@/components/home/Hero";
import TrustIndicators from "@/components/home/TrustIndicators";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesOverview from "@/components/home/ServicesOverview";
import TargetAudience from "@/components/home/TargetAudience";
import CommunityShowcase from "@/components/home/CommunityShowcase";
import Testimonials from "@/components/home/Testimonials";
import MediaCoverage from "@/components/home/MediaCoverage";
import Certifications from "@/components/home/Certifications";
import BlogList from "@/components/blog/BlogList";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <Hero />
            <TrustIndicators />
            <AboutPreview />
            <ServicesOverview />
            <TargetAudience />
            <CommunityShowcase />
            <Testimonials />
            <MediaCoverage />
            <Certifications />
            <BlogList limit={3} />
        </main>
    );
}
