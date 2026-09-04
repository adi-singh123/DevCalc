import { Calculator } from "@/src/types/calculator";

export const sukanyaSamriddhiCalculator: Calculator = {
  slug: "sukanya-samriddhi-calculator",

  name: "Sukanya Samriddhi Yojana Calculator",

  description:
    "Calculate the maturity corpus, total investment, and compounding interest earnings for the Sukanya Samriddhi Yojana (SSY) small savings scheme for a girl child under Ministry of Finance statutory rules.",

  category: "Finance",

  isPopular: true,

  editorialIntro:
    "Sukanya Samriddhi Yojana (SSY) is a sovereign-backed small savings scheme backed by the Government of India for the welfare of the girl child (under 10 years of age). Offering an 8.2% annual compounded interest rate with Exempt-Exempt-Exempt (EEE) tax status, deposits are required for 15 years while the corpus compounds through full maturity at 21 years from account opening.",

  benchmarkContext: {
    title: "Ministry of Finance Sukanya Samriddhi Scheme Rules",
    badge: "Government Sovereign Small Savings",
    stat: "8.2% p.a. Compounded Annually (Q4 FY 2024-25)",
    description:
      "Statutory parameters: Minimum deposit ₹250/year, Maximum ₹1,50,000/year (Section 80C deductible). Mandatory 15-year deposit period; complete maturity at 21 years or upon marriage after age 18. Interest and maturity proceeds are 100% tax-free under Section 10(11A).",
    source: "Department of Economic Affairs, Ministry of Finance (Notification G.S.R. 323(E))",
    lastUpdated: "January 2026",
  },

  compareWith: [
    "ppf-calculator",
    "sip-calculator",
    "fd-calculator",
    "retirement-calculator",
  ],

  seo: {
    title: "Sukanya Samriddhi Yojana Calculator - SSY Maturity Calculator",

    description:
      "Calculate Sukanya Samriddhi Yojana (SSY) maturity amount, investment, and tax-free interest earnings with latest official 8.2% government interest rates.",
    keywords: [
      "sukanya samriddhi calculator",
      "ssy calculator",
      "sukanya samriddhi yojana calculator",
      "ssy maturity calculator",
      "girl child savings calculator",
      "ssy interest calculator",
      "sukanya samriddhi yojana maturity amount",
      "ssy investment calculator",
      "ssy vs ppf calculator",
      "sukanya account calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Child Age",
      description: "Provide the current age of your girl child (must be under 10 years old).",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Annual Investment",
      description: "Input the total financial capital you plan to deposit each fiscal year (minimum ₹250, maximum ₹1.5 Lakh).",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Enter Interest Rate",
      description: "The calculation uses the officially declared government SSY interest rate per annum.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View Maturity Value",
      description: "Instantly analyze your complete wealth breakdown including net deposits, total accrued interest, and maturity corpus.",
      icon: "result",
    },
  ],

  formula: {
    title: "Sukanya Samriddhi Yojana Formula",

    formula: "Maturity Amount = \\sum_{n=1}^{15} P \\times (1 + r)^{21 - n} + \\text{Compounded Interest Accrued During Non-Contribution Period}",

    explanation:
      "The calculation assumes an investor makes regular deposits for the first 15 years. No further active deposits are permitted between years 16 and 21, but the accumulated principal balances continue to compound annually at the prevailing interest rate (r) until the structural maturity horizon of 21 years is reached.",

    example: {
      input: "Annual Investment: ₹1,50,000, Interest Rate: 8.2%, Investment Period: 15 Years",

      output: "The final maturity amount includes your 15 annual principal payments plus the total compounded compound interest accumulated over the full 21-year term.",
    },

    useCases: [
      "Girl child higher education fund planning",
      "Marriage expenses provisioning",
      "Long-term sovereign-guaranteed wealth creation",
      "Tax-saving portfolio optimization",
      "Goal-based family financial mapping",
    ],
  },

  faqs: [
    {
      question: "What exactly is Sukanya Samriddhi Yojana (SSY) and how does it benefit a girl child?",
      answer:
        "Sukanya Samriddhi Yojana (SSY) is a specialized, sovereign-backed small savings program launched by the Government of India under its core 'Beti Bachao Beti Padhao' campaign. Its primary structural design intent is to help parents and legal guardians accumulate a dedicated financial pool to fund a girl child's high-cost future milestones—specifically higher educational degrees and marriage expenses. Because it carries explicit government guarantees, the capital faces zero market risk. To incentivize long-term savings, the state uniformly prices SSY with premium interest rates that regularly outperform other traditional small-scale bank deposit structures, making it an foundational asset class for long-term child wellness planning.",
    },
    {
      question: "What are the strict age and family size eligibility parameters required to open an SSY account?",
      answer:
        "An SSY savings account can only be initialized by a biological parent or a legally appointed guardian from the day of the girl child's birth up until she reaches a maximum age threshold of exactly 10 years. From an administrative standpoint, a family is strictly restricted to opening a maximum of two independent SSY accounts per household (one for each daughter). However, an exception to this limit is granted under special medical scenarios—such as the birth of twin or triplet girls following an initial single female birth—provided valid certified medical documentation is submitted during account creation.",
    },
    {
      question: "What are the operational maximum and minimum annual deposit boundaries for an active SSY portfolio?",
      answer:
        "An active Sukanya Samriddhi Yojana account demands a highly accessible minimum contribution baseline of just ₹250 within a single financial year. On the upper end, the maximum combined deposit allowed inside a single fiscal year is capped at ₹1,50,000. This upper ceiling aligns perfectly with the standard statutory deduction limits specified under Section 80C of the Indian Income Tax framework. If a guardian accidentally deposits more than ₹1.5 Lakh within a single year, the excess capital does not earn any interest and can be withdrawn from the account without penalty.",
    },
    {
      question: "How do the active deposit tenure and the total maturity horizon timeline differ under SSY rules?",
      answer:
        "This is a common point of confusion for parents planning their long-term cash flows: the system features two completely different timelines for contributions and maturity. An investor is required to make active deposits into the SSY account for a fixed duration of exactly 15 years from the initial date the account was opened. Once this contribution window closes, the account is locked against further manual deposits. However, the account does not hit final maturity until a full 21-year horizon has passed from the original opening date. During this final 6-year gap, the accumulated principal balances remain completely untouched and continue to earn compounding interest annually.",
    },
    {
      question: "What are the specific conditions and limits for making premature withdrawals from an SSY account?",
      answer:
        "To protect the long-term compounding of the fund, partial premature withdrawals are heavily restricted and only unlock when the girl child crosses specific milestones. Once she turns 18 or completes her 10th standard educational metric, the guardian can apply to withdraw up to 50% of the accumulated balance from the preceding financial year. To successfully unlock these funds, the guardian must present formal proof of admission or a detailed fee structure from an accredited higher educational institution. These funds must be used directly to cover tuition fees or legitimate educational expenses.",
    },
    {
      question: "Is Sukanya Samriddhi Yojana a better investment option than a Public Provident Fund (PPF)?",
      answer:
        "If your primary financial goal is building a secure fund specifically for a daughter under 10 years old, SSY generally outpaces a standard PPF. From a pure numbers perspective, SSY consistently offers a higher interest rate than PPF. Furthermore, both options carry the same tax-free status on principal, interest, and maturity values. However, PPF provides superior liquidity, features a shorter 15-year maturity term, and is open to all individuals regardless of age or gender. For a holistic financial strategy, many families use SSY to anchor their daughter's core milestones while leveraging PPF or equity mutual fund SIPs to handle broader family goals.",
    },
  ],

  seoContent: `
<h2>The Strategic Role of Sukanya Samriddhi Yojana in Family Financial Engineering</h2>
<p>
  Securing the long-term financial future of a child requires moving beyond short-term savings accounts. With rising higher education costs and changing economic conditions, parents need to pick highly efficient, risk-adjusted investment options early. The <strong>Sukanya Samriddhi Yojana (SSY)</strong> provides an excellent foundation for this type of long-term planning, acting as a sovereign-backed investment vehicle designed specifically to protect a girl child's future.
</p>
<p>
  SSY operates under a clean, secure compounding structure that transforms small, regular contributions into a reliable financial cushion over a 21-year horizon. Utilizing an interactive <strong>Sukanya Samriddhi Yojana Calculator</strong> allows parents to model different investment scenarios, track interest accumulation across long timelines, and build an accurate roadmap for future educational milestones.
</p>

---

<h2>Comparative Structural Mapping: SSY vs. Public Provident Fund (PPF)</h2>
<p>
  While both platforms are backed by government guarantees and feature tax-saving benefits, they follow different structural rules and timelines. The table below outlines these key distinctions to help you optimize your asset allocation:
</p>

<table>
  <thead>
    <tr>
      <th>Operational Metric</th>
      <th>Sukanya Samriddhi Yojana (SSY)</th>
      <th>Public Provident Fund (PPF)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Target Eligibility Range</strong></td>
      <td>Restricted exclusively to a girl child under the age of 10.</td>
      <td>Open universally to all resident Indian citizens of any age.</td>
    </tr>
    <tr>
      <td><strong>Historical Interest Pricing</strong></td>
      <td>Premium tier pricing (consistently set higher than PPF levels).</td>
      <td>Standard tier pricing across small savings instruments.</td>
    </tr>
    <tr>
      <td><strong>Active Deposit Tenure</strong></td>
      <td>Requires active manual deposits for a fixed 15-year window.</td>
      <td>Requires active manual deposits for a fixed 15-year window.</td>
    </tr>
    <tr>
      <td><strong>Absolute Maturity Horizon</strong></td>
      <td>Matures exactly 21 years from the initial date of opening.</td>
      <td>Matures exactly 15 years from the initial date of opening.</td>
    </tr>
    <tr>
      <td><strong>Taxation Classification</strong></td>
      <td>Exempt-Exempt-Exempt (EEE) status across all asset phases.</td>
      <td>Exempt-Exempt-Exempt (EEE) status across all asset phases.</td>
    </tr>
  </tbody>
</table>

---

<h2>The Mathematics of Compounding: Deconstructing the SSY Calculation Loop</h2>
<p>
  The underlying value of an SSY account is driven by annual compounding interest. Because the interest rate is locked into a fixed compound progression, the timeline behaves like a financial annuity due for the first 15 years, followed by a pure compounding phase for the final 6 years.
</p>
<p>
  The accumulation pathway is split into two distinct mechanical phases:
</p>
<p>
  <strong>Phase 1: The Active Contribution Window (Years 1 to 15)</strong><br>
  During this stage, your annual deposits (P) are added to the existing balance, and the entire pool earns interest at the compounding rate (r):
</p>
<p align="center">\text{Balance}_{\text{Year } n} = (\text{Previous Balance} + P) \times (1 + r)</p>

<p>
  <strong>Phase 2: The Non-Contribution Compounding Window (Years 16 to 21)</strong><br>
  During this final stretch, no new manual inputs are allowed. The accumulated balance sits untouched, compounding annually for 6 years to maximize growth before maturity:
</p>
<p align="center">\text{Final Maturity Corpus} = \text{Balance}_{\text{Year 15}} \times (1 + r)^6</p>

---

<h2>The Long-Term Compounding Matrix: Projecting Future Value</h2>
<p>
  To see the long-term impact of compounding, observe how different fixed annual investment amounts scale over the full 21-year horizon, assuming a steady, illustrative baseline interest rate of <strong>8.2% per annum</strong>:
</p>

<table>
  <thead>
    <tr>
      <th>Fixed Annual Deposit Input</th>
      <th>Total Active Years Paid</th>
      <th>Cumulative Principal Capital Contributed</th>
      <th>Total Compounded Interest Gained</th>
      <th>Projected Final Maturity Corpus Valuation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>₹10,000</strong></td>
      <td align="center">15 Years</td>
      <td>₹1,50,000</td>
      <td>₹3,04,431</td>
      <td><strong>₹4,54,431</strong></td>
    </tr>
    <tr>
      <td><strong>₹25,000</strong></td>
      <td align="center">15 Years</td>
      <td>₹3,75,000</td>
      <td>₹7,61,078</td>
      <td><strong>₹11,36,078</strong></td>
    </tr>
    <tr>
      <td><strong>₹50,000</strong></td>
      <td align="center">15 Years</td>
      <td>₹7,50,000</td>
      <td>₹15,22,155</td>
      <td><strong>₹22,72,155</strong></td>
    </tr>
    <tr>
      <td><strong>₹1,00,000</strong></td>
      <td align="center">15 Years</td>
      <td>₹15,00,000</td>
      <td>₹30,44,310</td>
      <td><strong>₹45,44,310</strong></td>
    </tr>
    <tr>
      <td><strong>₹1,50,000 (Max Cap)</strong></td>
      <td align="center">15 Years</td>
      <td>₹22,50,000</td>
      <td>₹45,66,465</td>
      <td><strong>₹68,16,465</strong></td>
    </tr>
  </tbody>
</table>

---

<h2>Understanding Tax Benefits: The EEE Classification Scheme</h2>
<p>
  A major advantage of Sukanya Samriddhi Yojana is its highly tax-efficient structure. It holds the premier <strong>Exempt-Exempt-Exempt (EEE)</strong> designation under Indian tax laws, which removes tax liabilities across all stages of the investment:
</p>
<h3>1. Exempt Principal Entry</h3>
<p>
  Every rupee you contribute to the account within the fiscal year can be claimed as a direct deduction from your taxable income under Section 80C, up to a maximum cap of ₹1.5 Lakh.
</p>
<h3>2. Exempt Interest Accumulation</h3>
<p>
  As your capital grows year after year, the compounding interest credited to your account balance remains completely free from annual income tax or Tax Deducted at Source (TDS).
</p>
<h3>3. Exempt Maturity Payback</h3>
<p>
  When the account hits its 21-year maturity horizon and the final corpus is paid out, the entire lump sum is completely exempt from income tax, protecting your savings when it comes time to fund major milestones.
</p>
`,
};