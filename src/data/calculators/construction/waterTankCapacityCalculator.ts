import type { Calculator } from "@/src/types/calculator";

export const waterTankCapacityCalculator: Calculator = {
  slug: "water-tank-capacity-calculator",
  name: "Water Tank Capacity Calculator",
  description: "Calculate rectangular or cylindrical water tank capacity in litres, cubic metres, and US gallons from internal dimensions.",
  category: "Construction",
  compareWith: ["house-construction-cost-calculator", "concrete-calculator", "staircase-calculator", "paint-calculator"],
  editorialIntro: "Enter the tank's internal dimensions, choose its shape, and optionally set a usable fill level. The result shows gross and usable storage plus an indicative household supply duration.",
  seo: {
    title: "Water Tank Capacity Calculator - Litres from Tank Size",
    description: "Calculate rectangular and cylindrical water tank capacity in litres from feet or metres. Includes usable volume and household water-duration estimate.",
    keywords: ["water tank capacity calculator", "tank volume calculator litres", "overhead tank calculator", "rectangular water tank calculator", "cylindrical tank capacity calculator", "water tank size in litres"],
  },
  steps: [
    { step: 1, title: "Choose the Tank Shape", description: "Select a rectangular tank or a vertical cylindrical tank.", icon: "calculator" },
    { step: 2, title: "Enter Internal Dimensions", description: "Use clear inside dimensions so wall thickness is not counted as stored water.", icon: "location" },
    { step: 3, title: "Set the Usable Fill", description: "Allow for freeboard or a level below the tank's full height if needed.", icon: "clock" },
    { step: 4, title: "Review Capacity", description: "See gross capacity, usable litres, gallons, and estimated household duration.", icon: "result" },
  ],
  formula: {
    title: "Water Tank Capacity Formula",
    formula: "Rectangular: L × W × H; Cylindrical: π × r² × H; Litres = cubic metres × 1,000",
    explanation: "The calculator converts every entered dimension to metres before finding volume. For a rectangular tank it multiplies internal length, width, and height. For a cylindrical tank it uses half the internal diameter as the radius. Usable capacity is gross volume multiplied by the chosen fill percentage.",
    example: { input: "Rectangular tank: 6 ft × 4 ft × 4 ft at 90% usable fill", output: "Gross capacity is about 2,718 litres and usable capacity is about 2,446 litres." },
    useCases: ["Sizing an overhead household tank", "Checking an underground sump", "Converting tank dimensions to litres", "Estimating backup-water duration"],
  },
  faqs: [
    { question: "Should I use internal or external tank dimensions?", answer: "Use internal clear dimensions. External dimensions include the wall thickness and therefore overstate the volume available for water." },
    { question: "Why is usable capacity lower than gross capacity?", answer: "A tank may not be filled to the brim because of overflow level, freeboard, pipe position, sediment allowance, or operating practice. Adjust the fill percentage to reflect the actual maximum water level." },
    { question: "How many litres are in one cubic metre?", answer: "One cubic metre equals exactly 1,000 litres. One cubic foot is approximately 28.3168 litres." },
    { question: "Can this calculator select the structural tank size?", answer: "No. It estimates liquid volume only. A qualified professional should design the structure, reinforcement, foundation, waterproofing, access, overflow, and plumbing." },
  ],
  seoContent: `<h2>How to Calculate Water Tank Capacity</h2><p>Measure the clear space inside the tank. A rectangular tank uses length × width × water height. A round vertical tank uses π × radius² × water height. After converting the volume to cubic metres, multiply by 1,000 to obtain litres.</p><h2>Gross Capacity and Usable Storage</h2><p>Catalogue capacity often describes the tank at its full geometric volume. In practice the overflow, inlet arrangement, freeboard and minimum pump level can reduce the water you can use. The fill control lets you plan with a more realistic operating volume.</p><h2>Planning Household Storage</h2><p>Daily use varies substantially with household size, fixtures and habits. The duration result is only a planning comparison based on the daily litres per person you enter. Confirm local supply conditions and obtain professional advice for structural and plumbing design.</p>`,
};
