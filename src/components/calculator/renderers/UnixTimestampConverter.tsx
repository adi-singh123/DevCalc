"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function UnixTimestampConverter() {
  const [timestamp, setTimestamp] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [convertedDate, setConvertedDate] = useState("");
  const [convertedTimestamp, setConvertedTimestamp] = useState("");
  const [error, setError] = useState("");


const currentUnixTime = useMemo(
  () => Math.floor(new Date().getTime() / 1000),
  [],
);

  const convertTimestampToDate = () => {
    try {
      setError("");

      if (!timestamp.trim()) {
        setError(
          "Please enter a Unix timestamp.",
        );
        return;
      }

      let value = Number(timestamp);

      if (Number.isNaN(value)) {
        setError("Invalid timestamp.");
        return;
      }

      // Support milliseconds timestamps
      if (timestamp.length === 13) {
        value = Math.floor(value / 1000);
      }

      const date = new Date(
        value * 1000,
      );

      if (
        Number.isNaN(date.getTime())
      ) {
        setError("Invalid timestamp.");
        return;
      }

      setConvertedDate(
        date.toString(),
      );
      setConvertedTimestamp("");
    } catch {
      setError(
        "Unable to convert timestamp.",
      );
    }
  };

  const convertDateToTimestamp = () => {
    try {
      setError("");

      if (!dateInput) {
        setError(
          "Please select a date.",
        );
        return;
      }

      const date = new Date(
        dateInput,
      );

      if (
        Number.isNaN(date.getTime())
      ) {
        setError("Invalid date.");
        return;
      }

      const unix = Math.floor(
        date.getTime() / 1000,
      );

      setConvertedTimestamp(
        unix.toString(),
      );
      setConvertedDate("");
    } catch {
      setError(
        "Unable to convert date.",
      );
    }
  };

  const resetData = () => {
    setTimestamp("");
    setDateInput("");
    setConvertedDate("");
    setConvertedTimestamp("");
    setError("");
  };

  const copyValue = async (
    value: string,
  ) => {
    try {
      await navigator.clipboard.writeText(
        value,
      );

      alert(
        "Copied successfully",
      );
    } catch {
      alert("Copy failed");
    }
  };

  const utcTime = useMemo(() => {
    if (!convertedDate) {
      return "N/A";
    }

    let value = Number(timestamp);

    if (
      timestamp.length === 13
    ) {
      value = Math.floor(
        value / 1000,
      );
    }

    return new Date(
      value * 1000,
    ).toUTCString();
  }, [
    convertedDate,
    timestamp,
  ]);

  const results = useMemo(() => {
    if (
      !convertedDate &&
      !convertedTimestamp
    ) {
      return [];
    }

    return [
      {
        label:
          "Current Unix Time",
        value:
          currentUnixTime.toString(),
      },
      {
        label:
          "Timestamp Format",
        value:
          timestamp.length ===
          13
            ? "Milliseconds"
            : "Seconds",
      },
      {
        label: "UTC Time",
        value: utcTime,
      },
      {
        label: "Status",
        value:
          "Converted Successfully",
        highlight: true,
      },
    ];
  }, [
    convertedDate,
    convertedTimestamp,
    currentUnixTime,
    timestamp,
    utcTime,
  ]);

  return (
    <div className="mt-8 rounded-3xl border bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:p-6">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Timestamp → Date */}
        <div>
          <label className="mb-2 block font-medium">
            Unix Timestamp
          </label>

          <input
            type="text"
            value={timestamp}
            onChange={(e) =>
              setTimestamp(
                e.target.value,
              )
            }
            placeholder="1700000000"
            className="w-full rounded-xl border p-3"
          />

          <button
            onClick={
              convertTimestampToDate
            }
            className="mt-4 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
          >
            Convert to Date
          </button>

          {convertedDate && (
            <div className="mt-4">
              <label className="mb-2 block font-medium">
                Human Readable Date
              </label>

              <textarea
                readOnly
                rows={4}
                value={
                  convertedDate
                }
                className="w-full rounded-xl border bg-slate-50 p-4 text-sm dark:bg-slate-800"
              />

              <button
                onClick={() =>
                  copyValue(
                    convertedDate,
                  )
                }
                className="mt-3 rounded-xl bg-slate-800 px-4 py-2 text-white transition hover:bg-slate-700"
              >
                Copy Date
              </button>
            </div>
          )}
        </div>

        {/* Date → Timestamp */}
        <div>
          <label className="mb-2 block font-medium">
            Date & Time
          </label>

          <input
            type="datetime-local"
            value={dateInput}
            onChange={(e) =>
              setDateInput(
                e.target.value,
              )
            }
            className="w-full rounded-xl border p-3"
          />

          <button
            onClick={
              convertDateToTimestamp
            }
            className="mt-4 rounded-xl bg-green-600 px-5 py-3 text-white transition hover:bg-green-700"
          >
            Convert to Timestamp
          </button>

          {convertedTimestamp && (
            <div className="mt-4">
              <label className="mb-2 block font-medium">
                Unix Timestamp
              </label>

              <textarea
                readOnly
                rows={4}
                value={
                  convertedTimestamp
                }
                className="w-full rounded-xl border bg-slate-50 p-4 text-sm dark:bg-slate-800"
              />

              <button
                onClick={() =>
                  copyValue(
                    convertedTimestamp,
                  )
                }
                className="mt-3 rounded-xl bg-slate-800 px-4 py-2 text-white transition hover:bg-slate-700"
              >
                Copy Timestamp
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={resetData}
          className="rounded-xl border px-5 py-3 transition hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          Reset
        </button>
      </div>

      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400">
          {error}
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Unix Timestamp Results"
          results={results}
          calculatorName="Unix Timestamp Converter"
        />
      )}
    </div>
  );
}