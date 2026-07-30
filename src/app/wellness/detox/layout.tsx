import type { Metadata } from "next";
import { constructMetadata } from "@/lib/generateMetadata";

export const metadata: Metadata = constructMetadata({
  title: "Yogic & Ayurvedic Detox Program in Hyderabad | Arunayoga",
  description:
    "Purify your body and mind with authentic Shat Karma, Panchakarma, and Ayurvedic detox treatments at Arunayoga Banjara Hills, Hyderabad.",
  urlPath: "/wellness/detox",
});

export default function DetoxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
