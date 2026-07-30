import type { Metadata } from "next";
import { constructMetadata } from "@/lib/generateMetadata";

export const metadata: Metadata = constructMetadata({
  title: "500 Hour PG Diploma in Yoga Teacher Training Hyderabad | RYT-500",
  description:
    "Comprehensive 500-Hour Postgraduate Diploma in Yoga at Arunayoga Hyderabad. Become a Master Yoga Educator and Certified Yoga Therapist.",
  urlPath: "/teacher-training/pg-diploma-500",
  keywords: [
    "500 Hour Yoga Teacher Training Hyderabad",
    "PG Diploma in Yoga Hyderabad",
    "RYT 500 Certification",
  ],
});

export default function PgDiploma500Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
