import type { Calculator } from "@/src/types/calculator";

export const petAgeCalculator: Calculator = {
  slug: "pet-age-calculator",
  name: "Pet Age Calculator",
  description: "Convert a cat or dog's age into approximate human years and see a simple life-stage estimate, with dog size taken into account.",
  category: "Fun",
  compareWith: ["age-calculator", "date-calculator", "time-duration-calculator"],
  editorialIntro: "The old rule that every pet year equals seven human years is too simple. This calculator uses a faster early-life conversion and then applies a size-sensitive adult rate for dogs. Results are educational approximations, not veterinary assessments.",
  benchmarkContext: { title: "Non-linear pet age estimate", badge: "Cat and dog modes", stat: "First two years weighted separately", description: "Cats and dogs mature rapidly in their first two years. Adult dog estimates vary by size because ageing patterns are not identical across breeds.", source: "General veterinary age-conversion conventions", lastUpdated: "October 2026" },
  seo: { title: "Pet Age Calculator: Dog & Cat Years to Human Years", description: "Calculate your dog or cat's approximate age in human years. Includes dog size and pet life-stage estimates with a clear age conversion method.", keywords: ["pet age calculator", "dog age calculator", "cat age calculator", "dog years to human years", "cat years to human years", "pet years calculator"] },
  steps: [
    { step: 1, title: "Choose cat or dog", description: "Select the species so the correct conversion model is used.", icon: "calculator" },
    { step: 2, title: "Enter the pet's age", description: "Decimal years are accepted, so 1.5 years represents about 18 months.", icon: "calculator" },
    { step: 3, title: "Select dog size", description: "For dogs, choose the expected adult size group.", icon: "calculator" },
    { step: 4, title: "Read the estimate", description: "See approximate human years, age in months, and life stage.", icon: "result" },
  ],
  formula: { title: "Pet age conversion", formula: "Year 1 ≈ 15 human years; year 2 adds ≈ 9; later years use a species/size rate", explanation: "Cats add about four human-equivalent years for each year after age two. This tool estimates later dog years at four for small, five for medium, and six for large dogs.", example: { input: "5-year-old medium dog", output: "Approximately 39 human years" }, useCases: ["Pet birthday cards", "Age comparison", "Life-stage awareness", "Family education"] },
  faqs: [
    { question: "Is one dog year equal to seven human years?", answer: "No. Dogs mature much faster during their first two years, and later ageing differs with size, breed, genetics, and health. The seven-year rule is only a rough cultural shortcut." },
    { question: "Why does dog size affect the result?", answer: "Large dogs often age faster during adulthood than small dogs. The size selector applies different later-year rates, but individual breeds and pets can vary substantially." },
    { question: "How are cat years calculated?", answer: "This estimate treats the first cat year as about 15 human years, the second as reaching about 24, and each later year as adding roughly four. It is an easy comparison, not a biological measurement." },
    { question: "Can I enter a pet younger than one year?", answer: "Yes. Enter a decimal age such as 0.5 for roughly six months. Young-animal development is not linear, so this partial-year result is especially approximate." },
    { question: "Can this result determine veterinary care?", answer: "No. Vaccination, nutrition, screening, dental care, and senior-care decisions should be based on a veterinarian's advice and the pet's species, breed, medical history, and condition." },
    { question: "What dog size should I choose?", answer: "Choose the group closest to the dog's expected healthy adult size: small under about 10 kg, medium about 10–25 kg, or large above about 25 kg. These boundaries are only practical calculator groupings." },
  ],
  seoContent: `<h2>Dog and cat years are not linear</h2><p>Pets develop quickly in early life, so multiplying age by seven misses the rapid change from newborn to adult. A staged conversion gives a more intuitive comparison: the first year carries the largest increase, the second adds less, and later years follow a steadier estimate.</p><h2>Why breed and health still matter</h2><p>Species, adult body size, breed, genetics, nutrition, exercise, weight, preventive care, and illness all influence ageing. Two pets with the same birthday may therefore have different health and mobility. Human-equivalent age is best treated as an educational analogy.</p><h2>Using the life-stage result</h2><p>Life-stage labels can be a prompt to discuss changing needs with a veterinarian, but they do not diagnose health or set a treatment schedule. Regular examinations remain the reliable way to plan preventive and senior care.</p>`,
};
