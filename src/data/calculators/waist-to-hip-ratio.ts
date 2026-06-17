import { Calculator } from "@/src/types/calculator";

export const waistToHipRatioCalculator: Calculator = {
  slug: "waist-to-hip-ratio-calculator",

  name: "Waist-to-Hip Ratio Calculator",

  description:
    "Calculate your Waist-to-Hip Ratio (WHR) to assess body fat distribution and potential health risks. Determine whether your waist and hip measurements fall within healthy ranges.",

  category: "Health",

  isPopular: true,

  seo: {
    title:
      "Waist-to-Hip Ratio Calculator - Calculate WHR Online",

    description:
      "Use our free Waist-to-Hip Ratio Calculator to calculate your WHR and assess health risks associated with body fat distribution. Fast, accurate, and easy to use.",

    keywords: [
      "waist to hip ratio calculator",
      "whr calculator",
      "waist hip ratio calculator",
      "body fat distribution calculator",
      "waist measurement calculator",
      "hip measurement calculator",
      "health risk calculator",
      "body shape calculator",
      "obesity risk calculator",
      "waist to hip calculator",
      "whr health calculator",
      "fitness calculator",
      "body composition calculator",
      "weight loss calculator",
      "healthy waist ratio",
      "waist hip percentage calculator",
      "online whr calculator",
      "free waist to hip ratio calculator",
      "waist circumference calculator",
      "body health calculator",
      "abdominal obesity calculator",
      "waist fat calculator",
      "healthy body ratio calculator",
      "risk assessment calculator",
      "fitness health calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Waist Measurement",
      description:
        "Measure and enter your waist circumference in centimeters or inches.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Hip Measurement",
      description:
        "Measure and enter your hip circumference.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Calculate WHR",
      description:
        "The calculator divides waist circumference by hip circumference.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Health Risk",
      description:
        "See your waist-to-hip ratio and associated health risk category.",
      icon: "result",
    },
  ],

  formula: {
    title: "Waist-to-Hip Ratio Formula",

    formula:
      "Waist-to-Hip Ratio = Waist Circumference ÷ Hip Circumference",

    explanation:
      "Waist-to-Hip Ratio (WHR) measures body fat distribution by comparing waist size to hip size. Higher ratios may indicate increased health risks related to abdominal fat accumulation.",

    example: {
      input:
        "Waist: 80 cm, Hip: 100 cm",

      output:
        "WHR = 0.80",
    },

    useCases: [
      "Health Risk Assessment",
      "Body Composition Analysis",
      "Weight Loss Tracking",
      "Fitness Monitoring",
      "Obesity Risk Screening",
      "Nutrition Planning",
      "Personal Health Tracking",
      "Lifestyle Management",
      "Preventive Healthcare",
      "Fitness Goal Setting",
    ],
  },

  faqs: [
    {
      question:
        "What is Waist-to-Hip Ratio?",
      answer:
        "Waist-to-Hip Ratio (WHR) compares your waist measurement to your hip measurement and helps assess body fat distribution.",
    },

    {
      question:
        "Why is WHR important?",
      answer:
        "WHR can indicate whether excess body fat is concentrated around the abdomen, which may be associated with increased health risks.",
    },

    {
      question:
        "What is a healthy waist-to-hip ratio?",
      answer:
        "Generally, a WHR below 0.90 for men and below 0.85 for women is considered lower risk.",
    },

    {
      question:
        "Is WHR better than BMI?",
      answer:
        "WHR and BMI measure different aspects of health. WHR focuses on fat distribution, while BMI focuses on weight relative to height.",
    },

    {
      question:
        "Can I reduce my WHR?",
      answer:
        "Regular exercise, healthy eating, and weight management can help reduce waist circumference and improve WHR.",
    },

    {
      question:
        "Is this Waist-to-Hip Ratio Calculator free?",
      answer:
        "Yes. You can calculate your WHR online unlimited times completely free.",
    },
  ],
};