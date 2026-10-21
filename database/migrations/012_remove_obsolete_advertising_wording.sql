-- Remove advertising-provider wording left by the previous static Privacy
-- Policy. DevCalc currently publishes only its AdSense publisher identifier;
-- no third-party display-ad runtime is active.
UPDATE site_pages
SET body_html = replace(
  body_html,
  '<p>DevCalc also uses third-party display advertising placements in page content and sidebars. These placements may load independently of your optional-cookie choice. Their provider may process technical request information, such as your IP address, browser details, and referring page, when delivering the advertisement.</p>',
  ''
),
updated_at = CURRENT_TIMESTAMP
WHERE slug = 'privacy-policy'
  AND instr(body_html, 'third-party display advertising placements') > 0;
