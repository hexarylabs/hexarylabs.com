import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { cn } from "@/lib/cn";
import { CtaBand } from "@/components/sections/CtaBand";
import { CaseCover, gradients } from "../CaseCover";
import { work } from "@/content/work";
import type { CaseStudy, Metric, CaseSection } from "@/content/work";

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

const headingClass =
  "text-[1.3125rem] leading-[1.2] md:text-[1.625rem] lg:text-h3";

function MetricGrid({ metrics }: { metrics: Metric[] }) {
  const cols =
    metrics.length === 3
      ? "sm:grid-cols-3"
      : metrics.length === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <ul className={cn("grid gap-px border-[0.8px] border-grey-700 bg-grey-700", cols)}>
      {metrics.map((m) => (
        <li key={m.label} className="bg-contrast-2 p-8">
          <p className="font-display text-h3 font-medium text-white">{m.value}</p>
          <p className="mt-2 text-body text-grey-300">{m.label}</p>
        </li>
      ))}
    </ul>
  );
}

function InlineMetric({ metric }: { metric: Metric }) {
  return (
    <div className="my-10 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-l-2 border-accent pl-6">
      <p className="font-display text-h3 font-medium text-contrast-2">
        {metric.value}
      </p>
      <p className="text-body-lg text-grey-600">{metric.label}</p>
    </div>
  );
}

function Prose({ section }: { section: CaseSection }) {
  return (
    <div className="flex flex-col gap-6">
      {section.body.map((p) => (
        <p key={p} className="text-body-lg text-grey-600">
          {p}
        </p>
      ))}
    </div>
  );
}

function StackList({ stack }: { stack: string[] }) {
  return (
    <ul
      className={cn(
        "grid gap-px border-[0.8px] border-grey-200 bg-grey-200",
        stack.length % 2 === 0 && "sm:grid-cols-2",
      )}
    >
      {stack.map((s) => (
        <li key={s} className="bg-base p-5 font-display text-body text-contrast-2">
          {s}
        </li>
      ))}
    </ul>
  );
}

function PullQuote({ study, className }: { study: CaseStudy; className?: string }) {
  if (!study.quote) return null;

  return (
    <figure
      className={cn(
        "border-t-[0.8px] border-b-[0.8px] border-grey-200 py-10",
        className,
      )}
    >
      <blockquote className="max-w-[55ch] text-[1.625rem] leading-[1.3] text-contrast-2 md:text-[2rem]">
        &ldquo;{study.quote.text}&rdquo;
      </blockquote>
      <figcaption className="mt-6 text-small uppercase tracking-widest text-grey-600">
        {study.quote.attribution}
      </figcaption>
    </figure>
  );
}

function HeroText({ study }: { study: CaseStudy }) {
  return (
    <>
      <p className="text-small uppercase tracking-widest text-grey-600">
        {study.client}
      </p>
      <h1 className="mt-6 max-w-[20ch] text-[2.125rem] leading-[1.2] tracking-[0.02em] md:text-[3rem] lg:text-h1">
        {study.title}
      </h1>
      <p className="mt-6 max-w-[60ch] text-body-lg text-grey-600">
        {study.summary}
      </p>
    </>
  );
}

function CaseHero({ study }: { study: CaseStudy }) {
  const { hero } = study.variant;

  if (hero === "image-fullbleed") {
    return (
      <>
        <CaseCover cover={study.cover} title={study.title} aspect="aspect-[2.4]" sizes="100vw" eager />
        <section className="border-b-[0.8px] border-grey-100 bg-base pb-14 pt-12 lg:pb-20 lg:pt-16">
          <Container>
            <HeroText study={study} />
          </Container>
        </section>
      </>
    );
  }

  if (hero === "text-metric") {
    return (
      <section className="border-b-[0.8px] border-grey-100 bg-base pb-14 pt-12 lg:pb-20 lg:pt-18">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <HeroText study={study} />
            </div>
            {study.heroMetric && (
              <div className="border-t-[0.8px] border-grey-200 pt-8 lg:border-l-[0.8px] lg:border-t-0 lg:pl-10 lg:pt-0">
                <p className="font-display text-stat font-medium leading-[1.1] text-accent">
                  {study.heroMetric.value}
                </p>
                <p className="mt-3 max-w-[24ch] text-body-lg text-grey-600">
                  {study.heroMetric.label}
                </p>
              </div>
            )}
          </div>
        </Container>
      </section>
    );
  }

  if (hero === "gradient") {
    const tone = study.cover.kind === "gradient" ? study.cover.tone : "slate";

    return (
      <section
        className={cn(
          "border-b-[0.8px] border-grey-100 pb-16 pt-14 lg:pb-24 lg:pt-20",
          gradients[tone],
        )}
      >
        <Container>
          <p className="text-small uppercase tracking-widest text-grey-600">
            {study.client}
          </p>
          <h1 className="mt-6 max-w-[16ch] font-display text-[2.125rem] font-medium leading-[1.15] tracking-[0.01em] text-contrast-2 md:text-[3rem] lg:text-h1">
            {study.title}
          </h1>
          <p className="mt-6 max-w-[55ch] text-body-lg text-grey-600">
            {study.summary}
          </p>
        </Container>
      </section>
    );
  }

  return (
    <section className="border-b-[0.8px] border-grey-100 bg-base pb-14 pt-12 lg:pb-20 lg:pt-18">
      <Container>
        <HeroText study={study} />
        <div className="mt-12">
          <CaseCover
            cover={study.cover}
            title={study.title}
            aspect={
              hero === "schematic"
                ? "aspect-[4/3] sm:aspect-[1.8] lg:aspect-[2.4]"
                : "aspect-[2.1]"
            }
            sizes="(min-width: 1200px) 1200px, 100vw"
            eager
            className={hero === "schematic" ? undefined : "border-[0.8px] border-grey-200"}
          />
        </div>
      </Container>
    </section>
  );
}

