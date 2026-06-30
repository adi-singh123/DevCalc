/**
 * src/data/interview/html.ts
 * HTML Interview Questions (Difficult Set)
 */

import { InterviewQuestion } from '@/src/types/interview';

export const htmlQuestions: InterviewQuestion[] = [
  // ===================== BEGINNER =====================
  {
    id: 'html-001',
    topic: 'html',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which element is used to define the character encoding of an HTML document?',
    options: [
      '<encoding charset="UTF-8">',
      '<charset>UTF-8</charset>',
      '<meta charset="UTF-8">',
      '<head encoding="UTF-8">'
    ],
    correctAnswer: '<meta charset="UTF-8">',
    explanation: 'The meta charset tag, placed early in the head, tells the browser how to decode the byte stream of the document into characters.',
    tags: ['meta', 'encoding', 'fundamentals']
  },
  {
    id: 'html-002',
    topic: 'html',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the semantic difference between <em> and <i>?',
    options: [
      '<em> indicates emphasized stress meaning conveyed to assistive tech; <i> indicates an alternate voice/tone with no implied importance',
      '<i> is deprecated and must never be used',
      'There is no difference; both are purely visual',
      '<em> can only wrap block-level content'
    ],
    correctAnswer: '<em> indicates emphasized stress meaning conveyed to assistive tech; <i> indicates an alternate voice/tone with no implied importance',
    explanation: 'Both render italic by default, but <em> carries semantic stress emphasis announced by screen readers, while <i> is for stylistically offset text like a technical term or thought, without implying importance.',
    tags: ['semantics', 'text-elements']
  },
  {
    id: 'html-003',
    topic: 'html',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does the "alt" attribute on an <img> do when the image fails to load?',
    options: [
      'It triggers a retry of the image request',
      'It applies a CSS fallback class',
      'It provides alternative text shown in place of the image and read by screen readers',
      'It defines an alternate image source URL'
    ],
    correctAnswer: 'It provides alternative text shown in place of the image and read by screen readers',
    explanation: 'The alt attribute is mandatory for accessibility, describing the image content or function when it cannot be rendered or perceived visually.',
    tags: ['accessibility', 'images']
  },
  {
    id: 'html-004',
    topic: 'html',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which doctype declaration is correct for HTML5?',
    options: [
      '<!DOCTYPE html5>',
      '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN">',
      '<!DOCTYPE html>',
      '<DOCTYPE html>'
    ],
    correctAnswer: '<!DOCTYPE html>',
    explanation: 'HTML5 simplified the doctype to a minimal, case-insensitive declaration that triggers standards mode rendering across browsers.',
    tags: ['doctype', 'fundamentals']
  },
  {
    id: 'html-005',
    topic: 'html',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'What is wrong with this markup?\n\n<ul>\n  <div><li>Item 1</li></div>\n  <li>Item 2</li>\n</ul>',
    options: [
      'Nothing; div can wrap li freely',
      'ul cannot contain more than one li',
      'A div is not valid content inside ul; only li (and certain script-supporting elements) are permitted as direct children',
      'li must always be self-closing'
    ],
    correctAnswer: 'A div is not valid content inside ul; only li (and certain script-supporting elements) are permitted as direct children',
    explanation: 'The content model of ul/ol restricts direct children to li elements (plus script/template tags); wrapping li in a div violates the spec and causes browsers to auto-correct the DOM unpredictably.',
    tags: ['content-model', 'lists', 'validation']
  },
  {
    id: 'html-006',
    topic: 'html',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which attribute makes a form field mandatory before submission, without JavaScript?',
    options: [
      'mandatory',
      'validate',
      'required',
      'must-fill'
    ],
    correctAnswer: 'required',
    explanation: 'The required boolean attribute triggers native HTML5 constraint validation, blocking submission and showing a browser-generated message until the field is filled.',
    tags: ['forms', 'validation']
  },
  {
    id: 'html-007',
    topic: 'html',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does the "defer" attribute do on a <script> tag?',
    options: [
      'It prevents the script from ever executing',
      'It downloads the script in parallel without blocking parsing, then executes it after parsing completes, preserving document order',
      'It executes the script immediately, blocking the parser',
      'It loads the script only on user interaction'
    ],
    correctAnswer: 'It downloads the script in parallel without blocking parsing, then executes it after parsing completes, preserving document order',
    explanation: 'defer scripts are fetched asynchronously but run in order right before DOMContentLoaded, unlike async scripts which execute as soon as they finish downloading, potentially out of order.',
    tags: ['script', 'performance', 'parsing']
  },
  {
    id: 'html-008',
    topic: 'html',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which input type restricts entry to a value within a numeric range using min/max/step?',
    options: [
      'range or number',
      'select',
      'numeric',
      'text'
    ],
    correctAnswer: 'range or number',
    explanation: 'Both <input type="number"> and <input type="range"> support min, max, and step attributes for constraining numeric values, differing mainly in their visual control.',
    tags: ['forms', 'input-types']
  },
  {
    id: 'html-009',
    topic: 'html',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the purpose of the <label> element\'s "for" attribute?',
    options: [
      'It sets a CSS selector target',
      'It associates the label with a form control sharing the same id, improving click targets and accessibility',
      'It defines a tooltip',
      'It links to an external stylesheet'
    ],
    correctAnswer: 'It associates the label with a form control sharing the same id, improving click targets and accessibility',
    explanation: 'A correctly associated label expands the clickable/tappable area to the label text and is announced by screen readers when the control receives focus.',
    tags: ['forms', 'accessibility', 'label']
  },
  {
    id: 'html-010',
    topic: 'html',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which element represents a thematic break between paragraph-level content?',
    options: [
      '<break>',
      '<hr>',
      '<section>',
      '<divider>'
    ],
    correctAnswer: '<hr>',
    explanation: 'The hr element semantically marks a thematic shift, such as a scene change in a story, not merely a visual horizontal line.',
    tags: ['semantics', 'structure']
  },

  // ===================== INTERMEDIATE =====================
  {
    id: 'html-011',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What distinguishes <section> from <div> semantically?',
    options: [
      'div cannot contain headings',
      'section requires an id attribute while div does not',
      'section represents a thematic grouping of content, typically with a heading, contributing to the outline; div is a generic, non-semantic container',
      'There is no semantic distinction; they are interchangeable'
    ],
    correctAnswer: 'section represents a thematic grouping of content, typically with a heading, contributing to the outline; div is a generic, non-semantic container',
    explanation: 'Using section purely for styling when no thematic grouping with a heading exists is a misuse; div remains correct when no inherent meaning needs to be conveyed.',
    tags: ['semantics', 'sectioning']
  },
  {
    id: 'html-012',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'When should you add an explicit ARIA role to a native HTML element like <button>?',
    options: [
      'Always, to be explicit about behavior',
      'Never, since native semantics already expose the correct role, and redundant roles can confuse assistive tech',
      'Only when the button has an onclick handler',
      'Only in legacy browsers that predate ARIA support'
    ],
    correctAnswer: 'Never, since native semantics already expose the correct role, and redundant roles can confuse assistive tech',
    explanation: 'The first rule of ARIA use is to prefer native elements with built-in semantics; adding role="button" to an actual <button> is redundant and can mask native keyboard/focus behavior if misapplied.',
    tags: ['accessibility', 'aria']
  },
  {
    id: 'html-013',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'Why might <img src="cat.jpg" loading="lazy"> fail to defer loading as expected if placed inside an element with display:none initially toggled visible via JS?',
    options: [
      'Lazy loading only respects scroll position, not display state, and may load immediately or behave inconsistently across browsers when the element starts hidden',
      'loading="lazy" never works inside any container',
      'lazy loading requires a width and height attribute or it is ignored entirely',
      'The src attribute order matters for lazy loading'
    ],
    correctAnswer: 'Lazy loading only respects scroll position, not display state, and may load immediately or behave inconsistently across browsers when the element starts hidden',
    explanation: 'Native lazy loading heuristics are based on viewport proximity; hidden elements (display:none) can confuse the heuristic since the browser cannot reliably measure intersection, leading to inconsistent eager or delayed loading across implementations.',
    tags: ['images', 'performance', 'lazy-loading', 'gotchas']
  },
  {
    id: 'html-014',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the effect of the "sandbox" attribute on an <iframe>?',
    options: [
      'It hides the iframe from screen readers',
      'It applies a CSS isolation boundary only',
      'It restricts the embedded document\u2019s capabilities (scripts, forms, top navigation, popups) unless explicitly re-enabled via token values',
      'It forces the iframe to load over HTTPS only'
    ],
    correctAnswer: 'It restricts the embedded document\u2019s capabilities (scripts, forms, top navigation, popups) unless explicitly re-enabled via token values',
    explanation: 'An empty sandbox attribute applies maximum restrictions; specific tokens like allow-scripts or allow-same-origin selectively re-grant capabilities, making it a key tool for safely embedding untrusted content.',
    tags: ['iframe', 'security', 'sandbox']
  },
  {
    id: 'html-015',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What value does FormData send for an <input type="file" multiple> with no files selected, when the form is submitted?',
    options: [
      'An empty string',
      'null',
      'The field is omitted entirely from FormData',
      'A File object with an empty name and zero size is still sent'
    ],
    correctAnswer: 'A File object with an empty name and zero size is still sent',
    explanation: 'An empty file input still produces a single File entry with an empty filename and zero size when included in FormData/form submission, rather than being omitted, which can surprise server-side handlers expecting absence.',
    tags: ['forms', 'file-input', 'gotchas']
  },
  {
    id: 'html-016',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the <picture> element combined with multiple <source> tags?',
    options: [
      'To preload images before they are needed',
      'To provide art-directed or format-based alternative images selected by the browser based on media conditions or supported formats',
      'To create an image carousel without JavaScript',
      'To lazy load images automatically by default'
    ],
    correctAnswer: 'To provide art-directed or format-based alternative images selected by the browser based on media conditions or supported formats',
    explanation: 'picture lets you serve different image crops/sizes per breakpoint (art direction) or offer modern formats like AVIF/WebP with fallbacks, with the browser picking the first matching, supported source.',
    tags: ['responsive-images', 'picture']
  },
  {
    id: 'html-017',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How does the srcset/sizes pair on an <img> differ in responsibility from media queries on a <picture><source>?',
    options: [
      'srcset/sizes describe candidate resolutions and the browser picks based on layout width and density; picture/source media performs explicit art-direction switching controlled by the author',
      'They are functionally identical in all cases',
      'srcset cannot be combined with sizes',
      'media queries on source only affect CSS, never image selection'
    ],
    correctAnswer: 'srcset/sizes describe candidate resolutions and the browser picks based on layout width and density; picture/source media performs explicit art-direction switching controlled by the author',
    explanation: 'srcset/sizes is a hint system letting the browser choose the best-fitting resource for density/viewport, optimized for the same image at different resolutions, while picture/source enables deliberate swapping of entirely different crops or formats based on conditions.',
    tags: ['responsive-images', 'srcset', 'picture']
  },
  {
    id: 'html-018',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'Why is using a positive tabindex value (e.g., tabindex="5") generally discouraged?',
    options: [
      'Positive values are ignored by all browsers',
      'It is only invalid on form elements',
      'It overrides the natural DOM-order tab sequence, creating a confusing, hard-to-maintain focus order that fights the visual layout',
      'It disables keyboard focus entirely'
    ],
    correctAnswer: 'It overrides the natural DOM-order tab sequence, creating a confusing, hard-to-maintain focus order that fights the visual layout',
    explanation: 'Positive tabindex values pull elements out of natural document order into a separate numeric priority queue, which is fragile to maintain and often produces an illogical focus order; tabindex="0" or "-1" are the recommended values for managing focus.',
    tags: ['accessibility', 'tabindex', 'focus']
  },
  {
    id: 'html-019',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the "rel=noopener" attribute on a link with target="_blank" protect against?',
    options: [
      'Slow page load times',
      'The new tab gaining access to window.opener and being able to navigate the original tab to a malicious URL (reverse tabnabbing)',
      'Cross-site scripting in the link text itself',
      'Cookies being shared between tabs'
    ],
    correctAnswer: 'The new tab gaining access to window.opener and being able to navigate the original tab to a malicious URL (reverse tabnabbing)',
    explanation: 'Without noopener, a page opened via target="_blank" can use window.opener to redirect the original tab, a phishing technique called reverse tabnabbing; modern browsers now apply noopener-like behavior by default for target="_blank", but explicit use remains good practice.',
    tags: ['security', 'links', 'tabnabbing']
  },
  {
    id: 'html-020',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between the <article> and <aside> elements?',
    options: [
      'aside can only appear inside the body, never inside article',
      'article represents self-contained, independently distributable content; aside represents content tangentially related to the surrounding content, like a sidebar',
      'article must always contain a single paragraph',
      'They are functionally identical, differing only in default CSS display'
    ],
    correctAnswer: 'article represents self-contained, independently distributable content; aside represents content tangentially related to the surrounding content, like a sidebar',
    explanation: 'article content should make sense if syndicated independently (a blog post, forum comment), while aside marks supplementary content such as pull quotes, ads, or related links not essential to the main flow.',
    tags: ['semantics', 'sectioning']
  },

  // ===================== ADVANCED =====================
  {
    id: 'html-021',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'How does the browser preload scanner interact with document.write() inserted scripts, and why is this problematic for performance?',
    options: [
      'document.write() scripts are always discovered first by the preload scanner',
      'The preload scanner cannot speculatively discover resources referenced only via document.write(), since it operates on the raw HTML stream, delaying their discovery until the main parser executes the script synchronously',
      'document.write() is processed entirely off the main thread',
      'There is no interaction; preload scanning is unaffected by document.write()'
    ],
    correctAnswer: 'The preload scanner cannot speculatively discover resources referenced only via document.write(), since it operates on the raw HTML stream, delaying their discovery until the main parser executes the script synchronously',
    explanation: 'The speculative preload scanner parses raw markup ahead of the main parser to start fetching resources early; resources injected dynamically via document.write() are invisible to it until the blocking script actually executes, which is one reason Chrome intervenes against document.write() on slow connections.',
    tags: ['performance', 'preload-scanner', 'document.write']
  },
  {
    id: 'html-022',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the practical consequence of the HTML parser\'s "tree construction" error-recovery rules for malformed markup like <p><div>text</div></p>?',
    options: [
      'The page fails to render entirely',
      'The browser throws a fatal parsing exception',
      'It is silently ignored with no DOM created',
      'The parser implicitly closes the <p> before the <div> because div is not permitted as flow content inside a p, resulting in adjacent sibling elements rather than the nested structure authored'
    ],
    correctAnswer: 'The parser implicitly closes the <p> before the <div> because div is not permitted as flow content inside a p, resulting in adjacent sibling elements rather than the nested structure authored',
    explanation: 'HTML\u2019s forgiving parsing algorithm defines exact error-recovery steps; since p\u2019s content model excludes block-level elements like div, the parser auto-closes the p tag, producing a DOM that differs from the visually nested source, which can break CSS/JS assumptions.',
    tags: ['parsing', 'dom', 'gotchas']
  },
  {
    id: 'html-023',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Why can overuse of aria-live="assertive" regions degrade the experience for screen reader users on a frequently-updating dashboard?',
    options: [
      'assertive announcements interrupt whatever the screen reader is currently speaking immediately, so frequent updates create a barrage of interruptions, drowning out important content; polite is usually preferable for non-critical updates',
      'aria-live="assertive" is not supported by any modern screen reader',
      'It causes the DOM region to become unfocusable',
      'It has no effect unless combined with role="alert"'
    ],
    correctAnswer: 'assertive announcements interrupt whatever the screen reader is currently speaking immediately, so frequent updates create a barrage of interruptions, drowning out important content; polite is usually preferable for non-critical updates',
    explanation: 'aria-live="assertive" (and role="alert") should be reserved for urgent, time-critical information; high-frequency or non-essential updates should use aria-live="polite" so announcements queue after the current speech finishes rather than constantly interrupting.',
    tags: ['accessibility', 'aria-live', 'screen-readers']
  },
  {
    id: 'html-024',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What subtle issue can arise from nesting interactive elements, such as placing a <button> inside an <a> tag?',
    options: [
      'CSS styling becomes impossible',
      'It is invalid content per the HTML spec (interactive content cannot nest), and browsers apply inconsistent error-recovery, often producing unpredictable, inaccessible focus and click behavior',
      'It causes a JavaScript runtime exception',
      'The button silently becomes non-interactive but otherwise renders fine'
    ],
    correctAnswer: 'It is invalid content per the HTML spec (interactive content cannot nest), and browsers apply inconsistent error-recovery, often producing unpredictable, inaccessible focus and click behavior',
    explanation: 'The spec forbids nesting interactive content (a, button, select, etc.) inside one another; different browsers recover differently from this malformed markup, leading to unreliable focus order, double-activation issues, and confusing behavior for assistive technology users.',
    tags: ['content-model', 'accessibility', 'interactive-content']
  },
  {
    id: 'html-025',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'How does the "fetchpriority" attribute on <img> or <link rel="preload"> influence the browser\'s resource loading behavior?',
    options: [
      'It is purely advisory CSS metadata with no loading effect',
      'It only affects caching headers, not load order',
      'It hints the browser\u2019s resource scheduler to prioritize (high) or deprioritize (low) a fetch relative to other discovered resources, useful for elevating an LCP image above default heuristic priority',
      'It forces synchronous, blocking loading of the resource'
    ],
    correctAnswer: 'It hints the browser\u2019s resource scheduler to prioritize (high) or deprioritize (low) a fetch relative to other discovered resources, useful for elevating an LCP image above default heuristic priority',
    explanation: 'fetchpriority="high" can be used on a hero/LCP image to signal it should be fetched ahead of other same-type resources the browser\u2019s heuristics might otherwise prioritize lower, directly impacting metrics like Largest Contentful Paint.',
    tags: ['performance', 'fetchpriority', 'lcp']
  },
  {
    id: 'html-026',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between the "defer", "async", and module (type="module") script loading behaviors regarding execution order?',
    options: [
      'async preserves order, defer does not, modules behave like async always',
      'All three execute scripts in document order identically',
      'defer scripts execute in document order after parsing; async scripts execute as soon as downloaded, in arbitrary order relative to each other; module scripts are deferred by default and also execute in document order',
      'module scripts always block parsing synchronously like classic scripts without defer'
    ],
    correctAnswer: 'defer scripts execute in document order after parsing; async scripts execute as soon as downloaded, in arbitrary order relative to each other; module scripts are deferred by default and also execute in document order',
    explanation: 'Classic defer scripts queue and run in source order right before DOMContentLoaded; async scripts run immediately upon download completion regardless of order among themselves; ES module scripts (type="module") are deferred by default, preserving relative order similar to defer unless explicitly marked async.',
    tags: ['script', 'modules', 'loading-order']
  },
  {
    id: 'html-027',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Security',
    question: 'How does a strict Content-Security-Policy combined with a nonce on <script> tags help mitigate XSS, and what HTML-level requirement does it impose?',
    options: [
      'It blocks all scripts from executing regardless of source, breaking the page',
      'Each legitimate <script> tag must carry a server-generated, per-response nonce attribute matching the one declared in the CSP header, so injected scripts lacking the correct nonce are blocked from executing',
      'It only affects external stylesheets, not scripts',
      'Nonces are generated client-side via JavaScript and embedded automatically'
    ],
    correctAnswer: 'Each legitimate <script> tag must carry a server-generated, per-response nonce attribute matching the one declared in the CSP header, so injected scripts lacking the correct nonce are blocked from executing',
    explanation: 'A nonce-based CSP requires the server to generate a fresh, unpredictable token per response and apply it identically to the CSP header and every trusted inline/external script tag; an attacker injecting markup cannot guess the nonce, so their script is blocked even if injection succeeds.',
    tags: ['security', 'csp', 'xss']
  },
  {
    id: 'html-028',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Why might using <table> for layout purposes (instead of CSS Grid/Flexbox) still cause real-world problems despite "working visually"?',
    options: [
      'Tables cannot be styled with CSS at all',
      'It conveys incorrect tabular semantics to assistive technology, confuses screen reader navigation (row/column announcements), and couples layout structure to markup, hurting responsiveness and maintainability',
      'Tables are removed entirely in HTML5',
      'Tables always render slower than div-based layouts in every browser'
    ],
    correctAnswer: 'It conveys incorrect tabular semantics to assistive technology, confuses screen reader navigation (row/column announcements), and couples layout structure to markup, hurting responsiveness and maintainability',
    explanation: 'Layout tables remain technically functional but misrepresent the content\u2019s meaning to screen readers (which announce row/column context), and rigidly tie visual structure to markup order, making responsive redesigns and accessible navigation significantly harder than with CSS-based layout.',
    tags: ['accessibility', 'semantics', 'layout-tables']
  },
  {
    id: 'html-029',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'What is the rendering/accessibility consequence of using <div role="button" tabindex="0"> instead of a native <button> for a clickable control?',
    options: [
      'No difference whatsoever once tabindex is added',
      'The div automatically gains keyboard activation (Enter/Space) and form participation just like a real button',
      'role="button" is purely cosmetic and changes nothing for assistive tech',
      'You must manually implement keyboard event handlers for Enter/Space activation, manage focus styles, and it still won\u2019t participate in form submission the way a native button does'
    ],
    correctAnswer: 'You must manually implement keyboard event handlers for Enter/Space activation, manage focus styles, and it still won\u2019t participate in form submission the way a native button does',
    explanation: 'ARIA roles only convey semantics to the accessibility tree; they do not grant native browser behaviors like keyboard activation, default focus outline, or form submission, all of which must be manually reimplemented, making native elements strongly preferable when available.',
    tags: ['accessibility', 'aria', 'custom-controls']
  },
  {
    id: 'html-030',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is "Flash of Unstyled Content" (FOUC) related to render-blocking, and how do render-blocking stylesheets prevent it by default?',
    options: [
      'It refers to videos failing to autoplay',
      'Browsers intentionally block rendering of the page until external stylesheets in the head finish loading and are applied, preventing a flash of unstyled markup, at the cost of delaying first paint',
      'FOUC only occurs with inline styles, never external stylesheets',
      'It is caused exclusively by web font loading, unrelated to CSS files'
    ],
    correctAnswer: 'Browsers intentionally block rendering of the page until external stylesheets in the head finish loading and are applied, preventing a flash of unstyled markup, at the cost of delaying first paint',
    explanation: 'CSS is render-blocking by default specifically to avoid the jarring flash of unstyled content as styles arrive piecemeal; this is a deliberate trade-off, and techniques like critical CSS inlining are used to balance fast first paint against this protection.',
    tags: ['performance', 'css', 'render-blocking', 'fouc']
  },

  // ===================== MNC (FAANG / High-Bar) =====================
  {
    id: 'html-031',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'You need to optimize Largest Contentful Paint for a hero image that is the LCP element across most page loads. Which combination of HTML-level techniques is most effective?',
    options: [
      'Wrap the image in a div with display:none until JS toggles it visible',
      'Apply loading="lazy" to ensure it doesn\u2019t compete with other resources',
      'Convert the image to an inline base64 SVG regardless of size to avoid a network request',
      'Preload the image via <link rel="preload" as="image">, set fetchpriority="high", avoid loading="lazy" on it, and ensure correct width/height to prevent layout shift'
    ],
    correctAnswer: 'Preload the image via <link rel="preload" as="image">, set fetchpriority="high", avoid loading="lazy" on it, and ensure correct width/height to prevent layout shift',
    explanation: 'Since the LCP element is critical above-the-fold content, it should be discovered and prioritized as early as possible (preload + fetchpriority), never lazy-loaded (which actively delays it), and given explicit dimensions to avoid contributing to layout shift while loading.',
    tags: ['performance', 'lcp', 'web-vitals']
  },
  {
    id: 'html-032',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'How would you design a fully accessible custom autocomplete combobox using HTML/ARIA, beyond just adding role="combobox"?',
    options: [
      'Apply role="combobox" to a div and rely on visual styling alone for the rest',
      'Use a native <select> always, since custom comboboxes cannot be made accessible',
      'Coordinate role="combobox" on the input with aria-expanded, aria-controls pointing to a listbox, aria-activedescendant tracking the highlighted option, role="option" on each suggestion, and full keyboard support (arrow keys, Enter, Escape)',
      'Use only aria-label on the input and skip listbox semantics entirely'
    ],
    correctAnswer: 'Coordinate role="combobox" on the input with aria-expanded, aria-controls pointing to a listbox, aria-activedescendant tracking the highlighted option, role="option" on each suggestion, and full keyboard support (arrow keys, Enter, Escape)',
    explanation: 'The WAI-ARIA combobox pattern requires a precise set of coordinated roles and states (aria-expanded, aria-controls, aria-activedescendant, role="listbox"/"option") plus full keyboard interaction parity with native controls; any single missing piece breaks the experience for screen reader and keyboard-only users.',
    tags: ['accessibility', 'aria', 'combobox', 'design-system']
  },
  {
    id: 'html-033',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you prevent Cumulative Layout Shift caused by web fonts swapping in after initial render (FOIT/FOUT) at the HTML/resource-hint level?',
    options: [
      'Disable custom fonts entirely',
      'Load fonts only after window.onload to avoid any blocking',
      'Use <link rel="preload" as="font" crossorigin> for critical fonts, pair with font-display strategies, and use size-adjust/fallback font matching to minimize the reflow when the web font swaps in',
      'Always use font-display: auto for every web font'
    ],
    correctAnswer: 'Use <link rel="preload" as="font" crossorigin> for critical fonts, pair with font-display strategies, and use size-adjust/fallback font matching to minimize the reflow when the web font swaps in',
    explanation: 'Preloading critical fonts shortens the time to swap, while size-adjust and metric-matched fallback fonts minimize the visual jump (and thus CLS) when the real font replaces the fallback, since font swaps changing line height/character width are a common unaddressed CLS source.',
    tags: ['performance', 'cls', 'fonts', 'web-vitals']
  },
  {
    id: 'html-034',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'A page embeds third-party widgets via <iframe> from multiple untrusted vendors. What HTML-level isolation strategy best limits the blast radius of a compromised vendor script?',
    options: [
      'Trust all vendors equally and grant full permissions for simplicity',
      'Disable iframes entirely and embed vendor code as inline scripts instead',
      'Apply per-iframe sandbox attributes with the minimal required tokens, scope the Permissions-Policy/allow attribute to only needed capabilities, and avoid allow-same-origin unless strictly necessary',
      'Use a single shared sandboxed iframe for all vendors to reduce overhead'
    ],
    correctAnswer: 'Apply per-iframe sandbox attributes with the minimal required tokens, scope the Permissions-Policy/allow attribute to only needed capabilities, and avoid allow-same-origin unless strictly necessary',
    explanation: 'Defense-in-depth for third-party embeds means giving each iframe only the minimal sandbox tokens and feature permissions it needs; combining allow-scripts with allow-same-origin can actually let a sandboxed frame remove its own sandbox restrictions via script, so that combination should be avoided unless required and trusted.',
    tags: ['security', 'iframe', 'sandbox', 'third-party']
  },
  {
    id: 'html-035',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you architect HTML delivery for a large e-commerce site to balance SEO crawlability, fast first paint, and interactivity, across a mix of static and dynamic content?',
    options: [
      'Render everything client-side from a near-empty HTML shell for all pages',
      'Serve fully static pre-rendered HTML for every page including real-time inventory and pricing',
      'Use server-side rendering or static generation for crawlable, mostly-stable content (product descriptions), stream/hydrate dynamic elements (price, stock) progressively, and apply resource hints to prioritize critical above-the-fold HTML',
      'Avoid SSR entirely and rely solely on a sitemap.xml for SEO'
    ],
    correctAnswer: 'Use server-side rendering or static generation for crawlable, mostly-stable content (product descriptions), stream/hydrate dynamic elements (price, stock) progressively, and apply resource hints to prioritize critical above-the-fold HTML',
    explanation: 'A hybrid rendering strategy serves meaningful, indexable HTML immediately for crawlers and fast paint, while progressively enhancing/streaming volatile data (inventory, personalized pricing) without blocking the initial response, balancing SEO, performance, and freshness.',
    tags: ['system-design', 'ssr', 'seo', 'performance']
  },
  {
    id: 'html-036',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'What subtle bug exists in this markup for a modal dialog, from an accessibility and focus-management perspective?\n\n<div class="modal" role="dialog">\n  <h2>Confirm</h2>\n  <p>Are you sure?</p>\n  <button>Yes</button>\n  <button>No</button>\n</div>',
    options: [
      'Nothing is wrong; role="dialog" alone is sufficient',
      'button elements cannot appear inside a div with role="dialog"',
      'h2 cannot be used inside dialogs',
      'It is missing aria-modal="true" and aria-labelledby pointing to the heading, and there is no indication of programmatic focus management (trapping focus inside, restoring it on close)'
    ],
    correctAnswer: 'It is missing aria-modal="true" and aria-labelledby pointing to the heading, and there is no indication of programmatic focus management (trapping focus inside, restoring it on close)',
    explanation: 'A proper accessible dialog needs aria-modal to signal it blocks interaction with background content, aria-labelledby/aria-describedby to give it an accessible name/description, and JavaScript-managed focus trapping plus focus restoration to the triggering element on close, none of which static role="dialog" markup alone provides.',
    tags: ['accessibility', 'modal', 'focus-management', 'aria']
  },
  {
    id: 'html-037',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How does using <link rel="modulepreload"> differ from <link rel="preload" as="script"> for an ES module entry point, and why does it matter at scale?',
    options: [
      'They are functionally identical in every respect',
      'modulepreload only works in Firefox',
      'modulepreload causes the module and its static dependency graph to be fetched, parsed, and compiled ahead of execution as a module, whereas preload as="script" only fetches the raw bytes without module-specific processing or recursive dependency discovery',
      'preload as="script" automatically discovers and preloads all nested imports while modulepreload does not'
    ],
    correctAnswer: 'modulepreload causes the module and its static dependency graph to be fetched, parsed, and compiled ahead of execution as a module, whereas preload as="script" only fetches the raw bytes without module-specific processing or recursive dependency discovery',
    explanation: 'modulepreload is module-aware: the browser can begin fetching imported dependencies of the preloaded module ahead of time and compile it in the module graph context, providing a more accurate performance win for module-based bundles than a generic preload hint.',
    tags: ['performance', 'modulepreload', 'modules']
  },
  {
    id: 'html-038',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'In a complex data table with merged header cells spanning multiple columns, what HTML technique correctly associates each data cell with all of its relevant headers for screen reader users?',
    options: [
      'Rely solely on visual column position; no markup is needed',
      'Add a title attribute to each cell describing its header',
      'Use scope="colgroup"/"rowgroup" exclusively in every case',
      'Use id attributes on each <th> and reference them via a space-separated list in the headers attribute of each <td>, since scope alone cannot express many-to-many header relationships'
    ],
    correctAnswer: 'Use id attributes on each <th> and reference them via a space-separated list in the headers attribute of each <td>, since scope alone cannot express many-to-many header relationships',
    explanation: 'scope works well for simple row/column header structures, but complex tables with multi-level or merged headers require the headers/id association mechanism to explicitly and unambiguously list every applicable header for a given data cell, which screen readers then announce in context.',
    tags: ['accessibility', 'tables', 'headers-id']
  },
  {
    id: 'html-039',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'Why is setting innerHTML from untrusted user-generated content dangerous even when the strings are concatenated server-side using a templating engine, unless that engine auto-escapes by default?',
    options: [
      'It is never dangerous if HTTPS is used',
      'It is dangerous only if the content is over 1000 characters',
      'Any templating engine without automatic context-aware escaping will pass through raw HTML/script tags from user input verbatim, enabling stored or reflected XSS regardless of server-side rendering',
      'Server-side rendering inherently sanitizes all output automatically'
    ],
    correctAnswer: 'Any templating engine without automatic context-aware escaping will pass through raw HTML/script tags from user input verbatim, enabling stored or reflected XSS regardless of server-side rendering',
    explanation: 'The danger of XSS is about whether untrusted data is escaped appropriately for the context it\u2019s inserted into (HTML body, attribute, script, URL); server-side rendering alone provides no protection unless the templating layer specifically performs context-aware auto-escaping or the developer manually sanitizes input.',
    tags: ['security', 'xss', 'templating']
  },
  {
    id: 'html-040',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design HTML/resource-hint strategy for a global CDN-served site to minimize connection setup latency to third-party origins (analytics, fonts, ads) without over-fetching unused resources?',
    options: [
      'Avoid resource hints entirely to keep markup simple',
      'Use dns-prefetch and preconnect selectively for origins known to be used imminently/critically, reserving full preload for resources certain to be needed, since preconnecting to unused origins wastes connection setup resources',
      'Always preconnect to every third-party domain referenced anywhere in the codebase',
      'Use prefetch for all third-party origins regardless of priority'
    ],
    correctAnswer: 'Use dns-prefetch and preconnect selectively for origins known to be used imminently/critically, reserving full preload for resources certain to be needed, since preconnecting to unused origins wastes connection setup resources',
    explanation: 'Each preconnect opens and holds a TCP/TLS connection, which costs CPU/memory and can actually delay more important connections if overused; the recommended approach is to preconnect only to a small number of critical, certain-to-be-used origins and use the lighter-weight dns-prefetch for lower-priority third parties.',
    tags: ['performance', 'resource-hints', 'preconnect', 'system-design']
  },
  {
    id: 'html-041',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'What is the consequence of placing <link rel="stylesheet"> tags after render-critical <script> tags that query the DOM for computed styles, in terms of execution timing guarantees?',
    options: [
      'The script is guaranteed to see fully applied styles regardless of position',
      'A synchronous, non-deferred script running before the stylesheet has loaded may read stale or default computed styles, since CSSOM construction and script execution order interact: scripts are blocked by preceding pending stylesheets, but not by ones declared after them',
      'Stylesheets always load before any script regardless of document order',
      'This ordering has no effect on JavaScript execution under any circumstance'
    ],
    correctAnswer: 'A synchronous, non-deferred script running before the stylesheet has loaded may read stale or default computed styles, since CSSOM construction and script execution order interact: scripts are blocked by preceding pending stylesheets, but not by ones declared after them',
    explanation: 'Browsers block script execution on any stylesheet that appears earlier in the document to ensure consistent CSSOM state at execution time, but a script preceding a stylesheet has no such guarantee, so getComputedStyle() calls in such a script may read unstyled/default values, a common source of layout-dependent JS bugs.',
    tags: ['parsing', 'cssom', 'script', 'gotchas']
  },
  {
    id: 'html-042',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'How should you mark up a multi-step form wizard (steps 1-4) so that screen reader users understand current progress and can navigate between completed steps?',
    options: [
      'Show only the current step\u2019s markup with no indication of overall progress',
      'Rely entirely on color-coded step indicators with no text alternative',
      'Disable navigation to previous steps entirely to simplify markup',
      'Use a list (ol/ul) of steps with aria-current="step" on the active item, accessible names indicating completion state (e.g., "Step 2 of 4, completed"), and ensure each step\u2019s heading establishes context when focus moves there'
    ],
    correctAnswer: 'Use a list (ol/ul) of steps with aria-current="step" on the active item, accessible names indicating completion state (e.g., "Step 2 of 4, completed"), and ensure each step\u2019s heading establishes context when focus moves there',
    explanation: 'aria-current="step" is purpose-built for sequential process indicators, communicating which step is active; combined with descriptive accessible names conveying completion status and clear headings per step, screen reader users get equivalent situational awareness to sighted users viewing a visual progress bar.',
    tags: ['accessibility', 'forms', 'aria-current', 'wizard']
  },
  {
    id: 'html-043',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'Why can excessive use of the "contenteditable" attribute on large DOM subtrees cause severe performance degradation in rich text editors?',
    options: [
      'contenteditable has no performance implications regardless of scope',
      'Browsers must continuously track selection, run native spellcheck/composition logic, and recompute layout/reflow across the entire editable region on every keystroke, which scales poorly with large or deeply nested editable subtrees',
      'contenteditable disables the browser\u2019s rendering engine entirely',
      'It only affects memory usage, never rendering performance'
    ],
    correctAnswer: 'Browsers must continuously track selection, run native spellcheck/composition logic, and recompute layout/reflow across the entire editable region on every keystroke, which scales poorly with large or deeply nested editable subtrees',
    explanation: 'Large contenteditable regions force the browser to maintain complex internal state (selection ranges, undo history, IME composition, spellcheck) across potentially huge DOM trees, and naive implementations trigger expensive reflows on every input event, which is why production rich-text editors carefully scope and virtualize editable regions.',
    tags: ['performance', 'contenteditable', 'rich-text-editing']
  },
  {
    id: 'html-044',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'How does the Shadow DOM\'s style encapsulation interact with global accessibility tooling that inspects ARIA attributes and computed roles across a page?',
    options: [
      'Shadow DOM completely hides all content from assistive technology by design',
      'Accessibility trees are still constructed by piercing through shadow boundaries (the flattened tree), so ARIA relationships referencing IDs across shadow boundaries (e.g., aria-labelledby pointing into another root) generally fail to resolve, since ID references do not cross shadow tree boundaries',
      'ARIA attributes are automatically duplicated across every shadow boundary',
      'Shadow DOM has no impact whatsoever on assistive technology behavior'
    ],
    correctAnswer: 'Accessibility trees are still constructed by piercing through shadow boundaries (the flattened tree), so ARIA relationships referencing IDs across shadow boundaries (e.g., aria-labelledby pointing into another root) generally fail to resolve, since ID references do not cross shadow tree boundaries',
    explanation: 'While the accessibility tree generally reflects the flattened (composed) DOM tree including shadow content, ID-reference-based ARIA attributes like aria-labelledby or aria-describedby cannot resolve targets in a different shadow root, a well-known limitation that web component authors must design around (e.g., using slotted light-DOM labels).',
    tags: ['accessibility', 'shadow-dom', 'web-components', 'aria']
  },
  {
    id: 'html-045',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design the HTML/markup strategy for an infinite-scroll feed (e.g., social media) to remain accessible, SEO-crawlable, and performant simultaneously?',
    options: [
      'Render only the currently visible items in the DOM and discard all others without any history/URL state',
      'Render the entire feed client-side with no server-rendered initial items at all',
      'Server-render an initial batch of items as real HTML for first paint and crawlability, virtualize/recycle off-screen DOM nodes for performance while preserving accessible focus order, and provide a non-JS paginated fallback (or rel="next" links) for crawlers and assistive tech',
      'Use only CSS to hide off-screen items, keeping every loaded item permanently in the DOM regardless of feed length'
    ],
    correctAnswer: 'Server-render an initial batch of items as real HTML for first paint and crawlability, virtualize/recycle off-screen DOM nodes for performance while preserving accessible focus order, and provide a non-JS paginated fallback (or rel="next" links) for crawlers and assistive tech',
    explanation: 'Infinite scroll is notoriously hostile to SEO and accessibility if implemented naively; a robust design server-renders an initial meaningful chunk, virtualizes the DOM to control memory/performance as the user scrolls (without breaking sequential tab/reading order), and exposes a discoverable, crawlable paginated equivalent for bots and non-JS or assistive contexts.',
    tags: ['system-design', 'infinite-scroll', 'seo', 'accessibility', 'performance']
  },
  {
    id: 'html-046',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'What is the effect of declaring <meta name="viewport" content="width=device-width, initial-scale=1"> on Interaction to Next Paint (INP) for touch interactions, and what HTML-adjacent factor commonly undermines it?',
    options: [
      'The viewport meta tag has no relationship to interaction responsiveness',
      'It enables responsive layout and avoids the legacy 300ms tap-delay on most modern browsers, but improperly sized touch targets or large synchronous JS work triggered on tap can still dominate INP regardless of viewport configuration',
      'It guarantees zero input latency on all devices automatically',
      'It only affects desktop browsers, never mobile'
    ],
    correctAnswer: 'It enables responsive layout and avoids the legacy 300ms tap-delay on most modern browsers, but improperly sized touch targets or large synchronous JS work triggered on tap can still dominate INP regardless of viewport configuration',
    explanation: 'A correct viewport meta tag is a prerequisite for mobile browsers to avoid the historical double-tap-to-zoom delay heuristic, improving baseline tap responsiveness, but INP is ultimately dominated by the cost of the JavaScript executed in response to the interaction, which the viewport tag alone cannot fix.',
    tags: ['performance', 'inp', 'viewport', 'web-vitals']
  },
  {
    id: 'html-047',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'Why does setting <meta http-equiv="Content-Security-Policy"> inside the HTML rather than as a real HTTP response header have meaningfully weaker security guarantees for certain directives?',
    options: [
      'Meta-tag CSP and header CSP are always functionally identical',
      'Meta-tag CSP cannot be parsed by any modern browser',
      'Certain directives like frame-ancestors and report-uri/report-to are ignored when delivered via meta tag, and the policy only takes effect once the parser reaches that point in the HTML, leaving an enforcement gap for anything loaded earlier in the document',
      'Meta-tag CSP applies retroactively to resources already loaded before the tag, eliminating any gap'
    ],
    correctAnswer: 'Certain directives like frame-ancestors and report-uri/report-to are ignored when delivered via meta tag, and the policy only takes effect once the parser reaches that point in the HTML, leaving an enforcement gap for anything loaded earlier in the document',
    explanation: 'The spec explicitly disallows frame-ancestors and reporting directives in meta-delivered CSP since those require knowledge before any content is rendered; additionally, anything in the document before the meta tag (e.g., earlier inline scripts) is unprotected, making a real HTTP header the strictly stronger delivery mechanism.',
    tags: ['security', 'csp', 'meta-tag']
  },
  {
    id: 'html-048',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'In a streaming SSR architecture that flushes HTML in chunks before the full document is ready, what HTML/markup-level constraint must be respected to avoid breaking the parser or layout?',
    options: [
      'Chunks can be split at any arbitrary byte offset with no consequences',
      'Only the <body> may ever be streamed; <head> must always be sent in one piece with no exceptions',
      'Streamed chunks should avoid splitting inside a single tag or attribute, and content depending on later-streamed CSS/JS (e.g., visibility toggles) needs careful ordering or placeholder styling to avoid a flash of incorrect content',
      'Streaming HTML is impossible because browsers require the entire document before any parsing begins'
    ],
    correctAnswer: 'Streamed chunks should avoid splitting inside a single tag or attribute, and content depending on later-streamed CSS/JS (e.g., visibility toggles) needs careful ordering or placeholder styling to avoid a flash of incorrect content',
    explanation: 'Browsers can incrementally parse and render HTML as it streams in, so well-formed chunk boundaries (not mid-tag) are essential; additionally, since later chunks may depend on styles or scripts not yet delivered, frameworks doing streaming SSR (like React\u2019s renderToPipeableStream) carefully order critical inline styles and hydration boundaries to avoid visible flashes of unstyled or interactive-but-broken content.',
    tags: ['system-design', 'streaming-ssr', 'parsing', 'performance']
  },
  {
    id: 'html-049',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'How would you design an accessible drag-and-drop reordering interface (e.g., a kanban board) using HTML/ARIA so that keyboard-only and screen reader users can also reorder items?',
    options: [
      'Rely exclusively on the HTML5 native Drag and Drop API, which is fully keyboard accessible by default',
      'Omit any non-pointer interaction since drag-and-drop is inherently a mouse-only paradigm',
      'Provide a complementary keyboard-operable mechanism (e.g., grab/move/drop via Space and arrow keys) with aria-grabbed/aria-dropeffect or live region announcements communicating position changes, since native HTML5 DnD is not accessible by default',
      'Use only visual cursor changes to indicate drag state, which assistive tech can infer automatically'
    ],
    correctAnswer: 'Provide a complementary keyboard-operable mechanism (e.g., grab/move/drop via Space and arrow keys) with aria-grabbed/aria-dropeffect or live region announcements communicating position changes, since native HTML5 DnD is not accessible by default',
    explanation: 'The native HTML5 Drag and Drop API has notoriously poor accessibility support across browsers and assistive technologies; accessible implementations provide an equivalent keyboard interaction model and announce state changes via live regions or accessible descriptions so screen reader users can perceive and perform the same reordering operations.',
    tags: ['accessibility', 'drag-and-drop', 'aria', 'keyboard']
  },
  {
    id: 'html-050',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design HTML output for a multi-locale, multi-direction (LTR/RTL) global product so that layout, accessibility, and SEO all behave correctly per locale?',
    options: [
      'Use a single hardcoded dir="ltr" on <html> for every locale and rely on CSS overrides for RTL languages',
      'Set lang and dir attributes dynamically on <html> per response based on the resolved locale, use logical CSS properties instead of physical left/right, and emit hreflang link tags for locale-specific SEO discovery',
      'Omit the lang attribute entirely since browsers can auto-detect language reliably',
      'Serve identical markup for all locales and translate text via client-side JavaScript only after initial render'
    ],
    correctAnswer: 'Set lang and dir attributes dynamically on <html> per response based on the resolved locale, use logical CSS properties instead of physical left/right, and emit hreflang link tags for locale-specific SEO discovery',
    explanation: 'lang drives screen reader pronunciation and SEO language signals, dir="rtl"/"ltr" is essential for correct bidi text and layout rendering, and pairing this with hreflang annotations helps search engines serve the correct locale variant to users, none of which can be reliably patched in after the fact via client-side JS alone.',
    tags: ['system-design', 'i18n', 'rtl', 'accessibility', 'seo']
  }
];