import { Calculator } from "@/src/types/calculator";

export const hcfCalculator: Calculator = {
  slug: "hcf-calculator",

  name: "HCF Calculator",

  description:
    "Calculate the Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two or more numbers instantly. Find the largest number that divides all given numbers exactly.",

  category: "Math",

  isPopular: true,

  seo: {
    title:
      "HCF Calculator - Find Highest Common Factor Online",

    description:
      "Use our HCF Calculator to find the Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of multiple numbers quickly and accurately.",

    keywords: [
      "hcf calculator",
      "gcd calculator",
      "greatest common divisor calculator",
      "highest common factor calculator",
      "find hcf",
      "hcf finder",
      "gcd finder",
      "highest common factor finder",
      "common factor calculator",
      "hcf of numbers",
      "gcd of numbers",
      "online hcf calculator",
      "free hcf calculator",
      "hcf solver",
      "gcd solver",
      "calculate hcf",
      "hcf formula calculator",
      "greatest common factor calculator",
      "common divisor calculator",
      "math hcf calculator",
      "hcf and lcm calculator",
      "number factor calculator",
      "greatest divisor calculator",
      "hcf mathematics tool",
      "hcf calculator online",
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
      title: "Find Common Factors",
      description:
        "The calculator identifies factors shared by all numbers.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Calculate HCF",
      description:
        "Determine the largest factor common to all entered numbers.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Result",
      description:
        "See the Highest Common Factor instantly.",
      icon: "result",
    },
  ],

  formula: {
    title:
      "Highest Common Factor Formula",

    formula:
      "HCF(a, b) = Greatest Number That Divides Both a and b",

    explanation:
      "The Highest Common Factor (HCF), also known as the Greatest Common Divisor (GCD), is the largest positive integer that divides all given numbers without leaving a remainder.",

    example: {
      input: "24, 36",

      output: "HCF = 12",
    },

    useCases: [
      "Fractions",
      "Mathematics",
      "Algebra",
      "Education",
      "Competitive Exams",
      "Number Theory",
      "Simplifying Ratios",
      "Problem Solving",
    ],
  },

  faqs: [
    {
      question:
        "What is HCF?",
      answer:
        "HCF (Highest Common Factor) is the largest number that divides two or more numbers exactly.",
    },

    {
      question:
        "Is HCF the same as GCD?",
      answer:
        "Yes. HCF (Highest Common Factor) and GCD (Greatest Common Divisor) refer to the same mathematical concept.",
    },

    {
      question:
        "What is the HCF of 24 and 36?",
      answer:
        "The HCF of 24 and 36 is 12.",
    },

    {
      question:
        "Why is HCF important?",
      answer:
        "HCF is used in simplifying fractions, ratios, algebraic expressions, and many mathematical calculations.",
    },

    {
      question:
        "Can I calculate HCF for more than two numbers?",
      answer:
        "Yes. This calculator can find the HCF of multiple numbers simultaneously.",
    },

    {
      question:
        "Is this HCF Calculator free?",
      answer:
        "Yes. You can calculate unlimited HCF values completely free.",
    },
  ],
};