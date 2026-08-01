"use client";

import { cn } from "@/lib/cn";
import { heroLoopBaseCss, pctOf, useHeroLoop } from "@/lib/heroLoop";
import {
  MedicalRecordsSchematicElevated,
  MR_BOX_SLOTS,
  MR_WIRE_SLOTS,
  MR_TXT_SLOTS,
  MR_TIP_SLOTS,
  MR_LAST_SLOT,
} from "./MedicalRecordsSchematicElevated";

const BLANK_IDLE_MS = 800;
const DRAW_DELAY_MS = 100;
const DRAW_STAGGER_MS = 180;
const DRAW_MS = 450;
const FILL_IN_MS = 120;
const TXT_LAG_MS = 140;
const TXT_FADE_MS = 250;
const TIP_LAG_MS = 150;
const TIP_FADE_MS = 220;
const DRAWN_HOLD_MS = 1200;
const FADE_OUT_MS = 500;

const DRAW_END_MS =
  DRAW_DELAY_MS + MR_LAST_SLOT * DRAW_STAGGER_MS + DRAW_MS + FILL_IN_MS;
const HOLD_END_MS = DRAW_END_MS + DRAWN_HOLD_MS;
const CYCLE_MS = HOLD_END_MS + FADE_OUT_MS;

const pct = pctOf(CYCLE_MS);

const slotStart = (slot: number) => DRAW_DELAY_MS + slot * DRAW_STAGGER_MS;

const boxKeyframes = (slot: number) => `
@keyframes mr-box-${slot} {
  0%, ${pct(slotStart(slot))} { stroke-dasharray: 1; stroke-dashoffset: 1; fill-opacity: 0; }
  ${pct(slotStart(slot) + DRAW_MS * 0.55)} { fill-opacity: 0; }
  ${pct(slotStart(slot) + DRAW_MS)} { stroke-dashoffset: 0; }
  ${pct(slotStart(slot) + DRAW_MS + FILL_IN_MS)}, 100% { stroke-dasharray: 1; stroke-dashoffset: 0; fill-opacity: 1; }
}`;

const wireKeyframes = (slot: number) => `
@keyframes mr-wire-${slot} {
  0%, ${pct(slotStart(slot))} { stroke-dasharray: 1; stroke-dashoffset: 1; }
  ${pct(slotStart(slot) + DRAW_MS)}, 100% { stroke-dasharray: 1; stroke-dashoffset: 0; }
}`;

const fadeKeyframes = (name: string, startMs: number, fadeMs: number) => `
@keyframes ${name} {
  0%, ${pct(startMs)} { opacity: 0; }
  ${pct(startMs + fadeMs)}, 100% { opacity: 1; }
}`;

const css = `
${heroLoopBaseCss("mr", CYCLE_MS)}
.mr-loop.is-running .mr-canvas { animation-name: mr-canvas-loop; }
.mr-loop:not(.is-running) .mr-canvas { opacity: 0; }
${MR_BOX_SLOTS.map((s) => `.mr-loop.is-running .mr-box-${s} { animation-name: mr-box-${s}; }`).join("\n")}
${MR_WIRE_SLOTS.map(
  (s) =>
    `.mr-loop.is-running .mr-wire-${s} { animation-name: mr-wire-${s}; animation-timing-function: linear; }`,
).join("\n")}
${MR_TXT_SLOTS.map((s) => `.mr-loop.is-running .mr-txt-${s} { animation-name: mr-txt-${s}; }`).join("\n")}
${MR_TIP_SLOTS.map((s) => `.mr-loop.is-running .mr-tip-${s} { animation-name: mr-tip-${s}; }`).join("\n")}
@keyframes mr-canvas-loop {
  0%, ${pct(HOLD_END_MS)} { opacity: 1; }
  100% { opacity: 0; }
}
${MR_BOX_SLOTS.map(boxKeyframes).join("")}
${MR_WIRE_SLOTS.map(wireKeyframes).join("")}
${MR_TXT_SLOTS.map((s) =>
  fadeKeyframes(`mr-txt-${s}`, slotStart(s) + TXT_LAG_MS, TXT_FADE_MS),
).join("")}
${MR_TIP_SLOTS.map((s) =>
  fadeKeyframes(`mr-tip-${s}`, slotStart(s) + TIP_LAG_MS, TIP_FADE_MS),
).join("")}
@media (prefers-reduced-motion: reduce) {
  .mr-loop .mr-el { animation: none; }
  .mr-loop .mr-canvas, .mr-loop:not(.is-running) .mr-canvas { animation: none; opacity: 1; }
}
`;

interface MedicalRecordsAnimatedHeroProps {
  aspect?: string;
  className?: string;
}

export function MedicalRecordsAnimatedHero({
  aspect = "aspect-[4/3] sm:aspect-[1.8] lg:aspect-[2.4]",
  className,
}: MedicalRecordsAnimatedHeroProps) {
  const { ref, inView, running, onMouseEnter, onAnimationEnd } = useHeroLoop(
    BLANK_IDLE_MS,
    "mr-canvas-loop",
  );

  return (
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onAnimationEnd={onAnimationEnd}
      className={cn(
        "mr-loop relative overflow-hidden bg-base-2",
        aspect,
        inView && "is-playing",
        running && "is-running",
        className,
      )}
    >
      <style>{css}</style>
      <div className="mr-canvas mr-el absolute inset-0 flex items-center justify-center p-3 sm:p-5 lg:p-6">
        <MedicalRecordsSchematicElevated className="max-h-full" />
      </div>
    </div>
  );
}
