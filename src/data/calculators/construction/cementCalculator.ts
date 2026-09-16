import { Calculator } from "@/src/types/calculator";

export const cementCalculator: Calculator = {
  slug: "cement-calculator",

  name: "Cement Calculator",

  description:
    "Estimate 50 kg cement bags, cement weight, volume, and cost for slabs, foundations, beams, columns, and floors using project dimensions and concrete grade.",

  category: "Construction",

  isPopular: true,

  editorialIntro:
    "Estimate cement for nominal concrete mixes by converting wet concrete volume to dry material volume, applying the selected cement:sand:aggregate ratio, and dividing the cement volume by 1.226 cubic feet per 50 kg bag.",

  benchmarkContext: {
    title: "Nominal Concrete Mix and Cement Bag Reference",
    badge: "Preliminary Quantity Estimate",
    stat: "1 Bag = 50 kg (Volume: 0.0347 m³ / 1.226 cu.ft)",
    description:
      "The calculator supports nominal M10 (1:3:6), M15 (1:2:4), and M20 (1:1.5:3) volume ratios. Structural concrete must follow the approved mix design and drawings; grade alone does not define a universal site mix.",
    source: "Bureau of Indian Standards (IS 456:2000 Plain and Reinforced Concrete)",
    lastUpdated: "January 2026",
  },

  compareWith: [
    "concrete-calculator",
    "brick-calculator",
    "house-construction-cost-calculator",
  ],

  seo: {
    title: "Cement Calculator: Bags for Slab, RCC and Concrete",

    description:
      "Calculate 50 kg cement bags for a slab, footing, beam, column, or floor. Enter dimensions and concrete grade to estimate cement quantity, weight, and cost.",
    keywords: [
      "cement calculator",
      "cement bag quantity calculator",
      "concrete mix ratio calculator",
      "cement sand aggregate calculator",
      "rcc cement requirement",
      "cement estimation for slab",
      "cement volume calculator",
      "cement bags for foundation",
      "construction cement cost estimator",
      "how many cement bags for concrete slab",
      "50 kg cement bag calculator for RCC",
      "M20 concrete cement bags per cubic metre",
      "cement bags for footing and column calculator",
      "cement quantity from length width thickness",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter Dimensions",
      description:
        "Provide length, width, and thickness of the construction area.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Select Concrete Grade",
      description:
        "Choose an M10, M15, or M20 nominal concrete mix ratio.",
      icon: "list",
    },

    {
      step: 3,
      title: "Enter Cement Cost",
      description:
        "Provide the current cost per cement bag.",
      icon: "target",
    },

    {
      step: 4,
      title: "View Results",
      description:
        "Get cement bags, weight, volume, and total cost instantly.",
      icon: "result",
    },
  ],

  formula: {
    title: "Cement Calculation Formula",

    formula:
      "Bags = [Wet Volume × 1.54 ÷ Total Mix Parts] ÷ 1.226 cu ft per 50 kg Bag",

    explanation:
      "First convert slab dimensions to wet concrete volume. Multiply by 1.54 for an estimating dry-volume allowance, divide by the total parts in the nominal mix to isolate cement volume, then divide by the approximate volume of one 50 kg cement bag.",

    example: {
      input:
        "Length: 20 ft, Width: 15 ft, Thickness: 0.5 ft, Grade: M20",

      output:
        "Wet Volume: 150 cu ft; Dry Volume: 231 cu ft; Cement: 231 ÷ 5.5 ÷ 1.226 = 34.3, rounded up to 35 bags",
    },

    useCases: [
      "House construction",
      "Concrete slab estimation",
      "Foundation construction",
      "Column casting",
      "Flooring projects",
    ],
  },

  faqs: [
    {
      question:
        "How many cement bags are required for a 1000 sq ft house?",
      answer:
        "The number of cement bags depends on the structural design, slab thickness, foundation size, column dimensions, and concrete grade used. A typical 1000 sq ft house may require between 400 and 700 cement bags depending on construction specifications."
    },

    {
      question:
        "How much area does one cement bag cover?",
      answer:
        "Coverage depends on the application. For plastering, flooring, and concrete work, the coverage varies according to thickness and mix ratio. There is no single fixed coverage value for all construction projects."
    },

    {
      question:
        "What is the weight of one cement bag in India?",
      answer:
        "A standard cement bag in India weighs 50 kilograms. Most cement calculations use this standard weight for estimating quantities and costs."
    },

    {
      question:
        "Which concrete grade is best for house construction?",
      answer:
        "The required grade and mix must come from the structural design. IS 456 permits nominal mixes for M20 or lower; higher grades should use a designed mix rather than an assumed fixed ratio."
    },

    {
      question:
        "How do I calculate cement quantity for concrete?",
      answer:
        "First calculate the concrete volume by multiplying length, width, and thickness. Then apply the appropriate mix ratio and dry volume factor to determine the amount of cement required."
    },

    {
      question:
        "Can I use this calculator for slabs and foundations?",
      answer:
        "Yes. The calculator can be used for slabs, footings, foundations, columns, beams, flooring, and most concrete construction projects."
    },

    {
      question:
        "Does cement quantity change with concrete grade?",
      answer:
        "Yes. Higher concrete grades generally require more cement content to achieve greater compressive strength."
    },

    {
      question:
        "How accurate is this Cement Calculator?",
      answer:
        "It is a preliminary material estimate for the listed nominal mixes. Actual batching depends on the approved mix design, aggregate moisture and grading, water-cement ratio, admixtures, placement losses, and site quality control."
    },
  ],

  seoContent: `
<h2>Calculate Cement Bags for Slabs, Footings, Beams and Columns</h2>

<p>
Enter length and width in feet and thickness in inches. The calculator converts those dimensions to wet concrete volume, estimates dry material volume, applies the selected nominal mix, and rounds cement up to complete 50 kg bags. Calculate slabs, beams, columns and footings separately when their dimensions or specified mixes differ.
</p>

<h2>Cement Bag Calculation Formula</h2>
<p>
For dimensions entered in feet and inches, use <strong>wet volume = length × width × (thickness ÷ 12)</strong>. For a preliminary nominal-mix estimate, this calculator uses a dry-volume factor of 1.54. Cement volume equals dry volume divided by the sum of the mix parts. Finally, divide cement volume by 1.226 cubic feet, the approximate volume of a 50 kg bag at 1,440 kg/m³ bulk density.
</p>
<p><strong>Cement bags = [L × W × (T ÷ 12) × 1.54 ÷ total mix parts] ÷ 1.226</strong></p>

<h2>Worked Example: Cement Bags for an M20 Slab</h2>
<p>
A 20 ft × 15 ft slab with a 6-inch thickness has a wet volume of 150 cu ft. Estimated dry volume is 150 × 1.54 = 231 cu ft. For nominal M20 (1:1.5:3), total parts are 5.5, so cement volume is 231 ÷ 5.5 = 42 cu ft. Dividing by 1.226 gives 34.26 bags; round up to <strong>35 bags</strong> before any project-specific allowance.
</p>

<h2>Standard Cement Bag Weight in India</h2>

<table>
<tr>
<th>Material</th>
<th>Weight</th>
</tr>
<tr>
<td>1 Cement Bag</td>
<td>50 kg</td>
</tr>
</table>

<h2>Common Concrete Grades</h2>

<table>
<tr>
<th>Grade</th>
<th>Mix Ratio</th>
<th>Usage</th>
</tr>
<tr>
<td>M10</td>
<td>1:3:6</td>
<td>Basic PCC Work</td>
</tr>
<tr>
<td>M15</td>
<td>1:2:4</td>
<td>Flooring & Pathways</td>
</tr>
<tr>
<td>M20</td>
<td>1:1.5:3</td>
<td>Residential Construction</td>
</tr>
</table>

<h2>How Many Cement Bags Are Required for a House?</h2>

<p>
The cement requirement depends on house size, slab thickness, foundation design, number of floors, and concrete grade. A standard 1000 sq ft house may require several hundred cement bags during construction.
</p>

<h2>Applications of Cement Calculation</h2>

<ul>
<li>House Construction</li>
<li>Concrete Slabs</li>
<li>Columns</li>
<li>Footings</li>
<li>Foundations</li>
<li>Flooring</li>
<li>Driveways</li>
</ul>

<h2>Common Cement Calculation Mistakes</h2>

<ul>
<li>Ignoring wastage.</li>
<li>Using incorrect mix ratios.</li>
<li>Incorrect volume calculations.</li>
<li>Not accounting for dry volume conversion.</li>
</ul>

<h2>Who Should Use This Calculator?</h2>

<ul>
<li>Homeowners</li>
<li>Builders</li>
<li>Contractors</li>
<li>Civil Engineers</li>
<li>Architects</li>
<li>Construction Companies</li>
</ul>

<h2>Pro Tip</h2>

<p>
Do not add an arbitrary allowance before checking the project specification and batching method. Ready-mix concrete is normally ordered by volume, while site-mixed work may need a controlled allowance for handling and placement losses.
</p>

<h2>Nominal Mix Estimate vs. Structural Mix Design</h2>
<p>
This calculator is useful for preliminary quantities based on common nominal mix proportions. Structural RCC work may require a project-specific design mix based on target strength, exposure conditions, aggregate grading, water-cement ratio, admixtures, and site quality control. Use approved structural drawings and the engineer's mix specification for final procurement and concrete placement.
</p>

<h2>Cement Ordering Checklist</h2>
<ul>
<li>Confirm whether dimensions are entered in feet or metres and convert slab thickness correctly.</li>
<li>Calculate slabs, beams, columns, and footings separately before combining quantities.</li>
<li>Check the selected grade and whether ready-mix concrete or site mixing will be used.</li>
<li>Store bags off the floor in a dry, covered area and order in stages when the programme allows.</li>
</ul>
`,
};
