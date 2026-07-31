"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import { useInView } from "@/lib/useInView";
import {
  EdenSchematicElevated,
  EDEN_NODE_SLOTS,
  EDEN_WIRE_SLOTS,
} from "./EdenSchematicElevated";

const IMAGE_HOLD_MS = 2500;
const DISSOLVE_MS = 800;
const BUILD_OVERLAP = 0.6;
const BUILD_STAGGER_MS = 320;
const ELEMENT_IN_MS = 450;
const ARROWHEAD_LAG = 0.8;
const DIAGRAM_HOLD_MS = 2000;
const EASE = "cubic-bezier(0, 0, 0.2, 1)";

const BUILD_START_MS = IMAGE_HOLD_MS + DISSOLVE_MS * BUILD_OVERLAP;
const DISSOLVE_IN_END_MS = IMAGE_HOLD_MS + DISSOLVE_MS;
const LAST_SLOT = Math.max(
  ...EDEN_NODE_SLOTS,
  ...EDEN_WIRE_SLOTS.map((s) => s + ARROWHEAD_LAG),
);
const BUILD_END_MS = BUILD_START_MS + LAST_SLOT * BUILD_STAGGER_MS + ELEMENT_IN_MS;
const HOLD_END_MS = BUILD_END_MS + DIAGRAM_HOLD_MS;
const LOOP_MS = HOLD_END_MS + DISSOLVE_MS;

const pct = (ms: number) => `${((ms / LOOP_MS) * 100).toFixed(3)}%`;

const slotStart = (slot: number) => BUILD_START_MS + slot * BUILD_STAGGER_MS;

const fadeInKeyframes = (name: string, slot: number) => `
@keyframes ${name} {
  0%, ${pct(slotStart(slot))} { opacity: 0; transform: scale(0.95); }
  ${pct(slotStart(slot) + ELEMENT_IN_MS)}, 100% { opacity: 1; transform: none; }
}`;

const drawKeyframes = (slot: number) => `
@keyframes eden-draw-${slot} {
  0%, ${pct(slotStart(slot))} { stroke-dasharray: 1; stroke-dashoffset: 1; }
  ${pct(slotStart(slot) + ELEMENT_IN_MS)}, 100% { stroke-dasharray: 1; stroke-dashoffset: 0; }
}`;

const css = `
.eden-loop .eden-el {
  animation-duration: ${LOOP_MS}ms;
  animation-timing-function: ${EASE};
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  animation-play-state: var(--eden-play, paused);
}
.eden-loop.is-playing { --eden-play: running; }
.eden-loop svg .eden-el { transform-box: fill-box; transform-origin: center; }
.eden-loop .eden-img { animation-name: eden-img-loop; }
.eden-loop .eden-diagram { animation-name: eden-diagram-loop; }
${EDEN_NODE_SLOTS.map(
  (s) => `.eden-loop .eden-node-${s} { animation-name: eden-in-${s}; }`,
).join("\n")}
${EDEN_WIRE_SLOTS.map(
  (s) =>
    `.eden-loop .eden-wire-${s} { animation-name: eden-draw-${s}; animation-timing-function: linear; }
.eden-loop .eden-tip-${s} { animation-name: eden-tip-${s}; }`,
).join("\n")}
@keyframes eden-img-loop {
  0%, ${pct(IMAGE_HOLD_MS)} { opacity: 1; }
  ${pct(DISSOLVE_IN_END_MS)}, ${pct(HOLD_END_MS)} { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes eden-diagram-loop {
  0%, ${pct(IMAGE_HOLD_MS)} { opacity: 0; }
  ${pct(DISSOLVE_IN_END_MS)}, ${pct(HOLD_END_MS)} { opacity: 1; }
  100% { opacity: 0; }
}
${EDEN_NODE_SLOTS.map((s) => fadeInKeyframes(`eden-in-${s}`, s)).join("")}
${EDEN_WIRE_SLOTS.map((s) => drawKeyframes(s)).join("")}
${EDEN_WIRE_SLOTS.map((s) => fadeInKeyframes(`eden-tip-${s}`, s + ARROWHEAD_LAG)).join("")}
@media (prefers-reduced-motion: reduce) {
  .eden-loop .eden-el { animation: none; }
  .eden-loop .eden-img { opacity: 0; }
  .eden-loop .eden-diagram { opacity: 1; }
}
`;

interface EdenAnimatedHeroProps {
  aspect?: string;
  sizes?: string;
  eager?: boolean;
  className?: string;
}

export function EdenAnimatedHero({
  aspect = "aspect-[4/3] sm:aspect-[1.8] lg:aspect-[2.4]",
  sizes = "100vw",
  eager = false,
  className,
}: EdenAnimatedHeroProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.25, { once: false });

  return (
    <div
      ref={ref}
      className={cn(
        "eden-loop relative overflow-hidden bg-base-2",
        aspect,
        inView && "is-playing",
        className,
      )}
    >
      <style>{css}</style>
      <div className="eden-diagram eden-el absolute inset-0 flex items-center justify-center p-6 sm:p-10 lg:p-12">
        <EdenSchematicElevated className="max-h-full" />
      </div>
      <div className="eden-img eden-el absolute inset-0">
        <Image
          src="/work/eden-og.webp"
          alt="Eden — Garden of Artificial Delights, the studio's own marketing key art"
          fill
          sizes={sizes}
          priority={eager}
          className="object-cover"
        />
      </div>
    </div>
  );
}
