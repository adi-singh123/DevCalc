import { Calculator } from "@/src/types/calculator";

export const idealBodyWeightCalculator: Calculator = {
  slug: "ideal-body-weight-calculator",

  name: "Ideal Body Weight Calculator",

  description:
    "Compare ideal body weight reference estimates by height and sex using the Devine, Hamwi, Robinson, and Miller formulas.",

  category: "Health",

  isPopular: true,

  editorialIntro:
    "Ideal body weight (IBW) formulas provide height-based reference estimates. The Devine equation was introduced for medication-dosing calculations, not as a universal definition of a healthy appearance or a personal target weight.",

  benchmarkContext: {
    title: "Clinical Pharmacokinetics & IBW Diagnostic Formulas",
    badge: "Clinical Pharmacology Guideline",
    stat: "50 kg Men | 45.5 kg Women (Base for 5'0\" Stature)",
    description:
      "Devine Formula: Men = 50 kg + 2.3 kg per inch over 5 ft; Women = 45.5 kg + 2.3 kg per inch over 5 ft. Robinson Formula: Men = 52 kg + 1.9 kg/inch; Women = 49 kg + 1.7 kg/inch.",
    source: "Devine BJ (1974) / Robinson JD (1983) American Journal of Hospital Pharmacy",
    lastUpdated: "January 2026",
  },

  compareWith: [
    "bmi-calculator",
    "bmr-calculator",
    "calorie-calculator",
    "body-fat-calculator",
    "lean-body-mass-calculator",
  ],

  seo: {
    title:
      "Ideal Body Weight Calculator – Devine, Hamwi and More",

    description:
      "Estimate ideal body weight from height and sex using Devine, Hamwi, Robinson and Miller formulas. Compare results and understand their limitations.",
    keywords: [
      "ideal body weight calculator",
      "ideal weight calculator",
      "healthy weight calculator",
      "ibw calculator",
      "devine formula calculator",
      "hamwi formula calculator",
      "healthy weight range calculator",
      "ideal weight for height",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Your Height",
      description:
        "Input your height in centimeters, or in feet and inches, depending on your preferred unit. Accurate height entry is the single biggest factor in getting a reliable ideal weight estimate.",
      icon: "height",
    },

    {
      step: 2,
      title: "Select Gender",
      description:
        "Choose male or female. Ideal body weight formulas use different baseline constants for each sex because average frame size and body composition differ between men and women.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Calculate Ideal Weight",
      description:
        "The calculator applies the Devine, Hamwi, Robinson, and Miller equations to estimate four height-based reference weights.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Results",
      description:
        "Compare each formula result and their average. Differences between formulas show why no single result should be treated as a precise personal target.",
      icon: "result",
    },
  ],

  formula: {
    title: "Ideal Body Weight Formula",

    formula:
      "Male: 50 kg + 2.3 kg for each inch over 5 ft | Female: 45.5 kg + 2.3 kg for each inch over 5 ft",

    explanation:
      "The Devine formula starts at 50 kg for men and 45.5 kg for women at 5 feet, then adds 2.3 kg for each inch above 5 feet. Other equations use different constants: Hamwi uses 48 kg + 2.7 kg/in for men and 45.5 kg + 2.2 kg/in for women; Robinson uses 52 kg + 1.9 kg/in for men and 49 kg + 1.7 kg/in for women; Miller uses 56.2 kg + 1.41 kg/in for men and 53.1 kg + 1.36 kg/in for women. These are height-based reference equations. They do not measure muscle, bone density, body fat, pregnancy-related changes, or medical history, so their results should not be treated as a precise personal target.",

    example: {
      input:
        "Male, Height: 5 ft 10 in (70 inches)",

      output:
        "Ideal Body Weight ≈ 73 kg (50 kg + 10 in × 2.3 kg = 73 kg), roughly 161 lb",
    },

    useCases: [
      "Weight Management",
      "Fitness Planning",
      "Nutrition Programs",
      "Healthy Weight Goals",
      "BMI Assessment",
      "Personal Health Tracking",
      "Weight Loss Planning",
      "Muscle Gain Programs",
      "Healthcare Assessments",
      "Lifestyle Improvement",
    ],
  },

  faqs: [
    {
      question:
        "What is an Ideal Body Weight Calculator?",
      answer:
        "An Ideal Body Weight (IBW) calculator estimates a reference healthy weight using only your height and gender, based on formulas originally developed for clinical use — most commonly the Devine formula. Rather than giving you a single number to chase, a good IBW calculator should show a healthy weight range, since formula-based estimates don't account for muscle mass, bone density, or body frame. It's a useful starting point for fitness and nutrition planning, not a diagnosis of what you 'should' weigh.",
    },

    {
      question:
        "How is ideal body weight calculated?",
      answer:
        "The most common method is the Devine formula: for men, start at 50 kg and add 2.3 kg for every inch of height over 5 feet; for women, start at 45.5 kg and add the same 2.3 kg per inch. For example, a man who is 5 ft 10 in tall would have an estimated IBW of 50 + (10 × 2.3) = 73 kg. Other formulas — Hamwi, Robinson, and Miller — use slightly different baseline weights and per-inch adjustments, which is why you may see different ideal weight figures depending on the source. None of these formulas use age, body fat percentage, or activity level as inputs.",
    },

    {
      question:
        "Is ideal body weight the same as BMI?",
      answer:
        "No, and the two measure different things. BMI (Body Mass Index) is calculated from your current height and current weight to classify you into categories like underweight, normal, overweight, or obese. Ideal body weight, by contrast, is calculated only from your height and gender to estimate a target weight you could aim for. You can have a 'normal' BMI while being well outside your IBW range, or vice versa — they're complementary tools, not interchangeable ones. Many people check both: BMI to see where they currently stand, and IBW to set a goal.",
    },

    {
      question:
        "Why is ideal body weight important?",
      answer:
        "IBW gives you a concrete, evidence-based reference point instead of guessing at a weight loss or weight gain goal. It's also used clinically — doctors and pharmacists use ideal body weight (or a related figure called adjusted body weight) to calculate accurate dosages for certain medications, especially in patients who are significantly overweight or underweight, because dosing by total body weight alone can be unsafe in those cases. For everyday use, it helps frame realistic fitness and nutrition targets rather than chasing an arbitrary number.",
    },

    {
      question:
        "Can athletes use ideal body weight calculators?",
      answer:
        "Athletes and anyone with above-average muscle mass should treat IBW results as a loose reference rather than a target. Because the underlying formulas were built from general population data, they assume an average ratio of muscle to fat. A muscular athlete will often weigh more than their 'ideal' weight while still being lean and healthy, since muscle is denser than fat. In these cases, body composition metrics (body fat percentage, waist-to-hip ratio) are more meaningful than IBW or BMI alone.",
    },

    {
      question:
        "What factors affect ideal body weight?",
      answer:
        "Height and gender are the only two inputs the standard formulas use, but several other factors influence what's actually healthy for a given individual: body frame size (small, medium, or large), muscle mass, age, bone density, and overall health history. Two people of the same height and gender can have very different healthy weights depending on these factors. This is why doctors generally use IBW as one data point alongside BMI, waist circumference, and a physical assessment — not as a standalone verdict.",
    },

    {
      question:
        "Can I use this calculator for weight loss planning?",
      answer:
        "Yes — IBW is a reasonable starting point for setting a realistic weight loss or weight gain target, especially when you use the full healthy range rather than the single midpoint number. A practical approach is to aim for the upper end of your healthy range if you carry more muscle mass, or the middle of the range for a general fitness goal. For a personalized plan, it's worth combining this with a calorie or BMI calculator and, ideally, input from a healthcare provider or registered dietitian, particularly if you have an existing medical condition.",
    },

    {
      question:
        "How do different body frame sizes affect ideal body weight targets?",
      answer:
        "Standard IBW equations do not directly measure frame size, muscle mass, bone density, or fat distribution. A person with a larger frame or more muscle may be healthy above the estimate, while a smaller-framed person may fall below it. Avoid applying a fixed frame-size adjustment as a medical rule.",
    },
    {
      question: "Can this ideal body weight result be used for medication dosing?",
      answer:
        "Do not select or change a medicine dose from this page. Clinical dosing may use actual, ideal, lean, or adjusted body weight depending on the medicine, kidney function, age, and clinical protocol. A qualified prescriber or pharmacist should choose the appropriate weight and dose.",
    },
  ],
  seoContent: `
    <h2>Why ideal-weight formulas give different answers</h2>
    <p>The Devine, Robinson, Miller, and Hamwi equations use different baseline weights and adjustments for height. They were developed as screening or clinical reference formulas, not as personalised targets, so a range is often more informative than one exact number.</p>
    <h2>Information these formulas do not use</h2>
    <p>Most traditional ideal-body-weight equations do not consider age, muscle mass, body-fat distribution, frame size, pregnancy, disability, or athletic training. Two people of the same height can therefore have very different healthy weights.</p>
    <h2>Use the estimate appropriately</h2>
    <p>Treat the result as general educational context, not a diagnosis or treatment goal. A clinician or registered dietitian can interpret weight together with medical history, waist measurement, body composition, laboratory results, and individual wellbeing.</p>
    <h2>Worked comparison for a person who is 5 ft 10 in</h2>
    <p>At 70 inches, the height is 10 inches above 5 feet. The Devine estimate for a man is 50 + (2.3 × 10) = 73 kg. Robinson gives 52 + (1.9 × 10) = 71 kg, while Miller gives 56.2 + (1.41 × 10) = 70.3 kg. The different results show why IBW is better interpreted as a reference range than as one exact target.</p>
    <h2>When this calculator is not appropriate</h2>
    <p>These adult formulas are not designed for children, pregnancy, or people whose growth, disability, fluid status, or medical treatment materially changes body composition. Seek individualized clinical guidance in those situations.</p>
  `,
};
