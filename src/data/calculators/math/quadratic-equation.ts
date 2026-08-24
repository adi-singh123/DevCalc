import { Calculator } from "@/src/types/calculator";

export const quadraticEquationCalculator: Calculator = {
  slug: "quadratic-equation-calculator",

  name: "Quadratic Equation Calculator",

  description:
"Struggling with a quadratic equation? Our calculator instantly finds the roots, calculates the discriminant, tells you whether the roots are real or complex, and breaks down the parabola's key properties — perfect for students and quick problem-solving.",
  category: "Math",

  isPopular: true,

  seo: {
    title:
      "Quadratic Equation Calculator - Solve ax² + bx + c = 0",

    description:
"Struggling with a quadratic equation? Our calculator instantly finds the roots, calculates the discriminant, tells you whether the roots are real or complex, and breaks down the parabola's key properties — perfect for students and quick problem-solving.",
keywords: [
  "quadratic equation calculator",
  "quadratic formula calculator",
  "quadratic roots calculator",
  "discriminant calculator",
  "parabola vertex calculator",
  "solve quadratic equation",
  "quadratic equation solver with steps",
  "real and complex roots calculator",
  "algebra equation solver",
],
  },

  steps: [
    {
      step: 1,
      title: "Enter Coefficients",
      description:
        "Enter values for a, b, and c.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Calculate Discriminant",
      description:
        "The calculator finds b² - 4ac.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Find Roots",
      description:
        "Roots are calculated using the quadratic formula.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Results",
      description:
        "See roots, discriminant, and root type.",
      icon: "result",
    },
  ],

  formula: {
    title: "Quadratic Formula",

    formula:
      "x = (-b ± √(b² - 4ac)) / 2a",

    explanation:
      "A quadratic equation is written as ax² + bx + c = 0. The quadratic formula calculates the roots of the equation using the coefficients a, b, and c.",

    example: {
      input: "a=1, b=-5, c=6",
      output: "Roots = 2 and 3",
    },

    useCases: [
      "Algebra",
      "Mathematics Education",
      "Engineering",
      "Physics",
      "Competitive Exams",
      "Graph Analysis",
      "Research",
      "Polynomial Equations",
    ],
  },

  faqs: [
    {
      question:
        "What is a quadratic equation?",
      answer:
        "A quadratic equation is a second-degree polynomial equation written as ax² + bx + c = 0.",
    },

    {
      question:
        "What is the quadratic formula?",
      answer:
        "The quadratic formula is x = (-b ± √(b² - 4ac)) / 2a.",
    },

    {
      question:
        "What is the discriminant?",
      answer:
        "The discriminant is b² - 4ac and determines the nature of the roots.",
    },

    {
      question:
        "What happens if the discriminant is positive?",
      answer:
        "The equation has two distinct real roots.",
    },

    {
      question:
        "What happens if the discriminant is zero?",
      answer:
        "The equation has one repeated real root.",
    },

    {
      question:
        "What happens if the discriminant is negative?",
      answer:
        "The equation has two complex roots.",
    },

    {
      question:
        "How do you find the vertex of a parabola from a quadratic equation?",
      answer:
        "The x-coordinate of the vertex is given by x = -b / (2a). Substituting this x-value back into the quadratic function y = ax² + bx + c gives the corresponding y-coordinate.",
    },
  ],
};