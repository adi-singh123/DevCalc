import { Calculator } from "@/src/types/calculator";

export const probabilityCalculator: Calculator = {
  slug: "probability-calculator",

  name: "Probability Calculator",

  description:
    "Calculate the probability of an event from favorable and total equally likely outcomes, then view the result as a fraction, decimal, percentage, and odds.",

  category: "Math",

  isPopular: false,

  editorialIntro:
    "Use this calculator for a single event with equally likely outcomes, such as drawing a particular card or rolling a number on a fair die. Enter favorable outcomes and total possible outcomes to convert the result into common probability formats.",

  seo: {
    title:
      "Probability Calculator – Chance, Percentage and Odds",

    description:
      "Calculate a single-event probability from favorable and total outcomes. View the chance as a fraction, decimal, percentage and odds with an example.",

    keywords: [
      "probability calculator",
      "chance calculator",
      "odds calculator",
      "event probability calculator",
      "statistics probability calculator",
      "probability of event calculator",
      "calculate probability online",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Favorable Outcomes",
      description:
        "Provide the number of successful or desired outcomes.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Total Outcomes",
      description:
        "Enter the total possible outcomes.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Calculate Probability",
      description:
        "The calculator applies the probability formula automatically.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Results",
      description:
        "See probability, odds, percentage chance, and decimal value.",
      icon: "result",
    },
  ],

  formula: {
    title: "Probability Formula",

    formula:
      "Probability = Favorable Outcomes ÷ Total Outcomes",

    explanation:
      "Probability measures the likelihood of an event occurring. It is calculated by dividing the number of favorable outcomes by the total number of possible outcomes. Probability values range from 0 to 1 and can also be expressed as percentages.",

    example: {
      input:
        "Favorable Outcomes = 2, Total Outcomes = 6",

      output:
        "Probability = 2/6 = 0.3333 = 33.33%",
    },

    useCases: [
      "Statistics",
      "Mathematics",
      "Competitive Exams",
      "Research",
      "Data Analysis",
      "Risk Assessment",
      "Business Forecasting",
      "Science Experiments",
      "Education",
      "Gaming Probability",
    ],
  },

  faqs: [
    {
      question:
        "What is probability?",
      answer:
        "Probability is the likelihood that an event will occur and is expressed as a number between 0 and 1 or as a percentage.",
    },

    {
      question:
        "How is probability calculated?",
      answer:
        "Probability is calculated by dividing favorable outcomes by total possible outcomes.",
    },

    {
      question:
        "What is the probability formula?",
      answer:
        "Probability = Favorable Outcomes ÷ Total Outcomes.",
    },

    {
      question:
        "Can probability be expressed as a percentage?",
      answer:
        "Yes. Multiply the probability value by 100 to convert it into a percentage.",
    },

    {
      question:
        "What does a probability of 0 mean?",
      answer:
        "A probability of 0 means the event cannot occur.",
    },

    {
      question:
        "What does a probability of 1 mean?",
      answer:
        "A probability of 1 means the event is certain to occur.",
    },

    {
      question:
        "Where is probability used?",
      answer:
        "Probability is used in mathematics, statistics, finance, science, gaming, forecasting, and risk analysis.",
    },

    {
      question:
        "What is the difference between odds and probability?",
      answer:
        "Probability compares the number of favorable outcomes to the total number of all possible outcomes, whereas odds compare the number of favorable outcomes directly against the number of unfavorable outcomes.",
    },
    {
      question: "When can I divide favorable outcomes by total outcomes?",
      answer:
        "Use this formula when outcomes are mutually exclusive and equally likely. A fair die and a well-shuffled standard deck are common examples. If outcomes have different likelihoods, use their assigned probabilities instead of simply counting them.",
    },
    {
      question: "How do I convert probability to odds in favor?",
      answer:
        "For probability p, odds in favor are p to (1 − p). A probability of 0.25 therefore gives odds of 0.25:0.75, which simplifies to 1:3.",
    },
    {
      question: "Can this calculator predict a future result?",
      answer:
        "No. It calculates a theoretical chance from the values supplied. A probability describes long-run likelihood and does not guarantee the outcome of an individual trial.",
    },
  ],
  seoContent: `
    <h2>Probability for equally likely outcomes</h2>
    <p>The basic formula P(event) = favourable outcomes ÷ total outcomes applies when each outcome is equally likely. The result can be shown as a decimal, fraction, percentage, or odds.</p>
    <h2>Example</h2>
    <p>A fair six-sided die has six equally likely outcomes. Two outcomes, 5 and 6, satisfy “greater than 4,” so the probability is 2/6 = 1/3, or approximately 33.33%.</p>
    <h2>Know the model's limits</h2>
    <p>Real-world outcomes are not always equally likely or independent. Historical frequency does not guarantee a future event, and this simple calculator does not handle conditional probability, dependent events, distributions, or uncertainty in the input assumptions.</p>
    <h2>Probability as a Fraction, Decimal and Percentage</h2>
    <p>The same probability can be written in different forms. A fraction of 1/4 equals the decimal 0.25 and the percentage 25%. Convert a decimal to a percentage by multiplying by 100.</p>
    <h2>Probability Compared with Odds</h2>
    <p>Probability compares favorable outcomes with all outcomes. Odds in favor compare favorable outcomes with unfavorable outcomes. With one winning outcome among four equally likely outcomes, probability is 1/4 while odds in favor are 1:3.</p>
    <h2>When the Basic Formula Does Not Apply</h2>
    <p>Real-world outcomes are not always equally likely or independent. Historical frequency does not guarantee a future event. This calculator does not model conditional probability, dependent events, probability distributions, sampling bias, or uncertainty in the input assumptions.</p>
  `,
};
