import { cn } from "@/lib/cn";

/**
 * Hairline rule. `fade` reproduces the reference's divider that dissolves at
 * both ends (a gradient, not a solid border) — used between stat columns and
 * above the footer.
 */
export function Divider({
  orientation = "horizontal",
  fade = false,
  className,
}: {
  orientation?: "horizontal" | "vertical";
  fade?: boolean;
  className?: string;
}) {
  const vertical = orientation === "vertical";

  return (
    <div
      aria-hidden="true"
      className={cn(
        vertical ? "w-px self-stretch" : "h-px w-full",
        fade
          ? vertical
            ? "rule-fade-v"
            : "rule-fade-h"
          : "bg-grey-100 [[data-tone=dark]_&]:bg-grey-700",
        className,
      )}
    />
  );
}
