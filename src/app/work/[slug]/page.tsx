import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { CtaBand } from "@/components/sections/CtaBand";
import { cn } from "@/lib/cn";
import { work, type CaseStudy } from "@/content/work";

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

const contentHeading = "text-[1.3125rem] leading-[1.2] md:text-[1.625rem] lg:text-h3";

/** Heading beside one or more paragraphs — "The Challenge" / "Our Role" / "How We Approached It". */
function TwoColProse({ heading, body }: { heading: string; body: string[] }) {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr]">
      <h2 className={contentHeading}>{heading}</h2>
      <div className="flex flex-col gap-6 text-body-lg text-grey-600">
        {body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  );
}

/** Bold lead-in + paragraph, stacked — "What We Built". */
function FeatureList({ features }: { features: { heading: string; body: string }[] }) {
  return (
    <div className="flex flex-col border-t-[0.8px] border-grey-200">
      {features.map((f) => (
        <div key={f.heading} className="border-b-[0.8px] border-grey-200 py-8">
          <h3 className="font-display text-body-lg font-medium text-contrast-2">
            {f.heading}
          </h3>
          <p className="mt-3 max-w-[70ch] text-body-lg text-grey-600">{f.body}</p>
        </div>
      ))}
    </div>
  );
}

/** Short, parallel bullets — "Results". */
function BulletGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-px border-[0.8px] border-grey-200 bg-grey-200 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="bg-base p-6 font-display text-body-lg text-contrast-2">
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Builds the optional deeper-content blocks present for this study, in order. */
function buildBlocks(study: CaseStudy) {
  const blocks: { key: string; content: React.ReactNode }[] = [];

  if (study.challenge) {
    blocks.push({
      key: "challenge",
      content: <TwoColProse heading="The Challenge" body={[study.challenge]} />,
    });
  }

  if (study.role) {
    blocks.push({
      key: "role",
      content: <TwoColProse heading="Our Role" body={[study.role]} />,
    });
  }

  if (study.features) {
    blocks.push({
      key: "features",
      content: (
        <>
          <SectionHeader title="What We Built" />
          <FeatureList features={study.features} />
        </>
      ),
    });
  }

  if (study.approach) {
    blocks.push({
      key: "approach",
      content: <TwoColProse heading="How We Approached It" body={study.approach} />,
    });
  }

  if (study.resultsList) {
    blocks.push({
      key: "results",
      content: (
        <>
          <SectionHeader title="Results" />
          <BulletGrid items={study.resultsList} />
        </>
      ),
    });
  }

  if (study.stack) {
    blocks.push({
      key: "stack",
      content: (
        <>
          <h2 className={contentHeading}>Stack</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {study.stack.map((s) => (
              <span
                key={s}
                className="border-[0.8px] border-grey-200 px-3 py-1.5 text-body text-grey-600"
              >
                {s}
              </span>
            ))}
          </div>
        </>
      ),
    });
  }

  return blocks;
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = work.find((w) => w.slug === slug);
  if (!study) notFound();

  const blocks = buildBlocks(study);

  return (
    <>
      <PageHero
        eyebrow={study.client ?? "Case Study"}
        title={study.title}
        intro={study.summary}
      />

      <Section tone="light">
        <Container>
          {(study.categories || study.liveUrl) && (
            <div className="mb-8 flex flex-wrap items-center gap-4">
              {study.categories && (
                <div className="flex flex-wrap gap-2">
                  {study.categories.map((c) => (
                    <span
                      key={c}
                      className="border-[0.8px] border-grey-200 px-3 py-1 text-small uppercase tracking-widest text-grey-600"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}
              {study.liveUrl && (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-2 font-display text-body font-medium text-contrast-2 transition-colors duration-300 hover:text-accent"
                >
                  Visit {new URL(study.liveUrl).hostname}
                  <ArrowIcon className="size-3.5" />
                </a>
              )}
            </div>
          )}

          <Image
            src={study.image}
            alt={study.imageAlt}
            width={1280}
            height={1000}
            sizes="(min-width: 1200px) 1200px, 100vw"
            className={cn(
              "aspect-[1.28] w-full object-cover",
              study.imagePosition === "left" ? "object-left" : "object-top",
            )}
          />

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

          {blocks.length === 0 && (
            <p className="mt-12 max-w-[60ch] text-body-lg text-grey-600">
              A full write-up of this engagement is in progress.
            </p>
          )}
        </Container>
      </Section>

      {blocks.map((block, i) => (
        <Section key={block.key} tone={i % 2 === 0 ? "muted" : "light"}>
          <Container>{block.content}</Container>
        </Section>
      ))}

      {study.links && (
        <Section tone="light">
          <Container>
            <h2 className="sr-only">External links</h2>
            <div className="flex flex-wrap gap-x-8 gap-y-4 border-t-[0.8px] border-grey-200 pt-8">
              {study.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-body text-grey-600 underline-offset-4 transition-colors duration-300 hover:text-accent hover:underline"
                >
                  {link.label}
                  <ArrowIcon className="size-3" />
                </a>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
