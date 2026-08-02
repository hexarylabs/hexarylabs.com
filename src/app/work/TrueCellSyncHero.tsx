"use client";

import { useCallback, useState } from "react";
import { cn } from "@/lib/cn";
import { heroLoopBaseCss, pctOf, useHeroLoop } from "@/lib/heroLoop";
import { TrueCellSyncScene, TC_SELLER, TC_OTHERS } from "./TrueCellSyncScene";

/** Short, so consecutive cycles blend instead of reading as separate replays. */
const REST_IDLE_MS = 220;
const END_ANIMATION = "tc-count-before";
const TALLY_PULSE_MS = 300;

const SALE_AT = 260;
const SALE_MS = 200;
const SPOKE_AT = 420;
const SPOKE_MS = 340;
const NODE_FLASH_MS = 420;
const HUB_AT = 640;
const HUB_MS = 180;
const RIPPLE_AT = 780;
const RIPPLE_MS = 460;
const RIPPLE_ECHO_DELAY = 140;
/** Every other channel flips the instant the ripple lands — one beat, not a chain. */
const SYNC_AT = RIPPLE_AT + RIPPLE_MS;
const SYNC_MS = 200;
const CAPTION_AT = 1420;
const CHIPS_AT = 1520;
const CHIPS_STAGGER = 110;
const CHIPS_MS = 250;
const HOLD_END = 2900;
/** Long enough that nodes dim back gently rather than snapping to the start state. */
const FADE_BACK_MS = 700;
const CYCLE_MS = HOLD_END + FADE_BACK_MS;

const pct = pctOf(CYCLE_MS);

const swapOut = (name: string, at: number, ms: number) => `
@keyframes ${name} {
  0%, ${pct(at)} { opacity: 1; }
  ${pct(at + ms)}, ${pct(HOLD_END)} { opacity: 0; }
  100% { opacity: 1; }
}`;

const swapIn = (name: string, at: number, ms: number) => `
@keyframes ${name} {
  0%, ${pct(at)} { opacity: 0; }
  ${pct(at + ms)}, ${pct(HOLD_END)} { opacity: 1; }
  100% { opacity: 0; }
}`;

const flash = (name: string, at: number, ms: number) => `
@keyframes ${name} {
  0%, ${pct(at)} { opacity: 0; }
  ${pct(at + ms * 0.26)} { opacity: 1; }
  ${pct(at + ms)}, 100% { opacity: 0; }
}`;

const ripple = (name: string, at: number, endOpacity: number) => `
@keyframes ${name} {
  0%, ${pct(at)} { opacity: 0; transform: scale(0.12); }
  ${pct(at + 70)} { opacity: ${endOpacity}; }
  ${pct(at + RIPPLE_MS)}, 100% { opacity: 0; transform: scale(1); }
}`;

const css = `
${heroLoopBaseCss("tc", CYCLE_MS)}

.tc-loop .tc-spoke, .tc-loop .tc-ring-0, .tc-loop .tc-ring-1,
.tc-loop .tc-count-after, .tc-loop .tc-caption,
.tc-loop .tc-chip-0, .tc-loop .tc-chip-1 { opacity: 0; }
${[TC_SELLER, ...TC_OTHERS]
  .map((i) => `.tc-loop .tc-flash-${i}, .tc-loop .tc-after-${i} { opacity: 0; }`)
  .join("\n")}

.tc-loop.is-running .tc-spoke { animation-name: tc-spoke; }
.tc-loop.is-running .tc-ring-0 { animation-name: tc-ring-0; }
.tc-loop.is-running .tc-ring-1 { animation-name: tc-ring-1; }
.tc-loop.is-running .tc-count-before { animation-name: tc-count-before; }
.tc-loop.is-running .tc-count-after { animation-name: tc-count-after; }
.tc-loop.is-running .tc-flash-${TC_SELLER} { animation-name: tc-flash-seller; }
.tc-loop.is-running .tc-listed-${TC_SELLER} { animation-name: tc-listed-seller; }
.tc-loop.is-running .tc-after-${TC_SELLER} { animation-name: tc-after-seller; }
${TC_OTHERS.map(
  (i) =>
    `.tc-loop.is-running .tc-flash-${i} { animation-name: tc-flash-other; }
