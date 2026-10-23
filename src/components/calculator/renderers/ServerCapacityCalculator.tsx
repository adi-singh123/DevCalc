"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function ServerCapacityCalculator() {
  const [peakRps, setPeakRps] = useState("");
  const [maxRpsPerServer, setMaxRpsPerServer] = useState("");
  const [targetUtilization, setTargetUtilization] = useState("70");
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (!submitted) return null;
    const peak = Number(peakRps); const maximum = Number(maxRpsPerServer); const utilization = Number(targetUtilization);
    if (![peak, maximum, utilization].every(Number.isFinite) || peak <= 0 || maximum <= 0 || utilization <= 0 || utilization > 100) return null;
    const plannedPerServer = maximum * utilization / 100;
    const servers = Math.ceil(peak / plannedPerServer);
    const plannedCapacity = servers * plannedPerServer;
    return { servers, plannedPerServer, plannedCapacity, headroom: plannedCapacity - peak };
  }, [maxRpsPerServer, peakRps, submitted, targetUtilization]);

  const results = result ? [
    { label: "Required application servers", value: result.servers.toLocaleString(), highlight: true },
    { label: "Planned RPS per server", value: result.plannedPerServer.toLocaleString(undefined, { maximumFractionDigits: 2 }) },
    { label: "Planned fleet capacity", value: `${result.plannedCapacity.toLocaleString(undefined, { maximumFractionDigits: 2 })} RPS` },
    { label: "RPS headroom above peak", value: result.headroom.toLocaleString(undefined, { maximumFractionDigits: 2 }) },
  ] : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-6">
      <p className="text-slate-600 dark:text-slate-300">Estimate horizontal server count from measured per-server throughput and an expected peak request rate.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <label className="font-medium">Expected peak RPS<input type="number" min="0" inputMode="decimal" value={peakRps} onChange={(event) => setPeakRps(event.target.value)} placeholder="1000" className="mt-2 w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-950" /></label>
        <label className="font-medium">Measured max RPS/server<input type="number" min="0" inputMode="decimal" value={maxRpsPerServer} onChange={(event) => setMaxRpsPerServer(event.target.value)} placeholder="250" className="mt-2 w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-950" /></label>
        <label className="font-medium">Target utilization (%)<input type="number" min="1" max="100" inputMode="decimal" value={targetUtilization} onChange={(event) => setTargetUtilization(event.target.value)} className="mt-2 w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-950" /></label>
      </div>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Use throughput from a representative load test at your accepted latency and error threshold. Add separate failover capacity according to your availability design.</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row"><button onClick={() => setSubmitted(true)} className="rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-700">Calculate Servers</button><button onClick={() => { setPeakRps(""); setMaxRpsPerServer(""); setTargetUtilization("70"); setSubmitted(false); }} className="rounded-xl border px-6 py-3 dark:border-slate-700">Reset</button></div>
      {submitted && !result && <p className="mt-4 text-sm text-red-600">Enter positive throughput values and target utilization from 1% to 100%.</p>}
      {results.length > 0 && <ResultsSection title="Server Capacity Estimate" results={results} calculatorName="Server Capacity Calculator" />}
    </div>
  );
}
