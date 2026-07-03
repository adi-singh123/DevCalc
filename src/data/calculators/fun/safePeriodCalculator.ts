import { Calculator } from "@/src/types/calculator";

export const safePeriodCalculator: Calculator = {
  slug: "safe-period-calculator",

  name: "Safe Period Calculator",

  description:
    "Estimate your cycle's lower-risk days using your last period start date and average cycle length. A simple, date-based guide to your likely fertile and safer windows, built for quick everyday use.",

  category: "Fun",

  isPopular: false,

  compareWith: ["friendship-calculator", "lucky-number-calculator", "love-calculator"],

  seo: {
    title:
      "Safe Period Calculator - Estimate Your Fertile & Safe Days by Cycle",

    description:
      "Calculate your estimated safe days and fertile window using your last period date and cycle length. Includes a cycle phase chart, ovulation guide, and plain-language explanation of the calendar method.",

    keywords: [
      // short-tail
      "safe period calculator",
      "ovulation calculator",
      "fertile window calculator",
      "menstrual cycle calculator",
      "period date calculator",
      // long-tail
      "how to calculate safe period after periods",
      "calculate safe days to avoid pregnancy naturally",
      "how many days after period are safe",
      "how to calculate fertile window from last period",
      "safe period calculator for irregular periods",
      "calendar method for calculating safe days",
      "how accurate is the calendar method for safe days",
      "days after period start ovulation happens",
      "safe period calculator 28 day cycle example",
      // question-based
      "when is a woman most fertile in her cycle",
      "how many safe days are there in a menstrual cycle",
      "is the calendar method reliable for avoiding pregnancy",
      "how is ovulation day calculated from cycle length",
      "what is the luteal phase and why does it matter",
      "can safe period calculators be wrong",
      // comparison / supporting terms
      "calendar method vs basal body temperature method",
      "rhythm method vs symptothermal method",
      "safe period vs fertile window difference",
      // LSI / supporting terms
      "menstrual cycle phases explained",
      "ovulation tracking guide",
      "period cycle length chart",
      "natural family planning basics",
      "cycle awareness tool",
      "next period prediction calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Pick your last period start date",
      description:
        "Select the first day of your most recent menstrual period using the date picker — this is the anchor point the entire calculation is built from.",
      icon: "calendar",
    },
    {
      step: 2,
      title: "Enter your average cycle length",
      description:
        "Type the number of days in your typical menstrual cycle, counted from the first day of one period to the first day of the next (usually between 21 and 35 days).",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Calculate your cycle map",
      description:
        "The calculator works backward from your estimated next period to place your fertile window, then marks the remaining days as your lower-risk window.",
      icon: "clock",
    },
    {
      step: 4,
      title: "Review your personalized timeline",
      description:
        "See your estimated fertile days, likely safer days, and your next expected period start date, along with a clear note on how reliable this estimate actually is for your situation.",
      icon: "result",
    },
  ],

  formula: {
    title: "Safe Period Estimate Formula (Calendar / Rhythm Method)",

    formula:
      "Estimated Ovulation Day = Next Period Start Date − 14 days | Fertile Window ≈ Ovulation Day − 5 days to Ovulation Day + 1 day | Safe Window = All remaining cycle days",

    explanation:
      "This calculator is built on the calendar method, sometimes called the rhythm method, which is one of the oldest and simplest ways to estimate fertility timing without hormonal testing or physical symptom tracking. It relies on one well-documented biological pattern: in most menstrual cycles, ovulation tends to occur roughly 14 days before the next period begins, regardless of how long the overall cycle is. This 14-day window is called the luteal phase, and it's considerably more consistent across different people than the first half of the cycle, which can vary widely in length. Using your average cycle length, the calculator first estimates when your next period is likely to start, then counts backward 14 days to estimate ovulation. Because sperm can survive in the reproductive tract for up to five days and an egg remains viable for roughly 24 hours after release, the calculator marks a several-day window around the estimated ovulation date as the fertile window. Every other day in the cycle is then shown as the estimated lower-risk, or 'safe,' window. It's worth being direct about the limitations here: this method assumes a fairly regular cycle and cannot account for natural month-to-month variation, stress, illness, travel, or hormonal changes, all of which can shift ovulation earlier or later than the model predicts.",

    example: {
      input: "Last period start: July 1, 2026, Cycle length: 28 days",
      output:
        "Estimated ovulation: around July 15. Estimated fertile window: July 10-16. Estimated safer days: July 1-9 and July 17-28. Next period expected: around July 29.",
    },

    useCases: [
      "General cycle awareness and pattern tracking",
      "Understanding the basic mechanics of the calendar method",
      "Planning around an expected period start date",
      "Getting a starting reference point before using more precise tracking methods",
      "Learning the terminology used in menstrual health discussions with a doctor",
    ],
  },

  faqs: [
    {
      question: "How accurate is a calendar-based safe period calculator really?",
      answer:
        "It's important to be upfront about this: the calendar method, which is what this calculator is built on, is one of the least precise ways to estimate fertility, and its accuracy depends heavily on how regular your cycles actually are. For someone with a highly consistent cycle length month after month, the calendar method can get reasonably close to the real ovulation window, but even then it's working from population averages about the luteal phase rather than anything measured directly from your body that month. Ovulation timing can shift due to stress, illness, travel, changes in sleep, diet, medication, and a long list of other everyday factors, and none of those are visible to a calculator that only knows your start date and average cycle length. Clinical research generally places calendar-method-only approaches well below hormonal or symptom-based tracking methods in real-world effectiveness for anyone using this specifically to avoid pregnancy. If avoiding or achieving pregnancy is a serious goal rather than general curiosity, this tool is best treated as an educational starting point for understanding cycle terminology, not as a reliable standalone method — combining it with basal body temperature tracking, cervical mucus observation, or a conversation with a healthcare provider about more dependable options is strongly advisable.",
    },
    {
      question: "Why does the calculator count backward from my next period instead of forward from my last one?",
      answer:
        "This is one of the more counterintuitive parts of the calendar method, but it's rooted in real biology. The first half of a menstrual cycle, called the follicular phase, is the part that varies the most between individuals and even between different cycles for the same person — it can stretch or compress depending on a wide range of factors. The second half, called the luteal phase, which runs from ovulation to the start of the next period, is far more consistent, typically landing somewhere around 12 to 14 days for most people regardless of how long their overall cycle runs. Because of that consistency, working backward from the predicted next period date gives a more reliable estimate of ovulation than trying to count forward from the last period and guess when ovulation might happen partway through an unpredictable follicular phase. This is exactly why two people with very different total cycle lengths — say 26 days and 32 days — can both have ovulation land roughly 14 days before their respective next periods, even though counting forward from day one would put ovulation on completely different days for each of them.",
    },
    {
      question: "What counts as an 'irregular' cycle, and how does that affect the result?",
      answer:
        "A cycle is generally considered irregular when the length varies by more than about seven to nine days from month to month, when periods are frequently skipped, or when the overall length falls consistently outside the typical 21-to-35-day range. If that describes your cycle, the safe period estimate from this calculator — or any calendar-method tool — becomes significantly less reliable, because the entire calculation depends on your next period arriving close to a predictable date. When cycles are irregular, ovulation timing tends to be irregular too, sometimes by more than a week in either direction, which means the fertile window this calculator marks could easily miss the real one. If you know your cycles vary a lot, it's worth tracking several months of start dates before relying on any date-based estimate, and it's worth discussing the pattern with a doctor, since irregular cycles can sometimes be a sign of an underlying hormonal factor worth understanding on its own, separate from any fertility planning question.",
    },
    {
      question: "What is the difference between the 'fertile window' and the 'safe period'?",
      answer:
        "The fertile window refers to the span of days in a cycle when pregnancy is biologically possible, based on the combined lifespan of sperm (which can survive in the reproductive tract for up to about five days) and the egg (which is viable for roughly 24 hours after ovulation). That combination is why the fertile window is shown as several days surrounding the estimated ovulation date rather than just a single day. The safe period, by contrast, is simply every day in the cycle that falls outside that estimated fertile window — it's a term of convenience rather than a guarantee, and calling it 'safe' can be a bit misleading if taken too literally, since ovulation timing isn't perfectly predictable and can occasionally shift earlier or later than expected, especially in less regular cycles. Understanding the difference matters because the fertile window is the part of the calculation more directly tied to biology, while the safe period is really just 'everything else,' which is why it carries more built-in uncertainty than the fertile window estimate does.",
    },
    {
      question: "Is this the same as a medical fertility awareness method?",
      answer:
        "Not quite, and the distinction matters. Clinically validated fertility awareness methods — sometimes grouped under the term FABM, or fertility awareness-based methods — typically combine multiple data points, such as daily basal body temperature readings, cervical mucus changes, and sometimes ovulation predictor kits, cross-referenced against each other over several cycles to pin down ovulation with much greater confidence than a date calculation alone can offer. This calculator uses only the calendar method, which is a single, simplified piece of that broader picture, based entirely on your reported last period date and average cycle length. It's a genuinely useful starting point for understanding cycle terminology and getting a rough sense of timing, but it isn't equivalent to a properly taught, multi-signal fertility awareness method, and it shouldn't be treated with the same level of confidence. If you're interested in a more rigorous approach, a certified fertility awareness educator or a healthcare provider can walk you through combining temperature and mucus tracking with a calendar estimate like this one for a meaningfully more accurate picture.",
    },
    {
      question: "Can stress, illness, or travel really shift my ovulation date?",
      answer:
        "Yes, and this is one of the main reasons calendar-based predictions can miss the mark even for people with generally regular cycles. Ovulation is controlled by a hormonal signaling process that's sensitive to the body's overall stress load, and significant physical or emotional stress, illness, dramatic changes in sleep schedule, intense exercise, rapid weight change, and long-distance travel across time zones have all been documented to delay or occasionally advance ovulation timing in a given cycle. This is part of why fertility researchers generally caution against treating any single-cycle calendar estimate as fixed — your own body's average pattern is a reasonable baseline, but any individual month can deviate from that baseline based on what else is going on physically and emotionally at the time. If you've had a particularly stressful, sick, or disrupted month, it's reasonable to treat that cycle's estimate with extra caution and lean toward tracking additional signals like basal body temperature if the timing matters to you that month.",
    },
    {
      question: "Why does the calculator ask for cycle length instead of just the last period date?",
      answer:
        "Cycle length is the second essential ingredient because it tells the calculator how long your particular cycle typically runs from the first day of one period to the first day of the next, which is what allows it to predict when your next period — and by extension, your estimated ovulation date — is likely to occur. Two people with the same last period start date but different average cycle lengths, say 24 days versus 32 days, will have meaningfully different fertile windows, because the entire calculation is anchored to the predicted next period, not the start date alone. If you're not sure of your average cycle length, the most accurate way to find it is to look back at your last three to six cycles, count the days from the first day of one period to the first day of the next each time, and average those numbers — a single month's cycle length isn't always representative, especially if that particular month was unusually stressful or disrupted.",
    },
    {
      question: "What should I do if I want a more reliable way to track my cycle than this calculator?",
      answer:
        "If the timing question genuinely matters to you — whether for planning around pregnancy, understanding recurring symptoms, or simply wanting a clearer picture of your own body — the calendar method alone is a reasonable starting point but not the endpoint. Basal body temperature tracking, where you record your temperature first thing each morning before getting out of bed, can reveal a small, consistent rise after ovulation that confirms it happened, though it only confirms it after the fact rather than predicting it in advance. Cervical mucus tracking, which involves noting daily changes in consistency and appearance, can offer more real-time signals as your body approaches ovulation. Ovulation predictor kits, which test for a hormone surge in urine, are widely available and tend to be more precise than a calendar estimate alone. For anyone who wants a clinically robust approach, a certified fertility awareness educator can teach a symptothermal method that combines several of these signals together, and a gynecologist or general practitioner can also advise on options suited to your specific cycle history, especially if you've noticed irregularity or unusual symptoms.",
    },
  ],

  seoContent: `
<h2>Safe Period Calculator: Understanding Your Cycle with the Calendar Method</h2>
<p>
This Safe Period Calculator gives you a clear, date-based estimate of your cycle's fertile window and lower-risk days using a well-established approach called the calendar method, sometimes also referred to as the rhythm method. By entering the first day of your most recent period along with your average cycle length, you get an estimated map of your current cycle: when ovulation is likely to occur, which days carry the highest chance of pregnancy, which days are statistically lower-risk, and when your next period is expected to begin.
</p>
<p>
This tool is built to be genuinely educational rather than just a novelty. Understanding your own cycle — the terminology, the phases, and roughly how the timing works — is useful information on its own, separate from any specific planning goal. At the same time, it's worth being upfront from the start: the calendar method is one of the simpler and less precise fertility estimation approaches available, and this calculator should be treated as a starting point for cycle awareness rather than a precise or guaranteed prediction.
</p>

<h2>How a Menstrual Cycle Actually Works</h2>
<p>
A menstrual cycle is typically described in two main phases, separated by ovulation. The first phase, called the follicular phase, begins on the first day of a period and continues until ovulation occurs. This phase is the more variable one — its length can differ noticeably from person to person, and even from cycle to cycle in the same person, depending on hormonal fluctuations, stress, and a range of other factors. The second phase, called the luteal phase, begins right after ovulation and continues until the next period starts. This phase is remarkably consistent for most people, generally landing somewhere between 12 and 14 days, which is exactly the pattern this calculator relies on to work backward from a predicted next period date to an estimated ovulation date.
</p>

<table>
<thead>
<tr><th>Cycle Phase</th><th>What's Happening</th><th>Typical Length</th></tr>
</thead>
<tbody>
<tr><td>Menstrual Phase</td><td>The uterine lining sheds; this is your period</td><td>3-7 days</td></tr>
<tr><td>Follicular Phase</td><td>Hormone levels rise, an egg matures inside a follicle</td><td>Variable, roughly 10-21 days</td></tr>
<tr><td>Ovulation</td><td>A mature egg is released from the ovary</td><td>Single day, mid-cycle</td></tr>
<tr><td>Luteal Phase</td><td>Uterine lining thickens in preparation for possible pregnancy</td><td>Consistently ~12-14 days</td></tr>
</tbody>
</table>

<h2>How This Calculator Estimates Your Fertile Window</h2>
<p>
The calculation starts by using your average cycle length to estimate the date your next period is likely to begin. From that predicted date, the calculator counts backward 14 days to estimate ovulation, since the luteal phase is the more predictable half of the cycle. Around that estimated ovulation date, a several-day fertile window is marked, accounting for the fact that sperm can survive in the reproductive tract for up to roughly five days before ovulation, while the egg itself remains viable for about 24 hours afterward. Every day outside that window is then displayed as the lower-risk, or "safe," portion of the cycle.
</p>
<p>
This structure is exactly why the calculator asks for two specific pieces of information rather than just a period date alone. The last period start date anchors the calculation in time, while the average cycle length determines how far forward the next period — and therefore the backward-counted ovulation estimate — is likely to fall. Getting an accurate average cycle length matters more than people often expect; a single unusually short or long cycle can meaningfully shift the entire estimated timeline if it's used as the reference point instead of a genuine multi-month average.
</p>

<h2>A Sample Calculation, Step by Step</h2>
<table>
<thead>
<tr><th>Step</th><th>Calculation</th><th>Result</th></tr>
</thead>
<tbody>
<tr><td>1. Last period start</td><td>Entered directly</td><td>July 1</td></tr>
<tr><td>2. Cycle length</td><td>Entered directly</td><td>28 days</td></tr>
<tr><td>3. Next period estimate</td><td>July 1 + 28 days</td><td>July 29</td></tr>
<tr><td>4. Estimated ovulation</td><td>July 29 − 14 days</td><td>July 15</td></tr>
<tr><td>5. Fertile window</td><td>5 days before to 1 day after ovulation</td><td>July 10-16</td></tr>
<tr><td>6. Estimated safer days</td><td>All remaining cycle days</td><td>July 1-9 and July 17-28</td></tr>
</tbody>
</table>

<h2>Why Cycle Length Varies — and Why It Matters for Accuracy</h2>
<p>
It's a common misconception that every menstrual cycle runs on a fixed 28-day schedule. In reality, average cycle length varies quite a bit between individuals, commonly ranging anywhere from 21 to 35 days, and even a single person's cycle can shift by several days from one month to the next due to stress, illness, travel, changes in exercise intensity, significant weight changes, certain medications, and normal age-related hormonal shifts. Because this calculator's entire fertile-window estimate is anchored to your reported average cycle length, using a truly representative average — ideally calculated from at least three to six recent cycles rather than a single month — produces a meaningfully more reliable result than a rough guess.
</p>
<table>
<thead>
<tr><th>Cycle Length Category</th><th>Days</th><th>Notes</th></tr>
</thead>
<tbody>
<tr><td>Shorter than typical</td><td>Under 21 days</td><td>Worth discussing with a doctor if consistent</td></tr>
<tr><td>Typical range</td><td>21-35 days</td><td>Considered within normal variation</td></tr>
<tr><td>Longer than typical</td><td>Over 35 days</td><td>Worth discussing with a doctor if consistent</td></tr>
<tr><td>Highly irregular</td><td>Varies by 8+ days month to month</td><td>Calendar method accuracy drops significantly</td></tr>
</tbody>
</table>

<h2>The Calendar Method in Context: How It Compares to Other Approaches</h2>
<p>
The calendar method is one of several ways people estimate fertility timing, and it's worth understanding where it sits relative to the alternatives, since each approach trades off simplicity against precision differently.
</p>
<table>
<thead>
<tr><th>Method</th><th>What It Measures</th><th>Relative Precision</th></tr>
</thead>
<tbody>
<tr><td>Calendar / Rhythm Method</td><td>Date-based prediction from cycle history</td><td>Lower — no direct body signal measured</td></tr>
<tr><td>Basal Body Temperature</td><td>Small temperature rise after ovulation</td><td>Moderate — confirms after ovulation occurs</td></tr>
<tr><td>Cervical Mucus Tracking</td><td>Daily changes in mucus consistency</td><td>Moderate — offers more real-time signal</td></tr>
<tr><td>Ovulation Predictor Kits</td><td>Hormone surge detected in urine</td><td>Higher — detects the signal directly</td></tr>
<tr><td>Symptothermal Method</td><td>Combines temperature + mucus + calendar data</td><td>Highest among self-tracking methods</td></tr>
</tbody>
</table>
<p>
This calculator implements only the first row of that table. That's a deliberate design choice to keep the tool simple, fast, and educational, but it also means the result should be understood as a general estimate rather than a precise prediction, particularly for anyone whose decisions genuinely depend on accurate timing.
</p>

<h2>Common Mistakes People Make Using Date-Based Cycle Calculators</h2>
<ul>
<li><strong>Using a single month's cycle length instead of an average.</strong> One unusually short or long cycle can distort the entire estimate if it's used as the reference point.</li>
<li><strong>Ignoring cycle irregularity.</strong> If cycle length regularly swings by more than a week, calendar-based predictions become considerably less dependable.</li>
<li><strong>Treating "safe days" as a guarantee.</strong> The term describes statistically lower-risk days based on averages, not a certainty for any individual month.</li>
<li><strong>Not accounting for recent stress, illness, or travel.</strong> These factors can shift ovulation earlier or later than the model predicts, sometimes by several days.</li>
<li><strong>Relying on the calendar method alone for high-stakes planning.</strong> Combining it with temperature tracking, mucus observation, or a healthcare provider's guidance produces a meaningfully more complete picture.</li>
</ul>

<h2>What This Calculator Is — and What It Isn't</h2>
<p>
This tool is designed as an educational, easy-to-use way to understand basic cycle terminology and get a general sense of timing using your own reported dates. It is not a medical device, a diagnostic tool, or a substitute for guidance from a healthcare provider, and it should not be relied on as a sole method for making significant health or family planning decisions. If cycle timing matters to you in a serious way — whether you're trying to understand irregular symptoms, plan around pregnancy, or simply want more confidence in your own body's patterns — pairing this calculator with additional tracking methods, or speaking directly with a gynecologist or family planning specialist, will give you a far more complete and reliable picture than any date-based estimate alone.
</p>

<h2>Privacy Note</h2>
<p>
Nothing you enter into this calculator — your period date or cycle length — is stored, logged, or shared. The calculation runs entirely within your browser session, and no account or personal identification is required to use it.
</p>
`,
};