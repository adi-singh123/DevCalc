import { Calculator } from "@/src/types/calculator";

export const sukanyaSamriddhiCalculator: Calculator = {
  slug: "sukanya-samriddhi-calculator",

  name: "Sukanya Samriddhi Yojana Calculator",

  description:
    "Calculate Sukanya Samriddhi Yojana (SSY) maturity amount, total investment, interest earned, and future corpus for your girl child using the latest SSY interest rates.",

  category: "Finance",

  isPopular: true,

  compareWith: [
    "ppf-calculator",
    "sip-calculator",
    "fd-calculator",
    "retirement-calculator",
  ],

  seo: {
    title:
      "Sukanya Samriddhi Yojana Calculator - SSY Maturity Calculator",

    description:
      "Calculate Sukanya Samriddhi Yojana maturity amount, total investment, interest earned, and account value using the latest SSY interest rate.",

    keywords: [
      "sukanya samriddhi calculator",
      "ssy calculator",
      "sukanya yojana calculator",
      "ssy maturity calculator",
      "girl child savings calculator",
      "sukanya samriddhi yojana maturity amount",
      "ssy interest calculator",
      "ssy return calculator",
      "sukanya scheme calculator",
      "government savings scheme calculator",
      "ssy investment calculator",
      "sukanya account calculator",
      "ssy maturity value",
      "ssy savings calculator",
      "sukanya samriddhi scheme calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Child Age",
      description:
        "Provide the current age of the girl child.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Annual Investment",
      description:
        "Enter the amount you plan to invest every year.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Enter Interest Rate",
      description:
        "Use the current SSY interest rate or customize it.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Maturity Value",
      description:
        "Get total investment, interest earned, and maturity corpus.",
      icon: "result",
    },
  ],

  formula: {
    title: "Sukanya Samriddhi Yojana Formula",

    formula:
      "Maturity Amount = Annual Deposits + Compounded Interest Earned",

    explanation:
      "Sukanya Samriddhi Yojana earns interest through annual compounding. Deposits can be made for up to 15 years, while the account matures after 21 years from the date of opening.",

    example: {
      input:
        "Annual Investment: ₹1,50,000, Interest Rate: 8.2%, Investment Period: 15 Years",

      output:
        "The maturity amount will include total deposits and compounded interest accumulated until maturity.",
    },

    useCases: [
      "Girl child education planning",
      "Marriage planning",
      "Long-term savings",
      "Tax-saving investment",
      "Government-backed savings",
      "Financial planning for parents",
    ],
  },

  faqs: [
    {
      question:
        "What is Sukanya Samriddhi Yojana (SSY)?",

      answer:
        "Sukanya Samriddhi Yojana is a government-backed savings scheme designed to encourage long-term savings for the education and future needs of a girl child.",
    },

    {
      question:
        "Who can open an SSY account?",

      answer:
        "A parent or legal guardian can open an SSY account for a girl child below the age of 10 years.",
    },

    {
      question:
        "What is the maximum investment allowed in SSY?",

      answer:
        "Currently, the maximum annual investment allowed in a Sukanya Samriddhi Yojana account is ₹1.5 lakh.",
    },

    {
      question:
        "How long can I contribute to SSY?",

      answer:
        "Deposits can be made for 15 years from the account opening date, while the account matures after 21 years.",
    },

    {
      question:
        "Can money be withdrawn before maturity?",

      answer:
        "Partial withdrawal is allowed under specific conditions, including higher education expenses after the girl child reaches the prescribed age.",
    },

    {
      question:
        "What happens when the girl child turns 18?",

      answer:
        "Partial withdrawals may become available for educational purposes subject to scheme rules.",
    },

    {
      question:
        "Is SSY better than PPF?",

      answer:
        "SSY often provides a higher interest rate than PPF and is specifically designed for girl child savings, while PPF is available to all individuals.",
    },

    {
      question:
        "Does SSY provide tax benefits?",

      answer:
        "Yes. Investments in SSY qualify for tax benefits under Section 80C, subject to applicable tax laws.",
    },

    {
      question:
        "What is the maturity period of SSY?",

      answer:
        "The account matures 21 years from the date of opening or upon certain eligible conditions specified by the scheme.",
    },
  ],

  seoContent: `
<h2>What Is Sukanya Samriddhi Yojana?</h2>

<p>
Sukanya Samriddhi Yojana (SSY) is a government-backed savings scheme launched under the Beti Bachao Beti Padhao initiative. It is designed to help parents build a financial corpus for their daughter’s future education and marriage expenses.
</p>

<h2>Key Features of SSY</h2>

<table>
<tr>
<th>Feature</th>
<th>Details</th>
</tr>
<tr>
<td>Eligibility</td>
<td>Girl Child Below 10 Years</td>
</tr>
<tr>
<td>Maximum Investment</td>
<td>₹1.5 Lakh Per Year</td>
</tr>
<tr>
<td>Deposit Period</td>
<td>15 Years</td>
</tr>
<tr>
<td>Maturity Period</td>
<td>21 Years</td>
</tr>
<tr>
<td>Risk Level</td>
<td>Government Backed</td>
</tr>
</table>

<h2>Benefits of Sukanya Samriddhi Yojana</h2>

<ul>
<li>Government-backed security.</li>
<li>Competitive interest rates.</li>
<li>Long-term wealth creation for a girl child.</li>
<li>Tax benefits under Section 80C.</li>
<li>Encourages disciplined savings.</li>
</ul>

<h2>How SSY Maturity Is Calculated</h2>

<p>
The maturity amount depends on annual deposits, the applicable interest rate, and the duration of the investment. Interest is compounded annually, helping the investment grow significantly over the long term.
</p>

<h2>SSY vs PPF</h2>

<table>
<tr>
<th>Feature</th>
<th>SSY</th>
<th>PPF</th>
</tr>
<tr>
<td>Eligibility</td>
<td>Girl Child Only</td>
<td>All Individuals</td>
</tr>
<tr>
<td>Maximum Deposit</td>
<td>₹1.5 Lakh</td>
<td>₹1.5 Lakh</td>
</tr>
<tr>
<td>Maturity</td>
<td>21 Years</td>
<td>15 Years</td>
</tr>
<tr>
<td>Purpose</td>
<td>Girl Child Savings</td>
<td>General Savings</td>
</tr>
</table>

<h2>Eligibility Criteria</h2>

<ul>
<li>The girl child must be below 10 years of age.</li>
<li>Only one account per girl child is allowed.</li>
<li>A maximum of two accounts can generally be opened per family.</li>
</ul>

<h2>Tax Benefits Under Section 80C</h2>

<p>
Contributions made to Sukanya Samriddhi Yojana qualify for deductions under Section 80C. Interest earned and maturity proceeds are also eligible for tax benefits as per prevailing regulations.
</p>

<h2>Withdrawal Rules</h2>

<ul>
<li>Partial withdrawals may be allowed for higher education.</li>
<li>Premature closure is permitted only under specific circumstances.</li>
<li>Full maturity benefits are available after the completion of the scheme period.</li>
</ul>

<h2>Why Use an SSY Calculator?</h2>

<p>
An SSY Calculator helps estimate future corpus value, total deposits, and interest earnings. It simplifies financial planning and helps parents understand how regular investments can support long-term goals for their daughter.
</p>
`,
};