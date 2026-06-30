import { Calculator } from "@/src/types/calculator";

export const fuelCostCalculator: Calculator = {
  slug: "fuel-cost-calculator",

  name: "Fuel Cost Calculator",

  description:
    "Calculate daily, monthly, yearly fuel expenses and cost per kilometre for petrol, diesel, and CNG vehicles.",

  category: "Vehicle",

  isPopular: true,

  seo: {
    title:
      "Fuel Cost Calculator India - Petrol, Diesel & CNG Running Cost",

description:
  "Wondering how much your vehicle actually costs to run every month? Enter your fuel type, price, and daily distance to get a clear daily, monthly, and yearly fuel expense breakdown.",
  keywords: [
  "fuel cost calculator india",
  "fuel calculator india",
  "petrol cost calculator india",
  "diesel calculator india",
  "cng calculator india",
  "fuel expense calculator india",
  "car fuel cost calculator india",
  "trip fuel calculator india",
  "car running cost calculator india",
  "fuel cost calculator",
  "fuel calculator",
  "petrol calculator india",
  "daily fuel cost calculator india",
  "monthly fuel cost calculator india",
  "yearly fuel cost calculator india",
  "fuel cost per km calculator",
  "petrol cost per km india",
  "cng cost per km india",

  // Core Keywords
  "fuel price calculator",
  "fuel spending calculator",
  "fuel budget calculator",
  "fuel consumption calculator",
  "fuel usage calculator",
  "vehicle fuel calculator",
  "fuel estimator",
  "fuel planning calculator",
  "fuel cost estimator",
  "fuel expense tracker",

  // Petrol Keywords
  "petrol cost calculator",
  "petrol expense calculator",
  "petrol consumption calculator",
  "petrol running cost calculator",
  "petrol trip calculator",
  "petrol price calculator",
  "petrol mileage calculator",
  "petrol budget calculator",
  "petrol cost per km calculator",
  "petrol travel cost calculator",

  // Diesel Keywords
  "diesel cost calculator",
  "diesel expense calculator",
  "diesel fuel calculator",
  "diesel running cost calculator",
  "diesel trip calculator",
  "diesel price calculator",
  "diesel mileage calculator",
  "diesel budget calculator",
  "diesel cost per km calculator",
  "diesel travel cost calculator",

  // CNG Keywords
  "cng cost calculator",
  "cng expense calculator",
  "cng fuel calculator",
  "cng running cost calculator",
  "cng trip calculator",
  "cng price calculator",
  "cng mileage calculator",
  "cng budget calculator",
  "cng cost per km calculator",
  "cng travel cost calculator",

  // Trip Keywords
  "trip fuel calculator",
  "road trip fuel calculator",
  "journey fuel calculator",
  "travel fuel cost calculator",
  "fuel needed for trip",
  "trip fuel expense calculator",
  "distance fuel calculator",
  "road trip cost calculator",
  "fuel requirement calculator",
  "trip budget calculator",

  // Running Cost Keywords
  "car running cost calculator",
  "vehicle running cost calculator",
  "car cost per km calculator",
  "vehicle cost per km calculator",
  "driving cost calculator",
  "travel cost calculator",
  "operating cost calculator",
  "car fuel expense calculator",
  "vehicle expense calculator",
  "cost per kilometre calculator",

  // Daily / Monthly / Yearly
  "daily fuel expense calculator",
  "monthly fuel expense calculator",
  "annual fuel cost calculator",
  "yearly fuel expense calculator",
  "fuel budget planner",
  "monthly petrol expense calculator",
  "monthly diesel expense calculator",
  "monthly cng expense calculator",
  "fuel cost tracker",
  "fuel spending planner",

  // Mileage & Efficiency
  "fuel efficiency calculator",
  "fuel economy calculator",
  "km per litre calculator",
  "fuel average calculator",
  "car average calculator",
  "vehicle mileage calculator",
  "fuel consumption rate calculator",
  "fuel performance calculator",
  "fuel usage estimator",
  "mileage cost calculator",

  // India Specific Keywords
  "fuel cost calculator india",
  "petrol price calculator india",
  "diesel price calculator india",
  "cng price calculator india",
  "vehicle running cost india",
  "car fuel cost india",
  "road trip fuel calculator india",
  "fuel budget calculator india",
  "petrol expense calculator india",
  "travel cost calculator india",

  // Question Keywords
  "how much fuel will my trip use",
  "how to calculate fuel cost",
  "how much fuel do i need",
  "how to calculate petrol expense",
  "how to calculate diesel expense",
  "how to calculate cng cost",
  "what is fuel cost per km",
  "how to calculate vehicle running cost",
  "how much will my road trip cost",
  "fuel cost calculator example",

  // Hindi Keywords
  "fuel cost calculator hindi",
  "petrol calculator hindi",
  "diesel calculator hindi",
  "cng calculator hindi",
  "fuel expense calculator hindi",
  "फ्यूल कॉस्ट कैलकुलेटर",
  "ईंधन लागत कैलकुलेटर",
  "पेट्रोल खर्च कैलकुलेटर",
  "डीजल खर्च कैलकुलेटर",
  "सीएनजी खर्च कैलकुलेटर",
  "प्रति किलोमीटर ईंधन लागत",
  "कार रनिंग कॉस्ट कैलकुलेटर",
  "यात्रा ईंधन खर्च कैलकुलेटर",
  "फ्यूल कैलकुलेटर इंडिया",
  "ईंधन खर्च की गणना",

  // Long Tail Keywords
  "free online fuel cost calculator",
  "best fuel calculator india",
  "trip fuel and cost calculator",
  "fuel cost calculator per km india",
  "car running cost calculator with fuel prices",
  "monthly fuel expense calculator india",
  "petrol diesel cng cost calculator",
  "road trip fuel cost estimator",
  "accurate fuel expense calculator",
  "vehicle fuel budget calculator",
],
  },

  compareWith: [
  "mileage-calculator",
  "distance-calculator",
],

  steps: [
    {
      step: 1,
      title: "Enter Daily Distance",
      description:
        "Enter average distance travelled per day.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Vehicle Mileage",
      description:
        "Enter mileage in km/L or km/kg.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Enter Fuel Price",
      description:
        "Enter current fuel price.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View Running Cost",
      description:
        "See daily, monthly and yearly fuel expenses.",
      icon: "result",
    },
  ],

  formula: {
    title: "Fuel Cost Formula",

    formula:
      "Fuel Cost = (Distance ÷ Mileage) × Fuel Price",

    explanation:
      "Fuel cost depends on distance travelled, vehicle mileage and current fuel price.",

    example: {
      input:
        "Distance: 50 km/day, Mileage: 20 km/L, Fuel Price: ₹100/L",

      output:
        "Daily Cost: ₹250, Monthly Cost: ₹7,500",
    },

    useCases: [
      "Trip Planning",
      "Daily Commute Cost",
      "Car Running Cost",
      "Petrol vs CNG Comparison",
      "Budget Planning",
    ],
  },

  faqs: [
    {
      question:
        "How is fuel cost calculated?",
      answer:
        "Fuel cost is calculated by dividing distance by mileage and multiplying by fuel price.",
    },
    {
      question:
        "Can I calculate petrol, diesel and CNG expenses?",
      answer:
        "Yes, the calculator works for petrol, diesel and CNG vehicles.",
    },
    {
      question:
        "Can I calculate cost per kilometre?",
      answer:
        "Yes, the calculator shows running cost per kilometre.",
    },
    {
      question:
        "Can I estimate monthly fuel expenses?",
      answer:
        "Yes, monthly and yearly fuel expenses are calculated automatically.",
    },
    {
      question:
        "Does mileage affect fuel cost?",
      answer:
        "Yes, higher mileage reduces fuel consumption and overall running cost.",
    },
  ],
};