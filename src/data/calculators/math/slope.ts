import { Calculator } from "@/src/types/calculator";

export const slopeCalculator: Calculator = {
  slug: "slope-calculator",

  name: "Slope Calculator",

  description:
    "Calculate the slope of a line between two points instantly. Use our free Slope Calculator to determine slope, rise, run, and line characteristics in coordinate geometry.",

  category: "Math",

  isPopular: true,

  seo: {
    title:
      "Slope Calculator - Find Slope Between Two Points",

    description:
      "Use our Slope Calculator to find the slope of a line between two coordinates. Calculate rise, run, and understand line direction quickly and accurately.",

    keywords: [
      "slope calculator",
      "find slope between two points",
      "rise over run calculator",
      "slope formula calculator",
      "coordinate slope calculator",
      "point slope calculator",
      "line slope calculator",
      "slope of a line calculator",
      "geometry slope calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter First Point",
      description:
        "Input the x and y coordinates of the first point.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Second Point",
      description:
        "Input the x and y coordinates of the second point.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Calculate Slope",
      description:
        "Apply the slope formula using the rise and run between points.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Results",
      description:
        "See slope value, rise, run, and line direction instantly.",
      icon: "result",
    },
  ],

  formula: {
    title: "Slope Formula",

    formula:
      "m = (y₂ - y₁) / (x₂ - x₁)",

    explanation:
      "The slope measures the steepness and direction of a line. It is calculated by dividing the change in y-values (rise) by the change in x-values (run).",

    example: {
      input:
        "Point A (2, 3), Point B (6, 11)",

      output:
        "m = (11 - 3) / (6 - 2) = 8 / 4 = 2",
    },

    useCases: [
      "Coordinate Geometry",
      "Algebra",
      "Mathematics",
      "Graph Analysis",
      "Engineering",
      "Physics",
      "Education",
      "Linear Equations",
    ],
  },

  faqs: [
    {
      question:
        "What is slope?",
      answer:
        "Slope measures the steepness and direction of a line. It represents how much the y-value changes for every unit change in the x-value.",
    },

    {
      question:
        "How do you calculate slope?",
      answer:
        "Slope is calculated by dividing the difference in y-coordinates by the difference in x-coordinates between two points.",
    },

    {
      question:
        "What does a positive slope mean?",
      answer:
        "A positive slope means the line rises from left to right.",
    },

    {
      question:
        "What does a negative slope mean?",
      answer:
        "A negative slope means the line falls from left to right.",
    },

    {
      question:
        "What is an undefined slope?",
      answer:
        "A slope is undefined when the x-coordinates are equal, creating a vertical line.",
    },

    {
      question:
        "What is the relationship between the slopes of perpendicular lines?",
      answer:
        "The slopes of two perpendicular non-vertical lines are negative reciprocals of each other (m₁ · m₂ = -1), meaning one slope is the inverted negative value of the other.",
    },
  ],
};