import { Calculator } from "@/src/types/calculator";

export const chickenCoopCalculator: Calculator = {
  slug: "chicken-coop-calculator",

  name: "Chicken Coop Size Calculator",

  description:
    "Find the exact coop space, run space, roosting bar length, and number of nesting boxes your flock needs. Enter your flock size, breed size, and how much time your chickens spend outside to get a precise, overcrowding-free coop and run size in square feet.",

  category: "Other",

  isPopular: true,

  seo: {
    title:
      "Chicken Coop Size Calculator | Coop, Run & Nesting Box Sizing Tool",

    description:
      "Free chicken coop size calculator. Find exactly how many square feet of coop space, run space, roosting bar length, and nesting boxes you need based on flock size, breed, and lifestyle.",

    keywords: [
      "chicken coop size calculator",
      "chicken run space requirements",
      "nesting boxes per chicken calculator",
      "chicken coop square footage calculator",
      "backyard chicken coop planner",
      "roosting bar length calculator",
      "bantam chicken coop size",
      "chicken coop dimensions guide",
      "chicken coop building estimator",
    ],
  },

  compareWith: [
    "egg-production-calculator",
    "feed-cost-calculator",
    "unit-converter-calculator",
  ],

  steps: [
    {
      step: 1,
      title: "Enter Your Flock Size & Breed Size",
      description:
        "Tell us how many chickens you have (or plan to get), and whether they're standard-size, bantam, or large/giant breeds — breed size changes every other number in this calculator.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Choose Your Chickens' Lifestyle",
      description:
        "Select whether your chickens will be mostly confined to the coop, have daily access to a fenced run, or free-range around your yard — this determines how much indoor coop space each bird actually needs.",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Account for Climate & Future Growth",
      description:
        "Add extra buffer space if you're in a cold climate (where chickens spend more time indoors) or if you're planning to expand your flock later, so you don't have to rebuild in a year.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "Get Your Full Coop Layout",
      description:
        "Instantly see your required coop floor space, run floor space, total roosting bar length, and recommended number of nesting boxes — everything you need before you buy or build.",
      icon: "result",
    },
  ],

  formula: {
    title: "Chicken Coop, Run & Nesting Box Sizing Formula",

    formula:
      "Coop Sq Ft = Chickens × Base Sq Ft per Bird (by lifestyle) × Breed Multiplier  |  Run Sq Ft = Chickens × 10 (or 4 for bantams) × Breed Multiplier  |  Roost Length (in) = Chickens × Inches per Bird  |  Nesting Boxes = ROUND UP(Hens ÷ 4)",

    explanation:
      "Sizing a chicken coop actually involves four separate, smaller calculations that all start from the same input: your flock size and breed size. The first and most important is coop floor space, and it depends heavily on how much time your birds actually spend inside versus outside. Chickens kept mostly confined to the coop — common in very cold climates or where daily free-range access isn't possible — need the most indoor room, roughly 10 square feet per standard bird, since the coop is effectively their entire world for much of the day. Chickens with regular access to a securely fenced run need less coop space, around 4 square feet per bird, since the coop becomes primarily a sleeping and egg-laying space rather than a full-time living area. Chickens that free-range for most of the day need the least coop space of all, as little as 3 square feet per bird, since the coop is used almost exclusively for overnight roosting. Bantam breeds, being roughly a quarter to two-thirds the size of standard breeds, need proportionally less space at every stage — commonly 4, 2, and 1 square feet respectively for the same three lifestyles — while large and giant breeds like Brahmas, Jersey Giants, and Cochins need a modest amount more than standard birds, typically 20 to 50% extra floor space per bird, to account for their larger body size and reduced mobility in tight quarters. The second calculation, run space, follows a simpler rule: roughly 10 square feet of outdoor run per standard bird (4 square feet per bantam) is the widely used minimum for keeping chickens from becoming stressed, pecking each other, or tearing up the ground cover entirely. The third calculation, roosting bar length, matters because chickens instinctively sleep perched on a bar rather than on the floor — each standard bird needs about 8 to 10 inches of linear roosting space (4 to 6 inches for bantams) positioned 18 to 24 inches off the ground, so the total roost length needed is simply the number of birds multiplied by that per-bird figure. The fourth calculation, nesting boxes, is based on hens sharing rather than each needing an individual box: one box comfortably serves 3 to 4 hens, so the number of boxes needed is your hen count divided by 4 and rounded up, since hens are social layers and will happily queue for a favorite box rather than needing one each.",

    example: {
      input:
        "6 standard-size hens, run access lifestyle (not confined, not free-range), no large-breed adjustment",

      output:
        "Coop space = 6 × 4 sq ft = 24 sq ft. Run space = 6 × 10 sq ft = 60 sq ft. Roosting bar = 6 × 9 in (midpoint of 8–10 in) = 54 in, or 4.5 ft of roost. Nesting boxes = ROUND UP(6 ÷ 4) = 2 boxes.",
    },

    useCases: [
      "Planning a new backyard coop and run before you buy materials or a pre-built kit",
      "Checking whether a coop you're considering buying is actually big enough for your flock",
      "Deciding how many chickens a coop you already own can safely house",
      "Sizing roosting bars and nesting boxes correctly so hens don't fight over space",
      "Comparing space needs for bantam versus standard versus large-breed flocks",
      "Planning ahead for flock expansion so you don't have to rebuild within a year",
    ],
  },

  faqs: [
    {
      question:
        "How much space does each chicken actually need, and why does it change so much between sources?",
      answer:
        "This is the single most common point of confusion for new chicken keepers, and the reason different sources give different numbers is that they're often answering slightly different questions. The most important variable isn't flock size at all — it's how much time your chickens spend inside the coop versus outside in a run or free-ranging. Chickens that are mostly confined to the coop, whether because of a harsh winter climate, an urban setup without room for a large run, or a period of lockdown due to a predator threat or disease outbreak in the area, need the coop itself to function as their full living space, which is why the widely used figure here is around 10 square feet per standard-size bird. Chickens that have daily access to a securely fenced outdoor run need considerably less indoor coop space, since the coop becomes primarily a sleeping and egg-laying area rather than a full-time home — roughly 4 square feet per bird covers this scenario comfortably. Chickens that free-range across a yard or pasture for most of the day need the least coop space of all, often cited as low as 3 square feet per bird, because the coop is used almost exclusively at night for roosting. Bantam breeds, which run from about a quarter to two-thirds the size of standard breeds, scale down proportionally at every stage — typically 4, 2, and 1 square feet respectively for the same three lifestyles. It's worth noting that these figures are minimums, not ideals: overcrowding chickens is one of the fastest ways to trigger feather-pecking, bullying of lower-ranked hens, stress-related drops in egg production, and faster disease spread through a flock, since chickens establish a strict pecking order and need enough room to retreat from a dominant bird rather than being trapped in a corner. Many experienced keepers deliberately build 20 to 50% more space than the bare minimum whenever budget and yard space allow, both as a buffer against these overcrowding problems and to leave room for adding a few more birds later without needing to rebuild. If you're mixing breed sizes in one flock — for example, a few bantams alongside standard hens — size the shared coop and run around the standard-size figures for every bird, since mixed flocks are only as comfortable as their largest, most space-demanding members allow.",
    },
    {
      question:
        "How many nesting boxes do I actually need, and what size should they be?",
      answer:
        "Nesting boxes are one of the few parts of coop design where more isn't better, which surprises a lot of new keepers who assume each hen needs her own private box. In practice, hens are social layers and will happily share a small number of favorite boxes rather than needing one apiece — the widely used rule is one nesting box for every 3 to 4 hens, meaning a flock of 6 needs about 2 boxes, a flock of 12 needs about 3 to 4, and a flock of 20 needs roughly 5. Adding significantly more boxes than this rule suggests doesn't actually spread hens out evenly; instead, flocks tend to develop one or two 'popular' boxes that get used constantly while the extra boxes sit empty, sometimes becoming unwanted overnight roosting spots instead, which leads to manure-soiled nests and dirty eggs by morning. On sizing, the standard nesting box dimension that covers roughly 80% of backyard breeds is 12 inches wide by 12 inches deep by 12 inches tall — big enough for a hen to comfortably turn around and settle in, but not so large that two or three hens try to cram into the same box at once and risk cracking eggs underneath them. Bantam breeds do well with a smaller 10x10x10 inch box, while large and giant breeds like Brahmas, Jersey Giants, and Cochins are more comfortable with a roomier 14x14x14 inch box. Placement matters as much as size: boxes should sit 18 to 24 inches off the coop floor (but lower than your roosting bars, or hens may try to sleep in the nests instead of laying in them), positioned in a quiet, dim, low-traffic corner of the coop away from the main door and feeders, since hens strongly prefer a private, sheltered spot when they're ready to lay. If you're raising young pullets who are new to laying, it can help to start nesting boxes closer to the ground and gradually raise them as the birds mature, since very young layers sometimes struggle to figure out an already-elevated box. A final practical tip: line boxes with soft bedding like straw or pine shavings and collect eggs at least once daily, both to prevent egg breakage from birds jostling in a full box and to discourage the opportunistic egg-eating habit that can develop in a flock when eggs are left sitting too long.",
    },
    {
      question:
        "How much roosting bar space do chickens need, and how should perches be set up?",
      answer:
        "Chickens are hardwired to sleep perched above the ground rather than on the coop floor — it's an instinct left over from their wild jungle-fowl ancestors avoiding ground-level predators overnight — so a coop without adequate roosting bars will often end up with hens piling into corners or nesting boxes to sleep instead, which leads to messier nests and more floor-level squabbling. The standard rule of thumb is 8 to 10 inches of linear roosting space per standard-size bird, and roughly 4 to 6 inches for bantams, measured along the length of the bar rather than per bird individually, meaning a flock of 8 standard hens needs a combined 64 to 80 inches of roost length — that could be one long bar or several shorter bars added together. It's worth sizing generously within that range rather than at the bare minimum, since roost space gets used unevenly: dominant birds claim the most desirable spots (typically the highest bar), and birds that are too tightly packed will peck at neighbors crowding their space, especially at night when there's nowhere to retreat to. On construction, roosting bars work best as a flattened 2x4 board turned so the wider 3.5-inch face is up, rather than a round dowel or the narrow edge of the board — chickens actually rest on their feet with their body weight settling down over their toes, not gripping tightly the way a wild perching bird does, and a flat surface lets them sit down fully and cover their feet with their breast feathers overnight, which matters a great deal for preventing frostbite on the toes in cold climates. Bars should be mounted roughly 18 to 24 inches off the coop floor, and if you're using multiple bars at different heights, stagger them with enough horizontal offset that droppings from a higher bar don't fall directly onto birds roosting below. Heavy meat-type breeds and fast-growing broilers are a notable exception to all of this — because their bodies are bred for rapid weight gain rather than agility, repeatedly hopping up and down from an elevated roost can cause hip and leg injuries over time, so these breeds are generally better kept without roosting bars entirely, sleeping instead on a clean, deeply bedded floor. Whatever your setup, make sure roosting bars sit higher than your nesting boxes, since given the choice, chickens will roost on whatever surface is highest in the coop — if that happens to be a nesting box, you'll end up with droppings in your eggs every morning.",
    },
    {
      question:
        "Does breed size (bantam, standard, or large/giant) really change how big my coop needs to be?",
      answer:
        "Yes, and the difference is large enough that it's worth getting right before you build or buy, rather than treating all chickens as one generic size. Bantam breeds — miniature versions of standard chicken breeds, including popular choices like Silkies, Sebrights, and d'Uccles — typically weigh in at roughly a quarter to two-thirds the body size of a standard hen, and their space needs scale down accordingly across every part of the coop: coop floor space, run space, roosting bar length, and nesting box size can all reasonably be cut to roughly 40 to 50% of the standard-breed figures. Standard-size breeds make up the large majority of common backyard chickens — Leghorns, Rhode Island Reds, Australorps, Plymouth Rocks, and most other familiar dual-purpose or egg-laying breeds fall into this middle category, and it's what the widely cited baseline figures (10 sq ft confined, 4 sq ft with run access, 3 sq ft free-range, 10 sq ft of run, 8 to 10 inches of roost, and 12x12x12 inch nesting boxes) are built around. Large and giant breeds — Brahmas, Jersey Giants, Cochins, and other especially heavy dual-purpose or ornamental breeds — sit at the opposite end from bantams, and while they're not dramatically larger in linear body size, their bulk and comparatively lower mobility mean they benefit from noticeably more room to move, settle, and get comfortable without bumping into flockmates constantly; a 20 to 50% increase over standard-breed space figures, along with a step up to 14x14x14 inch nesting boxes, is the commonly recommended adjustment for these breeds. Where this gets genuinely important is in mixed flocks, which are extremely common in backyard settings — a few bantams kept alongside standard hens, for instance. In a mixed flock, size every shared space around your largest, most space-demanding birds rather than trying to average the figures, since a coop sized for bantams will overcrowd standard-size flockmates even if the bantams themselves would have been perfectly comfortable in less space; the reverse isn't true, so oversizing slightly for your biggest birds costs little and protects the whole flock. One related consideration worth flagging: heavy meat-type or fast-growing broiler breeds have different roosting needs entirely (they generally shouldn't roost on elevated bars at all, due to leg and hip injury risk from repeated jumping), so if your flock includes meat birds alongside layers, plan a separate, low-roost or floor-level sleeping area for them rather than expecting them to share a standard roost setup.",
    },
    {
      question:
        "What are the ventilation, predator-proofing, and climate factors I need to account for beyond raw square footage?",
      answer:
        "Square footage is the foundation of coop sizing, but a coop that's the right size on paper can still fail your flock badly if these secondary factors are ignored, so they're worth planning alongside your space calculations rather than as an afterthought. Ventilation is arguably the most commonly underestimated factor: chickens produce a surprising amount of moisture through respiration and droppings, and a coop without adequate airflow builds up ammonia fumes and humidity that irritate respiratory systems and make birds far more susceptible to illness, especially in winter when keepers are tempted to seal a coop up tightly against the cold. The general guideline is to provide at least 1 square foot of ventilation opening (windows, vents, or gaps covered in secure hardware cloth) for every 10 square feet of coop floor space, positioned high on the walls, ideally above roosting height, so a steady exchange of air happens without creating a direct, drafty breeze blowing across birds while they sleep — draft and ventilation are different things, and good coop design achieves the second without the first. Predator-proofing is the second major factor, and it needs to be treated as a design requirement from the start rather than an add-on, since a coop that's spacious but insecure puts an entire flock at risk from a single bad night. Every opening larger than roughly half an inch — including windows, vents, and the gap under doors — should be covered with welded hardware cloth rather than standard chicken wire, since common predators like raccoons can reach through chicken wire's larger gaps, and weasels and snakes can fit through surprisingly small openings that look secure at a glance. Doors and pop-holes need secure, predator-resistant latches (many raccoons can operate simple hook-and-eye latches), and if the coop floor isn't solid, buried hardware cloth extending at least 12 inches outward and downward around the perimeter prevents digging predators from tunneling underneath. Climate is the third factor, and it directly feeds back into your space calculation rather than sitting separately from it: in cold-winter climates, chickens spend dramatically more time inside the coop during short, frigid days and will often refuse to venture into snow at all, which effectively pushes a run-access flock toward needing confined-lifestyle coop space (10 sq ft per bird) for a large chunk of the year even if they technically have outdoor access the rest of the time. In hot, humid climates, the priority shifts toward maximizing shade and airflow within the run and coop, since chickens have no sweat glands and cool themselves primarily through panting and exposed skin, meaning overcrowding compounds heat stress risk far more severely than it does in a temperate climate. Building in extra ventilation, secure predator-proofing, and a seasonal space buffer from day one is almost always cheaper and less disruptive than retrofitting a coop after a problem — whether that's a respiratory illness outbreak, a predator loss, or a flock that's miserable and unproductive through an unexpectedly harsh season.",
    },
    {
      question:
        "What mistakes do new chicken keepers commonly make when sizing a coop, and how much extra space should I really build in?",
      answer:
        "The most common and consequential mistake is sizing a coop around a flock's starting number of birds with zero room for growth, which matters enormously in chicken keeping because flocks rarely stay static — hatchery minimum orders, hatching your own chicks, an unexpected rooster needing a hen or two more for flock balance, or simply catching 'chicken math' (the well-known tendency for backyard flocks to quietly grow year over year) all mean that a coop sized exactly to today's headcount is often undersized within a year or two. Building in room for at least a few more birds than you currently plan to keep, even if that means starting with a coop that looks slightly oversized on day one, avoids the far more expensive and disruptive process of building a second coop or tearing down and rebuilding later. A second frequent mistake is confusing run space guidelines with coop space guidelines, or assuming that a spacious run means the coop itself can be sized down further than it should — the two figures serve different needs (the run is daytime activity space, the coop is shelter, sleeping, and laying space) and cutting corners on coop size specifically causes crowding exactly when birds most need to retreat calmly, such as during molting, illness, extreme weather, or any period when they're confined to the coop longer than usual. A third common error is underestimating how much winter, illness, or predator-driven lockdowns push a run-access or free-range flock back into confined-lifestyle space needs for extended stretches — a coop that's perfectly comfortable for occasional overnight use can feel drastically overcrowded during a two-week winter storm confinement, which is exactly the situation where stress-related pecking and illness are most likely to start. A fourth mistake is neglecting roosting bar and nesting box math entirely and assuming that floor square footage alone guarantees a comfortable coop — a coop with plenty of floor area but insufficient roost length will still see nightly squabbles over perch space, and one with too few nesting boxes will see hens queuing, fighting, or laying eggs on the floor instead. On the question of how much buffer to build in: a flock kept in a stable, temperate climate with reliable predator control and no expansion plans can reasonably size close to the standard minimums discussed throughout this guide. Anyone expecting to add birds, living somewhere with harsh winters or extended confinement periods, working with large or giant breeds, or simply wanting a genuine margin of comfort rather than a bare-minimum setup should plan for roughly 20 to 50% more coop and run space than the calculated minimum — a modest amount of extra lumber and fencing upfront is considerably cheaper than an emergency coop expansion mid-flock, and it consistently correlates with calmer, healthier, better-laying birds.",
    },
  ],

  seoContent: `
<h2>What Is a Chicken Coop Size Calculator?</h2>
<p>
  Getting coop size right is one of the most consequential decisions a backyard chicken keeper makes, and it's also one of the easiest to get wrong. Build too small, and you'll end up with a stressed, overcrowded flock prone to feather-pecking, bullying, dirty eggs, and faster disease spread. Build far bigger than your flock needs, and you've spent money and yard space on materials that don't actually improve your chickens' welfare beyond a certain point. The gap between these two outcomes comes down to knowing the real, evidence-based space figures chicken keepers and poultry extension resources actually recommend — not a single generic number, but a set of figures that shift based on how your chickens live day to day.
</p>
<p>
  This <strong>Chicken Coop Size Calculator</strong> is built around four separate but connected numbers: how much coop floor space your flock needs, how much outdoor run space to pair with it, how many inches of roosting bar to install, and how many nesting boxes to build. Each of these depends on your flock size, your birds' breed size (bantam, standard, or large/giant), and how much of the day your chickens actually spend inside the coop versus outside. Rather than giving you one flat square-footage number and calling it done, this tool walks through the same reasoning experienced coop builders use, so the result actually matches your specific setup.
</p>
<p>
  It's worth saying upfront: there's no single "correct" coop size for a given flock count. A coop built for six free-ranging standard hens with a large securely fenced run looks very different from a coop built for six bantams confined most of the day in a cold climate. This calculator is designed to reflect that range rather than flatten it into one generic answer.
</p>

---

<h2>Step 1: How Much Coop Floor Space Does Each Chicken Need?</h2>
<p>
  The single biggest factor in coop sizing isn't flock count — it's lifestyle, meaning how much of each day your chickens actually spend inside the coop itself versus outside in a run or free-ranging. The more time birds spend indoors, the more indoor square footage each bird needs to stay comfortable and stress-free.
</p>
<table>
  <thead><tr><th>Lifestyle</th><th>Standard Breed (sq ft/bird)</th><th>Bantam Breed (sq ft/bird)</th></tr></thead>
  <tbody>
    <tr><td>Confined to coop most of the day</td><td>10 sq ft</td><td>4 sq ft</td></tr>
    <tr><td>Daily access to a secure run</td><td>4 sq ft</td><td>2 sq ft</td></tr>
    <tr><td>Free-ranges most of the day</td><td>3 sq ft</td><td>1 sq ft</td></tr>
  </tbody>
</table>
<p>
  Large and giant breeds — Brahmas, Jersey Giants, Cochins, and similarly heavy dual-purpose or ornamental birds — need roughly 20 to 50% more space than these standard-breed figures at every lifestyle level, since their larger body size and lower mobility mean they need more room to move and settle comfortably without constantly bumping into flockmates. If you keep a mixed flock of different breed sizes, always size your coop around your largest birds' requirements, since a coop sized for bantams will overcrowd standard or large-breed flockmates sharing the same space.
</p>

---

<h2>Step 2: Run Space Requirements</h2>
<p>
  The run is the fenced, usually roofed outdoor area where chickens spend their active daytime hours — foraging, dust bathing, and socializing. Run space matters just as much as coop space for flock welfare, since a run that's too small quickly gets stripped of vegetation and becomes a bare, muddy, parasite-prone patch of dirt.
</p>
<table>
  <thead><tr><th>Flock Size</th><th>Standard Breed Run (10 sq ft/bird)</th><th>Bantam Breed Run (4 sq ft/bird)</th></tr></thead>
  <tbody>
    <tr><td>4 chickens</td><td>40 sq ft</td><td>16 sq ft</td></tr>
    <tr><td>6 chickens</td><td>60 sq ft</td><td>24 sq ft</td></tr>
    <tr><td>10 chickens</td><td>100 sq ft</td><td>40 sq ft</td></tr>
    <tr><td>20 chickens</td><td>200 sq ft</td><td>80 sq ft</td></tr>
  </tbody>
</table>
<p>
  These figures are workable minimums, not luxury allowances. Flocks with access to a larger run, or that free-range beyond the run entirely for part of the day, will generally show calmer behavior, better ground cover retention, and fewer parasite issues than flocks kept at the bare minimum run size long-term.
</p>

---

<h2>Step 3: Roosting Bars and Perches</h2>
<p>
  Chickens instinctively want to sleep perched above the floor rather than on the ground — a leftover survival instinct from their wild jungle-fowl ancestors avoiding ground-level nighttime predators. A coop without enough roost space will see birds piling into corners, on top of each other, or into nesting boxes to sleep, all of which lead to messier coops and more nighttime squabbling.
</p>
<table>
  <thead><tr><th>Breed Size</th><th>Roost Space per Bird</th><th>Recommended Height</th></tr></thead>
  <tbody>
    <tr><td>Bantam</td><td>4–6 inches</td><td>12–18 inches</td></tr>
    <tr><td>Standard</td><td>8–10 inches</td><td>18–24 inches</td></tr>
    <tr><td>Large / Giant</td><td>10–12 inches</td><td>12–18 inches (lower, to protect joints)</td></tr>
  </tbody>
</table>
<p>
  Use a flattened 2x4 board (wide face up) rather than a round dowel — chickens rest by settling their body weight down over their feet, and a flat surface lets them fully cover their toes with breast feathers overnight, which matters for frostbite prevention in cold climates. Heavy meat-type or fast-growing broiler breeds are a notable exception: their bodies aren't built for repeated jumping on and off an elevated perch, and these breeds generally do better sleeping on a clean, deeply bedded floor instead of a roost.
</p>

---

<h2>Step 4: Nesting Boxes</h2>
<p>
  Unlike coop and run space, nesting boxes don't need to be sized one-per-bird — hens happily share a small number of favorite boxes, and adding far more boxes than needed doesn't spread hens out evenly; it just creates unused boxes that sometimes become unwanted overnight roosting spots instead.
</p>
<table>
  <thead><tr><th>Number of Hens</th><th>Recommended Boxes</th></tr></thead>
  <tbody>
    <tr><td>2–4 hens</td><td>1–2 boxes</td></tr>
    <tr><td>5–8 hens</td><td>2–3 boxes</td></tr>
    <tr><td>9–12 hens</td><td>3–4 boxes</td></tr>
    <tr><td>13–20 hens</td><td>4–5 boxes</td></tr>
    <tr><td>20+ hens</td><td>5–7 boxes</td></tr>
  </tbody>
</table>
<table>
  <thead><tr><th>Breed Size</th><th>Box Dimensions (W×D×H)</th></tr></thead>
  <tbody>
    <tr><td>Bantam</td><td>10 × 10 × 10 in</td></tr>
    <tr><td>Standard</td><td>12 × 12 × 12 in</td></tr>
    <tr><td>Large / Giant</td><td>14 × 14 × 14 in</td></tr>
  </tbody>
</table>
<p>
  Mount boxes 18 to 24 inches off the floor, but always lower than your roosting bars — given the choice, chickens roost on whichever surface is highest in the coop, and if that happens to be a nesting box, expect droppings in your eggs every morning. Place boxes in a quiet, dim, low-traffic corner away from the main door and feeders, since hens strongly prefer privacy when laying.
</p>

---

<h2>Breed Size Categories at a Glance</h2>
<table>
  <thead><tr><th>Category</th><th>Relative Size</th><th>Example Breeds</th></tr></thead>
  <tbody>
    <tr><td>Bantam</td><td>¼ to ⅔ of standard size</td><td>Silkies, Sebrights, d'Uccles</td></tr>
    <tr><td>Standard</td><td>Baseline</td><td>Leghorns, Rhode Island Reds, Australorps, Plymouth Rocks</td></tr>
    <tr><td>Large / Giant</td><td>~1.2–1.5× standard space needs</td><td>Brahmas, Jersey Giants, Cochins</td></tr>
  </tbody>
</table>

---

<h2>Worked Examples</h2>
<p>
  <strong>Example 1 — Small backyard flock, run access.</strong> Four standard-size hens (Rhode Island Reds) with daily access to a fenced run. Coop = 4 × 4 sq ft = 16 sq ft. Run = 4 × 10 sq ft = 40 sq ft. Roost = 4 × 9 in = 36 in (3 ft). Nesting boxes = ROUND UP(4 ÷ 4) = 1 box, though most keepers add a second for comfort.
</p>
<p>
  <strong>Example 2 — Bantam flock, free-ranging.</strong> Eight bantam hens (Sebrights) that free-range the yard most of the day. Coop = 8 × 1 sq ft = 8 sq ft. Run = 8 × 4 sq ft = 32 sq ft (used mainly at dawn/dusk or bad weather). Roost = 8 × 5 in = 40 in. Nesting boxes = ROUND UP(8 ÷ 4) = 2 boxes at 10×10×10 in.
</p>
<p>
  <strong>Example 3 — Large-breed flock, cold climate, mostly confined in winter.</strong> Ten large-breed hens (Brahmas) that are confined to the coop through a harsh winter. Base coop = 10 × 10 sq ft = 100 sq ft, then apply a 1.3× large-breed multiplier = 130 sq ft. Run (used spring through fall) = 10 × 10 sq ft × 1.3 = 130 sq ft. Roost = 10 × 11 in = 110 in (about 9.2 ft), mounted lower at 12–18 in given the breed's weight. Nesting boxes = ROUND UP(10 ÷ 4) = 3 boxes at 14×14×14 in.
</p>

---

<h2>Ventilation Requirements</h2>
<p>
  Chickens release a surprising amount of moisture through respiration and droppings, and a coop without enough airflow builds up ammonia fumes and humidity that irritate the respiratory system and make birds more prone to illness — a particularly common problem in winter when keepers seal coops tightly against the cold. The standard guideline is at least 1 square foot of ventilation opening for every 10 square feet of coop floor space, positioned high on the walls, ideally above roost height, so air exchanges steadily without creating a direct draft across sleeping birds. All ventilation openings should be covered with secure hardware cloth rather than left open or covered with standard chicken wire.
</p>

---

<h2>Predator-Proofing Your Coop</h2>
<p>
  A coop that's perfectly sized but insecure still puts your whole flock at risk. Every opening larger than about half an inch — windows, vents, gaps under doors — should be covered with welded hardware cloth, since common predators like raccoons can reach through standard chicken wire's larger gaps, and weasels and snakes can squeeze through openings that look secure at a glance. Use predator-resistant latches on doors and pop-holes (many raccoons can work simple hook-and-eye latches), and if your coop floor isn't solid, bury hardware cloth at least 12 inches outward and downward around the perimeter to stop digging predators from tunneling in underneath.
</p>

---

<h2>Climate Considerations</h2>
<p>
  Climate feeds directly back into your space calculation rather than sitting separately from it. In cold-winter regions, chickens spend far more time inside the coop on short, frigid days and often refuse to walk on snow at all, which can effectively push a run-access flock toward needing confined-lifestyle coop space for a large part of the year even though they technically have outdoor access the rest of the time. In hot, humid climates, the priority shifts toward maximizing shade and airflow in both coop and run, since chickens cool themselves mainly through panting and exposed skin rather than sweating, meaning overcrowding worsens heat stress far more severely than in a temperate climate.
</p>

---

<h2>Common Mistakes to Avoid</h2>
<p>
  The most common mistake is sizing a coop exactly to today's flock count with no room for growth — hatchery minimum orders, hatching your own chicks, or simply catching "chicken math" (the well-documented tendency for flocks to grow year over year) routinely leave a tightly sized coop undersized within a year or two. A second mistake is assuming a large run means the coop itself can be sized down further, when in fact the coop needs to comfortably handle extended confinement during illness, molting, or bad weather regardless of how generous the run is. A third mistake is skipping the roosting bar and nesting box math entirely and assuming floor square footage alone guarantees a comfortable coop — plenty of floor space doesn't prevent nightly perch squabbles or hens laying on the floor if roost length and box count fall short. Building in a 20 to 50% buffer above the calculated minimum is inexpensive relative to the cost of an emergency mid-flock expansion, and it consistently correlates with calmer, healthier, better-laying birds.
</p>

---

<h2>Materials and Budgeting Basics</h2>
<p>
  Coop costs scale fairly directly with square footage and material quality: a small 16 to 24 square foot coop built from basic exterior-grade plywood and dimensional lumber represents a modest investment, while a larger walk-in coop with hardware cloth throughout, a solid predator-proof floor, insulated walls for cold climates, and a covered run can represent a considerably larger one. Because hardware cloth, secure latching, and adequate ventilation directly protect your entire investment in birds and eggs, most experienced keepers recommend prioritizing spending on security and airflow over cosmetic upgrades, and treating floor space as the number to hit at minimum rather than the number to cut corners on to save money.
</p>

---

<h2>Related Calculators</h2>
<p>
  If you're planning your flock's broader running costs alongside coop sizing, our related Feed Cost Calculator and Egg Production Calculator use the same flock-size inputs to help you budget feed and estimate expected egg yield for the coop layout you land on here.
</p>

---

<h2>Important Disclaimer</h2>
<p>
  All square footage figures, roosting bar lengths, nesting box counts, and dimensions shown on this page are general planning guidelines compiled from widely referenced backyard poultry-keeping sources, kept in a structured format so figures can be updated as best practices evolve. Actual space needs vary by specific breed, individual bird temperament, climate, and predator pressure in your area. This tool is an estimation and planning aid only — always research your specific breed's needs and consult your local agricultural extension office or an experienced local keeper before finalizing a coop build, particularly for larger flocks or unusual climates.
</p>
`,
};