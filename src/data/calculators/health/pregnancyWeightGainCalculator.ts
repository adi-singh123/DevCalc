import { Calculator } from "@/src/types/calculator";

export const pregnancyWeightGainCalculator: Calculator = {
  slug: "pregnancy-weight-gain-calculator",

  name: "Pregnancy Weight Gain Calculator",

  description:
    "Estimate healthy pregnancy weight gain based on your pre-pregnancy BMI, current pregnancy week, height, and weight. Track recommended weight gain throughout pregnancy and understand healthy pregnancy growth milestones.",

  category: "Health",

  isPopular: false,

  seo: {
    title: "Pregnancy Weight Gain Calculator - Healthy Weight Gain During Pregnancy",

    description:
      "Calculate recommended pregnancy weight gain based on pre-pregnancy BMI and pregnancy stage.倾 Check healthy weight gain ranges, trimester guidelines, and pregnancy growth recommendations.",

keywords: [
  "pregnancy weight gain calculator",
  "pregnancy weight gain chart",
  "healthy pregnancy weight gain",
  "pregnancy bmi calculator",
  "weight gain during pregnancy",
  "pregnancy weight tracker",
  "recommended pregnancy weight gain",
  "pregnancy weight gain by week",
  "pregnancy weight gain by trimester",
  "pregnancy health calculator",
  "pregnancy nutrition calculator",
  "maternal weight gain calculator",
  "pregnancy wellness calculator",
  "healthy pregnancy weight chart",
  "pregnancy bmi and weight gain",

  // Core Keywords
  "pregnancy weight calculator",
  "pregnancy weight estimator",
  "weight gain tracker pregnancy",
  "pregnancy weight monitor",
  "pregnancy weight assessment",
  "gestational weight gain calculator",
  "pregnancy weight guide",
  "pregnancy health tracker",
  "maternal health calculator",
  "pregnancy wellness tracker",

  // Weekly Weight Gain
  "pregnancy weight gain by week",
  "weekly pregnancy weight gain",
  "pregnancy weekly weight chart",
  "weight gain per week pregnancy",
  "pregnancy week by week weight gain",
  "pregnancy progress weight calculator",
  "weekly pregnancy tracker",
  "pregnancy growth tracker",
  "weight gain during each week of pregnancy",
  "pregnancy weight milestones",

  // Trimester Keywords
  "pregnancy weight gain by trimester",
  "first trimester weight gain",
  "second trimester weight gain",
  "third trimester weight gain",
  "trimester weight calculator",
  "pregnancy trimester calculator",
  "healthy trimester weight gain",
  "weight gain in pregnancy stages",
  "pregnancy trimester weight chart",
  "expected weight gain by trimester",

  // BMI Keywords
  "pregnancy bmi calculator",
  "pregnancy bmi chart",
  "pre pregnancy bmi calculator",
  "pregnancy bmi and weight gain",
  "healthy bmi during pregnancy",
  "pregnancy weight gain based on bmi",
  "maternal bmi calculator",
  "pregnancy bmi tracker",
  "bmi pregnancy chart",
  "pregnancy bmi recommendations",

  // Weight Gain Recommendations
  "recommended pregnancy weight gain",
  "healthy pregnancy weight gain",
  "ideal pregnancy weight gain",
  "normal pregnancy weight gain",
  "expected pregnancy weight gain",
  "weight gain recommendations pregnancy",
  "safe pregnancy weight gain",
  "healthy maternal weight gain",
  "pregnancy weight goals",
  "pregnancy weight range calculator",

  // Nutrition Keywords
  "pregnancy nutrition calculator",
  "pregnancy calorie calculator",
  "pregnancy diet calculator",
  "pregnancy nutrition tracker",
  "maternal nutrition calculator",
  "healthy pregnancy diet planner",
  "pregnancy calorie needs",
  "pregnancy food calculator",
  "pregnancy wellness calculator",
  "prenatal nutrition calculator",

  // Health Keywords
  "pregnancy health calculator",
  "maternal health calculator",
  "prenatal health calculator",
  "pregnancy wellness tracker",
  "healthy pregnancy calculator",
  "pregnancy care calculator",
  "pregnancy progress tracker",
  "prenatal wellness calculator",
  "maternal wellness calculator",
  "pregnancy monitoring tool",

  // Chart Keywords
  "pregnancy weight gain chart",
  "pregnancy weight chart by week",
  "pregnancy weight chart by month",
  "healthy pregnancy weight chart",
  "pregnancy growth chart",
  "maternal weight gain chart",
  "pregnancy bmi chart",
  "pregnancy weight table",
  "weight gain chart during pregnancy",
  "pregnancy tracking chart",

  // Question Keywords
  "how much weight should i gain during pregnancy",
  "what is healthy pregnancy weight gain",
  "how to track pregnancy weight gain",
  "how much weight gain is normal during pregnancy",
  "what is the recommended pregnancy weight gain",
  "how does pregnancy bmi affect weight gain",
  "what is a healthy pregnancy bmi",
  "how much weight should i gain each trimester",
  "how much weight should i gain each week during pregnancy",
  "pregnancy weight gain calculator example",

  // Long Tail Keywords
  "free online pregnancy weight gain calculator",
  "best pregnancy weight gain calculator",
  "pregnancy weight gain calculator by week",
  "pregnancy weight gain calculator by trimester",
  "pregnancy bmi and weight gain calculator",
  "healthy pregnancy weight tracker online",
  "accurate pregnancy weight gain calculator",
  "maternal weight gain calculator free",
  "pregnancy nutrition and weight gain calculator",
  "online pregnancy health calculator",
  "गर्भावस्था वजन कैलकुलेटर",
"प्रेगनेंसी वेट गेन कैलकुलेटर",
"गर्भावस्था में कितना वजन बढ़ना चाहिए",
"प्रेगनेंसी वजन चार्ट",
],
  },

  steps: [
    {
      step: 1,
      title: "Enter Pre-Pregnancy Weight",
      description:
        "Input your exact body weight immediately prior to conception using kilograms or pounds.",
      icon: "weight",
    },
    {
      step: 2,
      title: "Enter Height",
      description:
        "Provide your precise vertical height in centimeters or feet and inches to initialize baseline metrics.",
      icon: "height",
    },
    {
      step: 3,
      title: "Select Gestational Week",
      description:
        "Input your current completed week of pregnancy or use your calculated estimated due date (EDD) milestone.",
      icon: "calendar",
    },
    {
      step: 4,
      title: "Analyze Weight Curve",
      description:
        "Instantly evaluate your personalized healthy upper and lower weight boundaries across your exact trimester timeline.",
      icon: "result",
    },
  ],

  formula: {
    title: "Pregnancy Weight Gain Calculation",

    formula: "BMI = Weight (kg) ÷ Height² (m²)",

    explanation:
      "Recommended pregnancy weight gain depends on your pre-pregnancy Body Mass Index (BMI). Medical guidelines provide different target weight gain ranges for underweight, normal weight, overweight, and obese individuals.",

    example: {
      input: "Weight: 60 kg, Height: 165 cm",

      output: "BMI: 22.0 (Normal Weight), Recommended Gain: 11.5–16 kg",
    },

    useCases: [
      "Pregnancy Health Monitoring",
      "Weight Management During Pregnancy",
      "Prenatal Care Planning",
      "Nutrition Planning",
      "Pregnancy Wellness Tracking",
    ],
  },

  faqs: [
    {
      question: "How do clinicians determine my recommended pregnancy weight gain, and why is it personalized?",
      answer:
        "Obstetricians and prenatal healthcare providers calculate your personalized target weight gain range using guidelines from the Institute of Medicine (IOM) and the American College of Obstetricians and Gynecologists (ACOG). These recommendations are based on your pre-pregnancy Body Mass Index (BMI). There is no single universal weight gain target because your body's initial nutritional reserves dictate how much mass needs to be accumulated to support healthy fetal development. Individuals starting with a lower pre-pregnancy BMI require a larger buffer to reduce risks like low birth weight or preterm delivery. Conversely, those with a higher pre-pregnancy BMI have a lower target range to help minimize complications like gestational hypertension, macrosomia (large baby syndrome), or unexpected emergency C-sections.",
    },
    {
      question: "What exactly comprises pregnancy weight gain, and where do the accumulated kilograms go?",
      answer:
        "Many expectant parents are surprised to learn that the baby accounts for only a fraction of their total pregnancy weight gain. The accumulated mass is distributed across several structural components designed to nurture and protect the developing fetus. For a typical healthy weight gain of roughly 11.5 to 16 kilograms, the allocation is generally distributed as follows: the baby contributes 3 to 3.5 kg; the placenta adds 0.5 to 1 kg; amniotic fluid accounts for approximately 1 kg; expanded uterine muscle tissue adds 1 kg; localized breast tissue increases by 1 kg; expanded circulating blood volume spikes by 1.5 to 2 kg; increased maternal tissue fluid reserves add 1.5 to 2 kg; and maternal fat and nutrient reserves store roughly 3 to 4 kg to support eventual lactation.",
    },
    {
      question: "What are the specific weekly and trimester guidelines for weight accumulation?",
      answer:
        "Pregnancy weight accumulation does not occur in a flat, linear fashion. During the first trimester (weeks 1 through 13), fetal development is centered around rapid cellular differentiation rather than mass, meaning most individuals require a total weight gain of only 0.5 to 2 kilograms. Some may even experience minor weight loss due to morning sickness or hyperemesis gravidarum. During the second and third trimesters, growth dynamics change significantly. For individuals with a normal pre-pregnancy BMI, this manifests as a steady weekly weight gain averaging roughly 0.4 kilograms (about 1 pound) per week. If your weight fluctuates wildly from week to week, look at multi-week trends instead of individual daily weigh-ins.",
    },
    {
      question: "What health risks are associated with gaining weight significantly above or below the targets?",
      answer:
        "Consistently tracking outside of your recommended pre-pregnancy BMI weight targets can increase the risk of maternal and fetal complications. Gaining weight well above the recommended guidelines can elevate risks for gestational diabetes mellitus (GDM), preeclampsia, and shoulder dystocia during delivery, which often leads to a higher rate of surgical interventions. It can also make it more challenging to shed post-pregnancy weight. On the other hand, gaining significantly less than the recommended weight increases the risk of intrauterine growth restriction (IUGR), delivering a small-for-gestational-age (SGA) infant, or facing an unplanned preterm labor cycle.",
    },
    {
      question: "Is it ever safe or recommended to actively go on a weight-loss diet while pregnant?",
      answer:
        "No, attempting to actively lose weight through intentional calorie restriction or extreme dieting programs is strictly counter-indicated during pregnancy, even for individuals who enter pregnancy in the overweight or obese BMI categories. Restricting calories can deprive the developing fetus of essential micro and macronutrients, while sudden weight loss can release fat-stored toxins into the bloodstream. Weight management during pregnancy focuses on managing the rate of weight accumulation rather than causing a net reduction in scale weight. Any strategic changes to your diet or activity level should be guided by your OB-GYN or a registered prenatal dietitian.",
    },
    {
      question: "How do weight gain recommendations change if I am pregnant with twins or higher-order multiples?",
      answer:
        "Carrying twins, triplets, or higher-order multiples changes your nutritional requirements and target weight thresholds. Because your body is supporting multiple placentas, expanded fluid volumes, and multiple developing babies, the recommended weight targets increase across all BMI brackets. For an individual with a normal pre-pregnancy BMI carrying twins, the target weight gain range increases to roughly 17 to 25 kilograms (37 to 54 pounds). This expanded target is supported by a steady weekly accumulation rate of about 0.7 kilograms throughout the second and third trimesters to ensure both babies receive adequate developmental support.",
    },
  ],

  seoContent: `
<h2>The Biological and Clinical Role of Managing Weight Gain During Pregnancy</h2>
<p>
  Pregnancy is a powerful period of physical transformation. Monitoring your <strong>pregnancy weight gain</strong> is about much more than tracking a number on a scale; it is an essential clinical indicator used by healthcare providers to assess fetal development, monitor maternal fluid balances, and identify potential metabolic risks. Staying within recommended guidelines supports your baby's growth while lowering the risk of delivery complications.
</p>
<p>
  Every pregnancy path is completely unique. Using an online <strong>Pregnancy Weight Gain Calculator</strong> helps take the guesswork out of prenatal tracking by mapping out personalized target boundaries based on your pre-pregnancy body mass index (BMI). This structured guide helps you manage your weekly growth trends in a healthy, sustainable way.
</p>

---

<h2>Deconstructing the Scale: Where Does Pregnancy Weight Actually Go?</h2>
<p>
  A common misconception among expectant parents is assuming that all gained weight is directly tied to fat accumulation or the baby's size. In reality, your body undergoes massive structural and vascular expansions to build a complete life-support system. 
</p>
<p>
  The table below breaks down how a healthy, standard weight gain of approximately 14 kilograms is typically distributed by the third trimester:
</p>

<table>
  <thead>
    <tr>
      <th>Anatomical / Physiological Component</th>
      <th>Average Mass Distribution (Kilograms)</th>
      <th>Average Mass Distribution (Pounds)</th>
      <th>Primary Biological Purpose and Function</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Developing Fetus (Baby)</strong></td>
      <td>3.2 – 3.6 kg</td>
      <td>7.0 – 8.0 lbs</td>
      <td>The final weight of the infant at full-term delivery.</td>
    </tr>
    <tr>
      <td><strong>Expanded Circulating Blood Volume</strong></td>
      <td>1.4 – 1.8 kg</td>
      <td>3.0 – 4.0 lbs</td>
      <td>Supplies extra oxygen, nutrients, and waste filtering for the fetus.</td>
    </tr>
    <tr>
      <td><strong>Maternal Fat and Nutrient Stores</strong></td>
      <td>2.7 – 3.6 kg</td>
      <td>6.0 – 8.0 lbs</td>
      <td>Provides energy reserves for fetal growth and future lactation.</td>
    </tr>
    <tr>
      <td><strong>Maternal Tissue Fluid (Edema)</strong></td>
      <td>0.9 – 1.4 kg</td>
      <td>2.0 – 3.0 lbs</td>
      <td>Supports expanding pelvic joints and increased cellular volume.</td>
    </tr>
    <tr>
      <td><strong>Amniotic Fluid Cushion</strong></td>
      <td>0.9 kg</td>
      <td>2.0 lbs</td>
      <td>Protects the fetus from external shocks and stabilizes temperature.</td>
    </tr>
    <tr>
      <td><strong>Uterine Muscle Hypertrophy</strong></td>
      <td>0.9 kg</td>
      <td>2.0 lbs</td>
      <td>Expands physically to accommodate fetal structural growth.</td>
    </tr>
    <tr>
      <td><strong>Placenta Organ Development</strong></td>
      <td>0.5 – 0.7 kg</td>
      <td>1.0 – 1.5 lbs</td>
      <td>The vital hormonal and nutritional bridge between parent and child.</td>
    </tr>
    <tr>
      <td><strong>Expanding Breast Tissue</strong></td>
      <td>0.5 – 0.9 kg</td>
      <td>1.0 – 2.0 lbs</td>
      <td>Prepares mammary pathways for postpartum breastfeeding.</td>
    </tr>
  </tbody>
</table>

---

<h2>Target Guidelines: Recommended Weight Gain by Pre-Pregnancy BMI</h2>
<p>
  Medical organizations like the Institute of Medicine (IOM) define healthy weight targets based on your starting pre-pregnancy BMI. This classification helps ensure you accumulate the right amount of mass to minimize risks for both parent and child:
</p>

<table>
  <thead>
    <tr>
      <th>Pre-Pregnancy BMI Range</th>
      <th>Weight Classification</th>
      <th>Recommended Total Weight Gain (Single Baby)</th>
      <th>Recommended Weekly Gain Rate (Trimesters 2 &amp; 3)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Below 18.5</strong></td>
      <td>Underweight Range</td>
      <td>12.5 – 18.0 kg (28 – 40 lbs)</td>
      <td>~0.51 kg / week (1.1 lbs)</td>
    </tr>
    <tr>
      <td><strong>18.5 – 24.9</strong></td>
      <td>Normal / Healthy Range</td>
      <td>11.5 – 16.0 kg (25 – 35 lbs)</td>
      <td>~0.42 kg / week (0.9 lbs)</td>
    </tr>
    <tr>
      <td><strong>25.0 – 29.9</strong></td>
      <td>Overweight Range</td>
      <td>7.0 – 11.5 kg (15 – 25 lbs)</td>
      <td>~0.28 kg / week (0.6 lbs)</td>
    </tr>
    <tr>
      <td><strong>30.0 and Above</strong></td>
      <td>Obese Range</td>
      <td>5.0 – 9.0 kg (11 – 20 lbs)</td>
      <td>~0.22 kg / week (0.5 lbs)</td>
    </tr>
  </tbody>
</table>

---

<h2>Trimester-by-Trimester Growth and Development Expectations</h2>
<p>
  Your body's nutritional and structural demands shift significantly across each stage of pregnancy, altering the rate at which you accumulate weight:
</p>
<h3>1. The First Trimester (Weeks 1 to 13)</h3>
<p>
  During these early weeks, the embryo is tiny, focusing primarily on organogenesis (forming basic internal organs). Because of this, your target weight gain is minimal, ranging from 0.5 to 2 kilograms total. For many, managing issues like morning sickness, changing taste preferences, or changes in food tolerance can make gaining weight difficult during this initial phase.
</p>
<h3>2. The Second Trimester (Weeks 14 to 27)</h3>
<p>
  Often called the "honeymoon phase" of pregnancy, energy levels typically return, and morning sickness begins to clear. The fetus begins growing rapidly, and your blood volume expands significantly. This stage marks the beginning of a steady weight accumulation curve, averaging roughly 0.4 kg per week for a standard BMI baseline.
</p>
<h3>3. The Third Trimester (Weeks 28 to 40+)</h3>
<p>
  This final window is focused heavily on fetal weight accumulation. The baby builds essential fat layers and matures its lung structures in preparation for delivery. Your body weight will continue to step up predictably until around week 37, where accumulation may level off slightly before labor begins.
</p>

---

<h2>Actionable Nutrition and Wellness Practices for Balanced Tracking</h2>
<ul>
  <li><strong>Focus on Nutrient Density Over Extra Calories:</strong> The old phrase "eating for two" is a major misconception. During the first trimester, you require zero extra daily calories. You only need about 340 extra calories per day in the second trimester, and roughly 450 extra calories per day in the third trimester—which can easily be met with a nutrient-dense snack like a handful of almonds and Greek yogurt.</li>
  <li><strong>Prioritize Dietary Protein:</strong> Consume plenty of lean protein sources like eggs, lean chicken, fish, paneer, lentils, and tofu to support your baby's rapid cellular and muscular development.</li>
  <li><strong>Incorporate Safe, Low-Impact Exercise:</strong> Engage in safe physical activities like prenatal yoga, swimming, or daily walking for 30 minutes. Regular movement helps regulate gestational blood sugar levels, maintains cardiovascular stamina, and keeps your weight tracking smoothly along recommended curves.</li>
  <li><strong>Stay Ahead of Hydration Needs:</strong> Drink plenty of water throughout the day to support your expanded blood volume and help maintain healthy amniotic fluid levels.</li>
</ul>
`,
};