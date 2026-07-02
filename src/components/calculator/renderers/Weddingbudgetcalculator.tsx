"use client";

import { useMemo, useRef, useState } from "react";
import ResultsSection from "../ResultsSection";

const CITY_OPTIONS = [
  { label: "Metro (Delhi, Mumbai, Bangalore, Chennai)", value: "metro", multiplier: 1.35 },
  { label: "Tier-2 City (Jaipur, Lucknow, Coimbatore...)", value: "tier2", multiplier: 1.0 },
  { label: "Tier-3 / Small Town", value: "tier3", multiplier: 0.75 },
] as const;

const STYLE_OPTIONS = [
  { label: "Budget", value: "budget", perGuestRate: 900, photography: 60000, decor: 100000, attireJewellery: 150000, entertainment: 30000 },
  { label: "Standard", value: "standard", perGuestRate: 1800, photography: 150000, decor: 300000, attireJewellery: 450000, entertainment: 120000 },
  { label: "Premium", value: "premium", perGuestRate: 3000, photography: 300000, decor: 600000, attireJewellery: 800000, entertainment: 300000 },
  { label: "Royal", value: "royal", perGuestRate: 5500, photography: 700000, decor: 1500000, attireJewellery: 1800000, entertainment: 800000 },
] as const;

type CityValue = (typeof CITY_OPTIONS)[number]["value"];
type StyleValue = (typeof STYLE_OPTIONS)[number]["value"];

const formatINR = (value: number) =>
  `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

export default function WeddingBudgetCalculator() {
  const [guests, setGuests] = useState("300");
  const [city, setCity] = useState<CityValue>("metro");
  const [style, setStyle] = useState<StyleValue>("standard");
  const [events, setEvents] = useState("3");
  const [contingencyPct, setContingencyPct] = useState("10");
  const [submitted, setSubmitted] = useState(false);

  const guestsRef = useRef<HTMLInputElement>(null);
  const eventsRef = useRef<HTMLInputElement>(null);
  const contingencyRef = useRef<HTMLInputElement>(null);

  const result = useMemo(() => {
    if (!submitted) return null;

    const guestCount = parseFloat(guests);
    const eventCount = parseFloat(events);
    const contingency = parseFloat(contingencyPct);

    if (
      isNaN(guestCount) ||
      isNaN(eventCount) ||
      isNaN(contingency) ||
      guestCount <= 0 ||
      eventCount <= 0 ||
      contingency < 0
    ) {
      return null;
    }

    const cityData = CITY_OPTIONS.find((c) => c.value === city);
    const styleData = STYLE_OPTIONS.find((s) => s.value === style);
    if (!cityData || !styleData) return null;

    const venueCatering =
      guestCount * styleData.perGuestRate * cityData.multiplier * eventCount;

    const fixedCosts =
      styleData.photography + styleData.decor + styleData.attireJewellery + styleData.entertainment;

    const subtotal = venueCatering + fixedCosts;
    const contingencyAmount = subtotal * (contingency / 100);
    const total = subtotal + contingencyAmount;
    const perGuest = total / guestCount;

    return {
      venueCatering,
      photography: styleData.photography,
      decor: styleData.decor,
      attireJewellery: styleData.attireJewellery,
      entertainment: styleData.entertainment,
      subtotal,
      contingencyAmount,
      total,
      perGuest,
    };
  }, [guests, city, style, events, contingencyPct, submitted]);

  const results = result
    ? [
        { label: "Venue & Catering", value: formatINR(result.venueCatering) },
        { label: "Photography & Videography", value: formatINR(result.photography) },
        { label: "Décor & Ambience", value: formatINR(result.decor) },
        { label: "Attire & Jewellery", value: formatINR(result.attireJewellery) },
        { label: "Entertainment", value: formatINR(result.entertainment) },
        { label: "Subtotal", value: formatINR(result.subtotal) },
        { label: "Contingency Buffer", value: formatINR(result.contingencyAmount) },
        { label: "Cost Per Guest", value: formatINR(result.perGuest) },
      ]
    : [];

  const handleReset = () => {
    setGuests("300");
    setCity("metro");
    setStyle("standard");
    setEvents("3");
    setContingencyPct("10");
    setSubmitted(false);
  };

  return (
    <div className="mt-8 w-full max-w-full overflow-hidden rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold overflow-x-auto">Wedding Budget Calculator</h2>

      <div className="flex flex-wrap gap-4">
        <div className="flex-1 basis-[220px] min-w-[160px]">
          <label className="mb-1 block text-sm font-medium text-gray-700">Number of Guests</label>
          <input
            ref={guestsRef}
            type="number"
            min="1"
            className="w-full min-w-0 rounded-xl border px-3 py-2"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>

        <div className="flex-1 basis-[220px] min-w-[160px]">
          <label className="mb-1 block text-sm font-medium text-gray-700">Number of Events</label>
          <input
            ref={eventsRef}
            type="number"
            min="1"
            className="w-full min-w-0 rounded-xl border px-3 py-2"
            value={events}
            onChange={(e) => setEvents(e.target.value)}
          />
        </div>

        <div className="flex-1 basis-[260px] min-w-[180px]">
          <label className="mb-1 block text-sm font-medium text-gray-700">City Tier</label>
          <select
            className="w-full min-w-0 rounded-xl border px-3 py-2"
            value={city}
            onChange={(e) => setCity(e.target.value as CityValue)}
          >
            {CITY_OPTIONS.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 basis-[220px] min-w-[160px]">
          <label className="mb-1 block text-sm font-medium text-gray-700">Wedding Style</label>
          <select
            className="w-full min-w-0 rounded-xl border px-3 py-2"
            value={style}
            onChange={(e) => setStyle(e.target.value as StyleValue)}
          >
            {STYLE_OPTIONS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 basis-[220px] min-w-[160px]">
          <label className="mb-1 block text-sm font-medium text-gray-700">Contingency (%)</label>
          <input
            ref={contingencyRef}
            type="number"
            min="0"
            className="w-full min-w-0 rounded-xl border px-3 py-2"
            value={contingencyPct}
            onChange={(e) => setContingencyPct(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={() => setSubmitted(true)}
          className="flex-1 basis-[140px] min-w-[100px] rounded-xl bg-rose-600 px-4 py-2 font-medium text-white hover:bg-rose-700"
        >
          Calculate
        </button>
        <button
          onClick={handleReset}
          className="flex-1 basis-[140px] min-w-[100px] rounded-xl border px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-6 overflow-hidden rounded-2xl bg-rose-50 p-5">
          <p className="overflow-x-auto text-sm text-gray-600">Estimated Total Wedding Cost</p>
          <p className="break-words text-3xl font-bold text-rose-700">{formatINR(result.total)}</p>
          <p className="mt-1 overflow-x-auto text-sm text-gray-600">
            {formatINR(result.perGuest)} per guest across {events} event{parseFloat(events) > 1 ? "s" : ""}
          </p>
        </div>
      )}

      {result && (
        <ResultsSection
          title="Budget Breakdown"
          results={results}
          calculatorName="Wedding Budget Calculator"
        />
      )}
    </div>
  );
}