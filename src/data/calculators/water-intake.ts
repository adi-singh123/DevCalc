import { Calculator } from "@/src/types/calculator";

export const waterIntakeCalculator: Calculator = {
  slug: "water-intake-calculator",

  name: "Water Intake Calculator",

  description:
    "Calculate your recommended daily water intake based on body weight, activity level, and lifestyle. Stay hydrated and support overall health with personalized hydration recommendations.",

  category: "Health",

  isPopular: true,

  seo: {
    title:
      "Water Intake Calculator - Calculate Daily Water Needs",

    description:
      "Use our free Water Intake Calculator to estimate how much water you should drink daily based on your weight and activity level. Calculate your ideal daily hydration needs instantly.",

    keywords: [
      "water intake calculator",
      "daily water intake calculator",
      "how much water should i drink",
      "hydration calculator",
      "water consumption calculator",
      "daily hydration calculator",
      "water requirement calculator",
      "drink water calculator",
      "water needs calculator",
      "healthy hydration calculator",
      "water tracker calculator",
      "body weight water calculator",
      "recommended water intake",
      "water intake by weight",
      "water drinking calculator",
      "fitness hydration calculator",
      "health water calculator",
      "online water intake calculator",
      "free hydration calculator",
      "daily water requirement",
      "water goal calculator",
      "water planning calculator",
      "hydration needs calculator",
      "water recommendation calculator",
      "daily fluid intake calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Your Body Weight",
      description:
        "Provide your current body weight in kilograms.",
      icon: "weight",
    },

    {
      step: 2,
      title: "Select Activity Level",
      description:
        "Choose your daily physical activity level.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Calculate Water Intake",
      description:
        "The calculator estimates your recommended daily hydration needs.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Results",
      description:
        "See your daily water intake recommendation in liters and glasses.",
      icon: "result",
    },
  ],

  formula: {
    title: "Water Intake Formula",

    formula:
      "Daily Water Intake (Liters) = Body Weight (kg) × 0.033",

    explanation:
      "A commonly used hydration guideline recommends approximately 33 milliliters of water per kilogram of body weight each day. Additional water may be required for exercise, hot weather, or specific health conditions.",

    example: {
      input:
        "Weight: 70 kg",

      output:
        "Recommended Water Intake: 2.31 Liters per Day",
    },

    useCases: [
      "Daily Hydration Planning",
      "Fitness Programs",
      "Weight Loss Plans",
      "Healthy Lifestyle Management",
      "Athletic Performance",
      "Nutrition Planning",
      "Health Monitoring",
      "Exercise Recovery",
      "Wellness Tracking",
      "Hydration Goals",
    ],
  },

  faqs: [
    {
      question:
        "How much water should I drink per day?",
      answer:
        "A common recommendation is approximately 30–35 milliliters of water per kilogram of body weight, although individual needs may vary.",
    },

    {
      question:
        "Does exercise affect water requirements?",
      answer:
        "Yes. Physical activity increases fluid loss through sweat, so additional water intake is often necessary.",
    },

    {
      question:
        "Can I drink too much water?",
      answer:
        "Yes. Excessive water intake in a short period can lead to water intoxication, although this is uncommon.",
    },

    {
      question:
        "Do coffee and tea count toward water intake?",
      answer:
        "Yes. Most beverages contribute to daily fluid intake, though water remains the best hydration source.",
    },

    {
      question:
        "Why is hydration important?",
      answer:
        "Proper hydration supports body temperature regulation, digestion, circulation, physical performance, and overall health.",
    },

    {
      question:
        "Is this Water Intake Calculator free?",
      answer:
        "Yes. You can calculate your recommended daily water intake online unlimited times for free.",
    },
  ],
};
