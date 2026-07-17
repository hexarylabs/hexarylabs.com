import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HexLattice } from "@/components/visuals/HexLattice";

/**
 * Hero. Mirrors the reference's structure — oversized display headline with
 * accent punctuation, constrained sub-copy, one primary CTA, framed visual
 * right — and its mobile reflow: h1 → visual → copy → CTA (the visual jumps
 * *between* headline and body copy, which is what the reference does).
 *
 * Achieved with a single `order` swap rather than duplicated markup.
 */
export function Hero() {
  return (
    <section className="bg-base pb-6 pt-10 md:pb-8 md:pt-14 lg:pb-8 lg:pt-18">
      <Container>
        <div className="grid items-center gap-x-16 gap-y-8 lg:grid-cols-2">
          {/* Headline — always first */}
          <h1 className="text-[2.125rem] leading-[1.2] tracking-[0.02em] md:text-[3rem] lg:col-start-1 lg:row-start-1 lg:text-h1">
            Engineering-Led
            <br />
            Product Studio
            <span className="text-accent">.</span>
          </h1>

          {/* Visual — right on desktop, between h1 and copy on mobile */}
          <div className="lg:col-start-2 lg:row-span-3 lg:row-start-1">
            <HexLattice />
          </div>

          {/* No max-width: the grid column *is* the measure, as in the
              reference (595px ≈ 65ch at 18px). */}
          <p className="text-body-lg text-grey-600 lg:col-start-1 lg:row-start-2">
            We design and build software products — from strategy and UX through
            to shipped, scalable engineering. Fewer surprises, cleaner handovers,
            systems your team can own.
          </p>

          <div className="lg:col-start-1 lg:row-start-3">
            <Button href="/contact" size="lg">
              Tell Us What You&rsquo;re Building
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
