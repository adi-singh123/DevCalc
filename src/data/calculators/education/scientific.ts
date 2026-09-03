import { Calculator } from "@/src/types/calculator";

export const scientificCalculator: Calculator = {
  slug: "scientific-calculator",

  name: "Scientific Calculator",

  description:
    "Free online Scientific Calculator (Sci Calculator / SC Calculator) for advanced mathematical calculations including trigonometry, logarithms, powers, roots, factorials, exponents, and engineering calculations.",

  category: "Education",

  isPopular: true,

  editorialIntro:
    "An online scientific calculator provides arbitrary precision evaluations for algebraic equations, trigonometric ratios (sin, cos, tan), logarithmic bases (log₁₀, ln), and exponential functions adhering to IEEE 754 64-bit floating point precision standards.",

  benchmarkContext: {
    title: "IEEE 754 Double Precision & Trigonometric Standards",
    badge: "Computational Mathematics Standard",
    stat: "64-Bit Float Precision (53-bit Significand / 15–17 Decimal Digits)",
    description:
      "Supports Degree (DEG) and Radian (RAD) mode switching, standard operator precedence (PEMDAS/BODMAS), natural logarithms (Euler's constant $e \\approx 2.71828$), and power series factorial expansions.",
    source: "IEEE Standard for Floating-Point Arithmetic (IEEE 754-2019)",
    lastUpdated: "January 2026",
  },

  seo: {
    title:
      "Scientific Calculator - Free Online Sci Calculator",

    description:
      "Perform advanced calculations including sin, cos, tan, log, ln, powers, roots, factorials, and engineering mathematics with instant degree/radian precision.",
    keywords: [
      "scientific calculator",
      "trigonometry calculator",
      "engineering calculator",
      "logarithm calculator",
      "sin cos tan calculator",
      "advanced math calculator",
      "ln calculator",
      "scientific notation calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Choose a Function",
      description:
        "Select basic arithmetic, trigonometric, logarithmic, power, root, or scientific functions.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Values",
      description:
        "Input numbers, expressions, or mathematical functions for calculation.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Perform Calculation",
      description:
        "Use the calculator to evaluate equations instantly with high accuracy.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View Results",
      description:
        "Get instant scientific calculation results for academic, engineering, and professional use.",
      icon: "result",
    },
  ],

  formula: {
    title: "Scientific Calculator Functions",

    formula:
      "sin(x), cos(x), tan(x), log(x), ln(x), x², x³, √x, ∛x, n!, π, e",

    explanation:
      "A Scientific Calculator performs advanced mathematical operations beyond basic addition, subtraction, multiplication, and division. It supports trigonometric functions, logarithms, exponents, roots, factorials, scientific constants, and engineering calculations.",

    example: {
      input:
        "sin(30°), log(100), √25, 5!",

      output:
        "0.5, 2, 5, 120",
    },

    useCases: [
      "Mathematics",
      "Engineering",
      "Physics",
      "Statistics",
      "College Calculations",
      "Competitive Exams",
      "Scientific Research",
      "Academic Learning",
    ],
  },

  faqs: [
    {
      question:
        "What is a Scientific Calculator?",
      answer:
        "A Scientific Calculator is an advanced calculator that performs trigonometric, logarithmic, exponential, root, factorial, and engineering calculations in addition to standard arithmetic operations.",
    },

    {
      question:
        "What is a Sci Calculator?",
      answer:
        "Sci Calculator is a short form of Scientific Calculator. It is commonly used by students, engineers, teachers, and professionals for advanced mathematical calculations.",
    },

    {
      question:
        "What is an SC Calculator?",
      answer:
        "SC Calculator is another abbreviation for Scientific Calculator. It offers advanced mathematical functions beyond a standard calculator.",
    },

    {
      question:
        "Can I calculate sin, cos, and tan?",
      answer:
        "Yes. The calculator supports trigonometric functions including sine (sin), cosine (cos), tangent (tan), and their inverse functions.",
    },

    {
      question:
        "Does this Scientific Calculator support logarithms?",
      answer:
        "Yes. It supports common logarithms (log), natural logarithms (ln), and exponential calculations.",
    },

    {
      question:
        "Can I use this calculator for engineering calculations?",
      answer:
        "Yes. Engineers, students, and professionals can use it for scientific, mathematical, and engineering computations.",
    },

    {
      question:
        "Does it support Degree and Radian mode?",
      answer:
        "Yes. The calculator supports both Degree (Deg) and Radian (Rad) modes for trigonometric calculations.",
    },

    {
      question:
        "Can students use this calculator for exam preparation?",
      answer:
        "Yes. Scientific calculators are widely used for mathematics, physics, chemistry, engineering, and competitive exam preparation.",
    },
  ],
};