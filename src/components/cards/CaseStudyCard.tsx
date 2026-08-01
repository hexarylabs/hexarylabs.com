import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { CaseCover } from "@/app/work/CaseCover";
import { AnimatedCaseHero, hasAnimatedHero } from "@/app/work/animatedHeroes";
import type { CaseStudy } from "@/content/work";

/** Wide ratio while stacked; on desktop the visual fills the column height beside the copy. */
const COVER_ASPECT = "aspect-[4/3] sm:aspect-[1.9] lg:aspect-auto lg:h-full";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const scope = (study.scope ?? []).slice(0, 3);

  return (
    <article data-tone="dark" className="group relative bg-contrast-2 text-white">
      <div className="grid lg:grid-cols-[740fr_460fr]">
        {hasAnimatedHero(study.slug) ? (
          <AnimatedCaseHero
            slug={study.slug}
            aspect={COVER_ASPECT}
            sizes="(min-width: 1024px) 740px, 100vw"
            className="border-b-[0.8px] border-grey-700 lg:border-b-0 lg:border-r-[0.8px]"
          />
        ) : (
          <CaseCover
            cover={study.cover}
            title={study.title}
            aspect={COVER_ASPECT}
            sizes="(min-width: 1024px) 740px, 100vw"
            className="border-b-[0.8px] border-grey-700 lg:border-b-0 lg:border-r-[0.8px]"
          />
        )}

        <div className="flex flex-col justify-center gap-5 p-8 lg:p-12">
          {study.client && (
            <p className="text-small uppercase tracking-widest text-grey-500">
              {study.client}
            </p>
          )}

          <h3 className="text-[1.3125rem] leading-[1.2] md:text-[1.625rem] lg:text-h3">
            <Link href={`/work/${study.slug}`} className="before:absolute before:inset-0">
              {study.title}
            </Link>
          </h3>

          <p className="text-body-lg text-grey-300">{study.summary}</p>

          <span className="inline-flex w-fit items-center gap-4 bg-white px-3 py-2 font-display text-body-lg font-medium text-contrast-2 transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
            Read Case Study
            <ArrowIcon />
          </span>

          {scope.length > 0 && (
            <ul className="mt-1 flex flex-col gap-px border-[0.8px] border-grey-700 bg-grey-700">
              {scope.map((item) => (
                <li key={item} className="bg-contrast-2 px-5 py-3">
                  <p className="text-body text-grey-300">{item}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}
