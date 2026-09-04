import { Calculator } from "@/src/types/calculator";

export const armyCalculator: Calculator = {
  slug: "army-physical-eligibility-calculator",

  name: "Indian Army Physical & Eligibility Calculator",

  description:
    "Check your Indian Army Agniveer, CAPF, BSF, CRPF, ITBP, CISF and SSB physical eligibility instantly. One combined calculator for Age, Height, Weight, BMI, 1.6 km Running, Chest Expansion, Push-ups, Sit-ups and overall Army Fitness Score.",

  category: "Other",

  isPopular: true,

  editorialIntro:
    "Indian Army Agniveer recruitment applies dual qualifying thresholds: Physical Fitness Tests (PFT) and strict Physical Measurement Standards (PMS) covering zonal height, proportionate BMI (18.0–25.0 kg/m²), 1.6 km rally running times (Group I $\\le 5:30$, Group II $\\le 5:45$), 10 pull-ups (beam), 9-foot ditch jump, and 5 cm chest expansion.",

  benchmarkContext: {
    title: "Indian Army Agniveer & CAPF Physical Measurement Standards",
    badge: "Defense Recruitment Standard",
    stat: "1.6 km Run (Group I: 60 Marks / Group II: 48 Marks) + 10 Beam Pull-ups (40 Marks)",
    description:
      "Physical standards vary by regional recruitment zone: Plains (170 cm GD / 162 cm Clerk), Western Himalayan (163 cm), Eastern Himalayan / Gorkha (160 cm). Proportionate weight requires BMI strictly within 18.0–25.0 at medical examination.",
    source: "Join Indian Army (HQ Recruiting Zone Notifications & Agniveer Rally Guidelines)",
    lastUpdated: "January 2026",
  },

  seo: {
    title:
      "Indian Army Agniveer Eligibility Calculator – Height, Weight, BMI, 1.6km Run 2026",

    description:
      "Free Agniveer & Army Bharti eligibility check — height, weight, BMI, running time, chest, push-ups. Get instant pass/fail results by zone and category",

    keywords: [
      "indian army physical eligibility calculator",
      "agniveer physical fitness test calculator",
      "army height weight standards",
      "army bmi calculator",
      "army 1.6 km run calculator",
      "army chest measurement calculator",
      "soldier gd eligibility calculator",
      "capf physical test calculator",
      "army pull up marks calculator",
    ],
  },

  compareWith: ["bmi-calculator", "age-calculator", "running-pace-calculator"],

  steps: [
    {
      step: 1,
      title: "Pick Your Calculator Module",
      description:
        "Choose Age, Height, Weight, BMI, Running, Chest, Push-up, Sit-up, or the combined Eligibility & Fitness Score module from the sidebar.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Enter Your Details",
      description:
        "Fill in your date of birth, gender, height, weight, region/zone, and any physical test numbers such as your 1.6 km time or pull-up count.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Select Your Category & Region",
      description:
        "Pick your recruitment category (Agniveer GD, Technical, Clerk, Tradesman, or CAPF Constable) and your recruitment zone, since standards vary by region.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "View Instant Eligibility Result",
      description:
        "Get an immediate eligible/not-eligible verdict for each module, plus a combined Army Fitness Score you can track as you train.",
      icon: "result",
    },
  ],

  formula: {
    title: "Indian Army Physical Eligibility Formula",

    formula:
      "Overall Eligible = (Age within band) AND (Height ≥ Zone Minimum) AND (BMI between 18.0–25.0) AND (1.6 km Run ≤ Qualifying Time) AND (Chest Expansion ≥ 5 cm, male candidates)",

    explanation:
      "Unlike a single-number formula, Army physical eligibility is a checklist of independent pass/fail gates that a candidate must clear at the same time. Age is measured against a fixed band (typically 17.5 to 21 years for Agniveer posts) as of the notification's reference date. Height is checked against a minimum that changes by gender, category and recruitment zone. Weight is not judged against a flat number — it is judged through Body Mass Index, calculated as weight in kilograms divided by height in metres squared, and the Army's accepted recruitment band is 18.0 to 25.0. The 1.6 km run is scored in two ways at once: a hard qualifying cut-off (fail beyond it) and a marks band used for merit ranking. Chest expansion, checked only for male candidates, is the difference between the fully expanded and normal chest measurement, with a minimum of roughly 5 cm expected. A candidate is only 'Overall Eligible' when every one of these independent checks returns a pass — a strong run time cannot offset a height shortfall, and vice versa.",

    example: {
      input:
        "Male candidate, DOB makes him 19.4 years old, height 171 cm, weight 62 kg, 1.6 km run in 5 min 20 sec, chest 78→84 cm",

      output:
        "BMI = 62 ÷ (1.71 × 1.71) = 21.2 (within 18–25) → Age eligible, Height eligible, BMI eligible, Run in Group I (60 marks), Chest expansion 6 cm (eligible) → Overall Eligible",
    },

    useCases: [
      "Checking Agniveer GD / Technical / Clerk / Tradesman eligibility before a recruitment rally",
      "Estimating your 1.6 km run score and merit-list marks in advance",
      "Verifying whether your height and chest meet your specific recruitment zone's standard",
      "Tracking BMI and proportionate weight ahead of the medical examination",
      "Comparing Indian Army Agniveer standards against CAPF (BSF/CRPF/ITBP/CISF/SSB) constable standards",
      "Building a fitness training plan around a numeric Army Fitness Score",
    ],
  },

  faqs: [
    {
      question:
        "What are the exact height, weight and chest requirements for Agniveer GD in 2026, and do they change by state?",
      answer:
        "Yes, and this is the single most misunderstood part of Agniveer eligibility. The Indian Army does not apply one uniform height figure across the whole country. For Agniveer General Duty (GD), the standard minimum height for male candidates in most plains states is 170 cm, and this same 170 cm figure generally applies to the Technical trade as well, since both roles carry heavier combat and equipment-handling demands. Clerk and Store Keeper Technical posts are less physically demanding on paper, so their minimum height is usually lower, commonly around 162 cm, though this still depends on the specific recruitment zone. Where the numbers change meaningfully is for candidates from the Himalayan belt, the North-Eastern states, and notified hill or tribal areas — these zones are recognised as having historically shorter average statures, so the Army applies a relaxed minimum, often 162 cm, and in some Gorkha, Garhwali and Kumaoni domicile cases as low as 160 cm. On top of the zone-based figure, a small number of category-specific relaxations exist: sons or daughters of servicemen and ex-servicemen (SOS/SOEX) typically receive about 2 cm of height relaxation and 2 kg of weight relaxation, while outstanding sportspersons with a valid national or state certificate can receive roughly 2 cm height and 5 kg weight relaxation. Weight is not fixed as a single number either — it is checked as a proportionate range tied to your height and confirmed against a Body Mass Index band of roughly 18.0 to 25.0 during the medical examination, with an absolute floor around 50 kg for most male candidates and 48 kg for candidates from Himalayan regions. Chest measurement, taken only for male candidates, has a minimum unexpanded figure around 77 cm in most zones (slightly lower, around 76 cm, in hill and Gorkha zones), and candidates must also show a minimum expansion of about 5 cm between the normal and fully expanded readings, taken after a deep breath. Because every one of these figures is republished — and can shift slightly — in each year's official notification, this calculator lets you select your gender, category and recruitment zone so the height, weight and chest thresholds you see are matched to your actual situation rather than a single generic number. Always cross-check the final figures against the live notification on joinindianarmy.nic.in before you travel to a rally, since regional slabs are sometimes revised between recruitment cycles.",
    },
    {
      question:
        "How is age calculated for Agniveer recruitment, and what happens if I am short by only a few days?",
      answer:
        "Age eligibility for Agniveer recruitment is calculated against a fixed band stated in that year's notification — for most Agniveer posts (General Duty, Technical, Clerk/Store Keeper Technical, and most Tradesman categories) this band is 17.5 years to 21 years, with a small number of Tradesman posts allowing a slightly wider upper limit. Crucially, there is no category-wise age relaxation under the Agnipath scheme: unlike many other government recruitment exams, SC, ST and OBC candidates do not get extra years added to the upper limit for Army Agniveer posts, which surprises a lot of first-time applicants who assume the same relaxation rules from other exams automatically carry over. The Army does not calculate your age as of the day you apply or the day you sit the rally — it calculates your age as of a reference date printed in the notification, which has historically fallen around the 1st of the recruitment year's application-window month (this calculator defaults to 1 August of the selected recruitment year as a representative reference point, but you should always confirm the exact date against the live notification, since it is the figure that legally determines your eligibility, not a general rule of thumb). This distinction matters enormously for candidates who are close to either edge of the band. If your date of birth places you at 17 years and 5 months on the reference date, you are genuinely one month short of the minimum and will be rejected regardless of how strong your physical or academic profile is — there is no 'grace period' or manual override at the rally stage. The same rigidity applies at the upper edge: a candidate who turns 21 years and 3 days old by the reference date is technically over-age and will not be permitted to proceed, even though three days is an almost imperceptible margin in ordinary life. Because the Army's own recruitment portal performs this exact same calendar-accurate check when you register (not a rounded or approximate one), it is worth calculating your precise age in years, months and days well before the application window opens, so you know whether you are safely inside the band, dangerously close to a boundary, or need to wait for (or rush to catch) the next recruitment cycle. This calculator performs that same calendar-accurate year/month/day calculation, and flags exactly how far above or below the limit you currently sit, so you are not relying on a rough mental estimate when the actual cut-off is measured in days.",
    },
    {
      question:
        "How does the Indian Army score the 1.6 km run and pull-ups, and what score do I need to be competitive?",
      answer:
        "The Physical Fitness Test (PFT) for Agniveer General Duty, Technical, Clerk/Store Keeper Technical and Tradesman posts is worth a maximum of 100 marks, split between two scored events and two qualifying-only events. The 1.6 km run carries the larger share, up to 60 marks, and is scored in bands rather than a sliding scale: candidates who finish within 5 minutes 30 seconds are placed in Group I and awarded the full 60 marks, while those finishing between 5 minutes 31 seconds and 5 minutes 45 seconds fall into Group II and receive 48 marks. Anyone who crosses the 5 minute 45 second mark is not awarded any run marks and is generally disqualified from that stage of recruitment — there is no partial credit or slower qualifying band beyond that cut-off for the Army's own Agniveer test, which is stricter than some CAPF or SSC GD run standards that allow considerably more time. Pull-ups (performed on a beam) carry up to 40 marks and are also scored in discrete steps: 10 or more pull-ups earns the full 40 marks, 9 pull-ups earns 33 marks, 8 pull-ups earns 27 marks, 7 pull-ups earns 21 marks, and 6 pull-ups — the minimum required simply to qualify — earns 16 marks. Fewer than 6 pull-ups means you do not clear the qualifying threshold at all, regardless of your run time. Two further events, the 9-foot ditch jump and the zig-zag balance test, carry no marks of their own; they are pure qualify-or-fail checks, and failing either one removes you from contention even with a perfect run and pull-up score. Adding the two scored events together, the realistic maximum a candidate can achieve is 100 marks (Group I run plus 10+ pull-ups), while the practical minimum needed simply to stay in the process is 64 marks (Group II run plus 6 pull-ups). In merit-based recruitment, where seats are limited and competition is heavy, most successful candidates aim well above the bare minimum — typically for a Group I run time comfortably inside 5:15–5:25 and 8 to 10+ pull-ups, since PFT marks are combined with your written exam score to build the final merit list, and a mediocre PFT score can undo an otherwise strong CBT result. Female candidates applying for Corps of Military Police (CMP) roles run the same 1.6 km distance but against a different time band, with Group I set at up to 7 minutes 30 seconds and Group II at up to 8 minutes, and complete vertical and horizontal leg jump tests in place of pull-ups. This calculator's running module converts your actual timed result into pace, speed, marks and grade automatically, so you can see in real time how close you are to the next scoring band.",
    },
    {
      question:
        "My height and age qualify but my BMI or weight doesn't fall in range — what does that actually mean, and what should I do?",
      answer:
        "This is a genuinely common situation, and it is worth understanding precisely what fails and why, rather than assuming the whole application is doomed. Height and age are fixed, largely unchangeable numbers checked early in the process at the Physical Measurement stage — you either meet the printed minimum or you do not, and short of waiting for a different recruitment zone or a different age cycle, there is little room to influence them before a rally. Weight and BMI are different: they are the one major eligibility gate that is directly and meaningfully changeable through training and diet in the weeks and months before your rally date, which is exactly why the Army checks it twice — once informally at the ground, and then formally, calculated properly against your height, during the Medical Examination in Phase II. The Army does not publish one flat 'ideal weight' number; instead, it expects your weight to keep your Body Mass Index inside a recruitment-accepted band of roughly 18.0 to 25.0, which itself derives from the standard formula of weight in kilograms divided by the square of your height in metres. If your BMI comes out under 18.0, you are classified as underweight for recruitment purposes even if your height and chest are otherwise fine, and a Medical Officer is likely to hold your case rather than clear it outright — being 'tall enough' does not compensate for being under the accepted weight band, because the two checks are independent gates, not a single averaged score. If your BMI comes out above 25.0, the same logic applies in reverse: you may be well within the height standard and still be held back on weight grounds until you bring your BMI down. The encouraging part is that recruits who are found borderline on weight at the ground are typically not rejected outright on the spot; Army recruitment processes have historically allowed a short review window, sometimes cited as up to around 21 days, for a candidate to be reassessed at a military hospital after making the necessary correction, though the exact window and process can vary by rally and should be confirmed locally rather than assumed. Practically, if this calculator shows your BMI or proportionate weight outside the accepted range, the priority is a realistic, medically sensible plan rather than a last-minute crash diet or rapid water-loading before the measurement — recruitment medical staff are experienced at spotting artificial short-term weight or hydration manipulation, and it can do more harm than good to your case. A steady, few-months runway of controlled nutrition and training aimed at moving your BMI toward the ideal middle of the band (around 21–22) is both safer and more likely to hold up under the formal medical check than an attempt to game the number on test day itself.",
    },
    {
      question:
        "What is the difference between Indian Army Agniveer physical standards and CAPF (BSF/CRPF/CISF/ITBP/SSB) standards?",
      answer:
        "Although aspirants often lump 'Army', 'CAPF' and 'defence jobs' together in their preparation, the Indian Army's Agnipath (Agniveer) scheme and the various Central Armed Police Forces run genuinely separate recruitment systems, with different governing bodies, different age rules, and different physical test structures — which is exactly why this calculator keeps CAPF-pattern data clearly labelled and separate from the Army's own official Agniveer figures rather than blending them into one number. On age, Agniveer posts apply a comparatively narrow and rigid band, generally 17.5 to 21 years, with no category-wise relaxation for SC, ST or OBC candidates. CAPF constable-level posts under forces such as BSF, CRPF, CISF, ITBP and SSB typically start slightly older, often from 18 years, extend further, often to 23 years, and generally do apply the standard government reservation relaxations — commonly around 5 years for SC/ST and 3 years for OBC candidates — which can meaningfully widen the effective upper limit for reserved-category applicants in a way that simply does not exist for Agniveer recruitment. On the physical test itself, the Army's Agniveer PFT is a marks-based merit event: your 1.6 km run and pull-up count feed directly into a 100-mark score that combines with your written exam result to build the final merit list, and missing the 5 minute 45 second run cut-off disqualifies you outright. Most CAPF Physical Standard Tests (PST) and Physical Efficiency Tests (PET), by contrast, tend to treat the run as a qualifying, pass/fail event rather than a scored one, typically with a considerably more generous time allowance for male candidates — often cited in the region of 24 minutes for the CAPF-style combined run distance pattern, though the exact distance and time vary by force and should always be confirmed against that specific force's own notification rather than assumed to match another force. CAPF tests also commonly include push-ups and sit-ups within their Physical Standard Test, events that do not appear in the Army's own Agniveer PFT at all, which instead relies on pull-ups, a 9-foot ditch jump and a zig-zag balance test. Height and chest standards follow a broadly similar logic in both systems — minimums that vary by category, gender and sometimes by region or state-level relaxation — but the specific centimetre figures, and which categories receive relaxations, are set independently by each recruiting body and are not interchangeable. Because of these structural differences, this calculator's Age, Height and Running modules default to the Army's own verified Agniveer figures, while the Push-up and Sit-up modules are explicitly built on an illustrative CAPF-style benchmark model — useful for self-assessment and training planning, but not a substitute for the specific force's official PST notification, which you should always check directly before relying on any number for an actual application.",
    },
    {
      question:
        "Are the physical standards different for women applying to the Corps of Military Police, and what should female candidates prepare for?",
      answer:
        "Yes, the Indian Army's Agnipath scheme does include a route for women, primarily through General Duty roles in the Corps of Military Police (CMP), and the physical standards applied to female candidates are meaningfully different from the male Agniveer GD standards in three specific places: height, the running test, and the strength event used in place of pull-ups. On height, female CMP candidates are generally expected to meet a minimum around 162 cm in most recruitment zones, though a number of specifically notified regions — including several southern and union territory zones — apply a relaxed minimum closer to 152 cm, which is broadly in line with the height standards used elsewhere in the Army for women's technical and non-technical entries. On the 1.6 km run, female candidates are scored using their own dedicated Group I and Group II time bands rather than the male bands: Group I is typically set at up to 7 minutes 30 seconds, and Group II at up to 8 minutes, with marks awarded in a similar 60/48 pattern to the male scoring structure once you fall inside either group. Where the test structure changes most is strength: rather than performing pull-ups on a beam, female candidates typically complete vertical and horizontal leg jump tests, which assess lower-body explosive strength instead of upper-body pulling strength, reflecting a physical test structure genuinely designed around female-specific benchmarks rather than a scaled-down version of the male test. Weight and BMI standards follow the same underlying logic used for male candidates — a proportionate range checked against height and confirmed through BMI at the medical stage — though the specific absolute weight floors used as a sanity check tend to sit lower for female candidates, commonly cited in the low-40s kilogram range depending on height, rather than the roughly 48–50 kg floor used for male candidates. It's also worth being clear-eyed that women's Agniveer recruitment has historically run on a smaller scale and a narrower set of trades compared to the male recruitment pipeline, so vacancy numbers, rally locations and notification timing can differ from the main Agniveer GD cycle — always check the specific women's Agniveer notification rather than assuming it runs on exactly the same calendar as the general male rally. For preparation, female candidates should train run pace against their own 7:30/8:00 time bands rather than benchmarking against male 5:30/5:45 figures (a common and avoidable source of discouragement), and should build lower-body power specifically for the jump tests — box jumps, broad jumps and plyometric drills — rather than defaulting to a male-oriented pull-up-focused training plan that targets an event they won't actually be tested on. This calculator's Height and Running modules let you switch to the female/CMP standards explicitly, so the numbers you see reflect the test you will actually take rather than a generic male default.",
    },
  ],

  seoContent: `
<h2>What Is Indian Army Physical &amp; Eligibility Assessment?</h2>
<p>
  Joining the Indian Army through the Agnipath scheme, or joining a Central Armed Police Force (CAPF) such as the BSF, CRPF, CISF, ITBP or SSB, is not decided by a written exam alone. Every candidate must clear a layered physical eligibility process before their academic score even matters for the final merit list. This process is generally split into three connected stages: a Physical Measurement Test (PMT) that checks fixed body measurements like height, weight and chest; a Physical Fitness Test (PFT) that checks performance — most importantly the 1.6 km run and pull-ups for Army Agniveer posts; and a detailed Medical Examination that confirms BMI, general health, vision, hearing and the absence of disqualifying medical conditions. A candidate who is razor-sharp in the written exam but a few centimetres short on height, or a few kilograms outside the accepted weight band, will still be turned away at the physical stage — which is exactly why physical eligibility deserves the same serious, advance preparation as exam revision.
</p>
<p>
  The <strong>Indian Army Physical &amp; Eligibility Calculator</strong> exists to bring every one of these checks — Age, Height, Weight, BMI, Running, Chest, Push-ups, Sit-ups, Pull-ups and a combined Fitness Score — into one place, instead of forcing an aspirant to hunt across a dozen scattered pages and outdated forum posts for each individual number. Rather than hardcoding a single fixed table of numbers that quietly goes stale the moment a new notification is released, every standard used in this tool is drawn from a structured, versioned data source that mirrors what actually appears in the official Agnipath and CAPF recruitment notifications, so it can be updated the moment new figures are published without rewriting the tool itself.
</p>
<p>
  It is worth being upfront about one thing from the start: recruitment standards are not identical across India. The Army deliberately applies region-based relaxations to account for genuine population-level differences in average height and build across the country, and it applies category-based relaxations for groups such as sons of servicemen and recognised sportspersons. A single flat number for "Army height requirement" or "Army weight requirement" simply does not exist — what exists is a structured set of standards that depend on your gender, your chosen trade (General Duty, Technical, Clerk/Store Keeper Technical, or Tradesman), and your recruitment zone. This calculator is built around that reality rather than around a simplified, misleading average.
</p>

---

<h2>Indian Army Age Eligibility Standards</h2>
<p>
  Age is the first and least forgiving gate in the entire process. For most Agniveer posts — General Duty, Technical, Clerk/Store Keeper Technical, and the majority of Tradesman categories — the accepted band is <strong>17.5 years to 21 years</strong> as measured against the reference date printed in that year's notification, not the date you happen to apply or the date of the rally itself. A small number of Tradesman posts extend the upper limit slightly further, up to around 23 years, and it is worth checking your specific trade rather than assuming the general 21-year ceiling applies to every role. Unlike many other government recruitment exams, the Agnipath scheme applies <strong>no category-wise age relaxation</strong> — SC, ST and OBC candidates are held to exactly the same age band as everyone else, which is a frequent and costly point of confusion for first-time applicants used to relaxation rules from other exams.
</p>
<table>
  <thead>
    <tr><th>Category</th><th>Minimum Age</th><th>Maximum Age</th><th>Category Relaxation</th></tr>
  </thead>
  <tbody>
    <tr><td>Agniveer General Duty (GD)</td><td>17.5 years</td><td>21 years</td><td>None</td></tr>
    <tr><td>Agniveer Technical</td><td>17.5 years</td><td>21 years</td><td>None</td></tr>
    <tr><td>Agniveer Clerk / Store Keeper Technical</td><td>17.5 years</td><td>21 years</td><td>None</td></tr>
    <tr><td>Agniveer Tradesman (10th pass trades)</td><td>17.5 years</td><td>21 years</td><td>None</td></tr>
    <tr><td>Agniveer Tradesman (8th pass trades)</td><td>17.5 years</td><td>up to 23 years*</td><td>None</td></tr>
    <tr><td>CAPF Constable (GD) — reference only</td><td>18 years</td><td>23 years</td><td>~5 yrs SC/ST, ~3 yrs OBC</td></tr>
  </tbody>
</table>
<p style="font-size:0.9em">*Varies by trade and notification — always confirm against the current year's document before relying on it.</p>

---

<h2>Indian Army Height Standards by Zone</h2>
<p>
  Height is checked at the Physical Measurement Test using a calibrated stadiometer, and there is essentially zero tolerance for shortfall — being even half a centimetre under the required figure is grounds for rejection at that stage, sports and SOS/SOEX certificates aside. For Agniveer GD and Technical roles, the standard minimum across most plains states is <strong>170 cm</strong>, reflecting the heavier physical demands of combat and equipment-handling roles. Clerk and Store Keeper Technical roles, being comparatively less physically demanding, generally carry a lower minimum around <strong>162 cm</strong>. Candidates from the Himalayan belt, North-Eastern states and notified hill or tribal recruitment zones are recognised as having a different average build, so a relaxed minimum, commonly 162 cm, applies in these zones — and for candidates of Gorkha, Garhwali or Kumaoni domicile, the minimum can drop as low as 160 cm.
</p>
<table>
  <thead><tr><th>Zone / Category</th><th>Gender</th><th>Minimum Height</th></tr></thead>
  <tbody>
    <tr><td>General Duty — Plains &amp; most states</td><td>Male</td><td>170 cm</td></tr>
    <tr><td>Technical — Plains &amp; most states</td><td>Male</td><td>170 cm</td></tr>
    <tr><td>Clerk / SKT — Plains &amp; most states</td><td>Male</td><td>162 cm</td></tr>
    <tr><td>Himalayan / North-Eastern / Hill regions</td><td>Male</td><td>162 cm</td></tr>
    <tr><td>Gorkha, Garhwali &amp; Kumaoni domicile</td><td>Male</td><td>160 cm</td></tr>
    <tr><td>Scheduled Tribe / notified tribal areas</td><td>Male</td><td>162 cm</td></tr>
    <tr><td>Corps of Military Police (CMP) — most states</td><td>Female</td><td>162 cm</td></tr>
    <tr><td>Corps of Military Police (CMP) — relaxed zones</td><td>Female</td><td>152 cm</td></tr>
  </tbody>
</table>
<p>
  On top of these zone figures, two specific relaxations are commonly available: Sons/Daughters of Servicemen or Ex-Servicemen (SOS/SOEX) generally receive about 2 cm of height relaxation and 2 kg of weight relaxation, while candidates with a valid national or state-level sportsperson certificate can receive around 2 cm height and 5 kg weight relaxation. Chest measurement, checked for male candidates only, generally requires a minimum unexpanded reading around <strong>77 cm</strong> in plains zones (around 76 cm in hill and Gorkha zones), plus a minimum expansion of about <strong>5 cm</strong> between the relaxed and fully expanded readings, taken after a deep breath — an expansion closer to 7–8 cm is considered a strong, comfortably-clearing result rather than a borderline one.
</p>

---

<h2>Weight and BMI Requirements</h2>
<p>
  The Army does not publish a single fixed "ideal weight" table the way older recruitment guides sometimes suggest. Instead, weight is judged as a <strong>proportionate range tied to your height</strong>, and formally confirmed against Body Mass Index during the Medical Examination. The accepted BMI band for recruitment is roughly <strong>18.0 to 25.0</strong>, with the comfortable middle of that band — around 21 to 22 — considered ideal rather than merely acceptable. As an absolute floor beneath the height-based calculation, most male candidates are expected to weigh at least around 50 kg, reduced to around 48 kg for candidates from Himalayan regions where average builds run lighter, and female candidates are generally expected to weigh at least around 42 kg depending on height and role.
</p>
<p>
  BMI itself is a simple, well-established formula: divide your weight in kilograms by the square of your height in metres. A candidate at 170 cm (1.70 m) weighing 62 kg has a BMI of 62 ÷ (1.70 × 1.70) = 21.5 — comfortably inside the ideal middle of the accepted band. The same 170 cm candidate at 48 kg would fall to a BMI of roughly 16.6, well under the 18.0 floor, and would be flagged as underweight even though their height clears the standard easily — a clear reminder that height, weight and BMI are three separate, independent gates rather than one blended score.
</p>
<table>
  <thead><tr><th>BMI Range</th><th>Classification</th><th>Army Recruitment Status</th></tr></thead>
  <tbody>
    <tr><td>Below 18.0</td><td>Underweight</td><td>Below accepted band — likely held at medical stage</td></tr>
    <tr><td>18.0 – 19.9</td><td>Fit — lower healthy range</td><td>Within accepted band</td></tr>
    <tr><td>20.0 – 22.9</td><td>Fit — ideal range</td><td>Ideal recruitment range</td></tr>
    <tr><td>23.0 – 24.9</td><td>Fit — upper healthy range</td><td>Within accepted band</td></tr>
    <tr><td>25.0 and above</td><td>Above recruitment band</td><td>Likely held for reassessment</td></tr>
  </tbody>
</table>

---

<h2>1.6 km Running &amp; Pull-Up (PFT) Standards</h2>
<p>
  The Physical Fitness Test carries a maximum of <strong>100 marks</strong>, and for Agniveer GD, Technical, Clerk/SKT and Tradesman posts it is split almost evenly between the 1.6 km run (up to 60 marks) and pull-ups (up to 40 marks), with the 9-foot ditch jump and zig-zag balance test as pure qualifying events that carry no marks of their own but can still disqualify a candidate outright on failure.
</p>
<table>
  <thead><tr><th>1.6 km Run Time (Male)</th><th>Group</th><th>Marks</th></tr></thead>
  <tbody>
    <tr><td>Up to 5 min 30 sec</td><td>Group I</td><td>60</td></tr>
    <tr><td>5 min 31 sec – 5 min 45 sec</td><td>Group II</td><td>48</td></tr>
    <tr><td>Beyond 5 min 45 sec</td><td>—</td><td>Disqualified</td></tr>
  </tbody>
</table>
<table>
  <thead><tr><th>Pull-Ups</th><th>Marks</th></tr></thead>
  <tbody>
    <tr><td>10 and above</td><td>40</td></tr>
    <tr><td>9</td><td>33</td></tr>
    <tr><td>8</td><td>27</td></tr>
    <tr><td>7</td><td>21</td></tr>
    <tr><td>6 (minimum to qualify)</td><td>16</td></tr>
    <tr><td>Below 6</td><td>Not qualified</td></tr>
  </tbody>
</table>
<p>
  Female candidates applying for Corps of Military Police roles run the same 1.6 km distance against a different band — Group I up to 7 minutes 30 seconds and Group II up to 8 minutes — and complete vertical and horizontal leg jump tests in place of pull-ups, since the female Agniveer PFT is built around different strength benchmarks rather than a scaled-down copy of the male test.
</p>

---

<h2>Push-ups, Sit-ups &amp; CAPF-Pattern Physical Standard Tests</h2>
<p>
  It's important to flag a genuine structural difference here: the Army's own Agniveer PFT does not use push-ups or sit-ups at all — it relies on the 1.6 km run and pull-ups described above. Push-ups and sit-ups are, however, common components of the Physical Standard Test (PST) used by several Central Armed Police Forces such as BSF, CRPF, CISF and ITBP. Because CAPF forces do not publish one single unified benchmark table, and each force's PST varies by notification, this calculator's Push-up and Sit-up modules are built on an illustrative, age-graded CAPF-style benchmark model, clearly labelled as such, useful for self-assessment and general fitness training rather than as an official Army standard.
</p>
<table>
  <thead><tr><th>Age Band</th><th>Excellent</th><th>Good</th><th>Average</th></tr></thead>
  <tbody>
    <tr><td>Up to 22 years</td><td>40+ push-ups</td><td>30+ push-ups</td><td>20+ push-ups</td></tr>
    <tr><td>Up to 27 years</td><td>35+ push-ups</td><td>26+ push-ups</td><td>18+ push-ups</td></tr>
    <tr><td>Up to 22 years</td><td>45+ sit-ups</td><td>35+ sit-ups</td><td>25+ sit-ups</td></tr>
    <tr><td>Up to 27 years</td><td>40+ sit-ups</td><td>30+ sit-ups</td><td>22+ sit-ups</td></tr>
  </tbody>
</table>

---

<h2>How the Combined Eligibility Score Is Calculated</h2>
<p>
  The Physical Eligibility Checker module on this page does not average your numbers into one soft, forgiving score — it treats each requirement as an independent pass/fail gate, exactly as the Army does. A candidate is only marked "Overall Eligible" when age, height, weight/BMI, chest (for male candidates) and the running qualifying time all individually clear their own threshold at once.
</p>
<blockquote>
  Overall Eligible = Age Pass AND Height Pass AND BMI Pass (18.0–25.0) AND Run Qualifying Pass AND Chest Pass (male only)
</blockquote>
<p>
  Separately, the Army Fitness Score module produces a single 0–100 composite number for self-assessment and training-tracking purposes, weighted roughly as: 35% from your run marks, 25% from pull-ups, 15% from BMI proximity to the ideal middle of the band, 10% from push-ups, 10% from sit-ups, and 5% from height/weight compliance. This composite score is a self-improvement tool built for this calculator — it is not an official Army merit score, and should never be treated as a guarantee of selection, but it is a useful single number to track week over week as you train.
</p>

---

<h2>Physical Measurement, Physical Fitness &amp; Medical Examination — Understanding the Three Stages</h2>
<p>
  Aspirants frequently use "physical test" as a catch-all phrase, which hides an important structural detail: the Army actually runs three separate physical stages, each checking a different thing, and each capable of stopping a candidate's application on its own regardless of how the other two stages go. The <strong>Physical Measurement Test (PMT)</strong> comes first at the rally ground and is purely a set of fixed body measurements — height with a stadiometer, chest normal and expanded with a tailor's tape, and an initial rough weight check. Nothing here is trained for in the athletic sense; it is either a genetic and developmental fact about your body on that day, or in the case of chest expansion, a measurement that responds modestly to sustained conditioning over months. The <strong>Physical Fitness Test (PFT)</strong> follows and is the only stage that produces marks feeding into the merit list — the 1.6 km run and pull-ups for most Agniveer trades, or the female-specific run and jump tests for Corps of Military Police candidates. This is the stage most candidates instinctively think of as "the Army physical test," but it is only one of three gates, not the whole picture. Finally, the <strong>Medical Examination</strong> is a detailed clinical review covering BMI (using the height and weight already recorded, cross-checked more carefully than the rally-ground estimate), vision, hearing, dental health, blood and urine parameters, chest X-ray, ECG, and a general check for deformities, chronic conditions or prior surgeries that could affect service. A candidate can clear the PMT and post an excellent PFT score and still be held back at the Medical Examination stage on a BMI or general health finding that only becomes fully clear under proper clinical measurement rather than the quicker rally-ground checks. Understanding this three-stage structure is genuinely useful for preparation planning: PMT-related numbers like height are effectively fixed and should simply be verified early against your zone's standard so you know if you are eligible at all; PFT numbers like run time and pull-ups are the ones worth the bulk of your training hours because they are both trainable and merit-affecting; and BMI, sitting at the intersection of PMT and the Medical Examination, deserves a longer, steadier runway of attention precisely because it is checked twice, by two different methods, at two different points in the process.
</p>
<p>
  It's also worth understanding how these three stages interact with the written Common Entrance Exam (CBT). For most Agniveer trades, the current recruitment sequence runs the online Computer-Based Test first, and only candidates who clear the CBT's qualifying cut-off are called forward to a recruitment rally for the PMT, PFT and Medical Examination. This means physical preparation and academic preparation need to run in parallel from the very start of your preparation timeline rather than sequentially — a candidate who spends months focused exclusively on general knowledge and mathematics, intending to "start running next month," routinely arrives at rally call-up with far too little runway to meaningfully improve a borderline run time, pull-up count, or BMI. Because the rally date is announced with only a few weeks' notice once your CBT result clears, the physical numbers that matter — run pace, pull-up strength, and BMI — are far easier to bring into range gradually over many months than to force into range in the short window between a CBT result and a rally date.
</p>

---

<h2>Worked Examples</h2>
<p>
  <strong>Example 1 — Clearly eligible General Duty candidate.</strong> A male candidate from a plains recruitment zone has a date of birth that puts him at 19 years 4 months old on the reference date (within the 17.5–21 band), stands 173 cm tall (above the 170 cm GD minimum), weighs 64 kg giving a BMI of 64 ÷ (1.73×1.73) = 21.4 (comfortably inside 18.0–25.0), runs the 1.6 km in 5 minutes 18 seconds (inside Group I, earning 60 marks), does 9 pull-ups (33 marks), and shows a chest expansion from 79 cm to 86 cm, a 7 cm expansion above the 5 cm minimum. Every gate passes independently, so the Eligibility Checker returns Overall Eligible, and the PFT subtotal of 93 out of 100 (60 + 33) marks him as a strong, competitive candidate on the merit list.
</p>
<p>
  <strong>Example 2 — Height clears but weight fails.</strong> A male candidate from a hill recruitment zone is 18 years 9 months old, stands 163 cm (above the relaxed 162 cm hill-zone minimum for GD), but weighs only 46 kg. His BMI works out to 46 ÷ (1.63×1.63) = 17.3, below the 18.0 floor, and below the roughly 48 kg absolute weight floor used for hill-zone candidates. Even though his age and height both clear their own gates comfortably, the Weight and BMI modules return "Not Eligible," and because the overall checker requires every gate to pass, his combined result is Not Eligible overall — with the calculator specifically flagging weight, not height or age, as the blocking factor, so he knows precisely what to work on (roughly 3–4 kg of healthy weight gain to reach the low end of the accepted BMI band) rather than guessing at what needs to change.
</p>

---

<h2>Tips to Improve Your Army Physical Fitness Score</h2>
<p>
  Training for Army physical standards works best when it is built around the actual scored events rather than generic gym routines. For the 1.6 km run, interval training — repeated 400 m efforts at faster-than-race pace with short recovery jogs — builds speed more efficiently than slow, steady long-distance running alone, though a weekly long, slow run of 6–8 km is still valuable for building the aerobic base that keeps your pace from collapsing in the final 400 metres. Practising on the actual rally-style dirt track surface, if you have access to one, also matters: most recruitment grounds are unpaved, and candidates who have only trained on smooth roads or treadmills are often surprised by 10–20 seconds of extra time lost to looser footing and sharper turns.
</p>
<p>
  For pull-ups, build volume gradually with negative reps (slowly lowering from the top position) and assisted-band pull-ups if you cannot yet complete a full unassisted rep, then progress to sets of maximum-effort reps two to three times a week with adequate rest between sessions — pull-up strength responds poorly to daily maximal training and much better to a structured, progressively loaded plan. For weight and BMI, avoid the temptation to crash-diet or water-load in the days immediately before a rally; medical staff are experienced at spotting artificial short-term manipulation, and a steady few-months plan of controlled, adequate nutrition alongside strength training is both safer and far more likely to hold up under the formal medical check. Finally, treat your chest expansion as a trainable number, not a fixed genetic trait — deep breathing drills, thoracic mobility work and general upper-body conditioning can meaningfully improve expansion over a few months of consistent practice, and a comfortable 7–8 cm expansion gives useful margin over the bare 5 cm minimum.
</p>

---

<h2>Common Mistakes Candidates Make</h2>
<p>
  The single most common and costly mistake is assuming a national average number applies to a candidate's own state or zone without checking — a candidate who trains to a 162 cm height assumption while actually needing to clear 170 cm for General Duty in their zone wastes months of preparation optimising the wrong things, or worse, discovers the shortfall only at the rally ground. A closely related mistake is calculating age loosely, using "years since birthday" instead of the calendar-accurate reference-date calculation the Army actually applies — candidates who round in their own favour by even a few weeks can arrive at a rally only to be told they are technically under-age or over-age. On the physical side, many candidates over-train the run and under-train pull-ups (or the reverse), not realising the two events are weighted almost equally in the PFT and that a lopsided score in either direction caps the total achievable marks. Attempting rapid, unsustainable weight loss or dehydration in the final week before a rally is another frequent error — beyond being medically risky, sudden fluid loss is often detectable and can actually work against a candidate at the measurement stage. Finally, candidates preparing for CAPF exams sometimes train against Army Agniveer numbers (or vice versa) simply because both are loosely filed under "defence jobs" in their own head, without registering that age bands, relaxation rules, and the entire structure of the physical test differ meaningfully between the Army's Agnipath scheme and the various Central Armed Police Forces.
</p>

---

<h2>Related Calculators &amp; Other Defence Forces</h2>
<p>
  This page focuses on Indian Army Agniveer standards as its primary, most rigorously sourced dataset, while also offering illustrative reference figures for Central Armed Police Forces such as BSF, CRPF, CISF, ITBP and SSB, whose Constable-level recruitment shares a broadly similar physical-standards structure — height, weight, chest and a running-based fitness test — but sets its own specific numbers, age bands and reservation-based relaxations independently through each force's own notification. Candidates preparing for the SSB (Services Selection Board) interview process for Army, Navy or Air Force officer entries should note that SSB itself is a personality and leadership assessment rather than a physical-standards gate in the same sense as Agniveer recruitment, though basic medical fitness is still checked. If you are also tracking general health and fitness metrics alongside your Army preparation, our standalone BMI Calculator, Age Calculator and Running Pace Calculator provide the same underlying formulas used in the modules on this page, in a simpler, non-defence-specific format.
</p>

---

<h2>Important Disclaimer</h2>
<p>
  All age limits, height standards, weight ranges, BMI bands, running marks and chest/push-up/sit-up benchmarks shown on this page are compiled from publicly available recruitment notifications and are kept in a structured, versioned data source rather than hardcoded into the calculator logic, so they can be corrected quickly as new notifications are released. Even so, recruitment standards are revised from cycle to cycle and can vary by state, recruitment zone and specific notification in ways a general-purpose calculator cannot fully anticipate. This tool is an estimation and preparation aid only — it is not affiliated with the Indian Army, the Ministry of Defence, or any Central Armed Police Force. Before applying, travelling to a rally, or making any decision based on these figures, always verify the current, exact standards for your category and zone against the official notification at joinindianarmy.nic.in or the relevant CAPF recruitment portal.
</p>
`,
};