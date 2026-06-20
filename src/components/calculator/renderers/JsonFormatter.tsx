"use client";

import { useState } from "react";
import ResultsSection from "../ResultsSection";

export default function JsonFormatter() {
  const [input, setInput] = useState("");

  const [output, setOutput] = useState("");

  const [isValid, setIsValid] = useState<boolean | null>(null);

  const [error, setError] = useState("");

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);

      const formatted = JSON.stringify(parsed, null, 2);

      setOutput(formatted);
      setIsValid(true);
      setError("");
    } catch (err) {
      setIsValid(false);
      setOutput("");

      setError(err instanceof Error ? err.message : "Invalid JSON");
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(input);

      const minified = JSON.stringify(parsed);

      setOutput(minified);
      setIsValid(true);
      setError("");
    } catch (err) {
      setIsValid(false);
      setOutput("");

      setError(err instanceof Error ? err.message : "Invalid JSON");
    }
  };

  const validateJson = () => {
    try {
      JSON.parse(input);

      setIsValid(true);
      setError("");
    } catch (err) {
      setIsValid(false);

      setError(err instanceof Error ? err.message : "Invalid JSON");
    }
  };

  const copyOutput = async () => {
    if (!output) return;

    try {
      await navigator.clipboard.writeText(output);

      alert("JSON copied successfully");
    } catch {
      alert("Failed to copy JSON");
    }
  };

  const downloadJson = () => {
    if (!output) return;

    const blob = new Blob([output], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "formatted-json.json";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  const results =
    isValid !== null
      ? [
          {
            label: "Validation Status",
            value: isValid ? "Valid JSON" : "Invalid JSON",
            highlight: true,
          },

          {
            label: "Characters",
            value: output.length || input.length,
          },

          {
            label: "Lines",
            value: output
              ? output.split("\n").length
              : input.split("\n").length,
          },
        ]
      : [];

const fixJson = () => {
  try {
    let fixed = input.trim();

    // Handle plain key:value format
   if (
  !fixed.startsWith("{") &&
  !fixed.startsWith("[")
) {
  const lines = fixed
    .split("\n")
    .filter((line) => line.trim());

  const obj: Record<
    string,
    string
  > = {};

  let parsedLines = 0;

  lines.forEach((line) => {
    // key:value format
    if (line.includes(":")) {
      const [
        key,
        ...valueParts
      ] = line.split(":");

      if (
        key &&
        valueParts.length
      ) {
        obj[key.trim()] =
          valueParts
            .join(":")
            .trim();

        parsedLines++;
      }
    }

    // key value format
    else {
      const parts =
        line.trim().split(/\s+/);

      if (
        parts.length >= 2
      ) {
        const key = parts[0];

        const value =
          parts
            .slice(1)
            .join(" ");

        obj[key] = value;

        parsedLines++;
      }
    }
  });

  if (
    parsedLines > 0
  ) {
    const formatted =
      JSON.stringify(
        obj,
        null,
        2,
      );

    setOutput(formatted);
    setInput(formatted);
    setIsValid(true);
    setError("");

    return;
  }
}

    // single quotes -> double quotes
    fixed = fixed.replace(
      /'/g,
      '"',
    );

    // add quotes around keys
    fixed = fixed.replace(
      /([{,]\s*)([a-zA-Z0-9_]+)\s*:/g,
      '$1"$2":',
    );

    // quote unquoted string values
    fixed = fixed.replace(
      /:\s*([a-zA-Z_][a-zA-Z0-9_\-\s]*)\s*([,}])/g,
      ': "$1"$2',
    );

    // remove trailing commas
    fixed = fixed.replace(
      /,\s*([}\]])/g,
      "$1",
    );

    const parsed =
      JSON.parse(fixed);

    const formatted =
      JSON.stringify(
        parsed,
        null,
        2,
      );

    setOutput(formatted);
    setInput(formatted);

    setIsValid(true);
    setError("");
  } catch (err) {
    setOutput("");

    setIsValid(false);

    setError(
      err instanceof Error
        ? err.message
        : "Unable to automatically fix JSON.",
    );
  }
};

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div>
        <label className="mb-2 block font-medium">JSON Input</label>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={12}
          placeholder='{"name":"DevCalc","type":"JSON Formatter"}'
          className="w-full rounded-xl border p-4 font-mono text-sm"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={formatJson}
          className="rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          Format JSON
        </button>

        <button
          onClick={minifyJson}
          className="rounded-xl bg-green-600 px-5 py-3 text-white transition hover:bg-green-700"
        >
          Minify JSON
        </button>

        <button
          onClick={validateJson}
          className="rounded-xl bg-purple-600 px-5 py-3 text-white transition hover:bg-purple-700"
        >
          Validate JSON
        </button>

        <button
          onClick={() => {
            setInput("");
            setOutput("");
            setError("");
            setIsValid(null);
          }}
          className="rounded-xl border px-5 py-3"
        >
          Reset
        </button>
      </div>

      {isValid === true && (
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
          JSON is valid.
        </div>
      )}

      {isValid === false && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      )}
      <button
        onClick={fixJson}
        className=" mt-2 rounded-xl bg-amber-600 px-5 py-3 text-white transition hover:bg-amber-700"
      >
        Fix JSON
      </button>

      {output && (
        <>
          <div className="mt-8">
            <div className="mb-4 flex flex-wrap gap-3">
              <button
                onClick={copyOutput}
                className="rounded-xl bg-slate-800 px-4 py-2 text-white"
              >
                Copy JSON
              </button>

              <button
                onClick={downloadJson}
                className="rounded-xl bg-indigo-600 px-4 py-2 text-white"
              >
                Download JSON
              </button>
            </div>

            <label className="mb-2 block font-medium">Output</label>

            <textarea
              value={output}
              readOnly
              rows={12}
              className="w-full rounded-xl border bg-slate-50 p-4 font-mono text-sm dark:bg-slate-800"
            />
          </div>

          <ResultsSection
            title="JSON Formatter Results"
            results={results}
            calculatorName="JSON Formatter"
          />
        </>
      )}
    </div>
  );
}
