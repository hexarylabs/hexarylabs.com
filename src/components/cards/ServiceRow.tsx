import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import type { Service } from "@/content/services";

/**
 * Service row with the reference's hover behaviour — rebuilt in CSS.
 *
 * The reference renders this section as a **Rive WASM canvas** with the real
 * text hidden behind it (`display:none`). We get the same effect from a
 * `::before` panel that wipes up (transform only — compositor-friendly), plus
 * colour transitions and an illustration that slides in.
 *
 * Hover is progressive enhancement: below `lg` the row is a plain, fully
 * legible link. Nothing is hover-only.
 */
export function ServiceRow({ service }: { service: Service }) {
  return (
    // `overflow-hidden` clips the wipe panel to this row — without it the
    // translated panel spills over the row below.
    <li className="group relative overflow-hidden border-b-[0.8px] border-grey-200 last:border-b-0">
      {/* Wipe panel */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden translate-y-full bg-contrast-2 transition-transform duration-[400ms] ease-in-out group-hover:translate-y-0 lg:block"
      />

      <Link
        href={`/services/${service.slug}`}
        className="relative grid items-center gap-x-10 gap-y-4 px-0 py-10 lg:grid-cols-[1fr_1.25fr_auto] lg:px-8 lg:py-14"
      >
        <h3 className="text-[1.3125rem] leading-[1.2] transition-colors duration-[400ms] md:text-[1.625rem] lg:text-h3 lg:group-hover:text-metal">
          {service.title}
        </h3>

        <p className="text-body-lg text-grey-600 transition-colors duration-[400ms] lg:group-hover:text-grey-300">
          {service.summary}
        </p>

        {/* Illustration — slides in on hover, desktop only */}
        <span
          aria-hidden="true"
          className="hidden translate-x-4 text-white opacity-0 transition-[opacity,transform] duration-[400ms] ease-in-out group-hover:translate-x-0 group-hover:opacity-100 lg:block"
        >
          <HexGlyph />
        </span>

        <span className="inline-flex items-center gap-3 font-display text-body font-medium text-contrast-2 transition-colors duration-[400ms] group-hover:text-accent-hi lg:hidden">
          Learn more
          <ArrowIcon className="size-3.5" />
        </span>
      </Link>
    </li>
  );
}

/** Isometric-ish stacked hex — echoes the reference's line-art illustrations. */
function HexGlyph() {
  const hex = (cy: number) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 180) * (60 * i - 90);
      return `${(40 + 34 * Math.cos(a)).toFixed(1)},${(cy + 20 * Math.sin(a)).toFixed(1)}`;
    }).join(" ");

  return (
    <svg viewBox="0 0 80 96" className="h-20 w-16" aria-hidden="true">
      {[28, 48, 68].map((cy, i) => (
        <polygon
          key={cy}
          points={hex(cy)}
          className={i === 2 ? "fill-accent/25 stroke-accent" : "fill-none stroke-white/50"}
          strokeWidth="1.25"
        />
      ))}
    </svg>
  );
}
