import { Calculator } from "@/src/types/calculator";

export const pregnancyWeightGainCalculator: Calculator = {
  slug: "pregnancy-weight-gain-calculator",

  name: "Pregnancy Weight Gain Calculator",

  description:
    "Estimate healthy pregnancy weight gain based on your pre-pregnancy BMI, current pregnancy week, height, and weight. Track recommended weight gain throughout pregnancy and understand healthy pregnancy growth milestones.",

  category: "Health",

  isPopular: false,

  seo: {
    title:
      "Pregnancy Weight Gain Calculator - Healthy Weight Gain During Pregnancy",

    description:
      "Calculate recommended pregnancy weight gain based on pre-pregnancy BMI and pregnancy stage. Understand healthy weight gain ranges, trimester guidelines, and pregnancy growth recommendations.",

    keywords: [
      "pregnancy weight gain calculator",
      "pregnancy weight gain chart",
      "healthy pregnancy weight gain",
      "pregnancy bmi calculator",
      "weight gain during pregnancy",
      "pregnancy weight tracker",
      "recommended pregnancy weight gain",
      "pregnancy weight gain by week",
      "pregnancy weight gain by trimester",
      "pregnancy health calculator",
      "pregnancy nutrition calculator",
      "maternal weight gain calculator",
      "pregnancy wellness calculator",
      "healthy pregnancy weight chart",
      "pregnancy bmi and weight gain"
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Pre-Pregnancy Weight",
      description:
        "Provide your weight before pregnancy for accurate BMI calculation.",
      icon: "weight",
    },

    {
      step: 2,
      title: "Enter Height",
      description:
        "Enter your height in centimeters to determine your BMI category.",
      icon: "height",
    },

    {
      step: 3,
      title: "Enter Pregnancy Week",
      description:
        "Select your current week of pregnancy.",
      icon: "calendar",
    },

    {
      step: 4,
      title: "View Recommended Weight Gain",
      description:
        "See your healthy weight gain range and pregnancy progress.",
      icon: "result",
    },
  ],

  formula: {
    title: "Pregnancy Weight Gain Calculation",

    formula:
      "BMI = Weight (kg) ÷ Height² (m²)",

    explanation:
      "Recommended pregnancy weight gain depends on your pre-pregnancy Body Mass Index (BMI). Medical guidelines provide different target weight gain ranges for underweight, normal weight, overweight, and obese individuals.",

    example: {
      input:
        "Weight: 60 kg, Height: 165 cm",

      output:
        "BMI: 22.0 (Normal Weight), Recommended Gain: 11.5–16 kg",
    },

    useCases: [
      "Pregnancy Health Monitoring",
      "Weight Management During Pregnancy",
      "Prenatal Care Planning",
      "Nutrition Planning",
      "Pregnancy Wellness Tracking",
    ],
  },

  seoContent: `
<h2>What Is a Pregnancy Weight Gain Calculator?</h2>

<p>
A Pregnancy Weight Gain Calculator helps estimate how much weight gain is recommended during pregnancy based on your pre-pregnancy Body Mass Index (BMI). Healthy pregnancy weight gain supports your baby's growth while reducing the risk of complications.
</p>

<h2>Why Weight Gain During Pregnancy Matters</h2>

<p>
Weight gain is a natural and important part of pregnancy. The additional weight supports fetal development, the placenta, amniotic fluid, increased blood volume, and changes in maternal tissues.
</p>

<table>
  <tr>
    <th>Pregnancy Component</th>
    <th>Typical Contribution</th>
  </tr>
  <tr>
    <td>Baby</td>
    <td>3 - 4 kg</td>
  </tr>
  <tr>
    <td>Placenta</td>
    <td>0.5 - 1 kg</td>
  </tr>
  <tr>
    <td>Amniotic Fluid</td>
    <td>1 kg</td>
  </tr>
  <tr>
    <td>Blood Volume</td>
    <td>1 - 2 kg</td>
  </tr>
  <tr>
    <td>Maternal Tissue</td>
    <td>2 - 5 kg</td>
  </tr>
</table>

<h2>Recommended Pregnancy Weight Gain by BMI</h2>

<table>
  <tr>
    <th>Pre-Pregnancy BMI</th>
    <th>Category</th>
    <th>Recommended Weight Gain</th>
  </tr>
  <tr>
    <td>Below 18.5</td>
    <td>Underweight</td>
    <td>12.5 - 18 kg</td>
  </tr>
  <tr>
    <td>18.5 - 24.9</td>
    <td>Normal Weight</td>
    <td>11.5 - 16 kg</td>
  </tr>
  <tr>
    <td>25 - 29.9</td>
    <td>Overweight</td>
    <td>7 - 11.5 kg</td>
  </tr>
  <tr>
    <td>30 or Above</td>
    <td>Obese</td>
    <td>5 - 9 kg</td>
  </tr>
</table>

<h2>Pregnancy Weight Gain by Trimester</h2>

<table>
  <tr>
    <th>Trimester</th>
    <th>Expected Weight Gain</th>
  </tr>
  <tr>
    <td>First Trimester</td>
    <td>0.5 - 2 kg Total</td>
  </tr>
  <tr>
    <td>Second Trimester</td>
    <td>Steady Weekly Gain</td>
  </tr>
  <tr>
    <td>Third Trimester</td>
    <td>Continued Growth and Weight Gain</td>
  </tr>
</table>

<h2>Factors Affecting Pregnancy Weight Gain</h2>

<ul>
  <li><strong>Pre-Pregnancy BMI:</strong> A major factor in determining healthy gain.</li>
  <li><strong>Nutrition:</strong> Balanced meals support healthy growth.</li>
  <li><strong>Physical Activity:</strong> Safe exercise can support healthy weight management.</li>
  <li><strong>Multiple Pregnancy:</strong> Twins and triplets require different recommendations.</li>
  <li><strong>Medical Conditions:</strong> Certain conditions may influence weight gain.</li>
</ul>

<h2>Healthy Pregnancy Nutrition Tips</h2>

<ul>
  <li>Eat nutrient-dense foods.</li>
  <li>Include adequate protein in every meal.</li>
  <li>Consume fruits and vegetables daily.</li>
  <li>Stay hydrated throughout pregnancy.</li>
  <li>Follow prenatal vitamin recommendations.</li>
</ul>

<h2>When to Speak With a Healthcare Professional</h2>

<p>
If weight gain is significantly above or below recommended ranges, consult a healthcare professional. Regular prenatal checkups help ensure both maternal and fetal health are progressing normally.
</p>

<h2>Benefits of Monitoring Pregnancy Weight Gain</h2>

<ul>
  <li>Supports healthy fetal development.</li>
  <li>Reduces pregnancy-related complications.</li>
  <li>Improves nutritional awareness.</li>
  <li>Helps maintain maternal health.</li>
  <li>Provides valuable pregnancy progress tracking.</li>
</ul>

<h2>Understanding Pregnancy Weight Gain Recommendations</h2>

<p>
Weight gain recommendations are guidelines designed to support a healthy pregnancy. Individual needs may vary depending on medical history, activity level, and overall health. A Pregnancy Weight Gain Calculator provides a helpful estimate to guide healthy pregnancy planning and monitoring.
</p>
`,

  faqs: [
    {
      question:
        "How much weight should I gain during pregnancy?",
      answer:
        "The recommended amount depends on your pre-pregnancy BMI. Most individuals with a normal BMI are advised to gain between 11.5 and 16 kilograms during pregnancy.",
    },

    {
      question:
        "Why is BMI important during pregnancy?",
      answer:
        "Pre-pregnancy BMI helps determine the healthy weight gain range recommended during pregnancy.",
    },

    {
      question:
        "Can gaining too much weight during pregnancy be harmful?",
      answer:
        "Excessive weight gain may increase the risk of complications such as gestational diabetes, high blood pressure, and delivery challenges.",
    },

    {
      question:
        "Can I lose weight during pregnancy?",
      answer:
        "Weight management recommendations should always be discussed with a healthcare professional during pregnancy.",
    },

    {
      question:
        "Does pregnancy weight gain occur evenly?",
      answer:
        "No. Weight gain is typically slower during the first trimester and increases more steadily during the second and third trimesters.",
    },
  ],
};