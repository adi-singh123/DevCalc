import { Calculator } from "@/src/types/calculator";

export const emiCalculator: Calculator = {
  slug: "emi-calculator",

  name: "EMI Calculator",

  description:
    "Calculate monthly EMI, total interest payable, and total loan repayment amount instantly. Plan home loans, car loans, and personal loans with accurate amortization breakdowns.",

  category: "Finance",

  isPopular: true,

  editorialIntro:
    "In India's retail lending landscape, home loans are predominantly pegged to the RBI's External Benchmark Lending Rate (EBLR). Knowing your exact monthly EMI before approaching a bank helps ensure your total fixed debt obligations stay within the recommended 40%–50% FOIR (Fixed Obligation to Income Ratio) ceiling.",

  benchmarkContext: {
    title: "RBI Repo Rate & Retail Lending Benchmarks",
    badge: "Monetary Policy Context",
    stat: "6.50% Benchmark Repo Rate",
    description:
      "Most floating-rate retail home loans in India are linked directly to the RBI Repo Rate plus bank spread (typically 8.35% to 9.50% p.a.). A 25 bps rate shift on a ₹50 Lakh 20-year loan shifts total interest by approx. ₹1.85 Lakhs.",
    source: "Reserve Bank of India Monetary Policy Committee (MPC)",
    lastUpdated: "January 2026",
  },

  seo: {
    title: "EMI Calculator India - Calculate Loan EMI Online",

    description:
      "Planning a home, car, or personal loan? Enter the amount, interest rate, and tenure to instantly see your monthly EMI, total interest payable, and full repayment breakdown.",
    keywords: [
      "emi calculator",
      "loan emi calculator",
      "home loan emi calculator",
      "personal loan emi calculator",
      "car loan emi calculator",
      "monthly emi calculator",
      "loan repayment calculator",
      "loan amortization calculator",
      "emi calculation formula",
      "loan affordability calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Principal Borrowing",
      description: "Input the net loan amount sanctioned or requested after deducting your down payment.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Set Annual Interest Rate (%)",
      description: "Enter your bank's floating or fixed interest rate (e.g., 8.50% for home loans, 10.5% for personal loans).",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Select Repayment Horizon",
      description: "Choose your loan duration in years (up to 30 years for mortgages, 3-7 years for automobiles).",
      icon: "calculator",
    },
    {
      step: 4,
      title: "Analyze EMI & Amortization",
      description: "Review your monthly installment, total interest-to-principal ratio, and cumulative repayment amount.",
      icon: "result",
    },
  ],

  compareWith: [
    "income-tax-calculator",
    "hra-calculator",
    "inflation-calculator",
  ],

  formula: {
    title: "Reducing-Balance EMI Formula",

    formula: "EMI = P \\times R \\times \\frac{(1 + R)^N}{(1 + R)^N - 1}",

    explanation:
      "The Equated Monthly Installment (EMI) formula calculates equal payments on a reducing principal balance. The periodic monthly interest rate (R) equals the annual percentage divided by 1200, while (N) represents the total number of monthly payments across the tenure.",

    example: {
      input: "Loan Principal (P): ₹40,00,000 | Interest Rate (R): 8.50% p.a. | Tenure (N): 20 Years (240 Months)",
      output: "Monthly EMI = ₹34,713 | Total Repayment = ₹83,31,100 | Total Interest Payable = ₹43,31,100",
    },

    useCases: [
      "Home Mortgage Affordability Assessment",
      "Auto & Vehicle Loan Budgeting",
      "Unsecured Personal Loan Structuring",
      "Education Loan Repayment Planning",
      "Loan Prepayment & Tenor Reduction Scenarios",
    ],
  },

  faqs: [
    {
      question: "How does the monthly EMI interest vs. principal split change over time?",
      answer:
        "Under the reducing balance method, your EMI remains fixed, but its internal composition shifts dramatically. In Year 1 of a 20-year loan, up to 75%–80% of each EMI goes toward paying accumulated interest, while only 20%–25% reduces principal. By Year 15, this ratio flips: over 70% of each payment clears principal because the outstanding loan balance has shrunk substantially.",
    },
    {
      question: "What is FOIR, and how do Indian banks determine maximum loan eligibility?",
      answer:
        "FOIR stands for Fixed Obligation to Income Ratio. Most Indian public and private sector banks mandate that your total monthly debt payments (including existing credit card EMIs, car loans, and the proposed home loan) should not exceed 40% to 50% of your net monthly in-hand salary. For example, on a monthly net income of ₹1,20,000, your aggregate monthly EMI cap is approximately ₹48,000 to ₹60,000.",
    },
    {
      question: "What happens to a floating rate loan when the RBI raises or cuts the Repo Rate?",
      answer:
        "Since October 2019, all floating-rate retail retail loans from Indian commercial banks are linked to external benchmarks (primarily the RBI Repo Rate). When the RBI changes the repo rate, banks adjust your interest rate. Typically, banks keep your monthly EMI amount unchanged and extend or shorten your remaining tenure in months, unless you specifically request an EMI re-calculation.",
    },
    {
      question: "How much interest can you save by paying one extra EMI every year?",
      answer:
        "Making just one additional EMI payment per year (or increasing your EMI by 5% annually) can reduce a 20-year home loan tenure by 4 to 5 years, saving over ₹6 Lakhs to ₹10 Lakhs in total interest on a typical ₹40 Lakh loan at 8.5% interest.",
    },
    {
      question: "Can I claim tax deductions on my home loan EMI payments under Indian income tax laws?",
      answer:
        "Under the Old Tax Regime, you can claim up to ₹1.5 Lakhs annually on principal repayment under Section 80C, and up to ₹2.0 Lakhs on interest paid for self-occupied property under Section 24(b). Under the New Tax Regime (Section 115BAC), deductions under 80C and Section 24(b) on self-occupied properties are not available, though let-out property interest can offset rental income.",
    },
  ],

  seoContent: `
<h2>Understanding Retail Loan Amortization in India</h2>
<p>
  Whether purchasing a residential property, upgrading a vehicle, or managing major life expenses, retail loans represent one of the most significant financial commitments a household undertakes. While borrowing provides immediate purchasing power, selecting an inappropriate loan tenure or borrowing up to your maximum eligibility limit can lead to severe interest overhead.
</p>
<p>
  This <strong>EMI Calculator</strong> computes exact monthly installments using the standard reducing-balance method mandated by the Reserve Bank of India (RBI) across all commercial banks and Housing Finance Companies (HFCs).
</p>

---

<h2>Comparative Amortization Matrix: ₹50,00,000 Loan at 8.75% p.a.</h2>
<p>
  To illustrate how tenure choice directly impacts your overall borrowing expense, examine how a ₹50 Lakh principal behaves across standard repayment horizons:
</p>

<table>
  <thead>
    <tr>
      <th>Tenure Horizon</th>
      <th>Monthly EMI</th>
      <th>Principal Borrowed</th>
      <th>Total Interest Paid</th>
      <th>Total Cash Outflow</th>
      <th>Interest-to-Principal Ratio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>10 Years (120 Mo)</strong></td>
      <td>₹62,674</td>
      <td>₹50,00,000</td>
      <td>₹25,20,859</td>
      <td>₹75,20,859</td>
      <td>50.4%</td>
    </tr>
    <tr>
      <td><strong>15 Years (180 Mo)</strong></td>
      <td>₹49,977</td>
      <td>₹50,00,000</td>
      <td>₹39,95,907</td>
      <td>₹89,95,907</td>
      <td>79.9%</td>
    </tr>
    <tr>
      <td><strong>20 Years (240 Mo)</strong></td>
      <td>₹44,186</td>
      <td>₹50,00,000</td>
      <td>₹56,04,529</td>
      <td>₹1,06,04,529</td>
      <td>112.1%</td>
    </tr>
    <tr>
      <td><strong>25 Years (300 Mo)</strong></td>
      <td>₹41,114</td>
      <td>₹50,00,000</td>
      <td>₹73,34,312</td>
      <td>₹1,23,34,312</td>
      <td>146.7%</td>
    </tr>
    <tr>
      <td><strong>30 Years (360 Mo)</strong></td>
      <td>₹39,335</td>
      <td>₹50,00,000</td>
      <td>₹91,60,654</td>
      <td>₹1,41,60,654</td>
      <td>183.2%</td>
    </tr>
  </tbody>
</table>

<p>
  <strong>Key Takeaway:</strong> Moving from a 20-year tenure to a 30-year tenure reduces your monthly EMI by only ₹4,851 per month (about 11%), but increases your total interest outflow by over <strong>₹35.5 Lakhs</strong>—equivalent to buying a second small apartment in interest alone.
</p>

---

<h2>Fixed vs. Floating Interest Rates in Indian Banking</h2>
<ul>
  <li><strong>Floating Rates (EBLR Linked):</strong> Mandated by RBI for retail home loans since 2019. Your rate moves in lockstep with the RBI Repo Rate plus the bank spread. Floating loans on retail borrowers incur <strong>zero prepayment penalties</strong> by RBI regulation.</li>
  <li><strong>Fixed Rates:</strong> Locked for the entire tenure or a teaser period (3–5 years). Typically priced 100 to 200 bps higher than floating rates, and may carry prepayment charges upon closure.</li>
  <li><strong>MCLR Rates (Marginal Cost of Funds):</strong> Applicable primarily to older home loans sanctioned between 2016 and September 2019. Borrowers can switch from MCLR to Repo-linked EBLR by paying a nominal administrative conversion fee.</li>
</ul>

---

<h2>Actionable Debt Reduction Strategies</h2>
<ol>
  <li><strong>The Annual Step-Up Prepayment:</strong> Increasing your monthly EMI by 5% to 10% whenever you receive an annual salary increment accelerates principal reduction during the early high-interest phase.</li>
  <li><strong>Targeting Part-Prepayment in Years 1–5:</strong> Because the early years of amortization are heavily interest-weighted, deploying annual bonuses directly toward principal prepayments delivers the highest return on investment.</li>
  <li><strong>Maintaining an Emergency Buffer:</strong> Avoid exhausting all liquid savings on loan prepayments; always maintain 6 months of living expenses and EMI payments in liquid instruments.</li>
</ol>
`,
};