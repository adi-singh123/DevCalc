import { Calculator } from "@/src/types/calculator";

export const mileageCalculator: Calculator = {
  slug: "mileage-calculator",

  name: "Mileage Calculator",

  description:
    "Calculate car or bike mileage, fuel efficiency, fuel cost per kilometer, and running costs instantly.",

  category: "Vehicle",

  isPopular: true,

  seo: {
    title:
      "Mileage Calculator - Check Car / Bike Fuel Efficiency Online",

    description:
      "Calculate your car or bike's real-world mileage in km/L or MPG. Supports petrol, diesel, and CNG vehicles. Free online mileage calculator.",

    keywords: [
      "mileage calculator",
      "car mileage calculator",
      "bike mileage calculator",
      "fuel mileage calculator",
      "fuel efficiency calculator",
      "petrol mileage calculator",
      "diesel mileage calculator",
      "cng mileage calculator",
      "mpg calculator",
      "km per litre calculator",
      "car fuel efficiency calculator",
      "car average calculator",
      "bike average calculator",
      "fuel average calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Distance",
      description:
        "Enter the total distance travelled.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Fuel Used",
      description:
        "Enter fuel consumed in litres.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Enter Fuel Price",
      description:
        "Optionally add fuel price for cost calculations.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View Mileage Results",
      description:
        "See mileage, fuel cost, and cost per kilometre.",
      icon: "result",
    },
  ],

  formula: {
    title: "Mileage Formula",

    formula:
      "Mileage = Distance Travelled ÷ Fuel Consumed",

    explanation:
      "Mileage measures how many kilometres a vehicle can travel per litre of fuel. Higher mileage indicates better fuel efficiency.",

    example: {
      input:
        "Distance: 500 km, Fuel Used: 25 L",

      output:
        "Mileage = 20 km/L",
    },

    useCases: [
      "Car Mileage",
      "Bike Mileage",
      "Fuel Cost Estimation",
      "Trip Planning",
      "Commercial Vehicle Tracking",
    ],
  },

  faqs: [
    {
      question: "How is mileage calculated?",
      answer:
        "Mileage is calculated by dividing the distance travelled by the fuel consumed.",
    },
    {
      question: "Can I calculate bike mileage?",
      answer:
        "Yes, the calculator works for bikes, scooters, cars, SUVs, and commercial vehicles.",
    },
    {
      question: "Does it support petrol, diesel, and CNG vehicles?",
      answer:
        "Yes, the calculator can be used for any fuel type.",
    },
    {
      question: "What is a good car mileage?",
      answer:
        "A good car mileage depends on the vehicle type, but many modern cars achieve between 15 and 25 km/L.",
    },
    {
      question: "Can I calculate fuel cost per kilometre?",
      answer:
        "Yes, by entering fuel price, the calculator can estimate running costs per kilometre.",
    },
  ],
};