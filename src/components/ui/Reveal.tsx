"use client";

import { cn } from "@/lib/cn";
import { useInView } from "@/lib/useInView";

/**
 * Minimal scroll reveal: opacity + 12px rise, once, 0.5s.
 * The reference has no reveal system at all — this is a restrained addition,
 * kept deliberately subtle. Neutralised by prefers-reduced-motion in globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <div
      ref={ref}
      className={cn("reveal", inView && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
