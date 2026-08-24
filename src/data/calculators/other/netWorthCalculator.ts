import { Calculator } from "@/src/types/calculator";

export const netWorthCalculator: Calculator = {
  slug: "net-worth-calculator",

  name: "Net Worth Calculator",

  description:
    "Calculate your personal net worth by adding up all your assets — savings, investments, property, gold, and vehicles — and subtracting your outstanding liabilities. See exactly where you stand financially and how you compare to age-based benchmarks.",

  category: "Other",

  isPopular: true,

  seo: {
    title: "Net Worth Calculator – Calculate Your Total Assets Minus Liabilities",
    description:
      "Find out your real net worth in seconds. Add your savings, investments, property, and gold, subtract your loans and debts, and see how your wealth compares to age-based benchmarks in India.",
    keywords: [
      "net worth calculator",
      "personal net worth calculator",
      "assets minus liabilities calculator",
      "net worth by age benchmark",
      "wealth calculator",
      "financial net worth tracker",
      "millionaire next door formula",
      "net worth calculator for salaried professionals",
      "investable net worth calculation",
    ],
  },

  compareWith: ["sip-calculator", "retirement-calculator", "emi-calculator"],

  steps: [
    {
      step: 1,
      title: "List Your Assets",
      description:
        "Add up everything you own at current market value — bank balances, fixed deposits, mutual funds, stocks, EPF/PPF, real estate, gold, and vehicles.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "List Your Liabilities",
      description:
        "Add up every outstanding amount you owe — home loan, car loan, personal loan, education loan, and credit card dues (the outstanding balance, not the credit limit).",
      icon: "calculator",
    },
    {
      step: 3,
      title: "Calculate the Difference",
      description:
        "Subtract total liabilities from total assets to arrive at your net worth. A separate 'investable net worth' figure, which excludes your primary home, is often more useful for retirement planning.",
      icon: "calculator",
    },
    {
      step: 4,
      title: "Compare and Track",
      description:
        "See how your number stacks up against age and income-based benchmarks, and revisit the calculation every 6-12 months to track real progress.",
      icon: "result",
    },
  ],

  formula: {
    title: "Net Worth Formula",
    formula: "Net Worth = Total Assets − Total Liabilities",
    explanation:
      "Assets are valued at what they are worth today, not what you originally paid for them — a flat bought for ₹40 lakh a decade ago should be entered at its current market value, not its purchase price, and the same applies to gold, stocks, and mutual fund holdings. Liabilities are entered as the outstanding amount still owed, not the original loan amount or, in the case of credit cards, the credit limit. A commonly used secondary benchmark, popularized by the book 'The Millionaire Next Door', estimates a reasonable net worth target as (Age × Pre-tax Annual Income) ÷ 10 — useful as a rough sanity check rather than a strict target, since it doesn't account for career stage, city, or family structure.",
    example: {
      input:
        "Assets: ₹18 lakh (savings, MF, EPF, gold) + ₹45 lakh (flat, market value). Liabilities: ₹22 lakh (home loan outstanding) + ₹1.5 lakh (car loan).",
      output: "Net Worth = ₹63,00,000 − ₹23,50,000 = ₹39,50,000",
    },
    useCases: [
      "Tracking real financial progress year over year",
      "Benchmarking against age and income-based targets",
      "Separating investable wealth from illiquid assets like a primary home",
      "Identifying whether debt or spending is holding back wealth growth",
    ],
  },

  faqs: [
    {
      question: "What exactly counts as an asset and a liability when calculating net worth?",
      answer:
        "Assets are anything you own that has a real, sellable market value today. This includes obvious items like your savings account balance, fixed deposits, and cash, but also less obvious ones people often forget: the current NAV of your mutual fund units multiplied by how many units you hold, the live market price of any direct stocks, your EPF balance (visible on the EPFO portal or your latest payslip), PPF and NPS balances, the resale value of your car or bike (not what you paid for it), gold valued at today's per-gram rate rather than the purchase price, and the current market value of any real estate you own, including a self-occupied home. If you hold a stake in a business, a reasonable estimate of that equity counts too, though valuing an unlisted business is inherently approximate. Liabilities are the flip side: every rupee you currently owe, not the original loan amount. This means your home loan's outstanding principal (check your latest loan statement, not the sanctioned amount from years ago), your car loan's remaining balance, any personal loan or education loan outstanding, and your credit card's actual outstanding balance — a common mistake is entering the credit limit instead of what's actually due. A few things people sometimes get wrong: jewellery bought for sentimental or ceremonial reasons is still an asset at its gold-content value, even if you'd never sell it, since net worth is a measure of what you own, not what you intend to liquidate. On the other hand, a leased car (as opposed to a loan-financed one) generally isn't your asset since you don't own it. If you're unsure whether something qualifies, a simple test is: could you sell or liquidate this for cash today, and do you owe money against it? That covers the vast majority of edge cases.",
    },
    {
      question: "Should I include my primary home in my net worth calculation?",
      answer:
        "Yes, but with an important caveat that many people miss. Your self-occupied home is a real asset and should be included in your total net worth at its current market value, with the outstanding home loan (if any) subtracted as a liability — this is standard practice and gives you an accurate total wealth figure. However, most financial planners recommend also calculating a second, separate number called 'investable net worth,' which excludes your primary residence entirely. The reasoning is straightforward: you live in your home, so you can't spend its value without selling it and then needing somewhere else to live, which usually means buying or renting another property with most of the proceeds. This makes your primary home fundamentally different from a mutual fund or fixed deposit, which you can liquidate and actually deploy toward expenses or further investment without disrupting your daily life. This distinction matters most when you're using net worth for retirement planning. If you're calculating whether you have enough corpus to sustain your monthly expenses after retirement, a ₹1.5 crore home that you have no intention of selling doesn't help you pay your electricity bill or buy groceries — only your investable assets (mutual funds, stocks, FDs, EPF, PPF, NPS) can actually fund your day-to-day life. So the practical approach most people use is: calculate total net worth including the home for a complete wealth picture, but calculate investable net worth separately, excluding the home, vehicles, and other illiquid or non-income-generating assets, when the goal is specifically retirement readiness or financial independence planning. Both numbers are useful; they just answer different questions.",
    },
    {
      question: "What is considered a good net worth for my age in India?",
      answer:
        "There's no single correct answer, because net worth benchmarks depend heavily on city, career field, and when someone started earning and saving, but a few frameworks are commonly used as rough reference points rather than strict targets. One popular thumb rule, adapted from the book 'The Millionaire Next Door,' estimates expected net worth as your age multiplied by your pre-tax annual income, divided by 10. So someone who is 35 years old earning ₹15 lakh a year would have an expected net worth benchmark of roughly ₹52.5 lakh under this formula. People with double that figure are sometimes called strong wealth accumulators, while those under half the benchmark are considered under-accumulators relative to their income — though this label says more about spending and saving habits than it does about someone's overall financial health. Another commonly cited framework uses income multiples tied to age: roughly matching one year's income in net worth by around age 30, a few times annual income by 40, and considerably more by retirement age, on the logic that expenses and lifestyle scale with income, so the safety cushion needed should scale too. It's worth being honest that most of these benchmarks were built around urban, salaried, dual-earning households and assume savings started in the early twenties — which doesn't reflect a large share of the Indian population, including those who started working later, took career breaks, or are supporting extended family financially. If your number falls below these benchmarks, that's common and recoverable rather than alarming; the two things that matter far more than a single point-in-time number are your savings rate (how much of your income you're actually converting into assets each year) and your year-over-year net worth growth trend, since consistent progress over a decade matters more than where you started.",
    },
    {
      question: "How often should I actually recalculate my net worth?",
      answer:
        "Once a year is the practical minimum, and it's genuinely enough for most people — net worth is a slow-moving number, and checking it weekly or even monthly often does more harm than good by making you overreact to short-term market swings in your mutual funds or stocks that have nothing to do with your actual financial progress. A sensible approach many people use is to pick a fixed, memorable date each year — for salaried professionals in India, right after tax filing season (around April) works well since you already have your latest payslips, EPF statements, and investment summaries handy, making the exercise faster. If you want more visibility into trends, a quarterly check is reasonable and can help you catch problems early: a rising liabilities figure, a savings rate that's quietly dropped because of lifestyle inflation, or an asset allocation that's drifted far from your intended mix. What you're really looking for isn't the absolute number each time, but the year-over-year change, viewed alongside your income. If your net worth grew by ₹6 lakh in a year on a ₹20 lakh income, that reflects roughly a 30% effective savings-and-returns rate, which is strong. If it only grew by ₹1-2 lakh on the same income, that's worth investigating — it usually points to high EMI burden, lifestyle creep, or too much money sitting idle in low-return instruments rather than being invested. One caution: don't let a bad quarter (say, a stock market dip that temporarily reduces your mutual fund valuations) cause you to make panicked changes to your investment strategy. Net worth tracking works best as a long-term compass, not a daily or weekly scoreboard, and checking too frequently tends to increase anxiety without improving decisions.",
    },
    {
      question: "My net worth is negative or very low for my age — does that mean I'm behind?",
      answer:
        "A negative or low net worth, especially in your twenties or early thirties, is far more common than most people assume, and it doesn't automatically mean something has gone wrong. If you took an education loan, started a home loan early, or are a few years into your career with a car loan and modest savings, a break-even or slightly negative net worth is a normal, expected stage rather than a red flag. What matters much more than the raw number at any single point in time is the trajectory: is your net worth improving year over year, and is your liabilities-to-assets ratio moving in the right direction as you pay down debt and build savings simultaneously? It's also worth being honest that comparing yourself to averages or benchmarks can be genuinely misleading, because average figures are skewed significantly upward by a small number of very wealthy individuals — in most wealth distributions, including India's, the median (the middle person) is considerably lower than the average, and is a far more realistic comparison point for most salaried professionals. That said, if your net worth has been flat or declining for several years despite a stable or rising income, that is worth examining honestly, since it usually traces back to one or two identifiable causes: high-interest debt (credit cards or personal loans charging 30%+ annually are a genuine wealth drain that's worth prioritizing above most investment decisions), lifestyle spending rising in lockstep with every salary increase, or savings that are sitting in low-yield instruments instead of being invested with any growth orientation. None of these are unusual or embarrassing — they're the most common patterns among people trying to improve their financial position — but recognizing which one applies to you is the first practical step toward a meaningfully different number next year, rather than treating a single year's snapshot as a verdict on your financial competence.",
    },
    {
      question: "Is real estate a good way to build net worth compared to mutual funds or stocks?",
      answer:
        "This is genuinely one of the more debated questions in Indian personal finance, and a balanced answer has to acknowledge real trade-offs on both sides rather than declaring a clear winner. Real estate does count meaningfully toward net worth, and property has historically been a significant wealth-holding vehicle for Indian households, partly due to cultural preference and partly because it also serves the dual purpose of providing housing. However, purely as a wealth-building instrument compared to equity investments, residential real estate in most Indian cities has typically delivered rental yields in the low single digits (often 2-3% annually) and price appreciation that, over long 15-20 year periods, has frequently underperformed a well-diversified equity mutual fund portfolio, which has historically compounded at meaningfully higher rates, albeit with much more year-to-year volatility. Real estate also comes with costs and constraints that don't show up in a simple net worth number: it's illiquid (you can't sell 10% of a flat to cover an emergency the way you can redeem part of a mutual fund), it requires ongoing maintenance and property tax, and stamp duty plus brokerage on both buying and selling erode returns further, particularly if you don't hold for a long period. Equity investments, by contrast, offer liquidity, are easy to diversify across companies and sectors, and involve much lower transaction costs, but come with sharper short-term price swings and require more emotional discipline not to sell during downturns. The realistic conclusion most independent financial planners land on is that a primary home makes sense as a lifestyle and stability decision, not primarily a wealth-maximization one, while additional real estate purchased purely as an investment should be compared honestly against equity mutual funds on yield, liquidity, and long-term compounding before assuming it's automatically the safer or better wealth-building choice.",
    },
  ],

  seoContent: `
    <h2>Net Worth Calculator: Understand What You Actually Own, Not Just What You Earn</h2>
    <p>Most people can tell you their monthly salary down to the rupee, but ask them what they're actually worth — assets minus debts — and the answer is usually a vague guess. Income tells you how much money flows through your hands each month; net worth tells you how much of it you've actually kept and converted into lasting wealth. These are very different numbers, and confusing the two is one of the most common reasons people feel financially stuck despite years of steady earning. This guide walks through how net worth is calculated, what genuinely counts as an asset or liability, how to interpret your number against realistic benchmarks, and the practical levers that move the needle over time.</p>

    <h3>Why Income Is a Poor Substitute for Net Worth</h3>
    <p>It's entirely possible for someone earning ₹25 lakh a year to have a lower net worth than someone earning ₹10 lakh, if the higher earner is carrying heavy EMIs, leasing an expensive car, and saving little, while the lower earner has been consistently investing a smaller amount for longer. Net worth is a stock, not a flow — it's a snapshot of accumulated wealth at a single point in time, built from years of savings decisions, investment returns, and debt management, rather than a reflection of this month's paycheck. This is precisely why net worth, tracked consistently over years, is a far better indicator of financial health than income alone, and why two people with identical salaries can have wildly different financial futures depending on their spending habits and where their surplus money actually goes.</p>

    <h2>The Net Worth Formula, Explained Properly</h2>
    <p>The calculation itself is simple arithmetic — Total Assets minus Total Liabilities — but getting an accurate number depends entirely on correctly identifying what belongs in each category and valuing it properly. Getting this step wrong is the single most common reason people either overestimate or underestimate their real financial position.</p>

    <h3>What Counts as an Asset</h3>
    <p>Assets are valued at current market value, not at what you originally paid. This distinction matters enormously for anything held over multiple years:</p>
    <ul>
      <li><strong>Liquid assets:</strong> Savings account balances, cash, and fixed deposits (principal plus any accrued interest to date).</li>
      <li><strong>Market-linked investments:</strong> Equity and debt mutual fund holdings valued at today's NAV multiplied by units held, direct stock holdings at today's market price, and any bonds or debentures at current value.</li>
      <li><strong>Retirement accounts:</strong> EPF balance (checked via the EPFO portal or latest payslip), PPF balance, and NPS corpus value.</li>
      <li><strong>Real estate:</strong> Current market value of any property owned, including a self-occupied home — this should reflect what the property would realistically sell for today, not the price paid at purchase, which can be years or decades out of date.</li>
      <li><strong>Physical assets:</strong> Gold and jewellery valued at today's per-gram rate for the actual gold content (not including making charges, which aren't recoverable on resale), and vehicles at realistic resale value rather than the original purchase price, since cars and bikes depreciate steadily.</li>
      <li><strong>Business equity:</strong> If you own a stake in a business, a reasonable estimate of its current value, acknowledging this is inherently harder to pin down precisely for unlisted businesses than for a mutual fund unit.</li>
    </ul>

    <h3>What Counts as a Liability</h3>
    <p>Liabilities should reflect the outstanding amount owed today, not the original loan sanctioned or, for credit cards, the credit limit:</p>
    <ul>
      <li><strong>Home loan outstanding:</strong> The remaining principal balance, visible on your latest loan statement or your bank's net banking portal — not the amount originally sanctioned years ago.</li>
      <li><strong>Vehicle loans:</strong> Remaining balance on any car or two-wheeler loan.</li>
      <li><strong>Personal and education loans:</strong> Outstanding principal on any personal loan or education loan still being repaid.</li>
      <li><strong>Credit card dues:</strong> The actual outstanding balance carried forward, not the total credit limit assigned to the card — a mistake that can meaningfully distort the calculation if entered incorrectly.</li>
      <li><strong>Any other dues:</strong> Money owed to family or friends, pending tax dues, or any other formal or informal debt obligation.</li>
    </ul>

    <h2>Total Net Worth vs. Investable Net Worth</h2>
    <p>Once you've added everything up, it's worth calculating two separate figures rather than just one composite number. Total net worth includes everything — your home, your car, your gold, your investments — and gives an accurate picture of overall accumulated wealth. Investable net worth strips out the primary home, vehicles, and any other assets you use rather than intend to liquidate, leaving only the wealth that could realistically be converted to cash and deployed for expenses or further investment. This second number is the one that actually matters for questions like "do I have enough to retire" or "am I financially independent," because a home you live in, however valuable, doesn't pay your monthly grocery bill unless you sell it and then need to find somewhere else to live — usually consuming most of the proceeds in the process.</p>

    <h2>Benchmarks: How Much Net Worth Should You Actually Have?</h2>
    <p>There is no single universally correct target, since so much depends on when someone started earning, their city, career field, and family responsibilities, but a couple of frameworks are widely referenced as rough sanity checks rather than strict requirements.</p>

    <h3>The Millionaire Next Door Formula</h3>
    <p>Popularized by Thomas J. Stanley's research into how wealthy Americans actually accumulate wealth, this formula estimates expected net worth as (Age × Pre-tax Annual Income) ÷ 10. A 40-year-old earning ₹20 lakh a year would have an expected benchmark net worth of roughly ₹80 lakh under this formula. People whose actual net worth is double this figure are sometimes labeled "Prodigious Accumulators of Wealth," while those under half the benchmark are called "Under Accumulators." The formula's real value isn't as a precise target but as a way to compare your savings discipline relative to your own income, independent of what anyone else earns.</p>

    <h3>Income-Multiple Benchmarks</h3>
    <p>A second, simpler framework ties net worth targets to age using income multiples: roughly matching one year's income in net worth by around age 30, a few times annual income by 40, meaningfully more by 50, and a target in the range of 8-10 times annual income by retirement age, a framework echoed by several large global retirement planning firms and adapted with adjustments for India's later average career start and heavier reliance on EPF and real estate as wealth components. For an urban salaried professional earning ₹12 lakh a year, this framework suggests roughly ₹12 lakh in net worth by 30 as a reasonable early marker, scaling up considerably by the time retirement approaches.</p>

    <h3>Why the Median Matters More Than the Average</h3>
    <p>Any discussion of "average net worth in India" needs an important caveat: average figures are dramatically skewed upward by a small number of extremely wealthy individuals. Wealth distribution research consistently shows the top 1% of Indian households hold a disproportionate share of national wealth, which pulls the mathematical average far above what a typical household actually has. The median — the figure at which half of all households have more and half have less — is a far more realistic comparison point for most salaried professionals, and is often only a fraction of the widely quoted average. If your own number looks unimpressive next to an "average net worth" headline figure, it's worth remembering that the average and the median can differ enormously, and the average rarely reflects what a typical household actually holds.</p>

    <h2>The Two (and Only Two) Ways Net Worth Grows</h2>
    <p>Stripped of complexity, net worth grows through exactly two mechanisms: increasing assets or decreasing liabilities. Every financial decision you make ultimately routes through one of these two levers, which is a useful mental model when evaluating whether a particular action — a big purchase, an investment, a loan prepayment — genuinely helps your financial position.</p>
    <ul>
      <li><strong>Paying down high-interest debt:</strong> Clearing a credit card balance charging 30-42% annual interest is mathematically equivalent to earning a guaranteed 30-42% return on that money — a return no legitimate investment can reliably match. This is consistently one of the highest-impact, lowest-risk moves available to improve net worth.</li>
      <li><strong>Increasing your savings rate:</strong> The percentage of income actually converted into assets each year, rather than spent, is the single biggest lever most salaried professionals control directly. A rising income that's matched by rising lifestyle spending (commonly called lifestyle inflation) keeps this rate flat despite career growth.</li>
      <li><strong>Investing with a growth orientation:</strong> Money sitting in a low-yield savings account loses real value to inflation over time. Directing surplus savings into a diversified mix of equity mutual funds, EPF, PPF, and other instruments appropriate to your time horizon allows compounding to do meaningful work over 10-20 year periods.</li>
      <li><strong>Avoiding depreciating-asset debt:</strong> Financing a car or gadget that loses value the moment it's purchased, using a loan that accrues interest the entire time, works against net worth from both directions simultaneously — the asset side depreciates while the liability side accrues interest.</li>
    </ul>

    <h2>Common Net Worth Mistakes to Avoid</h2>
    <p>A few recurring errors distort net worth calculations more than people realize. Valuing property or gold at purchase price instead of current market value is one of the most common, often creating a false sense of stagnation or, conversely, overstating gains that haven't been realized. Entering a credit card's limit instead of its actual outstanding balance is another frequent mistake that inflates liabilities incorrectly. Forgetting smaller assets — an old EPF account from a previous employer, a forgotten fixed deposit, or a small stock holding from years ago — can meaningfully understate the real total, especially for people who've changed jobs multiple times. On the liabilities side, informal debts (money borrowed from family, for instance) are sometimes left out entirely, which can paint an inaccurately rosy picture.</p>

    <h2>Building a Habit Around Net Worth Tracking</h2>
    <p>Calculating net worth once, as a curiosity, has limited value. The real benefit comes from tracking it consistently — ideally on a fixed date each year, such as shortly after tax filing season when payslips, EPF statements, and investment summaries are already gathered — and comparing the year-over-year change rather than fixating on the absolute figure at any single point. A useful way to interpret the annual change is against your income: if your net worth grew by an amount equivalent to 30-40% of your annual income, that reflects a strong effective savings-and-returns rate. If it grew by only a small fraction of that despite stable or rising income, it's a signal worth investigating, usually tracing back to high EMI burden, creeping lifestyle expenses, or money sitting idle rather than being invested with intent. Quarterly check-ins can help catch these patterns early, though checking far more frequently than that tends to create anxiety over short-term market fluctuations that have little bearing on long-term financial health.</p>

    <h2>Where Net Worth Fits Into Bigger Financial Decisions</h2>
    <p>Net worth isn't just a number for personal satisfaction — it's a practical input into several bigger financial questions. Retirement planning depends heavily on your investable net worth (excluding your home) reaching a target multiple of your expected annual expenses in retirement, commonly cited frameworks suggesting somewhere between 25 and 33 times annual expenses to sustain a multi-decade retirement using a conservative annual withdrawal rate. Net worth also functions as an early-warning system: a large net worth built over many years can be significantly eroded by a single uninsured event — a medical emergency, disability, or premature death — which is why adequate term life and health insurance coverage is often described by financial planners as protecting accumulated net worth rather than building it, a distinct but equally important function.</p>

    <h2>Conclusion: A Number Worth Knowing, Not Obsessing Over</h2>
    <p>Net worth is one of the few personal finance numbers that captures the complete picture — not just what you earn, but what you've actually kept, grown, and owe. Calculating it honestly, using current market values and actual outstanding debts rather than rounded guesses, gives you a genuine starting point for financial planning, whether that's assessing retirement readiness, deciding whether to prioritize debt repayment over investing, or simply understanding your progress over time. The number itself matters far less than the trend: a modest net worth that's steadily growing year over year through consistent saving and sensible debt management reflects a stronger financial trajectory than a larger number that's stagnant or built on illiquid assets you have no intention of using. Use the calculator above with your real, current figures, and consider revisiting it on a fixed schedule rather than as a one-time exercise.</p>
  `,
};