import { cn } from "@/lib/cn";

export const EDEN_NODE_SLOTS = [0, 2, 4, 6, 8, 10, 12, 14];
export const EDEN_WIRE_SLOTS = [1, 3, 5, 7, 9, 11, 13];

export function EdenSchematicElevated({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 960 600"
      role="img"
      aria-label="Schematic diagram: the Eden platform — a Next.js frontend calls a Fastify API, which calls a FastAPI AI orchestration layer. The orchestration layer runs the named autonomous agents Eve and Solienne and dispatches training jobs to GCP pipelines (flux-trainer and sd-lora-trainer). The agents call ComfyUI workflows as tools, and those workflows execute on Modal serverless GPUs."
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
          y="70"
          width="230"
          height="110"
          className="fill-base stroke-grey-300"
          strokeWidth="1.6"
        />
        <g
          transform="translate(64, 90)"
          className="stroke-grey-500"
          fill="none"
          strokeWidth="1.6"
        >
          <rect width="26" height="20" />
          <line x1="0" y1="6" x2="26" y2="6" />
        </g>
        <g transform="translate(64, 90)" className="fill-grey-500">
          <circle cx="3.2" cy="3" r="0.9" />
          <circle cx="6.6" cy="3" r="0.9" />
        </g>
        <text
          x="64"
          y="142"
          className="fill-contrast font-display"
          fontSize="16"
          fontWeight="500"
        >
          Next.js Frontend
        </text>
        <text x="64" y="162" className="fill-grey-600 font-sans" fontSize="12">
          app.eden.art
        </text>
      </g>

      <line
        x1="274"
        y1="125"
        x2="320"
        y2="125"
        pathLength={1}
        className="eden-el eden-wire-1 stroke-grey-500"
        fill="none"
        strokeWidth="1.6"
      />
      <path d="M 319 119 L 328 125 L 319 131 Z" className="eden-el eden-tip-1 fill-grey-500" />

      <g className="eden-el eden-node-2">
        <rect
          x="330"
          y="70"
          width="230"
          height="110"
          className="fill-base stroke-grey-300"
          strokeWidth="1.6"
        />
        <g
          transform="translate(354, 90)"
          className="stroke-grey-500"
          fill="none"
          strokeWidth="1.6"
        >
          <rect width="26" height="8.5" />
          <rect y="11.5" width="26" height="8.5" />
        </g>
        <g transform="translate(354, 90)" className="fill-grey-500">
          <circle cx="4" cy="4.25" r="1.2" />
          <circle cx="4" cy="15.75" r="1.2" />
        </g>
        <text
          x="354"
          y="142"
          className="fill-contrast font-display"
          fontSize="16"
          fontWeight="500"
        >
          Fastify API
        </text>
        <text x="354" y="162" className="fill-grey-600 font-sans" fontSize="12">
          Node.js backend
        </text>
      </g>

      <line
        x1="564"
        y1="125"
        x2="610"
        y2="125"
        pathLength={1}
        className="eden-el eden-wire-3 stroke-grey-500"
        fill="none"
        strokeWidth="1.6"
      />
      <path d="M 609 119 L 618 125 L 609 131 Z" className="eden-el eden-tip-3 fill-grey-500" />

      <g className="eden-el eden-node-4">
        <rect
          x="628"
          y="78"
          width="300"
          height="110"
          className="fill-none stroke-grey-200"
          strokeWidth="1.6"
        />
        <rect x="620" y="70" width="300" height="110" className="fill-accent" />
        <path
          d="M 657 90 L 659.6 100.4 L 670 103 L 659.6 105.6 L 657 116 L 654.4 105.6 L 644 103 L 654.4 100.4 Z"
          className="fill-white"
        />
        <text
          x="644"
          y="142"
          className="fill-white font-display"
          fontSize="19"
          fontWeight="500"
        >
          AI Orchestration
        </text>
        <text x="644" y="162" className="fill-grey-300 font-sans" fontSize="12.5">
          FastAPI · model calls · tool use
        </text>
      </g>

      <line
        x1="690"
        y1="184"
        x2="690"
        y2="240"
        pathLength={1}
        className="eden-el eden-wire-5 stroke-grey-500"
        fill="none"
        strokeWidth="1.6"
      />
      <path d="M 684 239 L 696 239 L 690 248 Z" className="eden-el eden-tip-5 fill-grey-500" />

      <g className="eden-el eden-node-6">
        <rect
          x="620"
          y="250"
          width="140"
          height="100"
          className="fill-base stroke-grey-300"
          strokeWidth="1.6"
        />
        <g
          transform="translate(640, 266)"
          className="stroke-grey-500"
          fill="none"
          strokeWidth="1.6"
        >
          <circle cx="9" cy="5" r="4" />
          <path d="M 1 19 a 8 8 0 0 1 16 0" />
        </g>
        <text
          x="640"
          y="312"
          className="fill-contrast font-display"
          fontSize="16"
          fontWeight="500"
        >
          Eve
        </text>
        <text x="640" y="330" className="fill-grey-600 font-sans" fontSize="11">
          flagship agent
        </text>
      </g>

      <line
        x1="850"
        y1="184"
        x2="850"
        y2="240"
        pathLength={1}
        className="eden-el eden-wire-7 stroke-grey-500"
        fill="none"
        strokeWidth="1.6"
      />
      <path d="M 844 239 L 856 239 L 850 248 Z" className="eden-el eden-tip-7 fill-grey-500" />

      <g className="eden-el eden-node-8">
        <rect
          x="780"
          y="250"
          width="140"
          height="100"
          className="fill-base stroke-grey-300"
          strokeWidth="1.6"
        />
        <g
          transform="translate(800, 266)"
          className="stroke-grey-500"
          fill="none"
          strokeWidth="1.6"
        >
          <circle cx="9" cy="5" r="4" />
          <path d="M 1 19 a 8 8 0 0 1 16 0" />
        </g>
        <text
          x="800"
          y="312"
          className="fill-contrast font-display"
          fontSize="16"
          fontWeight="500"
        >
          Solienne
        </text>
        <text x="800" y="330" className="fill-grey-600 font-sans" fontSize="11">
          immersive viewer
        </text>
      </g>

      <polyline
        points="650,184 650,220 185,220 185,430"
        pathLength={1}
        className="eden-el eden-wire-9 stroke-grey-500"
        fill="none"
        strokeWidth="1.6"
      />
      <g className="eden-el eden-tip-9">
        <path d="M 179 429 L 191 429 L 185 438 Z" className="fill-grey-500" />
        <text x="300" y="212" className="fill-grey-600 font-sans" fontSize="11">
          training jobs
        </text>
      </g>

      <g className="eden-el eden-node-10">
        <rect
          x="48"
          y="448"
          width="290"
          height="120"
          className="fill-none stroke-grey-200"
          strokeWidth="1.6"
        />
        <rect x="40" y="440" width="290" height="120" className="fill-contrast-2" />
        <g
          transform="translate(64, 462)"
          className="stroke-white"
          fill="none"
          strokeWidth="1.6"
        >
          <polyline points="0,17 8,8 13,13 24,2" />
          <polyline points="17,2 24,2 24,9" />
        </g>
        <text
          x="64"
          y="522"
          className="fill-white font-display"
          fontSize="19"
          fontWeight="500"
        >
          Training Pipelines
        </text>
        <text x="64" y="542" className="fill-grey-300 font-sans" fontSize="12.5">
          GCP · flux-trainer · sd-lora-trainer
        </text>
      </g>

      <g className="eden-el eden-wire-11">
        <polyline
          points="690,354 690,395 520,395 520,430"
          pathLength={1}
          className="stroke-grey-500"
          fill="none"
          strokeWidth="1.6"
        />
        <polyline
          points="850,354 850,410 590,410 590,430"
          pathLength={1}
          className="stroke-grey-500"
          fill="none"
          strokeWidth="1.6"
        />
      </g>
      <g className="eden-el eden-tip-11">
        <path d="M 514 429 L 526 429 L 520 438 Z" className="fill-grey-500" />
        <path d="M 584 429 L 596 429 L 590 438 Z" className="fill-grey-500" />
        <text x="700" y="390" className="fill-grey-600 font-sans" fontSize="11">
          tool calls
        </text>
      </g>

      <g className="eden-el eden-node-12">
        <rect
          x="400"
          y="440"
          width="240"
          height="120"
          className="fill-base stroke-grey-300"
          strokeWidth="1.6"
        />
        <g
          transform="translate(424, 462)"
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
          x="424"
          y="522"
          className="fill-contrast font-display"
          fontSize="16"
          fontWeight="500"
        >
          ComfyUI Workflows
        </text>
        <text x="424" y="542" className="fill-grey-600 font-sans" fontSize="12">
          custom nodes · community tools
        </text>
      </g>

      <line
        x1="644"
        y1="500"
        x2="690"
        y2="500"
        pathLength={1}
        className="eden-el eden-wire-13 stroke-grey-500"
        fill="none"
        strokeWidth="1.6"
      />
      <path d="M 689 494 L 698 500 L 689 506 Z" className="eden-el eden-tip-13 fill-grey-500" />

      <g className="eden-el eden-node-14">
        <rect
          x="708"
          y="448"
          width="220"
          height="120"
          className="fill-none stroke-grey-200"
          strokeWidth="1.6"
        />
        <rect x="700" y="440" width="220" height="120" className="fill-contrast-2" />
        <g
          transform="translate(724, 462)"
          className="stroke-white"
          fill="none"
          strokeWidth="1.6"
        >
          <rect x="0" y="3" width="24" height="14" />
          <rect x="7" y="8" width="10" height="4" />
          <line x1="5" y1="0" x2="5" y2="3" />
          <line x1="12" y1="0" x2="12" y2="3" />
          <line x1="19" y1="0" x2="19" y2="3" />
          <line x1="5" y1="17" x2="5" y2="20" />
          <line x1="12" y1="17" x2="12" y2="20" />
          <line x1="19" y1="17" x2="19" y2="20" />
        </g>
        <text
          x="724"
          y="522"
          className="fill-white font-display"
          fontSize="19"
          fontWeight="500"
        >
          Modal
        </text>
        <text x="724" y="542" className="fill-grey-300 font-sans" fontSize="12.5">
          serverless GPU inference
        </text>
      </g>
    </svg>
  );
}
