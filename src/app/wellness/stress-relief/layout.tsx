import type { Metadata } from "next";
import { constructMetadata } from "@/lib/generateMetadata";

export const metadata: Metadata = constructMetadata({
  title: "Stress Relief & Meditation Program Hyderabad | Arunayoga",
  description:
    "Overcome chronic stress, anxiety, and burnout with guided Meditation, Yoga Nidra, and Pranayama sessions at Arunayoga Hyderabad.",
  urlPath: "/wellness/stress-relief",
});

export default function StressReliefLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
