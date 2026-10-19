UPDATE calculators
SET formula_json = json_set(
  formula_json,
  '$.formula', 'EMI = P × [r × (1 + r)^n] ÷ [(1 + r)^n - 1]',
  '$.explanation', 'P is the loan principal, r is the monthly interest rate (annual percentage rate divided by 12 and then by 100), and n is the total number of monthly instalments. The denominator applies to the complete expression (1 + r)^n - 1.'
)
WHERE slug = 'emi-calculator';

UPDATE calculators SET seo_content = seo_content || '<h2>Attendance planning with whole classes</h2><p>An attendance percentage is based on classes attended divided by classes conducted, so the next possible result changes one complete class at a time. If your institution requires 75%, a displayed 74.9% may still be below the rule even when a portal rounds it to 75%. Use the calculator result based on integer classes and confirm how your institution handles cancelled, merged, laboratory, remedial and condoned sessions.</p><p>When planning absences, leave a buffer instead of targeting the exact minimum. A timetable change or an incorrectly recorded class can remove that margin. The projection assumes every future class has equal attendance weight; courses that grade lectures and practical sessions separately need separate calculations.</p>' WHERE slug = 'attendance-calculator';

UPDATE calculators SET seo_content = seo_content || '<h2>How fraction operations are checked</h2><p>For addition and subtraction, the calculator converts both fractions to a common denominator before combining the numerators. Multiplication multiplies numerator by numerator and denominator by denominator, while division multiplies the first fraction by the reciprocal of the second. The final numerator and denominator are reduced by their greatest common divisor.</p><p>A denominator can never be zero, and division by a zero-valued fraction is undefined. Mixed numbers should first be converted to improper fractions: multiply the whole number by the denominator, add the numerator, and retain the denominator. Decimal output is an approximation when the fraction has a repeating expansion, so the reduced fraction remains the exact result.</p>' WHERE slug = 'fraction-calculator';

UPDATE calculators SET seo_content = seo_content || '<h2>GPA depends on credits and your institution scale</h2><p>A credit-weighted GPA is not the simple average of course grades. Each grade point is multiplied by the course credit value, those quality points are added, and the total is divided by attempted credits. A four-credit course therefore affects the result twice as much as a two-credit course.</p><p>Institutions differ on repeated courses, pass/fail modules, withdrawals, transfer credits and percentage conversion. Use the grade points printed in your official handbook rather than assuming that every 10-point or 4-point scale has the same mapping. This calculator provides a planning result; the registrar or examination office remains the authority for the GPA shown on a transcript.</p>' WHERE slug = 'gpa-calculator';

UPDATE calculators SET seo_content = seo_content || '<h2>Interpreting estimated lean body mass</h2><p>Lean body mass is total body weight minus estimated fat mass. Formula-based estimates use combinations of height, weight and sex, so two people with the same result can still have different muscle, bone, organ and body-water composition. Hydration changes, recent meals and measurement error can shift the inputs without representing a real change in muscle tissue.</p><p>Use repeated measurements under similar conditions to observe a trend rather than treating one estimate as a diagnosis. Athletes, older adults, pregnant people and anyone with fluid-balance changes may not match the population used to develop a formula. Clinical decisions require an appropriate assessment method and a qualified healthcare professional.</p>' WHERE slug = 'lean-body-mass-calculator';

UPDATE calculators SET seo_content = seo_content || '<h2>Percentage difference is symmetric</h2><p>Percentage difference compares two values without treating either one as the original baseline. It divides the absolute difference by the average of the two magnitudes, then multiplies by 100. Swapping the two inputs therefore produces the same result. This differs from percentage change, where the starting value is the denominator and direction matters.</p><p>If both values are zero, the percentage difference is undefined because the average denominator is zero, even though the absolute difference is zero. When values can be negative, explain whether the comparison uses magnitudes or signed business rules. For measurements, also report units and relevant uncertainty so a small numerical difference is not presented as meaningful without context.</p>' WHERE slug = 'percentage-difference-calculator';

UPDATE calculators SET seo_content = seo_content || '<h2>Test regular expressions safely</h2><p>A regular expression result depends on the selected flags and the JavaScript regex engine. The global flag finds repeated matches, the case-insensitive flag changes letter matching, and the multiline flag changes how line anchors behave. Start with a small representative sample and test expected matches, expected non-matches and boundary cases before using a pattern on production data.</p><p>A successful match proves only that the sample satisfies the pattern; it does not validate the meaning or safety of the underlying data. Avoid pasting secrets, access tokens or personal production records into browser tools. Patterns with deeply nested or ambiguous repetition can cause excessive backtracking, so keep expressions bounded and review performance before applying them to untrusted input.</p>' WHERE slug = 'regex-tester';

