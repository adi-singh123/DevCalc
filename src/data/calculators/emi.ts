import { Calculator } from "@/src/types/calculator";

export const emiCalculator: Calculator = {
  slug: "emi-calculator",

  name: "EMI Calculator",

  description:
    "Calculate monthly EMI, total interest payable, and total loan repayment amount instantly.",

  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "EMI Calculator India - Calculate Loan EMI Online",

    description:
      "Calculate loan EMI instantly. Enter loan amount, interest rate, and tenure to get monthly EMI, total interest payable, and total repayment amount.",

    keywords: [
      "emi calculator",
      "loan emi calculator",
      "emi calculator india",
      "monthly emi calculator",
      "home loan emi calculator",
      "personal loan emi calculator",
      "car loan emi calculator",
      "loan repayment calculator",
      "emi calculation",
      "bank loan emi calculator",
      "finance calculator",
      "emi calculator 2026",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Loan Amount",
      description:
        "Provide the total loan amount you wish to borrow.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Interest Rate",
      description:
        "Enter the annual interest rate offered by the lender.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Select Loan Tenure",
      description:
        "Choose the loan duration in years.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View EMI Results",
      description:
        "Get monthly EMI, total interest, and total repayment amount.",
      icon: "result",
    },
  ],

  formula: {
    title: "EMI Formula",

    formula:
      "EMI = P × R × (1 + R)^N / ((1 + R)^N − 1)",

    explanation:
      "EMI (Equated Monthly Installment) is calculated using the principal loan amount, monthly interest rate, and number of monthly installments.",

    example: {
      input:
        "Loan Amount: ₹10,00,000, Interest Rate: 8%, Tenure: 20 Years",

      output:
        "Monthly EMI ≈ ₹8,364",
    },

    useCases: [
      "Home Loans",
      "Car Loans",
      "Personal Loans",
      "Education Loans",
      "Business Loans",
    ],
  },

  faqs: [
    {
      question: "How is EMI calculated?",
      answer:
        "EMI is calculated using the loan amount, interest rate, and loan tenure through a standard financial formula.",
    },
    {
      question: "Does this calculator work for home loans?",
      answer:
        "Yes. It can be used for home loans, personal loans, car loans, education loans, and other installment-based loans.",
    },
    {
      question: "What affects my EMI amount?",
      answer:
        "Your EMI depends on the loan amount, interest rate, and repayment tenure.",
    },
    {
      question: "Can I reduce my EMI?",
      answer:
        "Yes. Increasing the tenure, making a larger down payment, or getting a lower interest rate can reduce your EMI.",
    },
    {
      question: "Is the EMI fixed every month?",
      answer:
        "For most fixed-rate loans, the EMI remains constant throughout the loan tenure.",
    },
  ],
};