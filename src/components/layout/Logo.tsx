import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Hexary mark + wordmark.
 *
 * Geometry is mirrored in src/app/icon.svg (which the favicon/apple/PWA icons
 * are rasterised from) — keep the two polygons in sync.
 *
 * The ring takes `currentColor` so tone drives the variant: dark ring on light
 * surfaces, light ring on anything marked `data-tone="dark"` (today: the
 * footer). The inner hex is fixed — it's the one brand constant.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Hexary Labs — home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="size-7 shrink-0 text-[#1F2937] [[data-tone=dark]_&]:text-grey-300"
      >
        <polygon
          points="16,3 27.26,9.5 27.26,22.5 16,29 4.74,22.5 4.74,9.5"
          className="fill-none stroke-current"
          strokeWidth="2"
        />
        <polygon
          points="16,10.5 20.76,13.25 20.76,18.75 16,21.5 11.24,18.75 11.24,13.25"
          className="fill-[#5B5BF0] transition-colors duration-300 ease-in-out group-hover:fill-accent-hi"
        />
      </svg>

      <span className="font-display text-[1.25rem] font-semibold leading-none tracking-tight">
        {/* Tone-aware: grey-600 clears AA on white (5.6:1); on the dark footer
            that would drop to 3.5:1, so it lightens to grey-500 (5.3:1). */}
        Hexary
        <span className="font-normal text-grey-600 [[data-tone=dark]_&]:text-grey-500">
          Labs
        </span>
      </span>
    </Link>
  );
}
