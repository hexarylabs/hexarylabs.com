"use client";

import { useEffect, useRef, useState } from "react";

/** Fires once when `threshold` of the element is visible; with `once: false`, tracks visibility continuously. */
export function useInView<T extends HTMLElement>(
  threshold = 0.4,
  { once = true }: { once?: boolean } = {},
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || (once && inView)) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once, inView]);

  return { ref, inView };
}
