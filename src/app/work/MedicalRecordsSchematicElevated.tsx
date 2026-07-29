import { cn } from "@/lib/cn";

/**
 * Elevated card-only rendering of the Medical Records integration diagram —
 * solid-fill "core" nodes (middleware, AI backend) against outlined source/
 * output nodes, orthogonal routing, dot joints for the bidirectional syncs.
 * Used only by the /work index page; the detail hero keeps the original
 * MedicalRecordsSchematic.
 */
export function MedicalRecordsSchematicElevated({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 960 520"
      role="img"
      aria-label="Schematic diagram: Litify, Filevine, and Zendesk sync bidirectionally with an integration middleware layer; Zendesk's closed tickets also feed an AI backend, which surfaces suggestions to staff tools."
      className={cn("h-auto w-full", className)}
    >
      <text
        x="40"
        y="36"
        className="fill-grey-600 font-sans"
        fontSize="12"
        letterSpacing="0.08em"
      >
        SYSTEM ARCHITECTURE
      </text>

      {/* Source systems */}
      <g className="fill-base stroke-grey-300" strokeWidth="1.6">
        <rect x="40" y="70" width="200" height="95" />
        <rect x="40" y="205" width="200" height="95" />
        <rect x="40" y="340" width="200" height="95" />
      </g>

      <g className="fill-contrast font-display" fontSize="16" fontWeight="500">
        <text x="64" y="112">Litify</text>
        <text x="64" y="247">Filevine</text>
        <text x="64" y="382">Zendesk</text>
      </g>
      <g className="fill-grey-600 font-sans" fontSize="12">
        <text x="64" y="132">Salesforce</text>
        <text x="64" y="402">Support &amp; tickets</text>
      </g>

      {/* Integration middleware — solid core node */}
      <rect x="340" y="183" width="260" height="140" className="fill-accent" />
      <g className="fill-white font-display" fontSize="19" fontWeight="500">
        <text x="470" y="243" textAnchor="middle">Integration</text>
        <text x="470" y="267" textAnchor="middle">Middleware</text>
      </g>
      <text
        x="470"
        y="292"
        textAnchor="middle"
        fontSize="12.5"
        className="fill-white/70 font-sans"
      >
        Laravel · PHI-safe by design
      </text>

      {/* AI backend — solid core node, dark tier */}
      <rect x="660" y="70" width="240" height="110" className="fill-contrast-2" />
      <text x="780" y="120" textAnchor="middle" className="fill-white font-display" fontSize="19" fontWeight="500">
        AI Backend
      </text>
      <text x="780" y="145" textAnchor="middle" fontSize="12.5" className="fill-grey-400 font-sans">
        Bedrock · Textract · suggest-only
      </text>

      {/* Staff tools — outlined output node */}
      <rect x="660" y="300" width="240" height="110" className="fill-base stroke-grey-300" strokeWidth="1.6" />
      <text x="780" y="360" textAnchor="middle" className="fill-contrast font-display" fontSize="16" fontWeight="500">
        Staff Tools
      </text>

      {/* Bidirectional sync connectors — source systems <-> middleware */}
      <g className="stroke-grey-400" strokeWidth="1.6" fill="none">
        <polyline points="240,117 290,117 290,220 340,220" />
        <polyline points="240,252 340,252" />
        <polyline points="240,387 290,387 290,286 340,286" />
      </g>
      <g className="fill-grey-400">
        <circle cx="240" cy="117" r="3.5" />
        <circle cx="240" cy="252" r="3.5" />
        <circle cx="240" cy="387" r="3.5" />
        <circle cx="340" cy="220" r="3.5" />
        <circle cx="340" cy="252" r="3.5" />
        <circle cx="340" cy="286" r="3.5" />
      </g>

      {/* Directional flow — Zendesk -> AI backend -> Staff tools */}
      <g className="stroke-grey-500" strokeWidth="1.6" fill="none" markerEnd="url(#mre-arrow)">
        <polyline points="240,368 620,368 620,125 656,125" />
        <line x1="780" y1="184" x2="780" y2="296" />
      </g>

      <defs>
        <marker
          id="mre-arrow"
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
