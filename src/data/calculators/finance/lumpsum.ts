import { Calculator } from "@/src/types/calculator";

export const lumpsumCalculator: Calculator = {
  slug: "lumpsum-calculator",

  name: "Lumpsum Calculator",

  description:
    "Calculate the future value of a one-time mutual fund lump-sum investment. Estimate compounding growth, total wealth gained, and long-term capital accumulation across equity, debt, and hybrid assets.",

  category: "Finance",

  isPopular: true,

  editorialIntro:
    "A lump-sum investment deploys your entire capital into the market upfront, allowing 100% of your principal to compound from Day 1. When investing during market dips or deploying windfalls (such as annual bonuses, property sales, or ESOP liquidations), lump-sum investing historically captures strong multi-year compounding cycles.",

  benchmarkContext: {
    title: "Lump-Sum vs. STP Deployment Strategy",
    badge: "SEBI & Wealth Management Norms",
    stat: "STP (Systematic Transfer Plan) Volatility Defense",
    description:
      "When market valuations (P/E ratios) are elevated, wealth managers recommend parking lump sums in liquid/overnight funds and executing a 6-to-12 month Systematic Transfer Plan (STP) into equity funds to mitigate single-day entry point timing risks.",
    source: "Association of Mutual Funds in India (AMFI) & NSE Historical Valuation Metrics",
    lastUpdated: "January 2026",
  },

  seo: {
    title: "Lumpsum Calculator - Calculate One-Time Investment Returns",

    description:
      "Calculate mutual fund lumpsum investment returns, future maturity value, and compounding growth. Compare lumpsum vs SIP strategies for wealth creation.",
    keywords: [
      "lumpsum calculator",
      "mutual fund lumpsum calculator",
      "one time investment calculator",
      "lumpsum return calculator",
      "lumpsum investment formula",
      "lumpsum vs sip calculator",
      "investment maturity calculator",
      "mutual fund future value calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Input Initial Principal",
      description: "Enter your one-time investible lump sum (e.g., ₹1,00,000, ₹5,00,000, or ₹25,00,000).",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Target Annual CAGR (%)",
      description: "Set expected annualized compound return (e.g. 12% for Large Cap, 14% for Mid/Small Cap).",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Select Investment Horizon",
      description: "Specify holding tenure in years to evaluate long-term compounding multiples.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "Analyze Terminal Wealth",
      description: "Review your initial capital vs estimated capital gains and final maturity corpus.",
      icon: "result",
    },
  ],

  formula: {
    title: "Lump-Sum Compound Growth Formula",

    formula: "A = P × (1 + r)^t",

    explanation:
      "The future maturity valuation (A) is calculated by compounding the starting principal (P) at the annual interest/growth rate (r) over the total investment tenure in years (t).",

    example: {
      input: "Principal: ₹5,00,000 | Expected CAGR: 12% | Horizon: 15 Years",
      output: "Total Invested = ₹5,00,000 | Estimated Capital Gains = ₹22,36,783 | Maturity Value = ₹27,36,783 (5.47x Growth)",
    },

    useCases: [
      "Inheritance & Property Sale Proceed Allocation",
      "Annual Bonus & ESOP Liquidity Deployment",
      "Children Higher Education Trust Funding",
      "Lump-Sum vs SIP Comparative Analysis",
    ],
  },

  faqs: [
    {
      question: "When is a Lump-Sum investment better than a monthly SIP?",
      answer:
        "Lump-sum investing historically outperforms SIPs in long-term secular bull markets because 100% of your capital begins compounding immediately, rather than sitting in low-yield cash waiting to be deployed over months. However, if markets are at all-time highs, using a Systematic Transfer Plan (STP) over 6–12 months helps mitigate near-term correction risks.",
    },
    {
      question: "How are capital gains taxed on equity lump-sum redemptions?",
      answer:
        "Under Budget 2024, equity mutual fund units held for more than 12 months qualify as Long-Term Capital Gains (LTCG) and are taxed at 12.5% on gains exceeding ₹1.25 Lakhs per financial year. Units sold within 12 months are taxed as Short-Term Capital Gains (STCG) at a flat 20%.",
    },
    {
      question: "What is the Rule of 72 and how does it apply to lump-sum investments?",
      answer:
        "The Rule of 72 estimates how quickly your lump sum doubles: divide 72 by your expected annual return rate. At a 12% CAGR, your investment doubles every 6 years (72 / 12 = 6). A ₹10 Lakh lump sum becomes ₹20 Lakhs in 6 years, ₹40 Lakhs in 12 years, and ₹80 Lakhs in 18 years.",
    },
    {
      question: "Can market timing destroy lump-sum returns?",
      answer:
        "Investing right before a market peak can cause short-term portfolio drawdowns. However, historical rolling return data shows that holding broad-market equity index funds for 7+ years almost completely eliminates negative return probabilities.",
    },
  ],

  seoContent: `
<h2>What is a Lumpsum Investment?</h2>

<p>
A lumpsum investment is a one-time investment of a large amount into a financial instrument such as mutual funds, stocks, fixed deposits, or bonds. Unlike SIPs, where money is invested regularly, a lumpsum investment is made in a single transaction.
</p>

<h2>Lumpsum vs SIP</h2>

<table>
  <tr>
    <th>Feature</th>
    <th>Lumpsum</th>
    <th>SIP</th>
  </tr>
  <tr>
    <td>Investment Style</td>
    <td>One-Time</td>
    <td>Monthly</td>
  </tr>
  <tr>
    <td>Market Timing Risk</td>
    <td>Higher</td>
    <td>Lower</td>
  </tr>
  <tr>
    <td>Suitable For</td>
    <td>Large Available Capital</td>
    <td>Regular Income Earners</td>
  </tr>
  <tr>
    <td>Investment Discipline</td>
    <td>Less Required</td>
    <td>Highly Disciplined</td>
  </tr>
</table>

<h2>Benefits of Lumpsum Investing</h2>

<ul>
  <li><strong>Immediate Market Exposure:</strong> Entire amount starts working from day one.</li>
  <li><strong>Higher Compounding Potential:</strong> Full capital compounds immediately.</li>
  <li><strong>Simple Management:</strong> One-time investment process.</li>
  <li><strong>Suitable for Windfalls:</strong> Useful for bonuses, inheritance, or asset sales.</li>
</ul>

<h2>When is Lumpsum Investing Suitable?</h2>

<table>
  <tr>
    <th>Situation</th>
    <th>Recommendation</th>
  </tr>
  <tr>
    <td>Market Correction</td>
    <td>Good Opportunity</td>
  </tr>
  <tr>
    <td>Bonus Received</td>
    <td>Consider Lumpsum</td>
  </tr>
  <tr>
    <td>Inheritance Money</td>
    <td>Suitable Option</td>
  </tr>
  <tr>
    <td>Regular Salary</td>
    <td>SIP May Be Better</td>
  </tr>
</table>

<h2>Investment Growth Example</h2>

<table>
  <tr>
    <th>Investment</th>
    <th>Return</th>
    <th>Time</th>
    <th>Future Value</th>
  </tr>
  <tr>
    <td>₹1,00,000</td>
    <td>12%</td>
    <td>10 Years</td>
    <td>₹3,10,585</td>
  </tr>
  <tr>
    <td>₹5,00,000</td>
    <td>12%</td>
    <td>15 Years</td>
    <td>₹27,36,000+</td>
  </tr>
</table>

<h2>Factors Affecting Lumpsum Returns</h2>

<ul>
  <li><strong>Investment Amount:</strong> Higher capital generates larger returns.</li>
  <li><strong>Investment Duration:</strong> Longer periods increase compounding benefits.</li>
  <li><strong>Rate of Return:</strong> Small rate differences significantly impact outcomes.</li>
  <li><strong>Market Conditions:</strong> Entry timing can affect short-term performance.</li>
</ul>

<h2>Common Lumpsum Investment Mistakes</h2>

<ul>
  <li>Investing without clear financial goals.</li>
  <li>Ignoring diversification.</li>
  <li>Trying to perfectly time the market.</li>
  <li>Investing emergency funds.</li>
  <li>Exiting investments too early.</li>
</ul>

<h2>Best Investment Options for Lumpsum Investing</h2>

<table>
  <tr>
    <th>Investment Type</th>
    <th>Risk Level</th>
  </tr>
  <tr>
    <td>Equity Mutual Funds</td>
    <td>Moderate to High</td>
  </tr>
  <tr>
    <td>Index Funds</td>
    <td>Moderate</td>
  </tr>
  <tr>
    <td>Fixed Deposits</td>
    <td>Low</td>
  </tr>
  <tr>
    <td>Government Bonds</td>
    <td>Low</td>
  </tr>
</table>

<h2>Who Should Use a Lumpsum Calculator?</h2>

<ul>
  <li>Mutual Fund Investors</li>
  <li>Stock Market Investors</li>
  <li>Retirement Planners</li>
  <li>People Receiving Bonuses</li>
  <li>Long-Term Wealth Builders</li>
</ul>

<h2>Pro Tip</h2>

<p>
If you're nervous about investing a large amount at once, consider using a Systematic Transfer Plan (STP). This gradually moves money into investments and reduces market timing risk.
</p>
`,
};