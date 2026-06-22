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

  // Core Keywords
  "ideal body weight",
  "calculate ideal weight",
  "body weight estimator",
  "body weight assessment",
  "healthy weight finder",
  "optimal weight calculator",
  "healthy body calculator",
  "body weight planner",
  "body weight analyzer",
  "ideal weight estimator",

  // Height & Weight Keywords
  "ideal weight for height",
  "height and weight calculator",
  "height weight chart",
  "weight according to height",
  "healthy weight for height",
  "height to weight ratio calculator",
  "body weight by height calculator",
  "height based weight calculator",
  "recommended weight by height",
  "weight to height calculator",

  // Men & Women Keywords
  "male ideal weight calculator",
  "female ideal weight calculator",
  "ideal weight for men",
  "ideal weight for women",
  "healthy weight for men",
  "healthy weight for women",
  "men weight chart",
  "women weight chart",
  "male weight calculator",
  "female weight calculator",

  // Weight Range Keywords
  "healthy weight range calculator",
  "ideal weight range",
  "recommended weight range",
  "normal weight range calculator",
  "healthy bmi weight range",
  "body weight range calculator",
  "acceptable weight range",
  "healthy body range calculator",
  "weight classification calculator",
  "target weight range calculator",

  // BMI Related Keywords
  "healthy bmi weight calculator",
  "bmi ideal weight calculator",
  "body mass index weight calculator",
  "ideal bmi calculator",
  "weight based on bmi",
  "healthy bmi range calculator",
  "bmi and ideal weight",
  "healthy body mass calculator",
  "bmi target weight calculator",
  "body weight and bmi calculator",

  // Goal Weight Keywords
  "target weight calculator",
  "goal weight calculator",
  "weight goal planner",
  "weight loss goal calculator",
  "healthy target weight",
  "ideal goal weight",
  "fitness weight goal calculator",
  "body transformation calculator",
  "goal body weight calculator",
  "weight planning tool",

  // Formula Keywords
  "hamwi formula calculator",
  "devine formula calculator",
  "robinson formula calculator",
  "miller formula calculator",
  "ideal body weight formula",
  "healthy weight formula",
  "body weight equation calculator",
  "weight prediction calculator",
  "ideal body mass formula",
  "weight estimation formula",

  // Fitness Keywords
  "fitness weight calculator",
  "healthy lifestyle calculator",
  "body composition calculator",
  "fitness body weight calculator",
  "gym weight calculator",
  "athlete weight calculator",
  "wellness calculator",
  "body fitness calculator",
  "health assessment calculator",
  "weight management calculator",

  // Charts & Tables
  "ideal weight chart",
  "ideal body weight chart",
  "healthy weight chart",
  "weight chart by height",
  "height weight chart men",
  "height weight chart women",
  "weight chart by age",
  "healthy body weight chart",
  "recommended weight chart",
  "ideal weight table",

  // Question Keywords
  "what is my ideal weight",
  "how to calculate ideal body weight",
  "what is a healthy weight",
  "what should my weight be",
  "how much should i weigh",
  "ideal weight for my height",
  "how to reach ideal body weight",
  "healthy weight calculator example",
  "what is the perfect weight for my height",
  "recommended weight by height and age",

  // Long Tail Keywords
  "free online ideal body weight calculator",
  "best ideal weight calculator",
  "ideal body weight calculator by age and gender",
  "healthy weight range calculator for adults",
  "accurate ideal weight calculator",
  "ideal weight calculator for men and women",
  "online healthy body weight calculator",
  "height and weight ideal calculator",
  "target body weight calculator free",
  "advanced ideal body weight calculator",
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