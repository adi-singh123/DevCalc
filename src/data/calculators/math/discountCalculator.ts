import { Calculator } from "@/src/types/calculator";

export const discountCalculator: Calculator = {
  slug: "discount-calculator",

  name: "Discount Calculator",

  description:
    "Calculate discount amount, final price, and total savings instantly.",

  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "Discount Calculator - Calculate Sale Price & Savings Online",

    description:
      "Calculate discount percentage, savings amount, and final sale price instantly using our free Discount Calculator.",

keywords: [
  "discount calculator",
  "sale price calculator",
  "discount percentage calculator",
  "price discount calculator",
  "shopping discount calculator",
  "discount calculator india",
  "offer calculator",
  "percentage off calculator",
  "sale calculator",
  "discount amount calculator",

  // Core Keywords
  "discount finder",
  "discount estimator",
  "discount tool",
  "discount savings calculator",
  "price reduction calculator",
  "sale discount calculator",
  "discount checker",
  "price cut calculator",
  "discount value calculator",
  "shopping savings calculator",

  // Percentage Keywords
  "percentage discount calculator",
  "percent off calculator",
  "calculate discount percentage",
  "discount percent calculator",
  "percentage reduction calculator",
  "discount rate calculator",
  "price percentage calculator",
  "discount percentage finder",
  "percentage savings calculator",
  "sale percentage calculator",

  // Sale Price Keywords
  "sale price calculator",
  "final price calculator",
  "price after discount calculator",
  "discounted price calculator",
  "sale amount calculator",
  "net price calculator",
  "reduced price calculator",
  "offer price calculator",
  "final cost calculator",
  "price drop calculator",

  // Shopping Keywords
  "shopping discount calculator",
  "online shopping calculator",
  "ecommerce discount calculator",
  "coupon calculator",
  "promo code calculator",
  "shopping savings calculator",
  "retail discount calculator",
  "purchase discount calculator",
  "deal calculator",
  "offer savings calculator",

  // Offer Keywords
  "offer calculator",
  "special offer calculator",
  "buy now save calculator",
  "deal price calculator",
  "promotion calculator",
  "discount deal calculator",
  "offer percentage calculator",
  "sale offer calculator",
  "limited offer calculator",
  "price offer calculator",

  // GST & India Keywords
  "discount calculator india",
  "gst and discount calculator",
  "price after gst and discount",
  "shopping calculator india",
  "offer calculator india",
  "sale calculator india",
  "discount percentage calculator india",
  "gst discount calculator",
  "mrp discount calculator",
  "india sale price calculator",

  // Business & Retail Keywords
  "retail discount calculator",
  "wholesale discount calculator",
  "business discount calculator",
  "pricing calculator",
  "profit and discount calculator",
  "store discount calculator",
  "sales discount calculator",
  "commercial discount calculator",
  "customer discount calculator",
  "pricing discount tool",

  // Savings Keywords
  "money saving calculator",
  "savings calculator discount",
  "discount savings finder",
  "shopping savings tool",
  "calculate savings on sale",
  "sale savings calculator",
  "discount benefit calculator",
  "offer savings finder",
  "price savings calculator",
  "discount value finder",

  // Educational Keywords
  "discount formula calculator",
  "discount formula",
  "how to calculate discount",
  "discount percentage formula",
  "discount examples",
  "discount questions and answers",
  "profit loss and discount calculator",
  "discount mathematics calculator",
  "discount worksheet calculator",
  "discount practice problems",

  // Student & Exam Keywords
  "discount aptitude questions",
  "discount calculator for students",
  "discount percentage aptitude",
  "profit loss discount calculator",
  "ssc discount questions",
  "bank exam discount calculator",
  "math discount calculator",
  "competitive exam discount problems",
  "discount formula examples",
  "discount chapter calculator",

  // Question Keywords
  "how much discount am i getting",
  "how to calculate sale price",
  "how to calculate percentage off",
  "what is discount percentage",
  "how much money will i save",
  "how to find discount amount",
  "how to calculate offer price",
  "what is the final price after discount",
  "discount calculator example",
  "sale price calculation formula",

  // Hindi Keywords
  "discount calculator hindi",
  "sale price calculator hindi",
  "offer calculator hindi",
  "percentage off calculator hindi",
  "discount percentage calculator hindi",
  "डिस्काउंट कैलकुलेटर",
  "छूट कैलकुलेटर",
  "सेल प्राइस कैलकुलेटर",
  "ऑफर कैलकुलेटर",
  "छूट प्रतिशत कैलकुलेटर",
  "डिस्काउंट प्रतिशत कैसे निकालें",
  "छूट की गणना",
  "सेल कीमत कैलकुलेटर",
  "ऑफर प्राइस कैलकुलेटर",
  "छूट राशि कैलकुलेटर",

  // Long Tail Keywords
  "free online discount calculator",
  "best discount percentage calculator",
  "calculate sale price after discount",
  "discount and savings calculator",
  "price after discount calculator online",
  "shopping discount calculator india",
  "offer and discount calculator",
  "accurate discount calculator",
  "discount calculator with gst",
  "advanced sale price calculator",
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