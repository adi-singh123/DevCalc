import { Calculator } from "@/src/types/calculator";

export const bmiCalculator: Calculator = {
  slug: "bmi-calculator",

  name: "BMI Calculator",

  description:
    "Calculate your Body Mass Index (BMI) instantly using your height and weight. Determine whether you are underweight, normal weight, overweight, or obese with our free BMI Calculator.",

  category: "Health",

  isPopular: true,

  seo: {
    title:
      "BMI Calculator - Calculate Body Mass Index Online",

    description:
      "Use our free BMI Calculator to calculate Body Mass Index from height and weight. Check BMI categories, healthy weight ranges, and overall weight status instantly.",

    keywords: [
      "bmi calculator",
      "body mass index calculator",
      "calculate bmi",
      "online bmi calculator",
      "free bmi calculator",
      "healthy bmi calculator",
      "weight calculator",
      "height weight calculator",
      "bmi chart",
      "adult bmi calculator",
      "body weight calculator",
      "ideal bmi calculator",
      "bmi checker",
      "bmi score calculator",
      "health bmi calculator",
      "body mass calculator",
      "weight status calculator",
      "obesity calculator",
      "fitness bmi calculator",
      "normal bmi calculator",
      "bmi formula calculator",
      "accurate bmi calculator",
      "kg cm bmi calculator",
      "body health calculator",
      "bmi calculation tool",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Your Weight",
      description:
        "Input your body weight in kilograms.",
      icon: "weight",
    },

    {
      step: 2,
      title: "Enter Your Height",
      description:
        "Enter your height in centimeters or meters.",
      icon: "height",
    },

    {
      step: 3,
      title: "Calculate BMI",
      description:
        "The calculator applies the Body Mass Index formula using your height and weight.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View BMI Results",
      description:
        "See your BMI value and determine your weight category instantly.",
      icon: "result",
    },
  ],

  formula: {
    title: "Body Mass Index Formula",

    formula:
      "BMI = Weight (kg) ÷ Height² (m²)",

    explanation:
      "Body Mass Index (BMI) is a measurement that uses height and weight to estimate whether a person has a healthy body weight. It is commonly used as a screening tool to classify weight status.",

    example: {
      input:
        "Weight = 70 kg, Height = 1.70 m",

      output:
        "BMI = 24.22 (Normal Weight)",
    },

    useCases: [
      "Weight Management",
      "Fitness Tracking",
      "Health Assessments",
      "Medical Screenings",
      "Personal Health Monitoring",
      "Diet Planning",
      "Exercise Programs",
      "Weight Loss Goals",
      "Body Weight Evaluation",
      "Wellness Tracking",
    ],
  },

  faqs: [
    {
      question:
        "What is BMI?",
      answer:
        "BMI (Body Mass Index) is a numerical value calculated from height and weight that helps estimate whether a person's weight falls within a healthy range.",
    },

    {
      question:
        "How is BMI calculated?",
      answer:
        "BMI is calculated by dividing weight in kilograms by height in meters squared.",
    },

    {
      question:
        "What is a healthy BMI range?",
      answer:
        "For most adults, a BMI between 18.5 and 24.9 is considered a healthy weight range.",
    },

    {
      question:
        "What BMI is considered overweight?",
      answer:
        "A BMI between 25 and 29.9 is generally classified as overweight.",
    },

    {
      question:
        "What BMI is considered obese?",
      answer:
        "A BMI of 30 or higher is generally classified as obese.",
    },

    {
      question:
        "Is BMI accurate for everyone?",
      answer:
        "BMI is a useful screening tool, but it does not directly measure body fat, muscle mass, or overall health. Athletes and individuals with high muscle mass may have higher BMI values without excess body fat.",
    },

    {
      question:
        "Can BMI be used for children?",
      answer:
        "Children and teenagers use age-specific BMI percentiles rather than standard adult BMI categories.",
    },

    {
      question:
        "Is this BMI Calculator free?",
      answer:
        "Yes. You can calculate your BMI online unlimited times completely free.",
    },
  ],
};