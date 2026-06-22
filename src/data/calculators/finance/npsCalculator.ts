import { Calculator } from "@/src/types/calculator";

export const npsCalculator: Calculator = {
  slug: "nps-calculator",

  name: "NPS Calculator",

  description:
    "Calculate NPS maturity amount, retirement corpus, lump sum withdrawal, annuity value, and estimated monthly pension using the National Pension System.",

  category: "Finance",

  isPopular: true,

  compareWith: [
    "epf-calculator",
    "ppf-calculator",
    "retirement-calculator",
    "sip-calculator",
  ],

  seo: {
    title:
      "NPS Calculator - National Pension System Calculator",

    description:
      "Calculate NPS maturity amount, retirement corpus, lump sum withdrawal, annuity value, and monthly pension using the National Pension System.",

    keywords: [
      "nps calculator",
      "national pension system calculator",
      "nps maturity calculator",
      "nps pension calculator",
      "nps corpus calculator",
      "nps retirement calculator",
      "nps return calculator",
      "nps withdrawal calculator",
      "retirement pension calculator",
      "government pension calculator",
      "monthly pension calculator",
      "retirement corpus calculator",
      "nps scheme calculator",
      "nps investment calculator",
      "annuity calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Current Age",
      description:
        "Provide your current age and retirement age.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Monthly Contribution",
      description:
        "Specify the amount you contribute to NPS every month.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Enter Expected Return",
      description:
        "Choose your expected annual return rate.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Retirement Corpus",
      description:
        "Get pension estimates, annuity value, and retirement corpus.",
      icon: "result",
    },
  ],

  formula: {
    title: "NPS Calculator Formula",

    formula:
      "Future Value = Monthly Contribution × Compounded Growth Until Retirement",

    explanation:
      "The National Pension System (NPS) allows individuals to invest regularly for retirement. Contributions grow through compounding over time, helping build a retirement corpus. At retirement, a portion can be withdrawn as a lump sum while the remaining amount is used to purchase an annuity for pension income.",

    example: {
      input:
        "Monthly Contribution: ₹5,000, Expected Return: 10%, Investment Period: 30 Years",

      output:
        "The calculator estimates retirement corpus, lump sum withdrawal, and monthly pension based on your inputs.",
    },

    useCases: [
      "Retirement planning",
      "Pension planning",
      "Long-term wealth creation",
      "Government-backed retirement savings",
      "Retirement corpus estimation",
      "Monthly pension estimation",
    ],
  },

 faqs: [
  {
    question: "What is the National Pension System (NPS)?",
    answer:
      "The National Pension System (NPS) is a government-backed retirement savings scheme designed to help individuals build a retirement corpus through regular contributions. NPS is regulated by the Pension Fund Regulatory and Development Authority (PFRDA) and is available to salaried employees, self-employed individuals, and business owners. Contributions are invested across equity, corporate debt, government securities, and alternative assets based on the investor's chosen allocation. The accumulated corpus grows over time through market-linked returns and can provide financial security during retirement."
  },

  {
    question: "How does NPS help in retirement planning?",
    answer:
      "NPS encourages disciplined long-term investing by allowing individuals to make regular contributions throughout their working years. Since investments remain active for decades, investors benefit from compounding and long-term market growth. At retirement, a portion of the accumulated corpus can be withdrawn as a lump sum, while the remaining amount is generally used to purchase an annuity that provides a regular pension income. This combination helps create a stable source of income after retirement."
  },

  {
    question: "What are the tax benefits of NPS?",
    answer:
      "NPS offers some of the most attractive tax benefits available under Indian tax laws. Contributions qualify for deductions under Section 80CCD(1), which falls within the Section 80C limit, and an additional deduction of up to ₹50,000 under Section 80CCD(1B). Employer contributions may also qualify for separate tax benefits under certain conditions. These deductions can significantly reduce taxable income while simultaneously helping investors build a retirement corpus."
  },

  {
    question: "Which is better: NPS or EPF?",
    answer:
      "NPS and EPF are both retirement-focused investments, but they operate differently. EPF provides relatively stable returns and is primarily available to salaried employees. NPS is market-linked and offers potentially higher long-term growth because of equity exposure. EPF is often preferred for stability, while NPS is popular among investors seeking greater retirement corpus growth. Many financial planners recommend using both together for a balanced retirement strategy."
  },

  {
    question: "Can NPS generate higher returns than Fixed Deposits?",
    answer:
      "Historically, NPS has often delivered higher long-term returns than traditional Fixed Deposits because part of the investment is allocated to equity markets. While FD returns are fixed and predictable, NPS returns vary based on market performance. Over long investment periods such as 20–30 years, NPS has generally provided better wealth accumulation potential, although returns are not guaranteed."
  },

  {
    question: "Can I withdraw money from NPS before retirement?",
    answer:
      "Yes. NPS allows partial withdrawals under specific conditions such as higher education, marriage, home purchase, or medical emergencies. However, withdrawal rules are regulated and certain restrictions apply. Premature exits before retirement may also have limitations regarding lump-sum withdrawals and annuity purchases. Investors should review the latest NPS withdrawal guidelines before making financial decisions."
  },

  {
    question: "How much should I invest in NPS every month?",
    answer:
      "The ideal monthly NPS contribution depends on retirement goals, current age, expected retirement age, and desired post-retirement income. Starting early generally allows investors to contribute smaller amounts while still building a large corpus through compounding. Many financial advisors recommend increasing NPS contributions periodically as income grows to maximize retirement savings."
  },

  {
    question: "Is NPS suitable for young investors?",
    answer:
      "Yes. NPS can be particularly beneficial for young investors because they have a long investment horizon. Longer investment periods allow greater participation in equity markets and provide more time for compounding to work. Starting NPS contributions in your 20s or early 30s can significantly increase the retirement corpus compared to starting later in life."
  }
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