UPDATE calculators SET seo_content = seo_content || '<h2>Angles, precedence and numerical limits</h2><p>Trigonometric results depend on whether the angle mode is degrees or radians. Standard mathematical precedence evaluates parentheses and functions before powers, then multiplication or division, and finally addition or subtraction. Use explicit parentheses whenever an expression could be read in more than one way.</p><p>Many displayed decimals are rounded approximations because computers represent numbers with finite precision. Very large factorials, extreme powers and expressions near a discontinuity can overflow or lose precision. Keep the original expression, check the selected mode, and verify important scientific or engineering results with an appropriate domain tool and stated precision requirements.</p>' WHERE slug = 'scientific-calculator';

UPDATE calculators SET seo_content = seo_content || '<h2>Population and sample standard deviation are different</h2><p>Population standard deviation divides the sum of squared deviations by the full count N. Sample standard deviation uses N − 1 to estimate variability in a wider population from a sample. Choosing the wrong version can materially change a result when the dataset is small, so decide whether the entered values are the complete population or observations sampled from something larger.</p><p>Standard deviation shares the same unit as the original data and is sensitive to extreme values. Review the mean, median, range and the underlying distribution rather than judging spread from one statistic alone. Empty datasets and a one-value sample do not provide a valid sample standard deviation.</p>' WHERE slug = 'standard-deviation-calculator';

UPDATE calculators SET seo_content = seo_content || '<h2>SWP results are a cash-flow projection</h2><p>A systematic withdrawal plan sells investment units to fund periodic withdrawals. The projection depends on the starting balance, withdrawal amount, timing and assumed return. Real markets do not deliver the same return every month; poor returns early in retirement can deplete a portfolio faster even when the long-term average later recovers.</p><p>Run more than one return and inflation scenario, and review whether withdrawals rise over time. Taxes, exit loads, fund expenses and transaction timing can reduce the amount available. An SWP calculation is not a guarantee of income or capital preservation; compare the projection with the scheme documents and obtain regulated financial advice for retirement or tax decisions.</p>' WHERE slug = 'swp-calculator';

UPDATE site_pages
SET body_html = replace(
  replace(
    body_html,
    '100+ calculators across 8 categories — and growing every month.',
    '100+ calculators across 10 categories — and growing every month.'
  ),
  '<p class="font-bold text-slate-800">8</p><p class="mt-0.5 text-sm text-slate-500">Categories covered</p>',
  '<p class="font-bold text-slate-800">10</p><p class="mt-0.5 text-sm text-slate-500">Categories covered</p>'
)
WHERE slug = 'about';

UPDATE site_pages
SET body_html = replace(
  body_html,
  '<a class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md" href="/category/utility"><span class="text-2xl">⚡</span><h3 class="mt-3 font-semibold text-slate-800 group-hover:text-blue-600">Utility Calculators</h3><p class="mt-2 text-sm leading-6 text-slate-500">Handy everyday tools — Age, Date, Unit Converter, Password Generator, QR Code, and more.</p></a></div></section>',
  '<a class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md" href="/category/utility"><span class="text-2xl">⚡</span><h3 class="mt-3 font-semibold text-slate-800 group-hover:text-blue-600">Utility Calculators</h3><p class="mt-2 text-sm leading-6 text-slate-500">Handy everyday tools — Age, Date, Unit Converter, Password Generator, QR Code, and more.</p></a><a class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md" href="/category/fun"><span class="text-2xl">🎲</span><h3 class="mt-3 font-semibold text-slate-800 group-hover:text-blue-600">Fun Calculators</h3><p class="mt-2 text-sm leading-6 text-slate-500">Playful, transparent tools for friendship, names, numerology and compatibility, clearly labelled for entertainment.</p></a><a class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md" href="/category/other"><span class="text-2xl">🧰</span><h3 class="mt-3 font-semibold text-slate-800 group-hover:text-blue-600">Other Calculators</h3><p class="mt-2 text-sm leading-6 text-slate-500">Special-purpose tools for gold, events, travel, agriculture, property planning and everyday decisions.</p></a></div></section>'
)
WHERE slug = 'about';

