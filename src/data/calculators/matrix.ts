import { Calculator } from "@/src/types/calculator";

export const matrixCalculator: Calculator = {
  slug: "matrix-calculator",

  name: "Matrix Calculator",

  description:
    "Perform matrix addition, subtraction, multiplication, determinant calculations, and matrix operations instantly using our free Matrix Calculator.",

  category: "Math",

  isPopular: true,

  seo: {
    title:
      "Matrix Calculator - Matrix Operations & Determinant Calculator",

    description:
      "Calculate matrix addition, subtraction, multiplication, determinants, and matrix operations online. Fast and accurate Matrix Calculator for students and professionals.",

    keywords: [
      "matrix calculator",
      "matrix multiplication calculator",
      "matrix addition calculator",
      "matrix subtraction calculator",
      "determinant calculator",
      "inverse matrix calculator",
      "matrix solver",
      "matrix equation calculator",
      "2x2 matrix calculator",
      "3x3 matrix calculator",
      "matrix math calculator",
      "matrix operations calculator",
      "linear algebra calculator",
      "matrix determinant calculator",
      "matrix algebra calculator",
      "online matrix calculator",
      "free matrix calculator",
      "matrix transpose calculator",
      "matrix inverse solver",
      "linear equations matrix calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Matrix Values",
      description:
        "Enter numbers into the matrix fields.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Select Operation",
      description:
        "Choose addition, subtraction, multiplication, or determinant.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Calculate",
      description:
        "The calculator performs the selected matrix operation.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Results",
      description:
        "See the resulting matrix and determinant values.",
      icon: "result",
    },
  ],

  formula: {
    title: "Matrix Formula",

    formula:
      "|A| = ad - bc",

    explanation:
      "Matrices are rectangular arrays of numbers used in algebra, engineering, computer science, physics, and data analysis. Matrix operations include addition, subtraction, multiplication, and determinant calculations.",

    example: {
      input:
        "[[1,2],[3,4]]",

      output:
        "Determinant = -2",
    },

    useCases: [
      "Linear Algebra",
      "Engineering",
      "Computer Science",
      "Physics",
      "Data Analysis",
      "Machine Learning",
      "Mathematics Education",
      "Research",
    ],
  },

  faqs: [
    {
      question:
        "What is a matrix?",
      answer:
        "A matrix is a rectangular arrangement of numbers organized into rows and columns.",
    },

    {
      question:
        "What is a determinant?",
      answer:
        "A determinant is a scalar value calculated from a square matrix that helps determine matrix properties.",
    },

    {
      question:
        "Can I multiply matrices?",
      answer:
        "Yes. Matrix multiplication is supported when dimensions are compatible.",
    },

    {
      question:
        "Where are matrices used?",
      answer:
        "Matrices are used in engineering, physics, computer graphics, machine learning, statistics, and mathematics.",
    },

    {
      question:
        "Is this Matrix Calculator free?",
      answer:
        "Yes. The calculator is completely free to use online.",
    },
  ],
};