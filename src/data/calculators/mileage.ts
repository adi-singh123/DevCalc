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
};