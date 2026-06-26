/**
 * src/data/interview/javascript.ts
 * JavaScript Interview Questions (120 items)
 * Levels: Beginner (10) → Intermediate (35) → Advanced (40) → MNC (35)
 */

import { InterviewQuestion } from '@/src/types/interview';

export const javascriptQuestions: InterviewQuestion[] = [

  // ─────────────────────────────────────────────
  // BEGINNER  (js-001 – js-010)
  // Not fully basic — each tests real understanding
  // ─────────────────────────────────────────────

  {
    id: 'js-001',
    topic: 'javascript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the difference between var, let, and const?',
    options: [
      'Scope and reassignment rules',
      'Memory usage only',
      'Performance characteristics',
      'Execution order only'
    ],
    correctAnswer: 'Scope and reassignment rules',
    explanation:
      'var is function-scoped and can be re-declared; let and const are block-scoped. const cannot be reassigned after declaration, though its object properties can still be mutated.',
    tags: ['es6', 'variables', 'scope']
  },
  {
    id: 'js-002',
    topic: 'javascript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does the typeof operator return for null?',
    options: ['"null"', '"undefined"', '"object"', '"string"'],
    correctAnswer: '"object"',
    explanation:
      'typeof null === "object" is a long-standing bug in JavaScript from its early implementation. null is not actually an object; use === null for a reliable null check.',
    tags: ['typeof', 'null', 'quirks']
  },
  {
    id: 'js-003',
    topic: 'javascript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the difference between == and === in JavaScript?',
    options: [
      '=== checks value only, == checks type only',
      '== performs type coercion, === checks value and type strictly',
      'Both are identical',
      '=== is slower than =='
    ],
    correctAnswer: '== performs type coercion, === checks value and type strictly',
    explanation:
      '== converts operands to the same type before comparing (loose equality). === requires both value and type to match with no conversion (strict equality). Always prefer === to avoid unexpected coercion bugs.',
    tags: ['equality', 'coercion', 'operators']
  },
  {
    id: 'js-004',
    topic: 'javascript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is hoisting in JavaScript?',
    options: [
      'Moving code to a server',
      'Declarations being moved to the top of their scope before execution',
      'Copying variables to global scope',
      'A garbage-collection mechanism'
    ],
    correctAnswer: 'Declarations being moved to the top of their scope before execution',
    explanation:
      'During the compilation phase, JS moves var declarations (not initialisations) and function declarations to the top of their scope. let and const are hoisted but stay in a Temporal Dead Zone until their declaration is reached.',
    tags: ['hoisting', 'scope', 'execution']
  },
  {
    id: 'js-005',
    topic: 'javascript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is a closure in JavaScript?',
    options: [
      'A function that has no return value',
      'A function that retains access to its outer scope even after the outer function has returned',
      'A way to close a browser tab',
      'An error-handling pattern'
    ],
    correctAnswer:
      'A function that retains access to its outer scope even after the outer function has returned',
    explanation:
      'Closures allow inner functions to remember variables from their enclosing scope. They are fundamental to patterns like data privacy, memoisation, and factory functions.',
    tags: ['closures', 'scope', 'functions']
  },
  {
    id: 'js-006',
    topic: 'javascript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What are JavaScript data types?',
    options: [
      'Only Object and Array',
      'Primitive: String, Number, Boolean, null, undefined, Symbol, BigInt; and Object',
      'String, Integer, Float, Boolean',
      'Only primitives, no objects'
    ],
    correctAnswer:
      'Primitive: String, Number, Boolean, null, undefined, Symbol, BigInt; and Object',
    explanation:
      'JavaScript has 7 primitive types (string, number, bigint, boolean, undefined, symbol, null) and one complex type (object, which includes arrays, functions, and maps).',
    tags: ['data-types', 'primitives']
  },
  {
    id: 'js-007',
    topic: 'javascript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question:
      'What is the output of: console.log(0.1 + 0.2 === 0.3)?',
    options: ['true', 'false', 'NaN', 'undefined'],
    correctAnswer: 'false',
    explanation:
      '0.1 + 0.2 produces 0.30000000000000004 due to IEEE 754 floating-point precision. Always compare floating-point numbers using an epsilon: Math.abs(a - b) < Number.EPSILON.',
    tags: ['floating-point', 'ieee754', 'quirks']
  },
  {
    id: 'js-008',
    topic: 'javascript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the difference between null and undefined?',
    options: [
      'They are identical',
      'null is an intentional absence of value; undefined means a variable was declared but not assigned',
      'undefined is assigned by the developer; null is assigned by JS engine',
      'Both mean "no value" with no distinction'
    ],
    correctAnswer:
      'null is an intentional absence of value; undefined means a variable was declared but not assigned',
    explanation:
      'undefined is the default value for uninitialized variables and missing function arguments. null is an explicit assignment indicating "no object". typeof null === "object" while typeof undefined === "undefined".',
    tags: ['null', 'undefined', 'types']
  },
  {
    id: 'js-009',
    topic: 'javascript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the event loop in JavaScript?',
    options: [
      'A loop that iterates over DOM events',
      'A mechanism that picks tasks from the queue and runs them on the call stack when it is empty',
      'A built-in for loop for arrays',
      'A way to handle errors'
    ],
    correctAnswer:
      'A mechanism that picks tasks from the queue and runs them on the call stack when it is empty',
    explanation:
      'The event loop continuously checks whether the call stack is empty. If so, it moves the first task from the (macro)task queue or microtask queue to the stack for execution, enabling non-blocking I/O in a single-threaded environment.',
    tags: ['event-loop', 'async', 'concurrency']
  },
  {
    id: 'js-010',
    topic: 'javascript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question:
      'What is the difference between function declaration and function expression?',
    options: [
      'No difference',
      'Declarations are hoisted entirely; expressions are only hoisted as undefined',
      'Expressions are faster at runtime',
      'Declarations cannot return values'
    ],
    correctAnswer:
      'Declarations are hoisted entirely; expressions are only hoisted as undefined',
    explanation:
      'Function declarations (function foo(){}) are fully hoisted and can be called before their definition. Function expressions (const foo = function(){}) are hoisted as the variable only (undefined), so calling before the assignment throws a TypeError.',
    tags: ['functions', 'hoisting', 'expressions']
  },

  // ─────────────────────────────────────────────
  // INTERMEDIATE  (js-011 – js-045)
  // ─────────────────────────────────────────────

  {
    id: 'js-011',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'Explain the prototype chain in JavaScript.',
    options: [
      'A linked list of prototypes used for property lookup',
      'A class-based inheritance model',
      'A way to chain promises',
      'A DOM traversal method'
    ],
    correctAnswer: 'A linked list of prototypes used for property lookup',
    explanation:
      'Every object has an internal [[Prototype]] link. When a property is not found on the object itself, JS walks up the chain until it finds it or reaches null (Object.prototype\'s prototype). This is the basis of prototypal inheritance.',
    tags: ['prototype', 'inheritance', 'oop']
  },
  {
    id: 'js-012',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between call, apply, and bind?',
    options: [
      'No practical difference',
      'call/apply invoke immediately with a given this; bind returns a new function with this bound',
      'bind invokes immediately; call returns a function',
      'apply is deprecated'
    ],
    correctAnswer:
      'call/apply invoke immediately with a given this; bind returns a new function with this bound',
    explanation:
      'Function.prototype.call(ctx, arg1, arg2) and apply(ctx, [args]) both call the function immediately with the specified this. bind(ctx, arg1) returns a new function permanently bound to ctx, useful for callbacks.',
    tags: ['this', 'call', 'apply', 'bind']
  },
  {
    id: 'js-013',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What are Promises in JavaScript and how do they work?',
    options: [
      'Synchronous wrappers around callbacks',
      'Objects representing an eventual completion or failure of an async operation',
      'A replacement for all loops',
      'A caching mechanism'
    ],
    correctAnswer:
      'Objects representing an eventual completion or failure of an async operation',
    explanation:
      'A Promise has three states: pending, fulfilled, or rejected. Handlers are attached via .then() and .catch(). Promises are thenable and can be chained. They are resolved in the microtask queue, running before the next macrotask.',
    tags: ['promises', 'async', 'es6']
  },
  {
    id: 'js-014',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is async/await and how does it relate to Promises?',
    options: [
      'A completely different concurrency model',
      'Syntactic sugar over Promises that makes async code look synchronous',
      'A way to run code in parallel threads',
      'Only usable in Node.js'
    ],
    correctAnswer:
      'Syntactic sugar over Promises that makes async code look synchronous',
    explanation:
      'async functions always return a Promise. await pauses execution inside an async function until the awaited Promise resolves, without blocking the main thread. Under the hood, the engine transforms await into .then() chains.',
    tags: ['async-await', 'promises', 'es2017']
  },
  {
    id: 'js-015',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is event delegation?',
    options: [
      'Adding a listener to every child element',
      'Attaching a single listener to a parent to handle events from child elements via bubbling',
      'Delegating events to a Web Worker',
      'A jQuery-only pattern'
    ],
    correctAnswer:
      'Attaching a single listener to a parent to handle events from child elements via bubbling',
    explanation:
      'Because DOM events bubble up, one listener on a parent can intercept events from many children. This reduces memory usage and automatically handles dynamically added elements. Use event.target to identify the originator.',
    tags: ['events', 'delegation', 'dom']
  },
  {
    id: 'js-016',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between shallow copy and deep copy?',
    options: [
      'Shallow copies are faster but incorrect; deep copies are always correct',
      'Shallow copy duplicates top-level properties only; deep copy recursively clones all nested objects',
      'Both are identical for primitives only',
      'Deep copy is not possible in JavaScript'
    ],
    correctAnswer:
      'Shallow copy duplicates top-level properties only; deep copy recursively clones all nested objects',
    explanation:
      'Object.assign() and spread (...) create shallow copies — nested objects still share references. structuredClone() (ES2022) or JSON.parse(JSON.stringify()) create deep copies, though the latter fails for functions, undefined, and circular refs.',
    tags: ['copy', 'objects', 'immutability']
  },
  {
    id: 'js-017',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What are generator functions in JavaScript?',
    options: [
      'Functions that generate random numbers',
      'Functions that can pause execution and yield multiple values lazily using the yield keyword',
      'Arrow functions with implicit return',
      'Async functions without await'
    ],
    correctAnswer:
      'Functions that can pause execution and yield multiple values lazily using the yield keyword',
    explanation:
      'Declared with function*, generators return an iterator. Each call to .next() resumes execution until the next yield. They are useful for lazy sequences, infinite iterators, and are the foundation of async generators.',
    tags: ['generators', 'iterators', 'es6']
  },
  {
    id: 'js-018',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between Map and Object in JavaScript?',
    options: [
      'Map is just a renamed Object',
      'Map allows any value as a key, maintains insertion order, and has a size property; Object keys are strings/symbols only',
      'Object is faster in all cases',
      'Map cannot be iterated'
    ],
    correctAnswer:
      'Map allows any value as a key, maintains insertion order, and has a size property; Object keys are strings/symbols only',
    explanation:
      'Map\'s keys can be of any type (including objects and functions). It has guaranteed insertion-order iteration, a .size property, and no prototype key conflicts. Use Map when key type flexibility or frequent addition/deletion is needed.',
    tags: ['map', 'object', 'es6', 'data-structures']
  },
  {
    id: 'js-019',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a Symbol in JavaScript and why is it useful?',
    options: [
      'A special string type',
      'A unique, immutable primitive primarily used as unique object property keys',
      'A global constant',
      'A debugging tool'
    ],
    correctAnswer:
      'A unique, immutable primitive primarily used as unique object property keys',
    explanation:
      'Symbol() always creates a unique value. Symbol properties don\'t appear in for...in or JSON.stringify, making them useful for truly private metadata. Well-known symbols (Symbol.iterator, Symbol.toPrimitive) allow customising built-in behaviours.',
    tags: ['symbol', 'es6', 'primitives']
  },
  {
    id: 'js-020',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How does the this keyword behave in arrow functions versus regular functions?',
    options: [
      'Arrow functions have their own this like regular functions',
      'Arrow functions lexically inherit this from the enclosing scope; regular functions bind this at call time',
      'Regular functions cannot use this',
      'Arrow functions always bind this to window'
    ],
    correctAnswer:
      'Arrow functions lexically inherit this from the enclosing scope; regular functions bind this at call time',
    explanation:
      'Arrow functions capture this from the surrounding lexical context at definition time and cannot be overridden with call/apply/bind. Regular functions\' this depends on how they are called (object method, standalone, constructor, etc.).',
    tags: ['this', 'arrow-functions', 'es6']
  },
  {
    id: 'js-021',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is debouncing and how does it differ from throttling?',
    options: [
      'Both are identical',
      'Debouncing delays execution until activity stops; throttling limits execution to once per interval',
      'Throttling is for network requests only',
      'Debouncing fires immediately, throttling delays'
    ],
    correctAnswer:
      'Debouncing delays execution until activity stops; throttling limits execution to once per interval',
    explanation:
      'Debounce resets a timer on every event, firing only when events stop (good for search input). Throttle fires at most once per specified window regardless of event frequency (good for scroll/resize). Both optimise performance.',
    tags: ['debounce', 'throttle', 'performance']
  },
  {
    id: 'js-022',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the Temporal Dead Zone (TDZ)?',
    options: [
      'A browser security zone',
      'The period between entering a block scope and the let/const declaration being initialised, during which accessing the variable throws a ReferenceError',
      'A delayed execution context',
      'An async state before a Promise resolves'
    ],
    correctAnswer:
      'The period between entering a block scope and the let/const declaration being initialised, during which accessing the variable throws a ReferenceError',
    explanation:
      'let and const are hoisted to the top of their block but remain uninitialised until the declaration line is executed. Accessing them before that line results in a ReferenceError — this range is the TDZ.',
    tags: ['tdz', 'let', 'const', 'hoisting']
  },
  {
    id: 'js-023',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What is the output of: [1,2,3].map(parseInt)?',
    options: ['[1,2,3]', '[1, NaN, NaN]', '[1, NaN, 0]', 'Error'],
    correctAnswer: '[1, NaN, NaN]',
    explanation:
      'map passes (value, index, array) to the callback. parseInt receives (1,0), (2,1), (3,2). parseInt("2", 1) and parseInt("3", 2) both yield NaN because base 1 is invalid and "3" is not valid base-2.',
    tags: ['map', 'parseInt', 'quirks', 'coding']
  },
  {
    id: 'js-024',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is destructuring in JavaScript and where can it be applied?',
    options: [
      'A way to destroy objects',
      'A syntax to unpack values from arrays or properties from objects into variables',
      'Only applicable to arrays',
      'A way to delete object properties'
    ],
    correctAnswer:
      'A syntax to unpack values from arrays or properties from objects into variables',
    explanation:
      'Destructuring works for both arrays ([a, b] = arr) and objects ({x, y} = obj). It supports defaults, renaming, nested patterns, and rest elements. It simplifies parameter extraction and swap operations.',
    tags: ['destructuring', 'es6', 'syntax']
  },
  {
    id: 'js-025',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between Promise.all, Promise.race, Promise.allSettled, and Promise.any?',
    options: [
      'They are all identical',
      'all rejects on first failure; race resolves/rejects on first settled; allSettled waits for all; any resolves on first success',
      'race only works with two promises',
      'allSettled rejects if any promise fails'
    ],
    correctAnswer:
      'all rejects on first failure; race resolves/rejects on first settled; allSettled waits for all; any resolves on first success',
    explanation:
      'Promise.all short-circuits on rejection. Promise.race resolves or rejects with whichever promise settles first. Promise.allSettled always fulfils with all outcomes. Promise.any fulfils with the first success, rejects only if all fail (AggregateError).',
    tags: ['promises', 'combinators', 'async']
  },
  {
    id: 'js-026',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'Explain the concept of memoisation in JavaScript.',
    options: [
      'Storing results in memory for repeated calls with the same arguments to avoid redundant computation',
      'A way to compress memory usage',
      'Clearing the cache on every function call',
      'A garbage collection strategy'
    ],
    correctAnswer:
      'Storing results in previous calls with the same arguments to avoid redundant computation',
    explanation:
      'Memoisation is an optimisation that caches the result of expensive pure functions keyed by input. Subsequent calls with the same arguments return the cached value instantly. Useful for recursive algorithms like Fibonacci.',
    tags: ['memoisation', 'optimisation', 'functional']
  },
  {
    id: 'js-027',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What are WeakMap and WeakSet and when would you use them?',
    options: [
      'Slower versions of Map and Set',
      'Collections that hold weak references to objects, allowing them to be garbage-collected when no other references exist',
      'Collections that only hold primitive values',
      'Thread-safe collections'
    ],
    correctAnswer:
      'Collections that hold weak references to objects, allowing them to be garbage-collected when no other references exist',
    explanation:
      'WeakMap and WeakSet keys/entries must be objects and are weakly held — if no other reference to the key exists, it can be GC\'d. They are non-iterable. Ideal for private data associated with DOM nodes or objects without preventing cleanup.',
    tags: ['weakmap', 'weakset', 'memory', 'gc']
  },
  {
    id: 'js-028',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the module system in JavaScript (ESM vs CommonJS)?',
    options: [
      'Both are identical in all environments',
      'ESM uses import/export and is static; CommonJS uses require/module.exports and is dynamic',
      'CommonJS is the modern standard',
      'ESM is only for browsers; CommonJS only for Node'
    ],
    correctAnswer:
      'ESM uses import/export and is static; CommonJS uses require/module.exports and is dynamic',
    explanation:
      'ESM (ES Modules) imports are resolved statically at parse time, enabling tree-shaking and top-level await. CommonJS require() is dynamic and synchronous. Modern Node.js supports both; browsers natively support ESM.',
    tags: ['modules', 'esm', 'commonjs', 'node']
  },
  {
    id: 'js-029',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'How do you implement a simple curry function in JavaScript?',
    options: [
      'Using a for loop over arguments',
      'A function that returns another function until all arguments are collected, then invokes the original',
      'Using Function.prototype.curry()',
      'Using eval()'
    ],
    correctAnswer:
      'A function that returns another function until all arguments are collected, then invokes the original',
    explanation:
      'curry(fn) returns a curried version. It checks if enough arguments have been supplied (args.length >= fn.length); if not, it returns another function. Implementation: const curry = fn => (...a) => a.length >= fn.length ? fn(...a) : curry(fn.bind(null, ...a));',
    tags: ['currying', 'functional', 'higher-order']
  },
  {
    id: 'js-030',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is optional chaining (?.) and nullish coalescing (??)?',
    options: [
      'Both are bitwise operators',
      '?. short-circuits to undefined on null/undefined; ?? returns the right-hand side only when left is null/undefined',
      '?? is the same as the || operator',
      'Optional chaining is a TypeScript-only feature'
    ],
    correctAnswer:
      '?. short-circuits to undefined on null/undefined; ?? returns the right-hand side only when left is null/undefined',
    explanation:
      'obj?.prop returns undefined rather than throwing if obj is null or undefined. The ?? (nullish coalescing) operator differs from || in that it only uses the fallback for null/undefined, not for all falsy values (0, "", false).',
    tags: ['optional-chaining', 'nullish-coalescing', 'es2020']
  },
  {
    id: 'js-031',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is IIFE (Immediately Invoked Function Expression) and why was it used?',
    options: [
      'A function that only runs on page load',
      'A function expression defined and called immediately, used to create a private scope',
      'A built-in JS function',
      'A generator function shorthand'
    ],
    correctAnswer:
      'A function expression defined and called immediately, used to create a private scope',
    explanation:
      'Before block scope (ES6), IIFEs were the standard pattern to encapsulate variables: (function(){ ... })(). They prevent variable leakage to global scope. Less needed today with let/const but still seen in legacy codebases.',
    tags: ['iife', 'scope', 'patterns', 'legacy']
  },
  {
    id: 'js-032',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between synchronous and asynchronous code in JS?',
    options: [
      'Synchronous code runs faster always',
      'Synchronous code blocks execution until complete; asynchronous code defers work and allows the stack to continue',
      'Asynchronous means multi-threaded',
      'No real difference in a browser'
    ],
    correctAnswer:
      'Synchronous code blocks execution until complete; asynchronous code defers work and allows the stack to continue',
    explanation:
      'JS is single-threaded. Synchronous operations block the call stack. Asynchronous operations (setTimeout, fetch, Promises) use callback/microtask/macrotask queues, letting other code run while waiting for I/O or timers.',
    tags: ['async', 'sync', 'event-loop', 'concurrency']
  },
  {
    id: 'js-033',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is Object.freeze() and how does it differ from const?',
    options: [
      'Both prevent all mutations',
      'const prevents reassignment of the binding; Object.freeze() prevents mutation of the object\'s properties',
      'Object.freeze() performs a deep freeze automatically',
      'const freezes object contents'
    ],
    correctAnswer:
      'const prevents reassignment of the binding; Object.freeze() prevents mutation of the object\'s properties',
    explanation:
      'const makes the variable binding immutable but the object it points to can still be mutated. Object.freeze() makes the object\'s own enumerable properties non-writable and non-configurable, but it is a shallow freeze — nested objects are not frozen.',
    tags: ['immutability', 'object', 'const', 'freeze']
  },
  {
    id: 'js-034',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What are tagged template literals?',
    options: [
      'Template literals with HTML tags inside',
      'A function called with a template literal, allowing custom processing of the template string and its interpolated values',
      'Template literals with CSS class names',
      'A TypeScript-only feature'
    ],
    correctAnswer:
      'A function called with a template literal, allowing custom processing of the template string and its interpolated values',
    explanation:
      'tag`Hello ${name}` calls tag(strings, ...values) where strings is an array of literal parts and values are the interpolated expressions. Used in libraries like styled-components, sql template tags, and i18n.',
    tags: ['template-literals', 'tagged-templates', 'es6']
  },
  {
    id: 'js-035',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'Explain the difference between microtasks and macrotasks.',
    options: [
      'They execute in the same queue',
      'Microtasks (Promise callbacks, queueMicrotask) run before the next macrotask (setTimeout, setInterval, I/O)',
      'Macrotasks run first always',
      'Microtasks are only for Node.js'
    ],
    correctAnswer:
      'Microtasks (Promise callbacks, queueMicrotask) run before the next macrotask (setTimeout, setInterval, I/O)',
    explanation:
      'After each macrotask, the JS engine drains the entire microtask queue before picking the next macrotask. This means Promise.then callbacks always run before setTimeout(fn, 0) callbacks, even if the Promise resolved first.',
    tags: ['event-loop', 'microtasks', 'macrotasks', 'promises']
  },
  {
    id: 'js-036',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the Proxy object in JavaScript?',
    options: [
      'To proxy network requests',
      'To intercept and customise fundamental operations on an object (get, set, has, delete, etc.)',
      'A polyfill for older browsers',
      'A way to clone objects'
    ],
    correctAnswer:
      'To intercept and customise fundamental operations on an object (get, set, has, delete, etc.)',
    explanation:
      'new Proxy(target, handler) wraps an object. The handler defines traps for operations like property access (get), assignment (set), function calls (apply), and more. Used for validation, reactive data systems (Vue 3), and logging.',
    tags: ['proxy', 'reflect', 'meta-programming', 'es6']
  },
  {
    id: 'js-037',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How does Array.prototype.reduce work? Provide a use case.',
    options: [
      'It filters array elements',
      'It iterates over elements, passing an accumulator and current value to a callback, returning a single accumulated result',
      'It reduces array length by removing elements',
      'It sorts and removes duplicates'
    ],
    correctAnswer:
      'It iterates over elements, passing an accumulator and current value to a callback, returning a single accumulated result',
    explanation:
      'reduce((acc, val, idx, arr) => newAcc, initialValue) can implement sum, groupBy, flatten, or even map and filter. Without initialValue, the first element becomes the initial accumulator.',
    tags: ['array', 'reduce', 'functional', 'higher-order']
  },
  {
    id: 'js-038',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'How do you remove duplicate values from an array in JavaScript?',
    options: [
      'arr.filter((v, i) => arr.indexOf(v) !== i)',
      '[...new Set(arr)]',
      'arr.unique()',
      'arr.deduplicate()'
    ],
    correctAnswer: '[...new Set(arr)]',
    explanation:
      'Set only stores unique values. Spreading a Set back into an array gives a deduplicated array in O(n) time. Alternatively Array.from(new Set(arr)) works the same way. The filter+indexOf approach is O(n²).',
    tags: ['array', 'set', 'deduplication', 'coding']
  },
  {
    id: 'js-039',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between for...in and for...of?',
    options: [
      'They are interchangeable',
      'for...in iterates over object keys (enumerable properties); for...of iterates over iterable values',
      'for...of only works on arrays',
      'for...in is faster on arrays'
    ],
    correctAnswer:
      'for...in iterates over object keys (enumerable properties); for...of iterates over iterable values',
    explanation:
      'for...in walks the prototype chain and includes inherited enumerable properties — avoid on arrays. for...of uses the Symbol.iterator protocol, working on arrays, strings, Maps, Sets, generators, and any custom iterable.',
    tags: ['loops', 'iteration', 'for-in', 'for-of']
  },
  {
    id: 'js-040',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is Function composition in JavaScript?',
    options: [
      'Calling multiple functions in a loop',
      'Combining functions such that the output of one becomes the input of the next',
      'Copying function code',
      'Declaring functions inside classes'
    ],
    correctAnswer:
      'Combining functions such that the output of one becomes the input of the next',
    explanation:
      'compose(f, g)(x) = f(g(x)). pipe is left-to-right, compose is right-to-left. Libraries like Ramda provide these, but they\'re trivial to implement: const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x).',
    tags: ['functional', 'composition', 'higher-order']
  },
  {
    id: 'js-041',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What are Iterators and the Iterable protocol in JavaScript?',
    options: [
      'A for loop variant',
      'Objects that implement Symbol.iterator returning an iterator with a next() method that yields {value, done}',
      'A way to iterate over class properties',
      'A synonym for generators'
    ],
    correctAnswer:
      'Objects that implement Symbol.iterator returning an iterator with a next() method that yields {value, done}',
    explanation:
      'An iterable has [Symbol.iterator]() that returns an iterator. An iterator has next() returning {value, done}. Built-ins like Array, String, Map, Set are iterable. Custom iterables work with for...of, spread, destructuring.',
    tags: ['iterators', 'iterables', 'protocol', 'es6']
  },
  {
    id: 'js-042',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between synchronous and asynchronous error handling?',
    options: [
      'try/catch handles async errors natively',
      'try/catch works for synchronous and async/await; .catch() or try/catch in async functions handle Promise rejections',
      'Async errors cannot be caught',
      'Promise errors bubble to window.onerror automatically'
    ],
    correctAnswer:
      'try/catch works for synchronous and async/await; .catch() or try/catch in async functions handle Promise rejections',
    explanation:
      'Uncaught synchronous errors are caught by try/catch. For Promises, unhandled rejections must be caught via .catch() or try/catch in async functions. The global unhandledrejection event catches missed Promise rejections in browsers.',
    tags: ['error-handling', 'promises', 'try-catch', 'async']
  },
  {
    id: 'js-043',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What are rest parameters and how do they differ from the arguments object?',
    options: [
      'They are identical',
      'Rest parameters (...args) collect remaining arguments into a true Array; arguments is array-like, not a real Array, and not available in arrow functions',
      'arguments is available in arrow functions too',
      'Rest parameters are limited to 3 arguments'
    ],
    correctAnswer:
      'Rest parameters (...args) collect remaining arguments into a true Array; arguments is array-like, not a real Array, and not available in arrow functions',
    explanation:
      'function f(...args) gives a real Array with all array methods. The arguments object is available in regular functions only, is array-like, and includes all arguments not just the "rest". Prefer rest params in modern code.',
    tags: ['rest-params', 'arguments', 'es6', 'functions']
  },
  {
    id: 'js-044',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'How would you flatten a nested array in JavaScript?',
    options: [
      'arr.flat(Infinity)',
      'arr.flatten()',
      'arr.spread()',
      'Array.flatMap(arr)'
    ],
    correctAnswer: 'arr.flat(Infinity)',
    explanation:
      'Array.prototype.flat(depth) flattens nested arrays up to the given depth. Passing Infinity flattens fully regardless of nesting level. flatMap(fn) is equivalent to flat(1) after a map. Older polyfill: JSON.parse("["+JSON.stringify(arr).replace(/\[|]/g,"")+ "]").',
    tags: ['array', 'flat', 'coding', 'es2019']
  },
  {
    id: 'js-045',
    topic: 'javascript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of Object.defineProperty()?',
    options: [
      'To define a CSS property',
      'To add or modify a property with fine-grained control over its descriptor (writable, enumerable, configurable, get/set)',
      'To rename a property',
      'To delete a property'
    ],
    correctAnswer:
      'To add or modify a property with fine-grained control over its descriptor (writable, enumerable, configurable, get/set)',
    explanation:
      'Object.defineProperty(obj, key, descriptor) allows defining non-enumerable properties (hidden from for...in), non-writable properties, getters/setters, and non-configurable properties. It is the foundation of reactivity systems and class-based encapsulation.',
    tags: ['object', 'property-descriptor', 'meta-programming']
  },

  // ─────────────────────────────────────────────
  // ADVANCED  (js-046 – js-085)
  // ─────────────────────────────────────────────

  {
    id: 'js-046',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does the V8 engine compile and optimise JavaScript?',
    options: [
      'V8 interprets JS line by line without compilation',
      'V8 uses Ignition (interpreter) to generate bytecode, then TurboFan (JIT compiler) optimises hot functions',
      'V8 compiles JS to C++ directly',
      'V8 uses a single-pass AOT compiler'
    ],
    correctAnswer:
      'V8 uses Ignition (interpreter) to generate bytecode, then TurboFan (JIT compiler) optimises hot functions',
    explanation:
      'V8\'s pipeline: source → Parser → AST → Ignition bytecode → profiling hot code → TurboFan JIT (compiles optimised machine code). De-optimisation occurs when hidden class assumptions break (e.g. polymorphic property access), falling back to Ignition.',
    tags: ['v8', 'jit', 'engine', 'performance', 'internals']
  },
  {
    id: 'js-047',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What are hidden classes in V8 and how do they affect performance?',
    options: [
      'Private class fields in ES2022',
      'Internal type descriptors V8 creates for objects with the same property layout, enabling fast property access; changing property order creates new hidden classes, slowing access',
      'A way to hide class definitions',
      'A security feature of Chrome'
    ],
    correctAnswer:
      'Internal type descriptors V8 creates for objects with the same property layout, enabling fast property access; changing property order creates new hidden classes, slowing access',
    explanation:
      'V8 assigns objects a hidden class (shape). If many objects share the same property order, V8 optimises property access to an offset lookup. Adding properties in different orders produces different hidden classes, preventing optimisation. Always initialise all properties in the constructor.',
    tags: ['v8', 'hidden-classes', 'shapes', 'performance', 'internals']
  },
  {
    id: 'js-048',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does garbage collection work in JavaScript?',
    options: [
      'JS has no garbage collection — developers free memory manually',
      'V8 uses mark-and-sweep with generational collection (young/old space), incremental marking, and concurrent sweeping',
      'JS uses reference counting only',
      'Garbage collection runs on every function call'
    ],
    correctAnswer:
      'V8 uses mark-and-sweep with generational collection (young/old space), incremental marking, and concurrent sweeping',
    explanation:
      'V8 divides the heap into new space (short-lived objects, minor GC via Scavenge) and old space (long-lived, major GC via mark-and-sweep). Incremental marking interleaves GC with JS execution to minimise pauses. Orinoco enables concurrent and parallel GC.',
    tags: ['gc', 'memory', 'v8', 'mark-and-sweep', 'internals']
  },
  {
    id: 'js-049',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is tail call optimisation (TCO) and is it supported in JS?',
    options: [
      'Optimising the last CSS property in a style rule',
      'Reusing the current stack frame for a recursive call that is the last operation in a function, preventing stack overflow; ES6 specifies it but most engines only support it in strict mode, if at all',
      'A Babel transformation for tail calls',
      'A Node.js-only feature'
    ],
    correctAnswer:
      'Reusing the current stack frame for a recursive call that is the last operation in a function, preventing stack overflow; ES6 specifies it but most engines only support it in strict mode, if at all',
    explanation:
      'TCO allows deep recursion without growing the call stack. ES6 mandates it for strict-mode tail calls, but V8 removed support and SpiderMonkey has partial support. Practically, use trampolining or iteration for stack-safe recursion in JS today.',
    tags: ['tco', 'recursion', 'optimisation', 'stack']
  },
  {
    id: 'js-050',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Design Patterns',
    question: 'What is the Observer pattern and how is it implemented in JavaScript?',
    options: [
      'A pattern for observing DOM changes only',
      'A pattern where a subject maintains a list of observers and notifies them on state changes, implemented via pub/sub or EventEmitter',
      'A React-only pattern',
      'A pattern for observing network requests'
    ],
    correctAnswer:
      'A pattern where a subject maintains a list of observers and notifies them on state changes, implemented via pub/sub or EventEmitter',
    explanation:
      'The Observer pattern decouples producers from consumers. In JS: an object maintains an array of listener functions per event name. subscribe() adds, unsubscribe() removes, and emit() iterates and calls them. The DOM EventTarget API is a native implementation.',
    tags: ['observer', 'design-patterns', 'pub-sub', 'events']
  },
  {
    id: 'js-051',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Explain structural sharing in immutable data structures.',
    options: [
      'Copying all data on every mutation',
      'New versions of a data structure share unchanged sub-trees with the old version, avoiding full copies',
      'Storing shared data in a global variable',
      'Compressing data in memory'
    ],
    correctAnswer:
      'New versions of a data structure share unchanged sub-trees with the old version, avoiding full copies',
    explanation:
      'Libraries like Immer and Immutable.js use persistent data structures. When you update a node, only the path from root to that node is copied; all unchanged branches are shared by reference. This gives O(log n) updates instead of O(n) deep clones.',
    tags: ['immutability', 'structural-sharing', 'functional', 'performance']
  },
  {
    id: 'js-052',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How do JavaScript engines handle inline caching (IC)?',
    options: [
      'Caching the result of every function',
      'Storing the type feedback for property accesses so subsequent accesses of the same shape skip the property lookup',
      'Caching HTTP responses inside the engine',
      'Storing compiled bytecode on disk'
    ],
    correctAnswer:
      'Storing the type feedback for property accesses so subsequent accesses of the same shape skip the property lookup',
    explanation:
      'ICs record the hidden class of an object at a property access site. On the next execution, if the shape matches (monomorphic), the engine uses a direct offset read. Multiple shapes degrade to polymorphic or megamorphic IC, reducing performance significantly.',
    tags: ['inline-cache', 'v8', 'performance', 'internals']
  },
  {
    id: 'js-053',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between Object.create(null) and {}?',
    options: [
      'No difference',
      'Object.create(null) creates an object with no prototype chain, free from inherited properties like toString, hasOwnProperty',
      'Object.create(null) creates an empty frozen object',
      '{} creates an object with no prototype'
    ],
    correctAnswer:
      'Object.create(null) creates an object with no prototype chain, free from inherited properties like toString, hasOwnProperty',
    explanation:
      'A plain {} has Object.prototype in its chain, giving it methods like toString and hasOwnProperty. Object.create(null) produces a truly empty dictionary with no prototype, useful for hash maps without prototype pollution risk.',
    tags: ['object', 'prototype', 'null-prototype', 'internals']
  },
  {
    id: 'js-054',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'Implement a trampoline function to enable stack-safe mutual recursion.',
    options: [
      'A higher-order function that iteratively calls a function as long as it returns another function, avoiding stack overflow',
      'A function that bounces between two call stacks',
      'A polyfill for tail call optimisation',
      'A setTimeout-based recursion helper'
    ],
    correctAnswer:
      'A higher-order function that iteratively calls a function as long as it returns another function, avoiding stack overflow',
    explanation:
      'const trampoline = fn => (...args) => { let result = fn(...args); while (typeof result === "function") result = result(); return result; }. Recursive calls return thunks (zero-arg functions) instead of calling directly, keeping the stack flat.',
    tags: ['trampoline', 'recursion', 'functional', 'stack-safety']
  },
  {
    id: 'js-055',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What are async generators and async iterators?',
    options: [
      'Generators that return Promises',
      'Generators that yield Promises and can be consumed with for await...of, combining lazy iteration with asynchrony',
      'Regular generators in async functions',
      'A Node.js streams API'
    ],
    correctAnswer:
      'Generators that yield Promises and can be consumed with for await...of, combining lazy iteration with asynchrony',
    explanation:
      'async function* gen() { yield await fetch(...); } creates an async generator. Consumed via for await (const val of gen()) it awaits each yielded Promise. Perfect for paginated APIs, streaming data, and reactive sequences.',
    tags: ['async-generators', 'async-iterators', 'es2018', 'streams']
  },
  {
    id: 'js-056',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Explain the concept of algebraic effects and how they relate to JS (React Suspense / Error Boundaries).',
    options: [
      'A mathematical concept unrelated to JavaScript',
      'A way to abstract side effects so that handlers can be defined separately from where effects are triggered, similar to how Suspense/Error Boundaries catch thrown Promises/errors up the component tree',
      'A Redux middleware pattern',
      'A WebAssembly feature'
    ],
    correctAnswer:
      'A way to abstract side effects so that handlers can be defined separately from where effects are triggered, similar to how Suspense/Error Boundaries catch thrown Promises/errors up the component tree',
    explanation:
      'React Suspense throws a Promise; a Suspense boundary catches it, shows a fallback, and retries when resolved — mimicking algebraic effects. Error Boundaries catch thrown errors. This decouples async logic from UI code, similar to how effect handlers work in languages like Koka.',
    tags: ['algebraic-effects', 'react', 'suspense', 'advanced-theory']
  },
  {
    id: 'js-057',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is prototype pollution and how can it be prevented?',
    options: [
      'Adding too many methods to a class',
      'Malicious or accidental modification of Object.prototype, causing unexpected properties to appear on all objects',
      'A memory leak pattern',
      'A CSS specificity conflict'
    ],
    correctAnswer:
      'Malicious or accidental modification of Object.prototype, causing unexpected properties to appear on all objects',
    explanation:
      'If user input like {"__proto__": {"isAdmin": true}} is merged naively, it pollutes Object.prototype. Prevention: use Object.create(null) for dictionaries, validate keys (if key === "__proto__") skip), use Map instead of plain objects, or use deep merge libraries that guard against it.',
    tags: ['prototype-pollution', 'security', 'vulnerability']
  },
  {
    id: 'js-058',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does requestAnimationFrame differ from setTimeout for animations?',
    options: [
      'They are identical in timing',
      'rAF syncs with the display refresh rate (typically 60fps), batches calls before each repaint, and pauses in hidden tabs; setTimeout is timer-based and not frame-aligned',
      'setTimeout is more accurate than rAF',
      'rAF only works in Node.js'
    ],
    correctAnswer:
      'rAF syncs with the display refresh rate (typically 60fps), batches calls before each repaint, and pauses in hidden tabs; setTimeout is timer-based and not frame-aligned',
    explanation:
      'requestAnimationFrame fires just before the browser\'s next paint, enabling smooth 60fps animations. It automatically throttles in background tabs, saving CPU/battery. setTimeout(fn, 16) drifts over time due to clamping and event loop delays.',
    tags: ['animation', 'rAF', 'performance', 'browser']
  },
  {
    id: 'js-059',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of the Reflect API?',
    options: [
      'To reflect CSS styles onto JavaScript objects',
      'To provide a unified object for JS meta-operations that mirrors Proxy traps, with correct return values and propagation of receiver',
      'To introspect class inheritance',
      'To implement mirrors in canvas'
    ],
    correctAnswer:
      'To provide a unified object for JS meta-operations that mirrors Proxy traps, with correct return values and propagation of receiver',
    explanation:
      'Reflect has the same methods as Proxy traps (Reflect.get, Reflect.set, Reflect.apply, etc.). Inside Proxy handlers, using Reflect ensures correct this binding (receiver) is forwarded. It also provides reliable return values (boolean for set/defineProperty) vs older approaches that throw.',
    tags: ['reflect', 'proxy', 'meta-programming', 'es6']
  },
  {
    id: 'js-060',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between reflow and repaint in the browser rendering pipeline?',
    options: [
      'They are the same process',
      'Reflow (layout) recalculates geometry of all affected elements; repaint only updates visual properties like color without changing geometry',
      'Repaint is more expensive than reflow',
      'Reflow only happens on initial load'
    ],
    correctAnswer:
      'Reflow (layout) recalculates geometry of all affected elements; repaint only updates visual properties like color without changing geometry',
    explanation:
      'Reflow is triggered by geometry changes (width, height, position) and is expensive because it cascades to parent and sibling elements. Repaint (background-color, outline) only redraws pixels. Compositor-layer changes (transform, opacity) skip both, making them the cheapest animation properties.',
    tags: ['browser', 'reflow', 'repaint', 'performance', 'rendering']
  },
  {
    id: 'js-061',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Explain the concept of a monad in the context of JavaScript (using Maybe as example).',
    options: [
      'A monad is a type of class decorator',
      'A design pattern that wraps a value and provides of (unit) and chain (bind/flatMap) to compose operations that may produce context, such as Maybe handling null-safety without if-checks',
      'A mathematical structure with no JS relevance',
      'A way to define monads in TypeScript only'
    ],
    correctAnswer:
      'A design pattern that wraps a value and provides of (unit) and chain (bind/flatMap) to compose operations that may produce context, such as Maybe handling null-safety without if-checks',
    explanation:
      'Maybe<T> is either Just(value) or Nothing. map transforms the inner value; chain (flatMap) prevents double-wrapping when the mapping function itself returns a Maybe. This eliminates null checks through composition. Promises are monadic: .then is flatMap.',
    tags: ['monad', 'maybe', 'functional', 'advanced-theory']
  },
  {
    id: 'js-062',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is structural typing vs nominal typing and how does JavaScript fit in?',
    options: [
      'JS uses nominal typing like Java',
      'JS is dynamically and structurally typed — type compatibility is determined by shape (properties/methods), not by name or declaration',
      'JS uses neither — it has no type system',
      'JS uses nominal typing at runtime'
    ],
    correctAnswer:
      'JS is dynamically and structurally typed — type compatibility is determined by shape (properties/methods), not by name or declaration',
    explanation:
      'In JavaScript, an object with a .then() method is treated as a thenable (Promise-compatible) regardless of its constructor. This is duck typing / structural typing. TypeScript adds static structural typing: a class is compatible with an interface if it has the required shape.',
    tags: ['typing', 'structural', 'nominal', 'duck-typing', 'typescript']
  },
  {
    id: 'js-063',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you implement Observable (like RxJS) from scratch?',
    options: [
      'Using Promise chains',
      'An object with a subscribe method that receives an observer {next, error, complete} and returns an unsubscribe teardown function',
      'Using event listeners on window',
      'Using a global state machine'
    ],
    correctAnswer:
      'An object with a subscribe method that receives an observer {next, error, complete} and returns an unsubscribe teardown function',
    explanation:
      'class Observable { constructor(subscriber) { this._sub = subscriber; } subscribe(observer) { return this._sub(observer); } }. Operators (map, filter) return new Observables that wrap the original. Cold observables start producing on subscribe; hot observables (Subject) multicast.',
    tags: ['observable', 'rxjs', 'functional-reactive', 'patterns']
  },
  {
    id: 'js-064',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the Atomics API and SharedArrayBuffer used for?',
    options: [
      'For atomic CSS operations',
      'For sharing memory between the main thread and Web Workers with atomic read-modify-write operations to prevent data races',
      'For encrypting array buffers',
      'For GPU memory access'
    ],
    correctAnswer:
      'For sharing memory between the main thread and Web Workers with atomic read-modify-write operations to prevent data races',
    explanation:
      'SharedArrayBuffer allows true memory sharing between a page and its workers. Atomics.add, Atomics.compareExchange, Atomics.wait/notify provide lock-free primitives. Atomics.store/load guarantee visibility across threads. Requires cross-origin isolation (COOP/COEP headers).',
    tags: ['atomics', 'shared-array-buffer', 'workers', 'concurrency']
  },
  {
    id: 'js-065',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How do you build a reactive system (like Vue 3 / Signals) using Proxy?',
    options: [
      'Using Object.observe (deprecated)',
      'Wrapping state in a Proxy with get trap to track effect dependencies and set trap to trigger re-execution of dependent effects',
      'Using setInterval to poll for changes',
      'Using MutationObserver on the state object'
    ],
    correctAnswer:
      'Wrapping state in a Proxy with get trap to track effect dependencies and set trap to trigger re-execution of dependent effects',
    explanation:
      'On get: record the currently running effect as dependent on this key. On set: look up dependents for this key and re-run them. Vue 3\'s reactivity and TC39 Signals proposal both use this approach. Effects are tracked in a WeakMap<target, Map<key, Set<effect>>>.',
    tags: ['reactivity', 'proxy', 'signals', 'vue', 'advanced']
  },
  {
    id: 'js-066',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is "function purity" and why does it matter for optimisation and testing?',
    options: [
      'A function that only accepts numbers',
      'A function whose output depends solely on its inputs and causes no side effects',
      'A function without closures',
      'A function with no parameters'
    ],
    correctAnswer:
      'A function whose output depends solely on its inputs and causes no side effects',
    explanation:
      'Pure functions are deterministic and referentially transparent — they can be memoised, parallelised, and tested in isolation without mocking. They form the basis of functional programming and are critical for reliable reducers (Redux) and rendering (React components).',
    tags: ['purity', 'functional', 'side-effects', 'testing']
  },
  {
    id: 'js-067',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does the JavaScript spec handle the "Abstract Equality Comparison" algorithm?',
    options: [
      'It compares bitwise representations',
      'It defines a multi-step algorithm with type coercion rules: ToPrimitive, ToNumber, ToBoolean applied in specific order based on operand types',
      'It uses the same logic as ===',
      'It is browser-defined, not in the spec'
    ],
    correctAnswer:
      'It defines a multi-step algorithm with type coercion rules: ToPrimitive, ToNumber, ToBoolean applied in specific order based on operand types',
    explanation:
      'The spec\'s Abstract Equality Comparison (==) handles: same type → use ===, null==undefined → true, number+string → ToNumber(string), boolean operand → ToNumber(boolean), object+primitive → ToPrimitive(object). This is why [] == ![] is true.',
    tags: ['spec', 'coercion', 'equality', 'abstract']
  },
  {
    id: 'js-068',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of FinalizationRegistry and WeakRef?',
    options: [
      'To manually free memory',
      'WeakRef holds a weak reference to an object without preventing GC; FinalizationRegistry runs a callback after the held object is collected',
      'To observe GC in real time',
      'To create cyclic references safely'
    ],
    correctAnswer:
      'WeakRef holds a weak reference to an object without preventing GC; FinalizationRegistry runs a callback after the held object is collected',
    explanation:
      'WeakRef.deref() returns the object or undefined if it was collected. FinalizationRegistry(callback) calls callback(heldValue) when a registered object is GC\'d. Both are ES2021 and useful for caches, avoiding memory leaks while cleaning up external resources.',
    tags: ['weakref', 'finalization-registry', 'gc', 'es2021', 'memory']
  },
  {
    id: 'js-069',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you implement a Promise from scratch (spec-compliant core)?',
    options: [
      'Using setTimeout and callbacks',
      'Maintaining state (pending/fulfilled/rejected), a value, and queued handlers; resolving schedules handlers as microtasks',
      'Wrapping setInterval',
      'Using generators exclusively'
    ],
    correctAnswer:
      'Maintaining state (pending/fulfilled/rejected), a value, and queued handlers; resolving schedules handlers as microtasks',
    explanation:
      'Core: store state and value, queue then-handlers. resolve(value) transitions to fulfilled, schedules queued onFulfilled callbacks via queueMicrotask. reject similar. then() returns a new Promise chained to the current handlers. Flattening thenables prevents double-wrapping.',
    tags: ['promise-implementation', 'spec', 'microtasks', 'advanced-coding']
  },
  {
    id: 'js-070',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Explain the concept of abstract syntax trees (AST) in JavaScript tooling.',
    options: [
      'A tree of HTML elements',
      'A tree data structure representing the syntactic structure of source code, used by parsers, compilers, linters, and code transformers',
      'A virtualised DOM tree',
      'A way to visualise call stacks'
    ],
    correctAnswer:
      'A tree data structure representing the syntactic structure of source code, used by parsers, compilers, linters, and code transformers',
    explanation:
      'Parsers like Acorn, Babel parser, and Esprima convert source to an AST. Babel transforms ASTs (plugin writes visitor pattern) and regenerates code. ESLint traverses ASTs to enforce rules. Understanding ASTs is essential for writing Babel plugins, codemods, and custom linters.',
    tags: ['ast', 'babel', 'tooling', 'compiler', 'parser']
  },
  {
    id: 'js-071',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the Temporal API (TC39 Stage 3) and why is it needed?',
    options: [
      'A timer API replacing setTimeout',
      'A new date/time API providing immutable, timezone-aware types like Temporal.PlainDate, ZonedDateTime, replacing the broken Date object',
      'A way to schedule async code',
      'An API for animating elements over time'
    ],
    correctAnswer:
      'A new date/time API providing immutable, timezone-aware types like Temporal.PlainDate, ZonedDateTime, replacing the broken Date object',
    explanation:
      'Date has well-known flaws: mutable, no timezone awareness beyond UTC/local, month indexing from 0, no duration type, no calendar support. Temporal provides Instant, PlainDate, PlainTime, ZonedDateTime, Duration, Calendar, TimeZone — all immutable and with clear semantics.',
    tags: ['temporal', 'date', 'tc39', 'proposal']
  },
  {
    id: 'js-072',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How do you detect and prevent memory leaks in JavaScript applications?',
    options: [
      'Memory leaks are impossible in a GC language',
      'Use Chrome DevTools heap snapshots to find detached DOM nodes, retained closures, forgotten event listeners, and growing Maps/Sets not cleared',
      'Use delete on every object',
      'Call gc() periodically'
    ],
    correctAnswer:
      'Use Chrome DevTools heap snapshots to find detached DOM nodes, retained closures, forgotten event listeners, and growing Maps/Sets not cleared',
    explanation:
      'Common leak sources: event listeners on removed elements (use AbortController or removeEventListener), closures capturing large data, global variables, timers not cleared (clearInterval), WeakMap vs Map choice. Heap snapshots, allocation timelines, and retained size in DevTools help identify leaks.',
    tags: ['memory-leaks', 'debugging', 'devtools', 'performance']
  },
  {
    id: 'js-073',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What are CSS Houdini APIs and how do they interact with JavaScript?',
    options: [
      'A CSS animation library',
      'A set of low-level browser APIs exposing parts of the CSS/rendering engine to JS — Paint Worklet, Layout Worklet, Animation Worklet — enabling high-performance custom rendering',
      'A polyfill system for CSS',
      'A way to write inline CSS in JS'
    ],
    correctAnswer:
      'A set of low-level browser APIs exposing parts of the CSS/rendering engine to JS — Paint Worklet, Layout Worklet, Animation Worklet — enabling high-performance custom rendering',
    explanation:
      'Houdini exposes hooks into the CSSOM. CSS Paint API (registerPaint) lets JS draw backgrounds at paint time in a WorkletGlobalScope. CSS Properties and Values API (CSS.registerProperty) adds typed custom properties with syntax, inherits, and initialValue.',
    tags: ['houdini', 'worklets', 'rendering', 'advanced', 'browser']
  },
  {
    id: 'js-074',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Explain how the Scheduler API and task prioritisation work in the browser.',
    options: [
      'Browsers execute all JS at equal priority',
      'scheduler.postTask() allows queuing work at user-visible, user-blocking, or background priority, integrating with the browser\'s task scheduler',
      'setTimeout priority is the only control available',
      'Web Workers are the only way to prioritise tasks'
    ],
    correctAnswer:
      'scheduler.postTask() allows queuing work at user-visible, user-blocking, or background priority, integrating with the browser\'s task scheduler',
    explanation:
      'The Prioritized Task Scheduling API (scheduler.postTask) lets you schedule callbacks at three priority levels. It supports abort signals and priority changes. This enables frameworks like React (with its Scheduler package) to yield to the browser for user interactions and reprioritise updates.',
    tags: ['scheduler', 'task-priority', 'browser', 'performance', 'api']
  },
  {
    id: 'js-075',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between hard binding, soft binding, and explicit binding of this?',
    options: [
      'All three are identical',
      'Hard binding (bind) permanently overrides this; explicit binding (call/apply) overrides for one call; soft binding (library utility) overrides only when this would default to global/undefined',
      'Soft binding is the same as arrow functions',
      'Hard binding is only for constructors'
    ],
    correctAnswer:
      'Hard binding (bind) permanently overrides this; explicit binding (call/apply) overrides for one call; soft binding (library utility) overrides only when this would default to global/undefined',
    explanation:
      'Function.prototype.bind() produces a hard-bound function — even call/apply cannot re-override it. Kyle Simpson\'s "softBind" polyfill overrides this only when it would be global/undefined, preserving explicit binding. Useful for optional context injection.',
    tags: ['this', 'binding', 'hard-binding', 'soft-binding', 'advanced']
  },
  {
    id: 'js-076',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you implement a LRU (Least Recently Used) cache in JavaScript?',
    options: [
      'Using a plain object with timestamps',
      'Using a Map (which maintains insertion order) combined with a max-size limit; on get, delete and re-insert the key to move it to the end',
      'Using an array sorted by access time',
      'Using localStorage'
    ],
    correctAnswer:
      'Using a Map (which maintains insertion order) combined with a max-size limit; on get, delete and re-insert the key to move it to the end',
    explanation:
      'Map preserves insertion order. On get: delete(key), set(key, value) to move to end (most recent). On set: if size > capacity, delete the first iterator entry (least recently used). All operations are O(1) with Map. Alternatively, use a doubly-linked list + hash map for a more classic implementation.',
    tags: ['lru-cache', 'map', 'data-structures', 'coding', 'advanced']
  },
  {
    id: 'js-077',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is "deoptimisation" in V8 and what triggers it?',
    options: [
      'Removing unused code',
      'V8 discarding optimised machine code and falling back to bytecode when its type assumptions are invalidated (e.g. changing argument types, adding properties to an assumed-stable shape)',
      'Minifying JS for production',
      'A debug mode in Node.js'
    ],
    correctAnswer:
      'V8 discarding optimised machine code and falling back to bytecode when its type assumptions are invalidated (e.g. changing argument types, adding properties to an assumed-stable shape)',
    explanation:
      'TurboFan optimises based on observed types. If a function later receives a different type, V8 deoptimises (bails out) to Ignition. Repeated deoptimisation (oscillation) can severely hurt performance. Avoid type instability: always pass consistent argument types and object shapes.',
    tags: ['v8', 'deoptimisation', 'jit', 'performance', 'internals']
  },
  {
    id: 'js-078',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does JavaScript\'s number system represent integers exactly, and what is Number.MAX_SAFE_INTEGER?',
    options: [
      'Integers are exact up to 2^63 - 1',
      'IEEE 754 double-precision floats represent integers exactly up to 2^53 - 1 (Number.MAX_SAFE_INTEGER = 9007199254740991); beyond this, integer arithmetic loses precision',
      'All integers are stored as 32-bit values',
      'Number.MAX_SAFE_INTEGER is 2^32 - 1'
    ],
    correctAnswer:
      'IEEE 754 double-precision floats represent integers exactly up to 2^53 - 1 (Number.MAX_SAFE_INTEGER = 9007199254740991); beyond this, integer arithmetic loses precision',
    explanation:
      'A 64-bit float has 52 mantissa bits + 1 implicit, giving 53 bits of integer precision. Numbers above MAX_SAFE_INTEGER cannot represent all consecutive integers. Use BigInt for arbitrary precision integer arithmetic.',
    tags: ['number', 'ieee754', 'bigint', 'precision', 'internals']
  },
  {
    id: 'js-079',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the TC39 proposal process and what are its 5 stages?',
    options: [
      'There are only 3 stages: draft, review, published',
      'Stage 0 (strawperson), 1 (proposal), 2 (draft), 3 (candidate), 4 (finished/merged to spec)',
      'TC39 proposals are managed by browser vendors, not committees',
      'Only Stage 3 and 4 exist publicly'
    ],
    correctAnswer:
      'Stage 0 (strawperson), 1 (proposal), 2 (draft), 3 (candidate), 4 (finished/merged to spec)',
    explanation:
      'TC39 manages ECMAScript evolution. Stage 0: informal idea. Stage 1: formal proposal with champion, use cases, initial spec text. Stage 2: detailed spec, two implementations expected. Stage 3: complete spec, browsers implement. Stage 4: fully ready, included in next ES release.',
    tags: ['tc39', 'ecmascript', 'spec', 'proposals', 'governance']
  },
  {
    id: 'js-080',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does zone.js (used by Angular) intercept asynchronous operations?',
    options: [
      'By overriding the event loop',
      'By monkey-patching browser async APIs (setTimeout, Promise, fetch, addEventListener) to track async context and notify Angular when tasks start/end, enabling change detection',
      'By running in a Web Worker',
      'By intercepting HTTP requests only'
    ],
    correctAnswer:
      'By monkey-patching browser async APIs (setTimeout, Promise, fetch, addEventListener) to track async context and notify Angular when tasks start/end, enabling change detection',
    explanation:
      'Zone.js wraps all async APIs at load time. Each "zone" tracks running tasks. When a macrotask/microtask starts or completes in Angular\'s zone, Angular\'s change detection is triggered. The TC39 AsyncContext proposal aims to provide a native solution to zone-like context propagation.',
    tags: ['zone.js', 'angular', 'monkey-patching', 'async-context', 'advanced']
  },
  {
    id: 'js-081',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'Implement a typed EventEmitter using TypeScript generics to ensure type-safe event names and payloads.',
    options: [
      'Using a plain object with string keys',
      'class TypedEmitter<Events extends Record<string, unknown>> using a Map<keyof Events, Set<(payload) => void>> with typed on/off/emit methods constrained by the Events generic',
      'Using Function.prototype.bind for each event',
      'Using WeakMap for event handlers'
    ],
    correctAnswer:
      'class TypedEmitter<Events extends Record<string, unknown>> using a Map<keyof Events, Set<(payload) => void>> with typed on/off/emit methods constrained by the Events generic',
    explanation:
      'type Listener<T> = (payload: T) => void; class TypedEmitter<E extends Record<string, unknown>> { private map = new Map<keyof E, Set<Listener<any>>>(); on<K extends keyof E>(event: K, fn: Listener<E[K]>) {} emit<K extends keyof E>(event: K, payload: E[K]) {} }. TypeScript enforces correct payload types at each emit/on call.',
    tags: ['typescript', 'generics', 'event-emitter', 'type-safety', 'advanced']
  },
  {
    id: 'js-082',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is CSP (Content Security Policy) and how does it affect JavaScript execution?',
    options: [
      'A JavaScript API for security checks',
      'An HTTP header that restricts which scripts can run, preventing XSS by disallowing inline scripts and eval() unless explicitly permitted via nonces or hashes',
      'A Node.js security module',
      'A browser feature only for CSS'
    ],
    correctAnswer:
      'An HTTP header that restricts which scripts can run, preventing XSS by disallowing inline scripts and eval() unless explicitly permitted via nonces or hashes',
    explanation:
      'Content-Security-Policy: default-src \'self\'; script-src \'nonce-XYZ\' blocks inline scripts and eval. Nonces are per-request random values added to allowed script tags. Strict-dynamic allows scripts loaded by trusted scripts. CSP is a critical XSS mitigation layer.',
    tags: ['csp', 'security', 'xss', 'headers', 'browser']
  },
  {
    id: 'js-083',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does tree-shaking work in modern bundlers like Rollup and Webpack?',
    options: [
      'By deleting unused CSS',
      'By statically analysing ES module import/export graphs and eliminating code that is never referenced in the final bundle',
      'By minifying variable names',
      'By running code and removing never-executed branches'
    ],
    correctAnswer:
      'By statically analysing ES module import/export graphs and eliminating code that is never referenced in the final bundle',
    explanation:
      'ESM\'s static structure lets bundlers trace which exports are used from each module. Unused exports are marked "dead code" and excluded. CommonJS require() is dynamic, preventing static analysis. Side-effect-free packages (sideEffects: false in package.json) allow full tree-shaking.',
    tags: ['tree-shaking', 'bundling', 'rollup', 'webpack', 'esm', 'performance']
  },
  {
    id: 'js-084',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between eager and lazy evaluation in JavaScript?',
    options: [
      'Eager evaluation is incorrect evaluation',
      'Eager evaluation computes values immediately; lazy evaluation defers computation until needed, implemented via thunks, generators, or Proxy get traps',
      'Lazy evaluation is always faster',
      'JS only supports eager evaluation'
    ],
    correctAnswer:
      'Eager evaluation computes values immediately; lazy evaluation defers computation until needed, implemented via thunks, generators, or Proxy get traps',
    explanation:
      'JS is eagerly evaluated by default (arguments evaluated before function call). Lazy evaluation is achieved with thunks (() => expensiveComputation()), generators (yield on demand), or Proxy get traps (compute on access). Crucial for infinite sequences and optional computation.',
    tags: ['lazy-evaluation', 'thunks', 'generators', 'functional']
  },
  {
    id: 'js-085',
    topic: 'javascript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does the SameValueZero comparison algorithm differ from strict equality (===)?',
    options: [
      'They are identical',
      'SameValueZero treats +0 and -0 as equal (like ===) but also considers NaN === NaN, unlike ===; used internally by Map, Set, and Array.prototype.includes',
      'SameValueZero uses type coercion',
      'Strict equality treats NaN as equal to NaN'
    ],
    correctAnswer:
      'SameValueZero treats +0 and -0 as equal (like ===) but also considers NaN === NaN, unlike ===; used internally by Map, Set, and Array.prototype.includes',
    explanation:
      'JS has four equality algorithms: Abstract (==), Strict (===), SameValue (Object.is — distinguishes +0/-0, NaN===NaN), and SameValueZero (like SameValue but +0===-0). Map/Set key lookup and Array.includes use SameValueZero.',
    tags: ['equality', 'same-value-zero', 'spec', 'map', 'set', 'NaN']
  },

  // ─────────────────────────────────────────────
  // MNC LEVEL  (js-086 – js-120)
  // ─────────────────────────────────────────────

  {
    id: 'js-086',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a client-side feature flag system in JavaScript?',
    options: [
      'Using a global boolean variable',
      'A service that fetches flag configs, stores them (memory + localStorage), exposes isEnabled(flagKey) with user/percentage targeting, and supports real-time updates via SSE/WebSocket',
      'Using environment variables only',
      'Hardcoding flags in a constants file'
    ],
    correctAnswer:
      'A service that fetches flag configs, stores them (memory + localStorage), exposes isEnabled(flagKey) with user/percentage targeting, and supports real-time updates via SSE/WebSocket',
    explanation:
      'Production feature flag systems need: fetching configs from a remote service, local caching with TTL, deterministic percentage rollout (hash(userId + flagKey) % 100 < percentage), override support for testing, context-based targeting, and real-time updates without page reload.',
    tags: ['feature-flags', 'system-design', 'architecture', 'mnc']
  },
  {
    id: 'js-087',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you architect a large-scale frontend application for team scalability?',
    options: [
      'Use a single large React component',
      'Apply micro-frontends or module federation with domain-driven vertical slices, shared design system, contract testing, and independent CI/CD per team',
      'Use a single monorepo with no code boundaries',
      'Let each team use different frameworks without coordination'
    ],
    correctAnswer:
      'Apply micro-frontends or module federation with domain-driven vertical slices, shared design system, contract testing, and independent CI/CD per team',
    explanation:
      'At scale: Module Federation (Webpack 5) or single-spa enables independent deployment. Organize by domain (checkout, catalog, auth). Share a versioned component library. Use contract tests (Pact) to prevent integration regressions. Establish a platform team for shared infra (auth, routing, analytics).',
    tags: ['micro-frontends', 'module-federation', 'architecture', 'scalability', 'mnc']
  },
  {
    id: 'js-088',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you implement and measure Time to Interactive (TTI) and optimise it?',
    options: [
      'TTI is the same as DOMContentLoaded',
      'TTI is the time until the main thread is consistently idle and the page responds to user input within 50ms; optimise via code splitting, reducing long tasks, deferring non-critical JS, and using web workers',
      'TTI is measured by the number of DOM nodes',
      'TTI only applies to mobile devices'
    ],
    correctAnswer:
      'TTI is the time until the main thread is consistently idle and the page responds to user input within 50ms; optimise via code splitting, reducing long tasks, deferring non-critical JS, and using web workers',
    explanation:
      'TTI marks when the page is visually rendered AND reliably interactive (no long tasks >50ms for 5+ seconds). Measure with Lighthouse or PerformanceObserver. Optimise: route-level code splitting, preload critical resources, break up long tasks with scheduler.yield(), move heavy computation to workers.',
    tags: ['tti', 'performance', 'core-web-vitals', 'optimisation', 'mnc']
  },
  {
    id: 'js-089',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'Design a real-time collaborative text editor in JavaScript (like Google Docs).',
    options: [
      'Use WebSockets to send full document on every keystroke',
      'Use Operational Transformation (OT) or CRDT (e.g. Yjs) to merge concurrent edits without conflicts, with a WebSocket server for broadcast and offline-first sync',
      'Lock the document while one user edits',
      'Use polling every second for updates'
    ],
    correctAnswer:
      'Use Operational Transformation (OT) or CRDT (e.g. Yjs) to merge concurrent edits without conflicts, with a WebSocket server for broadcast and offline-first sync',
    explanation:
      'OT (used by Google Docs) transforms concurrent operations to be compatible. CRDTs (Yjs, Automerge) guarantee convergence without a central server. Yjs integrates with ProseMirror/Slate. A relay server (y-websocket) broadcasts ops; clients apply and propagate their own deltas.',
    tags: ['collaboration', 'crdt', 'ot', 'websockets', 'system-design', 'mnc']
  },
  {
    id: 'js-090',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How do you implement a robust client-side caching strategy for a high-traffic SPA?',
    options: [
      'Cache everything in localStorage forever',
      'Layer in-memory (stale-while-revalidate), Service Worker cache (Cache API with versioned cache names), HTTP cache headers, and a normalised query cache (React Query / Apollo)',
      'Disable caching for correctness',
      'Use only HTTP ETag headers'
    ],
    correctAnswer:
      'Layer in-memory (stale-while-revalidate), Service Worker cache (Cache API with versioned cache names), HTTP cache headers, and a normalised query cache (React Query / Apollo)',
    explanation:
      'Layered caching: HTTP cache (Cache-Control, ETags) for static assets; Service Worker with versioned caches for offline; query library cache (React Query) with TTL and background revalidation for API data; normalised entity cache (Apollo/Redux) to prevent duplicate fetches for the same entity.',
    tags: ['caching', 'service-worker', 'react-query', 'performance', 'mnc']
  },
  {
    id: 'js-091',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you implement a custom scheduler with priority queues in JavaScript?',
    options: [
      'Using a single setTimeout queue',
      'Using a min-heap per priority level, dequeuing tasks when the event loop is idle via requestIdleCallback or scheduler.yield(), and supporting cancellation via AbortController',
      'Using Worker threads only',
      'Using setInterval to drain a queue'
    ],
    correctAnswer:
      'Using a min-heap per priority level, dequeuing tasks when the event loop is idle via requestIdleCallback or scheduler.yield(), and supporting cancellation via AbortController',
    explanation:
      'A production scheduler (like React\'s) uses multiple priority queues (immediate, high, normal, low, idle). The heap orders tasks by expiration. Work is performed in time slices, yielding to the browser when deadlines are exceeded. AbortController allows cancelling queued tasks.',
    tags: ['scheduler', 'priority-queue', 'min-heap', 'react-fiber', 'mnc']
  },
  {
    id: 'js-092',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How do you implement end-to-end type safety across a full-stack JavaScript application?',
    options: [
      'Use PropTypes on the frontend only',
      'Use a shared contract layer (tRPC, GraphQL with code-gen, or Zod schemas shared between server and client) so API types are derived from a single source of truth',
      'Manually synchronise types between server and client',
      'Use any type everywhere to avoid TypeScript errors'
    ],
    correctAnswer:
      'Use a shared contract layer (tRPC, GraphQL with code-gen, or Zod schemas shared between server and client) so API types are derived from a single source of truth',
    explanation:
      'tRPC defines server procedures typed with Zod; the client infers types automatically with no codegen step. GraphQL + graphql-code-generator generates TypeScript types from schema. A shared Zod schema package validates at runtime and provides compile-time types for both sides.',
    tags: ['type-safety', 'trpc', 'graphql', 'zod', 'fullstack', 'mnc']
  },
  {
    id: 'js-093',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'How would you implement a secure authentication flow in a JavaScript SPA?',
    options: [
      'Store JWT in localStorage for convenience',
      'Use httpOnly cookies for tokens, implement PKCE OAuth 2.0 flow, silent token refresh with a hidden iframe or refresh token rotation, and pair with CSRF protection',
      'Use Basic Auth on every request',
      'Store credentials in sessionStorage'
    ],
    correctAnswer:
      'Use httpOnly cookies for tokens, implement PKCE OAuth 2.0 flow, silent token refresh with a hidden iframe or refresh token rotation, and pair with CSRF protection',
    explanation:
      'HttpOnly cookies prevent XSS token theft. PKCE (code_verifier/challenge) prevents auth code interception. Refresh token rotation invalidates old tokens on use, detecting theft. SameSite=Strict/Lax cookies mitigate CSRF. Access tokens in memory (not storage) expire quickly; refresh tokens are securely rotated.',
    tags: ['auth', 'jwt', 'oauth', 'pkce', 'security', 'mnc']
  },
  {
    id: 'js-094',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you implement virtual scrolling for a list of 1 million items?',
    options: [
      'Render all 1 million DOM nodes',
      'Render only the visible viewport items plus overscan buffer; compute item positions from a height map; listen to scroll events to update rendered window',
      'Paginate to 10 items per page',
      'Use CSS containment only'
    ],
    correctAnswer:
      'Render only the visible viewport items plus overscan buffer; compute item positions from a height map; listen to scroll events to update rendered window',
    explanation:
      'Virtual scroll (windowing) maintains a fixed DOM count. Track scrollTop, container height, and item heights (uniform or dynamic via ResizeObserver). Calculate startIndex/endIndex from scroll position. Translate a container by the offset of the first visible item. react-window and @tanstack/virtual implement this.',
    tags: ['virtual-scroll', 'performance', 'dom', 'large-lists', 'mnc']
  },
  {
    id: 'js-095',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How do you design an offline-first progressive web application?',
    options: [
      'Download all data up front',
      'Use Service Worker with Cache API for assets and API responses, IndexedDB for structured data, background sync for deferred mutations, and conflict resolution on reconnect',
      'Use localStorage for all offline data',
      'Offline-first is not feasible for dynamic apps'
    ],
    correctAnswer:
      'Use Service Worker with Cache API for assets and API responses, IndexedDB for structured data, background sync for deferred mutations, and conflict resolution on reconnect',
    explanation:
      'Offline-first: precache shell on install (Workbox). On fetch, serve from cache, update in background (stale-while-revalidate). Queue mutations in IndexedDB/Background Sync API. On reconnect, replay mutations; handle conflicts with server-wins, client-wins, or merge strategies (CRDTs).',
    tags: ['offline-first', 'pwa', 'service-worker', 'indexeddb', 'background-sync', 'mnc']
  },
  {
    id: 'js-096',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you build a client-side analytics SDK that is performant and reliable?',
    options: [
      'Send a fetch request on every event synchronously',
      'Batch events in memory, flush on interval or visibilitychange, use navigator.sendBeacon for page unload, queue failed events in localStorage for retry',
      'Use a third-party SDK without customisation',
      'Write events to console.log for a backend to scrape'
    ],
    correctAnswer:
      'Batch events in memory, flush on interval or visibilitychange, use navigator.sendBeacon for page unload, queue failed events in localStorage for retry',
    explanation:
      'Production analytics SDKs: collect events in a ring buffer; flush every N events or T seconds; use sendBeacon on pagehide/visibilitychange (guaranteed delivery even on unload); retry failed batches from localStorage; use a Web Worker to off-thread serialisation; respect user privacy/consent flags.',
    tags: ['analytics', 'sdk', 'sendbeacon', 'batching', 'system-design', 'mnc']
  },
  {
    id: 'js-097',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you implement code splitting and dynamic imports at scale?',
    options: [
      'Put all code in one bundle',
      'Use import() for route-level splitting, prefetch/preload hints for likely-needed chunks, named chunks for caching stability, and analyse bundle composition with webpack-bundle-analyzer',
      'Use multiple <script> tags',
      'Use only CSS splitting'
    ],
    correctAnswer:
      'Use import() for route-level splitting, prefetch/preload hints for likely-needed chunks, named chunks for caching stability, and analyse bundle composition with webpack-bundle-analyzer',
    explanation:
      'Dynamic import() creates async chunks. Route-level splitting reduces initial bundle. Use /* webpackChunkName: "checkout" */ for stable filenames (long-term caching). <link rel="prefetch"> loads low-priority future chunks. <link rel="preload"> loads critical chunks earlier. React.lazy + Suspense integrates cleanly.',
    tags: ['code-splitting', 'dynamic-import', 'webpack', 'caching', 'performance', 'mnc']
  },
  {
    id: 'js-098',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How do you implement a plugin system in a JavaScript library or application?',
    options: [
      'Export a large monolithic function',
      'Define a plugin interface (install method), maintain a plugin registry, pass a public API context to each plugin on install, and support lifecycle hooks for extension points',
      'Use global window properties for plugins',
      'Require plugins to fork the main repository'
    ],
    correctAnswer:
      'Define a plugin interface (install method), maintain a plugin registry, pass a public API context to each plugin on install, and support lifecycle hooks for extension points',
    explanation:
      'Plugin systems (Vite, Rollup, Vue): a plugin is an object with hooks (transform, resolve, load) or a function that receives an app context (Vue.use(plugin)). The core iterates registered plugins, calling relevant hooks in order. Options allow configuration. This enables extensibility without core modification.',
    tags: ['plugin-system', 'extensibility', 'architecture', 'hooks', 'mnc']
  },
  {
    id: 'js-099',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you implement a resilient API client with retry, circuit breaker, and timeout?',
    options: [
      'Use fetch with no error handling',
      'Wrap fetch with: configurable timeout (AbortController + setTimeout), exponential backoff retry with jitter, circuit breaker state machine (closed/open/half-open), and request deduplication',
      'Use a try/catch around fetch only',
      'Retry immediately N times in a loop'
    ],
    correctAnswer:
      'Wrap fetch with: configurable timeout (AbortController + setTimeout), exponential backoff retry with jitter, circuit breaker state machine (closed/open/half-open), and request deduplication',
    explanation:
      'Timeout: race fetch against a delayed AbortController.abort(). Retry: exponential backoff (2^attempt * 100ms + random jitter) for transient failures. Circuit breaker: track failures; open circuit after threshold, blocking requests for a window; half-open allows a probe request. Deduplicate in-flight requests with a Map keyed by URL.',
    tags: ['api-client', 'circuit-breaker', 'retry', 'resilience', 'mnc', 'coding']
  },
  {
    id: 'js-100',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How do you profile and optimise JavaScript performance in a production environment?',
    options: [
      'Use console.log timestamps',
      'Use User Timing API (performance.mark/measure), Long Tasks API, web-vitals library in production, RUM (Real User Monitoring), and remote profiling with Chrome DevTools tracing',
      'Only use Lighthouse on localhost',
      'Optimise only after complaints'
    ],
    correctAnswer:
      'Use User Timing API (performance.mark/measure), Long Tasks API, web-vitals library in production, RUM (Real User Monitoring), and remote profiling with Chrome DevTools tracing',
    explanation:
      'Performance.mark/measure instruments custom timings sent to your analytics. PerformanceObserver("longtask") detects blocking tasks > 50ms in production. Web-vitals library captures LCP, FID/INP, CLS. RUM aggregates field data. For deep profiling, use Chrome DevTools\'s Performance tab with CPU throttling, or collect traces remotely.',
    tags: ['profiling', 'rum', 'performance', 'web-vitals', 'monitoring', 'mnc']
  },
  {
    id: 'js-101',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a client-side search engine for large static datasets?',
    options: [
      'Use Array.filter on every keystroke',
      'Pre-build an inverted index at build time; use a Web Worker to run Fuse.js or FlexSearch off the main thread; debounce queries; progressively load the index',
      'Call the server search API on every keystroke',
      'Use window.find() browser API'
    ],
    correctAnswer:
      'Pre-build an inverted index at build time; use a Web Worker to run Fuse.js or FlexSearch off the main thread; debounce queries; progressively load the index',
    explanation:
      'Pre-index at build time for fast startup. Pagefind (used by Astro/Hugo) creates compact WASM indexes split into chunks loaded on demand. For dynamic datasets, FlexSearch or MiniSearch build in-memory inverted indexes. Move search to a Worker to avoid main thread jank. Cache results per query term.',
    tags: ['search', 'inverted-index', 'web-worker', 'performance', 'mnc']
  },
  {
    id: 'js-102',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How do you manage state in a large React application at scale (beyond simple useState)?',
    options: [
      'Use a single global useState',
      'Collocate local UI state; lift shared state; use React Query/SWR for server state; Zustand/Jotai for global client state; avoid Redux for most cases; normalise server cache',
      'Use Redux for every piece of state',
      'Store everything in Context API'
    ],
    correctAnswer:
      'Collocate local UI state; lift shared state; use React Query/SWR for server state; Zustand/Jotai for global client state; avoid Redux for most cases; normalise server cache',
    explanation:
      'State categories: UI state (local useState), shared UI (lift or Zustand atom), server state (React Query with cache, deduplication, background refresh), form state (React Hook Form), URL state (router params). Context causes re-renders on any value change — use granular context or state selectors. Normalise entities to avoid duplication.',
    tags: ['state-management', 'react', 'react-query', 'zustand', 'architecture', 'mnc']
  },
  {
    id: 'js-103',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'How would you prevent XSS attacks in a JavaScript application?',
    options: [
      'Sanitise only server-side inputs',
      'Use a strict CSP with nonces, sanitise untrusted HTML with DOMPurify, avoid innerHTML with dynamic content, use textContent for plain text, and audit third-party scripts',
      'Escape output in CSS only',
      'Use alert() to warn users'
    ],
    correctAnswer:
      'Use a strict CSP with nonces, sanitise untrusted HTML with DOMPurify, avoid innerHTML with dynamic content, use textContent for plain text, and audit third-party scripts',
    explanation:
      'XSS defence in depth: CSP blocks inline scripts (reducing damage if XSS occurs); DOMPurify strips dangerous HTML before inserting; textContent for user text avoids HTML parsing; sanitise on both client and server; use Trusted Types API (Chrome) to enforce safe DOM sinks at browser level.',
    tags: ['xss', 'security', 'csp', 'domPurify', 'trusted-types', 'mnc']
  },
  {
    id: 'js-104',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a design system\'s component library for cross-team usage?',
    options: [
      'Create individual CSS files per component',
      'Build with Storybook for documentation/visual testing, semantic versioning, Chromatic for visual regression, automated accessibility checks (jest-axe), and a token-driven design system foundation',
      'Share components via copy-paste',
      'Use a single monolithic CSS file'
    ],
    correctAnswer:
      'Build with Storybook for documentation/visual testing, semantic versioning, Chromatic for visual regression, automated accessibility checks (jest-axe), and a token-driven design system foundation',
    explanation:
      'A production design system: design tokens (colors, spacing, typography) shared between Figma and code (style-dictionary). Components in a monorepo package, published to npm. Storybook for interactive documentation. Chromatic/Percy for visual diff CI. jest-axe or axe-playwright for a11y CI gates. CHANGELOG + semver for breaking change management.',
    tags: ['design-system', 'storybook', 'component-library', 'accessibility', 'mnc']
  },
  {
    id: 'js-105',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How do you optimise images and media in a JavaScript application for Core Web Vitals?',
    options: [
      'Use PNG for all images',
      'Use next/image or <img loading=lazy>, serve AVIF/WebP via <picture srcset>, use responsive images, CDN with edge caching, set explicit width/height to prevent CLS, and LCP-critical images with fetchpriority=high',
      'Load all images eagerly for fastest perceived performance',
      'Only optimise images over 1MB'
    ],
    correctAnswer:
      'Use next/image or <img loading=lazy>, serve AVIF/WebP via <picture srcset>, use responsive images, CDN with edge caching, set explicit width/height to prevent CLS, and LCP-critical images with fetchpriority=high',
    explanation:
      'Image optimisation for Core Web Vitals: AVIF/WebP reduces size 30–50% over JPEG. Responsive srcset sends correctly sized images per viewport. loading="lazy" defers off-screen images. fetchpriority="high" on LCP image. Explicit dimensions prevent layout shift (CLS). CDN delivers from edge nodes. preload the LCP image in <head>.',
    tags: ['images', 'cwv', 'lcp', 'cls', 'performance', 'mnc']
  },
  {
    id: 'js-106',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement an access control system (RBAC/ABAC) on the frontend?',
    options: [
      'Hide UI elements in CSS only',
      'Fetch user permissions/claims at auth; maintain a permission store; expose hooks/components (usePermission, <Allowed permission="edit:post">); never rely solely on frontend checks — enforce on server',
      'Check roles in every component manually',
      'Use localStorage to store user roles'
    ],
    correctAnswer:
      'Fetch user permissions/claims at auth; maintain a permission store; expose hooks/components (usePermission, <Allowed permission="edit:post">); never rely solely on frontend checks — enforce on server',
    explanation:
      'Frontend RBAC/ABAC: decode JWT claims or fetch permissions on login. Store in a context/store. usePermission("edit:post") checks against the store. <Allowed> component renders children conditionally. Key principle: frontend access control is UX only — all sensitive actions MUST be authorised server-side. Never expose sensitive data regardless of UI state.',
    tags: ['rbac', 'abac', 'access-control', 'security', 'system-design', 'mnc']
  },
  {
    id: 'js-107',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you implement a type-safe dependency injection container in TypeScript?',
    options: [
      'Using global variables',
      'Using a Map keyed by typed tokens (InjectionToken<T>), leveraging TypeScript generics to enforce correct binding and resolution types, and supporting scoped lifetimes',
      'Using constructor arguments manually',
      'Using React Context exclusively'
    ],
    correctAnswer:
      'Using a Map keyed by typed tokens (InjectionToken<T>), leveraging TypeScript generics to enforce correct binding and resolution types, and supporting scoped lifetimes',
    explanation:
      'const TOKEN = new InjectionToken<UserService>("UserService"). Container stores Map<InjectionToken<any>, Factory>. resolve<T>(token: InjectionToken<T>): T returns correctly typed value. Supports singleton (cached), transient (new each time), and scoped (per-request) lifetimes. Similar to InversifyJS, tsyringe, Angular\'s DI.',
    tags: ['dependency-injection', 'typescript', 'generics', 'architecture', 'mnc']
  },
  {
    id: 'js-108',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you build a resilient real-time data pipeline from server to browser?',
    options: [
      'Poll the server every second',
      'Use Server-Sent Events (SSE) for unidirectional streaming with automatic reconnect, fall back to long-polling, or WebSockets for bidirectional; add client-side buffering and back-pressure handling',
      'Use WebRTC for server-to-client streaming',
      'Use MQTT directly in the browser'
    ],
    correctAnswer:
      'Use Server-Sent Events (SSE) for unidirectional streaming with automatic reconnect, fall back to long-polling, or WebSockets for bidirectional; add client-side buffering and back-pressure handling',
    explanation:
      'SSE (EventSource) is HTTP/1.1 compatible, auto-reconnects, supports Last-Event-ID for resumption, and goes through standard proxies. WebSockets are better for bidirectional (chat, gaming). Add: client-side event buffering to absorb bursts, exponential backoff on reconnect, health check pings, and deduplication by event ID.',
    tags: ['sse', 'websockets', 'streaming', 'real-time', 'system-design', 'mnc']
  },
  {
    id: 'js-109',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you optimise a JavaScript application\'s initial load performance using edge rendering?',
    options: [
      'Serve a large client bundle from origin',
      'Deploy server-side rendering to CDN edge workers (Cloudflare Workers, Vercel Edge), stream HTML with Suspense/renderToPipeableStream, partial hydration with islands architecture to reduce client JS',
      'Use only client-side rendering',
      'Minify HTML comments only'
    ],
    correctAnswer:
      'Deploy server-side rendering to CDN edge workers (Cloudflare Workers, Vercel Edge), stream HTML with Suspense/renderToPipeableStream, partial hydration with islands architecture to reduce client JS',
    explanation:
      'Edge SSR reduces TTFB by running rendering close to users. Streaming (renderToPipeableStream) sends HTML progressively — browser renders above-fold content before the full page is ready. Islands architecture (Astro, Marko) ships zero JS for static areas and hydrates only interactive components, dramatically reducing TTI.',
    tags: ['edge-rendering', 'ssr', 'streaming', 'islands', 'performance', 'mnc']
  },
  {
    id: 'js-110',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a complete error monitoring and alerting system for a frontend app?',
    options: [
      'Use window.onerror to log to console',
      'Use window.onerror + unhandledrejection + ErrorBoundary to capture errors; enrich with user context, session recording, source maps for stack traces; send to Sentry/Datadog; set up alerting thresholds and on-call rotation',
      'Only log errors in development builds',
      'Use try/catch everywhere manually'
    ],
    correctAnswer:
      'Use window.onerror + unhandledrejection + ErrorBoundary to capture errors; enrich with user context, session recording, source maps for stack traces; send to Sentry/Datadog; set up alerting thresholds and on-call rotation',
    explanation:
      'Comprehensive error monitoring: global error handlers capture uncaught errors/Promise rejections. React Error Boundaries catch render errors. Enrich events with userId, sessionId, build version, and breadcrumbs (user actions). Source maps de-minify stack traces. Sentry groups similar errors. Alert on error rate spikes. Replay sessions for reproduction.',
    tags: ['error-monitoring', 'sentry', 'observability', 'system-design', 'mnc']
  },
  {
    id: 'js-111',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How do you build an accessible (a11y) component library that meets WCAG 2.1 AA?',
    options: [
      'Add aria-label to every element',
      'Follow ARIA Authoring Practices Guide patterns; implement keyboard navigation (roving tabIndex, focus traps); use semantic HTML; test with axe-core CI, screen readers (NVDA, VoiceOver), and forced colours mode',
      'Only add alt text to images',
      'Accessibility is only for government sites'
    ],
    correctAnswer:
      'Follow ARIA Authoring Practices Guide patterns; implement keyboard navigation (roving tabIndex, focus traps); use semantic HTML; test with axe-core CI, screen readers (NVDA, VoiceOver), and forced colours mode',
    explanation:
      'WCAG 2.1 AA requires: 4.5:1 colour contrast, keyboard operability, ARIA roles/states, focus management (focus traps in modals, restoration on close), live regions for dynamic content. Test with axe-playwright in CI, manual screen reader testing, and keyboard-only navigation audit. Use Radix UI or Headless UI as accessible primitive foundations.',
    tags: ['accessibility', 'wcag', 'aria', 'a11y', 'design-system', 'mnc']
  },
  {
    id: 'js-112',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you implement a finite state machine (FSM) in JavaScript for UI state management?',
    options: [
      'Using a series of if/else statements',
      'Define states, events, and transitions in a configuration object; process events by looking up the transition table; invoke entry/exit actions; XState formalises this with actors and guards',
      'Using switch/case on a global string variable',
      'FSMs are only for backend systems'
    ],
    correctAnswer:
      'Define states, events, and transitions in a configuration object; process events by looking up the transition table; invoke entry/exit actions; XState formalises this with actors and guards',
    explanation:
      'const machine = { initial: "idle", states: { idle: { on: { FETCH: "loading" } }, loading: { on: { SUCCESS: "success", ERROR: "error" } } } }. send(event) looks up currentState.on[event.type] for next state and runs actions. XState adds guards, parallel states, history states, and visualisation for complex UI flows.',
    tags: ['fsm', 'xstate', 'state-machines', 'ui-state', 'mnc', 'coding']
  },
  {
    id: 'js-113',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a multi-tab communication system in a browser?',
    options: [
      'Polling localStorage every second',
      'Use BroadcastChannel API for same-origin tabs; SharedWorker for shared state; storage events as a fallback; Leader election to designate one tab as the data-fetching leader',
      'Use postMessage between windows only',
      'Use a WebSocket to relay between tabs via server'
    ],
    correctAnswer:
      'Use BroadcastChannel API for same-origin tabs; SharedWorker for shared state; storage events as a fallback; Leader election to designate one tab as the data-fetching leader',
    explanation:
      'BroadcastChannel(channelName).postMessage(data) broadcasts to all same-origin tabs instantly. SharedWorker holds shared state and WebSocket connections across tabs. Storage events fire in other tabs on localStorage writes (fallback). Leader election (via Web Locks API or a timestamp-based algorithm) ensures only one tab fetches data, others receive via broadcast.',
    tags: ['broadcast-channel', 'shared-worker', 'multi-tab', 'web-locks', 'mnc']
  },
  {
    id: 'js-114',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you implement speculative prefetching and prerendering in a SPA?',
    options: [
      'Load all routes eagerly on startup',
      'Use IntersectionObserver to detect when links enter the viewport, dynamically import route chunks, and optionally use the Speculation Rules API to prerender full pages',
      'Use <link rel="dns-prefetch"> for all links',
      'Prefetch is handled automatically by browsers only'
    ],
    correctAnswer:
      'Use IntersectionObserver to detect when links enter the viewport, dynamically import route chunks, and optionally use the Speculation Rules API to prerender full pages',
    explanation:
      'On link visible: dynamic import() loads the JS chunk. <link rel="prefetch"> loads the HTML resource. The Speculation Rules API (Chrome) prerenders the full page in a background tab, making navigation near-instant. Combine with resource hints: preconnect for API domains, modulepreload for critical chunks.',
    tags: ['prefetching', 'prerendering', 'speculation-rules', 'performance', 'mnc']
  },
  {
    id: 'js-115',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a JavaScript SDK for third-party developers with backward compatibility guarantees?',
    options: [
      'Release breaking changes whenever needed',
      'Use semantic versioning, maintain a changelog, deprecate gradually (warn before removal), namespace exports, avoid global pollution, provide TypeScript types, document migration guides, and maintain an LTS branch',
      'Only publish a minified bundle',
      'Use a single version forever'
    ],
    correctAnswer:
      'Use semantic versioning, maintain a changelog, deprecate gradually (warn before removal), namespace exports, avoid global pollution, provide TypeScript types, document migration guides, and maintain an LTS branch',
    explanation:
      'SDK backward compat: semver (major for breaking). Deprecation warnings in minor versions before removal in major. Namespace all exports under a single object or package scope. Ship dual ESM/CJS builds. Publish TypeScript declaration files. Test with consumer-driven contract tests. Maintain a MIGRATION.md. Consider an LTS version for enterprise users who update slowly.',
    tags: ['sdk', 'versioning', 'backward-compatibility', 'api-design', 'mnc']
  },
  {
    id: 'js-116',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement server-side rendering with hydration and avoid hydration mismatches?',
    options: [
      'SSR always matches client rendering automatically',
      'Ensure the same data is available during SSR and hydration (via serialised state), avoid non-deterministic code (Date.now, Math.random, browser APIs) in render, and use suppressHydrationWarning only as a last resort',
      'Re-render everything on the client, ignoring server HTML',
      'Only use SSR for the first page'
    ],
    correctAnswer:
      'Ensure the same data is available during SSR and hydration (via serialised state), avoid non-deterministic code (Date.now, Math.random, browser APIs) in render, and use suppressHydrationWarning only as a last resort',
    explanation:
      'Hydration mismatches occur when server HTML doesn\'t match the first client render. Causes: time-dependent output, window/document access during SSR, different data. Solutions: serialise server state into a script tag and reuse on client; guard browser APIs with typeof window check; use useLayoutEffect only on client (useIsomorphicLayoutEffect pattern).',
    tags: ['ssr', 'hydration', 'react', 'next.js', 'system-design', 'mnc']
  },
  {
    id: 'js-117',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you implement a reactive store (like Zustand or Pinia) from scratch?',
    options: [
      'Using a global variable and manual re-renders',
      'A function returning a state object with getState, setState, subscribe methods; listeners are called on every setState; selectors with shallow equality memoisation prevent unnecessary re-renders',
      'Using React Context under the hood',
      'Using Redux exclusively'
    ],
    correctAnswer:
      'A function returning a state object with getState, setState, subscribe methods; listeners are called on every setState; selectors with shallow equality memoisation prevent unnecessary re-renders',
    explanation:
      'createStore(initialState): stores state in a closure. setState merges partial state and notifies all listeners. subscribe(listener) returns an unsubscribe function. In React, a useSyncExternalStore hook (React 18) subscribes components safely. Selectors (useStore(s => s.count)) + shallow equality prevent renders when unrelated state changes.',
    tags: ['store', 'zustand', 'reactive', 'react', 'mnc', 'coding']
  },
  {
    id: 'js-118',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a high-performance canvas-based data visualisation for millions of data points?',
    options: [
      'Use SVG for all charts',
      'Use WebGL (via regl or deck.gl) for GPU-accelerated rendering; spatial indexing (quadtree/R-tree) for hit testing; level-of-detail rendering; Web Workers for data aggregation off the main thread',
      'Use a <table> element',
      'Render all points on a 2D Canvas without optimisation'
    ],
    correctAnswer:
      'Use WebGL (via regl or deck.gl) for GPU-accelerated rendering; spatial indexing (quadtree/R-tree) for hit testing; level-of-detail rendering; Web Workers for data aggregation off the main thread',
    explanation:
      'At millions of points, 2D Canvas is CPU-bound. WebGL renders via the GPU with custom shaders, handling millions of points at 60fps. Use a quadtree for O(log n) hit-testing on mouse events. Level-of-detail: aggregate distant points into clusters (deck.gl ScatterplotLayer + ClusterLayer). Pre-compute aggregations in a Worker using OffscreenCanvas.',
    tags: ['canvas', 'webgl', 'data-visualisation', 'performance', 'gpu', 'mnc']
  },
  {
    id: 'js-119',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you build a comprehensive frontend testing strategy for a large application?',
    options: [
      'Only write E2E tests',
      'Apply the testing trophy: static analysis (TypeScript, ESLint), unit tests (Vitest) for logic/utils, integration tests (React Testing Library) for components, E2E (Playwright/Cypress) for critical paths, visual regression (Chromatic), and contract tests (Pact)',
      'Only write unit tests',
      'Rely on QA manual testing'
    ],
    correctAnswer:
      'Apply the testing trophy: static analysis (TypeScript, ESLint), unit tests (Vitest) for logic/utils, integration tests (React Testing Library) for components, E2E (Playwright/Cypress) for critical paths, visual regression (Chromatic), and contract tests (Pact)',
    explanation:
      'The testing trophy (Kent C. Dodds): most value from integration tests (component + dependencies together). Unit tests for pure logic and algorithms. E2E for user journeys (login, checkout). Visual regression catches CSS regressions. Contract tests verify API shape matches client expectations. Static analysis catches errors before test runtime.',
    tags: ['testing', 'playwright', 'vitest', 'testing-trophy', 'strategy', 'mnc']
  },
  {
    id: 'js-120',
    topic: 'javascript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a custom Event Emitter in JavaScript at production scale?',
    options: [
      'Using class and simple array',
      'Using a Map for O(1) handler lookup per event, Set for deduplication, support for once(), wildcard events, async emission with error isolation per handler, and memory-leak prevention via maxListeners warning',
      'Using a global window event system',
      'Using arrays and indexOf for removal'
    ],
    correctAnswer:
      'Using a Map for O(1) handler lookup per event, Set for deduplication, support for once(), wildcard events, async emission with error isolation per handler, and memory-leak prevention via maxListeners warning',
    explanation:
      'Production EventEmitter: Map<eventName, Set<handler>> for O(1) add/remove/lookup. once() wraps handler in a self-removing wrapper. Wildcard (*) event support via an additional Set. emit() iterates handlers; wrap each in try/catch to isolate failures. Warn (not throw) when listener count exceeds maxListeners (default 10) to detect leaks without crashing.',
    tags: ['event-emitter', 'design-patterns', 'events', 'mnc', 'system-design']
  }
];