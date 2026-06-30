/**
 * src/data/interview/nextjs.ts
 * Next.js Interview Questions (90 items)
 * Levels: Beginner (10) → Intermediate (30) → Advanced (30) → MNC (20)
 *
 * Notes:
 * - Option order is shuffled per question (correct answer is NOT always first).
 * - Category "Coding" questions are weighted higher than typical interview banks,
 *   per request, covering App Router, Server Actions, caching, data fetching, etc.
 */

import { InterviewQuestion } from '@/src/types/interview';

export const nextjsQuestions: InterviewQuestion[] = [

  // ─────────────────────────────────────────────
  // BEGINNER  (next-001 – next-010)
  // ─────────────────────────────────────────────

  {
    id: 'next-001',
    topic: 'nextjs',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is Next.js and what core problem does it solve over plain React?',
    options: [
      'A CSS-in-JS library for styling React components',
      'A state management library replacing Redux',
      'A React framework providing routing, rendering strategies (SSR/SSG/ISR), and built-in tooling out of the box',
      'A testing framework for React applications'
    ],
    correctAnswer:
      'A React framework providing routing, rendering strategies (SSR/SSG/ISR), and built-in tooling out of the box',
    explanation:
      'Plain React (via Create React App or Vite) only handles client rendering and leaves routing, data fetching strategy, bundling, and SEO concerns to the developer. Next.js bundles file-based routing, multiple rendering modes, image/font optimisation, and API routes into a single framework.',
    tags: ['overview', 'framework', 'basics']
  },
  {
    id: 'next-002',
    topic: 'nextjs',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'In the App Router, how are routes defined?',
    options: [
      'By registering paths in a next.config.js routes array',
      'By exporting a Router component from _app.tsx',
      'By folder structure under app/, where a folder with a page.tsx file becomes a route',
      'By naming files with a .route.tsx suffix anywhere in src/'
    ],
    correctAnswer:
      'By folder structure under app/, where a folder with a page.tsx file becomes a route',
    explanation:
      'The App Router (introduced in Next.js 13) uses nested folders inside app/. Each folder segment maps to a URL segment, and a page.tsx (or page.js) file inside that folder makes the segment publicly routable. Folders without a page.tsx are not directly accessible as routes.',
    tags: ['app-router', 'routing', 'file-system']
  },
  {
    id: 'next-003',
    topic: 'nextjs',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the purpose of the layout.tsx file in the App Router?',
    options: [
      'It defines the project\'s ESLint configuration',
      'It wraps a route segment and its children with shared UI that persists across navigations without remounting',
      'It only controls the page\'s <head> metadata',
      'It replaces package.json for dependency management'
    ],
    correctAnswer:
      'It wraps a route segment and its children with shared UI that persists across navigations without remounting',
    explanation:
      'layout.tsx wraps the page and any nested layouts/pages below it. Unlike pages, layouts preserve state and do not re-render when navigating between sibling routes, making them ideal for navigation bars, sidebars, and persistent providers.',
    tags: ['layouts', 'app-router', 'ui']
  },
  {
    id: 'next-004',
    topic: 'nextjs',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'By default, what type of component is a file inside the app/ directory?',
    options: [
      'A Server Component',
      'A Client Component',
      'A Web Component',
      'An Edge Function'
    ],
    correctAnswer: 'A Server Component',
    explanation:
      'In the App Router, all components are Server Components by default — they render on the server and ship no JavaScript to the client unless explicitly opted into client rendering with the "use client" directive at the top of the file.',
    tags: ['server-components', 'app-router', 'rendering']
  },
  {
    id: 'next-005',
    topic: 'nextjs',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What directive marks a component as a Client Component?',
    options: [
      '"use server"',
      '"use client"',
      '"use strict"',
      '"client-only"'
    ],
    correctAnswer: '"use client"',
    explanation:
      'Placing "use client" as the first line of a file tells the Next.js compiler that this module (and everything it imports, unless those modules are also explicitly server-only) should be bundled to run in the browser, enabling hooks like useState and browser APIs.',
    tags: ['use-client', 'directives', 'client-components']
  },
  {
    id: 'next-006',
    topic: 'nextjs',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'How do you create a dynamic route that matches /blog/my-post?',
    options: [
      'app/blog/[slug]/page.tsx',
      'app/blog/{slug}/page.tsx',
      'app/blog/:slug/page.tsx',
      'app/blog/(slug)/page.tsx'
    ],
    correctAnswer: 'app/blog/[slug]/page.tsx',
    explanation:
      'Square brackets denote a dynamic segment. app/blog/[slug]/page.tsx matches any single segment under /blog/, and the value is available via the params prop, e.g. params.slug.',
    tags: ['dynamic-routes', 'app-router', 'coding']
  },
  {
    id: 'next-007',
    topic: 'nextjs',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does the next/link component do differently from a plain <a> tag?',
    options: [
      'It opens links in a new tab by default',
      'It performs client-side navigation and can prefetch the linked route\'s code in the background',
      'It disables navigation entirely until JavaScript loads',
      'It automatically adds analytics tracking to every click'
    ],
    correctAnswer:
      'It performs client-side navigation and can prefetch the linked route\'s code in the background',
    explanation:
      'next/link intercepts navigation to perform client-side transitions instead of a full page reload, and by default prefetches the linked page\'s JS chunk when the link enters the viewport (in production), making subsequent navigation feel instant.',
    tags: ['next-link', 'navigation', 'prefetching']
  },
  {
    id: 'next-008',
    topic: 'nextjs',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the role of next.config.js?',
    options: [
      'It stores environment secrets in plain text',
      'It is a JSON schema validated by TypeScript only',
      'It configures framework-level behaviour like redirects, image domains, headers, and build options',
      'It replaces package.json entirely'
    ],
    correctAnswer:
      'It configures framework-level behaviour like redirects, image domains, headers, and build options',
    explanation:
      'next.config.js (or .mjs/.ts) is read at build and dev time to configure things such as allowed remote image domains, custom redirects/rewrites, response headers, experimental flags, and webpack/Turbopack customisation.',
    tags: ['configuration', 'next-config']
  },
  {
    id: 'next-009',
    topic: 'nextjs',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What command starts a Next.js app in development mode?',
    options: [
      'next start',
      'next build',
      'next dev',
      'next serve'
    ],
    correctAnswer: 'next dev',
    explanation:
      'next dev starts the development server with hot reloading and unminified error overlays. next build compiles a production build, and next start serves that production build; next serve is not a real Next.js command.',
    tags: ['cli', 'basics', 'commands']
  },
  {
    id: 'next-010',
    topic: 'nextjs',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'How does Next.js handle static assets like images placed in the public/ folder?',
    options: [
      'They must be imported as ES modules before use',
      'They are inaccessible unless referenced from next.config.js',
      'They are served from the root URL path, e.g. public/logo.png is available at /logo.png',
      'They are automatically converted to WebP at request time only in public/'
    ],
    correctAnswer:
      'They are served from the root URL path, e.g. public/logo.png is available at /logo.png',
    explanation:
      'Anything inside public/ is served verbatim from the site root. This is useful for favicons, robots.txt, and static files that don\'t need processing, as opposed to images run through the next/image component which can live anywhere.',
    tags: ['static-assets', 'public-folder']
  },

  // ─────────────────────────────────────────────
  // INTERMEDIATE  (next-011 – next-040)
  // ─────────────────────────────────────────────

  {
    id: 'next-011',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between Server Components and Client Components?',
    options: [
      'Client Components cannot use props; Server Components can',
      'Server Components render on the server with zero client JS by default and cannot use hooks like useState; Client Components run in the browser and support interactivity and hooks',
      'Server Components are deprecated in favour of Client Components',
      'There is no functional difference, only naming convention'
    ],
    correctAnswer:
      'Server Components render on the server with zero client JS by default and cannot use hooks like useState; Client Components run in the browser and support interactivity and hooks',
    explanation:
      'Server Components can directly access backend resources (databases, file systems) and are excluded from the client bundle, reducing JS shipped to the browser. Client Components are needed wherever you require state, effects, event handlers, or browser-only APIs.',
    tags: ['server-components', 'client-components', 'rendering']
  },
  {
    id: 'next-012',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'How do you fetch data inside a Server Component?',
    options: [
      'Using useEffect with fetch inside it',
      'By calling fetch (or any async data source) directly inside an async component function and awaiting the result',
      'Using getServerSideProps inside the component file',
      'Server Components cannot fetch data; it must be passed down from a Client Component'
    ],
    correctAnswer:
      'By calling fetch (or any async data source) directly inside an async component function and awaiting the result',
    explanation:
      'Because Server Components can be async functions, you simply write: export default async function Page() { const data = await fetch(url).then(r => r.json()); return <List items={data} /> }. No useEffect or special data-fetching API is required.',
    tags: ['data-fetching', 'server-components', 'coding']
  },
  {
    id: 'next-013',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What are Next.js Server Actions?',
    options: [
      'Client-side event handlers compiled to WebAssembly',
      'Asynchronous functions marked with "use server" that run on the server and can be called directly from forms or Client Components without manually creating an API route',
      'A deprecated feature replaced by getServerSideProps',
      'Middleware functions that intercept every request'
    ],
    correctAnswer:
      'Asynchronous functions marked with "use server" that run on the server and can be called directly from forms or Client Components without manually creating an API route',
    explanation:
      'Server Actions let you define server-side mutation logic colocated with your components. They can be passed as a form\'s action prop or invoked as regular async functions from Client Components, and they integrate with revalidation APIs like revalidatePath.',
    tags: ['server-actions', 'mutations', 'forms']
  },
  {
    id: 'next-014',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'How do you define a Server Action and use it in a form?',
    options: [
      "Write an async function with 'use server' at its top (or file top), then pass it as <form action={myAction}>",
      'Define it in next.config.js under the actions key',
      'Export it from middleware.ts and reference it by name',
      'Wrap it in useCallback and pass it via Context'
    ],
    correctAnswer:
      "Write an async function with 'use server' at its top (or file top), then pass it as <form action={myAction}>",
    explanation:
      "async function createPost(formData) { 'use server'; await db.post.create({...}); revalidatePath('/posts'); } can be passed directly as <form action={createPost}>. Next.js progressively enhances this so it also works without JavaScript enabled.",
    tags: ['server-actions', 'forms', 'coding']
  },
  {
    id: 'next-015',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between SSG, SSR, ISR, and CSR in Next.js?',
    options: [
      'They are four names for the same rendering process',
      'SSG renders at build time; SSR renders per-request on the server; ISR is SSG that revalidates after a set interval; CSR renders entirely in the browser after JS loads',
      'ISR only works with the Pages Router and not the App Router',
      'CSR is always faster than SSR for first paint'
    ],
    correctAnswer:
      'SSG renders at build time; SSR renders per-request on the server; ISR is SSG that revalidates after a set interval; CSR renders entirely in the browser after JS loads',
    explanation:
      'Static Site Generation pre-renders HTML at build time for speed. Server-Side Rendering generates HTML per request for fresh, personalised data. Incremental Static Regeneration combines both — static pages that revalidate in the background after a configured time. Client-Side Rendering defers content to client JS execution.',
    tags: ['rendering-strategies', 'ssg', 'ssr', 'isr', 'csr']
  },
  {
    id: 'next-016',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'How do you enable ISR for a page in the App Router?',
    options: [
      'Set export const dynamic = "force-static" only, with no other config',
      'Export a revalidate constant from the route segment, e.g. export const revalidate = 60',
      'Call setInterval inside the component to refetch data',
      'ISR is only configurable via next.config.js, not per-route'
    ],
    correctAnswer:
      'Export a revalidate constant from the route segment, e.g. export const revalidate = 60',
    explanation:
      'export const revalidate = 60 in a page.tsx or layout.tsx tells Next.js to treat the route as static but regenerate it in the background at most once every 60 seconds. fetch() calls within that route inherit this revalidation window unless overridden per-call.',
    tags: ['isr', 'revalidate', 'app-router', 'coding']
  },
  {
    id: 'next-017',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of generateStaticParams?',
    options: [
      'It generates TypeScript types for route params',
      'It pre-renders a list of dynamic route segments at build time, similar to getStaticPaths in the Pages Router',
      'It validates incoming query parameters at runtime',
      'It replaces the need for a [slug] folder entirely'
    ],
    correctAnswer:
      'It pre-renders a list of dynamic route segments at build time, similar to getStaticPaths in the Pages Router',
    explanation:
      'export async function generateStaticParams() { return posts.map(p => ({ slug: p.slug })) } tells Next.js which dynamic segments to statically generate ahead of time, so visitors get pre-rendered HTML instead of waiting for an on-demand render.',
    tags: ['generateStaticParams', 'static-generation', 'dynamic-routes']
  },
  {
    id: 'next-018',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How does Next.js middleware work?',
    options: [
      'It only runs in the browser after hydration',
      'A middleware.ts file at the project root runs before a request completes, allowing rewrites, redirects, and header manipulation at the edge',
      'It is a replacement for Express.js routing',
      'It can only modify the response body, not headers'
    ],
    correctAnswer:
      'A middleware.ts file at the project root runs before a request completes, allowing rewrites, redirects, and header manipulation at the edge',
    explanation:
      'Middleware executes on every matched request (configurable via a matcher export) before the request reaches a route. Common uses include authentication checks, A/B test cookie assignment, locale redirects, and rewriting paths — all running on the Edge Runtime for low latency.',
    tags: ['middleware', 'edge', 'routing']
  },
  {
    id: 'next-019',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'How would you redirect users from middleware based on a missing auth cookie?',
    options: [
      'throw new Error("Unauthorized") inside the page component',
      'In middleware.ts, check request.cookies.get("token") and return NextResponse.redirect(new URL("/login", request.url)) if absent',
      'Use window.location.href inside getServerSideProps',
      'Set a meta refresh tag conditionally in layout.tsx'
    ],
    correctAnswer:
      'In middleware.ts, check request.cookies.get("token") and return NextResponse.redirect(new URL("/login", request.url)) if absent',
    explanation:
      'export function middleware(request) { const token = request.cookies.get("token"); if (!token) return NextResponse.redirect(new URL("/login", request.url)); return NextResponse.next(); } runs before the page renders, avoiding a flash of protected content.',
    tags: ['middleware', 'auth', 'coding']
  },
  {
    id: 'next-020',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between the app/ and pages/ directories?',
    options: [
      'pages/ is newer and recommended for all new projects',
      'app/ uses the App Router with Server Components, layouts, and streaming; pages/ uses the older Pages Router with getStaticProps/getServerSideProps and only Client Components',
      'They cannot coexist in the same project',
      'app/ is only for static export, pages/ for SSR'
    ],
    correctAnswer:
      'app/ uses the App Router with Server Components, layouts, and streaming; pages/ uses the older Pages Router with getStaticProps/getServerSideProps and only Client Components',
    explanation:
      'Both routers can technically coexist during migration. The Pages Router (pages/) predates React Server Components and relies on page-level data-fetching functions. The App Router (app/) is the current recommended approach, supporting nested layouts, streaming, and granular Server/Client Component composition.',
    tags: ['app-router', 'pages-router', 'migration']
  },
  {
    id: 'next-021',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of loading.tsx in the App Router?',
    options: [
      'It configures the loading spinner for the entire app globally only',
      'It defines a fallback UI automatically wrapped in a Suspense boundary for that route segment while its content streams in',
      'It blocks the page from rendering until all data is fetched, the opposite of streaming',
      'It is required in every folder, even if no async work occurs'
    ],
    correctAnswer:
      'It defines a fallback UI automatically wrapped in a Suspense boundary for that route segment while its content streams in',
    explanation:
      'A loading.tsx file in a route segment is automatically used as the fallback for a React Suspense boundary that wraps the segment\'s page and children, enabling instant loading states while async Server Components resolve.',
    tags: ['loading-ui', 'suspense', 'app-router']
  },
  {
    id: 'next-022',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'How do you create a custom 404 page in the App Router?',
    options: [
      'Create a 404.tsx file at the root of app/',
      'Create a not-found.tsx file, optionally per-segment, and call notFound() from "next/navigation" to trigger it',
      'Configure a 404 route inside next.config.js redirects',
      'Throw a generic Error and catch it in error.tsx'
    ],
    correctAnswer:
      'Create a not-found.tsx file, optionally per-segment, and call notFound() from "next/navigation" to trigger it',
    explanation:
      'app/not-found.tsx defines the global 404 UI. Calling notFound() inside a Server Component (e.g. when a database lookup returns nothing) renders the nearest not-found.tsx boundary instead of the page content.',
    tags: ['not-found', 'error-handling', 'coding']
  },
  {
    id: 'next-023',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the next/image component optimise automatically?',
    options: [
      'Only the alt text for accessibility',
      'Automatic resizing, format conversion (WebP/AVIF), lazy loading, and preventing layout shift via required width/height',
      'It only optimises SVG files',
      'It replaces the need for a CDN entirely in every deployment'
    ],
    correctAnswer:
      'Automatic resizing, format conversion (WebP/AVIF), lazy loading, and preventing layout shift via required width/height',
    explanation:
      'next/image serves appropriately sized images per device via an image optimisation API (or loader), converts to modern formats when supported, lazy-loads by default (loading="lazy"), and enforces width/height (or fill) to reserve layout space and avoid CLS.',
    tags: ['next-image', 'performance', 'images']
  },
  {
    id: 'next-024',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How does the next/font module help with performance?',
    options: [
      'It loads all fonts asynchronously after the page is interactive',
      'It self-hosts Google Fonts (or local fonts) at build time, eliminating extra network requests to font CDNs and avoiding layout shift via automatic font fallback metrics',
      'It only works with system fonts',
      'It converts fonts to base64 and inlines them in every component'
    ],
    correctAnswer:
      'It self-hosts Google Fonts (or local fonts) at build time, eliminating extra network requests to font CDNs and avoiding layout shift via automatic font fallback metrics',
    explanation:
      'next/font downloads font files at build time and serves them from your own domain, removing the render-blocking request to fonts.googleapis.com. It also computes size-adjusted fallback fonts to minimise CLS during the font swap.',
    tags: ['next-font', 'performance', 'cls']
  },
  {
    id: 'next-025',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'How do you create a route handler (API endpoint) in the App Router?',
    options: [
      'Add an api.tsx file inside any route folder',
      'Create a route.ts file inside an app/ folder exporting named functions like GET, POST that receive a Request and return a Response',
      'Define handlers inside next.config.js under the api key',
      'Route handlers are not supported in the App Router; use pages/api instead'
    ],
    correctAnswer:
      'Create a route.ts file inside an app/ folder exporting named functions like GET, POST that receive a Request and return a Response',
    explanation:
      'export async function GET(request) { return NextResponse.json({ data: "hello" }) } inside app/api/hello/route.ts defines a GET endpoint at /api/hello. Each HTTP method is its own named export, replacing the single default-export handler style of pages/api.',
    tags: ['route-handlers', 'api', 'coding']
  },
  {
    id: 'next-026',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between the Edge Runtime and the Node.js runtime in Next.js?',
    options: [
      'They are identical; "Edge Runtime" is just marketing for Node.js',
      'The Edge Runtime is a lightweight V8-based environment with a restricted API surface (no native Node modules) optimised for low-latency execution at CDN edge locations; the Node.js runtime offers full Node API access',
      'The Node.js runtime cannot run middleware',
      'The Edge Runtime supports all npm packages without restriction'
    ],
    correctAnswer:
      'The Edge Runtime is a lightweight V8-based environment with a restricted API surface (no native Node modules) optimised for low-latency execution at CDN edge locations; the Node.js runtime offers full Node API access',
    explanation:
      'Edge Runtime functions start faster (no cold-start of a full Node process) and run geographically close to users, but cannot use Node-specific APIs like fs or certain native modules. Middleware runs on the Edge Runtime by default; Route Handlers and Server Components can opt into either runtime via export const runtime.',
    tags: ['edge-runtime', 'node-runtime', 'deployment']
  },
  {
    id: 'next-027',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How does Next.js handle environment variables?',
    options: [
      'All variables in .env files are automatically exposed to the browser',
      'Only variables prefixed with NEXT_PUBLIC_ are inlined into the client bundle; unprefixed variables remain server-only',
      'Environment variables must be passed as CLI flags on every run',
      'Next.js does not support .env files without a third-party package'
    ],
    correctAnswer:
      'Only variables prefixed with NEXT_PUBLIC_ are inlined into the client bundle; unprefixed variables remain server-only',
    explanation:
      'Next.js reads .env, .env.local, .env.production, etc. Variables without the NEXT_PUBLIC_ prefix are only available in server-side code (Server Components, Route Handlers, Server Actions), preventing accidental leakage of secrets to the client bundle.',
    tags: ['env-vars', 'security', 'configuration']
  },
  {
    id: 'next-028',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'How do you read search params (?page=2) inside a Server Component page?',
    options: [
      'Using the useSearchParams hook from "next/navigation" directly in the Server Component',
      'Via the searchParams prop automatically passed to page.tsx, e.g. export default function Page({ searchParams }) { ... }',
      'By parsing window.location.search',
      'Search params are unavailable on the server and must be passed from a Client Component'
    ],
    correctAnswer:
      'Via the searchParams prop automatically passed to page.tsx, e.g. export default function Page({ searchParams }) { ... }',
    explanation:
      'Next.js automatically injects params and searchParams props into page.tsx components. useSearchParams is a Client Component hook that requires "use client" and opts the component (and its boundary) out of static rendering, so the prop approach is preferred for Server Components.',
    tags: ['search-params', 'app-router', 'coding']
  },
  {
    id: 'next-029',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the parallel routes feature (@folder convention) in the App Router?',
    options: [
      'It runs builds in parallel to speed up CI',
      'It allows rendering multiple independent pages within the same layout simultaneously, such as a dashboard with separate slots for analytics and team feed',
      'It is used to define alternate language versions of a route',
      'It duplicates a route for A/B testing automatically'
    ],
    correctAnswer:
      'It allows rendering multiple independent pages within the same layout simultaneously, such as a dashboard with separate slots for analytics and team feed',
    explanation:
      'Folders prefixed with @ (e.g. @analytics, @team) define named slots passed as props to the parent layout. Each slot can have its own loading and error states and can be navigated independently, useful for complex dashboards and modals.',
    tags: ['parallel-routes', 'app-router', 'advanced-routing']
  },
  {
    id: 'next-030',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of intercepting routes (the (.)folder convention)?',
    options: [
      'To block certain routes from being indexed by search engines',
      'To show a route in a different context (e.g. a modal) when navigated to from within the app, while still rendering the full page on a direct visit or refresh',
      'To intercept network requests and cache them',
      'To merge two routes into a single bundle'
    ],
    correctAnswer:
      'To show a route in a different context (e.g. a modal) when navigated to from within the app, while still rendering the full page on a direct visit or refresh',
    explanation:
      'Conventions like (.)photo or (..)photo let you intercept a route so clicking a photo thumbnail opens it in a modal overlay (soft navigation) while the underlying feed stays visible, but a hard refresh or direct URL visit renders the dedicated full page instead — commonly seen in apps like Instagram\'s web client.',
    tags: ['intercepting-routes', 'modals', 'app-router']
  },
  {
    id: 'next-031',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'How do you revalidate cached data on demand after a mutation?',
    options: [
      'Restart the Next.js server process',
      'Call revalidatePath("/posts") or revalidateTag("posts") from a Server Action or Route Handler after the mutation completes',
      'Set revalidate: false in next.config.js',
      'Manually clear the browser cache via document.location.reload(true)'
    ],
    correctAnswer:
      'Call revalidatePath("/posts") or revalidateTag("posts") from a Server Action or Route Handler after the mutation completes',
    explanation:
      'On-demand revalidation purges the cache for a specific path or any fetch requests tagged with a given tag (via fetch(url, { next: { tags: ["posts"] } })), so the next request regenerates fresh content without waiting for the time-based revalidate window.',
    tags: ['revalidation', 'caching', 'coding']
  },
  {
    id: 'next-032',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the metadata API used for in the App Router?',
    options: [
      'Tracking user analytics events',
      'Defining page <head> data such as title, description, and Open Graph tags via a static metadata export or a dynamic generateMetadata function',
      'Storing database connection metadata',
      'Configuring TypeScript compiler options per route'
    ],
    correctAnswer:
      'Defining page <head> data such as title, description, and Open Graph tags via a static metadata export or a dynamic generateMetadata function',
    explanation:
      'export const metadata = { title: "Home", description: "..." } statically sets head tags. export async function generateMetadata({ params }) lets metadata depend on fetched data (e.g. a blog post\'s title), and Next.js merges metadata across nested layouts automatically.',
    tags: ['metadata', 'seo', 'app-router']
  },
  {
    id: 'next-033',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between next/router (Pages Router) and next/navigation (App Router) hooks?',
    options: [
      'They are fully interchangeable in both routers',
      'next/router exposes useRouter for the Pages Router; next/navigation exposes useRouter, usePathname, and useSearchParams designed for the App Router\'s Server/Client Component model',
      'next/navigation is deprecated in favour of next/router',
      'next/navigation only works in middleware'
    ],
    correctAnswer:
      'next/router exposes useRouter for the Pages Router; next/navigation exposes useRouter, usePathname, and useSearchParams designed for the App Router\'s Server/Client Component model',
    explanation:
      'Mixing the two causes runtime errors since their underlying router context differs between the Pages and App Routers. The App Router\'s next/navigation hooks must be used in Client Components ("use client") since they rely on browser-side navigation state.',
    tags: ['routing-hooks', 'migration', 'app-router']
  },
  {
    id: 'next-034',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'How do you handle pending and error states from a Server Action in a form using React hooks?',
    options: [
      'Manually poll a status endpoint every second',
      'Use useFormStatus (for pending state inside a child of the form) and useFormState/useActionState (to capture the action\'s return value, including errors) from React',
      'Use componentDidCatch around the form',
      'Wrap the action in a try/catch inside the JSX directly'
    ],
    correctAnswer:
      'Use useFormStatus (for pending state inside a child of the form) and useFormState/useActionState (to capture the action\'s return value, including errors) from React',
    explanation:
      'useFormStatus() (called inside a component nested in the <form>) exposes { pending } for disabling a submit button. useActionState(action, initialState) wraps a Server Action so its return value (e.g. { error: "Invalid email" }) is accessible in the UI as state.',
    tags: ['server-actions', 'forms', 'react-hooks', 'coding']
  },
  {
    id: 'next-035',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the error.tsx file convention?',
    options: [
      'It logs errors to an external service automatically with no setup',
      'It must be a Server Component that renders a generic message',
      'It defines a Client Component error boundary for a route segment, catching rendering errors in that segment and its children and offering a reset() function to retry',
      'It replaces try/catch entirely across the whole application'
    ],
    correctAnswer:
      'It defines a Client Component error boundary for a route segment, catching rendering errors in that segment and its children and offering a reset() function to retry',
    explanation:
      'error.tsx must include "use client" since React error boundaries are a client-only concept. It receives { error, reset } props — reset() attempts to re-render the segment. A global-error.tsx at the root app/ folder catches errors in the root layout itself.',
    tags: ['error-boundaries', 'app-router', 'error-handling']
  },
  {
    id: 'next-036',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How does route grouping with parentheses, e.g. (marketing), affect the URL?',
    options: [
      'It adds "marketing" as a literal URL segment',
      'It organises routes into a folder for shared layouts or code organisation without affecting the URL path',
      'It blocks the route from being statically generated',
      'It is only valid for API routes'
    ],
    correctAnswer:
      'It organises routes into a folder for shared layouts or code organisation without affecting the URL path',
    explanation:
      'app/(marketing)/about/page.tsx is still served at /about — the parenthesised segment is omitted from the URL. Route groups let you apply a distinct layout to a subset of routes (e.g. (marketing) vs (app)) without nesting them under an extra URL segment.',
    tags: ['route-groups', 'app-router', 'organisation']
  },
  {
    id: 'next-037',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'How would you implement internationalised routing (e.g. /en/about, /fr/about) in the App Router?',
    options: [
      'Use the built-in i18n key in next.config.js exactly as in the Pages Router',
      'Add a [lang] dynamic segment as the root of routable folders, read it in layouts/pages via params.lang, and use middleware to detect and redirect based on Accept-Language',
      'Create a fully separate Next.js app per locale',
      'Internationalisation is not supported in the App Router'
    ],
    correctAnswer:
      'Add a [lang] dynamic segment as the root of routable folders, read it in layouts/pages via params.lang, and use middleware to detect and redirect based on Accept-Language',
    explanation:
      'The App Router does not have the Pages Router\'s built-in i18n config; instead the recommended pattern is app/[lang]/page.tsx, with middleware inspecting the Accept-Language header or a cookie to redirect "/" to the preferred locale, and generateStaticParams returning each supported lang.',
    tags: ['i18n', 'middleware', 'coding']
  },
  {
    id: 'next-038',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is streaming SSR and how does Next.js implement it?',
    options: [
      'Sending the entire HTML document only after all data resolves',
      'Sending the HTML shell immediately and streaming in chunks for each Suspense boundary as their data resolves, so users see content progressively',
      'A video streaming feature built into next/image',
      'Streaming only applies to static exports'
    ],
    correctAnswer:
      'Sending the HTML shell immediately and streaming in chunks for each Suspense boundary as their data resolves, so users see content progressively',
    explanation:
      'By wrapping slow data-dependent components in <Suspense fallback={...}>, Next.js (via React\'s renderToReadableStream) can flush the surrounding layout and fast content first, then stream in the slower parts as separate chunks once ready, improving perceived performance (TTFB and FCP).',
    tags: ['streaming', 'suspense', 'ssr', 'performance']
  },
  {
    id: 'next-039',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does export const dynamic = "force-dynamic" do on a route segment?',
    options: [
      'It forces the route to be statically generated regardless of data fetching',
      'It opts the route out of static rendering, forcing it to be rendered dynamically on every request',
      'It enables ISR with a 0-second revalidation window automatically',
      'It has no effect outside of the Pages Router'
    ],
    correctAnswer:
      'It opts the route out of static rendering, forcing it to be rendered dynamically on every request',
    explanation:
      'By default Next.js tries to statically render a route when possible. Setting dynamic = "force-dynamic" disables that optimisation (similar in effect to using cookies(), headers(), or an uncached fetch), guaranteeing the segment is rendered fresh per request.',
    tags: ['rendering-config', 'dynamic-rendering', 'app-router']
  },
  {
    id: 'next-040',
    topic: 'nextjs',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'How do you opt a specific fetch() call out of the Data Cache while keeping other fetches cached?',
    options: [
      'Pass { cache: "no-store" } as the second argument to that specific fetch call',
      'Set export const dynamic = "force-static" globally',
      'Wrap the fetch call in useEffect',
      'There is no per-call control; caching is all-or-nothing per route'
    ],
    correctAnswer:
      'Pass { cache: "no-store" } as the second argument to that specific fetch call',
    explanation:
      'fetch(url, { cache: "no-store" }) bypasses the Next.js Data Cache for that specific request, while sibling fetch() calls in the same component without this option can still be cached or revalidated independently via { next: { revalidate: N } }.',
    tags: ['caching', 'fetch', 'coding']
  },

  // ─────────────────────────────────────────────
  // ADVANCED  (next-041 – next-070)
  // ─────────────────────────────────────────────

  {
    id: 'next-041',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Explain the four distinct caching layers in the Next.js App Router.',
    options: [
      'There is only one cache: the browser cache',
      'Request Memoization (per-render dedupe), Data Cache (persistent fetch cache across requests/deploys), Full Route Cache (cached rendered output of static routes), and Router Cache (client-side cache of visited route segments)',
      'Server Cache, Client Cache, CDN Cache, and Database Cache',
      'Static Cache and Dynamic Cache, configured globally in next.config.js'
    ],
    correctAnswer:
      'Request Memoization (per-render dedupe), Data Cache (persistent fetch cache across requests/deploys), Full Route Cache (cached rendered output of static routes), and Router Cache (client-side cache of visited route segments)',
    explanation:
      'Request Memoization dedupes identical fetch calls within a single render pass (automatic, React-level). The Data Cache persists fetch results across requests and deployments unless revalidated/opted out. The Full Route Cache stores the rendered HTML/RSC payload for static routes. The Router Cache (client-side) stores visited segment payloads in memory for instant back/forward navigation.',
    tags: ['caching', 'app-router', 'architecture', 'advanced-theory']
  },
  {
    id: 'next-042',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you deduplicate an expensive database call used by multiple Server Components in the same request without using fetch?',
    options: [
      'Store the result in a global mutable variable',
      'Wrap the function with React\'s cache() from "react", which memoises the result per request render for any arguments passed',
      'Use useMemo inside each Server Component',
      'It is impossible without a fetch-based API'
    ],
    correctAnswer:
      'Wrap the function with React\'s cache() from "react", which memoises the result per request render for any arguments passed',
    explanation:
      'import { cache } from "react"; const getUser = cache(async (id) => db.user.findUnique({ where: { id } })); — calling getUser(id) from multiple Server Components in the same render tree triggers only one actual database query, since React deduplicates by arguments within a single request.',
    tags: ['react-cache', 'request-memoization', 'coding', 'advanced']
  },
  {
    id: 'next-043',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the React Server Components (RSC) payload and how does it differ from traditional SSR HTML?',
    options: [
      'It is identical to standard HTML sent over the wire',
      'A special serialised format describing the rendered Server Component tree (including references to Client Component boundaries) that the client can reconcile into the React tree without re-fetching server logic, enabling partial hydration and navigation without full page reloads',
      'A compressed binary format only used during static export',
      'A GraphQL response shape used internally by Vercel'
    ],
    correctAnswer:
      'A special serialised format describing the rendered Server Component tree (including references to Client Component boundaries) that the client can reconcile into the React tree without re-fetching server logic, enabling partial hydration and navigation without full page reloads',
    explanation:
      'Unlike plain SSR HTML (a final string), the RSC payload is a richer, streamable description of the component tree referencing Client Component "holes" by module ID. This lets the client reuse this payload for fast subsequent navigations (Router Cache) and selectively hydrate only the interactive parts.',
    tags: ['rsc', 'payload', 'internals', 'advanced-theory']
  },
  {
    id: 'next-044',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Why can\'t you import a Server Component directly into a Client Component file and render it as a child element?',
    options: [
      'You actually can, with no restrictions whatsoever',
      'Because Client Component modules are bundled for the browser, and Server Components may use server-only APIs (databases, fs) that cannot run client-side; instead Server Components must be passed in as the "children" prop from a parent Server Component',
      'Because TypeScript disallows it at the type level',
      'Because Server Components must always be the root layout'
    ],
    correctAnswer:
      'Because Client Component modules are bundled for the browser, and Server Components may use server-only APIs (databases, fs) that cannot run client-side; instead Server Components must be passed in as the "children" prop from a parent Server Component',
    explanation:
      'The supported pattern is composition via props: a Server Component renders <ClientComponent>{<ServerChild />}</ClientComponent>, passing the already-rendered Server Component as children/props. The Client Component never needs to "import and render" Server Component code itself.',
    tags: ['composition', 'server-components', 'client-components', 'advanced-theory']
  },
  {
    id: 'next-045',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you implement optimistic UI updates with a Server Action?',
    options: [
      'Disable the submit button and wait for the server response with no visual feedback',
      'Use React\'s useOptimistic hook to immediately render a predicted state while the Server Action runs, reverting or reconciling once the actual result returns',
      'Use setTimeout to fake a delay before updating state',
      'Optimistic updates are not possible with Server Actions'
    ],
    correctAnswer:
      'Use React\'s useOptimistic hook to immediately render a predicted state while the Server Action runs, reverting or reconciling once the actual result returns',
    explanation:
      'const [optimisticTodos, addOptimisticTodo] = useOptimistic(todos, (state, newTodo) => [...state, newTodo]); calling addOptimisticTodo before invoking the Server Action shows the new item instantly; once the action resolves and the page revalidates, the real data replaces the optimistic guess.',
    tags: ['use-optimistic', 'server-actions', 'ux', 'coding', 'advanced']
  },
  {
    id: 'next-046',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What security risks are introduced by Server Actions, and how does Next.js mitigate them?',
    options: [
      'Server Actions are fully sandboxed and have no security concerns',
      'Since a Server Action effectively becomes a public, callable HTTP endpoint, it can be invoked directly by anyone who discovers its action ID, so authentication/authorisation must be re-checked inside the action itself; Next.js also encrypts closed-over values and enforces same-origin checks by default',
      'Server Actions automatically inherit the permissions of the user\'s browser session with no developer involvement needed',
      'Server Actions can never accept untrusted input since they only run server-side'
    ],
    correctAnswer:
      'Since a Server Action effectively becomes a public, callable HTTP endpoint, it can be invoked directly by anyone who discovers its action ID, so authentication/authorisation must be re-checked inside the action itself; Next.js also encrypts closed-over values and enforces same-origin checks by default',
    explanation:
      'Server Actions are compiled into POST endpoints with a unique ID, reachable independent of the originating page. Treat them exactly like API routes: validate input, re-check session/authorisation inside the action, and never assume only the rendered UI can invoke them. Next.js adds origin verification and encrypts bound closure arguments to reduce tampering risk.',
    tags: ['security', 'server-actions', 'advanced-theory']
  },
  {
    id: 'next-047',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you implement a fully type-safe Server Action with input validation using Zod?',
    options: [
      'Trust the FormData fields without validation since TypeScript already checks types',
      'Parse FormData into a plain object, validate it with a Zod schema inside the action, and return a discriminated union result ({ success: true, data } | { success: false, errors }) for the client to consume via useActionState',
      'Validate only on the client before calling the action',
      'Use PropTypes inside the Server Action file'
    ],
    correctAnswer:
      'Parse FormData into a plain object, validate it with a Zod schema inside the action, and return a discriminated union result ({ success: true, data } | { success: false, errors }) for the client to consume via useActionState',
    explanation:
      "async function createUser(prevState, formData) { 'use server'; const parsed = userSchema.safeParse(Object.fromEntries(formData)); if (!parsed.success) return { success: false, errors: parsed.error.flatten() }; await db.user.create({ data: parsed.data }); return { success: true }; } — FormData is not type-safe by itself, so runtime validation with Zod closes that gap.",
    tags: ['zod', 'server-actions', 'validation', 'coding', 'advanced']
  },
  {
    id: 'next-048',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does Partial Prerendering (PPR) work in Next.js?',
    options: [
      'It renders half the page on the server and half on the client randomly',
      'It combines a statically prerendered shell with dynamic "holes" (wrapped in Suspense) that are streamed in at request time, so a single route can serve both static speed and dynamic personalisation',
      'It only prerenders pages with fewer than 10 components',
      'It is identical to ISR with a shorter revalidation window'
    ],
    correctAnswer:
      'It combines a statically prerendered shell with dynamic "holes" (wrapped in Suspense) that are streamed in at request time, so a single route can serve both static speed and dynamic personalisation',
    explanation:
      'PPR generates a static shell at build time for the parts of a route that don\'t depend on per-request data, while content wrapped in <Suspense> (e.g. a personalised cart icon) is rendered dynamically and streamed into the static shell on each request, blending the benefits of static and dynamic rendering in one route.',
    tags: ['ppr', 'rendering', 'streaming', 'advanced-theory']
  },
  {
    id: 'next-049',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you implement a route segment config that statically renders most of the page but dynamically streams in a personalised section, using Partial Prerendering?',
    options: [
      'Set dynamic = "force-dynamic" for the whole route and accept the performance cost',
      'Enable the experimental ppr flag, then wrap only the personalised component in <Suspense fallback={<Skeleton />}> while leaving the rest of the page static',
      'Use two separate Next.js apps and an iframe',
      'There is no way to mix static and dynamic content in a single route'
    ],
    correctAnswer:
      'Enable the experimental ppr flag, then wrap only the personalised component in <Suspense fallback={<Skeleton />}> while leaving the rest of the page static',
    explanation:
      'With experimental.ppr enabled in next.config.js, a route segment can export const experimental_ppr = true. Code outside any Suspense boundary is prerendered statically; <Suspense fallback={<Skeleton />}><PersonalizedCart /></Suspense> marks the dynamic hole that streams in using request-specific data like cookies().',
    tags: ['ppr', 'suspense', 'coding', 'advanced']
  },
  {
    id: 'next-050',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does Next.js determine whether a route segment can be statically rendered at build time?',
    options: [
      'It always defaults to dynamic rendering unless explicitly told otherwise',
      'It statically analyses whether the segment uses dynamic functions (cookies(), headers(), searchParams) or uncached data; if none are used, it attempts static rendering, otherwise it falls back to dynamic per-request rendering',
      'It checks a manually maintained list in next.config.js for every route',
      'Static rendering is only available for routes with zero data fetching'
    ],
    correctAnswer:
      'It statically analyses whether the segment uses dynamic functions (cookies(), headers(), searchParams) or uncached data; if none are used, it attempts static rendering, otherwise it falls back to dynamic per-request rendering',
    explanation:
      'During build, Next.js renders each route once to detect dynamic API usage. Calling cookies(), headers(), or using { cache: "no-store" } fetches "opts in" to dynamic rendering for that segment (and bubbles up unless isolated by Suspense with PPR). Otherwise, the output is cached as part of the Full Route Cache.',
    tags: ['static-rendering', 'dynamic-functions', 'build-process', 'advanced-theory']
  },
  {
    id: 'next-051',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you stream a large dataset from a Route Handler to the client using the Web Streams API?',
    options: [
      'Buffer the entire dataset into a single JSON.stringify call before responding',
      'Construct a ReadableStream, enqueue chunks as data becomes available, and return new Response(stream) from the GET handler',
      'Use multiple separate fetch requests from the client in a loop',
      'Route Handlers cannot return streamed responses'
    ],
    correctAnswer:
      'Construct a ReadableStream, enqueue chunks as data becomes available, and return new Response(stream) from the GET handler',
    explanation:
      'export async function GET() { const stream = new ReadableStream({ async start(controller) { for await (const chunk of source) controller.enqueue(encoder.encode(chunk)); controller.close(); } }); return new Response(stream); } lets clients (or AI SDKs) consume data incrementally instead of waiting for the full payload.',
    tags: ['streaming', 'route-handlers', 'web-streams', 'coding', 'advanced']
  },
  {
    id: 'next-052',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does next/dynamic differ from React.lazy for code splitting in Next.js?',
    options: [
      'They are functionally identical with no Next.js-specific benefits',
      'next/dynamic supports server-side rendering of the dynamically imported component (with an optional ssr: false to disable it), built-in loading fallback, and works seamlessly with both Server and Client Components, whereas React.lazy requires a Suspense boundary and is client-only',
      'React.lazy is faster because it avoids any network requests',
      'next/dynamic only works for third-party npm packages'
    ],
    correctAnswer:
      'next/dynamic supports server-side rendering of the dynamically imported component (with an optional ssr: false to disable it), built-in loading fallback, and works seamlessly with both Server and Client Components, whereas React.lazy requires a Suspense boundary and is client-only',
    explanation:
      'const Map = dynamic(() => import("./Map"), { ssr: false, loading: () => <Spinner /> }) is commonly used for browser-only libraries (like map widgets relying on window) that would error during SSR. React.lazy lacks the ssr option and must always be paired with an explicit <Suspense> wrapper.',
    tags: ['next-dynamic', 'code-splitting', 'react-lazy', 'advanced-theory']
  },
  {
    id: 'next-053',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you implement role-based access control across multiple protected route segments efficiently?',
    options: [
      'Duplicate the same auth check in every page.tsx file',
      'Centralise the check in middleware.ts with a matcher config targeting protected path patterns, decode the session token there, and redirect unauthorised users before any route code executes',
      'Check roles only on the client after the page has rendered',
      'Store roles in a global JavaScript variable shared across requests'
    ],
    correctAnswer:
      'Centralise the check in middleware.ts with a matcher config targeting protected path patterns, decode the session token there, and redirect unauthorised users before any route code executes',
    explanation:
      'export const config = { matcher: ["/dashboard/:path*", "/admin/:path*"] } scopes middleware to relevant routes only (avoiding unnecessary overhead on public pages). Inside middleware, verify a JWT/session, check the encoded role claim, and redirect to /403 or /login as needed — far more maintainable than per-page checks.',
    tags: ['rbac', 'middleware', 'auth', 'coding', 'advanced']
  },
  {
    id: 'next-054',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the "waterfall" data-fetching problem in Server Components, and how can it be avoided?',
    options: [
      'It refers to CSS animations slowing down page load',
      'When sequential awaits in nested Server Components fetch data one after another instead of in parallel, increasing total response time; it can be avoided by starting independent fetches concurrently with Promise.all or by initiating fetches before awaiting other unrelated data',
      'It only happens in the Pages Router, never the App Router',
      'It is fixed automatically by enabling ISR'
    ],
    correctAnswer:
      'When sequential awaits in nested Server Components fetch data one after another instead of in parallel, increasing total response time; it can be avoided by starting independent fetches concurrently with Promise.all or by initiating fetches before awaiting other unrelated data',
    explanation:
      'If ComponentA awaits its data, then renders ComponentB which awaits its own unrelated data, the two fetches run sequentially. Instead, kick off both fetch() calls (which return promises immediately) before awaiting either, or use Promise.all([fetchA(), fetchB()]) so they run in parallel, similar to avoiding request waterfalls in any async codebase.',
    tags: ['data-fetching', 'performance', 'waterfalls', 'advanced-theory']
  },
  {
    id: 'next-055',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you preload data for a route before the user navigates to it, to avoid a fetch waterfall on arrival?',
    options: [
      'Call the data-fetching function eagerly (without awaiting) in a parent Server Component or shared module, then await the resulting promise later inside the child that actually needs it',
      'There is no way to preload data ahead of navigation in Next.js',
      'Use next/link\'s prefetch to also prefetch the response body of all API calls automatically',
      'Manually call fetch() in middleware for every possible route'
    ],
    correctAnswer:
      'Call the data-fetching function eagerly (without awaiting) in a parent Server Component or shared module, then await the resulting promise later inside the child that actually needs it',
    explanation:
      'A common "preload" pattern exports a function like export const preload = (id) => { void getUser(id); } (using React\'s cache()-wrapped getUser) called early in a parent component\'s render so the request starts immediately; the actual child component later calls getUser(id) again and receives the already-in-flight (deduplicated) promise.',
    tags: ['preloading', 'data-fetching', 'waterfalls', 'coding', 'advanced']
  },
  {
    id: 'next-056',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does Next.js\'s Image Optimization API work at the infrastructure level when self-hosted (not on Vercel)?',
    options: [
      'It requires no server-side processing at all; everything happens via CSS',
      'A built-in image optimization endpoint (served by the Next.js server) resizes, recompresses, and converts images on demand based on request parameters, then caches results on disk so subsequent requests for the same size/format are served instantly',
      'It uploads all images to a third-party CDN automatically with no configuration',
      'It only works for images stored in cloud storage buckets'
    ],
    correctAnswer:
      'A built-in image optimization endpoint (served by the Next.js server) resizes, recompresses, and converts images on demand based on request parameters, then caches results on disk so subsequent requests for the same size/format are served instantly',
    explanation:
      'When self-hosting, next/image requests route through /_next/image, which uses the sharp library (or a configured custom loader) to transform the source image based on requested width/quality, caching the output in .next/cache/images. On platforms like Vercel, this is replaced by a managed edge image service instead.',
    tags: ['image-optimization', 'self-hosting', 'infrastructure', 'advanced-theory']
  },
  {
    id: 'next-057',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between output: "export" and the default server output mode in next.config.js?',
    options: [
      'They produce identical build artifacts',
      '"export" produces a fully static HTML/CSS/JS bundle with no Node.js server required (disabling features like Server Actions, ISR, and dynamic Route Handlers), while the default mode produces a server that supports the full feature set',
      '"export" is required for every production deployment',
      '"export" only affects the development server, not production builds'
    ],
    correctAnswer:
      '"export" produces a fully static HTML/CSS/JS bundle with no Node.js server required (disabling features like Server Actions, ISR, and dynamic Route Handlers), while the default mode produces a server that supports the full feature set',
    explanation:
      'output: "export" is for deploying to plain static hosts (S3, GitHub Pages) where no server runtime exists. Because there is no server, anything requiring per-request execution — Server Actions, dynamic Route Handlers, ISR background regeneration, Image Optimization API — is unavailable or must be replaced with build-time equivalents.',
    tags: ['static-export', 'deployment', 'output-modes', 'advanced-theory']
  },
  {
    id: 'next-058',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you implement a custom fetch cache tag invalidation strategy for an e-commerce product page that updates on inventory changes?',
    options: [
      'Disable caching entirely for all product pages',
      'Tag the product fetch with next: { tags: [`product-${id}`] }, then call revalidateTag(`product-${id}`) from a webhook Route Handler whenever the inventory system notifies of a stock change',
      'Poll the database every second from the client to check for changes',
      'Restart the server whenever inventory changes'
    ],
    correctAnswer:
      'Tag the product fetch with next: { tags: [`product-${id}`] }, then call revalidateTag(`product-${id}`) from a webhook Route Handler whenever the inventory system notifies of a stock change',
    explanation:
      'fetch(`/api/products/${id}`, { next: { tags: [`product-${id}`] } }) associates that cached entry with a tag. An inventory webhook hits app/api/webhooks/inventory/route.ts, which calls revalidateTag(`product-${id}`), purging just that product\'s cached data without affecting unrelated pages — far more surgical than time-based revalidation alone.',
    tags: ['cache-tags', 'revalidateTag', 'webhooks', 'coding', 'advanced']
  },
  {
    id: 'next-059',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does Next.js handle bundling of third-party npm packages differently for Server vs Client Components?',
    options: [
      'All packages are always bundled identically regardless of where they are imported',
      'Packages imported only by Server Components are excluded from the client JS bundle entirely; if a package uses browser-only APIs but is imported into a Server Component, it will throw at build/runtime unless marked client-only or dynamically imported on the client',
      'Next.js automatically rewrites any package to work in both environments',
      'Client-only packages are silently ignored with no error'
    ],
    correctAnswer:
      'Packages imported only by Server Components are excluded from the client JS bundle entirely; if a package uses browser-only APIs but is imported into a Server Component, it will throw at build/runtime unless marked client-only or dynamically imported on the client',
    explanation:
      'This is part of why splitting client/server boundaries matters for bundle size: a heavy parsing or formatting library used only on the server (e.g. for generating PDFs) never reaches the browser. Conversely, a charting library relying on window must be imported in a "use client" component (often via next/dynamic with ssr: false) to avoid server-side ReferenceErrors.',
    tags: ['bundling', 'server-only', 'client-only', 'advanced-theory']
  },
  {
    id: 'next-060',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you enforce that a module is never accidentally imported into a Client Component (e.g. a database client)?',
    options: [
      'Add a comment at the top of the file warning developers',
      'Import the "server-only" package at the top of the module; any attempt to import it from a Client Component bundle will fail at build time with a clear error',
      'Name the file with a .server.ts extension, which Next.js enforces automatically',
      'There is no way to prevent this; it must be caught in code review'
    ],
    correctAnswer:
      'Import the "server-only" package at the top of the module; any attempt to import it from a Client Component bundle will fail at build time with a clear error',
    explanation:
      'import "server-only" at the top of db.ts throws a build-time error if that module ends up in a client bundle, providing a hard guarantee rather than relying on convention or code review. A complementary "client-only" package exists for the opposite case (browser-only modules accidentally pulled into server code).',
    tags: ['server-only', 'build-safety', 'coding', 'advanced']
  },
  {
    id: 'next-061',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of instrumentation.ts in Next.js?',
    options: [
      'It configures Jest test instrumentation only',
      'It provides a register() hook that runs once when the server starts, used to initialise observability tools (OpenTelemetry, Sentry) before any request is handled',
      'It is used exclusively for Webpack bundle analysis',
      'It replaces middleware.ts entirely'
    ],
    correctAnswer:
      'It provides a register() hook that runs once when the server starts, used to initialise observability tools (OpenTelemetry, Sentry) before any request is handled',
    explanation:
      'export async function register() { if (process.env.NEXT_RUNTIME === "nodejs") { await import("./instrumentation-node"); } } in instrumentation.ts runs at server boot, making it the recommended place to set up tracing SDKs so spans capture the full request lifecycle from the start.',
    tags: ['instrumentation', 'observability', 'opentelemetry', 'advanced-theory']
  },
  {
    id: 'next-062',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you implement rate limiting for a Server Action to prevent abuse?',
    options: [
      'Rely on the browser to prevent rapid form submissions',
      'Use a distributed store (e.g. Redis via Upstash) keyed by user/IP inside the action to track request counts within a sliding window, rejecting the action early if the limit is exceeded',
      'Add a CSS pointer-events: none after one click',
      'Server Actions are automatically rate-limited by Next.js'
    ],
    correctAnswer:
      'Use a distributed store (e.g. Redis via Upstash) keyed by user/IP inside the action to track request counts within a sliding window, rejecting the action early if the limit is exceeded',
    explanation:
      "async function submitVote(formData) { 'use server'; const { success } = await ratelimit.limit(userId); if (!success) return { error: 'Too many requests' }; ... } — since Server Actions are just server endpoints, the same rate-limiting patterns used for traditional APIs (token bucket, sliding window) apply directly.",
    tags: ['rate-limiting', 'server-actions', 'security', 'coding', 'advanced']
  },
  {
    id: 'next-063',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does Next.js Turbopack differ from Webpack in the development workflow?',
    options: [
      'Turbopack is a CSS preprocessor unrelated to bundling',
      'Turbopack is a Rust-based incremental bundler designed for much faster cold starts and HMR updates by caching computation at a function level and only recomputing what actually changed',
      'Turbopack replaces TypeScript entirely',
      'Turbopack only works in production builds, never in dev mode'
    ],
    correctAnswer:
      'Turbopack is a Rust-based incremental bundler designed for much faster cold starts and HMR updates by caching computation at a function level and only recomputing what actually changed',
    explanation:
      'Enabled via next dev --turbo (and increasingly as a default), Turbopack builds an incremental computation graph so that on file change, it only re-executes the affected nodes rather than reprocessing the whole dependency graph like traditional Webpack dev builds, significantly speeding up local iteration on large codebases.',
    tags: ['turbopack', 'bundlers', 'dev-experience', 'advanced-theory']
  },
  {
    id: 'next-064',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you implement a typed, reusable data-fetching layer that works in both Server Components and Route Handlers, with caching tags applied consistently?',
    options: [
      'Copy-paste the fetch call into every component that needs it',
      'Create a single module exporting cache()-wrapped functions that call fetch with consistent next: { tags } options, and import that module from both Server Components and Route Handlers',
      'Duplicate logic separately for Route Handlers using axios and for Server Components using fetch',
      'Use different data sources for Server Components and Route Handlers to avoid coupling'
    ],
    correctAnswer:
      'Create a single module exporting cache()-wrapped functions that call fetch with consistent next: { tags } options, and import that module from both Server Components and Route Handlers',
    explanation:
      'export const getProduct = cache(async (id: string) => { const res = await fetch(`${API}/products/${id}`, { next: { tags: [`product-${id}`] } }); return res.json() as Promise<Product>; }); — both a page.tsx and an app/api/products/[id]/route.ts can import getProduct, ensuring consistent caching/tagging behaviour and full TypeScript inference end-to-end.',
    tags: ['data-layer', 'reusability', 'typescript', 'coding', 'advanced']
  },
  {
    id: 'next-065',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What are the tradeoffs of choosing the Edge Runtime for a Route Handler that needs database access?',
    options: [
      'The Edge Runtime has no tradeoffs and should always be preferred',
      'Edge offers lower latency and faster cold starts, but many traditional database drivers relying on raw TCP sockets are unsupported, requiring HTTP-based or edge-compatible drivers (e.g. Neon\'s serverless driver, PlanetScale\'s HTTP API, or Prisma Accelerate)',
      'Database access is impossible from the Edge Runtime under any circumstances',
      'Edge Runtime functions cannot make any outbound network requests'
    ],
    correctAnswer:
      'Edge offers lower latency and faster cold starts, but many traditional database drivers relying on raw TCP sockets are unsupported, requiring HTTP-based or edge-compatible drivers (e.g. Neon\'s serverless driver, PlanetScale\'s HTTP API, or Prisma Accelerate)',
    explanation:
      'Standard pg or mysql2 drivers depend on Node\'s net/tls modules, unavailable in the Edge Runtime\'s restricted API surface. Edge-compatible alternatives communicate over HTTP/WebSockets instead of raw TCP. The tradeoff is choosing connection compatibility over the latency benefits of edge execution, or adopting an edge-native driver.',
    tags: ['edge-runtime', 'database', 'tradeoffs', 'advanced-theory']
  },
  {
    id: 'next-066',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you set up Cypress/Playwright E2E tests that need to bypass authentication for a protected Next.js route during testing?',
    options: [
      'Disable the auth middleware entirely in production',
      'Use middleware to check for a special test-only header or cookie (only honoured when a server-side secret env var like E2E_TEST_MODE is set) that injects a mocked session',
      'Hardcode test user credentials directly into middleware.ts permanently',
      'E2E tests cannot interact with middleware-protected routes'
    ],
    correctAnswer:
      'Use middleware to check for a special test-only header or cookie (only honoured when a server-side secret env var like E2E_TEST_MODE is set) that injects a mocked session',
    explanation:
      'A common pattern: middleware checks if (process.env.E2E_TEST_MODE === "true" && request.headers.get("x-test-bypass") === secret) { /* attach a mock session */ }. This keeps the bypass disabled in real production (since the env var and secret are only set in the test environment) while letting E2E suites skip slow OAuth flows.',
    tags: ['e2e-testing', 'middleware', 'testing', 'coding', 'advanced']
  },
  {
    id: 'next-067',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does Next.js\'s automatic static optimisation interact with cookies() or headers() calls deep in a component tree?',
    options: [
      'Calling cookies() or headers() anywhere in the tree has no effect on rendering mode',
      'Calling cookies() or headers() opts the entire route into dynamic rendering by default, because it signals a dependency on per-request data; with Partial Prerendering, this can instead be scoped to just the Suspense boundary containing that call',
      'cookies() and headers() can only be called in middleware, never in components',
      'These functions are only available in the Pages Router'
    ],
    correctAnswer:
      'Calling cookies() or headers() opts the entire route into dynamic rendering by default, because it signals a dependency on per-request data; with Partial Prerendering, this can instead be scoped to just the Suspense boundary containing that call',
    explanation:
      'Without PPR, a single cookies() call anywhere in the render tree forces the whole route to render dynamically per request, since Next.js cannot know in advance which output is static vs request-dependent. PPR\'s static analysis instead isolates the dynamic dependency to the nearest Suspense boundary, keeping the rest of the route statically cached.',
    tags: ['dynamic-functions', 'ppr', 'rendering-modes', 'advanced-theory']
  },
  {
    id: 'next-068',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you implement a multi-step checkout flow that persists state across Server Action calls without a full client-side state management library?',
    options: [
      'Store everything in component state, which is lost on page refresh',
      'Persist intermediate step data server-side (database row or encrypted cookie keyed by a checkout session ID) and pass the session ID through hidden form fields or the URL between steps, updating it via each step\'s Server Action',
      'Pass all state as Server Action arguments without any persistence layer',
      'Use Redux exclusively for all checkout state'
    ],
    correctAnswer:
      'Persist intermediate step data server-side (database row or encrypted cookie keyed by a checkout session ID) and pass the session ID through hidden form fields or the URL between steps, updating it via each step\'s Server Action',
    explanation:
      'Each step\'s form submits to a Server Action that updates a CheckoutSession record (or a signed cookie) identified by an ID embedded as a hidden input or route param. This approach survives page refreshes and works with progressive enhancement (no JS required), unlike pure client-state solutions like Context or Redux.',
    tags: ['multi-step-forms', 'server-actions', 'state-persistence', 'coding', 'advanced']
  },
  {
    id: 'next-069',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the significance of the unstable_cache function (predecessor pattern to cacheLife/cacheTag directives)?',
    options: [
      'It caches only static assets like images',
      'It allows caching the result of arbitrary asynchronous functions (not just fetch calls) in the Data Cache, with configurable revalidation time and cache tags, useful for wrapping ORM queries or external SDK calls that don\'t use fetch internally',
      'It is used to disable all caching for debugging',
      'It only works within middleware.ts'
    ],
    correctAnswer:
      'It allows caching the result of arbitrary asynchronous functions (not just fetch calls) in the Data Cache, with configurable revalidation time and cache tags, useful for wrapping ORM queries or external SDK calls that don\'t use fetch internally',
    explanation:
      'const getCachedUser = unstable_cache(async (id) => db.user.findUnique({ where: { id } }), ["user"], { revalidate: 3600, tags: ["user"] }); extends the Data Cache\'s benefits (persistence across requests, tag-based invalidation) to non-fetch data sources like Prisma or third-party SDKs that React\'s plain cache() (request-scoped only) cannot provide on its own.',
    tags: ['unstable_cache', 'data-cache', 'orm', 'advanced-theory']
  },
  {
    id: 'next-070',
    topic: 'nextjs',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you debug a hydration mismatch error caused by a Client Component rendering different content on server vs first client render?',
    options: [
      'Ignore the warning since it is purely cosmetic',
      'Identify non-deterministic values (Date.now(), Math.random(), locale-dependent formatting, or window-dependent branches) rendered during the initial render, and move them into a useEffect so they only apply after mount, or pass server-computed values as props instead',
      'Wrap the entire app in suppressHydrationWarning to silence all mismatches',
      'Switch the component to a Server Component, which always fixes hydration issues'
    ],
    correctAnswer:
      'Identify non-deterministic values (Date.now(), Math.random(), locale-dependent formatting, or window-dependent branches) rendered during the initial render, and move them into a useEffect so they only apply after mount, or pass server-computed values as props instead',
    explanation:
      'A typical fix: const [now, setNow] = useState<Date | null>(null); useEffect(() => setNow(new Date()), []); return now ? <span>{now.toString()}</span> : null; ensures the server-rendered output (null) matches the client\'s first render before the effect runs, eliminating the mismatch instead of papering over it with suppressHydrationWarning.',
    tags: ['hydration', 'debugging', 'client-components', 'coding', 'advanced']
  },

  // ─────────────────────────────────────────────
  // MNC LEVEL  (next-071 – next-090)
  // ─────────────────────────────────────────────

  {
    id: 'next-071',
    topic: 'nextjs',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you architect a multi-tenant SaaS application in Next.js where each tenant has a custom subdomain or domain?',
    options: [
      'Deploy a fully separate Next.js application per tenant',
      'Use middleware to inspect the request\'s host header, resolve the tenant from a domain-mapping table (cached at the edge), rewrite the request to a shared dynamic route like app/[tenant]/..., and scope all data access by the resolved tenant ID',
      'Hardcode all tenant subdomains into next.config.js redirects',
      'Require every tenant to use the same single domain with no differentiation'
    ],
    correctAnswer:
      'Use middleware to inspect the request\'s host header, resolve the tenant from a domain-mapping table (cached at the edge), rewrite the request to a shared dynamic route like app/[tenant]/..., and scope all data access by the resolved tenant ID',
    explanation:
      'Middleware reads request.headers.get("host"), looks up the tenant (via an edge-cached KV store to avoid a database round trip on every request), and uses NextResponse.rewrite to route to a shared internal path while preserving the custom domain in the browser. All downstream data fetching must then filter by the resolved tenantId to enforce isolation.',
    tags: ['multi-tenancy', 'middleware', 'system-design', 'mnc']
  },
  {
    id: 'next-072',
    topic: 'nextjs',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you optimise Core Web Vitals (LCP, INP, CLS) for a content-heavy Next.js news site serving millions of users?',
    options: [
      'Render everything client-side for simplicity',
      'Use static generation with ISR for articles, prioritise the LCP image with fetchpriority="high" and next/image, reserve layout space for ads/embeds to avoid CLS, minimise client JS via Server Components, and defer non-critical third-party scripts with next/script strategy="lazyOnload"',
      'Disable all third-party scripts permanently',
      'Use only client-side rendering with aggressive prefetching of every link on the homepage'
    ],
    correctAnswer:
      'Use static generation with ISR for articles, prioritise the LCP image with fetchpriority="high" and next/image, reserve layout space for ads/embeds to avoid CLS, minimise client JS via Server Components, and defer non-critical third-party scripts with next/script strategy="lazyOnload"',
    explanation:
      'High-traffic content sites benefit most from static/ISR pages (fast TTFB, cheap to scale via CDN), explicit image dimensions and priority hints for LCP, reserved space for dynamically injected ad slots to prevent layout shift, and Server Components to minimise the JS needed for interactivity (improving INP by reducing main-thread work).',
    tags: ['core-web-vitals', 'performance', 'isr', 'system-design', 'mnc']
  },
  {
    id: 'next-073',
    topic: 'nextjs',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a CI/CD pipeline for a large Next.js monorepo with multiple apps sharing a component library?',
    options: [
      'Run a full build and deploy of every app on every commit, regardless of what changed',
      'Use a monorepo tool (Turborepo/Nx) with task caching and dependency graph awareness to only build/test/deploy apps affected by a given change, combined with preview deployments per PR and a shared, versioned design-system package',
      'Maintain separate unrelated repositories with manually copy-pasted shared components',
      'Skip CI entirely and deploy directly from developer machines'
    ],
    correctAnswer:
      'Use a monorepo tool (Turborepo/Nx) with task caching and dependency graph awareness to only build/test/deploy apps affected by a given change, combined with preview deployments per PR and a shared, versioned design-system package',
    explanation:
      'Turborepo\'s remote caching skips re-running unchanged tasks across CI runs and contributors\' machines. Affected-package detection ensures a change to one app (or the shared UI package) only triggers builds/tests for dependents, not the entire monorepo. Preview deployments per PR let reviewers validate visual changes before merge.',
    tags: ['monorepo', 'ci-cd', 'turborepo', 'system-design', 'mnc']
  },
  {
    id: 'next-074',
    topic: 'nextjs',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you implement a feature-flagged Server Component that renders different content per user without breaking the Full Route Cache for other users?',
    options: [
      'Set the entire route to force-dynamic so every user gets a personalised render, accepting the loss of caching for all users',
      'Use Partial Prerendering: keep the page statically shelled, and wrap only the feature-flag-dependent section in Suspense, resolving the flag (via cookies() or a user-scoped fetch) inside that boundary so the static parts remain cached',
      'Generate a separate static page per possible flag combination at build time only',
      'Feature flags are incompatible with the App Router\'s caching model'
    ],
    correctAnswer:
      'Use Partial Prerendering: keep the page statically shelled, and wrap only the feature-flag-dependent section in Suspense, resolving the flag (via cookies() or a user-scoped fetch) inside that boundary so the static parts remain cached',
    explanation:
      'Without PPR, any per-user dynamic function call (like reading a flag from cookies) forces the whole page dynamic. By isolating flag resolution and the flagged UI inside a <Suspense> boundary under a PPR-enabled route, the rest of the page (header, footer, static content) stays in the Full Route Cache, while only the small dynamic slice is computed per request.',
    tags: ['feature-flags', 'ppr', 'caching', 'coding', 'mnc']
  },
  {
    id: 'next-075',
    topic: 'nextjs',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design an observability strategy for a Next.js application running across Edge and Node.js runtimes simultaneously?',
    options: [
      'Use console.log exclusively and grep production logs manually',
      'Instrument with OpenTelemetry via instrumentation.ts, exporting traces/metrics to a backend (e.g. Datadog, Honeycomb) that supports both edge-compatible OTLP-over-HTTP exporters and Node exporters, correlating request IDs across middleware, Route Handlers, and Server Actions',
      'Only monitor the Node.js runtime since Edge functions cannot be observed',
      'Rely solely on the hosting provider\'s default dashboard with no custom instrumentation'
    ],
    correctAnswer:
      'Instrument with OpenTelemetry via instrumentation.ts, exporting traces/metrics to a backend (e.g. Datadog, Honeycomb) that supports both edge-compatible OTLP-over-HTTP exporters and Node exporters, correlating request IDs across middleware, Route Handlers, and Server Actions',
    explanation:
      'Since Edge and Node runtimes have different API constraints, instrumentation.ts conditionally registers an edge-compatible OTLP HTTP exporter for NEXT_RUNTIME === "edge" and a fuller Node SDK otherwise. Propagating a consistent trace/request ID (e.g. via headers) across middleware → route handler → Server Action calls enables end-to-end request tracing despite spanning two runtimes.',
    tags: ['observability', 'opentelemetry', 'edge-runtime', 'system-design', 'mnc']
  },
  {
    id: 'next-076',
    topic: 'nextjs',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you implement a robust webhook Route Handler that verifies a signature and is idempotent against duplicate delivery?',
    options: [
      'Trust the payload without verification since it came from a known provider',
      'Verify the HMAC signature header against a computed hash of the raw request body using a shared secret, then check/store a processed event ID in a database with a unique constraint before performing any side effects, rejecting duplicates',
      'Process every webhook call immediately and assume the provider never retries',
      'Use GET requests for webhooks to simplify handling'
    ],
    correctAnswer:
      'Verify the HMAC signature header against a computed hash of the raw request body using a shared secret, then check/store a processed event ID in a database with a unique constraint before performing any side effects, rejecting duplicates',
    explanation:
      'export async function POST(req) { const raw = await req.text(); const sig = req.headers.get("x-signature"); if (!verify(raw, sig, secret)) return new Response("Invalid", { status: 401 }); const event = JSON.parse(raw); const isNew = await db.processedEvent.create({ data: { id: event.id } }).catch(() => null); if (!isNew) return new Response("OK"); /* process */ } — reading req.text() (not req.json()) preserves the exact bytes needed for signature verification, and a unique DB constraint guards against double-processing on retries.',
    tags: ['webhooks', 'idempotency', 'security', 'coding', 'mnc']
  },
  {
    id: 'next-077',
    topic: 'nextjs',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you migrate a large production application incrementally from the Pages Router to the App Router with minimal risk?',
    options: [
      'Rewrite the entire application in a single large pull request',
      'Run both routers side by side (Next.js supports this), migrate low-traffic or isolated routes first, share layout/UI logic where possible, monitor error rates and Core Web Vitals per migrated route, and use feature flags to roll back individual routes if regressions appear',
      'Migrate purely based on alphabetical file order with no risk assessment',
      'Avoid migrating at all and continue using the Pages Router indefinitely regardless of new feature needs'
    ],
    correctAnswer:
      'Run both routers side by side (Next.js supports this), migrate low-traffic or isolated routes first, share layout/UI logic where possible, monitor error rates and Core Web Vitals per migrated route, and use feature flags to roll back individual routes if regressions appear',
    explanation:
      'Next.js explicitly supports incremental adoption: app/ and pages/ coexist, with app/ taking precedence for overlapping paths. A pragmatic migration order is: start with new features in app/, then migrate standalone/low-risk pages, leaving complex stateful pages (e.g. checkout) for last once the team is confident with Server Component patterns. Per-route metrics comparison catches regressions early.',
    tags: ['migration', 'app-router', 'pages-router', 'system-design', 'mnc']
  },
  {
    id: 'next-078',
    topic: 'nextjs',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you reduce Time to First Byte (TTFB) for a globally distributed user base hitting a Next.js app with dynamic, personalised content?',
    options: [
      'Deploy only to a single region and rely on a CDN to mask the latency entirely',
      'Deploy Route Handlers/Server Actions that can run on the Edge Runtime close to users, use Partial Prerendering so only genuinely personalised slices require a dynamic round-trip, and place a database read-replica or edge-compatible data store geographically near the compute',
      'Disable all dynamic rendering and serve only a single global static page to every user',
      'Increase server CPU allocation in one central region to compensate for distance'
    ],
    correctAnswer:
      'Deploy Route Handlers/Server Actions that can run on the Edge Runtime close to users, use Partial Prerendering so only genuinely personalised slices require a dynamic round-trip, and place a database read-replica or edge-compatible data store geographically near the compute',
    explanation:
      'TTFB for dynamic content is dominated by network round-trip distance and backend query latency. Running compute at the edge minimises the first leg; PPR reduces how much of the response actually needs dynamic computation; and pairing edge compute with geographically distributed read replicas (e.g. Postgres read replicas, or a globally replicated KV store) avoids a single far-away database becoming the bottleneck.',
    tags: ['ttfb', 'edge-runtime', 'ppr', 'global-performance', 'mnc']
  },
  {
    id: 'next-079',
    topic: 'nextjs',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you implement a typed API client shared between a Next.js frontend and Server Actions that calls an internal microservice, ensuring contract safety across deployments?',
    options: [
      'Manually write fetch calls with untyped responses in every component',
      'Generate a typed client (e.g. via openapi-typescript or tRPC) from the microservice\'s schema as part of the build, publish it as an internal package, and fail CI if the consumed contract version drifts from the deployed microservice\'s schema',
      'Trust that both teams will keep types in sync manually with no tooling',
      'Use any types throughout to avoid coupling between services'
    ],
    correctAnswer:
      'Generate a typed client (e.g. via openapi-typescript or tRPC) from the microservice\'s schema as part of the build, publish it as an internal package, and fail CI if the consumed contract version drifts from the deployed microservice\'s schema',
    explanation:
      'At MNC scale, contract drift between independently deployed services is a leading cause of production incidents. Generating types from an OpenAPI spec or a tRPC router (with the schema versioned and published) and gating CI on a contract-compatibility check (e.g. via Pact or a schema diff tool) catches breaking changes before they reach Server Actions or Route Handlers that depend on them.',
    tags: ['contract-safety', 'microservices', 'typescript', 'coding', 'mnc']
  },
  {
    id: 'next-080',
    topic: 'nextjs',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a canary/gradual rollout strategy for a risky Next.js feature affecting Server Components and data fetching logic?',
    options: [
      'Deploy directly to 100% of production traffic and monitor for issues afterward',
      'Use middleware-based traffic splitting (cookie-based bucket assignment) combined with a feature-flag service to route a small percentage of users to the new code path, gradually increasing the percentage while monitoring error rates, latency, and business metrics',
      'Ship the change behind a manual on/off toggle with no gradual percentage control',
      'Require all users to opt in manually via a settings page before any rollout begins'
    ],
    correctAnswer:
      'Use middleware-based traffic splitting (cookie-based bucket assignment) combined with a feature-flag service to route a small percentage of users to the new code path, gradually increasing the percentage while monitoring error rates, latency, and business metrics',
    explanation:
      'Middleware assigns a sticky bucket (e.g. deterministic hash of a user/session ID modulo 100) stored in a cookie, consulted by both the rendering logic and a feature-flag SDK to decide which code path runs. Dashboards track error rate, latency, and conversion split by bucket, allowing an automatic or manual rollback if the canary cohort regresses before expanding exposure.',
    tags: ['canary-deployment', 'feature-flags', 'middleware', 'system-design', 'mnc']
  },
  {
    id: 'next-081',
    topic: 'nextjs',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you diagnose and fix a Next.js production app suffering from large JavaScript bundle sizes despite using the App Router?',
    options: [
      'Assume the App Router automatically prevents bundle bloat with no further action needed',
      'Run @next/bundle-analyzer to identify large client-bundle contributors, audit "use client" boundaries for components that could be moved server-side or split smaller, lazy-load heavy client-only libraries via next/dynamic, and replace large dependencies with lighter alternatives or tree-shakeable imports',
      'Minify variable names more aggressively as the only fix',
      'Switch the entire application back to the Pages Router'
    ],
    correctAnswer:
      'Run @next/bundle-analyzer to identify large client-bundle contributors, audit "use client" boundaries for components that could be moved server-side or split smaller, lazy-load heavy client-only libraries via next/dynamic, and replace large dependencies with lighter alternatives or tree-shakeable imports',
    explanation:
      'A common anti-pattern is marking a large component tree as "use client" at too high a level, pulling unrelated server-only-eligible children into the client bundle. Bundle analysis reveals the actual contributors; pushing "use client" boundaries as far down the tree as possible, and code-splitting genuinely client-only heavy libraries (charting, rich text editors), typically yields the largest reductions.',
    tags: ['bundle-size', 'performance', 'use-client', 'mnc']
  },
  {
    id: 'next-082',
    topic: 'nextjs',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you implement server-side request deduplication and batching for a GraphQL-backed Next.js app to avoid N+1 query patterns across multiple Server Components?',
    options: [
      'Allow each Server Component to fire its own independent GraphQL query with no coordination',
      'Use a DataLoader-style batching utility wrapped with React\'s cache() so that multiple components requesting related entities within the same render are collected and dispatched as a single batched GraphQL request',
      'Switch entirely to REST to avoid the N+1 problem',
      'Manually pass all data down from the root layout as props regardless of which components need it'
    ],
    correctAnswer:
      'Use a DataLoader-style batching utility wrapped with React\'s cache() so that multiple components requesting related entities within the same render are collected and dispatched as a single batched GraphQL request',
    explanation:
      'A per-request DataLoader instance (created fresh per request to avoid cross-request data leakage) batches individual .load(id) calls issued by separate Server Components into a single GraphQL query during a microtask tick, then resolves each component\'s promise with its corresponding slice — combined with React\'s cache() to also dedupe identical loader instantiation across the render tree.',
    tags: ['dataloader', 'graphql', 'n+1', 'coding', 'mnc']
  },
  {
    id: 'next-083',
    topic: 'nextjs',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design disaster recovery and rollback procedures for a Next.js application using ISR with revalidateTag-driven invalidation?',
    options: [
      'Assume the Data Cache is automatically backed up and never needs disaster recovery planning',
      'Version the underlying data source so a bad deploy can be rolled back atomically, snapshot/replicate the cache invalidation event log so tag invalidations can be replayed after restoring a previous deployment, and keep build artifacts (including the Full Route Cache) immutable per deployment so rollback restores a known-good cached state instantly',
      'Manually clear the entire cache and rebuild from scratch after every incident regardless of cost',
      'Rely solely on customer bug reports to detect when stale or incorrect cached content is being served'
    ],
    correctAnswer:
      'Version the underlying data source so a bad deploy can be rolled back atomically, snapshot/replicate the cache invalidation event log so tag invalidations can be replayed after restoring a previous deployment, and keep build artifacts (including the Full Route Cache) immutable per deployment so rollback restores a known-good cached state instantly',
    explanation:
      'Because each deployment produces its own immutable build output (including its Full Route Cache snapshot), rolling back to a previous deployment is typically instant and safe. The harder problem is the Data Cache and tag-based invalidations tied to the old deployment\'s code paths — maintaining an event log of revalidateTag calls (and being able to replay or reconcile them against the restored deployment) prevents serving stale data post-rollback.',
    tags: ['disaster-recovery', 'isr', 'rollback', 'system-design', 'mnc']
  },
  {
    id: 'next-084',
    topic: 'nextjs',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you implement a resilient image-heavy product gallery that gracefully degrades under poor network conditions using Next.js primitives?',
    options: [
      'Load all full-resolution images eagerly regardless of network conditions',
      'Use next/image with responsive sizes and a low-quality placeholder (blurDataURL), detect connection quality via the Network Information API to conditionally reduce image quality/count on slow connections, and lazy-load below-the-fold images with loading="lazy"',
      'Replace all images with plain <img> tags to avoid framework overhead',
      'Block page rendering until every image fully loads'
    ],
    correctAnswer:
      'Use next/image with responsive sizes and a low-quality placeholder (blurDataURL), detect connection quality via the Network Information API to conditionally reduce image quality/count on slow connections, and lazy-load below-the-fold images with loading="lazy"',
    explanation:
      '<Image src={url} placeholder="blur" blurDataURL={tinyBase64} sizes="(max-width: 768px) 100vw, 50vw" /> gives an immediate low-res preview while the real image streams in. navigator.connection?.effectiveType (where supported) lets a Client Component component conditionally request lower-quality variants or fewer gallery items on "2g"/"slow-2g" connections, improving perceived performance for users on constrained networks.',
    tags: ['next-image', 'network-resilience', 'ux', 'coding', 'mnc']
  },
  {
    id: 'next-085',
    topic: 'nextjs',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you structure a Next.js application to support both a public marketing site and an authenticated dashboard with very different performance and security requirements?',
    options: [
      'Apply identical caching, security headers, and rendering strategy to both sections uniformly',
      'Use route groups ((marketing) and (app)) with distinct layouts, apply aggressive static generation and public CDN caching to the marketing group, apply strict no-store caching, authentication middleware, and stricter CSP headers scoped via matcher to the dashboard group',
      'Host the dashboard and marketing site as completely unrelated tech stacks with no shared design system',
      'Force the entire application to be server-rendered per request for consistency'
    ],
    correctAnswer:
      'Use route groups ((marketing) and (app)) with distinct layouts, apply aggressive static generation and public CDN caching to the marketing group, apply strict no-store caching, authentication middleware, and stricter CSP headers scoped via matcher to the dashboard group',
    explanation:
      'app/(marketing)/layout.tsx can be lightweight and statically generated for SEO/speed, while app/(app)/layout.tsx wraps authenticated routes with session checks (often delegated to middleware scoped via matcher: ["/app/:path*"]), stricter Cache-Control: no-store headers (set in next.config.js headers() for that path prefix), and a tighter CSP appropriate for an authenticated context handling sensitive data.',
    tags: ['route-groups', 'architecture', 'security', 'system-design', 'mnc']
  },
  {
    id: 'next-086',
    topic: 'nextjs',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you scale a Next.js application\'s ISR strategy for a catalog of tens of millions of product pages without overwhelming the build process?',
    options: [
      'Pre-generate all tens of millions of pages at build time via generateStaticParams',
      'Use generateStaticParams to pre-render only the highest-traffic subset at build time, and rely on Incremental Static Regeneration\'s on-demand fallback behaviour to generate and cache the long tail of pages lazily on first request',
      'Disable static generation entirely and serve every product page dynamically per request',
      'Manually trigger a full site rebuild every time a single product changes'
    ],
    correctAnswer:
      'Use generateStaticParams to pre-render only the highest-traffic subset at build time, and rely on Incremental Static Regeneration\'s on-demand fallback behaviour to generate and cache the long tail of pages lazily on first request',
    explanation:
      'Pre-rendering tens of millions of pages at build time is infeasible (build time and storage cost). Returning only top-traffic slugs from generateStaticParams, combined with dynamicParams (default true) allowing not-yet-generated slugs to render on first request and then be cached for subsequent visitors, scales the build process while still serving fast cached responses for the vast majority of traffic over time.',
    tags: ['isr', 'scale', 'generateStaticParams', 'performance', 'mnc']
  },
  {
    id: 'next-087',
    topic: 'nextjs',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you implement comprehensive audit logging for sensitive Server Actions (e.g. changing a user\'s billing plan) in a way that survives function-level retries and partial failures?',
    options: [
      'Log only on the client after the action call resolves successfully',
      'Write the audit log entry and the actual mutation within the same database transaction (or use an outbox pattern publishing the audit event atomically alongside the state change), ensuring the log is never written without the corresponding state change and vice versa',
      'Fire-and-forget a separate, uncoordinated logging call after the mutation completes',
      'Rely on infrastructure-level access logs as a substitute for application-level audit logging'
    ],
    correctAnswer:
      'Write the audit log entry and the actual mutation within the same database transaction (or use an outbox pattern publishing the audit event atomically alongside the state change), ensuring the log is never written without the corresponding state change and vice versa',
    explanation:
      "await db.$transaction([db.subscription.update({...}), db.auditLog.create({ data: { action: 'plan_change', userId, before, after } })]) guarantees atomicity — if the Server Action is retried due to a transient network failure, the transaction either fully commits once or not at all, preventing the dangerous scenario of an audit trail that doesn't match actual state changes.",
    tags: ['audit-logging', 'transactions', 'compliance', 'coding', 'mnc']
  },
  {
    id: 'next-088',
    topic: 'nextjs',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a Next.js application\'s deployment to meet strict data-residency requirements (e.g. EU user data must never leave the EU)?',
    options: [
      'Deploy a single global instance and trust that CDN caching satisfies residency requirements',
      'Deploy region-pinned instances (or region-scoped edge configuration) with middleware routing EU traffic exclusively to EU-hosted compute and EU-located databases, ensuring Server Actions and Route Handlers serving EU users never call out to non-EU data stores',
      'Store all data in a single region and apply encryption as a substitute for residency controls',
      'Rely on users\' browser locale settings as the sole mechanism for determining data placement'
    ],
    correctAnswer:
      'Deploy region-pinned instances (or region-scoped edge configuration) with middleware routing EU traffic exclusively to EU-hosted compute and EU-located databases, ensuring Server Actions and Route Handlers serving EU users never call out to non-EU data stores',
    explanation:
      'Data residency is an infrastructure and data-flow guarantee, not just a UI concern: middleware geo-detection (via a header like x-vercel-ip-country or a similar provider signal) routes requests to region-specific deployments, and crucially every downstream call within that deployment (database, cache, third-party APIs) must also be confirmed to stay within the required jurisdiction — encryption alone does not satisfy residency law in most regimes.',
    tags: ['data-residency', 'compliance', 'multi-region', 'system-design', 'mnc']
  },
  {
    id: 'next-089',
    topic: 'nextjs',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you implement graceful degradation for a Server Action-based form when JavaScript fails to load on the client?',
    options: [
      'Accept that the form is entirely non-functional without JavaScript',
      'Pass the Server Action directly to the <form action={action}> prop (not via onSubmit/JS event handling), so the browser performs a standard HTML form POST and full page reload if JS never loads or hydrates, while JS-enabled clients get the enhanced, non-reloading experience',
      'Require a service worker to be installed before the form can be submitted',
      'Detect JS failure with a <noscript> tag and show only an error message with no way to submit'
    ],
    correctAnswer:
      'Pass the Server Action directly to the <form action={action}> prop (not via onSubmit/JS event handling), so the browser performs a standard HTML form POST and full page reload if JS never loads or hydrates, while JS-enabled clients get the enhanced, non-reloading experience',
    explanation:
      'Because Server Actions compile down to a real form submission target, <form action={createPost}> works as a progressively enhanced HTML form: with JS, Next.js intercepts the submission for a smooth SPA-like experience (pending states, no full reload); without JS (or before hydration completes), the browser falls back to a native multipart/form-data POST that the same Server Action still handles correctly server-side.',
    tags: ['progressive-enhancement', 'server-actions', 'resilience', 'coding', 'mnc']
  },
  {
    id: 'next-090',
    topic: 'nextjs',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you lead a technical decision on whether to adopt Partial Prerendering for a large existing App Router codebase, considering organisational risk?',
    options: [
      'Enable the experimental flag globally in production immediately for maximum benefit',
      'Pilot PPR on a small set of low-risk, high-traffic routes behind the experimental flag, measure TTFB/cache-hit-rate/error-rate deltas against the current dynamic rendering baseline, document the required Suspense boundary refactors, and only expand adoption once the team has tooling/runbooks for debugging the new caching behaviour',
      'Reject the feature entirely since it is labelled experimental, regardless of measured benefit',
      'Delegate the entire decision to a single engineer with no measurement or rollout plan'
    ],
    correctAnswer:
      'Pilot PPR on a small set of low-risk, high-traffic routes behind the experimental flag, measure TTFB/cache-hit-rate/error-rate deltas against the current dynamic rendering baseline, document the required Suspense boundary refactors, and only expand adoption once the team has tooling/runbooks for debugging the new caching behaviour',
    explanation:
      'Adopting an experimental feature at organisational scale requires balancing the performance upside (static-speed shells with per-request personalisation) against the operational risk of an evolving API and team unfamiliarity with debugging mixed static/dynamic caching behaviour. A staged pilot with clear success metrics and documented learnings de-risks wider rollout and builds institutional knowledge before committing the whole codebase.',
    tags: ['ppr', 'technical-leadership', 'risk-management', 'system-design', 'mnc']
  }
];