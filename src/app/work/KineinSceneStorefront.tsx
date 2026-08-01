const ROW_Y = [126, 222, 318];
const ROW_QTY = ["12", "6", "9"];

export function KineinSceneStorefront({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 520" aria-hidden="true" className={className}>
      <rect
        x="60"
        y="50"
        width="1080"
        height="420"
        className="fill-base stroke-grey-200"
        strokeWidth="1.6"
      />
      <line x1="60" y1="94" x2="1140" y2="94" className="stroke-grey-200" strokeWidth="1.6" />
      <g className="fill-grey-300">
        <circle cx="88" cy="72" r="5" />
        <circle cx="108" cy="72" r="5" />
        <circle cx="128" cy="72" r="5" />
      </g>
      <text
        x="162"
        y="77"
        className="fill-grey-500 font-sans"
        fontSize="12"
        letterSpacing="0.08em"
      >
        WHOLESALE STOREFRONT
      </text>

      {ROW_Y.map((y, i) => (
        <g key={y}>
          <rect
            x="116"
            y={y + 17}
            width="48"
            height="48"
            className="fill-base-2 stroke-grey-200"
            strokeWidth="1.2"
          />
          <rect x="184" y={y + 26} width="190" height="11" className="fill-grey-300" />
          <rect x="184" y={y + 47} width="120" height="8" className="fill-grey-200" />
          {i > 0 && (
            <>
              <text
                x="430"
                y={y + 47}
                className="fill-grey-500 font-sans"
                fontSize="12"
              >
                Qty
              </text>
              <text
                x="472"
                y={y + 47}
                className="fill-contrast font-display"
                fontSize="15"
                fontWeight="500"
              >
                {ROW_QTY[i]}
              </text>
              <rect x="640" y={y + 34} width="90" height="12" className="fill-grey-300" />
            </>
          )}
          {i < ROW_Y.length - 1 && (
            <line
              x1="100"
              y1={y + 90}
              x2="760"
              y2={y + 90}
              className="stroke-grey-100"
              strokeWidth="1.2"
            />
          )}
        </g>
      ))}

      <rect
        x="424"
        y={ROW_Y[0] + 22}
        width="92"
        height="42"
        className="fill-base stroke-grey-300"
        strokeWidth="1.6"
      />
      <text
        x="458"
        y={ROW_Y[0] + 50}
        textAnchor="middle"
        className="kin-el kin-qty-a fill-contrast font-display"
        fontSize="18"
        fontWeight="500"
      >
        {ROW_QTY[0]}
      </text>
      <text
        x="458"
        y={ROW_Y[0] + 50}
        textAnchor="middle"
        className="kin-el kin-qty-b fill-contrast font-display"
        fontSize="18"
        fontWeight="500"
      >
        24
      </text>
      <g className="fill-grey-500">
        <path d={`M 492 ${ROW_Y[0] + 34} l 6 -8 l 6 8 z`} />
        <path d={`M 492 ${ROW_Y[0] + 52} l 6 8 l 6 -8 z`} />
      </g>

      <rect x="600" y={ROW_Y[0] + 24} width="82" height="10" className="fill-grey-200" />
      <line
        x1="596"
        y1={ROW_Y[0] + 29}
        x2="686"
        y2={ROW_Y[0] + 29}
        className="stroke-grey-500"
        strokeWidth="1.4"
      />
      <g className="kin-el kin-price-chip">
        <rect x="600" y={ROW_Y[0] + 44} width="122" height="24" className="fill-accent" />
        <text
          x="612"
          y={ROW_Y[0] + 60}
          className="fill-white font-sans"
          fontSize="11.5"
          letterSpacing="0.04em"
        >
          Your price
        </text>
      </g>

      <line x1="790" y1="112" x2="790" y2="446" className="stroke-grey-100" strokeWidth="1.6" />

      <text
        x="830"
        y="142"
        className="fill-grey-500 font-sans"
        fontSize="12"
        letterSpacing="0.08em"
      >
        ORDER
      </text>
      {[176, 208, 240].map((y, i) => (
        <g key={y}>
          <rect x="830" y={y - 8} width="150" height="9" className="fill-grey-300" />
          <text
            x="1100"
            y={y}
            textAnchor="end"
            className="fill-grey-600 font-sans"
            fontSize="12"
          >
            {i === 0 ? "24" : ROW_QTY[i]}
          </text>
        </g>
      ))}
      <line x1="830" y1="272" x2="1100" y2="272" className="stroke-grey-100" strokeWidth="1.4" />
      <text x="830" y="304" className="fill-grey-500 font-sans" fontSize="12.5">
        Subtotal
      </text>
      <rect x="1010" y="294" width="90" height="12" className="fill-grey-300" />

      <g className="kin-el kin-submit">
        <rect x="830" y="340" width="270" height="56" className="fill-accent" />
        <text
          x="965"
          y="375"
          textAnchor="middle"
          className="fill-white font-display"
          fontSize="17"
          fontWeight="500"
        >
          Place order
        </text>
      </g>
    </svg>
  );
}
