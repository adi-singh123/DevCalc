import { Calculator } from "@/src/types/calculator";

export const stampDutyCalculator: Calculator = {
  slug: "stamp-duty-calculator",

  name: "Stamp Duty Calculator",

  description:
    "Calculate stamp duty and registration charges for residential and commercial property purchases across Indian states. Compare state-wise rates, metro cess, and women buyer concessions instantly.",

  category: "Construction",

  isPopular: true,

  seo: {
    title: "Stamp Duty Calculator India — Property Registration Charges by State | DevCalc",

    description:
      "Calculate property stamp duty and registration charges across Indian states. Check 2026 Ready Reckoner / Circle Rates, women buyer concessions, and metro cess.",

    keywords: [
      "stamp duty calculator",
      "property registration charges calculator",
      "state wise stamp duty rates",
      "circle rate stamp duty calculator",
      "women concession stamp duty",
      "metro cess property registration",
      "stamp duty calculator india",
      "ready reckoner stamp duty calculator",
      "house registration fee calculator",
    ],
  },

  compareWith: ["flat-buy-calculator", "house-construction-cost-calculator"],

  steps: [
    {
      step: 1,
      title: "Select State & Location",
      description:
        "Choose your state and select whether the property is in an urban municipal area or rural Gram Panchayat jurisdiction.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Agreement Value & Circle Rate",
      description:
        "Input the negotiated purchase price and local circle rate (Ready Reckoner value). The calculation automatically uses the higher figure.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Specify Ownership Gender",
      description:
        "Indicate whether the property is registered under a male, female, or joint ownership to apply state-specific stamp duty concessions.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View Stamp Duty & Registration Total",
      description:
        "Instantly see the exact statutory fee breakdown: base stamp duty, applicable cess or surcharges, and registration fee.",
      icon: "result",
    },
  ],

  formula: {
    title: "Stamp Duty Calculation Formula",

    formula:
      "Taxable Base = Max(Agreement Value, Circle Rate Value)\nStamp Duty = (Taxable Base × State Rate %) + Surcharge / Cess - Gender Rebate\nRegistration Fee = Taxable Base × State Registration Rate % (Subject to State Cap)\nTotal Legal Addition = Stamp Duty + Registration Fee",

    explanation:
      "Stamp duty is a legal tax levied by state governments in India under the Indian Stamp Act, 1899 and respective State Stamp Acts on the conveyance of immovable property. Registration charges are statutory fees paid to the Sub-Registrar of Assurances for recording the transaction in public land records. Stamp duty is calculated on the higher of the actual transaction value or the government circle rate (Ready Reckoner / Guideline value).",

    example: {
      input: "Property Value: ₹80,00,000 (Maharashtra Urban, Male Buyer), Rate: 5% Base + 1% Metro Cess + 1% Registration (capped at ₹30,000)",
      output: "Stamp Duty = ₹4,80,000 (6%) | Registration = ₹30,000 | Total Statutory Cost = ₹5,10,000",
    },

    useCases: [
      "Budgeting total cash outflow for new or resale flat purchases",
      "Comparing stamp duty across Maharashtra, Karnataka, Delhi, UP, and Tamil Nadu",
      "Evaluating women co-ownership concessions to minimize registration expenses",
      "Calculating circle rate valuation vs actual sale deed values",
      "Estimating out-of-pocket legal expenses before booking a property",
    ],
  },

  faqs: [
    {
      question: "How is stamp duty calculated on property in India?",
      answer:
        "Stamp duty is calculated as a percentage of the property's taxable market value. The tax authority uses the higher figure between the actual agreement sale price and the state government's circle rate (also called Ready Reckoner or Guideline Value). Base rates typically range from 4% to 7% across Indian states, with registration fees adding another 1% (or up to 4% in states like Tamil Nadu).",
    },
    {
      question: "What is the difference between Agreement Value and Circle Rate?",
      answer:
        "The Agreement Value is the actual transaction price negotiated between the buyer and seller. The Circle Rate (Ready Reckoner / Guideline Value) is the minimum benchmark rate set by the state government for a specific locality. By law under Section 50C of the Income Tax Act and State Stamp Acts, stamp duty cannot be paid on a value below the official circle rate.",
    },
    {
      question: "Which Indian states offer stamp duty discounts for female home buyers?",
      answer:
        "States like Delhi (2% concession: 4% vs 6%), Maharashtra (1% concession: 5% vs 6% in urban areas), and Uttar Pradesh (₹10,000 flat rebate) provide stamp duty concessions for properties registered solely in a woman's name. States like Karnataka and Tamil Nadu currently charge uniform rates without gender-based concessions.",
    },
    {
      question: "Can stamp duty and registration fees be included in my Home Loan amount?",
      answer:
        "As per Reserve Bank of India (RBI) guidelines, commercial banks and housing finance companies (HFCs) cannot include statutory stamp duty and registration charges within the sanctioned loan-to-value (LTV) ratio for properties costing above ₹30 Lakhs. Buyers must arrange these statutory costs from their own personal savings/cash funds.",
    },
  ],
};
