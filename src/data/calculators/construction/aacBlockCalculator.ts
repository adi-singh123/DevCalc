import type { Calculator } from "@/src/types/calculator";

export const aacBlockCalculator: Calculator = {
  slug: "aac-block-calculator",
  name: "AAC Block Calculator",
  description: "Estimate AAC blocks, wall volume, wastage, adhesive bags, and material cost after deducting door and window openings.",
  category: "Construction",
  compareWith: ["brick-calculator", "cement-calculator", "house-construction-cost-calculator", "paint-calculator"],
  editorialIntro: "Calculate an AAC wall take-off from net wall area and the actual block face size. Thickness changes wall volume, while block length and height determine the block count.",
  seo: {
    title: "AAC Block Calculator India - Blocks, Adhesive Bags & Cost",
    description: "Estimate AAC blocks for a wall with openings, wastage, adhesive bags and cost. Supports common 600 mm AAC block sizes used in India.",
    keywords: ["AAC block calculator", "AAC blocks per square feet", "AAC block quantity calculator", "AAC block adhesive calculator", "AAC wall cost calculator India", "600x200 AAC block calculation"],
  },
  steps: [
    { step: 1, title: "Measure the Wall", description: "Enter total wall length and height in feet or metres.", icon: "location" },
    { step: 2, title: "Deduct Openings", description: "Add the combined face area of doors, windows, and other large openings.", icon: "calculator" },
    { step: 3, title: "Confirm Block Size", description: "Use the actual supplier dimensions and the wall thickness selected for the project.", icon: "clock" },
    { step: 4, title: "Plan the Order", description: "Review whole blocks, wastage, adhesive bags, wall volume, and optional cost.", icon: "result" },
  ],
  formula: {
    title: "AAC Block Quantity Formula",
    formula: "Blocks = Net wall area ÷ block face area × (1 + wastage%); Wall volume = net area × thickness",
    explanation: "Door and window area is deducted before dividing by the face area of one block. The result is increased by the selected cutting and breakage allowance and rounded up to a whole block. Adhesive bags use the editable coverage printed for the chosen product rather than guessing from block volume.",
    example: { input: "30 ft × 10 ft wall, 40 sq ft openings, 600 × 200 mm blocks, 5% wastage", output: "The net wall area is 260 sq ft and the order is approximately 221 whole blocks." },
    useCases: ["AAC partition wall quantity", "Door and window deductions", "Adhesive bag planning", "Supplier quote comparison", "Preliminary wall material budget"],
  },
  faqs: [
    { question: "How many 600 × 200 mm AAC blocks are needed per square metre?", answer: "Ignoring joints, one block covers 0.12 m², so the geometric rate is about 8.33 blocks per m². Actual ordering should include cutting and breakage allowance." },
    { question: "Does block thickness change the number of blocks?", answer: "Not when length and height are unchanged. Thickness changes wall volume and weight, but the visible face area—and therefore the count—stays the same." },
    { question: "How much wastage should I add?", answer: "A small allowance such as 3–7% is often used for preliminary planning, but wall geometry, handling, chasing, workmanship, and supplier packaging can change the requirement." },
    { question: "Does this prove an AAC wall is structurally suitable?", answer: "No. Block grade, density, strength, fire and acoustic performance, support, movement joints, lintels, and load-bearing suitability require the project specification and professional review." },
  ],
  seoContent: `<h2>How AAC Block Quantity Is Estimated</h2><p>Start with the gross elevation area of the walls, then subtract doors and windows. Divide that net area by the length × height face of one block. Add a practical cutting and breakage allowance and round upward because blocks are purchased as whole units.</p><h2>Why Wall Thickness Still Matters</h2><p>A 100 mm and a 200 mm block can have the same 600 × 200 mm face, so both cover the same wall area per block. The thicker block creates twice the wall volume and affects weight, handling, cost and performance even though the face count is unchanged.</p><h2>Check Product Data Before Ordering</h2><p>Actual dimensions, pack quantities, adhesive coverage and tolerances vary by manufacturer. Use the supplier's current technical data and obtain a site-specific take-off before placing a final order.</p>`,
};
