import { Calculator } from "@/src/types/calculator";

export const unitConverter: Calculator = {
  slug: "unit-converter",

  name: "Unit Converter",

  description:
    "Convert length, weight, temperature, area, volume, speed, time, and data storage units instantly.",

  category: "Utility",

  isPopular: true,

  seo: {
    title:
      "Unit Converter - Convert Length, Weight, Temperature & More",

    description:
      "Free online unit converter for length, weight, temperature, area, volume, speed, time, and data storage conversions.",

    keywords: [
      "unit converter",
      "length converter",
      "weight converter",
      "temperature converter",
      "area converter",
      "volume converter",
      "speed converter",
      "time converter",
      "data storage converter",
      "measurement converter",
      "online unit converter",
      "metric converter",
      "convert units",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Select Category",
      description:
        "Choose the type of conversion.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Value",
      description:
        "Enter the value to convert.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Choose Units",
      description:
        "Select source and target units.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View Result",
      description:
        "Get the converted value instantly.",
      icon: "result",
    },
  ],

  formula: {
    title: "Unit Conversion",

    formula:
      "Converted Value = Input Value × Conversion Factor",

    explanation:
      "Unit conversion uses predefined conversion factors between measurement units.",

    example: {
      input:
        "1000 Meters → Kilometers",

      output:
        "1 Kilometer",
    },

    useCases: [
      "Education",
      "Engineering",
      "Science",
      "Travel",
      "Daily Calculations",
    ],
  },

  faqs: [
    {
      question:
        "What is a Unit Converter?",
      answer:
        "A Unit Converter helps convert values between different measurement units.",
    },
    {
      question:
        "What units are supported?",
      answer:
        "Length, weight, temperature, area, volume, speed, time, and data storage units are supported.",
    },
    {
      question:
        "Is the converter accurate?",
      answer:
        "Yes, all conversions use standard conversion factors.",
    },
    {
      question:
        "Can I use it for educational purposes?",
      answer:
        "Yes, students, teachers, engineers, and professionals can use it.",
    },
  ],
};