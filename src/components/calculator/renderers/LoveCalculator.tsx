"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function LoveCalculator() {
  const [yourName, setYourName] = useState("");

  const [partnerName, setPartnerName] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const loveData = useMemo(() => {
    if (!submitted || !yourName.trim() || !partnerName.trim()) {
      return null;
    }

    const normalize = (text: string) =>
      text
        .toLowerCase()
        .trim()
        .replace(/[^a-z]/g, "");

    const name1 = normalize(yourName);

    const name2 = normalize(partnerName);

    const getNumerologyValue = (name: string) => {
      let total = 0;

      for (const char of name) {
        const value = (char.charCodeAt(0) - 96) % 9 || 9;

        total += value;
      }

      while (total > 9) {
        total = total
          .toString()
          .split("")
          .reduce((sum, digit) => sum + Number(digit), 0);
      }

      return total;
    };

    const num1 = getNumerologyValue(name1);

    const num2 = getNumerologyValue(name2);

    const diff = Math.abs(num1 - num2);

    const numerologyScore = 100 - diff * 8;

    const combined = [name1, name2].sort().join("|");

    let hash = 0;

    for (let i = 0; i < combined.length; i++) {
      hash = (hash * 31 + combined.charCodeAt(i)) % 1000000;
    }

    const hashScore = 35 + (hash % 64);

    const score = Math.max(
      35,
      Math.min(98, Math.round((numerologyScore + hashScore) / 2)),
    );

    let message = "";

    if (score >= 90) {
      message =
        "A rare match! You two have exceptional compatibility and strong relationship potential.";
    } else if (score >= 80) {
      message =
        "Excellent compatibility with strong chemistry and understanding.";
    } else if (score >= 65) {
      message =
        "A strong match with good potential for a meaningful relationship.";
    } else if (score >= 50) {
      message =
        "There is potential here. Communication and trust can strengthen your connection.";
    } else {
      message =
        "Opposites attract! Every relationship grows through understanding and effort.";
    }

    return {
      score,
      message,
    };
  }, [yourName, partnerName, submitted]);

  const results = loveData
    ? [
        {
          label: "Love Percentage",
          value: `${loveData.score}%`,
          highlight: true,
        },
        {
          label: "Compatibility",
          value:
            loveData.score >= 90
              ? "Rare Match"
              : loveData.score >= 80
                ? "Excellent"
                : loveData.score >= 65
                  ? "Strong"
                  : loveData.score >= 50
                    ? "Good"
                    : "Average",
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mt-4">
        <label className="mb-2 block font-medium">Your Name</label>

        <input
          type="text"
          value={yourName}
          onChange={(e) => setYourName(e.target.value)}
          placeholder="Enter your name"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">Partner's Name</label>

        <input
          type="text"
          value={partnerName}
          onChange={(e) => setPartnerName(e.target.value)}
          placeholder="Enter partner name"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="cursor-pointer rounded-xl bg-pink-600 px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-pink-700 hover:shadow-lg"
        >
          Calculate Love
        </button>

        <button
          onClick={() => {
            setYourName("");
            setPartnerName("");
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {loveData && (
        <div className="mt-8 rounded-3xl border border-pink-100 bg-gradient-to-r from-pink-50 to-rose-50 p-8 text-center dark:border-slate-700 dark:from-slate-800 dark:to-slate-900">
          <div className="text-6xl">❤️</div>

          <h3 className="mt-4 text-5xl font-bold text-pink-600">
            {loveData.score}%
          </h3>

          <p className="mt-4 text-lg font-medium text-slate-800 dark:text-slate-200">
            Love Match Score
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            {loveData.message}
          </p>

          <p className="mt-6 text-sm text-slate-500">
            For entertainment purposes only.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Love Calculator Results"
          results={results}
          calculatorName="Love Calculator"
        />
      )}
    </div>
  );
}
