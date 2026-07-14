import { Calculator } from "@/src/types/calculator";

export const evVsPetrolCalculator: Calculator = {
  slug: "ev-vs-petrol-cost-calculator",

  name: "EV vs. Petrol Cost Calculator",

  description:
    "Compare the total cost of ownership between Electric Vehicles (EVs) and petrol-powered cars. Calculate savings on fuel, energy, and maintenance to determine your long-term return on investment.",

  category: "Vehicle",

  isPopular: true,

  seo: {
    title: "EV vs. Petrol Cost Calculator – Real-World Savings Analysis",
    description:
      "Compare the running costs of electric vs. petrol vehicles. Calculate fuel expenses, maintenance savings, and total cost of ownership to see if an EV is right for you.",
    keywords: [
      "ev vs petrol cost calculator",
      "electric vehicle vs petrol car running cost",
      "ev savings calculator",
      "petrol car vs ev comparison",
      "electric car maintenance cost vs petrol",
      "total cost of ownership calculator",
      "ev breakeven calculator",
      "fuel cost comparison",
      "electric vehicle efficiency calculator",
      "car running cost analysis",
      "is ev cheaper than petrol",
      "cost per km ev vs petrol",
      "ev charging vs petrol cost",
      "electric car long term savings",
      "ev vs ic car comparison",
      "petrol to electric conversion cost",
    ],
  },

  compareWith: ["mileage-calculator", "fuel-cost-calculator"],

  steps: [
    {
      step: 1,
      title: "Enter Daily Usage",
      description:
        "Input your average daily driving distance in kilometers to establish a baseline for your annual travel requirements.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Input Petrol Costs",
      description:
        "Provide your current petrol car's mileage (km/L) and the local fuel price (₹/L).",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Input EV Specifications",
      description:
        "Provide the expected EV efficiency (km per full charge or km per kWh) and local electricity tariff (₹/kWh).",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View Comparative Results",
      description:
        "Get a detailed breakdown of monthly/annual fuel savings, projected maintenance reductions, and your estimated breakeven period.",
      icon: "result",
    },
  ],

  formula: {
    title: "Cost Analysis Formula",
    formula: "Cost per km = (Unit Price) ÷ (Efficiency)",
    explanation:
      "The cost of ownership is determined by comparing the energy consumed over a fixed distance. For petrol vehicles, this is (Fuel Price per Litre ÷ Mileage in km/L). For EVs, it is (Electricity Cost per kWh ÷ Efficiency in km/kWh). Comparing these two figures over an annual usage period reveals the total financial impact, though real-world variables like traffic, driving style, and seasonal temperature can shift the numbers in either direction.",
    example: {
      input: "Petrol: ₹100/L at 15 km/L. EV: ₹8/kWh at 6 km/kWh.",
      output: "Petrol: ₹6.66/km. EV: ₹1.33/km.",
    },
    useCases: [
      "Comparing fuel vs. charging costs",
      "Calculating annual savings for commuters",
      "Determining the vehicle breakeven point",
      "Total cost of ownership projection",
    ],
  },

  faqs: [
    {
      question:
        "Are electric vehicles actually cheaper to maintain than petrol cars, or is that overstated?",
      answer:
        "The maintenance advantage is real, but it isn't unlimited, and it's worth understanding where it actually comes from rather than treating it as a blanket rule. A petrol engine depends on hundreds of moving parts working under extreme heat and constant friction — pistons, valves, camshafts, timing chains, fuel injectors, and a multi-speed transmission. Each of these is a wear item, which is why petrol cars need periodic oil changes, filter replacements, spark plug swaps, and eventually clutch or transmission work. An EV motor, by contrast, typically has a single moving assembly (the rotor), so there's no oil to change and nothing to combust. In practice, this means EV owners mostly deal with tyre rotations, brake fluid, cabin filters, and coolant checks for the battery thermal system. Over a typical 5-year, 75,000 km ownership period, this can translate to noticeably lower scheduled maintenance bills — often 60-70% less than a comparable petrol car, based on typical Indian service center pricing. That said, the picture isn't entirely one-sided. EV tyres wear slightly faster because of the instant torque and the extra weight of the battery pack, and if something does go wrong with the battery pack, motor, or power electronics outside of warranty, repair costs can be steep since these are specialized components with fewer independent repair shops able to service them compared to the widespread petrol mechanic network across India. So the honest answer is: yes, EVs are meaningfully cheaper to maintain in routine, day-to-day terms, but the savings are not infinite, and owners should still budget for tyres and factor in that after-warranty major repairs, while rarer, can be more expensive per incident than an equivalent petrol repair.",
    },
    {
      question: "How much cheaper is a full charge compared to a full tank of petrol, realistically?",
      answer:
        "The gap is large, but the comparison depends heavily on where you charge and what tariff you're on. A typical petrol hatchback or sedan in India has a 35-45 litre tank. At ₹100/litre, filling it costs roughly ₹3,500-4,500 and yields somewhere between 500-650 km depending on driving conditions. A comparable EV with a 30-40 kWh battery, charged at home on a standard domestic tariff of around ₹6-9/kWh, costs approximately ₹200-350 for a full charge, delivering roughly 200-300 km of real-world range (as opposed to the certified range, which is usually 15-20% higher than what you'll see in mixed city and highway driving). If you scale this up to match the petrol car's 500-600 km range, you'd need two to three home charges, bringing the total to somewhere around ₹500-900 — still a fraction of the petrol cost, but not the flat 5-6x reduction that's often quoted, since it depends on your local electricity slab rate and whether you're charging during peak or off-peak hours. It's also worth being upfront that public fast-charging stations, especially on highways, often charge ₹15-22/kWh — sometimes more than double the home rate — which narrows the cost advantage considerably on long trips. So while home charging remains dramatically cheaper than petrol in almost every scenario, EV owners who rely heavily on public charging infrastructure, particularly in cities where home charging isn't feasible (apartment dwellers without dedicated parking, for instance), will see a smaller — though still meaningful — savings margin.",
    },
    {
      question: "Will EV battery replacement costs eventually make it more expensive than a petrol car?",
      answer:
        "This is a legitimate concern and shouldn't be dismissed outright, though the situation has improved substantially. Lithium-ion battery pack prices have fallen sharply over the past decade due to manufacturing scale and improved chemistry, but replacing a battery out of warranty in India today can still cost anywhere from ₹2-6 lakh depending on the vehicle and battery size, which is a genuinely significant expense — comparable to replacing an engine or gearbox on a petrol car, which itself is not cheap. The mitigating factors are: most manufacturers now back battery packs with 8-year or 160,000 km warranties, and real-world data from EVs on the road for several years shows that most packs retain 70-85% of their original capacity even after heavy use, meaning outright failure requiring full replacement is uncommon within the ownership window most buyers keep a car for (5-8 years). Battery Management Systems (BMS) have also gotten much better at preventing the kind of abusive charging and thermal stress that used to accelerate degradation. Where this becomes a real risk is for someone planning to keep the car for 10+ years or buying a used EV where the remaining warranty is limited — in that scenario, doing due diligence on battery health before purchase is essential, the same way you'd check an engine's condition on a used petrol car. For a typical first owner within the warranty period, the battery replacement risk is a manageable line item rather than a hidden cost bomb, but it's not zero, and buyers should factor it into their risk assessment rather than assume it will never happen.",
    },
    {
      question: "Does charging an EV at home significantly increase my electricity bill?",
      answer:
        "Yes, your electricity bill will go up, and it's worth being clear-eyed about this rather than only framing it as a wash. Charging an EV at home typically adds 150-300 units (kWh) per month for an average commuter driving 1,000-1,500 km monthly, which can raise your bill by ₹1,000-2,500 depending on your state's slab-based tariff structure — and this matters because many Indian electricity boards use tiered pricing where consuming more units pushes your entire bill into a higher slab, not just the additional units. So the actual cost increase can sometimes be higher than a flat per-unit calculation suggests, especially in states with steep slab jumps. That said, this is a substitution of expense rather than a new one: you're no longer paying ₹4,000-6,000 a month at the petrol pump, so the net effect on your monthly budget is still strongly positive in most cases. Some state electricity boards and discoms offer separate EV tariffs or time-of-day pricing that make overnight charging meaningfully cheaper — it's worth checking with your local provider, since this can change the math significantly and isn't automatic. If you live in an apartment without dedicated home charging access and rely on notice-board or shared meters, the savings can be less predictable, and public charging costs (which are usually 2-3x home rates) will eat into the benefit. So the fair answer is: your electricity bill will rise, sometimes by more than expected due to slab pricing, but for most home-charging users the reduction in fuel spend more than compensates for it.",
    },
    {
      question: "Do extreme summer or winter temperatures meaningfully affect EV running costs in India?",
      answer:
        "Temperature does affect EV efficiency more noticeably than it affects a petrol car's, and this is one area where EV marketing sometimes understates the real-world impact. In peak summer, running the air conditioning draws directly from the battery (unlike a petrol car, where AC load is a smaller fraction of the engine's total output), and the battery's own thermal management system also consumes power to keep cells within a safe operating range. This can reduce real-world range by roughly 10-20% compared to mild-weather figures. Cold conditions, which are less extreme in most of India but relevant in hill states and parts of the north during winter, can reduce range by a similar or greater margin because battery chemistry is less efficient at low temperatures and cabin heating (if not heat-pump based) draws significant power. The practical effect is that your cost-per-km during peak summer months, when you're both losing range and running the AC more, can be noticeably higher than the number you calculated using nameplate efficiency figures — sometimes by ₹0.30-0.50 per km. Petrol cars are not immune to this either; they also lose some efficiency in stop-and-go traffic and extreme heat due to engine cooling load, but the percentage swing is generally smaller than what EVs experience. The realistic takeaway is that if you're budgeting EV running costs, it's safer to use a slightly conservative efficiency estimate (not the manufacturer's peak-condition number) rather than assuming ideal conditions year-round, particularly if you live somewhere with harsh summers.",
    },
    {
      question: "Is an EV genuinely worth it for someone who only drives short distances daily in the city?",
      answer:
        "For most short-distance city commuters, yes — but the calculation depends on a few specific factors rather than being universally true. Petrol engines are at their least efficient during short trips because the engine rarely reaches optimal operating temperature, and cold starts increase both fuel consumption and emissions disproportionately. An EV doesn't have this penalty in the same way, and regenerative braking — which recovers energy during the frequent deceleration typical of city traffic — actually makes stop-and-go driving relatively efficient for an EV, unlike a petrol car where idling and low-speed driving are among the worst-case scenarios for fuel economy. Combined with lower maintenance costs and the convenience of overnight home charging (if available) rather than routine fuel station visits, an EV often makes strong financial sense for someone with a daily commute under 40-50 km. However, the math changes if you don't have reliable access to home or workplace charging — relying entirely on public charging stations in Indian cities can mean queuing, higher per-unit costs, and inconsistent charger uptime, which adds both cost and inconvenience that a short daily commute alone doesn't offset. It's also worth factoring in the higher upfront purchase price of an EV; for very low annual mileage (under 8,000-10,000 km a year), it can take longer to recover that price premium through fuel and maintenance savings alone, even though the per-km economics favor the EV. So the honest guidance is: short daily-distance driving in the city is one of the best use cases for an EV from a running-cost perspective, provided you have dependable charging access, but it's not an automatic win regardless of circumstances.",
    },
  ],

  seoContent: `
    <h2>EV vs. Petrol Cars: A Realistic, Numbers-Based Cost Comparison for Indian Buyers</h2>
    <p>Choosing between an electric vehicle and a petrol car has moved beyond a simple lifestyle preference and become a genuine financial decision. With petrol prices remaining volatile, EV prices gradually declining, and India's charging infrastructure expanding (unevenly, but expanding), more buyers are trying to work out the actual numbers rather than relying on marketing claims from either side. This guide walks through the real cost drivers — fuel and energy, maintenance, depreciation, insurance, and the practical realities of ownership — so you can use the calculator above with a clear understanding of what the numbers mean and where the uncertainty lies.</p>

    <h3>Why "Total Cost of Ownership" Matters More Than Sticker Price</h3>
    <p>The purchase price of a car is only the starting point. Total Cost of Ownership (TCO) accounts for fuel or energy costs, scheduled maintenance, unscheduled repairs, insurance premiums, road tax, depreciation, and resale value over the years you actually own the vehicle. Two cars with an identical on-road price can end up costing very different amounts once you account for five or seven years of real usage. This is precisely why an EV with a higher upfront price can still work out cheaper overall — and also why an EV is not automatically the cheaper option in every single ownership scenario, particularly for low-mileage drivers or those without home charging access.</p>
    <p>Petrol vehicles are tied to a fuel market that moves with global crude oil prices, refining costs, and state-level taxation, which varies significantly across India — petrol in Mumbai, for instance, is usually noticeably more expensive than in Delhi due to differing state VAT rates. Electricity tariffs are comparatively more stable and are set by state electricity regulatory commissions, though they do vary by state and by consumption slab. This relative price stability is one of the underappreciated financial benefits of EV ownership: your monthly "fuel" cost is easier to predict a year in advance than petrol pricing is.</p>

    <h2>The Efficiency Gap: Why EVs Use Less Energy Per Kilometer</h2>
    <p>The core reason EVs cost less to run isn't just about the price of electricity versus petrol — it's about how much of that energy actually reaches the wheels. An internal combustion engine converts chemical energy into motion through controlled explosions inside the cylinders, a process that inevitably wastes a large share of the energy as heat, friction, and exhaust. Independent efficiency studies generally place ICE tank-to-wheel efficiency somewhere in the 25-35% range for typical driving conditions, meaning roughly two-thirds of the energy in a litre of petrol never contributes to moving the car forward.</p>
    <p>An electric motor, by comparison, converts electrical energy to mechanical motion at efficiencies often cited between 85-95%, depending on the motor type and operating conditions, with losses concentrated mainly in the battery, inverter, and motor windings rather than being fundamentally wasted as heat the way combustion is. This is the underlying reason why, even in regions where electricity is generated from coal (as a significant share of India's grid still is), EVs typically still come out ahead on a well-to-wheel basis — though the environmental case is admittedly less clear-cut than the pure cost case, and depends on your local grid's energy mix.</p>

    <h3>1. Running Cost Per Kilometer: The Real Numbers</h3>
    <p>Here's how the math typically plays out using representative Indian pricing:</p>
    <ul>
      <li><strong>Petrol vehicles:</strong> A typical hatchback or compact sedan returns 15-20 km/L on the highway and 10-14 km/L in city traffic. At a petrol price of ₹100/L, this translates to a running cost of roughly ₹5-6.5/km on the highway and ₹7-10/km in heavy city traffic, where idling and frequent braking hurt fuel economy the most.</li>
      <li><strong>Electric vehicles:</strong> A typical compact EV consumes somewhere between 0.13-0.18 kWh/km in mixed driving. At a home electricity tariff of ₹7-9/kWh, this works out to roughly ₹1-1.6/km. Even accounting for charging losses (typically 10-15% during AC home charging), the cost per km rarely exceeds ₹2 when charged at home.</li>
      <li><strong>Public fast charging:</strong> If you rely on public DC fast chargers, which often charge ₹15-22/kWh, your effective cost per km can rise to ₹2.5-4/km — still cheaper than petrol, but a much smaller gap than the headline "5x cheaper" figure that assumes home charging exclusively.</li>
    </ul>

    <h3>2. Maintenance: Where the Numbers Genuinely Favor EVs</h3>
    <p>A petrol engine has hundreds of moving parts subject to constant friction, heat cycling, and mechanical wear — pistons, valves, camshafts, timing components, and a multi-speed transmission, all of which require scheduled servicing. Standard maintenance for a petrol car typically includes oil and filter changes every 8,000-10,000 km, along with periodic replacement of spark plugs, air filters, and eventually clutch or transmission components as the car ages.</p>
    <p>An EV's drivetrain is fundamentally simpler: a motor with essentially one moving part, a single-speed reduction gear, and a battery pack managed electronically rather than mechanically. There's no engine oil, no combustion byproducts to filter out, and no multi-gear transmission to wear down. Regenerative braking also reduces wear on physical brake pads and rotors, since the motor handles a significant share of deceleration. In practical terms, this typically means 40-60% lower scheduled maintenance costs over a 5-year period for an EV compared to a similarly priced petrol car — a real and measurable advantage, though not the near-zero maintenance some marketing suggests, since tyres, cabin filters, coolant, and brake fluid still need periodic attention.</p>

    <h2>Depreciation, Resale Value, and the Battery Question</h2>
    <p>Depreciation is one area where the picture is genuinely mixed and depends heavily on the specific model and how the used-EV market develops in India over the coming years. Petrol cars have a long, well-understood resale market with established valuation benchmarks, making their depreciation curve predictable. EVs are newer to the Indian resale market, and buyers understandably have more questions about a used EV's battery health than they would about a used petrol engine's condition — even though, in practice, battery degradation tends to be gradual and well-documented by the car's onboard diagnostics.</p>
    <p>Most manufacturers offer battery warranties in the range of 8 years or 160,000 km, which covers the majority of a typical ownership period. Battery replacement outside of warranty is a genuine cost to be aware of — often ₹2-6 lakh depending on the vehicle — but real-world data from EVs that have been on the road for several years generally shows capacity retention in the 70-85% range even after extensive use, meaning full replacement due to failure (rather than gradual, manageable capacity loss) remains uncommon within the warranty window.</p>

    <h2>A Realistic 5-Year Cost Comparison</h2>
    <p>The table below illustrates a representative comparison for a driver covering approximately 15,000 km per year (75,000 km over 5 years), using mid-range figures rather than best-case assumptions for either vehicle type:</p>
    <table>
      <thead>
        <tr>
          <th>Expense Category</th>
          <th>Petrol Car (5 Years)</th>
          <th>Electric Vehicle (5 Years)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Fuel / Energy</strong></td>
          <td>₹3,75,000 – ₹4,50,000</td>
          <td>₹75,000 – ₹1,20,000</td>
        </tr>
        <tr>
          <td><strong>Scheduled Maintenance</strong></td>
          <td>₹60,000 – ₹80,000</td>
          <td>₹25,000 – ₹35,000</td>
        </tr>
        <tr>
          <td><strong>Tyres &amp; Consumables</strong></td>
          <td>₹20,000 – ₹25,000</td>
          <td>₹22,000 – ₹28,000</td>
        </tr>
        <tr>
          <td><strong>Unscheduled Repairs (estimate)</strong></td>
          <td>₹30,000 – ₹50,000</td>
          <td>₹10,000 – ₹20,000</td>
        </tr>
        <tr>
          <td><strong>Total Operational Cost</strong></td>
          <td><strong>₹4,85,000 – ₹6,05,000</strong></td>
          <td><strong>₹1,32,000 – ₹2,03,000</strong></td>
        </tr>
      </tbody>
    </table>
    <p>Note that EV tyre costs are comparable to or slightly higher than petrol car tyres, due to the added weight of the battery pack and higher instant torque causing marginally faster wear. Even accounting for this, the total operational cost gap over 5 years typically ranges between ₹3,00,000 and ₹4,00,000 in favor of the EV, before factoring in the higher upfront purchase price of the EV itself, which needs to be weighed against these savings.</p>

    <h3>The Breakeven Point: When Does an EV Actually Pay for Itself?</h3>
    <p>Because EVs generally carry a higher on-road price than a comparable petrol car, there's a distance threshold at which the accumulated running-cost savings offset that initial premium. For most mainstream EV and petrol car pairings in India today, this breakeven point falls somewhere between 40,000 and 70,000 km, depending on the specific price gap between the two vehicles, local fuel and electricity prices, and how much of your charging happens at home versus at public stations. A driver covering 15,000-20,000 km annually can typically expect to reach this breakeven point within 3-4 years, after which every additional kilometer driven represents a growing net savings. A driver covering only 5,000-8,000 km a year — common for a secondary household vehicle — may take 7-10 years to reach the same point, which is an important reason why EV suitability depends heavily on individual usage patterns rather than being a universal recommendation.</p>

    <h2>Charging Infrastructure: The Practical Reality in India</h2>
    <p>The single biggest variable affecting real-world EV running costs isn't the vehicle itself — it's where and how you charge. Home charging via a dedicated wall-mounted AC charger remains the cheapest and most convenient option, but it requires either a private parking space with electrical access (straightforward for independent houses, harder for many apartment residents) or cooperation from a housing society to install shared charging infrastructure. Workplace charging, where available, is the next best option. Public charging networks have expanded considerably in major metros and along key highway corridors, but coverage remains uneven in smaller towns, and per-unit pricing at public DC fast chargers is typically double to triple the home tariff. Anyone comparing EV and petrol costs should be honest with themselves about which charging pattern they'll actually use day to day, since the cost difference between predominantly home-charging and predominantly public-charging can be substantial.</p>

    <h2>Environmental Considerations: A Balanced View</h2>
    <p>While this calculator focuses on financial cost rather than environmental impact, it's worth briefly noting that the emissions picture is more nuanced than "EVs are zero-emission." An EV produces no tailpipe emissions, but its total environmental footprint depends on how the electricity used to charge it is generated. In regions of India where coal remains a significant part of the grid mix, the well-to-wheel emissions advantage of an EV is real but smaller than in regions with a higher share of renewable or nuclear generation. As India's grid continues to add solar and wind capacity, this advantage is expected to grow over the life of a vehicle purchased today.</p>

    <h2>Practical Tips for Maximizing EV Savings</h2>
    <ul>
      <li><strong>Install home charging if at all possible:</strong> The gap between home and public charging costs is the single largest factor affecting your actual savings, often larger than the difference between EV models.</li>
      <li><strong>Check for time-of-day or EV-specific tariffs:</strong> Several state electricity boards offer reduced rates for off-peak or scheduled EV charging — this can meaningfully lower your effective cost per km if available in your area.</li>
      <li><strong>Budget conservatively for range:</strong> Use real-world range figures (often 15-20% below the certified figure) rather than manufacturer claims when estimating monthly energy costs, especially during peak summer months.</li>
      <li><strong>Maintain tyre pressure:</strong> EV range and cost-per-km are highly sensitive to rolling resistance; under-inflated tyres can meaningfully reduce efficiency.</li>
      <li><strong>Factor in your actual annual mileage:</strong> The financial case for an EV strengthens considerably with higher annual usage; low-mileage drivers should weigh the higher upfront cost more carefully against a longer breakeven period.</li>
    </ul>

    <h2>Conclusion: Making the Decision With Real Numbers</h2>
    <p>An EV is not automatically the right financial choice for every driver, and a petrol car is not automatically the wrong one — the answer depends on your annual mileage, access to home charging, local electricity tariffs, and how long you plan to keep the vehicle. For drivers who cover meaningful daily distances and have reliable home charging access, the running-cost and maintenance savings of an EV are substantial and well-documented, typically paying back the upfront price premium within 3-5 years. For low-mileage drivers, those without home charging access, or buyers primarily doing long highway trips where public fast-charging costs and charging time become more relevant, the calculation is closer, and a petrol car may still make practical sense for now. Use the calculator above with your own real numbers — your actual daily distance, local fuel price, and local electricity tariff — rather than relying on generic industry averages, since the difference between a home-charging commuter and a public-charging occasional driver can change the entire outcome.</p>
  `,
};