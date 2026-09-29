import type { Calculator } from "@/src/types/calculator";

export const staircaseCalculator: Calculator = {
  slug: "staircase-calculator",
  name: "Staircase Calculator",
  description:
    "Calculate staircase steps, riser height, tread depth, total run, stair angle, and stringer length from your floor-to-floor height and available space.",
  category: "Construction",
  compareWith: [
    "house-construction-cost-calculator",
    "concrete-calculator",
    "rebar-cutting-length-calculator",
    "tile-calculator",
  ],
  editorialIntro:
    "Use feet or metres for the overall dimensions and set a preferred riser height in millimetres. The calculator rounds to a whole number of equal risers, then checks the resulting proportions for general residential planning comfort.",
  seo: {
    title: "Staircase Calculator India - Riser, Tread, Steps & Angle",
    description:
      "Calculate staircase risers, treads, total run, stair angle and stringer length in feet or metres. Free stair planning calculator for Indian homes.",
    keywords: [
      "staircase calculator",
      "stair calculator India",
      "riser tread calculator",
      "stair steps calculator",
      "staircase angle calculator",
      "staircase calculation formula",
      "number of steps calculator",
    ],
  },
  steps: [
    {
      step: 1,
      title: "Measure the Floor Height",
      description: "Measure vertically from the finished lower floor to the finished upper floor, not just the clear ceiling height.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter the Available Run",
      description: "Measure the horizontal space available for the straight stair flight. Landings and turns must be planned separately.",
      icon: "location",
    },
    {
      step: 3,
      title: "Choose a Target Riser",
      description: "Start with a comfortable target. The calculator adjusts it slightly so every riser has the same finished height.",
      icon: "result",
    },
    {
      step: 4,
      title: "Review the Proportions",
      description: "Check the step count, actual riser, tread depth, angle, sloping length and the 2R + T comfort value.",
      icon: "clock",
    },
  ],
  formula: {
    title: "Staircase Riser and Tread Formula",
    formula:
      "Risers = Round(Floor Height ÷ Target Riser); Actual Riser = Floor Height ÷ Risers; Tread = Available Run ÷ (Risers − 1)",
    explanation:
      "A stair must use a whole number of equal risers. The calculator first estimates that count from the preferred riser height, rounds it to a whole number, and divides the total floor height again to produce the actual equal riser height. For a straight flight ending at the upper floor, the number of treads is normally one fewer than the number of risers. The available horizontal run divided by those treads gives the tread depth. It also calculates the sloping length with the Pythagorean theorem and the stair angle with trigonometry. The 2R + T value is shown as a general comfort check, but project drawings and applicable local rules always take priority.",
    example: {
      input: "Floor height 10 ft, available run 15 ft, target riser 170 mm",
      output: "The tool selects 18 equal risers, 17 treads, an actual riser of about 169 mm, and a tread of about 269 mm.",
    },
    useCases: [
      "Early house-plan staircase sizing",
      "Checking whether a straight flight fits",
      "Estimating riser and tread dimensions",
      "Comparing stair layouts before detailed design",
      "Estimating sloping slab or stringer length",
    ],
  },
  faqs: [
    {
      question: "How do I calculate the number of steps in a staircase?",
      answer: "Divide the finished floor-to-floor height by the preferred riser height, round to a practical whole number, and divide the floor height by that whole number again. That second calculation gives the actual equal riser height. A straight flight that finishes on the upper floor normally has one fewer tread than risers.",
    },
    {
      question: "What measurements should I enter?",
      answer: "Use the vertical distance from one finished floor level to the next finished floor level and the horizontal space available for the stair flight. Do not use only the ceiling height, and do not include a landing in the straight-flight run unless your layout has been designed that way.",
    },
    {
      question: "What does the 2R + T value mean?",
      answer: "It combines twice the riser height with one tread depth as a quick way to assess walking proportions. This calculator treats 550–700 mm as a broad planning range. It is a comfort indicator, not proof that a staircase complies with every residential, accessibility, fire or local building requirement.",
    },
    {
      question: "Can I use this result directly for construction?",
      answer: "Use it for planning and comparison only. A qualified architect or structural engineer should confirm the final layout, headroom, landing dimensions, width, handrails, reinforcement, loads, accessibility, fire escape provisions and the rules applicable to the specific building and location.",
    },
  ],
  seoContent: `
<h2>How to Plan Staircase Dimensions</h2>
<p>A practical staircase starts with two fixed dimensions: the finished floor-to-floor height and the horizontal space available. Because every riser in a flight should be equal, the desired riser is only a starting point. The total rise must be divided into a whole number of equal steps.</p>
<p>After selecting the number of risers, calculate the actual riser height by dividing the total rise by that number. For a straight flight that uses the upper floor as the final walking surface, there is generally one fewer tread than risers. Dividing the available run by the number of treads gives the tread depth.</p>
<h2>Why Available Run Matters</h2>
<p>A short run forces the treads to become shallower or the staircase to become steeper. If the result is uncomfortable, adding a landing and turning the staircase into an L-shaped or U-shaped layout may fit the same floor height into the building more safely. This calculator covers one straight flight; it does not automatically design landings or multi-flight geometry.</p>
<h2>Important Checks Beyond Riser and Tread</h2>
<p>Final stair design also depends on clear width, headroom, landing length, handrail and guard details, structural support, accessibility, occupancy and fire-escape requirements. These factors cannot be approved from rise and run alone. Treat the result as an early planning estimate and have the construction drawings checked for the building type and local jurisdiction.</p>
`,
};
