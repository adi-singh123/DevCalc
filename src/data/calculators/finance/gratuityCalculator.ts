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
    question: "What is gratuity and why is it paid to employees?",
    answer:
      "Gratuity is a lump-sum financial benefit paid by an employer to an employee as a reward for long-term service. It is governed by the Payment of Gratuity Act, 1972, and is intended to provide financial security when an employee leaves an organization due to retirement, resignation, disability, or other qualifying circumstances. Gratuity is calculated based on the employee's last drawn salary and years of continuous service. It acts as a form of appreciation for loyalty and commitment and can become a significant part of an employee's retirement corpus."
  },

  {
    question: "Who is eligible to receive gratuity?",
    answer:
      "Under the Payment of Gratuity Act, employees generally become eligible for gratuity after completing at least five years of continuous service with the same employer. However, the five-year requirement may not apply in cases involving death or permanent disability. Both private-sector and public-sector employees working in eligible establishments can qualify for gratuity benefits. Continuous service includes approved leave, sickness, accidents, and other situations recognized under employment laws."
  },

  {
    question: "How is gratuity calculated?",
    answer:
      "For employees covered under the Payment of Gratuity Act, gratuity is generally calculated using the formula: Gratuity = (Last Drawn Salary × 15 × Years of Service) ÷ 26. Here, the last drawn salary typically includes basic salary and dearness allowance. The number 26 represents the average working days in a month. The higher the salary and years of service, the larger the gratuity amount. A gratuity calculator helps estimate this amount instantly without manual calculations."
  },

  {
    question: "Can I receive gratuity if I resign from my job?",
    answer:
      "Yes. Employees who resign after completing the minimum qualifying service period are generally eligible to receive gratuity from their employer. The gratuity amount is calculated based on the employee's final salary and years of service. However, employees who resign before completing the required service period may not qualify for gratuity except under special circumstances such as disability or specific legal provisions."
  },

  {
    question: "Is gratuity taxable in India?",
    answer:
      "The tax treatment of gratuity depends on the employee category and the amount received. Government employees generally receive fully tax-exempt gratuity. For private-sector employees, tax exemptions are available up to prescribed limits under the Income Tax Act. Any gratuity amount exceeding the exemption threshold may become taxable. Tax rules can change over time, so employees should verify the latest provisions before retirement or resignation."
  },

  {
    question: "What happens to gratuity if I change jobs frequently?",
    answer:
      "Gratuity eligibility is usually linked to continuous service with a specific employer. If an employee changes jobs before completing the minimum service requirement, gratuity benefits from that employer may not become payable. Frequent job changes can therefore reduce opportunities to accumulate gratuity benefits. Employees should consider long-term career plans and employment benefits when evaluating job transitions."
  },

  {
    question: "Can an employer refuse to pay gratuity?",
    answer:
      "An employer generally cannot refuse gratuity if an employee satisfies the eligibility requirements under applicable laws. However, gratuity may be partially or fully forfeited in limited circumstances involving serious misconduct, fraud, theft, violence, or actions causing significant financial damage to the employer. Such situations are governed by specific legal provisions and are subject to employment laws and judicial review."
  },

  {
    question: "Why should I use a gratuity calculator?",
    answer:
      "A gratuity calculator helps employees estimate their expected gratuity amount instantly based on salary and years of service. This information can assist with retirement planning, financial goal setting, job transition decisions, and long-term wealth management. By understanding future gratuity benefits, employees can better plan investments, emergency funds, and retirement income strategies."
  }
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