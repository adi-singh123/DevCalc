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
  // Deterministic variation: pick a sentence pattern based on slug hash
  // so different pages get different phrasing.
  const hash = calculator.slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);

  const parts: string[] = [];

  // 1. Use cases — three pattern families rotated by hash
  if (useCases.length === 1) {
    const patterns = [
      `Commonly used for ${useCases[0]}, this tool gives you an exact figure instead of a rough estimate.`,
      `Whether you need it for ${useCases[0]} or a quick sanity check, the result is calculated to full precision.`,
      `Designed for ${useCases[0]}, it returns a precise answer so you can skip the manual math.`,
    ];
    parts.push(patterns[hash % patterns.length]);
  } else if (useCases.length > 1) {
    const last = useCases[useCases.length - 1];
    const rest = useCases.slice(0, -1);
    const joined = rest.join(", ");
    const patterns = [
      `People reach for this calculator when working on ${joined}, or ${last}. It handles the formula automatically so the result is precise every time.`,
      `Useful across scenarios like ${joined}, and ${last} — enter your numbers and the math is done for you.`,
      `From ${rest[0]} to ${last}, this tool covers multiple use cases. Plug in your values and get an accurate answer without manual calculation.`,
    ];
    parts.push(patterns[hash % patterns.length]);
  } else {
    const patterns = [
      `Enter your values and the correct formula is applied automatically — no manual calculation needed.`,
      `It handles the underlying math for you, delivering a precise result whatever your specific situation.`,
      `Plug in your numbers to get an accurate answer instantly, regardless of the scenario.`,
    ];
    parts.push(patterns[hash % patterns.length]);
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