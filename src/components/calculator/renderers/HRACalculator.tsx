"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function HRACalculator() {
  const [basicSalary, setBasicSalary] =
    useState("");

  const [hraReceived, setHraReceived] =
    useState("");

  const [rentPaid, setRentPaid] =
    useState("");

  const [cityType, setCityType] =
    useState("metro");

  const [submitted, setSubmitted] =
    useState(false);

  const hraData = useMemo(() => {
    if (
      !submitted ||
      !basicSalary ||
      !hraReceived ||
      !rentPaid
    ) {
      return null;
    }

    const basic =
      Number(basicSalary);

    const hra =
      Number(hraReceived);

    const rent =
      Number(rentPaid);

    if (
      Number.isNaN(basic) ||
      Number.isNaN(hra) ||
      Number.isNaN(rent) ||
      basic <= 0 ||
      hra < 0 ||
      rent < 0
    ) {
      return null;
    }

    const actualHRA =
      hra;

    const rentMinus10Percent =
      Math.max(
        rent - basic * 0.1,
        0,
      );

    const salaryPercentage =
      cityType ===
      "metro"
        ? basic * 0.5
        : basic * 0.4;

    const hraExemption =
      Math.min(
        actualHRA,
        rentMinus10Percent,
        salaryPercentage,
      );

    const taxableHRA =
      actualHRA -
      hraExemption;

    return {
      actualHRA,
      hraExemption,
      taxableHRA,
      rentMinus10Percent,
      salaryPercentage,
    };
  }, [
    basicSalary,
    hraReceived,
    rentPaid,
    cityType,
    submitted,
  ]);

  const results = hraData
    ? [
        {
          label:
            "HRA Received",
          value: `₹${hraData.actualHRA.toLocaleString(
            "en-IN",
          )}`,
        },
        {
          label:
            "Eligible HRA Exemption",
          value: `₹${hraData.hraExemption.toLocaleString(
            "en-IN",
          )}`,
          highlight: true,
        },
        {
          label:
            "Taxable HRA",
          value: `₹${hraData.taxableHRA.toLocaleString(
            "en-IN",
          )}`,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        HRA Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Calculate HRA
        exemption, taxable
        HRA, and tax-saving
        benefits instantly.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Annual Basic
            Salary (₹)
          </label>

          <input
            type="number"
            value={
              basicSalary
            }
            onChange={(e) =>
              setBasicSalary(
                e.target
                  .value,
              )
            }
            placeholder="500000"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Annual HRA
            Received (₹)
          </label>

          <input
            type="number"
            value={
              hraReceived
            }
            onChange={(e) =>
              setHraReceived(
                e.target
                  .value,
              )
            }
            placeholder="200000"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Annual Rent Paid
            (₹)
          </label>

          <input
            type="number"
            value={rentPaid}
            onChange={(e) =>
              setRentPaid(
                e.target
                  .value,
              )
            }
            placeholder="240000"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            City Type
          </label>

          <select
            value={cityType}
            onChange={(e) =>
              setCityType(
                e.target
                  .value,
              )
            }
            className="w-full rounded-xl border p-3"
          >
            <option value="metro">
              Metro
            </option>

            <option value="non-metro">
              Non-Metro
            </option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            setSubmitted(
              true,
            )
          }
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate HRA
        </button>

        <button
          onClick={() => {
            setBasicSalary(
              "",
            );
            setHraReceived(
              "",
            );
            setRentPaid("");
            setCityType(
              "metro",
            );
            setSubmitted(
              false,
            );
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {hraData && (
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            HRA Summary
          </h3>

          <p className="mt-2 text-slate-600">
            Eligible HRA
            exemption:
            <strong>
              {" "}
              ₹
              {hraData.hraExemption.toLocaleString(
                "en-IN",
              )}
            </strong>
          </p>

          <p className="mt-1 text-slate-600">
            Taxable HRA:
            <strong>
              {" "}
              ₹
              {hraData.taxableHRA.toLocaleString(
                "en-IN",
              )}
            </strong>
          </p>
        </div>
      )}

      {results.length >
        0 && (
        <ResultsSection
          title="HRA Results"
          results={
            results
          }
        />
      )}
    </div>
  );
}