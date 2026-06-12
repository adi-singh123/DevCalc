"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { calculators } from "@/src/data/calculators";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const filteredCalculators =
    query.trim() === ""
      ? []
      : calculators.filter((calculator) =>
          calculator.name
            .toLowerCase()
            .includes(query.toLowerCase()),
        );

  return (
    <div className="relative w-full">
      <input
        aria-label="Search"
        placeholder="Search calculators..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        className="w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

      {filteredCalculators.length > 0 && (
        <div className="absolute z-50 mt-2 w-full rounded-xl border bg-white shadow-lg">
          {filteredCalculators.map(
            (calculator) => (
              <button
                key={calculator.slug}
                onClick={() => {
                  router.push(
                    `/${calculator.slug}`,
                  );
                  setQuery("");
                }}
                className="block w-full border-b px-4 py-3 text-left hover:bg-slate-50"
              >
                <p className="font-medium">
                  {calculator.name}
                </p>

                <p className="text-sm text-slate-500">
                  {calculator.category}
                </p>
              </button>
            ),
          )}
        </div>
      )}
    </div>
  );
}