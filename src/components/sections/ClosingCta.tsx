import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * A parameterized closing band for pages that need page-specific closing
 * copy instead of the sitewide CtaBand's fixed "Let's Talk" wordmark (too
 * long a heading here for the mega gradient treatment). Same dark-band
 * structure and classes as CtaBand, just with heading/button as props.
 *
 * `body` and `secondaryCta` are optional — omitting them renders the
 * original heading + single-button layout unchanged.
 */
export function ClosingCta({
  heading,
  body,
  cta,
  secondaryCta,
}: {
  heading: string;
  body?: string;
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section
      data-tone="dark"
      className="bg-contrast-2 pb-14 pt-14 text-white lg:pb-20 lg:pt-20"
    >
      <Container>
        <div className="flex flex-col items-center gap-10 text-center">
          <div>
            <h2 className="text-h2 max-md:text-[1.625rem] md:text-[2.25rem] lg:text-h2">
              {heading}
            </h2>
            {body && (
              <p className="mx-auto mt-6 max-w-[60ch] text-body-lg text-grey-300">
                {body}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={cta.href} variant="accent" size="lg">
              {cta.label}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary" size="lg">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
