/**
 * src/data/interview/html.ts
 * HTML Interview Questions (120 items)
 * Levels: Beginner (10) → Intermediate (35) → Advanced (40) → MNC (35)
 */

import { InterviewQuestion } from '@/src/types/interview';

export const htmlQuestions: InterviewQuestion[] = [

  // ─────────────────────────────────────────────
  // BEGINNER  (html-001 – html-010)
  // ─────────────────────────────────────────────

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

  // ─────────────────────────────────────────────
  // INTERMEDIATE  (html-011 – html-045)
  // ─────────────────────────────────────────────

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
  {
    id: 'html-021',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the <template> element?',
    options: [
      'It renders its content immediately but hidden with CSS',
      'It holds inert, unrendered markup that is parsed but not displayed or executed until explicitly cloned into the DOM via JavaScript',
      'It defines a reusable CSS class',
      'It automatically fetches and inserts content from a URL'
    ],
    correctAnswer: 'It holds inert, unrendered markup that is parsed but not displayed or executed until explicitly cloned into the DOM via JavaScript',
    explanation: 'Content inside <template> is parsed into a document fragment but not rendered, and any nested images/scripts do not load or run until the fragment is cloned (via .content.cloneNode) and inserted into the active DOM.',
    tags: ['template', 'dom', 'web-components']
  },
  {
    id: 'html-022',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between calling .show() and .showModal() on a <dialog> element?',
    options: [
      'They are exact synonyms',
      '.show() displays the dialog non-modally, leaving the rest of the page interactive; .showModal() displays it modally, disabling interaction with content outside the dialog and enabling the ::backdrop',
      '.showModal() only works inside an <iframe>',
      '.show() requires a "modal" attribute to function at all'
    ],
    correctAnswer: '.show() displays the dialog non-modally, leaving the rest of the page interactive; .showModal() displays it modally, disabling interaction with content outside the dialog and enabling the ::backdrop',
    explanation: 'showModal() puts the dialog at the top of the layer stack, traps focus inside it, renders a ::backdrop pseudo-element, and makes outside content inert; show() simply displays the dialog like any other block element with none of those modal guarantees.',
    tags: ['dialog', 'modal', 'native-elements']
  },
  {
    id: 'html-023',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What accessible, JavaScript-free disclosure widget do <details> and <summary> provide together?',
    options: [
      'A tooltip shown on hover only',
      'An expandable/collapsible section where <summary> acts as the always-visible, keyboard-and-screen-reader-operable toggle for the <details> content',
      'A modal dialog box',
      'A tab panel requiring ARIA roles to function'
    ],
    correctAnswer: 'An expandable/collapsible section where <summary> acts as the always-visible, keyboard-and-screen-reader-operable toggle for the <details> content',
    explanation: '<details><summary>Title</summary>Content</details> gets native toggle behavior, keyboard support (Enter/Space on the summary), and an implicit disclosure-triangle indicator with no ARIA or JavaScript required, unlike a hand-rolled accordion.',
    tags: ['details', 'summary', 'accessibility', 'native-elements']
  },
  {
    id: 'html-024',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'Why does the autocomplete attribute matter beyond simply turning suggestions on or off, e.g. autocomplete="cc-number" or "new-password"?',
    options: [
      'It only affects whether the browser remembers the value, nothing more',
      'Specific token values give browsers and password managers structured hints about the semantic purpose of a field (payment, address, credentials), enabling accurate autofill rather than generic guessing',
      'It has no effect in modern browsers and is purely decorative',
      'autocomplete values are only relevant for <select> elements'
    ],
    correctAnswer: 'Specific token values give browsers and password managers structured hints about the semantic purpose of a field (payment, address, credentials), enabling accurate autofill rather than generic guessing',
    explanation: 'The WHATWG autofill spec defines dozens of tokens (given-name, cc-exp, new-password, one-time-code) that let user agents and password managers fill fields correctly and can also help password managers correctly distinguish a new-password field from a current-password field during sign-up vs login forms.',
    tags: ['forms', 'autocomplete', 'autofill']
  },
  {
    id: 'html-025',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What does the pattern attribute on an <input> do, e.g. pattern="[0-9]{4}"?',
    options: [
      'It formats the display of the value visually with the given pattern',
      'It supplies a JavaScript regular expression that the input\u2019s value must fully match for native constraint validation to consider it valid',
      'It restricts the physical width of the input box',
      'It only works when combined with type="text" and no other input type'
    ],
    correctAnswer: 'It supplies a JavaScript regular expression that the input\u2019s value must fully match for native constraint validation to consider it valid',
    explanation: 'The browser anchors the pattern regex to match the entire value (as if wrapped in ^(?:...)$) and flags the field :invalid if it doesn\u2019t match, integrating with the same constraint validation API as required and min/max.',
    tags: ['forms', 'validation', 'pattern']
  },
  {
    id: 'html-026',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does calling input.setCustomValidity("message") in JavaScript do to a form field?',
    options: [
      'It permanently disables validation for that field',
      'It marks the field as invalid with a custom message shown by the native validation UI, until setCustomValidity("") is called to clear it',
      'It only changes the placeholder text',
      'It has no effect unless the pattern attribute is also present'
    ],
    correctAnswer: 'It marks the field as invalid with a custom message shown by the native validation UI, until setCustomValidity("") is called to clear it',
    explanation: 'setCustomValidity lets you plug custom logic (e.g. "passwords must match") into the native Constraint Validation API, but the empty-string reset is essential — forgetting to call setCustomValidity("") once the condition is fixed leaves the field permanently invalid.',
    tags: ['forms', 'validation', 'constraint-validation-api']
  },
  {
    id: 'html-027',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the <datalist> element paired with an input\'s list attribute?',
    options: [
      'It forces the input to only accept values from the list, like a <select>',
      'It provides a set of suggested autocomplete options for a text input, while still allowing the user to type any free-form value',
      'It replaces the need for a <select> element entirely',
      'It validates the input against the listed values automatically'
    ],
    correctAnswer: 'It provides a set of suggested autocomplete options for a text input, while still allowing the user to type any free-form value',
    explanation: '<input list="browsers"><datalist id="browsers"><option value="Chrome">... gives suggestion-style autocomplete, but unlike <select>, the input still accepts arbitrary text not present in the datalist, so it does not enforce a closed set of values on its own.',
    tags: ['forms', 'datalist', 'autocomplete']
  },
  {
    id: 'html-028',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the <output> element in a form?',
    options: [
      'It displays server response text after form submission',
      'It represents the result of a calculation or user action, associating itself with the inputs it depends on via the "for" attribute for accessibility',
      'It is a synonym for a disabled input',
      'It automatically formats numbers as currency'
    ],
    correctAnswer: 'It represents the result of a calculation or user action, associating itself with the inputs it depends on via the "for" attribute for accessibility',
    explanation: '<output for="a b" name="result">15</output> semantically marks computed content (like a live sum from a slider), and its "for" attribute lets assistive technology know which inputs the displayed result is derived from.',
    tags: ['forms', 'output', 'semantics']
  },
  {
    id: 'html-029',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the key semantic difference between <progress> and <meter>?',
    options: [
      'They are interchangeable and render identically in every browser',
      '<progress> represents completion of a task toward 100% (e.g. a file upload); <meter> represents a scalar measurement within a known range that isn\u2019t necessarily progress toward completion (e.g. disk usage, a rating)',
      '<meter> can only display percentages, never absolute values',
      '<progress> is deprecated in favor of <meter>'
    ],
    correctAnswer: '<progress> represents completion of a task toward 100% (e.g. a file upload); <meter> represents a scalar measurement within a known range that isn\u2019t necessarily progress toward completion (e.g. disk usage, a rating)',
    explanation: 'Using <meter> for an upload progress bar or <progress> for a "disk 80% full" gauge is a semantic misuse, even though they can look visually similar; screen readers announce them differently based on their distinct intended meanings.',
    tags: ['progress', 'meter', 'semantics']
  },
  {
    id: 'html-030',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What accessibility benefit does wrapping related form controls in <fieldset> with a <legend> provide?',
    options: [
      'It only adds a visual border around the controls, nothing else',
      'The <legend> text is announced by screen readers as context/grouping information whenever focus moves to any control inside the fieldset (e.g. for a group of radio buttons)',
      'It automatically validates all contained fields as a single unit',
      'It is required syntax for any <input> to function'
    ],
    correctAnswer: 'The <legend> text is announced by screen readers as context/grouping information whenever focus moves to any control inside the fieldset (e.g. for a group of radio buttons)',
    explanation: 'For a set of radio buttons like "Shipping method", wrapping them in <fieldset><legend>Shipping method</legend>... ensures a screen reader announces that group label alongside each individual option, which a series of unrelated labels alone would not convey.',
    tags: ['forms', 'fieldset', 'legend', 'accessibility']
  },
  {
    id: 'html-031',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'Why can a <base href="..."> tag in the document head cause subtle bugs elsewhere on the page?',
    options: [
      'base has no effect on anything except <a> tags',
      'It changes the resolution of every relative URL on the page — including relative links, form actions, image sources, and fetch() calls made from inline scripts referencing relative paths — which can silently break unrelated relative references',
      'It only affects URLs inside <style> blocks',
      'It is ignored unless combined with a target attribute'
    ],
    correctAnswer: 'It changes the resolution of every relative URL on the page — including relative links, form actions, image sources, and fetch() calls made from inline scripts referencing relative paths — which can silently break unrelated relative references',
    explanation: 'Because <base> globally redefines the document\u2019s base URL for resolving all relative references, introducing or changing it (e.g. via a CMS template) is a common source of hard-to-trace bugs where unrelated relative links or asset paths suddenly resolve against the wrong origin/path.',
    tags: ['base', 'urls', 'gotchas']
  },
  {
    id: 'html-032',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the crossorigin attribute on <script> or <img> control?',
    options: [
      'Whether the resource is fetched over HTTPS',
      'Whether the request is made in CORS mode and, if so, whether credentials (cookies) are included — affecting whether the browser exposes detailed error info (like a full stack trace via window.onerror) or a tainted canvas for cross-origin images',
      'Whether the resource can be cached by a CDN',
      'It has no functional effect and is purely documentation'
    ],
    correctAnswer: 'Whether the request is made in CORS mode and, if so, whether credentials (cookies) are included — affecting whether the browser exposes detailed error info (like a full stack trace via window.onerror) or a tainted canvas for cross-origin images',
    explanation: 'Without crossorigin, cross-origin script errors are reported as a generic "Script error." with no details, and drawing a cross-origin image onto a <canvas> taints it (blocking pixel reads); crossorigin="anonymous" requests the resource via CORS without sending credentials, unlocking full error details and untainted canvas access when the server responds with the right CORS headers.',
    tags: ['crossorigin', 'cors', 'security']
  },
  {
    id: 'html-033',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Security',
    question: 'What does the integrity attribute on a <script> or <link> tag provide?',
    options: [
      'It signs the resource with the page\u2019s own private key',
      'It supplies a cryptographic hash (Subresource Integrity) that the browser checks against the fetched resource\u2019s content, refusing to execute/apply it if the content has been tampered with — critical when loading from a third-party CDN',
      'It guarantees the resource loads before any other script on the page',
      'It only works for same-origin resources'
    ],
    correctAnswer: 'It supplies a cryptographic hash (Subresource Integrity) that the browser checks against the fetched resource\u2019s content, refusing to execute/apply it if the content has been tampered with — critical when loading from a third-party CDN',
    explanation: '<script src="https://cdn.example.com/lib.js" integrity="sha384-..." crossorigin="anonymous"> ensures that if the CDN is compromised and serves modified content, the browser detects the hash mismatch and blocks execution, protecting against a compromised third-party dependency.',
    tags: ['integrity', 'sri', 'security', 'cdn']
  },
  {
    id: 'html-034',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the srcdoc attribute on an <iframe>?',
    options: [
      'It sets a fallback URL if the main src fails to load',
      'It supplies the iframe\u2019s HTML content directly as an inline string, rendered as if it were fetched from a src, useful for sandboxed preview widgets without a separate document request',
      'It defines a document title shown in the browser tab',
      'It is only valid when the sandbox attribute is absent'
    ],
    correctAnswer: 'It supplies the iframe\u2019s HTML content directly as an inline string, rendered as if it were fetched from a src, useful for sandboxed preview widgets without a separate document request',
    explanation: '<iframe sandbox srcdoc="<p>Preview</p>"></iframe> renders inline markup without a network round trip, commonly combined with sandbox to safely preview untrusted user-authored HTML (like a live code editor\u2019s output pane).',
    tags: ['iframe', 'srcdoc']
  },
  {
    id: 'html-035',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What problem does the inputmode attribute solve, e.g. inputmode="numeric" on a text input?',
    options: [
      'It performs client-side validation that the value is numeric',
      'It hints to mobile browsers which on-screen virtual keyboard layout to show (numeric keypad, email keyboard, etc.) without changing the input\u2019s type or its submitted value format',
      'It changes the HTTP method used for form submission',
      'It is equivalent to setting type="number"'
    ],
    correctAnswer: 'It hints to mobile browsers which on-screen virtual keyboard layout to show (numeric keypad, email keyboard, etc.) without changing the input\u2019s type or its submitted value format',
    explanation: 'inputmode="numeric" on a type="text" field (e.g. for a credit card or OTP field where you don\u2019t want the up/down spinners of type="number") shows a numeric keypad on mobile while the field remains a plain text input for validation/formatting purposes.',
    tags: ['forms', 'inputmode', 'mobile']
  },
  {
    id: 'html-036',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does enterkeyhint="search" (or "go", "send", "done") control on an input or contenteditable element?',
    options: [
      'It changes the required attribute\u2019s behavior on submit',
      'It hints the on-screen keyboard\u2019s "Enter" key to display an appropriate label/icon (e.g. a magnifying glass for search) matching the expected action, purely a presentational/UX hint',
      'It automatically submits the form when Enter is pressed',
      'It disables the Enter key entirely for that field'
    ],
    correctAnswer: 'It hints the on-screen keyboard\u2019s "Enter" key to display an appropriate label/icon (e.g. a magnifying glass for search) matching the expected action, purely a presentational/UX hint',
    explanation: 'enterkeyhint doesn\u2019t change any functional behavior on its own — the developer\u2019s JavaScript still needs to listen for the Enter keypress and act on it — it only improves the mobile virtual keyboard\u2019s visual affordance to match user expectations.',
    tags: ['forms', 'enterkeyhint', 'mobile']
  },
  {
    id: 'html-037',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does <input type="file" accept="image/*" capture="environment"> enable on a mobile device?',
    options: [
      'It restricts the file picker to only files smaller than 1MB',
      'It hints the browser to directly open the rear ("environment") camera to capture a new photo, rather than only offering to pick an existing file from storage',
      'It automatically compresses the captured image before upload',
      'It disables the file picker entirely, forcing camera use only, with no way to select an existing file'
    ],
    correctAnswer: 'It hints the browser to directly open the rear ("environment") camera to capture a new photo, rather than only offering to pick an existing file from storage',
    explanation: 'The capture attribute (with values "user" for front camera or "environment" for rear camera) is a hint most mobile browsers honor to jump straight into a live capture flow, though it remains a hint — the browser may still offer the standard file picker as an alternative depending on platform.',
    tags: ['forms', 'file-input', 'capture', 'mobile']
  },
  {
    id: 'html-038',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the translate="no" attribute communicate to browser translation tools and machine translation services?',
    options: [
      'It disables the element entirely from rendering',
      'It marks the element\u2019s text content as something that should not be machine-translated (e.g. a brand name, code snippet, or proper noun), while surrounding content can still be translated normally',
      'It forces the element to always be translated regardless of browser settings',
      'It is only relevant for right-to-left languages'
    ],
    correctAnswer: 'It marks the element\u2019s text content as something that should not be machine-translated (e.g. a brand name, code snippet, or proper noun), while surrounding content can still be translated normally',
    explanation: '<span translate="no">Acme Corp</span> tells tools like Google Translate to leave that specific text untouched even while translating the rest of the page, preventing brand names or code identifiers from being garbled by automatic translation.',
    tags: ['translate', 'i18n', 'semantics']
  },
  {
    id: 'html-039',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the practical difference between the hidden attribute and CSS display:none for hiding an element?',
    options: [
      'They are exactly identical in every respect, including specificity rules',
      'hidden is a plain HTML boolean attribute expressing default presentational intent (removed from rendering and the accessibility tree by default), but it has very low CSS specificity and is trivially overridden by any conflicting display rule, unlike display:none set directly',
      'hidden only works on <div> elements',
      'display:none does not remove an element from the accessibility tree, while hidden does not affect it either'
    ],
    correctAnswer: 'hidden is a plain HTML boolean attribute expressing default presentational intent (removed from rendering and the accessibility tree by default), but it has very low CSS specificity and is trivially overridden by any conflicting display rule, unlike display:none set directly',
    explanation: 'Browsers implement [hidden] via a low-specificity default stylesheet rule (display: none), so a CSS rule like ".foo { display: flex; }" on the same element will silently override the hidden attribute and show it anyway — a common gotcha when combining hidden with utility CSS classes.',
    tags: ['hidden', 'css', 'gotchas']
  },
  {
    id: 'html-040',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the semantic purpose of the <address> element?',
    options: [
      'It formats any postal address on the page, including addresses inside articles about other people',
      'It represents contact information for the nearest relevant ancestor (like the author of the enclosing article or the whole document), not an arbitrary physical mailing address',
      'It is a deprecated element with no modern use',
      'It is functionally identical to <p> with different default styling'
    ],
    correctAnswer: 'It represents contact information for the nearest relevant ancestor (like the author of the enclosing article or the whole document), not an arbitrary physical mailing address',
    explanation: 'A common misuse is wrapping a physical street address (e.g. a restaurant\u2019s location shown incidentally in body content) in <address>; the spec scopes it specifically to contact info for the surrounding article/section\u2019s author or the page/site owner, not any address that happens to appear.',
    tags: ['address', 'semantics']
  },
  {
    id: 'html-041',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What relationship does <figcaption> establish when placed inside a <figure>?',
    options: [
      'It has no semantic relationship; it is purely a styling hook',
      'It provides a caption or legend for the figure\u2019s content (an image, code listing, chart, etc.), and can appear as the first or last child of the figure',
      'It must always be the only child of figure',
      'It automatically generates alt text for any images inside the figure'
    ],
    correctAnswer: 'It provides a caption or legend for the figure\u2019s content (an image, code listing, chart, etc.), and can appear as the first or last child of the figure',
    explanation: '<figure><img src="chart.png" alt="Q3 revenue chart"><figcaption>Figure 1: Q3 revenue by region</figcaption></figure> semantically links the caption to the figure\u2019s content, distinct from the alt text which describes the image itself for when it cannot be seen.',
    tags: ['figure', 'figcaption', 'semantics']
  },
  {
    id: 'html-042',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the <mark> element semantically represent, as opposed to just applying a yellow-highlight CSS class?',
    options: [
      'It is purely decorative with no distinct meaning from a styled span',
      'It represents text highlighted or marked for reference purposes due to its relevance in the current context, such as search-term matches, which is meaningfully different from a span styled to look highlighted',
      'It can only be used inside <table> cells',
      'It automatically makes the wrapped text bold and italic'
    ],
    correctAnswer: 'It represents text highlighted or marked for reference purposes due to its relevance in the current context, such as search-term matches, which is meaningfully different from a span styled to look highlighted',
    explanation: 'Using <mark> to wrap matched search terms in a results page conveys "this is relevant to the reader\u2019s current context" semantically, distinguishable by assistive tech and search engines, unlike a visually-identical <span class="highlight"> which carries no such meaning.',
    tags: ['mark', 'semantics']
  },
  {
    id: 'html-043',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the datetime attribute on a <time> element provide that the visible text alone does not?',
    options: [
      'It sets a countdown timer that updates automatically',
      'It supplies a machine-readable, unambiguous date/time value (ISO 8601 format) that search engines and assistive/automation tools can parse reliably, independent of however the date is stylistically written for humans',
      'It forces the browser to display the date in the user\u2019s local timezone automatically',
      'It has no functional purpose and is purely decorative metadata'
    ],
    correctAnswer: 'It supplies a machine-readable, unambiguous date/time value (ISO 8601 format) that search engines and assistive/automation tools can parse reliably, independent of however the date is stylistically written for humans',
    explanation: '<time datetime="2026-07-04">the 4th of July</time> lets the human-readable text be phrased naturally/informally while still exposing a precise, unambiguous machine-readable value that tools like search engine rich snippets or calendar-detection features can reliably extract.',
    tags: ['time', 'datetime', 'seo', 'semantics']
  },
  {
    id: 'html-044',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the <noscript> element?',
    options: [
      'It disables JavaScript for the entire page when present',
      'It defines content to be rendered only when scripting is disabled or unsupported in the browser, commonly used as a fallback message or alternative markup',
      'It marks a script that should never execute under any circumstance',
      'It is a synonym for <script defer>'
    ],
    correctAnswer: 'It defines content to be rendered only when scripting is disabled or unsupported in the browser, commonly used as a fallback message or alternative markup',
    explanation: '<noscript><p>Please enable JavaScript to use this app.</p></noscript> shows its content only in the (now rare) case scripting is unavailable, and is otherwise ignored by the parser entirely when scripting is enabled, making it a graceful-degradation mechanism rather than a control over script execution.',
    tags: ['noscript', 'progressive-enhancement']
  },
  {
    id: 'html-045',
    topic: 'html',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between preconnect and dns-prefetch as resource hints, at a basic level?',
    options: [
      'They are exact synonyms in every browser',
      'dns-prefetch only resolves the DNS lookup for a domain ahead of time; preconnect goes further, also establishing the TCP connection and (for HTTPS) completing the TLS handshake, so it is more expensive but saves more time when the origin will definitely be used',
      'preconnect only works for same-origin resources',
      'dns-prefetch establishes a full connection while preconnect only resolves DNS'
    ],
    correctAnswer: 'dns-prefetch only resolves the DNS lookup for a domain ahead of time; preconnect goes further, also establishing the TCP connection and (for HTTPS) completing the TLS handshake, so it is more expensive but saves more time when the origin will definitely be used',
    explanation: '<link rel="dns-prefetch" href="//example.com"> is cheap insurance for domains that might be used; <link rel="preconnect" href="https://example.com"> is a stronger, costlier commitment best reserved for origins you are highly confident will be requested imminently, since holding an unused open connection wastes resources.',
    tags: ['performance', 'resource-hints', 'preconnect', 'dns-prefetch']
  },

  // ─────────────────────────────────────────────
  // ADVANCED  (html-046 – html-085)
  // ─────────────────────────────────────────────

  {
    id: 'html-046',
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
    id: 'html-047',
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
    id: 'html-048',
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
    id: 'html-049',
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
    id: 'html-050',
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
    id: 'html-051',
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
    id: 'html-052',
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
    id: 'html-053',
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
    id: 'html-054',
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
    id: 'html-055',
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
  {
    id: 'html-056',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does the Popover API (the popover attribute) provide "light dismiss" behavior compared to a manually built dropdown?',
    options: [
      'It requires the developer to write all dismiss-on-outside-click logic manually, same as a custom dropdown',
      'An element with popover="auto" is automatically shown in the top layer and the browser natively closes it when the user clicks outside, presses Escape, or opens another popover, without any custom event-listener code',
      'popover only works when combined with a <dialog> element',
      'Light dismiss refers exclusively to a CSS animation effect, unrelated to closing behavior'
    ],
    correctAnswer: 'An element with popover="auto" is automatically shown in the top layer and the browser natively closes it when the user clicks outside, presses Escape, or opens another popover, without any custom event-listener code',
    explanation: 'Before the Popover API, developers had to wire up document click listeners, Escape key handlers, and z-index/stacking management by hand for dropdowns and menus; popover="auto" elements get this dismiss behavior and top-layer rendering (escaping clipping/overflow issues) built into the browser.',
    tags: ['popover', 'dialog', 'native-elements', 'advanced']
  },
  {
    id: 'html-057',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What does the ::backdrop pseudo-element let you style on a native <dialog>, and what focus behavior does showModal() guarantee alongside it?',
    options: [
      '::backdrop styles the dialog\u2019s own border only, with no relation to focus',
      '::backdrop styles the semi-transparent layer rendered behind a modal dialog, covering the rest of the page; showModal() also automatically moves focus into the dialog and traps Tab navigation within it until closed',
      '::backdrop is only available for non-modal dialogs opened with .show()',
      'showModal() does not affect focus at all, requiring manual focus management in every case'
    ],
    correctAnswer: '::backdrop styles the semi-transparent layer rendered behind a modal dialog, covering the rest of the page; showModal() also automatically moves focus into the dialog and traps Tab navigation within it until closed',
    explanation: 'dialog::backdrop { background: rgba(0,0,0,0.5); } styles the native overlay; combined with showModal()\u2019s built-in focus trapping and the automatic inert-ing of background content, a native <dialog> provides most of the accessibility guarantees that a hand-rolled modal must reimplement manually.',
    tags: ['dialog', 'backdrop', 'focus-management', 'native-elements']
  },
  {
    id: 'html-058',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What problem does the "inert" attribute solve when applied to a section of the page behind an open modal?',
    options: [
      'It only applies a visual dimming effect with CSS, without changing interactivity',
      'It removes the entire subtree from focusability, keyboard/pointer interaction, and the accessibility tree simultaneously in one declarative attribute, preventing users from tabbing into or interacting with background content while a modal is open',
      'It deletes the marked elements from the DOM entirely',
      'It only affects mouse clicks, not keyboard focus'
    ],
    correctAnswer: 'It removes the entire subtree from focusability, keyboard/pointer interaction, and the accessibility tree simultaneously in one declarative attribute, preventing users from tabbing into or interacting with background content while a modal is open',
    explanation: 'Before inert, developers had to manually set tabindex="-1" on every focusable descendant and use aria-hidden to hide background content from screen readers while a modal was open; <div id="page-content" inert> does all of this in one attribute, and native <dialog>.showModal() applies it to the rest of the page automatically.',
    tags: ['inert', 'accessibility', 'focus-management']
  },
  {
    id: 'html-059',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'How does the View Transitions API\'s view-transition-name relate to markup, and what does it enable?',
    options: [
      'It is a JavaScript-only concept with no corresponding CSS/HTML hook',
      'Assigning a unique view-transition-name (via CSS) to an element lets the browser automatically animate that element smoothly between two DOM states (e.g. across a same-document navigation or a state change), rather than requiring hand-coded FLIP-style JavaScript animations',
      'It only works for full-page navigations between separate documents, never within the same page',
      'It replaces the need for CSS animations for every use case'
    ],
    correctAnswer: 'Assigning a unique view-transition-name (via CSS) to an element lets the browser automatically animate that element smoothly between two DOM states (e.g. across a same-document navigation or a state change), rather than requiring hand-coded FLIP-style JavaScript animations',
    explanation: 'document.startViewTransition(() => updateDOM()) captures before/after screenshots of elements with matching view-transition-name values and lets the browser interpolate between them, letting a thumbnail smoothly morph into a detail-page hero image, for example, with far less manual animation code than a JS-driven FLIP technique.',
    tags: ['view-transitions', 'performance', 'animation', 'advanced']
  },
  {
    id: 'html-060',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Security',
    question: 'How does the HTML Sanitizer API differ from manually stripping tags with a regex or blocklist when handling untrusted HTML?',
    options: [
      'They provide identical protection since both remove <script> tags',
      'The Sanitizer API is a browser-native, spec-defined allowlist-based parser that correctly handles edge cases (nested contexts, obscure event-handler attributes, encoded payloads) that ad hoc regex/blocklist approaches routinely miss, which is why regex-based HTML sanitization is widely considered unreliable',
      'Regex-based sanitization is strictly more secure since it can be customized per project',
      'The Sanitizer API only works on the server, never in the browser'
    ],
    correctAnswer: 'The Sanitizer API is a browser-native, spec-defined allowlist-based parser that correctly handles edge cases (nested contexts, obscure event-handler attributes, encoded payloads) that ad hoc regex/blocklist approaches routinely miss, which is why regex-based HTML sanitization is widely considered unreliable',
    explanation: 'element.setHTML(untrustedString) (backed by the Sanitizer API) parses the string as real HTML and strips dangerous nodes/attributes per a configurable allowlist, correctly handling the countless XSS bypass tricks (mixed case tags, obscure attributes like onanimationstart, malformed nesting) that regex-based blockers are notorious for failing against.',
    tags: ['sanitizer-api', 'security', 'xss', 'advanced']
  },
  {
    id: 'html-061',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Security',
    question: 'What problem does the Trusted Types API address at the browser/DOM level, and how does it relate to HTML injection sinks like innerHTML?',
    options: [
      'It automatically escapes all string concatenation in JavaScript',
      'When enforced via CSP (require-trusted-types-for), it makes the browser throw a TypeError if a raw string (rather than a vetted TrustedHTML object created through an approved policy) is assigned to a dangerous DOM sink like innerHTML, closing off a whole class of DOM-based XSS at the assignment point',
      'It only restricts network requests, not DOM manipulation',
      'It disables innerHTML entirely with no way to write HTML dynamically'
    ],
    correctAnswer: 'When enforced via CSP (require-trusted-types-for), it makes the browser throw a TypeError if a raw string (rather than a vetted TrustedHTML object created through an approved policy) is assigned to a dangerous DOM sink like innerHTML, closing off a whole class of DOM-based XSS at the assignment point',
    explanation: 'Content-Security-Policy: require-trusted-types-for \'script\' forces all innerHTML/outerHTML/document.write assignments across the entire codebase (including third-party scripts) to go through an explicitly reviewed TrustedTypePolicy, converting DOM XSS from a runtime string-handling bug into a compile-time-enforceable contract.',
    tags: ['trusted-types', 'security', 'xss', 'csp', 'advanced']
  },
  {
    id: 'html-062',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is a form-associated custom element, and what does the ElementInternals interface enable for it?',
    options: [
      'It is any custom element placed inside a <form> tag, with no special API involved',
      'A custom element that opts in via static formAssociated = true and uses ElementInternals (e.g. internals.setFormValue()) to participate in native form submission, validation, and labels/fieldset association just like a built-in <input>',
      'ElementInternals only provides styling hooks, unrelated to forms',
      'Form-associated custom elements cannot be styled with Shadow DOM'
    ],
    correctAnswer: 'A custom element that opts in via static formAssociated = true and uses ElementInternals (e.g. internals.setFormValue()) to participate in native form submission, validation, and labels/fieldset association just like a built-in <input>',
    explanation: 'Without this API, a custom <my-input> component could not be picked up by FormData or respond to a <label for> the way a native input does; ElementInternals bridges that gap, letting a Shadow-DOM-encapsulated custom element behave as a first-class form participant, including exposing custom validity messages.',
    tags: ['web-components', 'element-internals', 'forms', 'advanced']
  },
  {
    id: 'html-063',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What happens to content placed inside a custom element\'s <slot> tag if no light-DOM content is provided to fill that slot?',
    options: [
      'The slot is removed from the rendered output entirely with no fallback',
      'The markup nested directly inside the <slot> tags in the shadow tree renders as fallback content, only when the host element provides no matching slotted children',
      'It causes a runtime error at custom element registration time',
      'Fallback content inside a slot always renders regardless of whether slotted content is provided'
    ],
    correctAnswer: 'The markup nested directly inside the <slot> tags in the shadow tree renders as fallback content, only when the host element provides no matching slotted children',
    explanation: '<slot name="icon"><svg class="default-icon">...</svg></slot> inside a component\u2019s shadow root shows the default SVG only if the consumer of the component doesn\u2019t supply their own <span slot="icon">...</span> child, giving components sensible defaults without requiring every consumer to specify every slot.',
    tags: ['web-components', 'shadow-dom', 'slots', 'advanced']
  },
  {
    id: 'html-064',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'In what order do a custom element\'s lifecycle callbacks (connectedCallback, disconnectedCallback, attributeChangedCallback) typically fire, and why does this matter for HTML authors moving elements around the DOM?',
    options: [
      'They never fire more than once per element regardless of DOM operations',
      'connectedCallback fires each time the element is inserted into a connected document (including being moved, which triggers disconnectedCallback then connectedCallback again), and attributeChangedCallback fires for each observed attribute change — meaning naive setup logic in connectedCallback can run multiple times if the element is repeatedly moved',
      'attributeChangedCallback only fires once, at initial parse time, never again',
      'disconnectedCallback fires before the element is even added to the DOM'
    ],
    correctAnswer: 'connectedCallback fires each time the element is inserted into a connected document (including being moved, which triggers disconnectedCallback then connectedCallback again), and attributeChangedCallback fires for each observed attribute change — meaning naive setup logic in connectedCallback can run multiple times if the element is repeatedly moved',
    explanation: 'Moving a custom element via appendChild to a new parent (even within the same document) triggers disconnectedCallback followed by another connectedCallback, so setup code that adds event listeners in connectedCallback without matching cleanup in disconnectedCallback can silently accumulate duplicate listeners across moves.',
    tags: ['web-components', 'custom-elements', 'lifecycle', 'advanced']
  },
  {
    id: 'html-065',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Why does aria-owns exist, and in what scenario does it solve a problem that correct DOM nesting cannot?',
    options: [
      'aria-owns is purely redundant with DOM nesting and never needed',
      'aria-owns lets you express a parent-child accessibility relationship between elements that are not actual DOM descendants of each other, such as a menu button and a menu popup rendered elsewhere in the DOM (e.g. portal-rendered), which DOM nesting alone cannot represent',
      'It forces two elements to render identical content automatically',
      'aria-owns is only valid on <table> elements'
    ],
    correctAnswer: 'aria-owns lets you express a parent-child accessibility relationship between elements that are not actual DOM descendants of each other, such as a menu button and a menu popup rendered elsewhere in the DOM (e.g. portal-rendered), which DOM nesting alone cannot represent',
    explanation: 'Many component libraries render dropdown/menu content into a portal at the end of the document body for z-index/overflow reasons, breaking the natural DOM parent-child relationship the accessibility tree would otherwise infer; aria-owns="menu-id" on the trigger button re-establishes that logical ownership for assistive technology despite the physical DOM location.',
    tags: ['accessibility', 'aria-owns', 'portals', 'advanced']
  },
  {
    id: 'html-066',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between <bdi> and <bdo> when handling bidirectional (mixed LTR/RTL) text?',
    options: [
      'They are exact synonyms with different names for legacy reasons',
      '<bdi> isolates a span of text so surrounding bidirectional algorithm behavior doesn\u2019t get confused by its content\u2019s directionality (e.g. an untrusted username that might be RTL embedded in an LTR sentence); <bdo> explicitly overrides the visual display direction of its content regardless of the characters\u2019 natural direction',
      '<bdo> is used for isolation while <bdi> is used for overriding direction',
      'Both elements are deprecated in favor of the dir attribute alone'
    ],
    correctAnswer: '<bdi> isolates a span of text so surrounding bidirectional algorithm behavior doesn\u2019t get confused by its content\u2019s directionality (e.g. an untrusted username that might be RTL embedded in an LTR sentence); <bdo> explicitly overrides the visual display direction of its content regardless of the characters\u2019 natural direction',
    explanation: '<bdi> is exactly the right tool for interpolating unknown-direction user-generated strings (like usernames) into otherwise LTR/RTL text without the surrounding punctuation or layout getting visually scrambled by the Unicode bidi algorithm, while <bdo dir="rtl"> forces a specific visual direction even against the text\u2019s natural directionality, useful for niche typographic requirements.',
    tags: ['bdi', 'bdo', 'i18n', 'bidi', 'advanced']
  },
  {
    id: 'html-067',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What does <ruby> markup with <rt> provide, and for which languages is it most relevant?',
    options: [
      'It is a deprecated table-layout mechanism',
      'It attaches small annotation text (like phonetic guides — furigana in Japanese, or pinyin in Chinese) above or beside base text, semantically and visually associated with it, most relevant for East Asian typography',
      'It is used exclusively for footnote references in academic articles',
      'It defines an audio pronunciation file to play on hover'
    ],
    correctAnswer: 'It attaches small annotation text (like phonetic guides — furigana in Japanese, or pinyin in Chinese) above or beside base text, semantically and visually associated with it, most relevant for East Asian typography',
    explanation: '<ruby>\u6f22<rt>かん</rt>字<rt>じ</rt></ruby> renders small reading-aid characters above each kanji, correctly conveying the pronunciation-annotation relationship to both visual readers and assistive technology, something a manually positioned <span> with CSS cannot express semantically.',
    tags: ['ruby', 'i18n', 'typography', 'advanced']
  },
  {
    id: 'html-068',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Why does an autoplaying <video> with the muted and autoplay attributes still raise an accessibility concern even though browsers permit it (unlike autoplay with sound, which they block)?',
    options: [
      'There is no accessibility concern once a video is muted',
      'Autoplaying motion can still be disorienting or distracting for users with vestibular disorders or attention-related conditions regardless of sound, which is why pairing autoplay with a prefers-reduced-motion media query check (and providing user controls to pause) remains an accessibility best practice',
      'Muted autoplay is blocked by all browsers just like unmuted autoplay',
      'The muted attribute automatically respects prefers-reduced-motion with no extra code needed'
    ],
    correctAnswer: 'Autoplaying motion can still be disorienting or distracting for users with vestibular disorders or attention-related conditions regardless of sound, which is why pairing autoplay with a prefers-reduced-motion media query check (and providing user controls to pause) remains an accessibility best practice',
    explanation: 'Browsers permit muted autoplay primarily to prevent unexpected sound, but WCAG 2.2.2 (Pause, Stop, Hide) still requires that moving content lasting more than a few seconds be pausable by the user, and respecting prefers-reduced-motion to avoid autoplaying at all for users who\u2019ve indicated sensitivity to motion is considered a robust implementation.',
    tags: ['accessibility', 'video', 'autoplay', 'prefers-reduced-motion', 'advanced']
  },
  {
    id: 'html-069',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'System Design',
    question: 'What does <link rel="manifest" href="/app.webmanifest"> contribute toward making a website installable as a Progressive Web App?',
    options: [
      'It alone is sufficient to make any site installable with no other requirements',
      'It points the browser to a JSON manifest describing app metadata (name, icons, start_url, display mode); installability also requires HTTPS and typically a registered service worker, so the manifest is a necessary but not sufficient piece',
      'It replaces the need for a service worker entirely for offline functionality',
      'It is only relevant for iOS Safari, not other browsers'
    ],
    correctAnswer: 'It points the browser to a JSON manifest describing app metadata (name, icons, start_url, display mode); installability also requires HTTPS and typically a registered service worker, so the manifest is a necessary but not sufficient piece',
    explanation: 'Browsers use the manifest to populate the install prompt and home-screen icon, but the broader "installability criteria" (varying slightly per browser) typically also require serving over HTTPS and having a registered, active service worker, so the manifest link alone does not guarantee an install prompt appears.',
    tags: ['manifest', 'pwa', 'system-design', 'advanced']
  },
  {
    id: 'html-070',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'Why must crossorigin be set on <link rel="preload" as="font"> even when the font file is same-origin?',
    options: [
      'crossorigin is never required for font preloading regardless of origin',
      'Font resources are always fetched in "anonymous" CORS mode by the font-loading spec, even for same-origin requests, so a preload hint without a matching crossorigin attribute creates a separate, non-matching cache entry and the font gets fetched twice',
      'crossorigin on fonts only affects whether the font renders in bold',
      'It is required only for WOFF2 files, not TTF or OTF'
    ],
    correctAnswer: 'Font resources are always fetched in "anonymous" CORS mode by the font-loading spec, even for same-origin requests, so a preload hint without a matching crossorigin attribute creates a separate, non-matching cache entry and the font gets fetched twice',
    explanation: 'This is a commonly missed detail: because the browser\u2019s actual @font-face fetch always happens in CORS mode, a preload link lacking crossorigin is treated as a different cache key from the eventual real fetch, so the preload effectively does nothing useful and the font is downloaded again, wasting the preload\u2019s intended benefit.',
    tags: ['performance', 'preload', 'fonts', 'crossorigin', 'gotchas']
  },
  {
    id: 'html-071',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'How does the Speculation Rules API (<script type="speculationrules">) differ from traditional <link rel="prefetch"> for anticipating navigation?',
    options: [
      'They are functionally identical with different syntax only',
      'Speculation Rules can declaratively express prefetch or full prerender (rendering the destination page in a hidden background tab, ready to swap in instantly) based on URL patterns or lists, offering a more powerful and safer successor to the older, less-standardized prerender behavior; plain prefetch only fetches the resource, not renders it',
      'prefetch renders the full destination page while speculation rules only fetch bytes',
      'Speculation Rules only work for cross-origin destinations, never same-origin'
    ],
    correctAnswer: 'Speculation Rules can declaratively express prefetch or full prerender (rendering the destination page in a hidden background tab, ready to swap in instantly) based on URL patterns or lists, offering a more powerful and safer successor to the older, less-standardized prerender behavior; plain prefetch only fetches the resource, not renders it',
    explanation: '<script type="speculationrules">{"prerender": [{"source": "list", "urls": ["/next-page"]}]}</script> can make the following navigation feel instantaneous since the whole page (DOM, JS execution) is prepared ahead of time in the background, a meaningfully stronger optimization than simply prefetching the HTML bytes via <link rel="prefetch">.',
    tags: ['speculation-rules', 'performance', 'prerender', 'advanced']
  },
  {
    id: 'html-072',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'Why was HTTP/2 Server Push largely deprecated/removed from major browsers in favor of <link rel="preload">?',
    options: [
      'Server Push was never actually implemented by any browser',
      'Server Push often pushed resources the client already had cached (since the server can\u2019t see the client\u2019s cache state), wasting bandwidth, and was hard to tune correctly; preload gives the same "start fetching this important resource early" benefit while respecting the browser\u2019s own cache and prioritization logic',
      'preload is slower than Server Push in every measured scenario',
      'Server Push only ever worked for images, never scripts or stylesheets'
    ],
    correctAnswer: 'Server Push often pushed resources the client already had cached (since the server can\u2019t see the client\u2019s cache state), wasting bandwidth, and was hard to tune correctly; preload gives the same "start fetching this important resource early" benefit while respecting the browser\u2019s own cache and prioritization logic',
    explanation: 'In practice, Server Push frequently caused real-world performance regressions because servers couldn\u2019t know what a returning visitor already had cached, leading to redundant pushes; Chrome removed support for it, while <link rel="preload"> achieves a similar "start this fetch earlier" goal purely through client-driven hints that naturally respect the existing cache.',
    tags: ['performance', 'http2-push', 'preload', 'history', 'advanced']
  },
  {
    id: 'html-073',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference in purpose between <link rel="canonical"> and <link rel="alternate" hreflang="...">?',
    options: [
      'They serve the exact same SEO purpose and can be used interchangeably',
      'canonical tells search engines which URL is the single authoritative version among duplicates/near-duplicates of the same content; hreflang tells search engines about equivalent versions of the page targeted at different languages/regions, so the correct locale variant is served in search results',
      'hreflang is used only for RTL languages',
      'canonical only applies to images, not full pages'
    ],
    correctAnswer: 'canonical tells search engines which URL is the single authoritative version among duplicates/near-duplicates of the same content; hreflang tells search engines about equivalent versions of the page targeted at different languages/regions, so the correct locale variant is served in search results',
    explanation: '<link rel="canonical" href="https://example.com/product"> consolidates duplicate-content signals (e.g. from tracking-parameter URL variants) onto one URL, while a set of <link rel="alternate" hreflang="fr" href="...">/hreflang="de" tags cross-references locale-specific versions of the same logical page so search engines route French users to the French URL, addressing entirely different SEO problems.',
    tags: ['seo', 'canonical', 'hreflang', 'i18n', 'advanced']
  },
  {
    id: 'html-074',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Why is <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"> considered an accessibility anti-pattern?',
    options: [
      'user-scalable=no has no actual effect in any modern browser and is harmless',
      'It prevents users with low vision from pinch-zooming to enlarge content, directly conflicting with WCAG 1.4.4 (Resize Text) and 1.4.10 (Reflow), which require content to remain usable when zoomed; modern mobile browsers now largely ignore this directive specifically because of this accessibility harm',
      'It disables all CSS media queries on mobile devices',
      'It is required for every mobile-responsive site to function at all'
    ],
    correctAnswer: 'It prevents users with low vision from pinch-zooming to enlarge content, directly conflicting with WCAG 1.4.4 (Resize Text) and 1.4.10 (Reflow), which require content to remain usable when zoomed; modern mobile browsers now largely ignore this directive specifically because of this accessibility harm',
    explanation: 'user-scalable=no and maximum-scale=1 were historically used to prevent accidental zoom on interactive UI, but they also blocked legitimate zoom for users who rely on it to read content; the accessibility harm was significant enough that iOS Safari and Chrome now largely disregard these restrictions regardless of what the meta tag specifies.',
    tags: ['accessibility', 'viewport', 'zoom', 'wcag', 'advanced']
  },
  {
    id: 'html-075',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What subtle bug can the autofocus attribute cause when used inside content that is inserted into the page after initial load (e.g. a client-side-routed SPA view)?',
    options: [
      'autofocus never works after the initial page load, under any circumstance',
      'If multiple elements across different dynamically-inserted views carry autofocus, or if it fires on a view the user hasn\u2019t consciously navigated to, focus can jump unexpectedly, disorienting screen reader and keyboard users who lose their place in the document',
      'autofocus automatically scrolls the entire page to the top with no way to prevent it',
      'It causes a memory leak by holding a permanent reference to the focused element'
    ],
    correctAnswer: 'If multiple elements across different dynamically-inserted views carry autofocus, or if it fires on a view the user hasn\u2019t consciously navigated to, focus can jump unexpectedly, disorienting screen reader and keyboard users who lose their place in the document',
    explanation: 'autofocus is designed for the initial page load, and its behavior in dynamically inserted DOM (common in SPA route transitions) is inconsistent across browsers and easy to misuse — an unexpected focus jump when a background component mounts can silently steal keyboard focus from where the user actually is, a frequent real-world accessibility bug in single-page apps.',
    tags: ['autofocus', 'accessibility', 'spa', 'gotchas', 'advanced']
  },
  {
    id: 'html-076',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What do the ::part() and exportparts CSS/HTML features enable for styling web components from outside their Shadow DOM?',
    options: [
      'They allow a page to freely restyle any internal element of a component regardless of the component author\u2019s intent',
      'A component author explicitly exposes specific internal elements as styleable "parts" via the part="name" attribute; consumers outside the shadow boundary can then target only those explicitly exposed parts with ::part(name), preserving encapsulation for everything else',
      'part and exportparts only work within the same shadow root, never across component boundaries',
      'They are a deprecated predecessor to CSS custom properties with no remaining use'
    ],
    correctAnswer: 'A component author explicitly exposes specific internal elements as styleable "parts" via the part="name" attribute; consumers outside the shadow boundary can then target only those explicitly exposed parts with ::part(name), preserving encapsulation for everything else',
    explanation: '<my-card><div part="header">...</div></my-card>\u2019s shadow tree lets an outside stylesheet write my-card::part(header) { background: navy; } to intentionally restyle just that piece, and exportparts lets a nested component re-expose an inner component\u2019s parts through an additional layer of shadow boundary, controlling styleability precisely rather than an all-or-nothing encapsulation break.',
    tags: ['web-components', 'shadow-dom', 'css-parts', 'advanced']
  },
  {
    id: 'html-077',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'What problem does Declarative Shadow DOM solve for server-side-rendered web components?',
    options: [
      'It eliminates the need for Shadow DOM entirely on the client',
      'Without it, a server can only send the light-DOM markup; the shadow root and its encapsulated content must be constructed by JavaScript after hydration, causing a flash of unstyled/un-encapsulated content; declarative shadow DOM lets the server emit a <template shadowrootmode="open"> that the HTML parser attaches as a real shadow root immediately during parsing, before any JavaScript runs',
      'It only works for client-side rendered applications, not SSR',
      'It requires disabling JavaScript entirely for the component to render'
    ],
    correctAnswer: 'Without it, a server can only send the light-DOM markup; the shadow root and its encapsulated content must be constructed by JavaScript after hydration, causing a flash of unstyled/un-encapsulated content; declarative shadow DOM lets the server emit a <template shadowrootmode="open"> that the HTML parser attaches as a real shadow root immediately during parsing, before any JavaScript runs',
    explanation: 'This closes a long-standing gap for SSR of web components: previously the encapsulated shadow content and styles simply didn\u2019t exist until client JS ran, meaning server-rendered web components looked broken or unstyled before hydration; <template shadowrootmode="open"> markup is recognized natively by the parser, giving fully-rendered, styled components on first paint with zero JavaScript.',
    tags: ['declarative-shadow-dom', 'ssr', 'web-components', 'performance', 'advanced']
  },
  {
    id: 'html-078',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What namespace-related parsing rule applies when embedding an <svg> element directly inside HTML markup?',
    options: [
      'SVG cannot be embedded directly in HTML at all and always requires an <object> or <iframe>',
      'The HTML parser switches into the "foreign content" parsing mode upon encountering <svg>, applying SVG/XML parsing and namespace rules to its descendants (case-sensitive tag/attribute names, self-closing tags respected) until the matching closing tag returns it to HTML parsing rules',
      'SVG elements are silently converted into <canvas> elements internally by the parser',
      'Attributes inside inline SVG follow the exact same case-insensitivity rules as regular HTML'
    ],
    correctAnswer: 'The HTML parser switches into the "foreign content" parsing mode upon encountering <svg>, applying SVG/XML parsing and namespace rules to its descendants (case-sensitive tag/attribute names, self-closing tags respected) until the matching closing tag returns it to HTML parsing rules',
    explanation: 'This is why <svg><lineargradient> (lowercase) silently fails to work while <linearGradient> (camelCase) is required — inside the foreign-content region, SVG\u2019s case-sensitive, XML-derived naming rules apply, unlike the rest of an HTML document where tag/attribute names are case-insensitive.',
    tags: ['parsing', 'svg', 'foreign-content', 'internals', 'advanced']
  },
  {
    id: 'html-079',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Why can an ambiguous named character reference like &notin; behave differently from what an author might expect in certain contexts?',
    options: [
      'Named character references never cause ambiguity in the HTML spec',
      'The HTML parsing spec defines precise, sometimes surprising rules for character reference matching without a trailing semicolon (legacy compatibility), where the longest matching sequence is greedily consumed, occasionally producing a different character than intended if the reference is not properly terminated',
      'Character references are always resolved identically regardless of surrounding syntax',
      'This ambiguity only exists in HTML documents served as XML (XHTML), never regular HTML'
    ],
    correctAnswer: 'The HTML parsing spec defines precise, sometimes surprising rules for character reference matching without a trailing semicolon (legacy compatibility), where the longest matching sequence is greedily consumed, occasionally producing a different character than intended if the reference is not properly terminated',
    explanation: 'For legacy compatibility, HTML parsers tolerate certain named references without a trailing semicolon, but this requires a precisely defined (and occasionally surprising) longest-match table lookup baked into the spec; always terminating character references with a semicolon (&amp; not &amp) avoids relying on this legacy ambiguity-resolution behavior.',
    tags: ['parsing', 'character-references', 'entities', 'internals', 'advanced']
  },
  {
    id: 'html-080',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What does contenteditable="plaintext-only" provide that plain contenteditable="true" does not?',
    options: [
      'It disables editing entirely, making the region read-only',
      'It allows text editing while stripping the ability to introduce or retain rich HTML formatting (bold, links, pasted markup) inside the region, keeping the underlying content as plain text even though it visually behaves like an editable area',
      'It is identical to contenteditable="true" with no functional difference',
      'It only works inside <textarea> elements'
    ],
    correctAnswer: 'It allows text editing while stripping the ability to introduce or retain rich HTML formatting (bold, links, pasted markup) inside the region, keeping the underlying content as plain text even though it visually behaves like an editable area',
    explanation: 'A common problem with plain contenteditable="true" is those pasting rich content bring along unwanted inline styles/tags that require manual sanitization; plaintext-only mode handles this natively at the editing-surface level, useful for comment boxes or chat inputs that should never contain arbitrary HTML.',
    tags: ['contenteditable', 'rich-text', 'advanced']
  },
  {
    id: 'html-081',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the effect of the formnovalidate attribute on a <button type="submit"> inside a form that otherwise has required fields?',
    options: [
      'It permanently disables validation for the entire form, for every future submission',
      'It causes that specific submit button to bypass the form\u2019s constraint validation for this one submission only (e.g. for a "Save as draft" button), while other submit buttons in the same form still trigger normal validation',
      'It removes the required attribute from all fields in the DOM',
      'It has no effect unless novalidate is also set on the <form> element'
    ],
    correctAnswer: 'It causes that specific submit button to bypass the form\u2019s constraint validation for this one submission only (e.g. for a "Save as draft" button), while other submit buttons in the same form still trigger normal validation',
    explanation: 'This lets a single form have two submit buttons with different validation behavior — <button formnovalidate>Save Draft</button> can submit an incomplete form for later editing, while a normal <button type="submit">Publish</button> in the same form still enforces required fields, without needing separate forms or JavaScript workarounds.',
    tags: ['forms', 'formnovalidate', 'validation', 'advanced']
  },
  {
    id: 'html-082',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'What performance mistake occurs when using <link rel="preload" href="script.js"> without specifying the "as" attribute?',
    options: [
      'The browser refuses to fetch the resource at all without "as"',
      'Without "as", the browser cannot determine the correct request priority, mime-type-appropriate Accept header, or CSP resource type to apply, which commonly results in the resource being fetched twice — once as a generic preload, and again as its actual typed request — negating the intended optimization',
      '"as" only affects the resource\u2019s visual rendering, not fetching',
      'Preload without "as" is functionally identical to using "as=script" by default in every browser'
    ],
    correctAnswer: 'Without "as", the browser cannot determine the correct request priority, mime-type-appropriate Accept header, or CSP resource type to apply, which commonly results in the resource being fetched twice — once as a generic preload, and again as its actual typed request — negating the intended optimization',
    explanation: 'The "as" attribute is not merely descriptive — it determines caching key matching, request priority, and Accept headers, so <link rel="preload" href="script.js" as="script"> is required for the browser to later match the actual <script src="script.js"> request against the same cache entry, and forgetting it is a very common real-world performance regression that shows up as a duplicate download in DevTools.',
    tags: ['performance', 'preload', 'gotchas', 'advanced']
  },
  {
    id: 'html-083',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Security',
    question: 'Why do most modern browsers ignore autocomplete="off" specifically on username and password fields, despite honoring it on other form fields?',
    options: [
      'Browsers actually fully respect autocomplete="off" on password fields in every case',
      'Password managers and browsers deliberately override this specific case as a usability and security trade-off, since preventing credential autofill/saving was frequently used by sites in ways that harmed users (forcing manual retyping, discouraging strong unique passwords generated by managers), even though the attribute is honored for most other field types',
      'autocomplete="off" was removed from the HTML spec entirely and has no defined behavior anywhere',
      'It is only ignored on Android devices, not desktop browsers'
    ],
    correctAnswer: 'Password managers and browsers deliberately override this specific case as a usability and security trade-off, since preventing credential autofill/saving was frequently used by sites in ways that harmed users (forcing manual retyping, discouraging strong unique passwords generated by managers), even though the attribute is honored for most other field types',
    explanation: 'This is a well-documented, deliberate browser policy decision (not a spec violation) — Chrome, Firefox, and others explicitly override autocomplete="off" for credential fields because doing otherwise was widely judged to reduce overall account security by discouraging password manager usage and strong generated passwords, even though site authors sometimes have legitimate reasons to want it respected.',
    tags: ['security', 'autocomplete', 'password-managers', 'advanced']
  },
  {
    id: 'html-084',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the practical difference between navigating via a same-page anchor link (<a href="#section">) and using the History API\'s pushState for a single-page application route change?',
    options: [
      'They are functionally identical in every respect including scroll and accessibility behavior',
      'An anchor link triggers native browser behavior — updating the URL fragment, adding a genuinely traversable history entry, and (by default) scrolling to and focusing the target element for accessibility — all without JavaScript; pushState only changes the URL and history entry, leaving scroll position, focus management, and any equivalent of :target styling entirely up to custom application code',
      'pushState automatically manages focus and scroll exactly like anchor navigation with no extra code required',
      'Anchor links cannot update the browser history at all'
    ],
    correctAnswer: 'An anchor link triggers native browser behavior — updating the URL fragment, adding a genuinely traversable history entry, and (by default) scrolling to and focusing the target element for accessibility — all without JavaScript; pushState only changes the URL and history entry, leaving scroll position, focus management, and any equivalent of :target styling entirely up to custom application code',
    explanation: 'SPA frameworks using pushState for route changes must manually reimplement scroll restoration and, critically, focus management (typically moving focus to a heading or main landmark in the new "page") since the browser provides none of this automatically the way it does for a native fragment-link navigation, and forgetting this is a very common SPA accessibility regression.',
    tags: ['history-api', 'accessibility', 'spa', 'progressive-enhancement', 'advanced']
  },
  {
    id: 'html-085',
    topic: 'html',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What accessibility feature does the CSS :focus-visible pseudo-class (as opposed to plain :focus) rely on being expressed correctly in HTML/interaction, and why does it matter for custom components?',
    options: [
      ':focus-visible has no relationship to HTML at all, purely a CSS-internal heuristic',
      'The browser exposes a heuristic (was this focus triggered by keyboard/assistive navigation vs. a mouse click) that :focus-visible relies on, so custom interactive elements built with correct native semantics (or properly managed tabindex/roles) get accurate focus-ring behavior for free, while elements with mismanaged focus handling can produce incorrect or missing focus indicators for keyboard users',
      ':focus-visible always shows an outline for every type of interaction, identical to :focus',
      'It is only usable on <input> elements'
    ],
    correctAnswer: 'The browser exposes a heuristic (was this focus triggered by keyboard/assistive navigation vs. a mouse click) that :focus-visible relies on, so custom interactive elements built with correct native semantics (or properly managed tabindex/roles) get accurate focus-ring behavior for free, while elements with mismanaged focus handling can produce incorrect or missing focus indicators for keyboard users',
    explanation: ':focus-visible was introduced to solve the classic complaint of "ugly" focus rings appearing on mouse click; browsers use input-modality heuristics to show the ring for keyboard/AT navigation while suppressing it for pointer clicks, but this heuristic depends on elements being genuinely, natively focusable — custom components using improper tabindex management or JavaScript-driven fake focus can break this heuristic and leave keyboard users without any visible focus indicator at all.',
    tags: ['accessibility', 'focus-visible', 'css', 'advanced']
  },

  // ─────────────────────────────────────────────
  // MNC LEVEL  (html-086 – html-120)
  // ─────────────────────────────────────────────

  {
    id: 'html-086',
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
    id: 'html-087',
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
    id: 'html-088',
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
    id: 'html-089',
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
    id: 'html-090',
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
    id: 'html-091',
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
    id: 'html-092',
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
    id: 'html-093',
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
    id: 'html-094',
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
    id: 'html-095',
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
    id: 'html-096',
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
    id: 'html-097',
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
    id: 'html-098',
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
    id: 'html-099',
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
    id: 'html-100',
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
    id: 'html-101',
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
    id: 'html-102',
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
    id: 'html-103',
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
    id: 'html-104',
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
    id: 'html-105',
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
  },
  {
    id: 'html-106',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you make a complex data visualization (e.g., an SVG/Canvas-based chart) accessible to screen reader users at scale across a design system used by many product teams?',
    options: [
      'Add a single generic alt text like "chart" to the container and consider it done',
      'Pair every chart with a visually-hidden but programmatically available data table (or a structured text summary) representing the same data, expose the chart container with an appropriate accessible name/description, and provide this as a reusable design-system pattern so teams don\u2019t reinvent it inconsistently',
      'Rely on the chart library\u2019s default tooltips as the sole accessibility mechanism',
      'Convert the entire chart to a static image with no data alternative at all'
    ],
    correctAnswer: 'Pair every chart with a visually-hidden but programmatically available data table (or a structured text summary) representing the same data, expose the chart container with an appropriate accessible name/description, and provide this as a reusable design-system pattern so teams don\u2019t reinvent it inconsistently',
    explanation: 'Canvas-rendered charts are entirely invisible to screen readers, and even SVG charts are often too visually complex to interpret via the accessibility tree alone; a hidden equivalent data table (or well-structured summary) gives screen reader users the same information, and standardizing this as a shared design-system component prevents each team from shipping an inaccessible chart independently.',
    tags: ['accessibility', 'data-visualization', 'design-system', 'system-design', 'mnc']
  },
  {
    id: 'html-107',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you architect the HTML-level offline shell for a large-scale Progressive Web App so users see a meaningful UI immediately even with no network connection?',
    options: [
      'Show a completely blank white page when offline, with no HTML shell at all',
      'Precache a minimal "app shell" HTML/CSS/JS bundle via a service worker on first visit, serve that cached shell instantly on repeat visits (even offline), and progressively fetch/hydrate dynamic content, falling back to a clear offline-state UI when data requests fail',
      'Require the entire application, including all dynamic data, to be cached indefinitely on first load',
      'Rely solely on the browser\u2019s default offline error page with no custom handling'
    ],
    correctAnswer: 'Precache a minimal "app shell" HTML/CSS/JS bundle via a service worker on first visit, serve that cached shell instantly on repeat visits (even offline), and progressively fetch/hydrate dynamic content, falling back to a clear offline-state UI when data requests fail',
    explanation: 'The app-shell architecture separates a small, rarely-changing HTML/CSS/JS "shell" (precached for instant offline availability) from frequently-changing data, which is fetched on demand and gracefully degrades to a clear offline message when unavailable, giving a fast, resilient experience rather than a blank page or generic browser error.',
    tags: ['pwa', 'app-shell', 'offline', 'service-worker', 'system-design', 'mnc']
  },
  {
    id: 'html-108',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you implement a cookie-consent banner across a high-traffic site without causing Cumulative Layout Shift when it appears or disappears?',
    options: [
      'Insert the banner into the DOM dynamically after the rest of the page has already rendered and laid out, with no reserved space',
      'Reserve the banner\u2019s space server-side (rendering its HTML in the initial response, positioned via fixed/sticky positioning or a pre-allocated container) so its appearance doesn\u2019t push or shift existing content, and animate opacity/transform rather than height when dismissing it',
      'Use JavaScript to measure and forcibly re-layout the page every time the banner\u2019s visibility changes',
      'Avoid a consent banner entirely regardless of legal requirements'
    ],
    correctAnswer: 'Reserve the banner\u2019s space server-side (rendering its HTML in the initial response, positioned via fixed/sticky positioning or a pre-allocated container) so its appearance doesn\u2019t push or shift existing content, and animate opacity/transform rather than height when dismissing it',
    explanation: 'Consent banners injected late via JavaScript are a very common, measurable source of poor CLS scores in the field; rendering the banner\u2019s markup as part of the initial HTML (fixed-positioned so it overlays rather than reflows the page) and using transform/opacity-based dismiss animations (which don\u2019t trigger layout) avoids penalizing the page\u2019s Core Web Vitals.',
    tags: ['performance', 'cls', 'consent-banner', 'web-vitals', 'mnc']
  },
  {
    id: 'html-109',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you manage structured data (JSON-LD) markup across thousands of product pages on a large marketplace to maximize rich-result eligibility without introducing inconsistencies?',
    options: [
      'Hand-write a unique JSON-LD block for every individual page manually',
      'Generate JSON-LD server-side from the same canonical data source that renders the visible page content (ensuring the structured data always matches what users actually see), validate it centrally in CI against schema.org/Google\u2019s requirements, and template it consistently across all product page types',
      'Copy a single generic JSON-LD block onto every page regardless of the actual product data',
      'Only add structured data to the homepage, since search engines only read the top-level domain'
    ],
    correctAnswer: 'Generate JSON-LD server-side from the same canonical data source that renders the visible page content (ensuring the structured data always matches what users actually see), validate it centrally in CI against schema.org/Google\u2019s requirements, and template it consistently across all product page types',
    explanation: 'Search engines penalize or ignore structured data that doesn\u2019t match visible page content (a common cause of rich-result eligibility being revoked at scale), so deriving JSON-LD from the exact same data model used to render the page, with automated schema validation in CI, prevents drift between the two as the codebase evolves across thousands of templated pages.',
    tags: ['seo', 'structured-data', 'json-ld', 'system-design', 'mnc']
  },
  {
    id: 'html-110',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you design a critical-CSS delivery strategy for a large multi-template site to speed up first paint without maintaining a brittle, hand-curated critical CSS file per page?',
    options: [
      'Manually author and maintain a separate hand-picked critical CSS file for every unique page template forever',
      'Automate critical-CSS extraction as part of the build/deploy pipeline (per template/route), inline the generated critical styles in the HTML head, and asynchronously load the remaining full stylesheet, re-running extraction automatically whenever templates or styles change',
      'Inline the entire site\u2019s CSS into every page regardless of what is actually needed above the fold',
      'Avoid critical CSS entirely and always render fully unstyled content first'
    ],
    correctAnswer: 'Automate critical-CSS extraction as part of the build/deploy pipeline (per template/route), inline the generated critical styles in the HTML head, and asynchronously load the remaining full stylesheet, re-running extraction automatically whenever templates or styles change',
    explanation: 'Hand-maintained critical CSS drifts out of sync almost immediately as templates evolve; automated extraction tools (run per representative route in CI/build) regenerate the correct above-the-fold styles on every deploy, keeping the inlined critical CSS accurate at scale without ongoing manual curation across many templates.',
    tags: ['performance', 'critical-css', 'build-pipeline', 'system-design', 'mnc']
  },
  {
    id: 'html-111',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'How would you ensure video content across a large platform meets accessibility compliance requirements at the HTML level?',
    options: [
      'Rely on the video platform\u2019s auto-generated captions with no review or fallback',
      'Include <track kind="captions"> (and, where applicable, kind="descriptions" for audio description) with accurate, human-reviewed caption files for every published video, expose a visible captions toggle, and enforce this as a required step in the content publishing pipeline rather than an optional add-on',
      'Embed videos only as unlabeled <iframe> embeds from a third party with no captioning requirements',
      'Provide captions only for videos longer than 10 minutes'
    ],
    correctAnswer: 'Include <track kind="captions"> (and, where applicable, kind="descriptions" for audio description) with accurate, human-reviewed caption files for every published video, expose a visible captions toggle, and enforce this as a required step in the content publishing pipeline rather than an optional add-on',
    explanation: 'Auto-generated captions alone are frequently inaccurate enough to fail accessibility compliance and can misrepresent spoken content; a scalable strategy treats human-reviewed <track> caption files as a mandatory, enforced step of the content pipeline (not an afterthought), ensuring every video meets WCAG requirements for captions before publication regardless of which team uploads it.',
    tags: ['accessibility', 'video', 'captions', 'track', 'compliance', 'mnc']
  },
  {
    id: 'html-112',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a print-friendly HTML/CSS strategy for generating consistent invoices or receipts across browsers and print-to-PDF flows at scale?',
    options: [
      'Design only for screen and assume print output will look acceptable by default',
      'Author a dedicated print stylesheet (via <link media="print"> or @media print rules) that hides non-essential navigation/UI, sets explicit page-break-inside/page-break-before rules on tables and sections to avoid split rows, and test rendering consistency across the specific browsers used for PDF generation in the pipeline',
      'Generate invoices exclusively as pre-rendered images to avoid any CSS print concerns',
      'Rely on users to manually adjust their browser print settings correctly every time'
    ],
    correctAnswer: 'Author a dedicated print stylesheet (via <link media="print"> or @media print rules) that hides non-essential navigation/UI, sets explicit page-break-inside/page-break-before rules on tables and sections to avoid split rows, and test rendering consistency across the specific browsers used for PDF generation in the pipeline',
    explanation: 'Print output has fundamentally different layout constraints (fixed page dimensions, no scrolling, pagination) than screen; explicit print stylesheets controlling page-break behavior for tables/sections prevent invoice line items from being awkwardly split across page boundaries, and testing against whatever headless browser actually generates the PDFs in production catches rendering engine differences early.',
    tags: ['print-stylesheet', 'pdf-generation', 'system-design', 'mnc']
  },
  {
    id: 'html-113',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'On a large international platform with user-generated content in mixed languages/directions (e.g., an Arabic comment embedded in an English thread), what HTML-level approach prevents the bidirectional text algorithm from visually corrupting surrounding punctuation and layout?',
    options: [
      'Strip all non-Latin characters from user-generated content to avoid the issue entirely',
      'Wrap each piece of user-generated content whose direction is unknown at render time in <bdi> (or apply an equivalent Unicode isolation via CSS unicode-bidi: isolate), so its internal direction doesn\u2019t bleed into or scramble the surrounding LTR/RTL context',
      'Force dir="rtl" globally on the entire page whenever any RTL content is present anywhere on it',
      'Manually reverse the character order of RTL strings before inserting them into the DOM'
    ],
    correctAnswer: 'Wrap each piece of user-generated content whose direction is unknown at render time in <bdi> (or apply an equivalent Unicode isolation via CSS unicode-bidi: isolate), so its internal direction doesn\u2019t bleed into or scramble the surrounding LTR/RTL context',
    explanation: 'At scale, a platform can\u2019t predict the direction of every piece of user-generated text ahead of time; systematically wrapping such dynamic content in <bdi> isolates its bidi algorithm behavior from the surrounding sentence, preventing the well-known visual corruption where trailing punctuation or adjacent text gets displayed in the wrong order.',
    tags: ['i18n', 'bidi', 'bdi', 'user-generated-content', 'system-design', 'mnc']
  },
  {
    id: 'html-114',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you ensure consistent, correct keyboard focus indicators across a large design system that mixes native elements (button, input) with custom-built interactive components?',
    options: [
      'Globally disable all focus outlines with outline: none for a "cleaner" look, with no replacement',
      'Standardize on :focus-visible-based styling with a shared, consistently-designed focus ring token applied uniformly to both native and custom components, and require every custom interactive component to be genuinely, natively focusable (real button/tabindex semantics) so the browser\u2019s input-modality heuristic works correctly for it',
      'Apply a permanent, always-visible outline to every interactive element regardless of input method',
      'Let each product team decide their own ad hoc focus-style approach independently'
    ],
    correctAnswer: 'Standardize on :focus-visible-based styling with a shared, consistently-designed focus ring token applied uniformly to both native and custom components, and require every custom interactive component to be genuinely, natively focusable (real button/tabindex semantics) so the browser\u2019s input-modality heuristic works correctly for it',
    explanation: 'Design-system-wide inconsistency in focus styling (or the all-too-common outline:none with no replacement) is one of the most impactful, easily fixed accessibility problems at scale; centralizing on :focus-visible with a shared design token, plus enforcing genuine native focusability for every custom control, ensures keyboard users get a consistent, visible focus indicator across the entire product surface.',
    tags: ['accessibility', 'focus-visible', 'design-system', 'system-design', 'mnc']
  },
  {
    id: 'html-115',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you build a large image-heavy gallery (hundreds of photos) that loads efficiently, avoids layout shift, and still degrades gracefully on slow connections?',
    options: [
      'Load every full-resolution image immediately regardless of viewport visibility',
      'Use loading="lazy" for off-screen images, combine responsive <picture>/srcset for appropriately-sized variants per device, reserve layout space via explicit width/height (or aspect-ratio) to prevent CLS as images load, and show a lightweight low-quality placeholder that swaps to the full image once loaded',
      'Show a spinner for the entire gallery until all images finish downloading',
      'Disable image loading entirely on connections detected as slow'
    ],
    correctAnswer: 'Use loading="lazy" for off-screen images, combine responsive <picture>/srcset for appropriately-sized variants per device, reserve layout space via explicit width/height (or aspect-ratio) to prevent CLS as images load, and show a lightweight low-quality placeholder that swaps to the full image once loaded',
    explanation: 'This combination addresses every dimension of the problem at once: lazy loading avoids fetching hundreds of images upfront, srcset/picture avoids over-fetching oversized images on small/low-DPI screens, explicit dimensions prevent the page from jumping as each image loads, and a blur-up placeholder gives immediate visual feedback even on slow connections rather than a jarring blank gap.',
    tags: ['performance', 'images', 'lazy-loading', 'cls', 'mnc']
  },
  {
    id: 'html-116',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'How would you design permission scoping for dozens of third-party embeds (ads, analytics, chat widgets) from different vendor tiers on a single high-traffic page?',
    options: [
      'Grant every embed the same broad set of iframe/Permissions-Policy allowances for simplicity',
      'Classify vendors into trust tiers, assign each iframe the minimal sandbox tokens and a scoped Permissions-Policy allowlist (e.g. only allow="geolocation" for the one widget that legitimately needs it), and default every other embed to the most restrictive policy that still lets it function',
      'Block all third-party embeds outright regardless of business requirements',
      'Rely on the vendors\u2019 own security practices with no page-level restriction at all'
    ],
    correctAnswer: 'Classify vendors into trust tiers, assign each iframe the minimal sandbox tokens and a scoped Permissions-Policy allowlist (e.g. only allow="geolocation" for the one widget that legitimately needs it), and default every other embed to the most restrictive policy that still lets it function',
    explanation: 'Applying uniform broad permissions to every third-party embed means a single compromised low-trust vendor (e.g. an ad network) inherits capabilities (camera, geolocation, clipboard) it never needed; per-vendor least-privilege scoping via sandbox tokens and the Permissions-Policy allow attribute ensures a breach in one embed can\u2019t leverage capabilities granted only to a different, unrelated widget.',
    tags: ['security', 'iframe', 'permissions-policy', 'third-party', 'system-design', 'mnc']
  },
  {
    id: 'html-117',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'How would you design accessible, internationalized error-message live regions for a form used across many locales with varying text lengths and reading directions?',
    options: [
      'Hardcode a fixed-width error container sized for the English text length and truncate longer translations',
      'Use aria-live="polite" (or role="alert" for critical errors) on a region associated with the field via aria-describedby, size the container with flexible/logical CSS properties rather than fixed physical dimensions, and ensure translated error strings are supplied through the same localization pipeline as the rest of the UI so RTL locales render and announce correctly',
      'Show errors only via a browser alert() dialog for consistency across locales',
      'Skip ARIA live regions for translated locales since screen reader support varies by language'
    ],
    correctAnswer: 'Use aria-live="polite" (or role="alert" for critical errors) on a region associated with the field via aria-describedby, size the container with flexible/logical CSS properties rather than fixed physical dimensions, and ensure translated error strings are supplied through the same localization pipeline as the rest of the UI so RTL locales render and announce correctly',
    explanation: 'Error messages in German or Finnish can be significantly longer than their English equivalents, so fixed-width containers sized for one locale will truncate or overflow in others; combining proper live-region semantics with logical (flow-relative) CSS sizing and a shared localization pipeline ensures the accessible error experience is consistent and correctly announced regardless of language or text direction.',
    tags: ['accessibility', 'i18n', 'aria-live', 'forms', 'system-design', 'mnc']
  },
  {
    id: 'html-118',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you generate and maintain an accurate sitemap plus structured markup for a large, constantly-changing online marketplace with millions of listings?',
    options: [
      'Manually update a single static sitemap.xml file whenever someone remembers to do so',
      'Generate sitemaps programmatically (sharded into multiple indexed files per the sitemap protocol\u2019s size limits) directly from the live listings database on a scheduled/event-driven basis, keep per-listing structured data (JSON-LD) in sync with the same underlying data, and monitor search console/crawl stats for indexing anomalies',
      'Submit only the homepage URL to search engines and rely on organic crawling to discover everything else',
      'Regenerate the entire sitemap from scratch on every single listing update regardless of scale'
    ],
    correctAnswer: 'Generate sitemaps programmatically (sharded into multiple indexed files per the sitemap protocol\u2019s size limits) directly from the live listings database on a scheduled/event-driven basis, keep per-listing structured data (JSON-LD) in sync with the same underlying data, and monitor search console/crawl stats for indexing anomalies',
    explanation: 'The sitemap protocol caps individual files at 50,000 URLs/50MB, so a marketplace with millions of listings needs a sharded sitemap index generated automatically from the canonical listings data (not hand-maintained), updated incrementally as listings change, with structured data kept consistent with the same source of truth to avoid the mismatches that cause search engines to distrust or de-index rich results at scale.',
    tags: ['seo', 'sitemap', 'structured-data', 'system-design', 'mnc']
  },
  {
    id: 'html-119',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you roll out Declarative Shadow DOM for server-rendered web components across a large product surface while maintaining compatibility with browsers/crawlers that may not support it?',
    options: [
      'Assume universal support and ship declarative shadow DOM with no fallback path whatsoever',
      'Feature-detect support, provide a client-side polyfill/hydration fallback that constructs the shadow root via JavaScript for unsupported browsers, and verify that crawlers/bots used for SEO and social-preview rendering correctly process (or gracefully degrade for) the declarative shadow root markup',
      'Avoid Shadow DOM entirely for any server-rendered content to sidestep the issue',
      'Only ship declarative shadow DOM to users on the very latest browser version, blocking all others from the page'
    ],
    correctAnswer: 'Feature-detect support, provide a client-side polyfill/hydration fallback that constructs the shadow root via JavaScript for unsupported browsers, and verify that crawlers/bots used for SEO and social-preview rendering correctly process (or gracefully degrade for) the declarative shadow root markup',
    explanation: 'Rolling out a relatively new platform feature at scale requires graceful degradation: detecting native support and falling back to a JS-based shadow root attachment for older browsers, while also specifically validating that search engine crawlers and social-media preview scrapers (which may use varying rendering engines) handle the new markup correctly, since a silent SEO/preview regression across a large site can be costly and hard to detect quickly.',
    tags: ['declarative-shadow-dom', 'web-components', 'ssr', 'system-design', 'mnc']
  },
  {
    id: 'html-120',
    topic: 'html',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design HTML delivery and hydration boundaries for a large e-commerce homepage combining highly dynamic (personalized recommendations), semi-dynamic (inventory badges), and mostly-static (navigation, footer) content, to optimize both Time to Interactive and correctness?',
    options: [
      'Hydrate the entire page as a single monolithic client-side application regardless of which parts are actually interactive',
      'Server-render the full page for fast first paint and SEO, then selectively hydrate only the genuinely interactive islands (recommendation carousel, add-to-cart buttons) while leaving static regions (nav, footer) as plain HTML with no hydration cost, streaming in the most personalized/volatile sections last so they don\u2019t block the initial response',
      'Render the entire page client-side from an empty shell to simplify the mental model, accepting a slower Time to Interactive',
      'Avoid server-side rendering entirely to reduce backend complexity, regardless of the SEO and performance trade-off'
    ],
    correctAnswer: 'Server-render the full page for fast first paint and SEO, then selectively hydrate only the genuinely interactive islands (recommendation carousel, add-to-cart buttons) while leaving static regions (nav, footer) as plain HTML with no hydration cost, streaming in the most personalized/volatile sections last so they don\u2019t block the initial response',
    explanation: 'A partial/islands hydration strategy avoids paying the JavaScript execution cost of hydrating static markup (nav, footer) that never needs interactivity, concentrates hydration work only where genuinely needed, and streaming the most personalized (and often slowest to compute) sections after the core page content keeps the overall Time to Interactive low without sacrificing correctness or SEO-critical content.',
    tags: ['system-design', 'ssr', 'hydration', 'islands-architecture', 'performance', 'mnc']
  }
];