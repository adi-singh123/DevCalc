import type { Calculator } from "@/src/types/calculator";

export const braSizeCalculator: Calculator = {
  slug: "bra-size-calculator", name: "Bra Size Calculator", category: "Health", isPopular: true,
  description: "Estimate a starting bra size from snug underbust and fullest-bust measurements, with US, UK, India, EU, and sister-size references.",
  compareWith: ["bmi-calculator", "body-fat-calculator", "waist-to-hip-ratio-calculator"],
  editorialIntro: "Bra labels are not fully standardized across brands or countries. This calculator gives a consistent starting size from two measurements, then shows regional labels and nearby sister sizes to try.",
  benchmarkContext: { title: "Measurement-based starting size", badge: "Brand fit may vary", stat: "Underbust + fullest-bust difference", description: "The result uses a modern no-add starting-band method. Cup shape, fabric, construction, and each manufacturer's chart can change the best fit.", source: "Common garment-sizing conventions", lastUpdated: "October 2026" },
  seo: { title: "Bra Size Calculator: Band, Cup & Sister Sizes", description: "Estimate bra size from underbust and bust measurements. Compare US, UK, India and EU labels, sister sizes, and practical fit guidance.", keywords: ["bra size calculator", "bra size finder", "cup size calculator", "band size calculator", "how to measure bra size", "sister size calculator", "India bra size calculator"] },
  steps: [
    { step: 1, title: "Measure the underbust", description: "Keep a soft tape snug and level directly beneath the bust.", icon: "calculator" },
    { step: 2, title: "Measure the fullest bust", description: "Keep the tape level and gently resting around the fullest point without compression.", icon: "calculator" },
    { step: 3, title: "Choose units and region", description: "Enter inches or centimetres and select the label system you want to view.", icon: "calculator" },
    { step: 4, title: "Try the starting size", description: "Check the result and sister sizes against the specific brand's chart and actual fit.", icon: "result" },
  ],
  formula: { title: "Bra size calculation method", formula: "Starting band = snug underbust rounded to nearest even inch; Cup index = fullest bust − underbust", explanation: "Each approximate inch of difference advances the cup index. US, UK and EU cup sequences differ after D, so the result is a starting point rather than a universal standard.", example: { input: "Underbust 34 in and bust 37 in", output: "Starting size approximately 34C" }, useCases: ["At-home starting size", "Online shopping reference", "Regional label comparison", "Sister-size discovery"] },
  faqs: [
    { question: "How should I measure my underbust?", answer: "Use a soft tape directly beneath the bust. Keep it level and comfortably snug without adding extra inches. Measure on bare skin or over very thin clothing." },
    { question: "How should I measure the fullest bust?", answer: "Measure around the fullest point with the tape parallel to the floor. Let it rest without pulling tight. A thin, unpadded bra may make measuring easier." },
    { question: "Is the calculated size guaranteed to fit?", answer: "No. Bra sizing is not completely standardized. Shape, cup depth, wire width, fabric, and construction affect fit, so check the manufacturer's chart." },
    { question: "Why are regional labels different?", answer: "US, UK and EU cup-letter progressions differ after D, and EU bands use centimetre-based labels. Brands may also use their own sequences." },
    { question: "What are sister sizes?", answer: "They have approximately similar cup volume with a different band. Moving down one band usually means moving up one cup, and vice versa; shape and feel still differ." },
    { question: "How can I tell whether a bra fits?", answer: "The band should stay level, straps should not carry all support, and cups should not gape, overflow, wrinkle, or press painfully. Try another shape or professional fitting if discomfort continues." },
  ],
  seoContent: `
<h2>How to Calculate Bra Size at Home</h2>
<p>A bra size combines a band number with a cup letter. The band is estimated from the circumference directly beneath the bust, while the cup is based on the difference between the fullest-bust and underbust measurements. This calculator applies one consistent method so you can find a useful starting size before checking a particular brand.</p>
<p>Use a soft measuring tape, a mirror, and a thin non-padded bra or bare skin. Stand naturally and breathe normally. Measuring over thick clothing, padded cups, or a tight sports bra can change the result.</p>
<h2>Step 1: Measure the Underbust</h2>
<p>Place the tape directly beneath the breast tissue and run it around the rib cage. Check that it remains horizontal across the back. Pull it snug enough to stay in place, but not so tightly that it compresses the skin or affects breathing. Record the number without automatically adding extra inches.</p>
<p>The calculator converts centimetres to inches when needed and rounds to a nearby even-numbered starting band. If the measurement falls between two bands, the firmer or looser option may work depending on fabric stretch, personal comfort, and the individual product.</p>
<h2>Step 2: Measure the Fullest Bust</h2>
<p>Move the tape around the fullest part of the bust. Keep it parallel to the floor and let it touch the body without flattening tissue. Keep your shoulders relaxed and arms down. Taking the measurement two or three times can reveal whether the tape moved or tilted.</p>
<p>The difference between the fullest-bust and underbust measurements determines the approximate cup index. A difference near one inch generally begins around A, two inches around B, three around C, and four around D. Letter sequences after D vary by region and manufacturer.</p>
<h2>Bra Size Calculation Example</h2>
<table><thead><tr><th>Measurement</th><th>Example</th><th>How it is used</th></tr></thead><tbody><tr><td>Snug underbust</td><td>34 inches</td><td>Starting band 34</td></tr><tr><td>Fullest bust</td><td>37 inches</td><td>Compared with underbust</td></tr><tr><td>Difference</td><td>3 inches</td><td>Approximate C cup</td></tr><tr><td>Starting result</td><td>34C</td><td>Try this size and nearby options</td></tr></tbody></table>
<p>This example explains the calculation but does not guarantee that every 34C product will fit identically. Check the size chart and fit notes for the bra you intend to buy.</p>
<h2>US, UK, India and EU Bra Sizes</h2>
<p>US and UK systems normally share even-numbered inch bands but use different cup progressions after D. Many Indian retailers use UK-style band and cup labels, although practices vary. European labels use centimetre-based bands, so a UK or US 34 band commonly corresponds to an EU 75 band.</p>
<table><thead><tr><th>System</th><th>Typical bands</th><th>Cup sequence note</th></tr></thead><tbody><tr><td>US</td><td>32, 34, 36</td><td>Often uses DD or DDD</td></tr><tr><td>UK</td><td>32, 34, 36</td><td>Commonly uses DD, E, F, FF</td></tr><tr><td>India</td><td>Usually UK-style</td><td>Check each retailer</td></tr><tr><td>EU</td><td>70, 75, 80</td><td>Usually single letters after D</td></tr></tbody></table>
<p>International conversion is approximate because manufacturers do not all grade bands and cups in exactly the same way.</p>
<h2>How Sister Sizes Work</h2>
<p>Sister sizing changes the band and cup together to keep approximately similar cup volume. If a 34C cup feels suitable but the band feels loose, 32D is the nearby smaller-band sister size. If the band feels tight, 36B is the nearby larger-band sister size.</p>
<ul><li><strong>Smaller band:</strong> move down one band and up one cup.</li><li><strong>Larger band:</strong> move up one band and down one cup.</li><li><strong>Remember:</strong> sister sizes do not have identical proportions, wire width, or support.</li></ul>
<h2>How to Check Bra Fit</h2>
<ul><li><strong>Band:</strong> it should remain level and secure without painful pressure or riding up.</li><li><strong>Cups:</strong> tissue should be contained without spilling, gaping, or deep wrinkling.</li><li><strong>Centre panel:</strong> on a wired bra it should generally sit close to the chest, subject to body and bra shape.</li><li><strong>Underwire:</strong> it should surround tissue instead of resting on it.</li><li><strong>Straps:</strong> they should stay in place without digging in or carrying all support.</li><li><strong>Movement:</strong> raise your arms, sit, and bend to confirm the bra stays comfortable.</li></ul>
<h2>Common Measurement and Shopping Mistakes</h2>
<p>Common mistakes include measuring an old bra instead of the body, allowing the tape to slope across the back, measuring over padding, automatically adding four or five inches, or assuming a familiar label will fit every brand. Another mistake is changing only the cup when the band is the actual problem.</p>
<h2>When to Measure Again</h2>
<p>Measurements may change after weight change, pregnancy, breastfeeding, hormonal changes, surgery, ageing, or changes in exercise. Measure again when existing bras become uncomfortable, the band rides up, cups gape or overflow, or before buying from an unfamiliar brand.</p>
<h2>Calculator Limitations</h2>
<p>Two circumference measurements cannot capture breast shape, projection, spacing, asymmetry, torso shape, fabric behaviour, or brand construction. Use the calculated size as a practical place to begin, not a diagnosis or absolute answer. A professional fitting may help when nearby sizes remain uncomfortable. Persistent breast, shoulder, or back pain should be discussed with a qualified healthcare professional.</p>
`,
};
