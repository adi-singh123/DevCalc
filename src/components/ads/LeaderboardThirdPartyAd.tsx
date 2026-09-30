"use client";

import ThirdPartyAd from "@/src/components/ads/ThirdPartyAd";

export default function LeaderboardThirdPartyAd() {
  return (
    <div className="mt-6 hidden justify-center md:flex">
      <ThirdPartyAd
        adKey="7da1fcc8bc2591c38404f2f0d38fbb3b"
        width={728}
        height={90}
      />
    </div>
  );
}
