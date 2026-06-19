import { Calculator } from "@/src/types/calculator";

export const loveCalculator: Calculator = {
  slug: "love-calculator",

  name: "Love Calculator",

  description:
    "Check love compatibility between two people using their names. Discover your love percentage, relationship match score, and compatibility level instantly with our fun and shareable Love Calculator.",

  category: "Fun",

  isPopular: true,

  compareWith: ["friendship-calculator", "crush-calculator"],

  seo: {
    title: "Love Calculator - Check Love Percentage by Name Online Free",

    description:
      "Use our free Love Calculator to find your love compatibility percentage by name. Enter two names and discover your love match score instantly. Fun, fast, and free to use.",

    keywords: [
      "love calculator",
      "love calculator by name",
      "love percentage calculator",
      "love compatibility calculator",
      "name compatibility calculator",
      "love test calculator",
      "crush calculator",
      "love meter",
      "true love calculator",
      "free love calculator",
      "online love calculator",
      "couple compatibility calculator",
      "relationship compatibility calculator",
      "love score calculator",
      "love percentage by name",
      "name love calculator",
      "love calculator india",
      "fun love calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Your Name",
      description: "Type your name into the Love Calculator.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Partner's Name",
      description: "Enter your partner's, crush's, or friend's name.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Calculate Love Percentage",
      description: "Our compatibility algorithm analyzes both names.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Your Love Match",
      description:
        "See your compatibility score and relationship message instantly.",
      icon: "result",
    },
  ],

  formula: {
    title: "How the Love Calculator Works",

    formula: "Love Score = Name Matching Analysis + Numerology Compatibility",

    explanation:
      "The Love Calculator uses a combination of name matching and numerology-inspired calculations to generate a compatibility percentage between two names. The same names will always produce the same result, making the score consistent and shareable.",

    example: {
      input: "Name 1: Rahul, Name 2: Priya",

      output: "Love Match Score: 82%",
    },

    useCases: [
      "Love Compatibility Check",
      "Crush Compatibility",
      "Relationship Fun Test",
      "Couple Match Percentage",
      "Entertainment Purposes",
    ],
  },

  faqs: [
    {
      question: "How does the Love Calculator work?",
      answer:
        "Our Love Calculator uses a name-based numerology and letter-matching algorithm to generate a compatibility percentage between two names. Each letter is assigned a numeric value, and the combination of both names determines your love score. It's designed purely for fun and entertainment.",
    },

    {
      question: "Is the Love Calculator result accurate?",
      answer:
        "The Love Calculator is meant for entertainment purposes only. It does not use any scientific or psychological method to predict real relationship compatibility. Real relationships depend on communication, trust, and shared values rather than name calculations.",
    },

    {
      question: "Can I use this Love Calculator for a crush?",
      answer:
        "Yes. You can enter your name and your crush's name to see your love compatibility percentage. Many people use it as a fun way to explore potential relationship compatibility.",
    },

    {
      question: "Does the order of names matter?",
      answer:
        "No. The order of names does not affect the result. Whether you enter your name first or your partner's name first, the compatibility score remains the same.",
    },

    {
      question: "Will I get the same result every time?",
      answer:
        "Yes. The Love Calculator uses a deterministic calculation method, meaning the same pair of names will always produce the same compatibility percentage.",
    },

    {
      question: "Can I use nicknames instead of full names?",
      answer:
        "Yes. You can try different name variations, including nicknames and shortened names, to see how the compatibility score changes.",
    },

    {
      question: "Is the Love Calculator free to use?",
      answer:
        "Yes. Our Love Calculator is completely free and can be used as many times as you like without registration or sign-up.",
    },

    {
      question: "Can I share my Love Calculator result?",
      answer:
        "Yes. You can share your compatibility result with friends or your partner using WhatsApp, social media, or the result-sharing features available on DevCalc.",
    },
  ],

  seoContent: `

<h2>What Is a Love Calculator?</h2>

<p>
A Love Calculator is a fun compatibility tool that estimates a relationship match percentage between two people using their names. Millions of people use love calculators for entertainment, curiosity, and social sharing.
</p>

<h2>How Does the Love Calculator Work?</h2>

<p>
The calculator uses a combination of letter matching, name analysis, and numerology-inspired calculations to generate a compatibility score. The same names always produce the same result, ensuring consistency and shareability.
</p>

<h2>Love Percentage Score Guide</h2>

<table>
<tr>
<th>Score Range</th>
<th>Meaning</th>
</tr>
<tr>
<td>35% - 49%</td>
<td>Friendship Energy</td>
</tr>
<tr>
<td>50% - 64%</td>
<td>Growing Connection</td>
</tr>
<tr>
<td>65% - 79%</td>
<td>Strong Match</td>
</tr>
<tr>
<td>80% - 89%</td>
<td>Excellent Compatibility</td>
</tr>
<tr>
<td>90% - 98%</td>
<td>Rare Match</td>
</tr>
</table>

<h2>Why People Use Love Calculators</h2>

<ul>
<li>Check compatibility with a crush.</li>
<li>Compare relationship match scores.</li>
<li>Have fun with friends.</li>
<li>Share results on WhatsApp and social media.</li>
<li>Explore name-based compatibility.</li>
</ul>

<h2>Tips for Healthy Relationships</h2>

<ul>
<li>Communicate openly and honestly.</li>
<li>Build trust over time.</li>
<li>Respect each other's opinions.</li>
<li>Support each other's goals.</li>
<li>Spend quality time together.</li>
</ul>

<h2>Important Disclaimer</h2>

<p>
This Love Calculator is intended for entertainment purposes only. Real relationships depend on communication, trust, respect, shared values, and emotional compatibility rather than name-based calculations.
</p>

<h2>Try More Fun Calculators</h2>

<p>
If you enjoyed this Love Calculator, try our Friendship Calculator, Crush Calculator, and Zodiac Compatibility Calculator for more fun compatibility checks.
</p>
`,
};
