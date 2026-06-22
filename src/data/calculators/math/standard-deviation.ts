import { Calculator } from "@/src/types/calculator";

export const standardDeviationCalculator: Calculator = {
  slug: "standard-deviation-calculator",

  name: "Standard Deviation Calculator",

  description:
    "Calculate standard deviation, variance, mean, and data spread instantly. Use our free Standard Deviation Calculator for statistics, research, education, and data analysis.",

  category: "Math",

  isPopular: true,

  seo: {
    title:
      "Standard Deviation Calculator - Variance & Statistics Calculator",

    description:
      "Calculate standard deviation, variance, mean, and statistical measures online. Analyze data distribution and variability instantly with our free calculator.",

    keywords: [
      "standard deviation calculator",
      "variance calculator",
      "statistics calculator",
      "sample standard deviation calculator",
      "population standard deviation calculator",
      "data analysis calculator",
      "statistical analysis calculator",
      "mean and standard deviation calculator",
      "standard deviation formula calculator",
      "standard deviation solver",
      "variance and standard deviation calculator",
      "math statistics calculator",
      "research statistics calculator",
      "data spread calculator",
      "online standard deviation calculator",
      "free standard deviation calculator",
      "descriptive statistics calculator",
      "standard deviation finder",
      "calculate standard deviation",
      "statistics homework calculator",
      "dataset statistics calculator",
      "sample variance calculator",
      "population variance calculator",
      "statistical variability calculator",
      "data science calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Data Values",
      description:
        "Enter numbers separated by commas.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Calculate Mean",
      description:
        "The calculator finds the average of all values.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Calculate Variance",
      description:
        "Variance is calculated using deviations from the mean.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Standard Deviation",
      description:
        "See standard deviation, variance, mean, and count.",
      icon: "result",
    },
  ],

  formula: {
    title: "Standard Deviation Formula",

    formula:
      "σ = √( Σ(x − μ)² / N )",

    explanation:
      "Standard deviation measures how spread out data values are from the mean. A low standard deviation indicates data points are close to the mean, while a high standard deviation indicates greater variability.",

    example: {
      input: "10, 20, 30, 40, 50",

      output:
        "Mean = 30, Standard Deviation ≈ 14.14",
    },

    useCases: [
      "Statistics",
      "Research",
      "Data Analysis",
      "Education",
      "Business Analytics",
      "Data Science",
      "Survey Analysis",
      "Mathematics",
      "Scientific Studies",
      "Quality Control",
    ],
  },

  faqs: [
    {
      question:
        "What is standard deviation?",
      answer:
        "Standard deviation measures how much data values differ from the average value.",
    },

    {
      question:
        "What does a low standard deviation mean?",
      answer:
        "A low standard deviation indicates that data points are clustered close to the mean.",
    },

    {
      question:
        "What does a high standard deviation mean?",
      answer:
        "A high standard deviation indicates that data values are spread out over a wider range.",
    },

    {
      question:
        "What is variance?",
      answer:
        "Variance is the average of squared differences from the mean and is used to calculate standard deviation.",
    },

    {
      question:
        "Where is standard deviation used?",
      answer:
        "Standard deviation is used in statistics, finance, research, data science, engineering, and quality control.",
    },

    {
      question:
        "Can I calculate sample standard deviation?",
      answer:
        "Yes. Many statistical analyses use sample standard deviation when working with a subset of a population.",
    },

    {
      question:
        "Why use a Standard Deviation Calculator?",
      answer:
        "It saves time, reduces calculation errors, and helps analyze data variability quickly.",
    },

    {
      question:
        "Is this calculator free?",
      answer:
        "Yes. You can use the Standard Deviation Calculator online for free.",
    },
  ],
};