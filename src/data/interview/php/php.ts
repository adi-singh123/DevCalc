/**
 * src/data/interview/php.ts
 * PHP Interview Questions (Difficult Set)
 * Levels: Beginner (10) -> Intermediate (35) -> Advanced (40) -> MNC (35)
 */

import { InterviewQuestion } from '@/src/types/interview';

export const phpQuestions: InterviewQuestion[] = [
  // ===================== BEGINNER (10) =====================
  {
    id: 'php-001',
    topic: 'php',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does PHP stand for?',
    options: [
      'Personal Home Page',
      'Hypertext Preprocessor (a recursive acronym: PHP: Hypertext Preprocessor)',
      'Programmed Hyperlink Protocol',
      'Pretty Hypertext Parser'
    ],
    correctAnswer: 'Hypertext Preprocessor (a recursive acronym: PHP: Hypertext Preprocessor)',
    explanation: 'PHP originally stood for "Personal Home Page" but was later renamed to the recursive backronym "PHP: Hypertext Preprocessor".',
    tags: ['fundamentals', 'history']
  },
  {
    id: 'php-002',
    topic: 'php',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which symbol denotes the start of a PHP variable?',
    options: [
      '#',
      '@',
      '$',
      '&'
    ],
    correctAnswer: '$',
    explanation: 'All PHP variables are prefixed with a dollar sign, e.g. $name, distinguishing them from constants and bare identifiers.',
    tags: ['syntax', 'variables']
  },
  {
    id: 'php-003',
    topic: 'php',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'What does the following code output?\n\necho 5 . 5;',
    options: [
      '"10"',
      'A parse error',
      '"55"',
      '10'
    ],
    correctAnswer: '"55"',
    explanation: 'The dot operator concatenates rather than adds; both integers are coerced to strings and joined, producing the string "55".',
    tags: ['operators', 'output', 'gotchas']
  },
  {
    id: 'php-004',
    topic: 'php',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which operator checks both value and type equality?',
    options: [
      '==',
      '=',
      '===',
      '<>'
    ],
    correctAnswer: '===',
    explanation: 'The identical operator (===) compares both value and type, while == performs type juggling before comparing values.',
    tags: ['operators', 'comparison']
  },
  {
    id: 'php-005',
    topic: 'php',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'How do you start a PHP code block within an HTML file?',
    options: [
      '<script php>',
      '<?php',
      '<%php%>',
      '[php]'
    ],
    correctAnswer: '<?php',
    explanation: 'PHP code is embedded in a document using the opening tag <?php, which the parser switches into PHP mode upon encountering.',
    tags: ['syntax', 'fundamentals']
  },
  {
    id: 'php-006',
    topic: 'php',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which superglobal array holds data submitted via an HTML form using the POST method?',
    options: [
      '$_REQUEST only',
      '$_FORM',
      '$_POST',
      '$_DATA'
    ],
    correctAnswer: '$_POST',
    explanation: '$_POST is an associative superglobal array populated with form field data when the request method is POST.',
    tags: ['superglobals', 'forms']
  },
  {
    id: 'php-007',
    topic: 'php',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does the function isset() check for?',
    options: [
      'Whether a variable is declared and is not NULL',
      'Whether a function has been defined',
      'Whether a file exists on disk',
      'Whether a variable equals zero'
    ],
    correctAnswer: 'Whether a variable is declared and is not NULL',
    explanation: 'isset() returns true only if a variable exists and its value is not NULL; it returns false for unset variables and variables explicitly set to NULL.',
    tags: ['functions', 'variables']
  },
  {
    id: 'php-008',
    topic: 'php',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which array type uses named keys instead of sequential numeric indexes?',
    options: [
      'Indexed array',
      'Associative array',
      'Static array',
      'Multidimensional array'
    ],
    correctAnswer: 'Associative array',
    explanation: 'Associative arrays in PHP map arbitrary string or integer keys to values, e.g. ["name" => "Alice"], unlike indexed arrays which use sequential integers.',
    tags: ['arrays', 'fundamentals']
  },
  {
    id: 'php-009',
    topic: 'php',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the purpose of the "include" statement?',
    options: [
      'It deletes a file after loading it',
      'It inserts and evaluates the contents of another PHP file at that point in the script',
      'It compiles PHP to bytecode permanently',
      'It only works with .html files'
    ],
    correctAnswer: 'It inserts and evaluates the contents of another PHP file at that point in the script',
    explanation: 'include() (and require()) brings in and executes code from a specified file, commonly used for sharing functions, configuration, or templates across scripts.',
    tags: ['include', 'modularity']
  },
  {
    id: 'php-010',
    topic: 'php',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the difference between echo and print in PHP?',
    options: [
      'print can take multiple comma-separated arguments while echo cannot',
      'echo is a language construct that can take multiple arguments and has no return value; print takes a single argument and always returns 1',
      'They are entirely unrelated; print writes to a log file',
      'echo can only be used inside functions'
    ],
    correctAnswer: 'echo is a language construct that can take multiple arguments and has no return value; print takes a single argument and always returns 1',
    explanation: 'Both output strings, but echo accepts a comma-separated list of expressions and is marginally faster, while print accepts only one argument and evaluates to the integer 1, making it usable in expressions.',
    tags: ['echo', 'print', 'fundamentals']
  },

  // ===================== INTERMEDIATE (35) =====================
  {
    id: 'php-011',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What does the following output?\n\nvar_dump("10" == "1e1");',
    options: [
      'bool(false)',
      'A TypeError is thrown',
      'bool(true)',
      'NULL'
    ],
    correctAnswer: 'bool(true)',
    explanation: 'Since PHP 8, when comparing a numeric string to another numeric string, both are interpreted numerically; "1e1" evaluates to 10, equal to "10", so loose comparison returns true.',
    tags: ['type-juggling', 'comparison', 'gotchas']
  },
  {
    id: 'php-012',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between include and require?',
    options: [
      'require can only be used once per script',
      'include is for classes; require is for functions',
      'include produces a warning and continues script execution if the file is missing; require produces a fatal error and halts execution',
      'There is no functional difference between them'
    ],
    correctAnswer: 'include produces a warning and continues script execution if the file is missing; require produces a fatal error and halts execution',
    explanation: 'Both load external files, but require is intended for files essential to execution, since a missing file causes a fatal error, whereas include only emits a warning, letting the script continue.',
    tags: ['include', 'require', 'error-handling']
  },
  {
    id: 'php-013',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the "static" keyword when used on a local variable inside a function?',
    options: [
      'It makes the variable globally accessible',
      'It preserves the variable\u2019s value between successive calls to that function',
      'It prevents the variable from being modified',
      'It forces the variable to be passed by reference'
    ],
    correctAnswer: 'It preserves the variable\u2019s value between successive calls to that function',
    explanation: 'A static local variable retains its value across function calls rather than being reinitialized each time, useful for counters or memoization within a single function scope.',
    tags: ['static', 'scope', 'functions']
  },
  {
    id: 'php-014',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What does the following output?\n\nfunction addOne(&$arr) {\n  foreach ($arr as &$v) { $v++; }\n}\n$nums = [1, 2, 3];\naddOne($nums);\nforeach ($nums as $v) { echo $v; }\necho $nums[2];',
    options: [
      '23433',
      '2344 (the last value is unpredictable due to a dangling reference)',
      '2343',
      'A fatal error is thrown'
    ],
    correctAnswer: '2344 (the last value is unpredictable due to a dangling reference)',
    explanation: 'The inner foreach leaves $v as a reference to the last array element. The outer foreach in the caller then reuses the variable name $v, inadvertently overwriting $nums[2] through the dangling reference, a classic PHP foreach-by-reference gotcha.',
    tags: ['references', 'foreach', 'gotchas']
  },
  {
    id: 'php-015',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What visibility modifier allows a class property to be accessed only within the declaring class itself, not subclasses?',
    options: [
      'protected',
      'final',
      'private',
      'public'
    ],
    correctAnswer: 'private',
    explanation: 'private restricts access to the exact declaring class; protected additionally allows access from subclasses; public allows access from anywhere.',
    tags: ['oop', 'visibility', 'encapsulation']
  },
  {
    id: 'php-016',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of an abstract class in PHP?',
    options: [
      'A class that automatically implements all interfaces',
      'A class that can never have any methods',
      'A class that cannot be instantiated directly and may define methods that subclasses must implement',
      'A class used only for static utility functions'
    ],
    correctAnswer: 'A class that cannot be instantiated directly and may define methods that subclasses must implement',
    explanation: 'Abstract classes serve as base templates, declaring abstract methods with no body that concrete subclasses are required to implement, while also optionally providing shared concrete methods.',
    tags: ['oop', 'abstract-class']
  },
  {
    id: 'php-017',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How does an interface differ from an abstract class in PHP?',
    options: [
      'An interface can contain private methods with implementation',
      'Interfaces define a contract of method signatures (and constants) with no implementation, and a class can implement multiple interfaces, whereas PHP classes can only extend one (abstract or concrete) parent class',
      'A class can only implement one interface but extend multiple abstract classes',
      'There is no meaningful difference'
    ],
    correctAnswer: 'Interfaces define a contract of method signatures (and constants) with no implementation, and a class can implement multiple interfaces, whereas PHP classes can only extend one (abstract or concrete) parent class',
    explanation: 'PHP supports single inheritance for classes but multiple interface implementation, letting a class fulfill several contracts (interfaces) while only ever extending one parent class.',
    tags: ['oop', 'interfaces', 'abstract-class']
  },
  {
    id: 'php-018',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the "final" keyword do when applied to a method?',
    options: [
      'It makes the method private automatically',
      'It marks the method as deprecated',
      'It allows the method to be overridden only once',
      'It prevents subclasses from overriding that method'
    ],
    correctAnswer: 'It prevents subclasses from overriding that method',
    explanation: 'Declaring a method final locks its implementation in place; any subclass attempting to redefine it triggers a fatal error, which is used to protect critical behavior from being altered.',
    tags: ['oop', 'final', 'inheritance']
  },
  {
    id: 'php-019',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What is the output?\n\nclass Counter {\n  public static int $count = 0;\n  public function __construct() { self::$count++; }\n}\nnew Counter(); new Counter();\necho Counter::$count;',
    options: [
      '0',
      'undefined',
      '1',
      '2'
    ],
    correctAnswer: '2',
    explanation: 'Static properties are shared across all instances of a class rather than per-object, so each constructor call increments the same shared $count, resulting in 2 after two instantiations.',
    tags: ['oop', 'static-properties', 'output']
  },
  {
    id: 'php-020',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a PHP trait used for?',
    options: [
      'To enforce strict typing on a class',
      'To declare an immutable class',
      'To reuse a set of methods across multiple unrelated classes, working around the single-inheritance limitation',
      'To define database schema mappings'
    ],
    correctAnswer: 'To reuse a set of methods across multiple unrelated classes, working around the single-inheritance limitation',
    explanation: 'Traits are a horizontal code reuse mechanism allowing method implementations to be mixed into multiple classes that may not share a common ancestor, addressing limits of single inheritance.',
    tags: ['oop', 'traits']
  },
  {
    id: 'php-021',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does Composer\'s autoloading via PSR-4 rely on?',
    options: [
      'A flat global include of every file in the vendor directory',
      'Manually written require statements for every class',
      'A naming convention mapping namespace prefixes to directory structures, so classes are loaded lazily on first use',
      'Embedding all classes inside a single index.php file'
    ],
    correctAnswer: 'A naming convention mapping namespace prefixes to directory structures, so classes are loaded lazily on first use',
    explanation: 'PSR-4 autoloading maps namespace prefixes to base directories; Composer generates an autoloader that resolves a fully qualified class name to a file path and requires it only when the class is first referenced.',
    tags: ['composer', 'autoloading', 'psr-4']
  },
  {
    id: 'php-022',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What does the null coalescing operator do in the following?\n\n$name = $_GET[\'name\'] ?? \'Guest\';',
    options: [
      'It throws an error if $_GET[\'name\'] is missing',
      'It assigns "Guest" only if $_GET[\'name\'] is an empty string',
      'It assigns $_GET[\'name\'] if it is set and not NULL, otherwise assigns "Guest", without raising a notice for an undefined key',
      'It always assigns "Guest" regardless of $_GET'
    ],
    correctAnswer: 'It assigns $_GET[\'name\'] if it is set and not NULL, otherwise assigns "Guest", without raising a notice for an undefined key',
    explanation: 'The ?? operator suppresses the "undefined array key" notice that would otherwise occur, and falls back to the right-hand value when the left-hand expression is unset or NULL.',
    tags: ['null-coalescing', 'operators']
  },
  {
    id: 'php-023',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of PDO (PHP Data Objects)?',
    options: [
      'A templating engine for views',
      'A database access abstraction layer offering a consistent interface across multiple database drivers and supporting prepared statements',
      'A caching mechanism for static assets',
      'A session management library'
    ],
    correctAnswer: 'A database access abstraction layer offering a consistent interface across multiple database drivers and supporting prepared statements',
    explanation: 'PDO provides a uniform API for interacting with different database systems (MySQL, PostgreSQL, SQLite, etc.), and its prepared statement support is a key tool for preventing SQL injection.',
    tags: ['pdo', 'database']
  },
  {
    id: 'php-024',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Security',
    question: 'Why are prepared statements with bound parameters preferred over directly interpolating user input into SQL strings?',
    options: [
      'They run measurably faster on every query regardless of caching',
      'They separate the SQL command structure from the data, so user input can never be interpreted as executable SQL, preventing SQL injection',
      'They automatically encrypt the database connection',
      'They eliminate the need for input validation entirely'
    ],
    correctAnswer: 'They separate the SQL command structure from the data, so user input can never be interpreted as executable SQL, preventing SQL injection',
    explanation: 'With prepared statements, the query structure is compiled first and parameters are sent separately as data, meaning malicious input like \' OR 1=1 -- cannot alter the query\u2019s logic, fundamentally closing the SQL injection vector.',
    tags: ['security', 'sql-injection', 'pdo']
  },
  {
    id: 'php-025',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the "use" keyword accomplish in the following closure?\n\n$multiplier = 3;\n$fn = function($x) use ($multiplier) { return $x * $multiplier; };',
    options: [
      'It imports a namespace into the closure',
      'It captures the outer variable\u2019s value into the closure\u2019s scope at definition time (by value unless prefixed with &)',
      'It declares $multiplier as a class property',
      'It makes $multiplier globally accessible'
    ],
    correctAnswer: 'It captures the outer variable\u2019s value into the closure\u2019s scope at definition time (by value unless prefixed with &)',
    explanation: 'Anonymous functions do not automatically inherit the enclosing scope; use explicitly imports specified variables, by value by default (a snapshot at definition time) or by reference with use (&$var).',
    tags: ['closures', 'anonymous-functions', 'scope']
  },
  {
    id: 'php-026',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between session-based and token-based (e.g., JWT) authentication in a PHP web application?',
    options: [
      'Sessions can only be used with MySQL',
      'JWTs are always less secure than sessions',
      'Sessions store authentication state server-side keyed by a session ID cookie; token-based auth embeds verifiable claims in a self-contained token the client presents on each request, avoiding server-side session storage',
      'There is no difference; both rely on the same underlying mechanism'
    ],
    correctAnswer: 'Sessions store authentication state server-side keyed by a session ID cookie; token-based auth embeds verifiable claims in a self-contained token the client presents on each request, avoiding server-side session storage',
    explanation: 'Traditional PHP sessions rely on a server-side store (files, Redis, DB) referenced by a cookie-held session ID, while token-based approaches like JWT carry signed claims directly, trading server-side statefulness for token revocation complexity.',
    tags: ['authentication', 'sessions', 'jwt']
  },
  {
    id: 'php-027',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the password_hash() function use by default in modern PHP, and why is it preferred over md5() for storing passwords?',
    options: [
      'It uses MD5 with a fixed application-wide salt',
      'It uses bcrypt (or another adaptive algorithm) with a unique, automatically generated salt per call, making brute-force attacks computationally expensive, unlike fast, unsalted hashes like md5()',
      'It stores the password in plaintext with a checksum',
      'It uses a reversible XOR-based cipher'
    ],
    correctAnswer: 'It uses bcrypt (or another adaptive algorithm) with a unique, automatically generated salt per call, making brute-force attacks computationally expensive, unlike fast, unsalted hashes like md5()',
    explanation: 'password_hash() defaults to the bcrypt algorithm (PASSWORD_DEFAULT), automatically generating a cryptographically random salt per password and incorporating a deliberately slow cost factor, making it far more resistant to brute-force and rainbow-table attacks than fast general-purpose hashes like md5() or sha1().',
    tags: ['security', 'password-hashing']
  },
  {
    id: 'php-028',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the "Composer" tool in the PHP ecosystem?',
    options: [
      'A built-in PHP web server',
      'A unit testing framework',
      'A dependency manager that resolves, downloads, and autoloads project dependencies declared in composer.json',
      'A code formatter and linter'
    ],
    correctAnswer: 'A dependency manager that resolves, downloads, and autoloads project dependencies declared in composer.json',
    explanation: 'Composer reads composer.json to resolve a compatible dependency graph, downloads packages from repositories like Packagist, and generates an autoloader, making it the de facto standard package manager for modern PHP projects.',
    tags: ['composer', 'tooling', 'dependency-management']
  },
  {
    id: 'php-029',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What is the output?\n\nfunction test(int $x = 5, int $y) { return $x + $y; }\necho test(y: 3);',
    options: [
      '8',
      'A parse/compile error: a required parameter cannot follow an optional one positionally, but named arguments allow skipping it',
      '3',
      '5'
    ],
    correctAnswer: '8',
    explanation: 'Although a required parameter following a default-valued one is disallowed when calling positionally, PHP 8\u2019s named arguments let you explicitly supply y while $x falls back to its default value of 5, yielding 5 + 3 = 8.',
    tags: ['named-arguments', 'functions', 'php8']
  },
  {
    id: 'php-030',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does PHP\'s "match" expression (introduced in PHP 8) improve upon compared to "switch"?',
    options: [
      'match supports fallthrough between arms by default',
      'match uses strict (===) comparison, requires no break statements, must be exhaustive or throw, and is an expression that returns a value',
      'match can only compare strings, unlike switch',
      'match is functionally identical to switch with different syntax'
    ],
    correctAnswer: 'match uses strict (===) comparison, requires no break statements, must be exhaustive or throw, and is an expression that returns a value',
    explanation: 'Unlike switch, which uses loose comparison and requires explicit break to avoid fallthrough, match performs strict type comparisons, has no fallthrough, evaluates directly to a value, and throws UnhandledMatchError if no arm matches and no default exists.',
    tags: ['match', 'control-flow', 'php8']
  },
  {
    id: 'php-031',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of type declarations (type hints) on function parameters and return types in PHP?',
    options: [
      'They are purely cosmetic and ignored at runtime',
      'They enforce (or coerce, depending on strict_types) argument and return types at runtime, catching type errors early and improving code reliability',
      'They only function within interfaces',
      'They replace the need for any testing'
    ],
    correctAnswer: 'They enforce (or coerce, depending on strict_types) argument and return types at runtime, catching type errors early and improving code reliability',
    explanation: 'PHP type declarations are enforced at runtime, not just static analysis hints; without declare(strict_types=1), PHP performs type coercion where possible, while strict mode throws a TypeError for any mismatch.',
    tags: ['type-hints', 'strict-types']
  },
  {
    id: 'php-032',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What does declare(strict_types=1); change about the following call?\n\nfunction add(int $a, int $b): int { return $a + $b; }\necho add("5", "10");',
    options: [
      'It has no effect since strings are always coerced',
      'Without it, "5" and "10" are coerced to integers; with it declared, passing strings instead of int throws a TypeError',
      'It converts the function to accept only floats',
      'It silently returns NULL instead of throwing'
    ],
    correctAnswer: 'Without it, "5" and "10" are coerced to integers; with it declared, passing strings instead of int throws a TypeError',
    explanation: 'strict_types only affects scalar type declarations within the file it\u2019s declared in (must be the first statement); without it, PHP\u2019s default weak typing coerces compatible numeric strings to int, but with it enabled, only an actual int (or for return types, exact matches) is accepted.',
    tags: ['strict-types', 'type-hints', 'gotchas']
  },
  {
    id: 'php-033',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the __construct() magic method?',
    options: [
      'It is called automatically when an object is destroyed',
      'It serializes an object to a string',
      'It is automatically invoked when a new instance of the class is created, used for initialization',
      'It is invoked whenever an undefined method is called'
    ],
    correctAnswer: 'It is automatically invoked when a new instance of the class is created, used for initialization',
    explanation: '__construct() is PHP\u2019s constructor magic method, automatically called upon instantiation via "new", typically used to initialize object properties or inject dependencies.',
    tags: ['oop', 'magic-methods', 'constructor']
  },
  {
    id: 'php-034',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What do the magic methods __get() and __set() enable?',
    options: [
      'Direct manipulation of the database',
      'Intercepting access to inaccessible or undefined properties, enabling dynamic property handling such as lazy loading or validation',
      'Automatic serialization to JSON',
      'Overloading arithmetic operators on objects'
    ],
    correctAnswer: 'Intercepting access to inaccessible or undefined properties, enabling dynamic property handling such as lazy loading or validation',
    explanation: '__get() and __set() are triggered when reading from or writing to inaccessible (private/protected) or non-existent properties, commonly used to implement virtual properties, validation logic, or lazy-loaded data.',
    tags: ['oop', 'magic-methods', 'overloading']
  },
  {
    id: 'php-035',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the role of the __toString() magic method?',
    options: [
      'It is called when casting an array to a string',
      'It defines how an object should be represented when used in a string context, such as echo $obj;',
      'It converts a class definition into PHP source code',
      'It is invoked only during var_dump()'
    ],
    correctAnswer: 'It defines how an object should be represented when used in a string context, such as echo $obj;',
    explanation: 'Without __toString(), attempting to use an object directly in a string context throws an Error; implementing it lets objects be echoed or concatenated as a custom string representation.',
    tags: ['oop', 'magic-methods', '__toString']
  },
  {
    id: 'php-036',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How does PHP\'s exception hierarchy distinguish between Exception and Error since PHP 7?',
    options: [
      'Error is deprecated and unused',
      'Both Exception and Error implement the Throwable interface, but Error represents internal engine errors (type errors, fatal issues) while Exception represents application-level exceptional conditions; catching Throwable handles both',
      'Exception can only be thrown manually; Error can only be thrown by extensions',
      'They are aliases of the same class'
    ],
    correctAnswer: 'Both Exception and Error implement the Throwable interface, but Error represents internal engine errors (type errors, fatal issues) while Exception represents application-level exceptional conditions; catching Throwable handles both',
    explanation: 'PHP 7 introduced the Throwable interface, unifying Exception and the newly introduced Error hierarchy (covering things previously fatal, like calling a method on null), allowing a single catch (Throwable $e) to handle both categories uniformly.',
    tags: ['exceptions', 'error-handling', 'throwable']
  },
  {
    id: 'php-037',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What happens if a "finally" block contains a return statement, alongside a try block that also returns a value?',
    options: [
      'A fatal error is thrown for having two return statements',
      'finally never executes if try already returned',
      'PHP ignores the return in finally entirely',
      'The return value in finally overrides the return value from the try (or catch) block'
    ],
    correctAnswer: 'The return value in finally overrides the return value from the try (or catch) block',
    explanation: 'A finally block always executes regardless of whether try/catch returned or threw; critically, an explicit return inside finally silently discards and replaces any pending return value or even an in-flight exception, a frequently misunderstood gotcha.',
    tags: ['exceptions', 'finally', 'gotchas']
  },
  {
    id: 'php-038',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does PHP\'s "Nullsafe" operator (?->) do, introduced in PHP 8?',
    options: [
      'It declares a property as nullable',
      'It safely short-circuits an entire chained expression to NULL if any link in the chain evaluates to NULL, avoiding "call on null" errors',
      'It converts a NULL value to an empty string automatically',
      'It is equivalent to the null coalescing operator ??'
    ],
    correctAnswer: 'It safely short-circuits an entire chained expression to NULL if any link in the chain evaluates to NULL, avoiding "call on null" errors',
    explanation: '$user?->address?->city evaluates to NULL the moment any link in the chain is NULL, skipping the remaining property/method accesses, replacing verbose isset()/null-check chains common before PHP 8.',
    tags: ['nullsafe-operator', 'php8']
  },
  {
    id: 'php-039',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of an Enum (enumeration) in PHP 8.1+?',
    options: [
      'A constant array of strings only',
      'A special class-like type representing a fixed set of possible values, optionally backed by string or int with built-in methods and interface support',
      'A deprecated alias for class constants',
      'A configuration file format'
    ],
    correctAnswer: 'A special class-like type representing a fixed set of possible values, optionally backed by string or int with built-in methods and interface support',
    explanation: 'PHP enums provide type-safe, named sets of values (e.g., enum Status { case Active; case Inactive; }), optionally backed by scalar values for serialization, and can implement interfaces and define methods, improving on the older class-constant convention.',
    tags: ['enums', 'php8.1', 'oop']
  },
  {
    id: 'php-040',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of Readonly properties introduced in PHP 8.1?',
    options: [
      'They can be modified any number of times after object creation',
      'They can be initialized once, typically in the constructor, and any subsequent write attempt throws an Error, enforcing immutability at the language level',
      'They make a property accessible only via getter methods automatically generated by PHP',
      'They are syntactic sugar with no runtime enforcement'
    ],
    correctAnswer: 'They can be initialized once, typically in the constructor, and any subsequent write attempt throws an Error, enforcing immutability at the language level',
    explanation: 'A readonly property can be assigned exactly once from within the scope of the declaring class (usually the constructor); any further attempt to modify it, even from inside the class, throws an Error, providing native immutability support.',
    tags: ['readonly', 'php8.1', 'immutability']
  },
  {
    id: 'php-041',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between array_map(), array_filter(), and array_reduce()?',
    options: [
      'array_map transforms every element preserving array length; array_filter selects a subset of elements based on a predicate; array_reduce folds the array into a single accumulated value',
      'They are all aliases for the same underlying behavior',
      'array_reduce can only operate on associative arrays',
      'array_filter must always be called before array_map'
    ],
    correctAnswer: 'array_map transforms every element preserving array length; array_filter selects a subset of elements based on a predicate; array_reduce folds the array into a single accumulated value',
    explanation: 'These three higher-order array functions cover the classic map/filter/reduce trio: map applies a callback to every item, filter keeps only items for which a callback returns true, and reduce iteratively combines elements into a single result using an accumulator.',
    tags: ['arrays', 'functional-programming']
  },
  {
    id: 'php-042',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How does PHP determine array equality with == versus ===?',
    options: [
      '== requires identical key order; === ignores key order entirely',
      '== checks same key/value pairs regardless of order and type juggling values; === additionally requires identical key order and identical types for each value',
      'Both operators behave identically for arrays',
      'Arrays cannot be compared with == at all, only ==='
    ],
    correctAnswer: '== checks same key/value pairs regardless of order and type juggling values; === additionally requires identical key order and identical types for each value',
    explanation: 'Loose array comparison (==) considers two arrays equal if they have the same key-value pairs (with loose value comparison) regardless of insertion order, while strict comparison (===) additionally requires the same order and types throughout.',
    tags: ['arrays', 'comparison', 'gotchas']
  },
  {
    id: 'php-043',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the Spread operator (...) when calling a function, e.g. someFunc(...$args)?',
    options: [
      'It converts the function into a generator',
      'It unpacks an array (or Traversable) into individual positional or named arguments for the call',
      'It duplicates the function call multiple times',
      'It is only valid when defining variadic parameters, never at call sites'
    ],
    correctAnswer: 'It unpacks an array (or Traversable) into individual positional or named arguments for the call',
    explanation: 'The spread/splat operator expands an array\u2019s elements into separate arguments at a call site, complementing variadic parameter definitions (function f(...$args)) that collect arguments into an array.',
    tags: ['spread-operator', 'variadic-functions']
  },
  {
    id: 'php-044',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What problem do PHP Generators (using the "yield" keyword) solve?',
    options: [
      'They allow iterating over large or infinite sequences lazily, producing one value at a time without building the entire result set in memory',
      'They permanently cache function results',
      'They are used exclusively for database connections',
      'They replace the need for loops entirely'
    ],
    correctAnswer: 'They allow iterating over large or infinite sequences lazily, producing one value at a time without building the entire result set in memory',
    explanation: 'A generator function uses yield to produce values on demand as the calling code iterates, suspending execution between each value rather than computing and returning an entire array upfront, which is critical for memory efficiency with large datasets.',
    tags: ['generators', 'yield', 'iterators']
  },
  {
    id: 'php-045',
    topic: 'php',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is Cross-Site Request Forgery (CSRF), and how is it typically mitigated in a PHP web form?',
    options: [
      'An attack where malicious JavaScript steals cookies; mitigated using HttpOnly cookies alone',
      'An attack tricking an authenticated user\u2019s browser into submitting an unwanted request to a site they\u2019re logged into; mitigated by embedding a unique, unpredictable per-session token in forms and validating it server-side on submission',
      'An SQL-based attack mitigated by prepared statements',
      'A denial-of-service attack mitigated by rate limiting'
    ],
    correctAnswer: 'An attack tricking an authenticated user\u2019s browser into submitting an unwanted request to a site they\u2019re logged into; mitigated by embedding a unique, unpredictable per-session token in forms and validating it server-side on submission',
    explanation: 'CSRF exploits the browser\u2019s automatic inclusion of credentials (cookies) on cross-origin requests; the standard mitigation is a synchronizer token pattern where the server issues a unique token per session/form that must be present and matched on submission, which an attacker\u2019s forged request cannot supply.',
    tags: ['security', 'csrf']
  },

  // ===================== ADVANCED (40) =====================
  {
    id: 'php-046',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does PHP\'s reference counting and copy-on-write mechanism affect array performance when passed to functions by value?',
    options: [
      'Arrays passed by value are always deep-copied immediately, regardless of whether they are modified',
      'PHP increments a reference count and avoids actually duplicating the underlying zval data until the array is modified (copy-on-write), making unmodified passes cheap',
      'Arrays are always passed by reference in PHP regardless of declaration',
      'Copy-on-write only applies to objects, not arrays'
    ],
    correctAnswer: 'PHP increments a reference count and avoids actually duplicating the underlying zval data until the array is modified (copy-on-write), making unmodified passes cheap',
    explanation: 'PHP\u2019s internal zval representation uses reference counting; passing an array "by value" only bumps a refcount initially, and the actual memory copy is deferred until a write occurs to either copy (copy-on-write), which is why read-heavy operations on large arrays are cheap even without explicit references.',
    tags: ['internals', 'performance', 'copy-on-write']
  },
  {
    id: 'php-047',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is OPcache, and what category of performance bottleneck does it primarily address?',
    options: [
      'A database query result cache',
      'A bytecode cache that stores compiled PHP script opcodes in shared memory, eliminating the need to re-parse and re-compile PHP source on every request',
      'A CDN-level HTML page cache',
      'A session storage backend'
    ],
    correctAnswer: 'A bytecode cache that stores compiled PHP script opcodes in shared memory, eliminating the need to re-parse and re-compile PHP source on every request',
    explanation: 'Without OPcache, every request re-lexes, parses, and compiles PHP source into opcodes from scratch; OPcache persists the compiled bytecode across requests in shared memory, dramatically reducing CPU overhead and improving throughput in production.',
    tags: ['opcache', 'performance', 'internals']
  },
  {
    id: 'php-048',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the role of the Zend Engine in the PHP runtime?',
    options: [
      'It is a templating system used by Laravel specifically',
      'It is the core scripting engine that compiles PHP source into opcodes and executes them; extensions and SAPIs (like FPM, CLI) build on top of it',
      'It is a third-party caching layer unrelated to core PHP',
      'It is the official PHP package repository'
    ],
    correctAnswer: 'It is the core scripting engine that compiles PHP source into opcodes and executes them; extensions and SAPIs (like FPM, CLI) build on top of it',
    explanation: 'The Zend Engine is the heart of the PHP interpreter responsible for lexing, parsing, compiling to opcodes, and executing PHP code; different SAPIs (Server APIs) like php-fpm, CLI, or embedded SAPI wrap this core engine for different execution contexts.',
    tags: ['internals', 'zend-engine', 'architecture']
  },
  {
    id: 'php-049',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does PHP-FPM (FastCGI Process Manager) differ architecturally from the older mod_php Apache module?',
    options: [
      'PHP-FPM embeds PHP directly inside the web server process like mod_php',
      'PHP-FPM runs PHP as a separate pool of worker processes communicating with the web server via FastCGI, decoupling the web server from PHP execution and enabling independent scaling/tuning of worker pools',
      'mod_php supports multiple PHP versions simultaneously while PHP-FPM does not',
      'There is no architectural difference; only configuration syntax differs'
    ],
    correctAnswer: 'PHP-FPM runs PHP as a separate pool of worker processes communicating with the web server via FastCGI, decoupling the web server from PHP execution and enabling independent scaling/tuning of worker pools',
    explanation: 'mod_php embeds the PHP interpreter inside each Apache worker process, tightly coupling them; PHP-FPM instead manages its own pool of PHP worker processes reached via the FastCGI protocol, allowing independent process management, better resource isolation, and compatibility with non-Apache servers like Nginx.',
    tags: ['php-fpm', 'architecture', 'deployment']
  },
  {
    id: 'php-050',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'Why can an excessively large PHP-FPM "pm.max_children" setting on a memory-constrained server cause cascading failures rather than improving throughput?',
    options: [
      'max_children has no relation to memory usage',
      'Each worker process consumes its own memory footprint; spawning too many relative to available RAM triggers swapping or OOM-killed processes, causing request failures and amplifying load on remaining workers',
      'PHP-FPM automatically caps memory usage regardless of max_children',
      'A higher max_children value always linearly increases throughput with no downside'
    ],
    correctAnswer: 'Each worker process consumes its own memory footprint; spawning too many relative to available RAM triggers swapping or OOM-killed processes, causing request failures and amplifying load on remaining workers',
    explanation: 'Since each FPM worker is a separate OS process with its own memory, oversizing the pool beyond what physical RAM supports leads to swap thrashing or the OOM killer terminating workers mid-request, which can cause a feedback loop of increased latency and further resource pressure under load.',
    tags: ['php-fpm', 'performance', 'production', 'capacity-planning']
  },
  {
    id: 'php-051',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Security',
    question: 'What is PHP Object Injection, and how does it typically occur?',
    options: [
      'A SQL injection variant specific to ORM-generated queries',
      'It occurs when untrusted user input is passed directly to unserialize(), allowing an attacker to construct arbitrary objects that trigger dangerous behavior via magic methods like __wakeup() or __destruct()',
      'A vulnerability in PHP\u2019s garbage collector unrelated to user input',
      'An attack only possible when using XML parsers'
    ],
    correctAnswer: 'It occurs when untrusted user input is passed directly to unserialize(), allowing an attacker to construct arbitrary objects that trigger dangerous behavior via magic methods like __wakeup() or __destruct()',
    explanation: 'If an application unserializes attacker-controlled data, a carefully crafted serialized string can instantiate arbitrary classes whose magic methods (__wakeup, __destruct, __toString) execute attacker-influenced logic, potentially leading to remote code execution via "POP chains"; the fix is avoiding unserialize() on untrusted input, preferring JSON.',
    tags: ['security', 'object-injection', 'unserialize']
  },
  {
    id: 'php-052',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'What is wrong with this code from a type-safety perspective, and what does it print?\n\nfunction divide($a, $b) {\n  return $a / $b;\n}\nvar_dump(divide(10, "abc"));',
    options: [
      'It prints float(10) since "abc" coerces to 0, but actually triggers a DivisionByZeroError because PHP treats non-numeric string-to-int coercion as 0 in arithmetic, raising an error on division by zero',
      'It silently returns NULL',
      'It returns the string "10/abc"',
      'It returns INF without error'
    ],
    correctAnswer: 'It prints float(10) since "abc" coerces to 0, but actually triggers a DivisionByZeroError because PHP treats non-numeric string-to-int coercion as 0 in arithmetic, raising an error on division by zero',
    explanation: 'In modern PHP, using a completely non-numeric string in an arithmetic operation raises a TypeError ("Unsupported operand types"), but historically/with leading-numeric strings coercion to 0 could occur and then trigger DivisionByZeroError when used as a divisor; lacking type declarations on parameters allows this fragile, version-dependent behavior to slip through undetected until runtime.',
    tags: ['type-coercion', 'errors', 'gotchas']
  },
  {
    id: 'php-053',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the SOLID "Dependency Inversion Principle", and how is it commonly implemented in a PHP application using a DI container?',
    options: [
      'High-level modules should depend on abstractions (interfaces) rather than concrete implementations; a DI container resolves and injects concrete dependencies at runtime based on bindings, decoupling classes from instantiating their own dependencies',
      'Classes should always inherit from a single base "God" class',
      'Every class must implement exactly one interface',
      'Dependencies should be hardcoded inside constructors for clarity'
    ],
    correctAnswer: 'High-level modules should depend on abstractions (interfaces) rather than concrete implementations; a DI container resolves and injects concrete dependencies at runtime based on bindings, decoupling classes from instantiating their own dependencies',
    explanation: 'By coding against interfaces rather than concrete classes, and letting a dependency injection container wire up the actual implementations at runtime (often via constructor injection), classes become decoupled from specific implementations, improving testability and flexibility.',
    tags: ['solid', 'design-patterns', 'dependency-injection']
  },
  {
    id: 'php-054',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Design Patterns',
    question: 'How is the Repository pattern typically applied in a PHP application using an ORM like Doctrine or Eloquent?',
    options: [
      'It eliminates the need for any database access layer',
      'It encapsulates data access logic behind an interface, abstracting the underlying persistence mechanism (ORM, raw SQL, API) from business logic, which depends only on the repository\u2019s contract',
      'It replaces the ORM entirely with raw SQL queries',
      'It is only applicable to NoSQL databases'
    ],
    correctAnswer: 'It encapsulates data access logic behind an interface, abstracting the underlying persistence mechanism (ORM, raw SQL, API) from business logic, which depends only on the repository\u2019s contract',
    explanation: 'A repository acts as an in-memory collection-like abstraction over data storage, letting domain/business logic query and persist entities through a well-defined interface without being coupled to specific ORM query syntax, easing testing and potential storage migrations.',
    tags: ['design-patterns', 'repository-pattern', 'orm']
  },
  {
    id: 'php-055',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the N+1 query problem in the context of an ORM like Eloquent or Doctrine, and how is it typically resolved?',
    options: [
      'It occurs when loading a collection of N parent records, then lazily issuing one additional query per record to fetch related data, totaling N+1 queries; resolved via eager loading (e.g., with()/JOIN-based fetch joins)',
      'It refers to running exactly one query that returns N+1 rows by mistake',
      'It is a database-level locking issue unrelated to ORMs',
      'It only occurs in raw SQL, never in ORM-managed queries'
    ],
    correctAnswer: 'It occurs when loading a collection of N parent records, then lazily issuing one additional query per record to fetch related data, totaling N+1 queries; resolved via eager loading (e.g., with()/JOIN-based fetch joins)',
    explanation: 'Lazy-loaded relationships accessed inside a loop over N records trigger N additional individual queries; eager loading instructs the ORM to fetch related data upfront via a join or a small number of batched queries, collapsing what would be N+1 round trips into 1 or 2.',
    tags: ['orm', 'performance', 'n+1-problem', 'database']
  },
  {
    id: 'php-056',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between optimistic and pessimistic locking strategies when handling concurrent updates to the same database row in a PHP application?',
    options: [
      'Optimistic locking assumes conflicts are rare and detects them at write time via a version column, rejecting stale updates; pessimistic locking acquires a database lock (e.g., SELECT ... FOR UPDATE) upfront, blocking other transactions from modifying the row until release',
      'Pessimistic locking is always faster under high contention',
      'They are interchangeable terms for the same mechanism',
      'Optimistic locking requires no database support and is purely application-side caching'
    ],
    correctAnswer: 'Optimistic locking assumes conflicts are rare and detects them at write time via a version column, rejecting stale updates; pessimistic locking acquires a database lock (e.g., SELECT ... FOR UPDATE) upfront, blocking other transactions from modifying the row until release',
    explanation: 'Optimistic locking trades a small chance of needing a retry (when a version mismatch is detected on update) for higher concurrency, while pessimistic locking guarantees exclusivity by holding a row lock for the duration of the transaction, at the cost of reduced throughput under contention.',
    tags: ['database', 'concurrency', 'locking']
  },
  {
    id: 'php-057',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does PHP\'s garbage collector handle circular references between objects, given its primarily reference-counting model?',
    options: [
      'Circular references are never collected and always leak memory permanently',
      'PHP runs a periodic cycle-detection garbage collection algorithm (in addition to immediate reference counting) specifically to find and reclaim memory from object graphs with circular references that refcounting alone cannot free',
      'Circular references are forbidden by the language and throw an error',
      'PHP relies entirely on the operating system to reclaim leaked memory'
    ],
    correctAnswer: 'PHP runs a periodic cycle-detection garbage collection algorithm (in addition to immediate reference counting) specifically to find and reclaim memory from object graphs with circular references that refcounting alone cannot free',
    explanation: 'Pure reference counting cannot detect cycles (two objects referencing each other keep each other\u2019s count above zero even when unreachable externally); PHP\u2019s cycle collector periodically scans "root buffer" candidates to detect and free such unreachable cyclic structures, which gc_collect_cycles() can also trigger manually.',
    tags: ['garbage-collection', 'internals', 'memory']
  },
  {
    id: 'php-058',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Why is the request-per-process/thread "shared nothing" model of traditional PHP execution (each request starts from a clean state) both a strength and a limitation?',
    options: [
      'It guarantees PHP applications can never have memory leaks',
      'It eliminates the risk of one request\u2019s state or memory leaking into another\u2019s, simplifying reasoning, but it also means in-memory caches, connection pools, and long-lived state cannot persist naturally across requests without an external store',
      'It only applies when using PHP-FPM, never the CLI',
      'It has no architectural trade-offs at all'
    ],
    correctAnswer: 'It eliminates the risk of one request\u2019s state or memory leaking into another\u2019s, simplifying reasoning, but it also means in-memory caches, connection pools, and long-lived state cannot persist naturally across requests without an external store',
    explanation: 'Each PHP request traditionally runs as an isolated process lifecycle, which avoids the entire class of cross-request state-leak bugs common in long-lived runtimes, but means features like connection pooling or in-process caching require external infrastructure (Redis, persistent connections via PDO, opcache) rather than simple in-memory singletons, unlike long-running runtimes such as Node.js.',
    tags: ['architecture', 'php-fpm', 'shared-nothing']
  },
  {
    id: 'php-059',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'What subtle bug exists in this code intended to deep-clone an object containing nested objects?\n\nclass Container {\n  public Item $item;\n}\n$a = new Container();\n$a->item = new Item();\n$b = clone $a;\n$b->item->value = "changed";',
    options: [
      'PHP\u2019s clone always performs a deep clone automatically, so this code is fine',
      'clone is shallow by default: $b->item still references the same Item object as $a->item, so mutating it through $b also affects $a, unless __clone() is implemented to clone nested objects explicitly',
      'clone cannot be used on objects containing other objects',
      'The code throws a fatal error because Item is not Cloneable'
    ],
    correctAnswer: 'clone is shallow by default: $b->item still references the same Item object as $a->item, so mutating it through $b also affects $a, unless __clone() is implemented to clone nested objects explicitly',
    explanation: 'PHP\u2019s built-in clone creates a shallow copy, duplicating scalar properties but copying object properties as references to the same underlying object; achieving a true deep clone requires implementing the __clone() magic method to explicitly clone nested object properties.',
    tags: ['oop', 'clone', 'gotchas']
  },
  {
    id: 'php-060',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of the Observer pattern in PHP, and how does PHP\'s SplSubject/SplObserver interfaces relate to it?',
    options: [
      'They are used exclusively for database transactions',
      'SplSubject and SplObserver provide a built-in interface contract for implementing the Observer pattern, where observers register interest in a subject and are notified automatically when the subject\u2019s state changes via notify()',
      'They replace the need for event-driven architectures entirely',
      'They are deprecated and have no modern use'
    ],
    correctAnswer: 'SplSubject and SplObserver provide a built-in interface contract for implementing the Observer pattern, where observers register interest in a subject and are notified automatically when the subject\u2019s state changes via notify()',
    explanation: 'PHP\u2019s SPL (Standard PHP Library) includes SplSubject (with attach/detach/notify) and SplObserver (with update()) as standardized interfaces for implementing the classic Observer pattern without each developer reinventing the contract, though many modern apps instead use dedicated event dispatcher libraries.',
    tags: ['design-patterns', 'observer', 'spl']
  },
  {
    id: 'php-061',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What does PHP\'s "Late Static Binding" (using static:: instead of self::) solve?',
    options: [
      'It allows a static method to reference the class it was actually called on at runtime, rather than the class where the method was defined, which self:: cannot do correctly across inheritance',
      'It allows static methods to access instance properties',
      'It permanently disables method overriding',
      'It is unrelated to inheritance and only affects constants'
    ],
    correctAnswer: 'It allows a static method to reference the class it was actually called on at runtime, rather than the class where the method was defined, which self:: cannot do correctly across inheritance',
    explanation: 'self:: resolves to the class where the code is literally written, even when called via a subclass, which breaks patterns like factory methods returning "new self()" in a parent class; static:: instead resolves to the class actually invoked at runtime, correctly supporting polymorphic static method calls.',
    tags: ['oop', 'late-static-binding', 'inheritance']
  },
  {
    id: 'php-062',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'What does the following output, and why?\n\nclass A {\n  public static function create() { return new static(); }\n}\nclass B extends A {}\nvar_dump(get_class(B::create()));',
    options: [
      'string(1) "A"',
      'A fatal error is thrown because static() cannot be used inside a parent class',
      'string(1) "B"',
      'NULL'
    ],
    correctAnswer: 'string(1) "B"',
    explanation: 'Thanks to late static binding, "new static()" inside A::create() resolves to the class actually called, B, rather than the class where the method is defined (A), so calling B::create() correctly instantiates a B instance.',
    tags: ['late-static-binding', 'oop', 'output']
  },
  {
    id: 'php-063',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between horizontal and vertical scaling for a PHP application under high traffic, and what PHP-specific challenge does horizontal scaling introduce?',
    options: [
      'Vertical scaling adds more servers; horizontal scaling upgrades a single server\u2019s hardware',
      'Horizontal scaling adds more servers/instances running the application, introducing the challenge of synchronizing session state, file uploads, and caches across instances since PHP\u2019s default file-based sessions are local to a single machine',
      'There is no meaningful difference for PHP applications',
      'Horizontal scaling requires rewriting the application in a different language'
    ],
    correctAnswer: 'Horizontal scaling adds more servers/instances running the application, introducing the challenge of synchronizing session state, file uploads, and caches across instances since PHP\u2019s default file-based sessions are local to a single machine',
    explanation: 'Scaling out (horizontal) multiplies independent PHP-FPM/web server instances, but PHP\u2019s default session handler writes to local disk, meaning a user could be routed to a different server lacking their session unless sessions are centralized (e.g., Redis-backed session storage) or sticky sessions are used at the load balancer.',
    tags: ['system-design', 'scalability', 'sessions']
  },
  {
    id: 'php-064',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Why is storing PHP sessions in Redis (rather than the default file-based handler) often preferred in a load-balanced, multi-server deployment?',
    options: [
      'Redis sessions are slower but more secure',
      'File-based sessions are tied to local disk on a single server, breaking session continuity when requests are load-balanced across multiple servers; Redis provides a fast, centralized, shared store accessible from any application server',
      'PHP cannot use file-based sessions at all in production',
      'Redis automatically encrypts session data while files cannot be encrypted'
    ],
    correctAnswer: 'File-based sessions are tied to local disk on a single server, breaking session continuity when requests are load-balanced across multiple servers; Redis provides a fast, centralized, shared store accessible from any application server',
    explanation: 'A centralized, low-latency store like Redis lets any web/application server in a horizontally scaled cluster read and write the same session data regardless of which server handles a given request, removing the need for sticky sessions tied to a specific backend.',
    tags: ['sessions', 'redis', 'scalability']
  },
  {
    id: 'php-065',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is a queue worker pattern commonly used for in PHP applications (e.g., Laravel Queues, Symfony Messenger), and why is it preferred over performing slow tasks synchronously within an HTTP request?',
    options: [
      'It eliminates the need for a database entirely',
      'It offloads slow or unreliable operations (emails, image processing, third-party API calls) to be processed asynchronously by background worker processes consuming a queue, keeping HTTP response times fast and resilient to downstream failures',
      'It is only useful for sending emails, with no other applications',
      'It replaces the need for any caching layer'
    ],
    correctAnswer: 'It offloads slow or unreliable operations (emails, image processing, third-party API calls) to be processed asynchronously by background worker processes consuming a queue, keeping HTTP response times fast and resilient to downstream failures',
    explanation: 'Performing slow or flaky operations synchronously ties up an HTTP worker process and risks timing out the user-facing request; dispatching them as queued jobs lets the request return quickly while dedicated worker processes handle the task independently, with built-in retry and failure handling.',
    tags: ['system-design', 'queues', 'async-processing']
  },
  {
    id: 'php-066',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Security',
    question: 'What is a Server-Side Request Forgery (SSRF) vulnerability, and how might it arise in a PHP application that fetches user-supplied URLs (e.g., for link previews)?',
    options: [
      'It only affects client-side JavaScript code, not PHP',
      'An attacker supplies a URL pointing to internal/private network resources (e.g., http://169.254.169.254 for cloud metadata, or internal admin endpoints), and the server, trusting the input, makes the request on the attacker\u2019s behalf, potentially exposing internal services',
      'It is a type of cross-site scripting unique to PHP templating',
      'It requires direct database access and is unrelated to HTTP requests'
    ],
    correctAnswer: 'An attacker supplies a URL pointing to internal/private network resources (e.g., http://169.254.169.254 for cloud metadata, or internal admin endpoints), and the server, trusting the input, makes the request on the attacker\u2019s behalf, potentially exposing internal services',
    explanation: 'If a PHP backend fetches arbitrary user-supplied URLs (e.g., via cURL or file_get_contents) without validating/allowlisting destinations, an attacker can pivot the server into making requests to internal-only endpoints it normally couldn\u2019t reach directly, a serious risk especially in cloud environments with metadata endpoints exposing credentials.',
    tags: ['security', 'ssrf']
  },
  {
    id: 'php-067',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Security',
    question: 'Why is validating an uploaded file\'s MIME type purely via the Content-Type header sent by the client insufficient for security?',
    options: [
      'Content-Type headers are entirely ignored by PHP regardless',
      'The Content-Type header is fully attacker-controlled and trivially spoofable; actual file content should be inspected (e.g., via finfo_file() checking magic bytes) rather than trusting client-supplied metadata',
      'MIME type validation is unnecessary if file size is limited',
      'PHP automatically rejects any mismatched Content-Type header'
    ],
    correctAnswer: 'The Content-Type header is fully attacker-controlled and trivially spoofable; actual file content should be inspected (e.g., via finfo_file() checking magic bytes) rather than trusting client-supplied metadata',
    explanation: 'Since the client fully controls the multipart Content-Type field in a file upload, an attacker can freely claim a malicious PHP script is an "image/png"; robust validation inspects the actual byte content of the uploaded file using something like the fileinfo extension, combined with restricting upload directories from being executable.',
    tags: ['security', 'file-upload']
  },
  {
    id: 'php-068',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of middleware in a modern PHP framework (e.g., Laravel, Symfony, PSR-15)?',
    options: [
      'It is a database migration tool',
      'It forms a composable pipeline of request/response processing layers (authentication, logging, CORS, rate limiting) that wrap around the core application logic, each able to inspect, modify, or short-circuit the request/response',
      'It replaces routing entirely',
      'It is only used for serving static assets'
    ],
    correctAnswer: 'It forms a composable pipeline of request/response processing layers (authentication, logging, CORS, rate limiting) that wrap around the core application logic, each able to inspect, modify, or short-circuit the request/response',
    explanation: 'Following the PSR-15 standard, middleware components are chained in a pipeline; each receives the request, can act before/after delegating to the next layer (or short-circuit by returning early), enabling cross-cutting concerns to be composed cleanly outside core controller logic.',
    tags: ['middleware', 'psr-15', 'architecture']
  },
  {
    id: 'php-069',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the role of PSR-7 (HTTP Message Interfaces) in the PHP ecosystem?',
    options: [
      'It standardizes how dates and times are formatted',
      'It defines a common, immutable interface for representing HTTP request and response messages, enabling interoperability between different frameworks, middleware, and HTTP clients',
      'It is a deprecated standard replaced entirely by PSR-15',
      'It defines coding style conventions only'
    ],
    correctAnswer: 'It defines a common, immutable interface for representing HTTP request and response messages, enabling interoperability between different frameworks, middleware, and HTTP clients',
    explanation: 'PSR-7 standardizes request/response object interfaces (ServerRequestInterface, ResponseInterface, etc.) as immutable value objects, so middleware and components built by different vendors can interoperate without being tied to one framework\u2019s proprietary HTTP abstraction.',
    tags: ['psr-7', 'standards', 'interoperability']
  },
  {
    id: 'php-070',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of database migrations in PHP frameworks like Laravel or Doctrine, and why are they preferred over manual schema changes?',
    options: [
      'They are purely for generating documentation with no functional effect',
      'They version-control schema changes as incremental, reproducible code files that can be applied or rolled back consistently across environments (dev, staging, production), avoiding manual, error-prone, untracked SQL edits',
      'They automatically optimize query performance',
      'They replace the need for a database entirely by using flat files'
    ],
    correctAnswer: 'They version-control schema changes as incremental, reproducible code files that can be applied or rolled back consistently across environments (dev, staging, production), avoiding manual, error-prone, untracked SQL edits',
    explanation: 'Migrations express schema evolution as ordered, version-controlled scripts with explicit "up" and "down" methods, ensuring every environment\u2019s database structure can be deterministically reproduced and audited alongside the application\u2019s codebase, unlike ad hoc manual database changes.',
    tags: ['database', 'migrations', 'tooling']
  },
  {
    id: 'php-071',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'What does the following output, and what PHP feature does it demonstrate?\n\nfunction counter(): Generator {\n  $i = 0;\n  while (true) {\n    $reset = yield $i;\n    $i = $reset ?? $i + 1;\n  }\n}\n$gen = counter();\necho $gen->current();\n$gen->next();\necho $gen->current();\necho $gen->send(100);',
    options: [
      '011 (yield only ever produces values, never receives them)',
      'A fatal error since generators cannot be infinite',
      '01100 — demonstrating that yield is a two-way channel: send() both resumes the generator and supplies a value the generator receives as the result of the yield expression',
      '012'
    ],
    correctAnswer: '01100 — demonstrating that yield is a two-way channel: send() both resumes the generator and supplies a value the generator receives as the result of the yield expression',
    explanation: 'current() yields 0, next() advances to 1, then send(100) resumes the generator passing 100 as the value of the yield expression (so $reset = 100, making $i = 100), and the generator immediately yields the new $i (100), which send() returns and is echoed, demonstrating bidirectional communication with generators.',
    tags: ['generators', 'yield', 'output', 'advanced-coding']
  },
  {
    id: 'php-072',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of Fibers, introduced in PHP 8.1?',
    options: [
      'They are a new array data structure for sparse data',
      'They provide full asynchronous I/O automatically without any additional libraries',
      'They are deprecated aliases for generators',
      'They allow code to be paused and resumed at arbitrary points (not just at yield in a generator function), enabling cooperative multitasking primitives that async frameworks like ReactPHP/Amp can build true async/await-style APIs on top of'
    ],
    correctAnswer: 'They allow code to be paused and resumed at arbitrary points (not just at yield in a generator function), enabling cooperative multitasking primitives that async frameworks like ReactPHP/Amp can build true async/await-style APIs on top of',
    explanation: 'Unlike generators, which can only yield from the top-level function body, Fibers let execution be suspended from anywhere within a call stack and resumed later with a value or exception, giving async libraries a low-level primitive to implement transparent async/await-like control flow without callback-based code.',
    tags: ['fibers', 'php8.1', 'concurrency']
  },
  {
    id: 'php-073',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Why does PHP\'s traditional synchronous, blocking I/O model make it historically unsuitable for handling tens of thousands of concurrent long-lived connections (e.g., WebSockets) within standard PHP-FPM, without additional tooling?',
    options: [
      'PHP cannot open network sockets at all',
      'Each PHP-FPM worker handles one request at a time and blocks on I/O, so the number of concurrent connections is capped by the worker pool size; specialized event-loop-based runtimes (ReactPHP, Swoole, Workerman) or separate dedicated services are typically used instead',
      'PHP automatically becomes asynchronous when handling WebSocket connections',
      'WebSockets are not supported by the HTTP protocol at all'
    ],
    correctAnswer: 'Each PHP-FPM worker handles one request at a time and blocks on I/O, so the number of concurrent connections is capped by the worker pool size; specialized event-loop-based runtimes (ReactPHP, Swoole, Workerman) or separate dedicated services are typically used instead',
    explanation: 'The traditional PHP-FPM model dedicates one process per in-flight request for its full duration, which doesn\u2019t scale to many thousands of persistent, mostly-idle connections; event-loop-driven extensions/runtimes like Swoole or libraries like ReactPHP provide non-blocking I/O multiplexing more suited to that workload, often run as a separate standalone process from the main web stack.',
    tags: ['architecture', 'concurrency', 'websockets', 'scalability']
  },
  {
    id: 'php-074',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of the Adapter design pattern, and how might it be applied to support multiple payment gateways (Stripe, PayPal) in a PHP application?',
    options: [
      'It converts a class\u2019s incompatible interface into one expected by client code, e.g., wrapping each payment gateway SDK behind a common PaymentGatewayInterface so business logic interacts uniformly regardless of provider-specific APIs',
      'It is used only for adapting database drivers, never third-party APIs',
      'It eliminates the need for any interface definitions',
      'It merges multiple classes into a single God object'
    ],
    correctAnswer: 'It converts a class\u2019s incompatible interface into one expected by client code, e.g., wrapping each payment gateway SDK behind a common PaymentGatewayInterface so business logic interacts uniformly regardless of provider-specific APIs',
    explanation: 'Each payment provider\u2019s SDK exposes a different API shape; an adapter class implements a shared application-defined interface internally translating calls to the specific vendor SDK, letting the rest of the application remain agnostic to which gateway is actually used.',
    tags: ['design-patterns', 'adapter']
  },
  {
    id: 'php-075',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'Why can heavy use of __get()/__set() magic methods on a class with thousands of instantiations per request meaningfully degrade performance compared to declared typed properties?',
    options: [
      'Magic methods are resolved via a dynamic method-call dispatch path on every access rather than the direct, optimized property access path the engine uses for declared properties, adding measurable per-access overhead at scale',
      'Magic methods have no performance cost whatsoever',
      'They only affect performance when combined with traits',
      'They are deprecated and throw warnings on every call'
    ],
    correctAnswer: 'Magic methods are resolved via a dynamic method-call dispatch path on every access rather than the direct, optimized property access path the engine uses for declared properties, adding measurable per-access overhead at scale',
    explanation: 'Accessing a normal declared property is a direct, highly optimized operation in the Zend Engine, while triggering __get()/__set() invokes full function-call machinery (including argument marshaling) on every single property access, which compounds significantly when done across large object graphs or hot loops.',
    tags: ['performance', 'magic-methods', 'internals']
  },
  {
    id: 'php-076',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of Composer\'s "composer.lock" file, and what risk does omitting it from version control introduce?',
    options: [
      'It only stores license information for each dependency',
      'It pins the exact resolved versions of every dependency (including transitive ones) at install time; without committing it, different environments could resolve different compatible-but-not-identical versions, risking subtle behavioral or security differences between dev and production',
      'It is automatically regenerated identically every time regardless of available versions',
      'It has no functional purpose and is purely a Composer implementation detail'
    ],
    correctAnswer: 'It pins the exact resolved versions of every dependency (including transitive ones) at install time; without committing it, different environments could resolve different compatible-but-not-identical versions, risking subtle behavioral or security differences between dev and production',
    explanation: 'composer.json specifies version constraints (ranges), while composer.lock records the exact versions actually resolved and installed; committing the lock file ensures composer install reproduces an identical dependency tree everywhere, whereas omitting it risks composer update silently picking up newer, potentially breaking or vulnerable versions in different environments.',
    tags: ['composer', 'dependency-management', 'reproducibility']
  },
  {
    id: 'php-077',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between unit tests using mocks versus integration tests against a real (or in-memory) database in a PHP application built with PHPUnit?',
    options: [
      'Unit tests with mocks isolate the class under test by faking its collaborators (e.g., a repository interface), verifying logic in isolation quickly; integration tests exercise real interactions (actual queries against a test database), catching issues mocks cannot, like SQL errors or mapping mismatches',
      'Integration tests always run faster than unit tests',
      'Mocks can only be used for testing HTTP clients, not databases',
      'There is no practical difference; PHPUnit treats them identically'
    ],
    correctAnswer: 'Unit tests with mocks isolate the class under test by faking its collaborators (e.g., a repository interface), verifying logic in isolation quickly; integration tests exercise real interactions (actual queries against a test database), catching issues mocks cannot, like SQL errors or mapping mismatches',
    explanation: 'Mocked unit tests run fast and pinpoint logic errors in isolation but can pass even if the real query/mapping is broken, since the mock simply returns canned data; integration tests trade speed for confidence that the actual database interaction layer behaves correctly, which is why both layers are typically maintained together.',
    tags: ['testing', 'phpunit', 'mocking']
  },
  {
    id: 'php-078',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'What is the output, and what concept does it illustrate?\n\ninterface Shape { public function area(): float; }\nclass Square implements Shape {\n  public function __construct(private float $side) {}\n  public function area(): float { return $this->side ** 2; }\n}\nfunction totalArea(Shape ...$shapes): float {\n  return array_sum(array_map(fn($s) => $s->area(), $shapes));\n}\necho totalArea(new Square(2), new Square(3));',
    options: [
      '13 — demonstrating polymorphism via interface typing combined with variadic parameters and arrow functions',
      '25',
      '5',
      'A fatal error since Shape is abstract'
    ],
    correctAnswer: '13 — demonstrating polymorphism via interface typing combined with variadic parameters and arrow functions',
    explanation: 'Square(2)\u2019s area is 4 and Square(3)\u2019s area is 9, summing to 13; the function accepts any number of Shape-typed arguments via variadic syntax, calling area() polymorphically without knowing the concrete class, with array_map paired with a concise arrow function computing each area.',
    tags: ['oop', 'polymorphism', 'output', 'php8']
  },
  {
    id: 'php-079',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of an Event Sourcing architecture, and how might it be implemented in a PHP-based order management system?',
    options: [
      'It stores only the current state of an entity, discarding history after each update',
      'Instead of persisting current state directly, every state change is recorded as an immutable, ordered sequence of domain events; current state is derived by replaying events, enabling full audit history and the ability to rebuild state at any point in time',
      'It is a synonym for using database triggers',
      'It removes the need for any persistence layer'
    ],
    correctAnswer: 'Instead of persisting current state directly, every state change is recorded as an immutable, ordered sequence of domain events; current state is derived by replaying events, enabling full audit history and the ability to rebuild state at any point in time',
    explanation: 'In event sourcing, an OrderCreated, ItemAdded, OrderShipped sequence of events is the source of truth, with the current Order entity state computed by folding/replaying those events; this provides a complete audit trail and the ability to reconstruct historical state, at the cost of additional complexity in querying current state efficiently (often mitigated with snapshots/read models).',
    tags: ['system-design', 'event-sourcing', 'architecture']
  },
  {
    id: 'php-080',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the CQRS (Command Query Responsibility Segregation) pattern, and what problem does it address in a high-traffic PHP application?',
    options: [
      'It merges reads and writes into a single unified model for simplicity',
      'It separates the model used for writing/mutating data (commands) from the model used for reading data (queries), allowing each to be independently optimized, scaled, or even stored differently (e.g., a denormalized read store)',
      'It is a caching strategy unrelated to data modeling',
      'It only applies to NoSQL databases'
    ],
    correctAnswer: 'It separates the model used for writing/mutating data (commands) from the model used for reading data (queries), allowing each to be independently optimized, scaled, or even stored differently (e.g., a denormalized read store)',
    explanation: 'CQRS acknowledges that read and write workloads often have very different access patterns and scaling needs; by splitting them into separate models (and potentially separate data stores), each side can be optimized independently, e.g., a normalized write model alongside a denormalized, heavily indexed or cached read model.',
    tags: ['system-design', 'cqrs', 'architecture']
  },
  {
    id: 'php-081',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does PHP\'s "weak typing with coercion" mode interact with database query results returned from PDO, and what subtle bug can this cause in comparison logic?',
    options: [
      'PDO always returns strongly typed PHP int/float values matching the database column type by default',
      'PDO typically returns all fetched column values as strings by default unless explicit type casting or PDO::ATTR_EMULATE_PREPARES/native typing options are configured, so naive === comparisons against integers can unexpectedly fail',
      'This issue only occurs with SQLite, never MySQL or PostgreSQL',
      'PDO results cannot be compared with any operator'
    ],
    correctAnswer: 'PDO typically returns all fetched column values as strings by default unless explicit type casting or PDO::ATTR_EMULATE_PREPARES/native typing options are configured, so naive === comparisons against integers can unexpectedly fail',
    explanation: 'By default, many PDO driver configurations return numeric columns as strings (e.g., "5" rather than int 5); code that strictly compares a fetched value with === 5 will fail unexpectedly unless explicit casting, PDO::ATTR_STRINGIFY_FETCHES is disabled, or native prepared statement type-preserving options are used.',
    tags: ['pdo', 'database', 'type-coercion', 'gotchas']
  },
  {
    id: 'php-082',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of database transactions, and what isolation level concern is particularly relevant for a PHP application handling concurrent inventory deductions?',
    options: [
      'Transactions guarantee atomicity, consistency, isolation, and durability for a group of statements; under concurrent inventory deductions, an insufficiently strict isolation level can allow a race condition (e.g., two requests both reading stock=1 before either commits a decrement), leading to overselling',
      'Transactions are only relevant for read-only reporting queries',
      'Isolation levels only matter for single-statement queries, never multi-statement workflows',
      'Transactions automatically prevent all race conditions regardless of isolation level'
    ],
    correctAnswer: 'Transactions guarantee atomicity, consistency, isolation, and durability for a group of statements; under concurrent inventory deductions, an insufficiently strict isolation level can allow a race condition (e.g., two requests both reading stock=1 before either commits a decrement), leading to overselling',
    explanation: 'Without sufficient isolation (or explicit row locking via SELECT ... FOR UPDATE), two concurrent transactions can both read the same stale stock count and independently decrement it, resulting in overselling; choosing an appropriate isolation level or explicit locking strategy is essential for correctness under concurrency.',
    tags: ['database', 'transactions', 'concurrency', 'race-conditions']
  },
  {
    id: 'php-083',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of the Strategy design pattern as applied to a PHP shipping-cost calculator supporting multiple carriers?',
    options: [
      'It hardcodes a single shipping algorithm for all carriers',
      'It encapsulates each carrier\u2019s shipping cost algorithm behind a shared interface, letting the calling code select and swap the algorithm at runtime without conditional branching scattered through the codebase',
      'It is identical to the Singleton pattern',
      'It is only usable with abstract classes, never interfaces'
    ],
    correctAnswer: 'It encapsulates each carrier\u2019s shipping cost algorithm behind a shared interface, letting the calling code select and swap the algorithm at runtime without conditional branching scattered through the codebase',
    explanation: 'Rather than a large if/elseif chain selecting carrier-specific pricing logic inline, each carrier\u2019s algorithm implements a common ShippingStrategyInterface, and the calling code simply invokes calculate() on whichever strategy instance was selected/injected, keeping the logic extensible and decoupled.',
    tags: ['design-patterns', 'strategy']
  },
  {
    id: 'php-084',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What does "idempotency" mean for a PHP-based webhook receiver endpoint, and why is it critical?',
    options: [
      'It means the endpoint must respond within 100ms',
      'It means processing the same webhook payload multiple times (due to provider retries on timeout) produces the same end result as processing it once, typically achieved by tracking already-processed event IDs and skipping duplicates',
      'It means the endpoint must reject all duplicate IP addresses',
      'It refers to encrypting the webhook payload'
    ],
    correctAnswer: 'It means processing the same webhook payload multiple times (due to provider retries on timeout) produces the same end result as processing it once, typically achieved by tracking already-processed event IDs and skipping duplicates',
    explanation: 'Webhook senders commonly retry delivery if they don\u2019t receive a timely acknowledgment, meaning a receiver may see the same event more than once; without idempotency (e.g., storing seen event IDs and short-circuiting duplicates), this can cause duplicate side effects like double-charging or duplicate order creation.',
    tags: ['system-design', 'idempotency', 'webhooks']
  },
  {
    id: 'php-085',
    topic: 'php',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Why might an application choose to implement "soft deletes" (a deleted_at timestamp column) instead of physically removing rows, and what complication does this introduce for unique constraints?',
    options: [
      'Soft deletes are purely a performance optimization with no other implications',
      'Soft deletes preserve historical/audit data and allow recovery, but a naive unique constraint on a column like email will block re-registration with the same email even after "deletion", requiring a composite constraint that includes deleted_at or partial/conditional indexes',
      'Soft deletes eliminate the need for any database backups',
      'Unique constraints automatically ignore soft-deleted rows in every database engine by default'
    ],
    correctAnswer: 'Soft deletes preserve historical/audit data and allow recovery, but a naive unique constraint on a column like email will block re-registration with the same email even after "deletion", requiring a composite constraint that includes deleted_at or partial/conditional indexes',
    explanation: 'Soft-deleted rows still physically exist in the table, so a standard UNIQUE(email) constraint still considers them, preventing a new record with the same email; common solutions include a composite unique index over (email, deleted_at) or, where supported, a partial unique index that only applies WHERE deleted_at IS NULL.',
    tags: ['database', 'soft-deletes', 'constraints']
  },

  // ===================== MNC (35) =====================
  {
    id: 'php-086',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'You are designing a PHP-based checkout API expected to handle flash-sale traffic spikes of 100x normal load for a few minutes. What combination of strategies is most appropriate?',
    options: [
      'Permanently provision for 100x peak capacity year-round',
      'Combine autoscaling PHP-FPM worker pools/containers, a queue-based order processing pipeline decoupled from the synchronous request, aggressive caching of read-heavy catalog data, and a circuit breaker/graceful degradation path for non-critical services',
      'Disable rate limiting entirely to maximize throughput during the spike',
      'Process every order entirely synchronously within the HTTP request for simplicity'
    ],
    correctAnswer: 'Combine autoscaling PHP-FPM worker pools/containers, a queue-based order processing pipeline decoupled from the synchronous request, aggressive caching of read-heavy catalog data, and a circuit breaker/graceful degradation path for non-critical services',
    explanation: 'Handling extreme, short-lived traffic spikes economically requires elastic scaling rather than permanent overprovisioning, decoupling slow/critical-path work (like payment confirmation) into queues so the synchronous request stays fast, caching to reduce database load, and graceful degradation of non-essential features (recommendations, analytics) to preserve core checkout capacity.',
    tags: ['system-design', 'scalability', 'flash-sale']
  },
  {
    id: 'php-087',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a distributed rate limiter for a PHP API gateway running across many stateless application servers?',
    options: [
      'Track request counts in a static PHP array per server',
      'Rely on the client to self-report their own rate',
      'Use a centralized, atomic counter store (e.g., Redis with INCR + EXPIRE, or a sliding-window log/Lua script) accessible by all servers, since each PHP-FPM process/request has no shared in-process memory across servers or even across requests on the same server',
      'Use file-based locking on each server independently'
    ],
    correctAnswer: 'Use a centralized, atomic counter store (e.g., Redis with INCR + EXPIRE, or a sliding-window log/Lua script) accessible by all servers, since each PHP-FPM process/request has no shared in-process memory across servers or even across requests on the same server',
    explanation: 'Because PHP\u2019s shared-nothing execution model means no built-in shared memory persists between requests (let alone across servers), rate limiting state must live in an external, atomic, low-latency store like Redis, using atomic operations (or Lua scripting for compound logic) to avoid race conditions under concurrent requests.',
    tags: ['system-design', 'rate-limiting', 'distributed-systems', 'redis']
  },
  {
    id: 'php-088',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'Your PHP-FPM-backed API shows p99 latency spikes correlating with periodic traffic, even though average response times and CPU usage look healthy. What is a likely cause specific to PHP-FPM\'s process model, and how would you investigate?',
    options: [
      'The database is always the only possible cause',
      'PHP-FPM worker pool exhaustion: when all configured workers (pm.max_children) are busy, new requests queue in the backlog, causing latency spikes invisible in average CPU metrics; investigate via php-fpm status page (listen queue, active processes) and slow log',
      'p99 latency cannot be meaningfully measured for PHP applications',
      'OPcache must be disabled to diagnose this'
    ],
    correctAnswer: 'PHP-FPM worker pool exhaustion: when all configured workers (pm.max_children) are busy, new requests queue in the backlog, causing latency spikes invisible in average CPU metrics; investigate via php-fpm status page (listen queue, active processes) and slow log',
    explanation: 'If incoming request bursts exceed the configured worker pool size, excess requests wait in the FastCGI backlog queue rather than failing outright, producing latency spikes concentrated in the tail (p99) while average metrics and CPU remain unremarkable; the FPM status endpoint and slow request log reveal queueing and identify slow handlers consuming workers.',
    tags: ['php-fpm', 'performance', 'debugging', 'latency']
  },
  {
    id: 'php-089',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design idempotent payment-processing endpoints in a PHP service to safely handle client-side retries on network timeouts?',
    options: [
      'Disable retries at the client entirely',
      'Generate a server-side request ID after the fact for deduplication',
      'Require the client to send an Idempotency-Key header per logical operation, persist the key with the operation\u2019s result (within a transaction) before returning, and on a duplicate key, return the originally stored response instead of reprocessing the charge',
      'Rely solely on database auto-increment IDs to detect duplicates'
    ],
    correctAnswer: 'Require the client to send an Idempotency-Key header per logical operation, persist the key with the operation\u2019s result (within a transaction) before returning, and on a duplicate key, return the originally stored response instead of reprocessing the charge',
    explanation: 'Network timeouts leave the client uncertain whether the original request succeeded; a client-generated idempotency key, atomically checked-and-recorded alongside the operation\u2019s outcome in the same transaction, lets the server safely recognize and short-circuit retried requests by returning the original result rather than double-charging.',
    tags: ['system-design', 'idempotency', 'payments']
  },
  {
    id: 'php-090',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'What is wrong with this code intended to safely process a batch of orders, and how would you fix it for production?\n\nforeach ($orderIds as $id) {\n  $order = Order::find($id);\n  $order->status = \'shipped\';\n  $order->save();\n  Mail::send(new ShippedNotification($order));\n}',
    options: [
      'Nothing; this code is production-ready as-is',
      'Each iteration performs a synchronous DB write and a synchronous email send inline, risking long-running requests, partial failures leaving inconsistent state, and no retry handling; status updates should be wrapped in transactions/batched, and notifications should be dispatched as queued jobs decoupled from the loop',
      'foreach cannot be used with Eloquent models',
      'Order::find() always returns NULL for batch operations'
    ],
    correctAnswer: 'Each iteration performs a synchronous DB write and a synchronous email send inline, risking long-running requests, partial failures leaving inconsistent state, and no retry handling; status updates should be wrapped in transactions/batched, and notifications should be dispatched as queued jobs decoupled from the loop',
    explanation: 'Synchronously emailing inside a loop over potentially many orders couples a slow, failure-prone external operation to the request lifecycle (risking timeouts and leaving some orders updated but not others if it crashes partway); production code should batch/transactionally update statuses and dispatch notification jobs to a queue, decoupling delivery from the critical path and enabling retries on individual failures.',
    tags: ['production', 'queues', 'transactions', 'gotchas']
  },
  {
    id: 'php-091',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you architect a multi-tenant SaaS PHP application to ensure strict data isolation between tenants while sharing application infrastructure?',
    options: [
      'Store all tenants in one unscoped table relying only on application code to filter by tenant_id',
      'Give every tenant their own physical server',
      'Combine a consistently applied tenant-scoping mechanism (e.g., global query scope/middleware injecting tenant_id on every query) with defense-in-depth database-level enforcement such as row-level security or separate schemas/databases per tenant for higher-sensitivity tenants',
      'Trust client-supplied tenant IDs in request payloads without server-side derivation'
    ],
    correctAnswer: 'Combine a consistently applied tenant-scoping mechanism (e.g., global query scope/middleware injecting tenant_id on every query) with defense-in-depth database-level enforcement such as row-level security or separate schemas/databases per tenant for higher-sensitivity tenants',
    explanation: 'Relying solely on disciplined application code to always filter by tenant is fragile against a single missed query; combining a centrally enforced query scope (derived from authenticated session/token context, never trusting client-supplied tenant IDs) with database-level isolation (row-level security, schema-per-tenant) provides defense-in-depth against cross-tenant data leaks.',
    tags: ['system-design', 'multi-tenancy', 'security']
  },
  {
    id: 'php-092',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a job queue worker system in PHP (e.g., using Laravel Queues or Symfony Messenger) to guarantee no job is silently lost if a worker process crashes mid-execution?',
    options: [
      'Store jobs only in PHP-FPM in-memory state',
      'Use a durable backend (database or Redis-backed queue with persistence) where jobs are only removed/acknowledged after successful completion, configure visibility timeouts so crashed workers\u2019 jobs become available for retry, and route repeatedly failing jobs to a dead-letter queue for investigation',
      'Process all jobs synchronously to avoid the possibility of crashes mid-job',
      'Rely on cron polling a table with no locking and accept occasional duplicate processing as unavoidable'
    ],
    correctAnswer: 'Use a durable backend (database or Redis-backed queue with persistence) where jobs are only removed/acknowledged after successful completion, configure visibility timeouts so crashed workers\u2019 jobs become available for retry, and route repeatedly failing jobs to a dead-letter queue for investigation',
    explanation: 'Reliable job processing requires that a job is only marked complete after successful execution (not on dequeue), so a crashed worker mid-job leaves it eligible for redelivery after a visibility timeout; bounded retry counts and a dead-letter queue prevent poison-pill jobs from looping forever while preserving them for manual inspection.',
    tags: ['system-design', 'queues', 'reliability']
  },
  {
    id: 'php-093',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'Why does enabling OPcache\'s "validate_timestamps=0" setting in production require a deliberate deployment process change, and what risk does it mitigate/introduce?',
    options: [
      'It has no effect on deployments whatsoever',
      'With validate_timestamps disabled, OPcache never checks if source files changed on disk, eliminating per-request filesystem stat() overhead, but it means deployed code changes will not take effect until OPcache is explicitly reset/reloaded, requiring deployment tooling to trigger a cache clear',
      'It forces PHP to recompile every file on every request, slowing things down',
      'It automatically clears the cache every time a file is modified, with no manual step needed'
    ],
    correctAnswer: 'With validate_timestamps disabled, OPcache never checks if source files changed on disk, eliminating per-request filesystem stat() overhead, but it means deployed code changes will not take effect until OPcache is explicitly reset/reloaded, requiring deployment tooling to trigger a cache clear',
    explanation: 'Disabling timestamp validation removes a small but real per-request filesystem check, improving throughput in high-traffic production, but it also means cached opcodes become stale relative to disk after a deploy unless the deployment pipeline explicitly reloads PHP-FPM workers or calls opcache_reset(), making this an explicit operational trade-off rather than a free win.',
    tags: ['opcache', 'performance', 'deployment', 'production']
  },
  {
    id: 'php-094',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design zero-downtime deployments for a PHP-FPM application behind a load balancer, particularly accounting for in-flight requests and database migrations?',
    options: [
      'Restart all PHP-FPM workers simultaneously across all servers at once',
      'Use rolling deployments that drain and replace instances one at a time behind the load balancer (or via FPM graceful reload), keep schema migrations backward-compatible during the transition window so both old and new code can operate against the database simultaneously, and run migrations as a separate controlled step',
      'Run database migrations directly inside each web request as needed',
      'Take the entire application offline during every deployment'
    ],
    correctAnswer: 'Use rolling deployments that drain and replace instances one at a time behind the load balancer (or via FPM graceful reload), keep schema migrations backward-compatible during the transition window so both old and new code can operate against the database simultaneously, and run migrations as a separate controlled step',
    explanation: 'Zero-downtime PHP deployments combine load-balancer-aware rolling updates (or PHP-FPM\u2019s graceful reload, which finishes in-flight requests on old workers before replacing them) with backward/forward-compatible schema migrations, since for a window during rollout, both old and new application code may be querying the same database simultaneously.',
    tags: ['system-design', 'deployment', 'php-fpm', 'migrations']
  },
  {
    id: 'php-095',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'A PHP application accepts an XML file upload and parses it with libxml-based functions (e.g., SimpleXML, DOMDocument). What critical vulnerability must be mitigated, and how?',
    options: [
      'SQL injection, mitigated with prepared statements',
      'XML External Entity (XXE) injection, where a malicious XML document declares an external entity referencing a local file or internal network resource; mitigated by disabling external entity loading (e.g., libxml_disable_entity_loader, or ensuring LIBXML_NOENT/external entities are not resolved) before parsing untrusted XML',
      'Cross-site scripting, mitigated by HTML-escaping the XML output',
      'There is no XML-specific risk beyond standard input validation'
    ],
    correctAnswer: 'XML External Entity (XXE) injection, where a malicious XML document declares an external entity referencing a local file or internal network resource; mitigated by disabling external entity loading (e.g., libxml_disable_entity_loader, or ensuring LIBXML_NOENT/external entities are not resolved) before parsing untrusted XML',
    explanation: 'Untrusted XML parsed with entity resolution enabled can include a DOCTYPE declaring an external entity like file:///etc/passwd, causing the parser to read and potentially leak local file contents or trigger SSRF against internal services; the fix is ensuring the XML parser does not resolve external entities for untrusted input.',
    tags: ['security', 'xxe', 'xml']
  },
  {
    id: 'php-096',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you diagnose and resolve a memory leak in a long-running PHP CLI worker process (e.g., a queue consumer running for hours), given that PHP\'s typical per-request memory reset doesn\'t apply here?',
    options: [
      'Increase memory_limit indefinitely until the process never crashes',
      'Restart the process every few seconds regardless of cause',
      'Use memory profiling tools (e.g., periodic memory_get_usage() logging, Xdebug/Blackfire profiling) to identify growth patterns, look for accumulating static properties, unbounded caches, or registered event listeners/closures retaining references across job iterations, and apply periodic worker recycling as a pragmatic mitigation alongside root-cause fixes',
      'Memory leaks are impossible in PHP regardless of execution context'
    ],
    correctAnswer: 'Use memory profiling tools (e.g., periodic memory_get_usage() logging, Xdebug/Blackfire profiling) to identify growth patterns, look for accumulating static properties, unbounded caches, or registered event listeners/closures retaining references across job iterations, and apply periodic worker recycling as a pragmatic mitigation alongside root-cause fixes',
    explanation: 'Unlike typical PHP-FPM requests which fully reset memory between requests, long-running CLI workers accumulate state across many job iterations; common culprits include static caches that grow unbounded, accumulating closures captured by event listeners, or framework-level query logs not being cleared, diagnosed via profiling tools and commonly mitigated in production by periodically recycling worker processes (e.g., restarting after N jobs) alongside fixing the underlying retention.',
    tags: ['performance', 'memory-leaks', 'queues', 'debugging']
  },
  {
    id: 'php-097',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a circuit breaker pattern in a PHP service making outgoing HTTP calls to an unreliable third-party API, given PHP\'s typically stateless, per-request execution model?',
    options: [
      'Store circuit state in a local PHP static variable, since it persists for the lifetime of the request',
      'Persist circuit breaker state (failure counts, open/closed/half-open status, timestamps) in a shared, fast external store like Redis so state is consistent across all stateless PHP-FPM workers and servers, with atomic operations to avoid race conditions when many requests evaluate/update the circuit concurrently',
      'Open the circuit permanently after the first failure with no recovery mechanism',
      'Avoid circuit breakers entirely since PHP cannot implement them'
    ],
    correctAnswer: 'Persist circuit breaker state (failure counts, open/closed/half-open status, timestamps) in a shared, fast external store like Redis so state is consistent across all stateless PHP-FPM workers and servers, with atomic operations to avoid race conditions when many requests evaluate/update the circuit concurrently',
    explanation: 'Since each PHP request is an isolated, short-lived execution with no shared in-process memory across workers or servers, a circuit breaker\u2019s state must live in a centralized, low-latency external store; atomic increment/compare-and-set operations (or Lua scripting in Redis) prevent race conditions when concurrent requests simultaneously evaluate or trip the breaker.',
    tags: ['system-design', 'circuit-breaker', 'resilience', 'redis']
  },
  {
    id: 'php-098',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'Why can naive use of array_merge() inside a loop accumulating results from thousands of database rows cause severe performance degradation, and what is the better approach?',
    options: [
      'array_merge() has constant time complexity regardless of array size, so this is never a problem',
      'Each call to array_merge() inside the loop allocates and copies a new array combining all previous results plus the new chunk, making the loop effectively O(n\u00b2); appending with $result[] = ... or using array_push/yield (generators) avoids the repeated full-array copy',
      'array_merge() should never be used under any circumstances',
      'The issue only occurs with associative arrays, never indexed arrays'
    ],
    correctAnswer: 'Each call to array_merge() inside the loop allocates and copies a new array combining all previous results plus the new chunk, making the loop effectively O(n\u00b2); appending with $result[] = ... or using array_push/yield (generators) avoids the repeated full-array copy',
    explanation: 'array_merge() must allocate a new array and copy every element from both operands on each call; calling it repeatedly inside a loop accumulating into a growing result array means each iteration copies an ever-larger array, degrading to quadratic time, whereas appending individual elements (or yielding from a generator) avoids this repeated full-copy cost.',
    tags: ['performance', 'arrays', 'algorithmic-complexity']
  },
  {
    id: 'php-099',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a search feature for a PHP e-commerce platform with millions of products, given that LIKE \'%term%\' queries against the primary relational database don\'t scale well?',
    options: [
      'Add more LIKE queries with additional wildcards to broaden matching',
      'Increase the database server\u2019s RAM indefinitely as the only mitigation',
      'Offload search to a dedicated search engine (Elasticsearch, OpenSearch, or Meilisearch) with an inverted index, keep it synchronized with the primary database asynchronously (via change-data-capture or domain events on write), and query the search engine directly from the PHP application for search requests',
      'Run LIKE queries directly against a read replica with no other changes'
    ],
    correctAnswer: 'Offload search to a dedicated search engine (Elasticsearch, OpenSearch, or Meilisearch) with an inverted index, keep it synchronized with the primary database asynchronously (via change-data-capture or domain events on write), and query the search engine directly from the PHP application for search requests',
    explanation: 'Full-text wildcard searches against a relational database scale poorly since LIKE \'%term%\' generally cannot use a standard B-tree index efficiently; a purpose-built search engine maintaining an inverted index handles full-text relevance ranking and faceting far more efficiently, with the PHP application keeping it in sync asynchronously rather than treating it as the system of record.',
    tags: ['system-design', 'search', 'elasticsearch', 'scalability']
  },
  {
    id: 'php-100',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'What subtle security and correctness issue exists in this authorization check, common in PHP applications?\n\nif ($user->role == \'admin\' || $request->input(\'override\') == \'true\') {\n  deleteAccount($targetUserId);\n}',
    options: [
      'role comparison should always use === instead of ==, but otherwise the code is fine',
      'It allows any client to bypass the admin check entirely by simply sending an "override=true" request parameter, since trusting client-supplied input for an authorization decision is a critical broken-access-control vulnerability',
      'deleteAccount() cannot accept a userId parameter in PHP',
      'There is no issue; override flags are a standard, safe pattern'
    ],
    correctAnswer: 'It allows any client to bypass the admin check entirely by simply sending an "override=true" request parameter, since trusting client-supplied input for an authorization decision is a critical broken-access-control vulnerability',
    explanation: 'Authorization decisions must never depend on values the client fully controls; an attacker can trivially append override=true to bypass the role check entirely, representing a textbook broken access control vulnerability that should instead rely solely on server-verified identity/role/permission checks.',
    tags: ['security', 'broken-access-control', 'authorization']
  },
  {
    id: 'php-101',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design observability (logging, metrics, distributed tracing) for a PHP microservices architecture where each service is a separate Laravel/Symfony application?',
    options: [
      'Rely on error_log() output scattered across each server\u2019s local filesystem with no aggregation',
      'Implement structured (JSON) logging with a correlation/trace ID propagated via request headers across service boundaries, export application/business metrics to a time-series system (e.g., Prometheus), and instrument requests with distributed tracing (OpenTelemetry PHP SDK) to visualize cross-service request flow and latency',
      'Disable logging entirely in production for performance',
      'Use only the database\'s slow query log as the sole source of observability'
    ],
    correctAnswer: 'Implement structured (JSON) logging with a correlation/trace ID propagated via request headers across service boundaries, export application/business metrics to a time-series system (e.g., Prometheus), and instrument requests with distributed tracing (OpenTelemetry PHP SDK) to visualize cross-service request flow and latency',
    explanation: 'Because each PHP service request is independently executed, correlating a single logical user action across multiple services requires explicitly propagating a trace/correlation ID through HTTP headers and into structured logs; combined with metrics export and OpenTelemetry-based tracing, this provides the cross-service visibility that isolated per-server logs cannot.',
    tags: ['system-design', 'observability', 'microservices', 'tracing']
  },
  {
    id: 'php-102',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'Why might increasing PHP-FPM\'s "pm.max_requests" (causing workers to recycle after N requests) be a useful production safeguard, despite the apparent overhead of periodically restarting workers?',
    options: [
      'It has no real-world benefit and only adds overhead',
      'It mitigates the impact of slow memory growth from extension-level leaks or accumulating state across requests within long-lived worker processes, by periodically resetting each worker\u2019s memory footprint, trading minor restart overhead for protection against gradual resource exhaustion',
      'It is required for OPcache to function at all',
      'It permanently disables request processing during recycling, causing downtime'
    ],
    correctAnswer: 'It mitigates the impact of slow memory growth from extension-level leaks or accumulating state across requests within long-lived worker processes, by periodically resetting each worker\u2019s memory footprint, trading minor restart overhead for protection against gradual resource exhaustion',
    explanation: 'Even though each PHP request itself resets userland state, certain C-extension-level leaks or persistent connection accumulation can slowly grow a worker process\u2019s memory footprint over thousands of requests; periodically recycling workers (pm.max_requests) bounds this growth as a pragmatic safety net, at the cost of brief, individually staggered worker restarts that don\u2019t cause overall downtime since other workers continue serving.',
    tags: ['php-fpm', 'production', 'memory', 'reliability']
  },
  {
    id: 'php-103',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a feature flag / gradual rollout system for a PHP application deployed across thousands of servers, allowing a new feature to be enabled for 1% of traffic before full rollout?',
    options: [
      'Hardcode the feature behind a boolean constant requiring a full redeploy to change the percentage',
      'Use a centralized feature flag service or config store (e.g., a flags table cached in Redis, or a dedicated flagging service) queried per request, applying consistent, deterministic bucketing (e.g., hashing a stable user ID modulo 100) so users get a stable experience across requests rather than flickering between variants',
      'Randomly decide per-request with no consistency for a given user',
      'Deploy two entirely separate codebases and route traffic with DNS round robin'
    ],
    correctAnswer: 'Use a centralized feature flag service or config store (e.g., a flags table cached in Redis, or a dedicated flagging service) queried per request, applying consistent, deterministic bucketing (e.g., hashing a stable user ID modulo 100) so users get a stable experience across requests rather than flickering between variants',
    explanation: 'A production-grade rollout system decouples deployment from release by checking flag state at request time from a fast, centrally updatable store, and uses deterministic hashing of a stable identifier (user ID, session ID) to consistently bucket the same user into the same variant across requests, avoiding a confusing flickering experience while still allowing instant flag percentage adjustments without redeployment.',
    tags: ['system-design', 'feature-flags', 'rollout']
  },
  {
    id: 'php-104',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'A PHP API endpoint computing a complex report takes 8 seconds, occasionally causing client/gateway timeouts. What architectural fix, beyond simply optimizing the query, addresses this most robustly at scale?',
    options: [
      'Increase the client timeout indefinitely to match worst-case execution time',
      'Decouple report generation into an asynchronous job: the API immediately returns a job ID/202 Accepted, a worker computes the report and caches/stores the result, and the client polls or is notified (webhook/WebSocket) when ready, avoiding holding an HTTP connection (and a PHP-FPM worker) open for the full duration',
      'Run the same synchronous query but add more PHP-FPM workers to compensate',
      'Switch the report endpoint to use GET instead of POST'
    ],
    correctAnswer: 'Decouple report generation into an asynchronous job: the API immediately returns a job ID/202 Accepted, a worker computes the report and caches/stores the result, and the client polls or is notified (webhook/WebSocket) when ready, avoiding holding an HTTP connection (and a PHP-FPM worker) open for the full duration',
    explanation: 'Long-running synchronous requests are fragile against gateway/proxy timeouts and tie up a scarce PHP-FPM worker for the entire duration; converting expensive operations into an async job pattern (immediate 202 response, background processing, client polling or push notification on completion) is the standard scalable fix rather than simply adding more workers or raising timeouts.',
    tags: ['performance', 'system-design', 'async-processing']
  },
  {
    id: 'php-105',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'How would you securely manage secrets (database credentials, API keys) for a PHP application deployed across multiple environments, avoiding the common anti-pattern of committing them to version control?',
    options: [
      'Hardcode credentials directly in PHP source files for simplicity',
      'Store secrets in environment variables injected by the deployment platform or a dedicated secrets manager (e.g., AWS Secrets Manager, HashiCorp Vault), loaded into the application at runtime via something like phpdotenv for local development only, never committing actual secret values, and rotate credentials periodically',
      'Store secrets in a .env file committed to the repository for convenience',
      'Encode secrets with base64 and store them in the codebase, treating encoding as sufficient protection'
    ],
    correctAnswer: 'Store secrets in environment variables injected by the deployment platform or a dedicated secrets manager (e.g., AWS Secrets Manager, HashiCorp Vault), loaded into the application at runtime via something like phpdotenv for local development only, never committing actual secret values, and rotate credentials periodically',
    explanation: 'Secrets should never live in version control (base64 is encoding, not encryption, and provides no real protection); the standard approach injects secrets via environment variables or a managed secrets service at deploy/runtime, keeps a non-secret .env.example template in the repo for local development scaffolding, and supports periodic rotation without code changes.',
    tags: ['security', 'secrets-management', 'configuration']
  },
  {
    id: 'php-106',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design schema evolution for a PHP application\'s event-sourced order system, given that past events must remain valid as the event schema evolves over years?',
    options: [
      'Always mutate the stored historical events in place to match the current schema',
      'Version each event type explicitly (e.g., OrderCreatedV1, OrderCreatedV2), maintain upcasting logic that transforms older event versions into the shape expected by current read models/handlers when replayed, and avoid ever deleting or rewriting historical event records',
      'Delete old events periodically to keep the schema simple',
      'Store events without any versioning, assuming the schema never needs to change'
    ],
    correctAnswer: 'Version each event type explicitly (e.g., OrderCreatedV1, OrderCreatedV2), maintain upcasting logic that transforms older event versions into the shape expected by current read models/handlers when replayed, and avoid ever deleting or rewriting historical event records',
    explanation: 'Since the append-only event log is the immutable source of truth, schema changes cannot rewrite history; instead, explicit event versioning combined with "upcasters" that translate older event payload shapes into the current expected structure during replay allows the system to evolve over time while preserving full historical fidelity.',
    tags: ['system-design', 'event-sourcing', 'schema-evolution']
  },
  {
    id: 'php-107',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'Why does increasing the number of PHP-FPM worker processes beyond the number of available CPU cores still sometimes improve throughput for I/O-bound workloads, despite PHP being single-threaded per request?',
    options: [
      'It never helps; worker count beyond CPU core count is always wasteful',
      'Each worker process blocks on its own while waiting on I/O (database queries, external API calls); having more workers than cores allows the OS scheduler to run other workers\u2019 CPU-bound portions while some workers are blocked waiting on I/O, improving overall concurrency for I/O-heavy requests',
      'PHP-FPM automatically parallelizes a single request across all available workers',
      'More workers only help CPU-bound, never I/O-bound, workloads'
    ],
    correctAnswer: 'Each worker process blocks on its own while waiting on I/O (database queries, external API calls); having more workers than cores allows the OS scheduler to run other workers\u2019 CPU-bound portions while some workers are blocked waiting on I/O, improving overall concurrency for I/O-heavy requests',
    explanation: 'For workloads dominated by waiting on external I/O rather than CPU computation, the bottleneck isn\u2019t CPU cycles but concurrency capacity; provisioning more worker processes than physical cores lets the OS interleave execution, with idle (I/O-blocked) workers yielding the CPU to others doing actual computation, improving aggregate throughput up to a point determined by memory and downstream system capacity.',
    tags: ['performance', 'php-fpm', 'concurrency', 'capacity-planning']
  },
  {
    id: 'php-108',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a PHP-based system for processing financial transactions to ensure exactly-once effect on account balances, given that the underlying message queue only guarantees at-least-once delivery?',
    options: [
      'Accept occasional double-processing as an unavoidable cost of using queues',
      'Make the transaction-application logic idempotent at the application/database level (e.g., a unique constraint on a transaction_id column applied within the same atomic update), so that even if the same message is delivered and processed twice, the net effect on the balance is applied only once',
      'Switch to a queue technology that claims exactly-once delivery and trust it completely with no further safeguards',
      'Process messages without any deduplication and rely on manual reconciliation after the fact'
    ],
    correctAnswer: 'Make the transaction-application logic idempotent at the application/database level (e.g., a unique constraint on a transaction_id column applied within the same atomic update), so that even if the same message is delivered and processed twice, the net effect on the balance is applied only once',
    explanation: 'True exactly-once delivery is extremely difficult to guarantee at the transport layer alone; the robust pattern is achieving "effectively exactly-once" semantics by making the business logic itself idempotent, e.g., recording applied transaction IDs with a unique constraint enforced atomically alongside the balance update, so a redelivered duplicate message is detected and skipped rather than double-applied.',
    tags: ['system-design', 'idempotency', 'financial-systems', 'messaging']
  },
  {
    id: 'php-109',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'What is the risk of relying on PHP\'s mt_rand() or rand() for generating password reset tokens or session identifiers, and what is the correct alternative?',
    options: [
      'There is no risk; mt_rand() is cryptographically secure',
      'mt_rand()/rand() are not cryptographically secure pseudo-random number generators; their output can be predicted given enough samples, making tokens guessable; random_bytes() or random_int() (PHP\u2019s CSPRNG-backed functions) should be used instead for security-sensitive values',
      'mt_rand() is too slow for production use, which is the only concern',
      'rand() only works for integers, never for generating tokens at all'
    ],
    correctAnswer: 'mt_rand()/rand() are not cryptographically secure pseudo-random number generators; their output can be predicted given enough samples, making tokens guessable; random_bytes() or random_int() (PHP\u2019s CSPRNG-backed functions) should be used instead for security-sensitive values',
    explanation: 'mt_rand() uses the Mersenne Twister algorithm, which is statistically excellent for non-security purposes but not unpredictable enough for cryptographic use, since its internal state can sometimes be inferred from output; security-sensitive values like password reset tokens, CSRF tokens, or session IDs must use a CSPRNG, which PHP exposes via random_bytes()/random_int().',
    tags: ['security', 'randomness', 'tokens']
  },
  {
    id: 'php-110',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you handle "eventual consistency" between a PHP application\'s primary relational database and a denormalized Redis-based read cache used for a high-traffic product listing page?',
    options: [
      'Update Redis and the database in the exact same millisecond using busy-waiting to guarantee synchronization',
      'Update the primary database as the source of truth within a transaction, then asynchronously invalidate or refresh the affected cache keys (via a queued job or pub/sub event), accepting a brief window of staleness, and design the UI/cache TTLs to tolerate that lag gracefully',
      'Never cache anything to avoid consistency issues entirely',
      'Treat Redis as the sole source of truth and stop writing to the relational database'
    ],
    correctAnswer: 'Update the primary database as the source of truth within a transaction, then asynchronously invalidate or refresh the affected cache keys (via a queued job or pub/sub event), accepting a brief window of staleness, and design the UI/cache TTLs to tolerate that lag gracefully',
    explanation: 'Trying to synchronize two different storage technologies perfectly atomically is impractical; the common, scalable approach treats the relational database as the authoritative source of truth, commits writes there first, and propagates cache invalidation/refresh asynchronously, explicitly accepting (and designing for) a small consistency lag rather than pretending it doesn\u2019t exist.',
    tags: ['system-design', 'caching', 'eventual-consistency', 'redis']
  },
  {
    id: 'php-111',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'What concurrency bug does this code have when run as two simultaneous requests against the same row, and how would you fix it at the database level?\n\n$stock = DB::table(\'products\')->where(\'id\', $id)->value(\'stock\');\nif ($stock > 0) {\n  DB::table(\'products\')->where(\'id\', $id)->update([\'stock\' => $stock - 1]);\n}',
    options: [
      'There is no bug; PHP guarantees sequential execution across all requests automatically',
      'A classic check-then-act race condition: two concurrent requests can both read stock=1 before either writes back, both decrement believing it\u2019s safe, resulting in stock going negative; fix with an atomic UPDATE ... SET stock = stock - 1 WHERE stock > 0 (or row-level locking via SELECT ... FOR UPDATE within a transaction) so the check and decrement happen atomically',
      'The bug only occurs if $id is a string instead of an integer',
      'The fix is to add more PHP-FPM workers'
    ],
    correctAnswer: 'A classic check-then-act race condition: two concurrent requests can both read stock=1 before either writes back, both decrement believing it\u2019s safe, resulting in stock going negative; fix with an atomic UPDATE ... SET stock = stock - 1 WHERE stock > 0 (or row-level locking via SELECT ... FOR UPDATE within a transaction) so the check and decrement happen atomically',
    explanation: 'Reading a value and later writing based on that stale read across separate statements is inherently racy under concurrency; the database-level fix is to express the check and decrement as a single atomic statement (UPDATE with a WHERE condition on the current value), or explicitly lock the row for the duration of a transaction, removing the window where two requests can both believe stock is available.',
    tags: ['concurrency', 'race-conditions', 'database', 'gotchas']
  },
  {
    id: 'php-112',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design PHP application-level caching for user-specific data (e.g., a personalized dashboard) to avoid cache stampedes when a popular cache key expires under high concurrent traffic?',
    options: [
      'Let every concurrent request that misses the cache recompute the expensive data simultaneously',
      'Disable caching for personalized data entirely',
      'Use a locking/coalescing mechanism (e.g., a short-lived Redis lock acquired by the first request to recompute, with others either waiting briefly or serving slightly stale data) combined with staggered/jittered TTLs to avoid many keys expiring simultaneously',
      'Cache personalized data with an infinite TTL and never invalidate it'
    ],
    correctAnswer: 'Use a locking/coalescing mechanism (e.g., a short-lived Redis lock acquired by the first request to recompute, with others either waiting briefly or serving slightly stale data) combined with staggered/jittered TTLs to avoid many keys expiring simultaneously',
    explanation: 'Cache stampedes occur when a popular key\u2019s expiry causes many concurrent requests to simultaneously hit the (expensive) underlying computation/database; coalescing recomputation behind a lock so only one request actually recomputes while others wait or serve stale-but-acceptable data, paired with jittered expiration to avoid synchronized mass expiry, prevents this thundering herd effect.',
    tags: ['system-design', 'caching', 'cache-stampede', 'scalability']
  },
  {
    id: 'php-113',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'How would you mitigate ReDoS (Regular Expression Denial of Service) risk in a PHP application validating user-supplied input with PCRE regex patterns?',
    options: [
      'PCRE is immune to catastrophic backtracking by design, so no mitigation is needed',
      'Avoid regex patterns with nested quantifiers prone to catastrophic backtracking, set pcre.backtrack_limit appropriately, validate/limit input length before matching, and consider offloading risky pattern matching to a separate, time-bounded process for untrusted high-risk input',
      'Always use preg_match() without any pattern review since PHP automatically times out slow regexes',
      'Switch to str_contains() for all string matching to eliminate the risk entirely'
    ],
    correctAnswer: 'Avoid regex patterns with nested quantifiers prone to catastrophic backtracking, set pcre.backtrack_limit appropriately, validate/limit input length before matching, and consider offloading risky pattern matching to a separate, time-bounded process for untrusted high-risk input',
    explanation: 'PCRE (PHP\u2019s regex engine) is susceptible to catastrophic backtracking on poorly constructed patterns matched against crafted malicious input, potentially consuming excessive CPU and blocking the worker; mitigations include auditing regexes for backtracking risk, bounding input size before matching, configuring backtrack/recursion limits, and isolating especially risky matching for untrusted input.',
    tags: ['security', 'redos', 'regex']
  },
  {
    id: 'php-114',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a PHP-based notification system that must reliably deliver via multiple channels (email, SMS, push) with channel-specific retry/backoff and avoid notification storms during a downstream outage?',
    options: [
      'Send all channels synchronously inline within the triggering request',
      'Retry indefinitely with no delay whenever any channel fails',
      'Dispatch each channel as an independent queued job with its own exponential backoff and bounded retry policy, apply circuit breaking per downstream provider to stop hammering a failing channel, and route exhausted retries to a dead-letter queue for monitoring/alerting',
      'Drop all notifications immediately on the first failure with no retry whatsoever'
    ],
    correctAnswer: 'Dispatch each channel as an independent queued job with its own exponential backoff and bounded retry policy, apply circuit breaking per downstream provider to stop hammering a failing channel, and route exhausted retries to a dead-letter queue for monitoring/alerting',
    explanation: 'Decoupling each delivery channel into its own queued job with independent retry/backoff policies prevents one slow or failing channel (e.g., an SMS provider outage) from blocking others, while circuit breaking per provider avoids amplifying load against an already struggling downstream service, and a dead-letter queue preserves permanently failed notifications for visibility rather than silently dropping them.',
    tags: ['system-design', 'notifications', 'resilience', 'queues']
  },
  {
    id: 'php-115',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'Why might wrapping every database call in a PHP application with a generic try/catch that logs and continues silently mask serious production reliability issues at scale?',
    options: [
      'try/catch around database calls is always best practice with no downside',
      'Silently catching and continuing past failed database operations can leave the application in an inconsistent state, hide the true failure rate from monitoring/alerting (since errors never propagate as visible failures), and make it impossible to distinguish transient blips from systemic outages',
      'try/catch has no measurable runtime cost, so this is purely a style preference',
      'PHP does not support try/catch around database operations'
    ],
    correctAnswer: 'Silently catching and continuing past failed database operations can leave the application in an inconsistent state, hide the true failure rate from monitoring/alerting (since errors never propagate as visible failures), and make it impossible to distinguish transient blips from systemic outages',
    explanation: 'Blanket exception swallowing around critical operations like database writes means partial failures go unnoticed by error-rate-based alerting, the application can silently proceed with stale or missing data, and operators lose the signal needed to detect a developing outage until customer-visible symptoms appear; errors should be handled deliberately (retried, surfaced, or explicitly compensated) rather than uniformly suppressed.',
    tags: ['error-handling', 'observability', 'production', 'reliability']
  },
  {
    id: 'php-116',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a distributed lock in a PHP application using Redis (e.g., the Redlock algorithm) to coordinate a scheduled task that must run on exactly one of many horizontally scaled servers?',
    options: [
      'Use a local PHP file lock per server, assuming only one server will ever acquire it',
      'Have all servers attempt to run the task simultaneously and rely on idempotency alone with no locking',
      'Have each server attempt to acquire a Redis lock key with a unique value and a TTL via SET key value NX PX ttl; only the server that successfully sets the key runs the task, releases the lock with a value-checking script to avoid releasing another holder\u2019s lock, and the TTL ensures eventual recovery if the lock holder crashes',
      'Use a single global PHP static variable shared across all servers'
    ],
    correctAnswer: 'Have each server attempt to acquire a Redis lock key with a unique value and a TTL via SET key value NX PX ttl; only the server that successfully sets the key runs the task, releases the lock with a value-checking script to avoid releasing another holder\u2019s lock, and the TTL ensures eventual recovery if the lock holder crashes',
    explanation: 'A correct Redis-based distributed lock uses an atomic SET ... NX (set if not exists) with an expiry to acquire it, embeds a unique token as the value to safely verify ownership before release (typically via a Lua script to make the check-and-delete atomic), and relies on the TTL to automatically release the lock if the holder crashes, preventing indefinite deadlock without requiring manual intervention.',
    tags: ['system-design', 'distributed-locking', 'redis', 'scheduling']
  },
  {
    id: 'php-117',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'Why is it dangerous to allow user-supplied class names to be instantiated dynamically, e.g. new $userControlledClassName(), even if the resulting object is never directly output?',
    options: [
      'PHP forbids dynamic class instantiation entirely, making this scenario impossible',
      'It risks "insecure deserialization"-adjacent attacks: an attacker can instantiate arbitrary classes available in the autoloaded codebase (or its dependencies), potentially triggering dangerous side effects in constructors or magic methods of unrelated classes never intended to be user-instantiable',
      'It only poses a performance risk, never a security risk',
      'Dynamic instantiation always throws a fatal error if the class is not explicitly imported'
    ],
    correctAnswer: 'It risks "insecure deserialization"-adjacent attacks: an attacker can instantiate arbitrary classes available in the autoloaded codebase (or its dependencies), potentially triggering dangerous side effects in constructors or magic methods of unrelated classes never intended to be user-instantiable',
    explanation: 'Similar in spirit to PHP object injection via unserialize(), letting user input directly choose which class to instantiate opens the door to invoking constructors or magic methods of classes the developer never anticipated being reachable this way, some of which (especially in large dependency trees) may perform file operations, network calls, or other dangerous side effects purely as a byproduct of being constructed; class names used dynamically should always be validated against an explicit allowlist.',
    tags: ['security', 'dynamic-instantiation', 'object-injection']
  },
  {
    id: 'php-118',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a PHP-based system to safely apply rolling, backward-compatible database schema changes (e.g., renaming a column) without downtime, given multiple application versions may run concurrently during deployment?',
    options: [
      'Rename the column directly in a single migration and deploy the new code simultaneously, accepting a brief outage',
      'Use an expand-contract (parallel change) pattern: first add the new column while keeping the old one and dual-writing both, deploy application code to read from the new column with a fallback, backfill historical data, then in a later separate deployment remove the old column once all instances are confirmed migrated',
      'Skip the migration step and handle the rename entirely in application code with no schema change',
      'Manually update the schema through a database GUI during a maintenance window with the application still serving traffic'
    ],
    correctAnswer: 'Use an expand-contract (parallel change) pattern: first add the new column while keeping the old one and dual-writing both, deploy application code to read from the new column with a fallback, backfill historical data, then in a later separate deployment remove the old column once all instances are confirmed migrated',
    explanation: 'A direct rename breaks any application instance still running old code expecting the original column name during a rolling deployment; the expand-contract pattern decomposes the change into safe, backward-compatible steps (add new, dual-write, backfill, switch reads, then later remove old) so that old and new code can coexist safely throughout the multi-step rollout.',
    tags: ['system-design', 'database', 'migrations', 'zero-downtime']
  },
  {
    id: 'php-119',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'A PHP application uses Eloquent and shows good performance in staging with small test datasets, but production queries on a table with 50 million rows are extremely slow despite having an index on the filtered column. What is a likely overlooked cause, and how would you diagnose it?',
    options: [
      'Indexes never help with tables over 1 million rows, so this is expected behavior',
      'The query planner may be choosing not to use the index due to low selectivity, an implicit type mismatch preventing index usage, or the query selecting columns/applying functions that prevent a covering or sargable index lookup; diagnose with EXPLAIN/EXPLAIN ANALYZE to inspect the actual query plan rather than assuming the index is used',
      'Increasing PHP\u2019s memory_limit will resolve any slow query regardless of cause',
      'Eloquent always bypasses database indexes entirely by design'
    ],
    correctAnswer: 'The query planner may be choosing not to use the index due to low selectivity, an implicit type mismatch preventing index usage, or the query selecting columns/applying functions that prevent a covering or sargable index lookup; diagnose with EXPLAIN/EXPLAIN ANALYZE to inspect the actual query plan rather than assuming the index is used',
    explanation: 'Having an index defined doesn\u2019t guarantee the query planner uses it efficiently; common production-scale culprits include the optimizer favoring a full table scan due to poor cardinality estimates, type coercion between the column and bound parameter preventing index use, or wrapping the indexed column in a function/non-sargable expression in the WHERE clause; EXPLAIN ANALYZE reveals the actual execution plan, which is essential since staging datasets are often too small to expose planner behavior that only manifests at production scale.',
    tags: ['performance', 'database', 'query-optimization', 'debugging']
  },
  {
    id: 'php-120',
    topic: 'php',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you architect a PHP-based system to safely migrate a monolithic application\'s "Orders" module into an independent microservice with minimal risk, while the monolith continues operating?',
    options: [
      'Cut over all traffic to the new service immediately in a single big-bang deployment with no fallback',
      'Apply the Strangler Fig pattern: introduce a facade/routing layer in front of the Orders functionality, incrementally redirect specific operations to the new service while the rest continue being served by the monolith, keep data synchronized during the transition (e.g., dual writes or CDC), and gradually expand the new service\u2019s scope until the monolith\u2019s Orders code can be safely retired',
      'Duplicate the entire monolith codebase as the "new" microservice with no architectural changes',
      'Run both systems indefinitely without ever fully migrating traffic'
    ],
    correctAnswer: 'Apply the Strangler Fig pattern: introduce a facade/routing layer in front of the Orders functionality, incrementally redirect specific operations to the new service while the rest continue being served by the monolith, keep data synchronized during the transition (e.g., dual writes or CDC), and gradually expand the new service\u2019s scope until the monolith\u2019s Orders code can be safely retired',
    explanation: 'The Strangler Fig pattern minimizes risk by incrementally routing slices of functionality to the new service behind a stable facade, rather than a risky full cutover; maintaining data consistency during the transition (through dual writes, an outbox pattern, or change-data-capture syncing) allows both the legacy and new paths to coexist safely while traffic is progressively shifted, with the old implementation only removed once the new service has proven itself for all relevant cases.',
    tags: ['system-design', 'microservices', 'strangler-fig', 'migration']
  }
];