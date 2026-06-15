import { Calculator } from "@/src/types/calculator";

export const bmrCalculator: Calculator = {
  slug: "bmr-calculator",

  name: "BMR Calculator",

  description:
    "Calculate your Basal Metabolic Rate (BMR) using the Mifflin-St Jeor Equation. Estimate the number of calories your body burns at rest and determine your daily calorie requirements based on activity level.",

  category: "Health",

  isPopular: true,

  seo: {
    title:
      "BMR Calculator - Calculate Basal Metabolic Rate Online",

    description:
      "Free online BMR Calculator. Calculate your Basal Metabolic Rate using the Mifflin-St Jeor Equation and estimate daily calorie needs for weight loss, maintenance, or muscle gain.",

    keywords: [
      "bmr calculator",
      "basal metabolic rate calculator",
      "daily calorie calculator",
      "calories burned at rest",
      "bmr formula",
      "mifflin st jeor calculator",
      "weight loss calorie calculator",
      "maintenance calories calculator",
      "fitness calculator",
      "health calculator",
      "daily calorie needs",
      "calorie requirement calculator",
      "metabolism calculator",
      "online bmr calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Select Gender",
      description:
        "Choose your gender to apply the appropriate BMR formula.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Age",
      description:
        "Provide your age in years for accurate calorie estimation.",
      icon: "calendar",
    },
    {
      step: 3,
      title: "Enter Weight and Height",
      description:
        "Input your weight in kilograms and height in centimeters.",
      icon: "weight",
    },
    {
      step: 4,
      title: "View BMR Results",
      description:
        "See your BMR and estimated daily calorie requirements based on activity level.",
      icon: "result",
    },
  ],

  formula: {
    title: "BMR Formula (Mifflin-St Jeor Equation)",

    formula:
      "Men: BMR = 10 × Weight + 6.25 × Height − 5 × Age + 5\nWomen: BMR = 10 × Weight + 6.25 × Height − 5 × Age − 161",

    explanation:
      "The Mifflin-St Jeor Equation is one of the most widely accepted methods for estimating Basal Metabolic Rate (BMR). BMR represents the number of calories your body requires to perform essential functions such as breathing, circulation, cell production, and temperature regulation while at complete rest.",

    example: {
      input:
        "Male, Age: 25 years, Weight: 70 kg, Height: 175 cm",

      output:
        "BMR = 10 × 70 + 6.25 × 175 − 5 × 25 + 5 = 1673.75 calories/day",
    },

    useCases: [
      "Weight loss planning",
      "Weight maintenance",
      "Muscle gain programs",
      "Daily calorie estimation",
      "Fitness and nutrition tracking",
      "Diet planning",
    ],
  },

  faqs: [
    {
      question: "What is BMR?",
      answer:
        "Basal Metabolic Rate (BMR) is the number of calories your body burns at rest to maintain vital functions such as breathing, circulation, and cell production.",
    },
    {
      question: "Is BMR different from BMI?",
      answer:
        "Yes. BMI measures body weight relative to height, while BMR estimates the calories your body needs to function at rest.",
    },
    {
      question: "Which formula does this calculator use?",
      answer:
        "This calculator uses the Mifflin-St Jeor Equation, which is considered one of the most accurate methods for estimating BMR in healthy adults.",
    },
    {
      question: "How accurate is the BMR Calculator?",
      answer:
        "The calculator provides a reliable estimate based on age, gender, height, and weight. Actual calorie expenditure may vary depending on body composition, genetics, and lifestyle.",
    },
    {
      question: "Can BMR help with weight loss?",
      answer:
        "Yes. Knowing your BMR helps determine your daily calorie needs, making it easier to create an effective weight loss or weight maintenance plan.",
    },
  ],
};