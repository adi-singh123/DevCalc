import { Calculator } from "@/src/types/calculator";

export const dueDateCalculator: Calculator = {
  slug: "due-date-calculator",

  name: "Due Date Calculator",

  description:
    "Calculate your pregnancy due date, current pregnancy week, trimester, conception date, and important milestones instantly.",

  category: "Health",

  isPopular: false,

  seo: {
    title:
      "Due Date Calculator - Calculate Pregnancy Due Date Online",

    description:
      "Use our free Due Date Calculator to estimate your baby's due date, pregnancy week, trimester, conception date, and pregnancy milestones.",

keywords: [
  "due date calculator",
  "pregnancy due date calculator",
  "baby due date calculator",
  "estimated due date calculator",
  "pregnancy calculator",
  "pregnancy week calculator",
  "conception calculator",
  "pregnancy due date by lmp",
  "gestation calculator",
  "pregnancy tracker",
  "period date",
  "period end",

  // Core Keywords
  "calculate due date",
  "pregnancy due date estimator",
  "expected delivery date calculator",
  "edd calculator",
  "baby arrival calculator",
  "pregnancy date calculator",
  "pregnancy timeline calculator",
  "pregnancy estimator",
  "due date predictor",
  "birth date calculator",

  // LMP Keywords
  "due date by last menstrual period",
  "lmp due date calculator",
  "last period due date calculator",
  "pregnancy calculator by lmp",
  "conception date from lmp",
  "lmp pregnancy tracker",
  "due date from period calculator",
  "pregnancy weeks by lmp",
  "lmp pregnancy calculator",
  "estimated due date by lmp",

  // Conception Keywords
  "conception calculator",
  "conception date calculator",
  "calculate conception date",
  "baby conception calculator",
  "fertility conception calculator",
  "pregnancy conception date",
  "conception and due date calculator",
  "ovulation conception calculator",
  "conception timeline calculator",
  "baby conception estimator",

  // Pregnancy Week Keywords
  "pregnancy week calculator",
  "pregnancy weeks calculator",
  "how many weeks pregnant calculator",
  "pregnancy age calculator",
  "gestational age calculator",
  "pregnancy month calculator",
  "pregnancy trimester calculator",
  "pregnancy progress calculator",
  "pregnancy stage calculator",
  "pregnancy countdown calculator",

  // Gestation Keywords
  "gestation calculator",
  "gestational age calculator",
  "gestation period calculator",
  "pregnancy duration calculator",
  "baby growth calculator",
  "pregnancy timeline tracker",
  "gestation tracker",
  "pregnancy schedule calculator",
  "fetal age calculator",
  "pregnancy development calculator",

  // Baby Due Date Keywords
  "baby due date calculator",
  "baby arrival date calculator",
  "expected baby date calculator",
  "baby delivery calculator",
  "baby birth date calculator",
  "newborn due date calculator",
  "baby countdown calculator",
  "birth prediction calculator",
  "baby due date predictor",
  "baby expected date calculator",

  // Pregnancy Tracker Keywords
  "pregnancy tracker",
  "pregnancy calendar calculator",
  "pregnancy planning calculator",
  "pregnancy monitoring calculator",
  "pregnancy progress tracker",
  "baby growth tracker",
  "pregnancy journey calculator",
  "pregnancy week tracker",
  "prenatal tracker",
  "pregnancy schedule tracker",

  // Period Keywords
  "period calculator",
  "period date calculator",
  "period tracker calculator",
  "next period calculator",
  "period cycle calculator",
  "menstrual cycle calculator",
  "period prediction calculator",
  "period end calculator",
  "period start date calculator",
  "cycle tracker calculator",

  // Question Keywords
  "when is my due date",
  "how to calculate pregnancy due date",
  "how many weeks pregnant am i",
  "how to calculate gestational age",
  "what is my expected delivery date",
  "how does a due date calculator work",
  "how accurate is a due date calculator",
  "how to calculate due date from lmp",
  "when will my baby be born",
  "pregnancy due date calculator example",

  // Hindi Keywords
  "due date calculator hindi",
  "pregnancy due date calculator hindi",
  "delivery date calculator",
  "baby due date calculator hindi",
  "pregnancy calculator hindi",
  "ड्यू डेट कैलकुलेटर",
  "प्रेगनेंसी ड्यू डेट कैलकुलेटर",
  "डिलीवरी डेट कैलकुलेटर",
  "बच्चे की डिलीवरी डेट",
  "प्रेगनेंसी कैलकुलेटर",
  "गर्भावस्था कैलकुलेटर",
  "डिलीवरी कब होगी",
  "मेरी ड्यू डेट क्या है",
  "प्रेगनेंसी कितने सप्ताह की है",
  "एलएमपी ड्यू डेट कैलकुलेटर",

  // Long Tail Keywords
  "free online due date calculator",
  "best pregnancy due date calculator",
  "accurate baby due date calculator",
  "due date calculator by last period",
  "pregnancy week and due date calculator",
  "online gestational age calculator",
  "baby due date calculator by conception date",
  "advanced pregnancy calculator",
  "expected delivery date calculator online",
  "pregnancy tracker and due date calculator",
]
  },

  steps: [
    {
      step: 1,
      title: "Enter Last Period Date",
      description:
        "Select the first day of your last menstrual period.",
      icon: "calendar"
    },
    {
      step: 2,
      title: "Choose Cycle Length",
      description:
        "Enter your average menstrual cycle length.",
      icon: "clock"
    },
    {
      step: 3,
      title: "Calculate Due Date",
      description:
        "Click Calculate to estimate your pregnancy due date.",
      icon: "calculator"
    },
    {
      step: 4,
      title: "View Pregnancy Details",
      description:
        "See due date, trimester, pregnancy week, and milestones.",
      icon: "result"
    }
  ],

  formula: {
    title: "Due Date Formula",

    formula:
      "Due Date = Last Menstrual Period + 280 Days",

    explanation:
      "Pregnancy due dates are commonly estimated using Naegele's Rule, which adds 280 days (40 weeks) to the first day of the last menstrual period.",

    example: {
      input:
        "LMP: 1 January 2026",

      output:
        "Estimated Due Date: 8 October 2026"
    },

    useCases: [
      "Pregnancy Planning",
      "Prenatal Care",
      "Tracking Pregnancy Progress",
      "Doctor Appointments",
      "Baby Arrival Preparation"
    ]
  },

  faqs: [
    {
      question:
        "How accurate is a Due Date Calculator?",
      answer:
        "A Due Date Calculator provides an estimate based on your last menstrual period. Actual delivery dates may vary."
    },
    {
      question:
        "What is Naegele's Rule?",
      answer:
        "Naegele's Rule estimates the due date by adding 280 days (40 weeks) to the first day of the last menstrual period."
    },
    {
      question:
        "Can I calculate due date with an irregular cycle?",
      answer:
        "Yes, but the estimate may be less accurate. Consult your healthcare provider for a more precise estimate."
    },
    {
      question:
        "What trimester am I in?",
      answer:
        "The calculator determines whether you are in the first, second, or third trimester based on your pregnancy week."
    },
    {
      question:
        "Is this calculator free?",
      answer:
        "Yes, you can use our Due Date Calculator completely free."
    }
  ],
  seoContent: `
<h2>What Is a Due Date Calculator?</h2>

<p>
A Due Date Calculator helps estimate the expected delivery date of a baby based on the first day of the last menstrual period (LMP). Most pregnancies last around 40 weeks (280 days), making it possible to predict an estimated due date and track pregnancy progress.
</p>

<h2>How Pregnancy Due Dates Are Calculated</h2>

<p>
Healthcare professionals commonly use Naegele's Rule to estimate a due date. The calculation assumes a standard 28-day menstrual cycle and adds 280 days to the first day of the last menstrual period.
</p>

<table>
  <tr>
    <th>Calculation Method</th>
    <th>Formula</th>
  </tr>
  <tr>
    <td>Naegele's Rule</td>
    <td>Last Menstrual Period + 280 Days</td>
  </tr>
  <tr>
    <td>Pregnancy Duration</td>
    <td>40 Weeks</td>
  </tr>
</table>

<h2>Pregnancy Trimesters Explained</h2>

<p>
Pregnancy is divided into three trimesters, each representing a different stage of fetal development.
</p>

<table>
  <tr>
    <th>Trimester</th>
    <th>Weeks</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>First Trimester</td>
    <td>1 - 12 Weeks</td>
    <td>Early development of organs and body systems.</td>
  </tr>
  <tr>
    <td>Second Trimester</td>
    <td>13 - 27 Weeks</td>
    <td>Rapid growth and noticeable pregnancy changes.</td>
  </tr>
  <tr>
    <td>Third Trimester</td>
    <td>28 - 40 Weeks</td>
    <td>Final growth and preparation for birth.</td>
  </tr>
</table>

<h2>Important Pregnancy Milestones</h2>

<table>
  <tr>
    <th>Week</th>
    <th>Milestone</th>
  </tr>
  <tr>
    <td>4</td>
    <td>Pregnancy test may become positive</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Baby's major organs begin forming</td>
  </tr>
  <tr>
    <td>12</td>
    <td>First trimester completed</td>
  </tr>
  <tr>
    <td>20</td>
    <td>Mid-pregnancy anatomy scan</td>
  </tr>
  <tr>
    <td>28</td>
    <td>Third trimester begins</td>
  </tr>
  <tr>
    <td>37</td>
    <td>Pregnancy considered full term</td>
  </tr>
  <tr>
    <td>40</td>
    <td>Estimated due date</td>
  </tr>
</table>

<h2>Factors That Can Affect a Due Date</h2>

<ul>
  <li><strong>Irregular Menstrual Cycles:</strong> May change ovulation timing.</li>
  <li><strong>Cycle Length:</strong> Longer or shorter cycles can affect calculations.</li>
  <li><strong>Ultrasound Measurements:</strong> Can provide a more accurate estimate.</li>
  <li><strong>Multiple Pregnancies:</strong> Twins and triplets often arrive earlier.</li>
  <li><strong>Medical Conditions:</strong> Some conditions may impact pregnancy duration.</li>
</ul>

<h2>Estimated Due Date vs Actual Delivery Date</h2>

<p>
Only a small percentage of babies are born exactly on their estimated due date. Most deliveries occur within a few weeks before or after the predicted date. The due date should be viewed as a guideline rather than a guarantee.
</p>

<table>
  <tr>
    <th>Delivery Timing</th>
    <th>Classification</th>
  </tr>
  <tr>
    <td>Before 37 Weeks</td>
    <td>Preterm</td>
  </tr>
  <tr>
    <td>37 - 38 Weeks</td>
    <td>Early Term</td>
  </tr>
  <tr>
    <td>39 - 40 Weeks</td>
    <td>Full Term</td>
  </tr>
  <tr>
    <td>41 Weeks+</td>
    <td>Late Term</td>
  </tr>
</table>

<h2>Preparing for Your Baby's Arrival</h2>

<ul>
  <li>Attend regular prenatal appointments.</li>
  <li>Maintain a healthy and balanced diet.</li>
  <li>Take prenatal vitamins as recommended.</li>
  <li>Stay physically active if approved by your doctor.</li>
  <li>Prepare essential baby supplies before the due date.</li>
</ul>

<h2>Why Use an Online Due Date Calculator?</h2>

<p>
A Due Date Calculator provides a quick and convenient way to estimate your baby's arrival date, track pregnancy progress, determine your trimester, and plan important milestones throughout your pregnancy journey.
</p>
`,
};