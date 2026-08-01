import { cn } from "@/lib/cn";

export const B2B_COLS = [0, 1, 2];
export const B2B_CHECKS = [0, 1, 2, 3, 4, 5];
export const B2B_WIPE_TRAVEL = 1248;

const TILE_X = [60, 430, 800];
const TILE_Y = [140, 320];
const TILE_W = 340;
const TILE_H = 150;

export const B2B_WIPE_START_X = -8;
/** Column mid-points, so the hero unlocks each column exactly as the wipe crosses it. */
export const B2B_COL_CENTERS = TILE_X.map((x) => x + TILE_W / 2);
const MOQ = ["12", "24", "6"];

function Padlock({ x, y }: { x: number; y: number }) {
  return (
    <g
      transform={`translate(${x}, ${y})`}
      className="stroke-grey-600"
      fill="none"
      strokeWidth="1.4"
    >
      <rect x="0" y="6" width="12" height="9" />
      <path d="M2.5 6 V4 a3.5 3.5 0 0 1 7 0 V6" />
    </g>
  );
}

function Check({ cx, cy, r = 10 }: { cx: number; cy: number; r?: number }) {
  return (
    <>
      <circle cx={cx} cy={cy} r={r} className="fill-accent" />
      <polyline
        points={`${cx - r * 0.45},${cy} ${cx - r * 0.1},${cy + r * 0.4} ${cx + r * 0.5},${cy - r * 0.42}`}
        className="stroke-white"
        strokeWidth="2.2"
        fill="none"
      />
    </>
  );
}

export function B2BAccessCatalogScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 520"
      role="img"
      aria-label="A wholesale catalog with its pricing redacted behind a verification lock. Once the shop and the brand are both verified, the redaction lifts and private wholesale pricing and minimum order quantities become visible."
      className={cn("h-auto w-full", className)}
    >
      <g className="b2b-el b2b-chip-locked">
        <rect
          x="60"
          y="64"
          width="352"
          height="34"
          className="fill-base stroke-grey-300"
          strokeWidth="1.4"
        />
        <Padlock x={78} y={73} />
        <text x="104" y="86" className="fill-grey-600 font-sans" fontSize="12.5">
          Wholesale pricing · verification required
        </text>
      </g>
      <g className="b2b-el b2b-chip-unlocked">
        <rect x="60" y="64" width="264" height="34" className="fill-accent" />
        <Check cx={80} cy={81} r={8} />
        <text x="98" y="86" className="fill-white font-sans" fontSize="12.5">
          Private pricing unlocked
        </text>
        <text
          x="1140"
          y="86"
          textAnchor="end"
          className="fill-grey-600 font-sans"
          fontSize="12"
        >
          2,400+ verified shops · 80+ vetted brands
        </text>
      </g>

      {TILE_Y.map((ty, row) =>
        TILE_X.map((tx, col) => (
          <g key={`${row}-${col}`}>
            <rect
              x={tx}
              y={ty}
              width={TILE_W}
              height={TILE_H}
              className="fill-base stroke-grey-200"
              strokeWidth="1.6"
            />
            <rect
              x={tx + 20}
              y={ty + 20}
              width="62"
              height="62"
              className="fill-base-2 stroke-grey-200"
              strokeWidth="1.2"
            />
            <rect x={tx + 100} y={ty + 30} width="150" height="11" className="fill-grey-300" />
            <rect x={tx + 100} y={ty + 52} width="100" height="8" className="fill-grey-200" />

            <g className={`b2b-el b2b-locked-${col}`}>
              <rect
                x={tx + 20}
                y={ty + 102}
                width="140"
                height="30"
                className="fill-grey-300"
              />
              <Padlock x={tx + 32} y={ty + 109} />
              <rect
                x={tx + 52}
                y={ty + 113}
                width="94"
                height="8"
                className="fill-grey-200"
              />
            </g>

            <g className={`b2b-el b2b-unlocked-${col}`}>
              <rect
                x={tx + 20}
                y={ty + 106}
                width="96"
                height="15"
                className="fill-accent"
              />
              <rect
                x={tx + 130}
                y={ty + 102}
                width="78"
                height="24"
                className="fill-base stroke-grey-300"
                strokeWidth="1.2"
              />
              <text
                x={tx + 142}
                y={ty + 119}
                className="fill-grey-600 font-sans"
                fontSize="11"
              >
                MOQ {MOQ[col]}
              </text>
            </g>
          </g>
        )),
      )}

      <rect
        x="0"
        y="0"
        width="1200"
        height="520"
        className="b2b-el b2b-dim fill-base-2"
      />

      <g className="b2b-el b2b-panel">
        <rect
          x="288"
          y="103"
          width="640"
          height="330"
          className="fill-none stroke-grey-200"
          strokeWidth="1.6"
        />
        <rect
          x="280"
          y="95"
          width="640"
          height="330"
          className="fill-base stroke-grey-300"
          strokeWidth="1.6"
        />
        <text
          x="312"
          y="140"
          className="fill-grey-500 font-sans"
          fontSize="12"
          letterSpacing="0.08em"
        >
          VERIFICATION
        </text>
        {["SHOP", "BRAND"].map((label, col) => (
          <text
            key={label}
            x={312 + col * 308}
            y="180"
            className="fill-contrast font-display"
            fontSize="15"
            fontWeight="500"
          >
            {label}
          </text>
        ))}
        {[0, 1, 2].map((row) =>
          [0, 1].map((col) => {
            const x = 312 + col * 308;
            const y = 218 + row * 40;
            return (
              <g key={`${row}-${col}`}>
                <rect
                  x={x}
                  y={y - 9}
                  width="160"
                  height="9"
                  className="fill-grey-300"
                />
                <g className={`b2b-el b2b-check-${row * 2 + col}`}>
                  <Check cx={x + 190} cy={y - 4} r={10} />
                </g>
              </g>
            );
          }),
        )}
        <text x="312" y="360" className="fill-grey-600 font-sans" fontSize="13">
          Verified in under 24 hours
        </text>
        <g className="b2b-el b2b-badge">
          <rect x="762" y="338" width="126" height="34" className="fill-accent" />
          <Check cx={782} cy={355} r={8} />
          <text x="800" y="360" className="fill-white font-sans" fontSize="12.5">
            Verified
          </text>
        </g>
      </g>

      <g className="b2b-el b2b-wipe">
        <rect x="-44" y="0" width="36" height="520" className="fill-accent" opacity="0.14" />
        <rect x="-8" y="0" width="6" height="520" className="fill-accent" />
      </g>
    </svg>
  );
}
