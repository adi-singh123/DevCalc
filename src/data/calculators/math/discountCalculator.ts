import { Calculator } from "@/src/types/calculator";

export const discountCalculator: Calculator = {
  slug: "discount-calculator",

  name: "Discount Calculator",

  description:
    "Calculate sale prices, net savings, and successive stacked discounts (e.g. 50% + 20% off) instantly. Determine true discount percentages from MRP to checkout price.",

  category: "Finance",

  isPopular: true,

  editorialIntro:
    "Retail promotional sales frequently employ 'Double Discount' phrasing (such as 'Flat 40% Off + Extra 20% Off'). Because consecutive discounts compound multiplicatively rather than additively, 40% + 20% yields a net 52% reduction, not 60%.",

  benchmarkContext: {
    title: "Retail Successive Discount Multiplier Rules",
    badge: "Consumer Pricing Math",
    stat: "50% + 20% Off = 60% Net Discount",
    description:
      "Successive discounts apply to the diminishing balance: $Net \\, Price = MRP \\times (1 - d_1) \\times (1 - d_2)$. On a ₹1,000 item, '50% + 20%' yields ₹400 final price (saving ₹600 or 60%), never 70%.",
    source: "Applied Retail Commercial Economics",
    lastUpdated: "January 2026",
  },

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
      title: "Input Listed MRP / Price",
      description: "Enter the pre-discount sticker price (e.g., ₹2,499).",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Discount Percentage",
      description: "Specify the promotional markdown rate (%) or cash off amount.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "View Net Price & Savings",
      description: "Instantly see the exact money saved and your final payable checkout price.",
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