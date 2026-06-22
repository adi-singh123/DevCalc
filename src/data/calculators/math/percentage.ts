import { Calculator } from "@/src/types/calculator";

export const percentageCalculator: Calculator = {
  slug: "percentage-calculator",

  name: "Percentage Calculator",

  description:
    "Calculate percentages, increases, decreases, and percentage values instantly.",

  category: "Math",

  isPopular: true,

  seo: {
    title:
      "Percentage Calculator - Calculate Percentages Online",

    description:
      "Free online Percentage Calculator. Calculate percentage values, increases, decreases, and percentage differences.",

    keywords: [
      "percentage calculator",
      "calculate percentage",
      "percentage increase",
      "percentage decrease",
      "percent calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Values",
      description:
        "Enter the percentage and the number you want to calculate.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Calculate",
      description:
        "Click the Calculate button to get the result instantly.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "View Result",
      description:
        "See the calculated percentage value.",
      icon: "result",
    },
  ],

  formula: {
    title: "Percentage Formula",

    formula:
      "Percentage = (Part ÷ Whole) × 100",

    explanation:
      "A percentage represents a value as a fraction of 100.",

    example: {
      input: "25 out of 100",

      output: "25%",
    },

    useCases: [
      "Exam scores",
      "Discount calculations",
      "Profit calculations",
      "Financial analysis",
    ],
  },

  faqs: [
    {
      question: "How do I calculate a percentage?",
      answer:
        "Divide the part by the whole and multiply by 100.",
    },
    {
      question: "Can I calculate percentage increase?",
      answer:
        "Yes. Percentage increase is calculated using the difference between old and new values.",
    },
  ],
};