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
    title: "Travel Cost Calculator – Road Trip Budget per Person",
    description:
      "Estimate road-trip cost for fuel, tolls, hotel rooms, food and a 5% buffer. Compare one-way or return totals and cost per traveler.",
    keywords: [
      "travel cost calculator",
      "road trip budget calculator",
      "trip cost per person calculator",
      "vacation budget estimator",
      "travel cost calculator per km",
      "toll and fuel cost calculator",
      "daily travel budget planner",
      "hotel and food budget calculator",
      "weekend getaway cost calculator",
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
      "Total = Fuel + Estimated Tolls + (Nights × Rooms × Room Rate) + (Travelers × Days × Food/Day) + 5% Buffer",
    explanation: `A travel budget combines distance-based costs with daily costs. Fuel equals total trip distance divided by vehicle mileage, multiplied by the fuel price you enter. The preset fuel prices and mileage figures are editable examples, not live local rates.

Vehicle type and fuel choice matter because mileage and price per unit change the cost per kilometre. Use the actual mileage observed for your vehicle and a recent local pump price instead of relying on the example defaults.

Toll charges are frequently underestimated because they don't scale as predictably as fuel does — they depend on which specific highways you use rather than raw distance alone. As a planning reference, NHAI tolls on a long highway trip typically add ₹800-₹2,500 for a one-way journey of several hundred kilometres, and this calculator applies a simple per-kilometre toll estimate that you should refine using an actual toll calculator or FASTag app for your exact route before finalizing your fuel budget.

Accommodation uses nights (days minus one), rooms (two travelers per room, rounded up), and the selected example room rate. Food uses travelers multiplied by trip days and your entered daily food allowance.

The toll figure is a rough distance-based allowance of ₹1.20 per kilometre, not a route-specific toll quote. Check the actual route and replace this planning assumption outside the calculator before booking.

What this calculator does not include: flight or train tickets (which this tool assumes you're not using if you've entered a driving distance), sightseeing and entry fees, travel insurance, vehicle rental charges if you don't own the car, and any car servicing or emergency repair costs that can arise on a long drive. It also assumes standard, non-peak-season pricing — expect accommodation costs to rise 20-40% during major holiday periods and festival season, so add a buffer if you're traveling during Diwali, Christmas, or major long weekends.`,
    example: {
      input:
        "500 km one-way round trip, 16 km/L, ₹106/L, 4 travelers, 3 days, mid-range room at ₹3,200/night, ₹800 food per person/day",
      output:
        "Fuel: ₹6,625; toll allowance: ₹1,200; accommodation: 2 nights × 2 rooms × ₹3,200 = ₹12,800; food: ₹9,600; 5% buffer: ₹1,511; total: about ₹31,736 or ₹7,934 per traveler.",
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
        "There is no reliable fixed total. For a 1,000 km journey, divide 1,000 by your vehicle's real mileage and multiply by the current local fuel price. Then add route-specific tolls, room cost for the required nights, food for each traveler and any activities or parking.",
    },
    {
      question: "Is it cheaper to drive, fly, or take a train for a long-distance trip?",
      answer:
        "For a single traveler, trains and budget flights are often cheaper than driving once you factor in fuel, tolls, and the value of your time. However, for groups of three or more sharing one vehicle, driving frequently becomes the most economical option per person, especially on routes with moderate tolls. This calculator is built specifically for the driving scenario — if you're comparing against flights or trains, get a separate ticket quote and weigh it against this tool's fuel-and-toll output.",
    },
    {
      question: "How much cheaper is CNG compared to petrol for a road trip?",
      answer:
        "Calculate both cases with the same trip distance using the vehicle's real mileage and the local price per unit. CNG may cost less per kilometre, but the difference is not a fixed percentage and route availability should be checked before departure.",
    },
    {
      question: "What's a realistic daily food budget while traveling in India?",
      answer:
        "Budget travelers typically spend ₹500-₹800 per person per day on food in India, while mid-range travelers who eat at nicer restaurants and the occasional hotel buffet spend closer to ₹1,000-₹1,500 per day. Luxury travelers dining at fine establishments can spend ₹2,000 or more per day. Street food and local eateries can bring this down significantly if you're comfortable with more adventurous, budget-friendly options.",
    },
    {
      question: "How much should I budget for hotels on a road trip?",
      answer:
        "Enter the current room rate for your destination and dates. The calculator assumes two travelers per room, rounds up the required room count, and applies the selected rate per room for each overnight stay.",
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
    <h2>How to Estimate the Cost of a Road Trip</h2>
    <p>A road-trip estimate combines shared transport costs with expenses that change by traveler and day. Start with the exact one-way distance and select one-way or return. Use your vehicle's measured mileage and a recent local fuel price rather than relying on a generic vehicle average.</p>

    <h2>Travel Cost Formula</h2>
    <p><strong>Fuel cost = (total trip distance ÷ mileage) × fuel price.</strong> Accommodation equals nights × rooms × selected room rate, where nights are trip days minus one and the calculator assumes two travelers per room. Food equals travelers × days × food allowance. The tool adds an estimated toll allowance and then a 5% miscellaneous buffer.</p>

    <h2>How the Toll Estimate Works</h2>
    <p>The calculator uses ₹1.20 per kilometre as a rough planning allowance. Actual tolls depend on the chosen highways, vehicle class, toll plazas and route, so confirm the route-specific amount before travel. Treat the displayed toll value as an estimate, not a live FASTag quote.</p>

    <h2>Daily Accommodation and Food Budget by Travel Style</h2>
    <table>
      <tr><th>Travel Style</th><th>Hotel (per room/night)</th><th>Food (per person/day)</th></tr>
      <tr><td>Budget</td><td>₹1,000-₹2,500</td><td>₹500-₹800</td></tr>
      <tr><td>Mid-range</td><td>₹2,500-₹5,000</td><td>₹1,000-₹1,500</td></tr>
      <tr><td>Luxury</td><td>₹5,000-₹12,000+</td><td>₹2,000+</td></tr>
    </table>
    <p>The displayed hotel tiers are editable planning assumptions expressed per room per night. Rates can change by property, city, season, taxes and occupancy rules; replace the selected tier mentally with a real booking quote when finalizing the budget.</p>

    <h2>Ways to Reduce Your Travel Budget</h2>
    <ul>
      <li>Compare fuels using your vehicle's actual mileage and current local fuel price</li>
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
    <p>These are illustrative fuel-only estimates, not current route quotations. Enter your vehicle's measured mileage and local fuel price, then verify route-specific tolls because charges vary by road and vehicle category.</p>

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
