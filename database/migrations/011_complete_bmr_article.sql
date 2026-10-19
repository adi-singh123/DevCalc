UPDATE blog_posts
SET content_json = json_insert(
  content_json,
  '$[#]',
  json('{"heading":"Check the Estimate Against a Real Trend","paragraphs":["A practical way to use a BMR estimate is to combine it with an activity assumption, record the resulting intake plan, and compare it with a multi-week trend rather than one day of scale movement. Body weight can fluctuate with hydration, sodium, stored carbohydrate and digestion, so use consistent measurements and a rolling average. If the observed trend is materially different from the projection, review food tracking and activity assumptions before making a modest adjustment. Stop and seek professional guidance when the plan causes concerning symptoms, rapid unintended change or conflicts with treatment advice. The calculator explains the equation, but repeated observations provide the evidence needed to personalise a plan safely."]}')
)
WHERE slug = 'what-is-bmr-calculator-guide';
