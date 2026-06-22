import { Calculator } from "@/src/types/calculator";

export const emiCalculator: Calculator = {
  slug: "emi-calculator",

  name: "EMI Calculator",

  description:
    "Calculate monthly EMI, total interest payable, and total loan repayment amount instantly. Plan home loans, car loans, and personal loans with accurate amortization breakdowns.",

  category: "Finance",

  isPopular: true,

  seo: {
    title: "EMI Calculator India - Calculate Loan EMI Online",

    description:
      "Calculate loan EMI instantly. Enter your loan amount, interest rate, and tenure to get monthly EMI, total interest payable, and total repayment amount.",

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
      description: "Input the total principal capital you intend to borrow from the financial institution.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Interest Rate",
      description: "Enter the annual interest rate (ROI %) offered by the lender.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Select Loan Tenure",
      description: "Specify the complete repayment duration expressed in years or months.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View Amortization Results",
      description: "Instantly analyze your monthly installment value, gross interest accumulation, and total cost.",
      icon: "result",
    },
  ],

  compareWith: [
    "income-tax-calculator",
    "hra-calculator",
    "inflation-calculator",
  ],

  formula: {
    title: "EMI Calculation Formula",

    formula: "EMI = P \\times R \\times \\frac{(1 + R)^N}{(1 + R)^N - 1}",

    explanation:
      "The Equated Monthly Installment (EMI) formula relies on standard reducing balance math. The periodic interest rate (R) is derived by scaling down the annual rate to a monthly fraction (R = \\text{Annual Rate} \\div 12 \\div 100), while the number of installments (N) equals the total tenure in months.",

    example: {
      input: "Loan Amount (P): ₹10,00,000, Interest Rate: 8% per annum, Tenure: 20 Years (240 Months)",

      output: "Monthly EMI ≈ ₹8,364, Total Repayment: ₹20,07,456, Net Interest: ₹10,07,456",
    },

    useCases: [
      "Home Loan Amortization Planning",
      "Vehicle & Car Loan Budgeting",
      "Unsecured Personal Loan Structuring",
      "Academic/Education Loan Projections",
      "Commercial Business Loan Evaluation",
    ],
  },

  faqs: [
    {
      question: "What exactly is an EMI, and how is its internal balance structured over time?",
      answer:
        "EMI stands for Equated Monthly Installment. It is a fixed, unchanging amount paid to a bank or financial institution at a specific date every month until the loan is fully paid off. Every individual EMI payment is split into two components: an interest payment and a principal repayment. In the early stages of your loan timeline, a large portion of your monthly payment goes toward covering the interest charges because the outstanding balance is high. As you continue to pay down the principal balance over time, the interest portion shrinks, and more of your money goes directly toward clearing the remaining principal. This shifting dynamic is mapped out within an amortization schedule.",
    },
    {
      question: "What is the structural difference between Fixed and Floating interest rates for retail loans?",
      answer:
        "A fixed interest rate remains completely locked at a specific percentage throughout the entire life of your loan, meaning your monthly installment remains identical from your first payment to your last. This setup provides excellent predictability for long-term household budgeting. Conversely, a floating interest rate can change periodically based on shifts in macroeconomic conditions and benchmark reference lending indices (such as the RBI's repo rate modifications). When a floating benchmark moves up or down, your lender will typically adjust your loan's total months of tenure rather than changing your immediate cash-flow baseline, though your overall interest costs will shift accordingly.",
    },
    {
      question: "What legal and financial implications occur if I default or miss an EMI payment date?",
      answer:
        "Missing an EMI deadline carries immediate financial and operational penalties. Lenders will apply immediate late fee penalties and default interest charges on top of your missed installment. Mechanically, the default is reported directly to credit reporting agencies like CIBIL, which can sharply lower your credit score. A lower credit rating makes it much more difficult to secure competitive interest rates on credit cards or loans in the future. If a borrower defaults repeatedly over consecutive billing cycles, lenders may invoke debt recovery protocols, which can include liquidating collateral assets linked to secured loans.",
    },
    {
      question: "How does making proactive partial prepayments shorten my loan timeline or reduce costs?",
      answer:
        "Partial loan prepayments allow you to deploy extra lump-sum funds directly against your outstanding principal balance, skipping past accumulated interest calculations. Because interest charges are calculated dynamically on your remaining principal balance every month, lowering that principal base immediately reduces your interest costs moving forward. When making a prepayment, most institutions allow you to choose between two optimization options: you can lower your monthly installment amount while keeping your original timeline, or you can maintain your current monthly payment to shorten the loan's duration. Choosing to shorten your timeline typically delivers the highest long-term interest savings.",
    },
    {
      question: "Is a longer loan duration better for long-term wealth management, or should I opt for a shorter timeline?",
      answer:
        "Opting for an extended loan duration lowers your regular monthly payment, making large amounts of capital more accessible and helping preserve room in your near-term cash flow. However, stretching out your timeline means interest charges accumulate over a much longer period, significantly increasing your total debt costs. Choosing a shorter timeline demands a higher monthly payment, which can strain your disposable income, but it allows you to clear the debt much faster and saves substantial amounts in total interest expenses. It is best to choose a balanced timeline that keeps your monthly installments manageable without extending your debt horizons unnecessarily.",
    },
    {
      question: "How do lenders calculate my maximum eligible loan amount based on my monthly take-home salary?",
      answer:
        "Financial institutions evaluate loan applications using a metric called the Fixed Obligation to Income Ratio (FOIR). As a baseline standard, most risk assessment guidelines require that your total combined monthly debt payments do not exceed 40% to 50% of your net clean take-home salary. If you earn ₹1,00,000 per month, your target debt boundary across all active credit cards, car loans, and proposed mortgages is capped at roughly ₹45,000. If your projected monthly payment exceeds this threshold, lenders will ask for a larger down payment, look for an extended repayment timeline, or reduce the total principal amount available for approval.",
    },
  ],

  seoContent: `
<h2>The Practical Importance of Managing Debt and Installment Cash Flows</h2>
<p>
  Whether you are stepping into long-term home ownership, financing a vehicle, or consolidating lines of credit, borrowing capital is a key tool for hitting personal financial milestones. However, taking on debt requires careful management. If left unmonitored, unstructured borrowing can strain your regular disposable income, drive up your overall financing costs, and create long-term financial pressure.
</p>
<p>
  An interactive <strong>EMI Calculator</strong> simplifies your financial planning by turning complex interest formulas into clear, actionable numbers. By mapping out different combinations of principal amounts, annual interest rates, and repayment timelines, this tool provides a clear financial blueprint to help you make informed borrowing decisions.
</p>

---

<h2>Comparative Structural Mapping: Secured Mortgages vs. Unsecured Credit</h2>
<p>
  Different borrowing options carry distinct structural rules, risk metrics, and typical timelines. The table below outlines how common retail loan categories stack up against each other:
</p>

<table>
  <thead>
    <tr>
      <th>Loan Category Type</th>
      <th>Collateral Asset Required?</th>
      <th>Average Interest Rate Range</th>
      <th>Standard Tenure Parameters</th>
      <th>Primary Risk Profile Factor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Home Mortgage Loan</strong></td>
      <td>Yes (The property asset serves as primary security).</td>
      <td>Typically lower (Sovereign baseline tracking)</td>
      <td>Extended horizons (15 – 30 Years)</td>
      <td>Low immediate payments but sensitive to long-term compounding.</td>
    </tr>
    <tr>
      <td><strong>Vehicle / Car Loan</strong></td>
      <td>Yes (Hypothecation bound directly to the automobile).</td>
      <td>Moderate competitive tiers</td>
      <td>Mid-range horizons (3 – 7 Years)</td>
      <td>Financing a rapidly depreciating asset framework.</td>
    </tr>
    <tr>
      <td><strong>Personal Utility Loan</strong></td>
      <td>No (Unsecured credit issued on your signature profile).</td>
      <td>Premium asset tiers</td>
      <td>Short horizons (1 – 5 Years)</td>
      <td>High borrowing costs that can quickly drain disposable income.</td>
    </tr>
    <tr>
      <td><strong>Academic Education Loan</strong></td>
      <td>Varies (Depends on total loan size and co-signer details).</td>
      <td>Subsidized or competitive options</td>
      <td>Extended windows with moratorium blocks (5 – 15 Years)</td>
      <td>Tied directly to future employment and earning potential.</td>
    </tr>
  </tbody>
</table>

---

<h2>The Amortization Equation: Deconstructing the Reduces-Balance Loop</h2>
<p>
  The underlying mathematics of our calculation portal bypass flat simple interest shortcuts, relying instead on a precise progressive compound amortization model. The mathematical formula used to determine your fixed monthly payment is structured as follows:
</p>
<p align="center">
  EMI = P \times R \times \frac{(1 + R)^N}{(1 + R)^N - 1}
</p>
<p>
  Where:
</p>
<ul>
  <li><strong>P (Principal):</strong> The baseline capital volume or net principal amount borrowed from the lender.</li>
  <li><strong>R (Periodic Monthly Interest Rate):</strong> The annual percentage rate scaled down to a monthly fraction, expressed as a decimal (R = \text{Annual ROI} \div 12 \div 100).</li>
  <li><strong>N (Total Installment Count):</strong> The absolute timeline window for repayment, calculated as the total number of regular monthly payments (N = \text{Tenure Years} \times 12).</li>
</ul>

---

<h2>The Impact of Timeline Extensions: Balancing Monthly Payments against Total Interest</h2>
<p>
  To see how changing your repayment duration impacts your long-term borrowing costs, observe how a principal loan of <strong>₹50,000,000</strong> scales across different timelines, assuming a steady baseline interest rate of <strong>8.5% per annum</strong>:
</p>

<table>
  <thead>
    <tr>
      <th>Repayment Duration Horizon</th>
      <th>Calculated Monthly Payment (EMI)</th>
      <th>Total Principal Principal Due</th>
      <th>Accumulated Interest Charges</th>
      <th>Gross Lifetime Cost of the Loan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>10 Years (120 Months)</strong></td>
      <td>₹61,993</td>
      <td>₹50,00,000</td>
      <td>₹24,39,145</td>
      <td>₹74,39,145</td>
    </tr>
    <tr>
      <td><strong>15 Years (180 Months)</strong></td>
      <td>₹49,240</td>
      <td>₹50,00,000</td>
      <td>₹38,63,130</td>
      <td>₹88,63,130</td>
    </tr>
    <tr>
      <td><strong>20 Years (240 Months)</strong></td>
      <td>₹43,391</td>
      <td>₹50,00,000</td>
      <td>₹54,13,879</td>
      <td>₹1,04,13,879</td>
    </tr>
    <tr>
      <td><strong>25 Years (300 Months)</strong></td>
      <td>₹40,261</td>
      <td>₹50,00,000</td>
      <td>₹70,78,416</td>
      <td>₹1,20,78,416</td>
    </tr>
    <tr>
      <td><strong>30 Years (360 Months)</strong></td>
      <td>₹38,446</td>
      <td>₹50,00,000</td>
      <td>₹88,40,451</td>
      <td>₹1,38,40,451</td>
    </tr>
  </tbody>
</table>
<p>
  This matrix highlights a critical trade-off: stretching your loan timeline from 10 years to 30 years cuts your monthly payment by almost half, but it causes your total interest costs to skyrocket by over 260%, adding significant long-term expenses to your original loan.
</p>

---

<h2>Common Borrowing Pitfalls to Avoid</h2>
<ul>
  <li><strong>Focusing Solely on the Monthly Payment:</strong> Looking only at whether the immediate monthly payment fits your budget while ignoring the total long-term interest cost can lead to selecting excessively long timelines that drain your wealth over time.</li>
  <li><strong>Overlooking Processing and Hidden Fees:</strong> Every loan product carries auxiliary charges, such as structural administration fees, documentation costs, processing fees, and mandatory property insurance premiums. These items adjust your real-world <strong>Annual Percentage Rate (APR)</strong>, making it higher than the advertised base rate.</li>
  <li><strong>Borrowing up to Your Maximum Eligibility:</strong> Just because a banking institution clears you for a specific upper credit ceiling does not mean your household budget can comfortably sustain that debt load. Always align your borrowing with real-world income security, living expenses, and long-term saving goals.</li>
</ul>
`,
};