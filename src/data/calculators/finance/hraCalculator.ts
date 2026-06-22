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
  "hra tax calculator",
  "income tax hra calculator",
  "salary hra calculator",
  "hra deduction calculator",
  "hra calculator india",
  "tax saving calculator",
  "house rent calculator",

  // Core HRA Keywords
  "hra exemption calculator india",
  "calculate hra exemption",
  "hra tax exemption calculator",
  "hra benefit calculator",
  "hra amount calculator",
  "hra relief calculator",
  "salary hra exemption calculator",
  "house rent allowance exemption",
  "hra calculator online",
  "hra eligibility calculator",

  // Tax Keywords
  "income tax hra calculator",
  "tax saving hra calculator",
  "hra deduction under income tax",
  "tax exemption calculator",
  "salary tax calculator",
  "income tax deduction calculator",
  "tax benefit calculator",
  "old regime hra calculator",
  "hra tax benefit calculator",
  "tax planning calculator",

  // Salary Keywords
  "salary hra calculator",
  "salary breakup calculator",
  "ctc hra calculator",
  "monthly salary hra calculator",
  "salary tax exemption calculator",
  "basic salary hra calculator",
  "salary structure calculator",
  "employee hra calculator",
  "salary deduction calculator",
  "payroll hra calculator",

  // Rent Keywords
  "house rent calculator",
  "rent exemption calculator",
  "rent paid calculator",
  "rent allowance calculator",
  "monthly rent calculator",
  "house rent tax calculator",
  "rent deduction calculator",
  "rented house calculator",
  "rent tax exemption calculator",
  "annual rent calculator",

  // Income Tax Keywords
  "income tax calculator hra",
  "section 10 13a calculator",
  "income tax exemption calculator",
  "hra under income tax act",
  "tax deduction calculator india",
  "salary tax planning calculator",
  "tax exemption on rent",
  "income tax planning calculator",
  "tax saving tool india",
  "employee tax calculator",

  // HRA Rules Keywords
  "hra calculation formula",
  "hra exemption rules",
  "hra eligibility rules",
  "how to calculate hra",
  "hra exemption formula",
  "hra deduction rules",
  "house rent allowance rules",
  "hra tax rules india",
  "hra calculation method",
  "hra exemption limits",

  // Metro & Non-Metro Keywords
  "metro city hra calculator",
  "non metro hra calculator",
  "hra exemption metro city",
  "hra exemption non metro city",
  "rent exemption metro city",
  "salary hra metro calculator",
  "hra calculator for delhi",
  "hra calculator for mumbai",
  "metro rent calculator",
  "city based hra calculator",

  // Employee Keywords
  "employee hra calculator",
  "private employee hra calculator",
  "government employee hra calculator",
  "working professional tax calculator",
  "office employee tax calculator",
  "salary earner calculator",
  "employee tax saving calculator",
  "professional tax calculator",
  "working individual calculator",
  "hra for salaried employees",

  // Tax Saving Keywords
  "tax saving calculator",
  "income tax saving calculator",
  "salary tax saving calculator",
  "hra tax savings",
  "rent tax benefit calculator",
  "tax deduction planner",
  "annual tax saving calculator",
  "tax reduction calculator",
  "financial planning calculator",
  "tax optimization calculator",

  // Educational Keywords
  "what is hra",
  "how to calculate hra exemption",
  "hra formula",
  "hra exemption example",
  "house rent allowance explained",
  "hra tax benefit explained",
  "income tax hra rules",
  "hra examples",
  "salary hra guide",
  "hra calculation tutorial",

  // India Specific Keywords
  "hra calculator india",
  "income tax hra calculator india",
  "house rent allowance india",
  "rent exemption india",
  "salary tax calculator india",
  "hra exemption calculator india 2026",
  "india tax saving calculator",
  "hra deduction india",
  "section 10 13a calculator india",
  "income tax planning india",

  // Hindi Keywords
  "hra calculator hindi",
  "house rent allowance calculator hindi",
  "hra exemption calculator hindi",
  "hra tax calculator hindi",
  "एचआरए कैलकुलेटर",
  "हाउस रेंट अलाउंस कैलकुलेटर",
  "एचआरए छूट कैलकुलेटर",
  "एचआरए टैक्स कैलकुलेटर",
  "किराया भत्ता कैलकुलेटर",
  "एचआरए कैसे निकाले",
  "एचआरए छूट की गणना",
  "आयकर एचआरए कैलकुलेटर",
  "टैक्स बचत कैलकुलेटर",
  "किराया कर छूट कैलकुलेटर",
  "एचआरए फॉर्मूला",

  // Long Tail Keywords
  "free online hra calculator",
  "best hra exemption calculator india",
  "accurate income tax hra calculator",
  "hra calculator with tax exemption",
  "salary and hra calculator online",
  "house rent allowance calculator with formula",
  "old tax regime hra calculator",
  "tax saving hra calculator india",
  "advanced hra deduction calculator",
  "hra exemption calculator with examples",
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