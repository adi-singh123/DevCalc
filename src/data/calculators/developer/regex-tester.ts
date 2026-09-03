import { Calculator } from "@/src/types/calculator";

export const regexTester: Calculator = {
  slug: "regex-tester",

  name: "Regex Tester",

  description:
    "Test regular expressions instantly against text input. Validate patterns, find matches, and debug regex expressions online.",

  category: "Developer Tools",

  isPopular: true,

  editorialIntro:
    "Regular Expressions (RegEx) define formal search patterns using deterministic and non-deterministic finite automata under the ECMAScript RegExp standard. Live pattern testing allows developers to test character classes, quantifiers, lookahead/lookbehind assertions, and flag modifiers (`g`, `i`, `m`, `s`, `u`) before deploying to production code.",

  benchmarkContext: {
    title: "ECMAScript 2026 (ECMA-262) Regular Expression Standards",
    badge: "Language Specification Standard",
    stat: "NFA Engine with Lookaround & Named Capture Groups",
    description:
      "Modern JavaScript regex engines support positive/negative lookaheads (`(?=...)`, `(?!...)`), lookbehinds (`(?<=...)`, `(?<!...)`), named capture groups (`(?<name>...)`), and Unicode property escapes (`\\p{Letter}`). Testing protects against Regular Expression Denial of Service (ReDoS) caused by nested quantifiers.",
    source: "ECMA International (ECMA-262) & Mozilla Developer Network (MDN)",
    lastUpdated: "January 2026",
  },

  seo: {
    title:
      "Regex Tester - Regular Expression Tester Online",

    description:
      "Test and validate regular expressions in real-time. Debug JavaScript regex patterns, test character classes, lookarounds, and evaluate capture groups with live highlighting.",
    keywords: [
      "regex tester",
      "regular expression tester",
      "regex pattern validator",
      "regex syntax checker",
      "regex match tester",
      "javascript regex tester",
      "regex debugger",
      "email regex validator",
      "regex cheat sheet and tester",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Regex Pattern",
      description:
        "Type or paste the regular expression pattern.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Enter Test String",
      description:
        "Provide the text you want to test against the regex.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Run Test",
      description:
        "Instantly view matches and validation results.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "Analyze Results",
      description:
        "See matched text, match count, and validation status.",
      icon: "result",
    },
  ],

  formula: {
    title: "Regex Pattern Concept",

    formula:
      "/pattern/flags",

    explanation:
      "Regular expressions are patterns used to match, validate, and manipulate text. They are widely used in programming, validation, search, and parsing tasks.",

    example: {
      input:
        "Pattern: ^[a-zA-Z]+$ | Text: DevCalc",

      output:
        "Match Found",
    },

    useCases: [
      "Email Validation",
      "Password Validation",
      "Form Validation",
      "Data Extraction",
      "Search Operations",
      "Log Analysis",
      "Input Validation",
      "Programming",
    ],
  },

  faqs: [
    {
      question:
        "What is a regular expression (Regex)?",
      answer:
        "A regular expression is a sequence of characters that defines a search pattern used for matching, validating, and manipulating text.",
    },

    {
      question:
        "What is a Regex Tester?",
      answer:
        "A Regex Tester allows developers to test regular expressions against sample text and instantly see matching results.",
    },

    {
      question:
        "Why are regular expressions used?",
      answer:
        "Regular expressions are commonly used for validation, searching, filtering, extracting, and transforming text data.",
    },

    {
      question:
        "Can Regex validate email addresses?",
      answer:
        "Yes. Regular expressions are commonly used to validate email formats before form submission.",
    },

    {
      question:
        "Can Regex validate passwords?",
      answer:
        "Yes. Regex patterns can enforce password rules such as minimum length, uppercase letters, numbers, and special characters.",
    },

    {
      question:
        "What do regex flags mean?",
      answer:
        "Flags modify regex behavior. Examples include g (global), i (case-insensitive), and m (multiline).",
    },

    {
      question:
        "What is a capture group?",
      answer:
        "A capture group stores matched portions of text so they can be reused or extracted later.",
    },

    {
      question:
        "Why is my regex not matching?",
      answer:
        "Common reasons include incorrect syntax, missing escape characters, invalid flags, or unexpected input data.",
    },
  ],

  seoContent: `
<h2>What Is a Regex Tester?</h2>

<p>
A Regex Tester is a developer tool used to validate and test regular expressions against sample text. Regular expressions help developers search, match, validate, and manipulate text efficiently.
</p>

<h2>What Are Regular Expressions?</h2>

<p>
Regular expressions (Regex) are text patterns used to identify specific combinations of characters within strings.
</p>

<h2>Common Regex Use Cases</h2>

<ul>
<li>Email validation</li>
<li>Password validation</li>
<li>Phone number validation</li>
<li>URL validation</li>
<li>Data extraction</li>
<li>Log file analysis</li>
<li>Form validation</li>
<li>Search and replace</li>
</ul>

<h2>Popular Regex Examples</h2>

<table>
<tr>
<th>Purpose</th>
<th>Regex</th>
</tr>

<tr>
<td>Email</td>
<td>^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$</td>
</tr>

<tr>
<td>Numbers Only</td>
<td>^[0-9]+$</td>
</tr>

<tr>
<td>Letters Only</td>
<td>^[A-Za-z]+$</td>
</tr>

<tr>
<td>Password</td>
<td>^(?=.*[A-Z])(?=.*[0-9]).{8,}$</td>
</tr>
</table>

<h2>Why Use Our Regex Tester?</h2>

<p>
Our free Regex Tester allows developers to instantly test patterns, debug matching issues, and validate user input directly in the browser.
</p>
`,
};