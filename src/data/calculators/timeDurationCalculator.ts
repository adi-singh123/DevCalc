import { Calculator } from "@/src/types/calculator";

export const timeDurationCalculator: Calculator = {
  slug: "time-duration-calculator",

  name: "Time Duration Calculator",

  description:
    "Calculate the exact duration between two dates and times. Find the difference in years, months, days, hours, minutes, and seconds instantly.",

  category: "Utility",

  isPopular: false,

  seo: {
    title:
      "Time Duration Calculator - Calculate Time Between Two Dates",

    description:
      "Calculate the exact time difference between two dates and times. Find duration in years, months, days, hours, minutes, and seconds for work, projects, events, and scheduling.",

    keywords: [
      "time duration calculator",
      "time difference calculator",
      "hours between two times",
      "date duration calculator",
      "time calculator",
      "calculate time between dates",
      "duration calculator",
      "date and time calculator",
      "working hours calculator",
      "hours calculator",
      "minutes calculator",
      "elapsed time calculator",
      "time interval calculator",
      "date difference calculator",
      "calculate duration between dates",
    ],
  },

  compareWith: [
  "date-calculator",
  "business-days-calculator",
],

  steps: [
    {
      step: 1,
      title: "Select Start Date & Time",
      description:
        "Choose the beginning date and time for the calculation.",
      icon: "calendar",
    },

    {
      step: 2,
      title: "Select End Date & Time",
      description:
        "Choose the ending date and time.",
      icon: "clock",
    },

    {
      step: 3,
      title: "Calculate Duration",
      description:
        "Click calculate to find the exact time difference.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Detailed Results",
      description:
        "See the duration in years, months, days, hours, minutes, and seconds.",
      icon: "result",
    },
  ],

  formula: {
    title: "Time Duration Formula",

    formula:
      "Duration = End Date & Time − Start Date & Time",

    explanation:
      "A Time Duration Calculator determines the difference between two dates and times. The result can be expressed in years, months, days, hours, minutes, and seconds.",

    example: {
      input:
        "Start: 1 June 2026 09:00, End: 5 June 2026 17:30",

      output:
        "4 Days, 8 Hours, 30 Minutes",
    },

    useCases: [
      "Work Hour Tracking",
      "Project Planning",
      "Attendance Monitoring",
      "Travel Planning",
      "Event Scheduling",
      "Time Management",
      "Freelance Billing",
      "Shift Calculations",
    ],
  },

  seoContent: `
<h2>What Is a Time Duration Calculator?</h2>

<p>
A Time Duration Calculator helps determine the exact difference between two dates and times. It can calculate durations in years, months, days, hours, minutes, and seconds, making it useful for scheduling, project planning, attendance tracking, and productivity management.
</p>

<h2>How Time Duration Is Calculated</h2>

<p>
The calculation is based on the difference between a start date and time and an end date and time. The result can be displayed in multiple units depending on your requirements.
</p>

<table>
  <tr>
    <th>Calculation</th>
    <th>Formula</th>
  </tr>
  <tr>
    <td>Duration</td>
    <td>End Date & Time − Start Date & Time</td>
  </tr>
</table>

<h2>Time Unit Conversion Reference</h2>

<table>
  <tr>
    <th>Unit</th>
    <th>Equivalent</th>
  </tr>
  <tr>
    <td>1 Minute</td>
    <td>60 Seconds</td>
  </tr>
  <tr>
    <td>1 Hour</td>
    <td>60 Minutes</td>
  </tr>
  <tr>
    <td>1 Day</td>
    <td>24 Hours</td>
  </tr>
  <tr>
    <td>1 Week</td>
    <td>7 Days</td>
  </tr>
  <tr>
    <td>1 Year</td>
    <td>365 Days</td>
  </tr>
</table>

<h2>Common Uses of Time Duration Calculation</h2>

<ul>
  <li><strong>Work Hours:</strong> Calculate hours worked during shifts.</li>
  <li><strong>Attendance Tracking:</strong> Measure time spent in classes or offices.</li>
  <li><strong>Project Management:</strong> Track project duration and deadlines.</li>
  <li><strong>Travel Planning:</strong> Determine travel time between dates.</li>
  <li><strong>Event Scheduling:</strong> Measure time remaining until events.</li>
</ul>

<h2>Time Duration vs Date Difference</h2>

<table>
  <tr>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Time Duration</td>
    <td>Includes hours, minutes, and seconds.</td>
  </tr>
  <tr>
    <td>Date Difference</td>
    <td>Focuses mainly on days, months, and years.</td>
  </tr>
</table>

<h2>Benefits of Using a Time Duration Calculator</h2>

<ul>
  <li>Eliminates manual calculations.</li>
  <li>Provides accurate results instantly.</li>
  <li>Useful for work and academic planning.</li>
  <li>Helps improve productivity and scheduling.</li>
  <li>Reduces errors in time tracking.</li>
</ul>

<h2>Examples of Time Duration Calculations</h2>

<table>
  <tr>
    <th>Start Time</th>
    <th>End Time</th>
    <th>Duration</th>
  </tr>
  <tr>
    <td>09:00</td>
    <td>17:00</td>
    <td>8 Hours</td>
  </tr>
  <tr>
    <td>08:30</td>
    <td>18:15</td>
    <td>9 Hours 45 Minutes</td>
  </tr>
  <tr>
    <td>1 Jan 2026</td>
    <td>1 Feb 2026</td>
    <td>31 Days</td>
  </tr>
</table>

<h2>Why Use an Online Time Duration Calculator?</h2>

<p>
An online Time Duration Calculator makes it easy to determine exact time differences without manual calculations. Whether you are tracking work hours, planning projects, or measuring event durations, it provides fast and accurate results.
</p>
`,

  faqs: [
    {
      question:
        "How does a Time Duration Calculator work?",
      answer:
        "It calculates the difference between a start date and time and an end date and time, then converts the result into various units.",
    },

    {
      question:
        "Can I calculate hours between two dates?",
      answer:
        "Yes. The calculator can determine the total number of hours between any two dates and times.",
    },

    {
      question:
        "Does the calculator include minutes and seconds?",
      answer:
        "Yes. Results can be displayed in years, months, days, hours, minutes, and seconds.",
    },

    {
      question:
        "Can I use this calculator for work hours?",
      answer:
        "Yes. It is useful for calculating work shifts, attendance, and employee hours.",
    },

    {
      question:
        "Is the Time Duration Calculator accurate?",
      answer:
        "Yes. It uses exact date and time values to provide accurate duration calculations.",
    },
  ],
};