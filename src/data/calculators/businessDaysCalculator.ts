import { Calculator } from "@/src/types/calculator";

export const businessDaysCalculator: Calculator = {
  slug: "business-days-calculator",

  name: "Business Days Calculator",

  description:
    "Calculate the number of business days, working days, weekends, and total days between two dates. Ideal for project planning, HR management, payroll calculations, and scheduling.",

  category: "Utility",

  isPopular: false,

  seo: {
    title:
      "Business Days Calculator - Calculate Working Days Between Dates",

    description:
      "Calculate business days and working days between two dates. Exclude weekends and estimate project timelines, employee schedules, payroll periods, and delivery dates.",

    keywords: [
      "business days calculator",
      "working days calculator",
      "working days between dates",
      "business day calculator",
      "calculate business days",
      "days excluding weekends",
      "workday calculator",
      "employee working days calculator",
      "business date calculator",
      "working day counter",
      "weekdays calculator",
      "date calculator excluding weekends",
      "project timeline calculator",
      "office working days calculator",
      "business schedule calculator"
    ]
  },

  compareWith: [
  "date-calculator",
  "time-duration-calculator",
],

  steps: [
    {
      step: 1,
      title: "Select Start Date",
      description:
        "Choose the beginning date.",
      icon: "calendar"
    },
    {
      step: 2,
      title: "Select End Date",
      description:
        "Choose the ending date.",
      icon: "calendar"
    },
    {
      step: 3,
      title: "Calculate Business Days",
      description:
        "Count weekdays and exclude weekends.",
      icon: "calculator"
    },
    {
      step: 4,
      title: "View Results",
      description:
        "See total days, business days, and weekends.",
      icon: "result"
    }
  ],

  formula: {
    title: "Business Days Formula",

    formula:
      "Business Days = Total Days − Weekend Days",

    explanation:
      "Business days include Monday through Friday and exclude Saturday and Sunday.",

    example: {
      input:
        "Start: 1 June 2026, End: 30 June 2026",

      output:
        "22 Business Days"
    },

    useCases: [
      "Project Planning",
      "Payroll Calculation",
      "Employee Attendance",
      "Delivery Estimation",
      "Work Scheduling"
    ]
  },

  seoContent: `
<h2>What Is a Business Days Calculator?</h2>

<p>
A Business Days Calculator determines the number of working days between two dates while excluding weekends. It is commonly used in project management, payroll calculations, HR operations, delivery scheduling, and business planning.
</p>

<h2>Business Days vs Calendar Days</h2>

<table>
<tr>
<th>Type</th>
<th>Includes</th>
</tr>
<tr>
<td>Calendar Days</td>
<td>All days including weekends</td>
</tr>
<tr>
<td>Business Days</td>
<td>Monday to Friday only</td>
</tr>
</table>

<h2>Why Business Days Matter</h2>

<ul>
<li><strong>Project Planning:</strong> Estimate realistic deadlines.</li>
<li><strong>Payroll:</strong> Calculate employee work periods.</li>
<li><strong>Shipping:</strong> Estimate delivery times.</li>
<li><strong>Attendance:</strong> Measure actual working days.</li>
<li><strong>Contracts:</strong> Track deadlines and obligations.</li>
</ul>

<h2>Standard Work Week</h2>

<table>
<tr>
<th>Day</th>
<th>Status</th>
</tr>
<tr>
<td>Monday</td>
<td>Business Day</td>
</tr>
<tr>
<td>Tuesday</td>
<td>Business Day</td>
</tr>
<tr>
<td>Wednesday</td>
<td>Business Day</td>
</tr>
<tr>
<td>Thursday</td>
<td>Business Day</td>
</tr>
<tr>
<td>Friday</td>
<td>Business Day</td>
</tr>
<tr>
<td>Saturday</td>
<td>Weekend</td>
</tr>
<tr>
<td>Sunday</td>
<td>Weekend</td>
</tr>
</table>

<h2>Benefits of Using a Business Days Calculator</h2>

<ul>
<li>Improves project scheduling.</li>
<li>Provides accurate delivery estimates.</li>
<li>Supports HR and payroll calculations.</li>
<li>Reduces manual counting errors.</li>
<li>Saves time when planning deadlines.</li>
</ul>

<h2>Why Use an Online Business Days Calculator?</h2>

<p>
An online Business Days Calculator instantly calculates working days between dates, helping businesses, employees, and project managers make accurate scheduling decisions.
</p>
`,

  faqs: [
    {
      question:
        "What are business days?",
      answer:
        "Business days are typically Monday through Friday and exclude weekends."
    },
    {
      question:
        "Does the calculator exclude weekends?",
      answer:
        "Yes. Saturdays and Sundays are excluded from business day calculations."
    },
    {
      question:
        "Can I use this for project planning?",
      answer:
        "Yes. It helps estimate project timelines and deadlines accurately."
    },
    {
      question:
        "Is this useful for payroll calculations?",
      answer:
        "Yes. It can help determine the number of working days in a pay period."
    },
    {
      question:
        "What is the difference between calendar days and business days?",
      answer:
        "Calendar days include all days, while business days exclude weekends."
    }
  ]
};