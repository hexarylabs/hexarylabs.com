import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you're building.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us what you&rsquo;re
            <span className="text-accent"> building</span>
          </>
        }
        intro="A short note is enough to start. We'll reply with either a useful question or a time to talk."
      />

      <Section tone="light">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr]">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-display text-body-lg font-medium">Email</h2>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 inline-block text-body-lg text-grey-600 underline-offset-4 transition-colors duration-300 hover:text-accent hover:underline"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <h2 className="font-display text-body-lg font-medium">Elsewhere</h2>
                <ul className="mt-2 flex flex-col gap-2">
                  {site.socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body-lg text-grey-600 transition-colors duration-300 hover:text-accent"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
