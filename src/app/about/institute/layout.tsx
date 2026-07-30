import type { Metadata } from "next";
import { constructMetadata } from "@/lib/generateMetadata";

export const metadata: Metadata = constructMetadata({
  title: "Arunayoga Campus & Infrastructure | Institute Overview Hyderabad",
  description:
    "Explore the serene campus of Arunayoga Training & Research Institute in Banjara Hills, Hyderabad. Peaceful environment for traditional yoga learning and healing.",
  urlPath: "/about/institute",
});

export default function InstituteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
