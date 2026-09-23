import { Calculator } from "@/src/types/calculator";

export const randomNumberGenerator: Calculator = {
  slug: "random-number-generator",

  name: "Random Number Generator",

  description:
    "Generate a pseudo-random integer between an inclusive minimum and maximum for casual games, samples, and everyday decisions.",

  category: "Utility",

  isPopular: true,

  seo: {
    title:
      "Random Number Generator - Generate Random Numbers Online",

    description:
      "Generate a pseudo-random integer within an inclusive custom range for casual games, samples, classroom activities, and everyday decisions.",

    keywords: [
      "random number generator",
      "rng generator",
      "random number picker",
      "random integer generator",
      "generate random number",
      "random selection generator",
      "randomizer tool",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Minimum Value",
      description:
        "Choose the lowest number in the range.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Maximum Value",
      description:
        "Choose the highest number in the range.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Generate Random Number",
      description:
        "The calculator randomly selects a number within the chosen range.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Result",
      description:
        "See the generated random number instantly.",
      icon: "result",
    },
  ],

  formula: {
    title:
      "Random Number Formula",

    formula:
      "Math.floor(Math.random() × (max - min + 1)) + min",

    explanation:
      "The generator creates a random integer within the selected range. Every number has an equal probability of being chosen.",

    example: {
      input:
        "Minimum = 1, Maximum = 100",

      output:
        "Random Number = 57",
    },

    useCases: [
      "Lottery Numbers",
      "Games",
      "Giveaways",
      "Contests",
      "Decision Making",
      "Statistics",
      "Education",
      "Random Sampling",
    ],
  },

  faqs: [
    {
      question:
        "What is a Random Number Generator?",
      answer:
        "A Random Number Generator creates numbers randomly within a specified range.",
    },

    {
      question:
        "Can I generate numbers between custom ranges?",
      answer:
        "Yes. You can enter any minimum and maximum values.",
    },

    {
      question:
        "Are the numbers truly random?",
      answer:
        "The generator uses JavaScript's pseudo-random algorithm which is suitable for most everyday uses.",
    },

    {
      question:
        "Can I use it for giveaways and contests?",
      answer:
        "It can be used for casual selections, but independently documented and auditable methods are better for regulated, high-value, or public prize draws.",
    },

    {
      question:
        "What is the difference between pseudo-random and true random numbers?",
      answer:
        "Pseudo-random number generators use deterministic mathematical algorithms starting from a seed value to produce sequences that appear random, whereas true random number generators capture unpredictable physical phenomena like atmospheric noise or radioactive decay.",
    },
  ],
  seoContent: `
    <h2>Generate an integer inside a range</h2>
    <p>Enter the smallest and largest permitted values, then select Generate. Both endpoints are included, so a range from 1 to 10 can return 1, 10, or any whole number between them. The minimum must not be greater than the maximum.</p>
    <h2>How the result is selected</h2>
    <p>The tool scales JavaScript's pseudo-random value to the size of your range, rounds down to a whole number, and adds the minimum. For a 1–6 range, this produces one of six possible integers and is useful for casual games, practice questions, sample choices, and everyday decisions.</p>
    <h2>Important limitation</h2>
    <p>This generator uses Math.random(). It is not a cryptographically secure source and should not be used for passwords, security tokens, encryption keys, gambling systems, or any draw that requires independently auditable randomness. It also generates one integer at a time rather than a unique shuffled list.</p>
    <h2>Example</h2>
    <p>With a minimum of 25 and a maximum of 30, the possible results are 25, 26, 27, 28, 29, and 30. That is six possible values because the range includes both endpoints.</p>
  `,
};