UPDATE site_pages
SET body_html =
  substr(body_html, 1, instr(body_html, '<section id="cookies">') - 1) ||
  '<section id="cookies"><h2 class="flex items-center gap-3 text-xl font-semibold text-slate-800"><span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">5</span>Cookies and local storage</h2><div class="mt-3 leading-7 text-slate-600"><p>DevCalc calculators do not require an account and do not send the values entered into ordinary calculator forms to DevCalc. The site may use browser local storage for preferences such as theme, saved app-install choices, or tool-specific progress.</p><p class="mt-3">Browser settings let you clear cookies and local storage. Blocking optional storage does not prevent the core calculators from working.</p></div></section><section id="analytics"><h2 class="flex items-center gap-3 text-xl font-semibold text-slate-800"><span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">6</span>Analytics and diagnostics</h2><div class="mt-3 leading-7 text-slate-600"><p>DevCalc includes a Google Tag Manager container. Tags configured in that container may process page URLs, referral information, device and browser details, approximate location, and interaction events. Hosting and security systems may also retain standard request logs, including IP addresses, for reliability and abuse prevention.</p><p class="mt-3">Calculator input values are not intentionally sent as analytics events. This policy must be updated before any materially different analytics or tracking configuration is enabled.</p></div></section><section id="advertising"><h2 class="flex items-center gap-3 text-xl font-semibold text-slate-800"><span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">7</span>Advertising status</h2><div class="mt-3 leading-7 text-slate-600"><p>DevCalc currently publishes its Google AdSense publisher identifier as account-verification metadata, but it does not load the AdSense advertising script or third-party display-ad runtime. The metadata value alone does not display advertisements.</p><p class="mt-3">If advertising is enabled later, this policy and any required consent controls will be updated before ad-serving code is activated.</p></div></section>' ||
  substr(body_html, instr(body_html, '<section id="third-party-links">'))
WHERE slug = 'privacy-policy'
  AND instr(body_html, '<section id="cookies">') > 0
  AND instr(body_html, '<section id="third-party-links">') > 0;

UPDATE blog_posts
SET content_json = json_set(
      content_json,
      '$[4]', json('{"heading":"Worked Fuel-Cost Comparison Using Dated Delhi Prices","paragraphs":["This example uses Delhi retail selling prices reported by the Petroleum Planning and Analysis Cell for 16 October 2026: ₹102.12 per litre for petrol and ₹95.20 per litre for diesel. Fuel prices vary by city, outlet and date, so replace these figures with the current prices for your location before deciding.","For 1,500 km per month, a petrol car returning 15 km/l uses 100 litres and costs ₹10,212 per month. A diesel car returning 20 km/l uses 75 litres and costs ₹7,140 per month. Under only these assumptions, diesel saves ₹3,072 per month or ₹36,864 per year in fuel.","This is a fuel-only comparison. It excludes the purchase-price premium, insurance, servicing, repairs, financing and resale value. Use the linked Fuel Cost Calculator with your own distance, measured mileage and local prices."],"table":{"headers":["Vehicle type","Mileage assumption","Fuel used monthly","Price used","Monthly fuel cost","Annual fuel cost"],"rows":[["Petrol","15 km/l","100 litres","₹102.12/litre","₹10,212","₹1,22,544"],["Diesel","20 km/l","75 litres","₹95.20/litre","₹7,140","₹85,680"],["Difference","—","25 litres less","Dated Delhi example","₹3,072 lower","₹36,864 lower"]]}}'),
      '$[5].paragraphs', json('["Petrol may be the lower-cost ownership choice when its lower purchase price and expected maintenance offset diesel fuel savings. There is no universal annual-kilometre threshold because vehicle prices, real mileage, fuel prices, loan cost and ownership period differ by model and buyer.","Calculate the break-even period as the extra diesel purchase and ownership cost divided by the expected annual fuel saving. If the break-even period is longer than the time you expect to keep the vehicle, the diesel variant may not recover its premium."]'),
      '$[6].paragraphs', json('["Diesel may be economical when a specific model delivers enough verified fuel saving to recover its higher purchase and ownership costs within the planned ownership period.","High annual distance can shorten that break-even period, but the decision should use the two exact variants being compared rather than a generic claim about all petrol and diesel cars."]'),
      '$[7].paragraphs', json('["Maintenance cannot be represented by one universal petrol-versus-diesel number. Service schedules, parts, emission-control equipment, warranty coverage, driving pattern and labour rates vary by model.","Ask for the manufacturer service schedule and written estimates for the exact variants. Add expected service, insurance and repair costs to the fuel calculation before comparing total ownership cost."]')
    ),
    sources_json = json('[{"title":"RSP of Petrol and Diesel in Delhi as per IOCL outlet on 16 October 2026","url":"https://ppac.gov.in/archives/impnews?page=9","publisher":"Petroleum Planning and Analysis Cell, Ministry of Petroleum and Natural Gas","publishedDate":"2026-10-16"},{"title":"Petrol and Diesel Price Information","url":"https://iocl.com/petrol-diesel-price","publisher":"Indian Oil Corporation Limited","publishedDate":"2026-10-16"}]'),
    last_verified_at = '2026-10-16',
    effective_date = '2026-10-16',
    reading_time = '12 min read'
