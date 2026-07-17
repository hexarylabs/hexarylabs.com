import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { whatWeDo } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hexary Labs is a software engineering studio — an embedded partner for custom platforms, system integrations, and AI features.",
};

/** Body copy is supplied verbatim via `whatWeDo`. Headings/eyebrow are ours. */
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
        intro={whatWeDo.lede}
      />

      <Section tone="light">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr]">
            <h2 className="text-[1.3125rem] leading-[1.2] md:text-[1.625rem] lg:text-h3">
              What we do
            </h2>
            <div className="flex flex-col gap-6 text-body-lg text-grey-600">
              {whatWeDo.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <ProcessSection />
      <CtaBand />
    </>
  );
}
