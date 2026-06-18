import { Calculator } from "@/src/types/calculator";

export const gpaCalculator: Calculator = {
  slug: "gpa-calculator",

  name: "GPA Calculator",

  description:
    "Calculate GPA, percentage, total marks, and grade instantly using our free online GPA Calculator.",

  category: "Education",

  isPopular: true,

  seo: {
    title:
      "GPA Calculator - Calculate GPA, Percentage & Grade Online",

    description:
      "Calculate GPA, CGPA equivalent, percentage, and grades instantly with our free online GPA Calculator.",

    keywords: [
      "gpa calculator",
      "cgpa calculator",
      "grade calculator",
      "student gpa calculator",
      "college gpa calculator",
      "gpa to percentage calculator",
      "cgpa to percentage calculator",
      "semester gpa calculator",
      "gpa calculator india",
      "education calculator",
    ],
  },

  compareWith: [
  "cgpa-calculator",
  "final-grade-calculator",
  "marks-required-calculator",
],

  steps: [
    {
      step: 1,
      title: "Enter Subject Marks",
      description:
        "Enter marks obtained in each subject.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Calculate GPA",
      description:
        "The calculator computes percentage and GPA.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "View Results",
      description:
        "See total marks, percentage, GPA and grade.",
      icon: "result",
    },
  ],

  formula: {
    title: "GPA Formula",

    formula:
      "GPA = Percentage ÷ 9.5",

    explanation:
      "GPA is calculated from the percentage score. Different institutions may use different GPA scales.",

    example: {
      input:
        "Percentage: 85%",

      output:
        "GPA = 8.95",
    },

    useCases: [
      "College Admissions",
      "Academic Performance",
      "Semester Evaluation",
      "Scholarship Applications",
    ],
  },

  faqs: [
    {
      question:
        "What is GPA?",
      answer:
        "GPA (Grade Point Average) is a numerical representation of academic performance.",
    },
    {
      question:
        "How is GPA calculated?",
      answer:
        "This calculator estimates GPA using percentage ÷ 9.5.",
    },
    {
      question:
        "Can I calculate CGPA?",
      answer:
        "Yes, GPA can be used as a basis for CGPA calculations depending on university rules.",
    },
    {
      question:
        "Is GPA important?",
      answer:
        "Yes, GPA is widely used for admissions, placements, and scholarships.",
    },
  ],
};