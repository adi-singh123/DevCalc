import { Calculator } from "@/src/types/calculator";

export const npsCalculator: Calculator = {
  slug: "nps-calculator",

  name: "NPS Calculator",

  description:
    "Calculate your National Pension System (NPS) maturity corpus at age 60, the 60% tax-free lump-sum withdrawal, 40% mandatory annuity allocation, and estimated lifelong monthly pension.",

  category: "Finance",

  isPopular: true,

  editorialIntro:
    "Regulated by the PFRDA, the National Pension System (NPS) combines low fund management fees (<0.09%) with equity market compounding. At age 60, subscribers can withdraw up to 60% of their accumulated corpus completely tax-free, with the remaining 40% invested into an annuity plan to secure a guaranteed lifelong monthly pension.",

  benchmarkContext: {
    title: "PFRDA Regulatory Norms & Section 80CCD Tax Slabs",
    badge: "PFRDA Statutory Framework",
    stat: "60% Tax-Free Lump Sum | 40% Min Annuity at Age 60",
    description:
      "Exclusive tax deductions: Up to ₹1.5 Lakh under Section 80CCD(1) within the 80C umbrella + an additional ₹50,000 under Section 80CCD(1B) under the Old Regime. Employer contributions up to 10% (14% for Central/State Govt) of Basic+DA qualify under Section 80CCD(2) under both Old and New Tax Regimes.",
    source: "Pension Fund Regulatory and Development Authority (PFRDA) & Income Tax Department",
    lastUpdated: "January 2026",
  },

  compareWith: [
    "ppf-calculator",
    "retirement-calculator",
    "sip-calculator",
    "swp-calculator",
  ],

  seo: {
    title: "NPS Calculator - National Pension System Calculator Online",

    description:
      "Calculate your NPS retirement corpus, 60% tax-free lump sum, and monthly pension payout. Check Section 80CCD(1B) tax savings and asset allocation returns.",
    keywords: [
      "nps calculator",
      "national pension system calculator",
      "nps maturity calculator",
      "nps pension calculator",
      "nps corpus calculator",
      "nps retirement calculator",
      "nps withdrawal calculator",
      "monthly pension calculator",
      "section 80ccd 1b calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Set Current Age & Retirement Age",
      description: "Enter your starting age and target retirement horizon (standard superannuation is age 60).",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Input Monthly Contribution",
      description: "Specify your recurring monthly deposit (e.g., ₹5,000, ₹10,000, or ₹25,000).",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Set Growth & Annuity Return (%)",
      description: "Input expected portfolio return (typically 9%–11% for Active Choice) and annuity rate (typically 6%).",
      icon: "calculator",
    },
    {
      step: 4,
      title: "Review Lump-Sum & Pension Split",
      description: "Analyze your total accumulated corpus, 60% tax-free payout, and estimated lifelong monthly pension.",
      icon: "result",
    },
  ],

  formula: {
    title: "NPS Compounding & Annuity Allocation Formula",

    formula: "\\text{Corpus} = P \\times \\left[ \\frac{(1 + r)^n - 1}{r} \\right] \\times (1 + r) \\quad | \\quad \\text{Monthly Pension} = \\frac{\\text{Corpus} \\times 40\\% \\times \\text{Annuity Rate}}{12}",

    explanation:
      "Contributions compound monthly until age 60 under your selected asset allocation (Equity Scheme E, Corporate Bonds Scheme C, Govt Securities Scheme G). Upon superannuation, a minimum 40% of the terminal corpus is annuitized with an ASP (Annuity Service Provider) to generate guaranteed monthly pension cash flows.",

    example: {
      input: "Age: 30 | Retirement: 60 (30 Yrs) | Monthly Deposit: ₹10,000 | Expected CAGR: 10% | Annuity Rate: 6%",
      output: "Total Invested = ₹36,00,000 | Total Corpus = ₹2,27,93,600 | 60% Tax-Free Lump Sum = ₹1,36,76,160 | Monthly Pension = ₹45,587 / month",
    },

    useCases: [
      "Structuring Guaranteed Lifelong Post-60 Monthly Income",
      "Maximizing Section 80CCD(1B) ₹50,000 Extra Tax Deductions",
      "Corporate Employer NPS Salary Structuring under 80CCD(2)",
      "Active vs Auto Choice (LC75, LC50, LC25) Lifecycle Allocation Planning",
    ],
  },

  faqs: [
    {
      question: "What is the tax treatment of the NPS maturity corpus at age 60?",
      answer:
        "At age 60, up to 60% of your total accumulated corpus can be withdrawn as a 100% tax-free lump sum under Section 10(12A). The remaining 40% must be used to purchase an annuity, which is also exempt from tax at purchase. However, the recurring monthly pension received from the annuity is taxed as regular income under your applicable tax slab.",
    },
    {
      question: "What is the difference between NPS Tier 1 and Tier 2 accounts?",
      answer:
        "Tier 1 is the primary retirement account with statutory lock-in until age 60, offering exclusive tax deductions under Section 80CCD(1), 80CCD(1B), and 80CCD(2). Tier 2 is a voluntary, liquid investment account with zero lock-in and unrestricted withdrawals anytime, but contributions do not qualify for tax deductions.",
    },
    {
      question: "Can I withdraw my NPS corpus before reaching age 60?",
      answer:
        "Partial premature withdrawals up to 25% of your own contributions (excluding employer contributions and returns) are permitted after 3 years for specific purposes: children's higher education, marriage, residential house purchase, or treatment of critical illnesses. In case of premature full account closure before age 60, at least 80% of the total corpus must be utilized to buy an annuity, and only 20% can be taken as a lump sum.",
    },
  ],

  seoContent: `
<h2>What Is National Pension System (NPS)?</h2>

<p>
The National Pension System (NPS) is a government-backed retirement savings scheme designed to help individuals build a retirement corpus through disciplined long-term investing. Contributions are invested in a diversified portfolio and grow through compounding over time.
</p>

<h2>Key Features of NPS</h2>

<table>
<tr>
<th>Feature</th>
<th>Details</th>
</tr>
<tr>
<td>Purpose</td>
<td>Retirement Planning</td>
</tr>
<tr>
<td>Investment Type</td>
<td>Market Linked</td>
</tr>
<tr>
<td>Tax Benefits</td>
<td>Available Under Applicable Sections</td>
</tr>
<tr>
<td>Partial Withdrawal</td>
<td>Allowed Under Conditions</td>
</tr>
<tr>
<td>Pension Income</td>
<td>Available Through Annuity</td>
</tr>
</table>

<h2>Benefits of Investing in NPS</h2>

<ul>
<li>Long-term retirement planning.</li>
<li>Potential wealth creation through compounding.</li>
<li>Tax-saving opportunities.</li>
<li>Flexible contribution amounts.</li>
<li>Option to receive pension after retirement.</li>
</ul>

<h2>How NPS Maturity Is Calculated</h2>

<p>
The NPS maturity value depends on contribution amount, expected return, investment duration, and compounding growth. The longer the investment period, the greater the impact of compounding.
</p>

<h2>NPS vs PPF</h2>

<table>
<tr>
<th>Feature</th>
<th>NPS</th>
<th>PPF</th>
</tr>
<tr>
<td>Objective</td>
<td>Retirement Planning</td>
<td>Long-Term Savings</td>
</tr>
<tr>
<td>Returns</td>
<td>Market Linked</td>
<td>Government Declared</td>
</tr>
<tr>
<td>Pension Option</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>Risk Level</td>
<td>Moderate</td>
<td>Low</td>
</tr>
</table>

<h2>Factors Affecting NPS Returns</h2>

<ul>
<li>Monthly contribution amount.</li>
<li>Investment duration.</li>
<li>Asset allocation.</li>
<li>Expected annual returns.</li>
<li>Annuity purchase percentage.</li>
</ul>

<h2>Retirement Planning Tips</h2>

<ul>
<li>Start investing early.</li>
<li>Increase contributions regularly.</li>
<li>Review retirement goals periodically.</li>
<li>Maintain a diversified portfolio.</li>
<li>Use NPS alongside EPF and PPF for balanced retirement planning.</li>
</ul>

<h2>Why Use an NPS Calculator?</h2>

<p>
An NPS Calculator helps estimate your retirement corpus, expected pension, lump sum withdrawal, and overall retirement readiness. It simplifies long-term financial planning and helps you make informed retirement decisions.
</p>
`,
};