WHERE slug = 'petrol-vs-diesel-running-cost';

-- Repair the legacy mixed-case route wherever it was saved in calculator content.
-- The application redirect remains as a safety net for old bookmarks.
UPDATE calculators
SET seo_content = replace(seo_content, '/collegeProject', '/college-project'),
    faqs_json = replace(faqs_json, '/collegeProject', '/college-project'),
    formula_json = replace(formula_json, '/collegeProject', '/college-project')
WHERE seo_content LIKE '%/collegeProject%'
   OR faqs_json LIKE '%/collegeProject%'
   OR formula_json LIKE '%/collegeProject%';

UPDATE site_pages
SET body_html = replace(body_html, '/collegeProject', '/college-project')
WHERE body_html LIKE '%/collegeProject%';

-- State Google's required advertising-cookie disclosures while accurately
-- distinguishing the present no-ad-runtime state from a future ad launch.
UPDATE site_pages
SET body_html = replace(
  body_html,
  '<p>DevCalc currently publishes its Google AdSense publisher identifier as account-verification metadata, but it does not load the AdSense advertising script or third-party display-ad runtime. The metadata value alone does not display advertisements.</p><p class="mt-3">If advertising is enabled later, this policy and any required consent controls will be updated before ad-serving code is activated.</p>',
  '<p>DevCalc currently publishes its Google AdSense publisher identifier as account-verification metadata, but it does not load the AdSense advertising script or third-party display-ad runtime. The metadata value alone does not display advertisements.</p><p class="mt-3"><strong>If Google advertising is enabled:</strong> third-party vendors, including Google, may use cookies to serve ads based on a user''s previous visits to DevCalc or other websites. Google''s use of advertising cookies enables Google and its partners to serve ads based on visits to this site and other sites on the internet. Users can manage or opt out of personalised advertising in <a class="font-semibold text-blue-700 underline hover:text-blue-800" href="https://adssettings.google.com/" rel="noopener noreferrer" target="_blank">Google Ads Settings</a>.</p><p class="mt-3">Learn more about information collected by Google and how it is used on Google''s <a class="font-semibold text-blue-700 underline hover:text-blue-800" href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">How Google uses information from sites or apps that use our services</a> page.</p><p class="mt-3">Before advertising is enabled for visitors in the European Economic Area, United Kingdom or Switzerland, DevCalc will activate a Google-certified consent-management platform that lets eligible visitors consent to, reject, or manage advertising choices. Ad-serving code will not be enabled for those visitors until that control is configured.</p>'
)
WHERE slug = 'privacy-policy';

