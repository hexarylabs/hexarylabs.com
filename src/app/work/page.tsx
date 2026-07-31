import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { CaseCover } from "./CaseCover";
import { EdenAnimatedHero } from "./EdenAnimatedHero";
import { KeepComingAnimatedHero } from "./KeepComingAnimatedHero";
import { MedicalRecordsAnimatedHero } from "./MedicalRecordsAnimatedHero";
import { work, WORK_INTRO } from "@/content/work";
import { JsonLd, breadcrumbList } from "@/lib/jsonld";
import { REVEAL_STAGGER_MS } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected engagements and in-house products, from an AI-native creative studio to PHI-safe enterprise platforms and production SaaS.",
  alternates: { canonical: "/work" },
};

const breadcrumbJsonLd = breadcrumbList([
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
]);

const CLIENT_TAGS: Record<string, string> = {
  eden: "Client · Eden Labs",
  keepcoming: "In-house product",
  "medical-records-platform": "Client · Anonymized",
  truecell: "Client · TrueCell",
  kinein: "Client · Kinein",
  "b2b-access": "Client · B2B Access",
};

export default function WorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <PageHero
        eyebrow="Work"
        title={
          <>
            Selected
            <span className="text-accent"> Work</span>
          </>
        }
        intro={WORK_INTRO}
        staggerReveal
      />

      <Section tone="light">
        <Container>
          <h2 className="sr-only">All case studies</h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {work.map((study, i) => {
              return (
                <Reveal
                  key={study.slug}
                  variant="fade-up"
                  delay={i * REVEAL_STAGGER_MS}
                  className="h-full"
                >
                  <article className="group relative flex h-full flex-col border-[0.8px] border-grey-200 bg-base">
                    {study.slug === "eden" ? (
                      <EdenAnimatedHero
                        aspect="aspect-[4/3] sm:aspect-[1.6] lg:aspect-[1.9]"
                        sizes="(min-width: 1024px) 620px, 100vw"
                        className="border-b-[0.8px] border-grey-200"
                      />
                    ) : study.slug === "keepcoming" ? (
                      <KeepComingAnimatedHero
                        aspect="aspect-[4/3] sm:aspect-[1.6] lg:aspect-[1.9]"
                        sizes="(min-width: 1024px) 620px, 100vw"
                        className="border-b-[0.8px] border-grey-200"
                      />
                    ) : study.slug === "medical-records-platform" ? (
                      <MedicalRecordsAnimatedHero
                        aspect="aspect-[4/3] sm:aspect-[1.6] lg:aspect-[1.9]"
                        className="border-b-[0.8px] border-grey-200"
                      />
                    ) : (
                      <CaseCover
                        cover={study.cover}
                        title={study.title}
                        aspect={
                          study.cover.kind === "schematic"
                            ? "aspect-[4/3] sm:aspect-[1.6] lg:aspect-[1.9]"
                            : "aspect-[1.9]"
                        }
                        sizes="(min-width: 1024px) 620px, 100vw"
                        hoverZoom
                      />
                    )}

                    <div className="flex flex-1 flex-col gap-4 p-8">
                      <span className="inline-flex w-fit items-center border-[0.8px] border-grey-200 px-3 py-1 text-small uppercase tracking-widest text-grey-600">
                        {CLIENT_TAGS[study.slug] ?? study.client}
                      </span>

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
              );
            })}
          </div>
        </Container>
      </Section>

      <Reveal variant="fade-up">
        <ClosingCta
          heading="Building something in this shape?"
          body="From AI platforms to enterprise integrations to production SaaS, this is the range we work across. If any of the work above looks like what you're trying to build, we should talk."
          cta={{ label: "Start a Project", href: "/contact" }}
          secondaryCta={{ label: "See How We Work", href: "/how-we-work" }}
        />
      </Reveal>
    </>
  );
}
