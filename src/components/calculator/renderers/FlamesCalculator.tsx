"use client";

import { FormEvent, useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

const FLAMES = [
  { letter: "F", label: "Friends", description: "The game lands on friendship." },
  { letter: "L", label: "Love", description: "The classic FLAMES result is Love." },
  { letter: "A", label: "Affection", description: "The game lands on care and affection." },
  { letter: "M", label: "Marriage", description: "The playful result is Marriage." },
  { letter: "E", label: "Enemies", description: "A dramatic game result - do not take it seriously." },
  { letter: "S", label: "Siblings", description: "The game suggests a sibling-like bond." },
] as const;

function normalizeName(value: string) {
  return Array.from(value.toLocaleLowerCase().normalize("NFC")).filter((character) => /\p{L}/u.test(character));
}

function calculateFlames(firstName: string, secondName: string) {
  const firstLetters = normalizeName(firstName);
  const secondRemaining = normalizeName(secondName);
  const firstRemaining: string[] = [];
  const matched: string[] = [];

  for (const letter of firstLetters) {
    const matchIndex = secondRemaining.indexOf(letter);
    if (matchIndex === -1) firstRemaining.push(letter);
    else {
      matched.push(letter);
      secondRemaining.splice(matchIndex, 1);
    }
  }

  const unmatchedLetters = [...firstRemaining, ...secondRemaining];
  const count = unmatchedLetters.length;
  if (count === 0) return { count, matched, unmatchedLetters, eliminated: [] as string[], result: null };

  const choices = FLAMES.map((item) => item.label);
  const eliminated: string[] = [];
  let cursor = 0;
  while (choices.length > 1) {
    cursor = (cursor + count - 1) % choices.length;
    eliminated.push(choices[cursor]);
    choices.splice(cursor, 1);
  }

  return { count, matched, unmatchedLetters, eliminated, result: FLAMES.find((item) => item.label === choices[0]) ?? null };
}

export default function FlamesCalculator() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const normalizedFirst = useMemo(() => normalizeName(firstName), [firstName]);
  const normalizedSecond = useMemo(() => normalizeName(secondName), [secondName]);
  const result = useMemo(() => (submitted ? calculateFlames(firstName, secondName) : null), [firstName, secondName, submitted]);
  const hasValidNames = normalizedFirst.length > 0 && normalizedSecond.length > 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function reset() {
    setFirstName("");
    setSecondName("");
    setSubmitted(false);
  }

  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-violet-50 px-6 py-5 dark:from-slate-800 dark:to-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-600">Classic name game</p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Enter two names. Spaces, numbers, and punctuation are ignored; repeated letters are matched one at a time.</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <label>
            <span className="mb-2 block font-medium">First name</span>
            <input value={firstName} onChange={(event) => { setFirstName(event.target.value); setSubmitted(false); }} placeholder="For example, Rahul" autoComplete="off" maxLength={80} className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-950" />
          </label>
          <label>
            <span className="mb-2 block font-medium">Second name</span>
            <input value={secondName} onChange={(event) => { setSecondName(event.target.value); setSubmitted(false); }} placeholder="For example, Priya" autoComplete="off" maxLength={80} className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-950" />
          </label>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="submit" className="rounded-xl bg-rose-600 px-6 py-3 font-semibold text-white transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2">Calculate FLAMES</button>
          <button type="button" onClick={reset} className="rounded-xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">Reset</button>
        </div>

        {submitted && !hasValidNames && <p role="alert" className="mt-4 text-sm font-medium text-red-600">Please enter at least one letter in both name fields.</p>}

        {submitted && hasValidNames && result?.count === 0 && (
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/30">
            <h3 className="font-semibold text-amber-900 dark:text-amber-200">No unmatched letters</h3>
            <p className="mt-2 text-sm text-amber-800 dark:text-amber-300">Every letter was cancelled. Traditional FLAMES needs a positive remaining count, so there is no defined result for these spellings. Try the names or nicknames you normally use.</p>
          </div>
        )}

        {result?.result && (
          <>
            <section aria-live="polite" className="mt-8 rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 to-violet-50 p-7 text-center dark:border-slate-700 dark:from-slate-800 dark:to-slate-950">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">Your FLAMES result</p>
              <div className="mx-auto mt-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-600 text-3xl font-black text-white shadow-lg">{result.result.letter}</div>
              <h3 className="mt-3 text-4xl font-bold text-rose-600 sm:text-5xl">{result.result.label}</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{result.result.description}</p>
            </section>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800"><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Matched pairs</p><p className="mt-2 text-2xl font-bold">{result.matched.length}</p></div>
              <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800"><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Unmatched count</p><p className="mt-2 text-2xl font-bold">{result.count}</p></div>
              <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800"><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Elimination order</p><p className="mt-2 break-words font-semibold">{result.eliminated.join(" -> ")}</p></div>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
              <p className="text-sm font-semibold">Calculation check</p>
              <p className="mt-2 break-words text-sm text-slate-600 dark:text-slate-300">Unmatched letters: {result.unmatchedLetters.map((letter) => letter.toUpperCase()).join(", ") || "None"}. The count {result.count} is used repeatedly on F-L-A-M-E-S, continuing after each removal.</p>
            </div>

            <ResultsSection title="FLAMES calculation details" calculatorName="FLAMES Calculator" results={[{ label: "Final FLAMES result", value: result.result.label, highlight: true }, { label: "Matching letter pairs removed", value: result.matched.length }, { label: "Letters remaining", value: result.count }]} />
          </>
        )}

        <p className="mt-6 text-sm text-slate-500">Privacy: the calculation runs in this browser. Entertainment only - FLAMES cannot measure feelings, compatibility, or a relationship&apos;s future.</p>
      </form>
    </div>
  );
}
