import { ClientsSection } from "@/components/ClientsSection";
import { Footer } from "@/components/Footer";
import { LandingPage } from "@/components/LandingPage";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <>
    <BackgroundBeams />
    <LandingPage />
    <ClientsSection />
    <ServicesSection />
    <StatsSection />
    <TestimonialsSection />
    <Footer />
    </>
  );
}
