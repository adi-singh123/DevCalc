export type CategoryGuide = {
  overview: string;
  subgroups: {
    title: string;
    description: string;
    recommendedSlugs: string[];
  }[];
  selectionAdvice: {
    situation: string;
    recommendedTool: string;
    slug: string;
    rationale: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const CATEGORY_GUIDES: Record<string, CategoryGuide> = {
  finance: {
    overview:
      "DevCalc's financial calculators provide mathematical modeling for retail banking, capital markets, personal taxation, and retirement planning. Every calculator uses verified actuarial and statutory formulas (such as RBI reducing-balance amortization, SEBI mutual fund compounding, Section 115BAC tax slabs, and PFRDA annuity matrices).",
    subgroups: [
      {
        title: "Loan & Debt Amortization",
        description: "Calculate reducing-balance loan EMIs, interest vs principal splits, and prepayment savings.",
        recommendedSlugs: ["emi-calculator", "simple-interest-calculator", "compound-interest-calculator"],
      },
      {
        title: "Wealth Accumulation & Investments",
        description: "Forecast compounding growth across SIPs, lumpsum mutual funds, and fixed deposits.",
        recommendedSlugs: ["sip-calculator", "lumpsum-calculator", "cagr-calculator", "fd-calculator", "ppf-calculator"],
      },
      {
        title: "Taxation & Compliance",
        description: "Estimate liability under Old vs New tax regimes, Section 80C exemptions, and GST slabs.",
        recommendedSlugs: ["income-tax-calculator", "gst-calculator", "hra-calculator"],
      },
      {
        title: "Retirement & Income Distribution",
        description: "Plan inflation-adjusted post-retirement cash flows, safe withdrawal rates, and pensions.",
        recommendedSlugs: ["retirement-calculator", "swp-calculator", "nps-calculator", "inflation-calculator"],
      },
    ],
    selectionAdvice: [
      {
        situation: "Comparing home loans across banks",
        recommendedTool: "EMI Calculator",
        slug: "emi-calculator",
        rationale: "Shows exact monthly outflow and total interest payable using RBI repo-linked reducing balance formulas.",
      },
      {
        situation: "Investing surplus monthly salary into mutual funds",
        recommendedTool: "SIP Calculator",
        slug: "sip-calculator",
        rationale: "Simulates rupee-cost averaging and compounding growth across 5–30 year horizons.",
      },
      {
        situation: "Planning regular monthly income during retirement",
        recommendedTool: "SWP Calculator",
        slug: "swp-calculator",
        rationale: "Evaluates capital longevity under 4%–6% safe withdrawal rates and FIFO equity taxation.",
      },
      {
        situation: "Checking rent allowance tax exemptions",
        recommendedTool: "HRA Calculator",
        slug: "hra-calculator",
        rationale: "Applies Rule 2A 3-condition test across metro and non-metro city classifications.",
      },
    ],
    faqs: [
      {
        question: "How accurate are DevCalc's financial calculations?",
        answer:
          "All formulas strictly follow verified standard banking and statutory algorithms (e.g. reducing balance EMI formulas, Section 115BAC income tax slabs, and AMFI mutual fund guidelines). However, actual bank charges or final tax filings may vary slightly based on processing fees or specific deductions.",
      },
      {
        question: "Are financial calculations private and secure?",
        answer:
          "Yes. All computations execute 100% locally within your browser client. No salary, bank details, or financial inputs are transmitted or stored on any external server.",
      },
    ],
  },

  health: {
    overview:
      "Our health and biometric calculators provide empirical screening tools based on clinical physiology standards from the World Health Organization (WHO), Indian Council of Medical Research (ICMR), and the American College of Sports Medicine (ACSM).",
    subgroups: [
      {
        title: "Body Composition & Weight Status",
        description: "Evaluate mass index, body fat percentages, and healthy weight thresholds.",
        recommendedSlugs: ["bmi-calculator", "body-fat-calculator", "ideal-body-weight-calculator", "lean-body-mass-calculator", "waist-to-hip-ratio-calculator"],
      },
      {
        title: "Metabolism & Nutritional Energetics",
        description: "Compute basal metabolic expenditure (BMR), daily energy needs (TDEE), and macronutrients.",
        recommendedSlugs: ["bmr-calculator", "calorie-calculator", "macro-calculator", "protein-intake-calculator", "water-intake-calculator"],
      },
      {
        title: "Reproductive & Maternal Health",
        description: "Estimate gestational due dates, healthy pregnancy weight curves, and fertile ovulation windows.",
        recommendedSlugs: ["due-date-calculator", "ovulation-calculator", "pregnancy-weight-gain-calculator"],
      },
      {
        title: "Cardiovascular & Sleep Physiology",
        description: "Map target heart rate training zones and 90-minute REM sleep cycles.",
        recommendedSlugs: ["heart-rate-zone-calculator", "sleep-cycle-calculator", "bsa-calculator"],
      },
    ],
    selectionAdvice: [
      {
        situation: "Screening general weight status for South Asian adults",
        recommendedTool: "BMI Calculator",
        slug: "bmi-calculator",
        rationale: "Maps height and weight against Asian ICMR thresholds (18.5–22.9 kg/m² normal cutoff).",
      },
      {
        situation: "Setting daily calorie targets for fat loss or muscle gain",
        recommendedTool: "Calorie / TDEE Calculator",
        slug: "calorie-calculator",
        rationale: "Applies Mifflin-St Jeor metabolic math with activity multipliers to establish safe caloric targets.",
      },
      {
        situation: "Athletes and bodybuilders assessing physical conditioning",
        recommendedTool: "Body Fat Calculator",
        slug: "body-fat-calculator",
        rationale: "Uses US Navy circumference algorithms to separate active muscle mass from adipose fat tissue.",
      },
    ],
    faqs: [
      {
        question: "Can these health calculators replace professional medical diagnosis?",
        answer:
          "No. DevCalc health tools serve as general educational screening metrics. For clinical diagnoses, personalized nutritional prescriptions, or medical therapy, always consult a licensed medical practitioner.",
      },
    ],
  },

  math: {
    overview:
      "DevCalc mathematical tools handle discrete math, statistical analysis, linear algebra, and everyday arithmetic with high-precision JavaScript IEEE 754 floating point logic.",
    subgroups: [
      {
        title: "Percentages & Commercial Arithmetic",
        description: "Compute markups, successive discounts, percentage differences, and proportional ratios.",
        recommendedSlugs: ["percentage-calculator", "discount-calculator", "percentage-difference-calculator", "ratio-calculator", "fraction-calculator"],
      },
      {
        title: "Statistics & Probability",
        description: "Evaluate dataset dispersion, central tendencies, and combinatorial outcomes.",
        recommendedSlugs: ["mean-median-mode-calculator", "standard-deviation-calculator", "probability-calculator", "permutation-and-combination-calculator"],
      },
      {
        title: "Algebra & Coordinate Geometry",
        description: "Solve quadratic roots, matrix determinants/inverses, line slopes, and 2D distances.",
        recommendedSlugs: ["quadratic-equation-calculator", "matrix-calculator", "slope-calculator", "distance-calculator", "prime-number-calculator", "lcm-calculator"],
      },
    ],
    selectionAdvice: [
      {
        situation: "Calculating retail sale discounts and final checkout bills",
        recommendedTool: "Discount Calculator",
        slug: "discount-calculator",
        rationale: "Calculates single and successive discounts with statutory GST addition.",
      },
      {
        situation: "Analyzing data variability and standard deviation in experimental samples",
        recommendedTool: "Standard Deviation Calculator",
        slug: "standard-deviation-calculator",
        rationale: "Computes population (σ) and sample (s) variance alongside mean dispersion.",
      },
    ],
    faqs: [
      {
        question: "How are mathematical edge cases (division by zero, imaginary roots) handled?",
        answer:
          "All tools incorporate defensive boundary validations, cleanly identifying undefined domains or complex numbers without crashing.",
      },
    ],
  },

  construction: {
    overview:
      "Engineered for civil site supervisors, contractors, and home builders, our construction estimators apply Bureau of Indian Standards (IS 456, IS 1077, IS 2502) and CPWD DSR schedule rates for raw material budgeting.",
    subgroups: [
      {
        title: "Structural Concrete & Masonry",
        description: "Calculate concrete mix batches, dry volume multipliers, and modular brick counts.",
        recommendedSlugs: ["concrete-calculator", "cement-calculator", "brick-calculator", "rebar-cutting-length-calculator"],
      },
      {
        title: "Finishing & Surface Architectural Estimation",
        description: "Estimate floor tile coverage, mortar grout, and interior/exterior paint spreading.",
        recommendedSlugs: ["tile-calculator", "paint-calculator", "house-construction-cost-calculator", "flat-buy-calculator", "stamp-duty-calculator"],
      },
    ],
    selectionAdvice: [
      {
        situation: "Ordering cement, sand, and aggregates for a concrete slab",
        recommendedTool: "Concrete Calculator",
        slug: "concrete-calculator",
        rationale: "Converts wet volume to dry volume using the statutory 1.54 multiplier across M15/M20/M25 grades.",
      },
      {
        situation: "Estimating wall bricks and masonry mortar bags",
        recommendedTool: "Brick Calculator",
        slug: "brick-calculator",
        rationale: "Applies the IS 2212 500-bricks/m³ standard with 5%–10% cutting wastage allowance.",
      },
    ],
    faqs: [
      {
        question: "Why do construction estimators include wastage percentages?",
        answer:
          "Job-site transit breakage, corner cuts, overlap splices, and mortar absorption require a standard 5% to 15% safety buffer depending on the raw material.",
      },
    ],
  },

  developertool: {
    overview:
      "Client-side developer utilities designed for web developers, DevOps engineers, and system architects adhering strictly to IETF (RFC 8259, RFC 4122, RFC 4648, RFC 3986) standards with zero data transmission.",
    subgroups: [
      {
        title: "Data Formatting & Decoding",
        description: "Pretty-print JSON payloads, decode JWT tokens, find text differences, and translate Base64/URL streams.",
        recommendedSlugs: ["diffcheck", "json-formatter", "jwt-decoder", "base64-encoder-decoder", "url-encoder-decoder"],
      },
      {
        title: "Cryptographic Hashing & Randomization",
        description: "Generate UUID v4 identifiers, SHA-256 checksums, and POSIX epoch timestamp conversions.",
        recommendedSlugs: ["uuid-generator", "hash-generator", "unix-timestamp-converter", "regex-tester"],
      },
    ],
    selectionAdvice: [
      {
        situation: "Inspecting claims and expiration on an OAuth2 / JWT bearer token",
        recommendedTool: "JWT Decoder",
        slug: "jwt-decoder",
        rationale: "Decodes Header and Payload claims locally without sending tokens over external networks.",
      },
      {
        situation: "Generating collision-resistant primary keys for distributed microservices",
        recommendedTool: "UUID Generator",
        slug: "uuid-generator",
        rationale: "Generates RFC 4122 v4 identifiers with 122 bits of cryptographic entropy.",
      },
    ],
    faqs: [
      {
        question: "Are API keys or sensitive JSON payloads stored on your server?",
        answer:
          "No. All developer utilities operate entirely within your browser runtime using the Web Cryptography API and client-side JavaScript.",
      },
    ],
  },

  education: {
    overview:
      "Educational calculators designed for university and secondary students to compute grade points (GPA/CGPA), track minimum attendance thresholds (75% rule), and calculate target final exam scores under UGC and AICTE guidelines.",
    subgroups: [
      {
        title: "Academic Grading & GPA Conversion",
        description: "Calculate semester grade point averages (SGPA), cumulative CGPA, and AICTE percentage conversions.",
        recommendedSlugs: ["gpa-calculator", "cgpa-calculator", "average-calculator", "final-grade-calculator"],
      },
      {
        title: "Coursework & Examination Planning",
        description: "Calculate class attendance safety margins, target passing marks, and study timetables.",
        recommendedSlugs: ["attendance-calculator", "marks-required-calculator", "study-hours-calculator", "exam-countdown-calculator", "scientific-calculator"],
      },
    ],
    selectionAdvice: [
      {
        situation: "Converting 10-point CGPA into equivalent percentage for job applications",
        recommendedTool: "CGPA Calculator",
        slug: "cgpa-calculator",
        rationale: "Applies the AICTE formula (Percentage = (CGPA - 0.75) × 10) and CBSE 9.5 multiplier.",
      },
      {
        situation: "Tracking mandatory 75% attendance threshold before semester exams",
        recommendedTool: "Attendance Calculator",
        slug: "attendance-calculator",
        rationale: "Calculates how many classes can be safely missed or how many consecutive classes are required.",
      },
    ],
    faqs: [
      {
        question: "Does DevCalc support weighted credit hours for university GPA?",
        answer:
          "Yes. The GPA calculator allows custom course credits (1 to 6 credit weights) multiplied by grade grade-points following the standard UGC 10-point Choice Based Credit System (CBCS).",
      },
    ],
  },

  vehicle: {
    overview:
      "Automotive calculators for evaluating real-world fuel economy (Tank-to-Tank method), monthly transit running costs, EV charging vs petrol economics, and state-wise RTO motor vehicle taxes.",
    subgroups: [
      {
        title: "Fuel Economy & Journey Costs",
        description: "Calculate true fuel consumption (km/L and L/100km), highway trip expenses, and split fuel costs.",
        recommendedSlugs: ["mileage-calculator", "fuel-cost-calculator", "ev-vs-petrol-calculator"],
      },
      {
        title: "Motor Vehicle Taxation & RTO Slabs",
        description: "Calculate one-time Lifetime Motor Vehicle Tax (LVT) across Maharashtra, Karnataka, Delhi, UP, and Tamil Nadu.",
        recommendedSlugs: ["road-tax-calculator"],
      },
    ],
    selectionAdvice: [
      {
        situation: "Measuring true vehicle mileage between full tank fill-ups",
        recommendedTool: "Mileage Calculator",
        slug: "mileage-calculator",
        rationale: "Uses the odometer delta divided by exact dispensed litres to eliminate trip-computer discrepancies.",
      },
      {
        situation: "Deciding between buying an Electric Vehicle (EV) vs a Petrol car",
        recommendedTool: "EV vs Petrol Calculator",
        slug: "ev-vs-petrol-calculator",
        rationale: "Compares running cost per km (₹1.20/km EV vs ₹8.50/km petrol) and payback period on battery premium.",
      },
    ],
    faqs: [
      {
        question: "Why does real-world mileage differ from ARAI / manufacturer mileage figures?",
        answer:
          "ARAI tests vehicles in standardized laboratory conditions without AC, stop-and-go traffic, passenger weight, or real-world tire rolling resistance, resulting in 15%–25% higher nominal ratings than city driving.",
      },
    ],
  },

  utility: {
    overview:
      "Everyday timeline, date arithmetic, and unit conversion calculators designed for calculating exact age milestones, business working days, time differences, and metric-imperial conversions.",
    subgroups: [
      {
        title: "Date & Chronological Calculations",
        description: "Compute exact calendar age, elapsed time durations, and business day differences excluding weekends.",
        recommendedSlugs: ["age-calculator", "date-calculator", "time-duration-calculator", "business-days-calculator"],
      },
      {
        title: "Conversions & Data Utilities",
        description: "Convert units of length, mass, volume, temperature, and generate secure client-side passwords.",
        recommendedSlugs: ["unit-converter", "password-generator", "qr-code-generator", "random-number-generator"],
      },
    ],
    selectionAdvice: [
      {
        situation: "Calculating eligibility cutoff date for government exams and visa applications",
        recommendedTool: "Age Calculator",
        slug: "age-calculator",
        rationale: "Accounts for leap years and month boundary variations down to the exact day and hour.",
      },
      {
        situation: "Computing net delivery working days for contractual project milestones",
        recommendedTool: "Business Days Calculator",
        slug: "business-days-calculator",
        rationale: "Subtracts weekend non-working days from calendar date intervals.",
      },
    ],
    faqs: [
      {
        question: "Are leap years accounted for in date calculations?",
        answer:
          "Yes. All calendar tools use standard astronomical Gregorian leap year rules (years divisible by 4, except century years not divisible by 400).",
      },
    ],
  },

  fun: {
    overview:
      "Lighthearted entertainment and astrological compatibility calculators designed for casual amusement, zodiac compatibility, and relationship score checks.",
    subgroups: [
      {
        title: "Astrology & Entertainment",
        description: "Explore Western zodiac elements, traditional Vedic matching parameters, and lucky numbers.",
        recommendedSlugs: ["zodiac-compatibility-calculator", "kundli-milan-calculator", "love-calculator", "friendship-calculator", "lucky-number-calculator"],
      },
    ],
    selectionAdvice: [
      {
        situation: "Checking astrological compatibility between zodiac signs",
        recommendedTool: "Zodiac Compatibility Calculator",
        slug: "zodiac-compatibility-calculator",
        rationale: "Evaluates elemental harmony (Fire, Earth, Air, Water) and quadruplicity modalities.",
      },
    ],
    faqs: [
      {
        question: "Are entertainment calculator results scientific?",
        answer:
          "Calculators in the Fun category are designed strictly for personal entertainment and amusement purposes.",
      },
    ],
  },

  other: {
    overview:
      "Specialized calculators for bullion valuation (gold/silver hallmarking and making charges), event budgeting, and lifestyle planning.",
    subgroups: [
      {
        title: "Precious Metals & Jewellery Math",
        description: "Calculate 22K vs 24K gold purity, making charges, and 3% GST on jewellery purchases.",
        recommendedSlugs: ["gold-price-calculator", "gold-making-charges-calculator", "gold-gst-calculator", "silver-price-calculator"],
      },
      {
        title: "Event & Net Worth Planning",
        description: "Budget for weddings, parties, travel logistics, and personal balance sheets.",
        recommendedSlugs: ["wedding-budget-calculator", "party-budget-calculator", "travel-cost-calculator", "net-worth-calculator"],
      },
    ],
    selectionAdvice: [
      {
        situation: "Verifying bill breakdown before buying gold jewellery",
        recommendedTool: "Gold Making Charges Calculator",
        slug: "gold-making-charges-calculator",
        rationale: "Separates base bullion value (by purity karat) from jeweller making charges and statutory 3% GST.",
      },
    ],
    faqs: [
      {
        question: "How is 22 Karat gold purity calculated?",
        answer:
          "24K represents 99.9% pure gold, while 22K contains 91.6% pure gold (916 hallmark) alloyed with 8.4% copper or silver for structural durability.",
      },
    ],
  },
};

