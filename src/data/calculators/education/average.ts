import { Calculator } from "@/src/types/calculator";

export const averageCalculator: Calculator = {
  slug: "average-calculator",

  name: "Average Calculator",

  description:
"Need to find the average of a list of numbers? This free calculator instantly works out the mean, total, count, minimum, and maximum values — and shows you the full step-by-step calculation so you understand exactly how the result was reached.",
  category: "Education",

  isPopular: true,

  seo: {
    title:
      "Average Calculator - Calculate Mean Online",

    description:
"Need to find the average of a list of numbers? This free calculator instantly works out the mean, total, count, minimum, and maximum values — and shows you the full step-by-step calculation so you understand exactly how the result was reached.",
    keywords: [
      "average calculator",
      "mean calculator",
      "calculate average",
      "average marks calculator",
      "average score calculator",
      "average percentage calculator",
      "student average calculator",
      "grade average calculator",
      "arithmetic mean calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Numbers",
      description:
        "Enter the numbers separated by commas or spaces.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Calculate Average",
      description:
        "The calculator adds all values and divides the total by the number of values.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "View Results",
      description:
        "See the average, sum, count, minimum value, and maximum value instantly.",
      icon: "result",
    },
  ],

  formula: {
    title: "Average Formula",

    formula:
      "Average = Sum of Values ÷ Number of Values",

    explanation:
      "The average, also known as the arithmetic mean, is calculated by adding all values together and dividing the total by the number of values. It is one of the most commonly used statistical measures.",

    example: {
      input:
        "Values: 10, 20, 30, 40",

      output:
        "Average = (10 + 20 + 30 + 40) ÷ 4 = 25",
    },

    useCases: [
      "Student Marks",
      "Grade Calculations",
      "Business Reports",
      "Data Analysis",
      "Performance Tracking",
      "Statistical Calculations",
    ],
  },

  faqs: [
    {
      question: "What is an average?",
      answer:
        "An average, also known as the arithmetic mean, is the sum of all values divided by the total number of values.",
    },

    {
      question:
        "How do you calculate the average?",
      answer:
        "Add all values together and divide the total by the number of values.",
    },

    {
      question:
        "What is the formula for average?",
      answer:
        "Average = Sum of Values ÷ Number of Values.",
    },

    {
      question:
        "Can I calculate average marks using this calculator?",
      answer:
        "Yes. You can calculate the average of exam marks, grades, scores, and other educational data.",
    },

    {
      question:
        "What is the difference between mean and average?",
      answer:
        "In most cases, the terms mean and average refer to the same arithmetic calculation.",
    },

    {
      question:
        "Can I calculate averages for decimal numbers?",
      answer:
        "Yes. The calculator supports both whole numbers and decimal values.",
    },
  ],
  seoContent: `
    <h2>How to calculate an arithmetic average</h2>
    <p>Enter numbers separated by commas, spaces, or line breaks. The calculator adds every valid number and divides the sum by the count. It also shows the sum, number of values, minimum, and maximum so you can check the dataset.</p>
    <h2>Average formula and example</h2>
    <p>Arithmetic mean = sum of values ÷ number of values. For 12, 15, 18, and 25, the sum is 70 and the count is 4, so the average is 70 ÷ 4 = 17.5.</p>
    <h2>When the average can mislead</h2>
    <p>A very high or low outlier can pull the arithmetic mean away from a typical value. For strongly skewed data such as house prices or response times, compare the mean with the median. This tool calculates the unweighted arithmetic mean; if different scores carry different percentages, use a weighted-average or grade calculator instead.</p>
    <h2>Input tips</h2>
    <ul><li>Decimals and negative numbers are accepted.</li><li>Do not include units or currency symbols in the input.</li><li>Review the displayed count to confirm that every intended value was recognised.</li></ul>
  `,
};
