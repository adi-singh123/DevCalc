import { Calculator } from "@/src/types/calculator";

export const retirementCalculator: Calculator = {
  slug: "retirement-calculator",

  name: "Retirement Calculator",

  description:
    "Calculate the retirement corpus you may need to maintain your lifestyle after retirement. Estimate future expenses, inflation-adjusted costs, retirement savings, and monthly retirement income using our free Retirement Calculator.",

  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "Retirement Calculator - Calculate Retirement Corpus & Savings",

    description:
      "Use our Retirement Calculator to estimate retirement corpus, future expenses, inflation-adjusted retirement needs, monthly income, and savings required for financial independence.",

    keywords: [
      "retirement calculator",
      "retirement planning calculator",
      "retirement corpus calculator",
      "retirement savings calculator",
      "retirement income calculator",
      "retirement fund calculator",
      "future retirement calculator",
      "retirement investment calculator",
      "retirement wealth calculator",
      "retirement expense calculator",
      "financial independence calculator",
      "retirement goal calculator",
      "retirement amount calculator",
      "retirement corpus planner",
      "online retirement calculator",
      "retirement estimator",
      "early retirement calculator",
      "fire calculator",
      "retirement pension calculator",
      "free retirement calculator",
      "best retirement calculator",
      "retirement calculator india",
      "retirement planning tool",
      "future savings calculator",
      "retirement finance calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Current Age",
      description:
        "Provide your current age.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Retirement Age",
      description:
        "Choose the age at which you plan to retire.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Enter Monthly Expenses",
      description:
        "Provide your current monthly living expenses.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "Estimate Retirement Corpus",
      description:
        "View inflation-adjusted expenses and the retirement corpus required.",
      icon: "result",
    },
  ],

  formula: {
    title: "Retirement Calculator Formula",

    formula:
      "Future Expenses = Current Expenses × (1 + Inflation Rate)^Years",

    explanation:
      "The Retirement Calculator estimates future living expenses by adjusting current expenses for inflation. It then estimates the retirement corpus required to sustain those expenses after retirement.",

    example: {
      input:
        "Age: 30 | Retirement Age: 60 | Monthly Expenses: ₹50,000 | Inflation: 6%",

      output:
        "Estimated retirement corpus required based on future expenses",
    },

    useCases: [
      "Retirement Planning",
      "Financial Independence Planning",
      "Early Retirement Planning",
      "Wealth Creation Goals",
      "Monthly Income Planning",
      "Pension Planning",
      "Long-Term Financial Planning",
      "Family Financial Security",
    ],
  },

  faqs: [
    {
      question:
        "What is a Retirement Calculator?",
      answer:
        "A Retirement Calculator estimates the amount of money you may need after retirement based on expenses, inflation, retirement age, and expected lifespan.",
    },

    {
      question:
        "Why is inflation important in retirement planning?",
      answer:
        "Inflation increases living costs over time. Retirement planning should account for future expenses rather than current expenses.",
    },

    {
      question:
        "What is retirement corpus?",
      answer:
        "Retirement corpus is the total amount of savings and investments required to support your lifestyle after retirement.",
    },

    {
      question:
        "Can I use this calculator for early retirement planning?",
      answer:
        "Yes. The calculator helps estimate retirement needs regardless of retirement age.",
    },

    {
      question:
        "How much retirement corpus do I need?",
      answer:
        "The required corpus depends on lifestyle, inflation, retirement age, expected returns, and post-retirement income needs.",
    },

    {
      question:
        "Can this calculator help with FIRE planning?",
      answer:
        "Yes. It can assist in estimating the savings needed for Financial Independence and Early Retirement (FIRE).",
    },

    {
      question:
        "Why should I use a Retirement Calculator?",
      answer:
        "It helps estimate future expenses, retirement goals, savings targets, and financial independence requirements.",
    },
  ],
};