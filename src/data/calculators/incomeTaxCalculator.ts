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
      "detailed income tax calculator",
      "calculate tax on taxable income",
      "income and tax calculator india",
      "online calculator for income tax",
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
question: "Which is better: the old tax regime or the new tax regime?",
answer:
"The best tax regime depends on your income, deductions, and financial situation. The old tax regime allows taxpayers to claim deductions and exemptions such as Section 80C investments, HRA, home loan interest, NPS contributions, and health insurance premiums. The new tax regime offers lower tax rates but removes most deductions and exemptions. Individuals with significant tax-saving investments often benefit from the old regime, while those with fewer deductions may find the new regime more advantageous. Comparing tax liability under both systems using an income tax calculator helps determine the most beneficial option."
},

{
question: "How can I legally reduce my income tax in India?",
answer:
"Taxpayers can reduce their tax liability through legal tax-saving provisions available under Indian tax laws. Common methods include investing under Section 80C through ELSS funds, PPF, EPF, life insurance, and tax-saving fixed deposits. Additional deductions may be available for NPS contributions under Section 80CCD(1B), health insurance premiums under Section 80D, and home loan interest under Section 24. Proper financial planning throughout the year helps maximize available deductions and minimize tax liability while remaining fully compliant with tax regulations."
},

{
question: "What is the Section 80C deduction limit?",
answer:
"Section 80C is one of the most popular tax-saving provisions in India. Eligible taxpayers can claim deductions of up to ₹1.5 lakh per financial year through approved investments and expenses. Common options include Employee Provident Fund (EPF), Public Provident Fund (PPF), Equity Linked Savings Schemes (ELSS), life insurance premiums, Sukanya Samriddhi Yojana contributions, tax-saving fixed deposits, and principal repayment of home loans. Utilizing the full Section 80C limit can significantly reduce taxable income under the old tax regime."
},

{
question: "Do I have to pay tax on fixed deposit interest?",
answer:
"Yes. Interest earned from bank fixed deposits is generally taxable according to the taxpayer's income tax slab rate. Banks may also deduct TDS when interest income exceeds prescribed limits. Even if TDS is not deducted, taxpayers are required to report FD interest while filing their income tax returns. Senior citizens may benefit from certain exemptions and deductions related to interest income under applicable tax provisions."
},

{
question: "Is salary income fully taxable?",
answer:
"Not necessarily. While salary income is taxable, several components may qualify for deductions or exemptions under the old tax regime. Examples include House Rent Allowance (HRA), Leave Travel Allowance (LTA), standard deduction, employer contributions to retirement schemes, and various tax-saving investments. The final taxable income depends on gross salary, deductions claimed, exemptions available, and the chosen tax regime."
},

{
question: "What happens if I file my income tax return late?",
answer:
"Filing an income tax return after the due date may result in penalties, interest charges, delayed refunds, and restrictions on carrying forward certain losses. The Income Tax Department may also levy late filing fees under applicable provisions. Filing returns on time helps avoid unnecessary penalties and ensures smooth processing of refunds and tax records."
},

{
question: "Can I claim both HRA and home loan benefits?",
answer:
"In many situations, taxpayers can claim both HRA and home loan benefits simultaneously, provided they satisfy the relevant conditions. For example, if an individual lives in a rented property due to work requirements while owning a house in another city, both benefits may be available. Eligibility depends on specific circumstances and applicable tax rules. Consulting a tax professional is advisable for complex cases."
},

{
question: "Why should I use an income tax calculator before filing returns?",
answer:
"An income tax calculator helps estimate tax liability quickly and accurately before filing returns. It allows taxpayers to compare old and new tax regimes, evaluate deductions, estimate refund amounts, and plan tax-saving investments. Using a calculator before the end of the financial year can also help identify opportunities to reduce tax liability and avoid last-minute financial decisions."
}
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