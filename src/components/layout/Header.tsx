"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { nav, headerCta } from "@/content/nav";
import { cn } from "@/lib/cn";

/**
 * Sticky header — 87px, white, 0.8px hairline underline (all measured).
 *
 * Desktop dropdown is the reference's full-width mega *bar*: cells across the
 * container width, each label + boxed arrow, hairline dividers between.
 * Opens on hover AND focus-within; Esc closes.
 */
export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Navigating closes both menus. Adjusted during render rather than in an
  // effect — React's documented pattern for resetting state on a prop change,
  // and it avoids a cascading second render.
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenMenu(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-100 border-b-[0.8px] border-grey-100 bg-base">
      <Container>
        <div className="flex h-[72px] items-center justify-between lg:h-[87px]">
          <Logo />

          {/* Desktop nav */}
          <nav aria-label="Main" className="max-lg:hidden">
            <ul className="flex items-center gap-8">
              {nav.map((item) => (
                <li
                  key={item.href}
                  onMouseEnter={() => setOpenMenu(item.children ? item.label : null)}
                  onMouseLeave={() => setOpenMenu(null)}
                  onFocus={() => setOpenMenu(item.children ? item.label : null)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setOpenMenu(null);
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    aria-expanded={item.children ? openMenu === item.label : undefined}
                    className={cn(
                      "font-display text-[1rem] font-medium transition-colors duration-300",
                      isActive(item.href) || openMenu === item.label
                        ? "text-accent"
                        : "text-contrast-2 hover:text-accent",
                    )}
                  >
                    {item.label}
                  </Link>

                  {item.children && openMenu === item.label && (
                    <MegaMenu items={item.children} />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Button href={headerCta.href} size="sm" className="max-lg:hidden">
              {headerCta.label}
            </Button>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="grid size-11 place-items-center border-[0.8px] border-contrast-2 transition-colors duration-300 hover:border-accent hover:text-accent lg:hidden"
            >
              <MenuGlyph open={mobileOpen} />
            </button>
          </div>
        </div>
      </Container>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </header>
  );
}

/** Full-width dropdown bar: one cell per child, hairline dividers, boxed ↗. */
function MegaMenu({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="absolute inset-x-0 top-full border-b-[0.8px] border-grey-100 bg-base">
      <Container>
        <ul className="grid grid-cols-4 border-x-[0.8px] border-grey-100">
          {items.map((child, i) => (
            <li key={child.href} className={cn(i > 0 && "border-l-[0.8px] border-grey-100")}>
              <Link
                href={child.href}
                className="group flex h-full items-center justify-between gap-4 p-6 transition-colors duration-300 hover:bg-base-2"
              >
                <span className="text-body-lg text-contrast-2 transition-colors duration-300 group-hover:text-accent">
                  {child.label}
                </span>
                <span className="grid size-8 shrink-0 place-items-center border-[0.8px] border-contrast-2 text-contrast-2 transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
                  <ArrowIcon className="size-3.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

function MenuGlyph({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5">
      {open ? (
        <path
          d="M4 4l12 12M16 4L4 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      ) : (
        <path
          d="M3 6h14M3 14h14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      )}
    </svg>
  );
}
