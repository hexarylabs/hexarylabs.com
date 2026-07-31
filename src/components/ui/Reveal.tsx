"use client";

import { cn } from "@/lib/cn";
import { useInView } from "@/lib/useInView";
import { REVEAL_FADE_UP, REVEAL_ZOOM_IN } from "@/lib/motion";

type RevealVariant = "fade" | "fade-up" | "zoom-in";


export function Reveal({
  children,
  delay = 0,
  variant = "fade",
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  variant?: RevealVariant;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  const style: React.CSSProperties = { "--reveal-delay": `${delay}ms` } as React.CSSProperties;
  let revealClass = "reveal";

  if (variant === "fade-up") {
    revealClass = "reveal-fade-up";
    Object.assign(style, {
      "--reveal-distance": `${REVEAL_FADE_UP.distance}px`,
      "--reveal-duration": `${REVEAL_FADE_UP.duration}ms`,
      "--reveal-easing": REVEAL_FADE_UP.easing,
    });
  } else if (variant === "zoom-in") {
    revealClass = "reveal-zoom-in";
    Object.assign(style, {
      "--reveal-scale": REVEAL_ZOOM_IN.scale,
      "--reveal-duration": `${REVEAL_ZOOM_IN.duration}ms`,
      "--reveal-easing": REVEAL_ZOOM_IN.easing,
    });
  }

  return (
    <div ref={ref} className={cn(revealClass, inView && "is-visible", className)} style={style}>
      {children}
    </div>
  );
}
