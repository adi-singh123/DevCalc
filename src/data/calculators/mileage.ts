import { Calculator } from "@/src/types/calculator";

export const mileageCalculator: Calculator = {
  slug: "mileage-calculator",

  name: "Mileage Calculator",

  description:
    "Calculate car mileage, bike mileage, fuel efficiency, fuel consumption, fuel cost per kilometer, and vehicle running costs instantly. Measure real-world mileage for petrol, diesel, CNG, and other vehicles with accurate results.",

  category: "Vehicle",

  isPopular: true,

  seo: {
    title: "Mileage Calculator - Calculate Car, Bike & Fuel Cost Per KM",

    description:
      "Free Mileage Calculator to calculate car mileage, bike mileage, fuel efficiency, fuel cost per km, and trip fuel expenses. Check petrol, diesel, and CNG vehicle mileage instantly using accurate formulas.",

    keywords: [
      "mileage calculator",
      "car mileage calculator",
      "how to calculate car mileage",
      "actual mileage calculator",
      "real mileage calculator",
      "vehicle running cost per km",
      "fuel cost per kilometre",
      "trip fuel expense calculator",
      "petrol expense calculator",
      "diesel expense calculator",
      "how much fuel will my trip use",
      "fuel usage calculator",
      "fuel required for journey calculator",
      "road trip fuel cost calculator",
      "vehicle fuel expense estimator",
      "monthly fuel cost calculator",
      "daily fuel expense calculator",
      "fuel budget calculator",
      "bike mileage calculator",
      "fuel efficiency calculator",
      "fuel consumption calculator",
      "fuel cost calculator",
      "fuel cost per km calculator",
      "petrol mileage calculator",
      "diesel mileage calculator",
      "cng mileage calculator",
      "vehicle mileage calculator",
      "road trip fuel calculator",
      "vehicle running cost calculator",
      "trip fuel cost calculator",
      "ev mileage",
    ],
  },

  compareWith: [
  "fuel-cost-calculator",
  "distance-calculator",
],

  steps: [
    {
      step: 1,
      title: "Enter Distance Travelled",
      description:
        "Enter the total distance travelled by your car, bike, scooter, SUV, or commercial vehicle.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Fuel Consumed",
      description: "Provide the amount of fuel used during the trip in litres.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Enter Fuel Price",
      description:
        "Optionally enter the fuel price per litre to calculate running costs and trip expenses.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View Mileage Results",
      description:
        "Get mileage, fuel efficiency, fuel cost per kilometre, and total fuel expense instantly.",
      icon: "result",
    },
  ],

  formula: {
    title: "Mileage Calculator Formula",

    formula: "Mileage (km/L) = Distance Travelled ÷ Fuel Consumed",

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
    question: "Why is my bike or car mileage lower than claimed by the manufacturer?",
    answer:
      "Vehicle manufacturers publish mileage figures based on standardized testing procedures such as ARAI certification. These tests are performed under controlled conditions with smooth roads, limited traffic, ideal weather, and consistent driving speeds. In real-world Indian driving conditions, mileage is usually lower because of traffic congestion, frequent braking, poor road quality, air conditioner usage, riding habits, tyre pressure, fuel quality, and vehicle load. For example, a car rated at 20 km/l by ARAI may deliver only 14–17 km/l in daily city traffic. Understanding this difference helps vehicle owners estimate fuel expenses more accurately and set realistic expectations for their vehicle's fuel efficiency."
  },

  {
    question: "How can I calculate mileage using the tank-to-tank method?",
    answer:
      "The tank-to-tank method is one of the most accurate ways to measure real-world vehicle mileage. Start by filling your fuel tank completely and note the odometer reading. Drive normally until your next refuel. Fill the tank completely again and record both the amount of fuel added and the new odometer reading. Subtract the previous odometer reading from the current reading to determine the distance travelled. Then divide the distance by the fuel consumed. For example, if you travelled 480 km and added 24 litres of fuel, your mileage is 20 km/l. Repeating this process over multiple fuel cycles provides a reliable average mileage."
  },

  {
    question: "What is considered good mileage for a petrol car in India?",
    answer:
      "Good mileage varies depending on the type of vehicle. Most petrol hatchbacks in India typically provide between 15 and 22 km/l under normal driving conditions. Sedans generally offer 14–20 km/l, while petrol SUVs often deliver 10–16 km/l. Hybrid vehicles can exceed 25 km/l. If your petrol car consistently delivers more than 18 km/l in mixed city and highway driving, it is generally considered fuel efficient. Factors such as traffic, maintenance, driving style, road conditions, and vehicle age can significantly affect actual mileage."
  },

  {
    question: "How does air conditioner usage affect mileage during Indian summers?",
    answer:
      "Using the air conditioner increases the load on the engine and can reduce fuel efficiency. During hot Indian summers, continuous AC usage may lower mileage by approximately 5% to 15%, depending on vehicle type, outside temperature, and traffic conditions. The impact is usually greater in city traffic where vehicles spend more time idling. Maintaining your AC system, using recirculation mode, parking in shaded areas, and avoiding excessive cooling settings can help minimize the effect of AC usage on mileage."
  },

  {
    question: "Petrol vs CNG mileage: which option saves more money?",
    answer:
      "CNG vehicles generally offer lower running costs than petrol vehicles because CNG fuel is usually less expensive. A petrol car may deliver 15–20 km/l, while a CNG vehicle often provides 20–30 km/kg. Although CNG vehicles may have slightly lower performance and reduced luggage space due to the cylinder installation, they can significantly reduce monthly fuel expenses for high-mileage drivers. For commuters who travel long distances regularly, CNG often provides better overall savings despite the initial conversion or purchase cost."
  },

  {
    question: "How can I improve the mileage of my bike in city traffic?",
    answer:
      "Improving bike mileage starts with proper maintenance and efficient riding habits. Maintain the recommended tyre pressure, service the engine regularly, clean or replace air filters when necessary, and use quality fuel. Avoid aggressive acceleration and sudden braking, as both increase fuel consumption. In city traffic, maintaining a steady speed and reducing unnecessary idling at signals can improve efficiency. Regular chain lubrication and proper engine tuning also help maximize mileage while reducing wear and tear."
  },

  {
    question: "What factors affect vehicle mileage the most?",
    answer:
      "Several factors influence mileage, including driving style, tyre pressure, traffic conditions, vehicle maintenance, road quality, weather, fuel quality, and vehicle load. Aggressive acceleration and hard braking consume more fuel, while underinflated tyres increase rolling resistance. Poor maintenance, such as dirty air filters or overdue servicing, can reduce engine efficiency. Understanding these factors helps drivers identify areas where fuel efficiency can be improved and running costs can be reduced."
  },

  {
    question: "Can this calculator calculate fuel cost per kilometre and trip expenses?",
    answer:
      "Yes. By entering the fuel price along with the distance travelled and fuel consumed, the calculator can estimate fuel cost per kilometre, total fuel expenses, and running costs for a journey. This information is useful for budgeting road trips, comparing vehicle efficiency, estimating monthly fuel expenses, and calculating transportation costs for personal or business use."
  }
],

  seoContent: `
<h2>What is Vehicle Mileage?</h2>

<p>
Vehicle mileage refers to the distance a vehicle can travel per unit of fuel consumed. In India, mileage is commonly measured in kilometers per litre (km/l). Higher mileage means better fuel efficiency and lower fuel expenses.
</p>

<h2>Mileage Comparison Guide</h2>

<table>
  <tr>
    <th>Mileage (km/l)</th>
    <th>Rating</th>
  </tr>
  <tr>
    <td>Below 10</td>
    <td>Poor</td>
  </tr>
  <tr>
    <td>10 - 15</td>
    <td>Average</td>
  </tr>
  <tr>
    <td>15 - 20</td>
    <td>Good</td>
  </tr>
  <tr>
    <td>20 - 30</td>
    <td>Excellent</td>
  </tr>
  <tr>
    <td>Above 30</td>
    <td>Outstanding</td>
  </tr>
</table>

<h2>Factors That Affect Mileage</h2>

<ul>
  <li><strong>Driving Speed:</strong> Aggressive acceleration reduces fuel efficiency.</li>
  <li><strong>Tyre Pressure:</strong> Underinflated tyres increase fuel consumption.</li>
  <li><strong>Vehicle Maintenance:</strong> Dirty air filters and old engine oil can lower mileage.</li>
  <li><strong>Traffic Conditions:</strong> Frequent braking and acceleration consume more fuel.</li>
  <li><strong>Vehicle Load:</strong> Carrying unnecessary weight decreases mileage.</li>
</ul>

<h2>How to Improve Mileage</h2>

<table>
  <tr>
    <th>Tip</th>
    <th>Potential Improvement</th>
  </tr>
  <tr>
    <td>Maintain Correct Tyre Pressure</td>
    <td>Up to 3%</td>
  </tr>
  <tr>
    <td>Regular Vehicle Servicing</td>
    <td>Up to 10%</td>
  </tr>
  <tr>
    <td>Smooth Acceleration</td>
    <td>Up to 15%</td>
  </tr>
  <tr>
    <td>Reduce Excess Weight</td>
    <td>Up to 5%</td>
  </tr>
</table>

<h2>Petrol vs Diesel vs CNG Mileage</h2>

<table>
  <tr>
    <th>Fuel Type</th>
    <th>Typical Mileage</th>
    <th>Running Cost</th>
  </tr>
  <tr>
    <td>Petrol</td>
    <td>15-20 km/l</td>
    <td>Higher</td>
  </tr>
  <tr>
    <td>Diesel</td>
    <td>18-25 km/l</td>
    <td>Medium</td>
  </tr>
  <tr>
    <td>CNG</td>
    <td>25-35 km/kg</td>
    <td>Lowest</td>
  </tr>
</table>

<h2>Monthly Fuel Cost Example</h2>

<p>
If you travel 1,500 km per month and your car delivers 15 km/l mileage, you will need approximately 100 litres of fuel every month. Small improvements in mileage can save thousands of rupees annually.
</p>

<h2>Signs Your Vehicle Mileage is Decreasing</h2>

<ul>
  <li>Frequent fuel refills.</li>
  <li>Engine performance feels sluggish.</li>
  <li>Black smoke from the exhaust.</li>
  <li>Low tyre pressure.</li>
  <li>Delayed servicing or maintenance.</li>
</ul>

<h2>Pro Tip</h2>

<p>
For most vehicles, driving between 60-80 km/h on highways provides the best balance between speed and fuel efficiency. Sudden acceleration and hard braking can reduce mileage significantly.
</p>
`,
};
