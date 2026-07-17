import { Button } from "./Button";
import { cn } from "@/lib/cn";

/**
 * The reference's repeating header: title left / link-button right,
 * `space-between`, 56px gap to content. `align="center"` is the tech-stack
 * variant (centred title + intro).
 */
export function SectionHeader({
  title,
  intro,
  action,
  align = "split",
  className,
}: {
  title: React.ReactNode;
  intro?: string;
  action?: { label: string; href: string };
  align?: "split" | "center";
  className?: string;
}) {
  if (align === "center") {
    return (
      <div className={cn("mb-14 flex flex-col items-center text-center", className)}>
        <h2 className="text-h2 max-md:text-[1.625rem] md:text-[2.25rem] lg:text-h2">
          {title}
        </h2>
        {intro && (
          <p className="mt-6 max-w-[640px] text-body-lg text-grey-600 [[data-tone=dark]_&]:text-grey-300">
            {intro}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mb-14 flex flex-wrap items-center justify-between gap-6",
        className,
      )}
    >
      <h2 className="text-h2 max-md:text-[1.625rem] md:text-[2.25rem] lg:text-h2">
        {title}
      </h2>
      {action && (
        <Button href={action.href} variant="secondary">
          {action.label}
        </Button>
      )}
      {intro && (
        <p className="w-full max-w-[640px] text-body-lg text-grey-600 [[data-tone=dark]_&]:text-grey-300">
          {intro}
        </p>
      )}
    </div>
  );
}
