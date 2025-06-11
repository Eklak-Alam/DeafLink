import { Footer } from "@/components/Footer";
import { LandingPage } from "@/components/LandingPage";
import { ServicesSection, TeamCards } from "@/components/TeamCard";
import { MissionVisionSection, TestimonialsSection } from "@/components/MissionVisionSection";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <>
    <BackgroundBeams />
    <LandingPage />
    <MissionVisionSection />
    <TeamCards />
    <Footer />
    </>
  );
}
