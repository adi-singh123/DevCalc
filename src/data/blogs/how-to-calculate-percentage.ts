import { Blog } from "@/src/types/blog";

export const howToCalculatePercentage: Blog = {
  slug: "how-to-calculate-percentage",

  title: "How to Calculate Percentage",

  seoTitle:
    "How to Calculate Percentage – Formula, Examples, Tricks & Uses (2026)",

  seoDescription:
    "Learn how to calculate percentage step by step with easy formulas and real-life examples. Covers percentage of marks, discount, profit & loss, GST, percentage increase and decrease — all explained simply.",

  description:
    "Master percentage calculation with simple formulas, step-by-step examples, shortcut tricks, and real-life uses in marks, discounts, GST, and finance.",

  category: "Education",

  author: "DevCalc Team",

  publishedDate: "2026-06-15",

  readingTime: "10 min read",

  image: "/blogs/percentage-guide.webp",

  content: [
    {
      heading: "What Is Percentage?",
      paragraphs: [
        "Percentage is a way of expressing a number as a part of 100. The word 'percentage' comes from the Latin 'per centum', which means 'per hundred'. It is written using the symbol %.",
        "For example, 75% means 75 out of every 100. If 75 students out of 100 passed an exam, we say the pass percentage is 75%.",
        "Percentages are used everywhere — in school marks, shopping discounts, bank interest rates, GST, profit and loss, and even in health reports like body fat percentage.",
      ],
    },

    {
      heading: "Percentage Formula",
      paragraphs: [
        "The standard formula to calculate percentage is:",
        "Percentage (%) = (Part ÷ Whole) × 100",
        "Here, 'Part' is the value you want to find the percentage of, and 'Whole' is the total or reference value.",
        "Example: If you scored 40 out of 50 in a test — Percentage = (40 ÷ 50) × 100 = 80%.",
      ],
    },

    {
      heading: "How to Calculate Percentage — Step by Step",
      paragraphs: [
        "Step 1: Identify the Part and the Whole. The 'Part' is the smaller value. The 'Whole' is the total value.",
        "Step 2: Divide the Part by the Whole. This gives a decimal number.",
        "Step 3: Multiply the decimal by 100. The result is the percentage.",
        "Example: A student scores 450 marks out of 500. Percentage = (450 ÷ 500) × 100 = 90%. The student scored 90%.",
        "Another Example: A shop sold 80 items out of 200 in stock. Percentage sold = (80 ÷ 200) × 100 = 40%.",
      ],
    },

    {
      heading: "How to Calculate Percentage of Marks",
      paragraphs: [
        "To calculate your percentage of marks, divide total marks obtained by maximum marks, then multiply by 100.",
        "Formula: Marks Percentage = (Marks Obtained ÷ Total Marks) × 100",
        "Example 1: Rahul scored 360 out of 400 in his Class 10 exams. Percentage = (360 ÷ 400) × 100 = 90%.",
        "Example 2: Priya scored 525 out of 600 in Class 12 boards. Percentage = (525 ÷ 600) × 100 = 87.5%.",
        "Tip: Many boards require a minimum of 33% or 35% to pass. Always check the passing criteria for your exam.",
      ],
    },

    {
      heading: "How to Find a Percentage of a Number",
      paragraphs: [
        "Sometimes you need to find X% of a given number. The formula is:",
        "Value = (Percentage ÷ 100) × Number",
        "Example 1: What is 20% of 500? Value = (20 ÷ 100) × 500 = 100.",
        "Example 2: What is 15% of ₹2,000? Value = (15 ÷ 100) × 2000 = ₹300.",
        "This is commonly used to calculate discounts, GST amounts, and commission.",
      ],
    },

    {
      heading: "Percentage Increase Formula",
      paragraphs: [
        "Percentage increase tells you by how much percent a value has gone up compared to the original value.",
        "Formula: Percentage Increase = ((New Value − Original Value) ÷ Original Value) × 100",
        "Example 1: A salary increased from ₹20,000 to ₹25,000. Increase = ((25000 − 20000) ÷ 20000) × 100 = 25%. The salary increased by 25%.",
        "Example 2: A product's price went from ₹100 to ₹120. Increase = ((120 − 100) ÷ 100) × 100 = 20%.",
        "Use this formula to track price hikes, population growth, revenue growth, or salary appraisals.",
      ],
    },

    {
      heading: "Percentage Decrease Formula",
      paragraphs: [
        "Percentage decrease tells you by how much percent a value has gone down compared to the original value.",
        "Formula: Percentage Decrease = ((Original Value − New Value) ÷ Original Value) × 100",
        "Example 1: A product was priced at ₹1,000 and is now sold for ₹800. Decrease = ((1000 − 800) ÷ 1000) × 100 = 20%.",
        "Example 2: A company's sales dropped from 5,000 units to 3,500 units. Decrease = ((5000 − 3500) ÷ 5000) × 100 = 30%.",
        "This formula is useful in tracking price drops, sales decline, weight loss, or stock market falls.",
      ],
    },

    {
      heading: "Percentage Discount Formula",
      paragraphs: [
        "When a product is on sale, the discount is usually expressed as a percentage of the original price.",
        "Formula: Discount Amount = (Discount % ÷ 100) × Original Price",
        "Sale Price = Original Price − Discount Amount",
        "Example: A shirt costs ₹800 and has a 25% discount. Discount = (25 ÷ 100) × 800 = ₹200. Sale Price = 800 − 200 = ₹600.",
        "You can also work backwards — if the sale price and discount percentage are known, the original price = Sale Price ÷ (1 − Discount%/100).",
      ],
    },

    {
      heading: "Percentage in Profit and Loss",
      paragraphs: [
        "In business and commerce, profit and loss are always expressed as a percentage of the cost price.",
        "Profit % = ((Selling Price − Cost Price) ÷ Cost Price) × 100",
        "Loss % = ((Cost Price − Selling Price) ÷ Cost Price) × 100",
        "Example 1: A shopkeeper buys an item for ₹500 and sells it for ₹600. Profit = ₹100. Profit % = (100 ÷ 500) × 100 = 20%.",
        "Example 2: A phone bought for ₹15,000 is sold for ₹12,000. Loss = ₹3,000. Loss % = (3000 ÷ 15000) × 100 = 20%.",
      ],
    },

    {
      heading: "Percentage in GST Calculation (India)",
      paragraphs: [
        "GST (Goods and Services Tax) in India is applied as a percentage on the base price of goods and services.",
        "Formula: GST Amount = (GST Rate ÷ 100) × Base Price",
        "Total Price = Base Price + GST Amount",
        "Example: A product costs ₹1,000 and has 18% GST. GST = (18 ÷ 100) × 1000 = ₹180. Total price = ₹1,000 + ₹180 = ₹1,180.",
        "Common GST slabs in India are 5%, 12%, 18%, and 28% depending on the type of product or service.",
      ],
    },

    {
      heading: "Shortcut Tricks for Percentage Calculation",
      paragraphs: [
        "Trick 1 — 10% of any number: Simply move the decimal one place to the left. 10% of 450 = 45.",
        "Trick 2 — 5% of any number: Find 10% first, then halve it. 5% of 450 = 45 ÷ 2 = 22.5.",
        "Trick 3 — 25% of any number: Divide the number by 4. 25% of 800 = 800 ÷ 4 = 200.",
        "Trick 4 — 50% of any number: Divide the number by 2. 50% of 640 = 320.",
        "Trick 5 — X% of Y = Y% of X: This is a useful swap trick. 8% of 25 = 25% of 8 = 2. Always pick the easier side to calculate.",
      ],
    },

    {
      heading: "Real Life Uses of Percentage",
      paragraphs: [
        "School & College: Percentage of marks in exams, attendance percentage, and cut-off percentages for college admissions.",
        "Shopping: Discount percentage on products during sales, cashback percentages on payment apps.",
        "Finance & Banking: Interest rates on loans and FDs, EMI calculations, and return on investment (ROI).",
        "Taxes: Income tax slabs, GST rates, TDS deductions — all expressed as percentages.",
        "Health: Body fat percentage, blood sugar levels reported as percentage values, COVID recovery rates.",
        "Business: Profit margin percentage, market share percentage, employee appraisal ratings.",
        "Understanding percentages makes you better at managing money, evaluating offers, and making smarter decisions in daily life.",
      ],
    },
  ],

  faqs: [
    {
      question: "What is the basic percentage formula?",
      answer:
        "The basic percentage formula is: Percentage = (Part ÷ Whole) × 100. For example, if you score 45 out of 50, the percentage is (45 ÷ 50) × 100 = 90%.",
    },
    {
      question: "How do I calculate percentage of marks?",
      answer:
        "Divide the total marks obtained by the maximum marks, then multiply by 100. Formula: Marks % = (Marks Obtained ÷ Total Marks) × 100. Example: 450 out of 500 = 90%.",
    },
    {
      question: "How do I calculate percentage increase?",
      answer:
        "Use the formula: ((New Value − Original Value) ÷ Original Value) × 100. Example: Price goes from ₹200 to ₹250 — increase = ((250 − 200) ÷ 200) × 100 = 25%.",
    },
    {
      question: "How do I calculate percentage decrease?",
      answer:
        "Use the formula: ((Original Value − New Value) ÷ Original Value) × 100. Example: Price drops from ₹500 to ₹400 — decrease = ((500 − 400) ÷ 500) × 100 = 20%.",
    },
    {
      question: "How to find X% of a number?",
      answer:
        "Multiply the number by the percentage and divide by 100. Formula: Value = (X ÷ 100) × Number. Example: 15% of 200 = (15 ÷ 100) × 200 = 30.",
    },
    {
      question: "How to calculate discount percentage?",
      answer:
        "Discount % = ((Original Price − Sale Price) ÷ Original Price) × 100. Example: Original price ₹1,000, sale price ₹750 — Discount = ((1000 − 750) ÷ 1000) × 100 = 25%.",
    },
    {
      question: "How to calculate profit percentage?",
      answer:
        "Profit % = ((Selling Price − Cost Price) ÷ Cost Price) × 100. Example: Cost ₹400, Selling Price ₹500 — Profit % = (100 ÷ 400) × 100 = 25%.",
    },
    {
      question: "What is 10% of any number — quick trick?",
      answer:
        "To find 10% of any number, simply move the decimal one place to the left. Example: 10% of 350 = 35. 10% of 4,800 = 480.",
    },
    {
      question: "Where are percentages used in daily life?",
      answer:
        "Percentages are used in exam marks, shopping discounts, GST and taxes, bank interest rates, profit and loss calculations, investment returns, health metrics, and statistical reports.",
    },
    {
      question: "Is X% of Y equal to Y% of X?",
      answer:
        "Yes! X% of Y always equals Y% of X. For example, 8% of 25 = 25% of 8 = 2. Use this trick to pick whichever calculation is easier.",
    },
  ],
};