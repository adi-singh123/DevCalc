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
  seoContent: `
    <h2>Solve ax² + bx + c = 0</h2>
    <p>Enter the three coefficients a, b, and c, where a must not be zero. The calculator returns both roots, the discriminant, the root type, and the vertex of the related parabola y = ax² + bx + c.</p>
    <h2>Quadratic formula and discriminant</h2>
    <p>The roots are x = (-b ± √(b² - 4ac)) / (2a). The expression D = b² - 4ac is the discriminant. D &gt; 0 gives two distinct real roots, D = 0 gives one repeated real root, and D &lt; 0 gives a complex-conjugate pair.</p>
    <h2>Worked example</h2>
    <p>For x² - 5x + 6 = 0, a = 1, b = -5, and c = 6. The discriminant is 25 - 24 = 1. Substitution in the quadratic formula gives roots (5 + 1)/2 = 3 and (5 - 1)/2 = 2.</p>
    <h2>Vertex and common mistakes</h2>
    <p>The vertex x-coordinate is -b/(2a), and its y-coordinate is found by substituting that value into the polynomial. Keep the sign of each coefficient when entering it: in x² - 5x + 6, b is -5, not 5. If a is zero, the expression is linear rather than quadratic and this calculator will not solve it.</p>
  `,
};
