import FounderHero from "@/components/about/FounderHero";
import YogaLineageJourney from "@/components/about/YogaLineageJourney";
import Achievements from "@/components/about/Achievements";

export const metadata = {
    title: "Yogini Arunadevi | Founder - Arunayoga",
    description: "Meet Yogini Arunadevi, the visionary founder of ATRI (Arunayoga Training & Research Institute) with over 35 years of experience.",
};

export default function FounderPage() {
    return (
        <main className="min-h-screen">
            <FounderHero />
            <YogaLineageJourney />
            <Achievements />
        </main>
    );
}
