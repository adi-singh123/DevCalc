import { Calculator } from "@/src/types/calculator";

export const brickCalculator: Calculator = {
  slug: "brick-calculator",

  name: "Brick Calculator",

  description:
    "Estimate bricks or blocks for a wall from its length, height, and thickness, including joint volume, wastage, unit price, and material cost.",
  category: "Construction",

  isPopular: true,

  editorialIntro:
    "Estimate masonry from net wall volume and the selected unit's nominal size, including its mortar joint. Measure actual supplier dimensions before ordering because modular bricks, regional bricks, fly-ash bricks, and AAC blocks differ substantially.",

  benchmarkContext: {
    title: "Bureau of Indian Standards (IS 1077 & IS 2212) Masonry Rules",
    badge: "Civil Engineering Standards",
    stat: "500 Bricks / m³ (IS 2212 Standard Rule)",
    description:
      "Standard modular brick dimension is 190 × 90 × 90 mm (nominal 200 × 100 × 100 mm with 10mm mortar). Traditional red clay brick size is 9″ × 4.25″ × 2.75″ (225 × 110 × 75 mm). A 5% to 10% cutting and transit breakage allowance is standard.",
    source: "Bureau of Indian Standards (BIS) & Central Public Works Department (CPWD)",
    lastUpdated: "January 2026",
  },

  compareWith: [
    "cement-calculator",
    "house-construction-cost-calculator",
    "concrete-calculator",
  ],

  seo: {
    title: "Brick Calculator: Wall Quantity, Mortar and Cost",

    description:
      "Estimate bricks for a 4.5-inch or 9-inch wall, including mortar, wastage, and cost. Supports red clay, fly ash, AAC blocks, and custom dimensions.",
    keywords: [
      "brick calculator",
      "brick quantity estimator",
      "brick and mortar calculator",
      "wall brick calculator",
      "brick cost calculator",
      "red clay brick estimation",
      "fly ash brick calculator",
      "aac block quantity calculator",
      "masonry material calculator",
      "how many bricks for 100 sq ft wall",
      "4.5 inch wall brick quantity calculator",
      "9 inch wall brick quantity calculator",
      "brick calculation with door and window openings",
      "brick quantity calculator with wastage",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Wall Dimensions",
      description:
        "Input the absolute length, height, and structural thickness of the targeted walls in feet, inches, or meters.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Choose Brick Type & Size",
      description:
        "Select from standard Indian brick dimensions, modular blocks, fly ash brick parameters, or key in unique custom sizes.",
      icon: "list",
    },
    {
      step: 3,
      title: "Add Wastage Percentage",
      description:
        "Incorporate a safety margin for processing cuts, transit damage, structural bonding fragmentations, and site masonry handling waste.",
      icon: "target",
    },
    {
      step: 4,
      title: "View Material Estimates",
      description:
        "Instantly analyze your complete inventory breakdown including total brick count, absolute mortar volume, and cost runtimes.",
      icon: "result",
    },
  ],

  formula: {
    title: "Brick Quantity Estimation Method",

    formula:
      "Number of Bricks = (Total Volume of Wall ÷ Volume of Single Brick with Mortar Joint) × (1 + Wastage Percentage ÷ 100)",

    explanation:
      "The computation derives structural masonry requirements by establishing the net cubic volume of the targeted layout. It divides this network volume by the individual displacement space of a single unit block after accounting for a standard 10mm (or 0.4 inches) surrounding bedding layer of mortar mix.",

    example: {
      input:
        "Wall Length: 20 ft, Height: 10 ft, Thickness: 9 inch, Standard 10% Wastage",

      output:
        "Estimated Modular Bricks: 2,338, rounded up after adding 10% wastage",
    },

    useCases: [
      "Residential House Construction",
      "Room Partitions and Extensions",
      "Boundary and Compound Retaining Walls",
      "Commercial Superstructures",
      "Procurement Material Estimation",
    ],
  },

  faqs: [
    {
      question: "How many bricks are typically required to construct a standard 1000 square foot residential house in India?",
      answer:
        "The gross quantity of bricks needed for a 1000 sq ft home varies significantly based on structural floor plans, target ceiling heights, and structural designs. In typical Indian residential masonry projects, a single-floor layout of this footprint needs between 8,000 and 14,000 structural bricks. This dynamic range depends on the proportion of load-bearing external 9-inch outer perimeter walls versus internal 4.5-inch partition walls. If you incorporate multi-panel window arrays, heavy structural columns, or expansive front verandas, the required brick count drops due to structural openings. Conversely, executing independent boundary property perimeter wall configurations alongside the house structure can push your logistical footprint past 18,000 bricks total.",
    },
    {
      question: "What are the regulatory and actual standard brick sizes utilized across masonry projects in India?",
      answer:
        "According to the Bureau of Indian Standards (BIS) regulatory framework, the official dimensions specified for a standard modular building brick are precisely 190 mm in length, 90 mm in width, and 90 mm in thickness (19 x 9 x 9 cm). However, when a mason lays these units into a wall structure, a standard uniform 10 mm mortar joint is applied to all bedding faces. This updates the calculation matrix to a nominal layout size of 200 mm × 100 mm × 100 mm (20 x 10 x 10 cm). It is worth noting that traditional non-modular red clay field bricks, which remain common across regional markets, often measure roughly 230 mm × 110 mm × 75 mm (approx 9 x 4.25 x 3 inches), requiring careful configuration checks before launching automated ordering pipelines.",
    },
    {
      question: "Why do structural engineers stress adding a explicit wastage allowance, and what percentage is safe?",
      answer:
        "Accounting for an explicit structural wastage margin is necessary to prevent procurement shortages and costly site stoppages. During freight shipping, manual field offloading, and on-site transport, a portion of brittle clay or fly ash bricks will break into unusable pieces. Furthermore, masons must repeatedly chop whole bricks into halves, quarters, or bat coordinates to establish staggered structural bonds (like English or Flemish bonding patterns) and clean corners around structural columns. Civil engineers uniformly recommend building a 5% to 10% wastage buffer directly into your bill of quantities. For simple straight boundary lines, a 5% safety index works well, whereas detailed architectural floor plans with frequent corners, window frames, and embedded utility plumbing lines demand a full 10% overhead safety ceiling.",
    },
    {
      question: "How do you calculate brick quantity when dealing with varying wall thickness dimensions?",
      answer:
        "Wall thickness fundamentally changes the underlying volume calculations. In structural brickwork, walls are generally split into two categories: outer load-bearing walls, which measure 9 inches thick (referred to as full-brick walls), and internal partition walls, which measure 4.5 inches thick (half-brick walls). A 9-inch wall requires roughly double the volume of bricks and mortar per square face unit compared to a partition line, as it uses two parallel layers of bricks bound together sideways. When estimating a complete structure, it is critical to calculate the total length of your 9-inch walls and 4.5-inch walls separately. Multiplying their respective face profiles by their actual thickness metrics gives you accurate cubic volumes, preventing significant estimation errors.",
    },
    {
      question: "Red Clay Bricks vs. Fly Ash Bricks vs. AAC Blocks: Which option is best for modern construction?",
      answer:
        "The ideal choice depends on your project's specific mechanical constraints, budget parameters, and local environmental factors. Traditional red clay bricks offer excellent compressive strengths and reliable structural durability, but they often present minor dimensional variances that increase overall mortar usage. Fly ash bricks, manufactured using industrial industrial byproducts, offer highly uniform shapes, smoother exterior plaster configurations, higher moisture resistance, and competitive pricing. Autoclaved Aerated Concrete (AAC) blocks are significantly larger than standard bricks (typically replacing the volume of 6 to 9 standard units), lightweight, and provide outstanding thermal and acoustic insulation. While AAC blocks reduce the structural dead load of high-rise frames and speed up on-site installation timelines, they require specialized adhesive compounds and skilled labor.",
    },
    {
      question: "How do you calculate and subtract door, window, and structural lintel openings from a masonry footprint?",
      answer:
        "Failing to account for structural openings is a common mistake that can lead to significant material overestimation. To calculate your requirements accurately, first compute the absolute solid cubic volume of the wall as if it were completely solid. Next, measure the rough frame dimensions of every door and window opening built into that specific wall section and multiply those dimensions by the target wall thickness to determine their displacement volume. Do the same for reinforced concrete lintels or tie-beams running through the brickwork. Subtract the combined volume of these openings from the initial solid wall volume. This step gives you the net structural masonry volume, ensuring your final brick order closely matches actual on-site assembly needs.",
    },
  ],

  seoContent: `
<h2>How to Calculate Bricks for a Wall, Including Mortar and Wastage</h2>
<p>
  Enter the wall length and height in feet, choose its thickness, then select the masonry unit. The calculator divides net wall volume by the selected unit's nominal volume, which includes the assumed joint, and adds the chosen wastage percentage.
</p>
<p>
  Results are planning estimates. Measure units from the intended supplier and deduct doors, windows, RCC columns and beams before placing an order.
</p>

---

<h2>The Underlying Mathematics: How Brick Quantities are Computed</h2>
<p>
  Brick quantity is based on volume, so wall thickness matters. Use the same unit system throughout the calculation:
</p>
<p>
  <strong>Step 1: Calculate Gross Wall Volume</strong><br>
  First, determine the overall cubic displacement space of the proposed layout by multiplying the physical wall dimensions:
</p>
<p align="center">Gross Wall Volume (cubic feet) = Length (feet) x Height (feet) x Thickness (feet)</p>

<p>
  <strong>Step 2: Subtract Structural Openings</strong><br>
  Next, calculate and subtract the volume of any doors, windows, structural columns, and reinforced concrete lintels embedded in the wall to find the net masonry volume:
</p>
<p align="center">Net Masonry Volume = Gross Wall Volume - Combined Volume of Openings</p>

<p>
  <strong>Step 3: Account for Mortar Joint Volume</strong><br>
  Bricks are never laid dry; they are bedded within a structural layer of cement-sand mortar that typically averages 10 mm (approx. 0.4 inches) in thickness. The calculator accounts for this by adding the mortar joint thickness directly to the individual brick dimensions before dividing:
</p>
<p align="center">Nominal Brick Volume = (Brick Length + Mortar Joint) x (Brick Width + Mortar Joint) x (Brick Height + Mortar Joint)</p>

<p>
  <strong>Step 4: Execute Final Division and Apply Wastage Factor</strong><br>
  Finally, divide the net wall volume by the nominal brick volume to establish your baseline count, then apply your chosen safety wastage percentage:
</p>
<p align="center">Total Bricks Required = (Net Masonry Volume / Nominal Brick Volume) x (1 + Wastage Percentage / 100)</p>

---

<h2>Standard Structural Dimensions Table: Modular vs. Regional Formats</h2>
<p>
  Selecting the correct raw block specifications within the estimation portal is critical, as regional manufacturing differences can noticeably alter your final unit counts. The table below outlines standard dimensions for common masonry units used across modern construction projects:
</p>

<table>
  <thead>
    <tr>
      <th>Classification Type</th>
      <th>Standard Dimensions (Length x Width x Height)</th>
      <th>Nominal Size with 10mm Mortar Applied</th>
      <th>Approx. Weight per Unit</th>
      <th>Primary Material Composition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>BIS Modular Brick</strong></td>
      <td>190 x 90 x 90 mm</td>
      <td>200 x 100 x 100 mm</td>
      <td>3.0 - 3.5 kg</td>
      <td>Kiln-Fired Natural Red Clay</td>
    </tr>
    <tr>
      <td><strong>Traditional Non-Modular Field Brick</strong></td>
      <td>230 x 110 x 75 mm</td>
      <td>240 x 120 x 85 mm</td>
      <td>3.5 - 4.2 kg</td>
      <td>Alluvial Clay / Loam Soil mixes</td>
    </tr>
    <tr>
      <td><strong>Fly Ash Structural Brick</strong></td>
      <td>230 x 110 x 75 mm</td>
      <td>240 x 120 x 85 mm</td>
      <td>3.2 - 3.8 kg</td>
      <td>Fly Ash, Cement, Sand, and Gypsum</td>
    </tr>
    <tr>
      <td><strong>Standard AAC Light Block</strong></td>
      <td>600 x 200 x 200 mm</td>
      <td>600 x 200 x 200 mm (Thin Joint)</td>
      <td>12.0 - 15.0 kg</td>
      <td>Autoclaved Aerated Concrete</td>
    </tr>
  </tbody>
</table>

---

<h2>Analyzing Wall Thickness Profiles: 9-Inch vs. 4.5-Inch Wall Configurations</h2>
<p>
  In residential construction, wall layouts are divided into two primary structural profiles, each requiring a completely different density of material per square foot of surface face:
</p>
<h3>1. External Load-Bearing Walls (9-Inch Thickness)</h3>
<p>
  Often referred to as full-brick walls, these structures are built by laying two parallel courses of bricks tied together with alternating headers and stretchers. These walls provide structural load-bearing capacity, weather insulation, and stability. As a rule of thumb, one square foot of a 9-inch wall face requires roughly 10 standard modular units.
</p>
<h3>2. Internal Partition Isolation Walls (4.5-Inch Thickness)</h3>
<p>
  Often called half-brick walls, these elements act as non-load-bearing room dividers. Bricks are laid end-to-end in a single line, exposing only their long side faces (stretcher position). A 4.5-inch partition wall requires exactly half the material volume of a 9-inch wall, averaging roughly 5 standard modular bricks per square foot of face area.
</p>

---

<h2>Estimating Your Mortar Requirements: Cement and Sand Ratios</h2>
<p>
  The displayed mortar figure is the estimated wet joint volume: net wall volume minus the combined raw volume of the calculated units before wastage. It changes with the unit dimensions and assumed joint thickness.
</p>
<p>
  It does not convert wet mortar into cement and sand quantities because the specified mortar ratio, bulking, site mixing losses and unit absorption must be confirmed for the project. AAC blocks generally use a thin-bed adhesive rather than conventional thick-joint mortar.
</p>

---

<h2>Common Pitfalls in Masonry Estimation</h2>
<ul>
  <li><strong>Neglecting Mortar Displacement Volumes:</strong> Calculating brick counts using raw dimensions without factoring in the surrounding 10mm mortar bed can result in ordering 20% to 25% more bricks than the project actually requires.</li>
  <li><strong>Using Fixed Generic Estimations blindly:</strong> Relying on generic shorthand estimates (like assuming a flat 500 bricks per cubic meter) across different regions can lead to ordering errors due to variations in local brick sizes. Always verify your brick's physical dimensions before placing a final order.</li>
  <li><strong>Forgetting to Deduct Plinth Beams and Columns:</strong> Concrete columns and beams embedded directly within brickwork walls take up significant physical volume. Omitting these structures from your deductions list will cause an overestimation of required masonry units.</li>
</ul>

<h2>Before You Place a Brick or Block Order</h2>
<ul>
  <li>Measure every wall section separately and subtract doors, windows, RCC columns, beams, and other openings.</li>
  <li>Measure a sample unit from the actual supplier; regional brick and AAC block sizes vary.</li>
  <li>Do not use a standard-brick result for AAC blocks, which use different dimensions and thin-joint adhesive.</li>
  <li>Keep transport breakage and cutting waste separate from the calculated net wall quantity.</li>
  <li>Confirm wall thickness, bond pattern, mortar specification, and structural requirements with the project drawings.</li>
</ul>
`,
};
