import { Calculator } from "@/src/types/calculator";

export const fractionCalculator: Calculator = {
  slug: "fraction-calculator",

  name: "Fraction Calculator",

  description:
    "Calculate fractions instantly. Add, subtract, multiply, divide, simplify fractions, convert fractions to decimals, and solve mixed fraction problems online.",

  category: "Math",

  isPopular: true,

  editorialIntro:
    "Fraction arithmetic solves addition, subtraction, multiplication, and division of rational numbers $\\frac{a}{b}$ by determining the Least Common Multiple (LCM) of denominators and reducing final results to lowest terms via the Euclidean Greatest Common Divisor (GCD) algorithm.",

  benchmarkContext: {
    title: "Rational Arithmetic & Euclidean GCD Reduction",
    badge: "Discrete Mathematics Standard",
    stat: "Exact Rational Arithmetic (Integer GCD / LCM Reduction)",
    description:
      "Addition: $\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}$. Division: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{ad}{bc}$. Supports automatic conversion between proper fractions, improper fractions, mixed numbers, and IEEE 754 decimal equivalents.",
    source: "Knuth, Donald E. (1997) The Art of Computer Programming, Vol. 2: Seminumerical Algorithms",
    lastUpdated: "January 2026",
  },

  compareWith: [
    "percentage-calculator",
    "ratio-calculator",
    "percentage-difference-calculator",
    "scientific-calculator",
    "lcm-calculator",
  ],

  seo: {
    title:
      "Fraction Calculator - Add, Subtract, Multiply & Divide Fractions",

    description:
      "Add, subtract, multiply, divide, simplify fractions, convert fractions to decimals, and solve mixed fraction equations with step-by-step reduction.",
    keywords: [
      "fraction calculator",
      "fraction simplifier",
      "add fractions calculator",
      "subtract fractions calculator",
      "multiply fractions calculator",
      "divide fractions calculator",
      "fraction to decimal calculator",
      "mixed fraction calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Fractions",
      description:
        "Enter two fractions such as 1/2 and 3/4.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Choose Operation",
      description:
        "Select addition, subtraction, multiplication, or division.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Calculate",
      description:
        "The calculator performs fraction arithmetic automatically.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View Results",
      description:
        "Get simplified fractions, mixed fractions, and decimal values.",
      icon: "result",
    },
  ],

  formula: {
    title: "Fraction Calculator Formula",

    formula:
      "a/b + c/d = (ad + bc) / bd",

    explanation:
      "Fractions are calculated by finding common denominators for addition and subtraction, and by multiplying numerators and denominators for multiplication and division.",

    example: {
      input: "1/2 + 3/4",
      output: "5/4 = 1.25",
    },

    useCases: [
      "School Mathematics",
      "Homework",
      "Algebra",
      "Engineering Calculations",
      "Fraction Simplification",
      "Decimal Conversion",
    ],
  },

  faqs: [
    {
      question: "What is a Fraction Calculator?",
      answer:
        "A Fraction Calculator performs addition, subtraction, multiplication, division, and simplification of fractions.",
    },
    {
      question: "Can I simplify fractions?",
      answer:
        "Yes. The calculator automatically reduces fractions to their simplest form.",
    },
    {
      question: "Can I convert fractions to decimals?",
      answer:
        "Yes. The calculator displays decimal equivalents alongside fraction results.",
    },
    {
      question: "Does it support mixed fractions?",
      answer:
        "Yes. Mixed numbers and improper fractions can be converted automatically.",
    },
  ],
};