import { Calculator } from "@/src/types/calculator";

export const cagrCalculator: Calculator = {
  slug: "cagr-calculator",

  name: "CAGR Calculator",

  description:
    "Calculate Compound Annual Growth Rate (CAGR) to measure the average annual growth of an investment over a specified period.",

  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "CAGR Calculator - Calculate Compound Annual Growth Rate Online",

    description:
      "Free online CAGR Calculator. Calculate compound annual growth rate, investment growth, annual returns, profit amount, and absolute returns instantly.",

    keywords: [
      "cagr calculator",
      "compound annual growth rate calculator",
      "investment return calculator",
      "annual growth rate calculator",
      "stock return calculator",
      "mutual fund cagr calculator",
      "cagr formula",
      "investment growth calculator",
      "financial calculator",
      "online cagr calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Beginning Value",
      description:
        "Provide the initial investment amount.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Ending Value",
      description:
        "Enter the final investment value.",
      icon: "result",
    },
    {
      step: 3,
      title: "Enter Investment Period",
      description:
        "Specify the number of years the investment was held.",
      icon: "calendar",
    },
    {
      step: 4,
      title: "View CAGR Results",
      description:
        "See CAGR, absolute return, and profit instantly.",
      icon: "clock",
    },
  ],

  formula: {
    title: "CAGR Formula",

    formula:
      "CAGR = ((Ending Value ÷ Beginning Value)^(1 ÷ Years) − 1) × 100",

    explanation:
      "Compound Annual Growth Rate (CAGR) represents the average annual growth rate of an investment over a specific period, assuming profits are reinvested each year.",

    example: {
      input:
        "Beginning Value: ₹100,000, Ending Value: ₹200,000, Years: 5",

      output:
        "CAGR = 14.87%, Profit = ₹100,000, Absolute Return = 100%",
    },

    useCases: [
      "Stock investment analysis",
      "Mutual fund performance evaluation",
      "Business revenue growth analysis",
      "Portfolio performance tracking",
      "Financial planning",
    ],
  },

  faqs: [
    {
      question: "What is CAGR?",
      answer:
        "CAGR (Compound Annual Growth Rate) measures the average annual growth rate of an investment over a period of time.",
    },
    {
      question: "Why is CAGR important?",
      answer:
        "CAGR helps compare investment performance across different assets by standardizing growth into an annual rate.",
    },
    {
      question: "How is CAGR different from absolute return?",
      answer:
        "Absolute return measures total growth, while CAGR shows the annualized growth rate over multiple years.",
    },
    {
      question: "Can CAGR be negative?",
      answer:
        "Yes. If the ending value is lower than the beginning value, CAGR will be negative.",
    },
    {
      question: "Is CAGR suitable for mutual funds and stocks?",
      answer:
        "Yes. CAGR is widely used to evaluate long-term investment performance in stocks, mutual funds, ETFs, and businesses.",
    },
  ],
};