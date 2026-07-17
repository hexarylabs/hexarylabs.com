import { cn } from "@/lib/cn";

type Tone = "light" | "muted" | "dark";

/**
 * Vertical rhythm + surface tone. Section padding 40 / 56 / 80px
 * (mobile / tablet / desktop) — the reference runs 80 desktop, 40 mobile off a
 * single breakpoint; we add the middle step.
 *
 * `data-tone` is what descendants (Button, Divider, links) key off, so no
 * component needs a tone prop.
 */
const tones: Record<Tone, string> = {
  light: "bg-base text-contrast",
  muted: "bg-base-2 text-contrast",
  dark: "bg-contrast-2 text-white",
};

export function Section({
  children,
  tone = "light",
  className,
  id,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      data-tone={tone}
      className={cn("py-10 md:py-14 lg:py-20", tones[tone], className)}
    >
      {children}
    </section>
  );
}
