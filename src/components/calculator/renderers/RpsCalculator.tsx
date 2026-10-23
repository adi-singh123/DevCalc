"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

const durationMultipliers = {
  seconds: 1,
  minutes: 60,
  hours: 3_600,
} as const;

export default function RpsCalculator() {
  const [requests, setRequests] = useState("");
  const [duration, setDuration] = useState("");
  const [durationUnit, setDurationUnit] = useState<keyof typeof durationMultipliers>("seconds");
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (!submitted) return null;
    const totalRequests = Number(requests);
    const elapsed = Number(duration) * durationMultipliers[durationUnit];
    if (!Number.isFinite(totalRequests) || !Number.isFinite(elapsed) || totalRequests <= 0 || elapsed <= 0) return null;
    const rps = totalRequests / elapsed;
    return {
      rps,
      perMinute: rps * 60,
      perHour: rps * 3_600,
      intervalMs: 1_000 / rps,
    };
  }, [duration, durationUnit, requests, submitted]);

  const results = result ? [
    { label: "Requests per second", value: result.rps.toLocaleString(undefined, { maximumFractionDigits: 3 }), highlight: true },
    { label: "Requests per minute", value: result.perMinute.toLocaleString(undefined, { maximumFractionDigits: 2 }) },
    { label: "Requests per hour", value: result.perHour.toLocaleString(undefined, { maximumFractionDigits: 0 }) },
    { label: "Average interval", value: `${result.intervalMs.toLocaleString(undefined, { maximumFractionDigits: 3 })} ms/request` },
  ] : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-6">
      <p className="text-slate-600 dark:text-slate-300">Convert a measured request count and elapsed time into an average request rate.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="font-medium">Total completed requests
          <input type="number" min="0" inputMode="decimal" value={requests} onChange={(event) => setRequests(event.target.value)} placeholder="6000" className="mt-2 w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-950" />
        </label>
        <label className="font-medium">Elapsed duration
          <div className="mt-2 flex gap-2">
            <input type="number" min="0" inputMode="decimal" value={duration} onChange={(event) => setDuration(event.target.value)} placeholder="60" className="min-w-0 flex-1 rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-950" />
            <select value={durationUnit} onChange={(event) => setDurationUnit(event.target.value as keyof typeof durationMultipliers)} className="rounded-xl border bg-white p-3 dark:border-slate-700 dark:bg-slate-950">
              <option value="seconds">seconds</option><option value="minutes">minutes</option><option value="hours">hours</option>
            </select>
          </div>
        </label>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button onClick={() => setSubmitted(true)} className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">Calculate RPS</button>
        <button onClick={() => { setRequests(""); setDuration(""); setDurationUnit("seconds"); setSubmitted(false); }} className="rounded-xl border px-6 py-3 dark:border-slate-700">Reset</button>
      </div>
      {submitted && !result && <p className="mt-4 text-sm text-red-600">Enter positive request and duration values.</p>}
      {results.length > 0 && <ResultsSection title="Request Rate" results={results} calculatorName="Requests Per Second Calculator" />}
    </div>
  );
}
