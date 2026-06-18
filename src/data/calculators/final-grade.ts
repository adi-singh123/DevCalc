import { Calculator } from "@/src/types/calculator";

export const finalGradeCalculator: Calculator = {
  slug: "final-grade-calculator",

  name: "Final Grade Calculator",

  description:
    "Calculate the score you need on your final exam to achieve your desired course grade. Quickly determine required marks using your current grade, final exam weight, and target grade.",

  category: "Education",

  isPopular: false,

  seo: {
    title:
      "Final Grade Calculator - Calculate Required Final Exam Score",

    description:
      "Use our free Final Grade Calculator to find out what score you need on your final exam to reach your target grade. Fast, accurate, and easy to use.",

    keywords: [
      "final grade calculator",
      "final exam calculator",
      "grade calculator",
      "what do i need on my final",
      "required final grade calculator",
      "course grade calculator",
      "college grade calculator",
      "school grade calculator",
      "exam grade calculator",
      "final score calculator",
      "target grade calculator",
      "grade requirement calculator",
      "student calculator",
      "university grade calculator",
      "marks calculator",
      "percentage grade calculator",
      "academic calculator",
      "online grade calculator",
      "free final grade calculator",
      "education calculator",
      "semester grade calculator",
      "class grade calculator",
      "final test calculator",
      "required exam score calculator",
      "grade prediction calculator",
    ],
  },

  compareWith: [
  "gpa-calculator",
  "cgpa-calculator",
  "marks-required-calculator",
],

  steps: [
    {
      step: 1,
      title: "Enter Current Grade",
      description:
        "Provide your current course grade percentage.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Final Exam Weight",
      description:
        "Specify how much the final exam contributes to the overall grade.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Enter Desired Grade",
      description:
        "Enter the final grade you want to achieve.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Required Score",
      description:
        "See the minimum score needed on the final exam.",
      icon: "result",
    },
  ],

  formula: {
    title: "Final Grade Formula",

    formula:
      "Required Final Exam Score = (Desired Grade − Current Grade × (1 − Exam Weight)) ÷ Exam Weight",

    explanation:
      "The calculator determines the score needed on your final exam based on your current grade, target grade, and the percentage weight of the final exam.",

    example: {
      input:
        "Current Grade: 80%, Final Exam Weight: 40%, Desired Grade: 85%",

      output:
        "Required Final Exam Score: 92.5%",
    },

    useCases: [
      "Final Exam Preparation",
      "Grade Planning",
      "Academic Performance Tracking",
      "School Assessments",
      "College Courses",
      "University Courses",
      "Semester Planning",
      "Exam Goal Setting",
      "Student Performance Analysis",
      "Education Planning",
    ],
  },

  faqs: [
    {
      question:
        "What is a Final Grade Calculator?",
      answer:
        "A Final Grade Calculator helps students determine the score needed on a final exam to achieve a desired overall course grade.",
    },

    {
      question:
        "How does the Final Grade Calculator work?",
      answer:
        "It uses your current grade, desired grade, and final exam weight to calculate the minimum score required on the final exam.",
    },

    {
      question:
        "Can I calculate grades for college courses?",
      answer:
        "Yes. The calculator works for schools, colleges, universities, and any course that uses percentage-based grading.",
    },

    {
      question:
        "What if the required score is above 100%?",
      answer:
        "This means the target grade is mathematically impossible to achieve with the current grade and exam weight.",
    },

    {
      question:
        "Is this Final Grade Calculator free?",
      answer:
        "Yes. You can calculate required final exam scores online unlimited times completely free.",
    },
  ],
};