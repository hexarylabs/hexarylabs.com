/** The ✓ glyph used in capability lists. Inherits currentColor. */
export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className ?? "size-4 shrink-0"}
    >
      <path
        d="M3 8.5L6.25 11.75L13 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
