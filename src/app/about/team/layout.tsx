import type { Metadata } from "next";
import { constructMetadata } from "@/lib/generateMetadata";

export const metadata: Metadata = constructMetadata({
  title: "Our Expert Faculty & Doctors | Arunayoga Team Hyderabad",
  description:
    "Meet our team of experienced Yoga Faculty, Lead Trainers, Ayurvedic Doctors, Naturopaths, and Homeopaths at Arunayoga Hyderabad.",
  urlPath: "/about/team",
});

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
