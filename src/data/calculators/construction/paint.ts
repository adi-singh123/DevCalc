import { Calculator } from "@/src/types/calculator";

export const paintCalculator: Calculator = {
  slug: "paint-calculator",

  name: "Paint Calculator",

  description:
    "Estimate exactly how much paint your walls, room, or entire house needs. Enter your area, number of coats, and paint type — and get litres required plus an approximate cost, so you buy the right quantity the first time.",

  category: "Construction",

  isPopular: true,

  editorialIntro:
    "Estimating architectural paint quantities requires subtracting window and door openings from gross wall areas, and applying product-specific spreading rates (measured in sq.ft per litre per coat) with proper primer sealing coats.",

  benchmarkContext: {
    title: "Indian Paint Industry Spreading Rates (IS 15489 & IS 5411)",
    badge: "Architectural Coatings Standard",
    stat: "120–140 sq.ft / Litre (2 Coats Premium Emulsion)",
    description:
      "Benchmark spreading rates per litre for 2 coats: Interior Acrylic Distemper (50–65 sq.ft/L), Interior Tractor/Plastic Emulsion (120–140 sq.ft/L), Exterior Weatherproof Emulsion (60–80 sq.ft/L), and Water-based Wall Primer (120–150 sq.ft/L single coat).",
    source: "Indian Paint Association (IPA) & Asian Paints / Berger Technical Manuals",
    lastUpdated: "January 2026",
  },

  compareWith: [
    "cement-calculator",
    "tile-calculator",
    "brick-calculator",
    "concrete-calculator",
    "house-construction-cost-calculator",
    "rebar-cutting-length-calculator",
  ],

  seo: {
    title: "Paint Calculator – Estimate Paint Quantity & Cost (Litres, Cans, ₹)",
    description:
      "Calculate exactly how many litres of paint you need for your walls or house, plus estimated cost. Accounts for coats, paint type, and coverage rate.",
    keywords: [
      "paint calculator",
      "wall paint coverage estimator",
      "house paint quantity calculator",
      "interior paint calculator",
      "exterior paint calculator",
      "paint cost estimator",
      "emulsion paint calculation",
      "primer and paint requirement",
      "paint calculator per square foot",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Wall Area",
      description:
        "Enter the total area you plan to paint in square feet — either measure it directly, or provide room length, width, and height and let the calculator work out the wall area for you, including a standard deduction for doors and windows.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Select Number of Coats",
      description:
        "Choose 1, 2, or 3 coats. Most interior walls need 2 coats for even, opaque coverage — new or bare walls, or a major colour change (e.g. dark to light), often need a 3rd coat or a coat of primer first.",
      icon: "result",
    },
    {
      step: 3,
      title: "Choose Paint Type",
      description:
        "Select distemper, emulsion, enamel, or exterior weatherproof paint. Each type has a different coverage rate per litre, which directly changes how much paint you'll need for the same wall area.",
      icon: "location",
    },
    {
      step: 4,
      title: "View Paint Required & Cost",
      description:
        "See the total litres needed, how many cans to buy (in standard 1L, 4L, 10L, and 20L sizes), and an estimated total cost based on average market rates for your chosen paint type.",
      icon: "clock",
    },
  ],

  formula: {
    title: "Paint Quantity Formula",

    formula:
      "Paint Required (Litres) = (Paintable Area in sq ft ÷ Coverage per Litre) × Number of Coats",

    explanation:
      "The core calculation starts with your paintable area, not your total wall area — this is an important distinction most people miss. Paintable area is your total wall area minus the space taken up by doors, windows, and any built-in fixtures, since you don't paint over those. A standard deduction of roughly 10-15% of total wall area is typically applied for a room with average-sized doors and windows, though this can vary if you have unusually large windows, sliding doors, or a feature wall with built-in wardrobes.\n\nOnce you have the paintable area, coverage per litre depends entirely on the paint type you choose. Distemper, the most economical option, typically covers around 120-140 sq ft per litre. Premium emulsion paints generally cover 100-120 sq ft per litre — slightly less than distemper because emulsions are thicker and designed for a smoother, more durable finish. Enamel paint, used mostly for doors, windows, grills, and metal surfaces rather than full walls, covers considerably less per litre, typically 120-150 sq ft but applied in much thinner, more careful coats. Exterior weatherproof paints usually cover 100-110 sq ft per litre, since they're formulated to be thicker and more durable against sun and rain exposure, which reduces their spread rate compared to interior paints.\n\nThe number of coats then multiplies directly against this base quantity. Two coats is the standard recommendation for almost all wall painting, since a single coat rarely gives even, opaque colour — you can usually see patches of the original wall colour or primer showing through. A third coat is typically needed only when painting a significantly darker colour over a lighter one (or vice versa), when the existing wall surface is uneven or heavily stained, or when using a lower-quality paint with weaker pigment concentration. It's also worth budgeting a small wastage allowance — typically 5-10% — on top of the calculated quantity, to account for paint lost during mixing, brush/roller loading, and touch-ups, since running short mid-job and needing to colour-match a second batch is a common and avoidable frustration.",

    example: {
      input:
        "Room: 12 ft × 10 ft, Height: 10 ft, Paint Type: Emulsion, Coats: 2",

      output:
        "Total wall area = (2 × (12+10) × 10) = 440 sq ft. After ~12% deduction for doors/windows → Paintable area ≈ 387 sq ft. At 110 sq ft/litre coverage: 387 ÷ 110 = 3.5 litres per coat × 2 coats = 7 litres total → round up to one 10L can, or a 4L + 4L combination.",
    },

    useCases: [
      "Painting a single room or full house",
      "Estimating paint cost before hiring a painter",
      "Comparing distemper vs emulsion vs exterior paint budgets",
      "Planning primer + paint quantity for new construction",
      "Checking a painter's quoted material quantity against a reasonable estimate",
    ],
  },

  faqs: [
    {
      question: "How much paint do I need for a 1000 sq ft house?",
      answer:
        "For a typical 1,000 sq ft house (built-up area), the actual wall surface area to be painted is usually 2.5 to 3 times the floor area once you account for wall height and internal partitions — so you're generally looking at roughly 2,500-3,000 sq ft of paintable wall surface after deducting doors and windows. Using a standard emulsion paint with a coverage of around 110 sq ft per litre and 2 coats, this works out to approximately 45-55 litres of paint for the interior. If you're also painting the exterior, budget separately using exterior paint's lower coverage rate (around 100-110 sq ft per litre) against your home's external wall area, which depends heavily on the number of floors and whether it's a standalone or row house. As a rough all-in figure, most 1,000 sq ft homes need somewhere between 55-75 litres of paint total (interior plus exterior, 2 coats each), though ceilings — often painted a different colour or left white — and any accent walls will shift this number slightly.",
    },
    {
      question: "How many coats of paint does a wall need?",
      answer:
        "Two coats is the standard for the large majority of walls, and it's what most professional painters default to unless there's a specific reason to do otherwise. A single coat almost always leaves the wall looking patchy or translucent, since one thin layer of paint rarely achieves full, even opacity — you can often still see the primer or previous colour showing through in places, especially under direct light. A third coat becomes necessary in a few specific situations: when you're painting a light colour over a significantly darker existing colour (or vice versa), when the wall surface has visible stains, patches, or uneven texture that need extra coverage to hide, or when you're using a lower-cost paint with lighter pigment concentration that simply needs more layers to look fully opaque. If you're painting a brand-new, bare (unpainted) wall, it's also standard practice to apply one coat of primer first, followed by 2 coats of your chosen paint — the primer isn't counted as one of your 'paint coats' since it uses a separate product with different coverage characteristics, but it should be budgeted as an additional cost line.",
    },
    {
      question: "How much does it cost to paint a house in India?",
      answer:
        "Painting cost in India is made up of two components — the material (paint) cost, and the labour cost — and both vary considerably depending on the paint quality tier and city. For material alone, using a mid-range emulsion paint at 2 coats, you're typically looking at roughly ₹15-25 per sq ft of paintable area. Labour charges for application usually add another ₹12-20 per sq ft depending on the city and the painter's experience, though this can be lower in smaller towns and higher in metro cities where skilled labour costs more. Combined, a reasonable working estimate for a full interior repaint with a standard-quality emulsion is roughly ₹28-45 per sq ft of paintable wall area, all-in. For a typical 1,000 sq ft house with around 2,500-3,000 sq ft of paintable wall area, this generally works out to somewhere in the range of ₹75,000 to ₹1,35,000 for a complete interior repaint, before considering exterior work, ceiling painting, or premium/luxury paint finishes, which push the per-sq-ft rate considerably higher.",
    },
    {
      question: "What is the difference between distemper, emulsion, and enamel paint?",
      answer:
        "These three represent different price points and use cases, and choosing the wrong one for a given surface is a common source of both wasted money and disappointing results. Distemper is the most economical option, typically water-based, and commonly used for budget interior projects, rental properties, or spaces where frequent repainting is expected — it offers the lowest durability and washability of the three, and tends to chalk or fade faster, but costs meaningfully less per litre than emulsion. Emulsion paint sits in the middle to premium range and is the most common choice for interior walls in owner-occupied homes today, offering better washability, richer colour retention, and greater durability against everyday wear — it comes in multiple finish levels (matte, satin, and glossy), with higher-finish variants generally costing more but offering better stain resistance and easier cleaning. Enamel paint is a different category altogether, formulated for hard, glossy, highly durable surfaces rather than large wall areas — it's the standard choice for doors, window frames, grills, railings, and other wood or metal surfaces that see frequent contact and need a hard-wearing, easy-to-wipe finish. Using enamel on large wall surfaces is unusual (it's expensive and creates an overly glossy look for most interiors), just as using basic distemper on high-touch surfaces like door frames would wear out quickly — matching the right paint type to the right surface matters as much as choosing a good brand.",
    },
    {
      question: "How do I calculate the wall area for painting?",
      answer:
        "Start by measuring the perimeter of the room (the total length of all four walls added together), then multiply that by the wall height to get your gross wall area — the formula is 2 × (Length + Width) × Height. This gives you the full wall surface including the space taken up by doors and windows, which you haven't painted over, so the next step is deducting for openings. A standard, quick approximation is to deduct roughly 10-15% of the gross wall area for a room with typical door and window sizes — one standard door and one or two windows. If your room has unusually large openings — a big sliding door, floor-to-ceiling windows, or a wall of built-in wardrobes — measure those openings individually (width × height) and subtract their exact combined area instead of relying on the standard percentage, since the generic deduction can meaningfully underestimate your paint savings in rooms with large glazed areas. Ceilings are calculated separately, using length × width of the floor area, and are often priced and painted differently from walls (frequently in white or a lighter shade), so most estimates keep ceiling area as a distinct line item rather than folding it into the wall calculation.",
    },
    {
      question: "How much area does 1 litre of paint cover?",
      answer:
        "Coverage per litre varies by paint type and, to a lesser extent, by brand and the specific surface being painted, so there's no single universal number — but reasonable working ranges exist for planning purposes. Distemper typically covers around 120-140 sq ft per litre per coat, the highest coverage of the common paint types, which is part of why it's the most economical option per square foot despite also being the lowest-durability finish. Standard emulsion paint generally covers 100-120 sq ft per litre per coat — somewhat less than distemper because emulsion is thicker and formulated for a smoother, more opaque, longer-lasting finish. Exterior weatherproof paints usually cover a similar or slightly lower range, around 100-110 sq ft per litre, since they're formulated with additional weather-resistant additives that make the paint thicker. These figures assume a reasonably smooth, properly prepared wall surface — rough, porous, or heavily textured walls (and any bare, unprimed new construction surface) will absorb more paint and reduce actual coverage below the manufacturer's stated figure, sometimes by 15-20%, which is worth building into your estimate as extra buffer rather than discovering it mid-project.",
    },
    {
      question: "Do I need to apply primer before painting?",
      answer:
        "Primer is strongly recommended, and in some situations essentially necessary, though it isn't always required. For brand-new, unpainted plaster or freshly plastered walls, primer is important because bare plaster is highly porous and will otherwise absorb an uneven amount of your finish paint, leading to patchy colour and requiring extra coats of the more expensive finish paint to compensate — a coat of primer, which is considerably cheaper per litre than emulsion or enamel, effectively seals the surface first so your finish paint goes on evenly and you need fewer coats of it. Primer is also advisable when making a major colour change, particularly going from a dark colour to a light one, since primer (usually white or a neutral base) blocks the old colour from showing through far more effectively and economically than relying on 2-3 coats of the new, lighter paint alone. If you're simply repainting a wall in a similar colour, on a surface that's already been painted before and is in reasonably good condition, you can often skip primer and go directly to 2 coats of your finish paint. As a rule of thumb: new construction and major colour changes should budget for primer; a straightforward repaint in a similar shade on an already-painted, sound wall usually doesn't need it.",
    },
    {
      question: "How much paint wastage should I account for?",
      answer:
        "A wastage allowance of roughly 5-10% on top of your calculated paint quantity is a reasonable standard buffer, and it's worth building into your budget rather than treating it as an afterthought. Wastage comes from a few practical, largely unavoidable sources: paint left in the tray or bucket that can't be fully used, paint absorbed into brushes and rollers during loading, extra paint used around edges, corners, and trim where cutting-in requires more careful, sometimes repeated application, and colour-matching touch-ups needed after the main job if small imperfections or missed spots are noticed once the paint dries and full lighting reveals them. Rough or textured wall surfaces also consume noticeably more paint than the manufacturer's stated coverage rate assumes, since texture increases the effective surface area the paint has to cover — if your walls have visible texture (as opposed to smooth plaster), it's worth increasing your wastage buffer toward the higher end of the 5-10% range, or even slightly above it, rather than assuming standard smooth-wall coverage figures will hold.",
    },
    {
      question: "Is it cheaper to hire a painter or do it myself (DIY)?",
      answer:
        "On pure material cost, DIY painting is cheaper simply because you avoid labour charges entirely, which typically make up close to half of a professional paint job's total cost. However, this comparison misses a few practical factors worth weighing before deciding. Professional painters generally achieve smoother, more even results with fewer visible brush or roller marks, and they typically work faster, completing a full room or house in a fraction of the time a first-time DIY painter would need, since technique and experience matter considerably for a clean finish. DIY painting also carries a real risk of using more paint than a professional would for the same area, since inconsistent technique (uneven pressure, re-rolling already-painted sections, thicker-than-necessary coats) tends to increase actual paint consumption above the calculated estimate, partially or fully offsetting the labour savings. For a small, low-stakes project — a single accent wall, a child's room, or a rental you're not too precious about — DIY can be a genuinely cost-effective and satisfying option. For a full house repaint, exterior work at height, or any surface where a smooth, professional-looking finish matters (living rooms, surfaces near natural light that show every imperfection), hiring a painter is usually worth the added labour cost, both for the time saved and for a more consistent, longer-lasting result.",
    },
  ],

  seoContent: `
<h2>What Is a Paint Calculator?</h2>
<p>
  A Paint Calculator helps you work out exactly how much paint to buy before you start a painting project — whether that's a single room, a full house interior, or an exterior repaint. It takes your wall area (or room dimensions), your chosen paint type, and the number of coats you plan to apply, and converts these into a litre quantity and an estimated cost. This matters more than it might seem: buying too little paint means a mid-project trip back to the store and the risk of a slightly different batch not matching your original colour exactly, while buying too much means unnecessary expense and leftover paint that often goes to waste once it's opened.
</p>
<p>
  Like any estimation tool, this calculator gives you a well-informed planning figure, not an exact-to-the-millilitre guarantee. Actual paint consumption depends on your specific wall texture, painting technique, brush versus roller application, and how porous or previously-painted your surface is — all of which shift real-world coverage somewhat from a manufacturer's stated rate. Use the result as your starting shopping list, and keep the wastage buffer in mind rather than buying the exact calculated litres with nothing extra.
</p>

<h2>Why Getting Paint Quantity Right Matters</h2>
<p>
  Painting is one of the few home improvement costs where both under-buying and over-buying carry real downsides. Running short mid-project is disruptive — you have to pause, buy more, and hope the new can matches your existing paint closely enough that the join isn't visible, which becomes a genuine risk with custom-tinted colours where even the same "shade name" can vary slightly between batches. Over-buying, on the other hand, ties up money in paint that often can't be returned once opened, and paint that sits unused for a long period can separate, thicken, or degrade before you get around to using it for touch-ups.
</p>
<p>
  Getting the estimate right also helps when you're hiring a painter, since it gives you a reasonable independent benchmark to compare against their quoted material quantity — a useful check against both accidental overestimation (padding the material cost) and underestimation (a quote that looks attractively low because it's based on too little paint, with the shortfall becoming your problem, or an unexpected added cost, partway through the job).
</p>

<h2>Average Paint Cost Per Sq Ft in India</h2>
<table>
  <tr><th>Paint Type</th><th>Material Cost (per sq ft, 2 coats)</th><th>Typical Use</th></tr>
  <tr><td>Distemper</td><td>₹8–14</td><td>Budget interiors, rental properties</td></tr>
  <tr><td>Standard Emulsion</td><td>₹15–25</td><td>Most interior walls</td></tr>
  <tr><td>Premium/Luxury Emulsion</td><td>₹25–45</td><td>Living rooms, feature walls, higher-end finish</td></tr>
  <tr><td>Exterior Weatherproof</td><td>₹20–35</td><td>External walls, weather exposure</td></tr>
  <tr><td>Enamel</td><td>₹30–50</td><td>Doors, windows, grills, metal surfaces</td></tr>
</table>
<p>
  These figures cover material cost only. Add labour separately — typically ₹12-20 per sq ft depending on your city and the painter's experience — to arrive at a full, all-in painting cost.
</p>

<h2>Paint Coverage by Type (Per Litre, Per Coat)</h2>
<table>
  <tr><th>Paint Type</th><th>Coverage per Litre</th></tr>
  <tr><td>Distemper</td><td>120–140 sq ft</td></tr>
  <tr><td>Standard Emulsion</td><td>100–120 sq ft</td></tr>
  <tr><td>Exterior Weatherproof</td><td>100–110 sq ft</td></tr>
  <tr><td>Enamel</td><td>120–150 sq ft (thin coats)</td></tr>
</table>
<p>
  These are manufacturer-typical ranges for a reasonably smooth, prepared surface. Rough, textured, or unprimed porous walls will absorb more paint and reduce actual coverage — build in extra buffer if your walls fall into that category.
</p>

<h2>Estimated Paint Quantity by House Size</h2>
<table>
  <tr><th>House Size (Built-up Area)</th><th>Approx. Paintable Wall Area</th><th>Emulsion Needed (2 Coats)</th></tr>
  <tr><td>1 BHK (~500 sq ft)</td><td>1,200–1,400 sq ft</td><td>22–28 litres</td></tr>
  <tr><td>2 BHK (~800 sq ft)</td><td>1,900–2,200 sq ft</td><td>35–42 litres</td></tr>
  <tr><td>3 BHK (~1,200 sq ft)</td><td>2,800–3,300 sq ft</td><td>52–62 litres</td></tr>
  <tr><td>Independent house (1,500 sq ft, 2 floors)</td><td>3,600–4,200 sq ft</td><td>66–78 litres</td></tr>
</table>
<p>
  These figures cover interior walls only, using standard emulsion at 2 coats. Ceilings, exterior walls, and enamel work on doors/windows are separate additions to these totals.
</p>

<h2>How to Reduce Paint Wastage and Cost</h2>
<ul>
  <li><strong>Measure carefully before buying:</strong> Use actual room dimensions rather than rough guesses — the deduction for doors and windows adds up meaningfully across a full house.</li>
  <li><strong>Buy in bulk sizes where possible:</strong> A single 20L can is usually cheaper per litre than several smaller cans, and reduces the risk of slight colour variation between different batches.</li>
  <li><strong>Use primer on new or bare walls:</strong> Primer is cheaper than finish paint and reduces how many coats of the more expensive paint you need for full opacity.</li>
  <li><strong>Choose the right finish for the surface:</strong> Don't use premium emulsion on surfaces that see little wear, or basic distemper on high-touch areas that will need repainting sooner as a result.</li>
  <li><strong>Get a small sample first:</strong> For a custom or unfamiliar colour, a small sample tester can confirm the shade looks right under your room's actual lighting before you commit to buying the full quantity.</li>
</ul>

<h2>Common Mistakes When Estimating Paint</h2>
<p>
  The most frequent mistake is calculating paint based on floor area instead of wall area — these are very different numbers, and using floor area will significantly under- or over-estimate your actual requirement depending on ceiling height. A second common mistake is forgetting to deduct for doors and windows, which can overstate paint needed by 10-15% for a typical room. Skipping the wastage buffer is another frequent gap, since real-world application always uses somewhat more paint than the theoretical coverage rate suggests, especially on textured surfaces or with less experienced painters. Finally, mixing up single-coat and two-coat coverage is an easy error — always confirm whether the coverage rate you're using from a paint can label is per coat, and multiply by your intended number of coats accordingly, since the number on the can typically reflects a single-coat application only.
</p>

<h2>Who Should Use This Calculator?</h2>
<ul>
  <li>Homeowners planning to paint a room, full house interior, or exterior.</li>
  <li>Anyone comparing a painter's quoted material quantity against a reasonable independent estimate.</li>
  <li>People deciding between distemper, emulsion, and premium finishes based on budget.</li>
  <li>New homeowners planning primer and finish paint quantities for freshly constructed walls.</li>
  <li>DIY painters wanting to buy the right amount of paint the first time, without a mid-project store run.</li>
</ul>

<h2>Limitations of This Calculator</h2>
<p>
  This calculator provides a planning-stage estimate based on typical coverage rates for standard paint types on a reasonably smooth, prepared surface. It cannot account for unusually rough or heavily textured walls, the specific brand and product line you choose (coverage varies somewhat between manufacturers), your painting technique, or site-specific conditions like humidity, which can affect drying time and, indirectly, how evenly paint settles. Use the result as a starting shopping list, add a wastage buffer, and confirm exact quantities against the specific paint brand's coverage guidance printed on the can before making your final purchase.
</p>
`,
};