import { Calculator } from "@/src/types/calculator";

export const incomeTaxCalculator: Calculator = {
  slug: "income-tax-calculator",

  name: "Income Tax Calculator",

  description:
    "Estimate Indian income tax for Tax Year 2026-27 under the Old or New Regime using taxable income, slab rates, Section 87A rebate, marginal relief, and 4% cess.",

  category: "Finance",

  isPopular: true,

  editorialIntro:
    "Budget 2026 retained the personal income-tax slabs for Tax Year 2026-27. Under the New Regime, eligible normal slab-rate income up to ₹12 lakh can receive Section 87A relief; salaried taxpayers may separately account for the ₹75,000 standard deduction before entering taxable income.",

  benchmarkContext: {
    title: "Income Tax Slabs for Tax Year 2026-27",
    badge: "Income Tax Act 2025 & Budget 2026",
    stat: "Up to ₹12L Section 87A Threshold",
    description:
      "The New Regime uses slabs from nil up to ₹4 lakh through 30% above ₹24 lakh. Eligible normal slab-rate income up to ₹12 lakh can receive a Section 87A rebate of up to ₹60,000, with marginal relief just above the threshold.",
    source: "Central Board of Direct Taxes (CBDT), Ministry of Finance",
    lastUpdated: "October 2026",
  },

  seo: {
    title: "Income Tax Calculator 2026: Old vs New Regime – See Which Saves You More",

    description:
      "Estimate Old or New Regime income tax using Tax Year 2026-27 slabs, Section 87A rebate, marginal relief and 4% cess.",
    keywords: [
      "income tax calculator",
      "old vs new tax regime calculator",
      "calculate income tax",
      "income tax slab calculator",
      "salary income tax calculator",
      "income tax calculator with deductions",
      "section 87a rebate calculator",
      "tax liability calculator",
      "new tax regime calculator",
      "old tax regime calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Taxable Income",
      description:
        "Enter normal slab-rate taxable income after applying only the deductions allowed under the regime you selected. Keep special-rate income such as certain capital gains outside this simplified estimate.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Choose the Tax Regime",
      description:
        "Choose the New or Old Regime. Calculate taxable income separately because the deductions and exemptions allowed under each regime differ.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Review the Estimate",
      description:
        "See slab tax, Section 87A relief where eligible, marginal relief near the New Regime threshold, 4% cess, and the effective rate for the selected regime.",
      icon: "result",
    },
  ],

  formula: {
    title: "Income Tax Calculation Method",

    formula:
      "Tax Payable = (Taxable Income taxed across applicable slab rates) + 4% Health & Education Cess − Section 87A Rebate (if eligible)",

    explanation:
      "Indian income tax is calculated progressively: your taxable income isn't taxed at one flat rate, but is split across slabs, with each slab taxed only at its own rate. For instance, if you fall into the 20% slab, that 20% rate applies only to the portion of income within that slab — not to your entire income. The slabs and rates themselves differ depending on which regime you choose:\n\nUnder the New Tax Regime (now the default), there is no tax up to ₹4 lakh, 5% from ₹4–8 lakh, 10% from ₹8–12 lakh, 15% from ₹12–16 lakh, 20% from ₹16–20 lakh, 25% from ₹20–24 lakh, and 30% above ₹24 lakh. Salaried taxpayers also get a flat ₹75,000 standard deduction here.\n\nUnder the Old Tax Regime, the slabs are: no tax up to ₹2.5 lakh, 5% from ₹2.5–5 lakh, 20% from ₹5–10 lakh, and 30% above ₹10 lakh, with a smaller ₹50,000 standard deduction — but access to a much wider range of deductions (80C, 80D, HRA, home loan interest, and more).\n\nAfter calculating tax across the slabs, two more steps apply. First, if you qualify for the Section 87A rebate, it's subtracted from your tax — this can bring your liability to zero. Second, a flat 4% Health and Education Cess is added on top of whatever tax remains after the rebate. High earners (income above ₹50 lakh) may also owe a surcharge on top of this, which is capped at 25% under the New Regime and can go up to 37% under the Old Regime.",

    example: {
      input: "Annual Taxable Income: ₹12,00,000 under the New Tax Regime",

      output:
        "Tax before rebate ≈ ₹60,000 (₹0 on first ₹4L + ₹20,000 on next ₹4L @5% + ₹40,000 on next ₹4L @10%); fully offset by the Section 87A rebate (up to ₹60,000 for income up to ₹12L) → Final tax liability: ₹0",
    },

    useCases: [
      "Tax Planning & Investment Optimization",
      "Salary Package Structuring",
      "Quarterly Advance Tax Projections",
      "Annual Financial Roadmap Auditing",
    ],
  },

  faqs: [
    {
      question: "How do I choose between the Old and New Tax Regimes to maximize my tax savings?",
      answer:
        "It depends on how much you can claim in deductions versus how much your income benefits from the New Regime's lower rates and bigger rebate. The Old Regime has higher slab rates but lets you reduce taxable income through Section 80C (PPF, ELSS, EPF, life insurance, up to ₹1.5 lakh), Section 80D (health insurance), HRA, Leave Travel Allowance, and home loan interest under Section 24 (up to ₹2 lakh). The New Regime — now the default — offers lower rates and a much larger Section 87A rebate (up to ₹60,000, making income up to ₹12 lakh effectively tax-free), but it drops almost all of those deductions, keeping only the ₹75,000 standard deduction. As a general guideline: if your total eligible deductions under the Old Regime exceed roughly ₹4–4.5 lakh, the Old Regime may still come out ahead at higher income levels — but for most salaried taxpayers earning up to ₹12–15 lakh with average deductions, the New Regime now usually results in lower or equal tax. Run both calculations with your actual numbers, since the right answer changes with income level and how much you actually invest.",
    },
    {
      question: "What are the most effective ways to legally minimize my taxable income under Indian tax laws?",
      answer:
        "Most legal tax-reduction options are available only under the Old Regime. Start with the ₹1,50,000 cap under Section 80C — ELSS mutual funds, PPF, or EPF contributions all qualify. Beyond that, you can claim an extra ₹50,000 for voluntary NPS contributions under Section 80CCD(1B), separate from the 80C limit. Health insurance premiums reduce taxable income by up to ₹25,000 for yourself and your family, plus an additional amount for senior citizen parents, under Section 80D. If you're repaying a home loan, you can deduct up to ₹2 lakh of interest paid under Section 24(b). If you've opted for the New Regime instead, your main legal levers are the ₹75,000 standard deduction and structuring your salary to make use of employer NPS contributions under Section 80CCD(2), which remains available even under the New Regime.",
    },
    {
      question: "How does the Section 87A tax rebate work, and does it apply to both tax regimes?",
      answer:
        "Section 87A gives eligible taxpayers a full or partial waiver of tax, and the rules differ sharply by regime. Under the Old Regime, if your net taxable income (after all deductions) stays at or below ₹5,00,000, you get a rebate of up to ₹12,500, bringing your tax to zero. Under the New Regime, the rebate is far larger: a net taxable income up to ₹12,00,000 qualifies for a rebate of up to ₹60,000, which — combined with the ₹75,000 standard deduction — effectively makes salaried income up to ₹12.75 lakh tax-free. If your income crosses these thresholds by even a small amount, you don't lose the rebate entirely; marginal relief kicks in so that the extra tax you owe is capped at the amount your income exceeds the threshold by, rather than jumping to the full slab-rate tax. One exception: the rebate doesn't apply to income taxed at special rates, such as long-term or short-term capital gains on equity.",
    },
    {
      question: "Is the interest earned on standard bank fixed deposits (FD) fully taxable in India?",
      answer:
        "Yes. Interest from fixed deposits and recurring deposits is fully taxable as 'Income from Other Sources' and is added to your total income, then taxed at your applicable slab rate — there's no special lower rate for FD interest. Banks deduct TDS if your total interest income from all branches and deposits exceeds ₹40,000 in a financial year (this threshold is higher for senior citizens). If your total taxable income is below the exemption threshold for your regime, you can avoid this TDS deduction by submitting Form 15G (for individuals under 60) or Form 15H (for senior citizens) to your bank at the start of the financial year, rather than waiting to claim a refund later.",
    },
    {
      question: "What are the financial penalties and structural consequences of filing my income tax return late?",
      answer:
        "Missing the standard ITR filing deadline (usually July 31st for most individual taxpayers) triggers consequences under two separate sections. Under Section 234F, a late filing fee of up to ₹5,000 applies, reduced to ₹1,000 if your total income is below ₹5,00,000. Separately, under Section 234A, any unpaid tax accrues interest at 1% per month (or part of a month) from the due date until you actually file. Filing late also blocks you from carrying forward certain losses — like business or capital losses — to offset against future years' profits, and if you're owed a refund, it gets delayed without the usual interest benefit that applies to timely-filed returns.",
    },
    {
      question: "Can I claim House Rent Allowance (HRA) exemptions and home loan interest deductions at the same time?",
      answer:
        "Yes, and this is a commonly overlooked benefit under the Old Regime. You can claim both simultaneously if your real living situation supports it — for example, if you own a home in one city (perhaps your hometown, where you've taken a loan) but live in rented accommodation in a different city for work. To claim both safely, be prepared to show that the arrangement is genuine: keep your rent receipts and rental agreement for the HRA claim, and your home loan interest certificate from the lender for the Section 24 claim. If the owned property is vacant or let out rather than self-occupied, the rules for how much interest you can deduct differ slightly, so it's worth checking the specific treatment for your situation before filing.",
    },
  ],

  seoContent: `
<h2>How Indian Income Tax Works: Old Regime vs New Regime</h2>
<p>
  Calculating income tax starts with choosing a regime and determining taxable income under that regime. This calculator estimates one selected regime at a time. Enter taxable income after the deductions and exemptions permitted for that regime; it does not calculate those deductions from gross salary.
</p>
<p>
  For Tax Year 2026-27, Budget 2026 retained the personal income-tax slabs. Eligible normal slab-rate taxable income up to ₹12 lakh can receive the New Regime Section 87A rebate. A salaried taxpayer may reach ₹12.75 lakh of gross salary after a ₹75,000 standard deduction, subject to eligibility and other income.
</p>

---

<h2>Old Regime vs New Regime: Side-by-Side Comparison</h2>
<p>
  The table below summarizes the core differences relevant to Tax Year 2026-27:
</p>

<table>
  <thead>
    <tr>
      <th>Filing Parameter</th>
      <th>Old Tax Regime</th>
      <th>New Tax Regime (Default)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Basic Exemption Limit</strong></td>
      <td>₹2,50,000</td>
      <td>₹4,00,000</td>
    </tr>
    <tr>
      <td><strong>Standard Deduction (Salaried)</strong></td>
      <td>₹50,000</td>
      <td>₹75,000</td>
    </tr>
    <tr>
      <td><strong>Section 87A Rebate Threshold</strong></td>
      <td>Net taxable income up to ₹5,00,000 (rebate up to ₹12,500)</td>
      <td>Net taxable income up to ₹12,00,000 (rebate up to ₹60,000)</td>
    </tr>
    <tr>
      <td><strong>Effective Tax-Free Income (Salaried)</strong></td>
      <td>Up to ₹5,50,000 (after standard deduction)</td>
      <td>Up to ₹12,75,000 (after standard deduction)</td>
    </tr>
    <tr>
      <td><strong>Section 80C, 80D, HRA, Section 24 Deductions</strong></td>
      <td>Fully available, subject to individual caps</td>
      <td>Not available (except employer NPS under 80CCD(2))</td>
    </tr>
    <tr>
      <td><strong>Maximum Surcharge Rate</strong></td>
      <td>Up to 37% (income above ₹5 crore)</td>
      <td>Capped at 25%</td>
    </tr>
    <tr>
      <td><strong>Best Suited For</strong></td>
      <td>Taxpayers with significant 80C/80D/HRA/home-loan deductions</td>
      <td>Taxpayers with few deductions, or income up to ~₹12-15 lakh</td>
    </tr>
  </tbody>
</table>

<p>
  <strong>Note:</strong> Health and Education Cess of 4% applies on top of the calculated tax (after rebate) under both regimes.
</p>

---

<h2>How Slab-Based Taxation Actually Works</h2>
<p>
  A common misunderstanding is thinking that moving into a higher tax bracket means your <em>entire</em> income gets taxed at that higher rate. That's not how it works. Each slab rate applies only to the income that falls within that specific band — income below it is taxed at the lower rates that applied to those earlier slabs.
</p>
<p>
  For Tax Year 2026-27, the New Regime slabs are:
</p>
<table>
  <thead>
    <tr>
      <th>Taxable Income Slab</th>
      <th>Tax Rate</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Up to ₹4,00,000</td><td>Nil</td></tr>
    <tr><td>₹4,00,001 – ₹8,00,000</td><td>5%</td></tr>
    <tr><td>₹8,00,001 – ₹12,00,000</td><td>10%</td></tr>
    <tr><td>₹12,00,001 – ₹16,00,000</td><td>15%</td></tr>
    <tr><td>₹16,00,001 – ₹20,00,000</td><td>20%</td></tr>
    <tr><td>₹20,00,001 – ₹24,00,000</td><td>25%</td></tr>
    <tr><td>Above ₹24,00,000</td><td>30%</td></tr>
  </tbody>
</table>
<p>
  So someone with ₹15 lakh in taxable income under the New Regime doesn't pay 15% on all ₹15 lakh. They pay nothing on the first ₹4 lakh, 5% on the next ₹4 lakh (₹20,000), 10% on the next ₹4 lakh (₹40,000), and 15% only on the remaining ₹3 lakh (₹45,000) — a base tax of ₹1,05,000, before the 4% cess is added. Once base tax is calculated, the formula is straightforward:
</p>
<p>
  <strong>Final Tax Liability = (Tax across slabs − Section 87A rebate, if eligible) × 1.04</strong>
</p>

---

<h2>Primary Investment Vehicles for Maximizing Old Regime Deductions</h2>
<p>
  If the Old Regime works out better for you, structuring your investments across approved instruments lowers your taxable income. Here's a comparison of common options:
</p>

<table>
  <thead>
    <tr>
      <th>Investment Vehicle</th>
      <th>Applicable Section</th>
      <th>Maximum Annual Cap</th>
      <th>Lock-In Period</th>
      <th>Return Profile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Equity Linked Savings Scheme (ELSS)</strong></td>
      <td>Section 80C</td>
      <td>₹1,50,000 (combined with other 80C items)</td>
      <td>3 Years</td>
      <td>Market-linked equity returns</td>
    </tr>
    <tr>
      <td><strong>Public Provident Fund (PPF)</strong></td>
      <td>Section 80C</td>
      <td>₹1,50,000 (combined with other 80C items)</td>
      <td>15 Years</td>
      <td>Government-backed, fixed annual rate</td>
    </tr>
    <tr>
      <td><strong>National Pension System (NPS) — Self Contribution</strong></td>
      <td>Section 80CCD(1B)</td>
      <td>₹50,000 (additional, over and above 80C)</td>
      <td>Until age 60</td>
      <td>Market-linked, hybrid asset allocation</td>
    </tr>
    <tr>
      <td><strong>Health Insurance Premium</strong></td>
      <td>Section 80D</td>
      <td>Up to ₹25,000 (self/family) + up to ₹50,000 (senior citizen parents)</td>
      <td>None — annual premium</td>
      <td>Risk protection plus tax deduction</td>
    </tr>
  </tbody>
</table>

---

<h2>Common Mistakes to Avoid When Filing</h2>
<h3>1. Forgetting to Declare Income from Other Sources</h3>
<p>
  A frequent error is reporting only salary or business income while leaving out smaller income streams — savings account interest, short-term capital gains, or dividends. The Income Tax Department cross-checks your return against your Annual Information Statement (AIS), which tracks most of your financial transactions automatically. Leaving out even small amounts of declared interest or capital gains can trigger a mismatch notice and delay your refund.
</p>
<h3>2. Waiting Until March to Make Tax-Saving Investments</h3>
<p>
  If you've chosen the Old Regime, putting off your 80C and 80D investments until the last weeks of the financial year often leads to rushed, suboptimal choices — or missing the window for higher TDS deduction to be corrected. Submitting investment proof to your employer early in the year lets your monthly TDS more closely match your actual annual liability, instead of one large deduction (or a large refund claim) at year-end.
</p>
<h3>3. Comparing Regimes Using Last Year's Numbers</h3>
<p>
  Tax rules and personal circumstances can change. Use current Tax Year 2026-27 figures, calculate taxable income separately under each regime, and compare the two results instead of reusing a prior-year estimate.
</p>
`,
};
