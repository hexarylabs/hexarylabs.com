import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// PLACEHOLDER: text-only social share card. Replace with real designed
// artwork (see docs/design-spec.md §13 "before launch") before launch.
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#000000",
          padding: "80px",
        }}
      >
        <div style={{ width: 56, height: 8, background: "#5B45F5" }} />
        <div
          style={{
            marginTop: 40,
            fontSize: 72,
            fontWeight: 600,
            color: "#ffffff",
            display: "flex",
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 32,
            color: "#C7C4C4",
            display: "flex",
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    size,
  );
}
