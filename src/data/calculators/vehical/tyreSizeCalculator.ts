import type { Calculator } from "@/src/types/calculator";

export const tyreSizeCalculator: Calculator = {
  slug: "tyre-size-calculator",
  name: "Tyre Size Calculator",
  description: "Compare old and new tyre sizes, overall diameter, sidewall, circumference, ground-clearance change, and speedometer difference.",
  category: "Vehicle",
  compareWith: ["mileage-calculator", "fuel-cost-calculator", "road-tax-calculator", "car-affordability-calculator"],
  editorialIntro: "Use the three numbers printed on a tyre—such as 195/65 R15—to compare a proposed replacement with the original. The calculator explains dimensional changes but cannot confirm wheel, suspension, load, or legal compatibility.",
  benchmarkContext: { title: "Tyre diameter comparison", badge: "Geometry-based result", stat: "Diameter difference shown to two decimals", description: "A commonly used ±3% diameter band is displayed only as an initial screening guide. Always follow the vehicle and tyre manufacturer's approved specifications.", source: "Standard tyre dimension geometry", lastUpdated: "October 2026" },
  seo: { title: "Tyre Size Calculator: Compare Diameter & Speedometer", description: "Compare tyre sizes in mm and inches. Check diameter difference, sidewall, circumference, ground clearance, revolutions, and actual speed at 100 km/h.", keywords: ["tyre size calculator", "tire size calculator", "tyre size comparison", "tyre upsize calculator india", "speedometer error calculator", "wheel size calculator"] },
  steps: [
    { step: 1, title: "Enter the original tyre", description: "Add its width, aspect ratio, and rim diameter.", icon: "calculator" },
    { step: 2, title: "Enter the proposed tyre", description: "Use the exact replacement size printed by the manufacturer.", icon: "calculator" },
    { step: 3, title: "Compare dimensions", description: "Review diameter, sidewall, circumference, and revolutions per kilometre.", icon: "calculator" },
    { step: 4, title: "Check fitment professionally", description: "Confirm rim width, clearance, load index, speed rating, and manufacturer approval.", icon: "result" },
  ],
  formula: { title: "Tyre size calculation", formula: "Diameter (mm) = Rim inches x 25.4 + 2 x Width x Aspect ratio / 100", explanation: "Circumference is π times diameter. Speedometer impact is estimated from the ratio of new diameter to old diameter, and ground-clearance change is half the diameter change.", example: { input: "195/65 R15 compared with 205/60 R16", output: "Old and new diameters are calculated and their percentage difference is shown" }, useCases: ["Tyre upsizing", "Replacement comparison", "Speedometer error estimate", "Ground-clearance estimate"] },
  faqs: [
    { question: "What does 195/65 R15 mean?", answer: "195 is nominal section width in millimetres, 65 is sidewall height as a percentage of width, R indicates radial construction, and 15 is the wheel rim diameter in inches." },
    { question: "Is a diameter difference within 3% always safe?", answer: "No. The calculator uses ±3% only as a common preliminary comparison band. Safe fitment also depends on vehicle approval, rim width, offset, load and speed ratings, suspension clearance, steering clearance, and local rules." },
    { question: "How does tyre size affect the speedometer?", answer: "A larger rolling diameter travels farther per revolution, so actual speed may be higher than indicated relative to the original tyre. A smaller diameter generally has the opposite effect. Real results also depend on wear, pressure, load, and calibration." },
    { question: "Does a larger tyre increase ground clearance?", answer: "The theoretical clearance change is half the overall diameter difference. This does not account for tyre deflection, pressure, vehicle load, or suspension geometry." },
    { question: "Can this calculator confirm that a tyre will fit?", answer: "No. It compares geometry only. Confirm the approved tyre size, wheel width and offset, fender and suspension clearance, load index, speed rating, and recommended pressure with the vehicle or tyre manufacturer." },
    { question: "Will upsizing affect mileage and handling?", answer: "It can. Weight, width, compound, rolling resistance, aerodynamics, and pressure may affect efficiency, steering, braking, ride, and noise. Diameter alone cannot predict those changes." },
  ],
  seoContent: `<h2>How to compare tyre sizes</h2><p>A tyre code combines width, aspect ratio, construction, and rim diameter. Because the sidewall is a percentage of width, changing width can also change total diameter even when the aspect number becomes smaller. Comparing overall diameter helps estimate speedometer and clearance changes.</p><h2>What to verify before upsizing</h2><ul><li>Sizes approved in the owner's manual or door placard</li><li>Wheel diameter, rim width, and offset</li><li>Load index and speed rating</li><li>Clearance at full steering lock and suspension travel</li><li>Recommended cold tyre pressure and applicable regulations</li></ul><h2>Understanding the results</h2><p>Diameter difference affects distance travelled per wheel revolution. Circumference is useful for estimating revolutions per kilometre, while half the diameter change approximates the change in static ground clearance. These are mathematical estimates, not a fitment certificate.</p>`,
};
