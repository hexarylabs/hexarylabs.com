import { cn } from "@/lib/cn";

/**
 * Infinite marquee. The reference drives this with JS transforms on every
 * frame; a duplicated track + one CSS animation is cheaper and needs no JS.
 *
 * The clone is `aria-hidden` so screen readers read the list once.
 * Pauses on hover; disabled under prefers-reduced-motion (see globals.css).
 */
export function Marquee({
  children,
  duration = 40,
  className,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("marquee-root group relative overflow-hidden", className)}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      <div className="marquee-track flex w-max">
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
