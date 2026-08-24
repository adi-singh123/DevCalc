import { Calculator } from "@/src/types/calculator";

export const hraCalculator: Calculator = {
  slug: "hra-calculator",

  name: "HRA Calculator",

  description:
    "Calculate HRA exemption, taxable HRA, and tax-saving benefits under Income Tax rules.",

  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "HRA Calculator - Calculate House Rent Allowance Exemption Online",

    description:
      "Calculate HRA exemption, taxable HRA, and income tax benefits instantly using our free HRA Calculator.",

    keywords: [
      "hra calculator",
      "house rent allowance calculator",
      "hra exemption calculator",
      "calculate hra exemption",
      "hra tax calculator",
      "section 10 13a calculator",
      "metro vs non metro hra calculator",
      "salary hra exemption calculator",
      "hra deduction calculator",
      "hra calculation formula",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Basic Salary",
      description:
        "Enter your annual basic salary.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter HRA Received",
      description:
        "Enter total HRA received from employer.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Enter Rent Paid",
      description:
        "Enter annual rent paid.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View HRA Exemption",
      description:
        "See HRA exemption and taxable HRA amount.",
      icon: "result",
    },
  ],

  formula: {
    title: "HRA Exemption Formula",

    formula:
      "Minimum of (Actual HRA, Rent Paid - 10% Basic Salary, 50%/40% of Basic Salary)",

    explanation:
      "HRA exemption is the lowest value among actual HRA received, rent paid minus 10% of salary, and 50% (metro) or 40% (non-metro) of basic salary.",

    example: {
      input:
        "Basic Salary: ₹5,00,000, HRA: ₹2,00,000, Rent Paid: ₹2,40,000",

      output:
        "Eligible HRA Exemption: ₹1,90,000",
    },

    useCases: [
      "Income Tax Planning",
      "Salary Planning",
      "Tax Saving",
      "HRA Exemption Calculation",
    ],
  },

  faqs: [
    {
      question:
        "What is HRA?",
      answer:
        "House Rent Allowance (HRA) is a salary component provided by employers to employees living in rented accommodation.",
    },
    {
      question:
        "How is HRA exemption calculated?",
      answer:
        "The exemption is the lowest of actual HRA received, rent paid minus 10% of salary, or 50%/40% of salary depending on city type.",
    },
    {
      question:
        "Who can claim HRA?",
      answer:
        "Salaried employees receiving HRA and paying rent can claim HRA exemption.",
    },
    {
      question:
        "What is a metro city for HRA?",
      answer:
        "Delhi, Mumbai, Kolkata, and Chennai are considered metro cities for HRA calculations.",
    },
  ],
};