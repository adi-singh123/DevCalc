type ResultItem = {
  label: string;
  value: string | number;
  highlight?: boolean;
};
type ResultsSectionProps = {
  title: string;
  results: ResultItem[];
};

export default function ResultsSection({
  title,
  results,
}: ResultsSectionProps) {
 return (
  <section className="mt-12">
    <div className="mb-8">
      <h2 className="text-3xl font-bold">
        {title}
      </h2>

      <p className="mt-2 text-slate-600">
        Your calculated results are shown below.
      </p>
    </div>

    {/* Highlight Result */}

    {results.find((item) => item.highlight) && (
      <div className="mb-6 rounded-3xl border bg-gradient-to-r from-blue-50 to-indigo-50 p-8 text-center">
        <p className="text-sm font-medium text-slate-500">
          Main Result
        </p>

        <h3 className="mt-3 text-5xl font-bold">
          {
            results.find(
              (item) => item.highlight
            )?.value
          }
        </h3>

        <p className="mt-2 text-slate-600">
          {
            results.find(
              (item) => item.highlight
            )?.label
          }
        </p>
      </div>
    )}

    {/* Secondary Results */}

    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {results
        .filter((item) => !item.highlight)
        .map((result) => (
          <div
            key={result.label}
            className="
              rounded-2xl
              border
              bg-white
              p-5
              text-center
              shadow-sm
              transition-all
              hover:-translate-y-1
              hover:shadow-md
            "
          >
            <p className="text-2xl font-bold">
              {result.value}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              {result.label}
            </p>
          </div>
        ))}
    </div>
  </section>
)}
