import { Calculator } from "@/src/types/calculator";

export const calorieCalculator: Calculator = {
  slug: "calorie-calculator",

  name: "Calorie Calculator",

  description:
    "Calculate your daily calorie needs for weight maintenance, weight loss, or weight gain based on your age, gender, height, weight, and activity level.",

  category: "Health",

  isPopular: true,

  seo: {
    title:
      "Calorie Calculator - Calculate Daily Calorie Needs Online",

    description:
      "Free online Calorie Calculator. Estimate your daily calorie requirements, maintenance calories, weight loss calories, and weight gain calories using scientifically proven formulas.",

    keywords: [
      "calorie calculator",
      "daily calorie calculator",
      "calories per day calculator",
      "maintenance calorie calculator",
      "weight loss calorie calculator",
      "weight gain calorie calculator",
      "tdee calculator",
      "daily calorie needs",
      "calorie requirement calculator",
      "nutrition calculator",
      "fitness calculator",
      "health calculator",
      "online calorie calculator",
      "calorie intake calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Select Gender",
      description:
        "Choose your gender for accurate calorie estimation.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Personal Details",
      description:
        "Provide your age, weight, and height.",
      icon: "calendar",
    },
    {
      step: 3,
      title: "Choose Activity Level",
      description:
        "Select your daily activity level to estimate calorie expenditure.",
      icon: "clock",
    },
    {
      step: 4,
      title: "View Results",
      description:
        "See maintenance, weight loss, and weight gain calorie recommendations.",
      icon: "result",
    },
  ],

  formula: {
    title: "Calorie Calculation Formula",

    formula:
      "TDEE = BMR × Activity Multiplier",

    explanation:
      "Daily calorie needs are calculated using your Basal Metabolic Rate (BMR) and activity level. The Total Daily Energy Expenditure (TDEE) estimates the calories your body burns each day. Weight loss and weight gain calorie targets are then calculated from your maintenance calories.",

    example: {
      input:
        "Male, Age: 25 years, Weight: 70 kg, Height: 175 cm, Moderate Exercise",

      output:
        "BMR = 1674 Calories/day, TDEE = 2595 Calories/day, Weight Loss = 2095 Calories/day, Weight Gain = 3095 Calories/day",
    },

    useCases: [
      "Weight loss planning",
      "Weight gain planning",
      "Calorie tracking",
      "Diet planning",
      "Fitness programs",
      "Nutrition planning",
    ],
  },

  faqs: [
    {
      question: "What is a Calorie Calculator?",
      answer:
        "A Calorie Calculator estimates how many calories you need each day based on your age, gender, height, weight, and activity level.",
    },
    {
      question: "What are maintenance calories?",
      answer:
        "Maintenance calories are the number of calories required to maintain your current body weight without gaining or losing weight.",
    },
    {
      question: "How many calories should I eat to lose weight?",
      answer:
        "A common recommendation is to consume about 500 fewer calories than your maintenance calories to lose approximately 0.5 kg per week.",
    },
    {
      question: "How many calories should I eat to gain weight?",
      answer:
        "To gain weight, you typically need to consume more calories than you burn. A surplus of around 500 calories per day is commonly used.",
    },
    {
      question: "Is this calorie calculator accurate?",
      answer:
        "This calculator provides a reliable estimate based on established scientific formulas. Actual calorie needs may vary depending on metabolism, body composition, and lifestyle.",
    },
  ],
};