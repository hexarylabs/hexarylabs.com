import { cn } from "@/lib/cn";

export const SLC_NODES = [0, 1, 2, 3, 4];
export const SLC_SEGMENTS = [0, 1, 2, 3];
export const SLC_PULSE_TRAVEL = 56;

const NODE_X = (i: number) => 45 + i * 235;
const NODE_W = 170;
const NODE_Y = 130;
const NODE_H = 150;
const WIRE_Y = 210;

const STAGES = [
  { title: "Comment", sub: "keyword trigger" },
  { title: "DM Flow", sub: "ManyChat" },
  { title: "Webhook", sub: "live event post" },
  { title: "Integration", sub: "Zapier" },
  { title: "Subscriber", sub: "MailerLite group" },
];

function StageIcon({ index }: { index: number }) {
  if (index === 0) {
    return <path d="M0 0 H24 V17 H11 L5 23 V17 H0 Z" />;
  }
  if (index === 1) {
    return (
      <>
        <path d="M0 10 L24 0 L14 22 L11 13 Z" />
        <line x1="11" y1="13" x2="24" y2="0" />
      </>
    );
  }
  if (index === 2) {
    return <path d="M13 0 L4 13 L11 13 L9 24 L20 10 L13 10 Z" />;
  }
  if (index === 3) {
    return (
      <>
        <rect x="0" y="1" width="10" height="10" />
        <rect x="14" y="13" width="10" height="10" />
        <polyline points="10,6 19,6 19,13" />
      </>
    );
  }
  return (
    <>
      <rect x="0" y="3" width="24" height="18" />
      <polyline points="0,3 12,13 24,3" />
    </>
  );
}

export function SocialLeadCaptureSchematic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 420"
      role="img"
      aria-label="Pipeline diagram: a keyword comment triggers a ManyChat DM flow, which posts a live webhook event to Zapier, which delivers the captured email to the correct MailerLite subscriber group in real time."
      className={cn("h-auto w-full", className)}
    >
      <text
        x="45"
        y="44"
        className="fill-grey-600 font-sans"
        fontSize="12"
        letterSpacing="0.08em"
      >
        LEAD PIPELINE
      </text>

      {SLC_SEGMENTS.map((s) => (
        <g key={`wire-${s}`}>
          <line
            x1={NODE_X(s) + NODE_W}
            y1={WIRE_Y}
            x2={NODE_X(s) + NODE_W + 56}
            y2={WIRE_Y}
            className="stroke-grey-300"
            strokeWidth="1.6"
          />
          <path
            d={`M ${NODE_X(s) + NODE_W + 47} ${WIRE_Y - 6} L ${NODE_X(s) + NODE_W + 56} ${WIRE_Y} L ${NODE_X(s) + NODE_W + 47} ${WIRE_Y + 6} Z`}
            className="fill-grey-300"
          />
          <line
            x1={NODE_X(s) + NODE_W}
            y1={WIRE_Y}
            x2={NODE_X(s) + NODE_W + 56}
            y2={WIRE_Y}
            pathLength={1}
            className={`slc-el slc-trail-${s} stroke-accent opacity-0`}
            strokeWidth="1.6"
          />
        </g>
      ))}

      {SLC_NODES.map((i) => (
        <g key={`node-${i}`}>
          <g className={`slc-el slc-node-${i}`}>
            <rect
              x={NODE_X(i)}
              y={NODE_Y}
              width={NODE_W}
              height={NODE_H}
              className="fill-base stroke-grey-300"
              strokeWidth="1.6"
            />
            <g
              transform={`translate(${NODE_X(i) + 22}, 154)`}
              className="stroke-grey-500"
              fill="none"
              strokeWidth="1.6"
            >
              <StageIcon index={i} />
            </g>
            <text
              x={NODE_X(i) + 22}
              y="228"
              className="fill-contrast font-display"
              fontSize="16"
              fontWeight="500"
            >
              {STAGES[i].title}
            </text>
            <text
              x={NODE_X(i) + 22}
              y="250"
              className="fill-grey-600 font-sans"
              fontSize="11.5"
            >
              {STAGES[i].sub}
            </text>
          </g>

          <rect
            x={NODE_X(i)}
            y={NODE_Y}
            width={NODE_W}
            height={NODE_H}
            className={`slc-el slc-glow-${i} fill-none stroke-accent opacity-0`}
            strokeWidth="1.6"
          />
        </g>
      ))}

      <g className="slc-el slc-check">
        <circle cx={NODE_X(4) + NODE_W - 26} cy={NODE_Y + 26} r="12" className="fill-accent" />
        <polyline
          points={`${NODE_X(4) + NODE_W - 32},${NODE_Y + 26} ${NODE_X(4) + NODE_W - 28},${NODE_Y + 31} ${NODE_X(4) + NODE_W - 20},${NODE_Y + 21}`}
          className="stroke-white"
          strokeWidth="2.4"
          fill="none"
        />
      </g>

      {SLC_SEGMENTS.map((s) => (
        <g key={`pulse-${s}`} className={`slc-el slc-pulse-${s} opacity-0`}>
          <circle
            cx={NODE_X(s) + NODE_W}
            cy={WIRE_Y}
            r="9"
            className="fill-accent"
            opacity="0.25"
          />
          <circle cx={NODE_X(s) + NODE_W} cy={WIRE_Y} r="4.5" className="fill-accent" />
        </g>
      ))}

      <text x="45" y="348" className="fill-grey-600 font-sans" fontSize="12">
        One comment to a delivered subscriber, in real time.
      </text>
    </svg>
  );
}
