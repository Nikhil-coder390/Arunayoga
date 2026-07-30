import type { Metadata } from "next";
import { constructMetadata } from "@/lib/generateMetadata";

export const metadata: Metadata = constructMetadata({
  title: "200 Hour Yoga Teacher Training Course in Hyderabad | Diploma RYT-200",
  description:
    "Enroll in Yoga Alliance certified 200-Hour Diploma in Yoga at Arunayoga Hyderabad. Master asanas, pranayama, anatomy, and teaching methodology.",
  urlPath: "/teacher-training/diploma-200",
  keywords: [
    "200 Hour Yoga Teacher Training Hyderabad",
    "Diploma in Yoga Hyderabad",
    "RYT 200 Certification",
  ],
});

export default function Diploma200Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
