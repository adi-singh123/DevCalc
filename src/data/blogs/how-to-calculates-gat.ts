import { Blog } from "@/src/types/blog";

export const blogs: Blog[] = [
  {
    slug: "how-to-calculate-gst-in-india",

    title: "How to Calculate GST in India (With Simple Examples)",

    icon: "₹",

    description: "Learn GST calculation step-by-step with examples.",

    category: "Finance",

    author: "DevCalc Team",

    publishedDate: "15 June 2026",

    readingTime: "8 min read",

    image: "/blogs/gst-guide.webp",

    content: [
      {
        heading: "Introduction to GST Calculator",
        paragraphs: [
          "Goods and Services Tax (GST) is one of the most significant tax reforms in India's financial history. Introduced on 1st July 2017, GST replaced a complex web of central and state taxes with a single, unified indirect tax system.",
          "Whether you are a student learning about taxation, a small shop owner calculating product prices, a freelancer invoicing clients, an e-commerce seller managing listings, or simply a customer wanting to know the real price of a product — understanding GST is essential in everyday financial life.",
          "This GST Calculator by DevCalc helps you instantly calculate GST amount, pre-GST price, and post-GST price with zero manual effort. Simply enter the original price and GST rate, and get accurate results in seconds.",
        ],
      },

      {
        heading: "What is GST? (Goods and Services Tax)",
        paragraphs: [
          "GST stands for Goods and Services Tax. It is a comprehensive, multi-stage, destination-based indirect tax that is levied on every value addition in the supply chain of goods and services across India.",
          "Before GST, India had multiple overlapping taxes such as VAT (Value Added Tax), Service Tax, Central Excise Duty, Entry Tax, Octroi, and several state-level taxes. GST replaced all of these with one unified tax, making the Indian tax system simpler, transparent, and more efficient.",
          "GST is a consumption-based tax — meaning it is charged at the point of consumption, not at the point of origin. This eliminates the cascading effect of taxes (tax on tax) that existed under the old system.",
          "GST in India is administered jointly by the Central Government and State Governments, and is governed by the GST Council.",
        ],
      },

      {
        heading: "Types of GST in India",
        paragraphs: [
          "GST in India is divided into four types based on the nature of the transaction:",
          "1. CGST (Central GST) — Collected by the Central Government on intra-state transactions (sales within the same state). For example, if a seller in Delhi sells to a buyer in Delhi, CGST applies.",
          "2. SGST (State GST) — Collected by the State Government on intra-state transactions. CGST and SGST are always charged together on intra-state sales, each at half the total GST rate.",
          "3. IGST (Integrated GST) — Collected by the Central Government on inter-state transactions (sales between two different states) and on imports. For example, if a seller in Mumbai sells to a buyer in Chennai, IGST applies at the full GST rate.",
          "4. UTGST (Union Territory GST) — Applicable on transactions within Union Territories that do not have their own legislature, such as Chandigarh, Dadra & Nagar Haveli, and Lakshadweep.",
        ],
      },

      {
        heading: "GST Rate Slabs in India",
        paragraphs: [
          "The GST Council has categorised goods and services into five main tax rate slabs based on their nature and necessity:",
          "0% GST — Exempt category. Essential items such as fresh fruits, vegetables, milk, eggs, bread, books, newspapers, and educational services are exempt from GST.",
          "5% GST — Basic necessities and essential goods. Includes packaged food items, edible oils, coal, domestic LPG, medicines, and economy class air travel.",
          "12% GST — Standard goods. Includes processed food, butter, cheese, computers, mobile phones (earlier), and business class air travel.",
          "18% GST — Most common rate. Covers a wide range of goods and services including electronics, capital goods, restaurant services, software, and most manufactured products. This is the most frequently applied GST rate in India.",
          "28% GST — Luxury and demerit goods. Applied on items like luxury cars, tobacco products, aerated drinks, high-end motorcycles, casinos, and betting services. Many 28% items also attract an additional GST Compensation Cess.",
          "Note: GST rates are revised periodically by the GST Council. Always verify the current applicable rate for your specific product or service on the official GST portal (gst.gov.in).",
        ],
      },

      {
        heading: "GST Calculation Formula",
        paragraphs: [
          "There are two common GST calculation scenarios — adding GST to a base price, and extracting GST from an already GST-inclusive price.",
          "Scenario 1 — Adding GST to Original Price (Exclusive GST):",
          "GST Amount = (Original Price × GST Rate) ÷ 100",
          "Final Price (GST Inclusive) = Original Price + GST Amount",
          "Example: Original Price = ₹500, GST Rate = 18% → GST Amount = ₹90 → Final Price = ₹590",
          "Scenario 2 — Extracting GST from GST-Inclusive Price (Reverse GST Calculation):",
          "Original Price (Pre-GST) = GST Inclusive Price ÷ (1 + GST Rate ÷ 100)",
          "GST Amount = GST Inclusive Price − Original Price",
          "Example: GST Inclusive Price = ₹1,180, GST Rate = 18% → Original Price = ₹1,180 ÷ 1.18 = ₹1,000 → GST Amount = ₹180",
          "For CGST and SGST breakdown (intra-state): CGST = GST Amount ÷ 2 | SGST = GST Amount ÷ 2",
          "Example: Total GST = ₹180 → CGST = ₹90 → SGST = ₹90",
        ],
      },

      {
        heading: "GST Calculation Examples",
        paragraphs: [
          "Example 1 — Electronics (18% GST): You purchase a laptop accessory with original price ₹2,000 and GST rate 18%. GST Amount = ₹360. Final Price = ₹2,360. CGST = ₹180, SGST = ₹180 (if intra-state purchase).",
          "Example 2 — Restaurant Bill (5% GST): A restaurant bill comes to ₹800 before tax with GST rate 5%. GST Amount = ₹40. Final Amount = ₹840.",
          "Example 3 — Freelance Service Invoice (18% GST): A freelancer charges ₹10,000 for a project. GST at 18% = ₹1,800. Total invoice amount = ₹11,800.",
          "Example 4 — Reverse Calculation: You see a product priced at ₹2,360 (GST inclusive) with 18% GST. Original price = ₹2,360 ÷ 1.18 = ₹2,000. GST paid = ₹360.",
          "Example 5 — Luxury Item (28% GST): Original price ₹50,000, GST 28%. GST Amount = ₹14,000. Final Price = ₹64,000.",
        ],
      },

      {
        heading: "Who Needs to Pay GST?",
        paragraphs: [
          "GST Registration is mandatory for businesses and individuals whose aggregate annual turnover exceeds the prescribed threshold limit set by the GST Council.",
          "As of 2024, the threshold limits are: ₹40 lakhs per year for businesses dealing in goods (₹20 lakhs for special category states), and ₹20 lakhs per year for businesses providing services (₹10 lakhs for special category states).",
          "Additionally, regardless of turnover, the following must mandatorily register for GST: inter-state suppliers, e-commerce operators and sellers on platforms like Amazon and Flipkart, businesses required to pay GST under reverse charge mechanism, and Input Service Distributors.",
          "Consumers who purchase goods and services do not need to register for GST — the tax is collected by the seller and paid to the government. However, consumers do ultimately bear the cost of GST in the final price they pay.",
        ],
      },

      {
        heading: "Input Tax Credit (ITC) — Avoiding Double Taxation",
        paragraphs: [
          "One of the most powerful features of the GST system is Input Tax Credit (ITC). ITC allows registered businesses to reduce the GST they have already paid on purchases (inputs) from the GST they collect from customers (output tax).",
          "For example: A manufacturer buys raw materials worth ₹10,000 and pays ₹1,800 GST (18%). He sells the finished product for ₹15,000 and collects ₹2,700 GST. With ITC, he only pays ₹2,700 − ₹1,800 = ₹900 to the government — not the full ₹2,700.",
          "ITC prevents the cascading effect of tax on tax, which was a major problem under the old VAT and Service Tax system. This makes GST a more fair and efficient tax system for businesses.",
          "ITC can be claimed by filing GST returns accurately and on time through the GST portal.",
        ],
      },

      {
        heading: "GST Filing and Returns",
        paragraphs: [
          "Every GST-registered business must file GST returns periodically — monthly, quarterly, or annually — depending on their registration type and turnover.",
          "Key GST Return Forms include: GSTR-1 (details of outward supplies — sales), GSTR-3B (monthly summary return and tax payment), GSTR-9 (annual return), and GSTR-4 (for businesses under Composition Scheme).",
          "The Composition Scheme is a simplified tax scheme for small businesses with turnover up to ₹1.5 crore. Under this scheme, businesses pay a fixed lower rate of GST and file returns quarterly instead of monthly.",
          "Late filing of GST returns attracts a late fee of ₹50 per day (₹25 CGST + ₹25 SGST), and interest at 18% per annum on the unpaid tax amount.",
        ],
      },

      {
        heading: "How to Use the DevCalc GST Calculator",
        paragraphs: [
          "Our DevCalc GST Calculator is designed to be simple, fast, and accurate for all types of GST calculations. Here is how to use it:",
          "Step 1 — Enter the Amount: Type the original price or GST-inclusive price of the product or service in the amount field.",
          "Step 2 — Select Calculation Type: Choose whether you want to Add GST (calculate final price from original price) or Remove GST (extract original price from GST-inclusive price).",
          "Step 3 — Select GST Rate: Choose the applicable GST rate from the dropdown — 0%, 5%, 12%, 18%, or 28%. You can also enter a custom rate if needed.",
          "Step 4 — Get Instant Results: The calculator instantly displays the GST Amount, Final Price (GST inclusive), CGST amount, SGST amount, and IGST amount.",
          "Step 5 — Copy or Share: Use the copy button to copy the result, or share it directly for invoice preparation or reference.",
        ],
      },

      {
        heading: "Benefits of Using a GST Calculator",
        paragraphs: [
          "Using a GST calculator like DevCalc offers several practical advantages over manual calculations:",
          "Speed and Accuracy — Manual GST calculations are prone to errors, especially for complex rates or reverse calculations. A GST calculator gives instant, error-free results every time.",
          "Time Saving — Business owners, accountants, and freelancers save significant time when generating invoices or verifying bills using a calculator instead of calculating manually.",
          "Reverse GST Calculation — Extracting the original pre-GST price from an inclusive price is confusing manually. Our calculator handles reverse calculations instantly.",
          "CGST, SGST, IGST Breakdown — Our calculator automatically splits the total GST into CGST and SGST (for intra-state) or shows IGST (for inter-state), making invoice preparation straightforward.",
          "Free and No Login Required — DevCalc GST Calculator is completely free to use with no registration, no login, and no limitations.",
        ],
      },

      {
        heading: "Frequently Asked Questions about GST",
        paragraphs: [
          "Q: What is the full form of GST? → GST stands for Goods and Services Tax.",
          "Q: When was GST introduced in India? → GST was introduced in India on 1st July 2017.",
          "Q: What are the GST rate slabs in India? → 0%, 5%, 12%, 18%, and 28% are the five main GST rate slabs.",
          "Q: How do I calculate GST on a price? → GST Amount = (Price × GST Rate) ÷ 100. Final Price = Original Price + GST Amount.",
          "Q: How do I remove GST from a price? → Original Price = GST Inclusive Price ÷ (1 + GST Rate ÷ 100).",
          "Q: What is the difference between CGST, SGST, and IGST? → CGST and SGST are charged on intra-state transactions (half each). IGST is charged on inter-state transactions at the full rate.",
          "Q: Is GST applicable on all products? → No. Essential items like fresh food, milk, eggs, and books are exempt from GST (0% rate).",
          "Q: What is Input Tax Credit (ITC)? → ITC allows businesses to deduct the GST paid on purchases from the GST collected on sales, avoiding double taxation.",
          "Q: What is the GST threshold limit? → Businesses with annual turnover above ₹40 lakhs (goods) or ₹20 lakhs (services) must register for GST.",
          "Q: Can I use DevCalc GST Calculator for free? → Yes. DevCalc GST Calculator is 100% free with no registration required.",
        ],
      },

      {
        heading: "Conclusion",
        paragraphs: [
          "GST has fundamentally transformed India's indirect tax landscape by replacing a fragmented multi-tax system with a single, unified, transparent tax structure. Understanding how GST works — from rate slabs and CGST/SGST/IGST breakdowns to Input Tax Credit and reverse calculations — is valuable knowledge for every Indian citizen, business owner, student, and professional.",
          "Whether you need to calculate GST for an invoice, verify a bill, understand your tax liability, or simply learn how India's tax system works, the DevCalc GST Calculator makes every calculation instant, accurate, and effortless.",
          "Bookmark DevCalc and use our free GST Calculator, along with our complete suite of financial, mathematical, and utility calculators — all designed to make everyday calculations simpler for everyone in India.",
        ],
      },
    ],
  },
];
