import { Calculator } from "@/src/types/calculator";

export const fdCalculator: Calculator = {
  slug: "fd-calculator",

  name: "FD Calculator",

  description:
    "Calculate Fixed Deposit (FD) maturity amount, cumulative interest earned, and quarterly compounding returns. Compare interest rates across leading Indian public, private, and small finance banks with DICGC insurance and tax deduction guidance.",

  category: "Finance",

  isPopular: true,

  editorialIntro:
    "Indian scheduled commercial banks calculate Fixed Deposit interest on a quarterly compounding basis (every 90 days). Under the Deposit Insurance and Credit Guarantee Corporation (DICGC) Act, deposits including principal and accrued interest are insured up to ₹5,00,000 per depositor per bank.",

  benchmarkContext: {
    title: "Indian Bank FD Benchmarks & DICGC Safety",
    badge: "RBI & DICGC Banking Framework",
    stat: "₹5,00,000 DICGC Insurance Cap",
    description:
      "Interest earned on bank FDs is fully taxable per slab rates. TDS is deducted under Section 194A at 10% if annual interest exceeds ₹40,000 (₹50,000 for senior citizens). Senior citizens also enjoy Section 80TTB deduction up to ₹50,000 under the Old Regime.",
    source: "Reserve Bank of India (RBI) & Income Tax Department",
    lastUpdated: "January 2026",
  },

  seo: {
    title: "FD Calculator - Calculate Fixed Deposit Returns Online",

    description:
      "Calculate Fixed Deposit (FD) maturity amount, interest earned, and quarterly compounding returns. Check bank FD interest rates, senior citizen benefits, and DICGC insurance rules.",
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
  compareWith: [
    "sip-calculator",
    "ppf-calculator",
    "swp-calculator",
    "cagr-calculator",
  ],

  steps: [
    {
      step: 1,
      title: "Input Principal Lump-Sum",
      description: "Enter your initial one-time deposit (e.g., ₹1,00,000 or ₹5,00,000).",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Set Annual Interest Rate (%)",
      description: "Enter your bank's rate (typically 6.75%–7.50% regular, +0.50% extra for senior citizens).",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Specify Tenure Horizon",
      description: "Select the deposit term in years or months (7 days up to 10 years).",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View FD Returns",
      description: "See maturity amount and interest earned.",
      icon: "result",
    },
  ],

  formula: {
    title: "FD Formula",

    formula: "A = P × (1 + r/n)^(n×t)",

    explanation:
      "Fixed Deposit returns are calculated using compound interest based on deposit amount, interest rate, tenure, and compounding frequency.",

    example: {
      input: "₹1,00,000 invested at 7% for 5 years",

      output: "Maturity Amount ≈ ₹1,40,255",
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
      question: "Is a Fixed Deposit (FD) a safe investment?",
      answer:
        "Fixed Deposits are generally considered one of the safest investment options available to retail investors. Unlike market-linked investments such as mutual funds and stocks, FD returns are fixed and predictable. The interest rate is decided at the time of investment and remains unchanged for the tenure of the deposit. This makes FDs suitable for conservative investors, retirees, and individuals looking to preserve capital. However, investors should also consider inflation because the real purchasing power of FD returns may decline if inflation grows faster than the FD interest rate.",
    },

    {
      question: "How is FD interest calculated?",
      answer:
        "FD interest is calculated based on the principal amount, interest rate, tenure, and compounding frequency. Most banks offer quarterly or monthly compounding, which allows investors to earn interest on previously earned interest. The higher the interest rate and longer the tenure, the greater the maturity amount. A Fixed Deposit Calculator helps estimate maturity value accurately without manually performing complex compound interest calculations.",
    },

    {
      question: "What is the difference between FD and SIP?",
      answer:
        "FD and SIP serve different financial goals. Fixed Deposits provide guaranteed returns and capital protection, making them suitable for risk-averse investors. SIPs invest money in mutual funds and offer higher long-term growth potential but come with market risk. Historically, SIPs have generated higher returns over long investment periods, while FDs provide stability and predictability. Many investors use both instruments together to balance growth and security in their portfolios.",
    },

    {
      question: "Do I have to pay tax on FD interest?",
      answer:
        "Yes. Interest earned from Fixed Deposits is generally taxable according to the investor's income tax slab. Banks may deduct Tax Deducted at Source (TDS) when annual interest exceeds the prescribed threshold. Even if TDS is not deducted, FD interest must be reported while filing income tax returns. Investors should consider post-tax returns rather than just the advertised FD interest rate when evaluating investment options.",
    },

    {
      question: "Can I withdraw my FD before maturity?",
      answer:
        "Most banks allow premature withdrawal of Fixed Deposits before maturity. However, early withdrawal may result in a penalty or a reduced interest rate. The exact penalty varies between banks and financial institutions. Investors who may require liquidity before maturity should review premature withdrawal terms before opening an FD.",
    },

    {
      question: "Which FD tenure is best for maximum returns?",
      answer:
        "The ideal FD tenure depends on prevailing interest rates, financial goals, and liquidity requirements. In many cases, medium-term FDs between 1 and 5 years offer competitive interest rates. Long-term FDs may provide higher rates in some periods, but investors should compare rates carefully. Using an FD calculator helps evaluate different tenure options and determine which maturity period best aligns with personal financial objectives.",
    },

    {
      question: "Are senior citizen Fixed Deposits better than regular FDs?",
      answer:
        "Many banks offer senior citizens higher FD interest rates compared to regular customers. The additional interest rate benefit is typically between 0.25% and 0.75% above standard FD rates. Over longer tenures and larger investment amounts, this additional interest can significantly increase maturity value. Senior citizen FDs are often popular among retirees seeking stable income and capital preservation.",
    },

    {
      question: "How can I maximize returns from Fixed Deposits?",
      answer:
        "Investors can maximize FD returns by comparing interest rates across banks, choosing appropriate tenures, considering special FD schemes, and taking advantage of senior citizen benefits when eligible. Laddering multiple FDs with different maturity dates can also improve liquidity and reduce reinvestment risk. Additionally, evaluating post-tax returns and comparing FDs with alternative investments such as debt funds, PPF, and bonds can help optimize overall investment strategy.",
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
