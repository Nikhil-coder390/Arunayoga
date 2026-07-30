import type { Metadata } from "next";
import EventsHero from "@/components/events/EventsHero";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import PastEvents from "@/components/events/PastEvents";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import { constructMetadata } from "@/lib/generateMetadata";
import { getWebPageSchema, getBreadcrumbSchema } from "@/data/schemas";

export const metadata: Metadata = constructMetadata({
  title: "Yoga Events & Workshops in Hyderabad | Arunayoga",
  description:
    "Join upcoming yoga workshops, meditation retreats, international yoga day celebrations, and wellness seminars in Hyderabad at Arunayoga Banjara Hills.",
  urlPath: "/events",
  keywords: [
    "Yoga Events Hyderabad",
    "Yoga Workshops Hyderabad",
    "Meditation Retreat Hyderabad",
    "Arunayoga Events",
  ],
});

export default function EventsPage() {
  const webPageSchema = getWebPageSchema(
    "Yoga Events & Workshops in Hyderabad | Arunayoga",
    "Join upcoming yoga workshops, meditation retreats, and wellness seminars in Hyderabad at Arunayoga.",
    "/events"
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Events", url: "/events" },
  ]);

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <EventsHero />

      <div className="container mx-auto px-4 max-w-7xl pt-6">
        <Breadcrumb items={[{ label: "Events & Workshops" }]} />
      </div>

      <UpcomingEvents />
      <PastEvents />

      <CTASection
        title="Host or Attend a Yoga Workshop"
        subtitle="Stay connected with our community events, international retreats, and wellness seminars."
        primaryButtonText="Contact Us for Events"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Classes"
        secondaryButtonHref="/classes"
      />
    </main>
  );
}
