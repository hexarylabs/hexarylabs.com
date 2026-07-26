import { cn } from "@/lib/cn";

/** Same visual language as Schematic.tsx: hairline boxes, one accent "core" node, thin arrows. */
export function EdenSchematic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 960 420"
      role="img"
      aria-label="Schematic diagram: a Next.js frontend calling a Fastify API, which calls a FastAPI AI orchestration layer, which in turn drives a GCP model training pipeline and a ComfyUI workflow ecosystem."
      className={cn("h-auto w-full bg-base-2", className)}
    >
      <g className="fill-none stroke-grey-300" strokeWidth="1.6">
        <rect x="40" y="130" width="200" height="100" />
        <rect x="300" y="130" width="200" height="100" />
      </g>

      <rect
        x="560"
        y="130"
        width="220"
        height="100"
        className="fill-base stroke-accent"
        strokeWidth="1.6"
      />

      <g className="fill-none stroke-grey-300" strokeWidth="1.6">
        <rect x="380" y="290" width="200" height="90" />
        <rect x="650" y="290" width="220" height="90" />
      </g>

      <g className="fill-contrast font-display" fontSize="16" fontWeight="500">
        <text x="140" y="172" textAnchor="middle">
          Next.js
        </text>
        <text x="140" y="194" textAnchor="middle">
          frontend
        </text>

        <text x="400" y="172" textAnchor="middle">
          Fastify
        </text>
        <text x="400" y="194" textAnchor="middle">
          API
        </text>

        <text x="480" y="330" textAnchor="middle" fontSize="15">
          GCP training
        </text>
        <text x="480" y="350" textAnchor="middle" fontSize="15">
          pipeline
        </text>

        <text x="760" y="330" textAnchor="middle" fontSize="15">
          ComfyUI workflow
        </text>
        <text x="760" y="350" textAnchor="middle" fontSize="15">
          ecosystem
        </text>
      </g>

      <g className="fill-accent font-display" fontSize="16" fontWeight="500">
        <text x="670" y="172" textAnchor="middle">
          FastAPI
        </text>
        <text x="670" y="194" textAnchor="middle">
          AI orchestration
        </text>
      </g>

      <text
        x="670"
        y="214"
        textAnchor="middle"
        fontSize="12"
        className="fill-grey-600 font-sans"
      >
        model calls · tool use · workflows
      </text>

      <g className="stroke-grey-500" strokeWidth="1.6" markerEnd="url(#eden-arrow)">
        <line x1="244" y1="180" x2="296" y2="180" />
        <line x1="504" y1="180" x2="556" y2="180" />
        <line x1="620" y1="234" x2="500" y2="286" />
        <line x1="720" y1="234" x2="770" y2="286" />
      </g>

      <defs>
        <marker
          id="eden-arrow"
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
