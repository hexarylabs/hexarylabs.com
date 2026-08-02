import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { CaseCover } from "@/app/work/CaseCover";
import { AnimatedCaseHero, hasAnimatedHero } from "@/app/work/animatedHeroes";
import { cn } from "@/lib/cn";
import type { CaseStudy } from "@/content/work";

export const CLIENT_TAGS: Record<string, string> = {
  eden: "Client · Eden Labs",
  keepcoming: "In-house product",
  "medical-records-platform": "Client · Anonymized",
  "social-lead-capture-automation": "Client · Anonymized",
  truecell: "Client · TrueCell",
  kinein: "Client · Kinein",
  "b2b-access": "Client · B2B Access",
};

/** One ratio for every card so the grid stays even; the visual runs edge to edge inside it. */
const VISUAL_ASPECT = "aspect-[4/3] sm:aspect-[1.9] lg:aspect-[2.2]";

interface CaseStudyCardProps {
  study: CaseStudy;
  /** Rendered width hint for the two heroes with a next/image layer. */
  sizes?: string;
  className?: string;
}

export function CaseStudyCard({ study, sizes, className }: CaseStudyCardProps) {
  const scope = (study.scope ?? []).slice(0, 3);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col border-[0.8px] border-grey-200 bg-base-2",
        className,
      )}
    >
      {hasAnimatedHero(study.slug) ? (
        <AnimatedCaseHero
          slug={study.slug}
          aspect={VISUAL_ASPECT}
          sizes={sizes}
          className="border-b-[0.8px] border-grey-200"
        />
      ) : (
        <CaseCover
          cover={study.cover}
          title={study.title}
          aspect={VISUAL_ASPECT}
          sizes={sizes}
          className="border-b-[0.8px] border-grey-200"
        />
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <span className="inline-flex w-fit items-center border-[0.8px] border-grey-200 px-3 py-1 text-small uppercase tracking-widest text-grey-600">
          {CLIENT_TAGS[study.slug] ?? study.client}
        </span>

        <h3 className="mt-4 text-[1.3125rem] leading-[1.2] md:text-[1.625rem]">
          <Link href={`/work/${study.slug}`} className="before:absolute before:inset-0">
            {study.title}
          </Link>
        </h3>

        <p className="mt-3 text-body-lg text-grey-600">{study.summary}</p>

        {scope.length > 0 && (
          <ul className="mt-6 border-t-[0.8px] border-grey-200">
            {scope.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 border-b-[0.8px] border-grey-200 py-2.5 last:border-b-0"
              >
                <CheckIcon className="size-3.5 shrink-0 text-accent" />
                <span className="text-body text-grey-600">{item}</span>
              </li>
            ))}
          </ul>
        )}

        <span className="mt-auto inline-flex items-center gap-3 pt-6 font-display text-body font-medium text-contrast-2 transition-colors duration-300 group-hover:text-accent">
          Read Case Study
          <ArrowIcon className="size-3.5" />
        </span>
      </div>
    </article>
  );
}
