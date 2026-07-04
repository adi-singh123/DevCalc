import type { calculators } from "@/src/data/calculators";

// Derive the item type from the data array itself, so there's only
// one place (calculators.ts) that defines the shape.
type Calculator = (typeof calculators)[number];

/**
 * Builds a calculator-specific intro from use cases and related
 * calculators already in the data. Deliberately does NOT repeat
 * `formula.explanation` here — that's already rendered verbatim
 * further down the page in <FormulaSection>, so reusing it here
 * would duplicate content within the same page.
 */
export function getCalculatorIntro(calculator: Calculator): string {
  const useCases = calculator.formula?.useCases ?? [];
  const compareWith = calculator.compareWith ?? [];

  const parts: string[] = [];

  // 1. Use cases
  if (useCases.length === 1) {
    parts.push(
      `This calculator is commonly used for ${useCases[0]}, giving you an exact figure instead of a rough estimate.`
    );
  } else if (useCases.length > 1) {
    const last = useCases[useCases.length - 1];
    const rest = useCases.slice(0, -1);
    parts.push(
      `This calculator is useful in several situations, including ${rest.join(
        ", "
      )}, and ${last}. In each case, it applies the correct formula automatically so you get a precise result without manual calculation.`
    );
  } else {
    parts.push(
      `It applies the correct formula automatically so you get a precise result without manual calculation, whatever your specific situation.`
    );
  }

  // 2. Related calculators — genuine internal links, not shown
  // elsewhere on this page (CompareCalculatorSection renders cards,
  // not this sentence form, so no duplication here).
  if (compareWith.length === 1) {
    const name =
      typeof compareWith[0] === "string" ? compareWith[0] : (compareWith[0] as any).name;
    parts.push(
      `If you need a related figure, our ${name} covers that calculation too.`
    );
  } else if (compareWith.length > 1) {
    const names = compareWith.map((c) => (typeof c === "string" ? c : (c as any).name));
    const last = names[names.length - 1];
    const rest = names.slice(0, -1);
    parts.push(
      `For related figures, you can also check our ${rest.join(", ")}, or ${last}.`
    );
  }

  return parts.join(" ");
}