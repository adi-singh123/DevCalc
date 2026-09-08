# Omagel Mini deployment review

Reviewed 8 September 2026. Verdict: **not ready for public deployment**. Application source was not changed; audit scripts, screenshots, and this report were added.

## Verification performed

- `npm run build`: passed, including TypeScript and generation of 211 pages.
- `npx eslint src/app/omagel-mini src/app/api/omagel src/components/omagel-mini src/lib/omagel`: failed with 8 errors and 3 warnings (explicit `any`, synchronous state update in effect, unused imports/variable).
- `node audit/omagel-core.cjs`: eight isolated matchmaking checks, one passed and seven failed. The script reports behavioral failures as JSON; its process exit code is not a test-pass indicator.
- Production server on localhost:3100; two isolated headless Chrome contexts, text chat, queue cancellation, disconnect, fake camera/microphone video setup, rendered metadata/schema, raw HTML, sitemap and robots.
- Mobile lobby screenshot inspected at 390px width: no horizontal overflow.
- Browser evidence: `omagel-browser-results.json`; screenshots: `omagel-mobile-age.png`, `omagel-mobile-lobby.png`. External browser requests were blocked to avoid analytics/ad traffic; third-party image failures in screenshots are not established production defects.

## Deployment blockers

1. **Text and signaling delivery fail.** `OmagelClient.tsx:108` uses recipient `peer`. `matchmaking.ts:187-200` stores messages under that literal key instead of resolving the session counterpart. Browser test: sender sees its message, recipient does not. Fix routing on the server using authenticated session membership.
2. **Video setup fails.** In `OmagelClient.tsx:229-235`, `301-305`, and `344-348`, `setSessionId` is immediately followed by `setupWebRTC`. Its signal callback captures the previous session ID; initial offers can return without sending, and later chats can use an old ID. Both fake cameras showed local streams, but no remote video appeared and no offer/answer was sent during the six-second observation. Pass an explicit session ID or initialize from committed session state. Also buffer early ICE candidates and handle failed/disconnected connections. Retest using real devices and different networks after fixes.
3. **Session authorization is absent.** Signal polling trusts arbitrary client-supplied user IDs. Sending and ending sessions do not verify membership. Isolated tests confirmed non-member message injection and session termination. Authenticate guest identities, derive sender/recipient server-side, validate membership and payloads, and enforce request/inbox limits. The declared rateLimits map is unused.
4. **Report does not block the stranger.** `OmagelClient.tsx:413` sends a session ID but no reportedUserId; `matchmaking.ts:216` blocks only when reportedUserId exists. Tests rematched the same pair after reporting. Resolve the reported partner from an authenticated session. Reports currently exist only in memory, without a durable moderation workflow.
5. **State is process-local.** `matchmaking.ts:22-34` keeps queues, sessions, messages, reports and blocks on globalThis. Restarts lose state; separate serverless instances/processes cannot share it. Use shared storage and atomic matchmaking, or explicitly operate a single persistent Node process with its limitations. Default serverless deployment cannot be approved from this implementation.

## Other confirmed or source-level defects

- Cancel Queue only performs a server leave when a sessionId exists (`OmagelClient.tsx:355`). Browser test returned `queued` after cancellation.
- `endSession` marks the session ended before `sendSignal`; that function rejects ended sessions (`matchmaking.ts:167-189`). The peer received no disconnect notification.
- Rejoining resets sessionId before checking an existing match (`matchmaking.ts:72-85`), leaving a user queued while the old session remains active.
- activeUsers is never pruned/removed; online counts include departed users. Reports, blocks and inboxes also lack adequate bounded cleanup.
- Interests are stored but never compared during matching. Typing signals are received but never emitted by input handlers.
- No unmount/page-exit media/session cleanup is implemented. Incoming signals are not filtered against the current session. Network failures can produce a blank error state; non-2xx responses are generally not checked.
- Camera/microphone controls require real-device testing. TURN is optional; cross-network video reliability has not been verified.

## SEO, headings, schema and content

| Check | Result / correction |
| --- | --- |
| H1 | Exactly one H1 in server HTML: `Omagel Mini`. Consider `Omagel Mini – Random Text & Video Chat` for clarity. |
| Heading structure | Lobby skips from H1 to H3/H4 once the age dialog closes. Use H2 for major sections and H3 for subsections. This is a semantic improvement, not a claimed automatic ranking penalty. |
| Title | Rendered title is `Omagel Mini – Random Stranger Text & Video Chat \| DevCalc \| DevCalc`. Remove the page-level brand suffix because the root template adds it. |
| Canonical | Missing. Set `https://www.devcalc.in/omagel-mini`. |
| Open Graph | Title/description present, but URL uses non-www despite the site's www redirect. No og:image. |
| Twitter | Large-image card declared, but no twitter:image. Supply a relevant accessible preview image. |
| Indexability | `index, follow`; robots permits page and blocks /api/; www page URL exists in generated sitemap. Actual indexing is unverified. |
| Structured data | Two parseable JSON-LD blocks describe DevCalc Organization and DevCalc Assistant. Neither describes Omagel Mini. Add accurate WebApplication/main-entity data for the chat page and BreadcrumbList if breadcrumbs are provided. No fake ratings or unsupported feature claims. |
| Main landmark | Two nested main elements: root layout and OmagelClient. Keep a single main landmark. |
| Content | Add helpful sections explaining how to start/end a chat, text versus video, permissions, troubleshooting, privacy, reporting limitations and service ownership. There is no useful explanatory content beyond the lobby cards. |
| Claims | Replace or implement `100% Anonymous`, immediate IP blocks, interest prioritization and typing indicators. No-account access does not justify absolute anonymity or safety promises. |
| Accessibility | Age/report overlays lack dialog semantics and focus management; some controls lack accessible names and labels are not associated with inputs. |

Google requires structured data to represent visible page content and does not guarantee rich results even for valid markup: https://developers.google.com/search/docs/appearance/structured-data/sd-policies

## Original Omegle reference

There is no Omegle reference, external link, or non-affiliation statement in the page. The original site's URL is https://www.omegle.com/; it returned no readable text through the research tool during this review, so no current service-status claim is made here.

Suggested visible wording, assuming independent ownership: **“Omagel Mini is an independent random-chat project by DevCalc, inspired by Omegle. It is not affiliated with or endorsed by Omegle.”** Link the word Omegle to the original domain. Keep your own canonical URL, name and branding. Do not use Omegle as your organization's `sameAs` identity.

## Limits and next verification

This audit tested the local production build, not an deployed public environment. No live Google Rich Results Test, Search Console inspection, load test, cross-network TURN test, or real-device camera test was performed. Fix session routing, authorization, lifecycle, blocking and hosting state first; then rerun behavioral checks, add regression assertions, finish SEO/content changes, and test the intended deployment topology.
