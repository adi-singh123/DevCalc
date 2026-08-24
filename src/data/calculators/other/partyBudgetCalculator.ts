import { Calculator } from "@/src/types/calculator";

export const partyBudgetCalculator: Calculator = {
  slug: "party-budget-calculator",
  name: "Party Budget Calculator",
  description:
    "Estimate the total cost of a birthday, anniversary, or house party in India by guest count, venue type, and catering style, with a clear category-wise cost breakdown.",
  category: "Other",
  isPopular: true,
  compareWith: [
    "wedding-budget-calculator",
    "event-cost-calculator",
    "travel-cost-calculator",
    "gold-price-calculator",
    "house-construction-cost-calculator",
  ],

  seo: {
    title: "Party Budget Calculator India (2026) - Birthday & Event Cost",
    description:
      "Calculate your party budget instantly — birthday, anniversary, or house party. Get a cost breakdown for venue, catering, decoration, cake, and return gifts in India.",
    keywords: [
      "party budget calculator",
      "birthday party cost calculator",
      "kids birthday party budget",
      "party catering cost calculator",
      "party decoration cost estimator",
      "anniversary party budget planner",
      "house party cost calculator",
      "banquet hall party expense",
      "party cost per guest estimator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Choose your party type and guest count",
      description:
        "Select whether it's a kids' birthday, adult birthday, anniversary, or general get-together, and enter how many guests you're expecting.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Pick your venue and catering style",
      description:
        "Choose between a home setup, community hall, banquet hall, or premium venue, and select a catering tier that matches your menu plans.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "See your instant cost breakdown",
      description:
        "Get a category-wise split covering venue, catering, decoration, cake, entertainment, and return gifts.",
      icon: "result",
    },
    {
      step: 4,
      title: "Fine-tune to fit your budget",
      description:
        "Adjust guest count or venue type to instantly see how your total and per-guest cost change before you book anything.",
      icon: "clock",
    },
  ],

  formula: {
    title: "Party Budget Calculation Formula",
    formula:
      "Total Cost = (Venue Base Cost × Venue Multiplier) + (Guests × Catering Rate) + Decoration + Cake + Entertainment + (Guests × Return Gift Cost)",
    explanation: `A party budget is built from a mix of fixed costs that don't change with guest count and variable costs that scale directly with every person you invite. Venue hire, the cake, and basic decoration are largely fixed once you've picked a size and theme — a banquet hall costs the same whether 40 or 55 people show up within its capacity. Catering and return gifts, on the other hand, are purely per-head costs that climb in a straight line with your guest list. This calculator separates the two so a small guest-list change doesn't distort your fixed-cost categories.

Venue choice is the biggest single swing factor in a party budget. A home or terrace setup with basic DIY decoration can be done for under ₹5,000-₹10,000, while a community hall rental typically runs ₹3,000-₹15,000 depending on the city and duration. Dedicated party venues and banquet halls step up sharply — often ₹40,000 to ₹1,50,000+ — because they bundle in space, tables, chairs, and sometimes basic catering infrastructure. This calculator applies a venue-type multiplier on top of a base venue cost to reflect that jump, so switching from a home setup to a banquet hall visibly moves your total.

Catering is charged per plate and the rate depends heavily on the occasion and menu. Kids' birthday menus tend to be lighter and cheaper, typically ₹300-₹500 per plate for snacks, a light meal, and drinks, while adult birthday and anniversary catering with a fuller multi-cuisine buffet usually runs ₹600-₹1,200 per plate. This calculator applies a per-guest catering rate based on your selected tier, and — like wedding catering — bulk bookings above roughly 75-100 guests tend to bring the per-plate rate down slightly, which the calculator reflects with a mild volume discount at higher headcounts.

Return gifts are a cost category that is easy to underestimate and this calculator treats them explicitly rather than folding them into a vague "miscellaneous" line. For kids' parties, a reasonable return gift in 2026 costs ₹150-₹350 per child for a standard party, rising to ₹400-₹600 for premium parties in gated communities or schools where expectations run higher. Adult parties often skip return gifts entirely or replace them with a much smaller token, which is why this calculator lets return gift cost drop to near-zero for non-kids party types.

Decoration and the cake are treated as largely fixed costs that scale mildly with venue tier rather than guest count. A basic balloon setup starts around ₹2,000-₹5,000, while a professional themed decoration package with backdrops and floral elements can run ₹10,000-₹40,000 or more depending on complexity. Cakes for a mid-size party typically cost ₹800-₹3,000 depending on size, design complexity, and whether it's a custom character or photo cake, and this calculator scales the cake cost gently with guest count since larger parties usually need a bigger cake, but not proportionally.

What this calculator does not include: photography or videography (which many families now book separately, typically ₹5,000-₹25,000 for a few hours of coverage), entertainment add-ons like magicians or DJs beyond a flat allowance, alcohol or bar service for adult parties, and any venue security deposits, which are often refundable and shouldn't be counted as a real expense. It also assumes standard vendor rates rather than family-and-friends discounts, so treat the output as a solid starting number rather than a locked-in final cost.`,
    example: {
      input: "Kids birthday party, 40 guests, Banquet hall venue, Standard catering tier",
      output:
        "Venue: ₹45,000. Catering: 40 × ₹500 = ₹20,000. Decoration: ₹12,000. Cake: ₹1,500. Entertainment: ₹5,000. Return Gifts: 40 × ₹250 = ₹10,000. Estimated Total: ₹93,500 — roughly ₹2,338 per guest.",
    },
    useCases: [
      "Setting a realistic budget before booking a birthday party venue",
      "Comparing home-setup costs versus a dedicated kids' party venue",
      "Working out a fair per-child return gift budget for a given guest list",
      "Planning an anniversary dinner and checking if a banquet hall fits the budget",
      "Deciding how many guests you can invite within a fixed total budget",
    ],
  },

  faqs: [
    {
      question: "How much does an average birthday party cost in India?",
      answer:
        "A kids' birthday party in India typically costs between ₹8,000 and ₹35,000 for a home or community hall setup with 20-40 guests, while venue parties at dedicated kids' spaces can range from ₹40,000 to ₹1,50,000 or more depending on theme and catering. Adult birthday parties at a mid-range hotel or banquet hall for 50-100 guests usually land between ₹50,000 and ₹1,50,000, largely driven by per-plate catering costs. Home parties remain the most economical option, often costing under ₹10,000 for a simple, homemade celebration.",
    },
    {
      question: "What is a reasonable return gift budget per child?",
      answer:
        "A good return gift for a kids' birthday party in India should cost between ₹150 and ₹350 per child for a standard party, while premium parties in gated communities or urban schools typically go up to ₹400-₹600 per child. Anything below ₹100 tends to feel thin in 2026, especially for children aged six and above who notice these details. Since return gifts are one of the last things people plan, it helps to lock this number early rather than buying last-minute from whatever is available at the nearest market.",
    },
    {
      question: "How much should I budget for party catering per plate?",
      answer:
        "Kids' party menus typically run ₹300-₹500 per plate for lighter, casual food, while adult birthday and anniversary catering with a fuller buffet usually costs ₹600-₹1,200 per plate. A formal plated meal at a premium venue can go as high as ₹1,000-₹2,500 per plate. Buffet-style service is generally 30-50% cheaper than plated service for the same menu, so it's worth asking your caterer for both quotes before deciding.",
    },
    {
      question: "Is it cheaper to host a party at home instead of a venue?",
      answer:
        "Yes, significantly. A home party with homemade or lightly outsourced food and basic balloon decoration can cost under ₹5,000-₹10,000, compared to ₹40,000 or more for a dedicated party venue. The trade-off is space, convenience, and cleanup — home parties work well for smaller guest lists of 15-30 people, while anything larger usually needs the space and infrastructure a rented venue provides.",
    },
    {
      question: "How does guest count affect my total party budget?",
      answer:
        "Guest count directly scales your catering and return gift costs, since both are charged per head, while venue, decoration, and the cake stay largely fixed once you've chosen a size. This means the jump from 30 to 60 guests roughly doubles your catering and gifting spend but barely changes your venue and decoration cost, assuming the venue's capacity can handle both. It's why doubling your guest list rarely doubles your total bill — it usually increases it by 40-60%.",
    },
    {
      question: "What's included in a typical decoration cost estimate?",
      answer:
        "A basic balloon arch or backdrop setup typically starts at ₹2,000-₹5,000, while a professional themed decoration package — with custom backdrops, floral elements, table styling, and lighting — can run ₹10,000-₹40,000 depending on complexity. DIY decoration using ready-made balloon kits can save ₹3,000-₹5,000 versus hiring a decorator for a basic setup, which is a popular way to trim cost without sacrificing the photo-worthy backdrop most parties want.",
    },
    {
      question: "Should I add a separate photography budget?",
      answer:
        "This calculator does not include photography by default since many families either skip it or handle it informally on their phones. If you want professional coverage, budget roughly ₹5,000-₹25,000 depending on hours of coverage, whether you want candid coverage only or a full photo-and-video package, and whether same-day edited highlights are included. For milestone birthdays or anniversaries, this is often worth adding as a separate line rather than squeezing it into the decoration budget.",
    },
    {
      question: "How much does an anniversary party typically cost compared to a birthday?",
      answer:
        "Anniversary dinners usually fall into a mid-range catering bracket, often ₹500-₹900 per plate, since the menu tends to be more curated for a smaller, adult-focused guest list compared to a birthday. Overall costs are often lower than an equivalent-sized birthday party because anniversary celebrations rarely include return gifts, entertainers, or elaborate theming, leaning instead on a nicer venue and a more premium menu.",
    },
    {
      question: "Can I reduce my party budget without it feeling cheap?",
      answer:
        "Yes — the two highest-impact changes are picking a slightly smaller, well-decorated venue over an oversized one, and choosing a well-curated menu over a sprawling one with too many food stations. Guests remember good food and thoughtful return gifts far more than an expensive venue with mediocre catering, so it's usually smarter to shift budget toward those two categories and trim elsewhere, such as by using DIY decoration elements or digital invitations instead of printed cards.",
    },
    {
      question: "Does this calculator account for GST on venue and catering?",
      answer:
        "No, the figures here reflect base vendor pricing before tax. Catering services from GST-registered vendors typically attract 5% GST, while banquet hall rentals can attract 18% GST depending on how the vendor structures the bill. Smaller, informal local vendors and home caterers may not charge GST at all. It's worth asking your vendor directly whether their quote is inclusive or exclusive of tax before finalizing your budget.",
    },
  ],

  seoContent: `
    <h2>How Much Does a Party Cost in India in 2026?</h2>
    <p>Party budgets in India vary more than almost any other family expense, ranging from under ₹5,000 for a simple home celebration to well over ₹2,00,000 for a themed party at a premium venue with professional catering and entertainment. Most middle-class families land somewhere in the ₹15,000 to ₹50,000 range for a proper party with 25-50 guests, covering a rented hall or terrace, decent food, a cake, decoration, and return gifts where applicable. This calculator helps you find your specific number based on the choices that matter most: venue type, guest count, and catering tier.</p>

    <h2>Party Cost by Guest Count and Venue Type (2026)</h2>
    <table>
      <tr><th>Guest Count</th><th>Home / Terrace</th><th>Community Hall</th><th>Banquet / Premium Venue</th></tr>
      <tr><td>20-30 guests</td><td>₹5,000-₹12,000</td><td>₹12,000-₹25,000</td><td>₹35,000-₹70,000</td></tr>
      <tr><td>40-60 guests</td><td>₹10,000-₹20,000</td><td>₹20,000-₹40,000</td><td>₹60,000-₹1,20,000</td></tr>
      <tr><td>75-100 guests</td><td>Not typical</td><td>₹35,000-₹60,000</td><td>₹1,00,000-₹2,00,000</td></tr>
    </table>
    <p>These ranges include venue, catering, decoration, and a basic cake, but exclude return gifts and any professional entertainment or photography, which are worth budgeting separately since they can add 15-25% to the total.</p>

    <h2>Party Catering Cost Per Plate</h2>
    <table>
      <tr><th>Party Type / Menu</th><th>Cost Per Plate</th></tr>
      <tr><td>Kids' birthday (snacks + light meal)</td><td>₹300-₹500</td></tr>
      <tr><td>Standard adult buffet</td><td>₹600-₹1,200</td></tr>
      <tr><td>Premium multi-cuisine buffet</td><td>₹1,200-₹1,800</td></tr>
      <tr><td>Formal plated dinner service</td><td>₹1,000-₹2,500</td></tr>
    </table>
    <p>Buffet-style service is almost always cheaper than plated service for an equivalent menu, typically by 30-50%, because it needs fewer serving staff and less table-side coordination.</p>

    <h2>Return Gift Budget Guide (Kids' Parties)</h2>
    <table>
      <tr><th>Party Tier</th><th>Return Gift Cost Per Child</th></tr>
      <tr><td>Simple / home party</td><td>₹100-₹200</td></tr>
      <tr><td>Standard party</td><td>₹150-₹350</td></tr>
      <tr><td>Premium party (gated community / school)</td><td>₹400-₹600</td></tr>
    </table>
    <p>Return gifts are consistently one of the most underestimated costs in party planning. For a 40-child guest list, the difference between a ₹150 and ₹400 return gift is ₹10,000 — enough to meaningfully upgrade your decoration or cake budget instead.</p>

    <h2>Decoration and Cake Cost Reference</h2>
    <ul>
      <li><strong>Basic balloon decoration:</strong> ₹2,000-₹5,000</li>
      <li><strong>Professional themed decoration:</strong> ₹10,000-₹40,000</li>
      <li><strong>Standard cake (1-2 kg):</strong> ₹800-₹1,800</li>
      <li><strong>Custom character or photo cake:</strong> ₹1,800-₹3,500</li>
    </ul>

    <h2>Ways to Save on Your Party Budget</h2>
    <ul>
      <li>Use DIY balloon kits instead of hiring a full decorator for a basic setup — saves ₹3,000-₹5,000</li>
      <li>Pick buffet-style catering over plated service for the same menu — saves 30-50% on food costs</li>
      <li>Cap the guest list deliberately, since catering and return gifts scale directly with every additional person</li>
      <li>Send digital invitations for casual parties and reserve printed cards only for milestone celebrations</li>
      <li>Book venues on weekday evenings where possible, since weekend slots often carry a premium</li>
    </ul>

    <h2>City-Wise Party Cost Variations</h2>
    <p>Party costs shift by city in largely the same pattern as wedding costs, though the gap is somewhat narrower since parties don't typically involve multi-day venue bookings. In major metros like Hyderabad, Mumbai, and Bangalore, per-plate catering costs at premium banquet venues can run ₹1,500-₹3,500, noticeably above the national mid-range average, while high-end villas and beachfront venues in cities like Visakhapatnam add their own premium for scenic settings and weather-contingency planning. Smaller cities and towns generally offer 30-50% lower venue and catering costs for an equivalent-quality event, driven mainly by lower real estate and labour costs rather than any real difference in food quality or service standards.</p>
    <p>Regional catering traditions also affect your per-plate math in ways worth knowing before you assume a national average applies to you. South Indian catering built around banana-leaf service or a traditional thali tends to run cheaper per plate than an equivalent North Indian multi-cuisine buffet with live counters, largely because the format needs fewer serving stations and less specialized equipment. If you're planning a party in a city with strong local catering traditions, it's often worth asking your caterer for a traditional-style menu quote alongside a multi-cuisine one — the savings can be substantial without any real drop in guest satisfaction.</p>

    <h2>Planning a Party on a Tight Timeline</h2>
    <p>Return gifts are consistently the category people plan last and regret most, since by the time most hosts get around to it, they're buying whatever is available at a local market two or three days before the event. Locking in your return gift budget and vendor at the same time you confirm your guest list avoids the common trap of either overspending in a last-minute panic or underspending and feeling embarrassed at the door. The same logic applies to decoration bookings — a decorator quoted at ₹4,000 for a basic setup can easily balloon once food, disposable plates and glasses, a photographer, and last-minute additions are layered on, with many families finding their total runs 40-60% higher than their original mental estimate.</p>
    <p>Booking your venue and caterer at least three to four weeks ahead, rather than the one-to-two-week window many people default to, typically secures better rates and wider availability of preferred time slots, especially for weekend bookings during popular party months. If your date is flexible, a weekday evening slot can meaningfully undercut weekend pricing at most banquet and community hall venues.</p>

    <h2>Kids' Party Trends Worth Knowing in 2026</h2>
    <p>Expectations around what counts as a "complete" kids' party have shifted noticeably over the past few years, and it's worth budgeting for these shifts rather than being caught off guard mid-planning. Five years ago a simple toffee bag was an acceptable return gift; today, parents in urban India increasingly expect proper gift packs with stationery, small toys, or activity kits, especially at parties hosted in gated communities or attended mostly by classmates from urban schools. Photo booths, themed cake tables, and a dedicated entertainer or activity coordinator (magician, face-painter, or a simple craft station) have also moved from "nice extra" to a fairly standard expectation at venue-hosted parties, typically adding ₹3,000-₹15,000 depending on complexity and duration.</p>
    <p>Theme selection itself doesn't usually change your core budget dramatically, since most of the cost sits in decoration execution rather than the theme concept — a superhero theme and a princess theme cost roughly the same to decorate well, with the actual price driver being whether you choose basic balloon work or a fuller backdrop-and-prop setup. Where theming does affect cost meaningfully is in cake design, since a fully custom character cake commands a premium of ₹500-₹1,500 over a simpler decorated cake of the same size.</p>

    <h2>Comparing Total Cost: Kids vs Adult vs Anniversary Parties</h2>
    <table>
      <tr><th>Party Type</th><th>Typical Guest Count</th><th>Estimated Total (Standard tier)</th></tr>
      <tr><td>Kids' birthday</td><td>30-40 children</td><td>₹35,000-₹75,000</td></tr>
      <tr><td>Adult birthday</td><td>50-80 guests</td><td>₹60,000-₹1,50,000</td></tr>
      <tr><td>Anniversary dinner</td><td>30-50 guests</td><td>₹50,000-₹1,20,000</td></tr>
    </table>
    <p>Kids' parties often land at a lower total than adult celebrations of a similar guest count mainly because catering per plate is cheaper for a children's menu, even though return gifts add a cost category adult parties frequently skip. Anniversary dinners, meanwhile, tend to spend proportionally more per guest on a nicer venue and curated menu while spending nothing on return gifts or elaborate theming, giving hosts more room to invest in food quality and ambience for a smaller, more intimate gathering.</p>

    <h2>Who Should Use This Calculator?</h2>
    <ul>
      <li>Parents planning a kids' birthday party and comparing home versus venue options</li>
      <li>Anyone hosting an adult birthday, anniversary, or milestone celebration</li>
      <li>Families deciding on a fair return gift budget per child before shopping</li>
      <li>Hosts comparing catering tiers to see the total cost impact of upgrading the menu</li>
      <li>Anyone who needs a quick, realistic number before approaching venues and caterers</li>
    </ul>
  `,
};