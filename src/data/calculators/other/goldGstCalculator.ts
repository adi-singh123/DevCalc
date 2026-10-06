import type { Calculator } from "@/src/types/calculator";

export const goldGstCalculator: Calculator = {
  slug: "gold-gst-calculator",
  name: "Gold GST Calculator",
  description: "Calculate 3% GST on the total transaction value of gold jewellery, including itemised making charges and an optional hallmarking fee.",
  category: "Other",
  isPopular: true,
  compareWith: ["gold-price-calculator", "gold-making-charges-calculator", "silver-price-calculator", "gst-calculator"],
  editorialIntro: "For a retail sale of finished jewellery to an end customer, CBIC guidance applies 3% GST to the total transaction value whether making charges are shown separately or not.",
  seo: {
    title: "Gold GST Calculator – 3% Jewellery GST and Final Price",
    description: "Calculate 3% GST and the estimated final gold jewellery price using gold value, purity, weight, making charges and an optional hallmarking fee.",
    keywords: ["gold GST calculator", "GST on gold jewellery", "3 percent GST on jewellery", "gold jewellery final price calculator", "GST on gold making charges", "gold bill calculator India"],
  },
  steps: [
    { step: 1, title: "Choose Purity and Rate Basis", description: "Select the jewellery purity and state whether the current rate already matches it or is a 24K base rate.", icon: "calculator" },
    { step: 2, title: "Enter Net Gold Weight", description: "Use only the net gold weight. Do not include stones or other non-gold components.", icon: "location" },
    { step: 3, title: "Add Making and Hallmarking", description: "Enter the making charge exactly as quoted and include the per-article hallmarking charge when applicable.", icon: "clock" },
    { step: 4, title: "Review GST and Final Price", description: "See the taxable transaction value, 3% GST and estimated final jewellery bill.", icon: "result" },
  ],
  formula: {
    title: "Retail Gold Jewellery GST Formula",
    formula: "Taxable Value = Gold Value + Making Charges + included fees; GST = Taxable Value × 3%; Final Price = Taxable Value + GST",
    explanation: "CBIC's sectoral FAQ states that GST is payable at 3% of the total transaction value of jewellery whether making charges are shown separately or not. The separate 5% job-work rate concerns a registered job worker supplying services to a jewellery manufacturer; it is not the correct retail calculation for a finished jewellery sale to the end customer.",
    example: { input: "Illustrative jewellery value ₹1,00,000, making charges ₹12,000 and hallmarking ₹45", output: "Taxable value = ₹1,12,045; GST at 3% = ₹3,361.35; estimated final price = ₹1,15,406.35." },
    useCases: ["Checking a retail jewellery invoice", "Comparing percentage and per-gram making charges", "Estimating the final price before visiting a jeweller", "Avoiding an incorrect separate 5% retail making-charge calculation"],
  },
  faqs: [
    { question: "How can I verify the hallmark on gold jewellery?", answer: "Check the BIS mark, purity or fineness mark, and six-character HUID on the article. The HUID can be checked with the Verify HUID feature in the BIS Care app. The invoice should identify the article, net precious-metal weight, purity or fineness, and hallmarking charge." },
    { question: "Does the estimate include stones, wastage, or a buyback deduction?", answer: "Only amounts entered into the calculator are included. Stone value, wastage, discounts, exchange valuation, and buyback deductions can change an actual invoice or resale settlement. Review each item separately on the jeweller's quotation." },
    { question: "What GST rate applies to gold jewellery sold to a customer?", answer: "CBIC guidance applies 3% GST to the total transaction value of jewellery, whether making charges are shown separately or included in one price." },
    { question: "Should making charges be taxed separately at 5%?", answer: "Not in this retail jewellery calculation. The 5% rate commonly cited for job work applies to the job worker's service in the business supply chain. For the end-customer jewellery sale, use 3% on total transaction value." },
    { question: "Does GST change with 22K, 24K, or 18K purity?", answer: "The 3% rate does not change. Purity changes the gold value, so it changes the rupee amount of GST rather than the tax percentage." },
    { question: "Does the calculator fetch a live gold rate?", answer: "No. Enter a current comparable quote and confirm whether it is per gram and for 24K or the selected purity." },
    { question: "What should be excluded from gold weight?", answer: "Exclude stones and other non-gold parts from net gold weight. Ask for an itemised invoice showing weight, rate, making charges, other components and GST." },
    { question: "Is this suitable for old-gold exchanges or business job work?", answer: "Those transactions can require different valuation and GST treatment. This calculator covers a straightforward retail purchase of finished jewellery by an end customer." },
  ],
  seoContent: `
<h2>How GST Is Calculated on a Retail Jewellery Bill</h2>
<p>For a finished jewellery sale to an end customer, add the gold value, making charges and included fees to obtain the transaction value. CBIC's jewellery-sector FAQ states that GST is 3% of the total transaction value whether making charges are shown separately or not.</p>
<h2>Worked Gold GST Example</h2>
<p>Suppose the gold value is ₹1,00,000, making charges are ₹12,000 and the hallmarking amount entered is ₹45. The taxable value is ₹1,12,045. GST at 3% is ₹3,361.35, producing an estimated total of ₹1,15,406.35 before any separately entered stone value, discount, exchange adjustment, or other invoice item.</p>
<h2>Why the 5% Job-Work Rate Causes Confusion</h2>
<p>CBIC distinguishes a registered job worker's fabrication service to a jewellery manufacturer from the jeweller's finished-product sale to a customer. The calculator models the latter. It is not designed for business job-work invoices or old-gold exchange valuation.</p>
<h2>Use a Comparable Gold Rate</h2>
<p>The tool does not fetch a live price. Confirm the date, purity, unit and buy-or-sell basis of the rate. When a quote already matches the selected purity, do not reduce it by the purity factor again.</p>
<h2>Check the Hallmark and Itemised Invoice</h2>
<p>Confirm net precious-metal weight, purity or fineness, rate, making-charge method, stones, hallmarking, taxable value and GST. BIS currently lists ₹45 per gold article as the hallmarking charge and provides HUID verification through the BIS Care app. A retailer's final invoice remains the controlling document.</p>
`,
};
