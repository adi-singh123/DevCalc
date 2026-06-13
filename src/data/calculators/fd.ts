import { Calculator } from "@/src/types/calculator";

export const fdCalculator: Calculator = {
  slug: "fd-calculator",

  name: "FD Calculator",

  description:
    "Calculate Fixed Deposit maturity amount, interest earned, and total returns instantly.",

  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "FD Calculator - Calculate Fixed Deposit Returns Online",

    description:
      "Use our free FD Calculator to calculate maturity amount, interest earned, and fixed deposit returns instantly.",

    keywords: [
      "fd calculator",
      "fixed deposit calculator",
      "fd interest calculator",
      "bank fd calculator",
      "fd maturity calculator",
      "fixed deposit returns calculator",
      "online fd calculator",
      "fd calculator india",
      "fd return calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Deposit Amount",
      description:
        "Enter the amount you want to invest.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Interest Rate",
      description:
        "Enter the annual interest rate.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Enter Investment Period",
      description:
        "Specify the FD tenure in years.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View FD Returns",
      description:
        "See maturity amount and interest earned.",
      icon: "result",
    },
  ],

  formula: {
    title: "FD Formula",

    formula:
      "A = P × (1 + r/n)^(n×t)",

    explanation:
      "Fixed Deposit returns are calculated using compound interest based on deposit amount, interest rate, tenure, and compounding frequency.",

    example: {
      input:
        "₹1,00,000 invested at 7% for 5 years",

      output:
        "Maturity Amount ≈ ₹1,40,255",
    },

    useCases: [
      "Fixed Deposit Planning",
      "Retirement Savings",
      "Safe Investments",
      "Interest Calculation",
    ],
  },

  faqs: [
    {
      question:
        "What is an FD Calculator?",
      answer:
        "An FD Calculator helps estimate maturity value and interest earned on a fixed deposit.",
    },
    {
      question:
        "How is FD interest calculated?",
      answer:
        "FD interest is usually calculated using compound interest.",
    },
    {
      question:
        "What affects FD returns?",
      answer:
        "Deposit amount, interest rate, tenure, and compounding frequency affect returns.",
    },
    {
      question:
        "Is FD safe?",
      answer:
        "FDs are generally considered one of the safest investment options.",
    },
  ],
};