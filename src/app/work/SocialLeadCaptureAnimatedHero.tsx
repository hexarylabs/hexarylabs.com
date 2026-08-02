"use client";

import { cn } from "@/lib/cn";
import { heroLoopBaseCss, pctOf, useHeroLoop } from "@/lib/heroLoop";
import {
  SocialLeadCaptureSchematic,
  SLC_NODES,
  SLC_SEGMENTS,
  SLC_PULSE_TRAVEL,
} from "./SocialLeadCaptureSchematic";

const REST_IDLE_MS = 800;
const STAGE_MS = 320;
const NODE_LIGHT_MS = 220;
const PULSE_LEAD_MS = 120;
const PULSE_TRAVEL_MS = 200;
const CHECK_MS = 250;
const DELIVERED_HOLD_MS = 1000;
const FADE_OUT_MS = 500;
const REST_OPACITY = 0.35;

const LAST_NODE = SLC_NODES[SLC_NODES.length - 1];
const nodeStart = (i: number) => i * STAGE_MS;
const pulseStart = (s: number) => nodeStart(s) + PULSE_LEAD_MS;
const pulseEnd = (s: number) => pulseStart(s) + PULSE_TRAVEL_MS;

const DELIVERED_MS = nodeStart(LAST_NODE) + NODE_LIGHT_MS;
const CHECK_END_MS = DELIVERED_MS + CHECK_MS;
const HOLD_END_MS = CHECK_END_MS + DELIVERED_HOLD_MS;
const CYCLE_MS = HOLD_END_MS + FADE_OUT_MS;

const pct = pctOf(CYCLE_MS);

const nodeKeyframes = (i: number) => `
@keyframes slc-node-${i} {
  0%, ${pct(nodeStart(i))} { opacity: ${REST_OPACITY}; }
  ${pct(nodeStart(i) + NODE_LIGHT_MS)}, ${pct(HOLD_END_MS)} { opacity: 1; }
  100% { opacity: ${REST_OPACITY}; }
}`;

const glowKeyframes = (i: number) => `
@keyframes slc-glow-${i} {
  0%, ${pct(nodeStart(i))} { opacity: 0; }
  ${pct(nodeStart(i) + NODE_LIGHT_MS)}, ${pct(HOLD_END_MS)} { opacity: 1; }
  100% { opacity: 0; }
}`;

const trailKeyframes = (s: number) => `
@keyframes slc-trail-${s} {
  0%, ${pct(pulseStart(s))} { stroke-dasharray: 1; stroke-dashoffset: 1; opacity: 1; }
  ${pct(pulseEnd(s))}, ${pct(HOLD_END_MS)} { stroke-dasharray: 1; stroke-dashoffset: 0; opacity: 1; }
  100% { stroke-dasharray: 1; stroke-dashoffset: 0; opacity: 0; }
}`;

const pulseKeyframes = (s: number) => `
@keyframes slc-pulse-${s} {
  0%, ${pct(pulseStart(s))} { opacity: 0; transform: translateX(0); }
  ${pct(pulseStart(s) + 60)} { opacity: 1; }
  ${pct(pulseEnd(s) - 40)} { opacity: 1; }
  ${pct(pulseEnd(s))}, 100% { opacity: 0; transform: translateX(${SLC_PULSE_TRAVEL}px); }
}`;

const css = `
${heroLoopBaseCss("slc", CYCLE_MS)}
${SLC_NODES.map((i) => `.slc-loop .slc-node-${i} { opacity: ${REST_OPACITY}; }`).join("\n")}
.slc-loop .slc-check { opacity: 0; }
${SLC_NODES.map(
  (i) =>
    `.slc-loop.is-running .slc-node-${i} { animation-name: slc-node-${i}; }
.slc-loop.is-running .slc-glow-${i} { animation-name: slc-glow-${i}; }`,
).join("\n")}
${SLC_SEGMENTS.map(
  (s) =>
    `.slc-loop.is-running .slc-trail-${s} { animation-name: slc-trail-${s}; animation-timing-function: linear; }
.slc-loop.is-running .slc-pulse-${s} { animation-name: slc-pulse-${s}; animation-timing-function: linear; }`,
).join("\n")}
.slc-loop.is-running .slc-check { animation-name: slc-check; }
${SLC_NODES.map(nodeKeyframes).join("")}
${SLC_NODES.map(glowKeyframes).join("")}
${SLC_SEGMENTS.map(trailKeyframes).join("")}
${SLC_SEGMENTS.map(pulseKeyframes).join("")}
@keyframes slc-check {
  0%, ${pct(DELIVERED_MS)} { opacity: 0; transform: scale(0.4); }
  ${pct(DELIVERED_MS + CHECK_MS * 0.7)} { opacity: 1; transform: scale(1.15); }
  ${pct(CHECK_END_MS)}, ${pct(HOLD_END_MS)} { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1); }
}
@media (prefers-reduced-motion: reduce) {
  .slc-loop .slc-el { animation: none; }
  ${SLC_NODES.map(
    (i) => `.slc-loop .slc-node-${i}, .slc-loop .slc-glow-${i} { opacity: 1; }`,
  ).join("\n  ")}
  ${SLC_SEGMENTS.map(
    (s) =>
      `.slc-loop .slc-trail-${s} { opacity: 1; stroke-dasharray: 1; stroke-dashoffset: 0; }`,
  ).join("\n  ")}
  .slc-loop .slc-check { opacity: 1; }
}
`;

interface SocialLeadCaptureAnimatedHeroProps {
  aspect?: string;
  className?: string;
}

export function SocialLeadCaptureAnimatedHero({
  aspect = "aspect-[4/3] sm:aspect-[1.8] lg:aspect-[2.4]",
  className,
}: SocialLeadCaptureAnimatedHeroProps) {
  const { ref, inView, running, onMouseEnter, onAnimationEnd } = useHeroLoop(
    REST_IDLE_MS,
    "slc-check",
  );

  return (
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onAnimationEnd={onAnimationEnd}
      className={cn(
        "slc-loop relative overflow-hidden bg-base-2",
        aspect,
        inView && "is-playing",
        running && "is-running",
        className,
      )}
    >
      <style>{css}</style>
      <div className="absolute inset-0 flex items-center justify-center">
        <SocialLeadCaptureSchematic className="max-h-full" />
      </div>
    </div>
  );
}
