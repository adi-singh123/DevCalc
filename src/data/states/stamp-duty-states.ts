export interface StampDutyStateData {
  slug: string;
  stateName: string;
  stateCode: string;
  // Rates & Charges
  stampDutyMale: string;
  stampDutyFemale: string;
  stampDutyJoint: string;
  registrationCharge: string;
  registrationCap: number | null;
  womenConcession: string;
  specialNotes: string[];
  // Official & Verified Metadata
  lastVerifiedDate: string;
  sourceNote: string;
  sourcePortalUrl: string;
  // Content & SEO
  metaTitle: string;
  metaDescription: string;
  uniqueIntro: string;
  rateExplanation: string;
  circleRateGuide: string;
  faqs: { question: string; answer: string }[];
  relatedStateSlugs: string[];
}

export const STAMP_DUTY_STATES: StampDutyStateData[] = [
  {
    slug: "maharashtra",
    stateName: "Maharashtra",
    stateCode: "MH",
    stampDutyMale: "6% (Mumbai MCGM: 5% base + 1% metro cess), 7% (Pune / Thane / Nagpur), 4% (Municipal Council), 3% (Gram Panchayat)",
    stampDutyFemale: "5% (Mumbai MCGM), 6% (Pune / Thane / Nagpur), 3% (Council), 2% (Gram Panchayat)",
    stampDutyJoint: "6% in Mumbai / 7% in Pune & Thane (Standard rate applies to joint deeds)",
    registrationCharge: "1% of property value (Capped at ₹30,000 for properties above ₹30 Lakhs)",
    registrationCap: 30000,
    womenConcession: "Flat 1 percentage point rebate off the male rate for residential property registered solely in a woman's name",
    specialNotes: [
      "Rate variation by local body: Mumbai (MCGM) is 6% (5% base + 1% metro cess), while Pune, Thane, and Nagpur are 7% (5% base + 1% metro cess + 1% LBT/surcharge).",
      "Registration charge is capped at ₹30,000 for properties valued above ₹30 Lakhs, making high-value real estate transactions proportionally cheaper.",
      "Gift deeds to immediate blood relatives (spouse, children, parents, siblings, grandchildren) attract a flat ₹200 stamp duty, whereas gift deeds to non-family attract 3%.",
      "New in 2026: A penalty of up to ₹1,00,000 applies for insufficient stamp duty payment under the amended Maharashtra Stamp Act rules.",
      "Annual Statement of Rates (ASR / Ready Reckoner) is revised annually every April on igrmaharashtra.gov.in.",
    ],
    lastVerifiedDate: "August 2026",
    sourceNote: "Maharashtra Inspector General of Registration and Controller of Stamps (IGR Maharashtra)",
    sourcePortalUrl: "https://igrmaharashtra.gov.in",
    metaTitle: "Maharashtra Stamp Duty Calculator 2026 — Mumbai & Pune Ready Reckoner Rates | DevCalc",
    metaDescription:
      "Calculate 2026 stamp duty in Maharashtra (Mumbai 6%, Pune/Thane 7%, Rural 3%). Check Ready Reckoner ASR rates, 1% female concession, ₹30k registration cap, and GRAS payment rules.",
    uniqueIntro:
      "Property registration across Maharashtra is governed by the Maharashtra Stamp Act, 1958, where rates are stratified by local municipal body classifications. In Mumbai (MCGM jurisdiction), male buyers pay 6% (5% base + 1% Metro Cess), while Pune, Thane, and Nagpur municipal corporations levy 7% (incorporating Local Body Tax/transport surcharge). Municipal council areas stand at 4%, and rural Gram Panchayat regions are taxed at just 3%.\n\nSole female buyers purchasing residential property receive a statutory 1 percentage point discount across all municipal tiers (e.g. 5% in Mumbai, 6% in Pune, and 2% in rural areas), provided the deed remains solely in the woman's name. A major financial benefit in Maharashtra is the statutory ₹30,000 cap on registration fees for any property valued above ₹30 Lakhs, drastically reducing overhead for mid-to-luxury home buyers.",
    rateExplanation:
      "Stamp duty is charged on whichever is higher: the negotiated Agreement Value or the government Ready Reckoner Rate (ASR). In Mumbai (MCGM), male rate = 6%, female rate = 5%. In Pune/Thane/Nagpur, male rate = 7%, female rate = 6%. In Municipal Councils, male rate = 4%, female rate = 3%. In Gram Panchayats, male rate = 3%, female rate = 2%. Registration is 1% of transaction value up to ₹30 Lakhs and a flat ₹30,000 for any property above ₹30 Lakhs.",
    circleRateGuide:
      "In Maharashtra, benchmark circle rates are designated as 'Ready Reckoner Rates' (ASR — Annual Statement of Rates), updated every financial year by IGR Maharashtra. You can verify zone-wise, survey number, and CTS number rates on the e-ASR portal before initiating GRAS e-challan duty payments.",
    faqs: [
      {
        question: "Why is stamp duty 7% in Pune and Thane but 6% in Mumbai?",
        answer:
          "In Mumbai (MCGM), stamp duty consists of 5% base duty + 1% Metro Cess (total 6%). In Pune (PMC/PCMC), Thane, and Nagpur, an additional 1% Local Body Tax (LBT) / municipal transport surcharge is levied alongside the 1% Metro Cess, bringing the standard male rate to 7%.",
      },
      {
        question: "How does the ₹30,000 registration fee cap work in Maharashtra?",
        answer:
          "For any property transaction valued at ₹30 Lakhs or less, the registration fee is 1% of the property value. For any property exceeding ₹30 Lakhs (e.g. ₹80 Lakhs or ₹3 Crores), the registration fee is legally capped at a maximum of ₹30,000.",
      },
      {
        question: "What is the stamp duty on gift deeds to blood relatives in Maharashtra?",
        answer:
          "Under Maharashtra Stamp Act Section 34, a gift deed executed in favour of a spouse, children, parents, siblings, or grandchildren carries a flat nominal stamp duty of ₹200 (for residential or agricultural property), plus the standard registration charge.",
      },
      {
        question: "What is the 2026 penalty for insufficient stamp duty payment in Maharashtra?",
        answer:
          "Effective 2026, the Maharashtra government enforces stricter audit mechanisms with penalties of up to ₹1,00,000 for under-reporting agreement values or evading proper Ready Reckoner valuation.",
      },
    ],
    relatedStateSlugs: ["karnataka", "delhi"],
  },
  {
    slug: "karnataka",
    stateName: "Karnataka",
    stateCode: "KA",
    stampDutyMale: "5% (> ₹45L) + 10% cess on duty (~5.6% total), 3% (₹20L–₹45L), 2% (< ₹20L)",
    stampDutyFemale: "5% (> ₹45L), 3% (₹20L–₹45L), 2% (< ₹20L) — No female concession in Karnataka",
    stampDutyJoint: "5% (> ₹45L), 3% (₹20L–₹45L), 2% (< ₹20L)",
    registrationCharge: "2% of property value (Doubled from 1% effective 31 August 2025)",
    registrationCap: null,
    womenConcession: "Karnataka does not provide any gender-based stamp duty concession or exemption",
    specialNotes: [
      "Property valuation slabs: 2% for properties under ₹20 Lakhs, 3% for properties between ₹21 Lakhs and ₹45 Lakhs, and 5% base + 10% cess on duty (effective 5.5%–5.6%) for properties above ₹45 Lakhs.",
      "CRITICAL RECENT CHANGE: Registration fee doubled from 1% to 2% effective 31 August 2025 across all property categories.",
      "Cess & Surcharge structure: In BBMP urban limits, an additional 10% cess is calculated on the stamp duty amount (resulting in ~5.5% to 5.6% effective duty).",
      "Gift deeds attract 5% stamp duty for properties valued above ₹45 Lakhs.",
      "All deed drafting, encumbrance certificates, and guideline valuations are executed via the Kaveri 2.0 portal (kaveri.karnataka.gov.in).",
    ],
    lastVerifiedDate: "August 2026",
    sourceNote: "Department of Stamps and Registration, Government of Karnataka (Kaveri 2.0)",
    sourcePortalUrl: "https://kaveri.karnataka.gov.in",
    metaTitle: "Karnataka Stamp Duty Calculator 2026 — Bangalore 2% Registration & Slabs | DevCalc",
    metaDescription:
      "Calculate 2026 Karnataka stamp duty (Bangalore BBMP slabs: 2%, 3%, 5.6%). Check Kaveri 2.0 Guidance values, recent 2% registration hike, and no-women-rebate rules.",
    uniqueIntro:
      "Navigating property registration in Karnataka — spanning Bengaluru's BBMP zones, Mysuru, and Mangaluru — requires understanding the state's progressive value slabs administered through the Department of Stamps and Registration (Kaveri 2.0). Properties under ₹20 Lakhs attract 2% stamp duty, properties between ₹20 Lakhs and ₹45 Lakhs pay 3%, and properties above ₹45 Lakhs pay 5% base stamp duty plus an urban infrastructure cess (yielding an effective rate of ~5.6%).\n\nA critical update for all Karnataka real estate buyers is the statutory **increase in registration charges from 1% to 2% (effective 31 August 2025)**. Furthermore, unlike Delhi or Maharashtra, Karnataka offers no gender-based concessions for women buyers — rates apply identically across all owners.",
    rateExplanation:
      "In urban Karnataka (BBMP limits), standard apartments above ₹45 Lakhs attract 5% base stamp duty + 10% cess on duty (~0.5%–0.6% addition = 5.6% total) plus the updated 2% registration fee, for a combined statutory out-of-pocket cost of ~7.6%. Affordable units under ₹20 Lakhs pay 2% duty + 2% registration.",
    circleRateGuide:
      "Official valuation benchmarks in Karnataka are known as 'Guidance Values'. Published and revised on the Kaveri 2.0 portal, guidance values index street-wise, apartment-wise, and floor-wise rates, with mandatory valuation loadings for amenities such as clubhouses, high-speed lifts, and covered parking.",
    faqs: [
      {
        question: "When did Karnataka increase the property registration fee from 1% to 2%?",
        answer:
          "The Government of Karnataka revised its registration fee schedule effective 31 August 2025, doubling the statutory registration fee from 1% to 2% of the property guidance value for all standard conveyance deeds.",
      },
      {
        question: "Does Karnataka provide any stamp duty discount for women buyers?",
        answer:
          "No. Multiple state government orders confirm that Karnataka does not provide any stamp duty or registration concessions for female home buyers. The rate is identical for male, female, and joint buyers.",
      },
      {
        question: "How are the Karnataka stamp duty slabs (2%, 3%, 5%) structured?",
        answer:
          "Properties priced below ₹20 Lakhs pay 2% stamp duty. Properties priced between ₹20 Lakhs and ₹45 Lakhs pay 3% stamp duty. Properties priced above ₹45 Lakhs pay 5% base stamp duty plus applicable municipal cess (~5.6% total).",
      },
      {
        question: "How do I check Guidance Value and pay stamp duty on Kaveri 2.0?",
        answer:
          "Visit kaveri.karnataka.gov.in, search for your district, taluk, and village/ward name to view the latest Guidance Value. You can book an SRO appointment and pay e-stamp duty online via integrated payment gateways.",
      },
    ],
    relatedStateSlugs: ["maharashtra", "tamil-nadu"],
  },
  {
    slug: "delhi",
    stateName: "Delhi",
    stateCode: "DL",
    stampDutyMale: "6% of property value (Urban / MCD / NDMC)",
    stampDutyFemale: "4% of property value (2% female concession)",
    stampDutyJoint: "5% (Joint Male + Female ownership)",
    registrationCharge: "1% of total property value + ₹100 flat pasting fee",
    registrationCap: null,
    womenConcession: "2% substantial concession for sole female ownership (4% vs 6% for males)",
    specialNotes: [
      "Base rates are 6% for males, 4% for females, and 5% for joint ownership.",
      "⚠️ MCD Transfer Duty Notice: Properties in municipal areas above ₹25 Lakhs may attract an additional 1% MCD transfer duty depending on local municipal corporation notification, bringing the effective rate to 7% male / 5% female / 6% joint.",
      "Registration charge is 1% flat plus a ₹100 statutory pasting fee.",
      "Delhi categorizes residential areas into 8 locality tiers (Category A+ through Category H) with distinct minimum circle rates per sq. metre.",
      "E-stamping is handled via Stock Holding Corporation (SHCIL) and NGDRS Delhi (revenue.delhi.gov.in).",
    ],
    lastVerifiedDate: "August 2026",
    sourceNote: "Revenue Department, Government of NCT of Delhi / IGRS Delhi",
    sourcePortalUrl: "https://revenue.delhi.gov.in",
    metaTitle: "Delhi Stamp Duty Calculator 2026 — Circle Rates & MCD Transfer Duty | DevCalc",
    metaDescription:
      "Calculate 2026 Delhi stamp duty (Male 6%, Female 4%, Joint 5%). Check Category A-H Circle Rates, 1% registration + ₹100 fee, and MCD transfer duty rules.",
    uniqueIntro:
      "In the National Capital Territory of Delhi, property transfers are regulated by the Indian Stamp (Delhi Amendment) Act under the Revenue Department. The state offers a structured, gender-progressive schedule: 6% for sole male buyers, 4% for sole female buyers (a 2% concession), and 5% for joint male-female co-owners.\n\nProperties in Delhi are evaluated against an 8-tier locality classification (Category A+ down to Category H). In addition to the base stamp duty, registration charges are 1% plus a statutory ₹100 pasting fee. Buyers should also verify whether the 1% MCD Transfer Duty applies to their specific ward for properties valued above ₹25 Lakhs.",
    rateExplanation:
      "Male buyers in Delhi pay 6% stamp duty + 1% registration fee (+ ₹100 pasting fee) = 7% total. Female buyers pay 4% stamp duty + 1% registration fee = 5% total. Joint owners (Male + Female) pay 5% stamp duty + 1% registration = 6% total. If the 1% MCD transfer duty is applicable for properties above ₹25L, effective rates become 7% / 5% / 6% respectively.",
    circleRateGuide:
      "Delhi classifies all registered colonies into Categories A through H. Category A includes premium neighborhoods like Golf Links and Vasant Vihar with circle rates exceeding ₹7.74 Lakhs per sq. metre, scaling down to Category H (approx. ₹23,000/sq.m). Structural age multipliers apply on built-up areas.",
    faqs: [
      {
        question: "What is the female buyer stamp duty concession in Delhi?",
        answer:
          "In Delhi, female buyers registering residential property solely in their name pay 4% stamp duty instead of 6%, saving 2% of the total property valuation. On a ₹1 Crore flat, this represents a direct saving of ₹2,00,000.",
      },
      {
        question: "What is the additional 1% MCD Transfer Duty for properties above ₹25 Lakh?",
        answer:
          "The Municipal Corporation of Delhi (MCD) levies a 1% transfer duty on property transactions exceeding ₹25 Lakhs in select municipal wards, which can raise effective stamp duties to 7% for males, 5% for females, and 6% for joint ownership.",
      },
      {
        question: "What are the registration fees and pasting fees in Delhi?",
        answer:
          "Registration is charged at 1% of the higher value between the sale consideration and circle rate valuation, plus a mandatory flat fee of ₹100 as deed pasting/processing charges.",
      },
      {
        question: "How do I purchase e-stamps and register deeds in Delhi?",
        answer:
          "E-stamps in Delhi are issued through Stock Holding Corporation of India (SHCIL) or approved bank counters. Once the e-stamp certificate and 1% registration receipt are generated, slot booking is completed at revenue.delhi.gov.in.",
      },
    ],
    relatedStateSlugs: ["uttar-pradesh", "maharashtra"],
  },
  {
    slug: "uttar-pradesh",
    stateName: "Uttar Pradesh",
    stateCode: "UP",
    stampDutyMale: "7% of property valuation",
    stampDutyFemale: "6% of property valuation (Sole ownership)",
    stampDutyJoint: "6.5% of property valuation (Joint Male + Female)",
    registrationCharge: "1% of total property valuation (Flat, all categories)",
    registrationCap: null,
    womenConcession: "1 percentage point concession (6% vs 7%) for sole female owners; 6.5% for joint ownership",
    specialNotes: [
      "Standard rate table: 7% for male buyers, 6% for sole female buyers, and 6.5% for joint male-female co-ownership.",
      "Gift deeds between blood relatives: Flat ₹5,000 stamp duty + ₹1,000 processing fee, regardless of property valuation (reconfirmed under Jan 2026 UP Cabinet clarification).",
      "Registration charge is flat 1% across all categories with no upper cap.",
      "Valuation is derived strictly from District Magistrate (DM) Circle Rates across Noida (UP-16), Greater Noida, Ghaziabad, Lucknow, Kanpur, and Varanasi.",
      "Deed registration and appointment tokens are managed via IGRS UP (igrsup.gov.in).",
    ],
    lastVerifiedDate: "August 2026",
    sourceNote: "Integrated Grievance Redressal System (IGRS UP) / Stamp & Registration Dept, UP",
    sourcePortalUrl: "https://igrsup.gov.in",
    metaTitle: "UP Stamp Duty Calculator 2026 — Noida, Lucknow & Ghaziabad Rates | DevCalc",
    metaDescription:
      "Calculate 2026 UP stamp duty (Male 7%, Female 6%, Joint 6.5%). Check DM Circle Rates, flat 1% registration fee, and ₹5,000 blood-relative gift deed rules.",
    uniqueIntro:
      "Property conveyances in Uttar Pradesh — covering fast-growing NCR corridors like Noida and Ghaziabad as well as Lucknow, Kanpur, and Varanasi — are governed under the Indian Stamp Act as amended by the Government of UP. The baseline stamp duty is 7% for male buyers, 6% for sole female buyers, and 6.5% for joint ownership where a woman is a co-purchaser.\n\nA standout provision in Uttar Pradesh is the concessional **blood-relative gift deed rule**, which permits property transfers between immediate family members for a flat ₹5,000 stamp duty and ₹1,000 processing fee regardless of property market value. Property deeds are registered at a flat 1% registration fee on IGRS UP (igrsup.gov.in).",
    rateExplanation:
      "In urban UP, male buyers pay 7% stamp duty + 1% registration = 8% total. Sole female buyers pay 6% stamp duty + 1% registration = 7% total. Joint male-female owners pay 6.5% stamp duty + 1% registration = 7.5% total. Duty is calculated on whichever is higher between the actual agreement value and the DM Circle Rate.",
    circleRateGuide:
      "DM Circle Rates in UP are determined by the District Magistrate's office. Rates are indexed by land category, sector road width, and construction type, with additional 5-10% valuation loadings for corner plots and park-facing properties in Noida and Greater Noida.",
    faqs: [
      {
        question: "What are the stamp duty rates for male, female, and joint buyers in Noida and UP?",
        answer:
          "In Uttar Pradesh (including Noida and Ghaziabad), male buyers pay 7% stamp duty, sole female buyers pay 6% (a 1% concession), and joint male-female co-owners pay 6.5%. The registration fee is 1% across all categories.",
      },
      {
        question: "What is the ₹5,000 gift deed rule in Uttar Pradesh?",
        answer:
          "The Government of Uttar Pradesh permits gift deeds of residential, commercial, or agricultural property between blood relatives (parents, children, spouse, siblings, grandchildren) at a flat stamp duty of ₹5,000 plus ₹1,000 processing charge, rather than paying full ad-valorem percentages.",
      },
      {
        question: "How is property valuation calculated on IGRSUP?",
        answer:
          "IGRS UP (igrsup.gov.in) audits the property against the local DM Circle Rate based on plot area, covered built-up area, floor level, and locality road width. Stamp duty is levied on the higher of the agreement price and the DM valuation.",
      },
      {
        question: "Are there extra registration charges for leasehold transfers in Noida / Greater Noida?",
        answer:
          "Yes. For authority leasehold properties in Noida and Greater Noida, sub-registrar stamp duty (7%/6%/6.5%) and 1% registration are paid first, followed by transfer charges (TM) payable directly to the Noida/Greater Noida Authority for mutating the lease deed.",
      },
    ],
    relatedStateSlugs: ["delhi", "maharashtra"],
  },
  {
    slug: "tamil-nadu",
    stateName: "Tamil Nadu",
    stateCode: "TN",
    stampDutyMale: "7% of property market value (or Guideline Value)",
    stampDutyFemale: "7% (No gender discount on stamp duty)",
    stampDutyJoint: "7% (Standard rate across all buyers)",
    registrationCharge: "4% of property value (Standard sale deed; 3% for women on properties ≤ ₹10 Lakhs)",
    registrationCap: null,
    womenConcession: "Registration fee reduced from 4% to 3% for property valued up to ₹10 Lakhs (TN G.O. Ms. No. 77 dated 29 March 2025)",
    specialNotes: [
      "Tamil Nadu has one of India's highest total property transaction costs: 7% stamp duty + 4% registration fee = 11% combined statutory levy.",
      "Women's concession is strictly on registration: reduced from 4% to 3% for properties up to ₹10 Lakhs under G.O. Ms. No. 77 (effective 1 April 2025). No gender discount exists on the 7% stamp duty component.",
      "Family settlement / partition / release deeds: Concessional 1% stamp duty (capped at ₹40,000) + 1% registration fee (capped at ₹10,000).",
      "Gift deed to non-family: 7% stamp duty + 2% registration fee.",
      "First sale of new apartments from builders follows a composite agreement schedule with a 2% registration rate.",
      "All guideline values and encumbrance certificates are verified on TN REGINET (tnreginet.gov.in).",
    ],
    lastVerifiedDate: "August 2026",
    sourceNote: "Commercial Taxes and Registration Department, Government of Tamil Nadu (TN REGINET)",
    sourcePortalUrl: "https://tnreginet.gov.in",
    metaTitle: "Tamil Nadu Stamp Duty Calculator 2026 — Chennai 11% Registration & Guideline Rates | DevCalc",
    metaDescription:
      "Calculate 2026 Tamil Nadu stamp duty & registration (7% duty + 4% registration = 11% total). Check TN REGINET Guideline values, G.O. 77 women rebate, and family settlement caps.",
    uniqueIntro:
      "Acquiring real estate in Tamil Nadu — across Chennai, Coimbatore, Madurai, and Tiruchirappalli — involves navigating an 11% combined statutory transaction levy under the Tamil Nadu Stamp Act and Registration Rules. The state charges a flat 7% stamp duty and a 4% registration fee on standard conveyance sale deeds without an upper ceiling.\n\nUnder Tamil Nadu Government Order **G.O. Ms. No. 77 (effective 1 April 2025)**, female buyers benefit from a targeted concession on registration charges: the registration fee drops from 4% to 3% for properties valued up to ₹10 Lakhs (the 7% stamp duty remains unchanged). Family settlements and partitions enjoy a concessional 1% duty (capped at ₹40,000) and 1% registration (capped at ₹10,000). All deeds are audited on TN REGINET (tnreginet.gov.in).",
    rateExplanation:
      "For standard property sales in Tamil Nadu, statutory fees are: 7% stamp duty + 4% registration fee = 11% total out-of-pocket cost. For properties valued up to ₹10 Lakhs registered to female owners, the fee is 7% duty + 3% registration = 10% total. Family partitions pay 1% duty (max ₹40,000) + 1% registration (max ₹10,000).",
    circleRateGuide:
      "Official valuation rates in Tamil Nadu are designated as 'Guideline Values', indexed by survey numbers (SF Number), street names, and door numbers across Chennai metropolitan wards and district revenue villages on the TN REGINET portal.",
    faqs: [
      {
        question: "Why is the combined registration cost 11% in Tamil Nadu?",
        answer:
          "Tamil Nadu combines a 7% stamp duty with a 4% registration charge on standard conveyance deeds. Because registration has no upper rupee cap on regular sales, the total statutory addition is 11% of the higher of the market value or guideline value.",
      },
      {
        question: "What is the women's property concession under Tamil Nadu G.O. Ms. No. 77?",
        answer:
          "Under G.O. Ms. No. 77 (effective 1 April 2025), the Government of Tamil Nadu reduced the registration fee from 4% to 3% for properties valued up to ₹10 Lakhs registered in a woman's name. The 7% stamp duty rate remains unchanged.",
      },
      {
        question: "What are the charges for family settlement and partition deeds in Tamil Nadu?",
        answer:
          "For settlement or partition deeds among family members, Tamil Nadu charges a concessional 1% stamp duty (capped at ₹40,000) plus a 1% registration fee (capped at ₹10,000), dramatically reducing costs compared to standard 11% sale deeds.",
      },
      {
        question: "How do I check the official Guideline Value on TN REGINET?",
        answer:
          "Visit tnreginet.gov.in, choose 'Guideline Value', and input your Zone, SRO office, Village, and Survey or Street Number to look up the exact government benchmark rate per square foot or square metre.",
      },
    ],
    relatedStateSlugs: ["karnataka", "maharashtra"],
  },
];

export function getStampDutyStateBySlug(slug: string): StampDutyStateData | undefined {
  return STAMP_DUTY_STATES.find((s) => s.slug === slug);
}