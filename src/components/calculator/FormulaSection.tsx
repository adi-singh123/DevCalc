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

function formatMathFormula(formula: string): string {
  if (!formula) return "";
  let clean = replaceLatexFractions(formula);
  // Handle \frac{numerator}{denominator} and double-escaped \\frac
  clean = clean.replace(/\\*frac\{([^{}]+)\}\{([^{}]+)\}/g, "$1 ÷ $2");
  // Handle \text{...} and double-escaped \\text
  clean = clean.replace(/\\*text\{([^{}]+)\}/g, "$1");
  // Handle LaTeX symbol escapes
  clean = clean.replace(/\\*times/g, "×");
  clean = clean.replace(/\\*div/g, "÷");
  clean = clean.replace(/\\*pm/g, "±");
  clean = clean.replace(/\\*approx/g, "≈");
  clean = clean.replace(/\\*cdot/g, "·");
  clean = clean.replace(/\\*left\s*\[/g, "[");
  clean = clean.replace(/\\*right\s*\]/g, "]");
  clean = clean.replace(/\\*left\s*\(/g, "(");
  clean = clean.replace(/\\*right\s*\)/g, ")");
  clean = clean.replace(/\\*quad/g, "  |  ");
  // Superscripts
  clean = clean.replace(/\^2\b/g, "²");
  clean = clean.replace(/\^3\b/g, "³");
  clean = clean.replace(/\^t\b/g, "ᵗ");
  clean = clean.replace(/\^n\b/g, "ⁿ");
  // Subscripts
  clean = clean.replace(/_0\b/g, "₀");
  clean = clean.replace(/_n\b/g, "ₙ");
  // Remove leftover backslashes and braces if any
  clean = clean.replace(/\\/g, "");
  return clean;
}

function replaceLatexFractions(value: string): string {
  let output = value;

  while (true) {
    const match = /\\+frac\{/.exec(output);
    if (!match) return output;

    const numeratorStart = match.index + match[0].length - 1;
    const numerator = readBraceGroup(output, numeratorStart);
    if (!numerator) return output;

    const denominator = readBraceGroup(output, numerator.end + 1);
    if (!denominator) return output;

    output = `${output.slice(0, match.index)}[${numerator.value}] ÷ [${denominator.value}]${output.slice(denominator.end + 1)}`;
  }
}

function readBraceGroup(value: string, start: number): { value: string; end: number } | null {
  if (value[start] !== "{") return null;

  let depth = 0;
  for (let index = start; index < value.length; index += 1) {
    if (value[index] === "{") depth += 1;
    if (value[index] === "}") depth -= 1;
    if (depth === 0) return { value: value.slice(start + 1, index), end: index };
  }

  return null;
}

export default function FormulaSection({
  title,
  formula,
  explanation,
  example,
  useCases,
}: Props) {
  const formattedFormula = formatMathFormula(formula);

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
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>

      <div
        className="
          mt-6
          rounded-2xl
          border
          border-blue-100
          bg-blue-50/60
          p-6
          text-center
          dark:border-blue-900/40
          dark:bg-slate-800
        "
      >
        <p className="font-mono text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-300">
          {formattedFormula}
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
