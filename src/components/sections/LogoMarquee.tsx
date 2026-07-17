import { Marquee } from "@/components/ui/Marquee";

/**
 * ⚠️ PLACEHOLDER SECTION.
 *
 * The reference runs a marquee of real client logos here. We have no client
 * roster and will not fabricate one, so this shows the *disciplines* Hexary
 * works across as text marks. Swap for real logos (height-capped at 40px) once
 * there's a roster cleared for publication — the Marquee component is ready.
 */
const marks = [
  "Product Strategy",
  "UX Research",
  "Design Systems",
  "Web Platforms",
  "Mobile Apps",
  "AI Engineering",
  "Cloud Infrastructure",
  "Developer Tooling",
];

export function LogoMarquee() {
  return (
    <section className="border-y-[0.8px] border-grey-100 bg-base py-6">
      <Marquee duration={50}>
        {marks.map((mark) => (
          <span
            key={mark}
            className="flex h-10 shrink-0 items-center whitespace-nowrap px-8 font-display text-body-lg text-grey-600"
          >
            {mark}
            <span aria-hidden="true" className="ml-8 text-accent/40">
              ◆
            </span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
