import { Calculator } from "@/src/types/calculator";

export const swpCalculator: Calculator = {
  slug: "swp-calculator",

  name: "SWP Calculator",

  description:
    "Calculate monthly withdrawals, remaining corpus, and total withdrawals using our free SWP Calculator. Plan retirement income and systematic withdrawals from mutual fund investments.",

  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "SWP Calculator - Systematic Withdrawal Plan Calculator",

    description:
      "Use our free SWP Calculator to estimate monthly withdrawals, remaining investment value, and retirement income from mutual funds and investments.",

    keywords: [
      "swp calculator",
      "systematic withdrawal plan calculator",
      "swp mutual fund calculator",
      "monthly withdrawal calculator",
      "retirement withdrawal calculator",
      "swp return calculator",
      "mutual fund withdrawal calculator",
      "swp planner",
      "systematic withdrawal calculator",
      "retirement income calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Investment Corpus",
      description:
        "Provide the total amount invested.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Withdrawal Amount",
      description:
        "Specify the amount you want to withdraw every month.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Enter Expected Return",
      description:
        "Provide the expected annual return rate.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View SWP Results",
      description:
        "See total withdrawals and remaining corpus value.",
      icon: "result",
    },
  ],

  formula: {
    title: "SWP Calculator Formula",

    formula:
      "Remaining Corpus = Investment Growth - Monthly Withdrawals",

    explanation:
      "An SWP allows investors to withdraw a fixed amount at regular intervals while the remaining corpus continues to earn returns.",

    example: {
      input:
        "Corpus ₹10,00,000 | Withdrawal ₹10,000/month | Return 10% | 10 Years",

      output:
        "Remaining corpus and total withdrawals calculated",
    },

    useCases: [
      "Retirement Planning",
      "Monthly Income Planning",
      "Mutual Fund Withdrawals",
      "Passive Income Planning",
      "Financial Independence Planning",
      "Investment Management",
    ],
  },

  faqs: [
    {
      question:
        "What is SWP?",
      answer:
        "SWP stands for Systematic Withdrawal Plan, allowing investors to withdraw a fixed amount from investments at regular intervals.",
    },

    {
      question:
        "How does an SWP Calculator work?",
      answer:
        "The calculator estimates withdrawals and remaining investment value based on corpus amount, withdrawal amount, return rate, and duration.",
    },

    {
      question:
        "Is SWP good for retirement?",
      answer:
        "Yes. SWP is commonly used to generate regular retirement income while keeping the remaining corpus invested.",
    },

    {
      question:
        "Can I use SWP with mutual funds?",
      answer:
        "Yes. SWP is most commonly associated with mutual fund investments.",
    },

    {
      question:
        "What happens if withdrawals exceed returns?",
      answer:
        "The investment corpus will gradually decrease over time.",
    },

    {
      question:
        "Why use an SWP Calculator?",
      answer:
        "It helps investors plan sustainable withdrawals and manage long-term income needs.",
    },
  ],
};