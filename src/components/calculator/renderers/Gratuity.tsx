"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function GratuityCalculator() {
  const [salary, setSalary] =
    useState("");

  const [
    yearsOfService,
    setYearsOfService,
  ] = useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !salary ||
      !yearsOfService ||
      !submitted
    ) {
      return null;
    }

    const lastSalary =
      Number(salary);

    const years =
      Number(yearsOfService);

    if (
      lastSalary <= 0 ||
      years <= 0
    ) {
      return null;
    }

    const gratuity =
      (lastSalary *
        15 *
        years) /
      26;

    return {
      gratuity,
      lastSalary,
      years,
    };
  }, [
    salary,
    yearsOfService,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Gratuity Amount",
          value: `₹${Math.round(
            result.gratuity
          ).toLocaleString()}`,
          highlight: true,
        },
        {
          label:
            "Last Drawn Salary",
          value: `₹${result.lastSalary.toLocaleString()}`,
        },
        {
          label:
            "Years of Service",
          value:
            result.years,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="text-2xl font-bold">
        Gratuity Calculator
      </h2>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Last Drawn Salary
          (Basic + DA)
        </label>

        <input
          type="number"
          min="0"
          value={salary}
          onChange={(e) =>
            setSalary(
              e.target.value
            )
          }
          placeholder="e.g. 50000"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Years of Service
        </label>

        <input
          type="number"
          min="1"
          value={
            yearsOfService
          }
          onChange={(e) =>
            setYearsOfService(
              e.target.value
            )
          }
          placeholder="e.g. 10"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            setSubmitted(true)
          }
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate Gratuity
        </button>

        <button
          onClick={() => {
            setSalary("");
            setYearsOfService(
              ""
            );
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center dark:bg-green-900/20">
          <h3 className="text-xl font-semibold">
            Estimated Gratuity
          </h3>

          <p className="mt-2 text-3xl font-bold text-green-600">
            ₹
            {Math.round(
              result.gratuity
            ).toLocaleString()}
          </p>

          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Based on a salary
            of ₹
            {result.lastSalary.toLocaleString()}
            and{" "}
            {
              result.years
            }{" "}
            years of service.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Gratuity Results"
          results={results}
        />
      )}
    </div>
  );
}