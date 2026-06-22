import { Calculator } from "@/src/types/calculator";

export const friendshipCalculator: Calculator = {
  slug: "friendship-calculator",

  name: "Friendship Calculator",

  description:
    "Check friendship compatibility between two people using their names. Discover your friendship percentage, bond strength, and compatibility level instantly with our free Friendship Calculator.",

  category: "Fun",

  isPopular: true,

  compareWith: [
    "love-calculator",
    "crush-calculator",
  ],

  seo: {
    title:
      "Friendship Calculator - Check Friendship Percentage by Name",

    description:
      "Use our free Friendship Calculator to find friendship compatibility by name. Enter two names and discover your friendship match percentage instantly.",

    keywords: [
      "friendship calculator",
      "friendship percentage calculator",
      "friendship compatibility calculator",
      "friendship calculator by name",
      "friendship test",
      "friendship meter",
      "best friend calculator",
      "bff calculator",
      "friendship score calculator",
      "friendship match calculator",
      "online friendship calculator",
      "friendship checker",
      "friend compatibility calculator",
      "friendship percentage by name",
      "fun friendship calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter First Name",
      description:
        "Type the first person's name into the Friendship Calculator.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Second Name",
      description:
        "Enter your friend's name to compare compatibility.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Calculate Friendship",
      description:
        "Our algorithm analyzes both names and generates a friendship score.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Friendship Result",
      description:
        "See your friendship percentage and compatibility level instantly.",
      icon: "result",
    },
  ],

  formula: {
    title: "How the Friendship Calculator Works",

    formula:
      "Friendship Score = Name Matching Analysis + Compatibility Algorithm",

    explanation:
      "The Friendship Calculator uses a combination of name analysis and compatibility scoring to generate a friendship percentage. The same pair of names always produces the same result, making the score consistent and shareable.",

    example: {
      input:
        "Name 1: Rahul, Name 2: Aman",

      output:
        "Friendship Score: 88%",
    },

    useCases: [
      "Best Friend Compatibility",
      "Friendship Testing",
      "School Friends",
      "College Friends",
      "Entertainment Purposes",
    ],
  },

  faqs: [
    {
      question:
        "What is a Friendship Calculator?",
      answer:
        "A Friendship Calculator is a fun tool that estimates friendship compatibility between two people using their names. It generates a friendship percentage and compatibility score for entertainment purposes.",
    },

    {
      question:
        "How does the Friendship Calculator work?",
      answer:
        "The Friendship Calculator analyzes both names using a compatibility algorithm and generates a friendship percentage. The same pair of names will always produce the same result.",
    },

    {
      question:
        "Is the Friendship Calculator accurate?",
      answer:
        "The Friendship Calculator is intended for entertainment purposes only. It does not scientifically measure friendship strength or predict real-world relationships.",
    },

    {
      question:
        "Can I calculate friendship with my best friend?",
      answer:
        "Yes. Simply enter your name and your best friend's name to see your friendship compatibility percentage.",
    },

    {
      question:
        "Does the order of names matter?",
      answer:
        "No. Whether you enter your name first or your friend's name first, the friendship score remains the same.",
    },

    {
      question:
        "Can I use nicknames?",
      answer:
        "Yes. You can test compatibility using full names, nicknames, initials, or shortened names.",
    },

    {
      question:
        "Is the Friendship Calculator free?",
      answer:
        "Yes. The calculator is completely free and can be used unlimited times without registration.",
    },

    {
      question:
        "Can I share my friendship result?",
      answer:
        "Yes. You can download, copy, or share your friendship compatibility result with friends on WhatsApp and social media.",
    },
  ],

  seoContent: `
<h2>What Is a Friendship Calculator?</h2>

<p>
A Friendship Calculator is a fun compatibility tool that estimates the friendship strength between two people using their names. It generates a friendship percentage score that can be shared with friends and family.
</p>

<h2>How Does the Friendship Calculator Work?</h2>

<p>
The calculator uses a name-based compatibility algorithm to calculate a friendship score. The same names always produce the same result, making the calculation consistent and repeatable.
</p>

<h2>Friendship Score Guide</h2>

<table>
<tr>
<th>Score Range</th>
<th>Meaning</th>
</tr>
<tr>
<td>35% - 49%</td>
<td>Casual Friendship</td>
</tr>
<tr>
<td>50% - 64%</td>
<td>Good Friends</td>
</tr>
<tr>
<td>65% - 79%</td>
<td>Great Friendship Potential</td>
</tr>
<tr>
<td>80% - 94%</td>
<td>Strong Friendship</td>
</tr>
<tr>
<td>95% - 98%</td>
<td>Best Friends Forever</td>
</tr>
</table>

<h2>Why People Use Friendship Calculators</h2>

<ul>
<li>Check friendship compatibility with friends.</li>
<li>Compare friendship scores for fun.</li>
<li>Share friendship results on social media.</li>
<li>Test compatibility with classmates and colleagues.</li>
<li>Enjoy entertaining friendship games.</li>
</ul>

<h2>Can Friendship Be Measured?</h2>

<p>
Real friendship depends on trust, communication, loyalty, support, and shared experiences. This Friendship Calculator is designed for fun and entertainment rather than scientific measurement.
</p>

<h2>Ways to Build Strong Friendships</h2>

<ul>
<li>Communicate openly and honestly.</li>
<li>Support each other during challenges.</li>
<li>Respect differences and opinions.</li>
<li>Spend quality time together.</li>
<li>Celebrate each other's achievements.</li>
</ul>

<h2>Important Disclaimer</h2>

<p>
This Friendship Calculator is intended for entertainment purposes only. Real friendships are built on trust, respect, communication, and shared experiences rather than name-based calculations.
</p>

<h2>Try More Fun Calculators</h2>

<p>
If you enjoyed this Friendship Calculator, try our Love Calculator, Crush Calculator, Zodiac Compatibility Calculator, and other fun tools on DevCalc.
</p>
`,
};