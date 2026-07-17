import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * The closing moment: a black band with an oversized gradient wordmark
 * (`clamp(56px → 240px)`, line-height 0.95) and the page's one accent button —
 * the reference's structure exactly.
 */
export function CtaBand() {
  return (
    <section
      data-tone="dark"
      className="bg-contrast-2 pb-14 pt-14 text-white lg:pb-20 lg:pt-20"
    >
      <Container>
        <div className="flex flex-col items-center gap-10 text-center">
          <h2 className="text-metal text-mega font-display font-medium">
            Let&rsquo;s Talk
          </h2>
          <Button href="/contact" variant="accent" size="lg">
            Book a Call
          </Button>
        </div>
      </Container>
    </section>
  );
}
