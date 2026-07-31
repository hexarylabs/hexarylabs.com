import { cn } from "@/lib/cn";

export const EDEN_NODE_SLOTS = [0, 2, 4, 6, 8];
export const EDEN_WIRE_SLOTS = [1, 3, 5, 7];

export function EdenSchematicElevated({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 960 520"
      role="img"
      aria-label="Schematic diagram: the Eden platform — a Next.js frontend calls a Fastify API, which calls a FastAPI AI orchestration layer; the orchestration layer drives a custom model training pipeline on GCP and a ComfyUI community workflow ecosystem."
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

      <g className="eden-el eden-node-0">
        <rect
          x="40"
          y="80"
          width="240"
          height="120"
          className="fill-base stroke-grey-300"
          strokeWidth="1.6"
        />
        <g
          transform="translate(64, 104)"
          className="stroke-grey-500"
          fill="none"
          strokeWidth="1.6"
        >
          <rect width="26" height="20" />
          <line x1="0" y1="6" x2="26" y2="6" />
        </g>
        <g transform="translate(64, 104)" className="fill-grey-500">
          <circle cx="3.2" cy="3" r="0.9" />
          <circle cx="6.6" cy="3" r="0.9" />
        </g>
        <text
          x="64"
          y="166"
          className="fill-contrast font-display"
          fontSize="16"
          fontWeight="500"
        >
          Next.js Frontend
        </text>
        <text x="64" y="186" className="fill-grey-600 font-sans" fontSize="12">
          app.eden.art
        </text>
      </g>

      <line
        x1="284"
        y1="140"
        x2="349"
        y2="140"
        pathLength={1}
        className="eden-el eden-wire-1 stroke-grey-500"
        fill="none"
        strokeWidth="1.6"
      />
      <path d="M 348 134 L 357 140 L 348 146 Z" className="eden-el eden-tip-1 fill-grey-500" />

      <g className="eden-el eden-node-2">
        <rect
          x="360"
          y="80"
          width="240"
          height="120"
          className="fill-base stroke-grey-300"
          strokeWidth="1.6"
        />
        <g
          transform="translate(384, 104)"
          className="stroke-grey-500"
          fill="none"
          strokeWidth="1.6"
        >
          <rect width="26" height="8.5" />
          <rect y="11.5" width="26" height="8.5" />
        </g>
        <g transform="translate(384, 104)" className="fill-grey-500">
          <circle cx="4" cy="4.25" r="1.2" />
          <circle cx="4" cy="15.75" r="1.2" />
        </g>
        <text
          x="384"
          y="166"
          className="fill-contrast font-display"
          fontSize="16"
          fontWeight="500"
        >
          Fastify API
        </text>
        <text x="384" y="186" className="fill-grey-600 font-sans" fontSize="12">
          Node.js backend
        </text>
      </g>

      <line
        x1="604"
        y1="140"
        x2="669"
        y2="140"
        pathLength={1}
        className="eden-el eden-wire-3 stroke-grey-500"
        fill="none"
        strokeWidth="1.6"
      />
      <path d="M 668 134 L 677 140 L 668 146 Z" className="eden-el eden-tip-3 fill-grey-500" />

      <g className="eden-el eden-node-4">
        <rect
          x="688"
          y="88"
          width="240"
          height="120"
          className="fill-none stroke-grey-200"
          strokeWidth="1.6"
        />
        <rect x="680" y="80" width="240" height="120" className="fill-accent" />
        <path
          d="M 717 104 L 719.6 114.4 L 730 117 L 719.6 119.6 L 717 130 L 714.4 119.6 L 704 117 L 714.4 114.4 Z"
          className="fill-white"
        />
        <text
          x="704"
          y="166"
          className="fill-white font-display"
          fontSize="19"
          fontWeight="500"
        >
          AI Orchestration
        </text>
        <text x="704" y="186" className="fill-grey-300 font-sans" fontSize="12.5">
          FastAPI · model calls · tool use
        </text>
      </g>

      <polyline
        points="760,204 760,277 505,277 505,339"
        pathLength={1}
        className="eden-el eden-wire-5 stroke-grey-500"
        fill="none"
        strokeWidth="1.6"
      />
      <path d="M 499 338 L 511 338 L 505 348 Z" className="eden-el eden-tip-5 fill-grey-500" />

      <g className="eden-el eden-node-6">
        <rect
          x="388"
          y="358"
          width="250"
          height="120"
          className="fill-none stroke-grey-200"
          strokeWidth="1.6"
        />
        <rect x="380" y="350" width="250" height="120" className="fill-contrast-2" />
        <g
          transform="translate(404, 374)"
          className="stroke-white"
          fill="none"
          strokeWidth="1.6"
        >
          <polyline points="0,17 8,8 13,13 24,2" />
          <polyline points="17,2 24,2 24,9" />
        </g>
        <text
          x="404"
          y="436"
          className="fill-white font-display"
          fontSize="19"
          fontWeight="500"
        >
          Training Pipeline
        </text>
        <text x="404" y="456" className="fill-grey-300 font-sans" fontSize="12.5">
          GCP · Flux LoRA custom models
        </text>
      </g>

      <line
        x1="840"
        y1="204"
        x2="840"
        y2="339"
        pathLength={1}
        className="eden-el eden-wire-7 stroke-grey-500"
        fill="none"
        strokeWidth="1.6"
      />
      <path d="M 834 338 L 846 338 L 840 348 Z" className="eden-el eden-tip-7 fill-grey-500" />

      <g className="eden-el eden-node-8">
        <rect
          x="680"
          y="350"
          width="240"
          height="120"
          className="fill-base stroke-grey-300"
          strokeWidth="1.6"
        />
        <g
          transform="translate(704, 374)"
          className="stroke-grey-500"
          fill="none"
          strokeWidth="1.6"
        >
          <circle cx="3.5" cy="4" r="3" />
          <circle cx="3.5" cy="18" r="3" />
          <circle cx="22.5" cy="11" r="3.5" />
          <line x1="6.3" y1="4.9" x2="19.3" y2="10" />
          <line x1="6.3" y1="17.1" x2="19.3" y2="12" />
        </g>
        <text
          x="704"
          y="436"
          className="fill-contrast font-display"
          fontSize="16"
          fontWeight="500"
        >
          ComfyUI Ecosystem
        </text>
        <text x="704" y="456" className="fill-grey-600 font-sans" fontSize="12">
          community tools · revenue share
        </text>
      </g>
    </svg>
  );
}
