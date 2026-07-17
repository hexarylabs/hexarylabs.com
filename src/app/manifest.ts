import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Next emits <link rel="manifest"> for this automatically, same as it does the
 * <link rel="icon"> tags for favicon.ico / icon.svg / apple-icon.png. No
 * hand-written <head> wiring needed.
 *
 * Icon is referenced from /public rather than the app/icon.svg convention —
 * that convention's URL carries a build hash, which a manifest can't predict.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Hexary",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
