"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { calculators } from "@/src/data/calculators";

export default function CalculatorSearch() {
  const [query, setQuery] = useState("");

  const filteredCalculators = useMemo(() => {
    if (!query.trim()) return [];

    return calculators.filter((calculator) =>
      calculator.name
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search calculators..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
      />

      {query && filteredCalculators.length > 0 && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border bg-white shadow-lg">
          {filteredCalculators.map((calculator) => (
            <Link
              key={calculator.slug}
              href={`/${calculator.slug}`}
              className="block border-b p-4 hover:bg-slate-50"
            >
              <div className="font-medium">
                {calculator.name}
              </div>

              <div className="text-sm text-slate-500">
                {calculator.category}
              </div>
            </Link>
          ))}
        </div>
      )}

      {query &&
        filteredCalculators.length === 0 && (
          <div className="absolute z-50 mt-2 w-full rounded-xl border bg-white p-4 shadow-lg">
            No calculator found
          </div>
        )}
    </div>
  );
}