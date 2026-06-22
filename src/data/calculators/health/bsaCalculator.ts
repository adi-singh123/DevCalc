import { Calculator } from "@/src/types/calculator";

export const bsaCalculator: Calculator = {
  slug: "bsa-calculator",

  name: "Body Surface Area Calculator",

  description:
    "Calculate your Body Surface Area (BSA) using height and weight. Commonly used in medical and healthcare settings.",

  category: "Health",

  isPopular: false,

  seo: {
    title:
      "Body Surface Area Calculator (BSA) - Calculate BSA Online",

    description:
      " Body Surface Area Calculator to calculate BSA using height and weight. Supports Mosteller formula and medical dosage calculations.",

keywords: [
  "bsa calculator",
  "body surface area calculator",
  "mosteller formula calculator",
  "medical dosage calculator",
  "body surface area formula",
  "calculate bsa",
  "bsa medical calculator",

  // Core Keywords
  "body surface area",
  "bsa formula calculator",
  "body area calculator",
  "body surface estimator",
  "bsa measurement calculator",
  "human body surface area calculator",
  "body surface calculator online",
  "body area estimation calculator",
  "bsa assessment calculator",
  "body size calculator",

  // Formula Keywords
  "mosteller formula calculator",
  "mosteller bsa calculator",
  "dubois formula calculator",
  "dubois bsa calculator",
  "haycock formula calculator",
  "gehan george formula calculator",
  "boyd formula calculator",
  "body surface area equation",
  "bsa calculation formula",
  "body surface area method",

  // Medical Keywords
  "medical bsa calculator",
  "clinical bsa calculator",
  "doctor bsa calculator",
  "patient bsa calculator",
  "hospital dosage calculator",
  "medical body surface area calculator",
  "healthcare bsa calculator",
  "pharmacy dosage calculator",
  "oncology dosage calculator",
  "chemotherapy dosage calculator",

  // Dosage Keywords
  "drug dosage calculator",
  "medicine dosage calculator",
  "bsa dosage calculator",
  "chemotherapy dose calculator",
  "pediatric dosage calculator",
  "adult dosage calculator",
  "medication dose calculator",
  "clinical dosage calculator",
  "drug dosing calculator",
  "prescription dosage calculator",

  // Height & Weight Keywords
  "bsa calculator height and weight",
  "body surface area by height and weight",
  "height weight bsa calculator",
  "bsa from weight calculator",
  "bsa from height calculator",
  "body surface area estimator",
  "weight and height calculator medical",
  "bsa chart calculator",
  "bsa range calculator",
  "body size estimation calculator",

  // Health Keywords
  "health calculator",
  "medical health calculator",
  "body measurement calculator",
  "body metrics calculator",
  "health assessment calculator",
  "body composition calculator",
  "patient assessment calculator",
  "clinical measurement calculator",
  "healthcare calculator",
  "medical formula calculator",

  // Pediatric Keywords
  "pediatric bsa calculator",
  "child body surface area calculator",
  "kids dosage calculator",
  "child dosage calculator",
  "pediatric dosing calculator",
  "infant dosage calculator",
  "child medical calculator",
  "pediatric formula calculator",
  "children bsa calculator",
  "pediatric healthcare calculator",

  // Question Keywords
  "what is body surface area",
  "how to calculate bsa",
  "what is the mosteller formula",
  "how does bsa calculator work",
  "how to calculate body surface area",
  "what is normal body surface area",
  "why is bsa used in medicine",
  "how is chemotherapy dosage calculated",
  "body surface area calculator example",
  "medical dosage calculator formula",

  // Hindi Keywords
  "bsa calculator hindi",
  "body surface area calculator hindi",
  "medical dosage calculator hindi",
  "body surface area formula hindi",
  "बीएसए कैलकुलेटर",
  "बॉडी सरफेस एरिया कैलकुलेटर",
  "शरीर सतह क्षेत्रफल कैलकुलेटर",
  "मेडिकल डोज कैलकुलेटर",
  "दवा की मात्रा कैलकुलेटर",
  "मोस्टेलर फॉर्मूला कैलकुलेटर",
  "बीएसए कैसे निकालें",
  "बॉडी सरफेस एरिया फॉर्मूला",

  // Long Tail Keywords
  "free online bsa calculator",
  "best body surface area calculator",
  "accurate bsa calculator",
  "medical dosage calculator based on bsa",
  "body surface area calculator for adults",
  "body surface area calculator for children",
  "mosteller body surface area calculator",
  "clinical bsa calculator online",
  "advanced body surface area calculator",
  "body surface area and dosage calculator",
]
  },

  steps: [
    {
      step: 1,
      title: "Enter Height",
      description:
        "Provide your height in centimeters.",
      icon: "height"
    },
    {
      step: 2,
      title: "Enter Weight",
      description:
        "Provide your weight in kilograms.",
      icon: "weight"
    },
    {
      step: 3,
      title: "Calculate BSA",
      description:
        "Click calculate to determine your body surface area.",
      icon: "calculator"
    },
    {
      step: 4,
      title: "View Result",
      description:
        "See your Body Surface Area in square meters.",
      icon: "result"
    }
  ],

  formula: {
    title: "Mosteller Formula",

    formula:
      "BSA = √((Height × Weight) / 3600)",

    explanation:
      "The Mosteller Formula is one of the most commonly used methods to estimate body surface area using height and weight.",

    example: {
      input:
        "Height: 170 cm, Weight: 70 kg",

      output:
        "BSA ≈ 1.82 m²"
    },

    useCases: [
      "Medical Dosage Calculations",
      "Chemotherapy Planning",
      "Clinical Assessments",
      "Healthcare Research"
    ]
  },

  seoContent: `
<h2>What Is Body Surface Area (BSA)?</h2>

<p>
Body Surface Area (BSA) is the total external surface area of the human body. It is commonly used in medicine to determine medication dosages, assess metabolic mass, and evaluate patient health.
</p>

<h2>Mosteller Formula</h2>

<table>
<tr>
<th>Formula</th>
<th>Description</th>
</tr>
<tr>
<td>BSA = √((Height × Weight) / 3600)</td>
<td>Most commonly used BSA formula</td>
</tr>
</table>

<h2>Average BSA Values</h2>

<table>
<tr>
<th>Category</th>
<th>Average BSA</th>
</tr>
<tr>
<td>Adult Male</td>
<td>1.9 m²</td>
</tr>
<tr>
<td>Adult Female</td>
<td>1.6 m²</td>
</tr>
<tr>
<td>Child</td>
<td>Varies by age</td>
</tr>
</table>

<h2>Uses of Body Surface Area</h2>

<ul>
<li><strong>Drug Dosage:</strong> Determines medication amounts.</li>
<li><strong>Chemotherapy:</strong> Cancer treatment dosing.</li>
<li><strong>Clinical Studies:</strong> Research and health assessments.</li>
<li><strong>Kidney Function:</strong> Medical evaluations.</li>
</ul>

<h2>Why Use a BSA Calculator?</h2>

<p>
A BSA Calculator provides a quick and accurate estimate of body surface area, making it useful for healthcare professionals, students, and researchers.
</p>
`,

  faqs: [
    {
      question:
        "What is a normal BSA?",
      answer:
        "Average adult BSA ranges from approximately 1.6 m² to 1.9 m²."
    },
    {
      question:
        "Which BSA formula is most common?",
      answer:
        "The Mosteller Formula is the most widely used method for calculating body surface area."
    },
    {
      question:
        "Why is BSA important?",
      answer:
        "BSA is commonly used for medication dosing, especially in chemotherapy and pediatric medicine."
    },
    {
      question:
        "Is BSA the same as BMI?",
      answer:
        "No. BMI measures body weight relative to height, while BSA estimates total body surface area."
    },
    {
      question:
        "Can I calculate BSA online?",
      answer:
        "Yes. Our BSA Calculator provides instant results using the Mosteller Formula."
    }
  ]
};