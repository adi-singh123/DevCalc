import { Calculator } from "@/src/types/calculator";

export const goldPriceCalculator: Calculator = {
  slug: "gold-price-calculator",

  name: "Gold Price Calculator",

  description:
    "Find out what your gold is worth in seconds. Enter today's gold rate, weight, and purity — in grams, kilograms, tola, or ounces — and get an instant, accurate value for 24K, 22K, 18K, and 14K gold.",

  category: "Other",

  isPopular: true,

  compareWith: [
    "gold-making-charges-calculator",
    "gold-gst-calculator",
    "gold-purity-calculator",
    "gold-loan-calculator",
    "silver-price-calculator",
  ],

  seo: {
    title:
      "Gold Price Calculator (2026) - Check Gold Value by Weight & Purity",

    description:
      "Calculate what your gold is worth using today's rate, weight, and purity. Works for 24K, 22K, 18K, and 14K gold across grams, kilograms, tola, and ounces.",

    keywords: [
      "gold price calculator",
      "gold value by weight",
      "gold rate calculator",
      "22k gold price calculator",
      "24k gold value per gram",
      "18k gold calculator",
      "gold price per tola",
      "gold weight to value calculator",
      "tola to gram gold rate",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Gold Rate",
      description:
        "Enter today's gold rate per gram for the purity you're checking. Rates move daily, so use the live rate quoted by your local jeweller or a trusted price source, not an old figure.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Weight & Unit",
      description:
        "Enter the weight of your gold and pick the unit you have it in — grams, kilograms, tola, or ounces. The calculator converts everything to grams internally before working out the value.",
      icon: "result",
    },

    {
      step: 3,
      title: "Select Purity",
      description:
        "Choose 24K, 22K, 18K, or 14K. Purity determines how much of the weight is actually gold versus other alloyed metals, which directly changes the value.",
      icon: "location",
    },

    {
      step: 4,
      title: "View Estimated Value",
      description:
        "See the calculated value of your gold instantly, based purely on its metal content — before any making charges, GST, or resale deductions a jeweller might apply.",
      icon: "clock",
    },
  ],

  formula: {
    title: "Gold Value Formula",

    formula: "Gold Value = Gold Rate per Gram × Weight in Grams × Purity Factor",

    explanation:
      "Working out what a piece of gold is worth comes down to three numbers: the current rate for pure gold, how much the piece weighs, and how pure it actually is. The first two are straightforward — the rate is simply the day's market price per gram, and the weight is whatever your piece weighs on a scale, converted into grams if it was measured in another unit. Purity is where most confusion comes in, because gold is rarely sold in its pure, 24-karat form for jewellery; it's usually alloyed with metals like copper, silver, or zinc to make it harder and more wearable, which means the 'purity factor' scales down how much of that weight actually counts as gold.\n\n24K gold is 99.9% pure and is treated as a purity factor of essentially 1 — this is the form used for investment bars and coins, not everyday jewellery, since pure gold is too soft to hold its shape under regular wear. 22K gold, the standard for most Indian jewellery, is 91.6% pure, so its purity factor is roughly 0.916 — meaning a 10-gram 22K chain contains about 9.16 grams of actual gold, with the rest made up of alloyed metal. 18K gold is 75% pure (factor 0.75) and is common in diamond-studded and lightweight designer pieces, where durability and lighter overall weight matter more than maximum gold content. 14K, at 58.3% purity (factor 0.583), is less common in India but does appear in some export-oriented and Western-style designs.\n\nAs of late June 2026, national average reference rates stood at roughly ₹14,200 per gram for 24K gold, ₹13,000 per gram for 22K, ₹10,650 per gram for 18K, and would work out to around ₹8,280 per gram for 14K gold using the purity-factor method. These rates shift daily based on international bullion prices, the rupee-dollar exchange rate, import costs, and local jewellers' association rates, so a rate that's accurate one morning can be noticeably different by the following week — always check the live rate before relying on a calculated figure for anything beyond a rough estimate.\n\nIt's also worth understanding what this formula does and doesn't cover. It gives you the raw metal value of your gold — nothing more. If you're pricing a piece of jewellery you're about to buy, this is only the starting point; making charges, wastage, hallmarking fees, and GST all sit on top of this base value, as covered in a making charges calculator. If you're valuing gold you already own — for insurance, resale, or loan purposes — this formula gives you the fair underlying metal value, but actual resale offers from jewellers are often lower, since many deduct a margin or don't pay the full market rate for old jewellery, especially if it isn't hallmarked.",

    example: {
      input: "Weight: 10 grams, Purity: 22K, Gold rate: ₹13,000 per gram (24K rate)",

      output:
        "Purity factor for 22K = 0.916. Gold Value = ₹13,000 × 10 × 0.916 = ₹1,19,080. This is the raw metal value only — making charges, GST, and hallmarking would add to this if you're buying jewellery, not just valuing existing gold.",
    },

    useCases: [
      "Checking the market value of gold jewellery you already own",
      "Comparing prices across purities before buying (24K vs 22K vs 18K)",
      "Converting gold weight between grams, tola, and ounces",
      "Estimating gold collateral value before taking a gold loan",
      "Cross-checking a jeweller's quoted 'gold value' line on a bill",
    ],
  },

  faqs: [
    {
      question: "How is gold price calculated in India?",
      answer:
        "The base calculation multiplies the current rate per gram for a given purity by the weight of the gold in grams. The rate itself is set daily by local jewellers' associations, taking cues from international bullion prices (quoted on markets like the London Bullion Market), the rupee-dollar exchange rate, import duty on gold, and local demand. This is why the same purity of gold can show a slightly different rate from one city to another on the same day — it isn't one single national number, but a set of closely aligned local rates that track the same global price movements.",
    },

    {
      question: "What is the current gold rate in India?",
      answer:
        "Because gold rates move daily, there's no fixed number, but as a recent reference point, national average rates in late June 2026 were around ₹14,200 per gram for 24K gold, ₹13,000 per gram for 22K gold, and ₹10,650 per gram for 18K gold. These figures shift with global bullion prices and the rupee-dollar exchange rate, so use them only as a ballpark — always check the live rate from your jeweller or a trusted source on the day you need an accurate value.",
    },

    {
      question: "What is the difference between 22K and 24K gold price?",
      answer:
        "24K gold is 99.9% pure, while 22K gold is 91.6% pure — meaning roughly 8.4% of a 22K piece's weight is other metals like copper or zinc rather than gold. Because of this purity difference, 24K gold always commands a higher rate per gram than 22K, typically by around 8-10% at current prices. 24K is mainly used for gold bars and coins meant for investment, since pure gold is too soft to hold intricate shapes; 22K is the standard purity for most Indian jewellery because the added alloy makes it durable enough for daily wear while still keeping the gold content high.",
    },

    {
      question: "How do I convert gold weight from tola to grams?",
      answer:
        "One tola equals 11.6638 grams, though most jewellers round this to 10 grams for convenience when quoting prices — so a 'tola rate' you hear quoted is often really a 10-gram rate, not a strict 11.6638-gram one. If you're converting an exact weight, multiply the number of tolas by 11.6638 to get grams. The tola is a traditional unit still commonly used for pricing gold in India, especially in older billing formats and in some northern and western states, even though modern billing increasingly uses grams directly.",
    },

    {
      question: "How much gold value is 1 gram of 22K gold worth?",
      answer:
        "At a 24K reference rate of roughly ₹13,000-14,200 per gram (recent 2026 levels), 1 gram of 22K gold works out to about ₹11,900-13,000, since 22K gold is 91.6% pure and its rate is calculated by applying that purity factor to the base gold price. The exact figure moves daily with the underlying gold rate, so this should be treated as a snapshot rather than a fixed number — for an accurate current value, apply the day's live rate to the 0.916 purity factor rather than relying on a past figure.",
    },

    {
      question: "How can I check gold purity before calculating its value?",
      answer:
        "The most reliable way is to look for the BIS hallmark and HUID (Hallmark Unique Identification) code stamped on the piece, which can be verified independently through the BIS Care mobile app to confirm both purity and the registration of the jeweller who sold it. A '916' stamp specifically indicates 91.6% purity, i.e. 22K gold. If a piece isn't hallmarked, purity can be checked at an authorised BIS Assaying and Hallmarking Centre using XRF (X-ray Fluorescence) testing, which is a non-destructive way to confirm exact gold content before you rely on a purity figure for valuation.",
    },

    {
      question: "Does the calculated gold value match what a jeweller will pay when I sell?",
      answer:
        "Not always, and it's an important distinction to understand. This kind of calculator gives you the fair market value of the actual gold content based on the day's rate — but resale offers from jewellers are often lower than this figure in practice. Many jewellers deduct a margin when buying back old jewellery, may not offer the full 24K-equivalent rate for lower-purity pieces, and sometimes apply additional deductions if a piece isn't hallmarked or if its purity can't be easily verified. If you're selling gold, it's worth getting quotes from two or three buyers and comparing each offer against the calculated fair value, rather than assuming any single quote reflects the true market rate.",
    },

    {
      question: "Why does gold price vary between cities in India?",
      answer:
        "City-level rate differences come from a mix of factors: each city's jewellers' association sets its own daily rate based on local supply and demand, state-level taxes and levies can differ, and transport and logistics costs vary depending on how far a city is from major import hubs. High-volume metro markets sometimes see marginally lower rates than smaller towns because bulk purchasing further up the supply chain brings small discounts that filter down to local pricing. These gaps are usually small — often well under 1% — so they're rarely worth factoring into a buying or selling decision on their own, but they do explain why a rate you see quoted nationally may not exactly match your local jeweller's board that morning.",
    },

    {
      question: "What is the difference between gold price per gram and per 10 grams?",
      answer:
        "They represent the exact same rate, just expressed at different scales — multiplying the per-gram rate by 10 gives you the per-10-gram (or approximate per-tola) rate, and dividing the per-10-gram figure by 10 gives you the per-gram rate. Indian jewellers commonly quote rates per 10 grams because it aligns with the traditional tola unit and because most everyday jewellery purchases fall in a similar weight range, but the underlying pricing logic is identical regardless of which scale is used to display it.",
    },

    {
      question: "Should I use 24K or 22K rate when comparing gold prices online?",
      answer:
        "Always compare like for like — check that the rate you're looking at matches the purity of the gold you actually have or plan to buy. Comparing a 24K quoted rate against a 22K piece will make the 22K piece look artificially undervalued if you don't apply the purity factor first, since 24K rates are inherently higher per gram. If a source only publishes a 24K rate, you can estimate the 22K equivalent by multiplying it by roughly 0.916, and the 18K equivalent by multiplying by 0.75, before making any comparison.",
    },

    {
      question: "How often does the gold rate change in India?",
      answer:
        "Gold rates in India typically update once or twice a day, tracking movements in international bullion markets, though some sources refresh more frequently during periods of high volatility. Because rates depend on global gold prices, the rupee-dollar exchange rate, and local demand, they can shift meaningfully within a single week even without any single dramatic event — a string of small daily moves in the same direction adds up. If you're timing a purchase or sale around price movement, it's worth checking the rate on the actual day rather than relying on a figure from even a few days earlier.",
    },
  ],

  seoContent: `
<h2>What Is a Gold Price Calculator?</h2>

<p>
A Gold Price Calculator works out the market value of a piece of gold based on three inputs: the current gold rate, the weight, and the purity. Unlike a jewellery billing tool, it doesn't add making charges, wastage, hallmarking fees, or GST — it simply tells you what the metal itself is worth right now. That makes it useful in two very different situations: figuring out how much gold you can afford to buy for a given budget, and checking the fair value of gold you already own before selling it, taking a gold loan against it, or insuring it.
</p>
<p>
One thing worth being clear about: this calculator estimates value using the rate you enter — it doesn't fetch or guarantee the live market rate for you. Gold prices move daily and vary slightly across cities, so always confirm the current local rate with a jeweller, bank, or trusted price source before treating any calculated figure as final, especially for a purchase or sale decision involving a meaningful amount of money.
</p>

<h2>Current Gold Rates in India (Reference, Late June 2026)</h2>

<table>
<tr>
<th>Purity</th>
<th>Composition</th>
<th>Approx. Rate per Gram</th>
<th>Approx. Rate per 10 Grams</th>
</tr>
<tr>
<td>24 Karat (24K)</td>
<td>99.9% pure gold</td>
<td>₹14,200</td>
<td>₹1,42,000</td>
</tr>
<tr>
<td>22 Karat (22K)</td>
<td>91.6% pure gold</td>
<td>₹13,000</td>
<td>₹1,30,000</td>
</tr>
<tr>
<td>18 Karat (18K)</td>
<td>75% pure gold</td>
<td>₹10,650</td>
<td>₹1,06,500</td>
</tr>
<tr>
<td>14 Karat (14K)</td>
<td>58.3% pure gold</td>
<td>₹8,280</td>
<td>₹82,800</td>
</tr>
</table>

<p>
These are national average reference rates and shift daily with international bullion prices and the rupee-dollar exchange rate. 24K is treated as the base rate for pure gold; rates for lower purities are effectively the base rate scaled down by how much actual gold the alloy contains.
</p>

<h2>Gold Value by Weight Unit</h2>

<table>
<tr>
<th>Unit</th>
<th>Equivalent in Grams</th>
<th>Approx. Value at 22K Rate (₹13,000/g base)</th>
</tr>
<tr>
<td>1 Gram</td>
<td>1 g</td>
<td>₹11,908</td>
</tr>
<tr>
<td>1 Tola</td>
<td>11.6638 g</td>
<td>₹1,38,896</td>
</tr>
<tr>
<td>1 Ounce (Troy)</td>
<td>31.1035 g</td>
<td>₹3,70,441</td>
</tr>
<tr>
<td>1 Kilogram</td>
<td>1,000 g</td>
<td>₹1,19,08,000</td>
</tr>
</table>

<p>
The tola is a traditional Indian unit still used in some pricing conventions — one tola equals 11.6638 grams, though jewellers commonly round it to 10 grams for simpler billing. The troy ounce is the standard unit used in international bullion markets and is useful if you're comparing Indian gold rates against global spot prices.
</p>

<h2>Purity Factor: How Karat Affects Value</h2>

<table>
<tr>
<th>Karat</th>
<th>Purity %</th>
<th>Purity Factor</th>
<th>Value of 10g at ₹14,200/g (24K base)</th>
</tr>
<tr>
<td>24K</td>
<td>99.9%</td>
<td>0.999</td>
<td>₹1,41,858</td>
</tr>
<tr>
<td>22K</td>
<td>91.6%</td>
<td>0.916</td>
<td>₹1,30,072</td>
</tr>
<tr>
<td>18K</td>
<td>75%</td>
<td>0.750</td>
<td>₹1,06,500</td>
</tr>
<tr>
<td>14K</td>
<td>58.3%</td>
<td>0.583</td>
<td>₹82,786</td>
</tr>
</table>

<p>
This table shows why two pieces of the exact same weight can have very different values purely because of purity. A 10-gram 24K gold coin is worth roughly 72% more than a 10-gram 14K piece at the same base rate, simply because more of its weight is actual gold rather than alloyed metal. This is also why comparing "price per gram" across two jewellery pieces only makes sense if you first confirm they're the same purity.
</p>

<h2>Gold Value vs Jewellery Bill Value: What's the Difference?</h2>

<p>
It's easy to confuse the raw gold value with the final price you'd pay at a jewellery counter, but they're calculated quite differently. The gold value — what this calculator produces — is purely weight × rate × purity factor. The final jewellery bill adds several layers on top of that: making charges (typically 6-25% of gold value, or a flat per-gram rate), wastage charges if billed separately, a hallmarking fee (usually ₹35-50 per piece), and 3% GST applied to the combined gold-plus-making-charges subtotal. So a piece with a gold value of ₹1,30,000 might carry a final bill closer to ₹1,50,000 once all these components are added — the gap being the labour, certification, and tax layered on top of the metal itself.
</p>
<p>
This distinction matters most when you're comparing a "gold value" figure you've calculated yourself against a jeweller's quoted final price — they're not meant to match, and a large gap between them isn't necessarily a red flag, since it usually just reflects making charges and GST rather than an inflated gold rate.
</p>

<h2>Practical Uses for a Gold Price Calculator</h2>

<ul>
<li><strong>Valuing existing jewellery:</strong> Get a fair market estimate of gold you own before selling, exchanging, or insuring it.</li>
<li><strong>Gold loan planning:</strong> Estimate the underlying collateral value before approaching a bank or NBFC for a gold loan, since lenders typically advance a percentage of this value.</li>
<li><strong>Budget planning before buying:</strong> Work out how much gold weight your budget can buy at a given purity, before making charges and GST are added.</li>
<li><strong>Cross-checking a jeweller's bill:</strong> Verify the "gold value" line item on an itemised bill matches weight × rate × purity, independent of making charges.</li>
<li><strong>Comparing purities:</strong> Decide between 22K and 18K for a purchase by seeing the actual rupee difference in gold content, not just the karat label.</li>
</ul>

<h2>Who Should Use This Calculator?</h2>

<ul>
<li>Anyone wanting to know the current market value of gold jewellery, coins, or bars they already own.</li>
<li>Buyers comparing 24K, 22K, 18K, and 14K options before a purchase.</li>
<li>Borrowers estimating collateral value ahead of a gold loan application.</li>
<li>Investors tracking the value of gold holdings across different weight units.</li>
<li>Anyone converting between grams, tola, and ounces for gold pricing purposes.</li>
</ul>
`,
};