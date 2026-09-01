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
  if (calculator.editorialIntro) {
    return calculator.editorialIntro;
  }

  const useCases = calculator.formula?.useCases ?? [];
  const compareWith = calculator.compareWith ?? [];
  const hash = calculator.slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);

  const parts: string[] = [];

  // 1. Use cases
  if (useCases.length === 1) {
    const patterns = [
      `Commonly used for ${useCases[0]}, this tool calculates exact results based on standard formulas.`,
      `Whether for ${useCases[0]} or quick validation, all calculations follow verified precision models.`,
      `Tailored for ${useCases[0]}, it provides instantaneous results without manual estimation.`,
    ];
    parts.push(patterns[hash % patterns.length]);
  } else if (useCases.length > 1) {
    const last = useCases[useCases.length - 1];
    const rest = useCases.slice(0, -1);
    const joined = rest.join(", ");
    const patterns = [
      `Calculations are structured for practical scenarios like ${joined}, and ${last}.`,
      `Engineered for daily use across ${joined}, and ${last} with complete mathematical precision.`,
      `Applies verified arithmetic standards across ${rest[0]} to ${last}.`,
    ];
    parts.push(patterns[hash % patterns.length]);
  }

  // 2. Related calculators
  if (compareWith.length === 1) {
    const name =
      typeof compareWith[0] === "string" ? compareWith[0] : (compareWith[0] as any).name;
    parts.push(
      `If you need complementary estimates, explore our ${name}.`
    );
  } else if (compareWith.length > 1) {
    const names = compareWith.map((c) => (typeof c === "string" ? c : (c as any).name));
    const last = names[names.length - 1];
    const rest = names.slice(0, -1);
    parts.push(
      `For connected financial or numerical planning, you can also use our ${rest.join(", ")}, or ${last}.`
    );
  }

  return parts.join(" ");
}