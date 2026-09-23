import { Calculator } from "@/src/types/calculator";

export const irctcRefundCalculator: Calculator = {
  slug: "irctc-ticket-cancellation-refund-calculator",
  name: "IRCTC Ticket Cancellation Refund Calculator",
  description:
    "Estimate the refund and cancellation deduction for confirmed, RAC, waitlisted, Tatkal, cancelled-train, and train-delay e-ticket scenarios.",
  category: "Vehicle",
  isPopular: true,
  editorialIntro:
    "Use the fare actually paid for the passengers being cancelled. The result is an educational estimate based on published Indian Railways and IRCTC rules; the amount sanctioned by IRCTC or the concerned railway remains final.",
  compareWith: [
    "travel-cost-calculator",
    "business-days-calculator",
    "fuel-cost-calculator",
    "mileage-calculator",
  ],
  seo: {
    title: "IRCTC Ticket Cancellation Refund Calculator 2026",
    description:
      "Estimate IRCTC train ticket refund, cancellation charge and GST for confirmed, RAC, waitlisted and confirmed Tatkal e-tickets by class and cancellation time.",
    keywords: [
      "IRCTC refund calculator",
      "train ticket cancellation refund calculator",
      "IRCTC cancellation charges",
      "railway ticket refund calculator",
      "Tatkal cancellation refund",
      "RAC ticket cancellation charge",
      "waiting ticket refund",
      "IRCTC refund rules 2026",
    ],
  },
  steps: [
    {
      step: 1,
      title: "Choose the Ticket Scenario",
      description: "Select confirmed regular, confirmed Tatkal, RAC/waitlist, cancelled train, or a train delayed by more than three hours.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Fare and Passengers",
      description: "Enter the fare for only the passengers being cancelled and their passenger count.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Select Class and Timing",
      description: "For ordinary confirmed tickets, choose the travel class and how long before departure the cancellation occurs.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "Review the Estimate",
      description: "See the estimated refund, base deduction, applicable GST, deadline, and action required.",
      icon: "calculator",
    },
  ],
  formula: {
    title: "Indian Railways Cancellation Refund Formula",
    formula:
      "Estimated refund = eligible fare - cancellation charge - GST on cancellation charge (AC classes)",
    explanation:
      "For a regular confirmed ticket, the charge is the applicable flat per-passenger minimum when cancelled more than 48 hours before departure; 25% of fare subject to that minimum from 48 to 12 hours; and 50% subject to that minimum from 12 to 4 hours. Confirmed tickets generally receive no refund after the four-hour deadline. RAC and waitlisted e-tickets use the published clerkage rule when cancelled within their deadline.",
    example: {
      input: "Two 3AC passengers, total eligible fare ₹4,000, cancelled 30 hours before departure",
      output: "Base charge = max(25% of ₹4,000, ₹180 × 2) = ₹1,000; AC GST estimate = ₹50; estimated refund = ₹2,950",
    },
    useCases: [
      "Compare the refund before different cancellation deadlines",
      "Estimate deductions for a family or group PNR",
      "Understand confirmed Tatkal and RAC/waitlist treatment",
      "Check when a TDR rather than ordinary cancellation may be required",
    ],
  },
  faqs: [
    {
      question: "What are the flat cancellation charges for confirmed tickets?",
      answer: "More than 48 hours before departure, the published minimum per passenger is ₹240 for First AC/Executive, ₹200 for AC 2 Tier/First Class, ₹180 for AC 3 Tier/AC Chair Car/AC 3 Economy, ₹120 for Sleeper, and ₹60 for Second Sitting. GST applies to cancellation charges for AC classes.",
    },
    {
      question: "How much is deducted between 48 and 12 hours before departure?",
      answer: "The charge is 25% of the eligible fare, subject to the applicable minimum flat charge per passenger. GST is added to the cancellation charge for AC classes.",
    },
    {
      question: "Is there a refund for a confirmed Tatkal ticket?",
      answer: "IRCTC states that no refund is granted when a confirmed Tatkal e-ticket is voluntarily cancelled. Contingent circumstances and waitlisted Tatkal tickets follow the applicable railway rules.",
    },
    {
      question: "What happens when all passengers remain waitlisted after charting?",
      answer: "For a fully waitlisted e-ticket after chart preparation, the passengers are dropped from the chart and the system processes an automatic refund. They are not permitted to board using that ticket.",
    },
    {
      question: "Do I need to cancel when the train itself is cancelled?",
      answer: "Indian Railways states that confirmed e-tickets receive an automatic full fare refund when the train is fully cancelled from origin to destination; a TDR is not normally required for that scenario.",
    },
    {
      question: "Can I get a full refund when the train is more than three hours late?",
      answer: "A full-fare refund may be available when the train is more than three hours late at your boarding station, nobody on the PNR travels, and an online TDR is filed before the train's actual departure. Cancelling normally or filing after departure can make the claim ineligible.",
    },
  ],
  seoContent: `
    <h2>What this IRCTC refund calculator covers</h2>
    <p>The calculator handles the most common e-ticket cases: voluntary cancellation of a regular confirmed ticket, confirmed Tatkal cancellation, RAC or waitlisted cancellation, a fully cancelled train, and a train delayed by more than three hours when the passenger does not travel. It shows the calculation rather than presenting a refund number without context.</p>
    <h2>Confirmed ticket cancellation deadlines</h2>
    <p>For ordinary confirmed tickets, timing changes the deduction. More than 48 hours before scheduled departure uses a class-based flat charge per passenger. From 48 hours to 12 hours, the charge is 25% of fare subject to the same minimum. From 12 hours to four hours, it becomes 50% subject to the minimum. A confirmed ticket generally has no refund if it is not cancelled or the appropriate TDR is not filed by the four-hour deadline.</p>
    <h2>RAC, waitlist and chart preparation</h2>
    <p>An unused RAC or waitlisted reservation can generally be cancelled up to 30 minutes before scheduled departure with clerkage deducted. If every passenger on an e-ticket remains waitlisted after chart preparation, IRCTC drops the names from the chart and processes the refund automatically. A ticket that becomes confirmed is treated under confirmed-ticket rules.</p>
    <h2>Fare, GST and convenience fee</h2>
    <p>Enter the eligible railway fare for the passengers you are cancelling. The estimate applies 5% GST to the calculated cancellation charge for AC classes. Booking convenience fees, payment-provider charges, catering adjustments, insurance, rounding, split passenger status and special-train rules can make the credited amount differ from this estimate.</p>
    <h2>Cases that require TDR review</h2>
    <p>Train diversion, short termination, AC failure, travelling in a lower class, partial travel and mixed-status group tickets can require an online Ticket Deposit Receipt and supporting evidence. Those claims are decided by the concerned railway and should not be reduced to an automatic guaranteed figure. Always use the reason and deadline displayed by IRCTC for the actual booking.</p>
    <h2>Official references</h2>
    <p>Rules used here are based on the Indian Railways revised refund rules and IRCTC's published e-ticket cancellation procedure. Last reviewed September 2026. DevCalc is an independent calculator and is not affiliated with IRCTC or Indian Railways.</p>
  `,
};
