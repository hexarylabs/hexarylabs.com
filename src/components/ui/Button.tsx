import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "accent" | "block";
type Size = "sm" | "md" | "lg";

/**
 * Reference behaviour (measured): radius 0, display font @500, 16px gap to the
 * arrow, `0.3s ease-in-out`, and a *universal* hover → accent background.
 * Accent-filled buttons invert instead (→ white bg, accent text).
 *
 * `[[data-tone=dark]_&]` re-colours the button inside dark sections, so callers
 * never pass tone manually.
 */
const variants: Record<Variant, string> = {
  primary: cn(
    "bg-contrast-2 text-white",
    "hover:bg-accent hover:text-white",
    "[[data-tone=dark]_&]:bg-white [[data-tone=dark]_&]:text-contrast-2",
    "[[data-tone=dark]_&]:hover:bg-accent [[data-tone=dark]_&]:hover:text-white",
  ),
  secondary: cn(
    "border-[0.8px] border-contrast-2 text-contrast-2",
    "hover:border-accent hover:text-accent",
    "[[data-tone=dark]_&]:border-white [[data-tone=dark]_&]:text-white",
    "[[data-tone=dark]_&]:hover:border-accent-hi [[data-tone=dark]_&]:hover:text-accent-hi",
  ),
  accent: cn(
    "bg-accent text-white",
    "hover:bg-white hover:text-accent",
    "[[data-tone=dark]_&]:hover:bg-white [[data-tone=dark]_&]:hover:text-accent",
  ),
  block: cn(
    "w-full justify-between bg-grey-100 text-contrast-2",
    "hover:bg-accent hover:text-white",
    "[[data-tone=dark]_&]:bg-surface-dark [[data-tone=dark]_&]:text-white",
    "[[data-tone=dark]_&]:border-[0.8px] [[data-tone=dark]_&]:border-grey-700",
    "[[data-tone=dark]_&]:hover:bg-white [[data-tone=dark]_&]:hover:text-contrast-2",
  ),
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-[1rem]",
  md: "px-3 py-2 text-body-lg",
  lg: "px-3 py-4 text-body-lg",
};

const base = cn(
  "inline-flex items-center gap-4", // 16px text→arrow gap (measured)
  "font-display font-medium leading-none",
  "rounded-none transition-colors duration-300 ease-in-out",
  "cursor-pointer",
);

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  icon?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  icon = true,
  className,
  ...rest
}: Props) {
  const cls = cn(
    base,
    variants[variant],
    variant === "block" ? "px-6 py-8 sm:px-8" : sizes[size],
    className,
  );

  const inner = (
    <>
      <span>{children}</span>
      {icon && <ArrowIcon />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  );
}
