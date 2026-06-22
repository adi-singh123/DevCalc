import { Calculator } from "@/src/types/calculator";

export const jwtDecoder: Calculator = {
  slug: "jwt-decoder",

  name: "JWT Decoder",

  description:
    "Decode JWT tokens online and view header, payload, expiration time, issued time, and token details instantly.",

  category: "Developer Tools",

  isPopular: true,

  seo: {
    title: "JWT Decoder - Decode JWT Tokens Online Free",

    description:
      "Free JWT Decoder tool to decode JWT tokens and inspect headers, payloads, expiration dates, and claims instantly.",

  keywords: [
  "jwt decoder",
  "jwt token decoder",
  "decode jwt online",
  "jwt parser",
  "jwt validator",
  "jwt token reader",
  "jwt payload decoder",
  "jwt debugger",
  "jwt claims viewer",
  "jwt online tool",

  // Additional SEO Keywords
  "json web token decoder",
  "jwt decode tool",
  "jwt token parser",
  "jwt token analyzer",
  "jwt token inspector",
  "jwt payload viewer",
  "jwt header decoder",
  "jwt claim decoder",
  "jwt signature validator",
  "jwt verification tool",
  "jwt token checker",
  "jwt token analyzer online",
  "decode bearer token",
  "jwt authentication token decoder",
  "jwt access token decoder",
  "jwt refresh token decoder",
  "jwt token information viewer",
  "jwt token details checker",
  "jwt token payload reader",
  "jwt debug token",
  "jwt token validation tool",
  "online jwt parser",
  "online jwt validator",
  "jwt decode without login",
  "free jwt decoder",
  "jwt decoder free",
  "jwt token extractor",
  "jwt token inspector online",
  "jwt token claim viewer",
  "jwt header payload decoder",
  "jwt decode base64 token",
  "jwt security testing tool",
  "jwt token troubleshooting",
  "jwt authentication debugger",
  "decode json web token online",
  "jwt token breakdown",
  "jwt token decode and verify"
]
  },

  steps: [
    {
      step: 1,
      title: "Paste JWT Token",
      description: "Paste your JWT token into the input field.",
      icon: "calculator",
    },

    {
      step: 2,
      title: "Decode Token",
      description: "Click Decode JWT to extract token information.",
      icon: "calculator",
    },

    {
      step: 3,
      title: "View Claims",
      description:
        "Inspect header, payload, expiration time, and issued-at details.",
      icon: "result",
    },
  ],

  formula: {
    title: "JWT Structure",

    formula: "Header.Payload.Signature",

    explanation:
      "JWT (JSON Web Token) consists of three Base64URL encoded parts: Header, Payload, and Signature.",

    example: {
      input: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      output: "Decoded Header & Payload",
    },

    useCases: [
      "Authentication",
      "Authorization",
      "API Security",
      "SSO",
      "Identity Management",
    ],
  },

  faqs: [
    {
      question: "What is JWT?",
      answer:
        "JWT stands for JSON Web Token, a compact format used for securely transmitting information between parties.",
    },

    {
      question: "Can I decode a JWT without the secret key?",
      answer:
        "Yes. A JWT can be decoded without the secret key because the header and payload sections are only Base64URL encoded, not encrypted. Anyone who has access to the token can view the claims stored inside it using a JWT Decoder. However, decoding a token is different from verifying it. While you can read the contents, you cannot confirm whether the token is genuine or has been tampered with unless you verify the signature using the correct secret key or public key. Developers often decode tokens during debugging to inspect user roles, expiration times, and authentication claims.",
    },
    {
      question: "What is the difference between decoding and validating a JWT?",
      answer:
        "Decoding a JWT simply converts the encoded header and payload into a human-readable JSON format. Validation goes much further by checking the token signature, expiration date, issuer, audience, and other security requirements. A decoded token may look valid but could still be forged or modified. Production applications should always validate JWTs on the server before granting access to protected resources. JWT Decoders are useful for development and debugging, while JWT validation is required for application security.",
    },
    {
      question: "Why is my JWT token showing as expired?",
      answer:
        "JWT tokens commonly contain an 'exp' claim that defines the expiration timestamp. Once the current time exceeds this value, authentication systems reject the token even though it can still be decoded and inspected. Expired tokens are often caused by short session durations, clock synchronization issues between systems, or applications failing to refresh tokens before expiration. Developers can use a JWT Decoder to inspect the expiration claim and determine whether the token has simply expired or if another authentication problem exists.",
    },
    {
      question: "What information should never be stored inside a JWT payload?",
      answer:
        "JWT payloads should never contain sensitive information such as passwords, credit card numbers, API secrets, private encryption keys, banking information, or confidential personal data. Since JWT payloads can be decoded by anyone possessing the token, they should only contain information that is safe to expose to the client. Best practice is to store only identifiers, roles, permissions, and non-sensitive claims. If sensitive information must be transmitted, it should be encrypted separately and handled through secure backend systems.",
    },
    {
      question: "Is JWT authentication better than session authentication?",
      answer:
        "JWT authentication and session authentication each have advantages depending on the application architecture. JWTs are stateless, highly scalable, and work well with APIs, microservices, mobile applications, and distributed systems. Session authentication stores user state on the server and can be easier to invalidate immediately. JWTs are generally preferred for modern API-driven applications, while sessions remain common in traditional web applications. The best choice depends on scalability requirements, security needs, infrastructure design, and user experience considerations.",
    },
  ],
  seoContent: `
<h2>What is a JWT Decoder?</h2>

<p>
A JWT Decoder is a developer tool used to inspect and read the contents of a JSON Web Token (JWT). JWTs are widely used in modern web applications, APIs, mobile applications, microservices, and authentication systems to securely transmit information between parties.
</p>

<p>
A JWT token consists of three Base64URL-encoded sections separated by dots:
</p>

<p>
<strong>Header.Payload.Signature</strong>
</p>

<p>
Using a JWT Decoder, developers can instantly view token claims, expiration dates, issuer information, user identifiers, roles, permissions, and other payload data without manually decoding Base64 values.
</p>

<h2>Understanding JWT Structure</h2>

<table>
<tr>
<th>Part</th>
<th>Purpose</th>
</tr>

<tr>
<td>Header</td>
<td>Contains token type and signing algorithm.</td>
</tr>

<tr>
<td>Payload</td>
<td>Contains user claims and application data.</td>
</tr>

<tr>
<td>Signature</td>
<td>Used to verify token authenticity.</td>
</tr>
</table>

<p>
A typical JWT looks like:
</p>

<pre>
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.
eyJ1c2VySWQiOjEyMywicm9sZSI6ImFkbWluIiwiZXhwIjoxNzU2MDAwMDAwfQ
.
signature
</pre>

<p>
Each section contains important information that helps applications verify identity and permissions.
</p>

<h2>JWT Header Explained</h2>

<p>
The header usually contains the token type and the algorithm used to generate the signature.
</p>

<pre>
{
  "alg": "HS256",
  "typ": "JWT"
}
</pre>

<p>
The <strong>alg</strong> field specifies the signing algorithm, while the <strong>typ</strong> field identifies the token type as JWT.
</p>

<h2>JWT Payload Explained</h2>

<p>
The payload contains claims. Claims are pieces of information about the authenticated user or application.
</p>

<pre>
{
  "sub": "123456",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "admin",
  "exp": 1756000000
}
</pre>

<p>
Common claims include:
</p>

<ul>
<li><strong>sub</strong> — Subject identifier.</li>
<li><strong>iss</strong> — Token issuer.</li>
<li><strong>aud</strong> — Intended audience.</li>
<li><strong>exp</strong> — Expiration timestamp.</li>
<li><strong>iat</strong> — Issued at timestamp.</li>
<li><strong>nbf</strong> — Not valid before timestamp.</li>
</ul>

<h2>What Does a JWT Decoder Do?</h2>

<p>
A JWT Decoder extracts and displays the header and payload in a human-readable format. Developers commonly use JWT decoders while building authentication systems, debugging login issues, validating API requests, and inspecting user permissions.
</p>

<p>
Unlike JWT verification tools, a decoder only reads the token contents. It does not verify whether the signature is valid.
</p>

<h2>Common Use Cases for JWT Decoding</h2>

<ul>
<li>Debugging authentication problems.</li>
<li>Checking token expiration times.</li>
<li>Viewing user roles and permissions.</li>
<li>Testing OAuth and OpenID Connect integrations.</li>
<li>Inspecting API authorization tokens.</li>
<li>Verifying claims during development.</li>
<li>Working with Firebase Authentication.</li>
<li>Testing Supabase, Clerk, and NextAuth implementations.</li>
</ul>

<h2>JWT Authentication Flow</h2>

<p>
Most applications use JWT tokens in the following authentication flow:
</p>

<ol>
<li>User logs into the application.</li>
<li>Server validates credentials.</li>
<li>Server generates a JWT token.</li>
<li>Client stores the token.</li>
<li>Token is sent with API requests.</li>
<li>Server verifies the token signature.</li>
<li>Authorized requests are processed.</li>
</ol>

<p>
This stateless approach allows scalable authentication across distributed systems.
</p>

<h2>Can You Decode a JWT Without the Secret Key?</h2>

<p>
Yes. JWT payloads are encoded, not encrypted. Anyone with access to the token can decode the header and payload.
</p>

<p>
However, the signature cannot be recreated or verified without the correct secret key or public key depending on the algorithm being used.
</p>

<h2>JWT Decoder vs JWT Validator</h2>

<table>
<tr>
<th>Feature</th>
<th>JWT Decoder</th>
<th>JWT Validator</th>
</tr>

<tr>
<td>Read Payload</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr>
<td>Verify Signature</td>
<td>No</td>
<td>Yes</td>
</tr>

<tr>
<td>Check Expiration</td>
<td>Display Only</td>
<td>Validate</td>
</tr>

<tr>
<td>Require Secret Key</td>
<td>No</td>
<td>Often Yes</td>
</tr>
</table>

<h2>Common JWT Errors</h2>

<p>
Developers frequently encounter JWT-related errors:
</p>

<ul>
<li>Token Expired</li>
<li>Invalid Signature</li>
<li>Malformed JWT</li>
<li>Invalid Audience</li>
<li>Invalid Issuer</li>
<li>Unsupported Algorithm</li>
<li>Missing Authorization Header</li>
</ul>

<p>
Using a JWT Decoder makes troubleshooting these issues significantly easier.
</p>

<h2>Security Best Practices</h2>

<ul>
<li>Never store sensitive information in JWT payloads.</li>
<li>Always verify signatures on the server.</li>
<li>Use HTTPS for all token transmission.</li>
<li>Rotate signing secrets regularly.</li>
<li>Implement short expiration times.</li>
<li>Use refresh tokens when appropriate.</li>
<li>Avoid exposing JWTs in URLs.</li>
</ul>

<h2>JWT vs Session Authentication</h2>

<table>
<tr>
<th>Feature</th>
<th>JWT</th>
<th>Session</th>
</tr>

<tr>
<td>Server Storage</td>
<td>No</td>
<td>Required</td>
</tr>

<tr>
<td>Scalability</td>
<td>High</td>
<td>Moderate</td>
</tr>

<tr>
<td>Mobile Friendly</td>
<td>Excellent</td>
<td>Good</td>
</tr>

<tr>
<td>Stateless</td>
<td>Yes</td>
<td>No</td>
</tr>
</table>

<h2>Why Use Our JWT Decoder?</h2>

<p>
Our free JWT Decoder instantly parses JWT tokens and displays readable JSON output for headers and payloads. It works entirely in your browser, ensuring that sensitive tokens never leave your device.
</p>

<p>
Whether you are working with Next.js, React, Node.js, Express, NestJS, Laravel, Django, Spring Boot, Firebase, Supabase, Clerk, or Auth0, this tool helps you inspect JWT claims quickly and safely.
</p>
`,
};
