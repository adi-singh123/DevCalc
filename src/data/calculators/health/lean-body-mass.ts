import { Calculator } from "@/src/types/calculator";

export const leanBodyMassCalculator: Calculator = {
  slug: "lean-body-mass-calculator",

  name: "Lean Body Mass Calculator",

  description:
    "Calculate your Lean Body Mass (LBM) using your height, weight, and gender. Estimate the weight of your muscles, bones, organs, and body water excluding body fat.",

  category: "Health",

  isPopular: true,

  seo: {
    title:
      "Lean Body Mass Calculator - Calculate LBM Online",

    description:
      "Use our free Lean Body Mass Calculator to estimate your lean body mass and fat-free body weight. Ideal for fitness tracking, bodybuilding, weight loss, and health assessments.",

    keywords: [
      "lean body mass calculator",
      "lbm calculator",
      "lean mass calculator",
      "fat free mass calculator",
      "body composition calculator",
      "muscle mass calculator",
      "lean body weight calculator",
      "lbm formula calculator",
      "lean muscle calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Your Gender",
      description:
        "Select your gender for accurate lean body mass estimation.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Height",
      description:
        "Provide your height in centimeters.",
      icon: "height",
    },

    {
      step: 3,
      title: "Enter Weight",
      description:
        "Provide your body weight in kilograms.",
      icon: "weight",
    },

    {
      step: 4,
      title: "View Results",
      description:
        "See your estimated lean body mass and fat-free body weight.",
      icon: "result",
    },
  ],

  formula: {
    title: "Lean Body Mass Formula",

    formula:
      "Male: (0.407 × Weight) + (0.267 × Height) − 19.2 | Female: (0.252 × Weight) + (0.473 × Height) − 48.3",

    explanation:
      "The Lean Body Mass Calculator uses the Boer Formula to estimate fat-free body mass. Lean body mass includes muscles, bones, organs, and body water while excluding body fat.",

    example: {
      input:
        "Male, Height: 175 cm, Weight: 75 kg",

      output:
        "Lean Body Mass ≈ 61.8 kg",
    },

    useCases: [
      "Body Composition Analysis",
      "Weight Loss Tracking",
      "Muscle Gain Planning",
      "Fitness Assessment",
      "Bodybuilding",
      "Sports Nutrition",
      "Health Monitoring",
      "Strength Training",
      "Fat Loss Programs",
      "Performance Optimization",
    ],
  },

  faqs: [
    {
      question:
        "What is Lean Body Mass?",
      answer:
        "Lean Body Mass is the weight of everything in your body except body fat, including muscles, bones, organs, and water.",
    },

    {
      question:
        "Why is Lean Body Mass important?",
      answer:
        "Lean Body Mass helps evaluate body composition, monitor fitness progress, and plan nutrition or training programs.",
    },

    {
      question:
        "Is Lean Body Mass the same as muscle mass?",
      answer:
        "No. Lean Body Mass includes muscle mass but also includes bones, organs, and body water.",
    },

    {
      question:
        "Can Lean Body Mass increase?",
      answer:
        "Yes. Resistance training, proper nutrition, and healthy lifestyle habits can increase lean body mass over time.",
    },

    {
      question:
        "How accurate is the Lean Body Mass Calculator?",
      answer:
        "It provides an estimate based on proven formulas and should be used as a guideline rather than a medical measurement.",
    },

    {
      question:
        "How does knowing my lean body mass help determine protein needs?",
      answer:
        "Athletes and active individuals often calculate daily protein targets using lean mass rather than total body weight. This approach ensures accurate amino acid delivery for muscle repair without overestimating requirements in individuals carrying higher fat mass.",
    },
  ],
};