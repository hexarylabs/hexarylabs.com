import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceRow } from "@/components/cards/ServiceRow";
import { services } from "@/content/services";

export function ServicesSection() {
  return (
    <Section tone="muted">
      <Container>
        <SectionHeader
          title="Our Services"
          action={{ label: "See all Services", href: "/services" }}
        />
        <ul className="border-t-[0.8px] border-grey-200">
          {services.map((service) => (
            <ServiceRow key={service.slug} service={service} />
          ))}
        </ul>
      </Container>
    </Section>
  );
}
