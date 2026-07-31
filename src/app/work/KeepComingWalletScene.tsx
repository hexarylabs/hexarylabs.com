import { cn } from "@/lib/cn";

const KC_ORANGE = "#F04E23";
const KC_INK = "#171717";

const STAR =
  "M0,-12 L2.7,-3.7 L11.4,-3.7 L4.35,1.4 L7.05,9.7 L0,4.6 L-7.05,9.7 L-4.35,1.4 L-11.4,-3.7 L-2.7,-3.7 Z";

const QR_MODULES: [number, number][] = [
  [48, 0], [72, 0], [108, 12], [48, 12], [60, 24], [84, 24], [120, 24],
  [48, 36], [96, 36], [132, 36], [0, 48], [24, 48], [60, 48], [96, 48],
  [144, 48], [12, 60], [48, 60], [84, 60], [120, 60], [156, 60], [24, 72],
  [60, 72], [108, 72], [144, 72], [0, 84], [36, 84], [72, 84], [120, 84],
  [156, 84], [12, 96], [48, 96], [96, 96], [132, 96], [36, 108], [72, 108],
  [108, 108], [156, 108], [48, 120], [84, 120], [132, 120], [60, 132],
  [96, 132], [144, 132], [48, 144], [108, 144], [72, 156], [132, 156],
];

const STAMP_XS = [152, 230, 308, 386, 464];
const STAMP_Y = 290;
const STAMP_R = 26;

function FinderPattern({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x} y={y} width="34" height="34" fill={KC_INK} />
      <rect x={x + 5} y={y + 5} width="24" height="24" fill="white" />
      <rect x={x + 11} y={y + 11} width="12" height="12" fill={KC_INK} />
    </g>
  );
}

export function KeepComingWalletScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 960 520"
      role="img"
      aria-label="Product demo: a customer scans the shop's QR code and the KeepComing loyalty card in their wallet updates from three of five stamps to four in real time."
      className={cn("h-auto w-full", className)}
    >
      <rect x="98" y="123" width="430" height="290" rx="18" className="fill-none stroke-grey-200" strokeWidth="1.6" />
      <rect x="90" y="115" width="430" height="290" rx="18" fill={KC_ORANGE} />

      <g fill="white">
        <rect x="122" y="142" width="22" height="16" rx="4" />
        <path d="M 144 145 a 5 5 0 0 1 0 10" fill="none" stroke="white" strokeWidth="2.4" />
      </g>
      <path d={STAR} transform="translate(133, 150) scale(0.5)" fill={KC_ORANGE} />
      <text x="158" y="160" fill="white" className="font-display" fontSize="23" fontWeight="500">
        KeepComing
      </text>

      <g className="font-display" fontSize="21" fontWeight="500" textAnchor="end">
        <text x="488" y="160" fill="white" className="kc-el kc-count-old">
          3 of 5
        </text>
        <text x="488" y="160" fill="white" className="kc-el kc-count-new">
          4 of 5
        </text>
      </g>

      <line x1="122" y1="182" x2="488" y2="182" stroke="white" strokeOpacity="0.3" strokeWidth="1" />

      <text x="122" y="215" fill="white" fillOpacity="0.85" className="font-sans" fontSize="13" letterSpacing="0.08em">
        CORNER CAFÉ
      </text>

      {STAMP_XS.slice(0, 3).map((x) => (
        <g key={x}>
          <circle cx={x} cy={STAMP_Y} r={STAMP_R} fill="white" />
          <path d={STAR} transform={`translate(${x}, ${STAMP_Y + 2})`} fill={KC_ORANGE} />
        </g>
      ))}

      <circle
        cx={STAMP_XS[3]}
        cy={STAMP_Y}
        r={STAMP_R}
        fill="white"
        fillOpacity="0.12"
        stroke="white"
        strokeOpacity="0.5"
        strokeWidth="1.6"
      />
      <circle
        cx={STAMP_XS[3]}
        cy={STAMP_Y}
        r={STAMP_R}
        fill="none"
        stroke="white"
        strokeWidth="2"
        className="kc-el kc-ring"
      />
      <g className="kc-el kc-stamp">
        <circle cx={STAMP_XS[3]} cy={STAMP_Y} r={STAMP_R} fill="white" />
        <path d={STAR} transform={`translate(${STAMP_XS[3]}, ${STAMP_Y + 2})`} fill={KC_ORANGE} />
      </g>
      <text
        x={STAMP_XS[3]}
        y={STAMP_Y - 42}
        fill="white"
        textAnchor="middle"
        className="kc-el kc-plus font-display"
        fontSize="17"
        fontWeight="500"
      >
        +1
      </text>

      <circle
        cx={STAMP_XS[4]}
        cy={STAMP_Y}
        r={STAMP_R}
        fill="white"
        fillOpacity="0.12"
        stroke="white"
        strokeOpacity="0.5"
        strokeWidth="1.6"
      />

      <text x="122" y="378" fill="white" fillOpacity="0.7" className="font-sans" fontSize="11.5" letterSpacing="0.08em">
        FREE COFFEE AFTER 5 STAMPS
      </text>

      <rect x="648" y="123" width="230" height="290" rx="10" className="fill-none stroke-grey-200" strokeWidth="1.6" />
      <rect x="640" y="115" width="230" height="290" rx="10" fill="white" className="stroke-grey-200" strokeWidth="1.6" />

      <g transform="translate(670, 145)">
        <FinderPattern x={0} y={0} />
        <FinderPattern x={136} y={0} />
        <FinderPattern x={0} y={136} />
        {QR_MODULES.map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="9" height="9" fill={KC_INK} />
        ))}
      </g>

      <g className="kc-el kc-scan">
        <rect x="655" y="140" width="200" height="10" fill={KC_ORANGE} opacity="0.25" />
        <rect x="655" y="143" width="200" height="3.5" fill={KC_ORANGE} />
      </g>

      <text x="755" y="352" textAnchor="middle" className="fill-grey-600 font-sans" fontSize="12" letterSpacing="0.08em">
        SCAN TO EARN
      </text>
    </svg>
  );
}