-- Replace the SIP FAQ set with answers that match the calculator's actual
-- fixed-monthly-contribution model and avoid promises or generic fund advice.
UPDATE calculators
SET faqs_json = json('[
  {
    "question":"How does this SIP Calculator calculate the maturity value?",
    "answer":"The calculator treats each monthly contribution as an instalment invested at the beginning of the month. It converts the annual expected return into a monthly rate and applies the future-value-of-an-annuity-due formula across the selected number of months. It then shows total contributions, estimated growth and estimated maturity value separately."
  },
  {
    "question":"Why can my actual mutual fund SIP return differ from this estimate?",
    "answer":"The calculator applies one constant expected annual return for illustration. A real mutual fund NAV changes from day to day, so every SIP instalment buys a different number of units and the investment may earn more or less than the estimate. Fund expenses, tracking difference, taxes, exit load and the exact transaction date can also change the realised result. Mutual fund returns are market-linked and are not guaranteed."
  },
  {
    "question":"Does rupee-cost averaging prevent losses in a SIP?",
    "answer":"No. A fixed SIP buys more units when NAV is lower and fewer units when NAV is higher, which can average the purchase cost over time. It does not guarantee a profit or protect against losses in a falling market. The final outcome still depends on the scheme, market performance, costs and the period for which the units remain invested."
  },
  {
    "question":"What expected return should I enter in the SIP Calculator?",
    "answer":"Use a reasonable planning assumption rather than the highest recent return. Review the scheme category, risk level and long-term rolling returns, then test more than one scenario such as a lower, base and higher return. The entered percentage is an assumption, not a promised CAGR, and it should not be used as the only reason to select a mutual fund."
  },
  {
    "question":"Does this calculator support a yearly Step-Up SIP?",
    "answer":"No. This version assumes the same monthly contribution for the complete investment period. If you plan to increase the SIP every year, the displayed result will not include those increases. You can use the fixed monthly amount as a baseline, but a proper step-up projection must calculate each contribution increase separately."
  },
  {
    "question":"How are taxes handled in the SIP result?",
    "answer":"Taxes are not deducted from the displayed maturity value. For an equity-oriented mutual fund, the holding period is checked separately for every monthly instalment when units are redeemed. Under the rules in force in October 2026, eligible long-term gains under section 112A are taxed at 12.5% above the applicable annual exemption and qualifying short-term gains under section 111A are taxed at 20%. Tax rules and personal circumstances can change, so verify the current position with the Income Tax Department or a qualified tax professional before redemption."
  },
  {
    "question":"What happens if I miss, pause or cancel a SIP instalment?",
    "answer":"Units already purchased normally remain invested when a later instalment is missed, paused or cancelled. The missed contribution will reduce the amount available to compound, so the actual corpus can be lower than this uninterrupted-SIP projection. The AMC may not levy a missed-SIP penalty, but a bank can charge for a failed NACH or auto-debit and scheme-specific mandate rules can differ."
  },
  {
    "question":"Are expense ratio, exit load and inflation included?",
    "answer":"Not as separate deductions. Enter an expected return that you consider realistic after recurring scheme expenses, and check the scheme documents for exit-load rules that may apply to particular instalments. The maturity value is shown in future rupees and is not adjusted for inflation, so its purchasing power may be lower than the headline amount."
  },
  {
    "question":"What is the difference between total invested, estimated gains and maturity value?",
    "answer":"Total invested is the monthly SIP amount multiplied by the number of contributions. Estimated gains are the projected maturity value minus those contributions. Maturity value is the combined total of contributions and projected growth at the assumed return. Estimated gains are not guaranteed profit and become actual only after the relevant units are redeemed at their prevailing NAV."
  }
]')
WHERE slug = 'sip-calculator';

-- Primary references for health articles whose guidance depends on recognised
-- screening definitions or nutrition evidence.
UPDATE blog_posts
SET sources_json = json('[{"title":"Adult BMI Categories","url":"https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html","publisher":"Centers for Disease Control and Prevention","publishedDate":"2024-03-19"}]'),
    last_verified_at = '2026-10-19'
WHERE slug IN ('bmi-chart-men-women', 'ideal-weight-chart-by-height-and-age');

UPDATE blog_posts
SET sources_json = json('[{"title":"About Body Mass Index (BMI)","url":"https://www.cdc.gov/bmi/about/index.html","publisher":"Centers for Disease Control and Prevention","publishedDate":"2024-06-28"}]'),
    last_verified_at = '2026-10-19'
WHERE slug = 'body-fat-percentage-chart-men-women';

UPDATE blog_posts
SET sources_json = json('[{"title":"About Water and Healthier Drinks","url":"https://www.cdc.gov/healthy-weight-growth/water-healthy-drinks/index.html","publisher":"Centers for Disease Control and Prevention"}]'),
    last_verified_at = '2026-10-19'
WHERE slug = 'daily-water-intake-guide';

UPDATE blog_posts
SET sources_json = json('[{"title":"Body Weight Planner","url":"https://www.niddk.nih.gov/bwp","publisher":"National Institute of Diabetes and Digestive and Kidney Diseases"}]'),
    last_verified_at = '2026-10-19'
WHERE slug IN ('how-many-calories-should-i-eat-per-day', 'what-is-bmr-calculator-guide');

