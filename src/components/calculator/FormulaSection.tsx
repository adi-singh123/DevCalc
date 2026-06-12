type Props = {
  title: string;
  formula: string;
  explanation: string;
  example?: {
    input: string;
    output: string;
  };
};

export default function FormulaSection({
  title,
  formula,
  explanation,
  example,
}: Props) {
  return (
    <section className="mt-12 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-3xl font-bold">
        {title}
      </h2>

      <div className="mt-6 rounded-2xl bg-slate-100 p-6 text-center">
        <p className="text-xl font-semibold">
          {formula}
        </p>
      </div>

      <p className="mt-6 leading-7 text-slate-600">
        {explanation}
      </p>

      {example && (
        <div className="mt-8 rounded-2xl border bg-slate-50 p-5">
          <h3 className="font-semibold">
            Example Calculation
          </h3>

          <p className="mt-3">
            <strong>Input:</strong>{" "}
            {example.input}
          </p>

          <p className="mt-2">
            <strong>Output:</strong>{" "}
            {example.output}
          </p>
        </div>
      )}
    </section>
  );
}