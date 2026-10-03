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
      "If the entered rate is a quoted 24K rate, the calculator keeps 24K at that rate and estimates lower-purity rates using 0.916 for 22K, 0.75 for 18K, or 0.583 for 14K. It reports physical fine-gold content separately, treating 24K as 99.9% pure. If the quote already matches the selected purity, mark it accordingly so purity is not applied twice. Gold rates change by market, city, seller, time, and buy-or-sell basis, so enter a current comparable rate. The result is raw metal value and excludes making charges, GST, stones and resale deductions.",

    example: {
      input: "Weight: 10 grams, Purity: 22K, example 24K reference rate: ₹10,000 per gram",

      output:
        "Purity factor for 22K = 0.916. Gold Value = ₹10,000 × 10 × 0.916 = ₹91,600. The rate is deliberately illustrative; replace it with a current quote.",
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
        "Gold has no single permanent India-wide rate. Quotes can change during the day and vary by purity, unit, city, seller, and buy-versus-sell basis. Check a current source, confirm whether it quotes per gram or per 10 grams and whether it is 24K or another purity, then enter that rate in the calculator.",
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
        "When starting from a 24K reference rate, multiply it by 0.916 to estimate the metal value of 1 gram of 22K gold. For example, a purely illustrative ₹10,000-per-gram 24K rate gives ₹9,160 per gram at 22K. Use a current rate for a current result.",
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

<h2>Gold Purity Reference</h2>

<table>
<tr>
<th>Purity</th>
<th>Composition</th>
<th>Purity Factor</th>
<th>Value from a 24K Base Rate</th>
</tr>
<tr>
<td>24 Karat (24K)</td>
<td>99.9% pure gold</td>
<td>0.999</td>
<td>Base rate × 1.000</td>
</tr>
<tr>
<td>22 Karat (22K)</td>
<td>91.6% pure gold</td>
<td>0.916</td>
<td>Base rate × 0.916</td>
</tr>
<tr>
<td>18 Karat (18K)</td>
<td>75% pure gold</td>
<td>0.750</td>
<td>Base rate × 0.750</td>
</tr>
<tr>
<td>14 Karat (14K)</td>
<td>58.3% pure gold</td>
<td>0.583</td>
<td>Base rate × 0.583</td>
</tr>
</table>

<p>
Use a current 24K rate as the base only when the source clearly identifies it as 24K and uses the same unit as the calculator. If the entered quote is already for 22K, 18K, or 14K, select the option indicating that the rate already matches the chosen purity.
</p>

<h2>Gold Value by Weight Unit</h2>

<table>
<tr>
<th>Unit</th>
<th>Equivalent in Grams</th>
<th>Conversion</th>
</tr>
<tr>
<td>1 Gram</td>
<td>1 g</td>
<td>entered per-gram value</td>
</tr>
<tr>
<td>1 Tola</td>
<td>11.6638 g</td>
<td>per-gram value × 11.6638</td>
</tr>
<tr>
<td>1 Ounce (Troy)</td>
<td>31.1035 g</td>
<td>per-gram value × 31.1035</td>
</tr>
<tr>
<td>1 Kilogram</td>
<td>1,000 g</td>
<td>per-gram value × 1,000</td>
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
<th>Value of 10g from a 24K Base Rate</th>
</tr>
<tr>
<td>24K</td>
<td>99.9%</td>
<td>0.999</td>
<td>base rate × 10</td>
</tr>
<tr>
<td>22K</td>
<td>91.6%</td>
<td>0.916</td>
<td>base rate × 9.16</td>
</tr>
<tr>
<td>18K</td>
<td>75%</td>
<td>0.750</td>
<td>base rate × 7.50</td>
</tr>
<tr>
<td>14K</td>
<td>58.3%</td>
<td>0.583</td>
<td>base rate × 5.83</td>
</tr>
</table>

<p>
This table shows why two pieces of the exact same weight can have very different values purely because of purity. A 10-gram 24K gold coin is worth roughly 72% more than a 10-gram 14K piece at the same base rate, simply because more of its weight is actual gold rather than alloyed metal. This is also why comparing "price per gram" across two jewellery pieces only makes sense if you first confirm they're the same purity.
</p>

<h2>Gold Value vs Jewellery Bill Value: What's the Difference?</h2>

<p>
It's easy to confuse raw gold value with the final jewellery price. This calculator returns weight × rate × purity factor. A retail bill may also include making charges, separately disclosed wastage, the applicable BIS hallmarking charge, stones and GST. BIS jeweller guidance lists ₹45 per gold article for hallmarking, while CBIC guidance applies 3% GST to the total transaction value of jewellery whether making charges are shown separately or not.
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
