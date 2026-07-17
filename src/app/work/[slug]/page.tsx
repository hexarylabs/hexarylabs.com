import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CaseVisual } from "@/components/visuals/CaseVisual";
import { CtaBand } from "@/components/sections/CtaBand";
import { work } from "@/content/work";

type Params = { slug: string };

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = work.find((w) => w.slug === slug);
  if (!study) return {};

  return { title: study.title, description: study.summary };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = work.find((w) => w.slug === slug);
  if (!study) notFound();

  return (
    <>
      <PageHero
        eyebrow={study.client ?? "Case Study"}
        title={study.title}
        intro={study.summary}
      />

      <Section tone="light">
        <Container>
          <CaseVisual seed={study.visualSeed} />

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.25fr]">
            <h2 className="text-[1.3125rem] leading-[1.2] md:text-[1.625rem] lg:text-h3">
              Scope
            </h2>
            <ul className="grid h-fit gap-px border-[0.8px] border-grey-200 bg-grey-200 sm:grid-cols-2">
              {study.scope.map((s) => (
                <li
                  key={s}
                  className="bg-base p-6 font-display text-body-lg text-contrast-2"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* ⚠️ PLACEHOLDER: full narrative, imagery and verified results to come. */}
          <p className="mt-12 max-w-[60ch] text-body-lg text-grey-600">
            A full write-up of this engagement is in progress.
          </p>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
