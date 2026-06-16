import { Calculator } from "@/src/types/calculator";

export const averageCalculator: Calculator = {
  slug: "average-calculator",

  name: "Average Calculator",

  description:
    "Calculate the average (mean) of a set of numbers instantly. Find the average, sum, count, minimum value, and maximum value with our free online average calculator.",

  category: "Education",

  isPopular: true,

  seo: {
    title:
      "Average Calculator - Calculate Mean Online",

    description:
      "Free Average Calculator to calculate the mean of numbers instantly. Find average values, totals, counts, minimums, and maximums with step-by-step calculations.",

    keywords: [
      "average calculator",
      "mean calculator",
      "calculate average",
      "average formula",
      "average marks calculator",
      "average score calculator",
      "number average calculator",
      "average percentage calculator",
      "find average",
      "online average calculator",
      "math average calculator",
      "mean formula calculator",
      "student average calculator",
      "grade average calculator",
      "average value calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Numbers",
      description:
        "Enter the numbers separated by commas or spaces.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Calculate Average",
      description:
        "The calculator adds all values and divides the total by the number of values.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "View Results",
      description:
        "See the average, sum, count, minimum value, and maximum value instantly.",
      icon: "result",
    },
  ],

  formula: {
    title: "Average Formula",

    formula:
      "Average = Sum of Values ÷ Number of Values",

    explanation:
      "The average, also known as the arithmetic mean, is calculated by adding all values together and dividing the total by the number of values. It is one of the most commonly used statistical measures.",

    example: {
      input:
        "Values: 10, 20, 30, 40",

      output:
        "Average = (10 + 20 + 30 + 40) ÷ 4 = 25",
    },

    useCases: [
      "Student Marks",
      "Grade Calculations",
      "Business Reports",
      "Data Analysis",
      "Performance Tracking",
      "Statistical Calculations",
    ],
  },

  faqs: [
    {
      question: "What is an average?",
      answer:
        "An average, also known as the arithmetic mean, is the sum of all values divided by the total number of values.",
    },

    {
      question:
        "How do you calculate the average?",
      answer:
        "Add all values together and divide the total by the number of values.",
    },

    {
      question:
        "What is the formula for average?",
      answer:
        "Average = Sum of Values ÷ Number of Values.",
    },

    {
      question:
        "Can I calculate average marks using this calculator?",
      answer:
        "Yes. You can calculate the average of exam marks, grades, scores, and other educational data.",
    },

    {
      question:
        "What is the difference between mean and average?",
      answer:
        "In most cases, the terms mean and average refer to the same arithmetic calculation.",
    },

    {
      question:
        "Can I calculate averages for decimal numbers?",
      answer:
        "Yes. The calculator supports both whole numbers and decimal values.",
    },
  ],
};