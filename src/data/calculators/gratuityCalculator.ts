import { Calculator } from "@/src/types/calculator";

export const gratuityCalculator: Calculator = {
  slug: "gratuity-calculator",

  name: "Gratuity Calculator",

  description:
    "Calculate gratuity amount based on your last drawn salary and years of service. Estimate gratuity benefits instantly using the official gratuity formula.",

  category: "Finance",

  isPopular: true,

  compareWith: [
    "nps-calculator",
    "epf-calculator",
    "retirement-calculator",
    "salary-calculator",
  ],

  seo: {
    title:
      "Gratuity Calculator - Calculate Employee Gratuity Amount",

    description:
      "Calculate gratuity amount based on your last drawn salary and years of service. Estimate gratuity benefits instantly using the gratuity formula.",

    keywords: [
      "gratuity calculator",
      "gratuity amount calculator",
      "employee gratuity calculator",
      "gratuity calculation",
      "gratuity formula",
      "retirement gratuity calculator",
      "gratuity benefit calculator",
      "india gratuity calculator",
      "salary gratuity calculator",
      "gratuity eligibility calculator",
      "gratuity calculator india",
      "gratuity estimate calculator",
      "gratuity payout calculator",
      "last drawn salary gratuity calculator",
      "years of service gratuity calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Last Salary",
      description:
        "Provide your last drawn basic salary plus dearness allowance.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Years of Service",
      description:
        "Enter the total number of years worked with your employer.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Calculate Gratuity",
      description:
        "Apply the gratuity formula to estimate your benefit amount.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Results",
      description:
        "See gratuity amount, eligibility, and estimated benefit instantly.",
      icon: "result",
    },
  ],

  formula: {
    title: "Gratuity Formula",

    formula:
      "Gratuity = (Last Drawn Salary × 15 × Years of Service) ÷ 26",

    explanation:
      "Gratuity is a retirement benefit paid by an employer to eligible employees who have completed at least five years of continuous service. The gratuity amount is calculated using the employee's last drawn basic salary plus dearness allowance and total years of service.",

    example: {
      input:
        "Last Salary: ₹50,000, Years of Service: 10",

      output:
        "Gratuity = (50,000 × 15 × 10) ÷ 26 = ₹2,88,462",
    },

    useCases: [
      "Retirement planning",
      "Job change planning",
      "Employee benefit estimation",
      "Financial planning",
      "Corporate HR calculations",
      "Retirement corpus estimation",
    ],
  },

  faqs: [
    {
      question:
        "What is gratuity?",

      answer:
        "Gratuity is a lump-sum benefit paid by an employer to an employee as a reward for long-term service and loyalty to the organization.",
    },

    {
      question:
        "Who is eligible for gratuity?",

      answer:
        "Generally, employees who have completed at least five years of continuous service with the same employer are eligible for gratuity benefits.",
    },

    {
      question:
        "How is gratuity calculated?",

      answer:
        "Gratuity is calculated using the formula: (Last Drawn Salary × 15 × Years of Service) ÷ 26.",
    },

    {
      question:
        "What salary is used for gratuity calculation?",

      answer:
        "Gratuity is typically calculated using the employee's last drawn basic salary plus dearness allowance (DA).",
    },

    {
      question:
        "Is gratuity taxable?",

      answer:
        "Tax treatment of gratuity depends on applicable tax laws, employee category, and exemption limits available at the time of payment.",
    },

    {
      question:
        "Can gratuity be received before retirement?",

      answer:
        "Yes. Eligible employees may receive gratuity when resigning, retiring, superannuating, or under certain other employment termination conditions.",
    },

    {
      question:
        "What happens if I work less than five years?",

      answer:
        "Generally, gratuity is payable after five years of continuous service, although certain exceptions may apply under specific circumstances.",
    },

    {
      question:
        "Is gratuity paid by the employer?",

      answer:
        "Yes. Gratuity is paid directly by the employer as a statutory employee benefit.",
    },

    {
      question:
        "Can gratuity help in retirement planning?",

      answer:
        "Yes. Gratuity can form an important part of an individual's retirement corpus and financial security.",
    },
  ],

  seoContent: `
<h2>What Is Gratuity?</h2>

<p>
Gratuity is a financial benefit provided by employers to employees as a reward for long-term service. It is commonly paid when an employee retires, resigns, or leaves an organization after completing the required period of service.
</p>

<h2>Who Is Eligible for Gratuity?</h2>

<p>
In most cases, employees become eligible for gratuity after completing at least five years of continuous service with the same employer. Eligibility rules may vary depending on employment conditions and applicable regulations.
</p>

<h2>Gratuity Formula</h2>

<table>
<tr>
<th>Component</th>
<th>Value</th>
</tr>
<tr>
<td>Last Drawn Salary</td>
<td>Basic Salary + Dearness Allowance</td>
</tr>
<tr>
<td>Working Days</td>
<td>26 Days</td>
</tr>
<tr>
<td>Benefit Rate</td>
<td>15 Days Salary Per Year</td>
</tr>
</table>

<h2>Benefits of Gratuity</h2>

<ul>
<li>Provides financial security after leaving employment.</li>
<li>Acts as a retirement benefit.</li>
<li>Rewards employee loyalty and long service.</li>
<li>Can supplement retirement savings and pension income.</li>
<li>Supports long-term financial planning.</li>
</ul>

<h2>Example Gratuity Calculation</h2>

<table>
<tr>
<th>Last Salary</th>
<th>Years of Service</th>
<th>Estimated Gratuity</th>
</tr>
<tr>
<td>₹30,000</td>
<td>5 Years</td>
<td>₹86,538</td>
</tr>
<tr>
<td>₹50,000</td>
<td>10 Years</td>
<td>₹2,88,462</td>
</tr>
<tr>
<td>₹75,000</td>
<td>15 Years</td>
<td>₹6,49,038</td>
</tr>
</table>

<h2>Factors Affecting Gratuity Amount</h2>

<ul>
<li>Last drawn salary.</li>
<li>Total years of service.</li>
<li>Employment category.</li>
<li>Applicable gratuity regulations.</li>
<li>Organization policies.</li>
</ul>

<h2>Gratuity vs Pension</h2>

<table>
<tr>
<th>Feature</th>
<th>Gratuity</th>
<th>Pension</th>
</tr>
<tr>
<td>Payment Type</td>
<td>One-Time Lump Sum</td>
<td>Regular Income</td>
</tr>
<tr>
<td>Source</td>
<td>Employer</td>
<td>Pension Scheme</td>
</tr>
<tr>
<td>Purpose</td>
<td>Service Benefit</td>
<td>Retirement Income</td>
</tr>
</table>

<h2>Why Use a Gratuity Calculator?</h2>

<p>
A gratuity calculator helps employees estimate their retirement benefits quickly and accurately. It simplifies financial planning and provides a clear understanding of the gratuity amount they may receive based on salary and years of service.
</p>
`,
};