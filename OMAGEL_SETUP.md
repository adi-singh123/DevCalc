# Omagel Mini deployment

The chat routes are restored with server-side guest authorization, peer routing, disconnect notifications, queue cancellation, acknowledgements for incoming messages, guest blocking and WebRTC negotiation. Chat has its own root layout with no advertising or analytics scripts. Navigating from the calculator site into chat reloads the document, removing previously loaded ad code.

## Vercel configuration

Set these in the Vercel project's Environment Variables, for each environment in which chat will run:

```dotenv
UPSTASH_REDIS_REST_URL=https://YOUR-DATABASE.upstash.io
UPSTASH_REDIS_REST_TOKEN=YOUR_READ_WRITE_REST_TOKEN
OMAGEL_REDIS_KEY=devcalc:omagel:v2:production
```

Use a separate key or database for Preview deployments to avoid matching test visitors with production users. Do not use a read-only Redis token: matching requires GET and EVAL permissions. Keep these values server-only; never prefix them with NEXT_PUBLIC or paste credentials into public source.

**Redis is required for reliable matchmaking on Vercel.** The in-memory fallback works only when requests reach the same running Node process. Serverless instances do not share their memory and may be replaced at any time. Do not interpret a successful single-computer test as validation of that fallback on Vercel. These credentials were not present in the available workspace environment, so a real hosted Redis connection has not been verified.

The Redis adapter stores bounded mini-chat state in one key and applies updates using an optimistic compare-and-set Lua script. It retries conflicts and returns a visible error when contention persists. This is intended for a small service, not high-volume chat. Monitor Redis request/bandwidth usage, configure hosting-level abuse controls, and load-test before expanding traffic. The application currently caps active guest records at 100 and pending signals at 128 per inbox.

## Video connections

Video now attempts a direct connection using STUN when no TURN server is configured. The absence of a TURN configuration no longer disables the video button. Both participants must choose Video Chat, grant camera/microphone permission, and use HTTPS (localhost also supports browser media access).

Some mobile, corporate and restrictive networks cannot establish a direct connection. For these, configure a coturn-compatible relay with REST authentication:

```dotenv
OMAGEL_TURN_URLS=turn:YOUR-RELAY:3478,turns:YOUR-RELAY:5349
OMAGEL_TURN_SECRET=YOUR_COTURN_STATIC_AUTH_SECRET
```

The relay must have `use-auth-secret` enabled and a matching `static-auth-secret`. The server returns a one-hour username and HMAC credential; the signing secret stays on the server. A TURN service that only supports static usernames/passwords is not compatible with these settings. Do not copy a provider's unrelated API key into OMAGEL_TURN_SECRET. Redeploy after changing environment variables.

The local browser tests use synthetic Chrome cameras and direct local connections. They establish that offer/answer signaling, remote playback and media controls work. A real cross-network TURN call still needs testing after relay configuration. TURN bandwidth and provider credentials are not provisioned by this change.

## Page content and indexing

The page includes a single H1, canonical URL, generated social image, WebApplication/WebPage/Breadcrumb/FAQ schema, instructions, matching limitations, rules, privacy and a non-affiliation reference to the original Omegle domain. Its current robots/noindex settings are retained from the workspace. Those settings prevent search discovery; schema alone does not make the page indexable. Private communication screens remain free of Google ads regardless of indexing settings.

## Privacy and moderation limits

The guest token lives in tab session storage. A derived ID is used for authorization and blocks. A report blocks the matched guest for that identity for up to 24 hours and ends the conversation. Clearing tab storage or using a new identity bypasses this temporary block; it is not an IP ban or a permanent identity ban. Age confirmation is a self-declaration, not verified identity. No live human moderation is provided.

Before starting from the lobby, a popup accepts an optional nickname (30 characters maximum) and gender, and explains that the matched participant will see them. Blank nicknames display as Stranger; gender defaults to Prefer not to say. These values are validated on the server, stored in the active guest record, and returned only with the matched participant's session response. Next preserves the profile; leaving and starting again lets the user edit it. These details are self-reported, not verified.

The chat URL is omitted from the sitemap and carries a noindex meta tag and X-Robots-Tag header. The requested robots.txt crawl block is also retained. A crawl block prevents Google from reading noindex, so these settings cannot guarantee removal of an already-indexed URL; use Search Console removal, or permit a recrawl to process noindex, if removal is needed. See https://developers.google.com/search/docs/crawling-indexing/block-indexing.

OmagelPromoBanner is dynamically rendered with server rendering disabled. Its visible markup is absent from the initial page HTML but appears after JavaScript loads; dismissal is remembered in session storage. Browser DOM, downloaded JavaScript and network requests remain inspectable. This is not a mechanism to hide content from crawlers or AdSense review. The same banner is served to all visitors, and the chat itself remains ad-free.

Incoming messages remain buffered until acknowledged or cleaned up. Inactive guests are cleaned up after 45 seconds when another request runs cleanup. Reports older than seven days are removed during cleanup; only the latest 1,000 are retained. The shared state key expires after seven days without activity. There is no report-review dashboard yet; reports can be inspected by the operator in the protected Redis store. Do not expose the store or tokens to users.

## Validation

```powershell
node --test audit/omagel-v2.test.cjs audit/omagel-storage.test.cjs
npm run build
npm run start -- --port 3100
# In another terminal, against localhost only:
node audit/omagel-v2-browser.cjs
```

The browser script requires the installed Windows Chrome path currently specified in it. It creates local test guests and reports, blocks external HTTP requests, and writes evidence under audit/. Use a dedicated test database/key if testing the Redis adapter. Never run the interaction test against public users.

Verified on September 8, 2026: production build and TypeScript passed; targeted ESLint passed; all 13 engine/storage/ICE checks passed; all 10 browser scenarios passed against the production server. The storage concurrency test uses a REST protocol fake, not a provisioned Redis service. Browser evidence is in `audit/omagel-v2-browser-results.json`, with text/video screenshots alongside it. The browser test confirmed both remote video streams playing, microphone/camera toggles, two-way text, typing, cancellation, Next, Leave, report blocking, guest authorization and ad isolation across navigation.

Profile/promotion follow-up: the final production build and targeted lint passed, along with 15 engine/storage/profile tests and 11 browser scenarios. Browser checks confirmed Alex/Man and Riya/Woman appear in the opposite text and video panels, and that the promotion is absent from initial HTML, visible after browser rendering, and stays dismissed after a reload. Chat noindex headers, robots restrictions and sitemap omission were also verified. Current screenshots/results replace the earlier browser evidence.

References: [Upstash REST API](https://upstash.com/docs/redis/features/restapi), [Google AdSense policies](https://support.google.com/adsense/answer/48182?hl=en).
