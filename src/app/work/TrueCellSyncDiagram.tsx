export function TrueCellSyncDiagram() {
  return (
    <svg
      viewBox="0 0 960 560"
      role="img"
      aria-label="Diagram of TrueCell's inventory flow: Amazon, eBay, Back Market, and Shopify sync bidirectionally with a central sync and rules engine. A forecasting and risk layer feeds the engine, which pushes fulfillment to logistics and 3PL providers and keeps QuickBooks, NetSuite, and Snowflake in agreement with the warehouse."
      className="h-auto w-full"
    >
      <text
        x="40"
        y="36"
        className="fill-grey-600 font-sans"
        fontSize="12"
        letterSpacing="0.08em"
      >
        INVENTORY FLOW
      </text>

      <g className="fill-base stroke-grey-300" strokeWidth="1.6">
        <rect x="40" y="80" width="190" height="80" />
        <rect x="40" y="200" width="190" height="80" />
        <rect x="40" y="320" width="190" height="80" />
        <rect x="40" y="440" width="190" height="80" />
      </g>
      <g className="fill-contrast font-display" fontSize="16" fontWeight="500">
        <text x="64" y="126">Amazon</text>
        <text x="64" y="246">eBay</text>
        <text x="64" y="366">Back Market</text>
        <text x="64" y="486">Shopify</text>
      </g>

      <g className="fill-none stroke-grey-500" strokeWidth="1.6">
        <polyline points="230,120 280,120 280,225 330,225" />
        <polyline points="230,240 300,240 300,255 330,255" />
        <polyline points="230,360 300,360 300,285 330,285" />
        <polyline points="230,480 280,480 280,315 330,315" />
      </g>
      <g className="fill-grey-500">
        <circle cx="230" cy="120" r="3.5" />
        <circle cx="230" cy="240" r="3.5" />
        <circle cx="230" cy="360" r="3.5" />
        <circle cx="230" cy="480" r="3.5" />
        <circle cx="330" cy="225" r="3.5" />
        <circle cx="330" cy="255" r="3.5" />
        <circle cx="330" cy="285" r="3.5" />
        <circle cx="330" cy="315" r="3.5" />
      </g>

      <rect x="390" y="60" width="200" height="80" className="fill-contrast-2" />
      <text
        x="490"
        y="97"
        textAnchor="middle"
        className="fill-white font-display"
        fontSize="16"
        fontWeight="500"
      >
        Forecasting &amp; Risk
      </text>
      <text
        x="490"
        y="118"
        textAnchor="middle"
        className="fill-grey-300 font-sans"
        fontSize="11.5"
      >
        demand · anomaly flags
      </text>
      <line x1="490" y1="144" x2="490" y2="188" className="stroke-grey-500" strokeWidth="1.6" />
      <path d="M 484 187 L 496 187 L 490 196 Z" className="fill-grey-500" />

      <rect x="330" y="200" width="280" height="160" className="fill-accent" />
      <text
        x="470"
        y="272"
        textAnchor="middle"
        className="fill-white font-display"
        fontSize="19"
        fontWeight="500"
      >
        Sync &amp; Rules Engine
      </text>
      <text
        x="470"
        y="296"
        textAnchor="middle"
        className="fill-grey-300 font-sans"
        fontSize="12.5"
      >
        reconciliation · routing · no overselling
      </text>

      <g className="fill-none stroke-grey-500" strokeWidth="1.6">
        <polyline points="610,250 655,250 655,190 692,190" />
        <polyline points="610,310 655,310 655,370 692,370" />
      </g>
      <path d="M 691 184 L 700 190 L 691 196 Z" className="fill-grey-500" />
      <path d="M 691 364 L 700 370 L 691 376 Z" className="fill-grey-500" />

      <rect x="700" y="140" width="220" height="100" className="fill-base stroke-grey-300" strokeWidth="1.6" />
      <text x="724" y="186" className="fill-contrast font-display" fontSize="16" fontWeight="500">
        Logistics &amp; 3PL
      </text>
      <text x="724" y="207" className="fill-grey-600 font-sans" fontSize="12">
        fulfillment kickoff
      </text>

      <rect x="700" y="320" width="220" height="100" className="fill-base stroke-grey-300" strokeWidth="1.6" />
      <text x="724" y="366" className="fill-contrast font-display" fontSize="16" fontWeight="500">
        Accounting &amp; BI
      </text>
      <text x="724" y="387" className="fill-grey-600 font-sans" fontSize="11">
        QuickBooks · NetSuite · Snowflake
      </text>
    </svg>
  );
}
