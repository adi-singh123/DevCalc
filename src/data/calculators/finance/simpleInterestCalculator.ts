import { Calculator } from "@/src/types/calculator";

export const simpleInterestCalculator: Calculator = {
  slug: "simple-interest-calculator",

  name: "Simple Interest Calculator",

  description:
    "Calculate simple interest, interest earned, and total maturity amount instantly.",

  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "Simple Interest Calculator - Calculate SI Online",

description:
  "Opening an SSY account for your daughter? Calculate exactly how much it will grow — total investment, interest earned, and final maturity amount — using the latest government interest rate.",
    keywords: [
      "simple interest calculator",
      "si calculator",
      "interest calculator",
      "simple interest formula",
      "loan interest calculator",
      "bank interest calculator",
      "simple interest calculator india",
      "interest amount calculator",
      "financial calculator",
      "simple interest online calculator",
      "calculate simple interest",
      "simple interest rate calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Principal Amount",
      description:
        "Enter the amount of money invested or borrowed.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Interest Rate",
      description:
        "Enter the annual interest rate percentage.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Enter Time Period",
      description:
        "Specify the duration in years.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View Results",
      description:
        "See interest earned and total maturity amount.",
      icon: "result",
    },
  ],

  formula: {
    title: "Simple Interest Formula",

    formula:
      "SI = (P × R × T) ÷ 100",

    explanation:
      "Simple Interest is calculated on the original principal amount for the entire investment or loan duration.",

    example: {
      input:
        "Principal: ₹1,00,000, Rate: 8%, Time: 5 Years",

      output:
        "Simple Interest = ₹40,000, Total Amount = ₹1,40,000",
    },

    useCases: [
      "Loan Interest Calculation",
      "Savings Interest Estimation",
      "Educational Purposes",
      "Financial Planning",
      "Investment Analysis",
    ],
  },

  faqs: [
    {
      question:
        "What is Simple Interest?",
      answer:
        "Simple Interest is interest calculated only on the original principal amount throughout the investment or loan period.",
    },
    {
      question:
        "How is Simple Interest calculated?",
      answer:
        "Simple Interest is calculated using the formula SI = (Principal × Rate × Time) ÷ 100.",
    },
    {
      question:
        "What is the difference between Simple Interest and Compound Interest?",
      answer:
        "Simple Interest is calculated only on the principal amount, while Compound Interest is calculated on both principal and accumulated interest.",
    },
    {
      question:
        "Where is Simple Interest commonly used?",
      answer:
        "Simple Interest is commonly used for short-term loans, educational examples, and basic financial calculations.",
    },
    {
      question:
        "Can this calculator be used for loans?",
      answer:
        "Yes, it can estimate interest payable on loans that use simple interest calculations.",
    },
  ],
};