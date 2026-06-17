import { Calculator } from "@/src/types/calculator";

export const mileageCalculator: Calculator = {
  slug: "mileage-calculator",

  name: "Mileage Calculator",

  description:
    "Calculate car mileage, bike mileage, fuel efficiency, fuel consumption, fuel cost per kilometer, and vehicle running costs instantly. Measure real-world mileage for petrol, diesel, CNG, and other vehicles with accurate results.",

  category: "Vehicle",

  isPopular: true,

  seo: {
    title:
      "Mileage Calculator - Calculate Car & Bike Fuel Efficiency Online",

    description:
      "Free Mileage Calculator to calculate car mileage, bike mileage, fuel efficiency, fuel cost per km, and trip fuel expenses. Check petrol, diesel, and CNG vehicle mileage instantly using accurate formulas.",

    keywords: [
      "mileage calculator",
      "car mileage calculator",
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
      "car fuel efficiency calculator",
      "bike average calculator",
      "fuel average calculator",
      "km per litre calculator",
      "mileage per litre calculator",
      "car average calculator",
      "vehicle running cost calculator",
      "trip fuel cost calculator",
      "ev mileage",
    ],
  },

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
      description:
        "Provide the amount of fuel used during the trip in litres.",
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

    formula:
      "Mileage (km/L) = Distance Travelled ÷ Fuel Consumed",

    explanation:
      "Mileage, also known as fuel efficiency or fuel economy, measures how far a vehicle can travel using one litre of fuel. Higher mileage means lower fuel consumption and reduced running costs. This calculator is useful for cars, motorcycles, scooters, SUVs, trucks, and commercial vehicles. Understanding your vehicle's mileage helps estimate fuel expenses, compare vehicle performance, and plan long-distance trips more effectively.",

    example: {
      input:
        "Distance Travelled: 500 km, Fuel Consumed: 25 litres",

      output:
        "Mileage = 500 ÷ 25 = 20 km/L",
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
      question: "What is mileage?",
      answer:
        "Mileage is the distance a vehicle can travel using a specific amount of fuel. It is commonly measured in kilometres per litre (km/L) and is one of the most important indicators of fuel efficiency.",
    },
    {
      question: "How is mileage calculated?",
      answer:
        "Mileage is calculated by dividing the total distance travelled by the amount of fuel consumed. For example, if a vehicle travels 500 km using 25 litres of fuel, its mileage is 20 km/L.",
    },
    {
      question:
        "Can I calculate bike mileage using this calculator?",
      answer:
        "Yes. This mileage calculator works for motorcycles, scooters, cars, SUVs, vans, trucks, and commercial vehicles.",
    },
    {
      question:
        "Does this calculator support petrol, diesel, and CNG vehicles?",
      answer:
        "Yes. The calculator can be used for petrol, diesel, CNG, LPG, and other fuel-powered vehicles because the mileage formula remains the same.",
    },
    {
      question:
        "What is considered good mileage for a car?",
      answer:
        "Most modern petrol cars provide between 15 and 25 km/L, while diesel vehicles often achieve higher fuel efficiency. Actual mileage depends on driving conditions, maintenance, and driving habits.",
    },
    {
      question:
        "Can I calculate fuel cost per kilometre?",
      answer:
        "Yes. By entering the fuel price, you can estimate fuel cost per kilometre and total running expenses for your vehicle.",
    },
    {
      question:
        "Why is actual mileage different from company-claimed mileage?",
      answer:
        "Real-world mileage depends on traffic conditions, road quality, driving style, tyre pressure, air conditioning usage, vehicle maintenance, fuel quality, and vehicle load.",
    },
    {
      question:
        "Why is mileage important?",
      answer:
        "Mileage directly affects fuel expenses and overall vehicle running costs. Better mileage means lower fuel consumption and more savings over time.",
    },
    {
      question:
        "How can I improve my vehicle mileage?",
      answer:
        "Maintain proper tyre pressure, avoid aggressive acceleration and braking, reduce unnecessary vehicle weight, service your vehicle regularly, and drive at consistent speeds to improve fuel efficiency.",
    },
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