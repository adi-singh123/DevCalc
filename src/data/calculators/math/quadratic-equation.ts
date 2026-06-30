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

  // Core Keywords
  "quadratic calculator",
  "quadratic equation solver",
  "quadratic equation finder",
  "quadratic equation tool",
  "quadratic problem solver",
  "quadratic math solver",
  "quadratic calculator with steps",
  "quadratic solution calculator",
  "quadratic expression solver",
  "quadratic function solver",

  // Formula Keywords
  "quadratic formula solver",
  "quadratic formula equation calculator",
  "quadratic formula with steps",
  "ax² + bx + c calculator",
  "ax2 + bx + c solver",
  "standard form quadratic calculator",
  "quadratic formula roots calculator",
  "solve using quadratic formula",
  "quadratic formula online",
  "quadratic formula examples",

  // Root Keywords
  "find roots of quadratic equation",
  "quadratic roots finder",
  "real roots calculator",
  "complex roots calculator",
  "zeroes of quadratic equation",
  "quadratic zeros calculator",
  "x intercept calculator",
  "root finder calculator",
  "equation roots calculator",
  "polynomial roots calculator",

  // Discriminant Keywords
  "discriminant calculator",
  "discriminant finder",
  "calculate discriminant",
  "quadratic discriminant solver",
  "b squared minus 4ac calculator",
  "discriminant formula calculator",
  "equation discriminant calculator",
  "quadratic analysis calculator",
  "real and imaginary roots calculator",
  "root type calculator",

  // Vertex Keywords
  "vertex calculator",
  "parabola vertex calculator",
  "vertex form calculator",
  "quadratic vertex finder",
  "maximum minimum calculator",
  "axis of symmetry calculator",
  "vertex equation calculator",
  "parabola graph calculator",
  "quadratic graph calculator",
  "vertex coordinates calculator",

  // Parabola Keywords
  "parabola calculator",
  "parabola equation calculator",
  "parabola roots calculator",
  "parabola graph solver",
  "quadratic graphing calculator",
  "parabola vertex finder",
  "parabola intercept calculator",
  "parabola analysis calculator",
  "quadratic curve calculator",
  "graph parabola calculator",

  // Algebra Keywords
  "algebra equation solver",
  "solve for x calculator",
  "algebra calculator with steps",
  "equation solver online",
  "math equation solver",
  "polynomial equation calculator",
  "algebra root calculator",
  "algebraic equation solver",
  "math problem solver",
  "equation calculator with steps",

  // Educational Keywords
  "quadratic equation examples",
  "quadratic formula examples",
  "how to solve quadratic equations",
  "quadratic equation practice",
  "quadratic equations explained",
  "quadratic tutorial",
  "algebra learning calculator",
  "quadratic homework solver",
  "quadratic equations for students",
  "quadratic step by step solver",

  // Student Keywords
  "quadratic calculator for students",
  "algebra calculator for students",
  "engineering math calculator",
  "high school algebra calculator",
  "college algebra calculator",
  "math homework calculator",
  "exam preparation calculator",
  "quadratic study tool",
  "algebra practice calculator",
  "education math calculator",

  // Question Keywords
  "what is a quadratic equation",
  "how to solve quadratic equations",
  "how to use quadratic formula",
  "how to find roots of a quadratic equation",
  "what is discriminant",
  "how to find vertex of parabola",
  "how to solve ax2 bx c",
  "what are quadratic roots",
  "quadratic calculator example",
  "solve quadratic equation online",

  // India Specific Keywords
  "quadratic equation calculator india",
  "algebra calculator india",
  "math solver india",
  "quadratic formula calculator india",
  "equation solver india",

  // Hindi Keywords
  "quadratic equation calculator hindi",
  "quadratic formula calculator hindi",
  "roots calculator hindi",
  "algebra calculator hindi",
  "equation solver hindi",
  "द्विघात समीकरण कैलकुलेटर",
  "क्वाड्रेटिक इक्वेशन कैलकुलेटर",
  "द्विघात सूत्र कैलकुलेटर",
  "मूल ज्ञात करें कैलकुलेटर",
  "बीजगणित कैलकुलेटर",
  "समीकरण हल करें",
  "x का मान ज्ञात करें",
  "डिस्क्रिमिनेंट कैलकुलेटर",
  "पैराबोला कैलकुलेटर",
  "द्विघात समीकरण हल करें",

  // Long Tail Keywords
  "free online quadratic equation calculator",
  "best quadratic formula calculator",
  "quadratic equation solver with steps",
  "find roots of quadratic equation online",
  "quadratic calculator with graph",
  "discriminant and roots calculator",
  "vertex and parabola calculator",
  "algebra equation solver online free",
  "accurate quadratic roots calculator",
  "advanced quadratic function calculator",
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