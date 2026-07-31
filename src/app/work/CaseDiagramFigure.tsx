import type { CaseDiagram } from "@/content/work";
import { FlowStrip } from "./FlowStrip";
import { TrueCellSyncDiagram } from "./TrueCellSyncDiagram";
import { KineinSyncDiagram } from "./KineinSyncDiagram";

function DiagramContent({ diagram }: { diagram: CaseDiagram }) {
  if (diagram === "truecell-sync") return <TrueCellSyncDiagram />;
  if (diagram === "kinein-sync") return <KineinSyncDiagram />;

  if (diagram === "b2b-access-flow") {
    return (
      <FlowStrip
        label="ONBOARDING & ORDER FLOW"
        ariaLabel="Diagram of the B2B Access flow: a shop or brand applies, is verified in under 24 hours, orders at wholesale pricing with brand-set minimums, and reorders from par-level restock alerts."
        steps={[
          { number: "01", title: "Apply", sub: "shop or brand signs up" },
          { number: "02", title: "Verify", sub: "approved in under 24h", accent: true },
          { number: "03", title: "Order", sub: "wholesale pricing · MOQs" },
          { number: "04", title: "Reorder", sub: "par-level restock alerts" },
        ]}
      />
    );
  }

  return (
    <FlowStrip
      label="REAL-TIME CARD UPDATE"
      ariaLabel="Diagram of KeepComing's wallet update flow: a customer scans the shop's QR code, the KeepComing platform records the visit, pushes the change through Apple PassKit and the Google Wallet API, and the card on the customer's phone updates in real time."
      steps={[
        { number: "01", title: "Scan", sub: "shop's counter QR" },
        { number: "02", title: "KeepComing", sub: "NestJS · multi-tenant", accent: true },
        { number: "03", title: "Wallet Push", sub: "PassKit · Google Wallet" },
        { number: "04", title: "Card Updates", sub: "live, on the phone" },
      ]}
    />
  );
}

export function CaseDiagramFigure({ diagram }: { diagram: CaseDiagram }) {
  return (
    <div className="border-[0.8px] border-grey-200 bg-base-2 p-5 sm:p-8">
      <DiagramContent diagram={diagram} />
    </div>
  );
}
