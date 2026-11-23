"use client";

import { useEffect, useRef } from "react";

const R = 26;
const COLS = 7;
const ROWS = 5;

const dx = Math.sqrt(3) * R;
const dy = 1.5 * R;

const W = dx * (COLS + 0.5);
const H = dy * (ROWS - 1) + 2 * R;

const HEX_POINTS = Array.from({ length: 6 }, (_, i) => {
  const a = (Math.PI / 180) * (60 * i - 90);
  return `${(R * Math.cos(a)).toFixed(1)},${(R * Math.sin(a)).toFixed(1)}`;
}).join(" ");

const SOLID = new Set(["2-3"]);
const ACCENT = new Set(["1-3", "2-2", "3-3"]);
const TINT = new Set(["2-4", "1-2", "3-2", "2-1"]);
const OMIT = new Set(["0-0", "0-6", "4-0", "4-6", "1-0", "3-6", "0-5", "4-1"]);

const WHITE = [255, 255, 255];
const PURPLE = [91, 91, 240];
const GREY = [199, 196, 196];

const SPOTLIGHT = 118;
const RIPPLE_AMP = 0.45;
const RIPPLE_K = 0.0209;
const RIPPLE_OMEGA = (2 * Math.PI) / 7000;
const LIFT = 0.05;

const TAU_POINTER = 90;
const TAU_ENERGY = 110;
const TAU_LIFT = 120;

type Cell = { key: string; cx: number; cy: number; base: number; solid: boolean };

const CELLS: Cell[] = [];
for (let row = 0; row < ROWS; row++) {
  for (let col = 0; col < COLS; col++) {
    const key = `${row}-${col}`;
    if (OMIT.has(key)) continue;
    CELLS.push({
      key,
      cx: dx / 2 + col * dx + (row % 2 ? dx / 2 : 0),
      cy: R + row * dy,
      base: ACCENT.has(key) ? 1 : TINT.has(key) ? 0.28 : 0,
      solid: SOLID.has(key),
    });
  }
}

const mix = (a: number[], b: number[], t: number) =>
  `rgb(${Math.round(a[0] + (b[0] - a[0]) * t)} ${Math.round(a[1] + (b[1] - a[1]) * t)} ${Math.round(a[2] + (b[2] - a[2]) * t)})`;

const fillAt = (e: number) => mix(WHITE, PURPLE, e);
const strokeAt = (e: number) => mix(GREY, PURPLE, Math.min(1, e * 1.6));

