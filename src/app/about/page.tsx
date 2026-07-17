import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hexary Labs is an engineering-led product studio. Small team, senior people, shipped work.",
};

/** ⚠️ PLACEHOLDER COPY throughout — rewrite in Hexary's voice. */
export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Engineering-led, by
            <span className="text-accent"> design</span>
          </>
        }
        intro="We're a small, senior team that designs and builds software end to end. No handoffs between agencies, no junior bench, no surprises in month three."
      />

      <Section tone="light">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr]">
            <h2 className="text-[1.3125rem] leading-[1.2] md:text-[1.625rem] lg:text-h3">
              What that means
            </h2>
            <div className="flex flex-col gap-6 text-body-lg text-grey-600">
              <p>
                Most product problems are engineering problems wearing a design
                costume. A flow is confusing because the data model is confusing.
                A roadmap slips because the risky part got scheduled last.
              </p>
              <p>
                So we put engineers in the room from the first conversation. The
                people who will build it are the people scoping it — which is why
                our estimates tend to survive contact with reality.
              </p>
              <p>
                We work in short cycles, ship something usable early, and hand
                over a system your team can own without us.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <ProcessSection />
      <CtaBand />
    </>
  );
}
