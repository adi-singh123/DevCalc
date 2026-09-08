# AdSense readiness changes — September 8, 2026

The unfinished Omagel feature is withdrawn, not repaired or certified for relaunch.

- `/omagel-mini` returns a standalone HTTP 410 page with `noindex`. It bypasses the shared layout and contains no scripts, ads, analytics, camera requests or chat UI. Its CSP disallows scripts and its Permissions-Policy disables camera/microphone access.
- All previously supported chat API methods return 410 without parsing submitted data or accessing matchmaking state.
- The header and sitemap no longer link to the feature. Robots.txt still allows crawlers to read the withdrawn page's status and noindex directive.
- Original page and endpoint implementations are preserved as `_page-draft.tsx` and `_route-draft.ts`. They are not Next.js entry points. Existing chat components and core logic remain available for future repair.
- Privacy disclosures now explain advertising-provider cookies, web beacons and IP-address processing, email-service processing, and the earlier chat preview's data handling.
- Existing AdSense setup on the other pages and ads.txt are preserved.

Validation: production build and TypeScript passed; ESLint passed for changed live routes, the unavailable-response helper, privacy page, header and sitemap. All 17 production HTTP checks in `adsense-readiness.cjs` passed; evidence is in `adsense-readiness-results.json`. These checks verify withdrawal, ad-free HTML, API shutdown, navigation/sitemap removal, five ordinary pages and ads.txt. They do not test every calculator, account settings, or Google's review system.

Deployment is still required for these local changes to affect the public site. After deployment, verify the same URLs against the public origin and submit/re-submit the site through AdSense when ready. No AdSense account settings or deployment were changed by this task. Approval remains Google's decision.

Before any chat relaunch, resolve the functional and security findings in `omagel-review.md`, design appropriate moderation/privacy controls, and keep private communication screens free of Google ads. Do not simply rename the archived draft files back to entry points. Any old deployment or preview that remains accessible retains its old behavior until replaced or shut down.

Policy references reviewed during the audit:
- https://support.google.com/adsense/answer/48182?hl=en
- https://support.google.com/adsense/answer/1355699?hl=en
- https://support.google.com/adsense/answer/7299563?hl=en

The older `omagel-browser-results.json` documents the original broken implementation; it is historical evidence, not the current withdrawal test result.
