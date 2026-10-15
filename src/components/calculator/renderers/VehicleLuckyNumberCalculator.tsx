"use client";

import { useMemo, useState } from "react";
import { Bike, Car, Sparkles, Truck } from "lucide-react";

const CHALDEAN: Record<string, number> = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8,
};

const NUMBER_DETAILS: Record<number, { planet: string; theme: string }> = {
  1: { planet: "Sun", theme: "initiative, independence and visibility" },
  2: { planet: "Moon", theme: "balance, sensitivity and cooperation" },
  3: { planet: "Jupiter", theme: "growth, optimism and expression" },
  4: { planet: "Rahu", theme: "structure, unconventionality and persistence" },
  5: { planet: "Mercury", theme: "movement, adaptability and communication" },
  6: { planet: "Venus", theme: "comfort, harmony and aesthetics" },
  7: { planet: "Ketu", theme: "reflection, analysis and independence" },
  8: { planet: "Saturn", theme: "discipline, patience and responsibility" },
  9: { planet: "Mars", theme: "drive, courage and action" },
};

const AFFINITIES: Record<number, number[]> = {
  1: [2, 3, 5, 9], 2: [1, 3, 6, 7], 3: [1, 2, 5, 6, 9],
  4: [5, 6, 7, 8], 5: [1, 3, 4, 6, 8], 6: [2, 3, 4, 5, 9],
  7: [1, 2, 4], 8: [4, 5, 6], 9: [1, 2, 3, 6],
};

function reduceNumber(value: number): number {
  let result = Math.abs(Math.trunc(value));
  while (result > 9) result = String(result).split("").reduce((sum, digit) => sum + Number(digit), 0);
  return result;
}

function digitsOf(value: string): number[] {
  return value.match(/\d/g)?.map(Number) ?? [];
}

function lettersOf(value: string): string[] {
  return value.toUpperCase().match(/[A-Z]/g) ?? [];
}

function relationship(vehicleRoot: number, personalRoot: number) {
  if (vehicleRoot === personalRoot) return { points: 100, matchLabel: "Exact match" };
  const mutual = AFFINITIES[vehicleRoot]?.includes(personalRoot) && AFFINITIES[personalRoot]?.includes(vehicleRoot);
  if (mutual) return { points: 85, matchLabel: "Strong match" };
  const oneWay = AFFINITIES[vehicleRoot]?.includes(personalRoot) || AFFINITIES[personalRoot]?.includes(vehicleRoot);
  return oneWay ? { points: 70, matchLabel: "Supportive match" } : { points: 45, matchLabel: "Mixed match" };
}

type VehicleType = "Car" | "Bike / Scooter" | "Commercial vehicle" | "Other vehicle";

