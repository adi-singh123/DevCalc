import { Calculator } from "@/src/types/calculator";

export const inflationCalculator: Calculator = {
  slug: "inflation-calculator",

  name: "Inflation Calculator",

  description:
    "Calculate the future value of money after inflation and understand how rising prices affect your purchasing power over time. Use our free Inflation Calculator to estimate inflation-adjusted values and plan your finances more effectively.",

  category: "Finance",

  isPopular: true,

  editorialIntro:
    "Inflation acts as a silent erosion on uninvested cash. At an average retail inflation rate of 6% p.a., the purchasing power of your money halves every 12 years (Rule of 70). Forecasting inflation-adjusted future costs is the foundational prerequisite for setting realistic retirement and higher education targets.",

  benchmarkContext: {
    title: "RBI Monetary Policy Inflation Targets (CPI)",
    badge: "Reserve Bank of India Statutory Mandate",
    stat: "4.0% Target Band (±2.0% Tolerance)",
    description:
      "Under the RBI Act Monetary Policy Framework, the Consumer Price Index (CPI) combined inflation target is anchored at 4% with a 2% to 6% tolerance band. Real returns equal nominal investment returns minus CPI inflation.",
    source: "Reserve Bank of India (RBI) & Ministry of Statistics and Programme Implementation (MoSPI)",
    lastUpdated: "January 2026",
  },

  seo: {
    title:
      "Inflation Calculator - Calculate Future Value & Purchasing Power",

    description:
      "Calculate future costs, purchasing power erosion, and inflation-adjusted values over 5, 10, 20, and 30 years using verified CPI inflation models.",
    keywords: [
      "inflation calculator",
      "purchasing power calculator",
      "future cost calculator",
      "inflation rate calculator",
      "inflation adjusted calculator",
      "real value of money calculator",
      "price inflation calculator",
      "salary inflation calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Current Amount",
      description:
        "Enter the current value, cost, salary, or amount you want to adjust for inflation.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Inflation Rate",
      description:
        "Provide the expected annual inflation rate percentage.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Select Number of Years",
      description:
        "Choose how many years you want to project into the future.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Inflation-Adjusted Value",
      description:
        "See how inflation affects purchasing power and future costs.",
      icon: "result",
    },
  ],

  formula: {
    title: "Inflation Calculator Formula",

    formula:
      "Future Value = Present Value × (1 + Inflation Rate)^Years",

    explanation:
      "Inflation reduces the purchasing power of money over time. This calculator uses compound inflation to estimate how much a product, service, salary, or investment may cost in the future.",

    example: {
      input:
        "Current Value: ₹100,000 | Inflation Rate: 6% | Years: 10",

      output:
        "Future Value ≈ ₹179,085",
    },

    useCases: [
      "Retirement Planning",
      "Future Expense Planning",
      "Investment Analysis",
      "Salary Planning",
      "Education Cost Estimation",
      "Financial Forecasting",
      "Budget Planning",
      "Wealth Management",
    ],
  },

  faqs: [
    {
      question: "What is an Inflation Calculator?",
      answer:
        "An Inflation Calculator estimates how the value of money changes over time due to inflation and helps calculate future costs or inflation-adjusted values.",
    },

    {
      question: "What is inflation?",
      answer:
        "Inflation is the increase in prices of goods and services over time, which reduces the purchasing power of money.",
    },

    {
      question: "How does inflation affect purchasing power?",
      answer:
        "As inflation rises, the same amount of money buys fewer goods and services than before.",
    },

    {
      question: "Can I use this calculator for future expenses?",
      answer:
        "Yes. The calculator helps estimate future costs for education, retirement, housing, healthcare, and other long-term expenses.",
    },

    {
      question: "What inflation rate should I use?",
      answer:
        "You can use historical inflation rates or your own projected rate based on economic conditions and financial planning goals.",
    },

    {
      question: "Why is inflation important in financial planning?",
      answer:
        "Ignoring inflation can lead to underestimating future expenses and overestimating purchasing power, affecting long-term financial goals.",
    },

    {
      question: "Can investors use an Inflation Calculator?",
      answer:
        "Yes. Investors use inflation calculations to understand real returns and preserve purchasing power over time.",
    },

    {
      question: "Does inflation always reduce money value?",
      answer:
        "Generally yes. Inflation means prices rise over time, causing the same amount of money to have less purchasing power in the future.",
    },
  ],

  seoContent: `
<h2>What is Inflation?</h2>

<p>
Inflation is the gradual increase in the prices of goods and services over time. As inflation rises, the purchasing power of money decreases, meaning the same amount of money buys fewer goods and services in the future.
</p>

<h2>Impact of Inflation on Money</h2>

<table>
  <tr>
    <th>Current Amount</th>
    <th>Inflation Rate</th>
    <th>Value After 10 Years</th>
  </tr>
  <tr>
    <td>₹1,00,000</td>
    <td>5%</td>
    <td>Approx. ₹61,391</td>
  </tr>
  <tr>
    <td>₹1,00,000</td>
    <td>7%</td>
    <td>Approx. ₹50,834</td>
  </tr>
  <tr>
    <td>₹1,00,000</td>
    <td>10%</td>
    <td>Approx. ₹38,554</td>
  </tr>
</table>

<h2>Why Inflation Matters</h2>

<ul>
  <li><strong>Reduces Purchasing Power:</strong> Your money buys less over time.</li>
  <li><strong>Affects Retirement Planning:</strong> Future expenses become much higher.</li>
  <li><strong>Impacts Investments:</strong> Returns must exceed inflation to create real wealth.</li>
  <li><strong>Influences Living Costs:</strong> Housing, education, healthcare, and food become more expensive.</li>
</ul>

<h2>Common Inflation Examples</h2>

<table>
  <tr>
    <th>Item</th>
    <th>Price Today</th>
    <th>Price After 20 Years (6%)</th>
  </tr>
  <tr>
    <td>Monthly Rent</td>
    <td>₹15,000</td>
    <td>₹48,107</td>
  </tr>
  <tr>
    <td>School Fees</td>
    <td>₹50,000</td>
    <td>₹1,60,357</td>
  </tr>
  <tr>
    <td>Groceries</td>
    <td>₹10,000</td>
    <td>₹32,071</td>
  </tr>
</table>

<h2>Inflation vs Investment Returns</h2>

<table>
  <tr>
    <th>Investment Return</th>
    <th>Inflation Rate</th>
    <th>Real Return</th>
  </tr>
  <tr>
    <td>8%</td>
    <td>6%</td>
    <td>2%</td>
  </tr>
  <tr>
    <td>12%</td>
    <td>6%</td>
    <td>6%</td>
  </tr>
  <tr>
    <td>15%</td>
    <td>6%</td>
    <td>9%</td>
  </tr>
</table>

<h2>Ways to Beat Inflation</h2>

<ul>
  <li><strong>Invest in Equity:</strong> Stocks and equity mutual funds historically outperform inflation.</li>
  <li><strong>Increase Income:</strong> Develop skills and improve earning potential.</li>
  <li><strong>Review Investments:</strong> Ensure returns exceed inflation.</li>
  <li><strong>Start Early:</strong> Compounding helps overcome inflation.</li>
</ul>

<h2>Inflation and Retirement Planning</h2>

<p>
Many people underestimate how inflation affects retirement. A monthly expense of ₹50,000 today may require more than ₹1.5 lakh per month after 20 years if inflation remains high.
</p>

<h2>Common Inflation Mistakes</h2>

<ul>
  <li>Keeping all savings in low-interest accounts.</li>
  <li>Ignoring future cost increases.</li>
  <li>Not adjusting financial goals annually.</li>
  <li>Focusing only on nominal returns.</li>
</ul>

<h2>Rule of 72 for Inflation</h2>

<p>
Divide 72 by the inflation rate to estimate how long it takes for prices to double. At 6% inflation, prices may double in approximately 12 years.
</p>

<h2>Pro Tip</h2>

<p>
When planning long-term goals such as retirement, children's education, or buying a home, always account for inflation. Ignoring inflation can lead to significant shortfalls in future financial planning.
</p>
`,
};