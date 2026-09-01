import { Calculator } from "@/src/types/calculator";

export const hraCalculator: Calculator = {
  slug: "hra-calculator",

  name: "HRA Calculator",

  description:
    "Calculate House Rent Allowance (HRA) tax exemption under Section 10(13A) of the Income Tax Act. Determine exempt HRA, taxable HRA, and tax savings across metro (50%) and non-metro (40%) cities.",

  category: "Finance",

  isPopular: true,

  editorialIntro:
    "Under Section 10(13A) and Rule 2A of the Income Tax Rules, salaried employees residing in rented accommodations can claim HRA exemption under the Old Tax Regime. The exemption equals the lowest of three statutory amounts: actual HRA received, 50% (metro) or 40% (non-metro) of Basic+DA, or rent paid minus 10% of Basic+DA.",

  benchmarkContext: {
    title: "HRA Exemption Statutory Rules (Section 10(13A))",
    badge: "Income Tax Rule 2A",
    stat: "Lowest of 3 Statutory Conditions",
    description:
      "Metros for HRA 50% limit are strictly defined as Delhi, Mumbai, Kolkata, and Chennai (all other cities qualify for 40%). Landlord's PAN is mandatory on Form 12BB if annual rent paid exceeds ₹1,00,000 (₹8,333/month).",
    source: "Income Tax Department, Government of India",
    lastUpdated: "January 2026",
  },

  seo: {
    title: "HRA Calculator - Calculate House Rent Allowance Exemption Online",

    description:
      "Calculate House Rent Allowance (HRA) exemption, taxable HRA, and income tax savings under Section 10(13A) for metro and non-metro cities. Free and accurate for FY 2025-26.",

    keywords: [
      "hra calculator",
      "house rent allowance calculator",
      "hra exemption calculator",
      "calculate hra exemption",
      "hra tax calculator",
      "section 10 13a calculator",
      "metro vs non metro hra calculator",
      "salary hra exemption calculator",
      "hra deduction calculator",
      "hra calculation formula",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Basic Salary & DA",
      description: "Input your annual Basic Salary plus Dearness Allowance (DA forming part of retirement benefits).",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Actual HRA Received",
      description: "Enter the gross HRA allowance component as stated on your salary slips / CTC structure.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Input Annual Rent Paid",
      description: "Enter the total actual rent paid to your landlord across the 12-month financial year.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "Select City Classification",
      description: "Choose Metro (Delhi, Mumbai, Kolkata, Chennai for 50%) or Non-Metro (all other cities for 40%).",
      icon: "result",
    },
  ],

  formula: {
    title: "Section 10(13A) Exemption Rule",

    formula: "\\text{Exempt HRA} = \\min\\begin{cases} \\text{Actual HRA Received} \\\\ 50\\% \\text{ (Metro) or } 40\\% \\text{ (Non-Metro) of (Basic + DA)} \\\\ \\text{Actual Rent Paid} - 10\\% \\text{ of (Basic + DA)} \\end{cases}",

    explanation:
      "The exempt portion of House Rent Allowance is the minimum of: (1) Actual HRA received from your employer, (2) 50% of Basic Salary for metro cities or 40% for non-metro cities, or (3) Rent paid minus 10% of Basic Salary. Taxable HRA is calculated as Actual HRA minus Exempt HRA.",

    example: {
      input: "Basic Salary: ₹6,00,000 | HRA Received: ₹2,40,000 | Rent Paid: ₹2,16,000 (₹18,000/mo) | City: Bangalore (Non-Metro 40%)",
      output: "Condition 1: ₹2,40,000 | Condition 2 (40%): ₹2,40,000 | Condition 3 (Rent - 10%): ₹2,16,000 - ₹60,000 = ₹1,56,000 → Exempt HRA: ₹1,56,000 | Taxable HRA: ₹84,000",
    },

    useCases: [
      "Salaried Tax Planning (Old vs New Regime Selection)",
      "Form 12BB Proof Submission Verification",
      "Salary Negotiation & CTC Restructuring",
      "Rent Agreement Budgeting for Maximum Tax Efficiency",
    ],
  },

  faqs: [
    {
      question: "Can I claim HRA exemption under the New Tax Regime (Section 115BAC)?",
      answer:
        "No. Under the New Tax Regime, exemptions under Section 10(13A) for House Rent Allowance are completely omitted. If you choose the New Tax Regime, your entire HRA component is included in your taxable salary income. HRA exemption is exclusively available under the Old Tax Regime.",
    },
    {
      question: "Why are only Delhi, Mumbai, Kolkata, and Chennai classified as Metros for 50% HRA?",
      answer:
        "Under Rule 2A of the Income Tax Rules (formulated in 1962), the 50% salary threshold is statutory and legally restricted to the four historical presidency cities (Delhi, Mumbai, Kolkata, Chennai). Major IT hubs like Bangalore, Hyderabad, Pune, and Gurgaon are officially categorized as Non-Metro (40% limit) for income tax purposes, despite their high cost of living.",
    },
    {
      question: "Is it mandatory to provide my landlord's PAN to claim HRA?",
      answer:
        "Yes, as per CBDT Circular guidelines, if your annual rent payments exceed ₹1,00,000 (which equals ₹8,333 per month), you must mandatorily provide your landlord's PAN on Form 12BB to your employer. If the landlord does not possess a PAN, a signed declaration under Form 60 must be submitted.",
    },
    {
      question: "Can I pay rent to my parents and claim HRA exemption?",
      answer:
        "Yes, paying rent to your parents is legally permissible under Section 10(13A), provided: (1) your parents are the legal owners of the residential property, (2) you execute a genuine registered or notarized rent agreement, (3) you transfer rent via bank transfer, and (4) your parents declare this rental income in their personal Income Tax Returns (ITR). You cannot pay rent to your spouse.",
    },
    {
      question: "Can I claim both Home Loan tax benefits (Section 24 & 80C) and HRA simultaneously?",
      answer:
        "Yes, you can claim both HRA exemption and Home Loan deductions if: (1) your own home is in a different city due to your employment posting, or (2) your own home is under construction, or (3) your owned home is rented out to a tenant while you live in a rented house closer to your workplace. You must maintain genuine proof of residence.",
    },
  ],

  seoContent: `
<h2>How Section 10(13A) HRA Exemption Operates in Practice</h2>
<p>
  House Rent Allowance (HRA) is one of the most substantial tax-saving allowances available to salaried employees in India. However, unlike flat deductions, HRA is not completely tax-free by default; exemption is determined using a statutory three-part mathematical test under <strong>Rule 2A of Income Tax Rules</strong>.
</p>

---

<h2>The 3-Condition Exemption Rule Matrix</h2>
<table>
  <thead>
    <tr>
      <th>Condition</th>
      <th>Legal Basis</th>
      <th>Metro Cities (Delhi, Mumbai, Kolkata, Chennai)</th>
      <th>Non-Metro Cities (Bangalore, Hyderabad, Pune, etc.)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Condition 1</strong></td>
      <td>Actual Allowance</td>
      <td>Actual HRA received from employer</td>
      <td>Actual HRA received from employer</td>
    </tr>
    <tr>
      <td><strong>Condition 2</strong></td>
      <td>Salary Percentage</td>
      <td><strong>50%</strong> of (Basic Salary + DA)</td>
      <td><strong>40%</strong> of (Basic Salary + DA)</td>
    </tr>
    <tr>
      <td><strong>Condition 3</strong></td>
      <td>Rent Outflow Test</td>
      <td>Actual Rent Paid − <strong>10%</strong> of (Basic Salary + DA)</td>
      <td>Actual Rent Paid − <strong>10%</strong> of (Basic Salary + DA)</td>
    </tr>
  </tbody>
</table>

<p>
  <strong>Final Rule:</strong> The lowest numeric value among the three conditions above is completely exempt from income tax. Any remaining balance of your received HRA is added to your gross taxable income.
</p>

---

<h2>Documents Required for Employer HRA Proof Submission</h2>
<ol>
  <li><strong>Form 12BB:</strong> Submitted to your company's payroll department with rent details.</li>
  <li><strong>Rent Agreement:</strong> Valid agreement specifying monthly rent, property address, and landlord details.</li>
  <li><strong>Rent Receipts:</strong> Signed rent receipts for all 12 months with revenue stamps for cash transactions above ₹5,000.</li>
  <li><strong>Landlord's PAN:</strong> Mandatory if annual rent exceeds ₹1,00,000 per year.</li>
</ol>
`,
};