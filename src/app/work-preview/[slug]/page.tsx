import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { cn } from "@/lib/cn";
import { PreviewPill } from "../PreviewPill";
import { DemoCover, gradients } from "../DemoCover";
import { demoCases } from "@/content/demo/demo-cases";
import type { DemoCase, DemoMetric, DemoSection } from "@/content/demo/demo-cases";

type Params = { slug: string };

export function generateStaticParams() {
  return demoCases.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const demo = demoCases.find((d) => d.slug === slug);

  return {
    title: demo ? `${demo.name} — layout preview` : "Layout preview",
    robots: { index: false, follow: false },
  };
}

const headingClass =
  "text-[1.3125rem] leading-[1.2] md:text-[1.625rem] lg:text-h3";

function MetricGrid({ metrics }: { metrics: DemoMetric[] }) {
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

function InlineMetric({ metric }: { metric: DemoMetric }) {
  return (
    <div className="my-10 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-l-2 border-accent pl-6">
      <p className="font-display text-h3 font-medium text-contrast-2">
        {metric.value}
      </p>
      <p className="text-body-lg text-grey-600">{metric.label}</p>
    </div>
  );
}

function Prose({ section }: { section: DemoSection }) {
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

function PullQuote({ demo, className }: { demo: DemoCase; className?: string }) {
  if (!demo.quote) return null;

  return (
    <figure
      className={cn(
        "border-t-[0.8px] border-b-[0.8px] border-grey-200 py-10",
        className,
      )}
    >
      <blockquote className="max-w-[55ch] text-[1.625rem] leading-[1.3] text-contrast-2 md:text-[2rem]">
        &ldquo;{demo.quote.text}&rdquo;
      </blockquote>
      <figcaption className="mt-6 text-small uppercase tracking-widest text-grey-600">
        {demo.quote.attribution}
      </figcaption>
    </figure>
  );
}

function HeroText({ demo }: { demo: DemoCase }) {
  return (
    <>
      <PreviewPill />
      <h1 className="mt-6 max-w-[22ch] text-[2.125rem] leading-[1.2] tracking-[0.02em] md:text-[3rem] lg:text-h1">
        {demo.name}
      </h1>
      <p className="mt-6 max-w-[60ch] text-body-lg text-grey-600">
        {demo.tagline}
      </p>
    </>
  );
}

function DemoHero({ demo }: { demo: DemoCase }) {
  const { hero } = demo.variant;

  if (hero === "image-fullbleed") {
    return (
      <>
        <DemoCover demo={demo} aspect="aspect-[2.4]" sizes="100vw" eager />
        <section className="border-b-[0.8px] border-grey-100 bg-base pb-14 pt-12 lg:pb-20 lg:pt-16">
          <Container>
            <HeroText demo={demo} />
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
              <HeroText demo={demo} />
            </div>
            {demo.heroMetric && (
              <div className="border-t-[0.8px] border-grey-200 pt-8 lg:border-l-[0.8px] lg:border-t-0 lg:pl-10 lg:pt-0">
                <p className="font-display text-stat font-medium leading-[1.1] text-accent">
                  {demo.heroMetric.value}
                </p>
                <p className="mt-3 max-w-[24ch] text-body-lg text-grey-600">
                  {demo.heroMetric.label}
                </p>
              </div>
            )}
          </div>
        </Container>
      </section>
    );
  }

  if (hero === "gradient") {
    const tone = demo.cover.kind === "gradient" ? demo.cover.tone : "slate";

    return (
      <section
        className={cn(
          "border-b-[0.8px] border-grey-100 pb-16 pt-14 lg:pb-24 lg:pt-20",
          gradients[tone],
        )}
      >
        <Container>
          <PreviewPill />
          <h1 className="mt-6 max-w-[16ch] font-display text-[2.125rem] font-medium leading-[1.15] tracking-[0.01em] text-contrast-2 md:text-[3rem] lg:text-h1">
            {demo.name}
          </h1>
          <p className="mt-6 max-w-[55ch] text-body-lg text-grey-600">
            {demo.tagline}
          </p>
        </Container>
      </section>
    );
  }

  return (
    <section className="border-b-[0.8px] border-grey-100 bg-base pb-14 pt-12 lg:pb-20 lg:pt-18">
      <Container>
        <HeroText demo={demo} />
        <div className="mt-12">
          <DemoCover
            demo={demo}
            aspect={hero === "schematic" ? "aspect-[2.4]" : "aspect-[2.1]"}
            sizes="(min-width: 1200px) 1200px, 100vw"
            eager
            className={hero === "schematic" ? undefined : "border-[0.8px] border-grey-200"}
          />
        </div>
      </Container>
    </section>
  );
}

function SectionedBody({ demo }: { demo: DemoCase }) {
  const blocks = [demo.challenge, demo.approach, demo.solution, demo.results];

  return (
    <>
      {demo.variant.metrics === "grid" && (
        <section data-tone="dark" className="bg-contrast-2 py-10 lg:py-14">
          <Container>
            <MetricGrid metrics={demo.metrics} />
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
                {block.heading === "Solution" && (
                  <div className="mt-10">
                    <p className="mb-4 text-small uppercase tracking-widest text-grey-600">
                      Technology
                    </p>
                    <StackList stack={demo.stack} />
                  </div>
                )}
              </div>
            </div>
          </Container>
        </Section>
      ))}

      {demo.quote && (
        <Section tone="light">
          <Container>
            <PullQuote demo={demo} />
          </Container>
        </Section>
      )}
    </>
  );
}

function NarrativeBody({ demo }: { demo: DemoCase }) {
  const blocks = [demo.challenge, demo.approach, demo.solution, demo.results];
  const inline = demo.variant.metrics === "inline";

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

              {inline && demo.metrics[i] && <InlineMetric metric={demo.metrics[i]} />}

              {block.heading === "Solution" && (
                <div className="mt-10">
                  <p className="mb-4 text-small uppercase tracking-widest text-grey-600">
                    Technology
                  </p>
                  <StackList stack={demo.stack} />
                </div>
              )}

              {block.heading === "Approach" && (
                <PullQuote demo={demo} className="mt-12" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function SidebarBody({ demo }: { demo: DemoCase }) {
  const blocks = [demo.challenge, demo.approach, demo.solution, demo.results];
  const inline = demo.variant.metrics === "inline";

  return (
    <Section tone="light">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-small uppercase tracking-widest text-grey-600">
              At a glance
            </h2>

            <ul className="mt-6 flex flex-col gap-px border-[0.8px] border-grey-200 bg-grey-200">
              {demo.metrics.map((m) => (
                <li key={m.label} className="bg-base p-6">
                  <p className="font-display text-h4 font-medium text-contrast-2">
                    {m.value}
                  </p>
                  <p className="mt-1 text-body text-grey-600">{m.label}</p>
                </li>
              ))}
            </ul>

            <p className="mb-4 mt-10 text-small uppercase tracking-widest text-grey-600">
              Technology
            </p>
            <ul className="flex flex-col gap-px border-[0.8px] border-grey-200 bg-grey-200">
              {demo.stack.map((s) => (
                <li
                  key={s}
                  className="bg-base p-4 font-display text-body text-contrast-2"
                >
                  {s}
                </li>
              ))}
            </ul>
          </aside>

          <div>
            {blocks.map((block, i) => (
              <div key={block.heading} className={i > 0 ? "mt-14" : undefined}>
                <h2 className={headingClass}>{block.heading}</h2>
                <div className="mt-6">
                  <Prose section={block} />
                </div>
                {inline && demo.metrics[i] && <InlineMetric metric={demo.metrics[i]} />}
              </div>
            ))}

            <PullQuote demo={demo} className="mt-14" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default async function DemoCasePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const demo = demoCases.find((d) => d.slug === slug);
  if (!demo) notFound();

  const { body } = demo.variant;

  return (
    <>
      <DemoHero demo={demo} />

      {body === "sectioned" && <SectionedBody demo={demo} />}
      {body === "narrative" && <NarrativeBody demo={demo} />}
      {body === "sidebar" && <SidebarBody demo={demo} />}

      <Section tone="dark">
        <Container>
          <div className="flex flex-col items-start gap-6">
            <PreviewPill />
            <p className="max-w-[60ch] text-body-lg text-grey-300">
              This layout is one of {demoCases.length} in the preview set:{" "}
              {demo.variantLabel.toLowerCase()}.
            </p>
            <Link
              href="/work-preview"
              className="inline-flex items-center gap-3 font-display text-body-lg font-medium text-white transition-colors duration-300 hover:text-accent-hi"
            >
              Back to all layouts
              <ArrowIcon className="size-4" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
