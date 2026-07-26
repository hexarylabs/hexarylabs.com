import Image from "next/image";
import { cn } from "@/lib/cn";
import { Schematic } from "./Schematic";
import { EdenSchematic } from "./EdenSchematic";
import type { DemoCase, GradientTone } from "@/content/demo/demo-cases";

export const gradients: Record<GradientTone, string> = {
  violet: "bg-linear-to-br from-accent/25 via-base-2 to-accent/10",
  slate: "bg-linear-to-br from-grey-300 via-base-2 to-grey-200",
  sand: "bg-linear-to-br from-grey-200 via-base-2 to-accent/10",
};

export function DemoCover({
  demo,
  aspect = "aspect-[1.6]",
  sizes = "100vw",
  eager = false,
  className,
}: {
  demo: DemoCase;
  aspect?: string;
  sizes?: string;
  eager?: boolean;
  className?: string;
}) {
  const { cover, name } = demo;

  if (cover.kind === "photo") {
    return (
      <Image
        src={cover.src}
        alt={cover.alt}
        width={1600}
        height={1000}
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        className={cn(
          "w-full object-cover",
          cover.objectPosition === "left" ? "object-left" : "object-center",
          aspect,
          className,
        )}
      />
    );
  }

  if (cover.kind === "schematic") {
    return (
      <div
        className={cn(
          "flex w-full items-center justify-center overflow-hidden border-[0.8px] border-grey-200 bg-base-2 p-6",
          aspect,
          className,
        )}
      >
        {cover.diagram === "eden" ? (
          <EdenSchematic className="max-h-full" />
        ) : (
          <Schematic className="max-h-full" />
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex w-full items-end p-8 lg:p-12",
        aspect,
        gradients[cover.tone],
        className,
      )}
    >
      <p className="font-display text-[1.625rem] font-medium leading-[1.15] tracking-[0.01em] text-contrast-2 md:text-[2.25rem]">
        {name}
      </p>
    </div>
  );
}
