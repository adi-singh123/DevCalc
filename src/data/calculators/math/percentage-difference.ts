import { Calculator } from "@/src/types/calculator";

export const percentageDifferenceCalculator: Calculator = {
  slug: "percentage-difference-calculator",

  name: "Percentage Difference Calculator",

  description:
    "Calculate percentage difference between two numbers instantly. Compare values, find percentage change, and analyze increases or decreases accurately using our free Percentage Difference Calculator.",

  category: "Math",

  isPopular: true,

  seo: {
    title:
      "Percentage Difference Calculator - Find Percentage Change",

    description:
      "Use our Percentage Difference Calculator to compare two numbers and calculate percentage difference, increase, decrease, and percentage change instantly.",

    keywords: [
      "percentage difference calculator",
      "percent difference calculator",
      "percentage change calculator",
      "percentage increase calculator",
      "percentage decrease calculator",
      "difference percentage calculator",
      "compare percentages calculator",
      "percentage comparison calculator",
      "percentage variance calculator",
      "calculate percentage difference",
      "online percentage difference calculator",
      "free percentage difference calculator",
      "percent change calculator",
      "percentage growth calculator",
      "percentage drop calculator",
      "math percentage calculator",
      "percentage formula calculator",
      "percentage increase decrease calculator",
      "difference between two numbers percentage",
      "percentage analysis calculator",
      "percentage calculator",
      "value comparison calculator",
      "percentage fluctuation calculator",
      "percentage variation calculator",
      "percentage difference formula",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter First Value",
      description:
        "Enter the original or first number.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Second Value",
      description:
        "Enter the new or comparison number.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Calculate Difference",
      description:
        "The calculator finds the absolute difference between values.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Percentage Difference",
      description:
        "See percentage difference, absolute difference, and change amount.",
      icon: "result",
    },
  ],

  formula: {
    title:
      "Percentage Difference Formula",

    formula:
      "|A - B| ÷ ((A + B) ÷ 2) × 100",

    explanation:
      "Percentage difference measures how much two numbers differ relative to their average value. It is commonly used in mathematics, statistics, finance, research, and data analysis.",

    example: {
      input:
        "100 and 120",

      output:
        "18.18%",
    },

    useCases: [
      "Mathematics",
      "Statistics",
      "Finance",
      "Business Analysis",
      "Research",
      "Data Analysis",
      "Academic Studies",
      "Performance Comparison",
      "Market Analysis",
      "Scientific Calculations",
    ],
  },

  faqs: [
    {
      question:
        "What is percentage difference?",
      answer:
        "Percentage difference measures how much two values differ relative to their average.",
    },

    {
      question:
        "How is percentage difference calculated?",
      answer:
        "Percentage difference equals the absolute difference divided by the average of the two values multiplied by 100.",
    },

    {
      question:
        "What is the difference between percentage change and percentage difference?",
      answer:
        "Percentage change uses an original value as a reference, while percentage difference compares two values equally.",
    },

    {
      question:
        "Can percentage difference be negative?",
      answer:
        "No. Percentage difference is always expressed as a positive value because it uses absolute difference.",
    },

    {
      question:
        "Where is percentage difference used?",
      answer:
        "It is used in statistics, finance, business, research, science, and education.",
    },

    {
      question:
        "Is this calculator free?",
      answer:
        "Yes. The Percentage Difference Calculator is completely free to use.",
    },
  ],
};