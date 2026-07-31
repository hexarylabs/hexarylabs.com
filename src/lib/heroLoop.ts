"use client";

import { useInView } from "@/lib/useInView";

export const HERO_LOOP_EASE = "cubic-bezier(0, 0, 0.2, 1)";
export const HERO_LOOP_THRESHOLD = 0.25;

export const pctOf = (loopMs: number) => (ms: number) =>
  `${((ms / loopMs) * 100).toFixed(3)}%`;

export function heroLoopBaseCss(scope: string, loopMs: number): string {
  return `
.${scope}-loop .${scope}-el {
  animation-duration: ${loopMs}ms;
  animation-timing-function: ${HERO_LOOP_EASE};
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  animation-play-state: var(--hero-loop-play, paused);
}
.${scope}-loop.is-playing { --hero-loop-play: running; }
.${scope}-loop svg .${scope}-el { transform-box: fill-box; transform-origin: center; }`;
}

export function useHeroLoop() {
  const { ref, inView } = useInView<HTMLDivElement>(HERO_LOOP_THRESHOLD, {
    once: false,
  });
  return { ref, playing: inView };
}
