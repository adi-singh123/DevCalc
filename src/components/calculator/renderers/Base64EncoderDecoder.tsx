"use client";

import { useState } from "react";
import ResultsSection from "../ResultsSection";

export default function Base64EncoderDecoder() {
  const [input, setInput] =
    useState("");

  const [output, setOutput] =
    useState("");

  const [operation, setOperation] =
    useState("");

  const [error, setError] =
    useState("");

  const encodeText = () => {
    try {
      const encoded = btoa(
        unescape(
          encodeURIComponent(input),
        ),
      );

      setOutput(encoded);
      setOperation("Encoded");
      setError("");
    } catch {
      setError(
        "Unable to encode text.",
      );
    }
  };

  const decodeText = () => {
    try {
      const decoded =
        decodeURIComponent(
          escape(atob(input)),
        );

      setOutput(decoded);
      setOperation("Decoded");
      setError("");
    } catch {
      setOutput("");

      setError(
        "Invalid Base64 string.",
      );
    }
  };

  const autoDetect = () => {
    try {
      const decoded =
        decodeURIComponent(
          escape(atob(input)),
        );

      setOutput(decoded);
      setOperation(
        "Auto Decoded",
      );
      setError("");
    } catch {
      encodeText();
    }
  };

  const copyOutput =
    async () => {
      if (!output) return;

      await navigator.clipboard.writeText(
        output,
      );
    };

  const downloadOutput =
    () => {
      if (!output) return;

      const blob = new Blob(
        [output],
        {
          type: "text/plain",
        },
      );

      const url =
        URL.createObjectURL(blob);

      const link =
        document.createElement("a");

      link.href = url;
      link.download =
        "base64-output.txt";

      link.click();

      URL.revokeObjectURL(url);
    };

  const results =
    output.length > 0
      ? [
          {
            label:
              "Operation",
            value:
              operation,
            highlight: true,
          },
          {
            label:
              "Characters",
            value:
              output.length,
          },
          {
            label: "Bytes",
            value:
              new Blob([
                output,
              ]).size,
          },
        ]
      : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-3 flex items-center justify-between">
        <label className="font-medium">
          Input
        </label>

        <button
          onClick={() =>
            setInput(
              "Hello DevCalc Developer Tools",
            )
          }
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Load Example
        </button>
      </div>

      <textarea
        value={input}
        onChange={(e) =>
          setInput(
            e.target.value,
          )
        }
        rows={8}
        placeholder="Enter text or Base64 value"
        className="w-full rounded-xl border p-4 font-mono text-sm dark:border-slate-700 dark:bg-slate-800"
      />

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={
            encodeText
          }
          className="rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          Encode
        </button>

        <button
          onClick={
            decodeText
          }
          className="rounded-xl bg-green-600 px-5 py-3 text-white hover:bg-green-700"
        >
          Decode
        </button>

        <button
          onClick={
            autoDetect
          }
          className="rounded-xl bg-purple-600 px-5 py-3 text-white hover:bg-purple-700"
        >
          Auto Detect
        </button>

        <button
          onClick={() => {
            setInput("");
            setOutput("");
            setError("");
            setOperation(
              "",
            );
          }}
          className="rounded-xl border px-5 py-3 dark:border-slate-700"
        >
          Clear
        </button>
      </div>

      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700 dark:border-red-900 dark:bg-red-950/40">
          <h3 className="font-semibold">
            Invalid Input
          </h3>

          <p className="mt-1 text-sm">
            {error}
          </p>
        </div>
      )}

      {output && (
        <>
          <div className="mt-8">
            <div className="mb-4 flex flex-wrap gap-3">
              <button
                onClick={
                  copyOutput
                }
                className="rounded-xl bg-slate-800 px-4 py-2 text-white"
              >
                Copy Output
              </button>

              <button
                onClick={
                  downloadOutput
                }
                className="rounded-xl bg-indigo-600 px-4 py-2 text-white"
              >
                Download
              </button>
            </div>

            <label className="mb-2 block font-medium">
              Output
            </label>

            <textarea
              value={output}
              readOnly
              rows={8}
              className="w-full rounded-xl border bg-slate-50 p-4 font-mono text-sm dark:border-slate-700 dark:bg-slate-800"
            />
          </div>

          <ResultsSection
            title="Base64 Results"
            results={results}
            calculatorName="Base64 Encoder Decoder"
          />
        </>
      )}
    </div>
  );
}