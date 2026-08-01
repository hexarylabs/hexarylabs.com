const FIELDS = [
  { label: "Customer", width: 220 },
  { label: "Ship-to", width: 300 },
  { label: "Terms", width: 160 },
];
const FIELD_Y = [180, 218, 256];
const ROW_Y = [352, 388, 424];
const ROW_QTY = ["24", "6", "9"];

export function KineinSceneSalesOrder({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 520" aria-hidden="true" className={className}>
      <text
        x="80"
        y="64"
        className="fill-grey-500 font-sans"
        fontSize="12"
        letterSpacing="0.08em"
      >
        ACCOUNTING SYSTEM
      </text>
      <text x="80" y="106" className="fill-white font-display" fontSize="27" fontWeight="500">
        Sales Order
      </text>
      <text x="80" y="132" className="fill-grey-500 font-sans" fontSize="13">
        created automatically — no re-keying
      </text>

      {FIELDS.map((field, i) => (
        <g key={field.label}>
          <text
            x="80"
            y={FIELD_Y[i]}
            className="fill-grey-500 font-sans"
            fontSize="13"
          >
            {field.label}
          </text>
          <rect
            x="280"
            y={FIELD_Y[i] - 12}
            width={field.width}
            height="13"
            className={`kin-el kin-fill kin-f-${i} fill-grey-500`}
          />
        </g>
      ))}

      <line x1="80" y1="286" x2="1120" y2="286" className="stroke-grey-700" strokeWidth="1.6" />

      <g className="fill-grey-500 font-sans" fontSize="12" letterSpacing="0.06em">
        <text x="80" y="316">LINE ITEM</text>
        <text x="760" y="316">QTY</text>
        <text x="980" y="316">AMOUNT</text>
      </g>

      {ROW_Y.map((y, i) => (
        <g key={y} className={`kin-el kin-r-${i}`}>
          <rect x="80" y={y - 11} width="240" height="11" className="fill-grey-500" />
          <text x="760" y={y} className="fill-white font-display" fontSize="15" fontWeight="500">
            {ROW_QTY[i]}
          </text>
          <rect x="980" y={y - 11} width="90" height="11" className="fill-grey-500" />
        </g>
      ))}

      <line x1="80" y1="448" x2="1120" y2="448" className="stroke-grey-700" strokeWidth="1.6" />
      <text x="760" y="482" className="fill-grey-300 font-sans" fontSize="13">
        Total
      </text>
      <rect
        x="980"
        y="470"
        width="120"
        height="14"
        className="kin-el kin-fill kin-total fill-accent"
      />

      <text x="80" y="482" className="fill-grey-500 font-sans" fontSize="11">
        Fishbowl · Acumatica · QuickBooks · Business Central · NetSuite · Xero
      </text>
    </svg>
  );
}
