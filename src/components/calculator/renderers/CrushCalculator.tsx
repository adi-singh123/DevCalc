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

  const [error, setError] =
    useState("");

  const normalize = (text: string) =>
    text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ");

  const validateName = (
    name: string,
  ): string | null => {
    const trimmed = name.trim();

    if (!trimmed) {
      return "Please enter a name.";
    }

    if (trimmed.length < 2) {
      return "Name must be at least 2 characters long.";
    }

    if (trimmed.length > 30) {
      return "Name is too long. Please enter a shorter name.";
    }

    // Only letters, spaces, apostrophes and hyphens allowed
    if (!/^[a-zA-Z\s'-]+$/.test(trimmed)) {
      return "Name can only contain letters, spaces, hyphens, and apostrophes.";
    }

    const lettersOnly = trimmed
      .toLowerCase()
      .replace(/[^a-z]/g, "");

    if (lettersOnly.length < 2) {
      return "Please enter a valid name.";
    }

    // Must contain at least one vowel to be a plausible name
    if (!/[aeiou]/.test(lettersOnly)) {
      return "That doesn't look like a valid name. Please check the spelling.";
    }

    // Reject if a single character repeats too much (e.g. "aaaaaa", "xxxxxx")
    const repeatedCharMatch = lettersOnly.match(
      /(.)\1{3,}/,
    );

    if (repeatedCharMatch) {
      return "That doesn't look like a valid name. Please check the spelling.";
    }

    // Reject long runs of consonants (gibberish like "bsdvbdsbdn")
    const consonantRunMatch = lettersOnly.match(
      /[^aeiou]{5,}/,
    );

    if (consonantRunMatch) {
      return "That doesn't look like a valid name. Please check the spelling.";
    }

    // Reject if vowel ratio is too low to be a real name
    const vowelCount = (
      lettersOnly.match(/[aeiou]/g) || []
    ).length;

    const vowelRatio =
      vowelCount / lettersOnly.length;

    if (vowelRatio < 0.15) {
      return "That doesn't look like a valid name. Please check the spelling.";
    }

    return null;
  };

  const handleCalculate = () => {
    const yourNameError =
      validateName(yourName);

    if (yourNameError) {
      setError(`Your Name: ${yourNameError}`);
      setSubmitted(false);
      return;
    }

    const crushNameError =
      validateName(crushName);

    if (crushNameError) {
      setError(
        `Crush Name: ${crushNameError}`,
      );
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
  };

  const handleReset = () => {
    setYourName("");
    setCrushName("");
    setSubmitted(false);
    setError("");
  };

  const crushData = useMemo(() => {
    if (
      !submitted ||
      error ||
      !yourName.trim() ||
      !crushName.trim()
    ) {
      return null;
    }

    const cleanName = (text: string) =>
      normalize(text).replace(
        /[^a-z]/g,
        "",
      );

    const name1 = cleanName(yourName);
    const name2 = cleanName(crushName);

    if (!name1 || !name2) {
      return null;
    }

    const combined = [...name1, ...name2]
      .sort()
      .join("");

    let total = 0;

    for (let i = 0; i < combined.length; i++) {
      total += combined.charCodeAt(i);
    }

    const score = 35 + (total % 64);

    let message = "";
    let level = "";

    if (score >= 90) {
      level = "Secret Soulmate ❤️";

      message =
        "A rare and powerful connection. Your names show exceptional compatibility.";
    } else if (score >= 80) {
      level = "Strong Crush Energy 💖";

      message =
        "There is strong chemistry and relationship potential between you two.";
    } else if (score >= 65) {
      level = "High Compatibility 💕";

      message =
        "You have a promising connection with lots of positive signs.";
    } else if (score >= 50) {
      level = "Potential Connection 😊";

      message =
        "There is potential here. Communication and understanding can strengthen the bond.";
    } else {
      level = "Friend Zone Energy 😅";

      message =
        "Friendship may be the stronger connection right now.";
    }

    return {
      score,
      level,
      message,
    };
  }, [yourName, crushName, submitted, error]);

  const results = crushData
    ? [
        {
          label: "Crush Percentage",
          value: `${crushData.score}%`,
          highlight: true,
        },
        {
          label: "Compatibility Level",
          value: crushData.level,
        },
      ]
    : [];

  return (
    <div className="mt-8 w-full max-w-full overflow-hidden rounded-3xl border bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-6">
      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Your Name
        </label>

        <input
          type="text"
          value={yourName}
          onChange={(e) => {
            setYourName(e.target.value);
            if (error) setError("");
          }}
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
          onChange={(e) => {
            setCrushName(e.target.value);
            if (error) setError("");
          }}
          placeholder="Enter your crush name"
          className="w-full rounded-xl border p-3"
        />
      </div>

      {error && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600 dark:border-red-900 dark:bg-red-950 dark:text-red-400">
          {error}
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={handleCalculate}
          className="w-full cursor-pointer rounded-xl bg-rose-600 px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-rose-700 hover:shadow-lg sm:w-auto"
        >
          Calculate Crush Match
        </button>

        <button
          onClick={handleReset}
          className="w-full cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg sm:w-auto"
        >
          Reset
        </button>
      </div>

      {crushData && (
        <div className="mt-8 rounded-3xl border border-rose-100 bg-gradient-to-r from-rose-50 to-pink-50 p-8 text-center dark:border-slate-700 dark:from-slate-800 dark:to-slate-900">
          <div className="text-6xl">💘</div>

          <h3 className="mt-4 text-5xl font-bold text-rose-600">
            {crushData.score}%
          </h3>

          <p className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
            {crushData.level}
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            {crushData.message}
          </p>

          <p className="mt-6 text-sm text-slate-500">
            For entertainment purposes only.
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