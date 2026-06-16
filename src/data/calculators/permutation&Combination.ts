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
      "Calculate permutations and combinations online. Find nPr, nCr, factorial values, and solve probability and combinatorics problems instantly.",

    keywords: [
      "permutation calculator",
      "combination calculator",
      "npr calculator",
      "ncr calculator",
      "permutation and combination calculator",
      "factorial calculator",
      "combinatorics calculator",
      "probability calculator ncr",
      "math permutation calculator",
      "math combination calculator",
      "statistics calculator",
      "arrangement calculator",
      "selection calculator",
      "online ncr calculator",
      "online npr calculator",
      "free permutation calculator",
      "free combination calculator",
      "probability math calculator",
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
};