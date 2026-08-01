"use client";

import { cn } from "@/lib/cn";
import { heroLoopBaseCss, pctOf, useHeroLoop } from "@/lib/heroLoop";
import {
  B2BAccessCatalogScene,
  B2B_COLS,
  B2B_CHECKS,
  B2B_COL_CENTERS,
  B2B_WIPE_TRAVEL,
  B2B_WIPE_START_X,
} from "./B2BAccessCatalogScene";

const REST_IDLE_MS = 800;

const PANEL_IN_AT = 900;
const PANEL_IN_MS = 300;
const CHECK_START = 1320;
const CHECK_STAGGER = 110;
const CHECK_IN_MS = 200;
const BADGE_AT = 2000;
const BADGE_IN_MS = 250;
const PANEL_OUT_AT = 2320;
const PANEL_OUT_MS = 260;
const WIPE_AT = 2450;
const WIPE_MS = 700;
const UNLOCK_MS = 260;
const CHIP_SWAP_AT = 2650;
const CHIP_SWAP_MS = 200;
const HOLD_END = 4000;
const FADE_BACK_MS = 400;
const CYCLE_MS = HOLD_END + FADE_BACK_MS;

const DIM_OPACITY = 0.74;

/** The wipe drives the reveal: each column unlocks at the moment the bar crosses it. */
const unlockAt = (col: number) =>
  Math.round(
    WIPE_AT +
      ((B2B_COL_CENTERS[col] - B2B_WIPE_START_X) / B2B_WIPE_TRAVEL) * WIPE_MS,
  );

const pct = pctOf(CYCLE_MS);

const css = `
${heroLoopBaseCss("b2b", CYCLE_MS)}

.b2b-loop .b2b-chip-unlocked, .b2b-loop .b2b-dim, .b2b-loop .b2b-panel,
.b2b-loop .b2b-badge, .b2b-loop .b2b-wipe { opacity: 0; }
${B2B_COLS.map((c) => `.b2b-loop .b2b-unlocked-${c} { opacity: 0; }`).join("\n")}
${B2B_CHECKS.map((i) => `.b2b-loop .b2b-check-${i} { opacity: 0; }`).join("\n")}

.b2b-loop.is-running .b2b-chip-locked { animation-name: b2b-chip-locked; }
.b2b-loop.is-running .b2b-chip-unlocked { animation-name: b2b-chip-unlocked; }
.b2b-loop.is-running .b2b-dim { animation-name: b2b-dim; }
.b2b-loop.is-running .b2b-panel { animation-name: b2b-panel; }
.b2b-loop.is-running .b2b-badge { animation-name: b2b-badge; }
.b2b-loop.is-running .b2b-wipe { animation-name: b2b-wipe; animation-timing-function: linear; }
${B2B_COLS.map(
  (c) =>
    `.b2b-loop.is-running .b2b-locked-${c} { animation-name: b2b-locked-${c}; }
.b2b-loop.is-running .b2b-unlocked-${c} { animation-name: b2b-unlocked-${c}; }`,
).join("\n")}
${B2B_CHECKS.map(
  (i) => `.b2b-loop.is-running .b2b-check-${i} { animation-name: b2b-check-${i}; }`,
).join("\n")}

@keyframes b2b-dim {
  0%, ${pct(PANEL_IN_AT)} { opacity: 0; }
  ${pct(PANEL_IN_AT + PANEL_IN_MS)}, ${pct(PANEL_OUT_AT)} { opacity: ${DIM_OPACITY}; }
  ${pct(PANEL_OUT_AT + PANEL_OUT_MS)}, 100% { opacity: 0; }
}
@keyframes b2b-panel {
  0%, ${pct(PANEL_IN_AT)} { opacity: 0; transform: translateY(16px); }
  ${pct(PANEL_IN_AT + PANEL_IN_MS)}, ${pct(PANEL_OUT_AT)} { opacity: 1; transform: none; }
  ${pct(PANEL_OUT_AT + PANEL_OUT_MS)}, 100% { opacity: 0; transform: translateY(-12px); }
}
${B2B_CHECKS.map(
  (i) => `
