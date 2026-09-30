"use client";

import { usePathname } from "next/navigation";
import ThirdPartyAd from "@/src/components/ads/ThirdPartyAd";

const IN_CONTENT_AD_KEY = "6b25611500013dc8b8f1dcf763651172";

export default function InContentAd() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <section
      className="mx-auto mt-16 flex min-h-[300px] w-full max-w-7xl justify-center px-4 sm:px-6 lg:px-8"
      aria-label="Advertisement"
    >
      <ThirdPartyAd
        adKey={IN_CONTENT_AD_KEY}
        width={160}
        height={300}
      />
    </section>
  );
}
