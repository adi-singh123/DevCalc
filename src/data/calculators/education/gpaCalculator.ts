import { Calculator } from "@/src/types/calculator";

export const gpaCalculator: Calculator = {
  slug: "gpa-calculator",

  name: "GPA Calculator",

  description:
    "Calculate Semester Grade Point Average (SGPA), Cumulative GPA (CGPA), and percentage conversions using the University Grants Commission (UGC) 10-point Choice Based Credit System (CBCS) and US 4.0 scale.",

  category: "Education",

  isPopular: true,

  editorialIntro:
    "Under the University Grants Commission (UGC) Choice Based Credit System (CBCS), semester GPA (SGPA) is computed by weighting individual subject grade points against their respective credit allocations ($SGPA = \\sum (C_i \\times G_i) / \\sum C_i$), ensuring high-credit core subjects carry proportionate academic impact.",

  benchmarkContext: {
    title: "UGC 10-Point CBCS Scale & WES 4.0 Conversion",
    badge: "Higher Education Accreditation Standard",
    stat: "10-Point UGC Letter Grade Standard",
    description:
      "UGC standard grade points: O (Outstanding = 10), A+ (Excellent = 9), A (Very Good = 8), B+ (Good = 7), B (Above Average = 6), C (Average = 5), P (Pass = 4), F (Fail = 0). For US universities, WES uses credit-weighted 4.0 GPA conversions.",
    source: "University Grants Commission (UGC) & World Education Services (WES)",
    lastUpdated: "January 2026",
  },

  seo: {
    title: "GPA Calculator - Calculate GPA, Percentage & Grade Online",

    description:
      "Calculate Semester GPA (SGPA), credit-weighted CGPA, and percentage conversions under UGC 10-point and US 4.0 grading systems with detailed step-by-step math.",

    keywords: [
      "gpa calculator",
      "cgpa calculator",
      "grade calculator",
      "student gpa calculator",
      "college gpa calculator",
      "gpa to percentage calculator",
      "cgpa to percentage calculator",
      "semester gpa calculator",
      "ugc cbcs gpa calculator",
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
      title: "Add Courses & Credit Weights",
      description: "Enter the course name and credit value (e.g. 4 credits for core theory, 2 credits for lab).",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Input Letter Grade / Grade Points",
      description: "Select your achieved letter grade (O, A+, A, B+) or direct numerical score.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Compute Weighted SGPA",
      description: "Instantly view your weighted semester GPA, total credits earned, and official percentage equivalent.",
      icon: "result",
    },
  ],

  formula: {
    title: "Credit-Weighted SGPA Formula",

    formula: "\\text{SGPA} = \\frac{\\sum_{i=1}^n (C_i \\times G_i)}{\\sum_{i=1}^n C_i}",

    explanation:
      "Multiply each course's credit weight ($C_i$) by its earned grade point ($G_i$). Sum these weighted products and divide by the total number of enrolled semester credits.",

    example: {
      input: "Math (4 credits, Grade A = 8) + CS Lab (2 credits, Grade O = 10)",
      output: "Weighted Points = (4×8) + (2×10) = 32 + 20 = 52 | Total Credits = 6 → SGPA = 52 ÷ 6 = 8.67",
    },

    useCases: [
      "Semester Examination Score Auditing",
      "Higher Education Scholarship Eligibility Checks",
      "Campus Placement & Job Screening Cutoffs (e.g. Min 7.5 CGPA)",
      "Foreign University MS/MBA WES 4.0 Conversions",
    ],
  },

  faqs: [
    {
      question: "How is SGPA converted to an official percentage under UGC guidelines?",
      answer:
        "Under standard UGC and AICTE guidelines, the formula for converting a 10-point scale SGPA/CGPA into an aggregate percentage is: $\\text{Percentage (\\%)} = (\\text{CGPA} - 0.75) \\times 10$ or for CBSE/VTU systems: $\\text{Percentage} = \\text{CGPA} \\times 9.5$. Always consult your university's official conversion certificate.",
    },
    {
      question: "Why do course credits matter more than raw percentage marks?",
      answer:
        "In a Choice Based Credit System (CBCS), a 4-credit course carries twice the mathematical weight of a 2-credit lab course. Scoring a high grade point in a 4-credit subject elevates your semester SGPA significantly more than excelling in a 1-credit elective.",
    },
    {
      question: "How do US universities convert Indian 10-point CGPA to a 4.0 GPA scale?",
      answer:
        "Credential evaluators like World Education Services (WES) do not simply divide by 2.5. Instead, each individual course grade is mapped: 10/9 (A = 4.0), 8 (B = 3.0), 7 (C = 2.0), 6 (D = 1.0), and <6 (F = 0.0), which are then credit-weighted into a 4.0 GPA.",
    },
  ],

  seoContent: `
<h2>The Choice Based Credit System (CBCS) in Indian Higher Education</h2>
<p>
  Adopted across Indian central and state universities under the University Grants Commission (UGC), the Choice Based Credit System standardizes evaluation through continuous internal assessment and semester-end examinations.
</p>

---

<h2>UGC 10-Point Letter Grading Table</h2>
<table>
  <thead>
    <tr>
      <th>Letter Grade</th>
      <th>Qualitative Description</th>
      <th>Grade Point ($G_i$)</th>
      <th>Standard Marks Range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>O</strong></td>
      <td>Outstanding</td>
      <td>10</td>
      <td>90% – 100%</td>
    </tr>
    <tr>
      <td><strong>A+</strong></td>
      <td>Excellent</td>
      <td>9</td>
      <td>80% – 89%</td>
    </tr>
    <tr>
      <td><strong>A</strong></td>
      <td>Very Good</td>
      <td>8</td>
      <td>70% – 79%</td>
    </tr>
    <tr>
      <td><strong>B+</strong></td>
      <td>Good</td>
      <td>7</td>
      <td>60% – 69%</td>
    </tr>
    <tr>
      <td><strong>B</strong></td>
      <td>Above Average</td>
      <td>6</td>
      <td>55% – 59%</td>
    </tr>
    <tr>
      <td><strong>C</strong></td>
      <td>Average</td>
      <td>5</td>
      <td>50% – 54%</td>
    </tr>
    <tr>
      <td><strong>P</strong></td>
      <td>Pass</td>
      <td>4</td>
      <td>40% – 49%</td>
    </tr>
    <tr>
      <td><strong>F</strong></td>
      <td>Fail / Reappear</td>
      <td>0</td>
      <td>Below 40%</td>
    </tr>
  </tbody>
</table>
`,
};