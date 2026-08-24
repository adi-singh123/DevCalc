import { Calculator } from "@/src/types/calculator";

export const idealBodyWeightCalculator: Calculator = {
  slug: "ideal-body-weight-calculator",

  name: "Ideal Body Weight Calculator",

  description:
    "Calculate your ideal body weight (IBW) by height and gender using the Devine, Hamwi, Robinson, and Miller formulas. Get an instant healthy weight range to guide fitness, nutrition, and weight management goals.",

  category: "Health",

  isPopular: true,

  seo: {
    title:
      "Ideal Body Weight Calculator - Calculate Your Healthy Weight (Devine, Hamwi & More)",

    description:
      "Calculate your ideal body weight instantly with our free IBW calculator. Compare results from the Devine, Hamwi, Robinson, and Miller formulas based on your height and gender.",

    keywords: [
      "ideal body weight calculator",
      "ideal weight calculator",
      "healthy weight calculator",
      "ibw calculator",
      "devine formula calculator",
      "hamwi formula calculator",
      "healthy weight range calculator",
      "ideal weight for height",
      "adjusted body weight calculator",
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
        "The calculator applies the Devine formula (and related methods) to your height and gender to estimate a clinically referenced ideal body weight in kilograms or pounds.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Results",
      description:
        "Review your ideal body weight along with a healthy weight range, so you have a realistic target band rather than a single rigid number.",
      icon: "result",
    },
  ],

  formula: {
    title: "Ideal Body Weight Formula",

    formula:
      "Male: 50 kg + 2.3 kg for each inch over 5 ft | Female: 45.5 kg + 2.3 kg for each inch over 5 ft",

    explanation:
      "This calculator is built around the Devine formula, the most widely referenced method for estimating ideal body weight (IBW) from height and gender alone. Dr. B.J. Devine originally created it in 1974 to help clinicians calculate drug dosages more accurately, since many medications need to be dosed by lean body weight rather than total body weight. The formula starts from a baseline weight for someone 5 feet tall and adds 2.3 kg (about 5 lb) for every inch above that height. Men get a higher baseline (50 kg) than women (45.5 kg) to reflect average differences in muscle mass and skeletal frame.\n\nThree other formulas are commonly used alongside Devine, and you'll often see them quoted together:\n\n• Hamwi formula (1964): Male = 48 kg + 2.7 kg per inch over 5 ft; Female = 45.5 kg + 2.3 kg per inch over 5 ft. Developed for quick bedside estimates, it tends to run slightly higher than Devine for taller people.\n\n• Robinson formula (1983): A refinement of Devine using updated population data. Male = 52 kg + 2.3 kg per inch over 5 ft; Female = 49 kg + 2.3 kg per inch over 5 ft.\n\n• Miller formula (1983): Tends to produce the lowest estimates of the four. Male = 56.2 kg + 1.41 kg per inch over 5 ft; Female = 53.1 kg + 1.36 kg per inch over 5 ft.\n\nNone of these formulas account for muscle mass, bone density, body fat percentage, or frame size directly — they're estimates based on population averages, not a precise measurement of your individual healthy weight. For people under 5 feet tall, some clinicians instead subtract the per-inch adjustment from the baseline, though results become less reliable at shorter heights. That's why the result is best read as a reference point, not a strict target, and why pairing it with a healthy weight range gives a more realistic and usable answer.",

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
        "Standard IBW equations assume an average body frame. Individuals with a smaller skeletal frame may thrive with a target weight roughly 10% below the formula baseline, whereas larger-framed individuals naturally carry more structural weight without excess body fat.",
    },
  ],
};