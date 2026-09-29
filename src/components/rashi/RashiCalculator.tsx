"use client";

import { FormEvent, useEffect, useState } from "react";
import { calculateRashi, type RashiPlace, type RashiResult } from "@/src/lib/rashi/calculateRashi";
import RashiIllustration from "./RashiIllustration";

export default function RashiCalculator() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [query, setQuery] = useState("");
  const [places, setPlaces] = useState<RashiPlace[]>([]);
  const [place, setPlace] = useState<RashiPlace | null>(null);
  const [result, setResult] = useState<RashiResult | null>(null);
  const [error, setError] = useState("");
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (place || query.trim().length < 2) return;
    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setSearching(true);
      try {
        const response = await fetch(`/api/improve-life/locations?q=${encodeURIComponent(query.trim())}`, { signal: controller.signal });
        const data = await response.json() as { results?: RashiPlace[] };
        setPlaces(data.results ?? []);
      } catch (reason) {
        if ((reason as Error).name !== "AbortError") setPlaces([]);
      } finally { setSearching(false); }
    }, 350);
    return () => { window.clearTimeout(timer); controller.abort(); };
  }, [query, place]);

  function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    if (!date || !time || !place) { setError("Enter your birth date and exact time, then select a birthplace from the suggestions."); return; }
    if (new Date(`${date}T${time}`) > new Date()) { setError("Birth date and time cannot be in the future."); return; }
    try { setResult(calculateRashi(date, time, place)); }
    catch { setError("We could not calculate this birth time. Please check the details and try again."); }
  }

  return (
    <section id="calculator" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]" aria-labelledby="calculator-title">
      <form onSubmit={submit} className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8b692f]">Birth details</p>
        <h2 id="calculator-title" className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">Find your Janma Rashi</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Use the date and time recorded at birth. Select the birthplace suggestion so the correct time zone is applied.</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">Birth date
            <input required type="date" min="1900-01-01" max={new Date().toISOString().slice(0, 10)} value={date} onChange={(e) => setDate(e.target.value)} className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 font-normal text-slate-900 outline-none focus:border-[#1f3a5c] focus:ring-2 focus:ring-[#1f3a5c]/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
          </label>
          <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">Exact birth time
            <input required type="time" value={time} onChange={(e) => setTime(e.target.value)} className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 font-normal text-slate-900 outline-none focus:border-[#1f3a5c] focus:ring-2 focus:ring-[#1f3a5c]/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
          </label>
        </div>
        <div className="relative mt-5">
          <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">Birthplace
            <input required autoComplete="off" value={query} onChange={(e) => { const value = e.target.value; setQuery(value); setPlace(null); setResult(null); if (value.trim().length < 2) setPlaces([]); }} placeholder="Start typing a city, for example Jaipur" className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 font-normal text-slate-900 outline-none focus:border-[#1f3a5c] focus:ring-2 focus:ring-[#1f3a5c]/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
          </label>
          {searching && <p className="mt-2 text-xs text-slate-500">Searching places…</p>}
          {!place && places.length > 0 && <ul className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-xl border border-stone-200 bg-white p-1 shadow-xl dark:border-slate-700 dark:bg-slate-900">
            {places.map((item) => <li key={`${item.label}-${item.latitude}`}><button type="button" onClick={() => { setPlace(item); setQuery(item.label); setPlaces([]); }} className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-slate-700 hover:bg-stone-100 dark:text-slate-200 dark:hover:bg-slate-800">{item.label}<span className="block text-xs text-slate-500">{item.timezone}</span></button></li>)}
          </ul>}
          {place && <p className="mt-2 text-xs text-slate-500">Selected time zone: {place.timezone}</p>}
        </div>
        {error && <p role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200">{error}</p>}
        <button type="submit" className="mt-6 w-full rounded-xl bg-[#1f3a5c] px-5 py-3.5 font-bold text-white transition hover:bg-[#172c46] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3a5c]">Calculate my Rashi</button>
        <p className="mt-3 text-center text-xs text-slate-500">No account required. Birth details stay in your browser.</p>
      </form>

      <div aria-live="polite" className="rounded-3xl border border-stone-200 bg-[#f5f0e7] p-5 dark:border-slate-800 dark:bg-slate-950 sm:p-7">
        {!result ? <div className="flex min-h-[440px] flex-col items-center justify-center text-center">
          <RashiIllustration symbol="☾" name="Janma Rashi" westernName="Vedic Moon sign" className="w-full max-w-[260px]" />
          <h2 className="mt-5 text-2xl font-bold text-slate-950 dark:text-white">Your result will appear here</h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">We calculate where the Moon was in the sidereal zodiac at your recorded birth moment.</p>
        </div> : <div>
          <div className="grid items-center gap-5 sm:grid-cols-[190px_1fr]">
            <RashiIllustration symbol={result.symbol} name={result.name} westernName={result.westernName} className="mx-auto w-full max-w-[210px]" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8b692f]">Your Janma Rashi</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-950 dark:text-white">{result.name} <span className="text-xl font-medium text-slate-500">({result.westernName})</span></h2>
              <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">At your birth time, the sidereal Moon was at <strong>{result.moonDegree.toFixed(2)}° {result.name}</strong>. In Jyotish tradition, this Moon sign is associated with {result.traditionalMeaning}.</p>
            </div>
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[["Nakshatra", result.nakshatra], ["Pada", String(result.pada)], ["Rashi lord", result.lord], ["Element", result.element]].map(([term, value]) => <div key={term} className="rounded-xl border border-stone-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900"><dt className="text-xs text-slate-500">{term}</dt><dd className="mt-1 font-bold text-slate-900 dark:text-white">{value}</dd></div>)}
          </dl>
          {result.boundaryDistance < 0.25 && <p className="mt-5 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-100"><strong>Close to a Rashi boundary:</strong> the Moon is only {result.boundaryDistance.toFixed(2)}° from a sign edge. Even a small birth-time error or a different ayanamsha may change the result; verify the recorded time with an astrologer for formal use.</p>}
          <details className="mt-5 rounded-xl border border-stone-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <summary className="cursor-pointer font-semibold text-slate-900 dark:text-white">See calculation details</summary>
            <div className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300"><p>UTC birth instant: {new Date(result.utcDate).toLocaleString("en-IN", { timeZone: "UTC", dateStyle: "medium", timeStyle: "medium" })} UTC</p><p>Tropical Moon longitude: {result.tropicalLongitude.toFixed(4)}°</p><p>Mean Lahiri ayanamsha: {result.ayanamsha.toFixed(4)}°</p><p>Sidereal Moon longitude: {result.siderealLongitude.toFixed(4)}°</p><p>Rashi nature: {result.nature}</p></div>
          </details>
        </div>}
      </div>
    </section>
  );
}
