import { Calculator } from "@/src/types/calculator";

export const bmiCalculator: Calculator = {
  slug: "bmi-calculator",

  name: "BMI Calculator",

  description:
    "Calculate your Body Mass Index (BMI) instantly using your height and weight. Determine whether you are underweight, normal weight, overweight, or obese across both International WHO and Asian-specific ICMR diagnostic standards.",

  category: "Health",

  isPopular: true,

  editorialIntro:
    "For South Asian and Indian populations, the World Health Organization (WHO) and Indian Council of Medical Research (ICMR) recommend lower BMI cutoffs: 18.5–22.9 kg/m² is normal, 23.0–24.9 kg/m² is overweight, and ≥25.0 kg/m² indicates obesity, due to higher visceral fat accumulation at lower body weights.",

  benchmarkContext: {
    title: "ICMR & WHO Asian Population BMI Classifications",
    badge: "Clinical Epidemiology Guideline",
    stat: "23.0 kg/m² Asian Overweight Cutoff",
    description:
      "Unlike Western standards (where overweight begins at 25.0 and obesity at 30.0), South Asians experience elevated cardiometabolic risks (Type 2 diabetes, hypertension) at lower BMI thresholds. Normal range is strictly 18.5 to 22.9 kg/m².",
    source: "Indian Council of Medical Research (ICMR) & WHO Western Pacific Region",
    lastUpdated: "January 2026",
  },

  seo: {
    title: "BMI Calculator - Calculate Body Mass Index Online",

    description:
      "Calculate Body Mass Index (BMI) from height and weight. Check healthy weight ranges, International WHO categories, and Asian ICMR clinical thresholds instantly.",
    keywords: [
      "bmi calculator",
      "body mass index calculator",
      "calculate bmi",
      "bmi chart",
      "bmi by age calculator",
      "height weight calculator",
      "ideal body weight calculator",
      "bmi formula calculator",
      "obesity calculator",
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
      title: "Select Measurement System",
      description: "Choose Metric (kilograms, centimeters/meters) or Imperial (pounds, feet/inches).",
      icon: "weight",
    },
    {
      step: 2,
      title: "Input Exact Height",
      description: "Enter standing stature without shoes (e.g., 175 cm or 5 ft 9 in).",
      icon: "height",
    },
    {
      step: 3,
      title: "Input Body Weight",
      description: "Enter morning fasting body weight in kg or lbs.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View BMI Results",
      description: "See your precise numeric BMI score mapped onto standardized diagnostic category charts.",
      icon: "result",
    },
  ],

  formula: {
    title: "Body Mass Index Formula",

    formula: "BMI = Weight (kg) ÷ Height² (m²)",

    explanation:
      "Body Mass Index (BMI) is a measurement that uses height and weight to estimate whether a person has a healthy body weight. It is commonly used as a screening tool to classify weight status.",

    example: {
      input: "Weight = 70 kg, Height = 1.70 m",

      output: "BMI = 24.22 (Normal Weight)",
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
      question: "Is Body Mass Index (BMI) a fully accurate diagnostic measure of my internal health and body composition?",
      answer:
        "BMI functions excellently as a broad epidemiological screening tool to estimate whether an individual's mass is appropriate for their height, but it is not an all-encompassing proxy for metabolic health. Crucially, the mathematical formula does not directly assess structural body composition—meaning it completely ignores your ratio of skeletal muscle mass to pure adipose tissue, as well as bone density distributions or visceral fat clustering. Because of these systemic boundaries, a person can present with a 'healthy' BMI while showing signs of metabolic obesity (insulin resistance, poor lipid panels), or record an elevated BMI while maintaining exceptional fitness levels. For a complete wellness evaluation, clinical professionals analyze your diagnostic BMI alongside other key health markers, such as waist-to-hip ratios, skinfold body fat percentages, lipid panels, and blood pressure readings.",
    },
    {
      question: "Why do competitive athletes and weightlifters routinely register high BMI scores despite being lean?",
      answer:
        "The standard BMI calculation relies entirely on your total body weight and height, treating every pound of mass identically. Skeletal muscle tissue is roughly 18% denser than adipose fat tissue by volume, meaning it packs significantly more weight into a smaller physical footprint. Consequently, bodybuilders, competitive athletes, and strength trainees who carry an above-average amount of muscle mass will frequently trigger an 'overweight' or 'obese' rating on standard BMI charts, even when their body fat percentages hover in single-digit ranges. This phenomenon highlights a key limitation of relying solely on BMI. For individuals engaged in regular strength training, measuring total body fat percentage or body dimensions provides a much more accurate representation of their physical fitness.",
    },
    {
      question: "What numeric BMI ranges define healthy weight, underweight, overweight, and obesity classifications?",
      answer:
        "According to standard diagnostic criteria established by the World Health Organization (WHO), adult BMI scores are split into four primary tiers: a score below 18.5 indicates an underweight status; a value between 18.5 and 24.9 establishes a normal or healthy weight zone; a calculation falling between 25.0 and 29.9 indicates an overweight classification; and any score registering at 30.0 or above marks the obesity threshold. However, clinical bodies often recommend lower target ranges for populations of South Asian descent. Research shows that Asian individuals face elevated risks for metabolic conditions like type 2 diabetes and cardiovascular disease at lower body weights compared to Western averages, making a score of 23.0 or higher the baseline for an overweight classification in those regions.",
    },
    {
      question: "Can monitoring my BMI accurately predict my risk for developing chronic medical conditions?",
      answer:
        "While a BMI score cannot predict individual health outcomes with absolute certainty, it serves as a reliable indicator of potential statistical risk factors. Consistently carrying an elevated BMI score into the upper overweight or obese brackets places a clear mechanical and metabolic strain on your physiology. This strain elevates the risk of developing conditions like type 2 diabetes, hypertension, coronary heart disease, sleep apnea, osteoarthritic joint degeneration, and non-alcoholic fatty liver disease. Conversely, an abnormally low BMI can point to risks associated with nutritional deficiencies, diminished immune function, and bone density loss. Tracking your BMI provides a helpful baseline to reference when auditing your lifestyle with a healthcare professional.",
    },
    {
      question: "What is the primary difference between my numeric BMI and my calculated body fat percentage?",
      answer:
        "The primary difference comes down to mass calculation versus direct tissue segmentation. Your BMI score is an indirect estimate of body fatness based on a height-to-weight ratio. It does not measure fat directly; it simply flags whether you are carrying too much total mass for your frame. In contrast, body fat percentage looks closer at your actual body composition, separating your total mass into fat tissue versus lean mass (bones, organs, muscles, and water). Two individuals can stand side-by-side with an identical BMI score of 27.0 while maintaining completely different body compositions—one could be a lean weightlifter with low body fat, while the other could be a sedentary individual with high visceral fat levels.",
    },
    {
      question: "How can I systematically lower my BMI score safely without sacrificing lean skeletal muscle?",
      answer:
        "Lowering your BMI safely requires a structured approach that prioritizes fat loss while protecting your active lean muscle tissue. Drastic calorie restriction or crash dieting often forces the body to burn through muscle tissue for energy, which slows down your baseline metabolic rate. Instead, aim for a modest, sustainable daily calorie deficit of 300 to 500 calories, supported by a high-protein diet. Combining this nutritional approach with a balanced exercise routine that pairs cardiovascular activity with progressive resistance training signals your body to burn stored fat for fuel while preserving muscle mass, leading to a healthier long-term body composition.",
    },
  ],

  seoContent: `
<h2>The Clinical Role of Body Mass Index (BMI) in Health Monitoring</h2>
<p>
  Maintaining a healthy weight is one of the most effective ways to lower your risk for chronic disease and support long-term wellness. In healthcare, fitness, and research environments, the <strong>Body Mass Index (BMI)</strong> serves as a universal standard for assessing weight categories. Derived from a simple height-to-weight ratio, BMI offers a quick, accessible way to screen for potential health risks linked to both underweight and overweight conditions.
</p>
<p>
  While BMI is not a direct measure of body fat percentage, it provides a reliable initial baseline for evaluating body weight relative to frame size. Tracking your BMI score over time allows you to establish clear fitness benchmarks, fine-tune nutritional goals, and collaborate effectively with healthcare professionals on your lifestyle path.
</p>

---

<h2>The Core Categories: Standard BMI Classification Ranges</h2>
<p>
  To help individuals understand their results, the World Health Organization (WHO) organizes adult BMI scores into four primary weight categories. This structure identifies potential health shifts that occur when a person's body mass moves outside of standard thresholds:
</p>

<table>
  <thead>
    <tr>
      <th>Diagnostic Classification</th>
      <th>BMI Score Range</th>
      <th>Associated Metabolic Health Risk Profile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Underweight</strong></td>
      <td>Below 18.5</td>
      <td>Elevated risk for nutritional deficiencies, low bone density, and weakened immune responses.</td>
    </tr>
    <tr>
      <td><strong>Normal / Healthy Weight</strong></td>
      <td>18.5 – 24.9</td>
      <td>Optimal metabolic balance with minimized risk for weight-related chronic conditions.</td>
    </tr>
    <tr>
      <td><strong>Overweight</strong></td>
      <td>25.0 – 29.9</td>
      <td>Moderate risk increase for cardiovascular strain, hypertension, and early insulin resistance.</td>
    </tr>
    <tr>
      <td><strong>Obesity (Class I)</strong></td>
      <td>30.0 – 34.9</td>
      <td>High risk for type 2 diabetes, sleep apnea, osteoarthritis, and vascular disease.</td>
    </tr>
    <tr>
      <td><strong>Severe Obesity (Class II)</strong></td>
      <td>35.0 – 39.9</td>
      <td>Very high risk of developing multiple chronic conditions and functional mobility limitations.</td>
    </tr>
    <tr>
      <td><strong>Morbid Obesity (Class III)</strong></td>
      <td>40.0 and Above</td>
      <td>Extreme risk profile requiring immediate medical evaluation and structured intervention.</td>
    </tr>
  </tbody>
</table>

---

<h2>The Mathematics of BMI: Formulating the Index</h2>
<p>
  The underlying mathematics of the BMI calculator rely on the Quetelet index, a formula that scales body weight directly against a person's height. This calculation neutralizes the height variable, making it easier to evaluate broad weight distributions across large populations.
</p>
<p>
  The metric formula divides total body mass in kilograms by the square of the person's height in meters:
</p>
<p align="center">
  BMI = \frac{\text{Weight (kg)}}{\text{Height (m)}^2}
</p>
<p>
  If you are calculating your score using imperial measurements (pounds and inches), the formula requires an additional multiplier ($703$) to align with standard metric units:
</p>
<p align="center">
  BMI = \frac{\text{Weight (lbs)}}{\text{Height (inches)}^2} \times 703
</p>

---

<h2>Key Biometric Discrepancies: The Limitations of BMI</h2>
<p>
  While BMI is a highly efficient screening tool, relying on it blindly can lead to misinterpretations due to variations in individual body composition. Because the formula factors in total weight without identifying its source, two distinct physical profiles can share an identical score:
</p>
<h3>1. The Athlete / Muscle Mass Conundrum</h3>
<p>
  Skeletal muscle tissue is denser and heavier than body fat. Because of this, active individuals, weightlifters, and athletes with well-developed muscle mass often register in the "overweight" or "obese" categories, even when they carry very little body fat. In these cases, a high BMI does not point to poor health metrics.
</p>
<h3>2. Sarcopenic Obesity ("Skinny Fat")</h3>
<p>
  Conversely, sedentary individuals can present a score right in the middle of the "healthy weight" range while carrying low muscle mass and high levels of visceral fat around internal organs. This condition can mask underlying risks for metabolic issues like insulin resistance or high cholesterol, showing that a normal BMI doesn't automatically guarantee perfect health.
</p>

---

<h2>Practical Action Plans for Weight and Health Management</h2>
<p>
  If your BMI score falls outside the normal range, making gradual, sustainable adjustments to your daily habits can help bring your body mass back toward its optimal zone:
</p>

<h3>Strategies for Managing an Elevated BMI</h3>
<ul>
  <li><strong>Focus on a Modest Calorie Deficit:</strong> Lower your daily caloric intake by 300 to 500 calories below your maintenance level to encourage steady, sustainable fat loss.</li>
  <li><strong>Prioritize Dietary Protein:</strong> Consume adequate protein to protect lean muscle tissue while your body burns stored fat for energy.</li>
  <li><strong>Incorporate Resistance Training:</strong> Build and maintain active muscle tissue through regular strength workouts to support a healthy baseline metabolic rate.</li>
  <li><strong>Reduce Ultra-Processed Foods:</strong> Limit hidden sugars and refined carbohydrates to help stabilize energy levels and manage insulin response.</li>
</ul>

<h3>Strategies for Managing an Underweight BMI</h3>
<ul>
  <li><strong>Create a Structured Calorie Surplus:</strong> Add 300 to 500 calories of nutrient-dense foods to your daily routine to support healthy weight gain.</li>
  <li><strong>Focus on Whole-Food Fats:</strong> Incorporate healthy fats like avocados, nuts, seeds, and extra virgin olive oil to increase calorie density naturally.</li>
  <li><strong>Emphasize Strength Building:</strong> Focus on progressive resistance training over intense cardio to help ensure excess calories go toward building lean muscle rather than fat.</li>
</ul>
`,
};