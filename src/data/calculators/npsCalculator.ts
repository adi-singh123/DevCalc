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
      question:
        "What is NPS?",
      answer:
        "National Pension System (NPS) is a government-backed retirement savings scheme that helps individuals build a retirement corpus through regular contributions.",
    },

    {
      question:
        "Who can invest in NPS?",
      answer:
        "Any Indian citizen meeting the eligibility requirements can open an NPS account and contribute towards retirement savings.",
    },

    {
      question:
        "How is NPS maturity amount calculated?",
      answer:
        "The maturity amount depends on monthly contributions, investment duration, expected returns, and compounding over the investment period.",
    },

    {
      question:
        "Can I withdraw money before retirement?",
      answer:
        "Partial withdrawals are allowed under certain conditions, subject to NPS rules and regulations.",
    },

    {
      question:
        "What happens at retirement?",
      answer:
        "A portion of the corpus can generally be withdrawn as a lump sum, while the remaining amount is used to purchase an annuity for pension income.",
    },

    {
      question:
        "Is NPS a safe investment?",
      answer:
        "NPS is regulated and managed under government guidelines, making it a popular retirement planning option.",
    },

    {
      question:
        "Does NPS provide tax benefits?",
      answer:
        "Yes. NPS investments may qualify for tax deductions under applicable sections of the Income Tax Act.",
    },

    {
      question:
        "How much pension can I receive from NPS?",
      answer:
        "The pension amount depends on your accumulated corpus, annuity purchase percentage, and prevailing annuity rates.",
    },

    {
      question:
        "Is NPS better than PPF?",
      answer:
        "NPS and PPF serve different purposes. NPS focuses on retirement planning and pension generation, while PPF is primarily a long-term savings scheme.",
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