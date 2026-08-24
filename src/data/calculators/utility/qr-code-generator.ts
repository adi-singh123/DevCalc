import { Calculator } from "@/src/types/calculator";

export const qrCodeGenerator: Calculator = {
  slug: "qr-code-generator",

  name: "QR Code Generator",

  description:
  "A free, easy-to-use QR Code Generator for websites, text, emails, phone numbers, WiFi networks, and more. Create a custom QR code in seconds, preview it instantly, and download it in high resolution — perfect for business cards, posters, menus, or sharing information quickly without typing.",
  category: "Utility",

  isPopular: true,

  seo: {
    title:
      "QR Code Generator - Create Free QR Codes Online",

    description:
  "A free, easy-to-use QR Code Generator for websites, text, emails, phone numbers, WiFi networks, and more. Create a custom QR code in seconds, preview it instantly, and download it in high resolution — perfect for business cards, posters, menus, or sharing information quickly without typing.",
keywords: [
  "qr code generator",
  "create qr code",
  "url qr code generator",
  "wifi qr code generator",
  "custom qr code generator",
  "vcard qr code generator",
  "download qr code",
  "dynamic qr code generator",
  "text qr code generator",
],
  },

  compareWith: [
  "password-generator",
  "random-number-generator",
],

  steps: [
    {
      step: 1,
      title: "Enter Content",
      description:
        "Enter a URL, text, email, phone number, or any content.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Generate QR Code",
      description:
        "Click generate to instantly create a QR code.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "Preview QR Code",
      description:
        "View the generated QR code on screen.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "Download QR Code",
      description:
        "Save the QR code image for sharing or printing.",
      icon: "result",
    },
  ],

  formula: {
    title: "How QR Codes Work",

    formula:
      "Input Data → Encoding → QR Matrix Pattern",

    explanation:
      "A QR code converts information such as URLs, text, contact details, or WiFi credentials into a machine-readable matrix that can be scanned by smartphones and QR scanners.",

    example: {
      input:
        "https://www.devcalc.in",

      output:
        "Generated QR Code",
    },

    useCases: [
      "Website Links",
      "Business Cards",
      "Marketing Campaigns",
      "WiFi Sharing",
      "Event Tickets",
      "Contact Information",
      "Product Labels",
      "Payments",
    ],
  },

  faqs: [
    {
      question:
        "What is a QR code?",
      answer:
        "A QR code is a two-dimensional barcode that stores information and can be scanned using smartphones or QR scanners.",
    },

    {
      question:
        "Can I create QR codes for URLs?",
      answer:
        "Yes. You can generate QR codes for websites, landing pages, and online resources.",
    },

    {
      question:
        "Can I generate QR codes for text?",
      answer:
        "Yes. Any text can be converted into a QR code.",
    },

    {
      question:
        "Can I download the generated QR code?",
      answer:
        "Yes. You can download and use the QR code for personal or business purposes.",
    },

    {
      question:
        "What is the maximum data capacity of a QR code?",
      answer:
        "A standard Version 40 QR code can store up to 7,089 numeric characters, 4,296 alphanumeric characters, or 2,953 bytes of binary data, depending on the error correction level applied.",
    },
  ],
};