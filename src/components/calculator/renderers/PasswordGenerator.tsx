"use client";

import { useState } from "react";
import ResultsSection from "../ResultsSection";

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [copied, setCopied] = useState(false);

  const [includeUppercase, setIncludeUppercase] = useState(true);

  const [includeLowercase, setIncludeLowercase] = useState(true);

  const [includeNumbers, setIncludeNumbers] = useState(true);

  const [includeSymbols, setIncludeSymbols] = useState(true);

  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const lowercase = "abcdefghijklmnopqrstuvwxyz";

    const numbers = "0123456789";

    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let characters = "";

    if (includeUppercase) {
      characters += uppercase;
    }

    if (includeLowercase) {
      characters += lowercase;
    }

    if (includeNumbers) {
      characters += numbers;
    }

    if (includeSymbols) {
      characters += symbols;
    }

    if (!characters) {
      setPassword("");
      return;
    }

    let generatedPassword = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);

      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyPassword = async () => {
    if (!password) return;

    await navigator.clipboard.writeText(password);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const results = password
    ? [
        {
          label: "Generated Password",
          value: password,
          highlight: true,
        },

        {
          label: "Password Length",
          value: length,
        },

        {
          label: "Uppercase Letters",
          value: includeUppercase ? "Yes" : "No",
        },

        {
          label: "Numbers",
          value: includeNumbers ? "Yes" : "No",
        },

        {
          label: "Symbols",
          value: includeSymbols ? "Yes" : "No",
        },
      ]
    : [];

  const resetCalculator = () => {
    setLength(12);

    setIncludeUppercase(true);

    setIncludeLowercase(true);

    setIncludeNumbers(true);

    setIncludeSymbols(true);

    setPassword("");
  };

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">Password Generator</h2>

      <p className="mt-2 text-slate-600">
        Generate strong, secure, and random passwords with customizable length,
        letters, numbers, and special characters.
      </p>

      <div className="mt-6">
        <label className="mb-2 block font-medium">Password Length</label>

        <input
          type="number"
          min="4"
          max="100"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-6 space-y-3">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
          Include Uppercase Letters
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
          />
          Include Lowercase Letters
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          Include Numbers
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          Include Symbols
        </label>
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={generatePassword}
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Generate Password
        </button>

        <button
          onClick={copyPassword}
          disabled={!password}
          className={`cursor-pointer rounded-xl px-6 py-3 transition-all duration-300 ${
            copied ? "bg-green-600 text-white" : "border hover:bg-gray-100"
          }`}
        >
          {copied ? "Copied ✓" : "Copy Password"}
        </button>

        <button
          onClick={resetCalculator}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:bg-gray-100"
        >
          Reset
        </button>
      </div>

      {password && (
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center">
          <h3 className="text-lg font-semibold">Generated Password</h3>

          <p className="mt-3 break-all font-mono text-2xl font-bold text-green-700">
            {password}
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection title="Password Details" results={results} />
      )}
    </div>
  );
}
