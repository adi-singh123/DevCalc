import { Calculator } from "@/src/types/calculator";

export const bmiCalculator: Calculator = {
  slug: "bmi-calculator",

  name: "BMI Calculator",

  description:
    "Calculate your Body Mass Index (BMI) using your height and weight.",

  category: "Health",

  isPopular: true,

  seo: {
    title:
      "BMI Calculator - Calculate Body Mass Index Online",

    description:
      "Free online BMI Calculator. Calculate your Body Mass Index using height and weight.",

    keywords: [
      "bmi calculator",
      "body mass index calculator",
      "calculate bmi",
      "bmi chart",
      "healthy bmi",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Your Weight",
      description:
        "Enter your body weight in kilograms.",
      icon: "weight",
    },
    {
      step: 2,
      title: "Enter Your Height",
      description:
        "Enter your height in centimeters.",
      icon: "height",
    },
    {
      step: 3,
      title: "Calculate BMI",
      description:
        "Click the Calculate BMI button.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View BMI Category",
      description:
        "See your BMI value and health category.",
      icon: "result",
    },
  ],

  formula: {
    title: "BMI Formula",

    formula:
      "BMI = Weight (kg) / Height² (m²)",

    explanation:
      "BMI is calculated by dividing weight in kilograms by height in meters squared.",

    example: {
      input:
        "Weight = 70 kg, Height = 1.70 m",

      output:
        "BMI = 24.2 (Normal Weight)",
    },

    useCases: [
      "Monitor fitness progress",
      "Track weight status",
      "Health assessments",
      "Weight management goals",
    ],
  },

  faqs: [
    {
      question: "What is BMI?",
      answer:
        "BMI stands for Body Mass Index and is a measure based on height and weight.",
    },
    {
      question: "What is a healthy BMI range?",
      answer:
        "A BMI between 18.5 and 24.9 is generally considered healthy for most adults.",
    },
    {
      question: "Is BMI accurate?",
      answer:
        "BMI is a useful screening tool, but it does not directly measure body fat or overall health.",
    },
  ],
};