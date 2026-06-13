import { Calculator } from "@/src/types/calculator";

export const sipCalculator: Calculator = {
  slug: "sip-calculator",

  name: "SIP Calculator",

  description:
    "Calculate SIP returns, wealth gained, invested amount, and future value instantly.",

  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "SIP Calculator - Calculate SIP Returns & Investment Growth Online",

    description:
      "Calculate SIP returns instantly. Enter monthly investment, expected return rate, and tenure to estimate future value and wealth creation.",

    keywords: [
      "sip calculator",
      "sip calculator india",
      "mutual fund sip calculator",
      "sip return calculator",
      "sip maturity calculator",
      "monthly sip calculator",
      "investment calculator",
      "systematic investment plan calculator",
      "sip growth calculator",
      "future value calculator",
      "sip planner",
      "wealth creation calculator",
      "online sip calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Monthly Investment",
      description:
        "Enter the amount you plan to invest every month.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Expected Return",
      description:
        "Enter the expected annual return percentage.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Enter Investment Period",
      description:
        "Specify the number of years you will stay invested.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View SIP Results",
      description:
        "See invested amount, estimated returns, and maturity value.",
      icon: "result",
    },
  ],

  formula: {
    title: "SIP Formula",

    formula:
      "M = P × (((1 + i)^n − 1) ÷ i) × (1 + i)",

    explanation:
      "SIP maturity value is calculated using monthly investments, expected returns, and investment duration while considering compounding growth.",

    example: {
      input:
        "Monthly SIP: ₹5,000, Return: 12%, Period: 10 Years",

      output:
        "Invested Amount: ₹6,00,000, Maturity Value: ₹11,61,695 (approx.)",
    },

    useCases: [
      "Mutual Fund Planning",
      "Retirement Planning",
      "Child Education Planning",
      "Wealth Creation",
      "Long-Term Investments",
    ],
  },

  faqs: [
    {
      question: "What is a SIP Calculator?",
      answer:
        "A SIP Calculator estimates future investment value, total investment, and wealth gained through systematic monthly investments.",
    },
    {
      question: "How is SIP return calculated?",
      answer:
        "SIP returns are calculated using a future value formula that considers monthly contributions, expected returns, and investment duration.",
    },
    {
      question: "Can SIP guarantee returns?",
      answer:
        "No. SIP investments are market-linked and returns are not guaranteed.",
    },
    {
      question: "Is SIP better than a Fixed Deposit?",
      answer:
        "SIPs have the potential to generate higher long-term returns, while Fixed Deposits offer more predictable returns with lower risk.",
    },
    {
      question: "Can I withdraw SIP anytime?",
      answer:
        "Most SIP investments can be redeemed anytime, subject to scheme-specific exit loads and terms.",
    },
  ],
};