UPDATE blog_posts
SET sources_json = json('[{"title":"Dietary Supplements for Exercise and Athletic Performance","url":"https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-HealthProfessional/","publisher":"NIH Office of Dietary Supplements"}]'),
    last_verified_at = '2026-10-19'
WHERE slug = 'how-much-protein-do-you-need-per-day';

-- Primary investor references for market-linked and deposit comparisons.
UPDATE blog_posts
SET sources_json = json('[{"title":"SEBI Investor Education Programme: Investments in Mutual Funds","url":"https://www.sebi.gov.in/sebi_data/commondocs/siep_h.html","publisher":"Securities and Exchange Board of India"}]'),
    last_verified_at = '2026-10-19'
WHERE slug IN ('cagr-vs-absolute-return', 'ppf-vs-fd-vs-sip', 'sip-vs-fd', 'sip-vs-lumpsum-investment');

UPDATE blog_posts
SET sources_json = json('[{"title":"Understanding Exchange Traded Funds","url":"https://investor.sebi.gov.in/exchange_traded_fund.html","publisher":"SEBI Investor"},{"title":"Understanding Mutual Funds","url":"https://investor.sebi.gov.in/hindi/understanding_mf.html","publisher":"SEBI Investor"}]'),
    last_verified_at = '2026-10-19'
WHERE slug = 'mutual-fund-vs-etf';

UPDATE blog_posts
SET sources_json = json('[{"title":"Guide to Deposit Insurance","url":"https://www.dicgc.org.in/guide-to-deposit-insurance","publisher":"Deposit Insurance and Credit Guarantee Corporation"}]'),
    last_verified_at = '2026-10-19'
WHERE slug = 'fd-vs-rd';

UPDATE blog_posts
SET sources_json = json('[{"title":"Income Tax Department e-Filing Portal","url":"https://www.incometax.gov.in/iec/foportal/","publisher":"Income Tax Department, Government of India"}]'),
    last_verified_at = '2026-10-19'
WHERE slug = 'old-tax-regime-vs-new-tax-regime';

UPDATE blog_posts
SET sources_json = json('[{"title":"SEBI Investor Education Programme","url":"https://www.sebi.gov.in/sebi_data/commondocs/siep_h.html","publisher":"Securities and Exchange Board of India"}]'),
    last_verified_at = '2026-10-19'
WHERE slug = 'simple-interest-vs-compound-interest';

-- Vehicle references support statutory fitment and fuel-cost claims.
UPDATE blog_posts
SET sources_json = json('[{"title":"Fuel Economy Norms","url":"https://beeindia.gov.in/en/programmesenergy-efficiency-in-transport-sector/fuel-economy-norms","publisher":"Bureau of Energy Efficiency"}]'),
    last_verified_at = '2026-10-19'
WHERE slug = 'car-mileage-calculator-guide';

UPDATE blog_posts
SET sources_json = json('[{"title":"Master Circular on Loans and Advances","url":"https://www.rbi.org.in/commonperson/English/Scripts/Notification.aspx?Id=1572","publisher":"Reserve Bank of India"}]'),
    last_verified_at = '2026-10-19'
WHERE slug = 'how-much-car-can-i-afford-india';

UPDATE blog_posts
SET sources_json = json('[{"title":"Central Motor Vehicles Rules","url":"https://morth.nic.in/central-motor-vehicles-rules-1989-1","publisher":"Ministry of Road Transport and Highways"}]'),
    last_verified_at = '2026-10-19'
WHERE slug = 'tyre-upsizing-guide-india';

-- Add a distinct decision-focused section only to articles below the quality
-- threshold. Each paragraph addresses the actual method and limitations of its topic.
UPDATE blog_posts SET content_json = json_insert(content_json, '$[#]', json('{"heading":"How to Use Body-Fat Ranges Responsibly","paragraphs":["A body-fat chart is a broad comparison tool, not a diagnosis. Different measurement methods can produce different results for the same person because skinfold callipers, bioelectrical impedance and imaging techniques estimate tissue differently. Hydration, recent exercise, food intake and device settings can also move a reading without a real change in body fat. Use the same method under similar conditions when tracking a trend, and avoid comparing a reading from one device directly with a different method. Age, sex, pregnancy, athletic training and medical conditions affect interpretation. If a result will influence treatment, nutrition restriction or training intensity, discuss it with an appropriately qualified clinician or dietitian rather than selecting a target from a general chart alone."]}')) WHERE slug = 'body-fat-percentage-chart-men-women';

