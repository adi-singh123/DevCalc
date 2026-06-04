import { Calculator } from "@/src/types/calculator";

export const ageCalculator: Calculator = {
  slug: "age-calculator",

  name: "Age Calculator",

  description:
    "Calculate your exact age in years, months and days.",

  category: "Utility",

  isPopular: true,

  seo: {
    title: "Age Calculator - Calculate Exact Age Online",

    description:
      "Free age calculator to calculate exact age online.",

    keywords: [
      "age calculator",
      "calculate age online",
      "date of birth calculator",
    ],
  },

  faq: [
    {
      question: "How does an age calculator work?",
      answer:
        "It calculates the difference between your date of birth and today's date.",
    },
  ],
};