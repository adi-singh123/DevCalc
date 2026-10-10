import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DevCalc - Calculators and Daily Tools",
    short_name: "DevCalc",
    description: "Install DevCalc for quick access to calculators, saved reports, and daily tools.",
    start_url: "/improve-life?source=pwa",
    scope: "/",
    display: "standalone",
    background_color: "#faf7f0",
    theme_color: "#1f3a5c",
    orientation: "any",
    categories: ["utilities", "education", "lifestyle"],
    icons: [
      {
        src: "/icon.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
