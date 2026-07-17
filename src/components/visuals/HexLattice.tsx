/**
 * Hexary's hero mark: a pointy-top hex lattice with a lit focal cluster.
 *
 * Original to Hexary. Where the reference frames a product screenshot in a
 * Figma selection box, we use an engineering-drawing frame (corner brackets,
 * dimension label, blueprint dot-grid) around a generated lattice.
 * Pure SVG — no image bytes, sharp at any DPR.
 *
 * Emphasis runs outward from the centre: solid → accent → tinted → line only.
 */

const R = 26; // circumradius
const COLS = 7;
const ROWS = 5;

const dx = Math.sqrt(3) * R; // horizontal spacing
const dy = 1.5 * R; // vertical spacing

/** One pointy-top hexagon on the origin; placed via <use x y>. */
const HEX_POINTS = Array.from({ length: 6 }, (_, i) => {
  const a = (Math.PI / 180) * (60 * i - 90);
  return `${(R * Math.cos(a)).toFixed(1)},${(R * Math.sin(a)).toFixed(1)}`;
}).join(" ");

// Emphasis map, keyed "row-col".
const SOLID = new Set(["2-3"]); // the core
const ACCENT = new Set(["1-3", "2-2", "3-3"]); // lit ring
const TINT = new Set(["2-4", "1-2", "3-2", "2-1"]); // falloff
const OMIT = new Set(["0-0", "0-6", "4-0", "4-6", "1-0", "3-6", "0-5", "4-1"]);

export function HexLattice({ className }: { className?: string }) {
  const cells: React.ReactElement[] = [];

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const key = `${row}-${col}`;
      if (OMIT.has(key)) continue;

      const cx = dx / 2 + col * dx + (row % 2 ? dx / 2 : 0);
      const cy = R + row * dy;

      const style = SOLID.has(key)
        ? "fill-contrast-2 stroke-contrast-2"
        : ACCENT.has(key)
          ? "fill-accent stroke-accent"
          : TINT.has(key)
            ? "fill-accent/10 stroke-accent/45"
            : "fill-base stroke-grey-300";

      cells.push(
        <use
          key={key}
          href="#hero-hex"
          x={cx.toFixed(0)}
          y={cy.toFixed(0)}
          className={style}
        />,
      );
    }
  }

  const w = dx * (COLS + 0.5);
  const h = dy * (ROWS - 1) + 2 * R;

  return (
    <div className={className}>
      <div className="relative aspect-4/3 w-full bg-base-2">
        {/* Blueprint substrate */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-grey-300) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <Corner className="left-0 top-0 border-l-[0.8px] border-t-[0.8px]" />
        <Corner className="right-0 top-0 border-r-[0.8px] border-t-[0.8px]" />
        <Corner className="bottom-0 left-0 border-b-[0.8px] border-l-[0.8px]" />
        <Corner className="bottom-0 right-0 border-b-[0.8px] border-r-[0.8px]" />

        <svg
          viewBox={`0 0 ${w} ${h}`}
          role="img"
          aria-label="Abstract hexagonal lattice representing Hexary Labs"
          className="absolute inset-0 size-full p-12"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <polygon id="hero-hex" points={HEX_POINTS} strokeWidth="1.25" />
          </defs>
          {cells}
        </svg>

        <span className="absolute bottom-4 right-5 font-display text-small uppercase tracking-widest text-grey-600">
          Hexary — 001
        </span>
      </div>
    </div>
  );
}

function Corner({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute z-10 size-6 border-contrast-2 ${className}`}
    />
  );
}
