import { Calculator } from "@/src/types/calculator";

export const gstCalculator: Calculator = {
  slug: "gst-calculator",

  name: "GST Calculator",

  description:
"Need to quickly work out GST on a purchase or invoice? Our free GST Calculator instantly calculates the tax amount and final price — just enter the base amount and applicable GST rate to get accurate results in seconds.",
  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "GST Calculator - Calculate GST Online",

    description:
"Need to quickly work out GST on a purchase or invoice? Our free GST Calculator instantly calculates the tax amount and final price — just enter the base amount and applicable GST rate to get accurate results in seconds.",
keywords: [
  "gst calculator",
  "gst calculation",
  "gst amount calculator",
  "india gst calculator",
  "calculate gst",
  "gst",
  "gst knowledge",
  "what is gst",

  // Core GST Keywords
  "gst calculator india",
  "online gst calculator",
  "gst rate calculator",
  "gst percentage calculator",
  "gst value calculator",
  "gst tax calculator",
  "gst amount finder",
  "gst estimator",
  "gst bill calculator",
  "gst invoice calculator",

  // GST Add & Remove
  "add gst calculator",
  "remove gst calculator",
  "gst inclusive calculator",
  "gst exclusive calculator",
  "gst included calculator",
  "gst excluded calculator",
  "gst addition calculator",
  "gst deduction calculator",
  "gst reverse calculator",
  "price before gst calculator",

  // Tax Keywords
  "tax calculator india",
  "indirect tax calculator",
  "goods and services tax calculator",
  "gst tax amount calculator",
  "tax percentage calculator",
  "sales tax calculator india",
  "gst tax estimator",
  "gst charge calculator",
  "business tax calculator",
  "tax invoice calculator",

  // GST Rates Keywords
  "5 percent gst calculator",
  "12 percent gst calculator",
  "18 percent gst calculator",
  "28 percent gst calculator",
  "gst slab calculator",
  "gst rate finder",
  "gst percentage finder",
  "tax slab calculator",
  "gst percentage tool",
  "gst rate calculation",

  // Business Keywords
  "business gst calculator",
  "gst billing calculator",
  "gst accounting calculator",
  "gst invoice generator",
  "gst compliance calculator",
  "gst filing calculator",
  "retail gst calculator",
  "gst sales calculator",
  "gst purchase calculator",
  "gst business tool",

  // Invoice Keywords
  "gst invoice calculator",
  "invoice tax calculator",
  "bill amount calculator",
  "gst bill calculator",
  "invoice gst calculator",
  "tax invoice generator",
  "invoice amount calculator",
  "billing calculator india",
  "gst receipt calculator",
  "invoice tax amount calculator",

  // CGST SGST IGST Keywords
  "cgst sgst calculator",
  "igst calculator",
  "cgst calculator",
  "sgst calculator",
  "gst breakup calculator",
  "gst split calculator",
  "cgst sgst igst calculator",
  "tax component calculator",
  "gst tax breakdown calculator",
  "gst percentage breakup",

  // Shopping Keywords
  "price with gst calculator",
  "price without gst calculator",
  "shopping gst calculator",
  "product gst calculator",
  "purchase gst calculator",
  "sale price gst calculator",
  "gst on product calculator",
  "gst cost calculator",
  "gst discount calculator",
  "online shopping gst calculator",

  // Educational Keywords
  "what is gst",
  "gst meaning",
  "gst formula",
  "how to calculate gst",
  "gst explained",
  "gst examples",
  "gst calculation formula",
  "gst tutorial",
  "gst rates in india",
  "gst guide india",

  // India Specific Keywords
  "india gst calculator",
  "gst calculator india 2026",
  "gst tax india",
  "goods and services tax india",
  "indian gst calculator",
  "gst rates india",
  "gst percentage india",
  "gst bill calculator india",
  "business gst india",
  "tax calculator india gst",

  // Question Keywords
  "how to calculate gst",
  "what is gst in india",
  "how much gst should i pay",
  "how to remove gst from amount",
  "how to add gst to price",
  "what are gst rates",
  "how to calculate cgst and sgst",
  "how does gst work",
  "gst calculator example",
  "gst formula explained",

  // Hindi Keywords
  "gst calculator hindi",
  "gst calculation hindi",
  "india gst calculator hindi",
  "calculate gst hindi",
  "जीएसटी कैलकुलेटर",
  "जीएसटी गणना",
  "जीएसटी कैलकुलेटर इंडिया",
  "जीएसटी कैसे निकाले",
  "जीएसटी प्रतिशत कैलकुलेटर",
  "जीएसटी टैक्स कैलकुलेटर",
  "सीजीएसटी एसजीएसटी कैलकुलेटर",
  "आईजीएसटी कैलकुलेटर",
  "जीएसटी क्या है",
  "जीएसटी फॉर्मूला",
  "जीएसटी दरें भारत",

  // Long Tail Keywords
  "free online gst calculator",
  "best gst calculator india",
  "gst calculator with cgst sgst breakup",
  "price before and after gst calculator",
  "gst inclusive and exclusive calculator",
  "accurate gst tax calculator",
  "gst invoice and billing calculator",
  "gst calculator for businesses",
  "advanced gst calculation tool",
  "gst percentage calculator online",
],
  },

  steps: [
    {
      step: 1,
      title: "Enter Amount",
      description:
        "Enter the original amount before GST.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Select GST Rate",
      description:
        "Choose the GST percentage.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Calculate GST",
      description:
        "Calculate GST amount instantly.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View Results",
      description:
        "See GST amount and final total.",
      icon: "result",
    },
  ],

  formula: {
    title: "GST Formula",

    formula:
      "GST Amount = (Amount × GST Rate) ÷ 100",

    explanation:
      "GST is calculated by multiplying the original amount by the GST percentage.",

    example: {
      input:
        "Amount: ₹1000, GST Rate: 18%",

      output:
        "GST = ₹180, Total = ₹1180",
    },

    useCases: [
      "Business invoices",
      "Retail billing",
      "Tax calculations",
      "Purchase planning",
    ],
  },

  faqs: [
    {
      question:
        "How is GST calculated?",
      answer:
        "GST is calculated as a percentage of the original amount.",
    },
    {
      question:
        "Can I calculate GST for different rates?",
      answer:
        "Yes, common rates like 5%, 12%, 18%, and 28% are supported.",
    },
  ],

  seoContent: `
<h2>What is GST?</h2>

<p>
Goods and Services Tax (GST) is an indirect tax applied to the supply of goods and services in India. It replaced multiple indirect taxes and created a unified tax system across the country.
</p>

<h2>GST Tax Slabs in India</h2>

<table>
  <tr>
    <th>GST Rate</th>
    <th>Common Products & Services</th>
  </tr>
  <tr>
    <td>5%</td>
    <td>Essential items, transportation services</td>
  </tr>
  <tr>
    <td>12%</td>
    <td>Processed foods, mobile phones</td>
  </tr>
  <tr>
    <td>18%</td>
    <td>Most services and consumer goods</td>
  </tr>
  <tr>
    <td>28%</td>
    <td>Luxury items and premium products</td>
  </tr>
</table>

<h2>GST Components Explained</h2>

<table>
  <tr>
    <th>Type</th>
    <th>Meaning</th>
  </tr>
  <tr>
    <td>CGST</td>
    <td>Central Goods and Services Tax collected by the Central Government.</td>
  </tr>
  <tr>
    <td>SGST</td>
    <td>State Goods and Services Tax collected by State Governments.</td>
  </tr>
  <tr>
    <td>IGST</td>
    <td>Integrated GST applicable on interstate transactions.</td>
  </tr>
</table>

<h2>GST Inclusive vs GST Exclusive Price</h2>

<table>
  <tr>
    <th>Pricing Type</th>
    <th>Meaning</th>
  </tr>
  <tr>
    <td>GST Inclusive</td>
    <td>Product price already includes GST.</td>
  </tr>
  <tr>
    <td>GST Exclusive</td>
    <td>GST is added separately to the base price.</td>
  </tr>
</table>

<h2>Benefits of GST</h2>

<ul>
  <li><strong>Single Tax System:</strong> Simplifies taxation across India.</li>
  <li><strong>Reduced Tax Cascading:</strong> Eliminates tax-on-tax effect.</li>
  <li><strong>Greater Transparency:</strong> Improves compliance and reporting.</li>
  <li><strong>Ease of Business:</strong> Simplifies interstate trade.</li>
</ul>

<h2>Common GST Calculation Examples</h2>

<table>
  <tr>
    <th>Product Price</th>
    <th>GST Rate</th>
    <th>GST Amount</th>
    <th>Final Price</th>
  </tr>
  <tr>
    <td>₹1,000</td>
    <td>18%</td>
    <td>₹180</td>
    <td>₹1,180</td>
  </tr>
  <tr>
    <td>₹5,000</td>
    <td>12%</td>
    <td>₹600</td>
    <td>₹5,600</td>
  </tr>
</table>

<h2>Who Should Use a GST Calculator?</h2>

<ul>
  <li>Business Owners</li>
  <li>Shopkeepers</li>
  <li>Freelancers</li>
  <li>Accountants</li>
  <li>Tax Consultants</li>
  <li>Consumers Checking Bills</li>
</ul>

<h2>Common GST Mistakes</h2>

<ul>
  <li>Using the wrong GST slab.</li>
  <li>Confusing GST-inclusive and GST-exclusive pricing.</li>
  <li>Incorrectly calculating interstate transactions.</li>
  <li>Ignoring input tax credit benefits.</li>
</ul>

<h2>Input Tax Credit (ITC)</h2>

<p>
Input Tax Credit allows businesses to reduce the GST paid on purchases from the GST collected on sales. This helps lower the overall tax burden and avoids double taxation.
</p>

<h2>Pro Tip</h2>

<p>
Always verify whether a quoted price is GST-inclusive or GST-exclusive before making a purchase. This helps avoid surprises when calculating the final payable amount.
</p>
`,
};