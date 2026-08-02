import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { work } from "@/content/work";
import { REVEAL_STAGGER_MS } from "@/lib/motion";

export function WorkSection() {
  return (
    <Section tone="light">
      <Container>
        <SectionHeader
          title="Our Work"
          action={{ label: "See all Work", href: "/work" }}
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {work.slice(0, 2).map((study, i) => (
            <Reveal
              key={study.slug}
              variant="fade-up"
              delay={i * REVEAL_STAGGER_MS}
              className="h-full"
            >
              <CaseStudyCard
                study={study}
                sizes="(min-width: 1024px) 620px, 100vw"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
