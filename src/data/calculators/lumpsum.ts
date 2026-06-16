import { Calculator } from "@/src/types/calculator";

export const lumpsumCalculator: Calculator = {
  slug: "lumpsum-calculator",

  name: "Lumpsum Calculator",

  description:
    "Calculate the future value of a one-time investment using our free Lumpsum Calculator. Estimate returns, wealth growth, and investment maturity based on expected annual returns and investment duration.",

  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "Lumpsum Calculator - Calculate One-Time Investment Returns",

    description:
      "Use our free Lumpsum Calculator to estimate mutual fund returns, investment growth, maturity value, and wealth creation from a one-time investment.",

    keywords: [
      "lumpsum calculator",
      "lump sum calculator",
      "mutual fund lumpsum calculator",
      "one time investment calculator",
      "investment return calculator",
      "lumpsum return calculator",
      "wealth calculator",
      "investment growth calculator",
      "future value calculator",
      "mutual fund return calculator",
      "online lumpsum calculator",
      "compound growth calculator",
      "investment maturity calculator",
      "equity investment calculator",
      "financial planning calculator",
      "wealth creation calculator",
      "free lumpsum calculator",
      "best lumpsum calculator",
      "investment calculator",
      "long term investment calculator",
      "lumpsum mutual fund calculator",
      "future investment value calculator",
      "money growth calculator",
      "investment projection calculator",
      "portfolio growth calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Investment Amount",
      description:
        "Enter the amount you want to invest as a one-time lumpsum investment.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Expected Return",
      description:
        "Provide the expected annual rate of return on your investment.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Select Investment Duration",
      description:
        "Choose the number of years you plan to keep your investment.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Investment Growth",
      description:
        "See the estimated maturity value, investment gain, and wealth created.",
      icon: "result",
    },
  ],

  formula: {
    title: "Lumpsum Calculator Formula",

    formula:
      "Future Value = Principal × (1 + Rate)^Time",

    explanation:
      "The Lumpsum Calculator uses the compound interest formula to estimate how a one-time investment grows over time. The maturity value depends on the investment amount, annual return rate, and investment period.",

    example: {
      input:
        "Investment: ₹100,000 | Return: 12% | Period: 10 Years",

      output:
        "Future Value ≈ ₹310,585",
    },

    useCases: [
      "Mutual Fund Investments",
      "Long-Term Wealth Creation",
      "Retirement Planning",
      "Goal-Based Investing",
      "Education Planning",
      "Investment Forecasting",
      "Financial Planning",
      "Portfolio Growth Analysis",
    ],
  },

  faqs: [
    {
      question:
        "What is a Lumpsum Calculator?",
      answer:
        "A Lumpsum Calculator estimates the future value of a one-time investment using compound growth over a selected period.",
    },

    {
      question:
        "How does a Lumpsum Calculator work?",
      answer:
        "The calculator uses compound interest calculations based on investment amount, expected annual return, and investment duration.",
    },

    {
      question:
        "What is a lumpsum investment?",
      answer:
        "A lumpsum investment is a one-time investment made at the beginning rather than investing regularly through SIPs.",
    },

    {
      question:
        "Is lumpsum better than SIP?",
      answer:
        "Both have advantages. Lumpsum investments may benefit more during market growth, while SIPs help reduce market timing risk.",
    },

    {
      question:
        "Can I use this calculator for mutual funds?",
      answer:
        "Yes. This calculator is commonly used for mutual fund lumpsum investment planning and return estimation.",
    },

    {
      question:
        "What return rate should I use?",
      answer:
        "You can use expected returns based on historical investment performance or your financial advisor's guidance.",
    },

    {
      question:
        "Does the calculator guarantee returns?",
      answer:
        "No. The results are estimates based on the return rate entered and actual returns may vary.",
    },

    {
      question:
        "Why use a Lumpsum Calculator?",
      answer:
        "It helps investors estimate future wealth, compare investment opportunities, and make informed financial decisions.",
    },
  ],
};