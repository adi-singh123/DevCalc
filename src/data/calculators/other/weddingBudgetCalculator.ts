import { Calculator } from "@/src/types/calculator";

export const weddingBudgetCalculator: Calculator = {
  slug: "wedding-budget-calculator",
  name: "Wedding Budget Calculator",
  description:
    "Estimate your total wedding cost in India by guest count, city tier, and style, with a category-wise breakdown covering venue, catering, décor, photography, attire, and more.",
  category: "Other",
  isPopular: true,
  compareWith: [
    "party-budget-calculator",
    "event-cost-calculator",
    "gold-price-calculator",
    "gold-making-charges-calculator",
    "house-construction-cost-calculator",
  ],

  seo: {
    title: "Wedding Budget Calculator India (2026) - Full Cost Breakdown",
    description:
      "Calculate your Indian wedding budget instantly by guest count, city, and wedding style. Get a category-wise breakdown for venue, catering, décor, photography, attire and jewellery.",
    keywords: [
      "wedding budget calculator",
      "wedding cost estimator",
      "wedding expense breakdown",
      "wedding cost per guest calculator",
      "wedding catering cost per plate",
      "wedding venue cost estimator",
      "destination wedding cost calculator",
      "wedding photography budget",
      "marriage budget planner",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter guest count and city tier",
      description:
        "Tell us how many guests you're expecting and whether your wedding is in a metro, Tier-2, or Tier-3 city, since venue and catering rates shift sharply by location.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Pick your wedding style and number of events",
      description:
        "Choose Budget, Standard, Premium, or Royal, and tell us how many functions you're hosting (mehendi, sangeet, ceremony, reception) — each additional event adds venue and catering costs.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Get your instant category breakdown",
      description:
        "See exactly how your budget splits across venue, catering, décor, photography, attire and jewellery, entertainment, and a contingency buffer.",
      icon: "result",
    },
    {
      step: 4,
      title: "Adjust and compare scenarios",
      description:
        "Change the guest count or style to instantly see how the total and cost-per-guest shift, so you can find the version of the day that fits your budget.",
      icon: "clock",
    },
  ],

  formula: {
    title: "Wedding Budget Calculation Formula",
    formula:
      "Total Cost = Guests × Per-Guest Rate (Venue + Catering) × City Multiplier × Style Multiplier × Number of Events, plus fixed-cost categories (attire, jewellery, photography) and a contingency buffer",
    explanation: `An Indian wedding budget is really two different kinds of costs added together. The first kind scales with your guest count — catering is the clearest example, since every extra guest adds one more plate at the caterer's per-head rate, and venue capacity has to grow to match. The second kind is largely fixed regardless of headcount — your photography package, your bridal jewellery, and your outfits cost roughly the same whether 150 or 350 people are watching. A good calculator has to treat these two cost types differently instead of applying one blended percentage to everything, which is why this tool separates variable per-guest costs from fixed lump-sum categories before adding them together.

Guest count is the single biggest lever in the total. Catering typically consumes 20-30% of an Indian wedding budget and per-plate rates for a mid-range multi-cuisine buffet run roughly ₹600-₹1,400 depending on menu complexity, with rates actually dropping slightly per head as guest count rises past 300 due to bulk-catering economics. Venue hire moves in the same direction — more guests need a bigger hall, which usually means a bigger rental fee. This calculator applies a combined venue-plus-catering rate per guest that already reflects typical 2026 pricing for a multi-cuisine buffet with a mid-tier banquet hall, then lets you scale it up or down using the style multiplier.

City tier changes almost every number in the budget. A banquet hall or 5-star hotel in Delhi, Mumbai, or Bangalore can cost 40-60% more than an equivalent-quality venue in a Tier-2 city like Jaipur, Lucknow, or Coimbatore, and Tier-3 towns are cheaper still because of lower real estate and labour costs. This calculator applies a city multiplier — roughly 1.35x for metros, 1.0x for Tier-2 cities, and 0.75x for Tier-3 towns and rural venues — to the variable venue-and-catering cost, since that is where location pricing differences show up most sharply. Fixed costs like jewellery and outfits shift less by city because these are typically bought from national or online sellers regardless of where the wedding is held.

Wedding style is the second major multiplier, and it works on top of the city adjustment. A Budget wedding leans on community halls, standard buffets, and simpler décor; a Standard wedding uses a mid-tier banquet hall with a multi-cuisine spread; a Premium wedding adds a well-known photographer, elaborate décor, and a better hotel venue; and a Royal wedding moves into 5-star and heritage-property territory with celebrity vendors. Each step up roughly doubles the per-guest venue-and-catering rate and significantly raises the fixed-cost categories, which is consistent with real 2026 vendor quotes where luxury weddings can run 3-5x a budget wedding for the same guest count.

Multiple events compound the total in a way many first-time planners underestimate. A standard three-event wedding — mehendi/sangeet, the main ceremony, and the reception — needs separate venue hire, catering, and décor for each function, and combining events (for instance folding haldi into the mehendi) can save ₹2-5 lakh outright. This calculator multiplies the variable venue-and-catering cost by your number of events, while keeping fixed costs like jewellery and the photography package as one-time totals since those are typically bought or booked once and used across the whole wedding.

What this calculator does not capture: honeymoon costs, guest travel and accommodation you may be sponsoring, wedding insurance, digital invitation platforms, or region-specific ritual costs (havan samagri, specific community customs) that vary too much to standardize. It also assumes you're paying market rate rather than getting family-vendor discounts, and it doesn't account for GST, which applies at 18% on most banquet and catering service contracts and should be added on top of vendor quotes separately. Treat the output as a solid planning baseline to take into vendor conversations, not a final invoice.`,
    example: {
      input:
        "300 guests, Tier-1 metro city, Standard style, 3 events (mehendi/sangeet, ceremony, reception)",
      output:
        "Venue + Catering: 300 guests × ₹1,800/guest × 1.35 (metro) × 3 events = ₹21,87,000. Photography: ₹1,50,000. Décor: ₹3,00,000. Attire & Jewellery: ₹4,50,000. Entertainment: ₹1,20,000. Subtotal: ₹32,07,000. Contingency (10%): ₹3,20,700. Estimated Total: ₹35,27,700 — roughly ₹11,760 per guest across all three events.",
      },
    useCases: [
      "Setting a realistic total budget before your first vendor meeting",
      "Comparing the cost difference between a metro and Tier-2 city venue",
      "Deciding whether to combine mehendi and haldi into one event to save money",
      "Working out cost-per-guest to negotiate a final guest list with both families",
      "Checking whether a Premium-style wedding fits inside your existing savings or loan amount",
    ],
  },

  faqs: [
    {
      question: "How accurate is this wedding budget calculator?",
      answer:
        "This tool gives you a realistic planning estimate based on 2026 market rates for venue, catering, décor, photography, and jewellery across Indian cities. It is not a vendor quote. Actual costs depend on your specific venue, caterer, and negotiated rates, which can vary by 20-30% in either direction. Use the number here as your starting budget ceiling, then get itemized quotes from three or more vendors in each category before signing contracts. Treat this as the number you bring into negotiations, not the number you commit to blindly.",
    },
    {
      question: "What percentage of my wedding budget should go to catering?",
      answer:
        "Catering typically takes up 20-30% of a total Indian wedding budget and is usually the single largest line item alongside venue. For a mid-range wedding, expect ₹600 to ₹1,400 per plate for a multi-cuisine buffet, with rates dropping slightly per head as your guest count crosses 300. If you want to trim costs without guests noticing, cutting one or two live counters typically reduces the per-plate rate by 15-20% while keeping the core menu intact.",
    },
    {
      question: "How much does venue cost differ between a metro and a smaller city?",
      answer:
        "A banquet hall or hotel venue in a metro like Mumbai or Delhi can cost 35-60% more than an equivalent venue in a Tier-2 city, and Tier-3 towns run cheaper still. This gap is largely driven by real estate scarcity, especially in Mumbai where banquet halls are smaller and pricier per square foot than anywhere else in the country. If your guest list allows it, hosting the wedding an hour or two outside a metro — think Lonavala instead of Mumbai, or Alwar instead of Delhi — can cut venue costs by 25-40% while still being convenient for most guests.",
    },
    {
      question: "How many guests can I invite on a ₹15 lakh budget?",
      answer:
        "A ₹15 lakh budget can comfortably support a dignified, well-planned wedding for 200-300 guests in a Tier-2 or Tier-3 city with a Standard style, or a smaller 100-150 guest wedding in a metro. If you're set on a metro venue with a larger guest list, you'll likely need to either shift to a Budget style, reduce the number of separate events, or plan for a higher total. Use the calculator to test a few combinations of guest count and city before locking your venue.",
    },
    {
      question: "Does this calculator include jewellery and gold costs?",
      answer:
        "Yes, a fixed jewellery allocation is built into the total, scaled by your chosen wedding style. Because gold prices move daily, treat this figure as a rough reference rather than an exact number — check our Gold Price Calculator for a live estimate based on current rates before finalizing your jewellery budget. Most families spend anywhere from ₹2 lakh for a modest set to ₹10 lakh or more for an elaborate bridal set with a full complement of pieces.",
    },
    {
      question: "How much should I set aside as a contingency buffer?",
      answer:
        "A 10-15% contingency on top of your planned budget is the standard recommendation for Indian weddings, and this calculator builds in 10% by default. Unexpected costs are close to guaranteed — extra guests who weren't on the original list, last-minute décor upgrades, vendor overtime charges, or a menu addition your families insist on. Unused contingency is simply money you keep; it is far better to have a buffer you don't touch than to be caught short two weeks before the wedding.",
    },
    {
      question: "How can I reduce my wedding budget without guests noticing?",
      answer:
        "The three highest-impact changes are reducing the number of separate events, optimizing your catering menu, and controlling the guest list. Merging mehendi and haldi into a single morning event alone can save ₹2-5 lakh by cutting one full round of venue, catering, and décor costs. A well-curated buffet without excessive live counters can reduce catering costs by 20-30% without guests noticing a drop in quality. And since catering and venue scale directly with guest count, trimming even 50 names off the list has an outsized effect on the total.",
    },
    {
      question: "Does the total include GST and vendor taxes?",
      answer:
        "No, this estimate reflects base vendor pricing before tax. Banquet hall rentals and catering services typically attract 18% GST when billed by a registered vendor, so you should add this on top of the venue and catering portion when getting formal quotes. Some smaller, unregistered local vendors may not charge GST at all, which is worth clarifying upfront since it affects your final number by a meaningful margin on a large wedding budget.",
    },
    {
      question: "What's the difference between Standard, Premium, and Royal wedding styles here?",
      answer:
        "Standard assumes a mid-tier banquet hall, a solid multi-cuisine buffet, and a competent local photographer — a comfortable, well-executed wedding without luxury flourishes. Premium steps up to a better hotel venue, a more experienced photography team with drone coverage, and noticeably richer décor. Royal reflects heritage properties or 5-star hotel buyouts, plated fine-dining service, celebrity-tier photographers, and elaborate stage and floral installations — the tier most families associate with the ₹50 lakh-plus wedding segment.",
    },
    {
      question: "Should destination weddings use this calculator differently?",
      answer:
        "This calculator is built around a single-city wedding and will understate a destination wedding's true cost, since it doesn't account for guest travel subsidies, multi-day accommodation blocks, vendor travel fees, or logistics like guest shuttles. For a destination wedding, treat this tool's output as your on-ground venue, catering, décor, and vendor cost only, then add a separate line for guest and vendor travel, hotel room blocks, and local transport, which can easily add 30-50% on top of the base figure for a 200-guest destination celebration.",
    },
  ],

  seoContent: `
    <h2>How Much Does a Wedding Cost in India in 2026?</h2>
    <p>The honest answer is: it depends enormously on your guest count, your city, and how many separate functions you plan to host. A modest, well-executed wedding for 150-250 guests in a Tier-2 or Tier-3 city can be completed for ₹8-15 lakh, while a mid-range wedding with 300 guests across three events in a metro typically lands between ₹25 lakh and ₹40 lakh. At the luxury end, heritage venues, celebrity photographers, and Bollywood-tier entertainment can push the total well past ₹1 crore. This calculator is built to help you find your own number inside that wide range, rather than anchor on an average that may not reflect your actual plans.</p>

    <h2>Average Wedding Cost by Guest Count and City Tier (2026)</h2>
    <table>
      <tr><th>Guest Count</th><th>Tier-3 / Small Town</th><th>Tier-2 City</th><th>Metro (Delhi, Mumbai, Bangalore)</th></tr>
      <tr><td>100-150 guests</td><td>₹4-7 lakh</td><td>₹6-10 lakh</td><td>₹9-15 lakh</td></tr>
      <tr><td>200-300 guests</td><td>₹8-14 lakh</td><td>₹12-20 lakh</td><td>₹18-30 lakh</td></tr>
      <tr><td>400-500 guests</td><td>₹14-22 lakh</td><td>₹20-32 lakh</td><td>₹30-50 lakh</td></tr>
      <tr><td>700+ guests</td><td>₹22-35 lakh</td><td>₹32-50 lakh</td><td>₹50 lakh - ₹1 crore+</td></tr>
    </table>
    <p>These ranges assume a Standard-style, three-event wedding (a pre-wedding function, the ceremony, and the reception). A single-event civil or intimate wedding can cost 50-70% less than the figures above, since it removes one or two full rounds of venue, catering, and décor spending.</p>

    <h2>Where the Money Actually Goes: Category-Wise Budget Split</h2>
    <table>
      <tr><th>Category</th><th>Typical Share of Total Budget</th><th>What It Covers</th></tr>
      <tr><td>Venue &amp; Catering</td><td>40-50%</td><td>Hall rental, food and beverage, service staff, basic setup</td></tr>
      <tr><td>Décor &amp; Ambience</td><td>10-20%</td><td>Mandap, stage, floral arrangements, lighting</td></tr>
      <tr><td>Attire &amp; Jewellery</td><td>15-20%</td><td>Bridal and groom outfits, gold and diamond jewellery</td></tr>
      <tr><td>Photography &amp; Videography</td><td>5-10%</td><td>Pre-wedding shoot, event-day coverage, edited albums and reels</td></tr>
      <tr><td>Entertainment</td><td>2-8%</td><td>DJ, live band, choreographer for sangeet performances</td></tr>
      <tr><td>Contingency</td><td>10-15%</td><td>Buffer for last-minute additions and vendor overruns</td></tr>
    </table>
    <p>Venue and catering together almost always account for 40-50% of the total, which is exactly why guest count is the single most powerful lever you have over your final number. Every guest you add doesn't just cost one more plate — it also nudges you toward a bigger, pricier hall.</p>

    <h2>Wedding Catering Cost Per Plate (2026)</h2>
    <table>
      <tr><th>Menu Type</th><th>Cost Per Plate</th></tr>
      <tr><td>Basic vegetarian thali/buffet</td><td>₹400-₹800</td></tr>
      <tr><td>Standard multi-cuisine buffet</td><td>₹800-₹1,500</td></tr>
      <tr><td>Premium buffet with live counters</td><td>₹1,500-₹2,500</td></tr>
      <tr><td>Plated fine-dining service</td><td>₹2,500-₹5,000+</td></tr>
    </table>
    <p>Guest count changes the math in your favor at scale — bookings above 300 guests often bring per-plate rates down by 10-20% compared to a 100-guest event, since caterers spread fixed labour and equipment costs across more heads. On the flip side, adding live counters (chaat stations, dosa counters, dessert bars) typically adds 20-30% to the base per-plate cost, so it's worth deciding early whether that experience is worth the premium for your guest list.</p>

    <h2>Wedding Style Tiers Explained</h2>
    <ul>
      <li><strong>Budget:</strong> Community hall or simple garden venue, standard vegetarian buffet, local photographer, minimal décor — built for families prioritizing the ceremony over the spectacle.</li>
      <li><strong>Standard:</strong> Mid-tier banquet hall, multi-cuisine buffet with a couple of live counters, a solid local photography team, and comfortable floral and lighting décor.</li>
      <li><strong>Premium:</strong> Well-reviewed hotel venue, richer menu with more live stations, an experienced photography team offering drone coverage and cinematic reels, and elaborate stage and floral design.</li>
      <li><strong>Royal:</strong> Heritage property or 5-star hotel buyout, plated fine-dining or celebrity-chef menus, celebrity or nationally known photographers, and large-scale entertainment bookings.</li>
    </ul>

    <h2>Practical Ways to Reduce Your Wedding Budget</h2>
    <ul>
      <li>Combine functions — merging mehendi and haldi into a single event can save ₹2-5 lakh by removing a full round of venue and catering costs.</li>
      <li>Choose a well-curated buffet menu over one with many live counters to cut catering costs by 20-30% with minimal impact on guest experience.</li>
      <li>Consider venues 1-2 hours outside a metro — the cost difference on venue hire alone can be 25-40%.</li>
      <li>Send digital invitations to broader guest circles and reserve physical cards for close family, which can cut stationery costs from ₹1.5 lakh to under ₹40,000.</li>
      <li>Book your venue and vendors 6-9 months ahead and consider an off-peak date (avoiding the November-February wedding season) for meaningfully better rates.</li>
    </ul>

    <h2>City-Wise Wedding Cost Differences Explained</h2>
    <p>Not all cities carry the same wedding premium, and the differences go well beyond the obvious metro-versus-small-town gap. Mumbai stands out even among metros because of genuine venue scarcity — real estate constraints mean banquet halls are smaller and pricier per square foot than almost anywhere else in India, with couples often paying ₹5-15 lakh for a venue that would cost roughly half in another major city. Delhi's challenge is different: a social culture where guest lists tend to inflate quickly, meaning the biggest lever for a Delhi family isn't venue negotiation but simply holding the line on headcount. Bangalore, by contrast, offers a more balanced combination of quality and value, helped by a large creative-professional population that keeps photography and décor vendor pricing competitive.</p>
    <p>South Indian cities and Kolkata tend to deliver stronger value per rupee spent at the budget and mid-range tiers. Kerala benefits from a competitive vendor market, community halls and temple auditoriums available from ₹25,000-₹1,50,000, and the traditional banana leaf sadya, which delivers a full multi-dish feast at ₹600-₹1,200 per plate versus ₹1,500-₹4,000 for an equivalent North Indian buffet. Kolkata's advantage comes from lower real estate costs paired with a wedding culture that tends to emphasise elegance over sheer scale. The gap between cities narrows considerably at the luxury tier, where premium vendor rates converge across India, but for budget and mid-range families, city choice remains one of the most powerful cost levers available.</p>

    <h2>Hidden Costs Many Families Forget to Budget For</h2>
    <p>Beyond the headline categories of venue, catering, décor, and photography, a handful of smaller line items consistently catch families off guard. Transportation for the bridal car, guest shuttles where a venue lacks adequate parking, and vendor travel for out-of-town bookings can range from ₹30,000 to ₹2,00,000 depending on your city and venue accessibility. Every vendor team working your wedding day also needs to eat — a fifteen-person vendor contingent covering photography, decoration, catering, and music easily needs a meal allocation of ₹500-₹800 per person, which is easy to overlook until the caterer asks about it a week before the event. Tipping culture varies by region, but setting aside ₹20,000-₹50,000 for gratuities across your vendor team is both a practical and generous allowance that many first-time planners simply forget to include.</p>
    <p>Hallmarking charges on gold jewellery, typically ₹35-50 per piece, are a small but real addition on top of the metal cost itself, and making charges for gold jewellery — commonly 6-25% of the gold value or a flat ₹300-1,000 per gram — can meaningfully shift your jewellery line depending on design complexity. If you're budgeting for a specific gold purchase, our Gold Making Charges Calculator can help you separate the metal cost from the labour cost so you know exactly where your jewellery budget is going.</p>

    <h2>Common Wedding Budgeting Mistakes to Avoid</h2>
    <ul>
      <li><strong>Locking the guest list too late:</strong> Since catering and venue costs scale directly with headcount, finalizing the guest count early gives you far more accurate numbers to negotiate with vendors, rather than working from a rough estimate that keeps growing.</li>
      <li><strong>Accepting quotes without GST clarification:</strong> An 18% gap between a verbal quote and the final invoice on a ₹20 lakh wedding is a ₹3.6 lakh surprise — always ask upfront whether a vendor's number is inclusive or exclusive of tax.</li>
      <li><strong>Underestimating live-counter costs:</strong> Live food stations add real entertainment value but typically increase your base catering cost by 20-30%, so decide deliberately whether that premium is worth it for your guest list rather than adding stations one by one until the quote balloons.</li>
      <li><strong>Skipping the contingency line entirely:</strong> Treating your calculated total as a hard ceiling with no buffer is one of the most common ways families end up scrambling for extra funds two weeks before the wedding.</li>
      <li><strong>Not accounting for peak-season pricing:</strong> Catering and venue charges typically increase 25-40% during the November-February wedding season in India, so a Standard-style wedding booked in July could genuinely cost less than the same wedding booked for a December date.</li>
    </ul>

    <h2>Who Should Use This Calculator?</h2>
    <ul>
      <li>Couples and families setting an initial wedding budget before approaching vendors</li>
      <li>Anyone comparing the cost impact of a metro venue versus a Tier-2 or Tier-3 city location</li>
      <li>Families deciding how many separate functions (mehendi, sangeet, reception) they can realistically afford</li>
      <li>Planners who need a quick cost-per-guest figure to guide guest-list negotiations</li>
      <li>Anyone applying for a wedding loan who needs a realistic total to size the loan amount</li>
    </ul>
  `,
};