import { Calculator } from "@/src/types/calculator";

export const attendanceCalculator: Calculator = {
  slug: "attendance-calculator",

  name: "Attendance Calculator",

  description:
    "Calculate your attendance percentage, find how many classes you need to attend to reach a target percentage, and see how many classes you can miss while maintaining required attendance.",

  category: "Education",

  isPopular: true,

  seo: {
    title:
      "Attendance Calculator - Calculate Attendance Percentage Online",

    description:
      "Free online Attendance Calculator. Calculate attendance percentage, classes needed to reach 75% attendance, and how many classes you can miss while maintaining your target attendance.",

    keywords: [
      "attendance calculator",
      "attendance percentage calculator",
      "college attendance calculator",
      "school attendance calculator",
      "75 attendance calculator",
      "attendance tracker",
      "student attendance calculator",
      "attendance requirement calculator",
      "how many classes can i miss",
      "attendance percentage",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Total Classes",
      description:
        "Enter the total number of classes conducted by your school, college, or university.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Classes Attended",
      description:
        "Provide the number of classes you have attended.",
      icon: "result",
    },
    {
      step: 3,
      title: "Set Target Attendance",
      description:
        "Choose the attendance percentage you want to maintain, such as 75% or 80%.",
      icon: "target",
    },
    {
      step: 4,
      title: "View Attendance Report",
      description:
        "Check your current attendance percentage, classes needed, and classes you can safely miss.",
      icon: "clock",
    },
  ],

  formula: {
    title: "Attendance Percentage Formula",

    formula:
      "Attendance % = (Classes Attended ÷ Total Classes) × 100",

    explanation:
      "Attendance percentage is calculated by dividing the number of classes attended by the total number of classes conducted and multiplying the result by 100.",

    example: {
      input:
        "Classes Attended: 54, Total Classes: 72",

      output:
        "Attendance = (54 ÷ 72) × 100 = 75%",
    },

    useCases: [
      "College attendance tracking",
      "School attendance monitoring",
      "Exam eligibility checking",
      "University attendance requirements",
      "Student attendance planning",
    ],
  },

  faqs: [
    {
      question:
        "How is attendance percentage calculated?",
      answer:
        "Attendance percentage is calculated by dividing attended classes by total classes and multiplying the result by 100.",
    },
    {
      question:
        "What is the minimum attendance required in colleges?",
      answer:
        "Most colleges and universities require at least 75% attendance, although requirements may vary by institution.",
    },
    {
      question:
        "Can I calculate how many classes I can miss?",
      answer:
        "Yes. This attendance calculator shows how many additional classes you can miss while still maintaining your target attendance percentage.",
    },
    {
      question:
        "Can I calculate how many classes I need to attend?",
      answer:
        "Yes. If your attendance is below the target percentage, the calculator estimates the number of consecutive classes you must attend to reach the required attendance.",
    },
    {
      question:
        "Is this calculator suitable for schools and colleges?",
      answer:
        "Yes. It can be used by students in schools, colleges, universities, coaching institutes, and training programs.",
    },
  ],
};