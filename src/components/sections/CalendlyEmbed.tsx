"use client";

import { useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

export function CalendlyEmbed({ url }: { url: string }) {
  const host = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-[44rem] w-full overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid place-items-center bg-base-2"
      >
        <span className="size-8 animate-spin rounded-full border-2 border-grey-300 border-t-accent" />
      </div>

      <div ref={host} className="relative h-full w-full" />

      {/* onReady (not onLoad) re-runs on every mount, so the widget still
          initialises when arriving via client-side nav with the script cached. */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        onReady={() => {
          if (host.current) {
            window.Calendly?.initInlineWidget({ url, parentElement: host.current });
          }
        }}
      />
    </div>
  );
}
