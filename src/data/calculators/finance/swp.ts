import { Calculator } from "@/src/types/calculator";

export const swpCalculator: Calculator = {
  slug: "swp-calculator",

  name: "SWP Calculator",

  description:
    "Calculate monthly systematic withdrawals, capital preservation, remaining mutual fund corpus, and tax-efficient cash flow streams from your lump-sum investments.",

  category: "Finance",

  isPopular: true,

  editorialIntro:
    "A Systematic Withdrawal Plan (SWP) allows mutual fund investors to withdraw a fixed cash amount monthly while leaving the remaining capital invested to continue compounding. It is the gold standard for retirees and early-pension seekers wanting tax-efficient passive cash flows.",

  benchmarkContext: {
    title: "SWP Safe Withdrawal Rate & Mutual Fund Taxation",
    badge: "SEBI & Wealth Advisory Standards",
    stat: "4%–6% Safe Annual Withdrawal Benchmark",
    description:
      "To prevent capital depletion over a 20+ year horizon, financial planners recommend keeping annual withdrawal rates between 4% and 6%. Under Budget 2024, equity fund LTCG above ₹1.25L is taxed at 12.5%, applied only to the capital gain portion of each redeemed tranche.",
    source: "Association of Mutual Funds in India (AMFI) & Financial Planning Standards Board",
    lastUpdated: "January 2026",
  },

  seo: {
    title: "SWP Calculator - Systematic Withdrawal Plan Calculator Online",

    description:
      "Calculate monthly withdrawals, remaining mutual fund corpus, and retirement cash flows with our free SWP Calculator. Plan tax-efficient monthly income.",

    keywords: [
      "swp calculator",
      "systematic withdrawal plan calculator",
      "swp mutual fund calculator",
      "monthly withdrawal calculator",
      "retirement withdrawal calculator",
      "swp return calculator",
      "mutual fund withdrawal calculator",
      "swp planner",
    ],
  },

  compareWith: [
    "sip-calculator",
    "retirement-calculator",
    "fd-calculator",
    "ppf-calculator",
  ],

  steps: [
    {
      step: 1,
      title: "Input Starting Corpus",
      description: "Enter your initial invested capital (e.g., ₹25,00,000 or ₹1,00,00,000).",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Set Monthly Withdrawal Amount",
      description: "Specify the regular monthly cash payout you wish to receive in your bank account.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Expected Annual Return (%)",
      description: "Input realistic annualized portfolio return (e.g. 8% for Hybrid, 12% for Equity).",
      icon: "calculator",
    },

    {
      step: 4,
      title: "Review Corpus Longevity",
      description: "Analyze your total cumulative payouts vs your remaining terminal portfolio balance.",
      icon: "result",
    },
  ],

  formula: {
    title: "Systematic Withdrawal & Compounding Formula",

    formula:
      "C_n = C_0 \\times (1 + r)^n - W \\times \\left[ \\frac{(1 + r)^n - 1}{r} \\right]",

    explanation:
      "The remaining corpus ($C_n$) after $n$ monthly cycles equals the initial capital ($C_0$) compounded at the periodic monthly rate ($r = \\text{Annual Return} \\div 12$), minus the future value of the monthly withdrawals ($W$).",

    example: {
      input:
        "Corpus: ₹25,00,000 | Monthly Payout: ₹20,000 | Expected Return: 8% p.a. | Tenure: 5 Years",

      output:
        "Total Cash Received = ₹12,00,000 | Remaining Invested Corpus = ₹21,18,000",
    },

    useCases: [
      "Post-Retirement Monthly Pension Generation",
      "Tax-Efficient Alternative to Fixed Deposit Interest",
      "College Living Expense Trust Distribution",
      "Passive Income Stream Structuring from Real Estate / Business Windfalls",
    ],
  },

  faqs: [
    {
      question:
        "How is an SWP more tax-efficient than Bank FD monthly interest payouts?",
      answer:
        "Bank FD interest is taxed at 100% of your income tax slab rate (up to 30% + cess). In an SWP, each monthly withdrawal consists partly of your original non-taxable principal and only partly of capital gains. Furthermore, equity fund gains held for over 1 year benefit from the 12.5% LTCG rate and an annual ₹1.25 Lakh tax-free threshold.",
    },

    {
      question:
        "Can an SWP cause my investment corpus to run out completely?",
      answer:
        "Yes, if your withdrawal rate consistently exceeds the portfolio's annual compound growth rate. If you withdraw 12% per year from a fund generating only 7% return, the underlying capital will gradually diminish to zero. Maintaining a 4% to 6% withdrawal rate preserves capital longevity.",
    },

    {
      question:
        "Do mutual funds levy exit loads on monthly SWP redemptions?",
      answer:
        "Most open-ended mutual funds allow penalty-free redemptions of up to 10%–12% of your total folio units each year. If your annual SWP withdrawals stay below this threshold, zero exit load is charged.",
    },

    {
      question:
        "Can I modify or pause my monthly withdrawal amount later?",
      answer:
        "Yes, SWP mandates are completely flexible. You can increase, decrease, pause, or terminate your monthly withdrawal instructions online at any time with your AMC or distributor without penalty.",
    },
  ],

  seoContent: `
<h2>Why Systematic Withdrawal Plans (SWP) Excel for Retirement Income</h2>
<p>
  Transitioning from the wealth accumulation phase (SIPs) to the distribution phase (cash outflows) requires a strategy that provides steady cash flow while defending against inflation. An <strong>SWP (Systematic Withdrawal Plan)</strong> achieves this by allowing your invested principal to generate compound returns while liquidating only the exact units needed for monthly spending.
</p>

---

<h2>SWP Longevity Simulation: ₹50 Lakh Corpus at 9% Expected Return</h2>
<table>
  <thead>
    <tr>
      <th>Monthly Payout</th>
      <th>Annual Withdrawal Rate</th>
      <th>Total Paid Out (15 Years)</th>
      <th>Remaining Corpus (15 Years)</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>₹25,000 / mo</strong></td>
      <td>6.0% p.a.</td>
      <td>₹45,00,000</td>
      <td>₹82,41,000</td>
      <td>Corpus Growing</td>
    </tr>
    <tr>
      <td><strong>₹35,000 / mo</strong></td>
      <td>8.4% p.a.</td>
      <td>₹63,00,000</td>
      <td>₹47,65,000</td>
      <td>Sustainable Balance</td>
    </tr>
    <tr>
      <td><strong>₹50,000 / mo</strong></td>
      <td>12.0% p.a.</td>
      <td>₹90,00,000</td>
      <td>₹0 (Depleted by Yr 13)</td>
      <td>Capital Exhaustion</td>
    </tr>
  </tbody>
</table>
`,
};