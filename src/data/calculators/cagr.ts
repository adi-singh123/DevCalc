import { Calculator } from "@/src/types/calculator";

export const cagrCalculator: Calculator = {
  slug: "cagr-calculator",

  name: "CAGR Calculator",

  description:
    "Calculate Compound Annual Growth Rate (CAGR) to measure the average annual growth of an investment over a specified period.",

  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "CAGR Calculator - Calculate Compound Annual Growth Rate Online",

    description:
      "Free online CAGR Calculator. Calculate compound annual growth rate, investment growth, annual returns, profit amount, and absolute returns instantly.",

    keywords: [
      "cagr calculator",
      "compound annual growth rate calculator",
      "investment return calculator",
      "cagr calculator online",
      "annual growth rate calculator",
      "stock return calculator",
      "mutual fund cagr calculator",
      "cagr formula",
      "investment growth calculator",
      "financial calculator",
      "cagr calculation formula",
      "online cagr calculator",
      "compound annual growth rate calculator",
    ],
  },

  compareWith: [
  "sip-calculator",
  "fd-calculator",
  "compound-interest-calculator",
],

  steps: [
    {
      step: 1,
      title: "Enter Beginning Value",
      description:
        "Provide the initial investment amount.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Ending Value",
      description:
        "Enter the final investment value.",
      icon: "result",
    },
    {
      step: 3,
      title: "Enter Investment Period",
      description:
        "Specify the number of years the investment was held.",
      icon: "calendar",
    },
    {
      step: 4,
      title: "View CAGR Results",
      description:
        "See CAGR, absolute return, and profit instantly.",
      icon: "clock",
    },
  ],

  formula: {
    title: "CAGR Formula",

    formula:
      "CAGR = ((Ending Value ÷ Beginning Value)^(1 ÷ Years) − 1) × 100",

    explanation:
      "Compound Annual Growth Rate (CAGR) represents the average annual growth rate of an investment over a specific period, assuming profits are reinvested each year.",

    example: {
      input:
        "Beginning Value: ₹100,000, Ending Value: ₹200,000, Years: 5",

      output:
        "CAGR = 14.87%, Profit = ₹100,000, Absolute Return = 100%",
    },

    useCases: [
      "Stock investment analysis",
      "Mutual fund performance evaluation",
      "Business revenue growth analysis",
      "Portfolio performance tracking",
      "Financial planning",
    ],
  },

  faqs: [
    {
      question: "What is CAGR?",
      answer:
        "CAGR (Compound Annual Growth Rate) measures the average annual growth rate of an investment over a period of time.",
    },
    {
      question: "Why is CAGR important?",
      answer:
        "CAGR helps compare investment performance across different assets by standardizing growth into an annual rate.",
    },
    {
      question: "How is CAGR different from absolute return?",
      answer:
        "Absolute return measures total growth, while CAGR shows the annualized growth rate over multiple years.",
    },
    {
      question: "Can CAGR be negative?",
      answer:
        "Yes. If the ending value is lower than the beginning value, CAGR will be negative.",
    },
    {
      question: "Is CAGR suitable for mutual funds and stocks?",
      answer:
        "Yes. CAGR is widely used to evaluate long-term investment performance in stocks, mutual funds, ETFs, and businesses.",
    },
  ],

  seoContent: `
<h2>What is CAGR?</h2>

<p>
Compound Annual Growth Rate (CAGR) measures the average annual growth rate of an investment over a specific period. It smooths out yearly fluctuations and provides a single growth rate that represents the investment's performance.
</p>

<h2>Why CAGR Matters</h2>

<table>
  <tr>
    <th>Use Case</th>
    <th>Benefit</th>
  </tr>
  <tr>
    <td>Stock Analysis</td>
    <td>Compare performance across stocks.</td>
  </tr>
  <tr>
    <td>Mutual Funds</td>
    <td>Evaluate long-term returns.</td>
  </tr>
  <tr>
    <td>Business Growth</td>
    <td>Measure revenue growth.</td>
  </tr>
  <tr>
    <td>Investment Planning</td>
    <td>Estimate future wealth creation.</td>
  </tr>
</table>

<h2>CAGR vs Absolute Return</h2>

<table>
  <tr>
    <th>Metric</th>
    <th>Meaning</th>
  </tr>
  <tr>
    <td>Absolute Return</td>
    <td>Total percentage gain over the investment period.</td>
  </tr>
  <tr>
    <td>CAGR</td>
    <td>Average annual growth rate considering compounding.</td>
  </tr>
</table>

<h2>Example of CAGR</h2>

<table>
  <tr>
    <th>Initial Investment</th>
    <th>Final Value</th>
    <th>Years</th>
    <th>CAGR</th>
  </tr>
  <tr>
    <td>₹1,00,000</td>
    <td>₹2,00,000</td>
    <td>5</td>
    <td>14.87%</td>
  </tr>
</table>

<h2>How Investors Use CAGR</h2>

<ul>
  <li><strong>Compare Mutual Funds:</strong> Identify better-performing funds.</li>
  <li><strong>Analyze Stocks:</strong> Measure long-term stock growth.</li>
  <li><strong>Track Portfolio Performance:</strong> Understand annualized returns.</li>
  <li><strong>Business Evaluation:</strong> Measure sales and profit growth.</li>
</ul>

<h2>Typical CAGR Benchmarks</h2>

<table>
  <tr>
    <th>CAGR</th>
    <th>Performance</th>
  </tr>
  <tr>
    <td>Below 5%</td>
    <td>Low Growth</td>
  </tr>
  <tr>
    <td>5% - 10%</td>
    <td>Moderate Growth</td>
  </tr>
  <tr>
    <td>10% - 15%</td>
    <td>Good Growth</td>
  </tr>
  <tr>
    <td>15%+</td>
    <td>Excellent Growth</td>
  </tr>
</table>

<h2>CAGR Limitations</h2>

<ul>
  <li>Does not show yearly volatility.</li>
  <li>Assumes constant growth.</li>
  <li>Cannot predict future returns.</li>
  <li>Should be combined with risk analysis.</li>
</ul>

<h2>CAGR vs XIRR</h2>

<table>
  <tr>
    <th>Metric</th>
    <th>Best For</th>
  </tr>
  <tr>
    <td>CAGR</td>
    <td>Single investment growth calculation.</td>
  </tr>
  <tr>
    <td>XIRR</td>
    <td>Investments with multiple cash flows.</td>
  </tr>
</table>

<h2>Common CAGR Mistakes</h2>

<ul>
  <li>Comparing investments with different risk levels.</li>
  <li>Ignoring inflation.</li>
  <li>Using CAGR alone without reviewing volatility.</li>
  <li>Assuming future performance will match historical CAGR.</li>
</ul>

<h2>Pro Tip</h2>

<p>
When comparing mutual funds, stocks, or business performance, CAGR provides a clearer picture than absolute returns because it accounts for the time period and the power of compounding.
</p>
`,
};