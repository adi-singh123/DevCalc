import type { Calculator } from "@/src/types/calculator";

export const websiteCarbonFootprintCalculator: Calculator = {
  slug: "website-carbon-footprint-calculator",
  name: "Website Carbon Footprint Calculator",
  description: "Estimate a web page's transfer weight, HTTP requests and CO₂e per visit, check whether its hosting is recognised as green, and project monthly or annual emissions.",
  category: "Developer Tools",
  isPopular: true,
  editorialIntro: "This server-assisted checker measures the HTML and discoverable linked resources instead of asking you to guess page size. It then applies a published data-transfer energy model and shows every constant used, while clearly identifying resources or hosting information that could not be verified.",
  benchmarkContext: {
    title: "Transparent Sustainable Web Estimate",
    badge: "Published Model Constants",
    stat: "0.81 kWh/GB · 442 g/kWh",
    description: "This simplified transfer model uses the legacy Sustainable Web Design constants 0.81 kWh/GB and 442 g/kWh. The 291 g/kWh green-hosting value is a chosen scenario factor, not an official SWD constant.",
    source: "Sustainable Web Design legacy model; Green Web Foundation hosting check",
    lastUpdated: "September 2026",
  },
  compareWith: ["json-formatter", "url-encoder-decoder", "website-x-ray"],
  seo: {
    title: "Website Carbon Footprint Calculator & Green Hosting Checker",
    description: "Check any website's estimated page weight, HTTP requests, green hosting status and CO2 per visit. Project monthly and annual website carbon emissions.",
    keywords: ["website carbon calculator", "carbon footprint website", "green hosting checker", "sustainable website checker", "CO2 website calculator", "website emissions calculator", "web page weight checker"],
  },
  steps: [
    { step: 1, title: "Enter a public website URL", description: "Paste a complete URL or domain. Local addresses and private networks are blocked for safety.", icon: "calculator" },
    { step: 2, title: "Measure linked resources", description: "The scanner reads the HTML and measures declared scripts, stylesheets, images, fonts and other page resources when servers expose their transfer size.", icon: "list" },
    { step: 3, title: "Check hosting energy", description: "The domain is checked against the Green Web Foundation's public database; API failure is reported as unknown without stopping the calculation.", icon: "target" },
    { step: 4, title: "Review and share the estimate", description: "See CO₂e per visit, grade, traffic projections, limitations and a pre-filled result sharing option.", icon: "result" },
  ],
  formula: {
    title: "Website carbon calculation formula",
    formula: "CO₂e per visit = page weight in GB × 0.81 kWh/GB × grid carbon intensity",
    explanation: "The calculator uses 442 grams of CO₂e per kWh for standard or unverified hosting and a chosen 291 grams per kWh scenario factor when Green Web Foundation confirms green hosting. This is a simplified transfer-based estimate, not the full SWD model or a direct electricity meter reading.",
    example: { input: "2 MB page on standard hosting", output: "2 ÷ 1000 GB × 0.81 kWh/GB × 442 g/kWh ≈ 0.72 g CO₂e per visit" },
    useCases: ["Comparing redesign performance", "Auditing page weight", "Checking green-hosting evidence", "Estimating traffic-related emissions", "Prioritising web performance work"],
  },
  faqs: [
    { question: "Is this website carbon result completely accurate?", answer: "No web carbon calculator can directly meter every network, data-centre and device involved in a visit. This tool measures available transfer-size information and applies published constants, so it is best used as a consistent estimate for comparison. Caching, CDN routing, device efficiency, geographic electricity mixes and user behaviour can change the real result." },
    { question: "What counts as green website hosting?", answer: "The hosting status is based on the Green Web Foundation's public Greencheck database. A green result means the provider has supplied qualifying evidence recognised by that database. An unrecognised domain is not proof that its electricity is fossil-only; it means the tool cannot confirm the claim from that source." },
    { question: "How can I lower my website carbon score?", answer: "Start with the largest transferred assets. Resize and compress images, prefer AVIF or WebP, remove unused JavaScript and CSS, limit third-party tags, subset fonts, enable compression and long-lived caching, lazy-load below-the-fold media, and serve assets through an efficient CDN. Moving to independently verified green hosting can also reduce the modelled grid factor." },
    { question: "Why is the request count different from browser developer tools?", answer: "This scanner counts resources declared in the server-returned HTML. A browser may discover more requests after JavaScript executes, user consent is granted, CSS imports load, or responsive image selection occurs. Conversely, a returning visitor may serve some resources from cache and make fewer network requests." },
    { question: "Does the calculator store the website or visitor data?", answer: "The entered public URL is sent to DevCalc's server so the page can be measured. Results are cached by exact URL for 24 hours to reduce repeated external requests and abuse. The tool does not ask for credentials and blocks local or private network targets." },
    { question: "Why does green hosting use a lower carbon factor instead of zero?", answer: "Renewable hosting does not make the entire visit emission-free. Networks and user devices still consume electricity, and renewable infrastructure has lifecycle impacts. The requested model therefore uses a lower 291 g/kWh factor rather than claiming zero emissions." },
  ],
  seoContent: `
<h2>How is a website carbon footprint calculated?</h2>
<p>A web page consumes energy across several connected systems. A server prepares and delivers files, network equipment moves those files, and the visitor's phone or computer downloads, processes and displays them. Directly metering that complete chain for every visitor is impractical, so this calculator uses transferred data as a consistent proxy. It first downloads the public HTML and discovers linked stylesheets, scripts, images, fonts and media references. It then requests transfer-size metadata for those resources and totals the sizes that can be measured.</p>
<p>The displayed equation is deliberately visible: <strong>page weight in GB × 0.81 kWh per GB × grams of CO₂e per kWh</strong>. The 0.81 and 442 constants come from the legacy Sustainable Web Design method. If the Green Web Foundation confirms the domain as green, this simplified checker uses a chosen 291 g/kWh scenario factor. That green factor is not an official SWD constant. These values provide a repeatable comparison; they should not be mistaken for electricity readings from the visitor, network operator or data centre.</p>
<h3>Worked example for a 2 MB page</h3>
<p>First convert 2 MB to gigabytes: 2 ÷ 1000 = 0.002 GB. Multiply that by 0.81 kWh/GB to obtain 0.00162 kWh of modelled energy. On the standard 442 g/kWh factor, 0.00162 × 442 gives approximately <strong>0.72 g CO₂e per visit</strong>. At 10,000 visits per month, that becomes about 7.2 kg per month and 86 kg per year. A confirmed green-hosting result uses the chosen 291 g/kWh scenario factor, reducing the same 2 MB transfer estimate to roughly 0.47 g per visit.</p>

<h2>Why does website carbon footprint matter?</h2>
<p>One page view is small, but digital services operate at enormous scale. The International Energy Agency reported that data centres used around 415 TWh in 2024, approximately 1.5% of worldwide electricity consumption, and projected strong demand growth through 2030. Websites are only one part of that system, yet site owners directly control many sources of avoidable transfer and computation: oversized media, unused bundles, advertising chains, analytics tags and repeated third-party requests.</p>
<p>Reducing page weight is not only an environmental exercise. Smaller pages usually load faster on mobile connections, consume less visitor data, improve resilience on slow networks and reduce bandwidth bills. Sustainable web work therefore overlaps with performance, accessibility and user experience. A result should be used to locate improvement opportunities, not to make an unsupported claim that a website has an exact or certified footprint.</p>

<h2>How to reduce your website's carbon footprint</h2>
<h3>Compress and correctly size images</h3>
<p>Images often dominate transfer weight. Export photographs as AVIF or WebP, provide responsive sizes, avoid sending desktop dimensions to small screens and remove invisible metadata. An image should be generated close to its displayed dimensions rather than downloaded at several thousand pixels wide and reduced with CSS.</p>
<h3>Lazy-load content that starts below the fold</h3>
<p>Use native image and iframe lazy loading for content that is not initially visible. Prioritise the actual hero image, but defer galleries, maps, videos and embedded widgets until the visitor approaches them. This prevents a short visit from downloading resources that were never seen.</p>
<h3>Ship less JavaScript and CSS</h3>
<p>Remove unused packages and styles, split code by route, minify production assets and avoid sending large frameworks for a small interaction. JavaScript adds both transfer cost and device-side processing. Review tag managers and third-party scripts regularly; each vendor can introduce additional redirects, downloads and computation beyond the first script.</p>
<h3>Use caching, compression and an efficient CDN</h3>
<p>Enable Brotli or gzip for text assets, add long-lived immutable caching to versioned files and use a CDN that serves content near visitors. Returning users should not repeatedly transfer unchanged fonts, scripts and images. A CDN can reduce long network paths, although its own energy sourcing and cache behaviour still matter.</p>
<h3>Choose verifiably green hosting</h3>
<p>Ask providers for current evidence about electricity procurement rather than relying only on marketing language. This calculator checks the Green Web Foundation database and reports whether the domain is recognised. Hosting is only one part of a page view, but credible renewable-energy sourcing can lower the carbon intensity associated with server operation.</p>

<h2>Understanding the grade</h2>
<p>The grade converts the emissions estimate into a quick comparison: A+ is at or below 0.10 g per visit, A at or below 0.25 g, B at or below 0.50 g, C at or below 1.0 g, D at or below an illustrative 1.76 g reference, E up to 3.0 g, and F above 3.0 g. These thresholds are DevCalc's own interpretation for prioritisation, not an accreditation or environmental certificate. HTTP Archive's 2025 Web Almanac reported median page weights of roughly 2.9 MB on desktop and 2.6 MB on mobile, showing why asset reduction remains meaningful.</p>

<h2>Limitations of this estimate</h2>
<p>The scanner reads resources declared in returned HTML; it does not run a full browser session. JavaScript may request additional APIs, advertising assets or media after load, while consent choices and user interactions can change network activity. CSS imports, responsive-image selection and authenticated content may also differ. Some servers do not provide Content-Length or Content-Range headers, so those resources are marked unmeasured instead of assigned an invented size.</p>
<p>Real emissions also depend on browser caching, repeat-visit behaviour, CDN location, network type, device efficiency, time spent on the page and the electricity mix in each region. The monthly and yearly totals assume every visit transfers the same measured amount. Use them as scenario estimates and compare changes with the same method. They are not a certified lifecycle assessment, carbon-accounting disclosure or substitute for instrumented real-user monitoring.</p>

<h2>Related developer tools</h2>
<p>After reviewing transfer weight, use the <a href="/json-formatter">JSON Formatter</a> to inspect and minify API payloads, the <a href="/url-encoder-decoder">URL Encoder/Decoder</a> to validate request addresses, or the <a href="/website-x-ray">Website X-Ray</a> for a broader technology, security and SEO inspection.</p>

<h2>Methods and data sources</h2>
<p>Read the <a href="https://sustainablewebdesign.org/estimating-digital-emissions-version-3/" target="_blank" rel="noopener noreferrer">legacy Sustainable Web Design calculation method</a> for the 0.81 kWh/GB and 442 g/kWh constants. Hosting evidence comes from the <a href="https://developers.thegreenwebfoundation.org/api/greencheck/v3/check-single-domain/" target="_blank" rel="noopener noreferrer">Green Web Foundation Greencheck API</a>. For context on internet infrastructure energy use and typical page size, see the <a href="https://www.iea.org/reports/energy-and-ai/executive-summary" target="_blank" rel="noopener noreferrer">IEA Energy and AI report</a> and <a href="https://almanac.httparchive.org/en/2025/page-weight" target="_blank" rel="noopener noreferrer">HTTP Archive's 2025 Page Weight chapter</a>.</p>
  `,
};
