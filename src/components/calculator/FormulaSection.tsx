type Props = {
  title: string;
  formula: string;
  explanation: string;
  example?: {
    input: string;
    output: string;
  };
  useCases?: string[];
};

export default function FormulaSection({
  title,
  formula,
  explanation,
  example,
  useCases,
}: Props) {
  return (
    <section
      className="
        mt-12
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>

      <div
        className="
          mt-6
          rounded-2xl
          bg-slate-100
          p-6
          text-center
          dark:bg-slate-800
        "
      >
        <p className="text-xl font-semibold text-slate-900 dark:text-white">
          {formula}
        </p>
      </div>

      <p className="mt-6 leading-7 text-slate-600 dark:text-slate-300">
        {explanation}
      </p>

      {example && (
        <div
          className="
            mt-8
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            p-5
            dark:border-slate-700
            dark:bg-slate-800
          "
        >
          <h3 className="font-semibold text-slate-900 dark:text-white">
            Example Calculation
          </h3>

          <p className="mt-3 text-slate-700 dark:text-slate-300">
            <strong>Input:</strong>{" "}
            {example.input}
          </p>

          <p className="mt-2 text-slate-700 dark:text-slate-300">
            <strong>Output:</strong>{" "}
            {example.output}
          </p>
        </div>
      )}

      {useCases &&
        useCases.length > 0 && (
          <div
            className="
              mt-8
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              p-5
              dark:border-slate-700
              dark:bg-slate-800
            "
          >
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Common Uses
            </h3>

            <ul className="mt-4 space-y-2">
              {useCases.map(
                (item) => (
                  <li
                    key={item}
                    className="text-slate-600 dark:text-slate-300"
                  >
                    • {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        )}
    </section>
  );
}