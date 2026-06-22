import { Calculator } from "@/src/types/calculator";

export const bmrCalculator: Calculator = {
  slug: "bmr-calculator",

  name: "BMR Calculator",

  description:
    "Calculate your Basal Metabolic Rate (BMR) using the Mifflin-St Jeor Equation. Estimate the number of calories your body burns at rest and determine your daily calorie requirements based on activity level.",

  category: "Health",

  isPopular: true,

  seo: {
    title:
      "BMR Calculator - Calculate Basal Metabolic Rate Online",

    description:
      "Free online BMR Calculator. Calculate your Basal Metabolic Rate using the Mifflin-St Jeor Equation and estimate daily calorie needs for weight loss, maintenance, or muscle gain.",

    keywords: [
      "bmr calculator",
      "basal metabolic rate calculator",
      "daily calorie calculator",
      "calories burned at rest",
      "bmr formula",
      "mifflin st jeor calculator",
      "weight loss calorie calculator",
      "maintenance calories calculator",
      "fitness calculator",
      "health calculator",
      "daily calorie needs",
      "calorie requirement calculator",
      "metabolism calculator",
      "online bmr calculator",
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
      title: "Select Gender",
      description:
        "Choose your gender to apply the appropriate BMR formula.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Age",
      description:
        "Provide your age in years for accurate calorie estimation.",
      icon: "calendar",
    },
    {
      step: 3,
      title: "Enter Weight and Height",
      description:
        "Input your weight in kilograms and height in centimeters.",
      icon: "weight",
    },
    {
      step: 4,
      title: "View BMR Results",
      description:
        "See your BMR and estimated daily calorie requirements based on activity level.",
      icon: "result",
    },
  ],

  formula: {
    title: "BMR Formula (Mifflin-St Jeor Equation)",

    formula:
      "Men: BMR = 10 × Weight + 6.25 × Height − 5 × Age + 5\nWomen: BMR = 10 × Weight + 6.25 × Height − 5 × Age − 161",

    explanation:
      "The Mifflin-St Jeor Equation is one of the most widely accepted methods for estimating Basal Metabolic Rate (BMR). BMR represents the number of calories your body requires to perform essential functions such as breathing, circulation, cell production, and temperature regulation while at complete rest.",

    example: {
      input:
        "Male, Age: 25 years, Weight: 70 kg, Height: 175 cm",

      output:
        "BMR = 10 × 70 + 6.25 × 175 − 5 × 25 + 5 = 1673.75 calories/day",
    },

    useCases: [
      "Weight loss planning",
      "Weight maintenance",
      "Muscle gain programs",
      "Daily calorie estimation",
      "Fitness and nutrition tracking",
      "Diet planning",
    ],
  },

faqs: [
  {
    question: "What is Basal Metabolic Rate (BMR)?",
    answer:
      "Basal Metabolic Rate (BMR) is the number of calories your body requires each day to perform essential life-sustaining functions while at complete rest. These functions include breathing, blood circulation, body temperature regulation, cell repair, brain activity, and organ function. BMR represents the minimum amount of energy needed to keep your body alive even if you remain inactive all day. Understanding your BMR is important because it serves as the foundation for calculating daily calorie needs, weight loss targets, muscle gain plans, and overall nutrition requirements."
  },

  {
    question: "How is BMR calculated?",
    answer:
      "BMR is calculated using factors such as age, gender, weight, and height. Most modern calculators use scientifically validated formulas like the Mifflin-St Jeor Equation, which is considered one of the most accurate methods for estimating calorie requirements. Since men generally have more muscle mass than women, they typically have a higher BMR. Likewise, younger individuals and people with more lean muscle mass tend to burn more calories at rest compared to older adults or individuals with lower muscle mass."
  },

  {
    question: "What is the difference between BMR and TDEE?",
    answer:
      "BMR represents the calories your body needs at complete rest, while Total Daily Energy Expenditure (TDEE) includes all daily activities such as walking, exercising, working, and household tasks. TDEE is calculated by multiplying BMR by an activity factor. For example, if your BMR is 1,800 calories and you have a moderately active lifestyle, your TDEE may be around 2,500 to 2,800 calories per day. BMR is the starting point, whereas TDEE provides a more realistic estimate of daily calorie needs."
  },

  {
    question: "Can I use BMR for weight loss planning?",
    answer:
      "Yes. BMR is often used as the foundation for creating a calorie deficit, which is required for weight loss. Once you calculate your TDEE, you can reduce daily calorie intake by a reasonable amount to encourage gradual and sustainable fat loss. However, consuming fewer calories than your BMR for extended periods is generally not recommended because it may affect energy levels, muscle mass, metabolism, and overall health. A balanced diet and regular exercise are essential for healthy weight management."
  },

  {
    question: "Does BMR change with age?",
    answer:
      "Yes. BMR naturally decreases with age because muscle mass tends to decline and metabolic processes slow down over time. Younger individuals generally burn more calories at rest compared to older adults. Maintaining an active lifestyle, performing strength training exercises, and preserving muscle mass can help reduce the rate at which BMR declines with age."
  },

  {
    question: "Does increasing muscle mass raise BMR?",
    answer:
      "Yes. Muscle tissue requires more energy to maintain than fat tissue, even when the body is at rest. As a result, individuals with greater muscle mass typically have a higher BMR and burn more calories throughout the day. Strength training and resistance exercises can help build muscle, which may gradually increase metabolism and support long-term weight management goals."
  },

  {
    question: "Why is my BMR important for fitness goals?",
    answer:
      "Knowing your BMR helps you create more effective nutrition and fitness plans. Whether your goal is weight loss, muscle gain, fat reduction, or maintaining your current weight, understanding how many calories your body needs at rest allows you to make informed decisions about food intake and exercise. Many athletes, fitness enthusiasts, and health-conscious individuals use BMR calculations as part of their overall health strategy."
  },

  {
    question: "Can a BMR calculator provide exact calorie requirements?",
    answer:
      "No calculator can provide a perfectly exact value because metabolism varies between individuals. BMR calculators provide scientifically estimated values based on population averages and proven formulas. Factors such as genetics, hormones, body composition, medical conditions, sleep quality, and lifestyle habits can influence actual calorie requirements. However, BMR calculators are highly useful for establishing a reliable starting point for nutrition and fitness planning."
  }
],

  seoContent: `
<h2>What is BMR?</h2>

<p>
Basal Metabolic Rate (BMR) is the number of calories your body burns while at complete rest. These calories are used to maintain essential functions such as breathing, circulation, body temperature regulation, and cell repair.
</p>

<h2>Why BMR Matters</h2>

<table>
  <tr>
    <th>Goal</th>
    <th>How BMR Helps</th>
  </tr>
  <tr>
    <td>Weight Loss</td>
    <td>Helps create a safe calorie deficit.</td>
  </tr>
  <tr>
    <td>Weight Gain</td>
    <td>Helps determine surplus calorie needs.</td>
  </tr>
  <tr>
    <td>Muscle Building</td>
    <td>Supports proper nutrition planning.</td>
  </tr>
  <tr>
    <td>Maintenance</td>
    <td>Prevents overeating or undereating.</td>
  </tr>
</table>

<h2>BMR vs TDEE</h2>

<table>
  <tr>
    <th>Metric</th>
    <th>Meaning</th>
  </tr>
  <tr>
    <td>BMR</td>
    <td>Calories burned at complete rest.</td>
  </tr>
  <tr>
    <td>TDEE</td>
    <td>Total calories burned including daily activities and exercise.</td>
  </tr>
</table>

<h2>Factors That Affect BMR</h2>

<ul>
  <li><strong>Age:</strong> BMR naturally decreases with age.</li>
  <li><strong>Gender:</strong> Men generally have a higher BMR than women.</li>
  <li><strong>Muscle Mass:</strong> More muscle burns more calories.</li>
  <li><strong>Body Weight:</strong> Larger bodies require more energy.</li>
  <li><strong>Genetics:</strong> Metabolism varies between individuals.</li>
</ul>

<h2>How to Increase Your BMR</h2>

<ul>
  <li><strong>Build Muscle:</strong> Strength training increases resting calorie burn.</li>
  <li><strong>Eat Enough Protein:</strong> Protein has a higher thermic effect.</li>
  <li><strong>Stay Active:</strong> Regular exercise supports metabolism.</li>
  <li><strong>Sleep Well:</strong> Poor sleep may negatively affect metabolism.</li>
  <li><strong>Stay Hydrated:</strong> Water supports efficient metabolic function.</li>
</ul>

<h2>Daily Calorie Adjustment Guide</h2>

<table>
  <tr>
    <th>Goal</th>
    <th>Calorie Change</th>
  </tr>
  <tr>
    <td>Lose Weight</td>
    <td>BMR/TDEE - 300 to 500 calories</td>
  </tr>
  <tr>
    <td>Maintain Weight</td>
    <td>Eat around TDEE calories</td>
  </tr>
  <tr>
    <td>Gain Weight</td>
    <td>BMR/TDEE + 300 to 500 calories</td>
  </tr>
</table>

<h2>Best Foods to Support Metabolism</h2>

<table>
  <tr>
    <th>Food Group</th>
    <th>Examples</th>
  </tr>
  <tr>
    <td>Protein</td>
    <td>Eggs, Chicken, Fish, Paneer</td>
  </tr>
  <tr>
    <td>Complex Carbs</td>
    <td>Oats, Brown Rice, Sweet Potato</td>
  </tr>
  <tr>
    <td>Healthy Fats</td>
    <td>Almonds, Walnuts, Olive Oil</td>
  </tr>
  <tr>
    <td>Hydration</td>
    <td>Water, Coconut Water</td>
  </tr>
</table>

<h2>Common Metabolism Myths</h2>

<ul>
  <li>Skipping meals does not boost metabolism.</li>
  <li>Fat-burning supplements are not magic solutions.</li>
  <li>Metabolism can be improved through lifestyle changes.</li>
  <li>Muscle mass has a significant impact on calorie expenditure.</li>
</ul>

<h2>Pro Tip</h2>

<p>
Your BMR is the foundation of every nutrition plan. Before starting a weight loss or muscle-building program, calculate your BMR and TDEE to set realistic calorie targets.
</p>
`,
};