import { Calculator } from "@/src/types/calculator";

export const probabilityCalculator: Calculator = {
  slug: "probability-calculator",

  name: "Probability Calculator",

  description:
    "Calculate probability, odds, event likelihood, and chance percentages instantly. Use our free Probability Calculator for statistics, mathematics, education, and exam preparation.",

  category: "Math",

  isPopular: false,

  seo: {
    title:
      "Probability Calculator - Calculate Chance & Probability Online",

    description:
      "Use our Probability Calculator to calculate event probability, odds, likelihood, percentage chance, and statistical probabilities quickly and accurately.",

    keywords: [
      "probability calculator",
      "chance calculator",
      "odds calculator",
      "event probability calculator",
      "statistics probability calculator",
      "conditional probability calculator",
      "probability distribution calculator",
      "probability of event calculator",
      "calculate probability online",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Favorable Outcomes",
      description:
        "Provide the number of successful or desired outcomes.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Total Outcomes",
      description:
        "Enter the total possible outcomes.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Calculate Probability",
      description:
        "The calculator applies the probability formula automatically.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Results",
      description:
        "See probability, odds, percentage chance, and decimal value.",
      icon: "result",
    },
  ],

  formula: {
    title: "Probability Formula",

    formula:
      "Probability = Favorable Outcomes ÷ Total Outcomes",

    explanation:
      "Probability measures the likelihood of an event occurring. It is calculated by dividing the number of favorable outcomes by the total number of possible outcomes. Probability values range from 0 to 1 and can also be expressed as percentages.",

    example: {
      input:
        "Favorable Outcomes = 2, Total Outcomes = 6",

      output:
        "Probability = 2/6 = 0.3333 = 33.33%",
    },

    useCases: [
      "Statistics",
      "Mathematics",
      "Competitive Exams",
      "Research",
      "Data Analysis",
      "Risk Assessment",
      "Business Forecasting",
      "Science Experiments",
      "Education",
      "Gaming Probability",
    ],
  },

  faqs: [
    {
      question:
        "What is probability?",
      answer:
        "Probability is the likelihood that an event will occur and is expressed as a number between 0 and 1 or as a percentage.",
    },

    {
      question:
        "How is probability calculated?",
      answer:
        "Probability is calculated by dividing favorable outcomes by total possible outcomes.",
    },

    {
      question:
        "What is the probability formula?",
      answer:
        "Probability = Favorable Outcomes ÷ Total Outcomes.",
    },

    {
      question:
        "Can probability be expressed as a percentage?",
      answer:
        "Yes. Multiply the probability value by 100 to convert it into a percentage.",
    },

    {
      question:
        "What does a probability of 0 mean?",
      answer:
        "A probability of 0 means the event cannot occur.",
    },

    {
      question:
        "What does a probability of 1 mean?",
      answer:
        "A probability of 1 means the event is certain to occur.",
    },

    {
      question:
        "Where is probability used?",
      answer:
        "Probability is used in mathematics, statistics, finance, science, gaming, forecasting, and risk analysis.",
    },

    {
      question:
        "What is the difference between odds and probability?",
      answer:
        "Probability compares the number of favorable outcomes to the total number of all possible outcomes, whereas odds compare the number of favorable outcomes directly against the number of unfavorable outcomes.",
    },
  ],
};