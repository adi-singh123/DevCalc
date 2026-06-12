import { Calculator } from "@/src/types/calculator";

export const ageCalculator: Calculator = {
  slug: "age-calculator",

  name: "Age Calculator",

  description:
    "Calculate your exact age in years, months, weeks, days, hours, minutes, and seconds.",

  category: "Utility",

  isPopular: true,

  seo: {
    title: "Age Calculator - Calculate Exact Age Online",

    description:
      "Free online Age Calculator. Calculate your exact age in years, months, weeks, days, hours, minutes, and seconds.",

    keywords: [
      "age calculator",
      "calculate age online",
      "date of birth calculator",
      "exact age calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Your Date of Birth",
      description:
        "Select your birth date using the date picker.",
      icon: "calendar",
    },
    {
      step: 2,
      title: "Choose Current Date",
      description:
        "Use today's date or select any custom date.",
      icon: "clock",
    },
    {
      step: 3,
      title: "Calculate Age",
      description:
        "Click the Calculate button to determine your exact age.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View Results",
      description:
        "See your age in years, months, weeks, days, hours, minutes, and seconds.",
      icon: "result",
    },
  ],

  formula: {
    title: "Age Calculation Formula",

    formula:
      "Age = Current Date − Date of Birth",

    explanation:
      "The age calculator calculates the exact difference between your birth date and the selected current date.",

    example: {
      input:
        "Date of Birth: 10 January 2000, Current Date: 10 January 2025",

      output:
        "25 Years, 0 Months, 0 Days",
    },

    useCases: [
      "School admissions",
      "Government forms",
      "Job applications",
      "Retirement planning",
    ],
  },

  faqs: [
    {
      question:
        "How does an age calculator work?",
      answer:
        "It calculates the difference between your date of birth and the selected current date.",
    },
    {
      question:
        "Can I calculate age for a future date?",
      answer:
        "Yes. You can select any future date to calculate your age.",
    },
    {
      question:
        "Is this age calculator accurate?",
      answer:
        "Yes. The calculator accounts for leap years and different month lengths.",
    },
  ],
};