UPDATE blog_posts SET content_json = json_insert(content_json, '$[#]', json('{"heading":"Comparing Returns Without Distorting the Time Period","paragraphs":["Absolute return answers how much an investment changed over the complete holding period, while CAGR converts that change into a smoothed annual rate. They answer different questions. A 30% absolute gain over one year is not comparable with a 30% gain earned over five years until the periods are normalised. CAGR is useful for a beginning value, ending value and elapsed time, but it hides the path between those values and does not describe volatility or cash flows added during the period. For SIPs or portfolios with deposits and withdrawals, use a cash-flow-aware measure such as XIRR instead. Always compare returns over the same dates, after relevant costs and taxes, and alongside risk rather than selecting an investment from one percentage alone."]}')) WHERE slug = 'cagr-vs-absolute-return';

UPDATE blog_posts SET content_json = json_insert(content_json, '$[#]', json('{"heading":"A Repeatable Full-Tank Mileage Test","paragraphs":["For a useful real-world figure, fill the tank to the same automatic cut-off, reset the trip meter, drive normally, and refill at the same station or on similarly level ground. Divide trip kilometres by litres added at the second fill. Repeat the process over several tanks and use the combined distance divided by combined litres; averaging separate mileage readings can distort the result when fill quantities differ. Record air-conditioning use, traffic, tyre pressure and unusual idling so a sudden change has context. Dashboard efficiency is convenient but the tank-to-tank method measures fuel purchased. Do not overfill after the nozzle cuts off, and investigate a persistent drop alongside maintenance symptoms rather than assuming one short trip represents the vehicle."]}')) WHERE slug = 'car-mileage-calculator-guide';

UPDATE blog_posts SET content_json = json_insert(content_json, '$[#]', json('{"heading":"Define the Deadline Before Starting the Countdown","paragraphs":["A countdown is only reliable when the target includes a date, time and time zone. Counting calendar days to the start of an event differs from counting complete 24-hour periods, and an all-day event may be interpreted as beginning at midnight. Daylight-saving changes can make a local day contain 23 or 25 hours in some regions. For exams, applications or payments, use the time zone and closing time published by the responsible organisation rather than relying on the device location. Record whether the end date is included, keep the original deadline notice, and refresh the calculation if the organiser issues a correction. For legal or contractual deadlines, confirm the applicable rule and holiday treatment with the responsible authority."]}')) WHERE slug = 'countdown-calculator-guide';

UPDATE blog_posts SET content_json = json_insert(content_json, '$[#]', json('{"heading":"Compare FD and RD on the Same Cash-Flow Basis","paragraphs":["An FD usually starts with one lump sum, while an RD builds through monthly deposits, so comparing only the maturity amounts is misleading. Match the total cash available and deposit dates before comparing. Check whether the quoted rate compounds quarterly or at another interval, whether a senior-citizen rate applies, and what premature-closure rules reduce interest. Interest from both products can be taxable according to the depositor''s circumstances, while tax deducted by the bank is not necessarily the final tax liability. Deposit insurance eligibility and limits apply per depositor per bank under the relevant rules. Use the calculator for an estimate, then verify the current rate, tenure, nomination and closure terms in the bank''s official deposit document."]}')) WHERE slug = 'fd-vs-rd';

UPDATE blog_posts SET content_json = json_insert(content_json, '$[#]', json('{"heading":"Use Calorie Estimates as a Starting Range","paragraphs":["Daily calorie needs are estimates because energy expenditure changes with body size, age, activity, training, sleep, health and changes in body weight. A calculated maintenance value should be treated as a starting point, not a prescription. Track average body weight and relevant health indicators over several weeks under reasonably consistent conditions, then adjust gradually if the observed trend differs from the plan. Large restrictions can make a diet difficult to sustain and may be inappropriate for children, pregnancy, eating-disorder recovery or medical conditions. Food quality, protein, fibre and micronutrients still matter even when the calorie total is correct. A registered dietitian or clinician can help set an individual target when medication, symptoms or a therapeutic diet is involved."]}')) WHERE slug = 'how-many-calories-should-i-eat-per-day';

