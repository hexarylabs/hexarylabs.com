import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { stats } from "@/content/stats";

/**
 * The reference's best moment: black band, oversized numerals filled with a
 * metal gradient (`background-clip:text`), count-up on scroll, and columns
 * separated by rules that fade out at both ends.
 *
 * Dividers are `::before`-free — a real element per gap, hidden on mobile
 * where the layout stacks and horizontal rules take over.
 */
export function StatsBand() {
  return (
    <section data-tone="dark" className="bg-contrast-2 py-10 md:py-14 lg:py-20">
      <Container>
        <ul className="grid sm:grid-cols-3">
          {stats.map((stat, i) => (
            <li
              key={stat.label}
              className={
                i > 0
                  ? "relative py-10 text-center max-sm:border-t-[0.8px] max-sm:border-grey-700 sm:py-0"
                  : "relative py-10 text-center sm:py-0"
              }
            >
              {/* Fading vertical rule between columns (desktop only) */}
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="rule-fade-v absolute left-0 top-0 hidden h-full w-px sm:block"
                />
              )}

              <p className="text-metal text-stat font-display font-medium">
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <p className="mt-2 text-body-lg font-medium capitalize text-grey-500">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
