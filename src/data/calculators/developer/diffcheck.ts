import { Calculator } from "@/src/types/calculator";

export const diffcheckCalculator: Calculator = {
  slug: "diffcheck",

  name: "Diff Checker",

  description:
    "Compare two versions of text, code, JSON, or configuration side by side or inline. Highlight added and removed lines locally, with options to ignore case or whitespace.",

  category: "Developer Tools",

  isPopular: true,

  editorialIntro:
    "This client-side diff tool treats each line as a comparison unit and uses a Longest Common Subsequence (LCS) matrix to align two versions. It helps programmers, editors, and reviewers spot additions, deletions, case changes, and whitespace differences without uploading the pasted text for processing.",

  benchmarkContext: {
    title: "LCS Line Comparison and Change Alignment",
    badge: "Computer Science Standard",
    stat: "O(N × M) Dynamic-Programming Comparison",
    description:
      "The tool uses a Longest Common Subsequence comparison to align matching lines and mark additions and deletions. It operates in the browser without uploading the pasted content for comparison.",
    source: "Longest Common Subsequence (LCS) dynamic programming method",
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
    title: "Diff Checker Online: Compare Text and Code Privately",
    description:
      "Compare two texts or code snippets online. Find added and removed lines in split or inline view, ignore case or whitespace, and process content in your browser.",
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
      "compare original and revised text online",
      "private browser based code comparison tool",
      "compare JSON configuration changes online",
      "line by line document comparison online",
      "ignore whitespace diff checker",
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
        "Choose a side-by-side split view or a unified inline view, then decide whether the comparison should ignore case or whitespace differences.",
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
    title: "Longest Common Subsequence (LCS) Comparison Method",

    formula: "Changed Lines = Added Lines + Removed Lines",

    explanation:
      "The diff algorithm searches for the Longest Common Subsequence (LCS) between the two sequences of lines. Unmatched original lines are classified as deletions and unmatched revised lines as additions. Optional normalization can ignore case or repeated whitespace before the sequences are compared.",

    example: {
      input: "Original: 'DevCalc is fast.' | Changed: 'DevCalc is fast and free.'",

      output: "The original line is marked removed and the revised line is marked added.",
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
      question: "What comparison options are supported?",
      answer:
        "The tool compares content line by line and offers Side-by-Side and Unified result views. You can also ignore letter case or normalize whitespace. For small wording edits, review the highlighted changed lines to locate the exact revision.",
    },
  ],

  seoContent: `
<h2>Compare Two Texts or Code Snippets Online</h2>
<p>
  Paste the original version on the left and the revised version on the right to create a clear <strong>line-by-line diff</strong>. Added lines appear in green, removed lines appear in red, and unchanged lines remain aligned for context. Use the split view when you want both versions beside each other, or the unified view when you want a compact, Git-style change list.
</p>

<h2>When to Ignore Whitespace or Letter Case</h2>
<p>
  Enable <strong>Ignore Whitespace</strong> when tabs, repeated spaces, or leading and trailing spaces are not meaningful to the review. Enable <strong>Ignore Case</strong> when capitalization should not count as a change. Leave both options off when comparing source code, YAML, environment files, or other formats where spacing or capitalization may alter behaviour.
</p>

<h2>Useful Diff Checker Workflows</h2>
<ul>
  <li><strong>Code review:</strong> compare a function before and after refactoring without opening a repository.</li>
  <li><strong>Configuration checks:</strong> find changed values in JSON, SQL, INI, or environment templates.</li>
  <li><strong>Editorial review:</strong> compare two drafts of an article, email, policy, or assignment.</li>
  <li><strong>Debugging:</strong> isolate a missing line, renamed key, or unexpected generated output.</li>
</ul>

<h2>Privacy and Comparison Limits</h2>
<p>
  The comparison runs in your browser and does not require an account. This is a text comparison tool, not a parser: it does not validate whether pasted code compiles or whether JSON and YAML are syntactically valid. Avoid pasting production secrets into any webpage, and rotate a credential immediately if it has already been exposed elsewhere.
</p>
`,
};