UPDATE blog_posts SET content_json = json_insert(content_json, '$[#]', json('{"heading":"Turn a Protein Target into Meals","paragraphs":["After estimating a daily target, divide it across meals in a way that fits appetite and the rest of the diet instead of treating one supplement as the solution. Count protein from all foods, including dairy, pulses, soy, eggs, fish, meat, grains and combinations of plant foods. The useful target depends on total energy intake, training, age and health, and more protein does not automatically produce more muscle without progressive resistance training and adequate recovery. Product labels can help quantify portions, but serving sizes differ. People with kidney disease or another condition requiring dietary management should not adopt a high-protein target from a general article without clinical advice. Reassess the plan when training volume, body weight or medical circumstances change."]}')) WHERE slug = 'how-much-protein-do-you-need-per-day';

UPDATE blog_posts SET content_json = json_insert(content_json, '$[#]', json('{"heading":"Create a Calendar That Matches the Real Rule","paragraphs":["Business-day calculations depend on the calendar selected. A Monday-to-Friday pattern does not automatically account for national, state, bank, exchange or organisation-specific holidays. First identify the governing location and whether the start date, end date or both are included. Then remove weekends and only the holiday list that actually applies. Cut-off times can move a transaction submitted late in the day to the next business day, while contracts may define a business day differently from ordinary office practice. Save the assumptions with the result so another person can reproduce it. For statutory, court, tax or payment deadlines, use the official calendar and wording instead of relying only on a general-purpose calculator."]}')) WHERE slug = 'how-to-calculate-business-days-between-dates';

UPDATE blog_posts SET content_json = json_insert(content_json, '$[#]', json('{"heading":"Verify the Official Wetland Record","paragraphs":["A Ramsar-site count can change when new designations are announced, boundaries are updated or the international list is refreshed. Readers should confirm the site name, designation date, area and information sheet through the Ramsar Sites Information Service and the responsible Indian ministry. A designation recognises a wetland of international importance, but it does not by itself explain every local access rule, conservation intervention or land-use restriction. Those details come from site documents and the relevant authorities. When comparing totals reported on different dates, state the cut-off date clearly rather than presenting the number as permanent. This makes the article useful after later additions and helps readers distinguish the official designation from proposals or press statements."]}')) WHERE slug = 'india-ramsar-site-tally-reaches-103';

UPDATE blog_posts SET content_json = json_insert(content_json, '$[#]', json('{"heading":"How to Verify Campaign Outcomes","paragraphs":["Campaign announcements describe targets and examples, while completed outcomes should be checked against the final report issued after the campaign period. Track the reporting dates, participating office, activity type and measurable result rather than combining planned and completed work. Disposal of a pending matter should mean it was resolved under the relevant procedure, not merely moved or counted. Cleanliness drives can be assessed through documented space reclaimed, records reviewed, waste handled and before-and-after evidence, but figures from different departments may use different scopes. Readers should use the cited government release as the dated source and look for subsequent completion data before treating interim totals as final national results."]}')) WHERE slug = 'special-campaign-6-cleanliness-drive-government-offices';

UPDATE blog_posts SET content_json = json_insert(content_json, '$[#]', json('{"heading":"Elapsed Time and Clock Time Are Not Always Identical","paragraphs":["For ordinary calculations, subtract the start instant from the end instant and express the elapsed duration in suitable units. Problems arise when users enter local clock times without a date or time zone. Crossing midnight requires the next date, and daylight-saving transitions can add or remove a clock hour in regions that observe them. Calendar months also have different lengths, so one month is not a fixed number of days. Decide whether the task needs exact elapsed seconds, calendar units, working hours or rounded billing intervals. Preserve the original timestamps and zone, especially for logs, travel and payroll. A clear result should state its inclusion, rounding and time-zone assumptions rather than displaying an unexplained number."]}')) WHERE slug = 'time-duration-calculator-guide';

UPDATE blog_posts SET content_json = json_insert(content_json, '$[#]', json('{"heading":"What a BMR Estimate Can and Cannot Tell You","paragraphs":["BMR equations estimate energy used at rest from population-level relationships involving variables such as weight, height, age and sex. They do not directly measure an individual''s metabolism. Total daily energy expenditure is higher because it includes movement, exercise and the energy used to process food, so a BMR result should not be used as a daily intake target by itself. Illness, pregnancy, growth, body composition and some medications can make a general estimate less representative. Use the result as one input to a broader plan, monitor outcomes over time and avoid interpreting small calculated differences as measured physiological changes. Clinical nutrition or indirect calorimetry may be appropriate when an accurate individual assessment is important."]}')) WHERE slug = 'what-is-bmr-calculator-guide';
