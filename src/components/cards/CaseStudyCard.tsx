import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { CaseCover } from "@/app/work/CaseCover";
import type { CaseStudy } from "@/content/work";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const strip = (study.scope ?? []).map((s) => ({ lead: null as string | null, label: s }));

  return (
    <article data-tone="dark" className="group relative bg-contrast-2 text-white">
      <div className="grid lg:grid-cols-[640fr_560fr]">
        <CaseCover
          cover={study.cover}
          title={study.title}
          aspect="aspect-[1.28]"
          sizes="(min-width: 1024px) 640px, 100vw"
          className="border-[0.8px] border-grey-700"
        />

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

      {strip.length > 0 && (
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
              <p className="text-body text-grey-300">{item.label}</p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
