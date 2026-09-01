import { Calculator } from "@/src/types/calculator";

export const gstCalculator: Calculator = {
  slug: "gst-calculator",

  name: "GST Calculator",

  description:
    "Calculate Indian Goods and Services Tax (GST) instantly for both inclusive and exclusive amounts. Breakdown base price, CGST, SGST, IGST, and total invoice value across all standard GST slabs (5%, 12%, 18%, 28%).",

  category: "Finance",

  isPopular: true,

  editorialIntro:
    "Whether billing clients as a freelancer, managing merchant inventory, or auditing purchase bills, understanding the mathematical split between intra-state (CGST + SGST) and inter-state (IGST) transactions is critical for maintaining accurate GST Input Tax Credit (ITC) reconciliation in your GSTR-1 and GSTR-3B filings.",

  benchmarkContext: {
    title: "GST Slabs & Statutory Compliance Slabs (India)",
    badge: "GST Council Statutory Norms",
    stat: "4 Primary Slabs (5%, 12%, 18%, 28%)",
    description:
      "Threshold for mandatory GST registration is ₹40 Lakhs aggregate annual turnover for goods (₹20 Lakhs in special category states) and ₹20 Lakhs for services. Mandatory e-invoicing applies to B2B businesses with turnover exceeding ₹5 Crores.",
    source: "Central Board of Indirect Taxes and Customs (CBIC) & GST Council",
    lastUpdated: "January 2026",
  },

  seo: {
    title: "GST Calculator - Calculate GST Online (Inclusive & Exclusive)",

    description:
      "Free online GST Calculator for India. Calculate GST amount, gross price, net base price, CGST, SGST, and IGST across 5%, 12%, 18%, and 28% slabs with reverse GST calculation support.",
    keywords: [
      "gst calculator",
      "calculate gst",
      "gst calculation formula",
      "add gst calculator",
      "remove gst calculator",
      "gst inclusive calculator",
      "gst exclusive calculator",
      "cgst sgst calculator",
      "gst reverse calculator",
      "gst invoice calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Input Transaction Value",
      description: "Enter the base net cost (for adding GST) or the final MRP/invoice total (for removing GST).",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Select Statutory Slab (%)",
      description: "Choose 5%, 12%, 18%, or 28%, or enter a custom rate (e.g. 0.25% for diamonds, 3% for gold).",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Choose Calculation Mode",
      description: "Select 'Add GST' (Exclusive to Gross) or 'Remove GST' (Inclusive to Base Amount).",
      icon: "calculator",
    },
    {
      step: 4,
      title: "Review Tax Invoice Split",
      description: "Inspect the exact CGST (50%), SGST (50%), or IGST (100%) tax component and final billable total.",
      icon: "result",
    },
  ],

  formula: {
    title: "GST Calculation & Reverse Extraction Formulas",

    formula: "\\text{GST (Exclusive)} = \\text{Base} \\times \\frac{\\text{Rate}}{100} \\quad | \\quad \\text{Base (Inclusive)} = \\frac{\\text{Gross} \\times 100}{100 + \\text{Rate}}",

    explanation:
      "For exclusive pricing (adding GST), multiply the base amount by the rate percentage. For inclusive pricing (extracting GST from an MRP), the base is derived by dividing the gross price by (1 + Rate/100), and the tax equals Gross minus Base.",

    example: {
      input: "Invoice Gross: ₹11,800 | GST Rate: 18% (Inclusive Mode)",
      output: "Net Base Amount = ₹10,000 | Total GST = ₹1,800 (CGST ₹900 + SGST ₹900 or IGST ₹1,800)",
    },

    useCases: [
      "Freelancer & B2B Service Invoicing",
      "Retail Price Tag Reverse Engineering (MRP to Base)",
      "Input Tax Credit (ITC) Purchase Bookkeeping",
      "E-Commerce Seller Settlement Verification",
      "Inter-State (IGST) vs Intra-State (CGST+SGST) Billing",
    ],
  },

  faqs: [
    {
      question: "How do I extract the pre-tax base price from a GST-inclusive MRP?",
      answer:
        "To find the pre-tax base amount from an inclusive price, use the formula: Base Price = (Gross Amount × 100) ÷ (100 + GST Rate). For example, if an item with 18% GST costs ₹5,900 on the bill: Base = (5,900 × 100) ÷ 118 = ₹5,000. The GST component is ₹900 (CGST ₹450 + SGST ₹450).",
    },
    {
      question: "When should I charge IGST instead of CGST and SGST?",
      answer:
        "Charge IGST (Integrated GST) whenever the Place of Supply (location of the buyer/client) is in a different state or union territory from your registered business location (Inter-State transaction). Charge CGST (Central GST) and SGST (State GST) in equal 50:50 parts when both your business and the customer are located within the same state (Intra-State transaction).",
    },
    {
      question: "Can business owners claim Input Tax Credit (ITC) on all business expenses?",
      answer:
        "Under Section 16 of the CGST Act, registered businesses can claim ITC on goods and services used in furtherance of business, provided the supplier has uploaded the invoice to GSTR-1 and it reflects in your GSTR-2B. However, Section 17(5) 'blocked credits' disallow ITC on motor vehicles (with passenger capacity ≤13), food and beverages, outdoor catering, employee health club memberships, and personal consumption goods.",
    },
    {
      question: "What are the turnover limits for GST Composition Scheme eligibility?",
      answer:
        "Manufacturers and traders with an aggregate annual turnover of up to ₹1.5 Crores (₹75 Lakhs for special category states) can opt for the Composition Scheme, paying a flat tax of 1% (0.5% CGST + 0.5% SGST) on turnover without claiming ITC. For standalone service providers, the turnover limit under Section 10(2A) is ₹50 Lakhs with a flat 6% tax rate.",
    },
    {
      question: "What is the penalty for late filing of monthly GSTR-3B returns?",
      answer:
        "The statutory late fee for delayed GSTR-3B filing is ₹50 per day (₹25 CGST + ₹25 SGST) for regular returns, capped at ₹500 to ₹10,000 based on turnover slabs. For Nil returns, the late fee is reduced to ₹20 per day (₹10 CGST + ₹10 SGST) with a maximum cap of ₹500. Additionally, penal interest is levied at 18% per annum on the net cash tax liability.",
    },
  ],

  seoContent: `
<h2>The Structure of India's Dual GST Regime</h2>
<p>
  Implemented under the 101st Constitutional Amendment Act, the Goods and Services Tax (GST) unified India's fragmented indirect tax landscape by subsuming Central Excise, Service Tax, VAT, CST, and Octroi. India operates a <strong>Dual GST Model</strong> where both the Central and State governments simultaneously levy tax on a common tax base.
</p>

---

<h2>Official GST Slabs & HSN/SAC Classification Guide</h2>
<table>
  <thead>
    <tr>
      <th>GST Slab</th>
      <th>Primary Product &amp; Service Categories</th>
      <th>Representative Items / HSN Examples</th>
      <th>Applicable Cess</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>0% (Exempt)</strong></td>
      <td>Unprocessed food, fresh milk, fruits, unbranded grains, public healthcare, school education</td>
      <td>Fresh vegetables, eggs, curd (unbranded), salt</td>
      <td>Nil</td>
    </tr>
    <tr>
      <td><strong>5%</strong></td>
      <td>Essential commodities, life-saving medicines, economy air travel, railway passenger tickets</td>
      <td>Packaged food items, tea, coffee, edible oils, domestic LPG</td>
      <td>Nil</td>
    </tr>
    <tr>
      <td><strong>12%</strong></td>
      <td>Processed foods, specific medical equipment, business class air tickets, diagnostic kits</td>
      <td>Butter, cheese, frozen meat products, sewing machines, cell phones</td>
      <td>Nil</td>
    </tr>
    <tr>
      <td><strong>18%</strong></td>
      <td>Standard rate for major industrial goods, capital goods, IT software, SaaS, banking &amp; telecommunications</td>
      <td>Financial services, software development, restaurants (AC), hair oil, soap</td>
      <td>Nil</td>
    </tr>
    <tr>
      <td><strong>28%</strong></td>
      <td>Sin goods, demerit goods, luxury automobiles, high-end consumer electronics</td>
      <td>Automobiles, cement, aerated drinks, high-end air conditioners</td>
      <td>1% to 290% Compensation Cess</td>
    </tr>
  </tbody>
</table>

---

<h2>Intra-State vs. Inter-State Billing Workflow</h2>
<p>
  Tax computation depends strictly on the registered <strong>Place of Supply (POS)</strong>:
</p>

<ul>
  <li><strong>Intra-State Supply (Supplier &amp; Buyer in Same State):</strong> Total GST is split exactly 50:50 into <strong>CGST</strong> (Central GST) and <strong>SGST</strong> (State GST) or <strong>UTGST</strong> (Union Territory GST). On an 18% invoice of ₹10,000, ₹900 goes to CGST and ₹900 goes to SGST.</li>
  <li><strong>Inter-State Supply (Supplier &amp; Buyer in Different States):</strong> The entire tax amount is levied as <strong>IGST</strong> (Integrated GST) and collected by the Central Government before being apportioned to the destination consumption state. On an 18% invoice of ₹10,000, ₹1,800 is levied as IGST.</li>
  <li><strong>Export of Services / Goods (Zero-Rated):</strong> Exports are treated as zero-rated supplies. Exporters can supply under a Letter of Undertaking (LUT) without paying IGST, or pay IGST and claim full refunds.</li>
</ul>

---

<h2>How to Reconcile Input Tax Credit (ITC) Accurately</h2>
<ol>
  <li><strong>Invoice Verification in GSTR-2B:</strong> Always ensure your suppliers upload their outbound invoices in GSTR-1 on or before the 11th of each month so the tax appears in your auto-drafted, static GSTR-2B statement.</li>
  <li><strong>180-Day Payment Rule:</strong> Under the second proviso to Section 16(2), if a buyer fails to pay the supplier the invoice value plus GST within 180 days from the invoice date, the claimed ITC must be reversed along with 18% interest.</li>
  <li><strong>Matching GSTIN &amp; HSN:</strong> Ensure your 15-digit GSTIN, invoice date, and 4-to-6 digit HSN/SAC code match exactly to avoid automated scrutiny notices under Section 61.</li>
</ol>
`,
};