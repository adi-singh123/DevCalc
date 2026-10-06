"use client";

import { usePathname } from "next/navigation";
import ResponsiveContentAd from "@/src/components/ads/ResponsiveContentAd";

const SUPPORTED_PATHS = new Set([
  "/about",
  "/advertise",
  "/college-project",
  "/contact",
  "/improve-life",
  "/want-automation",
]);

export default function StaticPageTopAd() {
  const pathname = usePathname();

  if (!SUPPORTED_PATHS.has(pathname)) {
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <ResponsiveContentAd priority />
    </div>
  );
}
