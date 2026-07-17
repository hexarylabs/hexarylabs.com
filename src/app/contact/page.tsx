import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CalendlyEmbed } from "@/components/sections/CalendlyEmbed";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a 30-minute product discovery call with Hexary Labs. Tell us what you're building and we'll map out how to get there.",
};

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/hexary-labs/30min";

export default function ContactPage() {
  return (
    <Section tone="light">
      <Container>
        <Reveal className="mx-auto max-w-[46rem] text-center">
          <h1 className="text-[2.125rem] leading-[1.2] tracking-[0.02em] md:text-[3rem] lg:text-h1">
            Let&rsquo;s Get Started.
          </h1>
          <p className="mx-auto mt-8 max-w-[52ch] text-body-lg text-grey-600">
            Book a 30-minute product discovery call. Tell us what you&rsquo;re
            building and we&rsquo;ll map out how to get there.
          </p>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-12 max-w-[56rem] lg:mt-16">
          {/* TODO: replace with real Calendly link */}
          <div className="overflow-hidden border-[0.8px] border-grey-200 bg-base p-2 sm:p-4">
            <CalendlyEmbed url={CALENDLY_URL} />
          </div>

          <p className="mt-8 text-center text-body text-grey-600">
            Prefer email? Reach us at{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-contrast-2 underline underline-offset-4 transition-colors duration-300 hover:text-accent"
            >
              {site.email}
            </a>
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
