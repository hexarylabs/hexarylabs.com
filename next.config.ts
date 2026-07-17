import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // No Content-Security-Policy here: the /contact page loads Calendly's
  // widget script + iframe, and a wrong CSP silently breaks that embed
  // instead of erroring loudly. Add one only after testing report-only
  // against the live Calendly integration.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
