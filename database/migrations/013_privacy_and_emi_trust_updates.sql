-- State the Google advertising-cookie disclosure plainly while accurately
-- distinguishing account verification from active ad serving.
UPDATE site_pages
SET body_html = replace(
  body_html,
  '<p class="mt-3"><strong>If Google advertising is enabled:</strong> third-party vendors, including Google, may use cookies to serve ads based on a user''s previous visits to DevCalc or other websites. Google''s use of advertising cookies enables Google and its partners to serve ads based on visits to this site and other sites on the internet. Users can manage or opt out of personalised advertising in <a class="font-semibold text-blue-700 underline hover:text-blue-800" href="https://adssettings.google.com/" rel="noopener noreferrer" target="_blank">Google Ads Settings</a>.</p>',
  '<p class="mt-3"><strong>Google advertising and cookies:</strong> Third-party vendors, including Google, use cookies to serve ads based on a user''s prior visits to DevCalc or other websites when AdSense ad serving is active. Google and its partners use advertising cookies to personalise or measure advertising. Users can manage or opt out of personalised advertising in <a class="font-semibold text-blue-700 underline hover:text-blue-800" href="https://adssettings.google.com/" rel="noopener noreferrer" target="_blank">Google Ads Settings</a>.</p>'
),
updated_at = CURRENT_TIMESTAMP
WHERE slug = 'privacy-policy';

-- RBI current-rates pages displayed a 5.25% policy repo rate when reviewed on
-- 21 October 2026. This is context only; users must enter their lender's rate.
UPDATE calculators
SET benchmark_context_json = json('{
  "title":"RBI Policy Repo Rate and Retail Lending Context",
  "badge":"Official RBI Rate Context",
  "stat":"5.25% Policy Repo Rate",
  "description":"The RBI policy repo rate was 5.25% when checked on 21 October 2026. A lender''s home-loan or retail-loan rate is not the repo rate itself: it can include a benchmark-linked spread, reset timing, borrower risk assessment and product terms. Enter the actual annual rate quoted by your lender in this calculator.",
  "source":"Reserve Bank of India — Current Rates (https://www.rbi.org.in/)",
  "lastUpdated":"21 October 2026"
}'),
updated_at = CURRENT_TIMESTAMP
WHERE slug = 'emi-calculator';
