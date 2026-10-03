import type { Calculator } from "@/src/types/calculator";

export const homeLoanPrepaymentCalculator: Calculator = {
  slug: "home-loan-prepayment-calculator",
  name: "Home Loan Prepayment Calculator",
  description: "Compare your current home-loan schedule with a lump-sum or recurring monthly prepayment to estimate interest and tenure saved.",
  category: "Finance",
  compareWith: ["emi-calculator", "compound-interest-calculator", "sip-calculator", "lumpsum-calculator"],
  editorialIntro: "Use the outstanding principal—not the original sanctioned amount—and the remaining tenure. The calculator simulates the balance month by month while keeping the regular EMI unchanged.",
  seo: {
    title: "Home Loan Prepayment Calculator India - Interest & Tenure Saved",
    description: "Calculate home-loan interest and tenure saved with a lump-sum or monthly prepayment. Compare the original and faster repayment schedules in rupees.",
    keywords: ["home loan prepayment calculator", "home loan part payment calculator", "interest saved on prepayment", "loan tenure reduction calculator", "extra EMI calculator India", "home loan foreclosure calculator"],
  },
  steps: [
    { step: 1, title: "Enter the Outstanding Balance", description: "Use the principal currently due from your latest loan statement.", icon: "calculator" },
    { step: 2, title: "Add the Remaining Terms", description: "Enter the present annual rate and remaining months or years.", icon: "clock" },
    { step: 3, title: "Choose Extra Payments", description: "Model an immediate lump sum, an extra monthly amount, or both.", icon: "location" },
    { step: 4, title: "Compare the Schedules", description: "Review interest saved, months saved, and the estimated new payoff time.", icon: "result" },
  ],
  formula: {
    title: "Home Loan Prepayment Calculation",
    formula: "Monthly interest = opening balance × annual rate ÷ 12; closing balance = opening balance + interest − EMI − prepayment",
    explanation: "The regular EMI is calculated from the outstanding balance, monthly rate, and remaining term. The tool then runs two reducing-balance schedules: one without extra payments and one after the immediate lump sum with the recurring monthly prepayment. Each month is simulated until the balance reaches zero.",
    example: { input: "₹40 lakh outstanding, 8.5%, 15 years, ₹2 lakh now and ₹5,000 extra monthly", output: "The calculator compares the exact simulated payoff month and total interest with the unchanged original schedule." },
    useCases: ["Comparing a bonus-funded part payment", "Testing one extra amount each month", "Estimating an earlier payoff date", "Comparing prepayment scenarios before contacting the lender"],
  },
  faqs: [
    { question: "Should I enter the original loan amount or current balance?", answer: "Enter the outstanding principal shown on your latest statement. Also use the current interest rate and the tenure remaining today." },
    { question: "Does the calculator reduce EMI or tenure?", answer: "It keeps the regular EMI unchanged and applies extra payments to principal, so the estimated tenure becomes shorter. Ask your lender how it will process a part payment." },
    { question: "Are lender charges included?", answer: "No. The estimate excludes prepayment charges, administrative fees, tax effects, rate changes, payment timing differences, and lender-specific rounding. Check your agreement and obtain a revised schedule from the lender." },
    { question: "Is prepaying always better than investing?", answer: "Not automatically. The decision depends on liquidity, emergency savings, taxes, risk, loan rate, expected after-tax investment return, and personal goals. This tool only estimates the loan-side effect." },
  ],
  seoContent: `<h2>How a Home Loan Prepayment Saves Interest</h2><p>Home-loan interest is calculated on the outstanding balance. An extra payment reduces that balance earlier, so future months accrue interest on a smaller amount. Keeping the EMI unchanged generally converts that saving into a shorter repayment period.</p><h2>Use Current Loan Details</h2><p>The most useful comparison starts with today's outstanding principal, current rate and remaining tenure. These can differ substantially from the original sanction details after several payments or rate resets.</p><h2>Confirm the Result with Your Lender</h2><p>This calculator is an educational estimate. Actual posting dates, daily or monthly interest methods, floating-rate changes, fees and lender instructions can alter the schedule. Confirm applicable terms and request a revised amortisation schedule after making a payment.</p>`,
};
