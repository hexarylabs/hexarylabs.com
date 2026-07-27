import { cn } from "@/lib/cn";

/** Same visual language as Schematic.tsx / EdenSchematic.tsx: hairline boxes, accent "core" nodes, thin arrows. */
export function MedicalRecordsSchematic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 960 420"
      role="img"
      aria-label="Schematic diagram: Litify, Filevine, and Zendesk each sync bidirectionally with an integration middleware; Zendesk's closed tickets also feed an AI backend, which surfaces suggestions to staff tools."
      className={cn("h-auto w-full bg-base-2", className)}
    >
      <g className="fill-none stroke-grey-300" strokeWidth="1.6">
        <rect x="40" y="20" width="180" height="90" />
        <rect x="40" y="155" width="180" height="90" />
        <rect x="40" y="290" width="180" height="90" />
      </g>

      <rect
        x="300"
        y="150"
        width="220"
        height="110"
        className="fill-base stroke-accent"
        strokeWidth="1.6"
      />

      <rect
        x="580"
        y="70"
        width="200"
        height="90"
        className="fill-base stroke-accent"
        strokeWidth="1.6"
      />

      <g className="fill-none stroke-grey-300" strokeWidth="1.6">
        <rect x="580" y="280" width="200" height="90" />
      </g>

      <g className="fill-contrast font-display" fontSize="15" fontWeight="500">
        <text x="130" y="60" textAnchor="middle">
          Litify
        </text>
        <text x="130" y="80" textAnchor="middle" fontSize="12" className="fill-grey-600 font-sans">
          Salesforce
        </text>

        <text x="130" y="195" textAnchor="middle">
          Filevine
        </text>

        <text x="130" y="330" textAnchor="middle">
          Zendesk
        </text>
        <text x="130" y="350" textAnchor="middle" fontSize="12" className="fill-grey-600 font-sans">
          support &amp; tickets
        </text>

        <text x="680" y="360" textAnchor="middle" fontSize="15">
          Staff tools
        </text>
      </g>

      <g className="fill-accent font-display" fontSize="16" fontWeight="500">
        <text x="410" y="200" textAnchor="middle">
          Integration
        </text>
        <text x="410" y="222" textAnchor="middle">
          middleware
        </text>

        <text x="680" y="112" textAnchor="middle" fontSize="15">
          AI backend
        </text>
      </g>

      <text x="410" y="242" textAnchor="middle" fontSize="12" className="fill-grey-600 font-sans">
        Laravel · PHI-safe by design
      </text>
      <text x="680" y="132" textAnchor="middle" fontSize="12" className="fill-grey-600 font-sans">
        Bedrock · suggest-only
      </text>

      <g
        className="stroke-grey-500"
        strokeWidth="1.6"
        markerStart="url(#mr-arrow)"
        markerEnd="url(#mr-arrow)"
      >
        <line x1="224" y1="65" x2="300" y2="185" />
        <line x1="224" y1="200" x2="300" y2="200" />
        <line x1="224" y1="335" x2="300" y2="230" />
      </g>

      <g className="stroke-grey-500" strokeWidth="1.6" markerEnd="url(#mr-arrow)">
        <polyline
          points="220,315 540,315 540,115 576,115"
          className="fill-none"
        />
        <line x1="680" y1="164" x2="680" y2="276" />
      </g>

      <defs>
        <marker
          id="mr-arrow"
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
