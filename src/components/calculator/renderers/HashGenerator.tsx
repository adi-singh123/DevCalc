"use client";

import { useState } from "react";
import ResultsSection from "../ResultsSection";

type HashAlgorithm =
  | "SHA-1"
  | "SHA-256"
  | "SHA-384"
  | "SHA-512";

export default function HashGenerator() {
  const [input, setInput] =
    useState("");

  const [algorithm, setAlgorithm] =
    useState<HashAlgorithm>(
      "SHA-256",
    );

  const [hash, setHash] =
    useState("");

  const [error, setError] =
    useState("");

  const generateHash =
    async () => {
      try {
        setError("");

        if (!input.trim()) {
          setError(
            "Please enter text to generate a hash.",
          );
          return;
        }

        const encoder =
          new TextEncoder();

        const data =
          encoder.encode(input);

        const buffer =
          await crypto.subtle.digest(
            algorithm,
            data,
          );

        const hashArray =
          Array.from(
            new Uint8Array(
              buffer,
            ),
          );

        const hashHex =
          hashArray
            .map((byte) =>
              byte
                .toString(16)
                .padStart(
                  2,
                  "0",
                ),
            )
            .join("");

        setHash(hashHex);
      } catch {
        setError(
          "Unable to generate hash.",
        );
      }
    };

  const copyHash =
    async () => {
      if (!hash) return;

      try {
        await navigator.clipboard.writeText(
          hash,
        );

        alert(
          "Hash copied successfully",
        );
      } catch {
        alert(
          "Failed to copy hash",
        );
      }
    };

  const downloadHash =
    () => {
      if (!hash) return;

      const blob = new Blob(
        [hash],
        {
          type: "text/plain",
        },
      );

      const url =
        URL.createObjectURL(blob);

      const link =
        document.createElement(
          "a",
        );

      link.href = url;

      link.download =
        "hash.txt";

      document.body.appendChild(
        link,
      );

      link.click();

      document.body.removeChild(
        link,
      );

      URL.revokeObjectURL(
        url,
      );
    };

  const resetData =
    () => {
      setInput("");
      setHash("");
      setError("");
      setAlgorithm(
        "SHA-256",
      );
    };

  const results =
    hash
      ? [
          {
            label:
              "Algorithm",
            value:
              algorithm,
          },
          {
            label:
              "Input Length",
            value:
              input.length,
          },
          {
            label:
              "Hash Length",
            value:
              hash.length,
          },
          {
            label:
              "Hash Type",
            value:
              "Cryptographic",
            highlight: true,
          },
        ]
      : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:p-6">
      <div>
        <label className="mb-2 block font-medium">
          Enter Text
        </label>

        <textarea
          value={input}
          onChange={(e) =>
            setInput(
              e.target.value,
            )
          }
          rows={8}
          placeholder="Enter text to generate hash..."
          className="w-full rounded-xl border p-4 font-mono text-sm"
        />
      </div>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Select Algorithm
        </label>

        <select
          value={algorithm}
          onChange={(e) =>
            setAlgorithm(
              e.target
                .value as HashAlgorithm,
            )
          }
          className="w-full rounded-xl border p-3"
        >
          <option value="SHA-1">
            SHA-1
          </option>

          <option value="SHA-256">
            SHA-256
          </option>

          <option value="SHA-384">
            SHA-384
          </option>

          <option value="SHA-512">
            SHA-512
          </option>
        </select>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={
            generateHash
          }
          className="rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          Generate Hash
        </button>

        <button
          onClick={
            resetData
          }
          className="rounded-xl border px-5 py-3"
        >
          Reset
        </button>
      </div>

      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      )}

      {hash && (
        <>
          <div className="mt-8">
            <div className="mb-4 flex flex-wrap gap-3">
              <button
                onClick={
                  copyHash
                }
                className="rounded-xl bg-slate-800 px-4 py-2 text-white"
              >
                Copy Hash
              </button>

              <button
                onClick={
                  downloadHash
                }
                className="rounded-xl bg-indigo-600 px-4 py-2 text-white"
              >
                Download Hash
              </button>
            </div>

            <label className="mb-2 block font-medium">
              Generated Hash
            </label>

            <textarea
              value={hash}
              readOnly
              rows={6}
              className="w-full rounded-xl border bg-slate-50 p-4 font-mono text-sm break-all dark:bg-slate-800"
            />
          </div>

          <ResultsSection
            title="Hash Generator Results"
            results={results}
            calculatorName="Hash Generator"
          />
        </>
      )}
    </div>
  );
}