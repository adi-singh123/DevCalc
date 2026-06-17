"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { calculators } from "@/src/data/calculators";

export default function CalculatorSearch() {
  const [query, setQuery] =
    useState("");

  const filteredCalculators =
    useMemo(() => {
      if (!query.trim())
        return [];

      return calculators.filter(
        (calculator) =>
          calculator.name
            .toLowerCase()
            .includes(
              query.toLowerCase(),
            ),
      );
    }, [query]);

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search calculators..."
        value={query}
        onChange={(e) =>
          setQuery(
            e.target.value,
          )
        }
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-3
          text-slate-900
          outline-none
          transition
          focus:border-blue-500
          dark:border-slate-600
          dark:bg-slate-800
          dark:text-white
          dark:placeholder:text-slate-400
        "
      />

      {query &&
        filteredCalculators.length >
          0 && (
          <div
            className="
              absolute
              z-50
              mt-2
              w-full
              overflow-hidden
              rounded-xl
              border
              border-slate-200
              bg-white
              shadow-lg
              dark:border-slate-700
              dark:bg-slate-900
            "
          >
            {filteredCalculators.map(
              (calculator) => (
                <Link
                  key={
                    calculator.slug
                  }
                  href={`/${calculator.slug}`}
                  className="
                    block
                    border-b
                    border-slate-200
                    p-4
                    transition
                    hover:bg-slate-50
                    dark:border-slate-700
                    dark:hover:bg-slate-800
                  "
                >
                  <div className="font-medium text-slate-900 dark:text-white">
                    {
                      calculator.name
                    }
                  </div>

                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {
                      calculator.category
                    }
                  </div>
                </Link>
              ),
            )}
          </div>
        )}

      {query &&
        filteredCalculators.length ===
          0 && (
          <div
            className="
              absolute
              z-50
              mt-2
              w-full
              rounded-xl
              border
              border-slate-200
              bg-white
              p-4
              text-slate-700
              shadow-lg
              dark:border-slate-700
              dark:bg-slate-900
              dark:text-slate-300
            "
          >
            No calculator found
          </div>
        )}
    </div>
  );
}