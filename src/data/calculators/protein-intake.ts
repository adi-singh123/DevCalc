import { Calculator } from "@/src/types/calculator";

export const proteinIntakeCalculator: Calculator = {
  slug: "protein-intake-calculator",

  name: "Protein Intake Calculator",

  description:
    "Calculate your daily protein requirements based on body weight, activity level, and fitness goals. Determine how much protein you need for muscle gain, weight loss, recovery, and overall health.",

  category: "Health",

  isPopular: true,

  seo: {
    title:
      "Protein Intake Calculator - Calculate Daily Protein Needs",

    description:
      "Use our free Protein Intake Calculator to estimate your daily protein requirements. Find the ideal protein intake for muscle gain, weight loss, fitness, and healthy living.",

    keywords: [
      "protein intake calculator",
      "protein calculator",
      "daily protein calculator",
      "protein requirement calculator",
      "protein needs calculator",
      "how much protein do i need",
      "protein per day calculator",
      "muscle gain protein calculator",
      "weight loss protein calculator",
      "bodybuilding protein calculator",
      "protein intake by weight",
      "protein consumption calculator",
      "protein goal calculator",
      "fitness protein calculator",
      "nutrition calculator",
      "healthy protein intake",
      "protein tracker calculator",
      "protein diet calculator",
      "protein recommendation calculator",
      "protein requirement by weight",
      "daily nutrition calculator",
      "gym protein calculator",
      "lean muscle protein calculator",
      "online protein calculator",
      "free protein calculator",
    ],
  },

  compareWith: [
  "macro-calculator",
  "calorie-calculator",
  "lean-body-mass-calculator",
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
        "Choose your activity level or fitness goal.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Calculate Protein Needs",
      description:
        "The calculator estimates your recommended daily protein intake.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Results",
      description:
        "See your daily protein requirement in grams.",
      icon: "result",
    },
  ],

  formula: {
    title: "Protein Intake Formula",

    formula:
      "Daily Protein (g) = Body Weight (kg) × Protein Factor",

    explanation:
      "Protein requirements vary based on activity level and fitness goals. Sedentary adults typically require around 0.8 g/kg, while active individuals, athletes, and people building muscle may need between 1.2 and 2.2 g/kg of body weight daily.",

    example: {
      input:
        "Weight: 70 kg, Goal: Muscle Gain",

      output:
        "Recommended Protein Intake: 140 g per day",
    },

    useCases: [
      "Muscle Building",
      "Weight Loss",
      "Fitness Planning",
      "Bodybuilding",
      "Sports Nutrition",
      "Healthy Eating",
      "Strength Training",
      "Recovery Support",
      "Meal Planning",
      "Nutrition Tracking",
    ],
  },

  faqs: [
    {
      question:
        "What is a Protein Intake Calculator?",
      answer:
        "A Protein Intake Calculator estimates how much protein you should consume daily based on your body weight and activity level.",
    },

    {
      question:
        "How much protein do I need per day?",
      answer:
        "Most adults require at least 0.8 grams of protein per kilogram of body weight, while active individuals often need between 1.2 and 2.2 grams per kilogram.",
    },

    {
      question:
        "Why is protein important?",
      answer:
        "Protein supports muscle growth, tissue repair, immune function, hormone production, and overall health.",
    },

    {
      question:
        "Can protein help with weight loss?",
      answer:
        "Yes. Protein can increase satiety, help preserve muscle mass, and support healthy weight management when combined with a balanced diet.",
    },

    {
      question:
        "How much protein is needed for muscle gain?",
      answer:
        "Many athletes and individuals building muscle consume between 1.6 and 2.2 grams of protein per kilogram of body weight daily.",
    },

    {
      question:
        "Can I consume too much protein?",
      answer:
        "Excessive protein intake may not provide additional benefits and should be balanced within overall calorie and nutrition goals.",
    },

    {
      question:
        "Does age affect protein requirements?",
      answer:
        "Yes. Older adults may benefit from slightly higher protein intake to help maintain muscle mass and strength.",
    },

    {
      question:
        "Is this Protein Intake Calculator free?",
      answer:
        "Yes. You can calculate your recommended daily protein intake online unlimited times completely free.",
    },
  ],

  seoContent: `
<h2>Why Protein is Important</h2>

<p>
Protein is one of the most important nutrients for building muscle, repairing tissues, supporting immunity, and maintaining overall health. Your daily protein requirement depends on your weight, activity level, and fitness goals.
</p>

<h2>Recommended Protein Intake</h2>

<table>
  <tr>
    <th>Goal</th>
    <th>Protein Requirement</th>
  </tr>
  <tr>
    <td>Sedentary Lifestyle</td>
    <td>0.8g per kg body weight</td>
  </tr>
  <tr>
    <td>Weight Loss</td>
    <td>1.2 - 1.6g per kg</td>
  </tr>
  <tr>
    <td>Muscle Building</td>
    <td>1.6 - 2.2g per kg</td>
  </tr>
  <tr>
    <td>Athletes</td>
    <td>1.8 - 2.5g per kg</td>
  </tr>
</table>

<h2>Best High-Protein Foods</h2>

<table>
  <tr>
    <th>Food</th>
    <th>Protein (per 100g)</th>
  </tr>
  <tr>
    <td>Chicken Breast</td>
    <td>31g</td>
  </tr>
  <tr>
    <td>Eggs</td>
    <td>13g</td>
  </tr>
  <tr>
    <td>Paneer</td>
    <td>18g</td>
  </tr>
  <tr>
    <td>Soy Chunks</td>
    <td>52g</td>
  </tr>
  <tr>
    <td>Lentils (Dal)</td>
    <td>9g</td>
  </tr>
</table>

<h2>Benefits of High Protein Intake</h2>

<ul>
  <li><strong>Muscle Growth:</strong> Supports muscle repair and development.</li>
  <li><strong>Fat Loss:</strong> Increases satiety and reduces hunger.</li>
  <li><strong>Recovery:</strong> Helps recover after workouts.</li>
  <li><strong>Metabolism:</strong> Protein requires more energy to digest.</li>
</ul>

<h2>Protein Timing Guide</h2>

<table>
  <tr>
    <th>Time</th>
    <th>Recommended Source</th>
  </tr>
  <tr>
    <td>Breakfast</td>
    <td>Eggs, Milk, Oats</td>
  </tr>
  <tr>
    <td>Lunch</td>
    <td>Chicken, Paneer, Dal</td>
  </tr>
  <tr>
    <td>Post Workout</td>
    <td>Whey Protein, Eggs</td>
  </tr>
  <tr>
    <td>Dinner</td>
    <td>Fish, Paneer, Soy</td>
  </tr>
</table>

<h2>Vegetarian Protein Sources</h2>

<ul>
  <li>Soy Chunks</li>
  <li>Paneer</li>
  <li>Tofu</li>
  <li>Lentils and Beans</li>
  <li>Greek Yogurt</li>
  <li>Milk</li>
</ul>

<h2>Common Protein Intake Mistakes</h2>

<ul>
  <li>Eating most protein in a single meal.</li>
  <li>Ignoring protein after workouts.</li>
  <li>Not tracking daily intake.</li>
  <li>Relying only on supplements.</li>
</ul>

<h2>Protein Intake by Fitness Goal</h2>

<table>
  <tr>
    <th>Goal</th>
    <th>Recommendation</th>
  </tr>
  <tr>
    <td>Weight Loss</td>
    <td>Higher protein, moderate calories</td>
  </tr>
  <tr>
    <td>Muscle Gain</td>
    <td>High protein with calorie surplus</td>
  </tr>
  <tr>
    <td>Maintenance</td>
    <td>Balanced protein intake</td>
  </tr>
</table>

<h2>Pro Tip</h2>

<p>
Instead of consuming all your protein in one meal, distribute it across 3-5 meals throughout the day. This helps maximize muscle protein synthesis and improves recovery.
</p>
`,
};