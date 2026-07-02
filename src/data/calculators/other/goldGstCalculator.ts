import { Calculator } from "@/src/types/calculator";

export const goldGstCalculator: Calculator = {
  slug: "gold-gst-calculator",

  name: "Gold GST Calculator",

  description:
    "Work out exactly how much GST applies to your gold purchase. Select your purity, enter the gold rate, weight, and making charges — and see the 3% GST on gold value and 5% GST on making charges calculated separately, plus your final bill.",

  category: "Other",

  isPopular: true,

  compareWith: [
    "gold-price-calculator",
    "gold-making-charges-calculator",
    "gold-purity-calculator",
    "gold-loan-calculator",
    "silver-price-calculator",
  ],

  seo: {
    title:
      "Gold GST Calculator (2026) - 3% + 5% GST by Purity, Weight & Making Charges",

    description:
      "Calculate GST on your gold purchase by purity. See 3% GST on gold value and 5% GST on making charges calculated separately, for 24K, 22K, 18K, and 14K gold.",

    keywords: [
      "gold gst calculator",
      "gst on gold calculator",
      "gold gst calculator india",
      "gst on gold jewellery",
      "gst on gold making charges",
      "3 percent gst on gold",
      "5 percent gst on making charges",
      "gold gst rate 2026",
      "gold gst calculator by purity",
      "22k gold gst calculator",
      "24k gold gst calculator",
      "18k gold gst calculator",
      "gold gst hsn code",
      "gst on gold bars and coins",
      "gst on digital gold",
      "gst on old gold exchange",

      // Question-based / long-tail
      "how much gst is charged on gold in india",
      "is gst different for gold purity",
      "how to calculate gst on gold jewellery",
      "gst on gold making charges percentage",
      "does gst apply to gold coins",
      "gst on old gold sold to jeweller",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Select Purity & Enter Gold Details",
      description:
        "Choose 24K, 22K, 18K, or 14K, then enter today's gold rate per gram and the weight of gold in the piece. GST on the gold portion is a flat 3%, and this rate is the same across every purity.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Making Charges",
      description:
        "Enter the making charge as a percentage of gold value or a flat per-gram rate. When making charges are shown as a separate line on the bill, they attract GST at 5%, not 3%.",
      icon: "result",
    },

    {
      step: 3,
      title: "Add Hallmarking Fee (Optional)",
      description:
        "Add the hallmarking fee if applicable. This is typically embedded in the making charges or billed as a small separate service line, and is included in your final total either way.",
      icon: "location",
    },

    {
      step: 4,
      title: "View GST & Final Bill Breakdown",
      description:
        "See the 3% GST on your gold value and the 5% GST on your making charges calculated separately, along with the final amount payable — exactly how a compliant jeweller's invoice should itemise it.",
      icon: "clock",
    },
  ],

  formula: {
    title: "Gold GST Formula",

    formula:
      "GST on Gold = Gold Value × 3%  |  GST on Making Charges = Making Charges × 5%  |  Final Price = Gold Value + Making Charges + Both GST Amounts",

    explanation:
      "GST on a gold purchase in India isn't a single flat rate applied to the whole bill — it's two separate rates applied to two separate components. The gold itself, whether it's a bar, coin, or the metal content in a piece of jewellery, attracts 3% GST on its value, calculated as weight in grams multiplied by the rate per gram. This 3% rate is completely uniform: it doesn't change based on purity, so 24K, 22K, 18K, and 14K gold are all taxed at exactly 3% on their respective values. What does change with purity is the rupee amount of GST you pay, simply because higher-purity gold has a higher value per gram, so 3% of a bigger number is a bigger tax amount — not because the rate itself is different.\n\nMaking charges are treated differently under GST law, because crafting raw gold into jewellery is classified as a service rather than a sale of goods. When a jeweller shows making charges as a separate, itemised line on the invoice, that portion attracts 5% GST rather than 3%. This 5% making-charges GST rate was reduced from an initial 18% at the time GST was first introduced in July 2017, then further down to 5% shortly after, and has remained at 5% since — including through the broader GST 2.0 rate restructuring that took effect in September 2025, where gold and gold jewellery were kept outside the standard 5/18/40% slab system entirely and retained their own dedicated rates.\n\nThis two-rate structure only matters when making charges are itemised separately. For a ready-made piece of jewellery sold as a single finished product — a composite supply, in GST terminology — some jewellers may bill the entire transaction (gold plus making charges) under a single 3% rate, treating the making charges as bundled into the value of the finished good rather than as a distinct service. In practice, most organised jewellers and larger retailers itemise gold value and making charges separately on the invoice specifically so the more favourable 3%-on-gold, 5%-on-making-charges split applies, since this generally works out cheaper for the buyer than a blended rate on a larger combined figure would.\n\nA few related cases are worth knowing. Gold bars and coins, since they involve no crafting or making charges, attract only the 3% GST on their value — nothing else. Digital gold is taxed the same way as physical gold, at 3% on the purchase amount, with no making-charges component since there's no physical craftsmanship involved. When you exchange old gold for new jewellery, GST is charged only on the value addition — the new gold weight added plus the making charges on the new piece — not on the value of the old gold you're handing back, and individuals selling old gold jewellery to a jeweller don't pay GST on that sale at all, since it isn't treated as a business transaction on their end.",

    example: {
      input:
        "22K gold necklace, Weight: 20g, Gold rate: ₹13,000/g, Making charges: ₹800/g (flat rate)",

      output:
        "Gold value = 20 × ₹13,000 = ₹2,60,000. GST on gold (3%) = ₹7,800. Making charges = 20 × ₹800 = ₹16,000. GST on making charges (5%) = ₹800. Final price = ₹2,60,000 + ₹16,000 + ₹7,800 + ₹800 = ₹2,84,600.",
    },

    useCases: [
      "Checking the exact GST split on a jeweller's invoice before paying",
      "Comparing final prices across jewellers who itemise GST differently",
      "Budgeting for a gold purchase including tax, not just the headline rate",
      "Understanding GST treatment when exchanging old gold for new",
      "Estimating tax on gold bars and coins versus crafted jewellery",
    ],
  },

  faqs: [
    {
      question: "What is the GST rate on gold in India in 2026?",
      answer:
        "Gold attracts 3% GST on its value — this applies uniformly to jewellery, bars, coins, and digital gold, regardless of purity or which state you buy it in. If a jeweller shows making charges as a separate line item, those charges attract an additional 5% GST. Both rates have stayed unchanged since being set shortly after GST's introduction in July 2017, and they remained untouched even through the broader GST 2.0 rate restructuring that took effect in September 2025 — gold sits outside the standard slab system entirely, with its own dedicated rates.",
    },

    {
      question: "Does GST vary by gold purity — 22K vs 24K vs 18K?",
      answer:
        "No, the GST rate itself is identical across every purity — 3% on gold value, whether you're buying 24K, 22K, 18K, or 14K gold. What changes with purity is the rupee amount of tax you pay, purely because higher-purity gold costs more per gram, so 3% of a larger value works out to a larger tax figure. For example, 3% GST on ₹1,00,000 worth of 24K gold is ₹3,000, while 3% GST on ₹85,000 worth of 22K gold (for the same weight, at a lower effective rate) would be ₹2,550 — the rate is the same 3% in both cases, only the base value differs.",
    },

    {
      question: "Why is GST on making charges different from GST on gold?",
      answer:
        "The two are taxed differently because they're classified differently under GST law: the gold itself is treated as a sale of goods, taxed at 3%, while making charges are treated as a labour or craftsmanship service, taxed at 5%. This split only comes into play when making charges are shown as a distinct line item on the invoice. If a jeweller instead bills a finished piece as one combined figure — a composite supply — the making-charges component may effectively be taxed within a single blended rate rather than separately at 5%, though itemised billing at 3%+5% is the more common and often more transparent approach used by most organised jewellers.",
    },

    {
      question: "How much GST do I pay on gold bars and coins?",
      answer:
        "Gold bars and coins attract only the 3% GST on their value, with nothing added for making charges, since there's no crafting or design work involved in producing a standardised bar or coin — it's a straightforward sale of goods. This is one reason gold bars and coins often work out cheaper overall than jewellery for the same gold weight: not only are making charges themselves lower or absent, but there's no accompanying 5% making-charges GST either.",
    },

    {
      question: "Do I pay GST when I sell my old gold jewellery?",
      answer:
        "If you're an individual selling old gold jewellery to a registered jeweller, you don't pay GST on that transaction, since a personal sale isn't treated as a business supply under GST law. However, if that same jeweller later resells the old gold jewellery to another buyer, GST does apply on that resale, since the jeweller is a registered dealer making a taxable supply. This distinction matters when you're exchanging old gold for new: GST is charged only on the value addition — the new gold added and the making charges on the new piece — not on the value of the old gold you hand back.",
    },

    {
      question: "Is GST charged on digital gold?",
      answer:
        "Yes, digital gold is taxed the same way as physical gold at the point of purchase: a flat 3% GST applies to the purchase amount. Since digital gold involves no physical crafting, there's no making-charges component and therefore no 5% GST layer to worry about — the tax treatment is simpler than for jewellery. It's worth noting that Sovereign Gold Bonds and Gold ETFs are treated differently, as financial instruments rather than goods, and don't attract GST on the investment itself, though brokerage or fund management fees on these products can attract their own GST.",
    },

    {
      question: "How does GST affect gold imported into India?",
      answer:
        "Imported gold attracts customs duty in addition to GST — a Basic Customs Duty plus an Agriculture Infrastructure and Development Cess, which together have generally sat in the mid-single digits as a percentage in recent years, though exact rates have been revised more than once and are worth checking against current customs notifications for precision. On top of the customs duty, Integrated GST (IGST) of 3% is applied to the assessable value, which includes the cost of the gold plus the customs duty already charged. This combined structure is one reason imported gold costs meaningfully more than its raw international price would suggest before it reaches an Indian buyer.",
    },

    {
      question: "Is GST the same across all states in India?",
      answer:
        "Yes. The GST rates on gold — 3% on value and 5% on making charges — are uniform nationally and don't vary from state to state. Within a state, this is typically split as CGST and SGST (1.5% each for the 3% gold rate, 2.5% each for the 5% making-charges rate); for a purchase made across state lines, it's charged instead as a single IGST rate covering the same total percentage. Either way, the total tax burden works out identically regardless of which state the sale takes place in.",
    },

    {
      question: "Can businesses claim input tax credit (ITC) on gold GST?",
      answer:
        "Yes, but only under specific conditions. A GST-registered business — typically a jeweller or dealer — can claim input tax credit on gold purchased for business purposes such as manufacturing or resale, provided the supplier has issued a valid GST invoice and has filed their own returns correctly. Individual consumers buying gold for personal use, such as jewellery for themselves or as a gift, cannot claim ITC, since ITC is only available to GST-registered entities using the purchase for further business activity, not to end consumers.",
    },

    {
      question: "Should I ask for an itemised bill showing GST separately?",
      answer:
        "Yes, and it's one of the simplest ways to verify you're being charged correctly. A properly itemised gold invoice should separately show the gold value, the making charges, the GST calculated on each of these (3% and 5% respectively), and the final total — this is generally required under GST invoicing rules rather than being optional. If a bill only shows a single lump-sum figure without this breakdown, it's harder to verify whether the correct rates have been applied, and you lose the ability to independently check the maths against the day's gold rate and the making charge percentage you were quoted verbally.",
    },

    {
      question: "Has the GST rate on gold changed recently?",
      answer:
        "As of mid-2026, the core rates have stayed steady: 3% on gold value and 5% on making charges, both unchanged since shortly after GST was first introduced in 2017. When the broader GST 2.0 rate restructuring rolled out in September 2025 and moved most goods into a simplified 5/18/40% slab system, gold and gold jewellery were specifically kept outside that structure and retained their existing dedicated rates rather than being folded into one of the new slabs. Customs duty on imported gold, by contrast, has been revised more than once in recent years, so that component is worth checking for the latest figure separately from the GST rate itself.",
    },
  ],

  seoContent: `
<h2>What Is a Gold GST Calculator?</h2>

<p>
A Gold GST Calculator works out exactly how much Goods and Services Tax applies to a gold purchase, split correctly across its two components: the gold value itself and any making charges billed separately. Unlike a single flat-rate estimate, it reflects how GST actually works for gold in India — 3% on the metal value, and a separate 5% on making charges when they're itemised on the invoice — so the number you see matches what a properly compliant jeweller's bill should show.
</p>
<p>
This distinction matters because gold value and making charges are taxed at different rates for a specific legal reason: the gold itself is treated as a sale of goods, while making charges are treated as a craftsmanship service. Getting this split right, rather than applying one blended percentage to the whole bill, is the difference between an estimate that's roughly right and one that matches your actual invoice line by line.
</p>

<h2>GST Rates on Gold by Purity (2026)</h2>

<table>
<tr>
<th>Purity</th>
<th>GST on Gold Value</th>
<th>GST on Making Charges</th>
<th>Applies Uniformly?</th>
</tr>
<tr>
<td>24 Karat (24K)</td>
<td>3%</td>
<td>5% (if itemised)</td>
<td>Yes</td>
</tr>
<tr>
<td>22 Karat (22K)</td>
<td>3%</td>
<td>5% (if itemised)</td>
<td>Yes</td>
</tr>
<tr>
<td>18 Karat (18K)</td>
<td>3%</td>
<td>5% (if itemised)</td>
<td>Yes</td>
</tr>
<tr>
<td>14 Karat (14K)</td>
<td>3%</td>
<td>5% (if itemised)</td>
<td>Yes</td>
</tr>
</table>

<p>
The rate itself never changes with purity — every karat is taxed at the same 3% on gold value and 5% on making charges. Only the rupee amount of tax changes, because higher-purity gold has a higher value per gram, and 3% of a larger figure is naturally a larger tax amount.
</p>

<h2>Worked Example: GST by Purity, Same Weight</h2>

<table>
<tr>
<th>Purity</th>
<th>Rate/gram</th>
<th>Value (10g)</th>
<th>GST on Gold (3%)</th>
</tr>
<tr>
<td>24K</td>
<td>₹14,200</td>
<td>₹1,42,000</td>
<td>₹4,260</td>
</tr>
<tr>
<td>22K</td>
<td>₹13,000</td>
<td>₹1,30,000</td>
<td>₹3,900</td>
</tr>
<tr>
<td>18K</td>
<td>₹10,650</td>
<td>₹1,06,500</td>
<td>₹3,195</td>
</tr>
<tr>
<td>14K</td>
<td>₹8,280</td>
<td>₹82,800</td>
<td>₹2,484</td>
</tr>
</table>

<p>
This table isolates the effect of purity on GST amount using late June 2026 reference rates: the same 3% rate applied across all four rows produces four different rupee figures, purely because the underlying gold value differs by purity, not because the tax rate itself changes.
</p>

<h2>Full GST Breakdown: A Worked Example</h2>

<table>
<tr>
<th>Component</th>
<th>Calculation</th>
<th>Amount</th>
</tr>
<tr>
<td>Gold value (22K, 20g)</td>
<td>20g × ₹13,000/g</td>
<td>₹2,60,000</td>
</tr>
<tr>
<td>GST on gold (3%)</td>
<td>3% of ₹2,60,000</td>
<td>₹7,800</td>
</tr>
<tr>
<td>Making charges</td>
<td>20g × ₹800/g (flat)</td>
<td>₹16,000</td>
</tr>
<tr>
<td>GST on making charges (5%)</td>
<td>5% of ₹16,000</td>
<td>₹800</td>
</tr>
<tr>
<td><strong>Final Price</strong></td>
<td>Sum of all four rows</td>
<td><strong>₹2,84,600</strong></td>
</tr>
</table>

<p>
This is how a properly itemised jewellery invoice should break down GST — as two separate calculations, not one blended tax on the whole bill. If your bill only shows a single GST figure without separating gold value and making charges, it's worth asking your jeweller to itemise both, so you can verify each rate was applied correctly.
</p>

<h2>GST Treatment for Different Gold Formats</h2>

<table>
<tr>
<th>Gold Format</th>
<th>GST Treatment</th>
</tr>
<tr>
<td>Gold bars & coins</td>
<td>3% on value only — no making charges, no 5% layer</td>
</tr>
<tr>
<td>Gold jewellery (itemised bill)</td>
<td>3% on gold value + 5% on making charges, calculated separately</td>
</tr>
<tr>
<td>Digital gold</td>
<td>3% on purchase amount — no making charges involved</td>
</tr>
<tr>
<td>Old gold sold by an individual</td>
<td>No GST — not treated as a business transaction</td>
</tr>
<tr>
<td>Old gold exchanged for new jewellery</td>
<td>GST only on the value addition (new gold + making charges), not on the old gold's value</td>
</tr>
<tr>
<td>Sovereign Gold Bonds / Gold ETFs</td>
<td>No GST on the investment itself — treated as a financial instrument, not goods</td>
</tr>
</table>

<h2>Why Itemised Billing Usually Works Out Cheaper</h2>

<p>
When a jeweller separates gold value and making charges on the invoice, you pay 3% on the (larger) gold value and 5% on the (smaller) making-charges portion. If those two figures were instead combined and taxed as a single composite supply at one blended rate, the effective tax on the making-charges portion could end up higher than the 5% it would otherwise attract. This is a big part of why most organised jewellers and larger retail chains itemise gold value and making charges separately on every bill — it's usually the more tax-efficient structure for the buyer, not just a matter of billing transparency.
</p>

<h2>Who Should Use This Calculator?</h2>

<ul>
<li>Buyers wanting to verify a jeweller's GST calculation before paying, line by line.</li>
<li>Anyone comparing final prices across jewellers who present GST differently on their invoices.</li>
<li>Shoppers budgeting for a purchase who want the full tax-inclusive figure, not just the headline gold rate.</li>
<li>Buyers deciding between gold bars/coins (3% only) and jewellery (3% + 5%) based on the actual tax difference.</li>
<li>Anyone planning an old-gold exchange who wants to understand how GST applies only to the value addition.</li>
</ul>
`,
};