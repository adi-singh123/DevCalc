"use client";

import { useMemo, useRef, useState } from "react";
import ResultsSection from "../ResultsSection";

const EVENT_TYPE_OPTIONS = [
  { label: "Seminar / Training", value: "seminar", baseRate: 1500 },
  { label: "Business Conference", value: "conference", baseRate: 2200 },
  { label: "Annual Day / Team Celebration", value: "annualday", baseRate: 2800 },
  { label: "Product Launch", value: "launch", baseRate: 3200 },
  { label: "Gala / Award Night", value: "gala", baseRate: 4000 },
] as const;

const TIER_OPTIONS = [
  { label: "Basic", value: "basic", rateMultiplier: 0.7, avCost: 50000, decorCost: 30000, entertainmentCost: 10000 },
  { label: "Standard", value: "standard", rateMultiplier: 1.0, avCost: 180000, decorCost: 80000, entertainmentCost: 40000 },
  { label: "Premium", value: "premium", rateMultiplier: 1.5, avCost: 500000, decorCost: 250000, entertainmentCost: 150000 },
] as const;

type EventTypeValue = (typeof EVENT_TYPE_OPTIONS)[number]["value"];
type TierValue = (typeof TIER_OPTIONS)[number]["value"];

const GST_RATE = 0.18;

const formatINR = (value: number) =>
  `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

export default function EventCostCalculator() {
  const [attendees, setAttendees] = useState("200");
  const [eventType, setEventType] = useState<EventTypeValue>("conference");
  const [tier, setTier] = useState<TierValue>("standard");
  const [contingencyPct, setContingencyPct] = useState("10");
  const [submitted, setSubmitted] = useState(false);

  const attendeesRef = useRef<HTMLInputElement>(null);
  const contingencyRef = useRef<HTMLInputElement>(null);

  const result = useMemo(() => {
    if (!submitted) return null;

    const attendeeCount = parseFloat(attendees);
    const contingency = parseFloat(contingencyPct);

    if (
      isNaN(attendeeCount) ||
      isNaN(contingency) ||
      attendeeCount <= 0 ||
      contingency < 0
    ) {
      return null;
    }

    const eventData = EVENT_TYPE_OPTIONS.find((e) => e.value === eventType);
    const tierData = TIER_OPTIONS.find((t) => t.value === tier);
    if (!eventData || !tierData) return null;

    const venueCatering = attendeeCount * eventData.baseRate * tierData.rateMultiplier;
    const avProduction = tierData.avCost;
    const decor = tierData.decorCost;
    const entertainment = tierData.entertainmentCost;

    const subtotal = venueCatering + avProduction + decor + entertainment;
    const gstAmount = subtotal * GST_RATE;
    const contingencyAmount = subtotal * (contingency / 100);
    const total = subtotal + gstAmount + contingencyAmount;
    const perAttendee = total / attendeeCount;

    return {
      venueCatering,
      avProduction,
      decor,
      entertainment,
      subtotal,
      gstAmount,
      contingencyAmount,
      total,
      perAttendee,
    };
  }, [attendees, eventType, tier, contingencyPct, submitted]);

  const results = result
    ? [
        { label: "Venue & Catering", value: formatINR(result.venueCatering) },
        { label: "AV & Production", value: formatINR(result.avProduction) },
        { label: "Décor", value: formatINR(result.decor) },
        { label: "Entertainment", value: formatINR(result.entertainment) },
        { label: "Subtotal", value: formatINR(result.subtotal) },
        { label: "GST (18%)", value: formatINR(result.gstAmount) },
        { label: "Contingency", value: formatINR(result.contingencyAmount) },
        { label: "Cost Per Attendee", value: formatINR(result.perAttendee) },
      ]
    : [];

  const handleReset = () => {
    setAttendees("200");
    setEventType("conference");
    setTier("standard");
    setContingencyPct("10");
    setSubmitted(false);
  };

  return (
    <div className="mt-8 w-full max-w-full overflow-hidden rounded-3xl border bg-white p-4 shadow-sm sm:p-6">
      <h2 className="mb-4 overflow-x-auto text-xl font-semibold">Event Cost Calculator</h2>

      <div className="flex flex-wrap gap-4">
        <div className="flex-1 basis-[200px] min-w-0">
          <label className="mb-1 block text-sm font-medium text-gray-700">Number of Attendees</label>
          <input
            ref={attendeesRef}
            type="number"
            min="1"
            className="w-full min-w-0 rounded-xl border px-3 py-2"
            value={attendees}
            onChange={(e) => setAttendees(e.target.value)}
          />
        </div>

        <div className="flex-1 basis-[240px] min-w-0">
          <label className="mb-1 block text-sm font-medium text-gray-700">Event Type</label>
          <select
            className="w-full min-w-0 rounded-xl border px-3 py-2"
            value={eventType}
            onChange={(e) => setEventType(e.target.value as EventTypeValue)}
          >
            {EVENT_TYPE_OPTIONS.map((e) => (
              <option key={e.value} value={e.value}>
                {e.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 basis-[200px] min-w-0">
          <label className="mb-1 block text-sm font-medium text-gray-700">Production Tier</label>
          <select
            className="w-full min-w-0 rounded-xl border px-3 py-2"
            value={tier}
            onChange={(e) => setTier(e.target.value as TierValue)}
          >
            {TIER_OPTIONS.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 basis-[200px] min-w-0">
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
          className="flex-1 basis-[140px] min-w-0 rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
        >
          Calculate
        </button>
        <button
          onClick={handleReset}
          className="flex-1 basis-[140px] min-w-0 rounded-xl border px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-6 overflow-hidden rounded-2xl bg-indigo-50 p-5">
          <p className="overflow-x-auto text-sm text-gray-600">Estimated Total Event Cost (incl. GST)</p>
          <p className="overflow-x-auto text-3xl font-bold text-indigo-700">{formatINR(result.total)}</p>
          <p className="mt-1 overflow-x-auto text-sm text-gray-600">
            {formatINR(result.perAttendee)} per attendee
          </p>
        </div>
      )}

      {result && (
        <ResultsSection
          title="Cost Breakdown"
          results={results}
          calculatorName="Event Cost Calculator"
        />
      )}
    </div>
  );
}