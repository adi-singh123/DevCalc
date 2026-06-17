import { Calculator } from "@/src/types/calculator";

export const macroCalculator: Calculator = {
  slug: "macro-calculator",

  name: "Macro Calculator",

  description:
    "Calculate your daily macronutrient needs including protein, carbohydrates, and fats based on your calorie goals, activity level, and fitness objectives.",

  category: "Health",

  isPopular: false,

  seo: {
    title:
      "Macro Calculator - Calculate Protein, Carbs & Fat Intake",

    description:
      "Use our free Macro Calculator to determine your daily protein, carbohydrate, and fat requirements. Perfect for weight loss, muscle gain, fitness, and healthy eating plans.",

    keywords: [
      "macro calculator",
      "macronutrient calculator",
      "protein calculator",
      "carb calculator",
      "fat intake calculator",
      "macro nutrient calculator",
      "fitness macro calculator",
      "weight loss macro calculator",
      "muscle gain macro calculator",
      "daily macro calculator",
      "nutrition calculator",
      "protein carb fat calculator",
      "bodybuilding macro calculator",
      "macro tracker calculator",
      "meal planning calculator",
      "diet macro calculator",
      "healthy eating calculator",
      "calorie and macro calculator",
      "macro split calculator",
      "fitness nutrition calculator",
      "online macro calculator",
      "free macro calculator",
      "daily nutrition calculator",
      "macro ratio calculator",
      "macros calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Daily Calories",
      description:
        "Provide your target daily calorie intake based on your fitness goal.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Select Your Goal",
      description:
        "Choose whether you want to lose weight, maintain weight, or build muscle.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Calculate Macros",
      description:
        "The calculator distributes calories into protein, carbohydrates, and fats.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Results",
      description:
        "See your recommended daily intake of protein, carbs, and fats in grams.",
      icon: "result",
    },
  ],

  formula: {
    title: "Macronutrient Calculation Formula",

    formula:
      "Protein = 4 Calories/g | Carbohydrates = 4 Calories/g | Fat = 9 Calories/g",

    explanation:
      "A Macro Calculator divides your daily calorie target into protein, carbohydrate, and fat requirements. Macronutrient ratios vary depending on goals such as weight loss, maintenance, or muscle gain.",

    example: {
      input:
        "Calories: 2,000 | Goal: Maintenance",

      output:
        "Protein: 150g, Carbs: 200g, Fat: 67g (Approx.)",
    },

    useCases: [
      "Weight Loss",
      "Muscle Building",
      "Body Recomposition",
      "Fitness Planning",
      "Meal Planning",
      "Bodybuilding",
      "Sports Nutrition",
      "Healthy Eating",
      "Diet Tracking",
      "Performance Optimization",
    ],
  },

  faqs: [
    {
      question:
        "What is a Macro Calculator?",
      answer:
        "A Macro Calculator estimates how much protein, carbohydrates, and fat you should consume daily based on your calorie target and fitness goals.",
    },

    {
      question:
        "What are macronutrients?",
      answer:
        "Macronutrients are nutrients the body needs in large amounts, including protein, carbohydrates, and fats.",
    },

    {
      question:
        "Why are macros important?",
      answer:
        "Macros provide energy, support muscle growth and recovery, help regulate body functions, and play a key role in achieving fitness goals.",
    },

    {
      question:
        "How much protein do I need daily?",
      answer:
        "Protein requirements vary by activity level and goals, but active individuals often consume between 1.2 and 2.2 grams of protein per kilogram of body weight.",
    },

    {
      question:
        "Can macros help with weight loss?",
      answer:
        "Yes. Tracking macronutrients can help manage calorie intake, preserve muscle mass, and improve dietary consistency during weight loss.",
    },

    {
      question:
        "What macro ratio is best for muscle gain?",
      answer:
        "Many muscle-building plans prioritize higher protein intake along with sufficient carbohydrates and healthy fats to support training and recovery.",
    },

    {
      question:
        "Do I need to count macros every day?",
      answer:
        "While not required, tracking macros can improve awareness of food intake and help maintain consistency toward health and fitness goals.",
    },

    {
      question:
        "Is this Macro Calculator free?",
      answer:
        "Yes. You can calculate your daily protein, carbohydrate, and fat requirements online unlimited times for free.",
    },
  ],

  seoContent: `
<h2>What Are Macronutrients?</h2>

<p>
Macronutrients are the nutrients your body needs in large amounts to provide energy and support essential functions. The three main macronutrients are protein, carbohydrates, and fats.
</p>

<h2>Role of Each Macronutrient</h2>

<table>
  <tr>
    <th>Macronutrient</th>
    <th>Main Function</th>
  </tr>
  <tr>
    <td>Protein</td>
    <td>Muscle growth, recovery, and tissue repair</td>
  </tr>
  <tr>
    <td>Carbohydrates</td>
    <td>Primary energy source for the body</td>
  </tr>
  <tr>
    <td>Fats</td>
    <td>Hormone production and long-term energy storage</td>
  </tr>
</table>

<h2>Recommended Macro Ratios</h2>

<table>
  <tr>
    <th>Goal</th>
    <th>Protein</th>
    <th>Carbs</th>
    <th>Fat</th>
  </tr>
  <tr>
    <td>Weight Loss</td>
    <td>35%</td>
    <td>35%</td>
    <td>30%</td>
  </tr>
  <tr>
    <td>Maintenance</td>
    <td>30%</td>
    <td>40%</td>
    <td>30%</td>
  </tr>
  <tr>
    <td>Muscle Gain</td>
    <td>30%</td>
    <td>50%</td>
    <td>20%</td>
  </tr>
</table>

<h2>Best Protein Sources</h2>

<ul>
  <li><strong>Animal Sources:</strong> Chicken, fish, eggs, milk, yogurt.</li>
  <li><strong>Vegetarian Sources:</strong> Paneer, tofu, soy chunks, lentils.</li>
  <li><strong>Supplements:</strong> Whey protein and plant protein powders.</li>
</ul>

<h2>Best Carbohydrate Sources</h2>

<table>
  <tr>
    <th>Type</th>
    <th>Examples</th>
  </tr>
  <tr>
    <td>Complex Carbs</td>
    <td>Oats, brown rice, sweet potatoes</td>
  </tr>
  <tr>
    <td>Fruits</td>
    <td>Bananas, apples, oranges</td>
  </tr>
  <tr>
    <td>Whole Grains</td>
    <td>Whole wheat bread, quinoa</td>
  </tr>
</table>

<h2>Best Healthy Fat Sources</h2>

<ul>
  <li>Almonds and walnuts</li>
  <li>Peanut butter</li>
  <li>Avocado</li>
  <li>Olive oil</li>
  <li>Fatty fish</li>
</ul>

<h2>Macro Planning by Goal</h2>

<table>
  <tr>
    <th>Goal</th>
    <th>Strategy</th>
  </tr>
  <tr>
    <td>Weight Loss</td>
    <td>Higher protein and moderate carbs</td>
  </tr>
  <tr>
    <td>Muscle Gain</td>
    <td>Higher carbs with sufficient protein</td>
  </tr>
  <tr>
    <td>Maintenance</td>
    <td>Balanced intake of all macros</td>
  </tr>
</table>

<h2>Common Macro Tracking Mistakes</h2>

<ul>
  <li>Focusing only on calories and ignoring protein.</li>
  <li>Eating too little fat.</li>
  <li>Not tracking liquid calories.</li>
  <li>Using inaccurate portion sizes.</li>
</ul>

<h2>Sample Muscle Gain Meal Plan</h2>

<table>
  <tr>
    <th>Meal</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>Breakfast</td>
    <td>Oats, milk, banana, eggs</td>
  </tr>
  <tr>
    <td>Lunch</td>
    <td>Rice, chicken, vegetables</td>
  </tr>
  <tr>
    <td>Snack</td>
    <td>Peanut butter sandwich</td>
  </tr>
  <tr>
    <td>Dinner</td>
    <td>Paneer, roti, salad</td>
  </tr>
</table>

<h2>Pro Tip</h2>

<p>
Protein should be distributed evenly across all meals rather than consumed in a single sitting. This improves muscle recovery, satiety, and overall nutrition quality.
</p>
`,
};