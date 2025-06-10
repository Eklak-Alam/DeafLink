import { Footer } from "@/components/Footer";
import { LandingPage } from "@/components/LandingPage";
import { ServicesSection, TeamCards } from "@/components/TeamCard";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <>
    <BackgroundBeams />
    <LandingPage />
    <TeamCards />
    <StatsSection />
    <TestimonialsSection />
    <Footer />
    </>
  );
}
