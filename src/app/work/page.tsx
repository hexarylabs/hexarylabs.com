import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { work } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected engagements from Hexary Labs.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title={
          <>
            Selected
            <span className="text-accent"> Work</span>
          </>
        }
        intro="A sample of the systems we've designed and built. Each one started as a problem someone couldn't solve with the tools they had."
      />

      <Section tone="light">
        <Container>
          {/* Keeps the heading outline h1→h2→h3; visually redundant here. */}
          <h2 className="sr-only">All case studies</h2>
          <div className="flex flex-col gap-10">
            {work.map((study, i) => (
              <Reveal key={study.slug} delay={i * 60}>
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
