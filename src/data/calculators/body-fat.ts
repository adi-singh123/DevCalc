import { Calculator } from "@/src/types/calculator";

export const bodyFatCalculator: Calculator = {
  slug: "body-fat-calculator",

  name: "Body Fat Calculator",

  description:
    "Calculate your body fat percentage using the U.S. Navy Method. Estimate body fat levels for men and women and determine your body fat category instantly.",

  category: "Health",

  isPopular: true,

  seo: {
    title:
      "Body Fat Calculator - Calculate Body Fat Percentage Online",

    description:
      "Free online Body Fat Calculator. Estimate body fat percentage using the U.S. Navy Method and determine your body fat category for fitness and health tracking.",

    keywords: [
      "body fat calculator",
      "body fat percentage calculator",
      "navy body fat calculator",
      "body fat estimator",
      "body fat percentage",
      "fat percentage calculator",
      "ideal body fat percentage",
      "body composition calculator",
      "health calculator",
      "fitness calculator",
      "online body fat calculator",
      "body fat measurement",
      "body fat chart",
      "us navy body fat calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Select Gender",
      description:
        "Choose your gender to apply the correct body fat formula.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Measurements",
      description:
        "Provide your height, neck, waist, and hip measurements if required.",
      icon: "height",
    },
    {
      step: 3,
      title: "Calculate Body Fat",
      description:
        "The calculator uses the U.S. Navy Method to estimate body fat percentage.",
      icon: "clock",
    },
    {
      step: 4,
      title: "View Results",
      description:
        "See your body fat percentage and body fat category instantly.",
      icon: "result",
    },
  ],

  formula: {
    title: "Body Fat Percentage Formula",

    formula:
      "Men: Body Fat % = 86.010 × log10(Waist − Neck) − 70.041 × log10(Height) + 36.76\n\nWomen: Body Fat % = 163.205 × log10(Waist + Hip − Neck) − 97.684 × log10(Height) − 78.387",

    explanation:
      "The U.S. Navy Method estimates body fat percentage using body measurements. It is one of the most widely used methods for estimating body composition without specialized equipment.",

    example: {
      input:
        "Male, Height: 175 cm, Neck: 40 cm, Waist: 85 cm",

      output:
        "Estimated Body Fat Percentage ≈ 18.5%",
    },

    useCases: [
      "Fitness tracking",
      "Weight loss monitoring",
      "Muscle gain programs",
      "Body composition analysis",
      "Health assessments",
      "Sports performance tracking",
    ],
  },

  faqs: [
    {
      question: "What is body fat percentage?",
      answer:
        "Body fat percentage represents the proportion of your body weight that consists of fat tissue compared to lean mass such as muscles, bones, and organs.",
    },
    {
      question: "How is body fat percentage calculated?",
      answer:
        "This calculator uses the U.S. Navy Method, which estimates body fat percentage using body measurements such as height, neck, waist, and hip circumference.",
    },
    {
      question: "Is body fat percentage more useful than BMI?",
      answer:
        "Yes. Body fat percentage provides a better understanding of body composition because it distinguishes fat mass from lean body mass, whereas BMI only considers height and weight.",
    },
    {
      question: "What is a healthy body fat percentage?",
      answer:
        "Healthy body fat ranges vary by age and gender. For most adult men, 10%–20% is considered healthy, while 18%–28% is generally considered healthy for women.",
    },
    {
      question: "Is the U.S. Navy Method accurate?",
      answer:
        "The U.S. Navy Method provides a reliable estimate for most people. However, laboratory methods such as DEXA scans are generally more accurate.",
    },
  ],

  seoContent: `
<h2>What is Body Fat Percentage?</h2>

<p>
Body fat percentage represents the proportion of fat mass in your body compared to your total body weight. Unlike BMI, body fat percentage provides a more accurate picture of fitness and overall health.
</p>

<h2>Healthy Body Fat Percentage for Men</h2>

<table>
  <tr>
    <th>Category</th>
    <th>Body Fat %</th>
  </tr>
  <tr>
    <td>Essential Fat</td>
    <td>2% - 5%</td>
  </tr>
  <tr>
    <td>Athletes</td>
    <td>6% - 13%</td>
  </tr>
  <tr>
    <td>Fitness</td>
    <td>14% - 17%</td>
  </tr>
  <tr>
    <td>Average</td>
    <td>18% - 24%</td>
  </tr>
  <tr>
    <td>Obese</td>
    <td>25%+</td>
  </tr>
</table>

<h2>Healthy Body Fat Percentage for Women</h2>

<table>
  <tr>
    <th>Category</th>
    <th>Body Fat %</th>
  </tr>
  <tr>
    <td>Essential Fat</td>
    <td>10% - 13%</td>
  </tr>
  <tr>
    <td>Athletes</td>
    <td>14% - 20%</td>
  </tr>
  <tr>
    <td>Fitness</td>
    <td>21% - 24%</td>
  </tr>
  <tr>
    <td>Average</td>
    <td>25% - 31%</td>
  </tr>
  <tr>
    <td>Obese</td>
    <td>32%+</td>
  </tr>
</table>

<h2>Body Fat vs BMI</h2>

<table>
  <tr>
    <th>Measurement</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td>BMI</td>
    <td>Uses height and weight to estimate health status.</td>
  </tr>
  <tr>
    <td>Body Fat %</td>
    <td>Measures actual fat levels in the body.</td>
  </tr>
</table>

<h2>How to Reduce Body Fat</h2>

<ul>
  <li><strong>Create a Calorie Deficit:</strong> Consume fewer calories than you burn.</li>
  <li><strong>Increase Protein Intake:</strong> Helps preserve muscle during weight loss.</li>
  <li><strong>Strength Training:</strong> Builds muscle and boosts metabolism.</li>
  <li><strong>Cardio Exercise:</strong> Walking, running, cycling, and swimming help burn calories.</li>
</ul>

<h2>Best Foods for Fat Loss</h2>

<table>
  <tr>
    <th>Food Category</th>
    <th>Examples</th>
  </tr>
  <tr>
    <td>Lean Protein</td>
    <td>Chicken, Fish, Eggs, Paneer</td>
  </tr>
  <tr>
    <td>Complex Carbs</td>
    <td>Oats, Brown Rice, Sweet Potato</td>
  </tr>
  <tr>
    <td>Vegetables</td>
    <td>Broccoli, Spinach, Cucumber</td>
  </tr>
  <tr>
    <td>Healthy Fats</td>
    <td>Almonds, Walnuts, Olive Oil</td>
  </tr>
</table>

<h2>Signs of Healthy Progress</h2>

<ul>
  <li>Waist circumference decreases.</li>
  <li>Strength levels improve.</li>
  <li>Energy levels increase.</li>
  <li>Clothes fit better.</li>
  <li>Body fat percentage gradually decreases.</li>
</ul>

<h2>Common Fat Loss Mistakes</h2>

<ul>
  <li>Following extremely low-calorie diets.</li>
  <li>Doing excessive cardio without strength training.</li>
  <li>Ignoring protein intake.</li>
  <li>Expecting quick results.</li>
</ul>

<h2>Pro Tip</h2>

<p>
Focus on reducing body fat rather than simply losing weight. Maintaining muscle mass while lowering body fat percentage leads to a healthier and more athletic physique.
</p>
`,
};