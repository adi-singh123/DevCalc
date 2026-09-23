import { Calculator } from "@/src/types/calculator";

export const permutationCombinationCalculator: Calculator = {
  slug: "permutation-combination-calculator",

  name: "Permutation & Combination Calculator",

  description:
    "Calculate permutations (nPr) and combinations (nCr) instantly. Use our free calculator for probability, statistics, mathematics, competitive exams, and data analysis.",

  category: "Math",

  isPopular: true,

  seo: {
    title:
      "Permutation and Combination Calculator (nPr & nCr)",

description:
  "Need to solve nPr or nCr quickly? Enter n and r values and instantly get permutation, combination, and factorial results — perfect for probability problems, exams, and competitive tests.",
keywords: [
  "permutation calculator",
  "combination calculator",
  "npr calculator",
  "ncr calculator",
  "permutation and combination calculator",
  "factorial calculator",
  "combinatorics calculator",
  "permutation formula calculator",
  "combination formula calculator",
],
  },

  steps: [
    {
      step: 1,
      title: "Enter Total Items (n)",
      description:
        "Enter the total number of available items.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Selected Items (r)",
      description:
        "Enter how many items are chosen.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Calculate nPr and nCr",
      description:
        "The calculator applies permutation and combination formulas.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Results",
      description:
        "See permutation, combination, and factorial values.",
      icon: "result",
    },
  ],

  formula: {
    title: "Permutation & Combination Formula",

    formula:
      "nPr = n! / (n-r)! , nCr = n! / [r!(n-r)!]",

    explanation:
      "Permutation calculates arrangements where order matters, while combination calculates selections where order does not matter.",

    example: {
      input: "n = 5, r = 2",
      output: "nPr = 20, nCr = 10",
    },

    useCases: [
      "Probability",
      "Statistics",
      "Competitive Exams",
      "Mathematics",
      "Data Analysis",
      "Research",
      "Combinatorics",
      "Education",
    ],
  },

  faqs: [
    {
      question:
        "What is permutation?",
      answer:
        "Permutation is an arrangement of objects where order matters.",
    },
    {
      question:
        "What is combination?",
      answer:
        "Combination is a selection of objects where order does not matter.",
    },
    {
      question:
        "What is nPr?",
      answer:
        "nPr calculates the number of possible arrangements.",
    },
    {
      question:
        "What is nCr?",
      answer:
        "nCr calculates the number of possible selections.",
    },
    {
      question:
        "Where are permutations and combinations used?",
      answer:
        "They are widely used in probability, statistics, mathematics, exams, and data science.",
    },
  ],
  seoContent: `
    <h2>Permutation or combination: which one should you use?</h2>
    <p>Use a permutation when the order of the selected items matters. Use a combination when only the group matters. Choosing a president and secretary from a class is a permutation because the roles are different; choosing two class representatives without roles is a combination.</p>
    <h2>Formulas used</h2>
    <p>For non-negative whole numbers where r is not greater than n, the calculator uses nPr = n! / (n-r)! and nCr = n! / (r!(n-r)!). The factorial n! means multiplying every positive integer from n down to 1, while 0! equals 1.</p>
    <h2>Worked example</h2>
    <p>If n = 5 and r = 2, there are 5P2 = 5! / 3! = 20 ordered arrangements. There are 5C2 = 5! / (2! × 3!) = 10 unordered selections. Each pair appears twice among the permutations because its two members can switch order.</p>
    <h2>Input limits and interpretation</h2>
    <p>Enter whole-number values with 0 ≤ r ≤ n. Factorials grow extremely quickly, so very large inputs can exceed JavaScript's precise numeric range. For classroom, exam, and everyday probability questions, verify whether repeated items are allowed because these formulas assume selection without replacement.</p>
  `,
};
