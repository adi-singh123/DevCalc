import { Calculator } from "@/src/types/calculator";

export const gstCalculator: Calculator = {
  slug: "gst-calculator",

  name: "GST Calculator",

  description:
    "Calculate GST amount and total price instantly using different GST rates.",

  category: "Finance",

  isPopular: true,

  seo: {
    title:
      "GST Calculator - Calculate GST Online",

    description:
      "Free GST Calculator to calculate GST amount and final price instantly.",

    keywords: [
      "gst calculator",
      "gst calculation",
      "gst amount calculator",
      "india gst calculator",
      "calculate gst",
      "gst",
      "gst knowledge",
      "what is gst"
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