import { Calculator } from "@/src/types/calculator";

export const gstCalculator: Calculator = {
  slug: "gst-calculator",

  name: "GST Calculator",

  description:
    "Calculate GST amount and total price instantly using different GST rates.",

  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "GST Calculator - Calculate GST Online",

    description:
      "Free GST Calculator to calculate GST amount and final price instantly.",

    keywords: [
      "gst calculator",
      "gst calculation",
      "gst amount calculator",
      "india gst calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Amount",
      description:
        "Enter the original amount before GST.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Select GST Rate",
      description:
        "Choose the GST percentage.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Calculate GST",
      description:
        "Calculate GST amount instantly.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View Results",
      description:
        "See GST amount and final total.",
      icon: "result",
    },
  ],

  formula: {
    title: "GST Formula",

    formula:
      "GST Amount = (Amount × GST Rate) ÷ 100",

    explanation:
      "GST is calculated by multiplying the original amount by the GST percentage.",

    example: {
      input:
        "Amount: ₹1000, GST Rate: 18%",

      output:
        "GST = ₹180, Total = ₹1180",
    },

    useCases: [
      "Business invoices",
      "Retail billing",
      "Tax calculations",
      "Purchase planning",
    ],
  },

  faqs: [
    {
      question:
        "How is GST calculated?",
      answer:
        "GST is calculated as a percentage of the original amount.",
    },
    {
      question:
        "Can I calculate GST for different rates?",
      answer:
        "Yes, common rates like 5%, 12%, 18%, and 28% are supported.",
    },
  ],
};