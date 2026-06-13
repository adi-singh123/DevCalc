import { Calculator } from "@/src/types/calculator";

export const incomeTaxCalculator: Calculator = {
  slug: "income-tax-calculator",

  name: "Income Tax Calculator",

  description:
    "Calculate income tax under the latest Indian tax regime and estimate your annual tax liability instantly.",

  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "Income Tax Calculator India - Calculate Tax Online",

    description:
      "Calculate your income tax liability instantly using our free Income Tax Calculator for India.",

    keywords: [
      "income tax calculator",
      "tax calculator india",
      "income tax calculator india",
      "salary tax calculator",
      "tax estimation calculator",
      "annual tax calculator",
      "income tax calculator 2026",
      "income tax slab calculator",
      "tax planning calculator",
      "tax liability calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Annual Income",
      description:
        "Enter your total annual income.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Choose Tax Regime",
      description:
        "Select old or new tax regime.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Calculate Tax",
      description:
        "View estimated tax liability.",
      icon: "result",
    },
  ],

  formula: {
    title: "Income Tax Calculation",

    formula:
      "Tax = Income Tax Slab Rate × Taxable Income",

    explanation:
      "Income tax is calculated according to the applicable tax slabs under the selected tax regime.",

    example: {
      input:
        "Annual Income: ₹12,00,000",

      output:
        "Estimated tax based on selected tax regime.",
    },

    useCases: [
      "Tax Planning",
      "Salary Planning",
      "Financial Planning",
      "Income Tax Estimation",
    ],
  },

  faqs: [
    {
      question:
        "What is an Income Tax Calculator?",
      answer:
        "An Income Tax Calculator helps estimate tax liability based on annual income and tax regime.",
    },
    {
      question:
        "Does it support the new tax regime?",
      answer:
        "Yes, the calculator can estimate tax under the latest Indian tax regime.",
    },
    {
      question:
        "Can I use it for salary planning?",
      answer:
        "Yes, it helps estimate tax before financial planning decisions.",
    },
  ],
};