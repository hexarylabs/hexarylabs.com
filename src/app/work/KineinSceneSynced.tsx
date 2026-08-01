const LOG = [
  "Order → sales order",
  "Inventory → storefront",
  "Pricing → storefront",
];
const LOG_Y = [206, 262, 318];

export function KineinSceneSynced({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 520" aria-hidden="true" className={className}>
      <rect
        x="80"
        y="110"
        width="470"
        height="300"
        className="fill-base stroke-grey-200"
        strokeWidth="1.6"
      />
      <text
        x="112"
        y="158"
        className="fill-grey-500 font-sans"
        fontSize="12"
        letterSpacing="0.08em"
      >
        STOREFRONT · IN STOCK
      </text>
      <text
        x="112"
        y="268"
        className="kin-el kin-stock-a fill-contrast font-display"
        fontSize="66"
        fontWeight="500"
      >
        240
      </text>
      <text
        x="112"
        y="268"
        className="kin-el kin-stock-b fill-contrast font-display"
        fontSize="66"
        fontWeight="500"
      >
        216
      </text>
      <g className="kin-el kin-stock-b">
        <path d="M 330 236 l 9 0 l -4.5 11 z" className="fill-accent" />
        <text x="352" y="248" className="fill-accent font-display" fontSize="20" fontWeight="500">
          24
        </text>
      </g>
      <text x="112" y="320" className="fill-grey-600 font-sans" fontSize="13.5">
        inventory synced back, no re-keying
      </text>

      <rect
        x="610"
        y="110"
        width="510"
        height="300"
        className="fill-base stroke-grey-200"
        strokeWidth="1.6"
      />
      <text
        x="642"
        y="158"
        className="fill-grey-500 font-sans"
        fontSize="12"
        letterSpacing="0.08em"
      >
        SYNC LOG
      </text>

      {LOG.map((label, i) => (
        <g key={label} className={`kin-el kin-log-${i}`}>
          <circle cx="655" cy={LOG_Y[i]} r="12" className="fill-accent" />
          <polyline
            points={`649,${LOG_Y[i]} 653,${LOG_Y[i] + 5} 662,${LOG_Y[i] - 5}`}
            className="stroke-white"
            strokeWidth="2.4"
            fill="none"
          />
          <text
            x="684"
            y={LOG_Y[i] + 5}
            className="fill-contrast font-sans"
            fontSize="14.5"
          >
            {label}
          </text>
          <text
            x="1088"
            y={LOG_Y[i] + 5}
            textAnchor="end"
            className="fill-grey-500 font-sans"
            fontSize="11.5"
          >
            just now
          </text>
        </g>
      ))}

      <text x="80" y="462" className="fill-grey-600 font-sans" fontSize="14">
        Both surfaces agree — no middleware, no re-keying.
      </text>
    </svg>
  );
}
