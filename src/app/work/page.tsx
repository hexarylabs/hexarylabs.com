import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { CaseCover } from "./CaseCover";
import { MedicalRecordsSchematicElevated } from "./MedicalRecordsSchematicElevated";
import { work, WORK_INTRO } from "@/content/work";
import type { Cover } from "@/content/work";
import { JsonLd, breadcrumbList } from "@/lib/jsonld";

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

const resolveIndexCover = (study: (typeof work)[number]): Cover =>
  study.slug === "eden"
    ? {
        kind: "photo",
        src: "/work/eden-og.webp",
        alt: "Eden — Garden of Artificial Delights, the studio's own marketing key art",
      }
    : study.cover;

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
      />

      <Section tone="light">
        <Container>
          <h2 className="sr-only">All case studies</h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {work.map((study, i) => {
              const cover = resolveIndexCover(study);
              const isElevatedSchematic = study.slug === "medical-records-platform";

              return (
                <Reveal key={study.slug} delay={i * 60} className="h-full">
                  <article className="group relative flex h-full flex-col border-[0.8px] border-grey-200 bg-base">
                    {isElevatedSchematic ? (
                      <div className="flex w-full items-center justify-center overflow-hidden border-b-[0.8px] border-grey-200 bg-base-2 p-6 aspect-[4/3] sm:aspect-[1.6] sm:p-10 lg:aspect-[1.9] lg:p-12">
                        <MedicalRecordsSchematicElevated className="max-h-full" />
                      </div>
                    ) : (
                      <CaseCover
                        cover={cover}
                        title={study.title}
                        aspect={
                          cover.kind === "schematic"
                            ? "aspect-[4/3] sm:aspect-[1.6] lg:aspect-[1.9]"
                            : "aspect-[1.9]"
                        }
                        sizes="(min-width: 1024px) 620px, 100vw"
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

      <ClosingCta
        heading="Building something in this shape?"
        body="From AI platforms to enterprise integrations to production SaaS, this is the range we work across. If any of the work above looks like what you're trying to build, we should talk."
        cta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "See How We Work", href: "/how-we-work" }}
      />
    </>
  );
}
