import { Calculator } from "@/src/types/calculator";

export const dateCalculator: Calculator = {
  slug: "date-calculator",

  name: "Date Calculator",

  description:
    "Calculate the exact difference between two dates in years, months, weeks, days, hours, and minutes.",

  category: "Utility",

  isPopular: true,

  seo: {
    title:
      "Date Calculator - Calculate Days Between Dates",

    description:
      "Free online Date Calculator. Calculate the exact difference between two dates in days, weeks, months, and years.",

    keywords: [
      "date calculator",
      "days between dates",
      "date difference calculator",
      "calculate date difference",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Select Start Date",
      description:
        "Choose the beginning date.",
      icon: "calendar",
    },
    {
      step: 2,
      title: "Select End Date",
      description:
        "Choose the ending date.",
      icon: "calendar",
    },
    {
      step: 3,
      title: "Calculate Difference",
      description:
        "Click calculate to find the exact difference.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View Results",
      description:
        "See the difference in years, months, weeks, and days.",
      icon: "result",
    },
  ],

  formula: {
    title: "Date Difference Formula",

    formula:
      "Difference = End Date − Start Date",

    explanation:
      "The calculator determines the time interval between two selected dates.",

    example: {
      input:
        "Start Date: 1 Jan 2025, End Date: 1 Jul 2025",

      output:
        "181 Days",
    },

    useCases: [
      "Project planning",
      "Event countdowns",
      "Business calculations",
      "Travel planning",
    ],
  },

  faqs: [
    {
      question:
        "How does a date calculator work?",
      answer:
        "It calculates the exact difference between two selected dates.",
    },
    {
      question:
        "Can I calculate future dates?",
      answer:
        "Yes, you can select any future or past dates.",
    },
    {
      question:
        "Does it account for leap years?",
      answer:
        "Yes, leap years and varying month lengths are included in the calculation.",
    },
  ],
};