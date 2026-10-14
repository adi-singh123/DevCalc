"use client";

import { FormEvent, useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

function normalizeName(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z]/g, "");
}

function stableHash(value: string) {
  let hash = 2166136261;
  for (const character of value) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function getRivalryLevel(score: number) {
  if (score <= 20) return "Friendly Competition";
  if (score <= 40) return "Mild Rivalry";
  if (score <= 60) return "Competitive Energy";
  if (score <= 80) return "Strong Rivalry";
  return "Playful Arch Rivals";
}

export default function DushmanCalculator() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [submittedNames, setSubmittedNames] = useState<[string, string] | null>(null);
  const [error, setError] = useState("");

  const rivalry = useMemo(() => {
    if (!submittedNames) return null;

    const first = normalizeName(submittedNames[0]);
    const second = normalizeName(submittedNames[1]);
    if (!first || !second) return null;

    if (first === second) {
      return { score: 0, peaceScore: 100, level: getRivalryLevel(0) };
    }

    const firstCounts = new Map<string, number>();
    const secondCounts = new Map<string, number>();
    for (const letter of first) firstCounts.set(letter, (firstCounts.get(letter) ?? 0) + 1);
    for (const letter of second) secondCounts.set(letter, (secondCounts.get(letter) ?? 0) + 1);

    let sharedLetters = 0;
    for (const [letter, count] of firstCounts) {
      sharedLetters += Math.min(count, secondCounts.get(letter) ?? 0);
    }

    const totalLetters = first.length + second.length;
    const unmatchedLetters = totalLetters - sharedLetters * 2;
    const differenceRatio = unmatchedLetters / totalLetters;
    const orderedPair = [first, second].sort().join("|");
    const variation = (stableHash(orderedPair) % 21) * Math.max(0.25, differenceRatio);
    const score = Math.min(99, Math.max(1, Math.round(differenceRatio * 70 + variation)));

    return {
      score,
      peaceScore: 100 - score,
      level: getRivalryLevel(score),
    };
  }, [submittedNames]);

  function calculate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!normalizeName(firstName) || !normalizeName(secondName)) {
      setError("Enter two names containing letters.");
      setSubmittedNames(null);
      return;
    }
    setError("");
    setSubmittedNames([firstName, secondName]);
  }

  function reset() {
    setFirstName("");
    setSecondName("");
    setSubmittedNames(null);
    setError("");
  }

  const results = rivalry
    ? [
        { label: "Rivalry Score", value: `${rivalry.score}%`, highlight: true },
        { label: "Rivalry Level", value: rivalry.level },
        { label: "Peace Score", value: `${rivalry.peaceScore}%` },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-7">
      <form onSubmit={calculate} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block font-medium text-slate-800 dark:text-slate-100">
            First name
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              placeholder="Enter first name"
              autoComplete="off"
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:focus:ring-rose-900"
            />
          </label>

          <label className="block font-medium text-slate-800 dark:text-slate-100">
            Second name
            <input
              type="text"
              value={secondName}
              onChange={(event) => setSecondName(event.target.value)}
              placeholder="Enter second name"
              autoComplete="off"
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:focus:ring-rose-900"
            />
          </label>
        </div>

        {error && <p className="mt-3 text-sm font-medium text-red-600" role="alert">{error}</p>}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button type="submit" className="cursor-pointer rounded-xl bg-rose-600 px-6 py-3 font-semibold text-white transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2">
            Calculate rivalry
          </button>
          <button type="button" onClick={reset} className="cursor-pointer rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800">
            Reset
          </button>
        </div>
      </form>

      {rivalry && (
        <div className="mt-8 rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 p-6 text-center dark:border-slate-700 dark:from-slate-800 dark:via-slate-850 dark:to-slate-900 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-rose-700 dark:text-rose-300">Playful rivalry result</p>
          <p className="mt-3 text-5xl font-bold text-rose-600 sm:text-6xl">{rivalry.score}%</p>
          <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">{rivalry.level}</h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
            This score is generated from the letters in the two names. It cannot identify real enemies, conflict, intent, or compatibility.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection title="Dushman Calculator Results" results={results} calculatorName="Dushman Calculator" />
      )}
    </div>
  );
}
