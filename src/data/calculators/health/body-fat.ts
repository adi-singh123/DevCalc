import { Calculator } from "@/src/types/calculator";

export const bodyFatCalculator: Calculator = {
  slug: "body-fat-calculator",

  name: "Body Fat Calculator",

  description:
    "Calculate your body fat percentage using the U.S. Navy Method. Estimate body fat levels for men and women and determine your body fat category instantly.",

  category: "Health",

  isPopular: true,

  editorialIntro:
    "Body fat percentage estimates how much of total body mass is fat rather than lean tissue. The U.S. Navy circumference method uses height and tape measurements to produce a practical estimate, but it does not directly measure fat or distinguish visceral from subcutaneous fat.",

  benchmarkContext: {
    title: "American Council on Exercise (ACE) Body Fat Classifications",
    badge: "Exercise Physiology Standard",
    stat: "14%–17% Men | 21%–24% Women (Fitness Benchmark)",
    description:
      "ACE categories: Essential Fat (2–5% men, 10–13% women), Athletes (6–13% men, 14–20% women), Fitness (14–17% men, 21–24% women), Average (18–24% men, 25–31% women), and Obese (25%+ men, 32%+ women).",
    source: "American Council on Exercise (ACE) & U.S. Navy Bureau of Medicine and Surgery",
    lastUpdated: "January 2026",
  },

  compareWith: [
    "bmi-calculator",
    "bmr-calculator",
    "calorie-calculator",
    "lean-body-mass-calculator",
    "ideal-body-weight-calculator",
  ],

  seo: {
    title:
      "Body Fat Calculator – U.S. Navy Method and Categories",

    description:
      "Estimate body fat percentage with the U.S. Navy circumference method. See estimated fat mass, lean mass, category and measurement guidance.",
    keywords: [
      "body fat calculator",
      "body fat percentage calculator",
      "navy body fat calculator",
      "body fat estimator",
      "body fat percentage",
      "fat percentage calculator",
      "ideal body fat percentage",
      "body composition calculator",
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
        "Estimated Body Fat Percentage ≈ 15.4%",
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
      "Body fat percentage represents the proportion of your total body weight that comes from fat tissue. Unlike body weight alone, body fat percentage provides a more accurate picture of body composition because it distinguishes fat mass from muscle, bones, and organs. Two people may weigh the same and have the same BMI but have very different body fat percentages. Understanding body fat percentage helps individuals assess fitness levels, monitor progress, and identify potential health risks associated with excessive or insufficient body fat."
  },

  {
    question: "What is considered a healthy body fat percentage?",
    answer:
      "Reference categories vary by source, age, sex, and population. The category shown by this calculator is a general comparison, not a diagnosis or a universal target. Extremely low values can also be unhealthy, so interpret the estimate alongside medical history, waist circumference, fitness, and professional advice when needed."
  },

  {
    question: "How is body fat percentage different from BMI?",
    answer:
      "BMI estimates whether your weight is appropriate for your height, while body fat percentage measures the actual amount of fat in your body. BMI cannot distinguish between muscle and fat, which means athletes and muscular individuals may appear overweight despite having low body fat. Body fat percentage provides a more detailed understanding of body composition and is often considered a more useful metric for assessing fitness and health."
  },

  {
    question: "Can I reduce body fat without losing muscle?",
    answer:
      "Yes. The goal of many fitness programs is fat loss while preserving lean muscle mass. This is typically achieved through a combination of moderate calorie deficits, adequate protein intake, strength training, and regular physical activity. Crash diets and excessive calorie restrictions may result in muscle loss along with fat loss. Sustainable nutrition and exercise habits are generally the most effective approach for improving body composition."
  },

  {
    question: "Why is excess body fat harmful?",
    answer:
      "Excess body fat, particularly around the abdomen, is associated with increased risks of heart disease, high blood pressure, type 2 diabetes, sleep apnea, fatty liver disease, and other health conditions. Maintaining a healthy body fat percentage can improve overall health, physical performance, energy levels, and quality of life. Monitoring body fat percentage helps individuals identify potential health concerns before they become serious."
  },

  {
    question: "How accurate are body fat calculators?",
    answer:
      "The Navy method is an estimate and can differ from a laboratory body-composition assessment. Tape placement, posture, breathing, hydration, and body shape can shift the result. It is most useful for tracking a trend when the same person measures at the same locations, under similar conditions, with the same tape technique."
  },

  {
    question: "Does body fat percentage change with age?",
    answer:
      "Yes. Body fat percentage tends to increase with age due to changes in metabolism, hormone levels, and muscle mass. As people get older, they often lose lean muscle tissue while gaining body fat if physical activity levels decrease. Maintaining regular exercise, particularly strength training, and following a balanced diet can help reduce age-related increases in body fat."
  },

  {
    question: "Why should I track body fat instead of only body weight?",
    answer:
      "Body weight alone does not reveal whether changes come from fat loss, muscle gain, or water fluctuations. Tracking body fat percentage provides a clearer understanding of body composition changes and overall fitness progress. For example, someone may gain muscle while losing fat and see little change in body weight, yet experience significant improvements in health and appearance."
  },
  {
    question: "How should I take waist, neck, and hip measurements?",
    answer:
      "Use a flexible, non-stretch tape held level and snug without compressing the skin. Measure the neck below the larynx. Follow the calculator's sex-specific waist and hip instructions, stand relaxed, and measure after a normal exhale. Repeat each measurement and use consistent locations each time."
  }
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

<h2>How to Measure Consistently</h2>
<p>
Use a flexible tape that does not stretch. Keep it horizontal and snug without pulling it into the skin. Measure in the same locations and under similar conditions each time, preferably before a meal. Take each circumference twice; if the readings differ, repeat the measurement before entering it.
</p>

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

<h2>How to Interpret the Result</h2>

<p>
Treat the number as an estimate and focus on the trend rather than small day-to-day changes. Do not use one result to diagnose a health condition. If the estimate is unexpectedly high or low, confirm the tape measurements and discuss health concerns with a qualified healthcare professional.
</p>
`,
};
