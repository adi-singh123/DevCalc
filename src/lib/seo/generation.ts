import type { calculators } from "@/src/data/calculators";

// The data module exports `calculators` (an array). Derive a single
// calculator item type from that array so callers can use it as before.
type Calculators = (typeof calculators)[number];

/**
 * Builds a richer, calculator-specific intro using every use case
 * and related calculator already defined in the data — so content
 * length and depth scale with how well each entry is filled in,
 * without repeating text across calculators.
 */
export function getCalculatorIntro(calculator: Calculators): string {
  const useCases = calculator.formula?.useCases ?? [];
  const compareWith = calculator.compareWith ?? [];

  const parts: string[] = [];

  // 1. Use cases — list all of them instead of just the first.
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

  // 2. Formula context, if available — adds depth beyond just use cases.
  if (calculator.formula?.explanation) {
    parts.push(calculator.formula.explanation);
  }

  // 3. Related calculators — mention all of them, not just one, since
  // each is a genuine internal link opportunity.
  if (compareWith.length === 1) {
    parts.push(
      `If you need a related figure, our ${compareWith[0]} covers that calculation too.`
    );
  } else if (compareWith.length > 1) {
    const names = compareWith;
    const last = names[names.length - 1];
    const rest = names.slice(0, -1);
    parts.push(
      `For related figures, you can also check our ${rest.join(
        ", "
      )}, or ${last}.`
    );
  }

  return parts.join(" ");
}