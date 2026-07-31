export interface FlowStep {
  number: string;
  title: string;
  sub: string;
  accent?: boolean;
}

interface FlowStripProps {
  label: string;
  ariaLabel: string;
  steps: FlowStep[];
}

export function FlowStrip({ label, ariaLabel, steps }: FlowStripProps) {
  return (
    <svg viewBox="0 0 960 240" role="img" aria-label={ariaLabel} className="h-auto w-full">
      <text
        x="40"
        y="36"
        className="fill-grey-600 font-sans"
        fontSize="12"
        letterSpacing="0.08em"
      >
        {label}
      </text>

      {steps.map((step, i) => {
        const x = 40 + i * 230;
        return (
          <g key={step.number}>
            {step.accent ? (
              <rect x={x} y="70" width="200" height="120" className="fill-accent" />
            ) : (
              <rect
                x={x}
                y="70"
                width="200"
                height="120"
                className="fill-base stroke-grey-300"
                strokeWidth="1.6"
              />
            )}
            <text
              x={x + 24}
              y="104"
              className={step.accent ? "fill-grey-300 font-sans" : "fill-grey-500 font-sans"}
              fontSize="12"
              letterSpacing="0.08em"
            >
              {step.number}
            </text>
            <text
              x={x + 24}
              y="142"
              className={
                step.accent
                  ? "fill-white font-display"
                  : "fill-contrast font-display"
              }
              fontSize="17"
              fontWeight="500"
            >
              {step.title}
            </text>
            <text
              x={x + 24}
              y="164"
              className={step.accent ? "fill-grey-300 font-sans" : "fill-grey-600 font-sans"}
              fontSize="12"
            >
              {step.sub}
            </text>

            {i < steps.length - 1 && (
              <>
                <line
                  x1={x + 203}
                  y1="130"
                  x2={x + 218}
                  y2="130"
                  className="stroke-grey-500"
                  strokeWidth="1.6"
                />
                <path
                  d={`M ${x + 217} 124 L ${x + 226} 130 L ${x + 217} 136 Z`}
                  className="fill-grey-500"
                />
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}
