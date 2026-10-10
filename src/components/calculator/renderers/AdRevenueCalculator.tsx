"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

type Method = "page-rpm" | "impression-rpm" | "cpc";

const currencies = [
  { code: "USD", symbol: "$" },
  { code: "INR", symbol: "₹" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
];

const methodHelp: Record<Method, string> = {
  "page-rpm": "Best when you know monthly page views and Page RPM from your ad report.",
  "impression-rpm": "Use actual ad impressions and Impression/Ad RPM. Do not substitute page views.",
  cpc: "Estimate click-based revenue from ad impressions, ad CTR, and average CPC.",
};

function positive(value: string) {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? number : 0;
}

export default function AdRevenueCalculator() {
  const [method, setMethod] = useState<Method>("page-rpm");
  const [currency, setCurrency] = useState("USD");
  const [traffic, setTraffic] = useState("100000");
  const [rpm, setRpm] = useState("2.5");
  const [ctr, setCtr] = useState("1");
  const [cpc, setCpc] = useState("0.15");
  const [target, setTarget] = useState("1000");
  const [submitted, setSubmitted] = useState(false);

  const symbol = currencies.find((item) => item.code === currency)?.symbol ?? "$";
  const calculation = useMemo(() => {
    if (!submitted) return null;
    const monthlyTraffic = positive(traffic);
    const rate = positive(rpm);
    const clickRate = Math.min(100, positive(ctr));
    const clickValue = positive(cpc);
    const targetRevenue = positive(target);

    const clicks = method === "cpc" ? monthlyTraffic * clickRate / 100 : 0;
    const monthlyRevenue = method === "cpc" ? clicks * clickValue : monthlyTraffic / 1000 * rate;
    const effectiveRpm = monthlyTraffic > 0 ? monthlyRevenue / monthlyTraffic * 1000 : 0;
    const requiredTraffic = targetRevenue === 0
      ? 0
      : method === "cpc"
        ? clickRate > 0 && clickValue > 0 ? targetRevenue / (clickRate / 100 * clickValue) : null
        : rate > 0 ? targetRevenue * 1000 / rate : null;
    const baseRate = method === "cpc" ? clickValue : rate;
    const scenario = (multiplier: number) => method === "cpc"
      ? clicks * baseRate * multiplier
      : monthlyTraffic / 1000 * baseRate * multiplier;

    return {
      monthlyTraffic,
      clicks,
      monthlyRevenue,
      dailyRevenue: monthlyRevenue * 12 / 365,
      annualRevenue: monthlyRevenue * 12,
      effectiveRpm,
      requiredTraffic,
      low: scenario(0.8),
      high: scenario(1.2),
      targetRevenue,
      targetDifference: monthlyRevenue - targetRevenue,
      formulaText: method === "cpc"
        ? `${monthlyTraffic.toLocaleString("en-IN")} impressions × ${clickRate}% CTR × ${moneyNumber(clickValue)} CPC`
        : `${monthlyTraffic.toLocaleString("en-IN")} ${method === "page-rpm" ? "page views" : "ad impressions"} ÷ 1,000 × ${moneyNumber(rate)} RPM`,
    };
  }, [cpc, ctr, method, rpm, submitted, target, traffic]);

  const money = (value: number) => `${symbol}${value.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const requiredTrafficText = calculation?.requiredTraffic === null
    ? "Enter a rate above 0"
    : Math.ceil(calculation?.requiredTraffic ?? 0).toLocaleString("en-IN");
  const trafficLabel = method === "page-rpm" ? "Monthly page views" : "Monthly ad impressions";

  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-blue-50 p-6 dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">Publisher revenue estimator</p>
        <h2 className="mt-1 text-2xl font-bold">Choose the metric you actually have</h2>
        <div className="mt-5 grid gap-2 sm:grid-cols-3">
          {(["page-rpm", "impression-rpm", "cpc"] as Method[]).map((value) => <button key={value} type="button" onClick={() => { setMethod(value); setSubmitted(false); }} className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${method === value ? "border-emerald-600 bg-emerald-600 text-white" : "border-slate-300 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"}`}>{value === "page-rpm" ? "Page RPM" : value === "impression-rpm" ? "Impression RPM" : "CPC + CTR"}</button>)}
        </div>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{methodHelp[method]}</p>
      </div>

      <div className="p-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <label><span className="mb-2 block font-medium">Currency</span><select value={currency} onChange={(event) => setCurrency(event.target.value)} className="w-full rounded-xl border border-slate-300 bg-transparent p-3 dark:border-slate-700">{currencies.map((item) => <option key={item.code} value={item.code}>{item.code} ({item.symbol})</option>)}</select></label>
          <label><span className="mb-2 block font-medium">{trafficLabel}</span><input type="number" min="0" step="1" value={traffic} onChange={(event) => { setTraffic(event.target.value); setSubmitted(false); }} className="w-full rounded-xl border border-slate-300 bg-transparent p-3 dark:border-slate-700" /></label>
          {method !== "cpc" ? <label><span className="mb-2 block font-medium">{method === "page-rpm" ? "Page RPM" : "Impression RPM"} ({symbol})</span><input type="number" min="0" step="0.01" value={rpm} onChange={(event) => { setRpm(event.target.value); setSubmitted(false); }} className="w-full rounded-xl border border-slate-300 bg-transparent p-3 dark:border-slate-700" /></label> : <><label><span className="mb-2 block font-medium">Ad CTR (%)</span><input type="number" min="0" max="100" step="0.01" value={ctr} onChange={(event) => { setCtr(event.target.value); setSubmitted(false); }} className="w-full rounded-xl border border-slate-300 bg-transparent p-3 dark:border-slate-700" /></label><label><span className="mb-2 block font-medium">Average CPC ({symbol})</span><input type="number" min="0" step="0.01" value={cpc} onChange={(event) => { setCpc(event.target.value); setSubmitted(false); }} className="w-full rounded-xl border border-slate-300 bg-transparent p-3 dark:border-slate-700" /></label></>}
          <label><span className="mb-2 block font-medium">Target monthly revenue ({symbol})</span><input type="number" min="0" step="1" value={target} onChange={(event) => { setTarget(event.target.value); setSubmitted(false); }} className="w-full rounded-xl border border-slate-300 bg-transparent p-3 dark:border-slate-700" /></label>
        </div>
        <button type="button" onClick={() => setSubmitted(true)} className="mt-6 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">Calculate ad revenue</button>

        {calculation && (
          <>
            <section className="mt-8 rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
              <p className="text-sm uppercase tracking-wider text-emerald-300">Estimated monthly revenue</p><p className="mt-2 text-5xl font-black text-emerald-400">{money(calculation.monthlyRevenue)}</p>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4"><div><p className="text-xs text-slate-400">Per day</p><p className="mt-1 font-bold">{money(calculation.dailyRevenue)}</p></div><div><p className="text-xs text-slate-400">Per year</p><p className="mt-1 font-bold">{money(calculation.annualRevenue)}</p></div><div><p className="text-xs text-slate-400">Effective RPM</p><p className="mt-1 font-bold">{money(calculation.effectiveRpm)}</p></div><div><p className="text-xs text-slate-400">Traffic for target</p><p className="mt-1 font-bold">{requiredTrafficText}</p></div></div>
            </section>

            <section className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700">
                <h3 className="font-bold">How this result was calculated</h3>
                <p className="mt-2 break-words text-sm leading-6 text-slate-600 dark:text-slate-300">{calculation.formulaText} = <strong>{money(calculation.monthlyRevenue)}</strong> per month</p>
                {method === "cpc" && <p className="mt-2 text-sm text-slate-500">Estimated clicks: {calculation.clicks.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</p>}
              </div>
              <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700">
                <h3 className="font-bold">Monthly target check</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Your estimate is <strong>{money(Math.abs(calculation.targetDifference))}</strong> {calculation.targetDifference >= 0 ? "above" : "below"} the {money(calculation.targetRevenue)} target.</p>
              </div>
            </section>

            <section className="mt-6 rounded-2xl border border-slate-200 p-5 dark:border-slate-700"><h3 className="text-lg font-bold">Rate sensitivity</h3><p className="mt-1 text-sm text-slate-500">Traffic stays unchanged while the RPM or CPC moves 20% lower or higher.</p><div className="mt-4 grid grid-cols-3 gap-3 text-center"><div className="rounded-xl bg-red-50 p-3 dark:bg-red-950/30"><p className="text-xs text-slate-500">Rate -20%</p><p className="mt-1 font-bold text-red-700 dark:text-red-300">{money(calculation.low)}</p></div><div className="rounded-xl bg-blue-50 p-3 dark:bg-blue-950/30"><p className="text-xs text-slate-500">Current</p><p className="mt-1 font-bold text-blue-700 dark:text-blue-300">{money(calculation.monthlyRevenue)}</p></div><div className="rounded-xl bg-emerald-50 p-3 dark:bg-emerald-950/30"><p className="text-xs text-slate-500">Rate +20%</p><p className="mt-1 font-bold text-emerald-700 dark:text-emerald-300">{money(calculation.high)}</p></div></div></section>

            <ResultsSection title="Ad revenue estimate" calculatorName="Ad Revenue Calculator" results={[{ label: "Estimated monthly revenue", value: money(calculation.monthlyRevenue), highlight: true }, { label: "Estimated annual revenue", value: money(calculation.annualRevenue) }, ...(method === "cpc" ? [{ label: "Estimated monthly clicks", value: calculation.clicks.toLocaleString("en-IN", { maximumFractionDigits: 0 }) }] : []), { label: `${trafficLabel} needed for target`, value: requiredTrafficText }]} />
          </>
        )}

        <p className="mt-6 text-sm leading-6 text-slate-500">This is a planning estimate, not an earnings guarantee. Actual revenue varies with geography, niche, devices, advertiser demand, seasonality, consent, fill, viewability, invalid-traffic adjustments, and the advertising platform&apos;s final reporting.</p>
      </div>
    </div>
  );
}

function moneyNumber(value: number) {
  return value.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 4 });
}
