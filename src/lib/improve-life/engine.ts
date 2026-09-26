import { Body, Ecliptic, EclipticGeoMoon, GeoVector, SiderealTime, SunPosition } from "astronomy-engine";
import type { BirthDetails, DashaPeriod, LifeReport, PlanetPosition } from "./types";

const SIGNS = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const NAKSHATRAS = ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"];
const DASHA_LORDS = ["Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"];
const DASHA_YEARS: Record<string, number> = { Ketu: 7, Venus: 20, Sun: 6, Moon: 10, Mars: 7, Rahu: 18, Jupiter: 16, Saturn: 19, Mercury: 17 };

const normalize = (value: number) => ((value % 360) + 360) % 360;

// A documented mean Lahiri approximation. It is intentionally not represented as Swiss Ephemeris output.
function lahiriAyanamsha(date: Date) {
  const year = date.getUTCFullYear() + (date.getUTCMonth() + 0.5) / 12;
  return 23.853055 + (year - 2000) * (50.290966 / 3600);
}

function zonedParts(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23",
  }).formatToParts(date);
  return Object.fromEntries(parts.map((part) => [part.type, part.value]));
}

function localToUtc(date: string, time: string, timeZone: string) {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  const target = Date.UTC(year, month - 1, day, hour, minute, 0);
  let guess = target;
  for (let index = 0; index < 4; index += 1) {
    const parts = zonedParts(new Date(guess), timeZone);
    const represented = Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day), Number(parts.hour), Number(parts.minute), Number(parts.second));
    guess += target - represented;
  }
  return new Date(guess);
}

function vargaSign(longitude: number, division: 9 | 10) {
  return SIGNS[Math.floor(normalize(longitude * division) / 30)];
}

function position(name: string, longitude: number, lagnaLongitude?: number): PlanetPosition {
  const value = normalize(longitude);
  const nakSize = 360 / 27;
  return {
    name,
    longitude: value,
    sign: SIGNS[Math.floor(value / 30)],
    degree: value % 30,
    nakshatra: NAKSHATRAS[Math.floor(value / nakSize)],
    pada: Math.floor((value % nakSize) / (nakSize / 4)) + 1,
    house: lagnaLongitude === undefined ? undefined : Math.floor(normalize(value - lagnaLongitude) / 30) + 1,
    navamsha: vargaSign(value, 9),
    dashamsha: vargaSign(value, 10),
  };
}

function ascendant(date: Date, latitude: number, longitude: number, ayanamsha: number) {
  const theta = normalize(SiderealTime(date) * 15 + longitude) * Math.PI / 180;
  const lat = latitude * Math.PI / 180;
  const eps = 23.439291 * Math.PI / 180;
  const tropical = Math.atan2(-Math.cos(theta), Math.sin(theta) * Math.cos(eps) + Math.tan(lat) * Math.sin(eps)) * 180 / Math.PI + 180;
  return normalize(tropical - ayanamsha);
}

function dashaTimeline(birth: Date, moonLongitude: number): DashaPeriod[] {
  const nakSize = 360 / 27;
  const nakIndex = Math.floor(moonLongitude / nakSize);
  const firstLordIndex = nakIndex % 9;
  const elapsedFraction = (moonLongitude % nakSize) / nakSize;
  const firstLord = DASHA_LORDS[firstLordIndex];
  let cursor = new Date(birth);
  const firstStart = new Date(birth);
  firstStart.setUTCDate(firstStart.getUTCDate() - Math.round(DASHA_YEARS[firstLord] * elapsedFraction * 365.2425));
  cursor = firstStart;
  const periods: DashaPeriod[] = [];
  for (let index = 0; index < 12; index += 1) {
    const lord = DASHA_LORDS[(firstLordIndex + index) % 9];
    const end = new Date(cursor);
    end.setUTCDate(end.getUTCDate() + Math.round(DASHA_YEARS[lord] * 365.2425));
    periods.push({ planet: lord, start: cursor.toISOString(), end: end.toISOString() });
    cursor = end;
  }
  return periods;
}

export function calculateLifeReport(details: BirthDetails): LifeReport {
  const limited = details.timeAccuracy === "unknown";
  const utc = localToUtc(details.date, limited ? "12:00" : details.time, details.place.timezone);
  const ayanamsha = lahiriAyanamsha(utc);
  const lagnaLongitude = limited ? undefined : ascendant(utc, details.place.latitude, details.place.longitude, ayanamsha);
  const planetInputs: Array<[string, Body]> = [["Mercury", Body.Mercury], ["Venus", Body.Venus], ["Mars", Body.Mars], ["Jupiter", Body.Jupiter], ["Saturn", Body.Saturn]];
  const sunLongitude = normalize(SunPosition(utc).elon - ayanamsha);
  const moonLongitude = normalize(EclipticGeoMoon(utc).lon - ayanamsha);
  const planets = [position("Sun", sunLongitude, lagnaLongitude), position("Moon", moonLongitude, lagnaLongitude)];
  for (const [name, body] of planetInputs) {
    const longitude = normalize(Ecliptic(GeoVector(body, utc, true)).elon - ayanamsha);
    planets.push(position(name, longitude, lagnaLongitude));
  }
  const days = utc.getTime() / 86400000 + 2440587.5;
  const centuries = (days - 2451545) / 36525;
  const rahu = normalize(125.04452 - 1934.136261 * centuries - ayanamsha);
  planets.push(position("Rahu", rahu, lagnaLongitude), position("Ketu", rahu + 180, lagnaLongitude));
  const dashas = dashaTimeline(utc, moonLongitude);
  const now = Date.now();
  return {
    details,
    utcDate: utc.toISOString(),
    ayanamsha,
    limited,
    lagna: lagnaLongitude === undefined ? undefined : position("Lagna", lagnaLongitude, lagnaLongitude),
    planets,
    moon: planets[1],
    sun: planets[0],
    dashas,
    currentDasha: dashas.find((period) => new Date(period.start).getTime() <= now && new Date(period.end).getTime() > now),
  };
}
