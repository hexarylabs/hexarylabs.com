import Link from "next/link";

/**
 * Hexary wordmark: a hex glyph + name. The accent sits on the counter of the
 * mark, echoing the accent-as-punctuation trick used in the headings.
 *
 * ⚠️ PLACEHOLDER: stand-in for a real Hexary Labs logo.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Hexary Labs — home"
      className={`group inline-flex items-center gap-2.5 ${className ?? ""}`}
    >
      <svg
        viewBox="0 0 28 32"
        aria-hidden="true"
        className="h-7 w-[1.53rem] shrink-0"
      >
        <path
          d="M14 1.155 26.124 8.155v14L14 29.155 1.876 22.155v-14L14 1.155Z"
          className="fill-none stroke-current"
          strokeWidth="2"
        />
        <path
          d="M14 10.5 19.196 13.5v6L14 22.5 8.804 19.5v-6L14 10.5Z"
          className="fill-accent transition-colors duration-300 ease-in-out group-hover:fill-accent-hi"
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
