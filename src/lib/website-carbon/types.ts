export type HostingStatus = "green" | "not-green" | "unknown";

export type CarbonScanResult = {
  url: string;
  domain: string;
  pageWeightBytes: number;
  htmlBytes: number;
  requestCount: number;
  measuredResourceCount: number;
  unmeasuredResourceCount: number;
  hostingStatus: HostingStatus;
  hostedBy?: string;
  energyPerGbKwh: number;
  carbonIntensityGPerKwh: number;
  co2PerVisitGrams: number;
  grade: "A+" | "A" | "B" | "C" | "D" | "E" | "F";
  scannedAt: string;
  cached: boolean;
  notes: string[];
};

export type CarbonApiResponse =
  | { success: true; data: CarbonScanResult }
  | { success: false; error: string; errorCode: string };
