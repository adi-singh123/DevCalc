import type { Calculator } from "@/src/types/calculator";

export const flamesCalculator: Calculator = {
  slug: "flames-calculator",
  name: "FLAMES Calculator",
  description: "Play the classic FLAMES name game online and get a repeatable Friends, Love, Affection, Marriage, Enemies, or Siblings result.",
  category: "Fun",
  isPopular: true,
  compareWith: ["love-calculator", "friendship-calculator", "crush-calculator", "zodiac-compatibility-calculator"],
  editorialIntro: "This digital version follows the familiar paper-and-pencil FLAMES elimination game. It removes matching letters one at a time and cycles through the six FLAMES labels. It is a deterministic word game, not a measure of a real relationship.",
  benchmarkContext: { title: "Classic FLAMES elimination", badge: "Entertainment only", stat: "6 playful relationship labels", description: "Names are normalized locally in your browser. Matching letters are cancelled one-for-one and the remaining count drives circular elimination.", source: "Traditional FLAMES name game", lastUpdated: "October 2026" },
  seo: { title: "FLAMES Calculator by Name – Free Online FLAMES Game", description: "Enter two names and play the classic FLAMES game online. Get a repeatable Friends, Love, Affection, Marriage, Enemies, or Siblings result.", keywords: ["flames calculator", "flames calculator by name", "flames game online", "flames love calculator", "flames relationship calculator", "name flames test"] },
  steps: [
    { step: 1, title: "Enter the first name", description: "Type the name or nickname you want the game to use.", icon: "calculator" },
    { step: 2, title: "Enter the second name", description: "Spelling matters because the game counts letters.", icon: "calculator" },
    { step: 3, title: "Cancel matching letters", description: "The calculator removes matching characters one-for-one.", icon: "calculator" },
    { step: 4, title: "Reveal the FLAMES result", description: "The remaining count eliminates labels until one remains.", icon: "result" },
  ],
  formula: { title: "How FLAMES is calculated", formula: "Remaining count = unmatched letters after one-to-one cancellation", explanation: "Starting with Friends, Love, Affection, Marriage, Enemies, and Siblings, the calculator repeatedly counts around the list and removes one label until a single result remains.", example: { input: "Two names with 8 unmatched letters", output: "Count 8 repeatedly through FLAMES until one label remains" }, useCases: ["Classic school name game", "Party game", "Nickname comparison", "Shareable entertainment"] },
  faqs: [
    { question: "What does FLAMES stand for?", answer: "FLAMES commonly stands for Friends, Love, Affection, Marriage, Enemies, and Siblings. It is a traditional name game with several local variations." },
    { question: "How does this FLAMES calculator work?", answer: "It converts both names to letters, ignores spaces and punctuation, cancels common letters one at a time, and uses the number of uncancelled letters for circular elimination across the six labels." },
    { question: "Is the FLAMES result accurate?", answer: "It is accurate to the stated game method, but it cannot predict feelings or relationships. Treat the answer only as light entertainment." },
    { question: "Will the same names return the same result?", answer: "Yes. The method is deterministic, so the same spellings return the same result. Nicknames or different spellings can change the letter count." },
    { question: "Does the order of names change the result?", answer: "No. The one-to-one matching count is symmetric, so swapping the two names produces the same result in this implementation." },
    { question: "Are the names saved?", answer: "The calculation runs in your browser. This calculator does not need to send the entered names to a calculation server." },
  ],
  seoContent: `<h2>Play the classic FLAMES game online</h2><p>FLAMES is a simple name game remembered from notebooks and classroom breaks. Write two names, cross out matching letters, count the letters that remain, and use that number to eliminate choices from FLAMES until one is left.</p><h2>Why spelling changes the answer</h2><p>The game works with literal letters rather than personality information. A nickname, middle name, or spelling variation changes the unmatched count and may produce another label. For a repeatable comparison, use the same spellings each time.</p><h2>FLAMES meanings</h2><ul><li><strong>F:</strong> Friends</li><li><strong>L:</strong> Love</li><li><strong>A:</strong> Affection</li><li><strong>M:</strong> Marriage</li><li><strong>E:</strong> Enemies</li><li><strong>S:</strong> Siblings</li></ul><h2>Entertainment disclaimer</h2><p>FLAMES is a word game, not a scientific, psychological, or romantic compatibility test. Real relationships depend on communication, consent, trust, respect, and shared experiences.</p>`,
};
