"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

const categories = {
  Length: {
    Meter: 1,
    Kilometer: 1000,
    Centimeter: 0.01,
    Millimeter: 0.001,
  },

  Weight: {
    Kilogram: 1,
    Gram: 0.001,
    Pound: 0.453592,
  },
};

export default function UnitConverter() {
  const [category, setCategory] =
    useState("Length");

  const [value, setValue] =
    useState("");

  const [fromUnit, setFromUnit] =
    useState("Meter");

  const [toUnit, setToUnit] =
    useState("Kilometer");

  const [submitted, setSubmitted] =
    useState(false);

  const getUnits = () => {
    switch (category) {
      case "Length":
        return Object.keys(
          categories.Length,
        );

      case "Weight":
        return Object.keys(
          categories.Weight,
        );

      default:
        return [
          "Celsius",
          "Fahrenheit",
          "Kelvin",
        ];
    }
  };

  const units = getUnits();

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const convertedData =
    useMemo(() => {
      if (
        !submitted ||
        !value
      ) {
        return null;
      }

      const inputValue =
        Number(value);

      if (
        Number.isNaN(
          inputValue,
        )
      ) {
        return null;
      }

      let result = 0;

      if (
        category ===
          "Length" ||
        category ===
          "Weight"
      ) {
        const unitMap =
          category ===
          "Length"
            ? categories.Length
            : categories.Weight;

        const baseValue =
          inputValue *
          unitMap[
            fromUnit as keyof typeof unitMap
          ];

        result =
          baseValue /
          unitMap[
            toUnit as keyof typeof unitMap
          ];
      }

      if (
        category ===
        "Temperature"
      ) {
        if (
          fromUnit ===
            "Celsius" &&
          toUnit ===
            "Fahrenheit"
        ) {
          result =
            (inputValue *
              9) /
              5 +
            32;
        } else if (
          fromUnit ===
            "Fahrenheit" &&
          toUnit ===
            "Celsius"
        ) {
          result =
            ((inputValue -
              32) *
              5) /
            9;
        } else if (
          fromUnit ===
            "Celsius" &&
          toUnit ===
            "Kelvin"
        ) {
          result =
            inputValue +
            273.15;
        } else if (
          fromUnit ===
            "Kelvin" &&
          toUnit ===
            "Celsius"
        ) {
          result =
            inputValue -
            273.15;
        } else if (
          fromUnit ===
            "Fahrenheit" &&
          toUnit ===
            "Kelvin"
        ) {
          result =
            ((inputValue -
              32) *
              5) /
              9 +
            273.15;
        } else if (
          fromUnit ===
            "Kelvin" &&
          toUnit ===
            "Fahrenheit"
        ) {
          result =
            ((inputValue -
              273.15) *
              9) /
              5 +
            32;
        } else {
          result =
            inputValue;
        }
      }

      return {
        inputValue,
        result,
      };
    }, [
      category,
      value,
      fromUnit,
      toUnit,
      submitted,
    ]);

  const results =
    convertedData
      ? [
          {
            label:
              "Input Value",
            value: `${convertedData.inputValue} ${fromUnit}`,
          },
          {
            label:
              "Converted Value",
            value: `${convertedData.result.toFixed(
              4,
            )} ${toUnit}`,
            highlight: true,
          },
        ]
      : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Unit Converter
      </h2>

      <p className="mt-2 text-slate-600">
        Convert length,
        weight, and
        temperature units
        instantly.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => {
              const selected =
                e.target.value;

              setCategory(
                selected,
              );

              if (
                selected ===
                "Length"
              ) {
                setFromUnit(
                  "Meter",
                );
                setToUnit(
                  "Kilometer",
                );
              }

              if (
                selected ===
                "Weight"
              ) {
                setFromUnit(
                  "Kilogram",
                );
                setToUnit(
                  "Gram",
                );
              }

              if (
                selected ===
                "Temperature"
              ) {
                setFromUnit(
                  "Celsius",
                );
                setToUnit(
                  "Fahrenheit",
                );
              }
            }}
            className="w-full rounded-xl border p-3"
          >
            <option>
              Length
            </option>
            <option>
              Weight
            </option>
            <option>
              Temperature
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Value
          </label>

          <input
            type="number"
            value={value}
            onChange={(e) =>
              setValue(
                e.target.value,
              )
            }
            placeholder="100"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            From
          </label>

          <select
            value={fromUnit}
            onChange={(e) =>
              setFromUnit(
                e.target.value,
              )
            }
            className="w-full rounded-xl border p-3"
          >
            {units.map(
              (unit) => (
                <option
                  key={unit}
                >
                  {unit}
                </option>
              ),
            )}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            To
          </label>

          <select
            value={toUnit}
            onChange={(e) =>
              setToUnit(
                e.target.value,
              )
            }
            className="w-full rounded-xl border p-3"
          >
            {units.map(
              (unit) => (
                <option
                  key={unit}
                >
                  {unit}
                </option>
              ),
            )}
          </select>
        </div>
      </div>

      <button
        onClick={swapUnits}
        className="mt-4 rounded-xl border px-4 py-2 transition hover:bg-gray-100"
      >
        ⇄ Swap Units
      </button>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            setSubmitted(
              true,
            )
          }
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Convert
        </button>

        <button
          onClick={() => {
            setValue("");
            setSubmitted(
              false,
            );
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {convertedData && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Conversion Summary
          </h3>

          <p className="mt-2 text-slate-600">
            {convertedData.inputValue}{" "}
            {fromUnit} ={" "}
            <strong>
              {convertedData.result.toFixed(
                4,
              )}{" "}
              {toUnit}
            </strong>
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Conversion Results"
          results={results}
        />
      )}
    </div>
  );
}