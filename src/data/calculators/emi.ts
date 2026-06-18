import { Calculator } from "@/src/types/calculator";

export const emiCalculator: Calculator = {
  slug: "emi-calculator",

  name: "EMI Calculator",

  description:
    "Calculate monthly EMI, total interest payable, and total loan repayment amount instantly.",

  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "EMI Calculator India - Calculate Loan EMI Online",

    description:
      "Calculate loan EMI instantly. Enter loan amount, interest rate, and tenure to get monthly EMI, total interest payable, and total repayment amount.",

    keywords: [
      "emi calculator",
      "loan emi calculator",
      "emi calculator india",
      "monthly emi calculator",
      "home loan emi calculator",
      "personal loan emi calculator",
      "car loan emi calculator",
      "loan repayment calculator",
      "emi calculation",
      "bank loan emi calculator",
      "finance calculator",
      "emi calculator 2026",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Loan Amount",
      description:
        "Provide the total loan amount you wish to borrow.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Interest Rate",
      description:
        "Enter the annual interest rate offered by the lender.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Select Loan Tenure",
      description:
        "Choose the loan duration in years.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View EMI Results",
      description:
        "Get monthly EMI, total interest, and total repayment amount.",
      icon: "result",
    },
  ],

  compareWith: [
  "income-tax-calculator",
  "hra-calculator",
  "inflation-calculator",
],

  formula: {
    title: "EMI Formula",

    formula:
      "EMI = P × R × (1 + R)^N / ((1 + R)^N − 1)",

    explanation:
      "EMI (Equated Monthly Installment) is calculated using the principal loan amount, monthly interest rate, and number of monthly installments.",

    example: {
      input:
        "Loan Amount: ₹10,00,000, Interest Rate: 8%, Tenure: 20 Years",

      output:
        "Monthly EMI ≈ ₹8,364",
    },

    useCases: [
      "Home Loans",
      "Car Loans",
      "Personal Loans",
      "Education Loans",
      "Business Loans",
    ],
  },

  faqs: [
{
question: "How is EMI calculated for a loan?",
answer:
"EMI (Equated Monthly Installment) is calculated using the loan amount, interest rate, and loan tenure. The EMI formula considers both principal repayment and interest payments over the loan period. Higher loan amounts and interest rates increase EMI, while longer loan tenures reduce EMI but increase the total interest paid. Using an EMI calculator helps borrowers estimate monthly payments before applying for a home loan, car loan, personal loan, or education loan."
},

{
question: "What is the difference between fixed and floating interest rates?",
answer:
"A fixed interest rate remains unchanged throughout the loan tenure, making monthly EMI payments predictable. A floating interest rate changes based on market conditions and benchmark lending rates set by banks or financial institutions. Fixed rates provide stability and easier budgeting, while floating rates may offer lower costs if interest rates fall. Borrowers should compare both options based on their risk tolerance and expected interest rate trends."
},

{
question: "How can I reduce my EMI amount?",
answer:
"There are several ways to reduce your EMI. Increasing the loan tenure spreads repayment over a longer period and lowers monthly payments. Making a larger down payment reduces the principal amount borrowed. Negotiating a lower interest rate with the lender can also significantly reduce EMI. Existing borrowers may consider refinancing or transferring their loan to another lender offering a lower rate. However, extending the tenure usually increases the total interest paid over the life of the loan."
},

{
question: "What happens if I miss an EMI payment?",
answer:
"Missing an EMI payment can result in late payment charges, penalties, and a negative impact on your credit score. Repeated defaults may lead to loan recovery actions by the lender and make it harder to obtain future credit. Most lenders offer a grace period, but borrowers should contact the lender immediately if they anticipate repayment difficulties. Maintaining timely EMI payments helps preserve a healthy credit profile and financial reputation."
},

{
question: "Is a longer loan tenure always better?",
answer:
"A longer loan tenure reduces monthly EMI payments and improves affordability, but it increases the total interest paid over the loan period. A shorter tenure results in higher EMIs but allows borrowers to become debt-free sooner and save on interest costs. The ideal tenure depends on income stability, financial goals, and repayment capacity. Borrowers should strike a balance between affordable EMIs and minimizing total interest expenses."
},

{
question: "How much salary is required for a ₹10 lakh loan?",
answer:
"The required salary depends on the loan type, interest rate, tenure, and lender's eligibility criteria. Most lenders prefer that total EMI obligations do not exceed 40% to 50% of a borrower's monthly income. For example, if the EMI for a ₹10 lakh loan is around ₹12,000 per month, lenders may expect a monthly income of ₹25,000 to ₹35,000 or more. Eligibility varies across banks and financial institutions."
},

{
question: "Can I prepay my loan and save interest?",
answer:
"Yes. Loan prepayment allows borrowers to reduce the outstanding principal amount before the scheduled repayment period. Since interest is calculated on the remaining principal balance, prepaying a loan can significantly reduce total interest costs and shorten the loan tenure. Many home loans allow partial prepayments without penalties, while some personal and business loans may impose charges. Always check the lender's prepayment policy before making extra payments."
},

{
question: "Which loans can be calculated using an EMI calculator?",
answer:
"An EMI calculator can be used for home loans, personal loans, car loans, education loans, business loans, gold loans, and most other installment-based borrowing products. By adjusting the loan amount, interest rate, and tenure, borrowers can compare repayment options and choose a loan structure that best fits their budget and financial goals."
}
],

  seoContent: `
<h2>Understanding EMI</h2>

<p>
EMI (Equated Monthly Installment) is the fixed amount paid every month to repay a loan. It consists of both principal repayment and interest charged by the lender.
</p>

<h2>EMI Components</h2>

<table>
  <tr>
    <th>Component</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Principal</td>
    <td>The actual loan amount borrowed.</td>
  </tr>
  <tr>
    <td>Interest</td>
    <td>The cost charged by the lender.</td>
  </tr>
  <tr>
    <td>EMI</td>
    <td>Monthly payment combining principal and interest.</td>
  </tr>
</table>

<h2>How to Reduce Your EMI</h2>

<ul>
  <li><strong>Increase Down Payment:</strong> Borrow less and reduce EMI.</li>
  <li><strong>Choose Longer Tenure:</strong> Spreads payments over more months.</li>
  <li><strong>Improve Credit Score:</strong> May help secure lower interest rates.</li>
  <li><strong>Compare Lenders:</strong> Even a small rate difference can save money.</li>
</ul>

<h2>Loan Tenure Comparison</h2>

<table>
  <tr>
    <th>Tenure</th>
    <th>EMI</th>
    <th>Total Interest Paid</th>
  </tr>
  <tr>
    <td>5 Years</td>
    <td>Higher</td>
    <td>Lower</td>
  </tr>
  <tr>
    <td>10 Years</td>
    <td>Moderate</td>
    <td>Moderate</td>
  </tr>
  <tr>
    <td>20 Years</td>
    <td>Lower</td>
    <td>Higher</td>
  </tr>
</table>

<h2>Home Loan vs Personal Loan</h2>

<table>
  <tr>
    <th>Feature</th>
    <th>Home Loan</th>
    <th>Personal Loan</th>
  </tr>
  <tr>
    <td>Interest Rate</td>
    <td>Usually Lower</td>
    <td>Usually Higher</td>
  </tr>
  <tr>
    <td>Tenure</td>
    <td>Up to 30 Years</td>
    <td>Up to 7 Years</td>
  </tr>
  <tr>
    <td>Collateral</td>
    <td>Required</td>
    <td>Not Required</td>
  </tr>
</table>

<h2>Benefits of Prepayment</h2>

<p>
Making extra payments towards your loan principal can significantly reduce the total interest paid and shorten the loan tenure. Even small annual prepayments can save thousands in interest.
</p>

<h2>Ideal EMI Percentage of Income</h2>

<table>
  <tr>
    <th>Monthly Income Usage</th>
    <th>Recommendation</th>
  </tr>
  <tr>
    <td>Below 30%</td>
    <td>Excellent</td>
  </tr>
  <tr>
    <td>30% - 40%</td>
    <td>Acceptable</td>
  </tr>
  <tr>
    <td>Above 50%</td>
    <td>Risky</td>
  </tr>
</table>

<h2>Common Loan Mistakes</h2>

<ul>
  <li><strong>Ignoring Processing Fees:</strong> Check total loan costs.</li>
  <li><strong>Choosing EMI Only:</strong> Consider total interest paid.</li>
  <li><strong>Skipping Rate Comparison:</strong> Compare multiple lenders.</li>
  <li><strong>Borrowing Maximum Eligibility:</strong> Borrow only what you need.</li>
</ul>

<h2>Pro Tip</h2>

<p>
Before taking a loan, use an EMI Calculator to compare different loan amounts, interest rates, and tenures. A slightly higher EMI with a shorter tenure can save a substantial amount in interest.
</p>
`,
};