import type { Metadata } from "next";
import { constructMetadata } from "@/lib/generateMetadata";

export const metadata: Metadata = constructMetadata({
  title: "Ayurvedic & Naturopathy Treatments in Hyderabad | Arunayoga",
  description:
    "Explore Shirodhara, Abhyanga, Kati Vasti, and Naturopathy therapies for paralysis, spine care, and joint pain at Arunayoga Hyderabad.",
  urlPath: "/wellness/treatments",
});

export default function TreatmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
