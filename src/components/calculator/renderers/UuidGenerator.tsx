"use client";

import { useState } from "react";
import ResultsSection from "../ResultsSection";

export default function UuidGenerator() {
  const [count, setCount] =
    useState(1);

  const [uuids, setUuids] =
    useState<string[]>([]);

  const generateUUIDs = () => {
    const generated =
      Array.from(
        {
          length: count,
        },
        () =>
          crypto.randomUUID(),
      );

    setUuids(generated);
  };

  const copyUUID = async (
    uuid: string,
  ) => {
    try {
      await navigator.clipboard.writeText(
        uuid,
      );

      alert(
        "UUID copied successfully",
      );
    } catch {
      alert(
        "Failed to copy UUID",
      );
    }
  };

  const copyAll = async () => {
    try {
      await navigator.clipboard.writeText(
        uuids.join("\n"),
      );

      alert(
        "All UUIDs copied successfully",
      );
    } catch {
      alert(
        "Failed to copy UUIDs",
      );
    }
  };

  const downloadUUIDs = () => {
    if (!uuids.length) return;

    const blob = new Blob(
      [uuids.join("\n")],
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
      "uuids.txt";

    document.body.appendChild(
      link,
    );

    link.click();

    document.body.removeChild(
      link);

    URL.revokeObjectURL(url);
  };

  const results =
    uuids.length > 0
      ? [
          {
            label:
              "Generated UUIDs",
            value:
              uuids.length,
            highlight: true,
          },
          {
            label:
              "UUID Version",
            value: "v4",
          },
          {
            label:
              "Characters / UUID",
            value: 36,
          },
        ]
      : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div>
        <label className="mb-2 block font-medium text-slate-900 dark:text-white">
          Number of UUIDs
        </label>

        <input
          type="number"
          min={1}
          max={100}
          value={count}
          onChange={(e) =>
            setCount(
              Math.min(
                100,
                Math.max(
                  1,
                  Number(
                    e.target.value,
                  ) || 1,
                ),
              ),
            )
          }
          className="w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-800"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={
            generateUUIDs
          }
          className="rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          Generate UUIDs
        </button>

        <button
          onClick={() => {
            setCount(1);
            setUuids([]);
          }}
          className="rounded-xl border px-5 py-3 dark:border-slate-700"
        >
          Reset
        </button>
      </div>

      {uuids.length > 0 && (
        <>
          <div className="mt-8">
            <div className="mb-4 flex flex-wrap gap-3">
              <button
                onClick={
                  copyAll
                }
                className="rounded-xl bg-slate-800 px-4 py-2 text-white"
              >
                Copy All
              </button>

              <button
                onClick={
                  downloadUUIDs
                }
                className="rounded-xl bg-indigo-600 px-4 py-2 text-white"
              >
                Download TXT
              </button>
            </div>

            <div className="space-y-3">
              {uuids.map(
                (
                  uuid,
                  index,
                ) => (
                  <div
                    key={uuid}
                    className="flex flex-col gap-3 rounded-xl border p-4 md:flex-row md:items-center md:justify-between dark:border-slate-700"
                  >
                    <div>
                      <p className="text-xs text-slate-500">
                        UUID #
                        {index +
                          1}
                      </p>

                      <p className="break-all font-mono text-sm">
                        {uuid}
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        copyUUID(
                          uuid,
                        )
                      }
                      className="rounded-lg bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
                    >
                      Copy
                    </button>
                  </div>
                ),
              )}
            </div>
          </div>

          <ResultsSection
            title="UUID Generator Results"
            results={results}
            calculatorName="UUID Generator"
          />
        </>
      )}
    </div>
  );
}