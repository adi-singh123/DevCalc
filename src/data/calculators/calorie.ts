import { Calculator } from "@/src/types/calculator";

export const calorieCalculator: Calculator = {
  slug: "calorie-calculator",

  name: "Calorie Calculator",

  description:
    "Calculate your daily calorie needs for weight maintenance, weight loss, or weight gain based on your age, gender, height, weight, and activity level.",

  category: "Health",

  isPopular: true,

  seo: {
    title:
      "Calorie Calculator - Calculate Daily Calorie Needs Online",

    description:
      "Free online Calorie Calculator. Estimate your daily calorie requirements, maintenance calories, weight loss calories, and weight gain calories using scientifically proven formulas.",

    keywords: [
      "calorie calculator",
      "daily calorie calculator",
      "calories per day calculator",
      "maintenance calorie calculator",
      "weight loss calorie calculator",
      "weight gain calorie calculator",
      "tdee calculator",
      "daily calorie needs",
      "calorie requirement calculator",
      "nutrition calculator",
      "fitness calculator",
      "health calculator",
      "online calorie calculator",
      "calorie intake calculator",
    ],
  },

  compareWith: [
  "bmr-calculator",
  "bmi-calculator",
  "macro-calculator",
  "protein-intake-calculator",
],

  steps: [
    {
      step: 1,
      title: "Select Gender",
      description:
        "Choose your gender for accurate calorie estimation.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Personal Details",
      description:
        "Provide your age, weight, and height.",
      icon: "calendar",
    },
    {
      step: 3,
      title: "Choose Activity Level",
      description:
        "Select your daily activity level to estimate calorie expenditure.",
      icon: "clock",
    },
    {
      step: 4,
      title: "View Results",
      description:
        "See maintenance, weight loss, and weight gain calorie recommendations.",
      icon: "result",
    },
  ],

  formula: {
    title: "Calorie Calculation Formula",

    formula:
      "TDEE = BMR × Activity Multiplier",

    explanation:
      "Daily calorie needs are calculated using your Basal Metabolic Rate (BMR) and activity level. The Total Daily Energy Expenditure (TDEE) estimates the calories your body burns each day. Weight loss and weight gain calorie targets are then calculated from your maintenance calories.",

    example: {
      input:
        "Male, Age: 25 years, Weight: 70 kg, Height: 175 cm, Moderate Exercise",

      output:
        "BMR = 1674 Calories/day, TDEE = 2595 Calories/day, Weight Loss = 2095 Calories/day, Weight Gain = 3095 Calories/day",
    },

    useCases: [
      "Weight loss planning",
      "Weight gain planning",
      "Calorie tracking",
      "Diet planning",
      "Fitness programs",
      "Nutrition planning",
    ],
  },

faqs: [
  {
    question: "What is a calorie and why is it important?",
    answer:
      "A calorie is a unit of energy that your body uses to perform every function, from breathing and digestion to exercise and daily activities. The food and drinks you consume provide calories, which act as fuel for your body. Consuming too many calories can lead to weight gain, while consuming too few may result in weight loss. Understanding calorie requirements is important for maintaining a healthy weight, improving athletic performance, building muscle, and supporting overall health."
  },

  {
    question: "How many calories should I eat per day?",
    answer:
      "Daily calorie requirements vary based on age, gender, height, weight, activity level, and fitness goals. A sedentary adult generally requires fewer calories than someone who exercises regularly or performs physically demanding work. While average recommendations often range from 1,800 to 2,500 calories per day, individual needs can vary significantly. A calorie calculator provides a personalized estimate based on your specific characteristics and activity level."
  },

  {
    question: "How many calories should I eat to lose weight?",
    answer:
      "Weight loss occurs when you consume fewer calories than your body burns. This is known as a calorie deficit. Many health professionals recommend creating a moderate deficit of approximately 300 to 500 calories per day, which may result in gradual and sustainable weight loss. Extremely low-calorie diets are generally difficult to maintain and may lead to nutrient deficiencies, muscle loss, and reduced energy levels. Combining a healthy diet with regular exercise often produces the best results."
  },

  {
    question: "How many calories should I eat to gain muscle?",
    answer:
      "Muscle gain typically requires a calorie surplus, meaning you consume more calories than your body burns. In addition to sufficient calories, adequate protein intake and resistance training are essential for muscle growth. A moderate calorie surplus is often preferred because it supports muscle development while minimizing unnecessary fat gain. Tracking calorie intake and adjusting based on progress can help optimize muscle-building results."
  },

  {
    question: "What is the difference between BMR and calorie needs?",
    answer:
      "BMR represents the calories your body needs to perform essential functions while at complete rest. Daily calorie needs are higher because they include physical activity, exercise, work, walking, and other movements throughout the day. A calorie calculator typically uses your BMR and activity level to estimate Total Daily Energy Expenditure (TDEE), which represents the total calories needed to maintain your current weight."
  },

  {
    question: "Can eating too few calories slow down metabolism?",
    answer:
      "Consistently consuming significantly fewer calories than your body requires may cause metabolic adaptation, where the body attempts to conserve energy by reducing calorie expenditure. This can make weight loss more difficult over time and may lead to fatigue, muscle loss, and nutritional deficiencies. Sustainable weight management is generally achieved through moderate calorie adjustments rather than extreme restrictions."
  },

  {
    question: "Do all calories have the same effect on the body?",
    answer:
      "While a calorie is a unit of energy, the source of those calories matters. For example, calories from lean proteins, fruits, vegetables, whole grains, and healthy fats often provide essential nutrients that support overall health. Highly processed foods may provide calories but offer fewer nutrients. A balanced diet that includes nutrient-dense foods is generally more beneficial than focusing solely on calorie numbers."
  },
  {
    question: "Why should I use a calorie calculator?",
    answer:
      "A calorie calculator helps estimate the number of calories your body needs based on personal factors such as age, gender, height, weight, and activity level. Whether your goal is weight loss, weight gain, muscle building, or maintenance, understanding calorie requirements allows you to make informed nutrition decisions and create a realistic health and fitness plan."
  }
],

  seoContent: `
<h2>What Are Calories?</h2>

<p>
Calories are units of energy that your body uses to perform daily activities such as breathing, walking, exercising, and maintaining body functions. Understanding your daily calorie needs is essential for weight loss, muscle gain, and overall health.
</p>

<h2>Daily Calorie Goal Guide</h2>

<table>
  <tr>
    <th>Goal</th>
    <th>Calorie Strategy</th>
  </tr>
  <tr>
    <td>Weight Loss</td>
    <td>Consume 300-500 fewer calories than maintenance</td>
  </tr>
  <tr>
    <td>Maintain Weight</td>
    <td>Consume maintenance calories</td>
  </tr>
  <tr>
    <td>Muscle Gain</td>
    <td>Consume 300-500 extra calories daily</td>
  </tr>
</table>

<h2>Recommended Macronutrient Split</h2>

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

<h2>Foods for Weight Loss</h2>

<ul>
  <li><strong>Protein:</strong> Chicken breast, eggs, fish, tofu, paneer.</li>
  <li><strong>Vegetables:</strong> Broccoli, spinach, cucumber, carrots.</li>
  <li><strong>Healthy Carbs:</strong> Oats, brown rice, sweet potatoes.</li>
  <li><strong>Healthy Fats:</strong> Nuts, seeds, olive oil.</li>
</ul>

<h2>Foods for Muscle Gain</h2>

<ul>
  <li><strong>High Protein:</strong> Eggs, chicken, fish, milk, whey protein.</li>
  <li><strong>Energy Dense:</strong> Peanut butter, rice, potatoes, bananas.</li>
  <li><strong>Healthy Fats:</strong> Almonds, walnuts, avocado.</li>
</ul>

<h2>Activity Level and Calorie Needs</h2>

<table>
  <tr>
    <th>Activity Level</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Sedentary</td>
    <td>Little or no exercise</td>
  </tr>
  <tr>
    <td>Lightly Active</td>
    <td>Exercise 1-3 days per week</td>
  </tr>
  <tr>
    <td>Moderately Active</td>
    <td>Exercise 3-5 days per week</td>
  </tr>
  <tr>
    <td>Very Active</td>
    <td>Exercise 6-7 days per week</td>
  </tr>
</table>

<h2>Common Calorie Tracking Mistakes</h2>

<ul>
  <li>Ignoring liquid calories from juices and soft drinks.</li>
  <li>Not measuring portion sizes accurately.</li>
  <li>Overestimating calories burned through exercise.</li>
  <li>Skipping protein intake tracking.</li>
</ul>

<h2>Healthy Weight Loss Tips</h2>

<ul>
  <li><strong>Eat More Protein:</strong> Helps preserve muscle and reduce hunger.</li>
  <li><strong>Stay Hydrated:</strong> Water can reduce unnecessary snacking.</li>
  <li><strong>Sleep Well:</strong> Aim for 7-9 hours daily.</li>
  <li><strong>Exercise Regularly:</strong> Combine cardio and strength training.</li>
</ul>

<h2>Pro Tip</h2>

<p>
For sustainable results, aim to lose 0.5-1 kg per week. Extreme calorie restrictions are difficult to maintain and may negatively affect your metabolism and muscle mass.
</p>
`,
};