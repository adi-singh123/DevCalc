import type { Calculator } from "@/src/types/calculator";

export const androidUiInspector: Calculator = {
  slug: "android-ui-inspector",
  name: "Android UI Inspector",
  description:
    "Connect an Android phone through USB, capture its current screen and UI hierarchy, and copy Appium, UIAutomator2, XPath, or ADB tap selectors.",
  category: "Developer Tools",
  isPopular: true,
  compareWith: ["json-formatter", "regex-tester", "website-x-ray"],
  editorialIntro:
    "Inspect the screen of an Android phone from desktop Chrome or Edge without uploading device data to DevCalc. The tool combines a live PNG screenshot with Android's UIAutomator hierarchy, highlights the element you select, and produces ready-to-copy locators for Appium, UIAutomator2, XPath, and ADB scripts.",
  benchmarkContext: {
    title: "Local Android inspection through an authenticated ADB session",
    badge: "Browser-side developer tool",
    stat: "4 locator formats · no screenshot upload",
    description:
      "The selected phone communicates directly with the current browser tab through WebUSB. DevCalc does not proxy the ADB session, screenshot, hierarchy XML, or generated selectors through its server.",
    source: "Android UI Automator documentation, WebUSB specification, and Tango ADB WebUSB transport",
    lastUpdated: "October 2026",
  },
  seo: {
    title: "Android UI Inspector - Appium, XPath & ADB Selectors",
    description:
      "Connect an Android phone in Chrome or Edge, inspect its screen and UI hierarchy, and copy Appium, UIAutomator2, XPath and ADB tap selectors.",
    keywords: [
      "android ui inspector",
      "appium inspector online",
      "uiautomator inspector",
      "android xpath generator",
      "adb selector tool",
      "webusb adb",
      "android resource id finder",
      "android element inspector",
      "mobile test automation tool",
    ],
  },
  steps: [
    { step: 1, title: "Prepare the phone", description: "Enable Developer options and USB debugging, connect the phone by USB, and close desktop ADB or Appium tools that are using it.", icon: "list" },
    { step: 2, title: "Connect securely", description: "Use desktop Chrome or Edge, choose the Android device, and approve the USB debugging prompt on the phone.", icon: "target" },
    { step: 3, title: "Inspect the screen", description: "Capture the current screenshot and Android accessibility hierarchy directly through the browser connection.", icon: "calculator" },
    { step: 4, title: "Copy a selector", description: "Click a highlighted element or select it from the hierarchy, then copy the selector needed by your automation script.", icon: "result" },
  ],
  formula: {
    title: "From Android element to working automation",
    formula: "Inspect element -> get stable selector -> build automation action",
    explanation:
      "First inspect the target element and copy its most stable selector. Then place that selector in an Appium, UIAutomator2, or ADB automation step for actions such as click, type, wait, verify, or scroll. Prefer resource ID, followed by accessibility description, visible text, and indexed XPath. Coordinates are included only as a fallback.",
    example: {
      input: "resource-id: com.example:id/login",
      output: "By.ID, \"com.example:id/login\"",
    },
    useCases: [
      "Get selectors: inspect any visible Android element and copy its resource ID, accessibility ID, UIAutomator2 selector, XPath, or fallback ADB tap coordinates.",
      "Build automation: use the copied selector in Appium, Python UIAutomator2, or ADB scripts to click, type, wait for, validate, and navigate through Android app screens.",
    ],
  },
  faqs: [
    { question: "Which browsers support this Android inspector?", answer: "Use a desktop Chromium browser with WebUSB support, such as Google Chrome or Microsoft Edge. Firefox and Safari do not currently expose the WebUSB API required by this tool." },
    { question: "Does DevCalc upload my phone screenshot?", answer: "No. The browser talks directly to the selected USB device. Screenshots, hierarchy XML and generated selectors remain in the current browser tab." },
    { question: "Why is my phone not listed?", answer: "Confirm that USB debugging is enabled, use a data-capable cable, select a USB mode that exposes debugging, and close desktop ADB, Appium or Android Studio sessions that may already claim the device interface." },
    { question: "Why does the phone ask me to allow USB debugging?", answer: "Android requires you to authorize the browser's generated ADB key. Verify the prompt on the connected phone and choose Allow before the connection can finish." },
    { question: "Why are some app elements missing?", answer: "The hierarchy comes from Android UIAutomator accessibility data. Canvas content, games, videos, secure windows and some custom views may not expose individual nodes." },
    { question: "Which selector should I use in an Appium test?", answer: "Prefer a unique resource ID when the app provides one. Accessibility ID is usually the next strongest option. Visible-text and XPath locators can work but may break when content, language, or layout changes. ADB coordinates should be a last resort because they depend on screen size and orientation." },
    { question: "Can this inspect a phone connected to a different computer?", answer: "No. WebUSB can access only a device physically connected to the computer running the supported browser. DevCalc does not create a remote ADB bridge or send commands through its server." },
    { question: "Can I use the inspector while Appium is running?", answer: "Stop the active Appium session first. Appium's UIAutomator2 server and a separate hierarchy dump can compete for the same automation resources, so this tool detects that server and stops before capturing." },
    { question: "Does the tool install an application on my phone?", answer: "No DevCalc application is installed. It uses Android's existing ADB shell, screenshot command, and UIAutomator hierarchy dump after you explicitly authorize the connection." },
    { question: "Will the generated XPath always be unique?", answer: "Not necessarily. A resource ID, description, or text can be repeated by the application. Review the highlighted element and, for production tests, confirm uniqueness in the relevant screen state or add a parent relationship and index in your test code." },
    { question: "How do I disconnect or remove authorization?", answer: "Close the page or unplug the phone to end the active connection. To remove the saved ADB trust relationship, open Android Developer options and choose Revoke USB debugging authorizations." },
  ],
  seoContent: `
<h2>What is an Android UI Inspector?</h2>
<p>An Android UI inspector helps developers and testers understand the controls that make up an application's current screen. A person sees buttons, text fields, cards, menus, and images. An automation framework instead needs machine-readable properties such as a resource ID, accessibility description, class name, visible text, element bounds, or a path through the view hierarchy. This tool displays those two views together: the captured phone screen on one side and the corresponding UIAutomator node hierarchy on the other.</p>
<p>After you select an element, the inspector shows its package, Android class, resource ID, text, content description, screen bounds, clickable state, and scrollable state. It also generates four practical outputs: an Appium locator, a Python UIAutomator2 expression, an XPath, and an ADB tap command using the centre of the element's bounds. The purpose is not merely to display XML. It is to shorten the path from seeing a control on a phone to using a maintainable locator in a real test or automation script.</p>

<h2>How the browser-based Android inspection works</h2>
<p>The connection starts only after you press <strong>Connect phone</strong>. Chrome or Edge opens its own device chooser, and no device can be selected silently by the page. Once you choose the Android phone, the browser creates an ADB connection through WebUSB. Android then displays the normal USB debugging authorization prompt. You must approve that prompt on the physical phone before the browser can run inspection commands.</p>
<p>When you press <strong>Inspect screen</strong>, the tool requests a PNG screenshot and asks Android UIAutomator to dump the active accessibility hierarchy. It parses that hierarchy in the browser, matches each node's bounds to the screenshot, and builds the searchable tree. Moving over the screenshot highlights the smallest element containing the pointer. Clicking locks the selection so you can inspect its attributes and copy a locator.</p>
<p>This is a snapshot rather than continuous screen mirroring. If the app changes, navigate on the phone and press Inspect screen again. Snapshot-based inspection keeps the workflow focused and avoids running a permanent video stream or remote-control service.</p>

<h2>Requirements before connecting your Android phone</h2>
<ul>
  <li>Use a desktop version of Google Chrome or Microsoft Edge with WebUSB enabled.</li>
  <li>Open DevCalc over HTTPS. WebUSB is restricted to secure browser contexts.</li>
  <li>Enable Developer options and USB debugging on the Android phone.</li>
  <li>Use a USB cable that carries data; charge-only cables cannot expose the debugging interface.</li>
  <li>Unlock the phone and keep its screen awake while approving the debugging prompt.</li>
  <li>Close Android Studio, desktop ADB, Appium, scrcpy, or another program if it has exclusively claimed the USB interface.</li>
</ul>
<p>On some Windows computers, the phone manufacturer's USB or ADB driver must be installed before the browser can see the debugging interface. If the browser chooser is empty, first confirm that the cable and USB debugging work on that computer, then reconnect the device and try again.</p>

<h2>How to use the Android UI Inspector</h2>
<h3>1. Prepare the screen you want to inspect</h3>
<p>Open the target application on the phone and navigate to the exact state used by your test. Expand the menu, open the dialog, or focus the input if that state affects which controls Android exposes. An inspector can describe only the hierarchy that exists at capture time.</p>
<h3>2. Connect and authorize the device</h3>
<p>Choose Connect phone, select the device in the browser window, and approve the RSA debugging prompt on Android. Read the computer identity shown by Android before accepting it. On a shared or untrusted machine, avoid selecting the option that permanently remembers the computer.</p>
<h3>3. Capture the current interface</h3>
<p>Choose Inspect screen. The page displays the screenshot and hierarchy when both are available. If the application moves or animates while the two captures are being taken, inspect again after the screen becomes stable so the node bounds align with the image.</p>
<h3>4. Select and verify an element</h3>
<p>Point to the visible control or search the tree by text, ID, description, or class. The blue overlay shows the element under the pointer, while the yellow overlay marks the selected element. Check that the bounds and attributes belong to the intended control rather than a large parent container.</p>
<h3>5. Copy the most stable locator</h3>
<p>Copy the resource-ID or accessibility-based locator when one is available. Before placing it in a test suite, confirm that it identifies the intended element uniquely and remains the same after reopening the screen. Generated output is a strong starting point, but the application decides whether its IDs, labels, and hierarchy are stable.</p>

<h2>Android selector priority and trade-offs</h2>
<h3>Resource ID</h3>
<p>A resource ID such as <code>com.example:id/sign_in</code> is normally the first choice. It is explicit, fast for automation frameworks to locate, and independent of physical screen coordinates. IDs can still change during application refactoring, and repeated list layouts can contain multiple elements with the same ID, so uniqueness must be checked in context.</p>
<h3>Accessibility ID or content description</h3>
<p>Appium maps an Android content description to an accessibility-ID locator. This is often stable and encourages accessible application design. It is especially useful for icon-only controls that have no visible text. The description should be meaningful and unique rather than a visual instruction such as "blue button."</p>
<h3>Visible text</h3>
<p>Text locators are readable and convenient for prototypes, but they can change with copy edits, user data, localization, capitalisation, or whitespace. They are best used when the text is intentional, predictable, and scoped to the correct part of the interface.</p>
<h3>XPath</h3>
<p>XPath can express relationships that a single attribute cannot, including parent, child, class, and index conditions. A short attribute-based XPath may be reasonable. A long absolute path through many containers is fragile because inserting one wrapper can invalidate it. Prefer the smallest expression that distinguishes the control.</p>
<h3>ADB tap coordinates</h3>
<p>The generated ADB command taps the centre of the reported bounds. Coordinates are helpful for quick device diagnostics or controls that expose no usable node, but they are tied to resolution, orientation, display scaling, keyboard state, and layout. They should be treated as a fallback rather than the default locator strategy.</p>

<h2>Two main uses: get selectors and build automation</h2>
<h3>1. Get the correct selector from the Android screen</h3>
<p>Open the required app screen, inspect it, and click the exact button, input, menu, card, or list item you want to automate. The tool maps that visual position to the smallest matching UIAutomator node and shows its resource ID, text, accessibility description, class, package, bounds, clickability, and scrollability. You can then copy the Appium locator, UIAutomator2 expression, XPath, or ADB tap command instead of guessing it manually.</p>
<p>This is useful both when creating a new script and when repairing an existing script after an app update. If a locator stopped working, inspect the new screen and compare the current resource ID, text, description, and hierarchy with the old selector. Prefer the most stable unique attribute and use XPath or coordinates only when the application exposes no better option.</p>
<h3>2. Build Android automation with the copied selector</h3>
<p>Paste the copied selector into an Appium or Python UIAutomator2 script and attach the required action. A login flow might wait for a username field, type text, locate the password field, type the password, and click the sign-in button. A Gmail workflow might open the search field, enter a sender, wait for a matching message, open it, and locate a call-to-action button. The inspector supplies the element locator; your automation code defines the action, wait conditions, error handling, and sequence.</p>
<p>Selectors can support actions such as click, long-click, type, clear, wait until visible, verify text, check enabled state, swipe to an element, or confirm that a screen opened successfully. For maintainable automation, group selectors by screen or page object, add explicit waits instead of fixed sleeps, and verify each important transition before continuing to the next step.</p>

<h2>Privacy and security</h2>
<p>The ADB transport, screenshot bytes, hierarchy XML, element search, and selector generation run in the browser tab. DevCalc does not provide a server endpoint for this inspection data. The page cannot connect before you press the connection button, choose a device through the browser's protected prompt, and authorize debugging on Android.</p>
<p>ADB access is powerful. Inspect only devices you own or are authorized to test, and connect them only on a computer you trust. Screenshots and UI hierarchies can contain messages, account names, one-time codes, or other private information visible in the active application. Close the tab when finished. On an untrusted computer, revoke USB debugging authorizations from Android Developer options after disconnecting.</p>

<h2>Troubleshooting connection and hierarchy problems</h2>
<h3>The phone does not appear in the browser chooser</h3>
<p>Try a different data-capable cable or USB port, unlock the phone, turn USB debugging off and on, and reconnect it. Confirm that the browser is Chrome or Edge on a desktop computer. Close software that may own the ADB interface. Windows may also require the correct manufacturer or ADB USB driver.</p>
<h3>The connection waits for authorization</h3>
<p>Look at the physical phone for the USB debugging dialog. If no dialog appears, disconnect the cable, revoke existing USB debugging authorizations, reconnect, and start the browser connection again. Do not approve a key when you do not recognise or trust the computer.</p>
<h3>Appium is controlling the phone</h3>
<p>The inspector deliberately stops when it detects the Appium UIAutomator2 server. End the Appium session and then capture the hierarchy. Running a second hierarchy tool during active automation can interrupt instrumentation and produce transport errors that look like selector failures.</p>
<h3>The screenshot appears but controls are absent</h3>
<p>Some games, video surfaces, WebViews, custom canvases, secure windows, and heavily customised components do not expose their internal visual content as normal UIAutomator nodes. You may see one large container instead of each visible item. In those cases, work with application developers to add accessibility semantics or use a testing method designed for that rendering technology.</p>
<h3>The highlight does not align with the screen</h3>
<p>Animations, rotation, a newly opened keyboard, or a changing status bar can cause the screenshot and hierarchy snapshots to represent slightly different moments. Wait until the layout is still and inspect again. Also keep the phone orientation unchanged until you finish selecting the element.</p>

<h2>Limitations of an online Android UI inspector</h2>
<p>WebUSB support is browser- and platform-dependent, and the tool requires physical access to the connected device. It does not inspect an Android emulator running on a remote service, connect through DevCalc's server, execute a complete test suite, record gestures, or guarantee that a generated locator is unique. It also cannot expose information that Android omits from its accessibility hierarchy.</p>
<p>The tool is designed for inspection and locator discovery. Test reliability still depends on application state management, waits, permissions, animations, network responses, device configuration, and the assertions in your automation framework. Treat generated selectors as inputs to a well-structured test rather than as a replacement for test design.</p>

<h2>Technical references</h2>
<p>The hierarchy is based on Android UI Automator concepts documented by <a href="https://developer.android.com/training/testing/other-components/ui-automator" target="_blank" rel="noopener noreferrer">Android Developers</a>. Direct USB access uses the browser capability described by the <a href="https://wicg.github.io/webusb/" target="_blank" rel="noopener noreferrer">WebUSB specification</a>, with the open-source <a href="https://github.com/yume-chan/ya-webadb" target="_blank" rel="noopener noreferrer">Tango ADB</a> transport used by this implementation.</p>
  `,
};
