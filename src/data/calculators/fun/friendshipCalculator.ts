import { Calculator } from "@/src/types/calculator";

export const friendshipCalculator: Calculator = {
  slug: "friendship-calculator",

  name: "Friendship Calculator",

  description:
    "Check friendship compatibility between two people using their names. Discover your friendship percentage, bond strength, and compatibility level instantly with our free Friendship Calculator — a fun way to celebrate any friendship.",

  category: "Fun",

  isPopular: true,

  editorialIntro:
    "The Friendship Calculator evaluates character sequences between two names to produce an instant, repeatable friendship compatibility score (0%–100%). Intended purely for casual amusement and group games, identical name combinations always return identical results.",

  benchmarkContext: {
    title: "Deterministic String Hashing & Friendship Compatibility",
    badge: "Entertainment Algorithm Benchmark",
    stat: "Deterministic String Hash (0%–100% Normalized Output)",
    description:
      "Calculates a repeatable percentage based on character frequency and ASCII integer values. Provided solely for personal amusement and lighthearted entertainment; true human friendship is built upon mutual trust, loyalty, and empathy.",
    source: "DevCalc Fun & Entertainment Suite",
    lastUpdated: "January 2026",
  },

  compareWith: [
    "love-calculator",
    "crush-calculator",
  ],

  seo: {
    title:
      "Friendship Calculator: How Strong Is Your Friendship? Test by Name",
description:
  "See how strong your friendship really is. Enter two names, get an instant score from Casual Friendship to BFF, and share the result with your friend.",
    keywords: [
      "friendship calculator",
      "friendship percentage calculator",
      "friendship compatibility calculator",
      "friendship calculator by name",
      "friendship test",
      "best friend calculator",
      "bff calculator",
      "friendship meter",
      "friendship score calculator",
      "bff compatibility test",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter First Name",
      description:
        "Type your name into the Friendship Calculator. Full name, nickname, or initials all work.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Second Name",
      description:
        "Enter your friend's name to compare compatibility. It works for any friendship — a childhood best friend, a classmate, or someone you just met.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Calculate Friendship",
      description:
        "Our algorithm analyzes both names and generates a friendship score in seconds.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Friendship Result",
      description:
        "See your friendship percentage and compatibility level instantly, with a result you can share or compare with friends.",
      icon: "result",
    },
  ],

  formula: {
    title: "How the Friendship Calculator Works",

    formula:
      "Friendship Score = Name Matching Analysis + Compatibility Algorithm",

    explanation:
      "The Friendship Calculator runs both names through a name-based compatibility algorithm that looks at letter patterns and combinations between the two names, then converts that analysis into a percentage score. It's deterministic by design: the same pair of names will always produce the same result, no matter how many times you run it or who enters the names. That consistency is what makes the score fun to share — if you and a friend both check your names separately, you'll land on the same number, which is part of the appeal for groups comparing results together.\n\nIt's worth being clear about what this is and isn't. The algorithm doesn't analyze your personalities, your shared history, or anything about who you actually are — it's a playful novelty calculation based purely on the names themselves, similar in spirit to a love calculator or a numerology name tool. Two total strangers can get a high score, and two genuinely close friends can get a lower one. That's exactly the point: it's meant for fun, not as a real assessment of your friendship.",

    example: {
      input:
        "Name 1: Rahul, Name 2: Aman",

      output:
        "Friendship Score: 88% — Strong Friendship",
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
        "A Friendship Calculator is a fun, name-based tool that generates a friendship percentage between two people. You enter two names, and the calculator runs them through a compatibility algorithm to produce a score along with a friendship 'level' — like Good Friends, Strong Friendship, or Best Friends Forever. It's built purely for entertainment: a lighthearted way to celebrate a friendship, settle a playful debate with friends, or just see what number comes up for fun, not a scientific measure of how close you actually are.",
    },

    {
      question:
        "How does the Friendship Calculator work?",
      answer:
        "It analyzes the letters and patterns in both names you enter and runs them through a compatibility algorithm to produce a percentage. The calculation is deterministic, meaning the same two names will always generate the same score every time, regardless of who calculates it or when. This is intentional — it's what lets you and a friend compare results and get a consistent, shareable number, the same way a numerology or love-match calculator works.",
    },

    {
      question:
        "Is the Friendship Calculator accurate?",
      answer:
        "It's accurate in the sense that it's consistent — the same names will reliably produce the same score — but it isn't measuring anything real about your friendship. The calculator doesn't know your shared history, how often you talk, how much you trust each other, or any of the things that actually define a strong friendship. Think of it the same way you'd think of a fortune cookie or a horoscope: fun to read, not something to take as a verdict on your relationship. The real strength of any friendship comes from how you both show up for each other, not from a name-matching score.",
    },

    {
      question:
        "Can I calculate friendship with my best friend?",
      answer:
        "Yes — that's exactly what it's designed for. Enter your name and your best friend's name to see what compatibility percentage comes up, and feel free to compare it with scores for your other friends just for fun. It's a popular way for friend groups to see who gets the highest score, especially when sharing results in a group chat.",
    },

    {
      question:
        "Does the order of names matter?",
      answer:
        "No. Whether you type your name first or your friend's name first, the result comes out exactly the same. The algorithm treats the name pair as a set, not a sequence, so there's no 'correct' order to enter them in.",
    },

    {
      question:
        "Can I use nicknames instead of full names?",
      answer:
        "Yes — nicknames, initials, and shortened names all work fine. Just keep in mind that since the algorithm reads the actual letters you type, using a nickname instead of a full name (or vice versa) will usually produce a different score. If you want to compare consistently with friends, it helps to agree on whether you're all using full names or nicknames before comparing results.",
    },

    {
      question:
        "What factors actually build a strong and lasting friendship?",
      answer:
        "While name calculators provide a playful metric, genuine friendship is grounded in active listening, mutual trust, consistent emotional support, and shared values. Making intentional time to connect and respecting each other's boundaries are proven ways to nurture deep, long-term bonds.",
    },

    {
      question:
        "Can I share my friendship result?",
      answer:
        "Yes — you can copy or share your result directly to WhatsApp, Instagram, or any other platform, which makes it easy to send to the friend you just tested compatibility with, or to post in a group chat for everyone to compare scores.",
    },
  ],

  seoContent: `
<h2>What Is a Friendship Calculator?</h2>

<p>
A Friendship Calculator is a fun compatibility tool that turns two names into a friendship percentage. Type in your name and a friend's name, and it generates a score along with a friendship "level" — from Casual Friendship all the way up to Best Friends Forever. It takes seconds, works for any pair of names, and produces a result you can screenshot and send straight to the friend you just tested.
</p>

<h2>How Does the Friendship Calculator Work?</h2>

<p>
The calculator runs both names through a name-based compatibility algorithm that analyzes letter patterns between the two names and converts that into a percentage. Because the calculation is name-based rather than random, it's consistent: the same two names will always produce the same score, whether you check today or next year, and whether you enter your name first or your friend's name first. That repeatability is part of the fun — it means you and a friend can each run the calculator separately and land on the exact same number.
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

<p>
However your score lands, remember it's a starting point for fun, not a final word — plenty of "Casual Friendship" scores belong to people who've been close for years, and that's exactly why this is meant to be entertainment rather than a real compatibility test.
</p>

<h2>Why People Use Friendship Calculators</h2>

<ul>
<li>Checking friendship compatibility with a close friend just for fun.</li>
<li>Comparing scores across a whole friend group to see who "wins."</li>
<li>Sharing results on WhatsApp, Instagram, or group chats.</li>
<li>Testing compatibility with classmates, roommates, or coworkers.</li>
<li>Settling a lighthearted debate about who's the better match as friends.</li>
</ul>

<h2>Can Friendship Really Be Measured?</h2>

<p>
Not in any scientific sense — and that's by design. Real friendship is built on things a name-matching tool can't see: trust earned over time, how you show up for each other during hard moments, honest communication, and shared experiences that accumulate over years. This calculator looks only at the letters in two names, which means it has no way to account for any of that. It's best enjoyed as a quick, playful moment with a friend — not as a measurement to take seriously or worry about if the number isn't what you hoped.
</p>

<h2>Ways to Build Genuinely Strong Friendships</h2>

<ul>
<li>Communicate openly, especially when something's bothering you.</li>
<li>Show up for each other during hard times, not just good ones.</li>
<li>Respect differences in opinions, choices, and life paths.</li>
<li>Make time for each other, even when schedules get busy.</li>
<li>Celebrate each other's wins without comparison or competition.</li>
</ul>

<h2>Important Disclaimer</h2>

<p>
This Friendship Calculator is intended for entertainment purposes only. It does not measure real compatibility, predict the future of any relationship, or reflect the actual depth of a friendship. Real friendships are built on trust, respect, communication, and shared experience — not on a name-based calculation.
</p>

<h2>Try More Fun Calculators</h2>

<p>
Enjoyed this one? Check out our Love Calculator and Crush Calculator for more playful compatibility tools on DevCalc.
</p>
`,
};