"use client";

import { FormEvent, useMemo, useState } from "react";
import type { CarbonApiResponse, CarbonScanResult } from "@/src/lib/website-carbon/types";

function formatBytes(bytes: number) {
  return bytes >= 1_000_000 ? `${(bytes / 1_000_000).toFixed(2)} MB` : `${(bytes / 1_000).toFixed(1)} KB`;
}

function formatCarbon(grams: number) {
  if (grams < 0.01) return `${(grams * 1000).toFixed(2)} mg`;
  if (grams < 1000) return `${grams.toFixed(2)} g`;
  return `${(grams / 1000).toFixed(2)} kg`;
}

export default function WebsiteCarbonCalculator() {
  const [url, setUrl] = useState("");
  const [monthlyVisitors, setMonthlyVisitors] = useState("");
  const [result, setResult] = useState<CarbonScanResult | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const projections = useMemo(() => {
    const visits = Math.max(0, Number(monthlyVisitors) || 0);
    if (!result || !visits) return null;
    const monthly = result.co2PerVisitGrams * visits;
    const yearly = monthly * 12;
    return { monthly, yearly, drivingKm: yearly / 192, phoneCharges: yearly / 8.22 };
  }, [monthlyVisitors, result]);

  async function calculate(event: FormEvent) {
    event.preventDefault(); setError(""); setResult(null); setLoading(true);
    try {
      const response = await fetch("/api/website-carbon", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ url }) });
      const data = await response.json() as CarbonApiResponse;
      if (!data.success) throw new Error(data.error);
      setResult(data.data);
    } catch (reason) { setError(reason instanceof Error ? reason.message : "The website could not be checked."); }
    finally { setLoading(false); }
  }

  function share() {
    if (!result) return;
    const text = `My website produces an estimated ${result.co2PerVisitGrams.toFixed(2)}g of CO2 per visit (grade ${result.grade}). Check yours:`;
    const shareUrl = "https://www.devcalc.in/website-carbon-footprint-calculator";
    if (navigator.share) void navigator.share({ title: "Website carbon footprint result", text, url: shareUrl }).catch(() => undefined);
    else window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${text} ${shareUrl}`)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
      <form onSubmit={calculate} className="space-y-5">
        <div>
          <label htmlFor="carbon-url" className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200">Website URL</label>
          <input id="carbon-url" type="text" required inputMode="url" autoComplete="url" value={url} onChange={(event) => setUrl(event.target.value)} placeholder="https://example.com" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#1f3a5c] focus:ring-2 focus:ring-[#1f3a5c]/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
          <p className="mt-2 text-xs leading-5 text-slate-500">The server requests the public page and its declared resources. Private network addresses are blocked.</p>
        </div>
        <div>
          <label htmlFor="monthly-visitors" className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200">Estimated monthly visits <span className="font-normal text-slate-500">(optional)</span></label>
          <input id="monthly-visitors" type="number" min="0" step="1" value={monthlyVisitors} onChange={(event) => setMonthlyVisitors(event.target.value)} placeholder="For example, 10000" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#1f3a5c] focus:ring-2 focus:ring-[#1f3a5c]/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
          <p className="mt-2 text-xs leading-5 text-slate-500">Changing visits updates the monthly and yearly totals immediately. Emissions for one visit stay the same.</p>
        </div>
        <button type="submit" disabled={loading} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1f3a5c] px-5 py-3 font-bold text-white transition hover:bg-[#172c46] disabled:cursor-wait disabled:opacity-70">
          {loading && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />}
          {loading ? "Measuring page resources…" : "Calculate website carbon"}
        </button>
      </form>

      {error && <div role="alert" className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200"><strong>We could not complete the check.</strong><p className="mt-1">{error}</p></div>}

      {result && <section className="mt-7 border-t border-stone-200 pt-7 dark:border-slate-800" aria-live="polite">
        <div className="rounded-2xl bg-[#f5f0e7] p-5 dark:bg-slate-950">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">For one page visit</p><p className="mt-2 text-4xl font-bold text-[#1f3a5c] dark:text-blue-300">{result.co2PerVisitGrams.toFixed(3)} g CO₂e</p><p className="mt-2 break-all text-sm text-slate-600 dark:text-slate-300">{result.url}</p></div>
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-[#1f3a5c] bg-white text-3xl font-black text-[#1f3a5c] dark:bg-slate-900 dark:text-blue-300"><span><span className="sr-only">Carbon grade </span>{result.grade}</span></div>
          </div>
          {projections && <div className="mt-5 grid gap-3 border-t border-stone-300 pt-5 dark:border-slate-800 sm:grid-cols-2">
            <div className="rounded-xl bg-white p-4 dark:bg-slate-900"><p className="text-xs font-bold uppercase tracking-wide text-slate-500">For {Number(monthlyVisitors).toLocaleString("en-IN")} visits / month</p><p className="mt-1 text-2xl font-bold text-[#1f3a5c] dark:text-blue-300">{formatCarbon(projections.monthly)} CO₂e</p></div>
            <div className="rounded-xl bg-white p-4 dark:bg-slate-900"><p className="text-xs font-bold uppercase tracking-wide text-slate-500">For one year at this traffic</p><p className="mt-1 text-2xl font-bold text-[#1f3a5c] dark:text-blue-300">{formatCarbon(projections.yearly)} CO₂e</p></div>
          </div>}
          {!projections && <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">Add monthly visits above to see monthly and yearly emissions.</p>}
        </div>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-stone-200 p-4 dark:border-slate-800"><dt className="text-xs text-slate-500">Estimated page weight</dt><dd className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{formatBytes(result.pageWeightBytes)}</dd></div>
          <div className="rounded-xl border border-stone-200 p-4 dark:border-slate-800"><dt className="text-xs text-slate-500">Detected requests</dt><dd className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{result.requestCount}</dd></div>
          <div className="rounded-xl border border-stone-200 p-4 dark:border-slate-800"><dt className="text-xs text-slate-500">Hosting check</dt><dd className="mt-1 text-sm font-bold text-slate-900 dark:text-white">{result.hostingStatus === "green" ? `Green${result.hostedBy ? ` · ${result.hostedBy}` : ""}` : result.hostingStatus === "not-green" ? "Not listed as green" : "Unable to verify hosting"}</dd></div>
          <div className="rounded-xl border border-stone-200 p-4 dark:border-slate-800"><dt className="text-xs text-slate-500">Grid intensity used</dt><dd className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{result.carbonIntensityGPerKwh} g/kWh</dd></div>
        </dl>
        {projections && <div className="mt-4 rounded-2xl border border-stone-200 p-5 dark:border-slate-800"><h3 className="font-bold text-slate-900 dark:text-white">What the yearly total represents</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Roughly <strong>{projections.drivingKm.toFixed(1)} km</strong> driven in a petrol car (using 192 g/km), or approximately <strong>{Math.round(projections.phoneCharges).toLocaleString("en-IN")} smartphone charges</strong> (using 8.22 g per charge).</p></div>}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3"><p className="text-xs text-slate-500">{result.cached ? "Returned from the 24-hour URL cache." : `Measured ${result.measuredResourceCount} responses.`}</p><button type="button" onClick={share} className="rounded-xl border border-[#1f3a5c] px-4 py-2 text-sm font-bold text-[#1f3a5c] hover:bg-[#1f3a5c] hover:text-white dark:border-blue-300 dark:text-blue-300">Share your result</button></div>
        {result.notes.length > 0 && <ul className="mt-4 list-disc space-y-1 pl-5 text-xs leading-5 text-slate-500">{result.notes.map((note) => <li key={note}>{note}</li>)}</ul>}
      </section>}
    </div>
  );
}
