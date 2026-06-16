import { Calculator } from "@/src/types/calculator";

export const randomNumberGenerator: Calculator = {
  slug: "random-number-generator",

  name: "Random Number Generator",

  description:
    "Generate random numbers instantly between any minimum and maximum range. Perfect for games, giveaways, lotteries, statistics, and decision making.",

  category: "Utility",

  isPopular: true,

  seo: {
    title:
      "Random Number Generator - Generate Random Numbers Online",

    description:
      "Generate random numbers between any range instantly. Free Random Number Generator for contests, games, lotteries, statistics, and everyday use.",

    keywords: [
      "random number generator",
      "rng generator",
      "number generator",
      "random number picker",
      "random number tool",
      "generate random number",
      "online random number generator",
      "free random number generator",
      "random picker",
      "randomizer",
      "lucky number generator",
      "lottery number generator",
      "random integer generator",
      "random number creator",
      "random selection generator",
      "pick random number",
      "number picker",
      "random draw generator",
      "rng tool",
      "random value generator",
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
        "Yes. It is commonly used for random selections and winner picking.",
    },

    {
      question:
        "Is it free?",
      answer:
        "Yes. The Random Number Generator is completely free to use.",
    },
  ],
};