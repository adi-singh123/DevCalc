import { Calculator } from "@/src/types/calculator";

export const incomeTaxCalculator: Calculator = {
  slug: "income-tax-calculator",

  name: "Income Tax Calculator",

  description:
    "Calculate income tax under the latest Indian tax regime and estimate your annual tax liability instantly.",

  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "Income Tax Calculator India - Calculate Tax Online",

    description:
      "Calculate your income tax liability instantly using our free Income Tax Calculator for India.",

    keywords: [
      "income tax calculator",
      "tax calculator india",
      "income tax calculator india",
      "salary tax calculator",
      "tax estimation calculator",
      "annual tax calculator",
      "income tax calculator 2026",
      "income tax slab calculator",
      "tax planning calculator",
      "tax liability calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Annual Income",
      description:
        "Enter your total annual income.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Choose Tax Regime",
      description:
        "Select old or new tax regime.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Calculate Tax",
      description:
        "View estimated tax liability.",
      icon: "result",
    },
  ],

  formula: {
    title: "Income Tax Calculation",

    formula:
      "Tax = Income Tax Slab Rate × Taxable Income",

    explanation:
      "Income tax is calculated according to the applicable tax slabs under the selected tax regime.",

    example: {
      input:
        "Annual Income: ₹12,00,000",

      output:
        "Estimated tax based on selected tax regime.",
    },

    useCases: [
      "Tax Planning",
      "Salary Planning",
      "Financial Planning",
      "Income Tax Estimation",
    ],
  },

  faqs: [
    {
      question:
        "What is an Income Tax Calculator?",
      answer:
        "An Income Tax Calculator helps estimate tax liability based on annual income and tax regime.",
    },
    {
      question:
        "Does it support the new tax regime?",
      answer:
        "Yes, the calculator can estimate tax under the latest Indian tax regime.",
    },
    {
      question:
        "Can I use it for salary planning?",
      answer:
        "Yes, it helps estimate tax before financial planning decisions.",
    },
  ],

  seoContent: `
<h2>Understanding Income Tax in India</h2>

<p>
Income tax is a direct tax levied by the Government of India on an individual's annual income. The amount of tax payable depends on your income, tax regime selection, deductions, and exemptions.
</p>

<h2>Old Tax Regime vs New Tax Regime</h2>

<table>
  <tr>
    <th>Feature</th>
    <th>Old Regime</th>
    <th>New Regime</th>
  </tr>
  <tr>
    <td>Deductions</td>
    <td>Available</td>
    <td>Limited</td>
  </tr>
  <tr>
    <td>Tax Rates</td>
    <td>Higher</td>
    <td>Lower</td>
  </tr>
  <tr>
    <td>Best For</td>
    <td>High Deductions</td>
    <td>Simple Filing</td>
  </tr>
</table>

<h2>Popular Tax Saving Options</h2>

<ul>
  <li><strong>Section 80C:</strong> ELSS, PPF, EPF, Life Insurance.</li>
  <li><strong>Section 80D:</strong> Health insurance premiums.</li>
  <li><strong>NPS:</strong> Additional deduction under Section 80CCD(1B).</li>
  <li><strong>Home Loan:</strong> Interest and principal benefits.</li>
</ul>

<h2>Common Tax Saving Investments</h2>

<table>
  <tr>
    <th>Investment</th>
    <th>Lock-in Period</th>
    <th>Tax Benefit</th>
  </tr>
  <tr>
    <td>PPF</td>
    <td>15 Years</td>
    <td>80C</td>
  </tr>
  <tr>
    <td>ELSS</td>
    <td>3 Years</td>
    <td>80C</td>
  </tr>
  <tr>
    <td>Tax Saver FD</td>
    <td>5 Years</td>
    <td>80C</td>
  </tr>
  <tr>
    <td>NPS</td>
    <td>Till Retirement</td>
    <td>80CCD</td>
  </tr>
</table>

<h2>Tax Planning Tips</h2>

<ul>
  <li><strong>Start Early:</strong> Don't wait until March.</li>
  <li><strong>Compare Regimes:</strong> Calculate tax under both regimes.</li>
  <li><strong>Maintain Records:</strong> Keep all investment proofs.</li>
  <li><strong>Use Available Deductions:</strong> Maximize eligible benefits.</li>
</ul>

<h2>Common Tax Filing Mistakes</h2>

<ul>
  <li>Not reporting all income sources.</li>
  <li>Claiming incorrect deductions.</li>
  <li>Missing filing deadlines.</li>
  <li>Choosing the wrong tax regime.</li>
</ul>

<h2>Who Should Use an Income Tax Calculator?</h2>

<p>
Income tax calculators are useful for salaried employees, freelancers, business owners, pensioners, and investors who want to estimate their tax liability before filing returns.
</p>

<h2>Pro Tip</h2>

<p>
Before filing your return, calculate taxes under both the old and new tax regimes. The option with the lower tax liability may help you save thousands of rupees every year.
</p>
`,
};