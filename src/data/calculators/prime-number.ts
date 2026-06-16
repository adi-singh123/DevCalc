import { Calculator } from "@/src/types/calculator";

export const primeNumberCalculator: Calculator = {
  slug: "prime-number-calculator",

  name: "Prime Number Calculator",

  description:
    "Check whether a number is prime or composite instantly. Find factors, divisors, and analyze prime numbers using our free Prime Number Calculator.",

  category: "Math",

  isPopular: true,

  seo: {
    title:
      "Prime Number Calculator - Check Prime Numbers Online",

    description:
      "Use our Prime Number Calculator to determine whether a number is prime or composite. Find factors, divisors, and learn prime number properties instantly.",

    keywords: [
      "prime number calculator",
      "prime checker",
      "is prime calculator",
      "prime number finder",
      "prime number test",
      "prime number generator",
      "check prime number",
      "prime factor calculator",
      "prime number tool",
      "prime number checker",
      "online prime calculator",
      "free prime number calculator",
      "prime and composite calculator",
      "prime number detector",
      "number factor calculator",
      "prime mathematics calculator",
      "prime divisibility calculator",
      "prime factor finder",
      "math prime calculator",
      "prime number analysis",
      "is this number prime",
      "find prime numbers",
      "prime number formula",
      "prime number solver",
      "prime checker online",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter a Number",
      description:
        "Input any positive integer you want to test.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Check Prime Status",
      description:
        "The calculator tests whether the number has divisors other than 1 and itself.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Analyze Factors",
      description:
        "View all factors and determine whether the number is prime or composite.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Results",
      description:
        "See prime status, factors, factor count, and related information instantly.",
      icon: "result",
    },
  ],

  formula: {
    title: "Prime Number Rule",

    formula:
      "A prime number has exactly two positive divisors: 1 and itself.",

    explanation:
      "A prime number is greater than 1 and can only be divided evenly by 1 and itself. Numbers with more than two factors are called composite numbers.",

    example: {
      input: "17",

      output:
        "Prime Number (Factors: 1, 17)",
    },

    useCases: [
      "Mathematics",
      "Number Theory",
      "Competitive Exams",
      "Education",
      "Cryptography",
      "Programming",
      "Factor Analysis",
      "Prime Number Research",
    ],
  },

  faqs: [
    {
      question:
        "What is a prime number?",
      answer:
        "A prime number is a number greater than 1 that has exactly two positive divisors: 1 and itself.",
    },

    {
      question:
        "Is 1 a prime number?",
      answer:
        "No. The number 1 has only one positive divisor and therefore is not considered prime.",
    },

    {
      question:
        "What is a composite number?",
      answer:
        "A composite number has more than two positive divisors.",
    },

    {
      question:
        "Why are prime numbers important?",
      answer:
        "Prime numbers are fundamental in mathematics, cryptography, computer science, and number theory.",
    },

    {
      question:
        "Can this calculator find factors?",
      answer:
        "Yes. It can determine all factors of a number and identify whether the number is prime or composite.",
    },

    {
      question:
        "Is this Prime Number Calculator free?",
      answer:
        "Yes. You can use it unlimited times for free.",
    },
  ],
};