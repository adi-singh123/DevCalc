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

  // Core Keywords
  "permutations calculator",
  "combinations calculator",
  "npr and ncr calculator",
  "permutation solver",
  "combination solver",
  "permutation finder",
  "combination finder",
  "counting calculator",
  "mathematics combinatorics calculator",
  "advanced combinatorics calculator",

  // NPR Keywords
  "npr formula calculator",
  "calculate npr",
  "permutation formula solver",
  "npr with steps calculator",
  "npr mathematics calculator",
  "npr problem solver",
  "arrangement calculator npr",
  "permutations of n objects calculator",
  "ordered arrangement calculator",
  "npr online calculator",

  // NCR Keywords
  "ncr formula calculator",
  "calculate ncr",
  "combination formula solver",
  "ncr with steps calculator",
  "ncr mathematics calculator",
  "ncr problem solver",
  "selection calculator ncr",
  "combinations of n objects calculator",
  "unordered selection calculator",
  "ncr online calculator",

  // Permutation Keywords
  "permutation formula calculator",
  "permutation with repetition calculator",
  "permutation without repetition calculator",
  "word permutation calculator",
  "arrangement calculator",
  "ordered selection calculator",
  "permutation equation calculator",
  "permutation examples",
  "permutation practice calculator",
  "permutation math solver",

  // Combination Keywords
  "combination formula calculator",
  "combination with repetition calculator",
  "combination without repetition calculator",
  "selection formula calculator",
  "choose r from n calculator",
  "combination equation calculator",
  "combination examples",
  "combination practice calculator",
  "combination math solver",
  "selection problem calculator",

  // Factorial Keywords
  "factorial calculator",
  "n factorial calculator",
  "factorial solver",
  "factorial formula calculator",
  "factorial with steps",
  "large factorial calculator",
  "factorial mathematics calculator",
  "factorial equation solver",
  "factorial number calculator",
  "online factorial calculator",

  // Probability Keywords
  "probability calculator",
  "probability ncr calculator",
  "probability and combinatorics calculator",
  "probability formula calculator",
  "event probability calculator",
  "statistics probability calculator",
  "chance calculator",
  "probability math solver",
  "probability examples calculator",
  "combinatorial probability calculator",

  // Statistics Keywords
  "statistics calculator",
  "statistics formula calculator",
  "discrete mathematics calculator",
  "counting principles calculator",
  "mathematical statistics calculator",
  "data analysis calculator",
  "probability statistics calculator",
  "statistics solver",
  "statistics practice calculator",
  "math statistics tool",

  // Educational Keywords
  "how to calculate ncr",
  "how to calculate npr",
  "permutation and combination formulas",
  "permutation and combination examples",
  "permutation and combination questions",
  "permutation and combination shortcut",
  "combinatorics examples",
  "probability and counting principles",
  "ncr npr solved examples",
  "permutation combination tutorial",

  // Student Keywords
  "permutation calculator for students",
  "combination calculator for students",
  "jee permutation combination",
  "neet permutation combination",
  "ssc permutation questions",
  "bank exam permutation questions",
  "competitive exam calculator",
  "math homework calculator",
  "engineering mathematics calculator",
  "aptitude permutation calculator",

  // Question Keywords
  "what is ncr",
  "what is npr",
  "difference between ncr and npr",
  "how to solve permutation questions",
  "how to solve combination questions",
  "how to calculate factorial",
  "what is combinatorics",
  "how does ncr work",
  "how does npr work",
  "permutation calculator example",

  // India Specific Keywords
  "ncr calculator india",
  "npr calculator india",
  "permutation combination calculator india",
  "jee combinatorics calculator",
  "competitive exam ncr npr calculator",

  // Hindi Keywords
  "ncr calculator hindi",
  "npr calculator hindi",
  "permutation calculator hindi",
  "combination calculator hindi",
  "factorial calculator hindi",
  "परमुटेशन कैलकुलेटर",
  "कॉम्बिनेशन कैलकुलेटर",
  "एनसीआर कैलकुलेटर",
  "एनपीआर कैलकुलेटर",
  "क्रमचय संचय कैलकुलेटर",
  "फैक्टोरियल कैलकुलेटर",
  "क्रमचय और संचय",
  "ncr कैसे निकालें",
  "npr कैसे निकालें",
  "क्रमचय संचय सूत्र",

  // Long Tail Keywords
  "free online permutation calculator",
  "free online combination calculator",
  "ncr and npr calculator with steps",
  "permutation and combination calculator online",
  "advanced combinatorics calculator",
  "factorial and ncr calculator",
  "probability permutation combination calculator",
  "accurate ncr calculator online",
  "mathematics permutation solver",
  "combination formula calculator with solution",
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