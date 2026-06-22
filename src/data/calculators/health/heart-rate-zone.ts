import { Calculator } from "@/src/types/calculator";

export const heartRateZoneCalculator: Calculator = {
  slug: "heart-rate-zone-calculator",

  name: "Heart Rate Zone Calculator",

  description:
    "Calculate your heart rate training zones based on age and resting heart rate. Optimize workouts, improve endurance, burn fat, and maximize cardiovascular fitness with personalized heart rate zones.",

  category: "Health",

  isPopular: true,

  seo: {
    title:
      "Heart Rate Zone Calculator - Calculate Target Heart Rate Zones",

    description:
      "Use our free Heart Rate Zone Calculator to determine your target heart rate training zones for fat burning, cardio fitness, endurance training, and athletic performance.",

keywords: [
  "heart rate zone calculator",
  "target heart rate calculator",
  "heart rate calculator",
  "training zone calculator",
  "fat burn heart rate calculator",
  "cardio heart rate calculator",
  "maximum heart rate calculator",
  "exercise heart rate calculator",
  "fitness heart rate calculator",
  "heart rate training zones",
  "heart rate monitor calculator",
  "workout heart rate calculator",
  "running heart rate calculator",
  "cycling heart rate calculator",
  "aerobic heart rate calculator",
  "anaerobic heart rate calculator",
  "karvonen calculator",
  "target pulse calculator",
  "heart rate range calculator",
  "zone 2 calculator",
  "fitness zone calculator",
  "online heart rate calculator",
  "free heart rate zone calculator",
  "heart rate training calculator",
  "maximum pulse calculator",

  // Core Heart Rate Keywords
  "heart rate zones calculator",
  "heart rate zone finder",
  "heart rate zone chart",
  "heart rate zone estimator",
  "target pulse rate calculator",
  "heart rate intensity calculator",
  "workout intensity calculator",
  "exercise zone calculator",
  "heart rate guide",
  "heart rate training tool",

  // Target Heart Rate Keywords
  "target heart rate zone calculator",
  "calculate target heart rate",
  "target pulse zone calculator",
  "ideal workout heart rate",
  "exercise target heart rate",
  "target heart rate by age",
  "fitness target heart rate",
  "heart rate target range",
  "safe exercise heart rate",
  "optimal heart rate calculator",

  // Maximum Heart Rate Keywords
  "max heart rate calculator",
  "maximum pulse calculator",
  "maximum heart rate by age",
  "max pulse rate calculator",
  "maximum exercise heart rate",
  "220 minus age calculator",
  "max hr calculator",
  "heart rate limit calculator",
  "peak heart rate calculator",
  "heart rate threshold calculator",

  // Zone Training Keywords
  "zone 1 heart rate calculator",
  "zone 2 heart rate calculator",
  "zone 3 heart rate calculator",
  "zone 4 heart rate calculator",
  "zone 5 heart rate calculator",
  "heart rate zone training",
  "training heart rate zones",
  "endurance zone calculator",
  "fat burning zone calculator",
  "performance zone calculator",

  // Fat Burn Keywords
  "fat burn zone calculator",
  "fat burning heart rate calculator",
  "weight loss heart rate calculator",
  "fat loss heart rate zone",
  "calorie burn heart rate calculator",
  "optimal fat burning zone",
  "fat burn pulse calculator",
  "cardio fat burn calculator",
  "heart rate for fat loss",
  "weight loss training zone",

  // Cardio Keywords
  "cardio zone calculator",
  "cardio heart rate zones",
  "cardio training calculator",
  "aerobic training calculator",
  "anaerobic training calculator",
  "cardio workout calculator",
  "heart rate for cardio",
  "cardiovascular training zone",
  "exercise intensity calculator",
  "aerobic zone calculator",

  // Running & Cycling Keywords
  "running heart rate zones",
  "runner heart rate calculator",
  "running training zone calculator",
  "cycling heart rate zones",
  "cycling training calculator",
  "marathon heart rate calculator",
  "endurance athlete calculator",
  "running pulse calculator",
  "bike training zone calculator",
  "athlete heart rate calculator",

  // Karvonen Method Keywords
  "karvonen heart rate calculator",
  "karvonen formula calculator",
  "heart rate reserve calculator",
  "hrr calculator",
  "heart rate reserve formula",
  "karvonen training zones",
  "resting heart rate calculator",
  "exercise intensity by karvonen",
  "heart rate reserve zones",
  "karvonen target heart rate",

  // Fitness Keywords
  "fitness zone calculator",
  "gym heart rate calculator",
  "workout zone calculator",
  "training intensity calculator",
  "fitness heart rate zones",
  "exercise pulse calculator",
  "fitness pulse calculator",
  "personal training zone calculator",
  "workout heart rate zones",
  "exercise heart rate zones",

  // Question Keywords
  "what is my target heart rate",
  "how to calculate heart rate zones",
  "how to find maximum heart rate",
  "what is zone 2 heart rate",
  "what is a good workout heart rate",
  "how does the karvonen formula work",
  "what is fat burning heart rate",
  "how to calculate target pulse",
  "what heart rate should i train at",
  "heart rate zone calculator example",

  // Long Tail Keywords
  "free online heart rate zone calculator",
  "best heart rate zone calculator",
  "heart rate zone calculator by age",
  "heart rate training zone calculator",
  "target heart rate calculator for exercise",
  "karvonen heart rate zone calculator",
  "fat burn and cardio zone calculator",
  "accurate heart rate calculator",
  "online workout heart rate calculator",
  "heart rate zones for running calculator",
],
  },

  steps: [
    {
      step: 1,
      title: "Enter Your Age",
      description:
        "Provide your current age to estimate your maximum heart rate.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Resting Heart Rate",
      description:
        "Enter your resting heart rate measured while relaxed.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Calculate Heart Rate Zones",
      description:
        "The calculator determines your personalized training zones.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Training Zones",
      description:
        "See fat-burning, aerobic, anaerobic, and maximum effort heart rate ranges.",
      icon: "result",
    },
  ],

  formula: {
    title: "Heart Rate Zone Formula",

    formula:
      "Target Heart Rate = ((Max HR − Resting HR) × Intensity) + Resting HR",

    explanation:
      "The Heart Rate Zone Calculator uses the Karvonen Formula. Maximum heart rate is estimated as 220 minus age. Training zones are calculated using different intensity percentages of your heart rate reserve.",

    example: {
      input:
        "Age: 30 Years, Resting Heart Rate: 60 BPM",

      output:
        "Zone 2 (60%-70%): 138–151 BPM",
    },

    useCases: [
      "Fat Burning Workouts",
      "Cardio Training",
      "Running Training",
      "Cycling Training",
      "HIIT Workouts",
      "Endurance Building",
      "Fitness Tracking",
      "Sports Performance",
      "Weight Loss Programs",
      "Heart Health Monitoring",
    ],
  },

  faqs: [
    {
      question:
        "What is a Heart Rate Zone Calculator?",
      answer:
        "A Heart Rate Zone Calculator estimates target heart rate ranges for different exercise intensities based on age and resting heart rate.",
    },

    {
      question:
        "What is the maximum heart rate formula?",
      answer:
        "Maximum heart rate is commonly estimated using the formula 220 minus your age.",
    },

    {
      question:
        "What are heart rate training zones?",
      answer:
        "Heart rate zones are intensity ranges used during exercise to target specific fitness goals such as fat burning, endurance, or performance improvement.",
    },

    {
      question:
        "Which heart rate zone burns the most fat?",
      answer:
        "Zone 2, typically 60% to 70% of maximum effort, is often referred to as the fat-burning zone.",
    },

    {
      question:
        "What is Zone 2 training?",
      answer:
        "Zone 2 training is moderate-intensity exercise that improves endurance, cardiovascular fitness, and fat metabolism.",
    },

    {
      question:
        "Why is resting heart rate important?",
      answer:
        "Resting heart rate helps personalize heart rate zones and provides a more accurate estimate of exercise intensity.",
    },

    {
      question:
        "Can athletes use this calculator?",
      answer:
        "Yes. Athletes often use heart rate zones to optimize training intensity and recovery.",
    },

    {
      question:
        "Is this Heart Rate Zone Calculator free?",
      answer:
        "Yes. You can calculate personalized heart rate training zones online unlimited times completely free.",
    },
  ],

  seoContent: `
<h2>What Are Heart Rate Zones?</h2>

<p>
Heart rate zones are ranges based on your maximum heart rate that help measure exercise intensity. Training in different zones can improve fat burning, endurance, cardiovascular fitness, and athletic performance.
</p>

<h2>Heart Rate Zone Chart</h2>

<table>
  <tr>
    <th>Zone</th>
    <th>% of Max HR</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td>Zone 1</td>
    <td>50-60%</td>
    <td>Recovery & Warm-Up</td>
  </tr>
  <tr>
    <td>Zone 2</td>
    <td>60-70%</td>
    <td>Fat Burning</td>
  </tr>
  <tr>
    <td>Zone 3</td>
    <td>70-80%</td>
    <td>Aerobic Endurance</td>
  </tr>
  <tr>
    <td>Zone 4</td>
    <td>80-90%</td>
    <td>Performance Training</td>
  </tr>
  <tr>
    <td>Zone 5</td>
    <td>90-100%</td>
    <td>Maximum Effort</td>
  </tr>
</table>

<h2>Which Zone Should You Train In?</h2>

<table>
  <tr>
    <th>Goal</th>
    <th>Recommended Zone</th>
  </tr>
  <tr>
    <td>Weight Loss</td>
    <td>Zone 2</td>
  </tr>
  <tr>
    <td>Improve Stamina</td>
    <td>Zone 2 & Zone 3</td>
  </tr>
  <tr>
    <td>Increase Speed</td>
    <td>Zone 4</td>
  </tr>
  <tr>
    <td>Athletic Performance</td>
    <td>Zone 4 & Zone 5</td>
  </tr>
</table>

<h2>Fat Burning Zone Explained</h2>

<p>
The fat-burning zone is typically between 60% and 70% of your maximum heart rate. During this intensity, your body uses a higher percentage of fat for energy while still providing an effective cardiovascular workout.
</p>

<h2>Weekly Cardio Recommendations</h2>

<table>
  <tr>
    <th>Fitness Goal</th>
    <th>Recommended Cardio</th>
  </tr>
  <tr>
    <td>General Health</td>
    <td>150 Minutes Per Week</td>
  </tr>
  <tr>
    <td>Weight Loss</td>
    <td>200-300 Minutes Per Week</td>
  </tr>
  <tr>
    <td>Athletic Training</td>
    <td>300+ Minutes Per Week</td>
  </tr>
</table>

<h2>Best Exercises for Heart Health</h2>

<ul>
  <li><strong>Walking:</strong> Excellent for beginners.</li>
  <li><strong>Running:</strong> Improves cardiovascular endurance.</li>
  <li><strong>Cycling:</strong> Low-impact cardio workout.</li>
  <li><strong>Swimming:</strong> Full-body cardiovascular exercise.</li>
  <li><strong>Rowing:</strong> Builds endurance and strength.</li>
</ul>

<h2>Signs You're Training Too Hard</h2>

<ul>
  <li>Excessive fatigue after workouts.</li>
  <li>Elevated resting heart rate.</li>
  <li>Poor sleep quality.</li>
  <li>Declining workout performance.</li>
  <li>Long recovery times.</li>
</ul>

<h2>How to Monitor Heart Rate</h2>

<table>
  <tr>
    <th>Method</th>
    <th>Accuracy</th>
  </tr>
  <tr>
    <td>Chest Strap Monitor</td>
    <td>Very High</td>
  </tr>
  <tr>
    <td>Smart Watch</td>
    <td>High</td>
  </tr>
  <tr>
    <td>Fitness Band</td>
    <td>Moderate</td>
  </tr>
  <tr>
    <td>Manual Pulse Check</td>
    <td>Basic</td>
  </tr>
</table>

<h2>Pro Tip</h2>

<p>
Most people spend too much time training in high-intensity zones. For long-term fitness and fat loss, spending more time in Zone 2 often produces better and more sustainable results.
</p>
`,
};