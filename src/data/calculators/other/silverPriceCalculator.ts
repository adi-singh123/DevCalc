import { Calculator } from "@/src/types/calculator";

export const silverPriceCalculator: Calculator = {
  slug: "silver-price-calculator",

  name: "Silver Price Calculator",

  description:
    "Find out what your silver is worth in seconds. Enter today's silver rate, weight, and purity — in grams, kilograms, tola, or ounces — and get an instant, accurate value for fine, sterling, and other common silver purities.",

  category: "Other",

  isPopular: true,

  compareWith: [
    "gold-price-calculator",
    "gold-making-charges-calculator",
    "gold-gst-calculator",
    "gold-purity-calculator",
    "gold-loan-calculator",
  ],

  seo: {
    title:
      "Silver Price Calculator (2026) - Check Silver Value by Weight & Purity",

    description:
      "Calculate what your silver is worth using today's rate, weight, and purity. Works for 999 fine silver, 925 sterling silver, and 900 coin silver across grams, kilograms, tola, and ounces.",

    keywords: [
      "silver price calculator",
      "silver value by weight",
      "silver rate calculator",
      "999 fine silver calculator",
      "925 sterling silver value",
      "silver coin valuation",
      "silver price per tola",
      "silver price per ounce",
      "silver purity calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Silver Rate",
      description:
        "Enter today's silver rate per gram for the purity you're checking. Silver rates move daily and swing more sharply than gold, so use a live rate rather than a figure from a few days back.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Weight & Unit",
      description:
        "Enter the weight of your silver and pick the unit you have it in — grams, kilograms, tola, or ounces. The calculator converts everything to grams internally before working out the value.",
      icon: "result",
    },

    {
      step: 3,
      title: "Select Purity",
      description:
        "Choose 999 (fine silver), 925 (sterling), 900, or 800 purity. Most everyday silverware and jewellery is 925 sterling, not pure 999 silver, so getting this right matters for an accurate value.",
      icon: "location",
    },

    {
      step: 4,
      title: "View Estimated Value",
      description:
        "See the calculated value of your silver instantly, based purely on its metal content — before any making charges, GST, or resale deductions a jeweller might apply.",
      icon: "clock",
    },
  ],

  formula: {
    title: "Silver Value Formula",

    formula:
      "Silver Value = Silver Rate per Gram × Weight in Grams × Purity Factor",

    explanation:
      "A quoted 999 fine-silver rate is kept unchanged; lower-purity rate factors are 0.925 for sterling silver, 0.9 for coin silver, and 0.8 for 800 silver. Physical fine-silver content is reported separately and treats 999 silver as 99.9% pure. If the quote already matches the selected purity, mark it accordingly so purity is not applied twice. Confirm whether a current quote is per gram or kilogram and whether it is a retail or buy-back rate. The result covers metal value only and excludes labour, GST and dealer deductions.",

    example: {
      input:
        "Weight: 100 grams, Purity: 925 (Sterling), example 999 reference rate: ₹100 per gram",

      output:
        "Purity factor for 925 = 0.925. Silver Value = ₹100 × 100 × 0.925 = ₹9,250. The rate is illustrative; replace it with a current quote.",
    },

    useCases: [
      "Checking the market value of silverware, coins, or jewellery you already own",
      "Comparing prices across purities before buying (999 vs 925 vs 900)",
      "Converting silver weight between grams, tola, and ounces",
      "Estimating silver holdings value for investment tracking",
      "Cross-checking a jeweller's or dealer's quoted 'silver value' line on a bill",
    ],
  },

  faqs: [
    {
      question: "How is silver price calculated in India?",
      answer:
        "The base calculation multiplies the current rate per gram for pure or a given-purity silver by the item's weight in grams, then applies a purity factor if the silver isn't 999 fine. The underlying rate itself is influenced by international silver prices, industrial demand (silver is widely used in electronics, solar panels, and other manufacturing), the rupee-dollar exchange rate, and local market conditions. Because a meaningful share of silver demand comes from industry rather than jewellery or investment alone, its price can move somewhat independently of gold, even though both are precious metals.",
    },

    {
      question: "What is the current silver rate in India?",
      answer:
        "There is no single permanent India-wide silver rate. Confirm a current quote and whether it is per gram or kilogram, for 999 silver or another purity, and a retail or buy-back price. Divide a per-kilogram quote by 1,000 before entering a per-gram rate.",
    },

    {
      question: "What is the difference between 999 and 925 silver?",
      answer:
        "999 silver, often called fine silver, is 99.9% pure and carries almost no alloy content — it's the form used for investment bars and coins, since pure silver is too soft to hold up well in everyday items like jewellery or cutlery. 925 silver, known as sterling silver, is 92.5% pure, with the remaining 7.5% typically made up of copper or another metal added for strength and durability. Because of this purity gap, 999 silver commands a higher rate per gram than 925 — sterling silver's value works out to roughly 92.5% of the fine silver rate. Sterling is the standard purity for silver jewellery and decorative items worldwide, since it strikes a practical balance between silver content and everyday durability.",
    },

    {
      question: "How do I convert silver weight from tola to grams?",
      answer:
        "One tola equals 11.6638 grams, the same conversion used for gold, since it's a traditional weight unit rather than one specific to a metal. Many dealers round this to 10 grams for simpler pricing, so a quoted 'tola rate' is often effectively a 10-gram rate. For an exact conversion, multiply the number of tolas by 11.6638 to get the equivalent weight in grams before applying the silver rate.",
    },

    {
      question: "How much is 1 gram of silver worth right now?",
      answer:
        "Multiply the current 999 fine-silver rate by 0.925 to estimate the metal value of 1 gram of sterling silver. For example, a purely illustrative ₹100-per-gram 999 rate gives ₹92.50 per gram at 925 purity.",
    },

    {
      question: "How can I check silver purity before calculating its value?",
      answer:
        "Look for a purity hallmark stamped on the item — '999' indicates fine silver, '925' indicates sterling silver, and similar three-digit stamps indicate other purities. Reputable silver jewellery and silverware in India increasingly carries BIS hallmarking for silver as well, similar in principle to gold hallmarking, which can offer added assurance of genuine purity. If an item isn't stamped or the stamp is worn or unclear, purity can be verified using acid testing or XRF (X-ray Fluorescence) testing at a jeweller or an assaying centre, both of which give a reliable read on actual silver content before you rely on it for a valuation.",
    },

    {
      question: "Does the calculated silver value match what a dealer will pay when I sell?",
      answer:
        "Not always. This kind of calculator gives you the fair market value of the actual silver content at the day's rate, but buy-back offers from jewellers or dealers are frequently lower in practice. Many dealers apply a margin when purchasing silver back from customers, may discount further for silver that isn't clearly stamped with its purity, and sometimes deduct for wear, tarnishing, or attached non-silver components like stones or fittings that don't count toward the silver weight. If you're planning to sell, it's worth getting quotes from a couple of dealers and comparing them against the calculated fair value rather than accepting the first offer.",
    },

    {
      question: "Why is silver more volatile than gold in price?",
      answer:
        "Silver's price tends to swing more sharply than gold's on a percentage basis largely because the overall silver market is smaller, which makes it more sensitive to shifts in supply and demand. A significant portion of silver demand also comes from industrial use — electronics, solar panel manufacturing, and various chemical and manufacturing processes — rather than purely from jewellery and investment demand as with gold, so silver prices can react to industrial trends and manufacturing cycles in ways gold generally doesn't. This means silver can rally or fall faster than gold over short periods, even when the two metals are moving in the same broad direction over a longer stretch of time.",
    },

    {
      question: "What is the difference between silver price per gram and per kg?",
      answer:
        "They represent the same underlying rate at different scales — multiplying the per-gram rate by 1,000 gives the per-kilogram rate, and dividing the per-kilogram rate by 1,000 gives the per-gram rate. Silver is commonly quoted per kilogram in India because it's typically bought and sold in larger bulk quantities than gold, especially for silverware, utensils, and bars, whereas gold is more commonly quoted per gram or per 10 grams given the smaller typical purchase sizes.",
    },

    {
      question: "Should I use the 999 or 925 rate when comparing silver prices online?",
      answer:
        "Always match the rate to the actual purity of the silver you're checking or planning to buy. A price comparison that uses a 999 fine-silver rate against a piece that's actually 925 sterling will make the sterling piece look artificially undervalued unless you first apply the correct purity factor. If a source only publishes a 999 rate, you can estimate the 925 equivalent by multiplying it by roughly 0.925, and similarly adjust for 900 or 800 purity using their respective factors, before comparing prices across sources or sellers.",
    },

    {
      question: "How often does the silver rate change in India?",
      answer:
        "Silver rates in India typically update at least once daily, in step with international silver market movements, though prices can shift more noticeably within a single day compared to gold, given silver's smaller market size and industrial demand sensitivity. Because of this added volatility, it's especially worth checking a live rate on the actual day of a purchase or sale rather than relying on even a two or three day old figure, since the gap between an old rate and the current one can be larger than the equivalent gap for gold over the same period.",
    },
  ],

  seoContent: `
<h2>What Is a Silver Price Calculator?</h2>

<p>
A Silver Price Calculator works out the market value of silver based on three inputs: the current silver rate, the weight, and the purity. Like a gold price calculator, it focuses purely on the metal's value — it doesn't add making charges, GST, or the margin a dealer might apply when buying silver back from you. This makes it useful whether you're checking what a piece of silverware, a set of coins, or investment bars are worth, or working out roughly how much silver a given budget can buy.
</p>
<p>
One important caveat: this calculator works with the rate you enter — it doesn't fetch or guarantee the live market rate itself. Silver prices move daily, and can move more sharply within a single day than gold prices typically do, so always confirm the current rate with a trusted dealer or price source before treating a calculated figure as final, particularly for any purchase or sale of meaningful value.
</p>

<h2>Silver Purity Reference</h2>

<table>
<tr>
<th>Purity</th>
<th>Composition</th>
<th>Purity Factor</th>
<th>Value from a 999 Base Rate</th>
</tr>
<tr>
<td>999 (Fine Silver)</td>
<td>99.9% pure silver</td>
<td>0.999</td>
<td>Base rate × 1.000</td>
</tr>
<tr>
<td>925 (Sterling Silver)</td>
<td>92.5% pure silver</td>
<td>0.925</td>
<td>Base rate × 0.925</td>
</tr>
<tr>
<td>900 (Coin Silver)</td>
<td>90% pure silver</td>
<td>0.900</td>
<td>Base rate × 0.900</td>
</tr>
<tr>
<td>800</td>
<td>80% pure silver</td>
<td>0.800</td>
<td>Base rate × 0.800</td>
</tr>
</table>

<p>
Use a current 999 fine-silver rate as the base only when the source clearly identifies the purity and unit. When a quote is per kilogram, divide it by 1,000 before entering a per-gram rate.
</p>

<h2>Silver Value by Weight Unit</h2>

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
The troy ounce is the standard unit used in international bullion and commodities markets, useful if you're comparing Indian silver rates against global spot prices. The tola remains a traditional reference unit in some parts of India, particularly for older silverware and coin collections priced using pre-decimal conventions.
</p>

<h2>Purity Factor: How Fineness Affects Silver Value</h2>

<table>
<tr>
<th>Purity</th>
<th>Silver Content %</th>
<th>Purity Factor</th>
<th>Value of 100g from a 999 Base Rate</th>
</tr>
<tr>
<td>999</td>
<td>99.9%</td>
<td>0.999</td>
<td>base rate × 100</td>
</tr>
<tr>
<td>925</td>
<td>92.5%</td>
<td>0.925</td>
<td>base rate × 92.5</td>
</tr>
<tr>
<td>900</td>
<td>90%</td>
<td>0.900</td>
<td>base rate × 90</td>
</tr>
<tr>
<td>800</td>
<td>80%</td>
<td>0.800</td>
<td>base rate × 80</td>
</tr>
</table>

<p>
This shows why two silver items of identical weight can carry noticeably different values purely because of purity. A 100-gram bar of 999 fine silver is worth about 25% more than a 100-gram item at 800 purity, even though both weigh exactly the same — the difference is entirely down to how much of that weight is actual silver versus alloyed metal.
</p>

<h2>Silver Value vs Final Bill: What's the Difference?</h2>

<p>
Just like with gold, the raw silver value calculated here isn't the same as what you'd pay at a jewellery or silverware counter. The silver value is purely weight × rate × purity factor. A finished item's bill typically adds making or crafting charges (which vary widely depending on whether the piece is machine-made or hand-worked), and 3% GST applied to the combined silver-plus-making-charges subtotal, similar to gold. So a silver item with a raw metal value of ₹20,000 might carry a final retail price closer to ₹25,000-28,000 once labour and tax are factored in, with the gap reflecting craftsmanship rather than a change in the underlying silver rate.
</p>
<p>
This distinction is particularly useful when you're evaluating whether a silverware or jewellery quote seems reasonable — comparing the quoted final price against the calculated raw silver value tells you how much you're paying for craftsmanship and certification, separate from the metal itself.
</p>

<h2>Practical Uses for a Silver Price Calculator</h2>

<ul>
<li><strong>Valuing existing silverware or jewellery:</strong> Get a fair market estimate of silver items you own before selling, exchanging, or insuring them.</li>
<li><strong>Investment tracking:</strong> Monitor the current value of silver bars, coins, or bullion holdings as rates move.</li>
<li><strong>Budget planning before buying:</strong> Work out how much silver weight your budget can buy at a given purity, before making charges and GST are added.</li>
<li><strong>Cross-checking a dealer's bill:</strong> Verify the "silver value" line item on an itemised bill matches weight × rate × purity, independent of crafting charges.</li>
<li><strong>Comparing purities:</strong> Understand the actual rupee difference between 999, 925, and other purities before choosing between investment-grade silver and crafted sterling pieces.</li>
</ul>

<h2>Who Should Use This Calculator?</h2>

<ul>
<li>Anyone wanting to know the current market value of silverware, coins, bars, or jewellery they already own.</li>
<li>Buyers comparing 999, 925, and other purity options before a purchase.</li>
<li>Investors tracking the value of silver holdings across different weight units.</li>
<li>Anyone converting between grams, tola, and ounces for silver pricing purposes.</li>
<li>Sellers wanting a fair reference point before accepting a dealer's buy-back offer.</li>
</ul>
`,
};