export function HexLattice({ className }: { className?: string }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const cellRefs = useRef<(SVGUseElement | null)[]>([]);
  const labelRef = useRef<HTMLSpanElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    const svg = svgRef.current;
    const label = labelRef.current;
    const num = numRef.current;
    if (!panel || !svg || !label || !num) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const intro = requestAnimationFrame(() => label.classList.add("is-visible"));

    const energy = CELLS.map((c) => c.base);
    const lift = CELLS.map(() => 0);
    const lastFilter = CELLS.map(() => "");

    let clientX = 0;
    let clientY = 0;
    let active = false;
    let wasActive = false;
    let px = W / 2;
    let py = H / 2;
    let ex = px;
    let ey = py;
    let shownNum = -1;
    let shownActive: boolean | null = null;
    let visible = true;
    let raf = 0;
    let last = 0;

    const wantsLoop = () => visible && (!reduced || active);

    const step = (t: number, dt: number) => {
      if (active) {
        const ctm = svg.getScreenCTM();
        if (ctm) {
          const p = new DOMPoint(clientX, clientY).matrixTransform(ctm.inverse());
          px = p.x;
          py = p.y;
        }
      }

      if (active && !wasActive) {
        ex = px;
        ey = py;
      }
      wasActive = active;

      const kp = reduced ? 1 : 1 - Math.exp(-dt / TAU_POINTER);
      ex += (px - ex) * kp;
      ey += (py - ey) * kp;

      let focal = -1;
      if (active) {
        let best = R * 1.15;
        for (let i = 0; i < CELLS.length; i++) {
          const c = CELLS[i];
          if (c.solid) continue;
          const d = Math.hypot(ex - c.cx, ey - c.cy);
          if (d < best) {
            best = d;
            focal = i;
          }
        }
      }

      const ke = reduced ? 1 : 1 - Math.exp(-dt / TAU_ENERGY);
      const kl = reduced ? 1 : 1 - Math.exp(-dt / TAU_LIFT);

      for (let i = 0; i < CELLS.length; i++) {
        const el = cellRefs.current[i];
        if (!el) continue;
        const c = CELLS[i];

        if (c.solid) {
          const breathe = reduced ? 1 : 1 + 0.02 * Math.sin(t * 0.00105);
          el.setAttribute(
            "transform",
            `translate(${c.cx.toFixed(1)} ${c.cy.toFixed(1)}) scale(${breathe.toFixed(4)})`,
          );
          continue;
        }

        let target = c.base;

        if (!reduced) {
          const s = Math.sin((c.cx + c.cy) * RIPPLE_K - t * RIPPLE_OMEGA);
          if (s > 0) target = Math.max(target, s * s * RIPPLE_AMP);
        }

        if (active) {
          const d = Math.hypot(ex - c.cx, ey - c.cy);
          if (d < SPOTLIGHT) {
            const n = 1 - d / SPOTLIGHT;
            target = Math.max(target, n * n * (3 - 2 * n));
          }
        }

        energy[i] += (target - energy[i]) * ke;
        lift[i] += ((i === focal && !reduced ? 1 : 0) - lift[i]) * kl;

        el.style.fill = fillAt(energy[i]);
        el.style.stroke = strokeAt(energy[i]);

        const g = lift[i];
        el.setAttribute(
          "transform",
          `translate(${c.cx.toFixed(1)} ${c.cy.toFixed(1)}) scale(${(1 + LIFT * g).toFixed(4)})`,
        );

        const fx =
          g > 0.01
            ? `drop-shadow(0 0 ${(5 * g).toFixed(1)}px rgba(91,91,240,${(0.5 * g).toFixed(2)}))`
            : "";
        if (fx !== lastFilter[i]) {
          el.style.filter = fx;
          lastFilter[i] = fx;
        }
      }

      const n = focal >= 0 ? focal + 1 : 1;
      if (n !== shownNum) {
        num.textContent = String(n).padStart(3, "0");
        shownNum = n;
      }
      if (active !== shownActive) {
        label.style.color = active ? "var(--color-contrast-2)" : "";
        shownActive = active;
      }
    };

    const loop = (t: number) => {
      const dt = Math.min(50, t - last || 16);
      last = t;
      step(t, dt);
      raf = wantsLoop() ? requestAnimationFrame(loop) : 0;
    };

    const start = () => {
      if (!raf && wantsLoop()) {
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    };

    const onMove = (e: PointerEvent) => {
      clientX = e.clientX;
      clientY = e.clientY;
      active = true;
      start();
    };

    const onLeave = () => {
      active = false;
      if (reduced) step(performance.now(), 1000);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    io.observe(panel);

    panel.addEventListener("pointermove", onMove);
    panel.addEventListener("pointerleave", onLeave);
    start();

    return () => {
      cancelAnimationFrame(intro);
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      panel.removeEventListener("pointermove", onMove);
      panel.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className={className}>
      <div ref={panelRef} className="relative aspect-4/3 w-full bg-base-2">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-grey-300) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <Corner className="left-0 top-0 border-l-[0.8px] border-t-[0.8px]" />
        <Corner className="right-0 top-0 border-r-[0.8px] border-t-[0.8px]" />
        <Corner className="bottom-0 left-0 border-b-[0.8px] border-l-[0.8px]" />
        <Corner className="bottom-0 right-0 border-b-[0.8px] border-r-[0.8px]" />

        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label="Abstract hexagonal lattice representing Hexary Labs"
          className="absolute inset-0 size-full p-12"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <polygon id="hero-hex" points={HEX_POINTS} strokeWidth="1.25" />
          </defs>
          {CELLS.map((c, i) => (
            <use
              key={c.key}
              ref={(el) => {
                cellRefs.current[i] = el;
              }}
              href="#hero-hex"
              transform={`translate(${c.cx.toFixed(1)} ${c.cy.toFixed(1)})`}
              style={
                c.solid
                  ? { fill: "#000000", stroke: "#000000" }
                  : { fill: fillAt(c.base), stroke: strokeAt(c.base) }
              }
            />
          ))}
        </svg>

        <span
          ref={labelRef}
          className="reveal absolute bottom-4 right-5 font-display text-small uppercase tracking-widest text-grey-600 transition-colors duration-300"
        >
          Hexary — <span ref={numRef} className="tabular-nums">001</span>
        </span>
      </div>
    </div>
  );
}

function Corner({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute z-10 size-6 border-contrast-2 ${className}`}
    />
  );
}
