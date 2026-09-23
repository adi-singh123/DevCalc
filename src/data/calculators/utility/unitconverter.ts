import { Calculator } from "@/src/types/calculator";

export const unitConverter: Calculator = {
  slug: "unit-converter",

  name: "Unit Converter",

  description:
    "Convert common length, weight, and temperature units with clear, instant results.",

  category: "Utility",

  isPopular: true,

  seo: {
    title:
      "Unit Converter - Length, Weight and Temperature",

    description:
      "Convert length, weight, and temperature values online, including metres, kilometres, kilograms, pounds, Celsius, Fahrenheit, and Kelvin.",

    keywords: [
      "unit converter",
      "length converter",
      "weight converter",
      "temperature converter",
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
        "The current converter supports length, weight, and temperature conversions. Length includes metres, kilometres, centimetres, and millimetres; weight includes kilograms, grams, and pounds; temperature includes Celsius, Fahrenheit, and Kelvin.",
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
  seoContent: `
    <h2>How to use the unit converter</h2>
    <p>Select Length, Weight, or Temperature, enter a value, and choose the units to convert from and to. The result is calculated immediately after you select Convert. Use Swap Units when you want to reverse the direction without re-entering the value.</p>
    <h2>Conversions available in this tool</h2>
    <p>For length, the calculator converts metres, kilometres, centimetres, and millimetres. For weight, it converts kilograms, grams, and pounds. Temperature conversions are available between Celsius, Fahrenheit, and Kelvin. The labels shown in the calculator are the complete list of currently supported units.</p>
    <h2>How unit conversion works</h2>
    <p>Length and weight values are first converted to a base unit and then divided by the target unit's conversion factor. For example, 2 kilometres becomes 2,000 metres because one kilometre equals 1,000 metres. Temperature needs a different formula because its scales have different zero points: Celsius to Fahrenheit uses (C × 9/5) + 32.</p>
    <h2>Tips for reliable results</h2>
    <ul><li>Check that the selected category matches the measurement you entered.</li><li>Keep extra decimal places during intermediate work and round only the final answer.</li><li>Remember that mass and weight are often used interchangeably in everyday conversions, although they are different physical concepts.</li></ul>
  `,
};
