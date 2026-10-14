INSERT INTO calculators (
  slug, name, description, category, is_popular, compare_with_json,
  seo_title, seo_description, seo_keywords_json, seo_content,
  editorial_intro, benchmark_context_json, steps_json, formula_json,
  faqs_json, renderer_key, status, sort_order
) VALUES (
  'dushman-calculator',
  'Dushman Calculator',
  'Enter two names to calculate a playful dushmani or enemy percentage, rivalry level, and peace score. The result is repeatable and made only for entertainment.',
  'Fun',
  0,
  '["friendship-calculator","flames-calculator","love-calculator"]',
  'Dushman Calculator - Enemy Percentage by Name',
  'Use the free Dushman Calculator to find a fun enemy percentage, rivalry level, and peace score for two names. Repeatable and entertainment-only.',
  '["dushman calculator","dushmani calculator","enemy calculator","enemy percentage calculator","rivalry calculator","name rivalry calculator","dusman calculator online"]',
  '<h2>What is a Dushman Calculator?</h2>
<p>A Dushman Calculator is a light-hearted name game that produces a rivalry percentage for two names. It is the playful opposite of a friendship calculator. It does not analyse conversations, behaviour, trust, or any real relationship evidence, so the result should never be used to label someone as an enemy.</p>

<h2>How the rivalry percentage is calculated</h2>
<p>The calculator first converts both names to lowercase letters. It then matches and cancels letters that occur in both names. The number of unmatched letters creates the main difference score. A small deterministic value derived from the two normalized names adds variety. The names are sorted before this final step, so entering Rahul and Aman gives the same score as entering Aman and Rahul.</p>
<ol>
  <li>Remove spaces, punctuation, numbers, and letter accents.</li>
  <li>Count matching letters in both names and cancel the shared occurrences.</li>
  <li>Divide unmatched letters by the total number of letters.</li>
  <li>Add a small repeatable name-based variation and cap the result at 99%.</li>
</ol>

<h2>How to read your result</h2>
<table>
  <thead><tr><th>Rivalry score</th><th>Playful meaning</th></tr></thead>
  <tbody>
    <tr><td>0-20%</td><td>Friendly competition</td></tr>
    <tr><td>21-40%</td><td>Mild rivalry</td></tr>
    <tr><td>41-60%</td><td>Competitive energy</td></tr>
    <tr><td>61-80%</td><td>Strong rivalry</td></tr>
    <tr><td>81-99%</td><td>Playful arch rivals</td></tr>
  </tbody>
</table>
<p>The peace score is simply 100 minus the rivalry score. Neither number is a psychological assessment or a prediction.</p>

<h2>What this calculator cannot tell you</h2>
<p>Names do not reveal whether a person is trustworthy, angry, jealous, unsafe, or likely to create conflict. Real relationships depend on actions and communication. If you have a genuine disagreement, use calm conversation, clear boundaries, and help from a trusted person where appropriate instead of relying on an online score.</p>

<h2>Privacy and repeatable results</h2>
<p>The two names are processed in your browser for the calculation. The same spelling produces the same result, and swapping the name order does not change it. Different spellings or nicknames can change the percentage because the letter counts change.</p>',
  'Use this calculator as a fun name game with friends. Its transparent letter-based method creates a consistent result without claiming to measure real hostility or compatibility.',
  NULL,
  '[{"step":1,"title":"Enter two names","description":"Type the two names you want to compare. Spaces and punctuation do not affect the score.","icon":"calculator"},{"step":2,"title":"Calculate rivalry","description":"The tool cancels shared letters and measures the remaining name difference with a repeatable formula.","icon":"result"},{"step":3,"title":"Read both scores","description":"View the playful rivalry level and its complementary peace score. Treat both as entertainment only.","icon":"result"}]',
  '{"title":"Dushman Percentage Formula","formula":"Rivalry Score = (Unmatched Letters / Total Letters x 70) + Repeatable Name Variation","explanation":"Shared occurrences of each letter are cancelled first. The remaining-letter ratio supplies most of the score. A small deterministic hash of the alphabetically ordered name pair adds variation, which means the result remains the same when the names are swapped. The result is capped between 1% and 99%; two identical normalized names return 0%.","example":{"input":"Two names are normalized and their common letter occurrences are removed.","output":"The unmatched-letter ratio and repeatable variation produce the displayed rivalry score."},"useCases":["Playing a harmless name game with friends","Comparing playful rivalry scores","Trying nicknames and spelling variations","Balancing a rivalry score with a peace score"]}',
  '[{"question":"Is the Dushman Calculator scientifically accurate?","answer":"No. There is no scientific method that can determine enmity or rivalry from two names. This tool is a deterministic entertainment game, not a relationship or personality test."},{"question":"Will the same two names always get the same result?","answer":"Yes. The calculation is deterministic, so the same spellings produce the same score. Changing a spelling or nickname can change the result."},{"question":"Does the order of the names change the score?","answer":"No. The normalized names are ordered internally before the variation is calculated, so swapping the first and second names gives the same result."},{"question":"Does a high score mean the two people are real enemies?","answer":"No. A high percentage is only a playful output based on letters. Real conflict must be understood through behaviour, communication, and context."},{"question":"What is the peace score?","answer":"The peace score is 100 minus the rivalry score. It offers a positive companion result, but it is also only for entertainment."},{"question":"Are the entered names saved?","answer":"The interactive calculation runs in your browser. The calculator does not need to send the entered names to the database to produce a score."}]',
  'dushman-calculator',
  'published',
  120
)
ON CONFLICT(slug) DO UPDATE SET
  name = excluded.name,
  description = excluded.description,
  category = excluded.category,
  is_popular = excluded.is_popular,
  compare_with_json = excluded.compare_with_json,
  seo_title = excluded.seo_title,
  seo_description = excluded.seo_description,
  seo_keywords_json = excluded.seo_keywords_json,
  seo_content = excluded.seo_content,
  editorial_intro = excluded.editorial_intro,
  benchmark_context_json = excluded.benchmark_context_json,
  steps_json = excluded.steps_json,
  formula_json = excluded.formula_json,
  faqs_json = excluded.faqs_json,
  renderer_key = excluded.renderer_key,
  status = excluded.status,
  sort_order = excluded.sort_order;
