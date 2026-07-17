import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { work } from "@/content/work";

export function WorkSection() {
  return (
    <Section tone="light">
      <Container>
        <SectionHeader
          title="Our Work"
          action={{ label: "See all Work", href: "/work" }}
        />
        <div className="flex flex-col gap-10">
          {work.slice(0, 2).map((study, i) => (
            <Reveal key={study.slug} delay={i * 60}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
