"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function CrushCalculator() {
  const [yourName, setYourName] =
    useState("");

  const [crushName, setCrushName] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const crushData = useMemo(() => {
    if (
      !submitted ||
      !yourName.trim() ||
      !crushName.trim()
    ) {
      return null;
    }

    const normalize = (
      text: string,
    ) =>
      text
        .toLowerCase()
        .replace(/[^a-z]/g, "");

    const name1 =
      normalize(yourName);

    const name2 =
      normalize(crushName);

    const combined = [
      ...name1,
      ...name2,
    ]
      .sort()
      .join("");

    let total = 0;

    for (
      let i = 0;
      i < combined.length;
      i++
    ) {
      total +=
        combined.charCodeAt(i);
    }

    const score =
      35 + (total % 64);

    let message = "";
    let level = "";

    if (score >= 90) {
      level =
        "Secret Soulmate ❤️";

      message =
        "A rare and powerful connection. Your names show exceptional compatibility.";
    } else if (score >= 80) {
      level =
        "Strong Crush Energy 💖";

      message =
        "There is strong chemistry and relationship potential between you two.";
    } else if (score >= 65) {
      level =
        "High Compatibility 💕";

      message =
        "You have a promising connection with lots of positive signs.";
    } else if (score >= 50) {
      level =
        "Potential Connection 😊";

      message =
        "There is potential here. Communication and understanding can strengthen the bond.";
    } else {
      level =
        "Friend Zone Energy 😅";

      message =
        "Friendship may be the stronger connection right now.";
    }

    return {
      score,
      level,
      message,
    };
  }, [
    yourName,
    crushName,
    submitted,
  ]);

  const results = crushData
    ? [
        {
          label:
            "Crush Percentage",
          value: `${crushData.score}%`,
          highlight: true,
        },
        {
          label:
            "Compatibility Level",
          value:
            crushData.level,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Your Name
        </label>

        <input
          type="text"
          value={yourName}
          onChange={(e) =>
            setYourName(
              e.target.value,
            )
          }
          placeholder="Enter your name"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Crush Name
        </label>

        <input
          type="text"
          value={crushName}
          onChange={(e) =>
            setCrushName(
              e.target.value,
            )
          }
          placeholder="Enter your crush name"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            setSubmitted(true)
          }
          className="cursor-pointer rounded-xl bg-rose-600 px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-rose-700 hover:shadow-lg"
        >
          Calculate Crush Match
        </button>

        <button
          onClick={() => {
            setYourName("");
            setCrushName("");
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {crushData && (
        <div className="mt-8 rounded-3xl border border-rose-100 bg-gradient-to-r from-rose-50 to-pink-50 p-8 text-center dark:border-slate-700 dark:from-slate-800 dark:to-slate-900">
          <div className="text-6xl">
            💘
          </div>

          <h3 className="mt-4 text-5xl font-bold text-rose-600">
            {crushData.score}%
          </h3>

          <p className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
            {
              crushData.level
            }
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            {
              crushData.message
            }
          </p>

          <p className="mt-6 text-sm text-slate-500">
            For entertainment
            purposes only.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Crush Calculator Results"
          results={results}
          calculatorName="Crush Calculator"
        />
      )}
    </div>
  );
}