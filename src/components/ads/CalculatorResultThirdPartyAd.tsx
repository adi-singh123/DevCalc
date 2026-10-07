"use client";

import ThirdPartyAd from "@/src/components/ads/ThirdPartyAd";

const RESULT_AD_KEY = "6b25611500013dc8b8f1dcf763651172";

export default function CalculatorResultThirdPartyAd() {
  return (
    <section
      className="my-10 flex min-h-[300px] w-full justify-center overflow-hidden"
      aria-label="Advertisement"
    >
      <ThirdPartyAd
        adKey={RESULT_AD_KEY}
        width={160}
        height={300}
        className="mx-auto"
      />
    </section>
  );
}
