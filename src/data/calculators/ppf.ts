import { Calculator } from "@/src/types/calculator";

export const ppfCalculator: Calculator = {
  slug: "ppf-calculator",

  name: "PPF Calculator",

  description:
    "Calculate your Public Provident Fund (PPF) maturity amount, total investment, and estimated interest earnings. Use this free PPF Calculator to plan long-term savings, tax-free returns, and retirement goals accurately.",

  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "PPF Calculator - Calculate PPF Interest & Maturity Amount Online",

    description:
      "Use our free PPF Calculator to calculate Public Provident Fund maturity value, interest earned, and total investment. Plan your tax-saving and long-term financial goals with accurate PPF calculations.",

    keywords: [
      "ppf calculator",
      "public provident fund calculator",
      "ppf interest calculator",
      "ppf maturity calculator",
      "ppf return calculator",
      "ppf investment calculator",
      "ppf scheme calculator",
      "ppf account calculator",
      "ppf amount calculator",
      "ppf yearly calculator",
      "ppf monthly calculator",
      "ppf maturity value calculator",
      "ppf tax saving calculator",
      "ppf compound interest calculator",
      "ppf savings calculator",
      "online ppf calculator",
      "ppf growth calculator",
      "ppf earnings calculator",
      "retirement planning calculator",
      "long term investment calculator",
      "government savings scheme calculator",
      "ppf interest rate calculator",
      "15 year ppf calculator",
      "india ppf calculator",
      "best ppf calculator",
      "free ppf calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Annual Investment",
      description:
        "Enter the amount you plan to invest in your PPF account every year.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Select Interest Rate",
      description:
        "Enter the current PPF interest rate or use the default government-notified rate.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Choose Investment Period",
      description:
        "Select the number of years you want to keep your investment in the PPF account.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View PPF Maturity Amount",
      description:
        "Instantly see your total investment, interest earned, and estimated maturity value.",
      icon: "result",
    },
  ],

  formula: {
    title: "PPF Calculator Formula",

    formula:
      "Maturity Value = Annual Contributions + Compound Interest Earned",

    explanation:
      "The Public Provident Fund (PPF) uses annual compounding. The maturity value depends on your yearly investment amount, applicable interest rate, and investment duration. The calculator estimates how your money grows over time through compound interest while helping you plan long-term wealth creation and tax-saving investments.",

    example: {
      input:
        "Annual Investment: ₹1,50,000 | Interest Rate: 7.1% | Period: 15 Years",

      output:
        "Estimated Maturity Amount: ₹40+ Lakhs (Approximate)",
    },

    useCases: [
      "Retirement Planning",
      "Tax Saving Investments",
      "Long-Term Wealth Creation",
      "Government Savings Scheme Planning",
      "Future Financial Goal Planning",
      "Risk-Free Investment Analysis",
      "PPF Account Growth Estimation",
      "Family Financial Planning",
    ],
  },

  faqs: [
    {
      question: "What is a PPF Calculator?",
      answer:
        "A PPF Calculator helps estimate the maturity amount, interest earned, and total investment value of a Public Provident Fund account based on your annual contributions and interest rate.",
    },

    {
      question: "What is PPF?",
      answer:
        "Public Provident Fund (PPF) is a long-term government-backed savings scheme in India that offers tax benefits, guaranteed returns, and compound interest growth.",
    },

    {
      question: "How does the PPF Calculator work?",
      answer:
        "The calculator uses your yearly investment amount, interest rate, and investment period to estimate the future maturity value of your PPF account.",
    },

    {
      question: "What is the current PPF interest rate?",
      answer:
        "The Government of India reviews and announces PPF interest rates periodically. The applicable rate may change over time.",
    },

    {
      question: "What is the maximum investment allowed in PPF?",
      answer:
        "Currently, an individual can invest up to ₹1.5 lakh per financial year in a PPF account.",
    },

    {
      question: "Is PPF a tax-free investment?",
      answer:
        "Yes. PPF offers EEE (Exempt-Exempt-Exempt) tax benefits, meaning contributions, interest earned, and maturity proceeds are generally tax-free under applicable laws.",
    },

    {
      question: "What is the maturity period of a PPF account?",
      answer:
        "A standard PPF account has a maturity period of 15 years, which can be extended in blocks of 5 years after maturity.",
    },

    {
      question: "Can I withdraw money before maturity?",
      answer:
        "Partial withdrawals are allowed after specific conditions are met, subject to government rules and regulations.",
    },

    {
      question: "Why should I use a PPF Calculator?",
      answer:
        "A PPF Calculator helps you understand future returns, compare investment strategies, estimate wealth creation, and make informed financial planning decisions.",
    },

    {
      question: "Is PPF suitable for retirement planning?",
      answer:
        "Yes. PPF is considered one of the most popular long-term savings options for retirement planning because of its safety, tax benefits, and compound interest growth.",
    },
  ],
};