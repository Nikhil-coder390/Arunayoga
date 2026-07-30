import type { Metadata } from "next";
import TrainingHero from "@/components/teacher-training/TrainingHero";
import CourseLevels from "@/components/teacher-training/CourseLevels";
import CurriculumHighlights from "@/components/teacher-training/CurriculumHighlights";
import FacultyPreview from "@/components/teacher-training/FacultyPreview";
import FAQApplication from "@/components/teacher-training/FAQApplication";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import { constructMetadata } from "@/lib/generateMetadata";
import {
  getWebPageSchema,
  getCourseSchema,
  getFAQSchema,
  getBreadcrumbSchema,
} from "@/data/schemas";
import { TEACHER_TRAINING_FAQS } from "@/data/faqData";
import { PAGE_KEYWORDS } from "@/data/seoKeywords";

export const metadata: Metadata = constructMetadata({
  title: "Yoga Teacher Training Hyderabad — Certified 200/300/500 Hour | Arunayoga",
  description:
    "Join Yoga Alliance certified Yoga Teacher Training Courses in Hyderabad at Arunayoga (ATRI). RYT 200, 300, & 500 hour diploma programs in traditional yoga, anatomy, & teaching methodology.",
  urlPath: "/teacher-training",
  keywords: PAGE_KEYWORDS.teacherTraining,
});

export default function TeacherTrainingPage() {
  const webPageSchema = getWebPageSchema(
    "Yoga Teacher Training Hyderabad | Arunayoga",
    "Join Yoga Alliance certified Yoga Teacher Training Courses in Hyderabad at Arunayoga (ATRI). RYT 200, 300, & 500 hour diploma programs.",
    "/teacher-training"
  );

  const courseSchema = getCourseSchema(
    "Yoga Alliance Teacher Training Program (200/300/500 Hour)",
    "Internationally recognized Yoga Teacher Training certification covering Asanas, Pranayama, Anatomy, Philosophy, and Teaching Practicum."
  );

  const faqSchema = getFAQSchema(TEACHER_TRAINING_FAQS);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Teacher Training", url: "/teacher-training" },
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

      <TrainingHero />

      <div className="container mx-auto px-4 max-w-7xl pt-6">
        <Breadcrumb items={[{ label: "Teacher Training" }]} />
      </div>

      <CourseLevels />
      <CurriculumHighlights />
      <FacultyPreview />
      <FAQApplication />
      <CTASection
        title="Join Yoga Teacher Training in Hyderabad"
        subtitle="Transform your personal practice into an inspiring professional career as a Yoga Alliance Certified Teacher."
        primaryButtonText="Enroll Now"
        primaryButtonHref="/contact"
        secondaryButtonText="Schedule Your Visit"
        secondaryButtonHref="tel:+919876543210"
      />
    </main>
  );
}
