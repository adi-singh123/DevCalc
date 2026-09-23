import { Calculator } from "@/src/types/calculator";

export const mileageCalculator: Calculator = {
  slug: "mileage-calculator",

  name: "Mileage Calculator",

  description:
    "Calculate your car or bike's real mileage in km/L, fuel cost per kilometre, and total trip expense from distance travelled, fuel used, and fuel price.",

  category: "Vehicle",

  isPopular: true,

  editorialIntro:
    "Use either trip distance or two odometer readings to measure real-world mileage. For the most consistent result, compare several full-tank readings taken at the same pump and automatic cut-off point.",

  benchmarkContext: {
    title: "A More Reliable Tank-to-Tank Reading",
    badge: "Practical Measurement Guide",
    stat: "Repeat across 2–3 refills",
    description:
      "Fill to the first automatic cut-off, record the odometer, drive normally, then refill to the same cut-off. Subtract the two odometer readings and divide that distance by the fuel added on the second fill.",
    source: "Standard full-tank mileage calculation",
    lastUpdated: "September 2026",
  },

  seo: {
    title: "Mileage Calculator – Car & Bike km/L and Fuel Cost",

    description:
      "Calculate car or bike mileage from distance or odometer readings. See km/L, fuel cost per km and total trip cost for petrol, diesel, CNG or EV.",

    keywords: [
      "mileage calculator",
      "car mileage calculator km per liter",
      "bike mileage calculator",
      "fuel cost per km calculator",
      "trip fuel expense calculator",
      "fuel consumption calculator",
      "vehicle running cost estimator",
      "ev vs petrol running cost",
      "monthly fuel budget calculator",
      "calculate car mileage from odometer reading",
      "petrol cost per kilometre calculator India",
      "tank to tank mileage calculator",
      "odometer mileage calculator",
      "litres per 100 km calculator",
    ],
  },

  compareWith: [
    "fuel-cost-calculator",
    "distance-calculator",
    "ev-vs-petrol-cost-calculator",
  ],

  steps: [
    {
      step: 1,
      title: "Choose Distance or Odometer",
      description:
        "Enter the total distance travelled, or use your previous and current odometer readings so the calculator can find the distance.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Fuel Consumed",
      description: "Provide the precise amount of fuel used during the recorded trip or journey measured in litres (or kilograms for CNG).",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Enter Fuel Price",
      description:
        "Optionally enter the current retail fuel price per litre in your city to calculate your exact financial running costs and trip expenses.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View Mileage Results",
      description:
        "Get instant, actionable metrics including real mileage, fuel consumption indices, exact cost per kilometer, and total journey expenditure.",
      icon: "result",
    },
  ],

  formula: {
    title: "Mileage Calculator Formula",

    formula: "Mileage (km/L) = (Current Odometer − Previous Odometer) ÷ Fuel Added",

    explanation:
      "Mileage, also known as fuel efficiency or fuel economy, measures how far a vehicle can travel using one litre of fuel. Higher mileage means lower fuel consumption and reduced running costs. This calculator is useful for cars, motorcycles, scooters, SUVs, trucks, and commercial vehicles. Understanding your vehicle's mileage helps estimate fuel expenses, compare vehicle performance, and plan long-distance trips more effectively.",

    example: {
      input: "Distance Travelled: 500 km, Fuel Consumed: 25 litres",

      output: "Mileage = 500 ÷ 25 = 20 km/L",
    },

    useCases: [
      "Car mileage calculation",
      "Bike fuel efficiency tracking",
      "Fuel cost per kilometre estimation",
      "Road trip planning",
      "Vehicle running cost analysis",
      "Commercial vehicle fuel monitoring",
      "Fuel consumption comparison",
    ],
  },

  faqs: [
    {
      question: "Why is my real-world bike or car mileage significantly lower than the mileage figures claimed by the manufacturer?",
      answer:
        "Vehicle manufacturers publish mileage numbers based on standardized regulatory testing procedures conducted by bodies like the Automotive Research Association of India (ARAI). These baseline validation benchmarks are performed inside laboratory settings under strictly controlled environmental parameters—meaning perfectly smooth laboratory dynamometers, zero ambient traffic congestion, no aerodynamic wind resistance, ideal weather temperatures, light vehicle weights, and mathematically optimized shifting speeds. In real-world driving conditions, your vehicle faces frequent traffic gridlock, stop-and-go idles, braking cycles, poor structural road quality, continuous high-load air conditioning usage, aggressive throttle habits, under-inflated tyre pressures, and mixed fuel qualities. For instance, a vehicle officially certified at 20 km/L may only net around 13 to 16 km/L in tight city traffic. Tracking real-world mileage allows you to build a highly realistic financial operating budget.",
    },
    {
      question: "How do I calculate real-world vehicle mileage accurately using the classic tank-to-tank method?",
      answer:
        "The tank-to-tank method is widely considered the absolute gold standard for manual fuel economy calculation. To perform this test accurately, go to a fuel station and fill your tank completely up to the auto-cut click off point, then write down your exact current odometer reading (Odometer A). Proceed to drive your vehicle normally across your typical routes over several days until the tank drops. Return to the station, fill the tank back up to the exact same auto-cut point to maintain volume consistency, and record the precise number of liters filled (Fuel Consumed) alongside your new odometer figure (Odometer B). Calculate your distance by computing Odometer B minus Odometer A. Finally, divide that total trip distance by the liters added during your second stop. For example, logging 480 km and requiring 24 liters to top off yields an exact efficiency of 20 km/L.",
    },
    {
      question: "What range is considered a 'good' mileage figure for petrol, diesel, and CNG cars under typical Indian conditions?",
      answer:
        "What qualifies as efficient fuel economy depends fundamentally on the underlying vehicle segment, displacement size, and weight class. For small petrol hatchbacks, a real-world average between 15 and 21 km/L is considered highly efficient. Mid-size petrol sedans generally hover between 13 and 18 km/L, whereas bulkier petrol SUVs typically yield a much lower 10 to 15 km/L range due to heavier structural masses and wind drag. On the flip side, diesel variants usually yield higher thermal efficiency profiles, netting anywhere from 16 to 24 km/L across major segments. Dedicated CNG alternative fuel setups excel past liquid baselines, returning outstanding efficiency figures ranging from 22 to 33 km/kg. If your vehicle matches or exceeds these specific sweet spots during mixed commutes, your powertrain is operating in an ideal structural health bracket.",
    },
    {
      question: "How drastically does continuous air conditioner (AC) usage impact fuel economy during hot weather conditions?",
      answer:
        "Running your vehicle's cabin air conditioning system places a direct mechanical load on the internal combustion engine via an accessory belt-driven compressor, which requires additional horsepower and fuel to operate. During peak summer seasons, continuous AC usage can lower your vehicle's overall mileage by approximately 5% to 15%. This operational drop is amplified heavily inside dense city traffic grids, where a car spends significant windows idling in place; the engine burns fuel to keep the cabin cool without generating any actual distance forward. To mitigate this impact, avoid blasting the AC at the absolute coldest settings, leverage your system's internal cabin air recirculation mode to ease the compressor's workload, change clogged cabin air filters regularly, and park in shaded zones whenever possible to reduce initial thermal buildup.",
    },
    {
      question: "Petrol vs. CNG mileage and operational costs: Which option saves more money over long-term ownership?",
      answer:
        "CNG (Compressed Natural Gas) delivers substantially superior economic runtime parameters when contrasted directly with standard petrol options. While a conventional petrol-powered engine may net roughly 14 to 18 km/L, a matching CNG equivalent regularly produces an excellent 22 to 32 km/kg. Combined with the lower retail unit cost of natural gas compared to volatile crude oil prices, the raw cost-per-kilometer drops dramatically. However, there are systemic trade-offs to keep in mind: factory or aftermarket CNG conversions introduce heavy rear weight balances, drastically reduce available trunk cargo capacity, demand recurring high-pressure cylinder safety inspections, and can cause a minor drop in peak engine throttle response. For high-volume daily commuters traveling more than 40-50 km per day, the accumulated operational savings quickly outpace the initial purchase or modification premiums.",
    },
    {
      question: "What core driving habits and technical factors cause a vehicle's mileage to suddenly drop or deteriorate?",
      answer:
        "A sudden, noticeable degradation in your vehicle's fuel economy is typically a clear diagnostic symptom of driving style imbalances or underlying mechanical wear. From a technical standpoint, the most common culprits include severely under-inflated tyre pressures (which drastically spikes rolling resistance), highly contaminated or clogged engine air filters, overdue engine oil changes, failing oxygen sensors, fouled spark plugs, or sticky brake calipers. On the operational side of the equation, aggressive driving styles characterized by abrupt, wide-open throttle acceleration, erratic high-speed lane shifting, and hard late braking waste immense kinetic energy. Consistently carrying heavy, non-essential storage loads inside the trunk or running with an aerodynamic roof rack attached also increases drag, pulling your overall mileage numbers down.",
    },
  ],

  seoContent: `
<h2>How to Calculate Car or Bike Mileage</h2>
<p>
  Vehicle mileage tells you how far your car, bike or scooter travels on one unit of fuel. For petrol and diesel, it is normally shown in <strong>kilometres per litre (km/L)</strong>; CNG is measured in <strong>km/kg</strong>, while an electric vehicle can be compared in <strong>km/kWh</strong>.
</p>
<p>
  The basic formula is <strong>mileage = distance travelled ÷ fuel consumed</strong>. If you travelled 420 km and added 28 litres at the next full tank, your mileage is 15 km/L. Add the local fuel price to calculate total fuel cost and cost per kilometre.
</p>

<h2>Calculate Mileage from Odometer Readings</h2>
<p>
  Choose “Odometer readings” in the calculator when you have readings from two fill-ups. Subtract the previous reading from the current reading to get the distance, then divide by the fuel added during the second fill.
</p>
<ul>
  <li>Previous odometer: 12,500 km</li>
  <li>Current odometer: 12,920 km</li>
  <li>Fuel added: 28 litres</li>
  <li>Distance: 12,920 − 12,500 = 420 km</li>
  <li>Mileage: 420 ÷ 28 = <strong>15 km/L</strong></li>
</ul>

<h2>Claimed Mileage vs Real-World Mileage</h2>
<p>
  Certified mileage is useful for comparing vehicles under a standard test. Your measured result can differ because traffic, trip length, speed, air-conditioning, payload, tyre pressure, road conditions and driving style are not constant. Compare like-for-like trips and track several refills before deciding that your vehicle's efficiency has changed.
</p>

<h2>Typical Mileage Ranges by Vehicle Type</h2>
<p>
  The ranges below are broad reference points, not guaranteed figures. Engine size, transmission, vehicle weight and driving conditions can produce a result outside these ranges.
</p>

<table>
  <thead>
    <tr>
      <th>Vehicle Segment & Type</th>
      <th>Fuel Options</th>
      <th>Average City Mileage</th>
      <th>Average Highway Mileage</th>
      <th>Overall Efficiency Rating</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Two-Wheelers (100cc - 125cc)</strong></td>
      <td>Petrol</td>
      <td>50 - 65 km/L</td>
      <td>65 - 75 km/L</td>
      <td>Outstanding</td>
    </tr>
    <tr>
      <td><strong>Two-Wheelers (150cc - 250cc)</strong></td>
      <td>Petrol</td>
      <td>35 - 45 km/L</td>
      <td>45 - 52 km/L</td>
      <td>Good / Average</td>
    </tr>
    <tr>
      <td><strong>Compact Hatchbacks</strong></td>
      <td>Petrol / CNG</td>
      <td>14 - 18 km/L</td>
      <td>18 - 23 km/L</td>
      <td>Excellent</td>
    </tr>
    <tr>
      <td><strong>Mid-Size Sedans</strong></td>
      <td>Petrol / Diesel</td>
      <td>11 - 15 km/L</td>
      <td>15 - 20 km/L</td>
      <td>Good</td>
    </tr>
    <tr>
      <td><strong>Compact SUVs / Crossovers</strong></td>
      <td>Petrol / Diesel</td>
      <td>10 - 14 km/L</td>
      <td>14 - 18 km/L</td>
      <td>Average</td>
    </tr>
    <tr>
      <td><strong>Full-Size 7-Seater SUVs</strong></td>
      <td>Diesel</td>
      <td>8 - 11 km/L</td>
      <td>11 - 15 km/L</td>
      <td>Marginal</td>
    </tr>
    <tr>
      <td><strong>Strong Hybrid Vehicles</strong></td>
      <td>Petrol Hybrid</td>
      <td>22 - 26 km/L</td>
      <td>20 - 24 km/L</td>
      <td>Outstanding</td>
    </tr>
  </tbody>
</table>

<h2>Why Vehicle Mileage Changes</h2>
<p>
  A lower reading does not always indicate a fault. First compare similar routes, traffic and weather. If the drop continues across several tanks, check these common causes:
</p>

<h3>Driving style and traffic</h3>
<p>
  Repeated acceleration, hard braking, idling and short journeys usually consume more fuel than steady driving over a clear route.
</p>

<h3>Tyre pressure and vehicle load</h3>
<p>
  Incorrect tyre pressure increases rolling resistance. Extra passengers, luggage and roof carriers also make the engine work harder. Follow the pressure listed by the vehicle manufacturer.
</p>

<h3>Maintenance and mechanical condition</h3>
<p>
  A clogged air filter, unsuitable or overdue engine oil, wheel-alignment problems, dragging brakes or an engine-sensor fault can reduce efficiency. Follow the service schedule and investigate a persistent, unexplained drop.
</p>

<h2>How to Calculate Fuel Cost per Kilometre</h2>
<p>
  Divide the fuel price by your measured mileage. At ₹100 per litre and 15 km/L, the fuel-only running cost is <strong>₹6.67 per km</strong>. A 300 km trip would use about 20 litres and cost about ₹2,000 at that price.
</p>
<blockquote>
  <strong>Cost per km = Fuel price per unit ÷ Mileage</strong>
</blockquote>
<blockquote>
  <strong>Trip cost = (Trip distance ÷ Mileage) × Fuel price per unit</strong>
</blockquote>
<p>
  These figures include fuel or electricity only. Servicing, tyres, insurance, tolls, parking, finance costs and depreciation are separate ownership expenses.
</p>

<h2>Checklist for a Reliable Tank-to-Tank Mileage Result</h2>
<ul>
  <li>Use the same fuel pump and stop at the first automatic nozzle cut-off on both fills.</li>
  <li>Reset the trip meter after the first fill, or record both odometer readings.</li>
  <li>Enter only the fuel added on the second fill, not the vehicle's full tank capacity.</li>
  <li>Measure over several hundred kilometres and repeat the test across multiple tanks.</li>
  <li>Compare city and highway trips separately because traffic, speed, AC use, load, and tyre pressure change mileage.</li>
</ul>
<p>
  The displayed cost per kilometre covers fuel only. For a complete vehicle running-cost estimate, add servicing, tyres, insurance, tolls, parking, finance charges, and depreciation separately.
</p>
`,
};
