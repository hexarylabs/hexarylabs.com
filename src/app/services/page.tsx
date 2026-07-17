import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ServiceRow } from "@/components/cards/ServiceRow";
import { CtaBand } from "@/components/sections/CtaBand";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Product strategy, design, software engineering and AI engineering — delivered by one team.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            What We
            <span className="text-accent"> Do</span>
          </>
        }
        intro="Four capabilities, one team. Most engagements use more than one — strategy that leads into design, design that leads into a shipped system."
      />

      <Section tone="muted">
        <Container>
          {/* Names the list for assistive tech and keeps the outline h1→h2→h3.
              Visually redundant next to the page hero, so it's sr-only. */}
          <h2 className="sr-only">All services</h2>
          <ul className="border-t-[0.8px] border-grey-200">
            {services.map((service) => (
              <ServiceRow key={service.slug} service={service} />
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
