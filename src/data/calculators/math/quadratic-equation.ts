import { Calculator } from "@/src/types/calculator";

export const quadraticEquationCalculator: Calculator = {
  slug: "quadratic-equation-calculator",

  name: "Quadratic Equation Calculator",

  description:
    "Solve quadratic equations instantly using our free Quadratic Equation Calculator. Find roots, discriminant, vertex, and nature of roots for equations in the form ax² + bx + c = 0.",

  category: "Math",

  isPopular: true,

  seo: {
    title:
      "Quadratic Equation Calculator - Solve ax² + bx + c = 0",

    description:
      "Use our Quadratic Equation Calculator to solve quadratic equations, find roots, calculate discriminants, determine root types, and analyze parabolas instantly.",

    keywords: [
      "quadratic equation calculator",
      "quadratic formula calculator",
      "roots calculator",
      "solve quadratic equation",
      "ax2 bx c calculator",
      "quadratic solver",
      "quadratic roots calculator",
      "discriminant calculator",
      "parabola calculator",
      "x calculator",
      "equation solver",
      "algebra calculator",
      "quadratic math calculator",
      "quadratic function calculator",
      "online quadratic calculator",
      "free quadratic calculator",
      "find roots calculator",
      "quadratic polynomial calculator",
      "math equation calculator",
      "quadratic expression calculator",
      "vertex calculator",
      "parabola roots calculator",
      "quadratic equation solver",
      "solve for x calculator",
      "algebra solver calculator",
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
        "Is this calculator free?",
      answer:
        "Yes, the Quadratic Equation Calculator is completely free to use.",
    },
  ],
};