import ResultShare from "./ResultShare";

type ResultItem = {
  label: string;
  value: string | number;
  highlight?: boolean;
};

type ResultsSectionProps = {
  title: string;
  results: ResultItem[];
  calculatorName?: string;
};

export default function ResultsSection({
  title,
  results,
  calculatorName,
}: ResultsSectionProps) {
  const mainResult = results.find((item) => item.highlight);

  const secondaryResults = results.filter((item) => !item.highlight);

  return (
    <section className="mt-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          {title}
        </h2>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Your calculated results are shown below.
        </p>
      </div>

      {mainResult && (
        <div
          className="
            mb-6
            rounded-3xl
            border
            border-blue-100
            bg-gradient-to-r
            from-blue-50
            to-indigo-50
            p-8
            text-center
            shadow-sm
            dark:border-slate-700
            dark:from-slate-800
            dark:to-slate-900
          "
        >
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Main Result
          </p>

          <h3 className="mt-3 break-words text-5xl font-bold text-slate-900 dark:text-white">
            {mainResult.value}
          </h3>

          <p className="mt-2 text-slate-600 dark:text-slate-300">
            {mainResult.label}
          </p>
        </div>
      )}

      {secondaryResults.length > 0 && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {secondaryResults.map((result) => (
            <div
              key={result.label}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                text-center
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
                dark:border-slate-700
                dark:bg-slate-900
              "
            >
              <p className="break-words text-2xl font-bold text-slate-900 dark:text-white">
                {result.value}
              </p>

              <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                {result.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {calculatorName && (
        <ResultShare
          calculatorName={calculatorName}
          results={results.map((item) => ({
            label: item.label,
            value: item.value,
          }))}
        />
      )}
    </section>
  );
}
