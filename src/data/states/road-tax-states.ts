export interface RoadTaxStateData {
  slug: string;
  stateName: string;
  stateCode: string;
  // Rates & Slabs
  petrolCarRate: string;
  dieselCarRate: string;
  cngCarRate: string;
  twoWheelerRate: string;
  evStatus: string;
  calculationBasis: "post-gst" | "pre-gst";
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
  rtoProcessGuide: string;
  faqs: { question: string; answer: string }[];
  relatedStateSlugs: string[];
}

export const ROAD_TAX_STATES: RoadTaxStateData[] = [
  {
    slug: "maharashtra",
    stateName: "Maharashtra",
    stateCode: "MH",
    petrolCarRate: "9% – 11% (< ₹10L), 12% (₹10L–₹20L), 13% (> ₹20L)",
    dieselCarRate: "11% – 13% (< ₹10L), 14% (₹10L–₹20L), 15% (> ₹20L) — 2% higher than petrol",
    cngCarRate: "7% (< ₹10L), 8% (₹10L–₹20L), 9% (> ₹20L)",
    twoWheelerRate: "8% – 10% (< ₹1L), 11% – 12% (> ₹1L)",
    evStatus: "100% Tax Exemption for qualifying electric vehicles under Maharashtra EV Policy (verify local RTO for updated luxury EV guidelines)",
    calculationBasis: "post-gst",
    specialNotes: [
      "Diesel vehicles attract a 2% surcharge across all price brackets due to higher emission levies.",
      "Corporate / company-registered vehicles attract double the standard individual road tax rate in Maharashtra.",
      "BH (Bharat) Series registration is supported for eligible private and public sector employees with offices in 4+ states.",
      "Lifetime Tax (LTT) is valid for 15 years from original date of registration.",
    ],
    lastVerifiedDate: "August 2026",
    sourceNote: "Maharashtra Motor Vehicles Department (Transport Commissionerate Maharashtra)",
    sourcePortalUrl: "https://transport.maharashtra.gov.in",
    metaTitle: "Maharashtra Road Tax Calculator 2026 — MH RTO Car & Bike Tax Slabs | DevCalc",
    metaDescription:
      "Calculate 2026 Maharashtra Road Tax (MH RTO) for cars, bikes & EVs. Check Petrol 9-11%, Diesel 11-13%, 2% diesel surcharge, and EV policy rules.",
    uniqueIntro:
      "Registering a new passenger car or two-wheeler in Maharashtra (across MH-01 Mumbai, MH-12 Pune, MH-04 Thane, and 50+ regional transport offices) is governed by the Maharashtra Motor Vehicles Tax Act. Private petrol cars pay tiered slabs of 9% to 11% for vehicles priced under ₹10 Lakhs, 12% for vehicles between ₹10L and ₹20L, and 13% for luxury cars above ₹20 Lakhs.\n\nIn line with state emissions policies, diesel cars in Maharashtra carry a flat 2% surcharge across every slab (11% to 15%), making diesel vehicles noticeably more expensive on-road. Battery electric vehicles (EVs) have historically enjoyed full exemptions under the Maharashtra Electric Vehicle Policy.",
    rateExplanation:
      "Road tax in Maharashtra is a 15-year One-Time Lifetime Tax (LTT). For a ₹10 Lakh petrol car, the road tax is 11% = ₹1,10,000, plus standard fixed RTO fees (registration fee of ₹600, HSRP number plates, Fastag, and smart card fee). Company-owned vehicles pay double the tax rate (22% to 26%).",
    rtoProcessGuide:
      "Automobile dealerships in Maharashtra handle registration via the Vahan 4.0 portal. Once the dealer enters the chassis number and pays the MH RTO tax online, vehicle owners receive their registration number via SMS and smart card RC by speed post.",
    faqs: [
      {
        question: "Why is road tax higher for diesel cars in Maharashtra?",
        answer:
          "The Government of Maharashtra levies a 2% additional motor vehicle tax on diesel cars across all price brackets (11-13% up to ₹10L, 14% for ₹10L-₹20L, and 15% above ₹20L) to discourage vehicular particulate emissions.",
      },
      {
        question: "What is the EV road tax policy in Maharashtra?",
        answer:
          "Under the Maharashtra Electric Vehicle Policy, battery electric vehicles receive full exemptions from road tax and registration charges, though buyers of premium electric luxury cars should verify current circulars with transport.maharashtra.gov.in.",
      },
      {
        question: "What is the corporate vehicle road tax rule in Maharashtra?",
        answer:
          "If a car is registered in the name of a company, corporate entity, or partnership firm rather than an individual, Maharashtra law mandates double the standard road tax rate.",
      },
      {
        question: "How is BH Series road tax calculated for Maharashtra residents?",
        answer:
          "Under Bharat (BH) Series rules, road tax is paid in 2-year increments rather than a 15-year lump sum (e.g. 8% / 15 × 2 × 1.25 for vehicles under ₹10L), providing significant upfront savings.",
      },
    ],
    relatedStateSlugs: ["karnataka", "delhi"],
  },
  {
    slug: "karnataka",
    stateName: "Karnataka",
    stateCode: "KA",
    petrolCarRate: "13% (< ₹5L), 14% (₹5L–₹10L), 17% (₹10L–₹20L), 18% (> ₹20L)",
    dieselCarRate: "13% (< ₹5L), 14% (₹5L–₹10L), 17% (₹10L–₹20L), 18% (> ₹20L)",
    cngCarRate: "13% (< ₹5L), 14% (₹5L–₹10L), 17% (₹10L–₹20L), 18% (> ₹20L)",
    twoWheelerRate: "10% (< ₹50,000), 12% – 18% (> ₹50,000) of invoice value",
    evStatus: "5% Motor Vehicle Tax (Karnataka transitioned from 0% to a tiered 5% EV tax for electric cars)",
    calculationBasis: "post-gst",
    specialNotes: [
      "Karnataka levies some of the highest motor vehicle road taxes in India, reaching 18% for cars above ₹20 Lakhs and up to 18% for standard two-wheelers.",
      "An additional 11% Infrastructure Cess is levied on the calculated Motor Vehicle Tax amount (10% Infrastructure Cess + 1% Urban Transport Cess).",
      "EV Taxation Shift: Karnataka has moved away from full EV exemption and charges a 5% road tax on electric cars.",
      "Lifetime Tax (LTT) is payable for 15 years at initial vehicle registration across all KA RTOs (KA-01 to KA-55).",
    ],
    lastVerifiedDate: "August 2026",
    sourceNote: "Transport Department, Government of Karnataka (transport.karnataka.gov.in)",
    sourcePortalUrl: "https://karnataka.gov.in",
    metaTitle: "Karnataka Road Tax Calculator 2026 — KA RTO Bangalore Vehicle Tax Slabs | DevCalc",
    metaDescription:
      "Calculate 2026 Karnataka Road Tax (KA RTO) for cars & bikes in Bangalore. Check 13-18% slabs, 11% Infrastructure Cess, and the 5% EV tax rate.",
    uniqueIntro:
      "Registering a new vehicle in Karnataka — particularly in high-volume transport circles across Bengaluru (KA-01 Koramangala, KA-03 Indiranagar, KA-05 Jayanagar, KA-51 Electronic City) — entails some of the highest motor vehicle tax slabs in India under the Karnataka Motor Vehicles Taxation Act. Cars priced above ₹20 Lakhs attract an 18% base road tax, which is then augmented by an 11% Infrastructure and Urban Transport Cess on the calculated tax amount.\n\nCrucially, Karnataka has transitioned from a full EV exemption to a **5% road tax on electric cars**. Two-wheelers priced over ₹50,000 face a 12% to 18% lifetime tax schedule.",
    rateExplanation:
      "Karnataka's road tax structure for private cars: 13% for vehicles under ₹5 Lakhs, 14% for ₹5L to ₹10L, 17% for ₹10L to ₹20L, and 18% for vehicles above ₹20 Lakhs. Crucially, a mandatory 11% cess is added on top of the calculated road tax. For electric vehicles, a 5% road tax rate applies.",
    rtoProcessGuide:
      "Vehicle tax payments and hypothecation endorsements are executed digitally through Karnataka Transport's integrated Vahan portal, with automated validation of vehicle insurance and chassis verification.",
    faqs: [
      {
        question: "Why is road tax significantly higher in Bangalore and Karnataka?",
        answer:
          "Karnataka has high statutory tax brackets (up to 18%) plus a mandatory 11% Infrastructure & Urban Transport Cess levied on top of the calculated tax, designed to fund state highway and urban transit infrastructure.",
      },
      {
        question: "What is the Electric Vehicle (EV) road tax rate in Karnataka?",
        answer:
          "Karnataka has moved from full exemption to a tiered 5% motor vehicle road tax on electric cars, making it one of the few states in India with a dedicated EV tax rate.",
      },
      {
        question: "How is the 11% Infrastructure Cess calculated in Karnataka?",
        answer:
          "The 11% cess is calculated on the Motor Vehicle Tax amount (not on the car price). For instance, if your road tax comes to ₹1,00,000, the 11% cess adds ₹11,000, making the total payable RTO tax ₹1,11,000.",
      },
      {
        question: "Can vehicles from other states drive in Karnataka without paying KA road tax?",
        answer:
          "Under the Karnataka Motor Vehicles Taxation Act, non-Karnataka vehicles can operate for up to 11 months without paying local road tax. For permanent relocation exceeding 11 months, owners must obtain a NOC and pay pro-rata lifetime tax in Karnataka.",
      },
    ],
    relatedStateSlugs: ["maharashtra", "tamil-nadu"],
  },
  {
    slug: "delhi",
    stateName: "Delhi",
    stateCode: "DL",
    petrolCarRate: "4% (< ₹6L), 7% (₹6L–₹15L), 10% – 12.5% (> ₹15L)",
    dieselCarRate: "5% (< ₹6L), 8.75% (₹6L–₹15L), 12.5% (> ₹15L)",
    cngCarRate: "3.5% (< ₹6L), 6% (₹6L–₹15L), 9% (> ₹15L) — cleaner fuel concession",
    twoWheelerRate: "4% (< ₹1L), 6% (> ₹1L)",
    evStatus: "100% Full Exemption for Electric Vehicles up to ₹20 Lakhs under Delhi EV Policy",
    calculationBasis: "post-gst",
    specialNotes: [
      "Delhi has some of the lowest road tax slabs in North India for budget and mid-range petrol and CNG vehicles.",
      "CNG vehicles receive a 0.5% to 1% tax concession compared to petrol models.",
      "Complete road tax and registration fee waiver for Electric Vehicles (EVs) up to ₹20 Lakhs.",
      "10-year diesel and 15-year petrol vehicle age restriction strictly enforced per NGT and CAQM directives.",
    ],
    lastVerifiedDate: "August 2026",
    sourceNote: "Transport Department, Government of NCT of Delhi",
    sourcePortalUrl: "https://transport.delhi.gov.in",
    metaTitle: "Delhi Road Tax Calculator 2026 — DL RTO Car & Bike Road Tax Slabs | DevCalc",
    metaDescription:
      "Calculate 2026 Delhi Road Tax (DL RTO) for cars, bikes & EVs. Check Petrol 4-10%, Diesel 5-12.5%, CNG discounts, and 100% EV exemption.",
    uniqueIntro:
      "Registering a motor vehicle in the National Capital Territory of Delhi (DL-01 to DL-13 RTO zones) features competitive tax rates under the Delhi Motor Vehicles Taxation Act. Petrol cars under ₹6 Lakhs attract just 4% road tax, cars between ₹6L and ₹15L pay 7%, and premium cars above ₹15L pay 10% to 12.5%.\n\nFactory-fitted CNG passenger cars enjoy discounted slabs (3.5% to 9%), while battery electric vehicles (EVs) up to ₹20 Lakhs are completely exempted from road tax and registration fees. Note that all diesel vehicles registered in Delhi have a maximum legal operational validity of 10 years (versus 15 years for petrol) under NGT mandates.",
    rateExplanation:
      "Delhi's road tax for petrol cars is 4% (< ₹6L), 7% (₹6L–₹15L), and 10-12.5% (> ₹15L). For diesel cars, rates are 5% (< ₹6L), 8.75% (₹6L–₹15L), and 12.5% (> ₹15L). Two-wheelers attract 4% for bikes under ₹1 Lakh and 6% for premium motorcycles. Fixed fees include ₹600 registration charge, HSRP plates, and ₹1,500 hypothecation fee if financed.",
    rtoProcessGuide:
      "All Delhi RTO services operate completely online under the 'Faceless RTO Services' initiative, allowing dealer-assisted digital registration and doorstep delivery of Smart Card RCs.",
    faqs: [
      {
        question: "How does Delhi calculate road tax on CNG vehicles?",
        answer:
          "Delhi provides a concession for factory-fitted CNG vehicles: 3.5% for cars priced up to ₹6 Lakhs, 6% for cars between ₹6L and ₹15L, and 9% for cars above ₹15L.",
      },
      {
        question: "Are Electric Vehicles 100% exempt from road tax in Delhi?",
        answer:
          "Yes. Under the comprehensive Delhi EV Policy, battery electric vehicles priced up to ₹20 Lakhs have zero road tax and zero registration charges.",
      },
      {
        question: "What is the 10-year diesel vehicle rule in Delhi?",
        answer:
          "As per orders from the National Green Tribunal (NGT) and the Supreme Court of India, no diesel vehicle older than 10 years is permitted to ply on Delhi NCR roads.",
      },
      {
        question: "What are the fixed RTO charges in Delhi beyond road tax?",
        answer:
          "Beyond road tax, standard one-time fees include ₹600 registration charge, High Security Registration Plate (HSRP) fee (approx. ₹250–₹400), Fastag issuance (₹500), and ₹1,500 hypothecation fee if financed.",
      },
    ],
    relatedStateSlugs: ["uttar-pradesh", "maharashtra"],
  },
  {
    slug: "uttar-pradesh",
    stateName: "Uttar Pradesh",
    stateCode: "UP",
    petrolCarRate: "Flat 8% (< ₹10L), 10% (> ₹10L)",
    dieselCarRate: "Flat 8% (< ₹10L), 10% (> ₹10L)",
    cngCarRate: "Flat 8% (< ₹10L), 10% (> ₹10L)",
    twoWheelerRate: "6% – 8% based on price category",
    evStatus: "100% Full Tax Exemption for Electric Vehicles under UP Electric Vehicle Policy",
    calculationBasis: "post-gst",
    specialNotes: [
      "Uttar Pradesh uses a clean, predictable two-tier slab system: flat 8% for vehicles under ₹10 Lakhs and 10% for vehicles above ₹10 Lakhs.",
      "Covers major transport circles including Noida (UP-16), Ghaziabad (UP-14), Lucknow (UP-32), Kanpur (UP-78), and Varanasi (UP-65).",
      "EV tax exemptions are consistently available across all UP RTOs.",
      "Lifetime Tax (LTT) is valid for 15 years from date of registration.",
    ],
    lastVerifiedDate: "August 2026",
    sourceNote: "Transport Department, Government of Uttar Pradesh (uptransport.upsdc.gov.in)",
    sourcePortalUrl: "https://igrsup.gov.in",
    metaTitle: "UP Road Tax Calculator 2026 — Uttar Pradesh RTO Vehicle Tax Slabs | DevCalc",
    metaDescription:
      "Calculate 2026 Uttar Pradesh Road Tax (UP RTO) for cars & bikes. Check flat 8% and 10% slabs for Noida, Ghaziabad, Lucknow, and 100% EV exemption.",
    uniqueIntro:
      "Vehicle registration across Uttar Pradesh — spanning major NCR hubs like Noida (UP-16) and Ghaziabad (UP-14) to Lucknow (UP-32) and Kanpur (UP-78) — is regulated under the Uttar Pradesh Motor Vehicles Taxation Act. The state provides a simple, predictable two-tier percentage model for personal motor cars: an 8% road tax on vehicles priced up to ₹10 Lakhs, and 10% on vehicles exceeding ₹10 Lakhs.\n\nTwo-wheelers are taxed at 6% to 8%. Electric vehicles (EVs) registered in Uttar Pradesh enjoy a 100% road tax and registration fee waiver under the Uttar Pradesh Electric Vehicle Manufacturing and Mobility Policy.",
    rateExplanation:
      "For individual vehicle owners in UP, road tax is a 15-year lifetime levy. A car costing ₹8 Lakhs pays 8% = ₹64,000, while a car costing ₹14 Lakhs pays 10% = ₹1,40,000. Unlike Delhi or Maharashtra, UP maintains uniform percentage slabs across petrol, diesel, and CNG personal cars.",
    rtoProcessGuide:
      "Dealers across UP issue registration numbers digitally through the centralized Vahan 4.0 portal upon online tax collection and insurance verification.",
    faqs: [
      {
        question: "What are the road tax slabs for cars in Noida and Ghaziabad?",
        answer:
          "In Noida (UP-16) and Ghaziabad (UP-14), private cars priced under ₹10 Lakhs attract 8% road tax, while cars priced above ₹10 Lakhs attract 10% road tax on the ex-showroom price.",
      },
      {
        question: "Does Uttar Pradesh charge extra road tax on diesel vehicles?",
        answer:
          "No. Unlike Maharashtra or Delhi, Uttar Pradesh charges the same baseline percentage (8% under ₹10L, 10% above ₹10L) regardless of whether the car is petrol, diesel, or CNG.",
      },
      {
        question: "What are the road tax benefits for Electric Vehicles in Uttar Pradesh?",
        answer:
          "Under the UP Electric Vehicle Policy, the state provides a 100% exemption on road tax and registration charges for all qualifying EVs purchased and registered within Uttar Pradesh.",
      },
      {
        question: "Can UP-registered vehicles drive in Delhi NCR without restriction?",
        answer:
          "Yes, UP-16 (Noida) and UP-14 (Ghaziabad) registered vehicles can travel freely in Delhi NCR, subject to compliance with the 10-year diesel and 15-year petrol age caps.",
      },
    ],
    relatedStateSlugs: ["delhi", "maharashtra"],
  },
  {
    slug: "tamil-nadu",
    stateName: "Tamil Nadu",
    stateCode: "TN",
    petrolCarRate: "10% (< ₹10L), 15% (> ₹10L) [or 12% / 15% / 18% progressive slabs]",
    dieselCarRate: "10% (< ₹10L), 15% (> ₹10L) [or 12% / 15% / 18% progressive slabs]",
    cngCarRate: "10% (< ₹10L), 15% (> ₹10L)",
    twoWheelerRate: "8% flat (< ₹1L), 10% – 12% (> ₹1L)",
    evStatus: "100% Tax Exemption policy window active for electric vehicles registered through 31 Dec 2027 (standard standing rate is 5% <10L / 7.5% >10L)",
    calculationBasis: "post-gst",
    specialNotes: [
      "Tamil Nadu taxes private vehicles on a 15-year Life Time Tax (LTT) system across TN RTO circles (TN-01 to TN-99).",
      "⚠️ EV Policy Highlight: Tamil Nadu has extended a 100% road tax exemption for all battery electric vehicles registered between 1 January 2026 and 31 December 2027 (otherwise standard reduced rates of 5% < ₹10L and 7.5% > ₹10L apply).",
      "Green Tax: Vehicles older than 15 years attract a green tax of ₹2,000 for private vehicles and ₹4,000 for commercial vehicles at fitness renewal.",
      "Two-wheelers attract 8% flat (or tiered 10-12% for premium motorcycles).",
    ],
    lastVerifiedDate: "August 2026",
    sourceNote: "Transport Department, Government of Tamil Nadu (tn.gov.in/transport)",
    sourcePortalUrl: "https://tnreginet.gov.in",
    metaTitle: "Tamil Nadu Road Tax Calculator 2026 — TN RTO Chennai Vehicle Tax Slabs | DevCalc",
    metaDescription:
      "Calculate 2026 Tamil Nadu Road Tax (TN RTO) for cars & bikes in Chennai. Check 10-15% slabs, Green Tax, and the 100% EV exemption window through Dec 2027.",
    uniqueIntro:
      "Vehicle owners across Tamil Nadu (Chennai TN-01 to TN-22, Coimbatore TN-37/38, Madurai TN-58/59, and regional transport offices) pay road tax under the Tamil Nadu Motor Vehicles Taxation Act. Private cars are taxed on progressive slabs of 10% for vehicles priced up to ₹10 Lakhs, and 15% for vehicles exceeding ₹10 Lakhs.\n\nTwo-wheelers attract an 8% flat lifetime tax (or 10-12% for premium bikes). For electric vehicles, Tamil Nadu offers a **100% road tax exemption window for all EVs registered between 1 January 2026 and 31 December 2027**, after which standard reduced rates (5% to 7.5%) apply. Vehicles older than 15 years pay a mandatory Green Tax (₹2,000 for private vehicles) at renewal.",
    rateExplanation:
      "Road tax in Tamil Nadu is calculated as a 15-year One-Time Tax on the vehicle's ex-showroom price. For a ₹9 Lakh car, the 10% tax equals ₹90,000. For an ₹18 Lakh SUV, the 15% tax equals ₹2,70,000. Fixed fees include ₹600 registration charge, smart card, and HSRP plates.",
    rtoProcessGuide:
      "The Tamil Nadu Transport Department processes all private vehicle registrations via the centralized Vahan system, enabling automated tax receipt generation and digital RC issuance.",
    faqs: [
      {
        question: "What is the EV road tax exemption window in Tamil Nadu?",
        answer:
          "Under the Tamil Nadu Electric Vehicle Policy, the state has extended a 100% road tax exemption for all battery electric vehicles (both private and commercial) registered between 1 January 2026 and 31 December 2027. Outside this special window, standing reduced EV rates are 5% (< ₹10L) and 7.5% (> ₹10L).",
      },
      {
        question: "What are the car road tax slabs in Chennai and Tamil Nadu?",
        answer:
          "Tamil Nadu levies 10% for non-transport cars priced up to ₹10 Lakhs, and 15% for cars priced above ₹10 Lakhs on the ex-showroom value.",
      },
      {
        question: "What is the Green Tax on older vehicles in Tamil Nadu?",
        answer:
          "Non-transport personal vehicles older than 15 years attract a Green Tax of ₹2,000 upon renewal of Registration Certificate (valid for 5 years), while commercial transport vehicles pay ₹4,000.",
      },
      {
        question: "What are the road tax charges for two-wheelers in Tamil Nadu?",
        answer:
          "Two-wheelers with an invoice price under ₹1 Lakh pay 8% flat road tax, while high-capacity premium motorcycles pay 10% to 12% road tax.",
      },
    ],
    relatedStateSlugs: ["karnataka", "maharashtra"],
  },
];

export function getRoadTaxStateBySlug(slug: string): RoadTaxStateData | undefined {
  return ROAD_TAX_STATES.find((s) => s.slug === slug);
}