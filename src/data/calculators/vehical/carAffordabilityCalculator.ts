import type { Calculator } from "@/src/types/calculator";

export const carAffordabilityCalculator: Calculator = {
  slug: "car-affordability-calculator",
  name: "Car Affordability Calculator",
  description: "Estimate an affordable on-road car budget from your take-home income, existing EMIs, down payment, interest rate, tenure, and monthly running cost.",
  category: "Vehicle",
  isPopular: true,
  compareWith: ["emi-calculator", "fuel-cost-calculator", "road-tax-calculator", "ev-vs-petrol-cost-calculator"],
  editorialIntro: "A car's sticker price is only one part of affordability. This calculator works backward from a monthly EMI limit and separately shows fuel, insurance, servicing, and parking as a running-cost allowance, helping you compare a realistic on-road budget before visiting a dealer.",
  benchmarkContext: {
    title: "Income-based car budget planning",
    badge: "Editable assumptions",
    stat: "EMI capacity + down payment = estimated on-road budget",
    description: "The EMI share is a personal planning limit, not a lender rule. Change every assumption to match your income, debts, credit profile, and ownership costs.",
    source: "DevCalc planning model",
    lastUpdated: "October 2026",
  },
  seo: {
    title: "Car Affordability Calculator India: How Much Car Can I Afford?",
    description: "Calculate an affordable car price from salary, existing EMIs, down payment, loan rate, tenure, and running costs. Free car budget calculator for India.",
    keywords: ["car affordability calculator", "how much car can i afford india", "car budget calculator", "car affordability calculator by salary", "affordable car price calculator", "car emi affordability calculator"],
  },
  steps: [
    { step: 1, title: "Enter monthly income", description: "Use your regular take-home income after deductions.", icon: "calculator" },
    { step: 2, title: "Add debts and down payment", description: "Include current EMIs and cash available without draining emergency savings.", icon: "calculator" },
    { step: 3, title: "Set the loan assumptions", description: "Enter the expected interest rate, tenure, and your preferred EMI share.", icon: "calculator" },
    { step: 4, title: "Review the complete budget", description: "Compare the estimated on-road price, EMI, interest, and monthly ownership outflow.", icon: "result" },
  ],
  formula: {
    title: "Car affordability formula",
    formula: "Available car EMI = (Take-home income x EMI limit %) - Existing EMIs; Loan = EMI x ((1+r)^n - 1) / (r x (1+r)^n)",
    explanation: "The calculator first reserves only your chosen share of income for all EMIs. It then converts the remaining car EMI into an estimated loan principal using the standard reducing-balance EMI formula and adds your down payment.",
    example: { input: "Income ₹1,00,000; EMI limit 20%; no existing EMI; ₹3,00,000 down payment; 9% for 5 years", output: "Estimated car EMI ₹20,000 and on-road budget about ₹12.6 lakh" },
    useCases: ["First-car budgeting", "Salary-based car planning", "New versus used car comparison", "Loan tenure comparison"],
  },
  faqs: [
    { question: "How much of my salary should go toward a car EMI?", answer: "There is no universal percentage suitable for everyone. Use a conservative limit that still leaves room for housing, food, insurance, savings, emergencies, and other debts. The percentage in this calculator is editable and is not a lender eligibility rule." },
    { question: "Does the result include fuel and maintenance?", answer: "The estimated purchase budget is based on loan capacity plus down payment. Fuel, charging, servicing, insurance, parking, and tolls are represented separately by the monthly running-cost input so you can see the broader cash-flow impact." },
    { question: "Is the result an ex-showroom or on-road price?", answer: "Treat the result as your maximum on-road planning budget. Registration, road tax, insurance, accessories, and dealer charges vary, so obtain a written on-road quotation before deciding." },
    { question: "Will a bank approve the calculated loan?", answer: "Not necessarily. Approval and pricing depend on the lender, credit score, income documentation, employment, existing obligations, vehicle, and policy at the time of application." },
    { question: "Should I use a longer tenure to afford a more expensive car?", answer: "A longer tenure can reduce the EMI but normally increases total interest and keeps you in debt longer. Compare the total interest shown and avoid choosing a price that leaves too little monthly flexibility." },
    { question: "How should I choose the down payment?", answer: "Use money genuinely available after preserving an emergency fund and near-term savings. A larger down payment reduces the loan and interest, but using all available cash can create financial risk." },
  ],
  seoContent: `<h2>How much car can you comfortably afford?</h2><p>The best car budget is not simply the largest loan a lender offers. Start with take-home pay, subtract current EMIs, choose a monthly debt limit you can sustain, and then allow for the recurring cost of owning the vehicle. This calculator keeps those assumptions visible so the result can be adjusted to your situation.</p><h2>Car price versus total ownership cost</h2><p>An on-road quotation can include ex-showroom price, registration, road tax, insurance, and dealer additions. After purchase, fuel or charging, servicing, tyres, insurance renewals, parking, tolls, and depreciation continue. Enter a realistic monthly running-cost allowance instead of judging affordability from EMI alone.</p><h2>Ways to improve affordability</h2><ul><li>Compare several loan rates using the same tenure.</li><li>Increase the down payment only if emergency savings remain intact.</li><li>Consider a lower variant or a reliable used vehicle.</li><li>Keep room for insurance renewal and unexpected repairs.</li><li>Compare total interest, not only the advertised EMI.</li></ul><h2>Important limitation</h2><p>This is an educational planning estimate, not financial advice, a credit decision, or a dealer quote. Interest rates and charges change, while individual expenses differ. Verify the final loan schedule and on-road price before purchasing.</p>`,
};
