import type { Metadata } from "next";
import { constructMetadata } from "@/lib/generateMetadata";

export const metadata: Metadata = constructMetadata({
  title: "300 Hour Advanced Yoga Teacher Training Course in Hyderabad | RYT-300",
  description:
    "Advance your teaching with 300-Hour Yoga Teacher Training at Arunayoga Hyderabad. Deepen your practice in therapeutic yoga, advanced pranayama, & philosophy.",
  urlPath: "/teacher-training/advanced-300",
  keywords: [
    "300 Hour Yoga Teacher Training Hyderabad",
    "Advanced Yoga Course Hyderabad",
    "RYT 300 Certification",
  ],
});

export default function Advanced300Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
