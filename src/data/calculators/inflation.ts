import { Calculator } from "@/src/types/calculator";

export const inflationCalculator: Calculator = {
  slug: "inflation-calculator",

  name: "Inflation Calculator",

  description:
    "Calculate the future value of money after inflation and understand how rising prices affect your purchasing power over time. Use our free Inflation Calculator to estimate inflation-adjusted values and plan your finances more effectively.",

  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "Inflation Calculator - Calculate Future Value & Purchasing Power",

    description:
      "Use our free Inflation Calculator to estimate future costs, inflation-adjusted values, purchasing power, and the real value of money over time.",

    keywords: [
      "inflation calculator",
      "future value calculator",
      "inflation rate calculator",
      "purchasing power calculator",
      "inflation adjusted calculator",
      "inflation adjusted value",
      "future cost calculator",
      "price inflation calculator",
      "money value calculator",
      "cost increase calculator",
      "inflation impact calculator",
      "inflation growth calculator",
      "real value of money calculator",
      "inflation percentage calculator",
      "consumer inflation calculator",
      "salary inflation calculator",
      "investment inflation calculator",
      "future purchasing power calculator",
      "inflation forecast calculator",
      "online inflation calculator",
      "free inflation calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Current Amount",
      description:
        "Enter the current value, cost, salary, or amount you want to adjust for inflation.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Inflation Rate",
      description:
        "Provide the expected annual inflation rate percentage.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Select Number of Years",
      description:
        "Choose how many years you want to project into the future.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Inflation-Adjusted Value",
      description:
        "See how inflation affects purchasing power and future costs.",
      icon: "result",
    },
  ],

  formula: {
    title: "Inflation Calculator Formula",

    formula:
      "Future Value = Present Value × (1 + Inflation Rate)^Years",

    explanation:
      "Inflation reduces the purchasing power of money over time. This calculator uses compound inflation to estimate how much a product, service, salary, or investment may cost in the future.",

    example: {
      input:
        "Current Value: ₹100,000 | Inflation Rate: 6% | Years: 10",

      output:
        "Future Value ≈ ₹179,085",
    },

    useCases: [
      "Retirement Planning",
      "Future Expense Planning",
      "Investment Analysis",
      "Salary Planning",
      "Education Cost Estimation",
      "Financial Forecasting",
      "Budget Planning",
      "Wealth Management",
    ],
  },

  faqs: [
    {
      question: "What is an Inflation Calculator?",
      answer:
        "An Inflation Calculator estimates how the value of money changes over time due to inflation and helps calculate future costs or inflation-adjusted values.",
    },

    {
      question: "What is inflation?",
      answer:
        "Inflation is the increase in prices of goods and services over time, which reduces the purchasing power of money.",
    },

    {
      question: "How does inflation affect purchasing power?",
      answer:
        "As inflation rises, the same amount of money buys fewer goods and services than before.",
    },

    {
      question: "Can I use this calculator for future expenses?",
      answer:
        "Yes. The calculator helps estimate future costs for education, retirement, housing, healthcare, and other long-term expenses.",
    },

    {
      question: "What inflation rate should I use?",
      answer:
        "You can use historical inflation rates or your own projected rate based on economic conditions and financial planning goals.",
    },

    {
      question: "Why is inflation important in financial planning?",
      answer:
        "Ignoring inflation can lead to underestimating future expenses and overestimating purchasing power, affecting long-term financial goals.",
    },

    {
      question: "Can investors use an Inflation Calculator?",
      answer:
        "Yes. Investors use inflation calculations to understand real returns and preserve purchasing power over time.",
    },

    {
      question: "Does inflation always reduce money value?",
      answer:
        "Generally yes. Inflation means prices rise over time, causing the same amount of money to have less purchasing power in the future.",
    },
  ],
};