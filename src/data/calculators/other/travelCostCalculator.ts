import { Calculator } from "@/src/types/calculator";

export const travelCostCalculator: Calculator = {
  slug: "travel-cost-calculator",
  name: "Travel Cost Calculator",
  description:
    "Estimate the total cost of a road trip or multi-day vacation in India, covering fuel, tolls, accommodation, food, and daily expenses per traveler.",
  category: "Other",
  isPopular: true,
  compareWith: [
    "event-cost-calculator",
    "wedding-budget-calculator",
    "party-budget-calculator",
    "house-construction-cost-calculator",
    "gold-price-calculator",
  ],

  seo: {
    title: "Travel Cost Calculator India (2026) - Trip Budget Estimator",
    description:
      "Calculate your India road trip or vacation cost instantly — fuel, tolls, hotels, and food. Get a per-person and total trip budget breakdown for 2026.",
    keywords: [
      "travel cost calculator",
      "trip cost calculator india",
      "road trip budget calculator",
      "fuel cost calculator india",
      "vacation budget calculator india",
      "travel cost calculator per km",
      "trip planner budget calculator",
      "petrol cost calculator for trip",
      "how much does a road trip cost in india",
      "travel budget calculator 2026",
      "car trip cost calculator india",
      "toll cost calculator india",
      "daily travel budget calculator",
      "family vacation cost calculator india",
      "trip cost per person calculator",
      "highway trip fuel cost calculator",
      "hotel and food budget calculator for trip",
      "india trip cost estimator",
      "diesel vs petrol trip cost calculator",
      "weekend getaway budget calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter your trip distance and vehicle details",
      description:
        "Tell us the one-way distance, your vehicle's fuel type and mileage, and whether it's a one-way or round trip.",
      icon: "location",
    },
    {
      step: 2,
      title: "Add travelers, days, and daily spend",
      description:
        "Enter the number of people traveling, how many days the trip will last, and your expected hotel and food budget per day.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Get your instant trip cost breakdown",
      description:
        "See fuel cost, estimated tolls, accommodation, food, and a small daily miscellaneous allowance, split out clearly.",
      icon: "result",
    },
    {
      step: 4,
      title: "Adjust to fit your travel budget",
      description:
        "Change the fuel type, number of days, or hotel tier to instantly see how the total and per-person cost shift.",
      icon: "clock",
    },
  ],

  formula: {
    title: "Travel Cost Calculation Formula",
    formula:
      "Total Cost = Fuel Cost (Distance ÷ Mileage × Fuel Price) + Toll Estimate + (Travelers × Days × Hotel Rate) + (Travelers × Days × Food Rate) + Misc Buffer",
    explanation: `A road trip or vacation budget is really the sum of one transport cost and several recurring daily costs. Fuel is the clearest transport cost and follows a simple, well-established formula: distance in kilometres divided by your vehicle's mileage in km per litre, multiplied by the current fuel price per litre. As of mid-2026, national average petrol prices sit around ₹104-₹108 per litre and diesel around ₹92-₹94 per litre, though both vary by state due to differing VAT rates — Rajasthan, for instance, charges some of the highest fuel VAT in the country, while other states run lower. This calculator uses representative national averages that you should adjust to your specific state or city pump price for precision.

Vehicle type and fuel choice change the fuel bill more than almost any other single input. Small hatchbacks typically deliver 15-25 km/l, sedans 12-18 km/l, and SUVs 8-15 km/l, while CNG vehicles run roughly 60% cheaper per kilometre than an equivalent petrol vehicle, albeit with a smaller refuelling network along some highway stretches. For a 1,000 km one-way trip, a petrol hatchback at 16 km/l costs roughly ₹6,500-₹6,800 in fuel, a diesel SUV at 14 km/l costs a comparable ₹6,500-₹6,900, and a CNG sedan at 25-28 km/kg can bring the same trip down to around ₹2,900-₹3,600 — a saving that becomes significant on longer journeys.

Toll charges are frequently underestimated because they don't scale as predictably as fuel does — they depend on which specific highways you use rather than raw distance alone. As a planning reference, NHAI tolls on a long highway trip typically add ₹800-₹2,500 for a one-way journey of several hundred kilometres, and this calculator applies a simple per-kilometre toll estimate that you should refine using an actual toll calculator or FASTag app for your exact route before finalizing your fuel budget.

Accommodation and food are the two costs that scale with both traveler count and trip duration, which is why they usually end up being the largest share of a multi-day trip's total rather than fuel. Budget-conscious mid-range hotels in India often run ₹1,500-₹4,000 per room per night depending on city and season, and this calculator applies a per-traveler-per-day hotel rate assuming shared rooms, alongside a separate food allowance — budget travelers typically spend ₹500-₹800 per person per day on food, while mid-range travelers spend closer to ₹1,000-₹1,500, according to aggregated 2026 traveler spending data.

Trip duration compounds accommodation and food costs directly, which is why a same-distance trip stretched from 3 days to 7 days can nearly double your total even though fuel and tolls barely change. This calculator multiplies hotel and food rates by both traveler count and number of days, since these categories are the ones that grow with time spent traveling rather than distance covered.

What this calculator does not include: flight or train tickets (which this tool assumes you're not using if you've entered a driving distance), sightseeing and entry fees, travel insurance, vehicle rental charges if you don't own the car, and any car servicing or emergency repair costs that can arise on a long drive. It also assumes standard, non-peak-season pricing — expect accommodation costs to rise 20-40% during major holiday periods and festival season, so add a buffer if you're traveling during Diwali, Christmas, or major long weekends.`,
    example: {
      input:
        "1,000 km one-way (round trip), petrol car at 16 km/l, ₹106/litre, 4 travelers, 5 days, ₹2,000/day hotel per traveler-share, ₹700/day food per traveler",
      output:
        "Fuel: (2,000 km ÷ 16 km/l) × ₹106 = ₹13,250. Tolls: ₹3,000 (round trip estimate). Accommodation: 4 × 5 × ₹2,000 = ₹40,000. Food: 4 × 5 × ₹700 = ₹14,000. Misc buffer (5%): ₹3,513. Estimated Total: ₹73,763 — roughly ₹18,441 per traveler for the full 5-day trip.",
    },
    useCases: [
      "Planning a multi-day road trip and comparing petrol versus CNG running costs",
      "Splitting a group vacation's total cost fairly among travelers",
      "Estimating a weekend getaway budget before booking hotels",
      "Comparing the cost of driving your own car versus hiring a cab and driver for a trip",
      "Building a family vacation budget that separates transport from daily living costs",
    ],
  },

  faqs: [
    {
      question: "How much does a 1,000 km road trip cost in India?",
      answer:
        "For a 1,000 km one-way trip at current 2026 fuel prices, a petrol hatchback averaging 16 km/l costs roughly ₹6,500-₹6,800 in fuel, a diesel SUV at 14 km/l costs a similar ₹6,500-₹6,900, and a CNG sedan at 25-28 km/kg costs approximately ₹2,900-₹3,600. Add NHAI tolls of roughly ₹800-₹2,500 depending on the highways used, plus accommodation and food if it's a multi-day trip, to get your complete road trip budget.",
    },
    {
      question: "Is it cheaper to drive, fly, or take a train for a long-distance trip?",
      answer:
        "For a single traveler, trains and budget flights are often cheaper than driving once you factor in fuel, tolls, and the value of your time. However, for groups of three or more sharing one vehicle, driving frequently becomes the most economical option per person, especially on routes with moderate tolls. This calculator is built specifically for the driving scenario — if you're comparing against flights or trains, get a separate ticket quote and weigh it against this tool's fuel-and-toll output.",
    },
    {
      question: "How much cheaper is CNG compared to petrol for a road trip?",
      answer:
        "CNG is roughly 60% cheaper per kilometre than an equivalent petrol vehicle, making it one of the most effective ways to cut trip costs if your vehicle supports it. The trade-off is a smaller refuelling network along some highway stretches and slightly lower boot space due to the CNG cylinder, so it's worth checking CNG station availability along your specific route before relying on it for a long-distance trip.",
    },
    {
      question: "What's a realistic daily food budget while traveling in India?",
      answer:
        "Budget travelers typically spend ₹500-₹800 per person per day on food in India, while mid-range travelers who eat at nicer restaurants and the occasional hotel buffet spend closer to ₹1,000-₹1,500 per day. Luxury travelers dining at fine establishments can spend ₹2,000 or more per day. Street food and local eateries can bring this down significantly if you're comfortable with more adventurous, budget-friendly options.",
    },
    {
      question: "How much should I budget for hotels on a road trip?",
      answer:
        "Budget hotels and guesthouses in India typically run ₹1,000-₹2,500 per room per night, mid-range hotels ₹2,500-₹5,000, and higher-end properties ₹5,000-₹12,000 or more depending on the city and season. Sharing rooms among travelers significantly reduces the per-person cost, which is why this calculator applies the hotel rate per traveler assuming shared accommodation rather than one room per person.",
    },
    {
      question: "Does this calculator account for toll charges accurately?",
      answer:
        "This calculator applies a simplified per-kilometre toll estimate as a planning reference, since actual tolls depend on exactly which highways and toll plazas your route passes through rather than distance alone. For a precise figure, check your specific route on the NHAI FASTag toll calculator or a navigation app before finalizing your budget — this is especially worth doing on routes with multiple expressway sections, like Mumbai-Pune or Delhi-Jaipur, where toll charges can be a meaningful share of total transport cost.",
    },
    {
      question: "How does traveler count affect the per-person cost of a trip?",
      answer:
        "Fuel and toll costs are fixed regardless of how many people are in the vehicle, so they get cheaper per person as your group grows — a 4-person trip splits fuel costs into quarters compared to solo travel. Accommodation costs also drop per person when travelers share rooms. Food, however, scales roughly linearly with headcount since each person eats a full portion regardless of group size, so it doesn't benefit from the same economies of scale.",
    },
    {
      question: "Should I budget differently for peak season travel?",
      answer:
        "Yes — accommodation costs typically rise 20-40% during major holidays, festival periods like Diwali, and long weekends, since hotels raise rates when demand peaks. Fuel and toll costs stay roughly the same regardless of season, but if you're traveling during a high-demand period, it's worth increasing your hotel budget input in this calculator by at least 25% to get a realistic estimate rather than being surprised at check-in.",
    },
    {
      question: "What is not included in this travel cost estimate?",
      answer:
        "This calculator covers fuel, estimated tolls, accommodation, food, and a small daily miscellaneous buffer. It does not include sightseeing and monument entry fees, travel insurance, vehicle rental charges if you're hiring rather than driving your own car, car servicing or emergency repairs, or shopping and souvenirs. For a fuller trip budget, add a separate allowance for activities and entry fees based on your specific itinerary.",
    },
    {
      question: "How accurate is the fuel cost estimate if fuel prices change during my trip?",
      answer:
        "Fuel prices in India are revised regularly based on international crude oil rates and can shift by a few rupees per litre over the course of a month, though day-to-day changes are typically small. This calculator uses the fuel price you enter, so update it with the current rate at your local pump before calculating for the most accurate figure — a 5% swing in fuel price has a proportionally small effect on your total trip cost once accommodation and food are factored in.",
    },
  ],

  seoContent: `
    <h2>How Much Does a Road Trip Cost in India in 2026?</h2>
    <p>A road trip's total cost depends on four things: distance, your vehicle's fuel efficiency, how many days you're traveling, and how many people are sharing the costs. As a broad reference, a typical traveler spends roughly ₹1,000-₹6,000 per day in India covering food, local transport, and modest sightseeing, before accounting for the fuel and accommodation costs this calculator handles separately. A weekend 2-3 day trip for a family of four might total ₹15,000-₹35,000 depending on distance and hotel tier, while a week-long multi-city trip can range from ₹40,000 to well over ₹1,00,000 depending on travel style.</p>

    <h2>Fuel Cost Reference by Vehicle Type (2026)</h2>
    <table>
      <tr><th>Vehicle Type</th><th>Typical Mileage</th><th>Fuel Cost for 1,000 km (one-way)</th></tr>
      <tr><td>Petrol hatchback</td><td>15-25 km/l</td><td>₹4,300-₹7,200</td></tr>
      <tr><td>Petrol sedan</td><td>12-18 km/l</td><td>₹6,000-₹9,000</td></tr>
      <tr><td>Diesel SUV</td><td>8-15 km/l</td><td>₹6,300-₹11,800</td></tr>
      <tr><td>CNG sedan</td><td>22-28 km/kg</td><td>₹2,700-₹3,500</td></tr>
    </table>
    <p>These figures use a national average petrol price of roughly ₹104-₹108/litre, diesel at ₹92-₹94/litre, and CNG at roughly ₹76/kg. Prices vary meaningfully by state due to differing VAT rates, so adjust for your specific starting city before locking in a number.</p>

    <h2>Toll and Highway Cost Reference</h2>
    <p>NHAI tolls on a long one-way highway trip typically add ₹800-₹2,500 depending on the number of toll plazas and the specific expressways used. High-traffic corridors with premium expressway sections — such as Mumbai-Pune or the Delhi-Agra route — tend to sit at the higher end of that range, while routes on older national highways with fewer toll plazas cost less. Always keep your FASTag topped up, since cash payments at toll booths are far slower and, on some stretches, no longer accepted.</p>

    <h2>Daily Accommodation and Food Budget by Travel Style</h2>
    <table>
      <tr><th>Travel Style</th><th>Hotel (per room/night)</th><th>Food (per person/day)</th></tr>
      <tr><td>Budget</td><td>₹1,000-₹2,500</td><td>₹500-₹800</td></tr>
      <tr><td>Mid-range</td><td>₹2,500-₹5,000</td><td>₹1,000-₹1,500</td></tr>
      <tr><td>Luxury</td><td>₹5,000-₹12,000+</td><td>₹2,000+</td></tr>
    </table>
    <p>Sharing rooms is the single most effective way to bring down the per-person accommodation cost on a group trip, since hotel rates are charged per room rather than per guest in most standard bookings.</p>

    <h2>Sample Trip Cost Breakdown</h2>
    <table>
      <tr><th>Trip Type</th><th>Distance</th><th>Duration</th><th>Estimated Total (4 travelers, mid-range)</th></tr>
      <tr><td>Weekend getaway</td><td>250 km round trip</td><td>2 days</td><td>₹18,000-₹28,000</td></tr>
      <tr><td>Regional road trip</td><td>800 km round trip</td><td>4 days</td><td>₹45,000-₹65,000</td></tr>
      <tr><td>Long-distance vacation</td><td>2,000 km round trip</td><td>7 days</td><td>₹90,000-₹1,40,000</td></tr>
    </table>

    <h2>Ways to Reduce Your Travel Budget</h2>
    <ul>
      <li>Switch to a CNG vehicle where available — roughly 60% cheaper per km than petrol</li>
      <li>Share rooms among travelers rather than booking one room per person</li>
      <li>Travel outside major holiday periods, when hotel rates can rise 20-40%</li>
      <li>Use a FASTag with a rewards credit card to earn cashback on toll payments</li>
      <li>Plan meals around local eateries and street food rather than hotel restaurants for a meaningful daily saving</li>
    </ul>

    <h2>Driving Your Own Car Versus Hiring a Cab and Driver</h2>
    <p>For travelers who don't own a suitable vehicle or aren't comfortable with a long highway drive, hiring a car with a driver is a common alternative worth comparing directly against this calculator's output. A standard sedan or compact SUV with a driver typically costs ₹10-16 per kilometre inclusive of fuel, tolls, and driver allowance for multi-day outstation trips, while premium vehicles can run considerably higher. For a solo traveler or couple, this is often more expensive per person than driving your own fuel-efficient car, but for a group of four to six splitting the cost, hired transport can end up competitive once you factor in the value of not having to drive yourself for eight or more hours on unfamiliar highways.</p>
    <p>All-inclusive packages from reputable operators typically bundle fuel, tolls, and driver allowance into a single daily or per-kilometre rate, which removes the planning overhead this calculator handles for a self-driven trip but also removes your ability to control costs granularly. If you're weighing both options, run this calculator with your own vehicle's numbers first, then request a matching quote from two or three car rental operators for the same route and duration before deciding.</p>

    <h2>Seasonal and Regional Fuel Price Variation</h2>
    <p>Fuel prices in India are not uniform across the country because state VAT rates on petrol and diesel vary considerably — some states apply VAT as high as 29% while others sit meaningfully lower, which is why identical fuel can cost ₹10-15 more per litre in one state compared to a neighbouring one. If your road trip crosses state borders, it's often worth timing a fill-up in the cheaper state before crossing over, particularly on long routes where the total litres purchased make even a small per-litre difference add up. Diesel typically remains ₹10-15 cheaper per litre than petrol nationally and delivers 20-30% better mileage on longer highway stretches, which is part of why diesel SUVs remain a popular choice for extended road trips despite higher upfront vehicle costs.</p>

    <h2>Building a Realistic Multi-Day Trip Budget</h2>
    <p>Once you move beyond a single-day drive into a multi-day vacation, accommodation and food quickly overtake fuel as your largest cost categories, which is a common source of surprise for travelers who mentally budget primarily around the drive itself. A 5-day trip for a family of four at mid-range hotel rates and food spending can easily see accommodation and food together account for 70-80% of the total trip cost, with fuel and tolls making up the remaining share. This is why this calculator treats duration and traveler count as first-class inputs rather than an afterthought — they typically matter more to your final number than the distance you're driving.</p>

    <h2>Popular Indian Road Trip Routes and Reference Costs</h2>
    <table>
      <tr><th>Route</th><th>Approx. Distance</th><th>Estimated Fuel Cost (petrol, one-way)</th></tr>
      <tr><td>Mumbai - Goa</td><td>585 km</td><td>₹3,800-₹4,200</td></tr>
      <tr><td>Delhi - Manali</td><td>540 km</td><td>₹3,500-₹3,900</td></tr>
      <tr><td>Bangalore - Chennai</td><td>350 km</td><td>₹2,300-₹2,600</td></tr>
      <tr><td>Delhi - Jaipur</td><td>280 km</td><td>₹1,850-₹2,100</td></tr>
      <tr><td>Mumbai - Pune (expressway)</td><td>150 km</td><td>₹1,000-₹1,200</td></tr>
    </table>
    <p>These figures cover fuel only and assume a petrol hatchback or sedan averaging 15-16 km/l at national average 2026 pricing. Toll charges are not included here since they vary by exact route and vehicle category — the Mumbai-Pune expressway, for instance, carries meaningfully higher per-kilometre tolls than an equivalent-distance stretch on an older national highway, despite being one of the shorter routes on this list.</p>

    <h2>How Group Size Changes Your Per-Person Cost</h2>
    <p>One of the more counterintuitive aspects of road trip budgeting is how sharply per-person cost drops as your group grows, at least up to the capacity of a single vehicle. A solo traveler driving 1,000 km bears the full fuel and toll cost alone, while the same trip split four ways cuts that portion of the bill to roughly a quarter per person. Accommodation follows a similar pattern when rooms are shared, since hotels charge per room rather than per guest — a family of four sharing two rooms pays the same total room cost as two couples traveling separately who each book their own room, but splits it across twice as many people. Food is the one major category that doesn't benefit from this effect, since each traveler eats a full portion regardless of group size, which is worth remembering when a larger group trip still feels expensive despite the fuel and hotel savings.</p>

    <h2>Who Should Use This Calculator?</h2>
    <ul>
      <li>Families and groups planning a road trip and wanting a fair per-person cost split</li>
      <li>Anyone comparing petrol, diesel, and CNG running costs for a specific route</li>
      <li>Travelers building a realistic multi-day vacation budget covering fuel, hotels, and food</li>
      <li>Anyone deciding between driving their own car versus hiring a cab and driver for a trip</li>
      <li>Employees estimating travel costs for reimbursement or expense reporting</li>
    </ul>
  `,
};