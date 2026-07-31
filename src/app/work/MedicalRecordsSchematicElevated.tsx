import { cn } from "@/lib/cn";

export const MR_BOX_SLOTS = [0, 1, 2, 6, 8, 10];
export const MR_WIRE_SLOTS = [3, 4, 5, 7, 9];
export const MR_TXT_SLOTS = [0, 1, 2, 6, 8, 10];
export const MR_TIP_SLOTS = [3, 4, 5, 7, 9];
export const MR_LAST_SLOT = 10;

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
        className="mr-el mr-txt-0 fill-grey-600 font-sans"
        fontSize="12"
        letterSpacing="0.08em"
      >
        SYSTEM ARCHITECTURE
      </text>

      <rect
        x="40"
        y="70"
        width="200"
        height="95"
        pathLength={1}
        className="mr-el mr-box-0 fill-base stroke-grey-300"
        strokeWidth="1.6"
      />
      <g className="mr-el mr-txt-0">
        <text x="64" y="112" className="fill-contrast font-display" fontSize="16" fontWeight="500">
          Litify
        </text>
        <text x="64" y="132" className="fill-grey-600 font-sans" fontSize="12">
          Salesforce
        </text>
      </g>

      <rect
        x="40"
        y="205"
        width="200"
        height="95"
        pathLength={1}
        className="mr-el mr-box-1 fill-base stroke-grey-300"
        strokeWidth="1.6"
      />
      <text
        x="64"
        y="247"
        className="mr-el mr-txt-1 fill-contrast font-display"
        fontSize="16"
        fontWeight="500"
      >
        Filevine
      </text>

      <rect
        x="40"
        y="340"
        width="200"
        height="95"
        pathLength={1}
        className="mr-el mr-box-2 fill-base stroke-grey-300"
        strokeWidth="1.6"
      />
      <g className="mr-el mr-txt-2">
        <text x="64" y="382" className="fill-contrast font-display" fontSize="16" fontWeight="500">
          Zendesk
        </text>
        <text x="64" y="402" className="fill-grey-600 font-sans" fontSize="12">
          Support &amp; tickets
        </text>
      </g>

      <polyline
        points="240,117 290,117 290,220 340,220"
        pathLength={1}
        className="mr-el mr-wire-3 stroke-grey-500"
        strokeWidth="1.6"
        fill="none"
      />
      <g className="mr-el mr-tip-3 fill-grey-500">
        <circle cx="240" cy="117" r="3.5" />
        <circle cx="340" cy="220" r="3.5" />
      </g>

      <polyline
        points="240,252 340,252"
        pathLength={1}
        className="mr-el mr-wire-4 stroke-grey-500"
        strokeWidth="1.6"
        fill="none"
      />
      <g className="mr-el mr-tip-4 fill-grey-500">
        <circle cx="240" cy="252" r="3.5" />
        <circle cx="340" cy="252" r="3.5" />
      </g>

      <polyline
        points="240,365 300,365 300,286 340,286"
        pathLength={1}
        className="mr-el mr-wire-5 stroke-grey-500"
        strokeWidth="1.6"
        fill="none"
      />
      <g className="mr-el mr-tip-5 fill-grey-500">
        <circle cx="240" cy="365" r="3.5" />
        <circle cx="340" cy="286" r="3.5" />
      </g>

      <rect
        x="340"
        y="183"
        width="260"
        height="140"
        pathLength={1}
        className="mr-el mr-box-6 fill-accent stroke-accent"
        strokeWidth="1.6"
      />
      <g className="mr-el mr-txt-6">
        <g className="fill-white font-display" fontSize="19" fontWeight="500">
          <text x="470" y="243" textAnchor="middle">
            Integration
          </text>
          <text x="470" y="267" textAnchor="middle">
            Middleware
          </text>
        </g>
        <text
          x="470"
          y="292"
          textAnchor="middle"
          fontSize="12.5"
          className="fill-grey-300 font-sans"
        >
          Laravel · PHI-safe by design
        </text>
      </g>

      <polyline
        points="240,406 620,406 620,125 650,125"
        pathLength={1}
        className="mr-el mr-wire-7 stroke-grey-500"
        strokeWidth="1.6"
        fill="none"
      />
      <g className="mr-el mr-tip-7 fill-grey-500">
        <circle cx="240" cy="406" r="3.5" />
        <path d="M 649 119 L 658 125 L 649 131 Z" />
      </g>

      <rect
        x="660"
        y="70"
        width="240"
        height="110"
        pathLength={1}
        className="mr-el mr-box-8 fill-contrast-2 stroke-contrast-2"
        strokeWidth="1.6"
      />
      <g className="mr-el mr-txt-8">
        <text
          x="780"
          y="120"
          textAnchor="middle"
          className="fill-white font-display"
          fontSize="19"
          fontWeight="500"
        >
          AI Backend
        </text>
        <text
          x="780"
          y="145"
          textAnchor="middle"
          fontSize="12.5"
          className="fill-grey-300 font-sans"
        >
          Bedrock · Textract · suggest-only
        </text>
      </g>

      <line
        x1="780"
        y1="184"
        x2="780"
        y2="290"
        pathLength={1}
        className="mr-el mr-wire-9 stroke-grey-500"
        strokeWidth="1.6"
        fill="none"
      />
      <path
        d="M 774 289 L 786 289 L 780 298 Z"
        className="mr-el mr-tip-9 fill-grey-500"
      />

      <rect
        x="660"
        y="300"
        width="240"
        height="110"
        pathLength={1}
        className="mr-el mr-box-10 fill-base stroke-grey-300"
        strokeWidth="1.6"
      />
      <text
        x="780"
        y="360"
        textAnchor="middle"
        className="mr-el mr-txt-10 fill-contrast font-display"
        fontSize="16"
        fontWeight="500"
      >
        Staff Tools
      </text>
    </svg>
  );
}
