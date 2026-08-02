import { cn } from "@/lib/cn";

const CX = 600;
const CY = 268;
const RX = 430;
const RY = 170;
const NODE_W = 158;
const NODE_H = 60;

const CHANNELS = ["Amazon", "eBay", "Back Market", "Shopify", "+ more channels"];

/** Node centres on the ring — the ripple is an ellipse of the same radii, so it
 *  reaches every node on the same frame rather than one after another. */
const NODE_POS = CHANNELS.map((_, i) => {
  const angle = (-90 + i * (360 / CHANNELS.length)) * (Math.PI / 180);
  return { cx: CX + RX * Math.cos(angle), cy: CY + RY * Math.sin(angle) };
});

export const TC_SELLER = 1;
export const TC_OTHERS = CHANNELS.map((_, i) => i).filter((i) => i !== TC_SELLER);
export const TC_RING_RX = RX;
export const TC_RING_RY = RY;

export function TrueCellSyncScene({
  className,
  unitsSynced,
}: {
  className?: string;
  /** Counts the sales this animation has actually shown, so the loop reads as ongoing.
   *  Deliberately a tally of the demo itself, not a figure from the case study. */
  unitsSynced: number;
}) {
  return (
    <svg
      viewBox="0 0 1200 520"
      role="img"
      aria-label="Radial sync diagram: a single unit is listed across Amazon, eBay, Back Market, Shopify and more. When it sells on one channel, the rules engine at the centre decrements it and pulls the listing from every other channel in the same beat, so the unit cannot be sold twice."
      className={cn("h-auto w-full", className)}
    >
      <text
        x="60"
        y="40"
        className="fill-grey-600 font-sans"
        fontSize="12"
        letterSpacing="0.08em"
      >
        MULTI-CHANNEL SYNC
      </text>
      <text x="60" y="66" className="fill-grey-500 font-sans" fontSize="11.5">
        units synced in this demo
      </text>
      <text
        x="60"
        y="98"
        className="tc-el tc-tally fill-contrast font-display"
        fontSize="26"
        fontWeight="500"
      >
        {unitsSynced}
      </text>

      <g className="stroke-grey-300" strokeWidth="1.4">
        {NODE_POS.map((p, i) => (
          <line key={i} x1={CX} y1={CY} x2={p.cx} y2={p.cy} />
        ))}
      </g>
      <line
        x1={CX}
        y1={CY}
        x2={NODE_POS[TC_SELLER].cx}
        y2={NODE_POS[TC_SELLER].cy}
        className="tc-el tc-spoke stroke-accent"
        strokeWidth="2.4"
      />

      <ellipse
        cx={CX}
        cy={CY}
        rx={RX}
        ry={RY}
        className="tc-el tc-ring-0 fill-none stroke-accent"
        strokeWidth="2"
      />
      <ellipse
        cx={CX}
        cy={CY}
        rx={RX}
        ry={RY}
        className="tc-el tc-ring-1 fill-none stroke-accent"
        strokeWidth="1.4"
      />

      {NODE_POS.map((p, i) => (
        <g key={i}>
          <rect
            x={p.cx - NODE_W / 2}
            y={p.cy - NODE_H / 2}
            width={NODE_W}
            height={NODE_H}
            className="fill-base stroke-grey-300"
            strokeWidth="1.6"
          />
          <rect
            x={p.cx - NODE_W / 2}
            y={p.cy - NODE_H / 2}
            width={NODE_W}
            height={NODE_H}
            className={`tc-el tc-flash-${i} fill-none stroke-accent`}
            strokeWidth="2"
          />
          <text
            x={p.cx}
            y={p.cy - 4}
            textAnchor="middle"
            className="fill-contrast font-display"
            fontSize={i === 4 ? "12.5" : "13.5"}
            fontWeight="500"
          >
            {CHANNELS[i]}
          </text>
          <text
            x={p.cx}
            y={p.cy + 18}
            textAnchor="middle"
            className={`tc-el tc-listed-${i} fill-grey-500 font-sans`}
            fontSize="11"
          >
            Listed
          </text>
          <text
            x={p.cx}
            y={p.cy + 18}
            textAnchor="middle"
            className={`tc-el tc-after-${i} fill-accent font-sans`}
            fontSize="11"
            fontWeight={i === TC_SELLER ? "500" : undefined}
          >
            {i === TC_SELLER ? "SOLD" : "Pulled"}
          </text>
        </g>
      ))}

      <rect x="500" y="208" width="200" height="120" className="fill-contrast-2" />
      <text
        x={CX}
        y="238"
        textAnchor="middle"
        className="fill-grey-500 font-sans"
        fontSize="11"
        letterSpacing="0.08em"
      >
        RULES ENGINE
      </text>
      <text
        x={CX}
        y="292"
        textAnchor="middle"
        className="tc-el tc-count-before fill-white font-display"
        fontSize="38"
        fontWeight="500"
      >
        1
      </text>
      <text
        x={CX}
        y="292"
        textAnchor="middle"
        className="tc-el tc-count-after fill-white font-display"
        fontSize="38"
        fontWeight="500"
      >
        0
      </text>
      <text
        x={CX}
        y="314"
        textAnchor="middle"
        className="fill-grey-500 font-sans"
        fontSize="10.5"
      >
        unit in stock · serial-level
      </text>

      <text
        x="60"
        y="487"
        className="tc-el tc-caption fill-grey-600 font-sans"
        fontSize="13"
      >
        Sold once — no double-sale.
      </text>

      <g className="tc-el tc-chip-0">
        <rect
          x="744"
          y="469"
          width="212"
          height="28"
          className="fill-base stroke-grey-300"
          strokeWidth="1.2"
        />
        <circle cx="762" cy="483" r="6.5" className="fill-accent" />
        <polyline
          points="759,483 761.5,486 765.5,479"
          className="stroke-white"
          strokeWidth="1.6"
          fill="none"
        />
        <text x="776" y="487" className="fill-contrast font-sans" fontSize="11.5">
          99.7% inventory accuracy
        </text>
      </g>
      <g className="tc-el tc-chip-1">
        <rect
          x="966"
          y="469"
          width="174"
          height="28"
          className="fill-base stroke-grey-300"
          strokeWidth="1.2"
        />
        <text x="980" y="487" className="fill-contrast font-sans" fontSize="11.5">
          14 min/day to reconcile
        </text>
      </g>
    </svg>
  );
}