export default function VehicleLuckyNumberCalculator() {
  const [vehicleType, setVehicleType] = useState<VehicleType>("Car");
  const [registration, setRegistration] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const normalizedRegistration = registration.toUpperCase().replace(/[^A-Z0-9]/g, "");
  const validRegistration = /[0-9]/.test(normalizedRegistration) && normalizedRegistration.length >= 2;

  const result = useMemo(() => {
    if (!submitted || !validRegistration || !birthDate) return null;
    const plateDigits = digitsOf(normalizedRegistration);
    const plateLetters = lettersOf(normalizedRegistration);
    const digitTotal = plateDigits.reduce((sum, value) => sum + value, 0);
    const letterValues = plateLetters.map((letter) => CHALDEAN[letter]);
    const letterTotal = letterValues.reduce((sum, value) => sum + value, 0);
    const digitRoot = reduceNumber(digitTotal);
    const fullRoot = reduceNumber(digitTotal + letterTotal);
    const dateDigits = digitsOf(birthDate);
    const birthDay = Number(birthDate.slice(8, 10));
    const birthRoot = reduceNumber(birthDay);
    const lifePath = reduceNumber(dateDigits.reduce((sum, value) => sum + value, 0));
    const nameLetters = lettersOf(ownerName);
    const nameTotal = nameLetters.reduce((sum, letter) => sum + CHALDEAN[letter], 0);
    const nameRoot = nameTotal ? reduceNumber(nameTotal) : null;
    const purchaseDigits = digitsOf(purchaseDate);
    const purchaseRoot = purchaseDigits.length
      ? reduceNumber(purchaseDigits.reduce((sum, value) => sum + value, 0))
      : null;

    const comparisons = [
      { label: "Birth number", root: birthRoot, weight: 45 },
      { label: "Life-path number", root: lifePath, weight: 35 },
      ...(nameRoot ? [{ label: "Name number", root: nameRoot, weight: 15 }] : []),
      ...(purchaseRoot ? [{ label: "Purchase-date number", root: purchaseRoot, weight: 5 }] : []),
    ];
    const totalWeight = comparisons.reduce((sum, item) => sum + item.weight, 0);
    const scored = comparisons.map((item) => ({ ...item, ...relationship(digitRoot, item.root) }));
    const score = Math.round(scored.reduce((sum, item) => sum + item.points * item.weight, 0) / totalWeight);
    const rating = score >= 85 ? "Excellent traditional match" : score >= 70 ? "Favourable traditional match" : score >= 55 ? "Balanced traditional match" : "Mixed traditional match";

    const recommendedRoots = Array.from({ length: 9 }, (_, index) => index + 1)
      .map((root) => ({
        root,
        score: comparisons.reduce((sum, item) => sum + relationship(root, item.root).points * item.weight, 0) / totalWeight,
      }))
      .sort((a, b) => b.score - a.score || a.root - b.root)
      .slice(0, 3)
      .map((item) => item.root);

    return { plateDigits, plateLetters, letterValues, digitTotal, letterTotal, digitRoot, fullRoot, birthRoot, lifePath, nameRoot, purchaseRoot, scored, score, rating, recommendedRoots };
  }, [birthDate, normalizedRegistration, ownerName, purchaseDate, submitted, validRegistration]);

  const VehicleIcon = vehicleType === "Car" ? Car : vehicleType === "Bike / Scooter" ? Bike : Truck;

  function calculate() {
    setSubmitted(true);
  }

  function reset() {
    setVehicleType("Car");
    setRegistration("");
    setBirthDate("");
    setOwnerName("");
    setPurchaseDate("");
    setSubmitted(false);
  }

  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="border-b border-stone-200 bg-gradient-to-br from-[#fff8e7] via-white to-blue-50 p-6 dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/30 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="rounded-2xl bg-[#1f3a5c] p-3 text-white"><VehicleIcon aria-hidden="true" /></span>
          <div><h2 className="text-2xl font-bold text-[#26364a] dark:text-white">Check your vehicle number</h2><p className="mt-1 text-sm leading-6 text-stone-600 dark:text-slate-300">Enter the full registration and birth date. Optional details make the comparison broader.</p></div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block"><span className="mb-2 block font-semibold">Vehicle type</span><select value={vehicleType} onChange={(event) => setVehicleType(event.target.value as VehicleType)} className="w-full rounded-xl border border-stone-300 bg-white p-3 outline-none focus:border-blue-600 dark:border-slate-600 dark:bg-slate-950"><option>Car</option><option>Bike / Scooter</option><option>Commercial vehicle</option><option>Other vehicle</option></select></label>
          <label className="block"><span className="mb-2 block font-semibold">Vehicle registration number</span><input value={registration} onChange={(event) => { setRegistration(event.target.value.toUpperCase()); setSubmitted(false); }} placeholder="Example: MH 12 AB 3456" maxLength={20} autoComplete="off" className="w-full rounded-xl border border-stone-300 bg-white p-3 uppercase outline-none focus:border-blue-600 dark:border-slate-600 dark:bg-slate-950" /><span className="mt-1.5 block text-xs text-stone-500">Letters and digits are counted; spaces and hyphens are ignored.</span></label>
          <label className="block"><span className="mb-2 block font-semibold">Owner&apos;s date of birth</span><input type="date" value={birthDate} max={new Date().toISOString().slice(0, 10)} onChange={(event) => { setBirthDate(event.target.value); setSubmitted(false); }} className="w-full rounded-xl border border-stone-300 bg-white p-3 outline-none focus:border-blue-600 dark:border-slate-600 dark:bg-slate-950" /></label>
          <label className="block"><span className="mb-2 block font-semibold">Owner&apos;s full name <span className="font-normal text-stone-500">(optional)</span></span><input value={ownerName} onChange={(event) => { setOwnerName(event.target.value); setSubmitted(false); }} placeholder="Name commonly used" maxLength={80} autoComplete="name" className="w-full rounded-xl border border-stone-300 bg-white p-3 outline-none focus:border-blue-600 dark:border-slate-600 dark:bg-slate-950" /></label>
          <label className="block sm:col-span-2"><span className="mb-2 block font-semibold">Purchase or registration date <span className="font-normal text-stone-500">(optional)</span></span><input type="date" value={purchaseDate} onChange={(event) => { setPurchaseDate(event.target.value); setSubmitted(false); }} className="w-full rounded-xl border border-stone-300 bg-white p-3 outline-none focus:border-blue-600 dark:border-slate-600 dark:bg-slate-950 sm:max-w-sm" /></label>
        </div>

        {submitted && (!validRegistration || !birthDate) && <p role="alert" className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300">Enter a registration containing at least one digit and select the owner&apos;s date of birth.</p>}

        <div className="mt-6 flex flex-wrap gap-3"><button type="button" onClick={calculate} className="inline-flex items-center gap-2 rounded-xl bg-[#1f3a5c] px-6 py-3 font-semibold text-white transition hover:bg-[#162a43]"><Sparkles size={18} aria-hidden="true" />Calculate vehicle match</button><button type="button" onClick={reset} className="rounded-xl border border-stone-300 px-6 py-3 font-semibold transition hover:bg-stone-50 dark:border-slate-600 dark:hover:bg-slate-800">Reset</button></div>

        {result && <div aria-live="polite" className="mt-8 space-y-6">
          <section className="rounded-2xl bg-gradient-to-br from-[#1f3a5c] to-[#315d87] p-6 text-white sm:p-8"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">{vehicleType} numerology result</p><div className="mt-4 grid gap-5 sm:grid-cols-[auto_1fr] sm:items-center"><div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white/30 bg-white/10 text-5xl font-bold">{result.digitRoot}</div><div><p className="text-3xl font-bold">{result.score}% match</p><p className="mt-1 text-lg text-blue-100">{result.rating}</p><p className="mt-3 text-sm leading-6 text-blue-50">Primary vehicle number {result.digitRoot} is associated with {NUMBER_DETAILS[result.digitRoot].planet}: {NUMBER_DETAILS[result.digitRoot].theme}.</p></div></div></section>

          <section><h3 className="text-xl font-bold text-[#26364a] dark:text-white">Calculation breakdown</h3><div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 p-5 dark:border-slate-700"><p className="text-sm text-stone-500">Plate digits (primary method)</p><p className="mt-2 font-mono text-sm break-words">{result.plateDigits.join(" + ")} = {result.digitTotal} → <strong>{result.digitRoot}</strong></p></div>
            <div className="rounded-2xl border border-stone-200 p-5 dark:border-slate-700"><p className="text-sm text-stone-500">Full plate with Chaldean letters</p><p className="mt-2 font-mono text-sm break-words">Digits {result.digitTotal} + letters {result.letterTotal} = {result.digitTotal + result.letterTotal} → <strong>{result.fullRoot}</strong></p></div>
            <div className="rounded-2xl border border-stone-200 p-5 dark:border-slate-700"><p className="text-sm text-stone-500">Birth number (day)</p><p className="mt-2 text-2xl font-bold">{result.birthRoot}</p></div>
            <div className="rounded-2xl border border-stone-200 p-5 dark:border-slate-700"><p className="text-sm text-stone-500">Life-path number (full DOB)</p><p className="mt-2 text-2xl font-bold">{result.lifePath}</p></div>
            {result.nameRoot && <div className="rounded-2xl border border-stone-200 p-5 dark:border-slate-700"><p className="text-sm text-stone-500">Chaldean owner-name number</p><p className="mt-2 text-2xl font-bold">{result.nameRoot}</p></div>}
            {result.purchaseRoot && <div className="rounded-2xl border border-stone-200 p-5 dark:border-slate-700"><p className="text-sm text-stone-500">Purchase-date number</p><p className="mt-2 text-2xl font-bold">{result.purchaseRoot}</p></div>}
          </div></section>

          <section className="rounded-2xl border border-stone-200 p-5 dark:border-slate-700"><h3 className="font-bold text-[#26364a] dark:text-white">Personal compatibility checks</h3><div className="mt-4 divide-y divide-stone-200 dark:divide-slate-700">{result.scored.map((item) => <div key={item.label} className="flex items-center justify-between gap-4 py-3"><span>{item.label}: <strong>{item.root}</strong></span><span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-800 dark:bg-blue-950 dark:text-blue-200">{item.matchLabel}</span></div>)}</div></section>

          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/30"><h3 className="font-bold text-amber-950 dark:text-amber-100">Suggested number roots</h3><p className="mt-2 text-sm leading-6 text-amber-900 dark:text-amber-200">Based on the personal numbers supplied, the strongest registration digit totals are <strong>{result.recommendedRoots.join(", ")}</strong>. This means the visible digits can add up and reduce to one of these roots; it does not guarantee a particular registration will be available.</p></section>

          <p className="rounded-xl bg-stone-100 p-4 text-sm leading-6 text-stone-600 dark:bg-slate-800 dark:text-slate-300"><strong>Important:</strong> Numerology is a traditional belief system, not a scientifically validated way to predict luck, accidents, reliability, resale value or driving safety. Choose a legal registration and prioritise safe driving, insurance, servicing and vehicle condition.</p>
        </div>}
      </div>
    </div>
  );
}
