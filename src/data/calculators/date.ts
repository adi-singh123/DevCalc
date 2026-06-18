import { Calculator } from "@/src/types/calculator";

export const dateCalculator: Calculator = {
  slug: "date-calculator",

  name: "Date Calculator",

  description:
    "Calculate the exact difference between two dates in years, months, weeks, days, hours, and minutes. Use our free Date Calculator for date duration, countdowns, and date interval calculations.",

  category: "Utility",

  isPopular: true,

  seo: {
    title:
      "Date Calculator - Calculate Days Between Dates Online",

    description:
      "Use our free Date Calculator to calculate the exact difference between two dates. Find days, weeks, months, years, hours, and minutes between any dates instantly.",

    keywords: [
      "date calculator",
      "days between dates",
      "date difference calculator",
      "calculate date difference",
      "date duration calculator",
      "date interval calculator",
      "days calculator",
      "date finder",
      "date countdown calculator",
      "business day calculator",
      "calendar calculator",
      "online date calculator",
      "free date calculator",
      "days between two dates",
      "months between dates",
      "years between dates",
      "date range calculator",
      "time between dates",
      "future date calculator",
      "past date calculator",
      "date subtraction calculator",
      "exact date calculator",
      "date calculation tool",
      "calendar date calculator",
      "date counter calculator",
    ],
  },

  compareWith: [
  "time-duration-calculator",
  "business-days-calculator",
],

  steps: [
    {
      step: 1,
      title: "Select Start Date",
      description:
        "Choose the starting date for the calculation.",
      icon: "calendar",
    },

    {
      step: 2,
      title: "Select End Date",
      description:
        "Choose the ending date for comparison.",
      icon: "calendar",
    },

    {
      step: 3,
      title: "Calculate Date Difference",
      description:
        "The calculator determines the exact duration between the two selected dates.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Detailed Results",
      description:
        "See the difference in years, months, weeks, days, hours, and minutes.",
      icon: "result",
    },
  ],

  formula: {
    title: "Date Difference Formula",

    formula:
      "Date Difference = End Date − Start Date",

    explanation:
      "A Date Calculator determines the exact time interval between two calendar dates. Results can be displayed in years, months, weeks, days, hours, and minutes depending on the selected dates.",

    example: {
      input:
        "Start Date: 1 January 2025, End Date: 1 July 2025",

      output:
        "181 Days",
    },

    useCases: [
      "Project Planning",
      "Event Countdown",
      "Age Calculations",
      "Business Deadlines",
      "Travel Planning",
      "Contract Duration",
      "Loan Duration Tracking",
      "Subscription Tracking",
      "Work Experience Calculations",
      "Academic Planning",
    ],
  },

  faqs: [
    {
      question:
        "How does a Date Calculator work?",
      answer:
        "A Date Calculator measures the exact difference between two selected dates and displays the duration in various time units.",
    },

    {
      question:
        "Can I calculate days between two dates?",
      answer:
        "Yes. The calculator can determine the exact number of days between any two dates.",
    },

    {
      question:
        "Can I calculate future dates?",
      answer:
        "Yes. You can select future dates to calculate upcoming durations and countdowns.",
    },

    {
      question:
        "Can I calculate past dates?",
      answer:
        "Yes. The calculator works for both past and future date comparisons.",
    },

    {
      question:
        "Does the Date Calculator account for leap years?",
      answer:
        "Yes. Leap years, month lengths, and calendar variations are included automatically for accurate calculations.",
    },

    {
      question:
        "Can I calculate months and years between dates?",
      answer:
        "Yes. The calculator provides results in years, months, weeks, and days whenever applicable.",
    },

    {
      question:
        "What is a date duration?",
      answer:
        "A date duration is the amount of time that passes between two calendar dates.",
    },

    {
      question:
        "Is this Date Calculator free?",
      answer:
        "Yes. You can calculate unlimited date differences online for free.",
    },
  ],
};