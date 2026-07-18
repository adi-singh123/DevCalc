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
      "Macro Calculator: Find Your Ideal Protein, Carbs & Fat for Your Goal",

    description:
"Enter your calories and goal to get your exact daily protein, carb, and fat targets in grams — tailored for weight loss, muscle gain, or maintenance. Free, instant, no sign-up",
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

  // Core Macro Keywords
  "calculate macros",
  "macro nutrient tracker",
  "daily macros calculator",
  "macro needs calculator",
  "macro estimator",
  "macronutrient tracker",
  "macro planner",
  "nutrition macro calculator",
  "personalized macro calculator",
  "macro nutrition calculator",

  // Protein Keywords
  "protein intake calculator",
  "daily protein calculator",
  "protein needs calculator",
  "protein requirement calculator",
  "protein per day calculator",
  "bodybuilding protein calculator",
  "muscle building protein calculator",
  "protein goal calculator",
  "protein nutrition calculator",
  "protein macro calculator",

  // Carb Keywords
  "carbohydrate calculator",
  "daily carb calculator",
  "carb intake calculator",
  "carb requirement calculator",
  "carb goal calculator",
  "low carb calculator",
  "keto carb calculator",
  "carbohydrate needs calculator",
  "carb macro calculator",
  "daily carbohydrate calculator",

  // Fat Keywords
  "fat intake calculator",
  "daily fat calculator",
  "fat requirement calculator",
  "healthy fat calculator",
  "fat macro calculator",
  "dietary fat calculator",
  "daily fat needs calculator",
  "fat consumption calculator",
  "nutrition fat calculator",
  "fat goal calculator",

  // Weight Loss Keywords
  "weight loss macro calculator",
  "fat loss macro calculator",
  "cutting macro calculator",
  "weight loss nutrition calculator",
  "diet macros calculator",
  "macro calculator for fat loss",
  "macro deficit calculator",
  "calorie deficit macro calculator",
  "healthy weight loss macros",
  "cutting nutrition calculator",

  // Muscle Gain Keywords
  "muscle gain macro calculator",
  "bulking macro calculator",
  "lean bulk macro calculator",
  "muscle building nutrition calculator",
  "bodybuilding macros calculator",
  "mass gain calculator",
  "muscle growth calculator",
  "bulking nutrition calculator",
  "macro calculator for muscle gain",
  "fitness bulking calculator",

  // Fitness & Bodybuilding Keywords
  "fitness nutrition calculator",
  "gym macro calculator",
  "athlete macro calculator",
  "sports nutrition calculator",
  "bodybuilding nutrition calculator",
  "workout nutrition calculator",
  "fitness meal planner",
  "strength training nutrition calculator",
  "exercise nutrition calculator",
  "fitness diet calculator",

  // Calorie & TDEE Keywords
  "calorie and macro calculator",
  "tdee macro calculator",
  "maintenance calories and macros",
  "calorie intake calculator",
  "daily calorie and macro calculator",
  "macro calorie calculator",
  "nutrition and calorie calculator",
  "energy needs calculator",
  "maintenance macro calculator",
  "daily calorie needs calculator",

  // Meal Planning Keywords
  "meal planning calculator",
  "meal macro calculator",
  "macro meal planner",
  "nutrition planning calculator",
  "diet planning calculator",
  "healthy eating planner",
  "macro food calculator",
  "meal prep calculator",
  "nutrition tracker calculator",
  "meal nutrition calculator",

  // Ratio Keywords
  "macro ratio calculator",
  "macro split calculator",
  "40 30 30 macro calculator",
  "50 30 20 macro calculator",
  "keto macro calculator",
  "balanced diet calculator",
  "custom macro calculator",
  "macro percentage calculator",
  "nutrition ratio calculator",
  "macro distribution calculator",

  // Men & Women Keywords
  "macro calculator for men",
  "macro calculator for women",
  "female macro calculator",
  "male macro calculator",
  "macro calculator by age",
  "macro calculator by weight",
  "personalized macro calculator",
  "macro calculator age and gender",
  "healthy macros for women",
  "healthy macros for men",

  // Question Keywords
  "how to calculate macros",
  "what are macros",
  "how many grams of protein do i need",
  "how many carbs should i eat",
  "how much fat should i eat daily",
  "what is the best macro ratio",
  "how to calculate macros for weight loss",
  "how to calculate macros for muscle gain",
  "macro calculator example",
  "daily macro requirements",

  // Long Tail Keywords
  "free online macro calculator",
  "best macronutrient calculator",
  "accurate macro calculator for weight loss",
  "macro calculator with calorie goals",
  "macro calculator for bodybuilding",
  "daily protein carb fat calculator",
  "online nutrition and macro calculator",
  "macro calculator for muscle building",
  "advanced macro ratio calculator",
  "personalized macro calculator online",
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