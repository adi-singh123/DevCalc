"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] =
    useState("");

  const [discountPercentage, setDiscountPercentage] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const discountData = useMemo(() => {
    if (
      !submitted ||
      !originalPrice ||
      !discountPercentage
    ) {
      return null;
    }

    const price = Number(originalPrice);

    const discount = Number(
      discountPercentage,
    );

    if (
      Number.isNaN(price) ||
      Number.isNaN(discount) ||
      price <= 0 ||
      discount < 0
    ) {
      return null;
    }

    const discountAmount =
      (price * discount) / 100;

    const finalPrice =
      price - discountAmount;

    return {
      price,
      discount,
      discountAmount,
      finalPrice,
    };
  }, [
    originalPrice,
    discountPercentage,
    submitted,
  ]);

  const results = discountData
    ? [
        {
          label: "Original Price",
          value: `₹${discountData.price.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 2,
            },
          )}`,
        },
        {
          label: "Discount (%)",
          value: `${discountData.discount}%`,
        },
        {
          label: "You Save",
          value: `₹${discountData.discountAmount.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 2,
            },
          )}`,
        },
        {
          label: "Final Price",
          value: `₹${discountData.finalPrice.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 2,
            },
          )}`,
          highlight: true,
        },
      ]
    : [];

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
    

      <p className="mt-2 text-slate-600">
        Calculate discount amount,
        savings, and final sale price
        instantly.
      </p>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Original Price (₹)
        </label>

        <input
          type="number"
          value={originalPrice}
          onChange={(e) =>
            setOriginalPrice(
              e.target.value,
            )
          }
          placeholder="1000"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Discount Percentage (%)
        </label>

        <input
          type="number"
          value={discountPercentage}
          onChange={(e) =>
            setDiscountPercentage(
              e.target.value,
            )
          }
          placeholder="20"
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
          Calculate Discount
        </button>

        <button
          onClick={() => {
            setOriginalPrice("");
            setDiscountPercentage(
              "",
            );
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {discountData && (
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Savings Summary
          </h3>

          <p className="mt-2 text-slate-600">
            You save{" "}
            <strong>
              ₹
              {discountData.discountAmount.toLocaleString(
                "en-IN",
                {
                  maximumFractionDigits: 2,
                },
              )}
            </strong>{" "}
            and pay only{" "}
            <strong>
              ₹
              {discountData.finalPrice.toLocaleString(
                "en-IN",
                {
                  maximumFractionDigits: 2,
                },
              )}
            </strong>
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Discount Results"
          results={results}
           calculatorName="Discount Results"
        />
      )}
    </div>
  );
}