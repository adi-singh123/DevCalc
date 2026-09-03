import { Calculator } from "@/src/types/calculator";

export const simpleInterestCalculator: Calculator = {
  slug: "simple-interest-calculator",

  name: "Simple Interest Calculator",

  description:
    "Calculate simple interest, interest earned, and total maturity amount instantly.",

  category: "Finance",

  isPopular: true,

  editorialIntro:
    "Unlike compound interest where gains accumulate on previously earned returns, Simple Interest calculates linear accrual exclusively on the original initial principal ($SI = (P \\times R \\times T) / 100$). It is standard for short-term promissory notes, auto-debit penalty calculations, and informal lending agreements.",

  benchmarkContext: {
    title: "Simple vs. Compound Growth Distortions",
    badge: "Financial Mathematics Standard",
    stat: "Linear Growth vs Exponential Compounding",
    description:
      "Over a 20-year horizon on a ₹10 Lakh principal at 10% per annum, Simple Interest yields ₹20 Lakhs in total interest (₹30 Lakhs total), whereas Compound Interest generates ₹57.27 Lakhs in interest (₹67.27 Lakhs total) — demonstrating a ₹37.27 Lakh compounding advantage.",
    source: "Applied Actuarial & Commercial Banking Mathematics",
    lastUpdated: "January 2026",
  },

  seo: {
    title:
      "Simple Interest Calculator - Calculate SI Online",

    description:
      "Enter a principal amount, annual interest rate, and time period to instantly calculate the simple interest earned and total maturity value. Useful for short-term loans, FDs, and basic financial planning.",
    keywords: [
      "simple interest calculator",
      "si calculator",
      "interest calculator",
      "simple interest formula",
      "loan interest calculator",
      "bank interest calculator",
      "simple interest calculator india",
      "interest amount calculator",
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