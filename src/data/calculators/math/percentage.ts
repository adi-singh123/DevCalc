import { Calculator } from "@/src/types/calculator";

export const percentageCalculator: Calculator = {
  slug: "percentage-calculator",

  name: "Percentage Calculator",

  description:
    "Calculate percentages, percentage increases, percentage decreases, and proportional fractions instantly. Multi-mode calculator for finding 'What is X% of Y', 'X is what % of Y', and percent change.",

  category: "Math",

  isPopular: true,

  editorialIntro:
    "Percentages normalize ratios to a standardized base of 100, forming the mathematical foundation for retail markups, commercial profit margins, exam score evaluations, tax rates, and statistical growth metrics across daily life.",

  benchmarkContext: {
    title: "Percentage Normalization & Reversibility Rules",
    badge: "Arithmetic Standards",
    stat: "X% of Y = Y% of X (Reversible Commutativity)",
    description:
      "A valuable mental math property is symmetry: 16% of 50 is identical to 50% of 16 (both equal 8). Percentage changes are asymmetric: a 50% loss requires a 100% gain to break even.",
    source: "Standard Real Analysis & Applied Mathematics",
    lastUpdated: "January 2026",
  },

  seo: {
    title: "Percentage Calculator - Calculate Percentages Online",

    description:
      "Free online Percentage Calculator. Calculate percentage values, percentage increases, percentage decreases, markups, and percentage differences with step-by-step math.",

    keywords: [
      "percentage calculator",
      "calculate percentage",
      "percentage increase",
      "percentage decrease",
      "percent calculator",
      "what percent of",
      "percentage difference calculator",
      "percentage change calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Select Calculation Mode",
      description: "Choose 'X% of Y', 'X is what % of Y', or 'Percentage Increase/Decrease'.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Input Values",
      description: "Enter your starting base quantity and rate or comparison number.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "View Exact & Step-by-Step Breakdown",
      description: "Analyze the computed percentage, fractional decimal equivalent, and absolute difference.",
      icon: "result",
    },
  ],

  formula: {
    title: "Core Percentage Formulas",

    formula: "\\text{Percentage} = \\left(\\frac{\\text{Part}}{\\text{Whole}}\\right) \\times 100 \\quad | \\quad \\% \\text{ Change} = \\left(\\frac{\\text{New} - \\text{Old}}{\\text{Old}}\\right) \\times 100",

    explanation:
      "To find the percentage, divide the part by the whole and multiply by 100. To find percentage increase or decrease, subtract the old value from the new value, divide by the absolute original value, and multiply by 100.",

    example: {
      input: "Original Price: ₹800 | New Price: ₹1,000 | Difference: +₹200",
      output: "% Increase = ((1,000 - 800) ÷ 800) × 100 = +25.0%",
    },

    useCases: [
      "Retail Discount & Profit Margin Calculations",
      "Academic Test Score & Grade Percentage Conversions",
      "Financial Growth & Inflation Indexing",
      "Salary Increment & Compensation Revision Analysis",
    ],
  },

  faqs: [
    {
      question: "Why does a 50% price drop require a 100% price increase to break even?",
      answer:
        "Percentage changes are calculated relative to their immediate baseline. If a ₹100 stock drops by 50%, its new price is ₹50. To return from ₹50 back to ₹100, the stock must increase by ₹50—which represents 100% of the new ₹50 base ($50 \\div 50 \\times 100 = 100\\%$).",
    },
    {
      question: "How do I calculate what percentage one number is of another?",
      answer:
        "Divide the part by the total base quantity and multiply by 100. For example, to find what percentage 45 is of 180: $(45 \\div 180) \\times 100 = 0.25 \\times 100 = 25\\%$.",
    },
    {
      question: "What is the fastest mental math shortcut to calculate 15% or 20% of a bill?",
      answer:
        "To find 10%, shift the decimal point one place to the left (10% of ₹840 is ₹84). To find 20%, double the 10% amount (₹84 × 2 = ₹168). To find 15%, take 10% (₹84) and add half of it (₹42) = ₹126.",
    },
    {
      question: "What is the difference between percentage points and percentage change?",
      answer:
        "Percentage points represent the simple arithmetic difference between two percentages. Percentage change measures the proportional relative shift. If an interest rate moves from 5% to 6%, it increased by 1 percentage point, but the relative percentage change in borrowing cost is $+20\\%$ ($1 \\div 5 \\times 100$).",
    },
  ],

  seoContent: `
<h2>Understanding Percentage Calculations in Practice</h2>
<p>
  The word percentage originates from the Latin <em>per centum</em>, meaning 'by the hundred'. In business, finance, and daily shopping, percentage math standardizes proportions so numbers can be compared objectively regardless of the original scale.
</p>

---

<h2>Common Percentage Calculation Cheat Sheet</h2>
<table>
  <thead>
    <tr>
      <th>Calculation Type</th>
      <th>Mathematical Formula</th>
      <th>Practical Example</th>
      <th>Final Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Find X% of Y</strong></td>
      <td>$(X \\div 100) \\times Y$</td>
      <td>18% GST on ₹5,000</td>
      <td>₹900</td>
    </tr>
    <tr>
      <td><strong>X is what % of Y</strong></td>
      <td>$(X \\div Y) \\times 100$</td>
      <td>420 marks out of 500</td>
      <td>84.0%</td>
    </tr>
    <tr>
      <td><strong>Percentage Increase</strong></td>
      <td>$((New - Old) \\div Old) \\times 100$</td>
      <td>Salary from ₹50,000 to ₹65,000</td>
      <td>+30.0%</td>
    </tr>
    <tr>
      <td><strong>Percentage Decrease</strong></td>
      <td>$((Old - New) \\div Old) \\times 100$</td>
      <td>Price cut from ₹1,200 to ₹900</td>
      <td>-25.0%</td>
    </tr>
  </tbody>
</table>
`,
};