.tc-loop.is-running .tc-listed-${i} { animation-name: tc-listed-other; }
.tc-loop.is-running .tc-after-${i} { animation-name: tc-after-other; }`,
).join("\n")}
.tc-loop.is-running .tc-caption { animation-name: tc-caption; }
.tc-loop.is-running .tc-chip-0 { animation-name: tc-chip-0; }
.tc-loop.is-running .tc-chip-1 { animation-name: tc-chip-1; }
.tc-loop.is-running .tc-tally { animation-name: tc-tally; }

@keyframes tc-tally {
  0% { transform: scale(1.16); }
  ${pct(TALLY_PULSE_MS)}, 100% { transform: none; }
}

${flash("tc-spoke", SPOKE_AT, SPOKE_MS)}
${ripple("tc-ring-0", RIPPLE_AT, 0.9)}
${ripple("tc-ring-1", RIPPLE_AT + RIPPLE_ECHO_DELAY, 0.45)}
${swapOut("tc-count-before", HUB_AT, HUB_MS)}
${swapIn("tc-count-after", HUB_AT, HUB_MS)}
${flash("tc-flash-seller", SALE_AT, NODE_FLASH_MS)}
${swapOut("tc-listed-seller", SALE_AT, SALE_MS)}
${swapIn("tc-after-seller", SALE_AT, SALE_MS)}
${flash("tc-flash-other", SYNC_AT, NODE_FLASH_MS)}
${swapOut("tc-listed-other", SYNC_AT, SYNC_MS)}
${swapIn("tc-after-other", SYNC_AT, SYNC_MS)}
${swapIn("tc-caption", CAPTION_AT, 220)}
${swapIn("tc-chip-0", CHIPS_AT, CHIPS_MS)}
${swapIn("tc-chip-1", CHIPS_AT + CHIPS_STAGGER, CHIPS_MS)}

@media (prefers-reduced-motion: reduce) {
  .tc-loop .tc-el { animation: none; }
  .tc-loop .tc-count-before { opacity: 0; }
  .tc-loop .tc-count-after { opacity: 1; }
  ${[TC_SELLER, ...TC_OTHERS]
    .map(
      (i) => `.tc-loop .tc-listed-${i} { opacity: 0; }
  .tc-loop .tc-after-${i} { opacity: 1; }`,
    )
    .join("\n  ")}
  .tc-loop .tc-caption, .tc-loop .tc-chip-0, .tc-loop .tc-chip-1 { opacity: 1; }
  .tc-loop .tc-spoke, .tc-loop .tc-ring-0, .tc-loop .tc-ring-1 { opacity: 0; }
  ${[TC_SELLER, ...TC_OTHERS]
    .map((i) => `.tc-loop .tc-flash-${i} { opacity: 0; }`)
    .join("\n  ")}
}
`;

interface TrueCellSyncHeroProps {
  aspect?: string;
  className?: string;
}

export function TrueCellSyncHero({
  aspect = "aspect-[4/3] sm:aspect-[1.8] lg:aspect-[2.4]",
  className,
}: TrueCellSyncHeroProps) {
  const { ref, inView, running, onMouseEnter, onAnimationEnd } = useHeroLoop(
    REST_IDLE_MS,
    END_ANIMATION,
  );
  const [unitsSynced, setUnitsSynced] = useState(0);

  const handleAnimationEnd = useCallback(
    (event: React.AnimationEvent) => {
      if (event.animationName === END_ANIMATION) setUnitsSynced((n) => n + 1);
      onAnimationEnd(event);
    },
    [onAnimationEnd],
  );

  return (
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onAnimationEnd={handleAnimationEnd}
      className={cn(
        "tc-loop relative overflow-hidden bg-base-2",
        aspect,
        inView && "is-playing",
        running && "is-running",
        className,
      )}
    >
      <style>{css}</style>
      <div className="absolute inset-0 flex items-center justify-center">
        <TrueCellSyncScene className="max-h-full" unitsSynced={unitsSynced} />
      </div>
    </div>
  );
}
