import { Calculator } from "@/src/types/calculator";

export const diffcheckCalculator: Calculator = {
  slug: "diffcheck",

  name: "Diff Checker",

  description:
    "Compare two text documents, code snippets, or configuration files side-by-side or inline. Instantly identify added lines (+), removed lines (-), and character-level edits with zero server logging.",

  category: "Developer Tools",

  isPopular: true,

  editorialIntro:
    "Text difference algorithms compute the minimal edit distance between an original string and a modified version using the Longest Common Subsequence (LCS) and Eugene W. Myers diff algorithms. This client-side diff tool allows programmers, copywriters, and legal editors to highlight additions, deletions, and whitespace modifications instantly without sending sensitive text to remote servers.",

  benchmarkContext: {
    title: "Myers Diff Algorithm & Longest Common Subsequence (LCS)",
    badge: "Computer Science Standard",
    stat: "O((N + M) × D) Time Complexity (Minimal Edit Distance)",
    description:
      "Myers diff algorithm computes the shortest edit script (SES) in graph theory to transform string A into string B with optimal additions (+) and deletions (-). Operates 100% in-browser with zero server logging.",
    source: "Myers, Eugene W. (1986) 'An O(ND) Difference Algorithm and Its Variations', Algorithmica",
    lastUpdated: "January 2026",
  },

  compareWith: [
    "json-formatter",
    "regex-tester",
    "base64-encoder-decoder",
    "url-encoder-decoder",
    "uuid-generator",
  ],

  seo: {
    title: "Diff Checker Online – Compare Text & Code Differences (Side-by-Side & Inline)",
    description:
      "Free online diff checker to compare two text files or code snippets. Spot added, removed, and modified lines instantly with side-by-side split view, inline diff, and character-level highlights. 100% private in-browser tool.",
    keywords: [
      "diff checker",
      "diff check online",
      "text difference checker",
      "compare two text files",
      "code diff tool",
      "online file comparison",
      "side by side diff checker",
      "git diff online",
      "string comparison tool",
      "inline diff tool",
      "find text differences",
      "free diff tool",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Paste Original Text",
      description:
        "Enter or paste the source text, original code, or base document into the 'Original Text' editor on the left.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Paste Changed Text",
      description:
        "Paste the updated, revised, or modified text snippet into the 'Changed Text' editor on the right.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Select Diff Mode",
      description:
        "Choose between Split (Side-by-Side) or Unified (Inline) view, and select Line, Word, or Character comparison.",
      icon: "target",
    },
    {
      step: 4,
      title: "View Visual Difference",
      description:
        "Click 'Find Difference' to see added content highlighted in green and removed content marked in red with full statistics.",
      icon: "result",
    },
  ],

  formula: {
    title: "Longest Common Subsequence (LCS) & Edit Distance Formula",

    formula: "Edit Distance D = (Deletions + Insertions) to transform Text A → Text B",

    explanation:
      "The diff algorithm searches for the Longest Common Subsequence (LCS) between two sequences of tokens (lines, words, or characters). Unmatched tokens from the original text are classified as deletions (highlighted in red), while unmatched tokens from the changed text are classified as insertions (highlighted in green). The Myers algorithm traverses an edit graph to construct the shortest path with the minimum number of modifications.",

    example: {
      input: "Original: 'DevCalc is fast.' | Changed: 'DevCalc is fast and free.'",

      output: "Diff: 'DevCalc is fast [added: and free].' (1 Insertion, 0 Deletions)",
    },

    useCases: [
      "Comparing source code revisions and git merge conflicts",
      "Tracking editorial revisions in essays, contracts, and articles",
      "Validating configuration file changes (JSON, YAML, ENV)",
      "Checking SQL schema updates and API payload changes",
      "Finding subtle typo corrections across long text documents",
    ],
  },

  faqs: [
    {
      question: "Is my pasted text or source code sent to any external server?",
      answer:
        "No. DevCalc's Diff Checker processes all text comparison logic 100% locally within your browser using client-side JavaScript. No documents, code, passwords, or confidential texts are transmitted, logged, or stored on any server.",
    },
    {
      question: "What is the difference between Side-by-Side and Unified view?",
      answer:
        "Side-by-Side (Split) view displays the Original text on the left and the Changed text on the right, keeping corresponding lines visually aligned. Unified (Inline) view combines both versions into a single continuous stream, placing removed lines and added lines sequentially with +/- markers, similar to standard Git commit diffs.",
    },
    {
      question: "Can I compare code with whitespace or indentation ignored?",
      answer:
        "Yes. You can toggle the 'Ignore Whitespace' option to focus strictly on semantic text changes rather than formatting differences (such as tabs vs spaces or trailing spaces).",
    },
    {
      question: "What comparison levels are supported?",
      answer:
        "You can compare text Line-by-Line (best for source code and paragraphs), Word-by-Word (best for prose and essay revisions), or Character-by-Character (best for checking single-digit numbers, hashes, and typo corrections).",
    },
  ],
};

