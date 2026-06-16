import { Calculator } from "@/src/types/calculator";

export const distanceCalculator: Calculator = {
  slug: "distance-calculator",

  name: "Distance Calculator",

  description:
    "Calculate the distance between two points instantly using the distance formula. Find distances in coordinate geometry accurately with our free Distance Calculator.",

  category: "Math",

  isPopular: true,

  seo: {
    title:
      "Distance Calculator - Distance Between Two Points",

    description:
      "Use our Distance Calculator to find the distance between two coordinates using the distance formula. Ideal for geometry, algebra, and coordinate calculations.",

    keywords: [
      "distance calculator",
      "distance formula calculator",
      "distance between two points",
      "coordinate distance calculator",
      "geometry distance calculator",
      "2d distance calculator",
      "point distance calculator",
      "cartesian distance calculator",
      "distance finder",
      "distance equation calculator",
      "math distance calculator",
      "online distance calculator",
      "distance solver",
      "coordinate geometry calculator",
      "distance formula solver",
      "find distance between points",
      "plane geometry calculator",
      "distance calculation tool",
      "euclidean distance calculator",
      "distance mathematics calculator",
      "coordinate point calculator",
      "distance equation solver",
      "graph distance calculator",
      "distance finder online",
      "free distance calculator",
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
      title: "Apply Distance Formula",
      description:
        "The calculator applies the coordinate distance formula.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Result",
      description:
        "See the exact and decimal distance instantly.",
      icon: "result",
    },
  ],

  formula: {
    title:
      "Distance Formula",

    formula:
      "d = √((x₂ - x₁)² + (y₂ - y₁)²)",

    explanation:
      "The distance formula calculates the straight-line distance between two points in a coordinate plane using the Pythagorean Theorem.",

    example: {
      input:
        "Point A (1, 2), Point B (4, 6)",

      output:
        "Distance = 5",
    },

    useCases: [
      "Coordinate Geometry",
      "Algebra",
      "Mathematics",
      "Engineering",
      "Physics",
      "Education",
      "Graph Analysis",
      "Navigation",
    ],
  },

  faqs: [
    {
      question:
        "What is the distance formula?",
      answer:
        "The distance formula calculates the straight-line distance between two points in a coordinate plane.",
    },

    {
      question:
        "How is distance between points calculated?",
      answer:
        "Distance is found using the square root of the sum of squared differences between x and y coordinates.",
    },

    {
      question:
        "What is the distance between (1,2) and (4,6)?",
      answer:
        "The distance is 5 units.",
    },

    {
      question:
        "Where is the distance formula used?",
      answer:
        "It is widely used in geometry, physics, engineering, navigation, and computer graphics.",
    },

    {
      question:
        "Is this Distance Calculator free?",
      answer:
        "Yes. You can calculate unlimited distances for free.",
    },
  ],
};