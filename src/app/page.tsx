import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { StatsBand } from "@/components/sections/StatsBand";
import { WorkSection } from "@/components/sections/WorkSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TechStack } from "@/components/sections/TechStack";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CtaBand } from "@/components/sections/CtaBand";

/**
 * Section order mirrors the reference's storytelling arc — claim → proof →
 * work → capability → trust → ask — with dark bands punctuating the light ones.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <StatsBand />
      <WorkSection />
      <ServicesSection />
      <TechStack />
      <ProcessSection />
      <CtaBand />
    </>
  );
}
