import Link from "next/link";
import { CaseVisual } from "@/components/visuals/CaseVisual";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import type { CaseStudy } from "@/content/work";

/**
 * The reference's "premium" portfolio card, rebuilt:
 * split visual (1.28:1) + dark info panel, with a divided strip beneath.
 *
 * The whole card is the hover target and the inner CTA flips to accent —
 * exactly the reference's `.portfolio-card--premium:hover` behaviour (it has no
 * image zoom; neither do we).
 *
 * The strip renders verified `results` when present, otherwise descriptive
 * `scope`. We ship `scope` because inventing outcome metrics is not on.
 */
export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const strip =
    study.results?.map((r) => ({ lead: r.value, label: r.label })) ??
    study.scope.map((s) => ({ lead: null, label: s }));

  return (
    // `relative` anchors the h3 link's ::before, making the whole card one
    // click target while keeping exactly one link in the a11y tree.
    <article data-tone="dark" className="group relative bg-contrast-2 text-white">
      <div className="grid lg:grid-cols-[640fr_560fr]">
        <CaseVisual seed={study.visualSeed} />

        <div className="flex flex-col justify-center gap-6 p-8 lg:p-12">
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

          <span className="mt-2 inline-flex w-fit items-center gap-4 bg-white px-3 py-2 font-display text-body-lg font-medium text-contrast-2 transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
            Read Case Study
            <ArrowIcon />
          </span>
        </div>
      </div>

      {/* Divided strip: results if verified, otherwise scope */}
      <ul className="grid border-t-[0.8px] border-grey-700 sm:grid-cols-3">
        {strip.slice(0, 3).map((item, i) => (
          <li
            key={item.label}
            className={
              i > 0
                ? "border-grey-700 p-6 max-sm:border-t-[0.8px] sm:border-l-[0.8px]"
                : "p-6"
            }
          >
            {item.lead && (
              <p className="flex items-center gap-2 font-display text-h4 font-medium text-white">
                <ArrowIcon className="size-4 -rotate-45 text-success" />
                {item.lead}
              </p>
            )}
            <p className={item.lead ? "mt-1 text-body text-grey-500" : "text-body text-grey-300"}>
              {item.label}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
