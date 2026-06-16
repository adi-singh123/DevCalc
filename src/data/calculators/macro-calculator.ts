import { Calculator } from "@/src/types/calculator";

export const macroCalculator: Calculator = {
  slug: "macro-calculator",

  name: "Macro Calculator",

  description:
    "Calculate your daily macronutrient needs including protein, carbohydrates, and fats based on your calorie goals, activity level, and fitness objectives.",

  category: "Health",

  isPopular: false,

  seo: {
    title:
      "Macro Calculator - Calculate Protein, Carbs & Fat Intake",

    description:
      "Use our free Macro Calculator to determine your daily protein, carbohydrate, and fat requirements. Perfect for weight loss, muscle gain, fitness, and healthy eating plans.",

    keywords: [
      "macro calculator",
      "macronutrient calculator",
      "protein calculator",
      "carb calculator",
      "fat intake calculator",
      "macro nutrient calculator",
      "fitness macro calculator",
      "weight loss macro calculator",
      "muscle gain macro calculator",
      "daily macro calculator",
      "nutrition calculator",
      "protein carb fat calculator",
      "bodybuilding macro calculator",
      "macro tracker calculator",
      "meal planning calculator",
      "diet macro calculator",
      "healthy eating calculator",
      "calorie and macro calculator",
      "macro split calculator",
      "fitness nutrition calculator",
      "online macro calculator",
      "free macro calculator",
      "daily nutrition calculator",
      "macro ratio calculator",
      "macros calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Daily Calories",
      description:
        "Provide your target daily calorie intake based on your fitness goal.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Select Your Goal",
      description:
        "Choose whether you want to lose weight, maintain weight, or build muscle.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Calculate Macros",
      description:
        "The calculator distributes calories into protein, carbohydrates, and fats.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Results",
      description:
        "See your recommended daily intake of protein, carbs, and fats in grams.",
      icon: "result",
    },
  ],

  formula: {
    title: "Macronutrient Calculation Formula",

    formula:
      "Protein = 4 Calories/g | Carbohydrates = 4 Calories/g | Fat = 9 Calories/g",

    explanation:
      "A Macro Calculator divides your daily calorie target into protein, carbohydrate, and fat requirements. Macronutrient ratios vary depending on goals such as weight loss, maintenance, or muscle gain.",

    example: {
      input:
        "Calories: 2,000 | Goal: Maintenance",

      output:
        "Protein: 150g, Carbs: 200g, Fat: 67g (Approx.)",
    },

    useCases: [
      "Weight Loss",
      "Muscle Building",
      "Body Recomposition",
      "Fitness Planning",
      "Meal Planning",
      "Bodybuilding",
      "Sports Nutrition",
      "Healthy Eating",
      "Diet Tracking",
      "Performance Optimization",
    ],
  },

  faqs: [
    {
      question:
        "What is a Macro Calculator?",
      answer:
        "A Macro Calculator estimates how much protein, carbohydrates, and fat you should consume daily based on your calorie target and fitness goals.",
    },

    {
      question:
        "What are macronutrients?",
      answer:
        "Macronutrients are nutrients the body needs in large amounts, including protein, carbohydrates, and fats.",
    },

    {
      question:
        "Why are macros important?",
      answer:
        "Macros provide energy, support muscle growth and recovery, help regulate body functions, and play a key role in achieving fitness goals.",
    },

    {
      question:
        "How much protein do I need daily?",
      answer:
        "Protein requirements vary by activity level and goals, but active individuals often consume between 1.2 and 2.2 grams of protein per kilogram of body weight.",
    },

    {
      question:
        "Can macros help with weight loss?",
      answer:
        "Yes. Tracking macronutrients can help manage calorie intake, preserve muscle mass, and improve dietary consistency during weight loss.",
    },

    {
      question:
        "What macro ratio is best for muscle gain?",
      answer:
        "Many muscle-building plans prioritize higher protein intake along with sufficient carbohydrates and healthy fats to support training and recovery.",
    },

    {
      question:
        "Do I need to count macros every day?",
      answer:
        "While not required, tracking macros can improve awareness of food intake and help maintain consistency toward health and fitness goals.",
    },

    {
      question:
        "Is this Macro Calculator free?",
      answer:
        "Yes. You can calculate your daily protein, carbohydrate, and fat requirements online unlimited times for free.",
    },
  ],
};