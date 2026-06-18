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
      "Calculate daily, monthly & yearly fuel running cost for petrol, diesel or CNG vehicles in India. Compare fuel expenses and cost per kilometre instantly.",

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