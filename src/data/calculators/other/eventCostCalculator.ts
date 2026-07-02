import { Calculator } from "@/src/types/calculator";

export const eventCostCalculator: Calculator = {
  slug: "event-cost-calculator",
  name: "Event Cost Calculator",
  description:
    "Estimate the total cost of a corporate or community event in India by attendee count, event type, and production level, including venue, catering, AV, and GST.",
  category: "Other",
  isPopular: true,
  compareWith: [
    "wedding-budget-calculator",
    "party-budget-calculator",
    "travel-cost-calculator",
    "house-construction-cost-calculator",
    "gold-price-calculator",
  ],

  seo: {
    title: "Event Cost Calculator India (2026) - Per Attendee Budget Tool",
    description:
      "Calculate corporate and community event costs instantly by attendee count and event type. Get a breakdown for venue, catering, AV production, décor, and GST.",
    keywords: [
      "event cost calculator",
      "corporate event budget calculator",
      "event cost calculator india",
      "cost per attendee calculator",
      "conference budget calculator",
      "corporate event cost per person india",
      "annual day event cost calculator",
      "seminar budget calculator",
      "AV production cost calculator",
      "event management cost calculator",
      "product launch event budget",
      "how much does a corporate event cost",
      "event budget planning tool india",
      "gala dinner cost calculator",
      "event GST calculator india",
      "event venue cost per person",
      "conference cost calculator india 2026",
      "event contingency budget calculator",
      "team offsite cost calculator",
      "award night event cost calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter attendee count and event type",
      description:
        "Choose whether it's a seminar, conference, annual day, product launch, or gala, and enter your expected headcount.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Select your production and venue tier",
      description:
        "Pick a Basic, Standard, or Premium tier to reflect your venue quality and AV production level — screens and mics versus full staging and lighting.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Get your instant cost breakdown",
      description:
        "See venue and catering, AV and production, décor, entertainment, GST, and contingency laid out separately.",
      icon: "result",
    },
    {
      step: 4,
      title: "Compare scenarios before you commit",
      description:
        "Adjust attendee count or tier to see the total and per-attendee cost shift instantly, before you send an RFP to vendors.",
      icon: "clock",
    },
  ],

  formula: {
    title: "Event Cost Calculation Formula",
    formula:
      "Total Cost = (Attendees × Venue & Catering Rate) + AV/Production Cost + Décor + Entertainment, then + 18% GST, then + Contingency (10%)",
    explanation: `Corporate and community event costs split cleanly into per-attendee costs and fixed production costs, and mixing them together is the most common way first-time organizers under-budget. Venue hire and catering scale with headcount because more people need more space and more food — a mid-sized conference typically runs ₹1,200 to ₹3,500 per attendee for venue space, buffet lunch, projection screens, and basic registration tools. AV production, décor, and entertainment, by contrast, are largely fixed once you've decided on a production level, since a stage build or an LED wall costs roughly the same whether 100 or 250 people are watching it.

Event type and production tier together set your per-attendee rate. A simple half-day seminar with built-in venue AV and a buffet lunch can run as low as ₹1,000-₹2,000 per person, while a full annual day or gala with custom staging, line-array audio, and a multi-course dinner can average ₹1,500 to ₹5,000 or more per person. This calculator uses three tiers — Basic, Standard, Premium — each carrying a different combined venue-and-catering rate, letting you model everything from a 50-person team offsite to a 500-person annual celebration.

AV and production costs move independently of headcount and scale mainly with visual ambition. Basic AV — a screen, a projector, and a couple of wireless microphones — typically costs ₹20,000-₹80,000 depending on venue and rental duration. Professional production with proper stage lighting, multiple screens, and a dedicated technical crew runs ₹1-5 lakh, while broadcast-quality setups with LED walls and elaborate lighting rigs for large conferences and galas can exceed ₹10-20 lakh. This calculator applies a flat AV/production allocation per tier that already reflects a mid-sized event, and you should scale it up manually for very large venues or elaborate custom stage builds.

GST is not optional on this category and is one of the most commonly forgotten line items in first-draft event budgets. Event management services, venue hire from most commercial properties, and professional catering in India typically attract 18% GST, and this calculator applies that rate directly on top of your venue, catering, AV, décor, and entertainment subtotal — matching how most vendor invoices are actually structured. Many internal committees accept vendor quotes that quietly exclude GST, only to discover an 18% gap when the final invoice lands, so this calculator builds it in by default rather than treating it as an afterthought.

Contingency planning matters more for events than almost any other category here, because live production has more points of failure — equipment issues, last-minute headcount changes, weather for outdoor components, or overtime charges when an event runs long. A 10-12% contingency reserve is the widely recommended minimum for corporate events in India, rising to 15-20% for first-time events with no historical cost data or for anything with an outdoor component. This calculator defaults to 10% but treats it as a separately visible line so you can raise it for higher-risk events.

What this calculator does not include: speaker or talent fees (which range enormously from free internal speakers to ₹5-30 lakh or more for well-known external speakers), travel and accommodation for out-of-town attendees or VIPs, event management agency fees (typically 10-20% of total budget if you hire a full-service planner), and sponsorship or ticket revenue that might offset your net cost. Treat the output as your direct production cost baseline — the number you'd need even if you ran the event entirely in-house with no agency fee layered on top.`,
    example: {
      input: "200 attendees, Conference event type, Standard production tier",
      output:
        "Venue & Catering: 200 × ₹2,200 = ₹4,40,000. AV/Production: ₹1,80,000. Décor: ₹80,000. Entertainment: ₹40,000. Subtotal: ₹7,40,000. GST (18%): ₹1,33,200. Contingency (10% of subtotal): ₹74,000. Estimated Total: ₹9,47,200 — roughly ₹4,736 per attendee.",
    },
    useCases: [
      "Budgeting a corporate conference or seminar before approaching venues",
      "Comparing Basic versus Premium production tiers for an annual day event",
      "Estimating per-attendee cost to justify a ticket price or sponsorship ask",
      "Checking whether a product launch fits inside an approved marketing budget",
      "Building a defensible internal budget proposal that already includes GST",
    ],
  },

  faqs: [
    {
      question: "How much does a corporate event cost per attendee in India?",
      answer:
        "Managed corporate events in India typically work out to roughly ₹2,000-₹10,000 per attendee depending on venue, food and beverage, and production level. Mid-sized conferences with basic AV, a buffet lunch, and standard registration tools usually land between ₹1,200 and ₹3,500 per person, while high-production galas and award nights with custom staging and premium entertainment can average ₹1,500 to ₹5,000 or considerably more per attendee.",
    },
    {
      question: "Is GST included in typical venue and catering quotes?",
      answer:
        "Usually not by default — most venues and vendors quote base pricing and add GST separately, which catches many first-time organizers off guard. In India, commercial event venue hire, professional catering services, and technical production typically attract 18% GST under the standard rate applicable to event management services. Always ask vendors explicitly whether a quote is inclusive or exclusive of tax before finalizing your budget, since an 18% gap on a large event is a meaningful sum.",
    },
    {
      question: "How much should I budget for AV and production?",
      answer:
        "Basic AV — a screen, projector, and wireless microphones — typically costs ₹20,000-₹80,000 for a standard mid-sized event. Professional production with proper stage lighting, multiple screens, and a technical crew runs roughly ₹1-5 lakh, while broadcast-quality setups with LED walls for large conferences or galas can exceed ₹10-20 lakh. In-house hotel AV packages are often marked up 30-50% versus bringing in an independent AV vendor, so it's worth getting both quotes for anything beyond a basic screen-and-mic setup.",
    },
    {
      question: "What contingency percentage should I use for an event budget?",
      answer:
        "A 10-12% contingency reserve on top of your subtotal is the widely recommended minimum for corporate events in India, and this calculator defaults to 10%. First-time events with no historical cost data, or anything with an outdoor component exposed to weather risk, should push this up to 15-20%. Keep contingency as a separate pool rather than distributing it across line items — unused contingency at the end of the event is simply a saving, not a failure to spend correctly.",
    },
    {
      question: "How does event type change the cost more than headcount?",
      answer:
        "Event type sets your production ambition, which is often a bigger cost driver than raw headcount. A 200-person seminar with built-in venue AV and a buffet lunch can cost less overall than a 100-person gala with custom staging, premium entertainment, and a plated dinner, simply because the gala's fixed production costs are so much higher per person. This is why the calculator asks for both attendee count and event type — headcount alone doesn't tell the full cost story.",
    },
    {
      question: "What is the difference between Basic, Standard, and Premium production tiers?",
      answer:
        "Basic assumes a functional venue with in-house AV, a straightforward buffet, and minimal décor — suited to internal trainings, team meetings, and small seminars. Standard steps up to a proper conference venue, a better catering spread, dedicated AV equipment, and modest décor and branding. Premium reflects high-production annual days, galas, and product launches with custom staging, professional lighting, multi-course catering, and a stronger entertainment or talent budget.",
    },
    {
      question: "Does this calculator include speaker fees or entertainment talent?",
      answer:
        "A modest entertainment allocation is built into the Standard and Premium tiers, but external speaker or celebrity talent fees are not included since they vary too widely to standardize — internal speakers are typically free, industry experts can charge ₹1-10 lakh or more, and well-known names can run into several lakh or higher. If your event includes paid external speakers or performers, add that as a separate line item on top of this calculator's output.",
    },
    {
      question: "How much does an event management company charge on top of these costs?",
      answer:
        "If you hire a full-service event management agency rather than running the event in-house, expect a management fee of roughly 10-20% of your total event budget, or sometimes a fixed project fee for smaller events. This calculator's output reflects the direct production cost only — venue, catering, AV, décor, and entertainment — so you should add the agency fee on top if you're not planning to manage vendors yourself.",
    },
    {
      question: "What hidden costs commonly get missed in event budgets?",
      answer:
        "The most frequently missed items are GST on venue and vendor invoices, overtime charges when an event runs past the booked hours, cable runs and rigging fees for custom AV setups in non-standard venues, WiFi and power drop charges, and cleaning or damage deposits that venues sometimes treat as non-refundable. Always request a fully itemized, GST-inclusive quote from every vendor before signing, rather than relying on a verbal estimate.",
    },
    {
      question: "How can I reduce corporate event costs without hurting the experience?",
      answer:
        "The highest-impact levers are booking on off-peak days (Tuesday-Thursday events can cost 20-40% less than Friday-Sunday), using in-house venue AV where quality allows instead of bringing in a full external production team, negotiating a bundled package that combines venue, catering, and AV rather than contracting each separately, and booking well ahead of your date since popular venues and vendors charge a premium for short-notice bookings.",
    },
  ],

  seoContent: `
    <h2>How Much Does a Corporate Event Cost in India in 2026?</h2>
    <p>Corporate event costs in India vary enormously by scale and production ambition, but a useful anchor is this: managed events typically work out to roughly ₹2,000-₹10,000 per attendee once venue, food and beverage, and production are all accounted for. A small internal meeting for 20-50 people can be run for a few lakh rupees, while a large national conference or product launch for 500+ attendees can climb well past ₹40 lakh. This calculator helps you land on your specific number based on attendee count, event type, and the production tier you're aiming for.</p>

    <h2>Event Cost by Scale (2026 Reference Ranges)</h2>
    <table>
      <tr><th>Event Scale</th><th>Typical Headcount</th><th>Total Cost Range</th></tr>
      <tr><td>Small internal event</td><td>20-50 people</td><td>₹2,50,000-₹8,00,000</td></tr>
      <tr><td>Mid-size event</td><td>100-300 people</td><td>₹8,00,000-₹35,00,000</td></tr>
      <tr><td>Large-scale event</td><td>500+ people</td><td>₹40,00,000-₹1,00,00,000+</td></tr>
    </table>
    <p>These figures generally cover planning, venue, catering, and core production, but may exclude major add-ons like celebrity talent, high-end custom stage design, or comprehensive travel and accommodation for out-of-town attendees.</p>

    <h2>Cost Per Attendee by Event Type</h2>
    <table>
      <tr><th>Event Type</th><th>Typical Cost Per Attendee</th></tr>
      <tr><td>Seminar / half-day training</td><td>₹1,000-₹2,000</td></tr>
      <tr><td>Standard business conference</td><td>₹1,200-₹3,500</td></tr>
      <tr><td>Annual day / team celebration</td><td>₹1,500-₹4,000</td></tr>
      <tr><td>Gala / award night with custom production</td><td>₹1,500-₹5,000+</td></tr>
    </table>
    <p>The gap between the low and high end within each category is almost always explained by AV and production choices — a screen-and-mic setup versus a full stage build with lighting and an LED wall.</p>

    <h2>AV and Production Cost Reference</h2>
    <ul>
      <li><strong>Basic AV</strong> (screen, projector, wireless mics): ₹20,000-₹80,000</li>
      <li><strong>Professional production</strong> (staging, lighting, technical crew): ₹1,00,000-₹5,00,000</li>
      <li><strong>Broadcast-quality production</strong> (LED walls, full lighting rigs, live streaming): ₹10,00,000-₹20,00,000+</li>
    </ul>
    <p>In-house hotel AV is frequently marked up 30-50% compared to bringing in an independent AV vendor directly, so it is almost always worth getting a comparison quote for anything beyond the most basic setup.</p>

    <h2>GST and Tax Considerations for Events</h2>
    <p>Event management services in India attract 18% GST, and most commercial venue hire and professional catering contracts follow the same rate. This is one of the most commonly underestimated line items in first-draft event budgets, since many organizers see a vendor's base quote and forget to add tax before presenting the total internally for approval. This calculator applies 18% GST automatically on top of your venue, catering, AV, décor, and entertainment subtotal so your estimate matches what the final invoice will actually look like.</p>

    <h2>Building In a Realistic Contingency</h2>
    <p>A contingency reserve of 10-12% of total event budget is the widely recommended minimum for corporate event planning in India, with some planners recommending up to 15-20% for outdoor events or first-time events with no historical cost data to draw on. This reserve is not an overspend allowance — it exists specifically for unplanned costs like last-minute vendor replacements, weather contingencies, unexpected headcount increases, or equipment failures, and any portion left unused at the end is simply a saving.</p>

    <h2>Should You Hire an Event Management Company?</h2>
    <p>Whether to manage an event in-house or bring in a professional agency comes down to a trade-off between the management fee and the value of established vendor relationships. Professional event companies maintain long-term relationships with venues, caterers, and AV providers that individual corporate clients cannot easily replicate — a production company that works with an agency on forty events a year will typically price that agency's client differently than a corporate HR team calling in for a single one-off booking. The cumulative savings from these relationships across venue, catering, AV, and décor often partially or fully offset the 10-20% management fee, particularly for events above the 100-attendee mark where vendor negotiation leverage really starts to matter.</p>
    <p>Beyond direct discounts, experienced planners bring scope-definition discipline that in-house teams are often less equipped to resist. A last-minute request to upgrade the stage set or add a premium AV element can quietly add ₹1-3 lakh to a budget in the final week before an event — a professional event manager typically has a structured change-order process that documents the cost, routes it for separate approval, and prevents unplanned scope creep from silently absorbing your contingency reserve.</p>

    <h2>Understanding the Event Budget's Three Layers</h2>
    <p>A well-structured corporate event budget in India typically has three distinct layers rather than one flat number. The primary budget covers the direct costs known at planning stage — venue hire, catering, AV equipment, entertainment, décor, and marketing — and is what this calculator's core output represents. The second layer is the management or agency fee, if you're using one, typically 10-20% of the primary budget. The third layer is the contingency reserve, which exists specifically to absorb unplanned costs and should never be distributed across the other line items, since doing so makes it disappear into "planned spend" and defeats its purpose as a genuine risk buffer.</p>

    <h2>Weekday Versus Weekend Event Pricing</h2>
    <p>Day of the week is one of the most underused levers in corporate event budgeting. Weekday events, especially Tuesday through Thursday, typically cost 20-40% less than Friday-through-Sunday bookings at the same venue, since hotels and event spaces are actively trying to fill inventory that would otherwise sit empty. This applies to venue hire, catering minimums, and sometimes even AV vendor day-rates, making a simple date shift one of the easiest ways to meaningfully reduce a budget without touching the guest experience at all. Booking 6-12 months ahead for large conferences, or 3-6 months for mid-size events, also secures materially better rates than short-notice bookings, which routinely carry a premium of their own.</p>

    <h2>Fixed Versus Variable Costs in Event Budgets</h2>
    <p>Treating every event cost as a single blended per-attendee number is one of the fastest ways to misbudget, because fixed and variable costs behave very differently as your headcount assumptions change. Fixed costs — venue rental, permits, insurance, the base AV package, and most décor — remain roughly constant regardless of final attendance, and these are typically the first commitments you make and the hardest to reverse once contracts are signed. Variable costs — catering per head, printed badges, swag, and additional staffing hours — scale directly with headcount and should be budgeted at roughly 80% of projected attendance initially, then adjusted upward as registrations confirm, rather than committing to full variable spend before you know your actual turnout.</p>
    <p>This distinction also explains why a smaller event doesn't always cost proportionally less than a larger one. A 50-person seminar and a 150-person seminar in the same venue tier might have nearly identical AV and décor costs, meaning the larger event's fixed costs get spread across three times as many people — which is precisely why cost-per-attendee tends to improve as headcount rises, up to the point where you need a genuinely bigger venue or additional AV capacity.</p>

    <h2>A Simple Framework for First-Time Event Organizers</h2>
    <p>If you're building an event budget from zero, start with what the event needs to accomplish rather than what it should look like — a clear objective (leads generated, brand visibility, team morale, product awareness) determines whether you're building a cost-containment budget or one that's expected to justify itself through measurable business outcomes. From there, list every expense category — venue, catering, AV, entertainment, décor, staffing, technology, and logistics — and research actual current quotes rather than relying on last year's numbers, since vendor pricing shifts year to year and reusing an old template introduces more risk than it saves in planning time. Add your contingency as a separate, non-negotiable line rather than folding it into other categories, and get written sign-off on the full budget before committing to any vendor contract, since verbal approval has a way of becoming a dispute once the final invoice arrives.</p>

    <h2>Who Should Use This Calculator?</h2>
    <ul>
      <li>Corporate teams planning a conference, seminar, or annual day and building an internal budget proposal</li>
      <li>Event managers comparing Basic, Standard, and Premium production tiers for a client</li>
      <li>Marketing teams estimating the cost of a product launch before securing budget approval</li>
      <li>Community organizations planning a large gathering that needs venue, catering, and basic AV</li>
      <li>Anyone who wants a GST-inclusive estimate that matches how vendor invoices are actually structured</li>
    </ul>
  `,
};