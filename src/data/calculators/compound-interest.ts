import { Calculator } from "@/src/types/calculator";

export const compoundInterestCalculator: Calculator = {
  slug: "compound-interest-calculator",

  name: "Compound Interest Calculator",

  description:
    "Calculate compound interest, maturity amount, investment growth, and total interest earned instantly using annual, monthly, quarterly, or daily compounding.",

  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "Compound Interest Calculator - Calculate CI Online",

    description:
      "Free Compound Interest Calculator to calculate maturity amount, future value, investment growth, and total interest earned using compound interest formulas.",

    keywords: [
      "compound interest calculator",
      "ci calculator",
      "compound interest formula",
      "calculate compound interest",
      "investment calculator",
      "future value calculator",
      "compound return calculator",
      "interest calculator",
      "compound growth calculator",
      "compound interest online",
      "monthly compound interest calculator",
      "annual compound interest calculator",
      "quarterly compound interest calculator",
      "compound interest rate calculator",
      "investment growth calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Principal Amount",
      description:
        "Enter the initial amount invested or deposited.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Interest Rate",
      description:
        "Provide the annual interest rate percentage.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Enter Time Period",
      description:
        "Enter the investment duration in years.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View Results",
      description:
        "Get maturity amount, compound interest, and investment growth instantly.",
      icon: "result",
    },
  ],

  formula: {
    title: "Compound Interest Formula",

    formula:
      "A = P(1 + r/n)^(nt)",

    explanation:
      "Compound interest is calculated on both the principal amount and the accumulated interest from previous periods. It allows investments to grow faster compared to simple interest.",

    example: {
      input:
        "Principal: ₹10,000, Rate: 10%, Time: 2 Years",

      output:
        "A = 10000(1 + 0.10/1)^(1×2) = ₹12,100",
    },

    useCases: [
      "Investment Planning",
      "Fixed Deposits",
      "Mutual Funds",
      "Savings Accounts",
      "Retirement Planning",
      "Wealth Growth Analysis",
    ],
  },
  faqs: [
    {
      question: "What is compound interest?",
      answer:
        "Compound interest is interest earned on both the principal amount and previously accumulated interest.",
    },

    {
      question:
        "What is the formula for compound interest?",
      answer:
        "A = P(1 + r/n)^(nt), where P is principal, r is annual interest rate, n is compounding frequency, and t is time in years.",
    },

    {
      question:
        "Why is compound interest important?",
      answer:
        "Compound interest helps investments grow faster because earnings are continuously reinvested.",
    },

    {
      question:
        "What is the difference between simple and compound interest?",
      answer:
        "Simple interest is calculated only on principal, while compound interest is calculated on principal plus accumulated interest.",
    },

    {
      question:
        "Can I use this calculator for fixed deposits and investments?",
      answer:
        "Yes. This calculator can be used for fixed deposits, savings accounts, investments, and retirement planning.",
    },
  ],
};