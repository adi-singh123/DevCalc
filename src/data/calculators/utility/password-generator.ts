import { Calculator } from "@/src/types/calculator";

export const passwordGenerator: Calculator = {
  slug: "password-generator",

  name: "Password Generator",

  description:
    "Generate strong, secure, and random passwords instantly. Create passwords with uppercase letters, lowercase letters, numbers, and special characters for better online security.",

  category: "Utility",

  isPopular: true,

  seo: {
    title:
      "Password Generator - Create Strong & Secure Random Passwords",

    description:
      "Generate secure random passwords online. Create strong passwords with letters, numbers, and symbols to improve account security and protect your online data.",

    keywords: [
      "password generator",
      "random password generator",
      "secure password generator",
      "strong password generator",
      "online password generator",
      "free password generator",
      "password creator",
      "password maker",
      "random password maker",
      "generate password",
      "secure password maker",
      "strong password creator",
      "best password generator",
      "complex password generator",
      "custom password generator",
      "unique password generator",
      "safe password generator",
      "password security tool",
      "random secure password",
      "online password maker",
      "create strong password",
      "generate secure password",
      "strong random password",
      "password generation tool",
      "free secure password generator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Choose Password Length",
      description:
        "Select the number of characters you want in your password.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Select Character Types",
      description:
        "Choose uppercase letters, lowercase letters, numbers, and symbols.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Generate Password",
      description:
        "Click generate to create a random secure password instantly.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "Copy and Use",
      description:
        "Copy your generated password and use it for your accounts.",
      icon: "result",
    },
  ],

  formula: {
    title: "Password Generation Logic",

    formula:
      "Random Selection From Character Set",

    explanation:
      "A password generator creates passwords by randomly selecting characters from a pool of uppercase letters, lowercase letters, numbers, and symbols. Longer passwords with more character types are generally more secure.",

    example: {
      input:
        "Length = 12, Include Symbols = Yes",

      output:
        "A7#kP9!xL2@m",
    },

    useCases: [
      "Online Accounts",
      "Email Security",
      "Banking Accounts",
      "Social Media",
      "Business Applications",
      "Password Management",
      "Website Logins",
      "Cyber Security",
    ],
  },

  faqs: [
    {
      question:
        "What is a password generator?",
      answer:
        "A password generator creates random passwords using letters, numbers, and symbols to improve security.",
    },

    {
      question:
        "Why should I use a strong password?",
      answer:
        "Strong passwords make it much harder for attackers to access your accounts through guessing or brute-force attacks.",
    },

    {
      question:
        "How long should a password be?",
      answer:
        "A password should ideally contain at least 12 to 16 characters for better security.",
    },

    {
      question:
        "Should I include symbols in my password?",
      answer:
        "Yes. Symbols increase password complexity and improve security.",
    },

    {
      question:
        "Is this Password Generator free?",
      answer:
        "Yes. You can generate unlimited secure passwords for free.",
    },
  ],
};