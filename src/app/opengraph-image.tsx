import { ImageResponse } from "next/og";
import { site } from "@/content/site";

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
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width={80} height={80} viewBox="0 0 32 32">
            <polygon
              points="16,3 27.26,9.5 27.26,22.5 16,29 4.74,22.5 4.74,9.5"
              fill="none"
              stroke="#C7C4C4"
              strokeWidth={2}
            />
            <polygon
              points="16,10.5 20.76,13.25 20.76,18.75 16,21.5 11.24,18.75 11.24,13.25"
              fill="#5B5BF0"
            />
          </svg>

          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontSize: 64,
              fontWeight: 600,
            }}
          >
            <div style={{ display: "flex", color: "#ffffff" }}>Hexary</div>
            <div style={{ display: "flex", color: "#C7C4C4", fontWeight: 400 }}>Labs</div>
          </div>
        </div>

        <div
          style={{
            marginTop: 32,
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
