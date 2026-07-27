import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { CtaBand } from "@/components/sections/CtaBand";
import { CaseCover } from "./CaseCover";
import { work, WORK_INTRO } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected engagements and in-house products from Hexary Labs.",
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
        intro={WORK_INTRO}
      />

      <Section tone="light">
        <Container>
          <h2 className="sr-only">All case studies</h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {work.map((study, i) => (
              <Reveal key={study.slug} delay={i * 60} className="h-full">
                <article className="group relative flex h-full flex-col border-[0.8px] border-grey-200 bg-base">
                  <CaseCover
                    cover={study.cover}
                    title={study.title}
                    aspect="aspect-[1.9]"
                    sizes="(min-width: 1024px) 620px, 100vw"
                  />

                  <div className="flex flex-1 flex-col gap-4 p-8">
                    <p className="text-small uppercase tracking-widest text-grey-600">
                      {study.client}
                    </p>

                    <h3 className="text-[1.3125rem] leading-[1.2] md:text-[1.625rem]">
                      <Link
                        href={`/work/${study.slug}`}
                        className="before:absolute before:inset-0"
                      >
                        {study.title}
                      </Link>
                    </h3>

                    <p className="text-body-lg text-grey-600">{study.summary}</p>

                    <span className="mt-auto inline-flex items-center gap-3 border-t-[0.8px] border-grey-200 pt-4 font-display text-body font-medium text-contrast-2 transition-colors duration-300 group-hover:text-accent">
                      Read Case Study
                      <ArrowIcon className="size-3.5" />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
