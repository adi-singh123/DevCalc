"use client";

import { useState } from "react";
import ResultsSection from "../ResultsSection";

export default function UrlEncoderDecoder() {
  const [input, setInput] =
    useState("");

  const [output, setOutput] =
    useState("");

  const [operation, setOperation] =
    useState("");

  const [error, setError] =
    useState("");

  const encodeUrl = () => {
    try {
      const encoded =
        encodeURIComponent(
          input,
        );

      setOutput(encoded);
      setOperation(
        "Encoded",
      );
      setError("");
    } catch {
      setError(
        "Unable to encode URL.",
      );
    }
  };

  const decodeUrl = () => {
    try {
      const decoded =
        decodeURIComponent(
          input,
        );

      setOutput(decoded);
      setOperation(
        "Decoded",
      );
      setError("");
    } catch {
      setOutput("");

      setError(
        "Invalid encoded URL.",
      );
    }
  };

  const autoDetect = () => {
    try {
      const decoded =
        decodeURIComponent(
          input,
        );

      if (
        decoded !== input
      ) {
        setOutput(decoded);
        setOperation(
          "Auto Decoded",
        );
      } else {
        const encoded =
          encodeURIComponent(
            input,
          );

        setOutput(encoded);
        setOperation(
          "Auto Encoded",
        );
      }

      setError("");
    } catch {
      encodeUrl();
    }
  };

  const swapValues = () => {
    setInput(output);
    setOutput(input);
  };

  const copyOutput =
    async () => {
      if (!output) return;

      try {
        await navigator.clipboard.writeText(
          output,
        );
      } catch {
        alert(
          "Unable to copy output",
        );
      }
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
        "url-output.txt";

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
            label:
              "Bytes",
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
        <label className="font-medium text-slate-900 dark:text-white">
          Input
        </label>

        <button
          onClick={() =>
            setInput(
              "https://www.devcalc.in/search?q=hello world&city=jaunpur",
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
        placeholder="Enter URL or encoded URL"
        className="w-full rounded-xl border p-4 font-mono text-sm dark:border-slate-700 dark:bg-slate-800"
      />

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={
            encodeUrl
          }
          className="rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          Encode URL
        </button>

        <button
          onClick={
            decodeUrl
          }
          className="rounded-xl bg-green-600 px-5 py-3 text-white transition hover:bg-green-700"
        >
          Decode URL
        </button>

        <button
          onClick={
            autoDetect
          }
          className="rounded-xl bg-purple-600 px-5 py-3 text-white transition hover:bg-purple-700"
        >
          Auto Detect
        </button>

        <button
          onClick={
            swapValues
          }
          className="rounded-xl bg-orange-600 px-5 py-3 text-white transition hover:bg-orange-700"
        >
          Swap
        </button>

        <button
          onClick={() => {
            setInput("");
            setOutput("");
            setOperation(
              "",
            );
            setError("");
          }}
          className="rounded-xl border px-5 py-3 dark:border-slate-700"
        >
          Clear
        </button>
      </div>

      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700 dark:border-red-900 dark:bg-red-950/30">
          <h3 className="font-semibold">
            Error
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
            title="URL Encoder Decoder Results"
            results={results}
            calculatorName="URL Encoder Decoder"
          />
        </>
      )}
    </div>
  );
}