"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import { heroLoopBaseCss, pctOf, useHeroLoop } from "@/lib/heroLoop";
import { KeepComingWalletScene } from "./KeepComingWalletScene";

const IMAGE_HOLD_MS = 2500;
const DISSOLVE_MS = 800;
const SCENE_BEAT_MS = 400;
const SCAN_MS = 700;
const SCAN_TRAVEL_PX = 175;
const UPDATE_LAG_MS = 150;
const STAMP_POP_MS = 550;
const RING_MS = 650;
const PLUS_RISE_MS = 900;
const COUNT_SWAP_MS = 180;
const UPDATED_HOLD_MS = 2000;

const SCENE_IN_MS = IMAGE_HOLD_MS + DISSOLVE_MS;
const SCAN_START_MS = SCENE_IN_MS + SCENE_BEAT_MS;
const SCAN_END_MS = SCAN_START_MS + SCAN_MS;
const STAMP_AT_MS = SCAN_END_MS + UPDATE_LAG_MS;
const HOLD_START_MS = STAMP_AT_MS + STAMP_POP_MS;
const HOLD_END_MS = HOLD_START_MS + UPDATED_HOLD_MS;
const LOOP_MS = HOLD_END_MS + DISSOLVE_MS;

const pct = pctOf(LOOP_MS);

const css = `
${heroLoopBaseCss("kc", LOOP_MS)}
.kc-loop .kc-img { animation-name: kc-img-loop; }
.kc-loop .kc-scene { animation-name: kc-scene-loop; }
.kc-loop .kc-scan { animation-name: kc-scan-sweep; animation-timing-function: linear; }
.kc-loop .kc-stamp { animation-name: kc-stamp-pop; }
.kc-loop .kc-ring { animation-name: kc-ring-pulse; }
.kc-loop .kc-plus { animation-name: kc-plus-rise; }
.kc-loop .kc-count-old { animation-name: kc-count-out; }
.kc-loop .kc-count-new { animation-name: kc-count-in; }
@keyframes kc-img-loop {
  0%, ${pct(IMAGE_HOLD_MS)} { opacity: 1; }
  ${pct(SCENE_IN_MS)}, ${pct(HOLD_END_MS)} { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes kc-scene-loop {
  0%, ${pct(IMAGE_HOLD_MS)} { opacity: 0; }
  ${pct(SCENE_IN_MS)}, ${pct(HOLD_END_MS)} { opacity: 1; }
  100% { opacity: 0; }
}
@keyframes kc-scan-sweep {
  0%, ${pct(SCAN_START_MS)} { opacity: 0; transform: translateY(0); }
  ${pct(SCAN_START_MS + 100)} { opacity: 1; }
  ${pct(SCAN_END_MS)} { opacity: 1; transform: translateY(${SCAN_TRAVEL_PX}px); }
  ${pct(SCAN_END_MS + 120)}, 100% { opacity: 0; transform: translateY(${SCAN_TRAVEL_PX}px); }
}
@keyframes kc-stamp-pop {
  0%, ${pct(STAMP_AT_MS)} { opacity: 0; transform: scale(0.3); }
  ${pct(STAMP_AT_MS + 200)} { opacity: 1; transform: scale(1.22); }
  ${pct(STAMP_AT_MS + STAMP_POP_MS)}, 100% { opacity: 1; transform: scale(1); }
}
@keyframes kc-ring-pulse {
  0%, ${pct(STAMP_AT_MS)} { opacity: 0; transform: scale(0.5); }
  ${pct(STAMP_AT_MS + 120)} { opacity: 0.55; transform: scale(0.9); }
  ${pct(STAMP_AT_MS + RING_MS)}, 100% { opacity: 0; transform: scale(1.7); }
}
@keyframes kc-plus-rise {
  0%, ${pct(STAMP_AT_MS + 80)} { opacity: 0; transform: translateY(0); }
  ${pct(STAMP_AT_MS + 240)} { opacity: 1; }
  ${pct(STAMP_AT_MS + 80 + PLUS_RISE_MS)}, 100% { opacity: 0; transform: translateY(-30px); }
}
@keyframes kc-count-out {
  0%, ${pct(STAMP_AT_MS)} { opacity: 1; }
  ${pct(STAMP_AT_MS + COUNT_SWAP_MS)}, 100% { opacity: 0; }
}
@keyframes kc-count-in {
  0%, ${pct(STAMP_AT_MS)} { opacity: 0; }
  ${pct(STAMP_AT_MS + COUNT_SWAP_MS)}, 100% { opacity: 1; }
}
@media (prefers-reduced-motion: reduce) {
  .kc-loop .kc-el { animation: none; }
  .kc-loop .kc-img { opacity: 1; }
  .kc-loop .kc-scene { opacity: 0; }
}
`;

interface KeepComingAnimatedHeroProps {
  aspect?: string;
  sizes?: string;
  eager?: boolean;
  className?: string;
}

export function KeepComingAnimatedHero({
  aspect = "aspect-[4/3] sm:aspect-[1.8] lg:aspect-[1.9]",
  sizes = "100vw",
  eager = false,
  className,
}: KeepComingAnimatedHeroProps) {
  const { ref, playing } = useHeroLoop();

  return (
    <div
      ref={ref}
      className={cn(
        "kc-loop relative overflow-hidden bg-[#FBF6EE]",
        aspect,
        playing && "is-playing",
        className,
      )}
    >
      <style>{css}</style>
      <div className="kc-scene kc-el absolute inset-0 flex items-center justify-center p-6 sm:p-10 lg:p-12">
        <KeepComingWalletScene className="max-h-full" />
      </div>
      <div className="kc-img kc-el absolute inset-0">
        <Image
          src="/work/keepcoming.png"
          alt="KeepComing's marketing key art, showing the KeepComing logo and a loyalty card in Apple Wallet"
          fill
          sizes={sizes}
          priority={eager}
          className="object-cover object-left"
        />
      </div>
    </div>
  );
}
