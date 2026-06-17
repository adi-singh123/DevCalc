import { Calculator } from "@/src/types/calculator";

export const fdCalculator: Calculator = {
  slug: "fd-calculator",

  name: "FD Calculator",

  description:
    "Calculate Fixed Deposit maturity amount, interest earned, and total returns instantly.",

  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "FD Calculator - Calculate Fixed Deposit Returns Online",

    description:
      "Use our free FD Calculator to calculate maturity amount, interest earned, and fixed deposit returns instantly.",

    keywords: [
      "fd calculator",
      "fixed deposit calculator",
      "fd interest calculator",
      "bank fd calculator",
      "fd maturity calculator",
      "fixed deposit returns calculator",
      "online fd calculator",
      "fd calculator india",
      "fd return calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Deposit Amount",
      description:
        "Enter the amount you want to invest.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Interest Rate",
      description:
        "Enter the annual interest rate.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Enter Investment Period",
      description:
        "Specify the FD tenure in years.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View FD Returns",
      description:
        "See maturity amount and interest earned.",
      icon: "result",
    },
  ],

  formula: {
    title: "FD Formula",

    formula:
      "A = P × (1 + r/n)^(n×t)",

    explanation:
      "Fixed Deposit returns are calculated using compound interest based on deposit amount, interest rate, tenure, and compounding frequency.",

    example: {
      input:
        "₹1,00,000 invested at 7% for 5 years",

      output:
        "Maturity Amount ≈ ₹1,40,255",
    },

    useCases: [
      "Fixed Deposit Planning",
      "Retirement Savings",
      "Safe Investments",
      "Interest Calculation",
    ],
  },

  faqs: [
    {
      question:
        "What is an FD Calculator?",
      answer:
        "An FD Calculator helps estimate maturity value and interest earned on a fixed deposit.",
    },
    {
      question:
        "How is FD interest calculated?",
      answer:
        "FD interest is usually calculated using compound interest.",
    },
    {
      question:
        "What affects FD returns?",
      answer:
        "Deposit amount, interest rate, tenure, and compounding frequency affect returns.",
    },
    {
      question:
        "Is FD safe?",
      answer:
        "FDs are generally considered one of the safest investment options.",
    },
  ],


  seoContent: `
<h2>What is a Fixed Deposit (FD)?</h2>

<p>
A Fixed Deposit (FD) is a popular investment option offered by banks and financial institutions where you deposit a lump sum amount for a fixed tenure and earn guaranteed interest returns.
</p>

<h2>Benefits of Fixed Deposits</h2>

<ul>
  <li><strong>Guaranteed Returns:</strong> Returns are fixed and predictable.</li>
  <li><strong>Low Risk:</strong> Suitable for conservative investors.</li>
  <li><strong>Flexible Tenure:</strong> Choose from a few months to several years.</li>
  <li><strong>Easy Investment:</strong> Available through banks and NBFCs.</li>
</ul>

<h2>FD Interest Rate Comparison</h2>

<table>
  <tr>
    <th>FD Type</th>
    <th>Typical Interest Rate</th>
  </tr>
  <tr>
    <td>Regular FD</td>
    <td>6% - 8%</td>
  </tr>
  <tr>
    <td>Senior Citizen FD</td>
    <td>6.5% - 8.5%</td>
  </tr>
  <tr>
    <td>Tax Saving FD</td>
    <td>6% - 8%</td>
  </tr>
</table>

<h2>FD vs SIP Comparison</h2>

<table>
  <tr>
    <th>Feature</th>
    <th>Fixed Deposit</th>
    <th>SIP</th>
  </tr>
  <tr>
    <td>Risk</td>
    <td>Low</td>
    <td>Moderate to High</td>
  </tr>
  <tr>
    <td>Returns</td>
    <td>Fixed</td>
    <td>Market Linked</td>
  </tr>
  <tr>
    <td>Capital Protection</td>
    <td>Yes</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Wealth Creation</td>
    <td>Limited</td>
    <td>Higher Potential</td>
  </tr>
</table>

<h2>How FD Interest is Calculated</h2>

<p>
FD interest may be compounded monthly, quarterly, half-yearly, or annually. More frequent compounding generally results in higher maturity amounts.
</p>

<h2>Who Should Invest in Fixed Deposits?</h2>

<ul>
  <li>Retired individuals seeking stable income.</li>
  <li>Investors with low risk tolerance.</li>
  <li>People saving for short-term goals.</li>
  <li>Individuals building an emergency fund.</li>
</ul>

<h2>Taxation on Fixed Deposits</h2>

<table>
  <tr>
    <th>Income Type</th>
    <th>Tax Treatment</th>
  </tr>
  <tr>
    <td>FD Interest</td>
    <td>Taxable as per income tax slab</td>
  </tr>
  <tr>
    <td>Tax Saving FD</td>
    <td>Eligible under Section 80C</td>
  </tr>
</table>

<h2>Common FD Investment Mistakes</h2>

<ul>
  <li>Ignoring inflation impact.</li>
  <li>Not comparing interest rates across banks.</li>
  <li>Breaking FDs prematurely.</li>
  <li>Investing all savings in a single FD.</li>
</ul>

<h2>FD Laddering Strategy</h2>

<p>
FD laddering involves dividing your investment into multiple fixed deposits with different maturity dates. This improves liquidity while maintaining stable returns.
</p>

<h2>Pro Tip</h2>

<p>
Before investing in a Fixed Deposit, compare the post-tax return with inflation. Sometimes a slightly higher-risk investment can provide significantly better long-term wealth creation.
</p>
`,
};