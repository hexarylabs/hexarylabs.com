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

const BLANK_IDLE_MS = 500;
const DRAW_DELAY_MS = 100;
const DRAW_STAGGER_MS = 180;
const DRAW_MS = 450;
const FILL_IN_MS = 120;
const TXT_LAG_MS = 140;
const TXT_FADE_MS = 250;
const TIP_LAG_MS = 150;
const TIP_FADE_MS = 220;
const DRAWN_HOLD_MS = 1200;

/** The loop reverses rather than cutting: the last thing drawn is the first thing undone. */
const RETRACT_STAGGER_MS = 120;
const RETRACT_MS = 340;
const FILL_OUT_MS = 110;

const DRAW_END_MS =
  DRAW_DELAY_MS + MR_LAST_SLOT * DRAW_STAGGER_MS + DRAW_MS + FILL_IN_MS;
const RETRACT_BEGIN_MS = DRAW_END_MS + DRAWN_HOLD_MS;
const CYCLE_MS =
  RETRACT_BEGIN_MS + MR_LAST_SLOT * RETRACT_STAGGER_MS + FILL_OUT_MS + RETRACT_MS;

const pct = pctOf(CYCLE_MS);

const drawStart = (slot: number) => DRAW_DELAY_MS + slot * DRAW_STAGGER_MS;
/** Reverse order: the highest slot retracts first. */
const retractStart = (slot: number) =>
  RETRACT_BEGIN_MS + (MR_LAST_SLOT - slot) * RETRACT_STAGGER_MS;

const boxKeyframes = (slot: number) => {
  const d = drawStart(slot);
  const r = retractStart(slot);
  return `
@keyframes mr-box-${slot} {
  0%, ${pct(d)} { stroke-dasharray: 1; stroke-dashoffset: 1; fill-opacity: 0; }
  ${pct(d + DRAW_MS * 0.55)} { fill-opacity: 0; }
  ${pct(d + DRAW_MS)} { stroke-dashoffset: 0; }
  ${pct(d + DRAW_MS + FILL_IN_MS)}, ${pct(r)} { stroke-dasharray: 1; stroke-dashoffset: 0; fill-opacity: 1; }
  ${pct(r + FILL_OUT_MS)} { stroke-dashoffset: 0; fill-opacity: 0; }
  ${pct(r + FILL_OUT_MS + RETRACT_MS)}, 100% { stroke-dasharray: 1; stroke-dashoffset: 1; fill-opacity: 0; }
}`;
};

const wireKeyframes = (slot: number) => {
  const d = drawStart(slot);
  const r = retractStart(slot);
  return `
@keyframes mr-wire-${slot} {
  0%, ${pct(d)} { stroke-dasharray: 1; stroke-dashoffset: 1; }
  ${pct(d + DRAW_MS)}, ${pct(r + FILL_OUT_MS)} { stroke-dasharray: 1; stroke-dashoffset: 0; }
  ${pct(r + FILL_OUT_MS + RETRACT_MS)}, 100% { stroke-dasharray: 1; stroke-dashoffset: 1; }
}`;
};

/** Labels and arrowheads can't retract, so they fade out just ahead of their stroke. */
const fadeKeyframes = (name: string, slot: number, lag: number, fade: number) => {
  const inAt = drawStart(slot) + lag;
  const outAt = retractStart(slot);
  return `
@keyframes ${name} {
  0%, ${pct(inAt)} { opacity: 0; }
  ${pct(inAt + fade)}, ${pct(outAt)} { opacity: 1; }
  ${pct(outAt + FILL_OUT_MS)}, 100% { opacity: 0; }
}`;
};

const css = `
${heroLoopBaseCss("mr", CYCLE_MS)}

${MR_BOX_SLOTS.map(
  (s) => `.mr-loop .mr-box-${s} { stroke-dasharray: 1; stroke-dashoffset: 1; fill-opacity: 0; }`,
).join("\n")}
${MR_WIRE_SLOTS.map(
  (s) => `.mr-loop .mr-wire-${s} { stroke-dasharray: 1; stroke-dashoffset: 1; }`,
).join("\n")}
${MR_TXT_SLOTS.map((s) => `.mr-loop .mr-txt-${s} { opacity: 0; }`).join("\n")}
${MR_TIP_SLOTS.map((s) => `.mr-loop .mr-tip-${s} { opacity: 0; }`).join("\n")}

${MR_BOX_SLOTS.map((s) => `.mr-loop.is-running .mr-box-${s} { animation-name: mr-box-${s}; }`).join("\n")}
${MR_WIRE_SLOTS.map(
  (s) =>
    `.mr-loop.is-running .mr-wire-${s} { animation-name: mr-wire-${s}; animation-timing-function: linear; }`,
).join("\n")}
${MR_TXT_SLOTS.map((s) => `.mr-loop.is-running .mr-txt-${s} { animation-name: mr-txt-${s}; }`).join("\n")}
${MR_TIP_SLOTS.map((s) => `.mr-loop.is-running .mr-tip-${s} { animation-name: mr-tip-${s}; }`).join("\n")}

${MR_BOX_SLOTS.map(boxKeyframes).join("")}
${MR_WIRE_SLOTS.map(wireKeyframes).join("")}
${MR_TXT_SLOTS.map((s) => fadeKeyframes(`mr-txt-${s}`, s, TXT_LAG_MS, TXT_FADE_MS)).join("")}
${MR_TIP_SLOTS.map((s) => fadeKeyframes(`mr-tip-${s}`, s, TIP_LAG_MS, TIP_FADE_MS)).join("")}

@media (prefers-reduced-motion: reduce) {
  .mr-loop .mr-el { animation: none; }
  ${MR_BOX_SLOTS.map(
    (s) => `.mr-loop .mr-box-${s} { stroke-dashoffset: 0; fill-opacity: 1; }`,
  ).join("\n  ")}
  ${MR_WIRE_SLOTS.map((s) => `.mr-loop .mr-wire-${s} { stroke-dashoffset: 0; }`).join("\n  ")}
  ${MR_TXT_SLOTS.map((s) => `.mr-loop .mr-txt-${s} { opacity: 1; }`).join("\n  ")}
  ${MR_TIP_SLOTS.map((s) => `.mr-loop .mr-tip-${s} { opacity: 1; }`).join("\n  ")}
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
    `mr-box-${MR_BOX_SLOTS[0]}`,
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
      <div className="mr-canvas mr-el absolute inset-0 flex items-center justify-center">
        <MedicalRecordsSchematicElevated className="max-h-full" />
      </div>
    </div>
  );
}
