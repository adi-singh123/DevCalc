import { Calculator } from "@/src/types/calculator";

export const waterIntakeCalculator: Calculator = {
  slug: "water-intake-calculator",

  name: "Water Intake Calculator",

  description:
    "Calculate your recommended daily water intake based on body weight, activity level, and lifestyle. Stay hydrated and support overall health with personalized hydration recommendations.",

  category: "Health",

  isPopular: true,

  seo: {
    title:
      "Water Intake Calculator - Calculate Daily Water Needs",

    description:
      "Use our free Water Intake Calculator to estimate how much water you should drink daily based on your weight and activity level. Calculate your ideal daily hydration needs instantly.",

    keywords: [
      "water intake calculator",
      "daily water intake calculator",
      "how much water should i drink",
      "hydration calculator",
      "water consumption calculator",
      "daily hydration calculator",
      "water requirement calculator",
      "drink water calculator",
      "water needs calculator",
      "healthy hydration calculator",
      "water tracker calculator",
      "body weight water calculator",
      "recommended water intake",
      "water intake by weight",
      "water drinking calculator",
      "fitness hydration calculator",
      "health water calculator",
      "online water intake calculator",
      "free hydration calculator",
      "daily water requirement",
      "water goal calculator",
      "water planning calculator",
      "hydration needs calculator",
      "water recommendation calculator",
      "daily fluid intake calculator",
    ],
  },

  compareWith: [
  "bmi-calculator",
  "calorie-calculator",
  "macro-calculator",
],

  steps: [
    {
      step: 1,
      title: "Enter Your Body Weight",
      description:
        "Provide your current body weight in kilograms.",
      icon: "weight",
    },

    {
      step: 2,
      title: "Select Activity Level",
      description:
        "Choose your daily physical activity level.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Calculate Water Intake",
      description:
        "The calculator estimates your recommended daily hydration needs.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Results",
      description:
        "See your daily water intake recommendation in liters and glasses.",
      icon: "result",
    },
  ],

  formula: {
    title: "Water Intake Formula",

    formula:
      "Daily Water Intake (Liters) = Body Weight (kg) × 0.033",

    explanation:
      "A commonly used hydration guideline recommends approximately 33 milliliters of water per kilogram of body weight each day. Additional water may be required for exercise, hot weather, or specific health conditions.",

    example: {
      input:
        "Weight: 70 kg",

      output:
        "Recommended Water Intake: 2.31 Liters per Day",
    },

    useCases: [
      "Daily Hydration Planning",
      "Fitness Programs",
      "Weight Loss Plans",
      "Healthy Lifestyle Management",
      "Athletic Performance",
      "Nutrition Planning",
      "Health Monitoring",
      "Exercise Recovery",
      "Wellness Tracking",
      "Hydration Goals",
    ],
  },

  faqs: [
    {
      question:
        "How much water should I drink per day?",
      answer:
        "A common recommendation is approximately 30–35 milliliters of water per kilogram of body weight, although individual needs may vary.",
    },

    {
      question:
        "Does exercise affect water requirements?",
      answer:
        "Yes. Physical activity increases fluid loss through sweat, so additional water intake is often necessary.",
    },

    {
      question:
        "Can I drink too much water?",
      answer:
        "Yes. Excessive water intake in a short period can lead to water intoxication, although this is uncommon.",
    },

    {
      question:
        "Do coffee and tea count toward water intake?",
      answer:
        "Yes. Most beverages contribute to daily fluid intake, though water remains the best hydration source.",
    },

    {
      question:
        "Why is hydration important?",
      answer:
        "Proper hydration supports body temperature regulation, digestion, circulation, physical performance, and overall health.",
    },

    {
      question:
        "Is this Water Intake Calculator free?",
      answer:
        "Yes. You can calculate your recommended daily water intake online unlimited times for free.",
    },
  ],

  seoContent: `
<h2>Why Water Intake Matters</h2>

<p>
Water is essential for every function in the body. Proper hydration helps regulate body temperature, transport nutrients, improve digestion, support kidney function, and maintain healthy skin.
</p>

<h2>Daily Water Intake Recommendations</h2>

<table>
  <tr>
    <th>Group</th>
    <th>Recommended Intake</th>
  </tr>
  <tr>
    <td>Adult Men</td>
    <td>3.7 Litres per day</td>
  </tr>
  <tr>
    <td>Adult Women</td>
    <td>2.7 Litres per day</td>
  </tr>
  <tr>
    <td>Active Individuals</td>
    <td>Additional 0.5 - 1.5 Litres</td>
  </tr>
  <tr>
    <td>Hot Weather</td>
    <td>Additional 1 - 2 Litres</td>
  </tr>
</table>

<h2>Signs of Dehydration</h2>

<ul>
  <li><strong>Dark Urine:</strong> One of the earliest signs of dehydration.</li>
  <li><strong>Dry Mouth:</strong> Indicates low fluid levels.</li>
  <li><strong>Fatigue:</strong> Reduced energy and concentration.</li>
  <li><strong>Headaches:</strong> Common symptom of dehydration.</li>
  <li><strong>Dizziness:</strong> May occur due to low fluid balance.</li>
</ul>

<h2>Benefits of Staying Hydrated</h2>

<ul>
  <li><strong>Improved Energy:</strong> Better physical and mental performance.</li>
  <li><strong>Healthy Skin:</strong> Supports skin hydration.</li>
  <li><strong>Better Digestion:</strong> Helps prevent constipation.</li>
  <li><strong>Weight Management:</strong> May reduce unnecessary hunger.</li>
  <li><strong>Kidney Health:</strong> Helps remove waste efficiently.</li>
</ul>

<h2>Hydration Schedule Example</h2>

<table>
  <tr>
    <th>Time</th>
    <th>Water Intake</th>
  </tr>
  <tr>
    <td>After Waking Up</td>
    <td>500 ml</td>
  </tr>
  <tr>
    <td>Before Breakfast</td>
    <td>250 ml</td>
  </tr>
  <tr>
    <td>Before Lunch</td>
    <td>500 ml</td>
  </tr>
  <tr>
    <td>Afternoon</td>
    <td>500 ml</td>
  </tr>
  <tr>
    <td>Before Dinner</td>
    <td>500 ml</td>
  </tr>
</table>

<h2>Foods That Help Hydration</h2>

<table>
  <tr>
    <th>Food</th>
    <th>Water Content</th>
  </tr>
  <tr>
    <td>Watermelon</td>
    <td>92%</td>
  </tr>
  <tr>
    <td>Cucumber</td>
    <td>96%</td>
  </tr>
  <tr>
    <td>Orange</td>
    <td>86%</td>
  </tr>
  <tr>
    <td>Strawberries</td>
    <td>91%</td>
  </tr>
</table>

<h2>Common Hydration Mistakes</h2>

<ul>
  <li>Waiting until you feel thirsty.</li>
  <li>Replacing water with sugary drinks.</li>
  <li>Ignoring hydration during exercise.</li>
  <li>Not increasing intake during hot weather.</li>
</ul>

<h2>Pro Tip</h2>

<p>
A simple way to monitor hydration is by checking urine color. Pale yellow urine generally indicates good hydration, while dark yellow urine may suggest you need more fluids.
</p>
`,
};
