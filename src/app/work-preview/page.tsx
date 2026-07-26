import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { PreviewPill } from "./PreviewPill";
import { DemoCover } from "./DemoCover";
import { demoCases, DEMO_INTRO } from "@/content/demo/demo-cases";

export const metadata: Metadata = {
  title: "Case study layout preview",
  robots: { index: false, follow: false },
};

export default function WorkPreviewPage() {
  return (
    <>
      <section className="border-b-[0.8px] border-grey-100 bg-base pb-14 pt-12 lg:pb-20 lg:pt-18">
        <Container>
          <PreviewPill />
          <h1 className="mt-6 max-w-[20ch] text-[2.125rem] leading-[1.2] tracking-[0.02em] md:text-[3rem] lg:text-h1">
            Case study layout preview
          </h1>
          <p className="mt-8 max-w-[70ch] text-body-lg text-grey-600">
            {DEMO_INTRO}
          </p>
        </Container>
      </section>

      <Section tone="light">
        <Container>
          <h2 className="sr-only">Demo case studies</h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {demoCases.map((demo, i) => (
              <Reveal key={demo.slug} delay={i * 60} className="h-full">
                <article className="group relative flex h-full flex-col border-[0.8px] border-grey-200 bg-base">
                  <DemoCover
                    demo={demo}
                    aspect="aspect-[1.9]"
                    sizes="(min-width: 1024px) 620px, 100vw"
                  />

                  <div className="flex flex-1 flex-col gap-4 p-8">
                    <PreviewPill />

                    <h3 className="text-[1.3125rem] leading-[1.2] md:text-[1.625rem]">
                      <Link
                        href={`/work-preview/${demo.slug}`}
                        className="before:absolute before:inset-0"
                      >
                        {demo.name}
                      </Link>
                    </h3>

                    <p className="text-body-lg text-grey-600">{demo.tagline}</p>

                    <p className="mt-auto border-t-[0.8px] border-grey-200 pt-4 text-small uppercase tracking-widest text-grey-600">
                      {demo.variantLabel}
                    </p>

                    <span className="inline-flex items-center gap-3 font-display text-body font-medium text-contrast-2 transition-colors duration-300 group-hover:text-accent">
                      View this layout
                      <ArrowIcon className="size-3.5" />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
