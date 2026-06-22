import { Calculator } from "@/src/types/calculator";

export const regexTester: Calculator = {
  slug: "regex-tester",

  name: "Regex Tester",

  description:
    "Test regular expressions instantly against text input. Validate patterns, find matches, and debug regex expressions online.",

  category: "Developer Tools",

  isPopular: true,

  seo: {
    title:
      "Regex Tester - Regular Expression Tester Online",

    description:
      "Test and validate regular expressions instantly. Free Regex Tester with live matching, pattern validation, and regex debugging.",

  keywords: [
  "regex tester",
  "regular expression tester",
  "regex validator",
  "regex checker",
  "online regex tester",
  "regex pattern tester",
  "regex generator",
  "javascript regex tester",
  "email regex tester",
  "password regex tester",
  "regex debugger",
  "regex tool",
  "developer regex tester",
  "regex online",
  "regex validator online",

  // Core Keywords
  "regular expression checker",
  "regex pattern validator",
  "regex expression tester",
  "regex syntax checker",
  "regex matching tool",
  "regex validation tool",
  "regex pattern checker",
  "regex parser",
  "regex utility",
  "regex editor",

  // Testing Keywords
  "test regex online",
  "regex test tool",
  "regex matcher",
  "regex match tester",
  "regex evaluator",
  "regex analyzer",
  "regex verification tool",
  "online regex checker",
  "regex debugging tool",
  "regex simulator",

  // Generator Keywords
  "regex builder",
  "regex pattern generator",
  "regular expression generator",
  "regex creator",
  "regex maker",
  "regex expression builder",
  "custom regex generator",
  "regex construction tool",

  // Validation Keywords
  "validate regex pattern",
  "regex syntax validator",
  "regex pattern validation",
  "regex error checker",
  "regex lint tool",
  "regex validator for developers",
  "regex correctness checker",
  "regular expression validator",

  // Language Specific
  "javascript regex tester",
  "python regex tester",
  "java regex tester",
  "php regex tester",
  "c# regex tester",
  "nodejs regex tester",
  "typescript regex tester",
  "java regex validator",
  "python regular expression tester",

  // Common Use Cases
  "email regex tester",
  "password regex tester",
  "phone number regex tester",
  "url regex tester",
  "date regex tester",
  "username regex validator",
  "zip code regex tester",
  "ip address regex tester",
  "credit card regex tester",
  "domain regex validator",

  // Developer Keywords
  "developer regex tools",
  "web developer regex tester",
  "online developer tools",
  "regex debugging utility",
  "api regex validator",
  "regex testing software",
  "regex development tool",
  "programming regex tester",

  // Learning Keywords
  "regex examples",
  "regex cheat sheet",
  "regular expression examples",
  "regex tutorial",
  "regex syntax guide",
  "regex pattern examples",
  "regex character classes",
  "regex quantifier examples",

  // Question Keywords
  "what is regex",
  "what is regular expression",
  "how to test regex",
  "how to validate regex pattern",
  "how to create regex",
  "how does regex work",
  "how to debug regex",
  "how to write regex for email",
  "regex tester example",
  "regular expression tutorial",

  // Long Tail Keywords
  "free online regex tester",
  "best regex tester online",
  "regex tester and validator",
  "regex generator and checker",
  "instant regex testing tool",
  "regular expression validator online",
  "regex pattern matching tool",
  "regex checker for developers",
  "online regex debugger",
  "advanced regex tester",
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