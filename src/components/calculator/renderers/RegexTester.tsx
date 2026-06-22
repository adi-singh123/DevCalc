"use client";

import { useState } from "react";
import ResultsSection from "../ResultsSection";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");

  const [flags, setFlags] = useState("g");

  const [testText, setTestText] = useState("");

  const [matches, setMatches] = useState<string[]>([]);

  const [error, setError] = useState("");

  const [isValid, setIsValid] = useState(false);

  const runRegex = () => {
    try {
      setError("");

      if (!pattern.trim()) {
        setError("Please enter a regex pattern.");
        return;
      }

      const regex = new RegExp(pattern, flags);

     const foundMatches =
  flags.includes("g")
    ? Array.from(
        testText.matchAll(regex),
      ).map(
        (match) =>
          match[0],
      )
    : (() => {
        const match =
          testText.match(regex);

        return match
          ? [match[0]]
          : [];
      })();

      setMatches(foundMatches);

      setIsValid(true);
    } catch (err) {
      setMatches([]);
      setIsValid(false);

      setError(
        err instanceof Error ? err.message : "Invalid regular expression.",
      );
    }
  };

  const resetData = () => {
    setPattern("");
    setFlags("g");
    setTestText("");
    setMatches([]);
    setError("");
    setIsValid(false);
  };

  const copyMatches = async () => {
    try {
      await navigator.clipboard.writeText(matches.join("\n"));

      alert("Matches copied successfully");
    } catch {
      alert("Failed to copy");
    }
  };

  const results = isValid
    ? [
        {
          label: "Regex Status",
          value: "Valid Pattern",
          highlight: true,
        },

        {
          label: "Flags",
          value: flags || "None",
        },

        {
          label: "Total Matches",
          value: matches.length,
        },

        {
          label: "Pattern Length",
          value: pattern.length,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:p-6">
      <div className="grid gap-6">
        <div>
          <label className="mb-2 block font-medium">Regex Pattern</label>

          <input
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="^[a-zA-Z]+$"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Regex Flags</label>

          <input
            type="text"
            value={flags}
            onChange={(e) => setFlags(e.target.value)}
            placeholder="gim"
            className="w-full rounded-xl border p-3"
          />

          <p className="mt-2 text-xs text-slate-500">
            Common flags: g (global), i (ignore case), m (multiline)
          </p>
        </div>

        <div>
          <label className="mb-2 block font-medium">Test Text</label>

          <textarea
            rows={8}
            value={testText}
            onChange={(e) => setTestText(e.target.value)}
            placeholder="Enter text to test..."
            className="w-full rounded-xl border p-4 font-mono text-sm"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={runRegex}
          className="rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          Test Regex
        </button>

        <button onClick={resetData} className="rounded-xl border px-5 py-3">
          Reset
        </button>
      </div>

      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      )}

      {matches.length > 0 && (
        <div className="mt-8">
          <div className="mb-4 flex flex-wrap gap-3">
            <button
              onClick={copyMatches}
              className="rounded-xl bg-slate-800 px-4 py-2 text-white"
            >
              Copy Matches
            </button>
          </div>

          <label className="mb-3 block font-medium">
            Matches Found ({matches.length})
          </label>

          <div className="space-y-2">
            {matches.map((match, index) => (
              <div
                key={index}
                className="rounded-xl border bg-slate-50 p-3 font-mono text-sm dark:bg-slate-800"
              >
                {match}
              </div>
            ))}
          </div>
        </div>
      )}

      {isValid && (
        <ResultsSection
          title="Regex Analysis"
          results={results}
          calculatorName="Regex Tester"
        />
      )}
      <div className="mt-8 rounded-2xl border bg-slate-50 p-4 dark:bg-slate-800">
        <h3 className="mb-3 font-semibold">Common Regex Examples</h3>

        <ul className="space-y-3 text-sm">
          <li>
            <strong>Email:</strong>
            <code className="ml-2 rounded bg-slate-200 px-2 py-1 dark:bg-slate-700">
              {`^[^\s@]+@[^\s@]+\.[^\s@]+$`}
            </code>
          </li>

          <li>
            <strong>Numbers:</strong>
            <code className="ml-2 rounded bg-slate-200 px-2 py-1 dark:bg-slate-700">
              {`^[0-9]+$`}
            </code>
          </li>

          <li>
            <strong>Letters:</strong>
            <code className="ml-2 rounded bg-slate-200 px-2 py-1 dark:bg-slate-700">
              {`^[A-Za-z]+$`}
            </code>
          </li>

          <li>
            <strong>Username:</strong>
            <code className="ml-2 rounded bg-slate-200 px-2 py-1 dark:bg-slate-700">
              {`^[a-zA-Z0-9_]{3,20}$`}
            </code>
          </li>

          <li>
            <strong>Strong Password:</strong>
            <code className="ml-2 rounded bg-slate-200 px-2 py-1 dark:bg-slate-700">
              {`^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$`}
            </code>
          </li>
        </ul>
      </div>
    </div>
  );
}
