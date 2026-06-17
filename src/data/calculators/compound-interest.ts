import { Calculator } from "@/src/types/calculator";

export const compoundInterestCalculator: Calculator = {
  slug: "compound-interest-calculator",

  name: "Compound Interest Calculator",

  description:
    "Calculate compound interest, maturity amount, investment growth, and total interest earned instantly using annual, monthly, quarterly, or daily compounding.",

  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "Compound Interest Calculator - Calculate CI Online",

    description:
      "Free Compound Interest Calculator to calculate maturity amount, future value, investment growth, and total interest earned using compound interest formulas.",

    keywords: [
      "compound interest calculator",
      "ci calculator",
      "compound interest formula",
      "calculate compound interest",
      "investment calculator",
      "future value calculator",
      "compound return calculator",
      "interest calculator",
      "compound growth calculator",
      "compound interest online",
      "monthly compound interest calculator",
      "annual compound interest calculator",
      "quarterly compound interest calculator",
      "compound interest rate calculator",
      "investment growth calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Principal Amount",
      description:
        "Enter the initial amount invested or deposited.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Interest Rate",
      description:
        "Provide the annual interest rate percentage.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Enter Time Period",
      description:
        "Enter the investment duration in years.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View Results",
      description:
        "Get maturity amount, compound interest, and investment growth instantly.",
      icon: "result",
    },
  ],

  formula: {
    title: "Compound Interest Formula",

    formula:
      "A = P(1 + r/n)^(nt)",

    explanation:
      "Compound interest is calculated on both the principal amount and the accumulated interest from previous periods. It allows investments to grow faster compared to simple interest.",

    example: {
      input:
        "Principal: ₹10,000, Rate: 10%, Time: 2 Years",

      output:
        "A = 10000(1 + 0.10/1)^(1×2) = ₹12,100",
    },

    useCases: [
      "Investment Planning",
      "Fixed Deposits",
      "Mutual Funds",
      "Savings Accounts",
      "Retirement Planning",
      "Wealth Growth Analysis",
    ],
  },
  faqs: [
    {
      question: "What is compound interest?",
      answer:
        "Compound interest is interest earned on both the principal amount and previously accumulated interest.",
    },

    {
      question:
        "What is the formula for compound interest?",
      answer:
        "A = P(1 + r/n)^(nt), where P is principal, r is annual interest rate, n is compounding frequency, and t is time in years.",
    },

    {
      question:
        "Why is compound interest important?",
      answer:
        "Compound interest helps investments grow faster because earnings are continuously reinvested.",
    },

    {
      question:
        "What is the difference between simple and compound interest?",
      answer:
        "Simple interest is calculated only on principal, while compound interest is calculated on principal plus accumulated interest.",
    },

    {
      question:
        "Can I use this calculator for fixed deposits and investments?",
      answer:
        "Yes. This calculator can be used for fixed deposits, savings accounts, investments, and retirement planning.",
    },
  ],

  seoContent: `
<h2>What is Compound Interest?</h2>

<p>
Compound interest is the interest earned not only on your original investment but also on previously earned interest. This creates a snowball effect that helps your money grow faster over time.
</p>

<h2>Simple Interest vs Compound Interest</h2>

<table>
  <tr>
    <th>Feature</th>
    <th>Simple Interest</th>
    <th>Compound Interest</th>
  </tr>
  <tr>
    <td>Interest Calculation</td>
    <td>Principal Only</td>
    <td>Principal + Earned Interest</td>
  </tr>
  <tr>
    <td>Growth Rate</td>
    <td>Linear</td>
    <td>Exponential</td>
  </tr>
  <tr>
    <td>Long-Term Wealth</td>
    <td>Lower</td>
    <td>Higher</td>
  </tr>
</table>

<h2>The Power of Compounding</h2>

<p>
Albert Einstein is often credited with calling compound interest the eighth wonder of the world. The longer your money remains invested, the more powerful compounding becomes.
</p>

<h2>Investment Growth Example</h2>

<table>
  <tr>
    <th>Investment</th>
    <th>Rate</th>
    <th>Time</th>
    <th>Approx. Value</th>
  </tr>
  <tr>
    <td>₹1,00,000</td>
    <td>10%</td>
    <td>10 Years</td>
    <td>₹2,59,374</td>
  </tr>
  <tr>
    <td>₹1,00,000</td>
    <td>10%</td>
    <td>20 Years</td>
    <td>₹6,72,750</td>
  </tr>
  <tr>
    <td>₹1,00,000</td>
    <td>10%</td>
    <td>30 Years</td>
    <td>₹17,44,940</td>
  </tr>
</table>

<h2>Factors Affecting Compound Interest</h2>

<ul>
  <li><strong>Principal Amount:</strong> Larger investments generate larger returns.</li>
  <li><strong>Interest Rate:</strong> Higher rates accelerate growth.</li>
  <li><strong>Time Period:</strong> More years means greater compounding.</li>
  <li><strong>Compounding Frequency:</strong> Monthly compounding generally earns more than annual compounding.</li>
</ul>

<h2>Compounding Frequency Comparison</h2>

<table>
  <tr>
    <th>Frequency</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Annually</td>
    <td>Interest added once per year.</td>
  </tr>
  <tr>
    <td>Semi-Annually</td>
    <td>Interest added twice per year.</td>
  </tr>
  <tr>
    <td>Quarterly</td>
    <td>Interest added four times per year.</td>
  </tr>
  <tr>
    <td>Monthly</td>
    <td>Interest added twelve times per year.</td>
  </tr>
</table>

<h2>How to Maximize Compound Growth</h2>

<ul>
  <li>Start investing as early as possible.</li>
  <li>Invest consistently every month.</li>
  <li>Reinvest returns instead of withdrawing them.</li>
  <li>Stay invested during market fluctuations.</li>
  <li>Increase investments when income rises.</li>
</ul>

<h2>Common Compounding Mistakes</h2>

<ul>
  <li>Starting investments too late.</li>
  <li>Withdrawing money frequently.</li>
  <li>Ignoring inflation.</li>
  <li>Expecting quick results.</li>
  <li>Stopping investments during market downturns.</li>
</ul>

<h2>Rule of 72</h2>

<p>
The Rule of 72 estimates how long it takes for an investment to double. Simply divide 72 by the annual interest rate. For example, at 8% returns, money doubles in approximately 9 years.
</p>

<h2>Pro Tip</h2>

<p>
The biggest advantage in investing is time. Starting a ₹5,000 monthly investment at age 25 instead of age 35 can potentially result in several times more wealth by retirement due to compound growth.
</p>
`,
};