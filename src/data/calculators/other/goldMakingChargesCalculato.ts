import { Calculator } from "@/src/types/calculator";

export const goldMakingChargesCalculator: Calculator = {
  slug: "gold-making-charges-calculator",

  name: "Gold Making Charges Calculator",

  description:
    "Work out the real price of gold jewellery before you walk into a store. Enter the gold rate, weight, purity, making charge percentage (or flat rate), hallmarking fee, and GST — and see exactly how each rupee adds up to your final bill.",

  category: "Other",

  isPopular: true,

  compareWith: [
    "gold-price-calculator",
    "gold-gst-calculator",
    "gold-purity-calculator",
    "gold-loan-calculator",
    "silver-price-calculator",
  ],

  seo: {
    title:
      "Gold Making Charges Calculator (2026) - Jewellery Price with GST & Hallmark",

    description:
      "Buying gold jewellery? Enter gold rate, weight, purity, and making charges to instantly see your final bill — including GST and hallmarking fee — before you reach the billing counter.",

    keywords: [
      "gold making charges calculator",
      "gold jewellery price calculator",
      "gold bill breakdown with gst",
      "22k gold jewellery cost",
      "gold hallmark charges calculator",
      "gold wastage charges estimator",
      "gold making charges percentage",
      "916 gold price calculation",
      "jewellery making charges and tax",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Gold Rate & Weight",
      description:
        "Enter today's gold rate per gram for your chosen purity, and the net weight of the gold in the piece you're buying — not the total weight if it has stones or other materials attached.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Select Purity",
      description:
        "Choose 24K, 22K, 18K, or 14K gold. Purity decides the base rate: 24K is priciest but too soft for jewellery, so most Indian jewellery is sold in 22K or 18K.",
      icon: "result",
    },

    {
      step: 3,
      title: "Add Making Charges & Extras",
      description:
        "Enter the making charge as a percentage of gold value or a flat per-gram rate, add wastage charges if the jeweller quotes them separately, and include the hallmarking fee for the piece.",
      icon: "location",
    },

    {
      step: 4,
      title: "View Final Bill Breakdown",
      description:
        "See the exact split — gold value, making charges, wastage, hallmarking fee, and 3% GST — so you know precisely what you're paying for before you approach the billing counter.",
      icon: "clock",
    },
  ],

  formula: {
    title: "Gold Jewellery Price Formula",

    formula:
      "Final Price = (Gold Rate per gram × Net Weight) + Making Charges + Wastage Charges + Hallmarking Fee, then + 3% GST on the subtotal",

    explanation:
      "A gold jewellery bill starts with the quoted rate for the chosen purity multiplied by net gold weight. Because bullion prices change frequently, use the jeweller's current itemised per-gram rate instead of an old online snapshot.\n\nMaking charges may be quoted as a percentage of gold value or as a flat amount per gram. Wastage may be separate or already included, so confirm the billing basis before comparing stores. BIS guidance lists a ₹45-per-article hallmarking charge for gold jewellery or artefacts.\n\nFor an end-customer jewellery sale, CBIC guidance applies 3% GST to the total transaction value of the jewellery whether making charges are shown separately or not. Job-work treatment between businesses is a separate scenario. Stones and non-gold components should be itemised rather than billed as gold weight.",

    example: {
      input:
        "22K gold chain, Weight: 10g, illustrative rate: ₹10,000/g, making charge: 12% of gold value, hallmarking: ₹45",

      output:
        "Gold value = ₹1,00,000. Making charge = ₹12,000. Subtotal including ₹45 hallmarking = ₹1,12,045. GST at 3% = ₹3,361.35. Illustrative final price = ₹1,15,406.35.",
    },

    useCases: [
      "Comparing quotes across two or more jewellers before buying",
      "Checking whether a bill matches the promised making charge percentage",
      "Budgeting for wedding or festival gold purchases",
      "Understanding resale value versus purchase price",
      "Planning gold coin or bar purchases where making charges are lowest",
    ],
  },

  faqs: [
    {
      question: "What is the current gold rate in India?",
      answer:
        "Gold rates change frequently and there is no permanent India-wide number. Check the jeweller's current rate, confirm its purity and whether it is quoted per gram or per 10 grams, and enter that exact basis. The calculator does not claim to fetch a live bullion rate.",
    },

    {
      question: "How much are making charges on gold jewellery in India?",
      answer:
        "Making charges typically fall between 6% and 25% of the gold value when charged as a percentage, or ₹300 to ₹1,000 per gram when charged as a flat rate. Where a piece lands in that range depends heavily on design complexity: simple machine-made chains, bangles, and coins sit at the lower end — some large jewellery brands price gold coins as low as 3% — while intricately handcrafted bridal or antique-finish jewellery sits at the higher end because of the additional skill and time involved. Brand positioning also plays a role, with larger, well-known jewellers sometimes charging more for the same design than a smaller local goldsmith, partly to cover certification, retail overheads, and after-sales service.",
    },

    {
      question: "Is GST charged on both gold value and making charges?",
      answer:
        "Yes. In India, a flat 3% GST applies to the combined value of the gold and the making charges, not just the gold price alone. So if your gold value plus making charges add up to ₹1,00,000, GST is calculated on that full ₹1,00,000, not on the gold portion in isolation. This is a uniform government rate that applies whether you're buying from a large retail chain or a small neighbourhood jeweller, so it shouldn't vary from store to store — if a jeweller quotes GST differently, that's worth questioning directly.",
    },

    {
      question: "What is the difference between wastage charges and making charges?",
      answer:
        "Making charges cover the labour, design, and craftsmanship that goes into shaping raw gold into a finished piece — think of it as the artisan's fee. Wastage charges, on the other hand, compensate the jeweller for the small quantity of gold physically lost during cutting, melting, filing, and polishing, typically quoted as an additional 2% to 7% of the gold value. Some jewellers bill these as two separate line items, while others fold wastage into a single, slightly higher making charge percentage. Neither approach is inherently better for the buyer, but it does mean two quotes with different-looking making charge percentages can end up costing the same — always ask whether wastage is included before comparing numbers side by side.",
    },

    {
      question: "How much is the hallmarking charge on gold jewellery?",
      answer:
        "BIS jeweller guidance lists the hallmarking charge as ₹45 per gold jewellery or artefact. A hallmarked item carries the BIS mark, purity/fineness and a six-character alphanumeric HUID that consumers can check with Verify HUID in the BIS Care app. Confirm the number of separately hallmarked articles on the invoice.",
    },

    {
      question: "Should I choose a percentage-based or flat-rate making charge?",
      answer:
        "It depends on which way gold prices are likely to move and how much price certainty you want. A percentage-based making charge rises and falls with the gold rate — if the gold price shoots up between now and when you finalise a custom order, your making charge in rupee terms rises too, since it's a percentage of a bigger number. A flat per-gram rate stays fixed regardless of how the gold price moves, which gives you cost certainty but means you won't benefit if gold prices happen to fall before your purchase is finalised. As a rough rule, flat rates tend to work out cheaper when gold prices are rising quickly, while percentage-based charges can work out cheaper if prices are falling or flat — though the actual difference is usually modest unless the gold rate swings sharply.",
    },

    {
      question: "Why do the same design's making charges vary between jewellers?",
      answer:
        "The making charge for an identical design can genuinely differ from one jeweller to another because of a mix of factors: whether the piece is handmade or machine-made, the jeweller's brand positioning and retail overheads, regional labour costs, and how much of the workmanship is outsourced versus done in-house. A large branded showroom in a metro city may charge more for the same design than a smaller local goldsmith, partly because of higher rent, marketing spend, and after-sales service commitments. This is exactly why comparing making charges — not just the final bill total — across two or three jewellers before a big purchase is worth the extra ten minutes.",
    },

    {
      question: "Are making charges lower on gold coins and bars?",
      answer:
        "Generally, yes. Gold coins and bars require far less craftsmanship than jewellery, since they're simple, standardised shapes with no intricate design work, so making charges on coins are usually much lower — sometimes as low as 3% at some large retailers, compared to the 6-25% range typical for jewellery. This is one reason gold coins and bars are often the more cost-effective route if your main goal is investment rather than something to wear, since a smaller share of your money goes toward labour and a larger share goes toward the actual gold content.",
    },

    {
      question: "How can I reduce making charges when buying gold jewellery?",
      answer:
        "A few practical approaches tend to help: choosing simpler, machine-made designs over heavily handcrafted ones, since machine-made pieces typically cut making charges noticeably compared to intricate handwork; buying during festive or promotional periods when jewellers often run discounts specifically on making charges rather than on gold itself; comparing quotes from at least two or three jewellers for the same design before committing; and asking directly whether the quoted percentage already includes wastage, since some stores use that ambiguity to make their headline making-charge number look lower than it actually is. Negotiating is also more normal than many first-time buyers expect, particularly for larger purchases like wedding sets.",
    },

    {
      question: "Does gold price vary between cities in India?",
      answer:
        "Yes, though usually only by a small margin rather than a dramatic one. City-level differences come from local jewellers' association rates, state-level taxes, transport and logistics costs, and how competitive the local gold market is — cities with a very high volume of daily transactions sometimes see marginally lower rates than smaller towns due to bulk-buying discounts further up the supply chain. As an example, rates in a large southern metro have recently run a touch below the national average, while other cities have run a touch above it. The gap is typically a small percentage rather than a meaningful difference, so it's rarely worth travelling to another city purely to chase a lower gold rate — but it's still worth checking the local rate published by your city's jewellers' association before buying.",
    },
  ],

  seoContent: `
<h2>What Is a Gold Making Charges Calculator?</h2>

<p>
A Gold Making Charges Calculator breaks down the actual cost of a piece of gold jewellery into its individual components — gold value, making charges, wastage (if applicable), hallmarking fee, and GST — so you know exactly what you're paying for before you reach the billing counter. Most buyers only see one final number on the bill, which makes it hard to tell whether the making charge quoted verbally by a salesperson actually matches what's printed. This calculator removes that guesswork by doing the maths transparently, the same way the jeweller's own billing system does internally.
</p>
<p>
It's worth being clear about one thing upfront: this calculator estimates a price based on the numbers you enter — it doesn't set or verify the day's gold rate for you. Gold rates move daily and vary slightly by city, so always confirm the live rate with your jeweller or a trusted local source on the day of purchase, and use this tool to check the maths on top of that rate.
</p>

<h2>Gold Purity and Rate Basis</h2>

<table>
<tr>
<th>Purity</th>
<th>Composition</th>
<th>Purity Factor</th>
<th>Rate Check</th>
</tr>
<tr>
<td>24 Karat (24K)</td>
<td>99.9% pure gold</td>
<td>0.999</td>
<td>Confirm the current 24K quote</td>
</tr>
<tr>
<td>22 Karat (22K)</td>
<td>91.6% pure gold</td>
<td>0.916</td>
<td>Confirm the current 22K quote</td>
</tr>
<tr>
<td>18 Karat (18K)</td>
<td>75% pure gold</td>
<td>0.750</td>
<td>Confirm the current 18K quote</td>
</tr>
</table>

<p>
Rates move frequently. Confirm that the quote and jewellery use the same purity and unit before entering it. Do not apply a purity factor again when the jeweller has already quoted a rate for that exact purity.
</p>

<h2>Making Charges by Jewellery Type</h2>

<table>
<tr>
<th>Jewellery Type</th>
<th>Typical Making Charge</th>
<th>Why</th>
</tr>
<tr>
<td>Gold coins & bars</td>
<td>3% - 8%</td>
<td>Standardised shapes, minimal craftsmanship needed</td>
</tr>
<tr>
<td>Machine-made chains & bangles</td>
<td>6% - 12%</td>
<td>Produced in bulk using machinery, faster to finish</td>
</tr>
<tr>
<td>Standard rings & earrings</td>
<td>8% - 16%</td>
<td>Moderate handwork, common everyday designs</td>
</tr>
<tr>
<td>Handcrafted / antique-finish pieces</td>
<td>15% - 25%</td>
<td>Intricate manual work, longer production time</td>
</tr>
<tr>
<td>Bridal & studded sets</td>
<td>15% - 25%+</td>
<td>Complex design, stone-setting, higher skill required</td>
</tr>
</table>

<p>
Some jewellers quote making charges as a flat per-gram rate instead of a percentage — typically ranging from ₹300 to ₹1,000 per gram depending on design complexity and brand. A flat rate gives you price certainty regardless of how the gold rate moves before your purchase is finalised, while a percentage-based charge moves in step with the gold price, which can work in your favour when rates are falling.
</p>

<h2>Full Bill Breakdown: A Worked Example</h2>

<table>
<tr>
<th>Component</th>
<th>Calculation</th>
<th>Amount</th>
</tr>
<tr>
<td>Gold value (22K, 10g)</td>
<td>10g × illustrative ₹10,000/g</td>
<td>₹1,00,000</td>
</tr>
<tr>
<td>Making charge (12%)</td>
<td>12% of ₹1,00,000</td>
<td>₹12,000</td>
</tr>
<tr>
<td>Hallmarking fee</td>
<td>Fixed, per piece</td>
<td>₹45</td>
</tr>
<tr>
<td>Subtotal</td>
<td>₹1,00,000 + ₹12,000 + ₹45</td>
<td>₹1,12,045</td>
</tr>
<tr>
<td>GST (3%)</td>
<td>3% of ₹1,12,045</td>
<td>₹3,361.35</td>
</tr>
<tr>
<td><strong>Final Price</strong></td>
<td>Subtotal + GST</td>
<td><strong>≈ ₹1,15,406.35</strong></td>
</tr>
</table>

<p>
This example uses a percentage-based making charge with wastage folded into it. If your jeweller bills wastage separately (commonly 2-7% of the gold value), it should be added as its own line before GST is calculated, which will raise the final total slightly compared to a quote where wastage is already included in the making charge.
</p>

<h2>Where the Money Goes: Cost Component Breakdown</h2>

<p>
On a typical mid-range gold jewellery purchase, the gold value itself usually accounts for the large majority of the bill — often 75-85% of the total — with making charges, wastage, hallmarking, and GST together making up the rest. This split shifts noticeably depending on the type of piece: a simple machine-made chain might see gold value make up over 90% of the bill, since making charges are low, while an intricate handcrafted bridal set can see making charges alone contribute close to a quarter of the total price. Understanding this split is useful context when comparing a "cheaper" quote from one jeweller against a "costlier" one from another — the difference is almost always in the making charge and wastage components, not the underlying gold rate, which tends to be similar across nearby stores on any given day.
</p>

<h2>City-Wise Gold Rate Variation</h2>

<p>
Gold quotes can differ by city, seller, purity, time, and whether the quote is a retail or buy-back rate. Use the exact rate and unit written on the proposed itemised bill rather than a national snapshot from another date or seller.
</p>

<h2>Understanding Your Gold Bill: What to Check Before You Pay</h2>

<ul>
<li><strong>Gold rate used:</strong> Confirm it matches the day's prevailing local rate for your chosen purity — ask to see it, don't just take a verbal figure.</li>
<li><strong>Net weight vs gross weight:</strong> Make sure you're being charged the gold rate only for the actual gold weight, not for attached stones or other materials.</li>
<li><strong>Making charge basis:</strong> Check whether it's a percentage of gold value or a flat per-gram rate, and whether wastage is already included.</li>
<li><strong>Hallmarking and HUID:</strong> Look for the BIS hallmark and HUID code, and verify the small hallmarking fee is listed separately, not silently folded into making charges.</li>
<li><strong>GST calculation:</strong> Confirm GST (3%) is applied to the gold value plus making charges combined, not calculated incorrectly on just one component.</li>
<li><strong>Stone or diamond value:</strong> If the piece is studded, its price should be itemised separately from the gold weight and value.</li>
</ul>

<h2>Who Should Use This Calculator?</h2>

<ul>
<li>Buyers planning a wedding, festival, or gifting purchase who want to estimate the total bill before visiting a store.</li>
<li>Anyone comparing quotes from two or more jewellers for a similar design.</li>
<li>Investors deciding between gold coins/bars (lower making charges) versus jewellery for a purchase meant partly as savings.</li>
<li>First-time buyers who want to understand and double-check an itemised jewellery bill line by line.</li>
<li>Anyone negotiating making charges who wants a clear reference range before starting the conversation.</li>
</ul>
`,
};
