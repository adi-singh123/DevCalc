import { Calculator } from "@/src/types/calculator";

export const discountCalculator: Calculator = {
  slug: "discount-calculator",

  name: "Discount Calculator",

  description:
"Trying to figure out how much you're actually saving on a sale? Our free Discount Calculator instantly works out the discount percentage, savings amount, and final price — so you know exactly what you're paying before you buy.",
  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "Discount Calculator - Calculate Sale Price & Savings Online",

    description:
      "Trying to figure out how much you're actually saving on a sale? Our free Discount Calculator instantly works out the discount percentage, savings amount, and final price — so you know exactly what you're paying before you buy.",
    keywords: [
      "discount calculator",
      "sale price calculator",
      "discount percentage calculator",
      "percent off calculator",
      "calculate discount amount",
      "price reduction calculator",
      "retail discount calculator",
      "discount savings calculator",
      "final price after discount",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Original Price",
      description:
        "Enter the product's original price.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Discount Percentage",
      description:
        "Enter the discount percentage offered.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Calculate Savings",
      description:
        "View savings amount and final price.",
      icon: "result",
    },
  ],

  formula: {
    title: "Discount Formula",

    formula:
      "Discount Amount = Original Price × Discount % ÷ 100",

    explanation:
      "The discount amount is subtracted from the original price to determine the final sale price.",

    example: {
      input:
        "Original Price: ₹1,000, Discount: 20%",

      output:
        "Savings: ₹200, Final Price: ₹800",
    },

    useCases: [
      "Online Shopping",
      "Retail Discounts",
      "Sale Offers",
      "Price Comparison",
    ],
  },

  faqs: [
    {
      question:
        "How do I calculate a discount?",
      answer:
        "Multiply the original price by the discount percentage and divide by 100.",
    },
    {
      question:
        "How is the final price calculated?",
      answer:
        "Final Price = Original Price - Discount Amount.",
    },
    {
      question:
        "Can I calculate sale savings?",
      answer:
        "Yes, the calculator shows both savings and final payable amount.",
    },
    {
      question:
        "Can I use this for shopping offers?",
      answer:
        "Yes, it works for all types of discounts and promotional offers.",
    },
  ],
};