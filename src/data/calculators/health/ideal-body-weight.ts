import { Calculator } from "@/src/types/calculator";

export const idealBodyWeightCalculator: Calculator = {
  slug: "ideal-body-weight-calculator",

  name: "Ideal Body Weight Calculator",

  description:
    "Calculate your ideal body weight based on height and gender using widely accepted health formulas. Determine a healthy target weight range for fitness, nutrition, and weight management goals.",

  category: "Health",

  isPopular: true,

  seo: {
    title:
      "Ideal Body Weight Calculator - Calculate Healthy Weight Online",

    description:
      "Use our free Ideal Body Weight Calculator to estimate your healthy weight based on height and gender. Calculate ideal body weight instantly using proven medical formulas.",

    keywords: [
      "ideal body weight calculator",
      "healthy weight calculator",
      "ideal weight calculator",
      "target weight calculator",
      "body weight calculator",
      "healthy body weight calculator",
      "ideal weight for height",
      "weight range calculator",
      "perfect weight calculator",
      "healthy bmi weight calculator",
      "weight goal calculator",
      "ideal weight chart",
      "height weight calculator",
      "healthy weight range calculator",
      "online ideal body weight calculator",
      "free ideal weight calculator",
      "male ideal weight calculator",
      "female ideal weight calculator",
      "body weight estimation calculator",
      "recommended weight calculator",
      "fitness weight calculator",
      "ideal body mass calculator",
      "body weight goal calculator",
      "weight planning calculator",
      "healthy lifestyle calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Your Height",
      description:
        "Provide your height in centimeters, feet, or inches depending on the calculator settings.",
      icon: "height",
    },

    {
      step: 2,
      title: "Select Gender",
      description:
        "Choose male or female to apply the appropriate ideal body weight formula.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Calculate Ideal Weight",
      description:
        "The calculator estimates your recommended healthy body weight.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Results",
      description:
        "See your ideal body weight and healthy weight range instantly.",
      icon: "result",
    },
  ],

  formula: {
    title: "Ideal Body Weight Formula",

    formula:
      "Male: 50 kg + 2.3 kg for each inch over 5 ft | Female: 45.5 kg + 2.3 kg for each inch over 5 ft",

    explanation:
      "The Ideal Body Weight (IBW) calculation is commonly based on the Devine Formula, which estimates a healthy body weight using height and gender. It is often used in healthcare, fitness planning, and nutrition assessments.",

    example: {
      input:
        "Male, Height: 5 ft 10 in",

      output:
        "Ideal Body Weight ≈ 73 kg",
    },

    useCases: [
      "Weight Management",
      "Fitness Planning",
      "Nutrition Programs",
      "Healthy Weight Goals",
      "BMI Assessment",
      "Personal Health Tracking",
      "Weight Loss Planning",
      "Muscle Gain Programs",
      "Healthcare Assessments",
      "Lifestyle Improvement",
    ],
  },

  faqs: [
    {
      question:
        "What is an Ideal Body Weight Calculator?",
      answer:
        "An Ideal Body Weight Calculator estimates a healthy body weight based on your height and gender using established medical formulas.",
    },

    {
      question:
        "How is ideal body weight calculated?",
      answer:
        "Most calculators use formulas such as the Devine Formula, Hamwi Formula, or Robinson Formula to estimate ideal body weight.",
    },

    {
      question:
        "Is ideal body weight the same as BMI?",
      answer:
        "No. BMI measures weight relative to height, while ideal body weight estimates a target healthy weight based on height and gender.",
    },

    {
      question:
        "Why is ideal body weight important?",
      answer:
        "Knowing your ideal body weight can help set realistic fitness goals, manage weight, and support overall health planning.",
    },

    {
      question:
        "Can athletes use ideal body weight calculators?",
      answer:
        "Athletes may have higher muscle mass than average, so ideal body weight estimates may not fully reflect their body composition.",
    },

    {
      question:
        "What factors affect ideal body weight?",
      answer:
        "Height, gender, body composition, age, and overall health can influence what is considered an ideal weight.",
    },

    {
      question:
        "Can I use this calculator for weight loss planning?",
      answer:
        "Yes. It can provide a useful target weight for setting healthy and realistic weight management goals.",
    },

    {
      question:
        "Is this Ideal Body Weight Calculator free?",
      answer:
        "Yes. You can calculate your ideal body weight online unlimited times completely free.",
    },
  ],
};