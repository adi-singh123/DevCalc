import { Calculator } from "@/src/types/calculator";

export const lcmCalculator: Calculator = {
  slug: "lcm-calculator",

  name: "LCM Calculator",

  description:
    "Calculate the Least Common Multiple (LCM) of two or more numbers instantly. Find the smallest common multiple shared by multiple integers using our free LCM Calculator.",

  category: "Math",

  isPopular: true,

  seo: {
    title:
      "LCM Calculator - Find Least Common Multiple Online",

    description:
      "Use our LCM Calculator to find the Least Common Multiple of two or more numbers quickly and accurately. Ideal for students, teachers, and mathematical calculations.",

    keywords: [
      "lcm calculator",
      "least common multiple calculator",
      "find lcm",
      "lcm finder",
      "lowest common multiple calculator",
      "lcm of numbers",
      "lcm math calculator",
      "online lcm calculator",
      "free lcm calculator",
      "lcm solver",
      "common multiple calculator",
      "lcm formula calculator",
      "calculate lcm",
      "least common multiple finder",
      "lcm tool",
      "lcm calculation",
      "math lcm calculator",
      "multiple numbers lcm",
      "lcm finder online",
      "lcm number calculator",
      "lcm and gcd calculator",
      "smallest common multiple",
      "lcm problem solver",
      "lcm mathematics tool",
      "lcm calculator online",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Numbers",
      description:
        "Input two or more numbers separated by commas.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Calculate LCM",
      description:
        "The calculator determines the smallest number divisible by all entered numbers.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Analyze Result",
      description:
        "Review the Least Common Multiple and related calculations.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Answer",
      description:
        "See the calculated LCM instantly.",
      icon: "result",
    },
  ],

  formula: {
    title:
      "Least Common Multiple Formula",

    formula:
      "LCM(a, b) = |a × b| ÷ GCD(a, b)",

    explanation:
      "The Least Common Multiple (LCM) is the smallest positive number that is divisible by all given numbers. For two numbers, the LCM can be calculated using their Greatest Common Divisor (GCD).",

    example: {
      input: "12, 18",

      output: "LCM = 36",
    },

    useCases: [
      "Fractions",
      "Mathematics",
      "Education",
      "Algebra",
      "Competitive Exams",
      "Number Theory",
      "Engineering Calculations",
      "Problem Solving",
    ],
  },

  faqs: [
    {
      question:
        "What is the Least Common Multiple (LCM)?",
      answer:
        "The Least Common Multiple is the smallest positive integer that is evenly divisible by all given numbers.",
    },

    {
      question:
        "How do you calculate LCM?",
      answer:
        "LCM can be calculated using prime factorization or by dividing the product of two numbers by their GCD.",
    },

    {
      question:
        "What is the LCM of 12 and 18?",
      answer:
        "The LCM of 12 and 18 is 36.",
    },

    {
      question:
        "Why is LCM important?",
      answer:
        "LCM is commonly used in fractions, algebra, scheduling problems, and mathematical calculations.",
    },

    {
      question:
        "Can this calculator handle multiple numbers?",
      answer:
        "Yes. You can calculate the LCM of two or more numbers simultaneously.",
    },

    {
      question:
        "Is this LCM Calculator free?",
      answer:
        "Yes. You can calculate unlimited LCM values for free.",
    },
  ],
};