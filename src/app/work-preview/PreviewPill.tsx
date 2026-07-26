import { cn } from "@/lib/cn";
import { DEMO_NOTICE } from "@/content/demo/demo-cases";

export function PreviewPill({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center border-[0.8px] border-accent px-3 py-1.5",
        "font-display text-small uppercase tracking-widest text-accent",
        "[[data-tone=dark]_&]:border-accent-hi [[data-tone=dark]_&]:text-accent-hi",
        className,
      )}
    >
      {DEMO_NOTICE}
    </span>
  );
}
