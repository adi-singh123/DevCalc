/**
 * src/data/interview/node.ts
 * Node.js Interview Questions (120+ items)
 */

import { InterviewQuestion } from '@/src/types/interview';

export const nodeQuestions: InterviewQuestion[] = [
  // ===================== BEGINNER =====================
  {
    id: 'node-001',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the Node.js event loop?',
    options: [
      'A browser-specific feature',
      'A single-threaded, non-blocking I/O mechanism',
      'A multi-threaded engine',
      'A garbage collection process'
    ],
    correctAnswer: 'A single-threaded, non-blocking I/O mechanism',
    explanation: 'The event loop allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded, by offloading operations to the system kernel whenever possible.',
    tags: ['event-loop', 'architecture', 'fundamentals']
  },
  {
    id: 'node-002',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What JavaScript engine does Node.js use?',
    options: [
      'Chakra',
      'V8',
      'JavaScriptCore',
      'SpiderMonkey'
    ],
    correctAnswer: 'V8',
    explanation: 'Node.js is built on top of Google\u2019s V8 engine, the same engine used in Chrome, which compiles JavaScript directly to native machine code.',
    tags: ['v8', 'fundamentals']
  },
  {
    id: 'node-003',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which module is used to create a basic HTTP server in Node.js?',
    options: [
      'http',
      'fs',
      'url',
      'net'
    ],
    correctAnswer: 'http',
    explanation: 'The built-in http module provides functionality to create HTTP servers and clients using http.createServer().',
    tags: ['http', 'core-modules']
  },
  {
    id: 'node-004',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does "Node.js is single-threaded" actually refer to?',
    options: [
      'It can never run in parallel under any circumstance',
      'It cannot use multiple processes',
      'It runs on a single CPU core only',
      'The main JavaScript execution thread is single, but I/O is handled by libuv\u2019s thread pool'
    ],
    correctAnswer: 'The main JavaScript execution thread is single, but I/O is handled by libuv\u2019s thread pool',
    explanation: 'Node.js executes JS on a single main thread, but heavy I/O like file system operations are delegated to a libuv-managed thread pool behind the scenes.',
    tags: ['libuv', 'threading', 'fundamentals']
  },
  {
    id: 'node-005',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is npm?',
    options: [
      'A Node.js process monitor',
      'Node Package Manager, used to manage project dependencies',
      'A built-in Node.js testing framework',
      'A native Node.js module'
    ],
    correctAnswer: 'Node Package Manager, used to manage project dependencies',
    explanation: 'npm is the default package manager for Node.js, used to install, share, and manage versioned packages via the npm registry.',
    tags: ['npm', 'tooling']
  },
  {
    id: 'node-006',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the purpose of the package.json file?',
    options: [
      'It is the entry point of every Node.js app',
      'It stores environment variables',
      'It stores compiled JavaScript output',
      'It describes project metadata, dependencies, and scripts'
    ],
    correctAnswer: 'It describes project metadata, dependencies, and scripts',
    explanation: 'package.json holds metadata such as name, version, dependencies, devDependencies, and npm scripts that define how the project is built and run.',
    tags: ['npm', 'package.json', 'fundamentals']
  },
  {
    id: 'node-007',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which keyword is used to import a module using CommonJS syntax?',
    options: [
      'include',
      'using',
      'require',
      'import'
    ],
    correctAnswer: 'require',
    explanation: 'CommonJS, the default module system in Node.js, uses require() to import modules and module.exports to export them.',
    tags: ['commonjs', 'modules']
  },
  {
    id: 'node-008',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'How do you export a single function from a Node.js module using CommonJS?',
    options: [
      'return function() {}',
      'export default function() {}',
      'exports.default = function() {}',
      'module.exports = function() {}'
    ],
    correctAnswer: 'module.exports = function() {}',
    explanation: 'In CommonJS, module.exports is the object actually returned by require(); assigning a function to it exports that function directly.',
    tags: ['commonjs', 'modules']
  },
  {
    id: 'node-009',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'What does the following code print?\n\nconsole.log(typeof module.exports);',
    options: [
      '"object"',
      '"undefined"',
      '"function"',
      '"module"'
    ],
    correctAnswer: '"object"',
    explanation: 'By default, module.exports is initialized as a plain empty object before any properties are assigned to it.',
    tags: ['commonjs', 'modules', 'output']
  },
  {
    id: 'node-010',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which global object in Node.js represents the current module?',
    options: [
      'global',
      'self',
      'module',
      'window'
    ],
    correctAnswer: 'module',
    explanation: 'Each file in Node.js is wrapped as a module, and the module object holds metadata like exports, filename, and id for that file.',
    tags: ['modules', 'globals']
  },
  {
    id: 'node-011',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the global object in Node.js (analogous to window in browsers)?',
    options: [
      'self',
      'window',
      'global',
      'root'
    ],
    correctAnswer: 'global',
    explanation: 'Node.js exposes a global object that holds globally available properties and functions, similar to window in browser JavaScript.',
    tags: ['globals', 'fundamentals']
  },
  {
    id: 'node-012',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does the "fs" module in Node.js do?',
    options: [
      'Manages child processes',
      'Provides an API for interacting with the file system',
      'Formats strings',
      'Handles HTTP requests'
    ],
    correctAnswer: 'Provides an API for interacting with the file system',
    explanation: 'The fs (file system) module provides both synchronous and asynchronous methods for reading, writing, and managing files and directories.',
    tags: ['fs', 'core-modules']
  },
  {
    id: 'node-013',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'What is the difference between fs.readFile() and fs.readFileSync()?',
    options: [
      'readFile only works on Linux',
      'readFileSync only works with JSON files',
      'There is no difference',
      'readFile is asynchronous and non-blocking; readFileSync is synchronous and blocking'
    ],
    correctAnswer: 'readFile is asynchronous and non-blocking; readFileSync is synchronous and blocking',
    explanation: 'fs.readFile() takes a callback and does not block the event loop, while fs.readFileSync() blocks execution until the file read completes.',
    tags: ['fs', 'async', 'sync']
  },
  {
    id: 'node-014',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is a callback function in Node.js?',
    options: [
      'A function passed as an argument to another function, invoked after a task completes',
      'A function that overrides global methods',
      'A function that is called automatically every second',
      'A constructor function'
    ],
    correctAnswer: 'A function passed as an argument to another function, invoked after a task completes',
    explanation: 'Callbacks are the foundational pattern in Node.js for handling asynchronous operations like file I/O, timers, and network requests.',
    tags: ['callbacks', 'async', 'fundamentals']
  },
  {
    id: 'node-015',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is "callback hell"?',
    options: [
      'Deeply nested callbacks that make code hard to read and maintain',
      'An npm package for managing callbacks',
      'A memory leak caused by callbacks',
      'A Node.js error type'
    ],
    correctAnswer: 'Deeply nested callbacks that make code hard to read and maintain',
    explanation: 'Callback hell refers to the pyramid-shaped, deeply nested structure that results from chaining multiple asynchronous callbacks, often solved using Promises or async/await.',
    tags: ['callbacks', 'async', 'code-quality']
  },
  {
    id: 'node-016',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which command initializes a new Node.js project with a package.json file?',
    options: [
      'npm install',
      'npm start',
      'npm init',
      'npm build'
    ],
    correctAnswer: 'npm init',
    explanation: 'npm init walks you through creating a package.json file, or with -y flag, creates one instantly with default values.',
    tags: ['npm', 'tooling']
  },
  {
    id: 'node-017',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does the "process" global object provide in Node.js?',
    options: [
      'Information and control over the current Node.js process',
      'A way to spawn new threads only',
      'Access to the file system',
      'Browser DOM access'
    ],
    correctAnswer: 'Information and control over the current Node.js process',
    explanation: 'The process object provides information like environment variables (process.env), command-line arguments (process.argv), and methods like process.exit().',
    tags: ['process', 'globals']
  },
  {
    id: 'node-018',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'How do you read command-line arguments passed to a Node.js script?',
    options: [
      'os.argv',
      'process.args',
      'process.argv',
      'process.params'
    ],
    correctAnswer: 'process.argv',
    explanation: 'process.argv is an array containing the command line arguments; the first two elements are the node executable path and the script path.',
    tags: ['process', 'cli']
  },
  {
    id: 'node-019',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the purpose of the "path" module?',
    options: [
      'To compress file paths',
      'To manage HTTP routing paths',
      'To create symbolic links',
      'To handle and transform file and directory paths in a cross-platform way'
    ],
    correctAnswer: 'To handle and transform file and directory paths in a cross-platform way',
    explanation: 'The path module provides utilities like path.join(), path.resolve(), and path.extname() to work with file paths consistently across operating systems.',
    tags: ['path', 'core-modules']
  },
  {
    id: 'node-020',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does NODE_ENV typically indicate?',
    options: [
      'The active npm registry URL',
      'The current environment the application is running in (e.g., development, production)',
      'The number of CPU cores available',
      'The version of Node.js installed'
    ],
    correctAnswer: 'The current environment the application is running in (e.g., development, production)',
    explanation: 'NODE_ENV is a convention-based environment variable used by many libraries (like Express) to toggle behavior such as caching, logging, and error verbosity.',
    tags: ['environment', 'configuration']
  },

  // ===================== INTERMEDIATE =====================
  {
    id: 'node-021',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What are the phases of the Node.js event loop, in order?',
    options: [
      'Timers \u2192 Pending callbacks \u2192 Poll \u2192 Check \u2192 Close callbacks',
      'Check \u2192 Timers \u2192 Poll \u2192 Close callbacks',
      'Poll \u2192 Timers \u2192 Close callbacks \u2192 Check',
      'Close callbacks \u2192 Poll \u2192 Timers \u2192 Check'
    ],
    correctAnswer: 'Timers \u2192 Pending callbacks \u2192 Poll \u2192 Check \u2192 Close callbacks',
    explanation: 'The libuv event loop cycles through timers, pending I/O callbacks, polling for new I/O events, check (setImmediate), and close callbacks, with microtasks processed between phases.',
    tags: ['event-loop', 'libuv', 'architecture']
  },
  {
    id: 'node-022',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Output',
    question: 'What is the output order of the following code?\n\nconsole.log(\'start\');\nsetTimeout(() => console.log(\'timeout\'), 0);\nPromise.resolve().then(() => console.log(\'promise\'));\nconsole.log(\'end\');',
    options: [
      'start, end, timeout, promise',
      'start, end, promise, timeout',
      'promise, start, end, timeout',
      'start, promise, end, timeout'
    ],
    correctAnswer: 'start, end, promise, timeout',
    explanation: 'Synchronous code runs first (start, end), then the microtask queue (Promises) is drained before the next event loop phase, so the promise callback runs before the setTimeout callback.',
    tags: ['event-loop', 'microtasks', 'promises']
  },
  {
    id: 'node-023',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between process.nextTick() and setImmediate()?',
    options: [
      'process.nextTick() can only be used once per process',
      'process.nextTick() fires before the event loop continues, in the current phase; setImmediate() fires in the check phase of the next loop iteration',
      'setImmediate() always runs before process.nextTick()',
      'They are identical in every way'
    ],
    correctAnswer: 'process.nextTick() fires before the event loop continues, in the current phase; setImmediate() fires in the check phase of the next loop iteration',
    explanation: 'process.nextTick() callbacks are processed immediately after the current operation, before the event loop proceeds, taking priority over Promises and setImmediate.',
    tags: ['event-loop', 'process.nextTick', 'setImmediate']
  },
  {
    id: 'node-024',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is libuv?',
    options: [
      'A Node.js package for unit testing',
      'A templating engine for Node.js',
      'A V8 garbage collector module',
      'A C library that provides Node.js with the event loop and asynchronous I/O'
    ],
    correctAnswer: 'A C library that provides Node.js with the event loop and asynchronous I/O',
    explanation: 'libuv abstracts non-blocking I/O operations across platforms and manages the event loop, thread pool, and async operations like file system access and DNS lookups.',
    tags: ['libuv', 'architecture']
  },
  {
    id: 'node-025',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the default size of the libuv thread pool used for tasks like fs operations?',
    options: [
      '4',
      '1',
      '2',
      '8'
    ],
    correctAnswer: '4',
    explanation: 'libuv\u2019s default thread pool size is 4, configurable via the UV_THREADPOOL_SIZE environment variable (max 128 in modern Node versions).',
    tags: ['libuv', 'threading', 'performance']
  },
  {
    id: 'node-026',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'How would you promisify a traditional Node.js callback-based function?',
    options: [
      'Use Buffer.from()',
      'Use JSON.stringify()',
      'It is impossible without rewriting the function',
      'Use util.promisify()'
    ],
    correctAnswer: 'Use util.promisify()',
    explanation: 'util.promisify() converts an error-first callback-style function into one that returns a Promise, assuming the function follows the (err, result) callback convention.',
    tags: ['util', 'promises', 'async']
  },
  {
    id: 'node-027',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the EventEmitter class in Node.js?',
    options: [
      'To handle file compression',
      'To enable objects to emit named events and register listeners for them',
      'To create child processes',
      'To manage HTTP cookies'
    ],
    correctAnswer: 'To enable objects to emit named events and register listeners for them',
    explanation: 'EventEmitter, found in the events module, is the basis of Node\u2019s event-driven architecture, used by streams, HTTP servers, and many other core APIs.',
    tags: ['events', 'EventEmitter', 'core-modules']
  },
  {
    id: 'node-028',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What happens if an EventEmitter emits an "error" event with no listener attached?',
    options: [
      'Nothing happens, it is silently ignored',
      'Node.js throws the error and crashes the process',
      'It automatically retries the operation',
      'It logs a warning but continues'
    ],
    correctAnswer: 'Node.js throws the error and crashes the process',
    explanation: 'Unlike other events, an unhandled "error" event on an EventEmitter throws synchronously and will crash the process if no listener is registered.',
    tags: ['events', 'EventEmitter', 'error-handling']
  },
  {
    id: 'node-029',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What are the four fundamental types of streams in Node.js?',
    options: [
      'Sync, Async, Buffered, Unbuffered',
      'Input, Output, Bidirectional, Filter',
      'Push, Pull, Pipe, Drain',
      'Readable, Writable, Duplex, Transform'
    ],
    correctAnswer: 'Readable, Writable, Duplex, Transform',
    explanation: 'Readable streams produce data, Writable streams consume data, Duplex streams do both independently, and Transform streams are Duplex streams that modify data as it passes through.',
    tags: ['streams', 'core-modules']
  },
  {
    id: 'node-030',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What is the advantage of using streams to process a large file instead of fs.readFile()?',
    options: [
      'Streams process data in chunks, keeping memory usage low instead of loading the entire file into memory',
      'Streams are always faster on small files',
      'Streams automatically parse JSON',
      'Streams bypass the file system entirely'
    ],
    correctAnswer: 'Streams process data in chunks, keeping memory usage low instead of loading the entire file into memory',
    explanation: 'fs.readFile() loads the whole file into memory before returning, while streams read and process data incrementally, which is critical for large files.',
    tags: ['streams', 'fs', 'performance']
  },
  {
    id: 'node-031',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the .pipe() method do on a readable stream?',
    options: [
      'Duplicates the stream into two streams',
      'Connects a readable stream\u2019s output directly to a writable stream\u2019s input, automatically managing flow',
      'Converts the stream to a Buffer',
      'Closes the stream immediately'
    ],
    correctAnswer: 'Connects a readable stream\u2019s output directly to a writable stream\u2019s input, automatically managing flow',
    explanation: 'stream.pipe() handles data flow and automatically manages backpressure, pausing the readable stream when the writable stream\u2019s buffer is full.',
    tags: ['streams', 'pipe']
  },
  {
    id: 'node-032',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a Buffer in Node.js?',
    options: [
      'A temporary variable used in loops',
      'A type of Promise',
      'A fixed-size chunk of memory used to handle raw binary data',
      'A caching layer for HTTP responses'
    ],
    correctAnswer: 'A fixed-size chunk of memory used to handle raw binary data',
    explanation: 'Buffer is a global class for working with binary data directly, used heavily in file I/O, networking, and streams, since JavaScript strings are not ideal for binary data.',
    tags: ['buffer', 'core-modules']
  },
  {
    id: 'node-033',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'How do you create a Buffer containing the UTF-8 encoded string "hi"?',
    options: [
      'Buffer.encode("hi")',
      'Buffer.from("hi")',
      'new Buffer.string("hi")',
      'Buffer.create("hi")'
    ],
    correctAnswer: 'Buffer.from("hi")',
    explanation: 'Buffer.from() is the modern, recommended way to create buffers from strings, arrays, or other buffers; the new Buffer() constructor is deprecated.',
    tags: ['buffer', 'coding']
  },
  {
    id: 'node-034',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is middleware in the context of an Express.js application?',
    options: [
      'A function with access to the request, response, and next function in the request-response cycle',
      'A type of HTTP status code',
      'A database connector',
      'A templating engine'
    ],
    correctAnswer: 'A function with access to the request, response, and next function in the request-response cycle',
    explanation: 'Middleware functions can execute code, modify req/res objects, end the request-response cycle, or call next() to pass control to the next middleware.',
    tags: ['express', 'middleware']
  },
  {
    id: 'node-035',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between dependencies and devDependencies in package.json?',
    options: [
      'dependencies are required at runtime; devDependencies are only needed during development (e.g., testing, build tools)',
      'devDependencies are installed globally',
      'There is no functional difference',
      'dependencies cannot include version ranges'
    ],
    correctAnswer: 'dependencies are required at runtime; devDependencies are only needed during development (e.g., testing, build tools)',
    explanation: 'When deploying to production with --production or --omit=dev, npm skips installing devDependencies, since they\u2019re not needed for the app to run.',
    tags: ['npm', 'package.json']
  },
  {
    id: 'node-036',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What does the following code log?\n\nasync function foo() {\n  return 1;\n}\nfoo().then(console.log);',
    options: [
      '1',
      'An error is thrown',
      'Promise { 1 }',
      'undefined'
    ],
    correctAnswer: '1',
    explanation: 'An async function always returns a Promise that resolves with the returned value, so calling .then() on it receives the resolved value 1.',
    tags: ['async-await', 'promises', 'output']
  },
  {
    id: 'node-037',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How does Node.js handle uncaught exceptions by default?',
    options: [
      'It silently ignores them',
      'It prints the stack trace and terminates the process',
      'It logs a warning and continues running',
      'It automatically restarts the process'
    ],
    correctAnswer: 'It prints the stack trace and terminates the process',
    explanation: 'Without a handler for the "uncaughtException" event on the process object, Node.js will print the error and exit, since the process is left in an undefined state.',
    tags: ['error-handling', 'process']
  },
  {
    id: 'node-038',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the cluster module in Node.js?',
    options: [
      'To cluster database connections',
      'To allow a Node.js application to fork multiple worker processes that share the same server port',
      'To minify JavaScript files',
      'To bundle multiple npm packages together'
    ],
    correctAnswer: 'To allow a Node.js application to fork multiple worker processes that share the same server port',
    explanation: 'The cluster module lets you spawn child processes (workers) that share server ports, enabling Node.js to take advantage of multi-core systems since it\u2019s otherwise single-threaded.',
    tags: ['cluster', 'scalability', 'performance']
  },
  {
    id: 'node-039',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between child_process.exec() and child_process.spawn()?',
    options: [
      'They are exactly the same',
      'exec() buffers the entire output and is best for small outputs; spawn() streams output and is better for large/continuous data',
      'spawn() can only run shell scripts',
      'exec() always runs asynchronously while spawn() is synchronous'
    ],
    correctAnswer: 'exec() buffers the entire output and is best for small outputs; spawn() streams output and is better for large/continuous data',
    explanation: 'exec() runs a command in a shell and buffers stdout/stderr into a callback (risking memory issues with large output), while spawn() returns streams for stdout/stderr, suited for long-running or large-output processes.',
    tags: ['child_process', 'processes']
  },
  {
    id: 'node-040',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of environment variable files (.env) combined with packages like dotenv?',
    options: [
      'To compile TypeScript files',
      'To define npm scripts',
      'To bundle assets for production',
      'To load environment-specific configuration into process.env without hardcoding secrets'
    ],
    correctAnswer: 'To load environment-specific configuration into process.env without hardcoding secrets',
    explanation: 'dotenv reads key-value pairs from a .env file and adds them to process.env, keeping sensitive configuration like API keys out of source code.',
    tags: ['environment', 'configuration', 'security']
  },

  // ===================== ADVANCED =====================
  {
    id: 'node-041',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How do Worker Threads differ from child processes in Node.js?',
    options: [
      'Worker threads run in separate processes with isolated memory, exactly like child processes',
      'Worker threads cannot execute JavaScript',
      'Worker threads run in the same process and can share memory via SharedArrayBuffer, with lower overhead than child processes',
      'Worker threads replace the event loop entirely'
    ],
    correctAnswer: 'Worker threads run in the same process and can share memory via SharedArrayBuffer, with lower overhead than child processes',
    explanation: 'The worker_threads module enables true multi-threading within a single Node.js process, useful for CPU-intensive tasks, with the option to share memory using SharedArrayBuffer, unlike child processes which have separate memory spaces.',
    tags: ['worker_threads', 'concurrency', 'performance']
  },
  {
    id: 'node-042',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'What is a common cause of memory leaks in long-running Node.js applications?',
    options: [
      'Using async/await instead of callbacks',
      'Using too many npm packages',
      'Using const instead of let',
      'Unintentionally retaining references in closures, global variables, or unremoved event listeners/timers'
    ],
    correctAnswer: 'Unintentionally retaining references in closures, global variables, or unremoved event listeners/timers',
    explanation: 'Common leak sources include forgotten setInterval timers, growing caches without eviction, accumulating event listeners, and closures unintentionally holding references to large objects.',
    tags: ['memory-leaks', 'performance', 'debugging']
  },
  {
    id: 'node-043',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Debugging',
    question: 'How would you take a heap snapshot to diagnose a memory leak in a running Node.js process?',
    options: [
      'Increasing the --max-old-space-size flag',
      'Restarting the process',
      'Using console.log() repeatedly',
      'Using the built-in inspector (node --inspect) with Chrome DevTools, or the heapdump/v8-profiler packages'
    ],
    correctAnswer: 'Using the built-in inspector (node --inspect) with Chrome DevTools, or the heapdump/v8-profiler packages',
    explanation: 'Heap snapshots taken via Chrome DevTools (connected through node --inspect) or libraries like heapdump let you compare memory states over time to identify retained objects causing leaks.',
    tags: ['memory-leaks', 'debugging', 'profiling']
  },
  {
    id: 'node-044',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between process.exit() and allowing the event loop to drain naturally?',
    options: [
      'process.exit() always waits for all timers to finish',
      'process.exit() can only be called inside async functions',
      'There is no difference',
      'process.exit() forcibly terminates immediately, potentially losing unflushed I/O like console output or pending writes'
    ],
    correctAnswer: 'process.exit() forcibly terminates immediately, potentially losing unflushed I/O like console output or pending writes',
    explanation: 'Calling process.exit() forces an immediate shutdown without waiting for pending asynchronous operations to complete, which can truncate writes or drop unflushed stdout buffers, especially for piped output.',
    tags: ['process', 'graceful-shutdown']
  },
  {
    id: 'node-045',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'System Design',
    question: 'How would you implement graceful shutdown in a Node.js HTTP server?',
    options: [
      'Call process.exit() immediately on SIGTERM',
      'Ignore termination signals entirely',
      'Restart the entire process pool synchronously',
      'Listen for SIGTERM/SIGINT, stop accepting new connections via server.close(), and close DB connections after in-flight requests finish'
    ],
    correctAnswer: 'Listen for SIGTERM/SIGINT, stop accepting new connections via server.close(), and close DB connections after in-flight requests finish',
    explanation: 'Graceful shutdown involves catching termination signals, calling server.close() to stop accepting new connections while letting existing requests finish, then closing resources like DB pools before exiting.',
    tags: ['graceful-shutdown', 'system-design', 'production']
  },
  {
    id: 'node-046',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'Why can JSON.parse() on a very large object block the event loop, and how can it be mitigated?',
    options: [
      'It cannot be mitigated under any circumstances',
      'It runs synchronously on the main thread; mitigation includes offloading to a worker thread or streaming JSON parsers',
      'Using try/catch automatically makes it non-blocking',
      'JSON.parse() is asynchronous by default and never blocks'
    ],
    correctAnswer: 'It runs synchronously on the main thread; mitigation includes offloading to a worker thread or streaming JSON parsers',
    explanation: 'CPU-bound synchronous operations like JSON.parse() on large payloads block the single JS thread; solutions include using worker_threads or incremental/streaming JSON parsers to avoid blocking request handling.',
    tags: ['performance', 'event-loop', 'json']
  },
  {
    id: 'node-047',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of the AsyncLocalStorage API in Node.js?',
    options: [
      'To persist data to disk asynchronously',
      'To store context that is accessible across asynchronous callbacks within the same logical operation, like request-scoped data',
      'To manage local file caching',
      'To replace EventEmitter'
    ],
    correctAnswer: 'To store context that is accessible across asynchronous callbacks within the same logical operation, like request-scoped data',
    explanation: 'AsyncLocalStorage (from the async_hooks module) lets you maintain state, like a request ID or user context, that propagates implicitly through async call chains without manually passing it through every function.',
    tags: ['async_hooks', 'AsyncLocalStorage', 'context-propagation']
  },
  {
    id: 'node-048',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Security',
    question: 'What is a common security risk when using child_process.exec() with user input?',
    options: [
      'It bypasses npm dependency checks',
      'It causes memory leaks',
      'It always crashes the process',
      'Command injection, since exec() runs commands through a shell that interprets special characters'
    ],
    correctAnswer: 'Command injection, since exec() runs commands through a shell that interprets special characters',
    explanation: 'Because exec() invokes a shell, unsanitized user input can inject extra shell commands; using execFile() or spawn() with an argument array avoids shell interpretation and mitigates this risk.',
    tags: ['security', 'child_process', 'command-injection']
  },
  {
    id: 'node-049',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Security',
    question: 'What is prototype pollution, and how can it affect a Node.js application?',
    options: [
      'A CSS styling issue',
      'An attack where an attacker injects properties into Object.prototype, potentially affecting all objects in the application',
      'A type of SQL injection',
      'A deprecated Node.js API'
    ],
    correctAnswer: 'An attack where an attacker injects properties into Object.prototype, potentially affecting all objects in the application',
    explanation: 'Prototype pollution typically occurs through unsafe merging/cloning of user-controlled JSON (e.g., using keys like "__proto__"), which can lead to denial of service or, in some cases, remote code execution.',
    tags: ['security', 'prototype-pollution']
  },
  {
    id: 'node-050',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between the CommonJS and ES Modules systems in Node.js?',
    options: [
      'They are functionally identical',
      'ESM can only be used in the browser, never in Node.js',
      'CommonJS uses require/module.exports and loads synchronously; ESM uses import/export, supports static analysis, and loads asynchronously',
      'CommonJS supports top-level await natively while ESM does not'
    ],
    correctAnswer: 'CommonJS uses require/module.exports and loads synchronously; ESM uses import/export, supports static analysis, and loads asynchronously',
    explanation: 'ES Modules (enabled via "type": "module" in package.json or .mjs files) support static imports/exports analyzable at parse time and top-level await, while CommonJS modules are resolved and loaded synchronously at runtime.',
    tags: ['esm', 'commonjs', 'modules']
  },
  {
    id: 'node-051',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'What does the following code output?\n\nconst arr = [1, 2, 3];\nasync function test() {\n  arr.forEach(async (n) => {\n    await Promise.resolve();\n    console.log(n);\n  });\n  console.log(\'done\');\n}\ntest();',
    options: [
      'done is never printed',
      '1, done, 2, 3',
      'done, 1, 2, 3',
      '1, 2, 3, done'
    ],
    correctAnswer: 'done, 1, 2, 3',
    explanation: 'forEach does not wait for the async callbacks to resolve; it fires them all immediately and continues, so "done" logs synchronously first, before the microtask queue resolves each await and logs 1, 2, 3.',
    tags: ['async-await', 'forEach', 'output', 'gotchas']
  },
  {
    id: 'node-052',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'What is the V8 "old space" and "new space" in the context of garbage collection?',
    options: [
      'New space holds short-lived young objects collected by Scavenge GC; old space holds long-lived objects collected by Mark-Sweep-Compact',
      'They refer to different versions of Node.js',
      'Old space is reserved for global variables only',
      'Two different npm registries'
    ],
    correctAnswer: 'New space holds short-lived young objects collected by Scavenge GC; old space holds long-lived objects collected by Mark-Sweep-Compact',
    explanation: 'V8\u2019s generational garbage collector splits the heap into a small, frequently-collected new space for young objects and a larger old space for objects that survive multiple GC cycles, using more expensive but less frequent collection algorithms.',
    tags: ['v8', 'garbage-collection', 'memory']
  },
  {
    id: 'node-053',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'System Design',
    question: 'In a microservices architecture using Node.js, what is a common approach for inter-service communication that avoids tight coupling?',
    options: [
      'Sharing a single in-memory object across services',
      'Direct synchronous HTTP calls only, with no fallback',
      'Using global variables across processes',
      'Asynchronous messaging via a message broker (e.g., RabbitMQ, Kafka) combined with well-defined event contracts'
    ],
    correctAnswer: 'Asynchronous messaging via a message broker (e.g., RabbitMQ, Kafka) combined with well-defined event contracts',
    explanation: 'Event-driven communication through a broker decouples services in time and space, improving resilience and scalability compared to purely synchronous request/response chains.',
    tags: ['microservices', 'system-design', 'messaging']
  },
  {
    id: 'node-054',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of the --max-old-space-size flag in Node.js?',
    options: [
      'It controls the number of worker threads',
      'It defines the maximum request body size',
      'It sets the maximum size (in MB) of V8\u2019s old memory space heap',
      'It limits the number of npm packages installed'
    ],
    correctAnswer: 'It sets the maximum size (in MB) of V8\u2019s old memory space heap',
    explanation: 'This flag adjusts V8\u2019s heap memory limit, useful in memory-constrained environments (e.g., containers) or to allow larger heaps for memory-intensive applications, since V8 imposes default heap limits.',
    tags: ['v8', 'memory', 'configuration']
  },
  {
    id: 'node-055',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'What is a key risk of using Promise.all() with an array of promises where one might reject?',
    options: [
      'Promise.all() rejects immediately upon the first rejected promise, potentially losing results from other still-pending promises',
      'Promise.all() can only accept two promises',
      'It always resolves regardless of rejections',
      'Promise.all() ignores rejections silently'
    ],
    correctAnswer: 'Promise.all() rejects immediately upon the first rejected promise, potentially losing results from other still-pending promises',
    explanation: 'Promise.all() short-circuits on the first rejection; if you need all results regardless of failures, Promise.allSettled() should be used instead.',
    tags: ['promises', 'async', 'error-handling']
  },
  {
    id: 'node-056',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What problem does the "Transform" stream type solve?',
    options: [
      'It only works with binary files',
      'It replaces the need for pipe()',
      'It allows reading input data, modifying/transforming it, and writing the result, acting as both Readable and Writable',
      'It converts streams into Buffers permanently'
    ],
    correctAnswer: 'It allows reading input data, modifying/transforming it, and writing the result, acting as both Readable and Writable',
    explanation: 'Transform streams (like zlib.createGzip()) extend Duplex streams and implement a _transform() method that processes each chunk as it passes through, ideal for compression, encryption, or parsing pipelines.',
    tags: ['streams', 'transform-stream']
  },
  {
    id: 'node-057',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'How does Node.js handle CPU-bound tasks, and why can they be problematic?',
    options: [
      'They are automatically delegated to libuv\u2019s thread pool',
      'CPU-bound tasks run synchronously on the single main thread, blocking the event loop and delaying all other requests',
      'CPU-bound tasks never affect I/O performance',
      'CPU-bound tasks are automatically distributed across CPU cores'
    ],
    correctAnswer: 'CPU-bound tasks run synchronously on the single main thread, blocking the event loop and delaying all other requests',
    explanation: 'Since Node.js executes JS on one thread, long-running synchronous computation (e.g., heavy loops, image processing) blocks the event loop, delaying all pending I/O callbacks; worker_threads or offloading to another service mitigates this.',
    tags: ['performance', 'event-loop', 'cpu-bound']
  },
  {
    id: 'node-058',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What does the "Design Patterns" concept of a Singleton mean when applied to a Node.js module?',
    options: [
      'A module that can be imported multiple times with different states each time',
      'A module that must use ES Modules',
      'A pattern only usable with classes, never plain objects',
      'Since Node.js caches required modules, a module exporting an instance is effectively a singleton shared across all importers'
    ],
    correctAnswer: 'Since Node.js caches required modules, a module exporting an instance is effectively a singleton shared across all importers',
    explanation: 'Node\u2019s module cache ensures require() returns the same exported object on every call (for the same resolved path), so exporting a class instance or configured object naturally implements the Singleton pattern.',
    tags: ['design-patterns', 'singleton', 'modules']
  },
  {
    id: 'node-059',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Design Patterns',
    question: 'How does the Observer pattern relate to Node.js\u2019s EventEmitter?',
    options: [
      'They are unrelated concepts',
      'EventEmitter is a direct implementation of the Observer pattern, where listeners (observers) subscribe to events emitted by a subject',
      'The Observer pattern cannot be implemented in Node.js',
      'EventEmitter implements the Singleton pattern, not Observer'
    ],
    correctAnswer: 'EventEmitter is a direct implementation of the Observer pattern, where listeners (observers) subscribe to events emitted by a subject',
    explanation: 'In the Observer pattern, observers register interest in a subject\u2019s state changes; EventEmitter implements this by allowing .on() listeners to subscribe to named events emitted via .emit().',
    tags: ['design-patterns', 'observer', 'EventEmitter']
  },
  {
    id: 'node-060',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Debugging',
    question: 'What tool/flag would you use to profile CPU usage of a running Node.js application?',
    options: [
      'node --prof, then process the generated isolate log with node --prof-process',
      'npm audit',
      'node --version',
      'node --check'
    ],
    correctAnswer: 'node --prof, then process the generated isolate log with node --prof-process',
    explanation: 'The --prof flag generates a V8 profiler log capturing tick samples of where time is spent; node --prof-process converts this into a human-readable summary highlighting hot functions.',
    tags: ['profiling', 'debugging', 'performance']
  },

  // ===================== MNC (FAANG / High-Bar) =====================
  {
    id: 'node-061',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'You are designing a Node.js API gateway that must handle 50,000 requests/sec with minimal latency. What architectural choices would you prioritize?',
    options: [
      'A single Node.js process with synchronous logic for simplicity',
      'Running all logic in worker_threads regardless of I/O vs CPU nature',
      'Horizontal scaling via cluster/PM2 or container orchestration, non-blocking I/O throughout, connection pooling, and caching at the edge',
      'Avoiding load balancers to reduce network hops'
    ],
    correctAnswer: 'Horizontal scaling via cluster/PM2 or container orchestration, non-blocking I/O throughout, connection pooling, and caching at the edge',
    explanation: 'High-throughput Node.js systems scale horizontally across cores/instances since a single process is bound by one thread for JS execution; combined with non-blocking I/O, pooled connections, and caching, this minimizes per-request latency and resource contention.',
    tags: ['system-design', 'scalability', 'architecture']
  },
  {
    id: 'node-062',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a rate limiter for a distributed Node.js service running across multiple instances?',
    options: [
      'Rely on the client to self-limit requests',
      'Store counters in each instance\u2019s local memory',
      'Use a centralized store like Redis with atomic increment and expiry (e.g., sliding window or token bucket algorithm)',
      'Use process.env to share state across instances'
    ],
    correctAnswer: 'Use a centralized store like Redis with atomic increment and expiry (e.g., sliding window or token bucket algorithm)',
    explanation: 'Since each Node.js instance has isolated memory, in-memory rate limiting fails in distributed deployments; a shared store like Redis, using atomic operations to avoid race conditions, ensures consistent limits across all instances.',
    tags: ['system-design', 'rate-limiting', 'distributed-systems']
  },
  {
    id: 'node-063',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'Your Node.js service\u2019s p99 latency spikes periodically even though average CPU usage is low. What is a likely cause, and how would you investigate?',
    options: [
      'It is always caused by database replication lag',
      'p99 latency spikes cannot be diagnosed in Node.js',
      'Network latency is always the cause; no investigation needed',
      'Garbage collection pauses or event loop blocking from occasional heavy synchronous operations; investigate using --trace-gc and event loop lag monitoring'
    ],
    correctAnswer: 'Garbage collection pauses or event loop blocking from occasional heavy synchronous operations; investigate using --trace-gc and event loop lag monitoring',
    explanation: 'Intermittent latency spikes with low average CPU often point to GC pauses (especially full Mark-Sweep-Compact cycles) or occasional blocking synchronous calls; tools like --trace-gc, clinic.js, or event loop lag metrics (perf_hooks.monitorEventLoopDelay) help pinpoint the cause.',
    tags: ['performance', 'garbage-collection', 'debugging', 'latency']
  },
  {
    id: 'node-064',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design idempotent API endpoints in a Node.js payment service to handle network retries safely?',
    options: [
      'Disable retries at the load balancer level entirely',
      'Rely on the client to never retry requests',
      'Require an idempotency key per request, store processed results keyed by it, and return the cached result for duplicate keys instead of reprocessing',
      'Use random request IDs generated server-side'
    ],
    correctAnswer: 'Require an idempotency key per request, store processed results keyed by it, and return the cached result for duplicate keys instead of reprocessing',
    explanation: 'Idempotency keys (often client-generated UUIDs) let the server detect and safely handle duplicate retries from network failures by returning the original result instead of performing the operation (e.g., a charge) twice.',
    tags: ['system-design', 'idempotency', 'payments', 'reliability']
  },
  {
    id: 'node-065',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'You need to process 1 million records from a database and write them to a file without exhausting memory. What approach is best in Node.js?',
    options: [
      'Use synchronous fs.writeFileSync for each record individually',
      'Use a database cursor/stream combined with a Node.js writable stream, processing and writing records incrementally',
      'Store all records in global variables for later use',
      'Load all records into an array with a single query, then write them all at once'
    ],
    correctAnswer: 'Use a database cursor/stream combined with a Node.js writable stream, processing and writing records incrementally',
    explanation: 'Streaming records from the database (via a cursor) and piping them through transform/writable streams keeps memory bounded regardless of dataset size, unlike loading everything into memory at once.',
    tags: ['streams', 'performance', 'database', 'memory']
  },
  {
    id: 'node-066',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a circuit breaker pattern for outgoing HTTP calls from a Node.js microservice?',
    options: [
      'Block all outgoing requests if any single request fails once',
      'Retry failed requests indefinitely without limits',
      'Always return cached data regardless of downstream health',
      'Track failure rates per dependency; when failures exceed a threshold, "open" the circuit to fail fast and periodically test recovery with a "half-open" state'
    ],
    correctAnswer: 'Track failure rates per dependency; when failures exceed a threshold, "open" the circuit to fail fast and periodically test recovery with a "half-open" state',
    explanation: 'A circuit breaker (e.g., via libraries like opossum) prevents cascading failures by short-circuiting calls to a failing dependency, giving it time to recover, and periodically probing with limited requests before fully reopening traffic.',
    tags: ['system-design', 'circuit-breaker', 'resilience', 'microservices']
  },
  {
    id: 'node-067',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'In a Node.js application accepting file uploads, what is a critical security control to prevent remote code execution or server compromise?',
    options: [
      'Validate file type via content inspection (magic bytes), enforce size limits, store outside the web root, and scan for malware before processing',
      'Trust the file extension provided by the client',
      'Rename files using the original filename only',
      'Allow any file type as long as the upload succeeds'
    ],
    correctAnswer: 'Validate file type via content inspection (magic bytes), enforce size limits, store outside the web root, and scan for malware before processing',
    explanation: 'Client-supplied extensions and MIME types are trivially spoofed; robust validation inspects actual file content, limits size to prevent resource exhaustion, isolates storage location, and ideally scans uploads before further processing.',
    tags: ['security', 'file-upload', 'production']
  },
  {
    id: 'node-068',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'Why might increasing the libuv thread pool size (UV_THREADPOOL_SIZE) improve throughput for certain Node.js workloads, and what are the trade-offs?',
    options: [
      'It increases the number of JavaScript execution threads',
      'It increases parallelism for thread-pool-bound operations like fs and some crypto/DNS calls, but raises memory/context-switching overhead and doesn\u2019t help pure network I/O',
      'It only affects HTTP request parsing speed',
      'It has no measurable effect on performance'
    ],
    correctAnswer: 'It increases parallelism for thread-pool-bound operations like fs and some crypto/DNS calls, but raises memory/context-switching overhead and doesn\u2019t help pure network I/O',
    explanation: 'Operations like file system access and certain crypto functions use libuv\u2019s thread pool rather than the OS\u2019s native async I/O (used for sockets), so increasing pool size can relieve contention for those workloads, though it comes at the cost of more OS threads to manage.',
    tags: ['libuv', 'performance', 'threading']
  },
  {
    id: 'node-069',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you architect a Node.js system to safely handle "thundering herd" cache stampedes when a popular cache key expires?',
    options: [
      'Disable caching entirely to avoid the problem',
      'Let every request hit the database simultaneously when the cache expires',
      'Cache values forever with no expiration',
      'Use request coalescing/locking (e.g., a mutex or "promise cache") so only one request recomputes the value while others wait for that result, plus staggered TTLs'
    ],
    correctAnswer: 'Use request coalescing/locking (e.g., a mutex or "promise cache") so only one request recomputes the value while others wait for that result, plus staggered TTLs',
    explanation: 'Cache stampedes occur when many concurrent requests miss the cache simultaneously and hammer the backing store; coalescing in-flight recomputation into a single shared Promise (and using jittered TTLs to avoid synchronized expiry) prevents this overload.',
    tags: ['system-design', 'caching', 'scalability']
  },
  {
    id: 'node-070',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'What is "head-of-line blocking" risk in a Node.js process handling many concurrent async operations, and how does it differ from true parallel execution?',
    options: [
      'A long synchronous task (or microtask queue flood) on the single JS thread delays all other pending callbacks, even though I/O itself is non-blocking',
      'It does not apply to Node.js since it is fully parallel',
      'It is solved automatically by Promise.all()',
      'It only refers to TCP-level packet ordering, unrelated to JS execution'
    ],
    correctAnswer: 'A long synchronous task (or microtask queue flood) on the single JS thread delays all other pending callbacks, even though I/O itself is non-blocking',
    explanation: 'Even though Node.js handles many concurrent I/O operations efficiently via the event loop, the actual JS callback execution is serialized on one thread; a CPU-heavy synchronous function or runaway microtask chain still blocks all other pending work from being processed.',
    tags: ['event-loop', 'concurrency', 'performance']
  },
  {
    id: 'node-071',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'What is wrong with the following code in a high-traffic Node.js API, and how would you fix it?\n\napp.get(\'/users\', async (req, res) => {\n  const users = await db.query(\'SELECT * FROM users\');\n  res.json(users);\n});',
    options: [
      'async/await cannot be used inside Express route handlers',
      'res.json() does not work with arrays',
      'Nothing is wrong; this is production-ready as-is',
      'It lacks pagination, error handling, and could return unbounded result sets, risking memory and latency issues at scale'
    ],
    correctAnswer: 'It lacks pagination, error handling, and could return unbounded result sets, risking memory and latency issues at scale',
    explanation: 'Fetching an entire table without pagination/limits can return huge payloads, straining memory and network; additionally, there\u2019s no try/catch or centralized error-handling middleware to catch rejected promises, which in older Express versions could even crash the process.',
    tags: ['express', 'api-design', 'pagination', 'error-handling']
  },
  {
    id: 'node-072',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a Node.js worker system to process millions of background jobs reliably, ensuring no job is lost on crash?',
    options: [
      'Process jobs synchronously in the main HTTP request handler',
      'Rely on setInterval to poll a database table with no locking',
      'Store jobs in an in-memory array within the worker process',
      'Use a durable queue (e.g., Redis-backed BullMQ, RabbitMQ, or SQS) with acknowledgments, retry policies, and dead-letter queues for failed jobs'
    ],
    correctAnswer: 'Use a durable queue (e.g., Redis-backed BullMQ, RabbitMQ, or SQS) with acknowledgments, retry policies, and dead-letter queues for failed jobs',
    explanation: 'A durable, persisted queue ensures jobs survive worker crashes; explicit acknowledgment ensures a job is only removed once successfully processed, retry policies handle transient failures, and dead-letter queues capture jobs that repeatedly fail for manual inspection.',
    tags: ['system-design', 'job-queues', 'reliability', 'bullmq']
  },
  {
    id: 'node-073',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'What is the impact of excessive Promise chaining or deeply nested async/await on V8 stack traces and performance, and how can it be mitigated?',
    options: [
      'It can produce long, less useful stack traces and add overhead from microtask scheduling; mitigations include flattening logic, using Error.captureStackTrace, and async stack trace tools',
      'There is no measurable impact in modern V8',
      'It can only be fixed by switching to callbacks',
      'It always causes a stack overflow error'
    ],
    correctAnswer: 'It can produce long, less useful stack traces and add overhead from microtask scheduling; mitigations include flattening logic, using Error.captureStackTrace, and async stack trace tools',
    explanation: 'Each await introduces a microtask tick, and deeply chained async calls can make stack traces harder to follow across asynchronous boundaries; flattening control flow, structured logging with correlation IDs, and tools that support async stack traces (--async-stack-traces) help with debuggability and reduce overhead.',
    tags: ['performance', 'async-await', 'debugging']
  },
  {
    id: 'node-074',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design schema validation for a high-throughput Node.js REST API to balance safety and performance?',
    options: [
      'Validate only on the client side and trust all server-side input',
      'Manually write nested if/else checks for every field on every request',
      'Use a compiled, schema-based validator (e.g., Ajv with precompiled JSON Schema) at the edge of request handling to fail fast with minimal overhead',
      'Skip validation entirely to maximize throughput'
    ],
    correctAnswer: 'Use a compiled, schema-based validator (e.g., Ajv with precompiled JSON Schema) at the edge of request handling to fail fast with minimal overhead',
    explanation: 'Compiled validators like Ajv generate optimized validation functions ahead of time, offering far better performance than hand-rolled checks, while still rejecting malformed input early before it reaches business logic, reducing wasted downstream work.',
    tags: ['system-design', 'validation', 'performance', 'api-design']
  },
  {
    id: 'node-075',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'Why is it generally discouraged to use process-wide global mutable state (e.g., a module-level cache object) in a horizontally scaled Node.js deployment?',
    options: [
      'It has no impact on multi-instance deployments',
      'Each instance has its own isolated memory, so global state becomes inconsistent across instances, leading to stale or conflicting data unless externalized to a shared store',
      'Global state is automatically synced across instances by Node.js',
      'Global variables are forbidden by the JavaScript specification'
    ],
    correctAnswer: 'Each instance has its own isolated memory, so global state becomes inconsistent across instances, leading to stale or conflicting data unless externalized to a shared store',
    explanation: 'In a horizontally scaled deployment, every Node.js process/container has independent memory; relying on local global state for things like caches, sessions, or counters causes inconsistency across instances unless that state is externalized to something like Redis.',
    tags: ['system-design', 'scalability', 'state-management']
  },
  {
    id: 'node-076',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Debugging',
    question: 'A production Node.js service occasionally hangs with 100% CPU usage and never recovers. What is a likely culprit, and how would you confirm it?',
    options: [
      'A network timeout, confirmed by checking DNS logs',
      'An infinite loop or pathological regular expression (ReDoS) blocking the event loop; confirmed by taking a CPU profile or a synchronous stack dump (kill -USR1 or 0x heapdump) during the hang',
      'Disk space exhaustion, confirmed by checking RAM usage',
      'It is always caused by too many open file descriptors'
    ],
    correctAnswer: 'An infinite loop or pathological regular expression (ReDoS) blocking the event loop; confirmed by taking a CPU profile or a synchronous stack dump (kill -USR1 or 0x heapdump) during the hang',
    explanation: 'A pinned 100% CPU usage with no recovery strongly suggests the single JS thread is stuck in synchronous computation, often from an infinite loop or a catastrophic backtracking regex (ReDoS); capturing a CPU profile or a stack/heap snapshot while it\u2019s hung pinpoints the exact function and line.',
    tags: ['debugging', 'performance', 'redos', 'production']
  },
  {
    id: 'node-077',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement zero-downtime deployments for a stateful Node.js WebSocket service?',
    options: [
      'Use rolling deployments with connection draining, allow existing WebSocket clients to reconnect to new instances via load balancer health checks, and externalize session state (e.g., Redis pub/sub)',
      'Disable the load balancer during deployment',
      'Simply restart the process; brief connection drops are acceptable',
      'Run only a single instance to avoid coordination complexity'
    ],
    correctAnswer: 'Use rolling deployments with connection draining, allow existing WebSocket clients to reconnect to new instances via load balancer health checks, and externalize session state (e.g., Redis pub/sub)',
    explanation: 'WebSocket connections are long-lived and stateful, so zero-downtime deploys require rolling new instances in gradually, draining old connections gracefully (often with reconnect logic on the client), and storing shared state outside individual instances to keep behavior consistent across the transition.',
    tags: ['system-design', 'websockets', 'deployment', 'scalability']
  },
  {
    id: 'node-078',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'What subtle issue can arise when using async/await inside a try/catch block combined with a finally block that also contains an await?',
    options: [
      'finally always runs before catch',
      'If the finally block\u2019s awaited operation rejects, it can silently override/replace the original error or completion value from the try/catch',
      'There is no possible issue; this pattern is always safe',
      'finally blocks cannot contain await statements'
    ],
    correctAnswer: 'If the finally block\u2019s awaited operation rejects, it can silently override/replace the original error or completion value from the try/catch',
    explanation: 'A rejected promise awaited inside finally will propagate and replace any return value or exception from the try/catch, a subtle gotcha that can mask the original error if not handled carefully.',
    tags: ['async-await', 'error-handling', 'gotchas']
  },
  {
    id: 'node-079',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a multi-tenant Node.js SaaS backend to ensure strict data isolation between tenants while sharing infrastructure?',
    options: [
      'Store all tenants\u2019 data in one unscoped table with no isolation logic',
      'Trust application-level filtering alone with no database-level enforcement',
      'Give each tenant direct database credentials with full access',
      'Combine tenant-scoped query filters with database-level enforcement (e.g., row-level security or separate schemas/databases per tenant) and centralized middleware that injects tenant context per request'
    ],
    correctAnswer: 'Combine tenant-scoped query filters with database-level enforcement (e.g., row-level security or separate schemas/databases per tenant) and centralized middleware that injects tenant context per request',
    explanation: 'Relying solely on application code to filter by tenant ID is risky if a single query is missed; defense-in-depth combines middleware that consistently attaches tenant context (often via AsyncLocalStorage) with database-enforced isolation like row-level security or per-tenant schemas.',
    tags: ['system-design', 'multi-tenancy', 'security', 'saas']
  },
  {
    id: 'node-080',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How do you handle backpressure in Node.js streams?',
    options: [
      'Ignoring data overflow since Node.js streams handle it invisibly',
      'Using the .pause() and .resume() methods, or letting .pipe() manage it automatically based on the writable stream\u2019s internal buffer',
      'Increasing the buffer size limit indefinitely',
      'Using a dedicated worker thread for every chunk of data'
    ],
    correctAnswer: 'Using the .pause() and .resume() methods, or letting .pipe() manage it automatically based on the writable stream\u2019s internal buffer',
    explanation: 'Backpressure occurs when a readable stream pushes data faster than a writable stream can consume it. Handling it involves monitoring the return value of .write() (false signals to pause) and controlling flow with .pause()/.resume(), or relying on .pipe(), which manages this automatically.',
    tags: ['streams', 'performance', 'buffer']
  },
  {
    id: 'node-081',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'How would you mitigate ReDoS (Regular Expression Denial of Service) vulnerabilities in a Node.js application that validates user input with regex?',
    options: [
      'Avoid regex validation entirely in all cases',
      'Use safe regex patterns (avoiding nested quantifiers/catastrophic backtracking), set execution timeouts, or use a dedicated safe-regex linting tool, and consider offloading to a worker thread',
      'Increase the libuv thread pool size',
      'Switch all regex operations to synchronous fs calls'
    ],
    correctAnswer: 'Use safe regex patterns (avoiding nested quantifiers/catastrophic backtracking), set execution timeouts, or use a dedicated safe-regex linting tool, and consider offloading to a worker thread',
    explanation: 'Since regex execution is synchronous and blocks the event loop, malicious crafted input can exploit poorly written patterns causing catastrophic backtracking; mitigations include linting regexes for safety, bounding input length, and isolating risky matching in a worker thread with a timeout.',
    tags: ['security', 'redos', 'regex']
  },
  {
    id: 'node-082',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a distributed lock mechanism in Node.js to coordinate access to a shared resource across multiple instances?',
    options: [
      'Use a distributed locking primitive such as Redis with the Redlock algorithm or a database-backed lock with TTL and fencing tokens',
      'Avoid locks entirely and accept inconsistent writes',
      'Rely on setTimeout to "guess" when other instances are done',
      'Use a local JavaScript mutex variable shared via global state'
    ],
    correctAnswer: 'Use a distributed locking primitive such as Redis with the Redlock algorithm or a database-backed lock with TTL and fencing tokens',
    explanation: 'In-process locks only protect against concurrency within a single instance; true distributed coordination needs an external store with atomic operations, lock expiry (to avoid deadlocks on crash), and ideally fencing tokens to prevent stale lock holders from acting after expiry.',
    tags: ['system-design', 'distributed-systems', 'locking', 'redis']
  },
  {
    id: 'node-083',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'What is the difference between "cooperative" and "preemptive" scheduling, and how does this relate to Node.js\u2019s single-threaded model?',
    options: [
      'Node.js JS execution is cooperative: a running callback runs to completion before yielding, so long callbacks must voluntarily yield (e.g., via setImmediate) to avoid starving others',
      'Node.js uses preemptive scheduling like most OS thread schedulers',
      'Cooperative scheduling means multiple callbacks always run simultaneously',
      'This distinction is irrelevant to Node.js performance'
    ],
    correctAnswer: 'Node.js JS execution is cooperative: a running callback runs to completion before yielding, so long callbacks must voluntarily yield (e.g., via setImmediate) to avoid starving others',
    explanation: 'Unlike OS-level preemptive multitasking where the scheduler can interrupt a thread, Node.js callbacks run to completion uninterrupted; a long-running synchronous callback monopolizes the thread until it returns, making explicit yielding (chunking work via setImmediate/setTimeout) necessary for fairness.',
    tags: ['event-loop', 'scheduling', 'concurrency']
  },
  {
    id: 'node-084',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'What is wrong with the following error handling pattern in an Express app, and what is the production-grade fix?\n\napp.get(\'/data\', (req, res) => {\n  fetchData().then(data => res.json(data));\n});',
    options: [
      'res.json() cannot be used inside a .then() callback',
      'A rejected promise from fetchData() is unhandled, which can crash the process (older Express) or hang the request; add a .catch() or use centralized async error-handling middleware',
      'Nothing; Express automatically catches rejected promises in all versions',
      'fetchData() must be synchronous for Express to work correctly'
    ],
    correctAnswer: 'A rejected promise from fetchData() is unhandled, which can crash the process (older Express) or hang the request; add a .catch() or use centralized async error-handling middleware',
    explanation: 'Express (pre-v5) does not automatically catch promise rejections in route handlers, so an unhandled rejection can crash the process or leave the client hanging; the fix is to add a .catch(next) or wrap handlers with a utility that forwards errors to Express\u2019s error-handling middleware.',
    tags: ['express', 'error-handling', 'promises', 'production']
  },
  {
    id: 'node-085',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a Node.js service to gracefully handle a downstream database that becomes temporarily unavailable, without cascading failures upstream?',
    options: [
      'Queue all failed requests in unbounded memory until the database recovers',
      'Combine connection pooling with exponential backoff retries, circuit breaking, request timeouts, and returning cached/degraded responses where possible',
      'Retry every failed query instantly and indefinitely',
      'Crash the process immediately on any database error'
    ],
    correctAnswer: 'Combine connection pooling with exponential backoff retries, circuit breaking, request timeouts, and returning cached/degraded responses where possible',
    explanation: 'Resilient design layers multiple techniques: bounded retries with backoff avoid hammering a struggling dependency, circuit breakers stop sending traffic once failures spike, timeouts prevent resource exhaustion from hung requests, and graceful degradation (cached data, partial responses) maintains partial availability.',
    tags: ['system-design', 'resilience', 'database', 'production']
  },
  {
    id: 'node-086',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does "non-blocking I/O" mean in Node.js?',
    options: [
      'I/O operations restricted to files only',
      'I/O operations that never complete',
      'I/O operations that allow the program to continue executing other code while waiting for completion',
      'I/O operations that always run on a separate server'
    ],
    correctAnswer: 'I/O operations that allow the program to continue executing other code while waiting for completion',
    explanation: 'Non-blocking I/O means the program issues a request (like a file read or network call) and continues executing other code, being notified via callback/event when the operation completes, rather than waiting idle.',
    tags: ['fundamentals', 'i/o', 'event-loop']
  },
  {
    id: 'node-087',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which command runs a Node.js script named app.js from the terminal?',
    options: [
      'node start app.js',
      'npm app.js',
      'run app.js',
      'node app.js'
    ],
    correctAnswer: 'node app.js',
    explanation: 'Running "node" followed by the file path executes that JavaScript file using the Node.js runtime.',
    tags: ['cli', 'fundamentals']
  },
  {
    id: 'node-088',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the purpose of the "os" module in Node.js?',
    options: [
      'To create new files',
      'To provide operating system-related utility methods, like CPU info and memory usage',
      'To manage HTTP servers',
      'To install operating system updates'
    ],
    correctAnswer: 'To provide operating system-related utility methods, like CPU info and memory usage',
    explanation: 'The os module exposes information about the underlying operating system, including os.cpus(), os.totalmem(), os.platform(), and more.',
    tags: ['os', 'core-modules']
  },
  {
    id: 'node-089',
    topic: 'node',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'What does the following code output?\n\nconst os = require(\'os\');\nconsole.log(typeof os.platform());',
    options: [
      '"string"',
      '"undefined"',
      '"function"',
      '"object"'
    ],
    correctAnswer: '"string"',
    explanation: 'os.platform() returns a string identifying the operating system platform (e.g., "linux", "darwin", "win32").',
    tags: ['os', 'output']
  },
  {
    id: 'node-090',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the "cors" middleware commonly used in Express applications?',
    options: [
      'To control which origins are permitted to make cross-origin requests to the server',
      'To parse cookies',
      'To compress response bodies',
      'To cache static files'
    ],
    correctAnswer: 'To control which origins are permitted to make cross-origin requests to the server',
    explanation: 'CORS (Cross-Origin Resource Sharing) middleware sets response headers like Access-Control-Allow-Origin to permit or restrict browser requests originating from different domains.',
    tags: ['express', 'cors', 'security']
  },
  {
    id: 'node-091',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the "morgan" package commonly provide in an Express application?',
    options: [
      'HTTP request logging middleware',
      'Authentication via JWT',
      'Template rendering',
      'Database ORM functionality'
    ],
    correctAnswer: 'HTTP request logging middleware',
    explanation: 'Morgan is a widely used Express middleware that logs HTTP request details (method, URL, status, response time) to help with debugging and monitoring.',
    tags: ['express', 'logging', 'middleware']
  },
  {
    id: 'node-092',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'How do you handle a 404 (route not found) error in an Express application?',
    options: [
      'Throw a generic Error in every route handler',
      'Express handles 404s automatically with no configuration needed',
      '404 errors cannot occur in Express',
      'Add a catch-all middleware after all defined routes that responds with a 404 status'
    ],
    correctAnswer: 'Add a catch-all middleware after all defined routes that responds with a 404 status',
    explanation: 'Since Express matches routes in order, placing a middleware function after all route definitions (with no matching path) catches any unmatched request and allows you to respond with a custom 404 handler.',
    tags: ['express', 'error-handling', 'routing']
  },
  {
    id: 'node-093',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between app.use() and app.get() in Express?',
    options: [
      'app.get() can only be used for static files',
      'app.use() is deprecated in modern Express',
      'They are interchangeable in every situation',
      'app.use() mounts middleware for all HTTP methods (and optionally a path prefix); app.get() specifically registers a handler for GET requests on an exact route'
    ],
    correctAnswer: 'app.use() mounts middleware for all HTTP methods (and optionally a path prefix); app.get() specifically registers a handler for GET requests on an exact route',
    explanation: 'app.use() is method-agnostic and often used for middleware like body parsers or routers, while app.get(), app.post(), etc., bind handlers to specific HTTP verbs and routes.',
    tags: ['express', 'routing', 'middleware']
  },
  {
    id: 'node-094',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of JSON Web Tokens (JWT) in a Node.js authentication system?',
    options: [
      'To compress API responses',
      'To encrypt the entire HTTP request body',
      'To replace HTTPS entirely',
      'To create a self-contained, signed token that securely represents user claims, verifiable without a server-side session store'
    ],
    correctAnswer: 'To create a self-contained, signed token that securely represents user claims, verifiable without a server-side session store',
    explanation: 'JWTs encode claims (like user ID and roles) in a signed payload that servers can verify using a secret or public key, enabling stateless authentication without needing to look up sessions in a database on every request.',
    tags: ['jwt', 'authentication', 'security']
  },
  {
    id: 'node-095',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Security',
    question: 'Why should JWTs typically have a short expiration time, with refresh tokens used to renew access?',
    options: [
      'Short-lived tokens reduce the window of exposure if a token is stolen, since refresh tokens can be revoked while access tokens cannot be',
      'There is no security reason; it is purely a performance optimization',
      'JWTs become invalid automatically when the browser closes',
      'Short expiration improves token compression'
    ],
    correctAnswer: 'Short-lived tokens reduce the window of exposure if a token is stolen, since refresh tokens can be revoked while access tokens cannot be',
    explanation: 'Because JWTs are stateless and cannot be invalidated before expiry without extra infrastructure (e.g., a blocklist), keeping access tokens short-lived limits damage from theft, while longer-lived refresh tokens (stored more securely and revocable) are used to obtain new access tokens.',
    tags: ['jwt', 'security', 'authentication']
  },
  {
    id: 'node-096',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the bcrypt library commonly provide in Node.js authentication systems?',
    options: [
      'Token generation for JWTs',
      'Session storage in memory',
      'Fast, reversible encryption of passwords',
      'One-way hashing of passwords with built-in salting, resistant to brute-force attacks'
    ],
    correctAnswer: 'One-way hashing of passwords with built-in salting, resistant to brute-force attacks',
    explanation: 'bcrypt is a deliberately slow, adaptive hashing algorithm with built-in per-password salting, designed specifically to make brute-force and rainbow-table attacks on stored password hashes computationally expensive.',
    tags: ['bcrypt', 'security', 'authentication']
  },
  {
    id: 'node-097',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of connection pooling when a Node.js app connects to a relational database?',
    options: [
      'To store query results in memory permanently',
      'To reuse a limited set of established database connections across requests, avoiding the overhead of opening/closing connections repeatedly',
      'To encrypt database traffic',
      'To automatically scale the database server'
    ],
    correctAnswer: 'To reuse a limited set of established database connections across requests, avoiding the overhead of opening/closing connections repeatedly',
    explanation: 'Connection pools maintain a set of open, reusable connections, since establishing a new database connection per request is expensive; pooling significantly improves throughput and reduces latency for database-heavy applications.',
    tags: ['database', 'connection-pooling', 'performance']
  },
  {
    id: 'node-098',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What is the risk of building SQL queries via string concatenation with user input in a Node.js application?',
    options: [
      'It only affects NoSQL databases',
      'Slower query execution only',
      'It causes memory leaks',
      'SQL injection, allowing attackers to manipulate the query and potentially access or modify unauthorized data'
    ],
    correctAnswer: 'SQL injection, allowing attackers to manipulate the query and potentially access or modify unauthorized data',
    explanation: 'Concatenating untrusted input directly into SQL strings allows attackers to inject arbitrary SQL; parameterized queries or prepared statements (supported by drivers like pg, mysql2) prevent this by treating input strictly as data, not executable SQL.',
    tags: ['security', 'sql-injection', 'database']
  },
  {
    id: 'node-099',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between unit tests, integration tests, and end-to-end tests in a Node.js application?',
    options: [
      'Unit tests can only test database code',
      'End-to-end tests run faster than unit tests',
      'Unit tests verify isolated functions/modules; integration tests verify interactions between components (e.g., API + DB); end-to-end tests verify complete user flows through the full system',
      'They are all identical concepts with different names'
    ],
    correctAnswer: 'Unit tests verify isolated functions/modules; integration tests verify interactions between components (e.g., API + DB); end-to-end tests verify complete user flows through the full system',
    explanation: 'These test types form a pyramid: many fast, isolated unit tests; fewer integration tests covering component interactions; and a small number of slower end-to-end tests validating real user workflows across the whole stack.',
    tags: ['testing', 'fundamentals']
  },
  {
    id: 'node-100',
    topic: 'node',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'Which testing frameworks are commonly used for unit testing Node.js applications?',
    options: [
      'Webpack and Babel',
      'Express and Koa',
      'PM2 and nodemon',
      'Jest, Mocha, and Vitest'
    ],
    correctAnswer: 'Jest, Mocha, and Vitest',
    explanation: 'Jest and Mocha (often paired with Chai for assertions) are long-standing popular choices, while Vitest has gained traction for its speed and modern tooling, especially in ESM/TypeScript projects.',
    tags: ['testing', 'jest', 'mocha']
  },
  {
    id: 'node-101',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is "mocking" in the context of testing a Node.js service that depends on an external API?',
    options: [
      'Running tests directly against production APIs',
      'Disabling tests entirely for that dependency',
      'A way to permanently cache API responses',
      'Replacing the real dependency with a fake implementation that simulates its behavior, isolating the unit under test'
    ],
    correctAnswer: 'Replacing the real dependency with a fake implementation that simulates its behavior, isolating the unit under test',
    explanation: 'Mocking external dependencies (using tools like jest.mock(), sinon, or nock for HTTP) lets tests run deterministically and quickly without relying on network calls or real external services.',
    tags: ['testing', 'mocking']
  },
  {
    id: 'node-102',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of TypeScript in a Node.js project, and what trade-off does it introduce?',
    options: [
      'It makes code run faster at runtime than plain JavaScript',
      'It eliminates the need for testing',
      'It adds static typing and compile-time checks on top of JavaScript, at the cost of a build/transpilation step before execution',
      'It replaces Node.js entirely with a new runtime'
    ],
    correctAnswer: 'It adds static typing and compile-time checks on top of JavaScript, at the cost of a build/transpilation step before execution',
    explanation: 'TypeScript catches type errors during development and improves tooling/autocomplete, but since Node.js doesn\u2019t natively execute TypeScript, it must be compiled (e.g., via tsc, ts-node, or esbuild) before or during execution, adding a build step.',
    tags: ['typescript', 'tooling']
  },
  {
    id: 'node-103',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the role of a reverse proxy like Nginx in front of a Node.js application in production?',
    options: [
      'It can handle TLS termination, load balancing across multiple Node.js instances, static asset serving, and request buffering',
      'It is only used for logging purposes',
      'It compiles the Node.js application to native code',
      'It replaces the need for a Node.js server entirely'
    ],
    correctAnswer: 'It can handle TLS termination, load balancing across multiple Node.js instances, static asset serving, and request buffering',
    explanation: 'A reverse proxy offloads tasks Node.js isn\u2019t optimized for, like serving static files efficiently and terminating SSL/TLS, while distributing traffic across multiple application instances for scalability and resilience.',
    tags: ['system-design', 'nginx', 'deployment']
  },
  {
    id: 'node-104',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of process managers like PM2 in Node.js production deployments?',
    options: [
      'To replace npm for package installation',
      'To handle database migrations',
      'To compile TypeScript code',
      'To keep Node.js processes running, automatically restart them on crash, manage clustering, and provide logging/monitoring'
    ],
    correctAnswer: 'To keep Node.js processes running, automatically restart them on crash, manage clustering, and provide logging/monitoring',
    explanation: 'PM2 provides production process management features like automatic restarts on crash, zero-downtime reloads, built-in clustering across CPU cores, and centralized log aggregation, though container orchestrators like Kubernetes often replace these needs in modern deployments.',
    tags: ['pm2', 'deployment', 'production']
  },
  {
    id: 'node-105',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the significance of the "Node.js LTS" (Long Term Support) release line?',
    options: [
      'LTS is a separate runtime from Node.js',
      'LTS releases receive extended bug fixes and security updates over a longer period, recommended for production use over Current releases',
      'LTS versions cannot run npm packages',
      'LTS versions are faster than non-LTS versions'
    ],
    correctAnswer: 'LTS releases receive extended bug fixes and security updates over a longer period, recommended for production use over Current releases',
    explanation: 'Node.js follows a release schedule where even-numbered major versions become LTS, receiving stability-focused updates and security patches for an extended window (typically 30 months total), making them the recommended choice for production systems over the more experimental Current releases.',
    tags: ['versioning', 'lts', 'production']
  },
  {
    id: 'node-106',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'What does the following code demonstrate, and what potential issue does it have?\n\nlet count = 0;\nsetInterval(() => {\n  count++;\n  console.log(count);\n}, 1000);',
    options: [
      'It only runs once due to closures',
      'It runs an unbounded interval timer that keeps the process alive indefinitely unless explicitly cleared, which can prevent graceful shutdown',
      'setInterval cannot capture outer variables',
      'It demonstrates a memory leak that crashes immediately'
    ],
    correctAnswer: 'It runs an unbounded interval timer that keeps the process alive indefinitely unless explicitly cleared, which can prevent graceful shutdown',
    explanation: 'An active timer like setInterval keeps the event loop alive (the process won\u2019t exit naturally) until clearInterval() is called or process.exit() forces termination; forgetting to clear such timers is a common source of resource leaks and shutdown issues.',
    tags: ['timers', 'event-loop', 'gotchas']
  },
  {
    id: 'node-107',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of the "Strategy" design pattern, and how might it be applied in a Node.js payment processing module?',
    options: [
      'It defines a family of interchangeable algorithms (e.g., different payment providers) behind a common interface, selectable at runtime',
      'It hardcodes a single algorithm permanently',
      'It replaces the need for dependency injection',
      'It is only applicable to front-end code'
    ],
    correctAnswer: 'It defines a family of interchangeable algorithms (e.g., different payment providers) behind a common interface, selectable at runtime',
    explanation: 'The Strategy pattern lets you encapsulate different payment processing logic (e.g., Stripe, PayPal, bank transfer) behind a shared interface, allowing the caller to swap strategies without changing the consuming code.',
    tags: ['design-patterns', 'strategy']
  },
  {
    id: 'node-108',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Design Patterns',
    question: 'How does dependency injection benefit testability in a Node.js application?',
    options: [
      'It has no effect on testability',
      'It eliminates the need for any tests',
      'By passing dependencies (like a database client) into a module rather than hardcoding them, tests can substitute mocks/stubs easily',
      'It forces all code to use global variables'
    ],
    correctAnswer: 'By passing dependencies (like a database client) into a module rather than hardcoding them, tests can substitute mocks/stubs easily',
    explanation: 'When dependencies are injected (via constructor parameters, factory functions, or a DI container) rather than imported and instantiated directly inside a module, tests can supply fake implementations, making units easier to isolate and test deterministically.',
    tags: ['design-patterns', 'dependency-injection', 'testing']
  },
  {
    id: 'node-109',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the Factory pattern, and where might it be used in a Node.js application?',
    options: [
      'A pattern for manufacturing physical hardware',
      'A pattern that replaces all classes with plain objects',
      'A pattern exclusive to functional programming',
      'A pattern that centralizes object creation logic behind a function/class, useful for instantiating different logger or database adapter implementations based on configuration'
    ],
    correctAnswer: 'A pattern that centralizes object creation logic behind a function/class, useful for instantiating different logger or database adapter implementations based on configuration',
    explanation: 'A factory function or class encapsulates the logic for deciding which concrete implementation to instantiate (e.g., choosing a database driver based on environment config), decoupling callers from the specific construction details.',
    tags: ['design-patterns', 'factory']
  },
  {
    id: 'node-110',
    topic: 'node',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What does it mean for a Node.js module to follow the Middleware (chain of responsibility) pattern, beyond Express specifically?',
    options: [
      'It requires using class inheritance exclusively',
      'It only applies to HTTP frameworks',
      'It eliminates the need for error handling',
      'A sequence of handlers each process input and optionally pass control to the next handler in the chain, allowing composable processing pipelines'
    ],
    correctAnswer: 'A sequence of handlers each process input and optionally pass control to the next handler in the chain, allowing composable processing pipelines',
    explanation: 'Beyond HTTP frameworks, the chain-of-responsibility-like middleware pattern appears in things like Redux middleware, gRPC interceptors, or custom validation pipelines, wherever a series of composable processing steps need to run in sequence with the option to short-circuit.',
    tags: ['design-patterns', 'middleware', 'chain-of-responsibility']
  },
  {
    id: 'node-111',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design observability (logging, metrics, tracing) for a Node.js microservices architecture at scale?',
    options: [
      'Only monitor CPU usage at the OS level',
      'Implement structured logging with correlation/trace IDs, expose metrics (e.g., via Prometheus client libraries), and use distributed tracing (e.g., OpenTelemetry) to follow requests across services',
      'Use console.log exclusively across all services',
      'Disable logging in production to save resources'
    ],
    correctAnswer: 'Implement structured logging with correlation/trace IDs, expose metrics (e.g., via Prometheus client libraries), and use distributed tracing (e.g., OpenTelemetry) to follow requests across services',
    explanation: 'Effective observability in distributed systems combines structured, correlatable logs (often propagated via AsyncLocalStorage), application/business metrics scraped by tools like Prometheus, and distributed tracing standards like OpenTelemetry to visualize request flow and latency across service boundaries.',
    tags: ['system-design', 'observability', 'microservices', 'opentelemetry']
  },
  {
    id: 'node-112',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you reduce cold start latency for a Node.js function deployed in a serverless environment (e.g., AWS Lambda)?',
    options: [
      'Always use the largest available memory configuration regardless of need',
      'Increase the function timeout indefinitely',
      'Minimize bundle size, reduce dependency count, use provisioned concurrency, and avoid heavy work at module load time',
      'Run a full Express app with dozens of middleware layers for every function'
    ],
    correctAnswer: 'Minimize bundle size, reduce dependency count, use provisioned concurrency, and avoid heavy work at module load time',
    explanation: 'Cold starts are heavily influenced by how much code must be loaded and initialized before handling the first request; trimming dependencies, lazy-loading non-critical modules, and using provisioned concurrency (where supported) all reduce this initialization overhead.',
    tags: ['serverless', 'performance', 'lambda']
  },
  {
    id: 'node-113',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'Why can passing large objects between the main thread and a Worker Thread be expensive, and how can this cost be reduced?',
    options: [
      'There is no performance cost to passing data to worker threads',
      'Worker threads cannot receive any data from the main thread',
      'Worker threads automatically share all memory with the main thread by default',
      'By default, data is structured-cloned (serialized/deserialized), which is costly for large objects; using transferable objects like ArrayBuffer or SharedArrayBuffer avoids the copy'
    ],
    correctAnswer: 'By default, data is structured-cloned (serialized/deserialized), which is costly for large objects; using transferable objects like ArrayBuffer or SharedArrayBuffer avoids the copy',
    explanation: 'postMessage() between the main thread and workers uses the structured clone algorithm by default, copying data; for large binary payloads, transferring ownership of an ArrayBuffer (zero-copy) or sharing memory via SharedArrayBuffer significantly reduces overhead.',
    tags: ['worker_threads', 'performance', 'memory']
  },
  {
    id: 'node-114',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a Node.js system to safely apply database schema migrations during a zero-downtime deployment with multiple running instances?',
    options: [
      'Run migrations directly inside each instance\u2019s startup code simultaneously',
      'Run different schema versions on each instance permanently',
      'Skip migrations and manually edit the production database',
      'Run migrations as a separate, single, idempotent step before rolling out new instances, ensuring backward-compatible schema changes during the transition window'
    ],
    correctAnswer: 'Run migrations as a separate, single, idempotent step before rolling out new instances, ensuring backward-compatible schema changes during the transition window',
    explanation: 'Running migrations from every instance simultaneously risks race conditions and duplicate execution; instead, migrations should run once as a controlled step, and schema changes should remain backward-compatible so old and new application versions can both operate correctly during a rolling deployment.',
    tags: ['system-design', 'database', 'migrations', 'deployment']
  },
  {
    id: 'node-115',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'What subtle bug exists in this rate-limiting middleware, and how would you fix it?\n\nconst counts = {};\napp.use((req, res, next) => {\n  const ip = req.ip;\n  counts[ip] = (counts[ip] || 0) + 1;\n  if (counts[ip] > 100) return res.status(429).end();\n  next();\n});',
    options: [
      'req.ip is not a valid Express property',
      'The counts object grows unbounded (memory leak) and never resets per time window, and is not shared across multiple instances; use a TTL-based store like Redis with expiry',
      'Middleware cannot use closures over outer variables',
      'There is no bug; this is production-ready'
    ],
    correctAnswer: 'The counts object grows unbounded (memory leak) and never resets per time window, and is not shared across multiple instances; use a TTL-based store like Redis with expiry',
    explanation: 'This implementation never clears or expires entries, causing unbounded memory growth and permanently blocking any IP that ever exceeded 100 total requests; additionally, in-memory state isn\u2019t shared across multiple instances, breaking rate limiting in scaled deployments. A TTL-based external store fixes both issues.',
    tags: ['express', 'rate-limiting', 'memory-leaks', 'gotchas']
  },
  {
    id: 'node-116',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design retry logic for a Node.js client calling a flaky downstream HTTP API, to avoid making the situation worse during an outage?',
    options: [
      'Never retry under any circumstances',
      'Retry immediately and indefinitely with no delay',
      'Retry only on successful (2xx) responses',
      'Use exponential backoff with jitter, a maximum retry count, and respect Retry-After headers where provided'
    ],
    correctAnswer: 'Use exponential backoff with jitter, a maximum retry count, and respect Retry-After headers where provided',
    explanation: 'Naive immediate retries can amplify load on an already struggling service (a "retry storm"); exponential backoff with randomized jitter spreads out retry attempts over time, a bounded retry count prevents infinite loops, and honoring Retry-After headers cooperates with the server\u2019s own signal about when to retry.',
    tags: ['system-design', 'resilience', 'retries', 'http']
  },
  {
    id: 'node-117',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'Why might enabling HTTP keep-alive on outgoing requests significantly improve performance for a Node.js service making many calls to the same downstream host?',
    options: [
      'It reuses existing TCP connections instead of establishing a new TCP/TLS handshake for every request, reducing latency and connection overhead',
      'It compresses the request body automatically',
      'Keep-alive has no measurable performance benefit',
      'It disables SSL/TLS for faster transfer'
    ],
    correctAnswer: 'It reuses existing TCP connections instead of establishing a new TCP/TLS handshake for every request, reducing latency and connection overhead',
    explanation: 'Without keep-alive, each outgoing HTTP request may incur a fresh TCP handshake (and TLS negotiation for HTTPS), which is costly; reusing connections via an http.Agent with keepAlive enabled amortizes this cost across many requests to the same host, substantially reducing latency under load.',
    tags: ['performance', 'http', 'networking']
  },
  {
    id: 'node-118',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a Node.js system to handle "eventual consistency" when writing to a primary database and updating a search index (e.g., Elasticsearch) asynchronously?',
    options: [
      'Skip updating the search index entirely',
      'Update both synchronously within the same transaction and accept the latency cost as the only option',
      'Write to the primary store, then publish an event for the search index update (via a queue or change-data-capture stream), accepting brief replication lag and designing the UI/UX to tolerate it',
      'Poll the search index continuously from the client to force consistency'
    ],
    correctAnswer: 'Write to the primary store, then publish an event for the search index update (via a queue or change-data-capture stream), accepting brief replication lag and designing the UI/UX to tolerate it',
    explanation: 'Synchronizing two heterogeneous stores transactionally is often impractical; a common pattern is to treat the primary database as the source of truth, propagate changes asynchronously (via outbox pattern, message queue, or CDC like Debezium) to the search index, and accept a small consistency lag as an explicit trade-off.',
    tags: ['system-design', 'eventual-consistency', 'distributed-systems', 'search']
  },
  {
    id: 'node-119',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'What is "megamorphic" call site overhead in V8, and why does it matter for performance-critical Node.js code?',
    options: [
      'It is unrelated to JavaScript performance entirely',
      'It only affects TypeScript compiled code',
      'It refers to billing units in cloud providers',
      'When a function/property access site sees many different object shapes (megamorphic), V8 cannot optimize it as efficiently as a monomorphic site, leading to slower execution'
    ],
    correctAnswer: 'When a function/property access site sees many different object shapes (megamorphic), V8 cannot optimize it as efficiently as a monomorphic site, leading to slower execution',
    explanation: 'V8 uses inline caches keyed on object "shape" (hidden class) to speed up property access and calls; when a call site repeatedly sees objects of varying shapes (megamorphic), V8 falls back to slower generic lookup paths instead of optimized, shape-specific code, which is a key consideration when writing hot-path code in performance-sensitive Node.js services.',
    tags: ['v8', 'performance', 'optimization']
  },
  {
    id: 'node-120',
    topic: 'node',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How do you handle backpressure end-to-end in a Node.js pipeline that reads from a database, transforms data, and writes to a remote API with limited throughput?',
    options: [
      'Read all data into memory first, then send requests as fast as possible',
      'Increase the libuv thread pool size to compensate',
      'Compose Readable/Transform/Writable streams (or async iterables) so each stage only pulls as much as the slowest downstream consumer can handle, combined with concurrency limiting for the API calls',
      'Ignore the issue since Node.js streams cannot interoperate with external APIs'
    ],
    correctAnswer: 'Compose Readable/Transform/Writable streams (or async iterables) so each stage only pulls as much as the slowest downstream consumer can handle, combined with concurrency limiting for the API calls',
    explanation: 'End-to-end backpressure means every stage in the pipeline, from the database cursor through transformation logic to the final API call, respects the throughput of the slowest link; chaining streams (or async generators) with .pipe()/pipeline() automatically propagates this signal, and adding a concurrency limiter (e.g., p-limit) for outgoing API calls prevents overwhelming a rate-limited downstream service.',
    tags: ['streams', 'backpressure', 'system-design', 'performance']
  }
];