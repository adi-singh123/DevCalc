import { EclipticGeoMoon } from "astronomy-engine";
import { lahiriAyanamsha, localToUtc } from "@/src/lib/improve-life/engine";

export type RashiPlace = {
  label: string;
  latitude: number;
  longitude: number;
  timezone: string;
};

export type RashiResult = {
  key: string;
  name: string;
  westernName: string;
  symbol: string;
  lord: string;
  element: string;
  nature: string;
  traditionalMeaning: string;
  moonDegree: number;
  siderealLongitude: number;
  tropicalLongitude: number;
  ayanamsha: number;
  nakshatra: string;
  pada: number;
  utcDate: string;
  boundaryDistance: number;
};

export const RASHIS = [
  { key: "mesha", name: "Mesha", westernName: "Aries", symbol: "♈", lord: "Mars", element: "Fire", nature: "Movable", traditionalMeaning: "initiative, courage and direct action" },
  { key: "vrishabha", name: "Vrishabha", westernName: "Taurus", symbol: "♉", lord: "Venus", element: "Earth", nature: "Fixed", traditionalMeaning: "stability, patience and material security" },
  { key: "mithuna", name: "Mithuna", westernName: "Gemini", symbol: "♊", lord: "Mercury", element: "Air", nature: "Dual", traditionalMeaning: "communication, curiosity and adaptability" },
  { key: "karka", name: "Karka", westernName: "Cancer", symbol: "♋", lord: "Moon", element: "Water", nature: "Movable", traditionalMeaning: "care, sensitivity and emotional connection" },
  { key: "simha", name: "Simha", westernName: "Leo", symbol: "♌", lord: "Sun", element: "Fire", nature: "Fixed", traditionalMeaning: "confidence, expression and leadership" },
  { key: "kanya", name: "Kanya", westernName: "Virgo", symbol: "♍", lord: "Mercury", element: "Earth", nature: "Dual", traditionalMeaning: "analysis, service and practical improvement" },
  { key: "tula", name: "Tula", westernName: "Libra", symbol: "♎", lord: "Venus", element: "Air", nature: "Movable", traditionalMeaning: "balance, cooperation and relationships" },
  { key: "vrishchika", name: "Vrishchika", westernName: "Scorpio", symbol: "♏", lord: "Mars", element: "Water", nature: "Fixed", traditionalMeaning: "depth, resolve and transformation" },
  { key: "dhanu", name: "Dhanu", westernName: "Sagittarius", symbol: "♐", lord: "Jupiter", element: "Fire", nature: "Dual", traditionalMeaning: "learning, principles and exploration" },
  { key: "makara", name: "Makara", westernName: "Capricorn", symbol: "♑", lord: "Saturn", element: "Earth", nature: "Movable", traditionalMeaning: "discipline, responsibility and long-term effort" },
  { key: "kumbha", name: "Kumbha", westernName: "Aquarius", symbol: "♒", lord: "Saturn", element: "Air", nature: "Fixed", traditionalMeaning: "independent thought, community and systems" },
  { key: "meena", name: "Meena", westernName: "Pisces", symbol: "♓", lord: "Jupiter", element: "Water", nature: "Dual", traditionalMeaning: "empathy, imagination and reflection" },
] as const;

const NAKSHATRAS = ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"];
const normalize = (value: number) => ((value % 360) + 360) % 360;

export function calculateRashi(date: string, time: string, place: RashiPlace): RashiResult {
  const utc = localToUtc(date, time, place.timezone);
  const tropicalLongitude = normalize(EclipticGeoMoon(utc).lon);
  const ayanamsha = lahiriAyanamsha(utc);
  const siderealLongitude = normalize(tropicalLongitude - ayanamsha);
  const index = Math.floor(siderealLongitude / 30);
  const rashi = RASHIS[index];
  const moonDegree = siderealLongitude % 30;
  const nakshatraSize = 360 / 27;
  const nakshatraOffset = siderealLongitude % nakshatraSize;

  return {
    ...rashi,
    moonDegree,
    siderealLongitude,
    tropicalLongitude,
    ayanamsha,
    nakshatra: NAKSHATRAS[Math.floor(siderealLongitude / nakshatraSize)],
    pada: Math.floor(nakshatraOffset / (nakshatraSize / 4)) + 1,
    utcDate: utc.toISOString(),
    boundaryDistance: Math.min(moonDegree, 30 - moonDegree),
  };
}