@keyframes b2b-check-${i} {
  0%, ${pct(CHECK_START + i * CHECK_STAGGER)} { opacity: 0; transform: scale(0.4); }
  ${pct(CHECK_START + i * CHECK_STAGGER + CHECK_IN_MS)}, ${pct(PANEL_OUT_AT)} { opacity: 1; transform: none; }
  ${pct(PANEL_OUT_AT + PANEL_OUT_MS)}, 100% { opacity: 0; transform: scale(0.4); }
}`,
).join("")}
@keyframes b2b-badge {
  0%, ${pct(BADGE_AT)} { opacity: 0; transform: scale(0.8); }
  ${pct(BADGE_AT + BADGE_IN_MS)}, ${pct(PANEL_OUT_AT)} { opacity: 1; transform: none; }
  ${pct(PANEL_OUT_AT + PANEL_OUT_MS)}, 100% { opacity: 0; transform: scale(0.8); }
}
@keyframes b2b-wipe {
  0%, ${pct(WIPE_AT)} { opacity: 0; transform: translateX(0); }
  ${pct(WIPE_AT + 60)} { opacity: 1; }
  ${pct(WIPE_AT + WIPE_MS - 80)} { opacity: 1; }
  ${pct(WIPE_AT + WIPE_MS)}, 100% { opacity: 0; transform: translateX(${B2B_WIPE_TRAVEL}px); }
}
${B2B_COLS.map(
  (c) => `
@keyframes b2b-locked-${c} {
  0%, ${pct(unlockAt(c))} { opacity: 1; transform: none; }
  ${pct(unlockAt(c) + UNLOCK_MS)}, ${pct(HOLD_END)} { opacity: 0; transform: translateY(-5px); }
  100% { opacity: 1; transform: none; }
}
@keyframes b2b-unlocked-${c} {
  0%, ${pct(unlockAt(c))} { opacity: 0; transform: scale(0.92); }
  ${pct(unlockAt(c) + UNLOCK_MS)}, ${pct(HOLD_END)} { opacity: 1; transform: none; }
  100% { opacity: 0; transform: scale(0.92); }
}`,
).join("")}
@keyframes b2b-chip-locked {
  0%, ${pct(CHIP_SWAP_AT)} { opacity: 1; }
  ${pct(CHIP_SWAP_AT + CHIP_SWAP_MS)}, ${pct(HOLD_END)} { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes b2b-chip-unlocked {
  0%, ${pct(CHIP_SWAP_AT)} { opacity: 0; }
  ${pct(CHIP_SWAP_AT + CHIP_SWAP_MS)}, ${pct(HOLD_END)} { opacity: 1; }
  100% { opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .b2b-loop .b2b-el { animation: none; }
  .b2b-loop .b2b-chip-locked { opacity: 0; }
  .b2b-loop .b2b-chip-unlocked { opacity: 1; }
  ${B2B_COLS.map(
    (c) =>
      `.b2b-loop .b2b-locked-${c} { opacity: 0; }
  .b2b-loop .b2b-unlocked-${c} { opacity: 1; }`,
  ).join("\n  ")}
  .b2b-loop .b2b-dim, .b2b-loop .b2b-panel, .b2b-loop .b2b-badge,
  .b2b-loop .b2b-wipe { opacity: 0; }
  ${B2B_CHECKS.map((i) => `.b2b-loop .b2b-check-${i} { opacity: 0; }`).join("\n  ")}
}
`;

interface B2BAccessUnlockHeroProps {
  aspect?: string;
  className?: string;
}

export function B2BAccessUnlockHero({
  aspect = "aspect-[4/3] sm:aspect-[1.8] lg:aspect-[2.4]",
  className,
}: B2BAccessUnlockHeroProps) {
  const { ref, inView, running, onMouseEnter, onAnimationEnd } = useHeroLoop(
    REST_IDLE_MS,
    "b2b-chip-locked",
  );

  return (
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onAnimationEnd={onAnimationEnd}
      className={cn(
        "b2b-loop relative overflow-hidden bg-base-2",
        aspect,
        inView && "is-playing",
        running && "is-running",
        className,
      )}
    >
      <style>{css}</style>
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 lg:p-10">
        <B2BAccessCatalogScene className="max-h-full" />
      </div>
    </div>
  );
}
