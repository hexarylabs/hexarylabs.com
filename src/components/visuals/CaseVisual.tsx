import { cn } from "@/lib/cn";

/**
 * Deterministic abstract visual for a case-study card.
 *
 * ⚠️ Stands in for real project imagery. We have no Hexary screenshots and will
 * not fabricate product shots, so these are honest geometric compositions
 * rather than fake UI. Swap for real 1280×1000 (2×) images via `next/image`
 * when they exist — the card already sizes for that ratio.
 *
 * A fine lattice reads as *texture*; a small lit cluster carries the accent.
 * Four seeds share one motif so the grid reads as a set.
 */
const R = 30;
const COLS = 11;
const ROWS = 11;
const dx = Math.sqrt(3) * R;
const dy = 1.5 * R;

const VB_W = dx * (COLS + 0.5);
const VB_H = VB_W / 1.28; // match the card's aspect so `slice` barely crops

/** One hexagon centred on the origin; instances are placed with <use x y>. */
const HEX_POINTS = Array.from({ length: 6 }, (_, i) => {
  const a = (Math.PI / 180) * (60 * i - 90);
  return `${(R * Math.cos(a)).toFixed(1)},${(R * Math.sin(a)).toFixed(1)}`;
}).join(" ");

/** Lit clusters — a distinct signature shape per case study. */
const LIT: Record<number, string[]> = {
  1: ["4-4", "4-5", "5-4", "3-5"], // diamond
  2: ["3-6", "4-6", "5-6", "6-6"], // vertical run
  3: ["4-3", "4-4", "4-5", "4-6"], // horizontal seam
  4: ["3-3", "4-5", "5-3", "4-7"], // scatter
};

export function CaseVisual({
  seed,
  className,
}: {
  seed: number;
  className?: string;
}) {
  const lit = new Set(LIT[seed] ?? LIT[1]);
  const id = `hex-${seed}`;
  const cells: React.ReactElement[] = [];

  // One <polygon> in <defs>, then a light <use> per cell. Emitting 121 full
  // polygons each with its own points string bloated the HTML (and the RSC
  // payload, since these render inside a client-component boundary).
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cx = dx / 2 + col * dx + (row % 2 ? dx / 2 : 0);
      const cy = R + row * dy;
      if (cy - R > VB_H) continue;

      cells.push(
        <use
          key={`${row}-${col}`}
          href={`#${id}`}
          x={cx.toFixed(0)}
          y={cy.toFixed(0)}
          className={
            lit.has(`${row}-${col}`)
              ? "fill-accent stroke-accent"
              : "fill-none stroke-white/10"
          }
        />,
      );
    }
  }

  return (
    <div
      className={cn(
        "relative aspect-[1.28] w-full overflow-hidden bg-surface-dark",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_100%_at_30%_25%,rgba(91,69,245,0.28),transparent_62%)]"
      />
      <svg
        viewBox={`0 0 ${VB_W.toFixed(0)} ${VB_H.toFixed(0)}`}
        aria-hidden="true"
        className="absolute inset-0 size-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <polygon id={id} points={HEX_POINTS} strokeWidth="1" />
        </defs>
        {cells}
      </svg>
    </div>
  );
}
