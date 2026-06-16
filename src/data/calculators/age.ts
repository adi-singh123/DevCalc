import { Calculator } from "@/src/types/calculator";

export const ageCalculator: Calculator = {
  slug: "age-calculator",

  name: "Age Calculator",

  description:
    "Calculate your exact age instantly from your date of birth. Find your age in years, months, weeks, days, hours, minutes, and seconds using our free online Age Calculator.",

  category: "Utility",

  isPopular: true,

  seo: {
    title:
      "Age Calculator - Calculate Exact Age Online from Date of Birth",

    description:
      "Use our free Age Calculator to calculate your exact age from your date of birth. Find age in years, months, weeks, days, hours, minutes, and seconds instantly.",

    keywords: [
      "age calculator",
      "calculate age",
      "date of birth calculator",
      "exact age calculator",
      "online age calculator",
      "birthday calculator",
      "dob calculator",
      "age finder",
      "calculate my age",
      "how old am i calculator",
      "age in years calculator",
      "age in months calculator",
      "age in days calculator",
      "age difference calculator",
      "current age calculator",
      "accurate age calculator",
      "birth date calculator",
      "age checker",
      "free age calculator",
      "real age calculator",
      "age calculator online",
      "date of birth age calculator",
      "age calculation tool",
      "age duration calculator",
      "exact birthday calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Your Date of Birth",
      description:
        "Select your date of birth using the calendar picker.",
      icon: "calendar",
    },

    {
      step: 2,
      title: "Choose a Reference Date",
      description:
        "Use today's date or select any custom date to calculate age.",
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
      title: "View Detailed Results",
      description:
        "See your age in years, months, weeks, days, hours, minutes, and seconds.",
      icon: "result",
    },
  ],

  formula: {
    title: "Age Calculation Formula",

    formula:
      "Age = Reference Date − Date of Birth",

    explanation:
      "An Age Calculator determines the exact time difference between a person's date of birth and a selected reference date. The result is displayed in years, months, weeks, days, hours, minutes, and seconds.",

    example: {
      input:
        "Date of Birth: 10 January 2000, Reference Date: 10 January 2025",

      output:
        "25 Years, 0 Months, 0 Days",
    },

    useCases: [
      "School Admissions",
      "College Applications",
      "Government Forms",
      "Passport Applications",
      "Job Applications",
      "Retirement Planning",
      "Insurance Verification",
      "Birthday Tracking",
      "Age Verification",
      "Personal Record Keeping",
    ],
  },

  faqs: [
    {
      question:
        "How does an Age Calculator work?",
      answer:
        "An Age Calculator calculates the exact difference between your date of birth and a selected date to determine your age.",
    },

    {
      question:
        "Can I calculate age for a future date?",
      answer:
        "Yes. You can select any future date to determine how old you will be on that date.",
    },

    {
      question:
        "Can I calculate age in months and days?",
      answer:
        "Yes. The calculator provides a detailed age breakdown in years, months, weeks, days, hours, minutes, and seconds.",
    },

    {
      question:
        "Does the Age Calculator account for leap years?",
      answer:
        "Yes. Leap years and varying month lengths are considered to ensure accurate age calculations.",
    },

    {
      question:
        "Can I use this calculator to calculate someone else's age?",
      answer:
        "Yes. Simply enter their date of birth and choose a reference date.",
    },

    {
      question:
        "What is chronological age?",
      answer:
        "Chronological age refers to the exact amount of time that has passed since a person's birth date.",
    },

    {
      question:
        "Is this Age Calculator free?",
      answer:
        "Yes. You can calculate age online unlimited times completely free.",
    },
  ],
};