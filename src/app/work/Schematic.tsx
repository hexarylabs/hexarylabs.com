import { cn } from "@/lib/cn";

export function Schematic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 960 420"
      role="img"
      aria-label="Schematic diagram: a warehouse management system and a CRM connected through a central integration layer, with a reconciliation job and a review queue attached."
      className={cn("h-auto w-full bg-base-2", className)}
    >
      <g className="fill-none stroke-grey-300" strokeWidth="1.6">
        <rect x="40" y="120" width="220" height="110" />
        <rect x="700" y="120" width="220" height="110" />
        <rect x="700" y="280" width="220" height="90" />
      </g>

      <rect
        x="380"
        y="100"
        width="200"
        height="150"
        className="fill-base stroke-accent"
        strokeWidth="1.6"
      />

      <rect
        x="380"
        y="310"
        width="200"
        height="70"
        className="fill-none stroke-grey-300"
        strokeWidth="1.6"
        strokeDasharray="5 5"
      />

      <g className="fill-contrast font-display" fontSize="17" fontWeight="500">
        <text x="150" y="168" textAnchor="middle">
          Warehouse
        </text>
        <text x="150" y="192" textAnchor="middle">
          system
        </text>

        <text x="810" y="168" textAnchor="middle">
          CRM
        </text>
        <text x="810" y="192" textAnchor="middle">
          platform
        </text>

        <text x="810" y="332" textAnchor="middle" fontSize="15">
          Review queue
        </text>
        <text x="810" y="352" textAnchor="middle" fontSize="13" className="fill-grey-600">
          unmatched records
        </text>
      </g>

      <g className="fill-accent font-display" fontSize="17" fontWeight="500">
        <text x="480" y="162" textAnchor="middle">
          Integration
        </text>
        <text x="480" y="186" textAnchor="middle">
          layer
        </text>
      </g>

      <text
        x="480"
        y="212"
        textAnchor="middle"
        fontSize="13"
        className="fill-grey-600 font-sans"
      >
        identity mapping
      </text>

      <g className="fill-grey-600 font-sans" fontSize="13">
        <text x="480" y="343" textAnchor="middle">
          Nightly reconciliation
        </text>
        <text x="480" y="362" textAnchor="middle">
          alerts on divergence
        </text>
      </g>

      <g className="stroke-grey-500" strokeWidth="1.6" markerEnd="url(#arrow)">
        <line x1="264" y1="160" x2="374" y2="160" />
        <line x1="586" y1="160" x2="696" y2="160" />
        <line x1="696" y1="196" x2="586" y2="196" />
        <line x1="374" y1="196" x2="264" y2="196" />
        <line x1="480" y1="254" x2="480" y2="304" />
        <line x1="586" y1="345" x2="696" y2="325" />
      </g>

      <g
        className="fill-grey-600 font-sans"
        fontSize="12"
        textAnchor="middle"
      >
        <text x="319" y="150">
          stock
        </text>
        <text x="641" y="150">
          stock
        </text>
        <text x="641" y="216">
          pricing
        </text>
        <text x="319" y="216">
          pricing
        </text>
      </g>

      <defs>
        <marker
          id="arrow"
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
    </svg>
  );
}
