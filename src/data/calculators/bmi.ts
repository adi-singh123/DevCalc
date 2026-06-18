import { Calculator } from "@/src/types/calculator";

export const bmiCalculator: Calculator = {
  slug: "bmi-calculator",

  name: "BMI Calculator",

  description:
    "Calculate your Body Mass Index (BMI) instantly using your height and weight. Determine whether you are underweight, normal weight, overweight, or obese with our free BMI Calculator.",

  category: "Health",

  isPopular: true,

  seo: {
    title:
      "BMI Calculator - Calculate Body Mass Index Online",

    description:
      "Use our free BMI Calculator to calculate Body Mass Index from height and weight. Check BMI categories, healthy weight ranges, and overall weight status instantly.",

    keywords: [
      "bmi calculator",
      "body mass index calculator",
      "calculate bmi",
      "online bmi calculator",
      "free bmi calculator",
      "healthy bmi calculator",
      "weight calculator",
      "height weight calculator",
      "bmi chart",
      "adult bmi calculator",
      "body weight calculator",
      "ideal bmi calculator",
      "bmi checker",
      "BMI Chart for Men and Women",
      "Healthy BMI Range by Age",
      "bmi score calculator",
      "BMI vs Body Fat Percentage",
      "body mass calculator",
      "How to Reduce BMI Naturally",
      "weight status calculator",
      "obesity calculator",
      "fitness bmi calculator",
      "normal bmi calculator",
      "bmi formula calculator",
      "accurate bmi calculator",
      "kg cm bmi calculator",
      "body health calculator",
      "bmi calculation tool",
    ],
  },

  compareWith: [
  "bmr-calculator",
  "body-fat-calculator",
  "calorie-calculator",
  "ideal-body-weight-calculator",
],

  steps: [
    {
      step: 1,
      title: "Enter Your Weight",
      description:
        "Input your body weight in kilograms.",
      icon: "weight",
    },

    {
      step: 2,
      title: "Enter Your Height",
      description:
        "Enter your height in centimeters or meters.",
      icon: "height",
    },

    {
      step: 3,
      title: "Calculate BMI",
      description:
        "The calculator applies the Body Mass Index formula using your height and weight.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View BMI Results",
      description:
        "See your BMI value and determine your weight category instantly.",
      icon: "result",
    },
  ],

  formula: {
    title: "Body Mass Index Formula",

    formula:
      "BMI = Weight (kg) ÷ Height² (m²)",

    explanation:
      "Body Mass Index (BMI) is a measurement that uses height and weight to estimate whether a person has a healthy body weight. It is commonly used as a screening tool to classify weight status.",

    example: {
      input:
        "Weight = 70 kg, Height = 1.70 m",

      output:
        "BMI = 24.22 (Normal Weight)",
    },

    useCases: [
      "Weight Management",
      "Fitness Tracking",
      "Health Assessments",
      "Medical Screenings",
      "Personal Health Monitoring",
      "Diet Planning",
      "Exercise Programs",
      "Weight Loss Goals",
      "Body Weight Evaluation",
      "Wellness Tracking",
    ],
  },

  faqs: [
    {
      question:
        "What is BMI?",
      answer:
        "BMI (Body Mass Index) is a numerical value calculated from height and weight that helps estimate whether a person's weight falls within a healthy range.",
    },

    {
      question:
        "How is BMI calculated?",
      answer:
        "BMI is calculated by dividing weight in kilograms by height in meters squared.",
    },

    {
      question:
        "What is a healthy BMI range?",
      answer:
        "For most adults, a BMI between 18.5 and 24.9 is considered a healthy weight range.",
    },

    {
      question:
        "What BMI is considered overweight?",
      answer:
        "A BMI between 25 and 29.9 is generally classified as overweight.",
    },

    {
      question:
        "What BMI is considered obese?",
      answer:
        "A BMI of 30 or higher is generally classified as obese.",
    },

    {
      question:
        "Is BMI accurate for everyone?",
      answer:
        "BMI is a useful screening tool, but it does not directly measure body fat, muscle mass, or overall health. Athletes and individuals with high muscle mass may have higher BMI values without excess body fat.",
    },

    {
      question:
        "Can BMI be used for children?",
      answer:
        "Children and teenagers use age-specific BMI percentiles rather than standard adult BMI categories.",
    },

    {
      question:
        "Is this BMI Calculator free?",
      answer:
        "Yes. You can calculate your BMI online unlimited times completely free.",
    },
  ],
  seoContent: `
<h2>Understanding BMI Categories</h2>

<p>
Body Mass Index (BMI) is a simple measurement that compares your weight with your height. It helps identify whether you are underweight, at a healthy weight, overweight, or obese.
</p>

<h2>BMI Classification Table</h2>

<table>
  <tr>
    <th>Category</th>
    <th>BMI Range</th>
  </tr>
  <tr>
    <td>Underweight</td>
    <td>Below 18.5</td>
  </tr>
  <tr>
    <td>Healthy Weight</td>
    <td>18.5 - 24.9</td>
  </tr>
  <tr>
    <td>Overweight</td>
    <td>25.0 - 29.9</td>
  </tr>
  <tr>
    <td>Obesity</td>
    <td>30.0 and above</td>
  </tr>
</table>

<h2>If You Are Underweight</h2>

<ul>
  <li><strong>Increase Calories:</strong> Aim for 300-500 extra calories daily.</li>
  <li><strong>Eat Protein-Rich Foods:</strong> Eggs, milk, paneer, chicken, fish, and soy.</li>
  <li><strong>Strength Training:</strong> Focus on muscle-building exercises.</li>
  <li><strong>Healthy Snacks:</strong> Nuts, peanut butter, bananas, and dry fruits.</li>
</ul>

<h2>If You Are Overweight</h2>

<ul>
  <li><strong>Create a Calorie Deficit:</strong> Reduce daily calorie intake moderately.</li>
  <li><strong>Increase Activity:</strong> Walk 8,000-10,000 steps per day.</li>
  <li><strong>Prioritize Protein:</strong> Helps maintain muscle while losing fat.</li>
  <li><strong>Reduce Sugar:</strong> Limit soft drinks and processed foods.</li>
</ul>

<h2>Best Foods for Healthy Weight Management</h2>

<table>
  <tr>
    <th>Goal</th>
    <th>Recommended Foods</th>
  </tr>
  <tr>
    <td>Weight Gain</td>
    <td>Milk, nuts, rice, potatoes, peanut butter</td>
  </tr>
  <tr>
    <td>Weight Loss</td>
    <td>Vegetables, fruits, oats, chicken breast, fish</td>
  </tr>
  <tr>
    <td>Muscle Building</td>
    <td>Eggs, paneer, whey protein, chicken, lentils</td>
  </tr>
</table>

<h2>BMI Limitations</h2>

<p>
BMI is a useful screening tool, but it does not directly measure body fat. Athletes and highly muscular individuals may have a high BMI despite having low body fat levels.
</p>

<h2>Healthy Lifestyle Tips</h2>

<ul>
  <li><strong>Exercise Regularly:</strong> Combine cardio and strength training.</li>
  <li><strong>Sleep Well:</strong> Aim for 7-9 hours each night.</li>
  <li><strong>Stay Hydrated:</strong> Drink enough water throughout the day.</li>
  <li><strong>Track Progress:</strong> Monitor weight, BMI, and body measurements.</li>
</ul>

<h2>BMI vs Body Fat Percentage</h2>

<table>
  <tr>
    <th>Measurement</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td>BMI</td>
    <td>Estimates weight category using height and weight.</td>
  </tr>
  <tr>
    <td>Body Fat %</td>
    <td>Measures actual body fat relative to body weight.</td>
  </tr>
</table>

<h2>Who Should Use a BMI Calculator?</h2>

<p>
BMI calculators are useful for adults who want to monitor their weight status, set fitness goals, track progress, and maintain a healthy lifestyle.
</p>
`,
  
};