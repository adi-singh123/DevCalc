export interface InterviewTopicGuide {
  overview: string;
  skills: Array<{ title: string; description: string }>;
  exercises: string[];
  pitfalls: string[];
}

export const interviewTopicGuides: Record<string, InterviewTopicGuide> = {
  javascript: {
    overview: "JavaScript interviews reward an accurate mental model of execution, not just familiarity with syntax. A strong candidate can trace scope and closures, predict asynchronous ordering, explain prototype lookup, and recognize when coercion changes a result. Preparation should combine small code traces with browser-oriented debugging and deliberate comparison of alternative implementations.",
    skills: [
      { title: "Execution model", description: "Trace call stacks, lexical environments, hoisting, closures, and the lifetime of captured values." },
      { title: "Asynchronous behavior", description: "Predict ordering across promises, microtasks, timers, events, and async functions without guessing." },
      { title: "Objects and types", description: "Reason about prototypes, property descriptors, equality, coercion, copying, and reference identity." },
      { title: "Browser engineering", description: "Handle DOM events, storage, network requests, performance bottlenecks, and client-side security boundaries." },
    ],
    exercises: [
      "Build a cancellable search box that debounces requests and ignores stale responses.",
      "Implement a small event emitter with once, unsubscribe, and error-isolation behavior.",
      "Profile a slow list-rendering page and document the cause of each measurable improvement.",
    ],
    pitfalls: [
      "Describing the event loop as a single queue and ignoring microtask priority.",
      "Treating class syntax as a separate inheritance system rather than prototype-based behavior.",
      "Using JSON serialization as a universal deep-cloning strategy without discussing its data loss.",
    ],
  },
  react: {
    overview: "React preparation should focus on render behavior and state ownership. Interviewers often turn a simple component question into a discussion about reconciliation, effects, stale closures, accessibility, and performance. Practice explaining what causes a render, what an effect synchronizes with, and why a particular state boundary makes a feature easier to maintain.",
    skills: [
      { title: "Rendering", description: "Explain reconciliation, keys, component identity, batching, memoization, and why renders are not DOM updates." },
      { title: "State design", description: "Place state at the correct ownership level and distinguish derived data from stored application state." },
      { title: "Effects", description: "Use effects for external synchronization while avoiding dependency bugs, loops, and stale captured values." },
      { title: "Component APIs", description: "Design composable interfaces with predictable props, accessible interactions, and clear loading and error states." },
    ],
    exercises: [
      "Create an accessible modal with focus trapping, Escape handling, and focus restoration.",
      "Build a paginated data table with URL-backed filters and race-safe data loading.",
      "Refactor a large form so validation, field state, and submission errors have clear ownership.",
    ],
    pitfalls: [
      "Adding useMemo or useCallback everywhere without identifying an actual rendering cost.",
      "Using an effect to calculate data that can be derived during rendering.",
      "Mutating arrays or objects in state and expecting reference-based updates to remain reliable.",
    ],
  },
  typescript: {
    overview: "TypeScript interviews test whether types improve a program's design rather than merely silence compiler errors. Candidates should be able to model valid states, narrow unknown input, build reusable generic constraints, and explain the boundary between compile-time guarantees and runtime validation. Good answers show both type precision and restraint.",
    skills: [
      { title: "Type modeling", description: "Represent domain states with unions, intersections, discriminants, readonly fields, and intentional optionality." },
      { title: "Narrowing", description: "Safely refine unknown values through guards, control flow, assertion functions, and exhaustive checks." },
      { title: "Generics", description: "Create useful constraints and preserve relationships between inputs and outputs without unsafe assertions." },
      { title: "Compiler boundaries", description: "Explain erasure, declaration files, module resolution, strictness flags, and the need for runtime validation." },
    ],
    exercises: [
      "Model an API response as a discriminated union with exhaustive success and failure handling.",
      "Write a type-safe event map whose event name determines the callback payload type.",
      "Add runtime validation to unknown JSON and return a correctly narrowed domain object.",
    ],
    pitfalls: [
      "Using any where unknown plus a narrowing step would preserve safety.",
      "Building deeply clever utility types that make ordinary code harder to understand.",
      "Assuming an interface validates network data after TypeScript types have been erased.",
    ],
  },
  node: {
    overview: "Node.js interviews connect JavaScript knowledge with operating-system and service behavior. Strong answers explain which work runs on the event loop, which work reaches libuv or the kernel, and how backpressure, process isolation, and failure handling affect production reliability. Practice reasoning from an incoming request through every resource it consumes.",
    skills: [
      { title: "Runtime behavior", description: "Understand event-loop phases, microtasks, the libuv thread pool, buffers, streams, and process lifecycle." },
      { title: "API design", description: "Design validation, authentication, pagination, idempotency, rate limits, and consistent error responses." },
      { title: "Resource control", description: "Apply backpressure, timeouts, cancellation, connection pooling, and bounded concurrency." },
      { title: "Operations", description: "Plan logging, health checks, graceful shutdown, worker isolation, and recovery from partial failures." },
    ],
    exercises: [
      "Create a streaming upload endpoint with file limits, backpressure, and cleanup on cancellation.",
      "Implement an idempotent job endpoint backed by a queue and a request key.",
      "Measure event-loop delay while comparing synchronous and worker-thread CPU processing.",
    ],
    pitfalls: [
      "Saying Node.js is single-threaded without distinguishing JavaScript execution from runtime workers.",
      "Reading large files fully into memory when a streaming pipeline is appropriate.",
      "Returning internal exceptions directly to clients instead of logging and translating them safely.",
    ],
  },
  sql: {
    overview: "SQL interviews evaluate result correctness and the reasoning behind access paths. Preparation should cover relational modeling, joins, aggregation, window functions, transaction isolation, and index design. The best answers state assumptions about cardinality and nulls, produce a correct query, and then explain how the database is likely to execute it.",
    skills: [
      { title: "Query construction", description: "Combine joins, grouping, subqueries, common table expressions, and window functions accurately." },
      { title: "Data modeling", description: "Choose keys, constraints, normalization boundaries, and relationship tables that protect data integrity." },
      { title: "Transactions", description: "Explain ACID behavior, isolation anomalies, locking, deadlocks, and safe retry boundaries." },
      { title: "Performance", description: "Read execution plans and reason about selectivity, composite indexes, scans, sorts, and query rewrites." },
    ],
    exercises: [
      "Return the three highest-value orders per customer using a window function.",
      "Design a booking transaction that prevents two users from claiming the same inventory.",
      "Compare execution plans before and after adding a composite index to a filtered query.",
    ],
    pitfalls: [
      "Using WHERE for aggregate filters that belong in HAVING.",
      "Ignoring null behavior in comparisons, joins, and NOT IN expressions.",
      "Adding indexes for every column without accounting for write cost and column order.",
    ],
  },
  nextjs: {
    overview: "Next.js interviews require clear distinctions between routing, rendering, caching, and execution environments. Candidates should explain where a component runs, when HTML is produced, what data is cached, and how a mutation makes cached output fresh again. Version-specific answers should be grounded in the conventions used by the project being discussed.",
    skills: [
      { title: "App Router", description: "Use layouts, route segments, loading and error boundaries, handlers, and dynamic parameters deliberately." },
      { title: "Rendering", description: "Choose static generation, request-time rendering, streaming, and client interactivity based on data needs." },
      { title: "Server boundaries", description: "Separate Server and Client Components while protecting secrets and controlling shipped JavaScript." },
      { title: "Caching and metadata", description: "Explain cache behavior, revalidation, canonical metadata, sitemaps, and social preview output." },
    ],
    exercises: [
      "Build a product route with static parameters, dynamic metadata, and a route-level not-found state.",
      "Implement a form mutation that validates input and refreshes only the affected cached content.",
      "Audit a page's client boundary and remove JavaScript that is unnecessary for its first render.",
    ],
    pitfalls: [
      "Assuming every component under the App Router is automatically a Server Component in all circumstances.",
      "Using client-side fetching for content that should be present in the initial HTML.",
      "Discussing caching without specifying which resource is cached and how it becomes stale.",
    ],
  },
  cpp: {
    overview: "C++ interviews combine language rules with explicit ownership and performance reasoning. Candidates need to distinguish values, references, pointers, object lifetimes, and polymorphic behavior while remaining alert to undefined behavior. Clear explanations of RAII and the standard library are generally more valuable than obscure syntax trivia.",
    skills: [
      { title: "Object lifetime", description: "Reason about construction, destruction, storage duration, moves, copies, and exception-safe cleanup." },
      { title: "Ownership", description: "Choose values, references, raw observers, and smart pointers with explicit ownership semantics." },
      { title: "Templates and STL", description: "Use generic algorithms, iterators, containers, type deduction, and constraints appropriately." },
      { title: "Performance and concurrency", description: "Discuss memory layout, allocation, cache locality, synchronization, atomics, and data races." },
    ],
    exercises: [
      "Implement a small RAII resource wrapper with deleted copying and safe move operations.",
      "Compare vector and linked-list behavior for an iteration-heavy workload.",
      "Write a bounded thread-safe queue and document its shutdown behavior.",
    ],
    pitfalls: [
      "Using a raw pointer without stating whether it owns or merely observes the object.",
      "Forgetting a virtual destructor in a polymorphic base intended for deletion through that base.",
      "Claiming move operations always avoid all copying regardless of the contained type and allocator.",
    ],
  },
  java: {
    overview: "Java interviews span language semantics, collections, concurrency, the JVM, and common service architecture. Strong candidates can connect equals and hashing contracts to collection behavior, explain visibility and synchronization, and reason about allocation and garbage collection without presenting the JVM as a black box.",
    skills: [
      { title: "Language and collections", description: "Understand generics, immutability, equality contracts, collection complexity, streams, and exceptions." },
      { title: "Concurrency", description: "Reason about the memory model, synchronization, volatile fields, executors, futures, and concurrent collections." },
      { title: "JVM behavior", description: "Explain bytecode, class loading, heap generations, garbage collectors, JIT compilation, and profiling." },
      { title: "Backend design", description: "Structure transactions, dependency injection, persistence boundaries, validation, and resilient service calls." },
    ],
    exercises: [
      "Create an immutable value object with correct equals and hashCode behavior.",
      "Implement a bounded executor workflow that handles cancellation and partial failure.",
      "Diagnose a sample heap or thread dump and state which additional evidence you would collect.",
    ],
    pitfalls: [
      "Overriding equals without a matching hashCode implementation.",
      "Assuming volatile makes a multi-step compound operation atomic.",
      "Keeping database transactions open while waiting for slow remote network calls.",
    ],
  },
  go: {
    overview: "Go interviews emphasize simple control flow, explicit error handling, interfaces, and safe concurrency. Candidates should know when goroutines end, who owns a channel, how cancellation propagates, and how allocation affects performance. Idiomatic solutions are usually small, readable, and honest about failure paths.",
    skills: [
      { title: "Language model", description: "Use slices, maps, methods, interfaces, embedding, zero values, and pointer semantics correctly." },
      { title: "Concurrency", description: "Coordinate goroutines with channels, contexts, wait groups, mutexes, and clear ownership rules." },
      { title: "Errors and APIs", description: "Wrap and inspect errors, define stable HTTP behavior, validate input, and propagate cancellation." },
      { title: "Performance", description: "Interpret benchmarks, escape analysis, allocations, pooling trade-offs, and race-detector results." },
    ],
    exercises: [
      "Build a worker pool that stops promptly when its context is cancelled.",
      "Implement an HTTP client with timeouts, bounded retries, and response-body cleanup.",
      "Benchmark two string-building approaches and explain the allocation profile.",
    ],
    pitfalls: [
      "Launching a goroutine without defining how it stops or who observes its error.",
      "Closing a channel from the receiving side when multiple senders may still be active.",
      "Copying a struct that contains a mutex after that mutex has been used.",
    ],
  },
  php: {
    overview: "PHP interviews cover request lifecycle, language behavior, object design, Composer, frameworks, databases, and web security. Good preparation connects PHP syntax to actual HTTP applications: validating input, controlling sessions, querying safely, organizing dependencies, and understanding what persists between requests in the chosen runtime.",
    skills: [
      { title: "Language fundamentals", description: "Handle types, arrays, strings, exceptions, namespaces, traits, closures, and modern object features." },
      { title: "Application structure", description: "Use Composer, autoloading, dependency injection, routing, middleware, and framework conventions." },
      { title: "Data access", description: "Apply prepared statements, transactions, migrations, ORM boundaries, and efficient query patterns." },
      { title: "Web security", description: "Protect sessions, uploads, output, forms, credentials, and server-side URL or file operations." },
    ],
    exercises: [
      "Build a form endpoint with CSRF protection, validation, escaped output, and clear error feedback.",
      "Implement a transaction that creates an order and safely updates limited inventory.",
      "Design a file-upload flow that validates content and stores files outside executable paths.",
    ],
    pitfalls: [
      "Concatenating user input into SQL instead of binding parameters.",
      "Trusting a client-provided filename, extension, or MIME header during uploads.",
      "Mixing domain logic directly into controllers until it cannot be tested independently.",
    ],
  },
  html: {
    overview: "HTML interviews are about document meaning and browser behavior, not memorizing tags. Candidates should choose native elements before ARIA, connect labels and controls correctly, understand form submission, and build a logical heading and landmark structure. Semantic markup improves accessibility, maintenance, and how user agents interpret a page.",
    skills: [
      { title: "Document semantics", description: "Create meaningful headings, landmarks, lists, tables, links, buttons, and content relationships." },
      { title: "Forms", description: "Use labels, fieldsets, input types, validation attributes, autocomplete, and accessible error messaging." },
      { title: "Accessibility", description: "Support keyboard use, text alternatives, focus behavior, names, roles, states, and progressive enhancement." },
      { title: "Loading and metadata", description: "Understand scripts, responsive images, resource hints, language declarations, and page metadata." },
    ],
    exercises: [
      "Mark up a checkout form that remains understandable with styling and JavaScript disabled.",
      "Create an accessible data table with a caption and correctly scoped headers.",
      "Audit a clickable card and replace invalid nested interactions with valid semantic controls.",
    ],
    pitfalls: [
      "Using a div with a click handler where a native button or link supplies required behavior.",
      "Adding ARIA roles that conflict with the semantics of the underlying element.",
      "Treating placeholder text as an adequate replacement for a persistent form label.",
    ],
  },
  python: {
    overview: "Python interviews combine readable problem solving with knowledge of the object model and runtime. Candidates should reason about mutability, iteration, scopes, exceptions, decorators, generators, and concurrency while writing code that makes ownership and complexity clear. Framework knowledge helps, but precise core-language explanations remain essential.",
    skills: [
      { title: "Object model", description: "Explain names and objects, mutability, equality, hashing, scopes, descriptors, and method binding." },
      { title: "Iteration and functions", description: "Use iterators, generators, comprehensions, decorators, closures, and context managers deliberately." },
      { title: "Concurrency", description: "Choose threads, processes, and async I/O based on the GIL, workload, communication, and failure needs." },
      { title: "Engineering practice", description: "Apply typing, testing, packaging, exception design, profiling, and secure data handling." },
    ],
    exercises: [
      "Write a generator pipeline that processes a large input without loading it fully into memory.",
      "Implement an async batch client with concurrency limits, timeouts, and cancellation.",
      "Design a context manager that safely acquires and releases a custom resource.",
    ],
    pitfalls: [
      "Using a mutable default argument and unintentionally sharing it between calls.",
      "Catching Exception broadly without preserving context or defining a recovery action.",
      "Choosing threads for CPU-bound work without discussing the runtime and GIL implications.",
    ],
  },
};
