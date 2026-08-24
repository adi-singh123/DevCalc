import { Calculator } from "@/src/types/calculator";

export const ratioCalculator: Calculator = {
  slug: "ratio-calculator",

  name: "Ratio Calculator",

  description:
    "Calculate, simplify, compare, and solve ratios instantly. Use our free Ratio Calculator to find equivalent ratios, ratio values, proportions, and ratio relationships quickly and accurately.",

  category: "Math",

  isPopular: true,

  seo: {
    title:
      "Ratio Calculator - Simplify & Solve Ratios Online",

    description:
      "Use our free Ratio Calculator to simplify ratios, find equivalent ratios, solve proportions, compare values, and calculate ratio relationships instantly.",

    keywords: [
      "ratio calculator",
      "simplify ratio calculator",
      "ratio and proportion calculator",
      "equivalent ratio calculator",
      "ratio simplifier",
      "proportion calculator",
      "ratio percentage calculator",
      "ratio reduction calculator",
      "ratio calculator with steps",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Ratio Values",
      description:
        "Enter the two numbers that form the ratio.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Find Greatest Common Divisor",
      description:
        "The calculator finds the GCD of both numbers.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Simplify Ratio",
      description:
        "Both values are divided by the GCD to produce the simplest ratio.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Results",
      description:
        "See simplified ratio, ratio value, and percentage representation.",
      icon: "result",
    },
  ],

  formula: {
    title: "Ratio Calculator Formula",

    formula:
      "Simplified Ratio = A ÷ GCD : B ÷ GCD",

    explanation:
      "A ratio compares two quantities. To simplify a ratio, divide both numbers by their greatest common divisor (GCD). Ratios are commonly used in mathematics, finance, business, statistics, engineering, and everyday problem solving.",

    example: {
      input: "20 : 30",
      output: "2 : 3",
    },

    useCases: [
      "Mathematics",
      "Ratio and Proportion Problems",
      "Statistics",
      "Business Calculations",
      "Engineering Calculations",
      "Financial Analysis",
      "Data Analysis",
      "School Homework",
      "Competitive Exams",
      "Research",
    ],
  },

  faqs: [
    {
      question:
        "What is a Ratio Calculator?",
      answer:
        "A Ratio Calculator simplifies ratios, finds equivalent ratios, and helps solve ratio and proportion problems.",
    },

    {
      question:
        "What is a ratio?",
      answer:
        "A ratio compares two quantities and shows their relationship using the form A:B.",
    },

    {
      question:
        "How do you simplify a ratio?",
      answer:
        "Divide both numbers by their greatest common divisor (GCD).",
    },

    {
      question:
        "What is the ratio of 20 and 30?",
      answer:
        "The simplified ratio of 20 and 30 is 2:3.",
    },

    {
      question:
        "What is an equivalent ratio?",
      answer:
        "Equivalent ratios represent the same relationship between numbers after multiplication or division by the same value.",
    },

    {
      question:
        "Can ratios be converted to percentages?",
      answer:
        "Yes. Ratios can be converted into percentages by calculating each part's share of the total.",
    },

    {
      question:
        "Where are ratios used?",
      answer:
        "Ratios are used in mathematics, statistics, finance, engineering, science, and everyday calculations.",
    },

    {
      question:
        "How do you solve a proportion equation with an unknown variable?",
      answer:
        "To solve a proportion such as a/b = c/x, cross-multiply to get a · x = b · c, then divide both sides by a to solve for the missing term x = (b · c) / a.",
    },
  ],
};