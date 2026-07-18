import { Calculator } from "@/src/types/calculator";

export const flatBuyCalculator: Calculator = {
  slug: "flat-buy-calculator",

  name: "Flat Buy Calculator",

  description:
    "Calculate the real, total cost of buying a flat in India — not just the sticker price. Enter your flat's base price, city, and construction status to instantly see GST, stamp duty, registration charges, brokerage, legal fees, home loan costs, and hidden builder charges, all added up into one true out-of-pocket number.",

  category: "Finance",

  isPopular: true,

  compareWith: [
    "home-loan-calculator",
    "emi-calculator",
    "house-construction-cost-calculator",
    "gst-calculator",
    "income-tax-calculator",
    "rent-vs-buy-calculator",
  ],

  seo: {
    title:
      "Flat Buy Calculator (2026) - True Cost of Buying a Flat in India",

    description:
      "Find the real cost of buying a flat in India. Calculate GST, stamp duty, registration, brokerage, legal fees, and hidden builder charges instantly, free.",

    keywords: [
      "flat buy calculator",
      "flat purchase calculator",
      "flat buying cost calculator",
      "cost of buying a flat in india",
      "flat purchase cost calculator india",
      "total cost of flat calculator",
      "apartment purchase calculator",
      "apartment buying cost calculator india",
      "home buying cost calculator",
      "flat registration cost calculator",
      "stamp duty and registration calculator",
      "gst on flat purchase calculator",
      "gst on flat calculator",
      "gst on under construction flat calculator",
      "stamp duty calculator india",
      "registration charges calculator india",
      "flat brokerage calculator",
      "real estate agent commission calculator",
      "home loan processing fee calculator",
      "flat purchase hidden charges",
      "flat buying budget calculator",
      "flat cost breakdown calculator",
      "how much does it cost to buy a flat in india",
      "how much extra do i pay to buy a flat",
      "flat price plus stamp duty calculator",
      "flat price plus gst calculator",
      "under construction flat cost calculator",
      "ready to move flat cost calculator",
      "resale flat cost calculator",
      "resale flat stamp duty calculator",
      "flat total cost estimator",
      "flat purchase budget planner",
      "apartment cost breakdown india",
      "flat buying expenses calculator",
      "flat additional charges calculator",
      "corpus fund and maintenance deposit calculator",
      "flat buying checklist calculator",
      "home buying cost calculator india 2026",
      "flat buy calculator 2026",
      "property purchase cost calculator india",
      "property buying cost estimator",
      "carpet area vs built up area cost calculator",
      "tds on property purchase calculator",
      "tds on flat purchase above 50 lakh",
      "first time home buyer cost calculator india",
      "flat down payment calculator",
      "flat loan eligibility and cost calculator",
      "how much cash do i need to buy a flat",
      "flat purchase legal fees calculator",
      "flat purchase stamp duty by state",
      "affordable housing gst calculator",
      "flat vs house construction cost comparison",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Flat Price & Carpet Area",
      description:
        "Input the base price quoted by the builder or seller, along with the carpet area in square metres. Carpet area matters directly for GST, since the affordable-housing rate only applies below a specific carpet-area and price threshold.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Select City & Construction Status",
      description:
        "Choose your state or city, since stamp duty, registration caps, and even GST eligibility (metro vs non-metro carpet-area limits) all shift by location. Then mark whether the flat is under-construction, ready-to-move with an Occupancy Certificate, or a resale property, since this single choice decides whether GST applies at all.",
      icon: "location",
    },
    {
      step: 3,
      title: "Add Brokerage, Loan & Extra Charges",
      description:
        "Enter brokerage percentage (if you used an agent), your home loan amount (if financing part of the purchase), and any builder-side extras — parking, club membership, corpus fund, or a preferential location charge (PLC) — that sit outside the base price.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View Your Total Out-of-Pocket Cost",
      description:
        "See a complete breakdown: base price, GST (if applicable), stamp duty, registration, brokerage, legal and loan-processing fees, and builder extras — added into one final number, alongside how much of that total you'll need in cash versus what a loan can cover.",
      icon: "result",
    },
  ],

  formula: {
    title: "Flat Buying Total Cost Formula",

    formula:
      "Total Cost = Base Price + GST (if under-construction) + Stamp Duty + Registration Charges + Brokerage + Legal Fees + Loan Processing Fee + Builder Extras (PLC, Parking, Club, Corpus Fund)",

    explanation:
      "Buying a flat in India is never a single-line transaction, even though the builder's brochure or the property listing usually advertises one number. That advertised price is only the starting point — a series of statutory taxes, government levies, and market-driven service charges stack on top of it, and most first-time buyers only discover the full extent of these at the sub-registrar's office or in the final builder demand letter, by which point negotiating them away is no longer an option.\n\nThe calculation breaks into three distinct categories that behave very differently. The first is statutory and non-negotiable: GST (only on under-construction property, at 1% for qualifying affordable housing or 5% for everything else, with zero GST on ready-to-move or resale flats that already have an Occupancy Certificate) and stamp duty plus registration charges (a state subject, so the rate is fixed by whichever state the flat is in, typically running 5-9% combined, calculated on whichever is higher between your agreement value and the government's circle rate — not on whatever discount you may have negotiated with the seller). The second category is market-driven and genuinely negotiable: brokerage, typically 1-2% of the transaction value when a broker is involved, and legal fees for a lawyer to verify title and draft or review the sale agreement. The third category is often the most overlooked: builder-side extras that sit outside the quoted per-square-foot rate entirely — a preferential location charge (PLC) for a higher floor or a better-facing unit, a car parking charge, a club membership or amenity fee, and a one-time corpus fund or maintenance deposit collected upfront to fund the society's future upkeep.\n\nEach of these adds up independently, and none of them is optional once you've committed to a specific flat — which is exactly why a single 'total cost' figure, calculated before you sign anything, is far more useful for budgeting than the base price alone.",

    example: {
      input:
        "Under-construction flat, Bengaluru, base price ₹75,00,000, carpet area 65 sqm (non-affordable), brokerage 1%",

      output:
        "GST @5% = ₹3,75,000 | Stamp duty @5% (Karnataka) = ₹3,75,000 | Registration (capped) = ₹15,000 | Brokerage @1% = ₹75,000 → Total additional cost ≈ ₹8,40,000 | True total cost ≈ ₹83,40,000 (before legal fees, loan processing, and builder extras)",
    },

    useCases: [
      "Budgeting the real cash needed before booking a flat",
      "Comparing an under-construction flat against an equivalent ready-to-move option",
      "Sizing a home loan application to cover the true total cost, not just the base price",
      "Sanity-checking a builder's final cost sheet or demand letter against an independent estimate",
      "Comparing total cost across two states or cities before a relocation-linked purchase",
    ],
  },

  faqs: [
    {
      question:
        "What is the total cost of buying a flat in India, beyond the price quoted by the builder or seller?",
      answer:
        "The quoted price — whether it's a builder's per-square-foot rate or a seller's asking price for a resale flat — is only the base figure, and the real out-of-pocket cost typically runs 8% to 15% higher once every statutory and market charge is added in. The single biggest addition is stamp duty and registration, a state government levy that generally ranges from 5% to 9% of the property value combined, calculated on whichever is higher between your actual agreement value and the government's circle rate for that locality — so a heavily negotiated discount on the sale price doesn't necessarily lower this charge if the circle rate stays fixed. If you're buying an under-construction flat rather than a ready-to-move or resale one, GST adds a further 1% (for qualifying affordable housing) or 5% (for everything else) on top of the base price, a cost that disappears entirely once the project receives its Occupancy Certificate and becomes a completed, immovable asset. Beyond these two statutory charges, brokerage is a near-universal cost for resale purchases arranged through an agent, typically 1% to 2% of the transaction value, and is a genuinely negotiable market rate rather than a fixed government levy. Legal fees for a lawyer to verify the title, check for encumbrances, and draft or review the sale agreement typically add a modest but real sum, usually a flat fee rather than a percentage. If you're taking a home loan, processing fees usually run 0.25% to 1% of the loan amount, plus charges for property valuation and legal opinion that the bank commissions independently. Finally, and most frequently underestimated, are builder-side extras that sit entirely outside the quoted per-square-foot rate: a preferential location charge for a higher floor or better-facing unit, a car parking allocation charge, a club membership or amenity fee, and a one-time corpus fund or maintenance deposit collected to fund the future housing society's upkeep — these can collectively add several lakh rupees on a mid-sized flat and are almost never included in the headline price a builder advertises. Layering all of these together is exactly why a dedicated total-cost calculation, done before you sign a booking form, protects you from a budget shortfall that only becomes visible once you're already contractually committed to the purchase.",
    },
    {
      question:
        "How does GST work on flat purchases, and why do some flats have no GST at all?",
      answer:
        "GST on residential property in India hinges entirely on one factual question: has the flat received its Occupancy Certificate (or Completion Certificate) from the local municipal or development authority? If it has — meaning the flat is ready-to-move-in or you're buying it as a resale property from an existing owner — the transaction is classified as a sale of immovable property under Schedule III of the CGST Act, which places it completely outside the scope of GST. No GST applies, full stop, regardless of the flat's price or size. If the flat is still under construction and hasn't received that certificate yet, the transaction is legally treated as a supply of construction service rather than a sale of a finished asset, and GST becomes applicable on the base price (excluding the value attributable to land, which is deducted under a standard abatement). The rate itself depends on whether the flat qualifies as 'affordable housing': a carpet area of up to 60 square metres in the eight identified metro cities (or up to 90 square metres in non-metro locations), combined with a price cap of ₹45 lakh, qualifies for a concessional 1% GST rate. Any under-construction residential unit that doesn't meet both the carpet-area and price conditions simultaneously — for instance, a spacious 3BHK priced well above ₹45 lakh, even in a non-metro city — falls into the standard 5% rate instead. Both rates apply without any Input Tax Credit available to the builder, a rule that has been in place since April 2019, which means the GST cost is a straight addition to what you pay rather than something a builder can offset and pass back to you as a discount. It's worth being precise about carpet area versus built-up area here, since builders often advertise built-up or super built-up figures that run 15-30% larger than the carpet area actually used for the GST eligibility test — a flat marketed as '650 sq ft' might have a carpet area well under the 60 sqm (about 645 sq ft) metro threshold, or well over it, depending on exactly how that figure was measured, so it's worth confirming the carpet area explicitly from your builder's RERA filing rather than relying on the marketing brochure. This distinction between under-construction and completed property is also precisely why many buyers actively prefer near-ready or fully ready projects: on an ₹80 lakh flat, the difference between 5% GST and zero GST is a straight ₹4 lakh, which is a meaningful sum to weigh against the trade-off of paying a premium for a completed, ready-to-move unit versus booking earlier at a lower under-construction price.",
    },
    {
      question:
        "How are stamp duty and registration charges calculated, and why do they vary so much between states?",
      answer:
        "Stamp duty is fundamentally a state subject in India — each state government sets its own rate under its own stamp act, which is exactly why the same-priced flat can carry a meaningfully different tax bill depending on which state it's in, generally somewhere between 3% and 8% of the property value, with registration charges added on top, typically around 1% though some states apply a flat cap instead. The calculation itself is straightforward once you know the rate: stamp duty is charged on whichever figure is higher between your actual agreement value (what you're paying the seller) and the state's circle rate or ready reckoner rate for that specific locality (the government's own periodically-updated estimate of fair market value). This 'higher of the two' rule matters enormously in practice — if you manage to negotiate a flat down to below the prevailing circle rate, you still pay stamp duty calculated on the higher circle rate figure, not on the discounted price you actually agreed to, so a great negotiated deal doesn't automatically translate into a proportionally lower stamp duty bill. Several factors push the rate up or down within a state: many states offer a stamp duty concession, typically 1-2 percentage points lower, when the property is registered solely or jointly in a woman's name, as a policy measure to encourage female property ownership, and it's worth checking this explicitly since it can save a meaningful sum on a high-value flat. Urban and metropolitan areas within a state generally carry higher circle rates (and sometimes higher stamp duty percentages outright) than rural or peripheral zones, and commercial or mixed-use properties are typically taxed at a higher rate than pure residential units. Registration charges follow a similar 'percentage of value' logic in most states, but a number of states — Karnataka is a commonly cited example — apply an absolute rupee cap on the registration fee regardless of how expensive the property is, which means the registration component becomes proportionally cheaper as property value rises in those specific states. Because these rates and caps are revised by state governments periodically, sometimes mid-year, and because circle rates themselves are typically republished annually, any general percentage figure you see in an article — including this one — should be treated as an informed estimate rather than the exact number you'll be billed at the sub-registrar's office. The only way to get the precise, current figure for your specific transaction is to check your state's official stamps-and-registration department portal, or ask your sub-registrar directly, before your registration appointment, since discovering a materially higher bill on registration day, after every other financial decision has already been locked in, is one of the most common and avoidable sources of last-minute budget stress in the entire home-buying process.",
    },
    {
      question:
        "Is brokerage negotiable, and what's a fair commission to pay a real estate agent in India?",
      answer:
        "Unlike GST and stamp duty, which are fixed statutory charges you cannot negotiate away, brokerage is a market-rate service fee, and it is genuinely negotiable within a fairly well-established range. For resale property transactions arranged through an agent, the conventional norm across most Indian cities is 1% of the transaction value, though this can range from as low as 0.5% to as high as 2% depending on the city, the specific agent or agency, the property's price bracket, and how much competing demand exists for that particular listing. Higher-value luxury transactions sometimes see a lower percentage rate applied (since the absolute rupee amount is still substantial even at a lower percentage), while smaller, harder-to-sell properties in a slow market occasionally see agents push for a slightly higher rate to justify the extra marketing effort involved. Whether the buyer, the seller, or both parties pay brokerage — and in what proportion — is itself a matter of local convention and specific negotiation rather than a fixed rule; in many Indian markets it's common for both the buyer and the seller to separately pay their own agent (if they used different agents) or to split a single agent's commission between them, so it's worth clarifying this explicitly and in writing before the agent begins work, rather than assuming a default arrangement. For under-construction flats bought directly from a builder, brokerage often doesn't apply to the buyer at all in the same way, since many builders pay their own sales channel or in-house sales team directly out of their margins rather than charging the buyer a separate visible commission — though it's worth confirming this directly with the builder, since some projects do route through external channel partners whose commission is effectively built into the quoted price rather than charged as a separate line item. When negotiating brokerage down, it helps to have a clear sense of what the agent is actually providing beyond simply introducing you to a listing you might have found yourself through a property portal — genuine value includes verified title checks, price negotiation support, help navigating the registration process, and local market knowledge about fair pricing for that specific micro-market, and an agent providing real value on all of these fronts has a stronger case for the higher end of the conventional range than one who is purely making an introduction. It's also worth getting the agreed brokerage rate confirmed in writing before the transaction closes, since a verbal understanding of '1%' can occasionally become a point of dispute once the deal value and the exact scope of work are both finalized, particularly in transactions where negotiations dragged on for months and the agent's involvement expanded well beyond the original arrangement.",
    },
    {
      question:
        "What builder charges get added on top of the base flat price, and why do they matter so much for budgeting?",
      answer:
        "Builder-side extras are consistently the most underestimated part of flat-buying costs, precisely because they sit entirely outside the per-square-foot rate that gets advertised in a project's marketing material, and most first-time buyers only encounter the full list when they receive a detailed cost sheet or final demand letter from the builder — often well after they've mentally committed to the purchase. The most common of these is a Preferential Location Charge (PLC), an additional per-square-foot premium charged for units considered more desirable within the same project — a higher floor with a better view, a corner unit, a unit facing a garden or pool rather than a neighbouring building, or a unit closer to the lift lobby. PLC can add anywhere from a modest few percent to a genuinely significant sum on premium units, and it's worth asking explicitly which specific attributes of your chosen unit are triggering a PLC, since builders sometimes apply it somewhat inconsistently across a large project. Car parking is frequently sold as a separate line item rather than bundled into the flat price, particularly for a second or additional parking slot beyond the first one included with the unit, and covered or basement parking typically carries a higher charge than open or stilt parking. Club membership or amenity charges — covering access to a gym, swimmer's pool, indoor games area, or clubhouse within the project — are often mandatory rather than optional for every unit owner, structured as a one-time charge collected at possession, and it's worth confirming whether this is a one-time fee or whether it also carries a recurring annual renewal charge once you've moved in. A corpus fund or maintenance deposit is another near-universal charge: a one-time, upfront sum collected by the builder (and later transferred to the resident welfare association or housing society once formed) to build a reserve for major future repairs and upkeep — lift maintenance, structural repairs, common-area refurbishment — that ordinary monthly maintenance fees aren't meant to cover. Beyond these, some builders also separately charge for electricity and water connection deposits, a fire-fighting equipment or infrastructure development charge, and in some cases a legal or documentation charge for preparing the sale deed on the builder's side, distinct from whatever independent legal fee you pay your own lawyer. None of these charges are individually enormous in most cases, but they compound: on a mid-sized flat in a well-amenitized project, PLC, parking, club membership, and corpus fund combined can easily add 5-10% on top of the quoted base price, which is exactly the gap that surprises buyers who budgeted only against the advertised per-square-foot rate. The single most effective protection against this surprise is asking your builder for an itemized, all-inclusive cost sheet — not just the base price — at the very start of your evaluation, before you place a booking amount, so every one of these charges is visible and included in your budget from day one rather than surfacing incrementally as the project nears possession.",
    },
    {
      question:
        "Is it cheaper overall to buy an under-construction flat or a ready-to-move-in / resale flat?",
      answer:
        "There's a genuine, quantifiable trade-off here rather than a universally correct answer, and it comes down to weighing a lower headline price against a real tax saving on the other side. Under-construction flats are typically priced lower per square foot than an equivalent ready-to-move unit in the same project or locality, partly because the buyer is taking on construction and delivery-timeline risk that a completed unit doesn't carry, and partly because builders often price early-phase bookings more attractively to generate initial sales momentum and cash flow for the project. However, under-construction flats attract GST — 1% for qualifying affordable housing or 5% otherwise — a cost that simply does not apply to a ready-to-move flat with an Occupancy Certificate, or to a resale purchase of an already-completed unit. On an ₹80 lakh flat, that 5% GST difference alone is ₹4 lakh, a substantial sum that can offset a meaningful portion, or in some cases all, of the price advantage an under-construction unit initially appeared to offer. Beyond the direct tax difference, there are real, harder-to-quantify trade-offs on both sides. Under-construction purchases carry delivery-timeline risk — projects can and do face delays, sometimes running into years beyond the originally promised possession date, during which a buyer may be paying both a home loan EMI on the disbursed amount and rent for their current accommodation simultaneously, a double-cost burden that's easy to underestimate at the booking stage. They also carry a small risk around the project's ultimate quality and specifications matching what was promised in marketing material, though RERA registration and its associated disclosure requirements have meaningfully improved buyer protection on this front in recent years. Ready-to-move and resale purchases, by contrast, let you physically inspect the actual unit, confirm real construction quality, verify actual carpet area against what's advertised, and move in immediately without any delivery-timeline uncertainty — but they typically come at a price premium reflecting exactly that certainty, and resale purchases specifically require more careful legal due diligence on the property's title history, any existing loan or encumbrance on the unit, and whether previous society dues or property taxes are fully cleared before you take over. A practical way to compare the two fairly is to run both scenarios through a total-cost calculation rather than comparing base prices alone: add GST, stamp duty, registration, and builder extras to the under-construction quote, and add stamp duty, registration, and any resale-specific costs (like outstanding dues you may need to clear) to the ready-to-move quote, then compare the two final numbers side by side, alongside a realistic assessment of how much delivery-timeline risk you're personally willing to absorb for whatever price difference remains.",
    },
  ],

  seoContent: `
<h2>What Is a Flat Buy Calculator?</h2>
<p>
  A Flat Buy Calculator takes the single number every property listing or builder brochure leads with — the base price — and turns it into the real, total amount you'll actually need to pay before you hold the keys to your new flat. Buying a flat in India is never a one-line transaction. On top of the quoted price sits a stack of statutory government charges (GST, stamp duty, registration), market-driven service costs (brokerage, legal fees, loan processing), and builder-side extras (preferential location charges, parking, club membership, corpus fund) that rarely appear together in one place until you're deep into the buying process — often after you've already paid a booking amount and mentally committed to the purchase.
</p>
<p>
  This calculator exists to bring every one of those pieces together upfront, before you sign anything. Enter your flat's base price, its city, and whether it's under-construction, ready-to-move, or resale, and you get a complete breakdown showing exactly how much extra you're really paying and where every rupee of that extra amount is going — rather than discovering the true cost incrementally, through a stamp duty bill at registration and a builder's demand letter for "additional charges" a few weeks later.
</p>

---

<h2>Why the Advertised Flat Price Is Never the Full Story</h2>
<p>
  Ask most first-time flat buyers what their flat costs, and they'll quote the number from the builder's brochure or the property portal listing. Ask them again a few months later, once registration is done and possession has happened, and the number is almost always meaningfully higher — commonly by 8% to 15%, and sometimes more. This gap isn't the result of anything unusual or unfair happening to that specific buyer; it's simply how flat purchases work in India, where a genuinely large share of the true cost sits outside the headline per-square-foot rate by design, tax structure, or industry convention.
</p>
<p>
  Understanding this gap in advance changes how you plan your finances. It affects how large a home loan you should actually apply for (sized against the total cost, not the base price, so you're not caught needing a last-minute top-up loan on less favourable terms). It affects how much cash you need available for costs that typically can't be financed through a home loan at all — stamp duty, registration, and brokerage are commonly expected to be paid from the buyer's own funds rather than rolled into the loan amount, since banks generally lend against the property's assessed value, not against the transaction taxes layered on top of it. And it affects how fairly you can compare two different flats, or two different cities, since a lower base price in one location can be entirely offset, or even reversed, by a higher stamp duty rate or a mandatory corpus fund the other option doesn't carry.
</p>

---

<h2>The Three Categories of Extra Cost</h2>
<p>
  It helps to think about everything added on top of the base price in three distinct buckets, because each behaves differently when it comes to negotiability, timing, and how it should be budgeted for.
</p>
<p>
  <strong>Statutory and non-negotiable:</strong> GST (on under-construction flats only) and stamp duty plus registration charges (on every flat, regardless of construction status). These are fixed by law — a specific percentage set by the central government (for GST) or your state government (for stamp duty and registration) — and there is no scope to negotiate them down, though there are legitimate ways to reduce your exposure, such as buying a ready-to-move unit to avoid GST entirely, or registering in a woman's name where a state offers a gender-based stamp duty concession.
</p>
<p>
  <strong>Market-driven and negotiable:</strong> Brokerage (if an agent is involved) and legal fees (for a lawyer to verify title and review your sale agreement). These are set by market convention rather than law, and genuinely respond to negotiation, the specific agent or lawyer you engage, and how much competing demand exists for the deal or the service.
</p>
<p>
  <strong>Builder-side and easy to overlook:</strong> Preferential location charges, parking, club membership or amenity fees, and a one-time corpus fund or maintenance deposit. These are set by the specific builder and project, vary enormously from one development to another, and are the single most common source of budget surprise, precisely because they don't appear in the headline per-square-foot rate that gets marketed.
</p>

---

<h2>GST on Flat Purchase: The Single Biggest Cost Toggle</h2>
<p>
  Of every charge layered onto a flat's base price, GST has the single largest effect on whether one flat ends up genuinely cheaper than another, and it hinges entirely on one binary fact: has the flat received its Occupancy Certificate or Completion Certificate?
</p>
<table>
  <tr><th>Flat Status</th><th>GST Rate</th><th>Input Tax Credit</th></tr>
  <tr><td>Under-construction, affordable housing*</td><td>1%</td><td>Not available</td></tr>
  <tr><td>Under-construction, other residential</td><td>5%</td><td>Not available</td></tr>
  <tr><td>Ready-to-move-in (with Occupancy Certificate)</td><td>0% (No GST)</td><td>Not applicable</td></tr>
  <tr><td>Resale flat (any age)</td><td>0% (No GST)</td><td>Not applicable</td></tr>
  <tr><td>Under-construction commercial property</td><td>12%</td><td>Available</td></tr>
</table>
<p style="font-size:0.9em">*Affordable housing: carpet area up to 60 sqm in the eight identified metro cities, or up to 90 sqm in non-metro locations, with a price cap of ₹45 lakh — both conditions must be met simultaneously.</p>
<p>
  Once a project receives its Occupancy Certificate, the transaction is legally classified as the sale of immovable property under Schedule III of the CGST Act — a category that sits entirely outside GST's scope. This is exactly why so many buyers actively lean toward near-complete or fully ready projects: on an ₹80 lakh under-construction flat taxed at the standard 5% rate, GST alone adds ₹4 lakh, an amount that can offset a meaningful chunk of whatever price advantage the under-construction listing appeared to offer over a comparable ready unit.
</p>
<p>
  A frequently misunderstood detail is which area figure decides affordable-housing eligibility. Builders commonly advertise built-up or super built-up area, which typically runs 15-30% larger than the carpet area that actually determines your GST rate. A flat marketed loosely as "around 700 sq ft" could sit comfortably inside or well outside the 60 sqm (roughly 645 sq ft) metro carpet-area threshold depending on exactly how that figure was measured — so it's worth confirming the precise carpet area from your builder's RERA project filing rather than relying on brochure language alone.
</p>

---

<h2>Stamp Duty and Registration: A State-by-State Cost That Never Disappears</h2>
<p>
  Unlike GST, stamp duty and registration apply to every flat purchase in India — under-construction, ready-to-move, or resale — with no exceptions, because they're a tax on the legal transfer document itself, not on the construction status of the property. Combined, these typically add 5% to 9% of the property's value, though the exact figure depends entirely on which state the flat is in, since stamp duty is a state subject and each state sets its own rate independently.
</p>
<table>
  <tr><th>Component</th><th>Typical Range</th><th>Basis of Calculation</th></tr>
  <tr><td>Stamp Duty</td><td>3% – 8% of property value</td><td>Higher of agreement value or circle rate</td></tr>
  <tr><td>Registration Charges</td><td>~1% of property value (some states cap this)</td><td>Same value basis as stamp duty</td></tr>
  <tr><td>Gender-based concession (where applicable)</td><td>1–2 percentage points lower</td><td>Property registered solely/jointly in a woman's name</td></tr>
</table>
<p>
  The single most important, and most commonly misunderstood, mechanic here is the "higher of two values" rule. Stamp duty is calculated on whichever is greater: the agreement value you've actually negotiated with the seller, or the government's circle rate (also called the ready reckoner rate) for that specific locality. This means a buyer who successfully negotiates a flat's price down below the prevailing circle rate does not get a proportionally lower stamp duty bill — the tax authority still uses the higher circle rate figure, so the "discount" only reduces what you pay the seller, not what you owe the state government. Circle rates are published and revised periodically by state governments, and can vary meaningfully even between neighbourhoods of the same city, which is why checking your specific locality's current circle rate — not a citywide average — is the only reliable way to estimate your actual stamp duty liability before registration day.
</p>
<p>
  Several states also apply a cap on registration charges rather than an uncapped percentage — meaning that as property value rises, the registration component becomes proportionally smaller relative to the total transaction, even though stamp duty itself continues scaling with value. This detail alone can shift the total tax burden noticeably for higher-value flats, and it's a genuinely useful thing to check on your specific state's official stamps-and-registration portal before finalizing your budget.
</p>

---

<h2>Brokerage: The One Cost You Can Actually Negotiate</h2>
<p>
  Brokerage is the clearest example of a genuinely negotiable cost in the entire flat-buying process. For resale transactions arranged through an agent, the conventional market rate across most Indian cities sits around 1% of the transaction value, with a realistic range of roughly 0.5% to 2% depending on the city, the specific agency, the property's price bracket, and how competitive that particular listing is. Whether the buyer pays this, the seller pays it, or both parties split their own agent's fee separately is a matter of local convention and specific arrangement rather than a fixed rule, so it's worth clarifying this explicitly, in writing, before an agent begins actively working a deal on your behalf.
</p>
<p>
  For under-construction flats bought directly from a builder, brokerage frequently isn't charged to the buyer as a visible, separate line item at all, since many builders compensate their sales channel out of their own margins — though it's still worth confirming this directly, since some projects route through external channel partners whose commission may already be quietly built into the quoted per-square-foot price rather than itemized separately.
</p>

---

<h2>Legal Fees and Home Loan Costs</h2>
<p>
  Engaging an independent lawyer to verify a property's title, check for existing encumbrances or pending litigation, and review or draft your sale agreement is one of the more modest costs in absolute rupee terms, but skipping it to save money is one of the riskier shortcuts a buyer can take, particularly for resale properties where the ownership history is longer and harder to verify without professional help. Fees here are usually a flat charge rather than a percentage of the transaction, and vary based on the property's complexity and your lawyer's experience.
</p>
<p>
  If you're financing part of the purchase through a home loan, expect a processing fee typically in the range of 0.25% to 1% of the loan amount, along with charges the bank commissions independently for property valuation and a legal opinion on the title — these bank-side checks are separate from, and don't substitute for, your own independent legal verification. It's worth budgeting for these loan-related costs specifically as cash outflows rather than assuming they're automatically absorbed into the loan itself, since most lenders deduct processing fees upfront rather than adding them to the disbursed loan amount.
</p>

---

<h2>Builder Extras: The Most Underestimated Line Items</h2>
<p>
  These are the charges that most consistently surprise first-time buyers, precisely because none of them appear in a project's advertised per-square-foot rate. A Preferential Location Charge (PLC) adds a premium for a more desirable unit — higher floor, corner position, better view, or proximity to a garden or pool rather than a neighbouring building. Car parking, particularly a second slot or covered/basement parking beyond whatever's included with the base unit, is frequently sold separately. Club membership or amenity charges, covering a project's gym, pool, or clubhouse, are often mandatory for every unit owner and structured as a one-time payment collected at possession, sometimes alongside a recurring annual renewal fee once you've moved in. And a corpus fund or maintenance deposit — a one-time reserve collected upfront and later handed over to the resident welfare association or housing society — is charged to build a fund for major future repairs that ordinary monthly maintenance isn't designed to cover.
</p>
<p>
  Individually modest, these charges compound: on a well-amenitized mid-sized flat, PLC, parking, club membership, and corpus fund together can easily add 5-10% on top of the quoted base price. The most reliable protection against this surprise is asking your builder for a complete, itemized cost sheet — not just the base rate — before you pay a booking amount, so every one of these charges is visible in your budget from the outset rather than surfacing gradually as possession approaches.
</p>

---

<h2>Under-Construction vs Ready-to-Move: Weighing the Real Trade-off</h2>
<p>
  Under-construction flats are typically priced lower per square foot than an equivalent ready-to-move unit in the same locality, reflecting both the construction-and-delivery risk the buyer absorbs and a builder's pricing strategy to generate early sales momentum. But that lower base price has to be weighed directly against GST, which applies only to the under-construction purchase — on an ₹80 lakh flat, a straight 5% GST adds ₹4 lakh, which can offset a meaningful share, or occasionally all, of the initial price advantage. Beyond the direct tax comparison, under-construction purchases carry real delivery-timeline risk, including the possibility of paying both a loan EMI and rent simultaneously if possession is delayed, while ready-to-move and resale purchases let you inspect the actual finished unit and move in immediately, typically at a price premium that reflects exactly that certainty. The only fair way to compare the two is running both through a full total-cost calculation — base price plus GST, stamp duty, registration, and extras for the under-construction option; base price plus stamp duty, registration, and any outstanding dues for the ready/resale option — rather than comparing the two advertised base prices in isolation.
</p>

---

<h2>A Practical Checklist Before You Book a Flat</h2>
<ul>
  <li>Confirm the exact carpet area (not built-up or super built-up area) directly from the builder's RERA filing.</li>
  <li>Ask for an itemized cost sheet covering PLC, parking, club membership, and corpus fund — not just the base per-sq-ft rate.</li>
  <li>Check your specific locality's current circle rate before assuming your negotiated price will determine your stamp duty.</li>
  <li>Confirm whether GST applies at all by checking the project's Occupancy/Completion Certificate status.</li>
  <li>Clarify brokerage terms and who is responsible for paying it, in writing, before an agent begins active work.</li>
  <li>Budget stamp duty, registration, and brokerage as cash requirements — most lenders will not finance these through your home loan.</li>
  <li>For resale flats, verify that all existing society dues, property taxes, and any loan or encumbrance on the unit are fully cleared before registration.</li>
</ul>

---

<h2>Who Should Use This Calculator?</h2>
<ul>
  <li>First-time home buyers trying to understand the real cash requirement before booking a flat.</li>
  <li>Buyers comparing an under-construction flat against a ready-to-move or resale alternative.</li>
  <li>Anyone sizing a home loan application against total cost rather than base price alone.</li>
  <li>Buyers comparing the same budget across two different states or cities.</li>
  <li>Resale buyers wanting to sanity-check an agent's brokerage quote and total settlement figure.</li>
  <li>Anyone reviewing a builder's final cost sheet or demand letter against an independent estimate.</li>
</ul>

---

<h2>Limitations of This Calculator</h2>
<p>
  This calculator provides a planning-stage estimate based on typical GST rates, indicative stamp duty ranges, and common market conventions for brokerage and builder charges. It cannot account for last-minute state-level rate revisions, project-specific builder charges that fall outside the standard categories listed here, or your personal eligibility for a specific concession such as a gender-based stamp duty rebate. Always confirm the exact, current stamp duty and registration rate for your specific state and locality on the official stamps-and-registration department portal, and request a complete, written, itemized cost sheet from your builder or seller before making any financial commitment based on this or any other online estimate.
</p>
`,
};