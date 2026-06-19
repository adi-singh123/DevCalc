"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function FriendshipCalculator() {
  const [firstName, setFirstName] =
    useState("");

  const [secondName, setSecondName] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const friendshipData = useMemo(() => {
    if (
      !submitted ||
      !firstName.trim() ||
      !secondName.trim()
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
      normalize(firstName);

    const name2 =
      normalize(secondName);

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

    if (score >= 95) {
      message =
        "Best Friends Forever! Your friendship looks incredibly strong.";
    } else if (score >= 80) {
      message =
        "Strong friendship with excellent compatibility and trust.";
    } else if (score >= 65) {
      message =
        "Great friendship potential with a solid bond.";
    } else if (score >= 50) {
      message =
        "Good friendship with room to grow stronger over time.";
    } else {
      message =
        "A casual friendship that may develop with more interaction.";
    }

    let level = "";

    if (score >= 95) {
      level = "Best Friends Forever";
    } else if (score >= 80) {
      level = "Strong Friendship";
    } else if (score >= 65) {
      level =
        "Great Friendship Potential";
    } else if (score >= 50) {
      level = "Good Friends";
    } else {
      level = "Casual Friendship";
    }

    return {
      score,
      message,
      level,
    };
  }, [
    firstName,
    secondName,
    submitted,
  ]);

  const results = friendshipData
    ? [
        {
          label:
            "Friendship Percentage",
          value: `${friendshipData.score}%`,
          highlight: true,
        },
        {
          label:
            "Friendship Level",
          value:
            friendshipData.level,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mt-4">
        <label className="mb-2 block font-medium">
          First Name
        </label>

        <input
          type="text"
          value={firstName}
          onChange={(e) =>
            setFirstName(
              e.target.value,
            )
          }
          placeholder="Enter first name"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Second Name
        </label>

        <input
          type="text"
          value={secondName}
          onChange={(e) =>
            setSecondName(
              e.target.value,
            )
          }
          placeholder="Enter second name"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            setSubmitted(true)
          }
          className="cursor-pointer rounded-xl bg-blue-600 px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-lg"
        >
          Calculate Friendship
        </button>

        <button
          onClick={() => {
            setFirstName("");
            setSecondName("");
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {friendshipData && (
        <div className="mt-8 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 text-center dark:border-slate-700 dark:from-slate-800 dark:to-slate-900">
          <div className="text-6xl">
            🤝
          </div>

          <h3 className="mt-4 text-5xl font-bold text-blue-600">
            {friendshipData.score}%
          </h3>

          <p className="mt-4 text-lg font-medium text-slate-800 dark:text-slate-200">
            Friendship Match Score
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            {
              friendshipData.message
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
          title="Friendship Results"
          results={results}
          calculatorName="Friendship Calculator"
        />
      )}
    </div>
  );
}