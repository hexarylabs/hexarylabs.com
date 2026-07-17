import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { process } from "@/content/process";

/**
 * Occupies the slot the reference fills with testimonials + awards. We have
 * neither and won't invent them, so this says something true instead while
 * preserving the page's rhythm.
 */
export function ProcessSection() {
  return (
    <Section tone="muted">
      <Container>
        <SectionHeader
          title={
            <>
              How We
              <span className="text-accent"> Work</span>
            </>
          }
        />

        <ol className="grid gap-px border-[0.8px] border-grey-200 bg-grey-200 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <li key={step.number} className="bg-base-2">
              <Reveal delay={i * 60} className="h-full">
                <div className="flex h-full flex-col gap-4 p-8">
                  <span className="font-display text-h4 font-medium text-accent">
                    {step.number}
                  </span>
                  <h3 className="text-[1.3125rem] leading-[1.2]">{step.title}</h3>
                  <p className="text-body text-grey-600">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
