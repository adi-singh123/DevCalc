import { Calculator } from "@/src/types/calculator";

export const cgpaCalculator: Calculator = {
  slug: "cgpa-calculator",

  name: "CGPA Calculator",

  description:
    "Calculate your CGPA (Cumulative Grade Point Average) and convert it into percentage instantly. Add grades and credits for multiple subjects to get accurate results.",

  category: "Education",

  isPopular: true,

  seo: {
    title:
      "CGPA Calculator - Calculate CGPA & Percentage Online",

    description:
      "Free online CGPA Calculator. Calculate your CGPA using grades and credits, convert CGPA to percentage, and track academic performance easily.",

    keywords: [
      "cgpa calculator",
      "cgpa to percentage calculator",
      "semester cgpa calculator",
      "college cgpa calculator",
      "cgpa converter",
      "grade point calculator",
      "cgpa percentage calculator",
      "university cgpa calculator",
      "student cgpa calculator",
      "online cgpa calculator",
      "cgpa formula",
      "cumulative grade point average calculator",
      "academic calculator",
      "education calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Add Subjects",
      description:
        "Enter all subjects or courses included in your semester or academic program.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Grades & Credits",
      description:
        "Provide the grade points and credit hours for each subject.",
      icon: "calendar",
    },
    {
      step: 3,
      title: "Calculate CGPA",
      description:
        "The calculator computes your CGPA using a weighted average formula.",
      icon: "clock",
    },
    {
      step: 4,
      title: "View CGPA & Percentage",
      description:
        "See your CGPA and estimated percentage instantly.",
      icon: "result",
    },
  ],

  formula: {
    title: "CGPA Formula",

    formula:
      "CGPA = Σ(Grade Point × Credit Hours) ÷ Σ(Credit Hours)",

    explanation:
      "CGPA (Cumulative Grade Point Average) is calculated by multiplying the grade point earned in each subject by its credit hours, summing all values, and dividing by the total credit hours.",

    example: {
      input:
        "Subject 1: GPA 8.5, Credits 4 | Subject 2: GPA 9.0, Credits 3 | Subject 3: GPA 8.0, Credits 3",

      output:
        "CGPA = (8.5×4 + 9.0×3 + 8.0×3) ÷ (4+3+3) = 8.5",
    },

    useCases: [
      "Semester CGPA calculation",
      "College result analysis",
      "University academic tracking",
      "CGPA to percentage conversion",
      "Scholarship eligibility checking",
      "Academic performance evaluation",
    ],
  },

  faqs: [
    {
      question: "What is CGPA?",
      answer:
        "CGPA (Cumulative Grade Point Average) is a measure of a student's overall academic performance calculated across all subjects or semesters.",
    },
    {
      question: "How is CGPA calculated?",
      answer:
        "CGPA is calculated by dividing the total weighted grade points by the total credit hours of all subjects.",
    },
    {
      question: "How do I convert CGPA to percentage?",
      answer:
        "Many institutions use the formula Percentage = CGPA × 9.5. However, conversion rules may vary by university.",
    },
    {
      question: "What is a good CGPA?",
      answer:
        "A CGPA above 8.0 is generally considered good, while a CGPA above 9.0 is considered excellent in most academic institutions.",
    },
    {
      question: "Can this calculator be used for all universities?",
      answer:
        "Yes, as long as your institution uses a credit-based grading system. However, percentage conversion rules may differ between universities.",
    },
  ],
};