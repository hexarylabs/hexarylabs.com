const SYSTEMS = [
  "Fishbowl",
  "Acumatica",
  "QuickBooks",
  "Microsoft Business Central",
  "NetSuite",
  "Xero",
];

const SYSTEM_CY = [100, 175, 250, 325, 400, 475];

export function KineinSyncDiagram() {
  return (
    <svg
      viewBox="0 0 960 560"
      role="img"
      aria-label="Diagram of Kinein's two-way sync: the Kinein storefront exchanges inventory, customer-specific pricing, and orders directly with Fishbowl, Acumatica, QuickBooks, Microsoft Business Central, NetSuite, or Xero — native connections in both directions with no middleware layer."
      className="h-auto w-full"
    >
      <defs>
        <marker
          id="kin-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-grey-500 stroke-none" />
        </marker>
      </defs>

      <text
        x="40"
        y="36"
        className="fill-grey-600 font-sans"
        fontSize="12"
        letterSpacing="0.08em"
      >
        TWO-WAY SYNC
      </text>

      <rect x="40" y="190" width="290" height="160" className="fill-accent" />
      <text
        x="64"
        y="258"
        className="fill-white font-display"
        fontSize="19"
        fontWeight="500"
      >
        Kinein Storefront
      </text>
      <text x="64" y="282" className="fill-grey-300 font-sans" fontSize="12.5">
        sales rep &amp; customer portals
      </text>
      <text x="64" y="302" className="fill-grey-300 font-sans" fontSize="12.5">
        inventory · pricing · orders
      </text>

      <text
        x="490"
        y="56"
        textAnchor="middle"
        className="fill-grey-600 font-sans"
        fontSize="11"
        letterSpacing="0.04em"
      >
        native two-way sync · no middleware
      </text>

      <line
        x1="336"
        y1="270"
        x2="470"
        y2="270"
        className="stroke-grey-500"
        strokeWidth="1.6"
        markerStart="url(#kin-arrow)"
      />
      <line x1="470" y1="100" x2="470" y2="475" className="stroke-grey-500" strokeWidth="1.6" />
      <g
        className="stroke-grey-500"
        strokeWidth="1.6"
        markerEnd="url(#kin-arrow)"
      >
        {SYSTEM_CY.map((cy) => (
          <line key={cy} x1="470" y1={cy} x2="644" y2={cy} />
        ))}
      </g>

      {SYSTEMS.map((name, i) => (
        <g key={name}>
          <rect
            x="650"
            y={SYSTEM_CY[i] - 30}
            width="270"
            height="60"
            className="fill-base stroke-grey-300"
            strokeWidth="1.6"
          />
          <text
            x="674"
            y={SYSTEM_CY[i] + 5}
            className="fill-contrast font-display"
            fontSize="15"
            fontWeight="500"
          >
            {name}
          </text>
        </g>
      ))}
    </svg>
  );
}
