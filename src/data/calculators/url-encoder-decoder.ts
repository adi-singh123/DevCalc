import { Calculator } from "@/src/types/calculator";

export const urlEncoderDecoder: Calculator = {
  slug: "url-encoder-decoder",

  name: "URL Encoder Decoder",

  description:
    "Encode and decode URLs instantly. Convert special characters into percent-encoded, URL-safe formats or parse encoded strings back into human-readable text.",

  category: "Developer Tools",

  isPopular: true,

  compareWith: [
    "base64-encoder-decoder",
    "json-formatter",
    "uuid-generator",
  ],

  seo: {
    title: "URL Encoder Decoder - Encode & Decode URLs Online Free",

    description:
      "Free online URL encoder and decoder. Instantly convert query strings, special characters, and parameters to RFC 3986 percent-encoding format or parse them back.",

    keywords: [
      "url encoder",
      "url decoder",
      "url encode online",
      "url decode online",
      "encode url",
      "decode url",
      "url converter",
      "query string encoder",
      "developer tools",
      "url escape characters",
      "percent encoding",
      "rfc 3986 encoder",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Enter URL or Text",
      description:
        "Type or paste your raw URL string, key-value query parameters, or percent-encoded content into the input field.",
      icon: "calculator",
    },
    {
      step: 2,
      title: "Select Operation",
      description:
        "Choose the appropriate action: 'Encode' to secure special characters or 'Decode' to translate them back to plain text.",
      icon: "target",
    },
    {
      step: 3,
      title: "View Processed Output",
      description:
        "The browser instantly handles the string conversion and populates the results terminal without any page reload.",
      icon: "result",
    },
    {
      step: 4,
      title: "Copy Result",
      description:
        "Instantly extract your formatted URL component or plain text stream directly onto your system clipboard with a single click.",
      icon: "list",
    },
  ],

  formula: {
    title: "URL Percent-Encoding Mechanics",

    formula:
      "encodeURIComponent(text) or encodeURI(text)",

    explanation:
      "URL encoding (also known as percent-encoding) translates reserved, unsafe, or non-ASCII characters within a Uniform Resource Identifier into a triplet sequence consisting of the percentage character '%' followed by a two-digit hexadecimal representation of the character's UTF-8 byte value.",

    example: {
      input:
        "https://example.com/search?q=hello world",

      output:
        "https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dhello%20world",
    },

    useCases: [
      "Sanitizing API query parameters",
      "Escaping nested callback redirect URLs",
      "Handling spaces and non-ASCII glyphs in slugs",
      "Formatting form-urlencoded POST requests",
      "Preventing XSS injections via malicious path variables",
    ],
  },

  faqs: [
    {
      question: "What exactly is URL encoding (percent-encoding) and why is it mandatory for web applications?",
      answer:
        "URL encoding, officially designated as percent-encoding under the global RFC 3986 standard, is a data conversion process that maps characters into a safe, reliable format for transmission via the HTTP protocol. Within a standard URL structure, specific characters possess pre-defined, structural functional meanings—such as the forward slash (`/`) separating routing paths, the question mark (`?`) initializing query parameters, and the ampersand (`&`) partitioning distinct key-value pairs. If an asset payload or search string contains these characters naturally (for instance, a product name like 'Toys & Games'), the server's routing middleware will parse them incorrectly, corrupting the query. Percent-encoding replaces these reserved or invalid characters with a specialized triplet sequence consisting of a `%` sign followed by a two-digit hexadecimal byte value.",
    },
    {
      question: "Why do spaces within an address bar transform into '%20' or sometimes a plus sign (+)?",
      answer:
        "The standard Uniform Resource Identifier specification explicitly classifies empty spaces as unsafe characters because they act as delimiters inside legacy terminal configurations and transport layers. To resolve this, spaces must be explicitly escaped. The string sequence `%20` represents the precise hexadecimal representation of a standard space character within the ASCII table (decimal value 32 maps to hex 20). Alternatively, you may observe spaces turning into a plus sign (`+`) when processing HTML form elements configured with the `application/x-www-form-urlencoded` MIME layout. While the plus variant is standard for legacy query block data payloads, modern web applications rely predominantly on `%20` to guarantee cross-compatible processing.",
    },
    {
      question: "What is the operational difference between encodeURI() and encodeURIComponent() inside source code?",
      answer:
        "The fundamental difference lies in which characters the functions are allowed to escape. The generic `encodeURI()` function is designed to serialize an entire, fully formed URL path; because of this, it leaves essential routing markers like `http://`, `https://`, domain names, port paths, and query tags completely untouched. Conversely, `encodeURIComponent()` assumes it is dealing with an isolated query value string. It aggressively converts every non-alphanumeric character it encounters—including slashes, colons, dots, and question marks. If you pass a full URL through `encodeURIComponent()`, the entire structure breaks into an un-routable flat string block, which is the exact behavior required when nesting a callback link inside a query string parameter.",
    },
    {
      question: "Does URL encoding or escaping offer any structural data encryption or security privileges?",
      answer:
        "No, URL encoding does not offer any form of cryptographic data security, masking, or access isolation. It functions purely as a text translation layer designed to preserve layout structure during transit. Anyone can read, intercept, or instantly reverse a percent-encoded URL back into its original plain text format using any browser developer console or online parsing engine. You should never include raw account tokens, user passwords, private encryption salts, or sensitive personal data directly inside an open URL string block, regardless of whether it is encoded.",
    },
    {
      question: "Is input data stored on external servers when using this online URL encoding tool?",
      answer:
        "No data is ever stored, logged, or shared. This tool executes its text transformation logic natively within the JavaScript runtime container hosted directly inside your web browser. No network payloads containing your string buffers are transmitted across the internet to external cloud storage structures, databases, or tracking scripts. This localized processing ensures total privacy, making the interface completely safe for engineering pipelines, sensitive system parameters, and active configuration workflows.",
    },
    {
      question: "What are 'reserved' and 'unreserved' characters according to the internet specifications?",
      answer:
        "The internet standard RFC 3986 splits all characters into two explicit categories. Unreserved characters are safe to include inside any URL sequence without undergoing conversion; this category consists of uppercase and lowercase letters (`A-Z`, `a-z`), numbers (`0-9`), hyphens (`-`), underscores (`_`), periods (`.`), and tildes (`~`). Reserved characters are symbols that serve specific structural purposes inside network addresses. This group includes characters like `:`, `/`, `?`, `#`, `[`, `]`, `@`, `!`, `$`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `;`, and `=`. Whenever these reserved symbols appear as actual text within a data parameter rather than acting as a routing separator, they must be converted into their safe percent-encoded equivalent.",
    },
  ],

  seoContent: `
<h2>The Developer's Technical Guide to URL Encoding and String Serialization</h2>
<p>
  The underlying architecture of the modern web relies entirely on the successful routing of data via Uniform Resource Locators (URLs). However, because network transport components conform to rigid text protocols, passing raw text strings, complex non-ASCII charsets, or special mathematical characters can cause routing errors. 
</p>
<p>
  The <strong>URL encoding protocol</strong> solves this problem. It converts unsafe character sets into a stable, ASCII-compliant format known as <strong>percent-encoding</strong>. This ensures that browsers, reverse proxies, content delivery networks (CDNs), and downstream API gateways can parse and route your query strings without experiencing formatting issues or data loss.
</p>

---

<h2>Deep Dive: The Percent-Encoding Look-Up Index</h2>
<p>
  When a web browser encounters an un-escaped symbol during an API fetch operation, it translates the asset into a specific byte triplet layout. The index table below maps common problematic symbols to their standard, RFC 3986-compliant percent-encoded equivalents:
</p>

<table>
  <thead>
    <tr>
      <th>Literal Symbol</th>
      <th>Hexadecimal Mapping (UTF-8)</th>
      <th>Percent-Encoded Output</th>
      <th>Standard Routing Functionality / Structural Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>Space</code></td>
      <td align="center"><code>0x20</code></td>
      <td align="center"><code>%20</code></td>
      <td>Unsafe character. Often splits commands inside legacy terminal environments.</td>
    </tr>
    <tr>
      <td><code>/</code></td>
      <td align="center"><code>0x2F</code></td>
      <td align="center"><code>%2F</code></td>
      <td>Path segment separator. Delimits structural routing levels.</td>
    </tr>
    <tr>
      <td><code>?</code></td>
      <td align="center"><code>0x3F</code></td>
      <td align="center"><code>%3F</code></td>
      <td>Query string indicator. Separates path scopes from parameters.</td>
    </tr>
    <tr>
      <td><code>&</code></td>
      <td align="center"><code>0x26</code></td>
      <td align="center"><code>%26</code></td>
      <td>Parameter delimiter. Groups independent key-value tokens together.</td>
    </tr>
    <tr>
      <td><code>=</code></td>
      <td align="center"><code>0x3D</code></td>
      <td align="center"><code>%3D</code></td>
      <td>Key-value assignment operator. Binds a parameter label to its input value.</td>
    </tr>
    <tr>
      <td><code>#</code></td>
      <td align="center"><code>0x23</code></td>
      <td align="center"><code>%23</code></td>
      <td>Anchor or fragment identifier. Targets specific UI anchors within a document.</td>
    </tr>
    <tr>
      <td><code>:</code></td>
      <td align="center"><code>0x3A</code></td>
      <td align="center"><code>%3A</code></td>
      <td>Protocol separator (e.g., following <code>https</code>) or port identifier.</td>
    </tr>
    <tr>
      <td><code>%</code></td>
      <td align="center"><code>0x25</code></td>
      <td align="center"><code>%25</code></td>
      <td>Escape flag. Acts as the literal indicator for percent-encoding itself.</td>
    </tr>
  </tbody>
</table>

---

<h2>Encoding vs. Encryption: Understanding Data Formats</h2>
<p>
  A common security pitfall among junior developers is treating URL encoding as a security layer. This assumption can introduce significant cross-site scripting (XSS) vectors or lead to sensitive data exposure. The table below outlines the core differences between these data formats:
</p>

<table>
  <thead>
    <tr>
      <th>Feature Metric</th>
      <th>URL Percent Encoding</th>
      <th>Standard Cryptographic Encryption</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Core Focus</strong></td>
      <td>Ensures data syntax compatibility and routing stability across HTTP streams.</td>
      <td>Ensures data confidentiality by restricting access to authorized keys.</td>
    </tr>
    <tr>
      <td><strong>Algorithmic Complexity</strong></td>
      <td>Low. Performs a simple lookup substitution based on ASCII tables.</td>
      <td>High. Uses advanced mathematics (e.g., AES-256 or RSA bitwise shifting).</td>
    </tr>
    <tr>
      <td><strong>Access Restrictions</strong></td>
      <td>Open standard. Anyone can reverse it instantly without specialized keys.</td>
      <td>Highly secure. Requires the matching secret key or decryption token.</td>
    </tr>
    <tr>
      <td><strong>Data Transformation</strong></td>
      <td>Converts special characters into strings like <code>%20</code> or <code>%3F</code>.</td>
      <td>Scrambles readable data into completely random cipher text blocks.</td>
    </tr>
  </tbody>
</table>

---

<h2>The Critical Importance of URL Escaping in Modern Software Engineering</h2>
<h3>1. Deeply Nested Callbacks and Redirect Links</h3>
<p>
  When building multi-platform workflows (such as OAuth login pages or single sign-on enterprise systems), users are frequently routed away to a third-party domain. Once authenticated, the system needs a redirect path to return them to their original location. This target link is passed as a query string parameter, styled like this:
</p>
<pre>https://auth.provider.com/login?clientId=9821&amp;redirectTo=https://my-app.com/dashboard?tab=billing</pre>
<p>
  Without proper encoding, the server's routing engine gets confused: it struggles to tell if the second <code>?tab=billing</code> parameter belongs to your application or the authentication provider. If you instead process the return parameter through <code>encodeURIComponent()</code>, the structure remains clean, organized, and free of routing conflicts:
</p>
<pre>https://auth.provider.com/login?clientId=9821&amp;redirectTo=https%3A%2F%2Fmy-app.com%2Fdashboard%3Ftab%3Dbilling</pre>

---

<h2>Native Code Implementations Across Core Programming Ecosystems</h2>
<p>
  If you need to move beyond manual conversions using our interactive tool and integrate automated processing directly into your source code, modern development frameworks provide native support:
</p>

<h3>JavaScript ES6 / TypeScript Environment</h3>
<pre>
const queryParam = "Shoes &amp; Apparel - Premium Edition";

// Encode an individual parameter value safely
const safeParam = encodeURIComponent(queryParam);
console.log(safeParam); // Output: Shoes%20%26%20Apparel%20-%20Premium%20Edition

// Decode the parameter value back to plain text
const baseText = decodeURIComponent(safeParam);
console.log(baseText); // Output: Shoes &amp; Apparel - Premium Edition
</pre>

<h3>Python 3 Standard Library</h3>
<pre>
from urllib.parse import quote, unquote

target_string = "search_item=electronics/phones+cases"

# Execute a standard percent-encoding routine
escaped_output = quote(target_string)
print(escaped_output) # Output: search_item%3Delectronics/phones%2Bcases

# Execute a reverse recovery decoding routine
original_input = unquote(escaped_output)
print(original_input)
</pre>

<h3>Go (Golang) Core Packages</h3>
<pre>
package main

import (
	"fmt"
	"net/url"
)

func main() {
	rawPath := "user/profile?status=active &amp; verification=true"

	// Native programmatic URL Query escape routine
	encodedString := url.QueryEscape(rawPath)
	fmt.Println("Encoded Payload:", encodedString)

	// Reverse programmatic URL query unescape routine
	decodedString, _ := url.QueryUnescape(encodedString)
	fmt.Println("Decoded String:", decodedString)
}
</pre>
`,
};