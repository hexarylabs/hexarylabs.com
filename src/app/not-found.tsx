import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title={
          <>
            Page not
            <span className="text-accent"> found</span>
          </>
        }
        intro="That link doesn't lead anywhere. It may have moved, or never existed."
      />
      <Section tone="light">
        <Container>
          <div className="flex flex-wrap gap-4">
            <Button href="/">Back to home</Button>
            <Button href="/work" variant="secondary">
              See our work
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