function SectionedBody({ study }: { study: CaseStudy }) {
  const blocks = [study.challenge, study.approach, study.solution, study.results];

  return (
    <>
      {study.variant.metrics === "grid" && (
        <section data-tone="dark" className="bg-contrast-2 py-10 lg:py-14">
          <Container>
            <MetricGrid metrics={study.metrics} />
          </Container>
        </section>
      )}

      {blocks.map((block, i) => (
        <Section key={block.heading} tone={i % 2 === 0 ? "light" : "muted"}>
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1fr_1.8fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <h2 className={headingClass}>{block.heading}</h2>
              </div>
              <div>
                <Prose section={block} />
                {block.heading === "Solution" && study.stack.length > 0 && (
                  <div className="mt-10">
                    <p className="mb-4 text-small uppercase tracking-widest text-grey-600">
                      Technology
                    </p>
                    <StackList stack={study.stack} />
                  </div>
                )}
              </div>
            </div>
          </Container>
        </Section>
      ))}

      {study.quote && (
        <Section tone="light">
          <Container>
            <PullQuote study={study} />
          </Container>
        </Section>
      )}
    </>
  );
}

function NarrativeBody({ study }: { study: CaseStudy }) {
  const blocks = [study.challenge, study.approach, study.solution, study.results];
  const inline = study.variant.metrics === "inline";

  return (
    <Section tone="light">
      <Container>
        <div className="mx-auto max-w-[68ch]">
          {blocks.map((block, i) => (
            <div key={block.heading} className={i > 0 ? "mt-14" : undefined}>
              <h2 className={headingClass}>{block.heading}</h2>
              <div className="mt-6">
                <Prose section={block} />
              </div>

              {inline && study.metrics[i] && <InlineMetric metric={study.metrics[i]} />}

              {block.heading === "Solution" && study.stack.length > 0 && (
                <div className="mt-10">
                  <p className="mb-4 text-small uppercase tracking-widest text-grey-600">
                    Technology
                  </p>
                  <StackList stack={study.stack} />
                </div>
              )}

              {block.heading === "Approach" && (
                <PullQuote study={study} className="mt-12" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function SidebarBody({ study }: { study: CaseStudy }) {
  const blocks = [study.challenge, study.approach, study.solution, study.results];
  const inline = study.variant.metrics === "inline";

  return (
    <Section tone="light">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-small uppercase tracking-widest text-grey-600">
              At a glance
            </h2>

            <ul className="mt-6 flex flex-col gap-px border-[0.8px] border-grey-200 bg-grey-200">
              {study.metrics.map((m) => (
                <li key={m.label} className="bg-base p-6">
                  <p className="font-display text-h4 font-medium text-contrast-2">
                    {m.value}
                  </p>
                  <p className="mt-1 text-body text-grey-600">{m.label}</p>
                </li>
              ))}
            </ul>

            {study.stack.length > 0 && (
              <>
                <p className="mb-4 mt-10 text-small uppercase tracking-widest text-grey-600">
                  Technology
                </p>
                <ul className="flex flex-col gap-px border-[0.8px] border-grey-200 bg-grey-200">
                  {study.stack.map((s) => (
                    <li
                      key={s}
                      className="bg-base p-4 font-display text-body text-contrast-2"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </aside>

          <div>
            {blocks.map((block, i) => (
              <div key={block.heading} className={i > 0 ? "mt-14" : undefined}>
                <h2 className={headingClass}>{block.heading}</h2>
                <div className="mt-6">
                  <Prose section={block} />
                </div>
                {inline && study.metrics[i] && <InlineMetric metric={study.metrics[i]} />}
              </div>
            ))}

            <PullQuote study={study} className="mt-14" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = work.find((w) => w.slug === slug);
  if (!study) notFound();

  const { body } = study.variant;

  return (
    <>
      <CaseHero study={study} />

      {body === "sectioned" && <SectionedBody study={study} />}
      {body === "narrative" && <NarrativeBody study={study} />}
      {body === "sidebar" && <SidebarBody study={study} />}

      {study.links && (
        <Section tone="light">
          <Container>
            <h2 className="sr-only">External links</h2>
            <div className="flex flex-col gap-4 border-t-[0.8px] border-grey-200 pt-8 sm:flex-row sm:flex-wrap sm:gap-x-8">
              {study.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 text-body text-grey-600 underline-offset-4 transition-colors duration-300 hover:text-accent hover:underline"
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
