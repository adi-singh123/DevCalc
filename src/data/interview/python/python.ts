/**
 * src/data/interview/python.ts
 * Python Interview Questions (120 items)
 * Levels: Beginner (10) → Intermediate (35) → Advanced (40) → MNC (35)
 *
 * Design note: every option set below is written so the correct answer
 * is structurally distinct from the distractors (different mechanism,
 * not just reworded phrasing), so similar-sounding choices don't force
 * a guess on the harder Advanced/MNC coding questions.
 */

import { InterviewQuestion } from '@/src/types/interview';

export const pythonQuestions: InterviewQuestion[] = [

  // ─────────────────────────────────────────────
  // BEGINNER  (py-001 – py-010)
  // ─────────────────────────────────────────────

  {
    id: 'py-001',
    topic: 'python',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the key difference between a list and a tuple in Python?',
    options: [
      'Lists are mutable and tuples are immutable',
      'Tuples can only store numbers',
      'Lists cannot be nested inside other lists',
      'Tuples are always faster to search than lists'
    ],
    correctAnswer: 'Lists are mutable and tuples are immutable',
    explanation:
      'Lists (list) support in-place modification — append, remove, item assignment. Tuples (tuple) are immutable: once created, their contents cannot change, which is why they can be used as dictionary keys or set members while lists cannot.',
    tags: ['list', 'tuple', 'mutability', 'data-types']
  },
  {
    id: 'py-002',
    topic: 'python',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does type(True) return in Python?',
    options: [
      "<class 'str'>",
      "<class 'bool'>, which is a subclass of int",
      "<class 'int'>, unrelated to bool",
      'An error, because True is a keyword, not a value'
    ],
    correctAnswer: "<class 'bool'>, which is a subclass of int",
    explanation:
      'bool is implemented as a subclass of int in Python, so True == 1 and False == 0 evaluate to True, and True + True == 2. This quirk explains why isinstance(True, int) is also True.',
    tags: ['bool', 'int', 'type', 'quirks']
  },
  {
    id: 'py-003',
    topic: 'python',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the difference between == and is in Python?',
    options: [
      '== compares object identity, is compares stored values',
      '== compares values for equality, is compares whether two references point to the same object in memory',
      'They always produce the same result for every type',
      'is is only valid for comparing numbers'
    ],
    correctAnswer:
      '== compares values for equality, is compares whether two references point to the same object in memory',
    explanation:
      '== calls the __eq__ method to compare values. is compares identity via id(). Two equal lists ([1,2] == [1,2]) are not the same object (is returns False), while small cached integers or interned strings can make is True even without an explicit copy.',
    tags: ['equality', 'identity', 'operators']
  },
  {
    id: 'py-004',
    topic: 'python',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question:
      'What happens if you reference a local variable inside a function before it is assigned, when that same variable is also assigned later in the function body?',
    options: [
      'Python automatically uses the global variable of the same name',
      'Python raises an UnboundLocalError because the name is treated as local for the whole function once it is assigned anywhere inside it',
      'Python returns None silently',
      'Python raises a SyntaxError at import time'
    ],
    correctAnswer:
      'Python raises an UnboundLocalError because the name is treated as local for the whole function once it is assigned anywhere inside it',
    explanation:
      'Python determines variable scope statically per function. If a name is assigned anywhere in the function body, it is treated as local throughout that function — even on lines before the assignment — so accessing it earlier raises UnboundLocalError instead of falling back to an enclosing/global variable.',
    tags: ['scope', 'unboundlocalerror', 'variables']
  },
  {
    id: 'py-005',
    topic: 'python',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is a closure in Python?',
    options: [
      'A function that closes a file automatically',
      'An inner function that captures and remembers variables from its enclosing function\'s scope, even after the outer function has finished executing',
      'A syntax error caused by unmatched brackets',
      'A way to end a loop early'
    ],
    correctAnswer:
      'An inner function that captures and remembers variables from its enclosing function\'s scope, even after the outer function has finished executing',
    explanation:
      'A closure occurs when a nested function references a variable from its enclosing function. Python keeps that variable alive via the __closure__ attribute (cell objects) so the inner function can use it later, enabling patterns like function factories and decorators.',
    tags: ['closures', 'scope', 'functions']
  },
  {
    id: 'py-006',
    topic: 'python',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which of these best describes Python\'s built-in data type categories?',
    options: [
      'Only numbers and strings exist as built-in types',
      'Immutable types like int, float, str, tuple, frozenset, bool; and mutable types like list, dict, set',
      'Every built-in type in Python is mutable',
      'Every built-in type in Python is immutable'
    ],
    correctAnswer:
      'Immutable types like int, float, str, tuple, frozenset, bool; and mutable types like list, dict, set',
    explanation:
      'Python splits built-ins into immutable (cannot change after creation: int, float, str, tuple, frozenset, bool, bytes) and mutable (can change in place: list, dict, set, bytearray). This distinction affects hashability and how they behave as function default arguments.',
    tags: ['data-types', 'mutability', 'primitives']
  },
  {
    id: 'py-007',
    topic: 'python',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'What is the result of: 0.1 + 0.2 == 0.3 in Python?',
    options: ['True', 'False', 'A TypeError is raised', 'None'],
    correctAnswer: 'False',
    explanation:
      'Like most languages, Python represents floats using IEEE 754 double precision, so 0.1 + 0.2 evaluates to 0.30000000000000004. Use math.isclose(a, b) or round comparisons instead of == for floating-point values.',
    tags: ['floating-point', 'ieee754', 'quirks']
  },
  {
    id: 'py-008',
    topic: 'python',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'How does Python represent the concept of "no value", and what is one pitfall around it?',
    options: [
      'Python has both null and undefined like JavaScript',
      'Python uses a single singleton, None, for absence of value; comparing None with == works but "is None" is the recommended idiom',
      'Python uses 0 to represent absence of value',
      'Python raises an error whenever a variable has no value'
    ],
    correctAnswer:
      'Python uses a single singleton, None, for absence of value; comparing None with == works but "is None" is the recommended idiom',
    explanation:
      'Unlike JavaScript\'s null/undefined split, Python has one None object (a singleton of NoneType). Because it is a singleton, identity comparison (x is None) is preferred over equality (x == None) since it is faster and avoids relying on a custom __eq__.',
    tags: ['none', 'null', 'idioms']
  },
  {
    id: 'py-009',
    topic: 'python',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the Global Interpreter Lock (GIL) in CPython, at a high level?',
    options: [
      'A security feature that blocks untrusted code from running',
      'A mutex that allows only one thread to execute Python bytecode at a time in a single process',
      'A lock that prevents any two Python programs from running simultaneously on a machine',
      'A deprecated feature removed in all current Python versions'
    ],
    correctAnswer:
      'A mutex that allows only one thread to execute Python bytecode at a time in a single process',
    explanation:
      'The GIL is a lock specific to the CPython implementation that ensures only one thread executes Python bytecode at any instant, even on multi-core machines. It simplifies memory management but limits CPU-bound multithreading, which is why CPU-heavy work often uses multiprocessing instead.',
    tags: ['gil', 'threading', 'cpython']
  },
  {
    id: 'py-010',
    topic: 'python',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the difference between a function defined with def and one defined with lambda?',
    options: [
      'lambda functions cannot take arguments',
      'def creates a named function that can contain multiple statements; lambda creates a small anonymous function limited to a single expression',
      'lambda functions run faster than def functions in every case',
      'def functions cannot be assigned to a variable'
    ],
    correctAnswer:
      'def creates a named function that can contain multiple statements; lambda creates a small anonymous function limited to a single expression',
    explanation:
      'lambda arg1, arg2: expression produces a function object restricted to one expression (no statements, no annotations). def supports docstrings, multiple statements, decorators, and default type annotations, making it the standard choice for anything beyond a trivial inline callback.',
    tags: ['lambda', 'functions', 'syntax']
  },

  // ─────────────────────────────────────────────
  // INTERMEDIATE  (py-011 – py-045)
  // ─────────────────────────────────────────────

  {
    id: 'py-011',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'Why is using a mutable default argument (like a list) dangerous in Python?',
    options: [
      'It causes a SyntaxError at function definition time',
      'The default value is created once at function-definition time and shared across all calls that don\'t pass their own argument, so mutations persist between calls',
      'Python automatically deep-copies default arguments on every call, so it is actually safe',
      'Mutable defaults are simply forbidden by the interpreter'
    ],
    correctAnswer:
      'The default value is created once at function-definition time and shared across all calls that don\'t pass their own argument, so mutations persist between calls',
    explanation:
      'def f(x=[]): is evaluated once when the function object is created. Every call that omits x reuses the same list object, so appending to it in one call leaks into subsequent calls. The fix is def f(x=None): if x is None: x = [].',
    tags: ['mutable-default', 'gotcha', 'functions']
  },
  {
    id: 'py-012',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between *args and **kwargs in a function signature?',
    options: [
      'They are interchangeable syntax for the same feature',
      '*args collects extra positional arguments into a tuple; **kwargs collects extra keyword arguments into a dict',
      '*args collects keyword arguments; **kwargs collects positional arguments',
      '**kwargs can only be used in class methods'
    ],
    correctAnswer:
      '*args collects extra positional arguments into a tuple; **kwargs collects extra keyword arguments into a dict',
    explanation:
      'def f(*args, **kwargs) lets a function accept any number of positional arguments (bundled as a tuple named args) and any number of keyword arguments (bundled as a dict named kwargs). The names args/kwargs are convention, not requirements — the * and ** are what matter.',
    tags: ['args', 'kwargs', 'functions']
  },
  {
    id: 'py-013',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What are Python decorators and what problem do they solve?',
    options: [
      'A way to add comments to functions',
      'Higher-order functions that wrap another function or class to extend its behaviour without modifying its source code, applied with the @decorator syntax',
      'A syntax exclusive to class attribute definitions',
      'A built-in way to compile Python to machine code'
    ],
    correctAnswer:
      'Higher-order functions that wrap another function or class to extend its behaviour without modifying its source code, applied with the @decorator syntax',
    explanation:
      '@decorator above a function is sugar for func = decorator(func). Decorators commonly add logging, timing, caching (functools.lru_cache), access control, or registration behaviour, keeping cross-cutting concerns separate from the core logic.',
    tags: ['decorators', 'higher-order-functions', 'syntax']
  },
  {
    id: 'py-014',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How do generators differ from regular functions that return a list?',
    options: [
      'Generators compute and return the entire result set immediately, just like a list',
      'Generators use yield to lazily produce one value at a time on demand, keeping only the current state in memory instead of the whole sequence',
      'Generators can only be used once inside a class method',
      'Generators are a deprecated feature replaced by list comprehensions'
    ],
    correctAnswer:
      'Generators use yield to lazily produce one value at a time on demand, keeping only the current state in memory instead of the whole sequence',
    explanation:
      'A function containing yield becomes a generator function; calling it returns a generator object that produces values lazily via next(). This makes generators memory-efficient for large or infinite sequences, unlike a function that builds and returns a full list upfront.',
    tags: ['generators', 'yield', 'iterators']
  },
  {
    id: 'py-015',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a context manager and what does the "with" statement do?',
    options: [
      'A way to import modules conditionally',
      'An object implementing __enter__ and __exit__ that the "with" statement uses to guarantee setup and cleanup (like closing a file) even if an exception occurs',
      'A tool for managing global variables across modules',
      'A deprecated alternative to try/except'
    ],
    correctAnswer:
      'An object implementing __enter__ and __exit__ that the "with" statement uses to guarantee setup and cleanup (like closing a file) even if an exception occurs',
    explanation:
      'with open("f") as fh: calls open("f").__enter__() to obtain fh, then guarantees __exit__() is called on block exit — including on exceptions — closing the file. contextlib.contextmanager lets you write context managers using a generator function instead of a class.',
    tags: ['context-manager', 'with-statement', 'resource-management']
  },
  {
    id: 'py-016',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between shallow copy and deep copy in Python?',
    options: [
      'They always produce identical results for every object',
      'A shallow copy (copy.copy or slicing) duplicates the outer container but nested objects are still shared references; a deep copy (copy.deepcopy) recursively duplicates every nested object',
      'Deep copy only works on strings and numbers',
      'Shallow copy is not possible in Python'
    ],
    correctAnswer:
      'A shallow copy (copy.copy or slicing) duplicates the outer container but nested objects are still shared references; a deep copy (copy.deepcopy) recursively duplicates every nested object',
    explanation:
      'list(original) or original[:] creates a new outer list, but if it contains nested lists/dicts, those inner objects are still the same references as in the original. copy.deepcopy() walks the whole object graph and creates independent copies of nested mutable objects too.',
    tags: ['copy', 'deepcopy', 'mutability']
  },
  {
    id: 'py-017',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is duck typing in Python?',
    options: [
      'A strict type-checking system enforced at compile time',
      'A style where an object\'s suitability is determined by whether it has the needed methods/behaviour, not by its explicit class or type',
      'A naming convention for classes related to animals',
      'A feature exclusive to the abc module'
    ],
    correctAnswer:
      'A style where an object\'s suitability is determined by whether it has the needed methods/behaviour, not by its explicit class or type',
    explanation:
      '"If it walks like a duck and quacks like a duck, it\'s a duck." Python code often calls obj.read() without checking isinstance(obj, File) — as long as the object implements a compatible interface, it works. This is enabled by Python\'s dynamic typing.',
    tags: ['duck-typing', 'dynamic-typing', 'oop']
  },
  {
    id: 'py-018',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between a list comprehension and a generator expression?',
    options: [
      'They produce identical objects in memory',
      'A list comprehension [x for x in y] builds the full list immediately in memory; a generator expression (x for x in y) produces values lazily one at a time without building the whole sequence',
      'Generator expressions can only be used inside class definitions',
      'List comprehensions cannot contain conditional filtering'
    ],
    correctAnswer:
      'A list comprehension [x for x in y] builds the full list immediately in memory; a generator expression (x for x in y) produces values lazily one at a time without building the whole sequence',
    explanation:
      'Swapping [] for () changes eager evaluation into lazy evaluation. sum(x*x for x in range(10**8)) avoids ever materialising a huge list, while [x*x for x in range(10**8)] would allocate the entire list at once.',
    tags: ['comprehensions', 'generators', 'memory']
  },
  {
    id: 'py-019',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What are Python\'s magic methods (dunder methods) used for?',
    options: [
      'They are internal CPython functions that cannot be overridden by user code',
      'Special methods like __init__, __str__, __add__, and __len__ that let custom classes integrate with built-in syntax and functions (operators, len(), str(), etc.)',
      'A naming convention purely for private variables',
      'Methods that are only callable from C extensions'
    ],
    correctAnswer:
      'Special methods like __init__, __str__, __add__, and __len__ that let custom classes integrate with built-in syntax and functions (operators, len(), str(), etc.)',
    explanation:
      'Defining __add__ on a class lets instances use the + operator; __len__ lets len(obj) work; __getitem__ enables obj[i] indexing. This protocol-based design is how Python achieves operator overloading and makes custom objects behave like built-ins.',
    tags: ['dunder-methods', 'magic-methods', 'oop']
  },
  {
    id: 'py-020',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How does Python\'s Method Resolution Order (MRO) work with multiple inheritance?',
    options: [
      'Python does not support multiple inheritance',
      'Python uses the C3 linearisation algorithm to produce a consistent, predictable order for searching base classes, viewable via ClassName.__mro__',
      'The MRO is chosen randomly each time a method is called',
      'Only the first parent class listed is ever checked for methods'
    ],
    correctAnswer:
      'Python uses the C3 linearisation algorithm to produce a consistent, predictable order for searching base classes, viewable via ClassName.__mro__',
    explanation:
      'C3 linearisation ensures a monotonic, consistent order that respects the order classes are declared and avoids the "diamond problem" ambiguity. super() calls in a class rely on this MRO to determine which parent\'s method runs next, particularly important in cooperative multiple inheritance.',
    tags: ['mro', 'multiple-inheritance', 'c3-linearisation', 'oop']
  },
  {
    id: 'py-021',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between @staticmethod and @classmethod?',
    options: [
      'Both receive the instance (self) as the first argument automatically',
      '@classmethod receives the class (cls) as its first argument and can access/modify class state; @staticmethod receives neither self nor cls and behaves like a plain function namespaced inside the class',
      '@staticmethod can only be called on instances, never on the class itself',
      'They are two names for exactly the same behaviour'
    ],
    correctAnswer:
      '@classmethod receives the class (cls) as its first argument and can access/modify class state; @staticmethod receives neither self nor cls and behaves like a plain function namespaced inside the class',
    explanation:
      'classmethod is often used for alternative constructors (e.g. MyClass.from_json(data)) since cls lets it work correctly with subclasses too. staticmethod is for utility functions logically related to the class but that don\'t need access to instance or class state.',
    tags: ['staticmethod', 'classmethod', 'oop']
  },
  {
    id: 'py-022',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is monkey patching in Python?',
    options: [
      'A testing framework built into the standard library',
      'Dynamically modifying or extending a class or module at runtime, after it has already been defined/imported',
      'A syntax error caused by circular imports',
      'A feature for compiling Python to native binaries'
    ],
    correctAnswer:
      'Dynamically modifying or extending a class or module at runtime, after it has already been defined/imported',
    explanation:
      'Because classes and modules are just mutable objects at runtime, you can reassign SomeClass.method = new_function after import. Common in testing (mocking), but risky in production code since it can silently change behaviour relied upon elsewhere.',
    tags: ['monkey-patching', 'dynamic', 'metaprogramming']
  },
  {
    id: 'py-023',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What is printed by: print([i for i in range(5) if i % 2 == 0])?',
    options: ['[0, 2, 4]', '[1, 3]', '[0, 1, 2, 3, 4]', 'A SyntaxError'],
    correctAnswer: '[0, 2, 4]',
    explanation:
      'The list comprehension iterates 0..4 and keeps only values where i % 2 == 0 (even numbers), producing [0, 2, 4]. The "if" clause at the end of a comprehension filters elements before they are collected.',
    tags: ['comprehensions', 'coding', 'filtering']
  },
  {
    id: 'py-024',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the __init__.py file in a Python package?',
    options: [
      'It is required to run any Python script',
      'It marks a directory as a regular package and can run initialisation code or define what gets exported when the package is imported',
      'It stores compiled bytecode for the package',
      'It is only used to store the package\'s license text'
    ],
    correctAnswer:
      'It marks a directory as a regular package and can run initialisation code or define what gets exported when the package is imported',
    explanation:
      'Historically __init__.py was required for a directory to be importable as a package (Python 3.3+ also supports implicit namespace packages without it). It commonly re-exports submodule contents or defines __all__ to control from package import *.',
    tags: ['packages', 'modules', 'init']
  },
  {
    id: 'py-025',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between async def functions and regular functions in Python?',
    options: [
      'They behave identically when called',
      'Calling an async def function returns a coroutine object that must be awaited or scheduled on an event loop rather than running immediately to completion',
      'async def functions run automatically on a separate thread',
      'async def is only valid syntax inside classes'
    ],
    correctAnswer:
      'Calling an async def function returns a coroutine object that must be awaited or scheduled on an event loop rather than running immediately to completion',
    explanation:
      'Calling coro = my_async_func() does not execute the body — it creates a coroutine object. Only awaiting it (await coro) or running it via an event loop (asyncio.run) actually executes the code, cooperatively yielding control at each await point.',
    tags: ['asyncio', 'coroutines', 'async-def']
  },
  {
    id: 'py-026',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is memoisation and how is it commonly implemented in Python?',
    options: [
      'A way to compress function bytecode',
      'Caching the results of expensive function calls keyed by their arguments, commonly done with functools.lru_cache or functools.cache decorators',
      'Manually clearing all variables after each function call',
      'A garbage collection strategy specific to CPython'
    ],
    correctAnswer:
      'Caching the results of expensive function calls keyed by their arguments, commonly done with functools.lru_cache or functools.cache decorators',
    explanation:
      '@functools.lru_cache(maxsize=128) wraps a pure function, storing previous (args) -> result pairs in a dict-backed cache. Subsequent identical calls return instantly from the cache instead of recomputing, which is especially effective for recursive algorithms.',
    tags: ['memoisation', 'lru_cache', 'functools', 'optimisation']
  },
  {
    id: 'py-027',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What are Python descriptors and where are they commonly used?',
    options: [
      'Comments describing what a function does',
      'Objects that define __get__, __set__, or __delete__ and customise attribute access when set as a class attribute — the mechanism underlying property, staticmethod, and classmethod',
      'A type of docstring format',
      'A deprecated feature replaced by type hints'
    ],
    correctAnswer:
      'Objects that define __get__, __set__, or __delete__ and customise attribute access when set as a class attribute — the mechanism underlying property, staticmethod, and classmethod',
    explanation:
      'A descriptor is an object implementing the descriptor protocol. When assigned as a class attribute, Python routes instance.attr access through its __get__/__set__ methods instead of the instance\'s __dict__. property() is a built-in descriptor; ORMs like Django use custom descriptors for model fields.',
    tags: ['descriptors', 'metaprogramming', 'property']
  },
  {
    id: 'py-028',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between a Python module and a package?',
    options: [
      'They are exactly the same thing with different names',
      'A module is a single .py file; a package is a directory of modules (typically containing an __init__.py) that groups related modules under one namespace',
      'A package can only contain one module',
      'Modules can only be imported from packages, never standalone'
    ],
    correctAnswer:
      'A module is a single .py file; a package is a directory of modules (typically containing an __init__.py) that groups related modules under one namespace',
    explanation:
      'import math imports a single module (math.py-equivalent, in this case a built-in). import numpy imports a package — a directory containing many submodules (numpy.linalg, numpy.random, etc.) organised under a shared namespace.',
    tags: ['modules', 'packages', 'imports']
  },
  {
    id: 'py-029',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'How do you remove duplicate values from a list while roughly preserving order in Python?',
    options: [
      'list(set(my_list)) always preserves the original order',
      'list(dict.fromkeys(my_list))',
      'my_list.unique()',
      'my_list.deduplicate()'
    ],
    correctAnswer: 'list(dict.fromkeys(my_list))',
    explanation:
      'Since Python 3.7, dicts preserve insertion order. dict.fromkeys(my_list) creates a dict with each list item as a key (duplicates collapse automatically), and list(...) converts the keys back to a list — deduplicated, in original order. set() removes duplicates too but does not preserve order.',
    tags: ['deduplication', 'dict', 'coding']
  },
  {
    id: 'py-030',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the walrus operator (:=) introduced in Python 3.8 and what problem does it solve?',
    options: [
      'A new comparison operator that replaces ==',
      'An assignment expression that lets you assign a value to a variable as part of a larger expression, avoiding repeated computation or a separate assignment line',
      'A bitwise operator for floor division',
      'A shorthand for defining lambda functions'
    ],
    correctAnswer:
      'An assignment expression that lets you assign a value to a variable as part of a larger expression, avoiding repeated computation or a separate assignment line',
    explanation:
      'while (chunk := file.read(1024)): lets you assign and test chunk in the same expression, instead of assigning on one line and checking on the next. It is especially useful for avoiding redundant calls inside comprehensions and while loop conditions.',
    tags: ['walrus-operator', 'assignment-expression', 'python38']
  },
  {
    id: 'py-031',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the dataclasses module?',
    options: [
      'To replace dictionaries entirely',
      'To auto-generate boilerplate methods (__init__, __repr__, __eq__) for classes that primarily store data, based on class-level type-annotated fields',
      'To enforce strict runtime type checking on all attributes',
      'To convert any class into an immutable tuple'
    ],
    correctAnswer:
      'To auto-generate boilerplate methods (__init__, __repr__, __eq__) for classes that primarily store data, based on class-level type-annotated fields',
    explanation:
      '@dataclass above a class with annotated fields (name: str, age: int) auto-generates __init__, a readable __repr__, and __eq__ based on field values. Options like frozen=True make instances immutable, and it reduces boilerplate compared to hand-writing these methods.',
    tags: ['dataclasses', 'boilerplate', 'python37']
  },
  {
    id: 'py-032',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between synchronous and asynchronous I/O in Python?',
    options: [
      'Asynchronous I/O always uses multiple CPU cores',
      'Synchronous I/O blocks the calling thread until the operation completes; asynchronous I/O (via asyncio) lets a single thread cooperatively switch to other tasks while waiting for I/O to finish',
      'There is no meaningful difference in Python',
      'Synchronous I/O is only available in Python 2'
    ],
    correctAnswer:
      'Synchronous I/O blocks the calling thread until the operation completes; asynchronous I/O (via asyncio) lets a single thread cooperatively switch to other tasks while waiting for I/O to finish',
    explanation:
      'A blocking call like requests.get() halts the entire thread until the response arrives. An asyncio-based call like await aiohttp_session.get() yields control back to the event loop, letting other coroutines run during the wait — useful for high-concurrency I/O-bound workloads without extra threads.',
    tags: ['asyncio', 'io', 'concurrency']
  },
  {
    id: 'py-033',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between a frozen dataclass/frozenset and using a regular list for immutability?',
    options: [
      'Lists can also be made hashable and used as dictionary keys',
      'frozenset and frozen dataclasses are immutable and hashable, so they can be used as dictionary keys or set members, unlike lists which are mutable and unhashable',
      'frozenset objects can still be modified after creation using .add()',
      'There is no functional difference between them'
    ],
    correctAnswer:
      'frozenset and frozen dataclasses are immutable and hashable, so they can be used as dictionary keys or set members, unlike lists which are mutable and unhashable',
    explanation:
      'Python requires dict keys and set members to be hashable, which generally requires immutability. list.__hash__ is None, so lists cannot be used as keys. frozenset() and @dataclass(frozen=True) provide immutable, hashable alternatives to set and a mutable class respectively.',
    tags: ['frozenset', 'hashable', 'immutability']
  },
  {
    id: 'py-034',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between the json module\'s dumps/loads and pickle\'s dumps/loads?',
    options: [
      'They are fully interchangeable for any Python object',
      'json produces a human-readable, language-agnostic text format limited to basic types; pickle serialises almost any Python object (including custom classes) into a binary, Python-specific format that should not be loaded from untrusted sources',
      'pickle only works with strings and numbers',
      'json can serialise arbitrary Python objects, including functions'
    ],
    correctAnswer:
      'json produces a human-readable, language-agnostic text format limited to basic types; pickle serialises almost any Python object (including custom classes) into a binary, Python-specific format that should not be loaded from untrusted sources',
    explanation:
      'json.dumps handles dict/list/str/int/float/bool/None and is safe to exchange across languages. pickle.dumps can serialise custom class instances, functions, and complex object graphs, but pickle.loads on untrusted data is a well-known remote-code-execution risk since it can call arbitrary constructors.',
    tags: ['json', 'pickle', 'serialisation', 'security']
  },
  {
    id: 'py-035',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of type hints (e.g. def f(x: int) -> str) in Python?',
    options: [
      'They are enforced at runtime and raise a TypeError if violated',
      'They are optional annotations that document expected types and enable static analysis tools (mypy, IDEs) to catch bugs before runtime, but Python itself does not enforce them at runtime',
      'They change how the function is compiled to bytecode',
      'They are required for a function to be callable'
    ],
    correctAnswer:
      'They are optional annotations that document expected types and enable static analysis tools (mypy, IDEs) to catch bugs before runtime, but Python itself does not enforce them at runtime',
    explanation:
      'Type hints are metadata stored in __annotations__. CPython ignores them at runtime — passing a str to a parameter hinted as int will not raise an error on its own. Tools like mypy, pyright, or runtime validators like pydantic are needed to actually enforce or check them.',
    tags: ['type-hints', 'typing', 'static-analysis']
  },
  {
    id: 'py-036',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between a set and a frozenset?',
    options: [
      'They behave identically in every situation',
      'set is mutable (supports add/remove) and unhashable; frozenset is immutable and hashable, so it can itself be used inside another set or as a dict key',
      'frozenset cannot store more than one element',
      'set can only store strings'
    ],
    correctAnswer:
      'set is mutable (supports add/remove) and unhashable; frozenset is immutable and hashable, so it can itself be used inside another set or as a dict key',
    explanation:
      'Both support the same membership-testing and set-algebra operations (union, intersection), but only frozenset can be nested inside another set or used as a dictionary key, precisely because it cannot change after creation and therefore has a stable hash.',
    tags: ['set', 'frozenset', 'hashable']
  },
  {
    id: 'py-037',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What does the following return: sorted(["banana", "Apple", "cherry"])?',
    options: [
      "['Apple', 'banana', 'cherry']",
      "['banana', 'cherry', 'Apple']",
      "['Apple', 'cherry', 'banana']",
      'A TypeError, because mixed-case strings cannot be sorted'
    ],
    correctAnswer: "['Apple', 'banana', 'cherry']",
    explanation:
      'sorted() on strings uses lexicographic ordering based on Unicode code points, and uppercase letters have lower code points than lowercase ones (\'A\' is 65, \'b\' is 98), so "Apple" sorts before "banana" and "cherry" even though it would come later in a case-insensitive alphabetical sort.',
    tags: ['sorting', 'strings', 'coding']
  },
  {
    id: 'py-038',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the itertools module used for?',
    options: [
      'It provides GUI widgets for iteration progress bars',
      'It provides fast, memory-efficient building blocks for working with iterators, such as chain, cycle, groupby, product, and combinations',
      'It replaces the need for for loops entirely',
      'It is only usable with NumPy arrays'
    ],
    correctAnswer:
      'It provides fast, memory-efficient building blocks for working with iterators, such as chain, cycle, groupby, product, and combinations',
    explanation:
      'itertools.chain(a, b) lazily concatenates iterables; itertools.groupby groups consecutive equal elements; itertools.product/combinations/permutations generate combinatorial sequences without building intermediate lists — all implemented in C for speed and low memory overhead.',
    tags: ['itertools', 'iterators', 'standard-library']
  },
  {
    id: 'py-039',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between raise Exception("msg") and raise Exception("msg") from original_error?',
    options: [
      'They behave identically in every case',
      'The "from" form explicitly chains exceptions, preserving the original exception as __cause__ so the traceback shows both the original and the newly raised error',
      '"from" is only valid syntax inside a class definition',
      'The "from" form suppresses the traceback entirely'
    ],
    correctAnswer:
      'The "from" form explicitly chains exceptions, preserving the original exception as __cause__ so the traceback shows both the original and the newly raised error',
    explanation:
      'When you catch an exception and raise a new one inside the except block, Python automatically sets __context__. Using "raise NewError(...) from original" additionally sets __cause__, making the intentional chain explicit in the traceback ("The above exception was the direct cause of...").',
    tags: ['exceptions', 'exception-chaining', 'error-handling']
  },
  {
    id: 'py-040',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between an abstract base class (ABC) and a regular class with NotImplementedError?',
    options: [
      'They provide the exact same enforcement guarantees',
      'An ABC (via the abc module) prevents instantiation of the class itself if abstract methods are undefined, enforced at instantiation time; a regular class only fails when the unimplemented method is actually called',
      'Regular classes cannot define methods at all',
      'ABCs can be instantiated freely regardless of abstract methods'
    ],
    correctAnswer:
      'An ABC (via the abc module) prevents instantiation of the class itself if abstract methods are undefined, enforced at instantiation time; a regular class only fails when the unimplemented method is actually called',
    explanation:
      'Subclassing ABC and marking a method with @abstractmethod means Python raises a TypeError the moment you try to instantiate a subclass missing that method — a fail-fast guarantee. Raising NotImplementedError manually inside a plain method only fails when that specific method is invoked at runtime.',
    tags: ['abc', 'abstract-base-class', 'oop']
  },
  {
    id: 'py-041',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of __slots__ in a Python class?',
    options: [
      'It defines the order in which methods are called',
      'It restricts instances to a fixed set of attributes and avoids creating a per-instance __dict__, reducing memory usage for classes with many instances',
      'It is required for every Python class to function',
      'It automatically makes all attributes private'
    ],
    correctAnswer:
      'It restricts instances to a fixed set of attributes and avoids creating a per-instance __dict__, reducing memory usage for classes with many instances',
    explanation:
      'By default every instance carries a __dict__ for arbitrary attribute storage. Declaring __slots__ = ("x", "y") tells Python to allocate fixed storage for just those names instead, which can noticeably reduce memory usage when creating millions of small objects, at the cost of losing dynamic attribute assignment.',
    tags: ['slots', 'memory', 'oop', 'performance']
  },
  {
    id: 'py-042',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between multiprocessing and threading in Python for CPU-bound work?',
    options: [
      'threading achieves true parallel CPU execution because of the GIL',
      'multiprocessing spawns separate processes with independent memory and their own GIL, achieving real parallelism for CPU-bound work; threading shares one GIL per process, so CPU-bound threads do not run truly in parallel',
      'They are functionally identical for CPU-bound tasks',
      'multiprocessing cannot be used for CPU-bound work at all'
    ],
    correctAnswer:
      'multiprocessing spawns separate processes with independent memory and their own GIL, achieving real parallelism for CPU-bound work; threading shares one GIL per process, so CPU-bound threads do not run truly in parallel',
    explanation:
      'Because the GIL is per-process, multiple threads in one process still take turns executing Python bytecode. multiprocessing.Process (or ProcessPoolExecutor) sidesteps this by running separate Python interpreters, each with its own GIL, at the cost of higher memory use and needing IPC (pipes/queues) to share data.',
    tags: ['multiprocessing', 'threading', 'gil', 'concurrency']
  },
  {
    id: 'py-043',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of virtual environments (venv) in Python?',
    options: [
      'They run Python code inside a sandboxed virtual machine for security',
      'They create an isolated directory with its own Python interpreter and package set, so dependencies for one project don\'t conflict with another project\'s dependencies or the system Python',
      'They are required to run any .py file',
      'They automatically upgrade Python to the latest version'
    ],
    correctAnswer:
      'They create an isolated directory with its own Python interpreter and package set, so dependencies for one project don\'t conflict with another project\'s dependencies or the system Python',
    explanation:
      'python -m venv myenv creates an isolated site-packages directory. Activating it points pip install and python at that isolated environment, letting Project A depend on Django 3 and Project B depend on Django 5 without conflict, and keeping the system-wide Python installation clean.',
    tags: ['venv', 'virtual-environments', 'dependency-management']
  },
  {
    id: 'py-044',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'How would you flatten a one-level nested list of lists, e.g. [[1,2],[3,4]] -> [1,2,3,4]?',
    options: [
      '[item for sublist in nested for item in sublist]',
      'nested.flatten()',
      'sum(nested)',
      'list(nested)'
    ],
    correctAnswer: '[item for sublist in nested for item in sublist]',
    explanation:
      'A nested comprehension iterates the outer list, then the inner list, collecting each item — equivalent to itertools.chain.from_iterable(nested). list.flatten() does not exist on Python lists, and sum(nested) only works with a start value of [] and is much slower for large inputs.',
    tags: ['flatten', 'comprehensions', 'coding']
  },
  {
    id: 'py-045',
    topic: 'python',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between __str__ and __repr__?',
    options: [
      'They are exact synonyms with no difference in intent',
      '__str__ returns a readable, user-facing string (used by print() and str()); __repr__ returns an unambiguous, developer-facing representation (used by the REPL and repr()), ideally one that could recreate the object',
      '__repr__ is only used internally by the garbage collector',
      '__str__ is called only when an exception is raised'
    ],
    correctAnswer:
      '__str__ returns a readable, user-facing string (used by print() and str()); __repr__ returns an unambiguous, developer-facing representation (used by the REPL and repr()), ideally one that could recreate the object',
    explanation:
      'If __str__ is not defined, Python falls back to __repr__. The convention is that repr(obj) should, where feasible, look like valid Python that recreates the object (e.g. "Point(x=1, y=2)"), while str(obj) can be a friendlier description for end users.',
    tags: ['str', 'repr', 'dunder-methods', 'oop']
  },

  // ─────────────────────────────────────────────
  // ADVANCED  (py-046 – py-085)
  // ─────────────────────────────────────────────

  {
    id: 'py-046',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does CPython manage memory for objects at a low level?',
    options: [
      'CPython requires manual malloc/free calls from Python code',
      'CPython uses reference counting as the primary mechanism, supplemented by a generational cyclic garbage collector to reclaim reference cycles that counting alone cannot detect',
      'CPython relies solely on the OS to reclaim memory when the process exits',
      'CPython uses a mark-and-sweep collector exclusively, with no reference counting'
    ],
    correctAnswer:
      'CPython uses reference counting as the primary mechanism, supplemented by a generational cyclic garbage collector to reclaim reference cycles that counting alone cannot detect',
    explanation:
      'Every object has a refcount incremented/decremented as references are created/destroyed; when it hits zero the object is freed immediately. Reference cycles (objects referencing each other) never reach zero refcount, so the gc module periodically scans three generations to detect and collect unreachable cycles.',
    tags: ['memory-management', 'refcounting', 'gc', 'cpython', 'internals']
  },
  {
    id: 'py-047',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What are Python metaclasses and when would you use one?',
    options: [
      'A naming convention for utility classes',
      'A class whose instances are themselves classes — by default "type" — allowing you to customise class creation itself (e.g. auto-registering subclasses, enforcing interfaces) rather than instance creation',
      'A deprecated feature from Python 2',
      'A special decorator only usable on functions'
    ],
    correctAnswer:
      'A class whose instances are themselves classes — by default "type" — allowing you to customise class creation itself (e.g. auto-registering subclasses, enforcing interfaces) rather than instance creation',
    explanation:
      'class Meta(type): def __new__(mcs, name, bases, ns): ... lets you intercept and modify a class at definition time, before it even exists as a usable class. Django\'s ORM uses a metaclass to turn class-level field declarations into a working database model. Most everyday code never needs one — as the saying goes, if you\'re not sure you need a metaclass, you don\'t.',
    tags: ['metaclasses', 'type', 'metaprogramming', 'advanced-theory']
  },
  {
    id: 'py-048',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between the __new__ and __init__ methods of a class?',
    options: [
      'They are called in the opposite order from what most developers assume',
      '__new__ is a static method responsible for creating and returning a new instance (allocating memory); __init__ receives that already-created instance and initialises its attributes',
      '__init__ is only used for immutable types; __new__ is only used for mutable types',
      'Only one of __new__ or __init__ can be defined per class, never both'
    ],
    correctAnswer:
      '__new__ is a static method responsible for creating and returning a new instance (allocating memory); __init__ receives that already-created instance and initialises its attributes',
    explanation:
      'Object construction is a two-step process: Class(...) calls __new__(cls, ...) to allocate/return an instance, then calls __init__(instance, ...) on that instance. Overriding __new__ is required for immutable types like a custom int subclass, since __init__ runs too late to change the already-frozen value.',
    tags: ['new', 'init', 'object-construction', 'oop']
  },
  {
    id: 'py-049',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does the asyncio event loop schedule and run coroutines under the hood?',
    options: [
      'It spawns a new OS thread for every coroutine',
      'A single-threaded loop repeatedly picks ready callbacks/tasks from an internal queue, runs each coroutine until it hits an await on something not yet ready, then suspends it and moves to the next ready task',
      'It uses true parallel execution across all CPU cores',
      'It relies on the operating system scheduler to interleave coroutines'
    ],
    correctAnswer:
      'A single-threaded loop repeatedly picks ready callbacks/tasks from an internal queue, runs each coroutine until it hits an await on something not yet ready, then suspends it and moves to the next ready task',
    explanation:
      'asyncio is cooperative, single-threaded concurrency. Each Task wraps a coroutine; the loop resumes a task, runs it until an await yields control (e.g. waiting on a socket via a Future), then services other ready tasks or I/O callbacks registered with the OS\'s selector (epoll/kqueue/IOCP).',
    tags: ['asyncio', 'event-loop', 'coroutines', 'internals']
  },
  {
    id: 'py-050',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Design Patterns',
    question: 'How would you implement the Observer pattern idiomatically in Python?',
    options: [
      'By polling every object for changes every second',
      'A Subject class maintains a list of observer callables/objects; on state change it iterates the list and calls each observer\'s update method (or the callable itself), decoupling the source of change from reactions to it',
      'Using only global variables shared across modules',
      'By overriding __del__ on every observed object'
    ],
    correctAnswer:
      'A Subject class maintains a list of observer callables/objects; on state change it iterates the list and calls each observer\'s update method (or the callable itself), decoupling the source of change from reactions to it',
    explanation:
      'class Subject: def __init__(self): self._observers = []; def subscribe(self, obs): self._observers.append(obs); def notify(self, *a): [o(*a) for o in self._observers]. This pattern underlies signal libraries (Django signals, blinker) and pub/sub systems.',
    tags: ['observer', 'design-patterns', 'pub-sub']
  },
  {
    id: 'py-051',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is structural pattern matching (match/case), introduced in Python 3.10?',
    options: [
      'A renamed version of if/elif chains with no new capability',
      'A control-flow construct that can destructure and match against the shape of data — sequences, mappings, class instances with specific attributes — not just equality of simple values',
      'A regular-expression matching engine built into the syntax',
      'A feature exclusive to type-checking tools, not runtime code'
    ],
    correctAnswer:
      'A control-flow construct that can destructure and match against the shape of data — sequences, mappings, class instances with specific attributes — not just equality of simple values',
    explanation:
      'match point: case Point(x=0, y=0): print("origin") destructures point matching a class pattern. case [x, y, *rest]: matches sequences and binds parts. This is genuinely more powerful than switch statements in many other languages, since patterns can bind variables and check structure simultaneously.',
    tags: ['match-case', 'pattern-matching', 'python310']
  },
  {
    id: 'py-052',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Explain how Python\'s import system caches and locates modules.',
    options: [
      'Every import re-reads and re-executes the module file from disk',
      'sys.modules caches already-imported modules by name so re-importing returns the cached object instead of re-executing the file; finders/loaders (via sys.meta_path) locate the source the first time',
      'Modules are compiled once at Python installation and never re-parsed',
      'Only the standard library is cached; third-party packages are always re-read'
    ],
    correctAnswer:
      'sys.modules caches already-imported modules by name so re-importing returns the cached object instead of re-executing the file; finders/loaders (via sys.meta_path) locate the source the first time',
    explanation:
      'The first "import foo" triggers finders to locate foo.py, compiles it (often caching bytecode in __pycache__/*.pyc), executes it once, and stores the resulting module object in sys.modules. Any later "import foo" anywhere in the program just returns that cached object — module-level code runs exactly once per process.',
    tags: ['imports', 'sys.modules', 'internals']
  },
  {
    id: 'py-053',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between deep equality checking via __eq__ and Python\'s default object identity comparison?',
    options: [
      'They always produce the same result for custom classes',
      'Without a custom __eq__, "==" falls back to object identity (same as "is"); defining __eq__ lets two distinct objects compare equal based on their field values instead',
      '__eq__ can only be defined on built-in types',
      'Defining __eq__ automatically makes objects unhashable in every case'
    ],
    correctAnswer:
      'Without a custom __eq__, "==" falls back to object identity (same as "is"); defining __eq__ lets two distinct objects compare equal based on their field values instead',
    explanation:
      'object.__eq__ defaults to identity comparison. Overriding it (e.g. comparing self.x == other.x) enables value-based equality. Note: defining __eq__ without __hash__ makes instances unhashable by default in Python 3, since a mutable, value-equal object with a stable hash could break invariants of hash-based containers.',
    tags: ['eq', 'hash', 'identity', 'dunder-methods']
  },
  {
    id: 'py-054',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you implement a thread-safe singleton in Python?',
    options: [
      'Just define a module-level instance and trust the GIL entirely with no locking',
      'Use a metaclass or class-level double-checked locking with threading.Lock around the instance-creation check, so only one thread creates the instance even under concurrent first-time access',
      'Singletons are impossible to implement safely in Python',
      'Use a global variable reassigned inside __del__'
    ],
    correctAnswer:
      'Use a metaclass or class-level double-checked locking with threading.Lock around the instance-creation check, so only one thread creates the instance even under concurrent first-time access',
    explanation:
      'class SingletonMeta(type): _instances = {}; _lock = threading.Lock(); def __call__(cls, *a, **kw): if cls not in cls._instances: with cls._lock: if cls not in cls._instances: cls._instances[cls] = super().__call__(*a, **kw); return cls._instances[cls]. The double check avoids acquiring the lock on every call after the instance exists.',
    tags: ['singleton', 'thread-safety', 'metaclass', 'coding']
  },
  {
    id: 'py-055',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What are Python coroutines vs generators used as coroutines (the old yield-based style)?',
    options: [
      'They are identical in every Python version',
      'Native coroutines (async def / await) are a dedicated language construct for asynchronous code; the older generator-based coroutines used @asyncio.coroutine and yield from, a pattern now deprecated and removed in favour of async/await',
      'Generators cannot be used for any form of cooperative concurrency',
      'Coroutines are only usable inside class methods'
    ],
    correctAnswer:
      'Native coroutines (async def / await) are a dedicated language construct for asynchronous code; the older generator-based coroutines used @asyncio.coroutine and yield from, a pattern now deprecated and removed in favour of async/await',
    explanation:
      'Before Python 3.5\'s async/await syntax, asyncio code used @asyncio.coroutine-decorated generator functions with "yield from" to delegate to sub-coroutines. This dual syntax was confusing and the legacy style was fully removed in Python 3.11 in favour of dedicated async def/await syntax.',
    tags: ['coroutines', 'generators', 'asyncio', 'history']
  },
  {
    id: 'py-056',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between concurrent.futures.ThreadPoolExecutor and ProcessPoolExecutor?',
    options: [
      'They provide identical performance characteristics for every workload',
      'ThreadPoolExecutor runs tasks in threads sharing one process/GIL — good for I/O-bound work; ProcessPoolExecutor runs tasks in separate processes with independent GILs — good for CPU-bound work, at the cost of pickling arguments/results across process boundaries',
      'ProcessPoolExecutor cannot be used for CPU-bound tasks',
      'ThreadPoolExecutor bypasses the GIL entirely'
    ],
    correctAnswer:
      'ThreadPoolExecutor runs tasks in threads sharing one process/GIL — good for I/O-bound work; ProcessPoolExecutor runs tasks in separate processes with independent GILs — good for CPU-bound work, at the cost of pickling arguments/results across process boundaries',
    explanation:
      'Both share the same submit()/map() API via the Executor interface, making them easy to swap, but the underlying execution model differs fundamentally: threads are cheap but GIL-bound for CPU work, while processes bypass the GIL but require serialising (pickling) data passed to/from workers, adding overhead for large payloads.',
    tags: ['concurrent-futures', 'threadpool', 'processpool', 'concurrency']
  },
  {
    id: 'py-057',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is a race condition and how can you prevent one when multiple threads share mutable state in Python?',
    options: [
      'Race conditions cannot occur in Python because of the GIL',
      'A race condition occurs when the outcome depends on unpredictable thread interleaving around a shared resource; even with the GIL, compound operations (like check-then-act or += on shared state) aren\'t atomic, so a threading.Lock (or other synchronisation primitive) is needed around the critical section',
      'Race conditions only occur in multiprocessing, never in threading',
      'Using more threads always eliminates race conditions'
    ],
    correctAnswer:
      'A race condition occurs when the outcome depends on unpredictable thread interleaving around a shared resource; even with the GIL, compound operations (like check-then-act or += on shared state) aren\'t atomic, so a threading.Lock (or other synchronisation primitive) is needed around the critical section',
    explanation:
      'The GIL prevents two threads from executing Python bytecode simultaneously, but it can still switch between threads mid-operation (e.g. between reading and writing a shared counter during +=1), so compound read-modify-write sequences are not automatically safe. Wrapping the critical section in a threading.Lock (or using higher-level primitives like Queue) restores correctness.',
    tags: ['race-condition', 'threading', 'locks', 'concurrency']
  },
  {
    id: 'py-058',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of the __call__ method in Python?',
    options: [
      'It is invoked automatically whenever a class is defined',
      'It lets instances of a class be invoked like a function using parentheses, e.g. instance(arg), enabling "callable objects" that carry internal state between calls',
      'It replaces the need for __init__',
      'It is only relevant for exception classes'
    ],
    correctAnswer:
      'It lets instances of a class be invoked like a function using parentheses, e.g. instance(arg), enabling "callable objects" that carry internal state between calls',
    explanation:
      'Defining __call__(self, *args) on a class means obj(x) is sugar for obj.__call__(x). This is how many decorators, memoisation caches, and stateful function-like objects (e.g. a Counter that increments each call) are built, blurring the line between objects and functions.',
    tags: ['call', 'callable', 'dunder-methods']
  },
  {
    id: 'py-059',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between eager and lazy evaluation, and how do generators enable lazy evaluation in Python?',
    options: [
      'Eager evaluation is exclusive to Python 2',
      'Eager evaluation computes a full result immediately (e.g. a list comprehension); lazy evaluation defers computation until values are actually requested, which generators achieve by pausing execution at each yield until next() is called again',
      'Generators always evaluate every value eagerly before returning',
      'Lazy evaluation is not possible in Python without third-party libraries'
    ],
    correctAnswer:
      'Eager evaluation computes a full result immediately (e.g. a list comprehension); lazy evaluation defers computation until values are actually requested, which generators achieve by pausing execution at each yield until next() is called again',
    explanation:
      'A generator function\'s body doesn\'t run at all when called — it only advances up to the next yield each time next() is invoked. This allows constructs like an infinite sequence (itertools.count()) that would be impossible to represent as an eagerly-built list.',
    tags: ['lazy-evaluation', 'generators', 'functional']
  },
  {
    id: 'py-060',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is a coroutine deadlock in asyncio, and give one common cause.',
    options: [
      'Deadlocks are impossible in asyncio because it is single-threaded',
      'A deadlock can occur when two coroutines each await a resource the other holds (e.g. two asyncio.Lock objects acquired in opposite order), leaving both suspended forever with the event loop unable to make progress on either',
      'Deadlocks in asyncio always crash the process immediately with a clear traceback',
      'Deadlocks only occur when using multiprocessing, never asyncio'
    ],
    correctAnswer:
      'A deadlock can occur when two coroutines each await a resource the other holds (e.g. two asyncio.Lock objects acquired in opposite order), leaving both suspended forever with the event loop unable to make progress on either',
    explanation:
      'Being single-threaded doesn\'t prevent deadlocks — it just changes their shape. If coroutine A holds lock1 and awaits lock2, while coroutine B holds lock2 and awaits lock1, neither can proceed and the event loop simply has no runnable task for that dependency chain, silently hanging rather than crashing.',
    tags: ['asyncio', 'deadlock', 'locks', 'concurrency']
  },
  {
    id: 'py-061',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the "Maybe"/Option-style pattern in Python and how does it compare to using None checks everywhere?',
    options: [
      'It is a built-in Python type called Maybe',
      'A pattern (often implemented with a small wrapper class or libraries like returns) that represents "a value or nothing" explicitly and forces callers to handle both cases via composition (map/bind), rather than relying on scattered "if x is not None" checks that are easy to forget',
      'It is identical to try/except and offers no benefit',
      'It eliminates the need for type hints entirely'
    ],
    correctAnswer:
      'A pattern (often implemented with a small wrapper class or libraries like returns) that represents "a value or nothing" explicitly and forces callers to handle both cases via composition (map/bind), rather than relying on scattered "if x is not None" checks that are easy to forget',
    explanation:
      'Unlike languages with a built-in Option/Maybe type, Python typically models this with Optional[T] type hints plus manual None checks, or with a small monadic wrapper class exposing .map()/.bind() that only applies a transformation if a value is present, chaining operations without repeated None-guards.',
    tags: ['maybe', 'optional', 'functional', 'advanced-theory']
  },
  {
    id: 'py-062',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does Python\'s duck typing relate to structural vs nominal typing?',
    options: [
      'Python enforces strict nominal typing like Java at runtime',
      'Python is dynamically, structurally typed at runtime — an object is usable anywhere its available methods/attributes match what is needed, regardless of its declared class; static type checkers add optional structural typing via Protocol classes',
      'Python has no concept of typing whatsoever, structural or nominal',
      'Structural typing in Python requires inheriting from a common base class'
    ],
    correctAnswer:
      'Python is dynamically, structurally typed at runtime — an object is usable anywhere its available methods/attributes match what is needed, regardless of its declared class; static type checkers add optional structural typing via Protocol classes',
    explanation:
      'At runtime, calling obj.read() doesn\'t care what class obj is — only that .read() exists. typing.Protocol lets mypy check this structurally too: a class satisfies a Protocol if it has matching methods, with no explicit inheritance required, unlike nominal typing (Java interfaces) which requires explicit "implements" declarations.',
    tags: ['duck-typing', 'protocol', 'structural-typing', 'typing']
  },
  {
    id: 'py-063',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you implement a simple LRU cache from scratch in Python without functools.lru_cache?',
    options: [
      'Using a plain list and linear search for every lookup',
      'Using collections.OrderedDict (or a dict, which preserves order since 3.7): on get, move the key to the end via move_to_end(); on insert past capacity, pop the first item with popitem(last=False)',
      'Using a set to store only the keys, discarding values',
      'Re-sorting the entire cache by timestamp on every access'
    ],
    correctAnswer:
      'Using collections.OrderedDict (or a dict, which preserves order since 3.7): on get, move the key to the end via move_to_end(); on insert past capacity, pop the first item with popitem(last=False)',
    explanation:
      'class LRUCache: def __init__(self, cap): self.cap=cap; self.data=OrderedDict(); def get(self,k): self.data.move_to_end(k); return self.data[k]; def put(self,k,v): self.data[k]=v; self.data.move_to_end(k); if len(self.data)>self.cap: self.data.popitem(last=False). All operations are O(1).',
    tags: ['lru-cache', 'ordereddict', 'data-structures', 'coding']
  },
  {
    id: 'py-064',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between weakref.ref and a normal reference in Python?',
    options: [
      'They behave identically for garbage collection purposes',
      'A normal reference keeps an object alive by incrementing its refcount; a weakref.ref points to an object without incrementing its refcount, allowing the object to be garbage-collected even while the weak reference exists (in which case calling it returns None)',
      'weakref.ref can only be used with immutable objects',
      'weakref.ref prevents an object from ever being garbage collected'
    ],
    correctAnswer:
      'A normal reference keeps an object alive by incrementing its refcount; a weakref.ref points to an object without incrementing its refcount, allowing the object to be garbage-collected even while the weak reference exists (in which case calling it returns None)',
    explanation:
      'weakref is used to build caches or observer registries that reference objects without preventing their cleanup — e.g. a cache keyed by object shouldn\'t be the reason that object never gets freed. WeakValueDictionary and WeakKeyDictionary automatically drop entries once the referenced object is collected.',
    tags: ['weakref', 'memory', 'gc', 'internals']
  },
  {
    id: 'py-065',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How would you build a simple reactive/dependency-tracking system in Python (similar to signals)?',
    options: [
      'By polling all variables in a loop for changes',
      'Wrap values in a Signal/Observable class exposing a property with a custom setter (or a descriptor); on get, register the currently executing "effect" as a dependent; on set, look up and re-run all dependents registered for that signal',
      'By using threading.Timer to periodically check for updates',
      'By storing all state in environment variables'
    ],
    correctAnswer:
      'Wrap values in a Signal/Observable class exposing a property with a custom setter (or a descriptor); on get, register the currently executing "effect" as a dependent; on set, look up and re-run all dependents registered for that signal',
    explanation:
      'A minimal signals implementation tracks a "currently running effect" in a module-level stack. Reading a Signal\'s value while an effect is running records that effect as a subscriber. Writing to the Signal looks up its subscriber set and re-invokes each one — the same core idea behind Vue 3\'s reactivity and the TC39 Signals proposal, adapted to Python\'s property/descriptor protocol.',
    tags: ['reactivity', 'signals', 'descriptors', 'advanced']
  },
  {
    id: 'py-066',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What does "function purity" mean, and why does it matter for testing and caching in Python?',
    options: [
      'A function that only accepts keyword arguments',
      'A function whose return value depends only on its inputs and which produces no observable side effects (no I/O, no mutation of external state), making it safe to memoise, test in isolation, and reason about predictably',
      'A function with no default arguments',
      'A function decorated with @staticmethod'
    ],
    correctAnswer:
      'A function whose return value depends only on its inputs and which produces no observable side effects (no I/O, no mutation of external state), making it safe to memoise, test in isolation, and reason about predictably',
    explanation:
      'Pure functions are ideal candidates for functools.lru_cache, since caching a function with side effects (like writing to a database) can silently skip those side effects on a cache hit. Pure functions are also trivial to unit test since they need no mocking of external state.',
    tags: ['purity', 'functional', 'testing', 'side-effects']
  },
  {
    id: 'py-067',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does CPython\'s small-integer caching (integer interning) work, and why can it be misleading with "is"?',
    options: [
      'CPython caches every integer ever created, no matter how large',
      'CPython pre-allocates and reuses integer objects in the range -5 to 256, so "a is b" can return True for small integers with the same value even without explicit interning, while larger integers created separately are usually distinct objects',
      'Integer caching applies only to floats, not integers',
      'Integer caching guarantees "is" is always safe to use instead of "=="'
    ],
    correctAnswer:
      'CPython pre-allocates and reuses integer objects in the range -5 to 256, so "a is b" can return True for small integers with the same value even without explicit interning, while larger integers created separately are usually distinct objects',
    explanation:
      'x = 100; y = 100; x is y is often True because both point to the same cached small-int object. x = 1000; y = 1000; x is y is typically False since each is allocated separately. This CPython implementation detail is exactly why "is" should never be used for value comparison of numbers — use "==" instead.',
    tags: ['integer-caching', 'interning', 'cpython', 'internals', 'gotcha']
  },
  {
    id: 'py-068',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of contextvars in Python and how does it differ from a plain global/thread-local variable?',
    options: [
      'contextvars are just a renamed version of global variables',
      'contextvars.ContextVar provides state that is correctly isolated per asyncio task/coroutine (and per thread), unlike threading.local which does not automatically follow the logical flow of coroutines scheduled on the same thread',
      'contextvars only work in synchronous code, never in asyncio',
      'contextvars replace the need for function parameters entirely'
    ],
    correctAnswer:
      'contextvars.ContextVar provides state that is correctly isolated per asyncio task/coroutine (and per thread), unlike threading.local which does not automatically follow the logical flow of coroutines scheduled on the same thread',
    explanation:
      'Since many coroutines can run on the same OS thread, threading.local state would be shared incorrectly across unrelated tasks. contextvars.ContextVar tracks a separate value per "context" (roughly, per task), which each asyncio.Task automatically copies at creation — used for things like request IDs or tracing context in async web frameworks.',
    tags: ['contextvars', 'asyncio', 'thread-local', 'advanced']
  },
  {
    id: 'py-069',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you implement a basic Promise-like Future from scratch in Python (conceptually)?',
    options: [
      'Using time.sleep() in a busy loop until a value appears',
      'Maintain internal state (pending/done/cancelled), a result/exception slot, and a list of registered callbacks; set_result()/set_exception() transitions state and schedules queued callbacks to run (e.g. via the event loop\'s call_soon)',
      'By subclassing int and overriding __add__',
      'By storing the result directly in a global dictionary keyed by thread id'
    ],
    correctAnswer:
      'Maintain internal state (pending/done/cancelled), a result/exception slot, and a list of registered callbacks; set_result()/set_exception() transitions state and schedules queued callbacks to run (e.g. via the event loop\'s call_soon)',
    explanation:
      'This mirrors asyncio.Future\'s real design: add_done_callback(fn) registers a callback; set_result(value) stores the value, flips state to done, and schedules each registered callback via loop.call_soon so they run on the next event-loop iteration rather than synchronously and immediately.',
    tags: ['future', 'asyncio', 'promise-implementation', 'advanced-coding']
  },
  {
    id: 'py-070',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is an Abstract Syntax Tree (AST) in the context of Python tooling?',
    options: [
      'A tree of imported package dependencies',
      'A tree data structure representing the parsed syntactic structure of Python source code, exposed via the built-in ast module and used by linters, formatters, and code-transformation tools',
      'A visualisation of the call stack during execution',
      'A cache of previously executed bytecode'
    ],
    correctAnswer:
      'A tree data structure representing the parsed syntactic structure of Python source code, exposed via the built-in ast module and used by linters, formatters, and code-transformation tools',
    explanation:
      'ast.parse(source) converts Python source into a tree of nodes (FunctionDef, Call, BinOp, etc.). Tools like Black (formatting), Bandit (security linting), and coverage.py rely on walking or transforming this tree rather than working with raw text, since the AST captures unambiguous structure.',
    tags: ['ast', 'tooling', 'compiler', 'parser']
  },
  {
    id: 'py-071',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is PEP 703 (removing the GIL) about, and what is its current status relative to Python 3.13+?',
    options: [
      'It proposes removing threading from Python entirely',
      'It proposes an optional build of CPython ("free-threaded" mode) that removes the GIL to allow true multi-core parallelism for threads, available as an experimental opt-in build starting with Python 3.13',
      'It was rejected by the Python steering council and will never be implemented',
      'It only affects Python\'s standard library, not the interpreter itself'
    ],
    correctAnswer:
      'It proposes an optional build of CPython ("free-threaded" mode) that removes the GIL to allow true multi-core parallelism for threads, available as an experimental opt-in build starting with Python 3.13',
    explanation:
      'PEP 703 was accepted, and CPython 3.13 ships an experimental "free-threaded" build (python3.13t) without the GIL, using per-object locking and biased reference counting instead. It is opt-in and still maturing (some C extensions aren\'t yet compatible), with the default build still using the GIL.',
    tags: ['gil', 'pep703', 'free-threading', 'python313']
  },
  {
    id: 'py-072',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How do you detect and prevent memory leaks in a long-running Python service?',
    options: [
      'Memory leaks are impossible in Python since it has garbage collection',
      'Use tools like tracemalloc or objgraph to take heap snapshots and find growing object counts, and look for common causes: uncollected reference cycles involving __del__, ever-growing caches/global lists, or unclosed resources holding references',
      'Restart the process every few minutes as the only fix',
      'Call gc.collect() at the start of every function'
    ],
    correctAnswer:
      'Use tools like tracemalloc or objgraph to take heap snapshots and find growing object counts, and look for common causes: uncollected reference cycles involving __del__, ever-growing caches/global lists, or unclosed resources holding references',
    explanation:
      'Reference counting handles most cleanup immediately, but common leak sources remain: reference cycles combined with objects defining __del__ (historically uncollectable before Python 3.4, now handled but can still delay cleanup), unbounded caches (use lru_cache with maxsize or WeakValueDictionary), and event listeners/subscriptions never unregistered.',
    tags: ['memory-leaks', 'tracemalloc', 'debugging', 'gc']
  },
  {
    id: 'py-073',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between CPython, PyPy, and other Python implementations?',
    options: [
      'They are all identical binaries with different names',
      'CPython (the reference implementation) compiles to bytecode run by a C-based interpreter; PyPy uses a JIT compiler that can dramatically speed up long-running pure-Python code but has different C-extension compatibility characteristics',
      'PyPy is a code editor for writing Python, not an interpreter',
      'CPython is written entirely in Python, unlike PyPy'
    ],
    correctAnswer:
      'CPython (the reference implementation) compiles to bytecode run by a C-based interpreter; PyPy uses a JIT compiler that can dramatically speed up long-running pure-Python code but has different C-extension compatibility characteristics',
    explanation:
      'CPython is written in C and is the default, most widely compatible implementation. PyPy is written largely in RPython and uses tracing JIT compilation, often giving large speedups for CPU-bound pure-Python loops, but historically has had partial/slower support for C-extension-heavy libraries like some NumPy workloads (improving over time via HPy/cpyext).',
    tags: ['cpython', 'pypy', 'implementations', 'jit']
  },
  {
    id: 'py-074',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What are Python\'s buffer protocol and memoryview used for?',
    options: [
      'They are only relevant to text encoding/decoding',
      'They allow different objects (bytes, bytearray, NumPy arrays) to expose their underlying memory directly without copying, letting memoryview create a "view" over that memory for efficient slicing and manipulation',
      'They automatically compress data stored in memory',
      'They provide a way to serialize objects to disk'
    ],
    correctAnswer:
      'They allow different objects (bytes, bytearray, NumPy arrays) to expose their underlying memory directly without copying, letting memoryview create a "view" over that memory for efficient slicing and manipulation',
    explanation:
      'memoryview(some_bytearray)[2:5] creates a lightweight view referencing the same underlying buffer instead of allocating a new copied slice, which matters a lot for performance when handling large binary buffers (e.g. socket data, image bytes) repeatedly.',
    tags: ['buffer-protocol', 'memoryview', 'performance', 'bytes']
  },
  {
    id: 'py-075',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between "is not None" checks and truthiness checks (if not x:) when validating function inputs?',
    options: [
      'They behave identically for every possible input value',
      '"if x is None" checks specifically for the None object; "if not x" is also True for other falsy values like 0, "", [], and False, so using "not x" to check for a missing argument can incorrectly reject valid falsy inputs like 0 or an empty list',
      '"if not x" only evaluates to True for None',
      'Both forms only work correctly with boolean arguments'
    ],
    correctAnswer:
      '"if x is None" checks specifically for the None object; "if not x" is also True for other falsy values like 0, "", [], and False, so using "not x" to check for a missing argument can incorrectly reject valid falsy inputs like 0 or an empty list',
    explanation:
      'A function that does "if not count: count = default" will incorrectly override a legitimately passed count=0. Using "if count is None: count = default" is the precise way to detect "argument was omitted" without conflating it with other falsy-but-valid values.',
    tags: ['truthiness', 'none', 'gotcha', 'best-practices']
  },
  {
    id: 'py-076',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you implement a decorator that accepts its own arguments, e.g. @retry(times=3)?',
    options: [
      'Decorators cannot accept arguments in Python',
      'Write a function retry(times) that returns the actual decorator, which itself returns a wrapper function — three nested levels: the argument-taking outer function, the decorator, and the wrapped function',
      'Pass the arguments directly as global variables instead',
      'Use @retry(times=3) exactly like a normal decorator with no extra nesting required'
    ],
    correctAnswer:
      'Write a function retry(times) that returns the actual decorator, which itself returns a wrapper function — three nested levels: the argument-taking outer function, the decorator, and the wrapped function',
    explanation:
      'def retry(times): def decorator(func): def wrapper(*a, **kw): for _ in range(times): try: return func(*a, **kw) except Exception: pass; return wrapper; return decorator. @retry(times=3) first calls retry(3), which returns "decorator", which is then applied to the target function as usual.',
    tags: ['decorators', 'closures', 'coding', 'advanced']
  },
  {
    id: 'py-077',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is variable shadowing across nested scopes, and how does the "nonlocal" keyword relate to it?',
    options: [
      'nonlocal makes a variable globally accessible from anywhere in the program',
      'Shadowing happens when an inner scope defines a name that hides an outer scope\'s variable of the same name; "nonlocal" explicitly tells Python that an assignment inside a nested function should modify the enclosing (non-global) function\'s variable instead of creating a new local one',
      'nonlocal and global are exact synonyms',
      'Shadowing is a syntax error in Python'
    ],
    correctAnswer:
      'Shadowing happens when an inner scope defines a name that hides an outer scope\'s variable of the same name; "nonlocal" explicitly tells Python that an assignment inside a nested function should modify the enclosing (non-global) function\'s variable instead of creating a new local one',
    explanation:
      'Without nonlocal, assigning to a name inside a nested function creates a new local variable in that nested scope, shadowing the outer one, rather than modifying it. def outer(): x = 1; def inner(): nonlocal x; x += 1; makes inner\'s assignment update outer\'s x, which is essential for stateful closures like counters.',
    tags: ['nonlocal', 'scope', 'closures', 'shadowing']
  },
  {
    id: 'py-078',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does Python represent large integers, and how does that differ from fixed-width integer types in languages like C or Java?',
    options: [
      'Python integers are fixed at 64 bits, identical to a Java long',
      'Python\'s int type has arbitrary precision — it automatically grows to represent numbers of any size limited only by available memory, unlike fixed-width types that silently overflow or wrap around at a maximum value',
      'Python integers overflow silently past 2^31 - 1, just like a 32-bit signed int',
      'Python has no integer type; all numbers are stored as floats'
    ],
    correctAnswer:
      'Python\'s int type has arbitrary precision — it automatically grows to represent numbers of any size limited only by available memory, unlike fixed-width types that silently overflow or wrap around at a maximum value',
    explanation:
      '2**1000 in Python just works and returns the exact, very large integer, whereas the same computation in a fixed-width 64-bit integer type would overflow. This convenience comes at a performance cost for very large numbers compared to fixed-width arithmetic, since CPython represents large ints as arrays of digits internally.',
    tags: ['int', 'arbitrary-precision', 'internals', 'numbers']
  },
  {
    id: 'py-079',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the Python Enhancement Proposal (PEP) process, and roughly how does it work?',
    options: [
      'PEPs are informal blog posts with no official standing',
      'PEPs are formal design documents proposing new features or standards for Python; they go through discussion and review (often via python-dev/discuss.python.org) and a status like Draft, Accepted, or Rejected, ultimately requiring sign-off (historically the BDFL, now the Python Steering Council)',
      'PEPs are exclusively used for documenting bug fixes, never new features',
      'Anyone can merge a PEP directly into CPython without review'
    ],
    correctAnswer:
      'PEPs are formal design documents proposing new features or standards for Python; they go through discussion and review (often via python-dev/discuss.python.org) and a status like Draft, Accepted, or Rejected, ultimately requiring sign-off (historically the BDFL, now the Python Steering Council)',
    explanation:
      'Notable PEPs include PEP 8 (style guide), PEP 484 (type hints), PEP 572 (walrus operator), and PEP 703 (no-GIL builds). Since Guido van Rossum stepped down as BDFL in 2018, the Python Steering Council (an elected body) now makes final decisions on contested PEPs.',
    tags: ['pep', 'governance', 'python-community']
  },
  {
    id: 'py-080',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How would you profile a Python function to find the actual performance bottleneck before optimising it?',
    options: [
      'Guess which line is slow based on visual inspection alone',
      'Use cProfile (or py-spy for production) to get call counts and cumulative time per function, then drill into hotspots with line_profiler for line-by-line timing before making optimisation decisions',
      'Add print(time.time()) statements everywhere and never remove them',
      'Assume all loops are equally slow and rewrite everything in C'
    ],
    correctAnswer:
      'Use cProfile (or py-spy for production) to get call counts and cumulative time per function, then drill into hotspots with line_profiler for line-by-line timing before making optimisation decisions',
    explanation:
      'python -m cProfile -s cumulative script.py ranks functions by total time spent, revealing the real bottleneck (often not where intuition suggests). line_profiler then shows exact line-level costs within a suspect function. py-spy can sample a running production process without modifying code, useful when you can\'t restart the service.',
    tags: ['profiling', 'cprofile', 'performance', 'optimisation']
  },
  {
    id: 'py-081',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'Implement a type-safe generic Stack class using Python\'s typing.Generic.',
    options: [
      'Using a plain list with no type parameter at all',
      'class Stack(Generic[T]): def __init__(self): self._items: list[T] = []; def push(self, item: T) -> None: ...; def pop(self) -> T: ... — the type checker then enforces consistent element types wherever Stack[int] or Stack[str] is used',
      'By subclassing dict instead of using Generic',
      'typing.Generic cannot be combined with custom classes'
    ],
    correctAnswer:
      'class Stack(Generic[T]): def __init__(self): self._items: list[T] = []; def push(self, item: T) -> None: ...; def pop(self) -> T: ... — the type checker then enforces consistent element types wherever Stack[int] or Stack[str] is used',
    explanation:
      'T = TypeVar("T"); class Stack(Generic[T]): ... lets mypy/pyright verify that a Stack[int] never receives a push("text") call, catching type errors statically. At runtime Python still doesn\'t enforce this — Generic exists purely for static analysis and IDE support.',
    tags: ['generics', 'typing', 'type-safety', 'advanced']
  },
  {
    id: 'py-082',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is a common security risk with using eval() or exec() on user-provided input, and how is it typically mitigated?',
    options: [
      'There is no risk since Python sandboxes eval() by default',
      'eval()/exec() execute arbitrary Python code, so untrusted input can run malicious code, access the filesystem, or exfiltrate data; mitigation is to avoid them entirely for untrusted input and use safer alternatives like ast.literal_eval() for parsing literals',
      'The risk only applies to exec(), never to eval()',
      'Restricting globals={} passed to eval() makes it fully safe against any attack'
    ],
    correctAnswer:
      'eval()/exec() execute arbitrary Python code, so untrusted input can run malicious code, access the filesystem, or exfiltrate data; mitigation is to avoid them entirely for untrusted input and use safer alternatives like ast.literal_eval() for parsing literals',
    explanation:
      'eval("__import__(\'os\').system(\'rm -rf /\')") shows the danger plainly. ast.literal_eval() only parses Python literals (numbers, strings, tuples, lists, dicts, booleans, None) and safely rejects arbitrary code, making it the correct tool when you just need to parse a literal from a string.',
    tags: ['eval', 'exec', 'security', 'code-injection']
  },
  {
    id: 'py-083',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does Cython (or writing C extensions) help speed up Python code, and what is the trade-off?',
    options: [
      'It automatically parallelises any Python function with no code changes',
      'Cython compiles Python-like code (optionally with static C type declarations) into C, then into a native extension module, bypassing Python\'s dynamic-dispatch overhead for hot loops — at the cost of a build step and reduced portability/readability compared to pure Python',
      'It replaces the need for the GIL entirely with no other changes',
      'Cython only works for machine-learning code, not general-purpose scripts'
    ],
    correctAnswer:
      'Cython compiles Python-like code (optionally with static C type declarations) into C, then into a native extension module, bypassing Python\'s dynamic-dispatch overhead for hot loops — at the cost of a build step and reduced portability/readability compared to pure Python',
    explanation:
      'Annotating a tight numeric loop with cdef int i can produce order-of-magnitude speedups by avoiding Python\'s per-operation type checks and boxing. The trade-off is added build complexity (a .pyx file compiled ahead of time) and losing some of Python\'s dynamic flexibility in the annotated sections.',
    tags: ['cython', 'c-extensions', 'performance', 'compilation']
  },
  {
    id: 'py-084',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between "shallow" immutability of a tuple and true deep immutability?',
    options: [
      'Tuples are always fully immutable at every level, no exceptions',
      'A tuple itself cannot be reassigned or resized, but if it contains a mutable object like a list, that inner list can still be mutated in place — so the tuple is only shallowly immutable',
      'Tuples cannot contain any mutable objects as elements',
      'Deep immutability is automatically enforced for every container type in Python'
    ],
    correctAnswer:
      'A tuple itself cannot be reassigned or resized, but if it contains a mutable object like a list, that inner list can still be mutated in place — so the tuple is only shallowly immutable',
    explanation:
      't = (1, [2, 3]); t[1].append(4) succeeds and changes t to (1, [2, 3, 4]) even though t[1] = something_else would raise a TypeError. True deep immutability would require every nested structure to also be immutable, e.g. nested tuples/frozensets instead of lists/dicts.',
    tags: ['tuple', 'immutability', 'gotcha']
  },
  {
    id: 'py-085',
    topic: 'python',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between == comparison chaining (a < b < c) and how Python evaluates it internally?',
    options: [
      'Python evaluates it as (a < b) < c, comparing a boolean to c',
      'Python evaluates chained comparisons as "a < b and b < c", evaluating "b" only once, short-circuiting to False as soon as one comparison fails, rather than literally comparing the boolean result of the first expression against c',
      'Chained comparisons are a syntax error in Python',
      'Chained comparisons always evaluate every operand regardless of intermediate results'
    ],
    correctAnswer:
      'Python evaluates chained comparisons as "a < b and b < c", evaluating "b" only once, short-circuiting to False as soon as one comparison fails, rather than literally comparing the boolean result of the first expression against c',
    explanation:
      '1 < 2 < 3 is True because Python special-cases chained comparisons into an implicit "and", not because (1 < 2) (which is True, i.e. 1) is compared against 3. This differs from languages without native comparison chaining, where a < b < c would literally compare a boolean against c.',
    tags: ['comparison-chaining', 'operators', 'spec', 'gotcha']
  },

  // ─────────────────────────────────────────────
  // MNC LEVEL  (py-086 – py-120)
  // ─────────────────────────────────────────────

  {
    id: 'py-086',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a rate limiter for a Python-based API service?',
    options: [
      'Use a global counter that resets only when the process restarts',
      'Implement a token bucket or sliding-window-log algorithm backed by Redis (using INCR + EXPIRE or a sorted set), so limits are enforced consistently across multiple API server instances',
      'Check the current time.time() and block requests with a Python-level time.sleep() call',
      'Rely entirely on the client to self-limit its own request rate'
    ],
    correctAnswer:
      'Implement a token bucket or sliding-window-log algorithm backed by Redis (using INCR + EXPIRE or a sorted set), so limits are enforced consistently across multiple API server instances',
    explanation:
      'A single-process in-memory counter breaks the moment you scale to multiple server instances behind a load balancer, since each instance would track limits independently. A shared store like Redis lets a token-bucket (smooth) or sliding-window-log (precise) algorithm enforce a global limit per user/API key across all instances.',
    tags: ['rate-limiting', 'redis', 'system-design', 'distributed-systems']
  },
  {
    id: 'py-087',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you architect a Python backend service for horizontal scalability?',
    options: [
      'Keep all session and application state in local process memory',
      'Design the application to be stateless (session/state in a shared store like Redis or a database), use a load balancer in front of multiple worker processes, and externalise background work to a task queue (Celery/RQ) so any instance can pick up any request',
      'Use a single very large monolithic process with more threads',
      'Store uploaded files directly on each server\'s local disk'
    ],
    correctAnswer:
      'Design the application to be stateless (session/state in a shared store like Redis or a database), use a load balancer in front of multiple worker processes, and externalise background work to a task queue (Celery/RQ) so any instance can pick up any request',
    explanation:
      'Horizontal scaling requires that any instance can serve any request, which means no per-instance in-memory state that another instance can\'t see. Common Python patterns: Gunicorn/Uvicorn workers behind a load balancer, session data in Redis, file uploads to object storage (S3), and Celery workers pulling from a shared broker (RabbitMQ/Redis) for async jobs.',
    tags: ['scalability', 'stateless', 'celery', 'architecture', 'mnc']
  },
  {
    id: 'py-088',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you optimise a Python service that is CPU-bound and running slower than expected in production?',
    options: [
      'Immediately rewrite the entire codebase in another language',
      'Profile first (cProfile/py-spy) to confirm the actual bottleneck, then consider vectorising with NumPy, offloading hot loops to Cython/Rust extensions, or using multiprocessing to parallelise across cores — since threading alone won\'t help CPU-bound work due to the GIL',
      'Add more threading.Thread objects, which always scales CPU-bound work linearly',
      'Reduce the number of CPU cores available to force better scheduling'
    ],
    correctAnswer:
      'Profile first (cProfile/py-spy) to confirm the actual bottleneck, then consider vectorising with NumPy, offloading hot loops to Cython/Rust extensions, or using multiprocessing to parallelise across cores — since threading alone won\'t help CPU-bound work due to the GIL',
    explanation:
      'Because of the GIL, adding threads to CPU-bound Python code does not achieve real parallelism. Effective strategies: vectorised NumPy operations release the GIL internally and use optimised C loops; Cython/Rust (via PyO3) extensions bypass interpreter overhead; multiprocessing.Pool spreads work across separate processes/cores.',
    tags: ['performance', 'gil', 'multiprocessing', 'numpy', 'mnc']
  },
  {
    id: 'py-089',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design an idempotent API endpoint in a Python web service (e.g. for payment processing)?',
    options: [
      'Rely on the client to never send the same request twice',
      'Require an idempotency key from the client, store processed keys (with their result) in a database or Redis with a TTL, and short-circuit repeat requests with the same key by returning the stored result instead of reprocessing',
      'Use a random UUID generated server-side for every request',
      'Simply retry failed requests without any deduplication logic'
    ],
    correctAnswer:
      'Require an idempotency key from the client, store processed keys (with their result) in a database or Redis with a TTL, and short-circuit repeat requests with the same key by returning the stored result instead of reprocessing',
    explanation:
      'On receiving a request with an Idempotency-Key header, the server checks a store for that key. If found, it returns the previously computed response without re-executing the operation (critical for payments, where retries after network timeouts must not double-charge). If not found, it processes the request and atomically stores the key + result together with the state change.',
    tags: ['idempotency', 'api-design', 'payments', 'system-design', 'mnc']
  },
  {
    id: 'py-090',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a distributed task queue system using Python (like Celery)?',
    options: [
      'Run background jobs directly inside the request-handling process',
      'Use a message broker (RabbitMQ/Redis) to queue task messages, worker processes that pull and execute tasks independently of the web server, a result backend to store outcomes, and retry/dead-letter-queue handling for failures',
      'Use cron jobs exclusively with no queue at all',
      'Store pending tasks only in each worker\'s local memory'
    ],
    correctAnswer:
      'Use a message broker (RabbitMQ/Redis) to queue task messages, worker processes that pull and execute tasks independently of the web server, a result backend to store outcomes, and retry/dead-letter-queue handling for failures',
    explanation:
      'Celery\'s architecture: producers (your web app) publish task messages to a broker; independently scalable worker processes consume and execute them; a result backend (Redis/DB) stores outcomes for later retrieval; failed tasks can be retried with backoff or routed to a dead-letter queue for manual inspection.',
    tags: ['celery', 'task-queue', 'message-broker', 'distributed-systems', 'mnc']
  },
  {
    id: 'py-091',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you implement a resilient HTTP client wrapper with retries, timeouts, and a circuit breaker in Python?',
    options: [
      'Call requests.get() directly with no error handling',
      'Wrap requests/httpx calls with an explicit timeout, exponential backoff with jitter for transient errors (e.g. via tenacity), and a circuit-breaker state machine (closed/open/half-open) that stops sending requests to a failing dependency for a cooldown period',
      'Retry indefinitely in a tight loop until the request succeeds',
      'Catch all exceptions and always return a default value silently'
    ],
    correctAnswer:
      'Wrap requests/httpx calls with an explicit timeout, exponential backoff with jitter for transient errors (e.g. via tenacity), and a circuit-breaker state machine (closed/open/half-open) that stops sending requests to a failing dependency for a cooldown period',
    explanation:
      'requests.get(url, timeout=5) prevents hanging forever. @tenacity.retry(wait=wait_exponential(), stop=stop_after_attempt(3)) handles transient failures. A circuit breaker (e.g. via pybreaker) opens after repeated failures, immediately failing fast for a cooldown window instead of hammering an already-struggling downstream service, then probes with a half-open state before fully closing again.',
    tags: ['resilience', 'circuit-breaker', 'retry', 'http-client', 'mnc', 'coding']
  },
  {
    id: 'py-092',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a data validation and serialisation layer for a Python API (e.g. with FastAPI)?',
    options: [
      'Manually check each field with isinstance() calls scattered throughout view functions',
      'Use pydantic models to declaratively define expected request/response shapes with types and validators, automatically generating clear validation errors and OpenAPI schema documentation from a single source of truth',
      'Accept any input and let downstream code fail naturally if it is wrong',
      'Validate input only on the client side and trust the server-side data implicitly'
    ],
    correctAnswer:
      'Use pydantic models to declaratively define expected request/response shapes with types and validators, automatically generating clear validation errors and OpenAPI schema documentation from a single source of truth',
    explanation:
      'class UserIn(BaseModel): name: str; age: int = Field(gt=0) declares the shape once. FastAPI uses this model both to validate incoming JSON (rejecting malformed input with a structured 422 error) and to auto-generate OpenAPI/Swagger docs, avoiding validation-logic duplication between code and documentation.',
    tags: ['pydantic', 'fastapi', 'validation', 'api-design', 'mnc']
  },
  {
    id: 'py-093',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'How would you securely handle secrets (API keys, DB passwords) in a Python application deployed to production?',
    options: [
      'Hardcode secrets directly in the source code for simplicity',
      'Load secrets at runtime from a dedicated secrets manager (AWS Secrets Manager, HashiCorp Vault) or environment variables injected by the deployment platform, never commit them to version control, and rotate them periodically',
      'Store secrets in a plain-text config.py file committed to the repository',
      'Email secrets to team members as needed'
    ],
    correctAnswer:
      'Load secrets at runtime from a dedicated secrets manager (AWS Secrets Manager, HashiCorp Vault) or environment variables injected by the deployment platform, never commit them to version control, and rotate them periodically',
    explanation:
      'os.environ.get("DB_PASSWORD") reads a secret injected by the platform at deploy time rather than baking it into source. For more sensitive or frequently-rotated secrets, a secrets manager provides audit logging, automatic rotation, and fine-grained access control that a static .env file cannot. python-dotenv is fine for local development but should never be the production secret source.',
    tags: ['secrets-management', 'security', 'environment-variables', 'mnc']
  },
  {
    id: 'py-094',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you diagnose and fix an N+1 query problem in a Python ORM (e.g. Django or SQLAlchemy)?',
    options: [
      'N+1 queries are unavoidable and cannot be fixed',
      'Detect it via query logging or an APM tool showing one query per loop iteration, then fix it with eager loading — Django\'s select_related/prefetch_related or SQLAlchemy\'s joinedload/selectinload — to fetch related data in a constant number of queries',
      'Add an index to every column in the database as the universal fix',
      'Switch to raw SQL for every single query in the application'
    ],
    correctAnswer:
      'Detect it via query logging or an APM tool showing one query per loop iteration, then fix it with eager loading — Django\'s select_related/prefetch_related or SQLAlchemy\'s joinedload/selectinload — to fetch related data in a constant number of queries',
    explanation:
      'for order in Order.objects.all(): print(order.customer.name) triggers one extra query per order to fetch each customer. Order.objects.select_related("customer") performs a single SQL JOIN upfront instead. Query-count assertions in tests (django-debug-toolbar, SQLAlchemy\'s event listeners) help catch regressions early.',
    tags: ['n+1-queries', 'orm', 'django', 'sqlalchemy', 'performance', 'mnc']
  },
  {
    id: 'py-095',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a caching layer for a high-traffic Python web application?',
    options: [
      'Cache every database query indefinitely with no expiration',
      'Layer caching: in-process memoisation for pure, cheap-to-recompute functions; a shared cache (Redis/Memcached) for cross-instance data with sensible TTLs; cache invalidation on writes; and cache-aside or write-through strategies depending on consistency needs',
      'Disable caching entirely to guarantee always-fresh data',
      'Cache only static assets, never dynamic data'
    ],
    correctAnswer:
      'Layer caching: in-process memoisation for pure, cheap-to-recompute functions; a shared cache (Redis/Memcached) for cross-instance data with sensible TTLs; cache invalidation on writes; and cache-aside or write-through strategies depending on consistency needs',
    explanation:
      'Cache-aside: read from cache, on miss read the DB and populate the cache; on write, invalidate or update the cache entry. Write-through: writes go to the cache and DB together, keeping them in sync but adding write latency. TTLs bound staleness even if invalidation logic misses an edge case — a defence-in-depth measure against stale data bugs.',
    tags: ['caching', 'redis', 'cache-invalidation', 'system-design', 'mnc']
  },
  {
    id: 'py-096',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you build a reliable data pipeline in Python for ETL (Extract, Transform, Load) at scale?',
    options: [
      'Write a single monolithic script with no checkpointing or retries',
      'Use an orchestrator (Airflow/Prefect/Dagster) to define tasks as a DAG with dependencies, add checkpointing/idempotent tasks so reruns don\'t duplicate data, chunk large extracts to bound memory, and add monitoring/alerting on task failures',
      'Load the entire dataset into memory in one pandas DataFrame regardless of size',
      'Manually run the pipeline by hand whenever new data needs processing'
    ],
    correctAnswer:
      'Use an orchestrator (Airflow/Prefect/Dagster) to define tasks as a DAG with dependencies, add checkpointing/idempotent tasks so reruns don\'t duplicate data, chunk large extracts to bound memory, and add monitoring/alerting on task failures',
    explanation:
      'Production ETL needs: dependency-aware scheduling (Airflow DAGs) so tasks run in correct order and can be individually retried; idempotent transform/load steps so a rerun after a partial failure doesn\'t double-insert rows; chunked/streamed processing for datasets larger than memory; and alerting when a DAG run fails so it doesn\'t silently stop updating downstream data.',
    tags: ['etl', 'airflow', 'data-pipeline', 'orchestration', 'mnc']
  },
  {
    id: 'py-097',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement graceful shutdown for a long-running Python service (e.g. a Kubernetes pod receiving SIGTERM)?',
    options: [
      'Ignore termination signals entirely and let the process be killed abruptly',
      'Register a signal handler for SIGTERM that flips a "shutting down" flag, stop accepting new work, wait for in-flight requests/tasks to finish (up to a grace period), then exit cleanly, closing DB connections and flushing buffers',
      'Call os._exit(0) immediately on receiving any signal',
      'Rely on the container orchestrator to guarantee no requests are in flight when SIGTERM is sent'
    ],
    correctAnswer:
      'Register a signal handler for SIGTERM that flips a "shutting down" flag, stop accepting new work, wait for in-flight requests/tasks to finish (up to a grace period), then exit cleanly, closing DB connections and flushing buffers',
    explanation:
      'signal.signal(signal.SIGTERM, handler) lets the app react to Kubernetes\'s termination signal instead of being killed abruptly by SIGKILL after the grace period. A well-behaved shutdown: stop the readiness probe (so no new traffic routes in), let existing requests complete, close connection pools, flush any buffered metrics/logs, then exit(0).',
    tags: ['graceful-shutdown', 'signals', 'kubernetes', 'reliability', 'mnc']
  },
  {
    id: 'py-098',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you implement a bounded, thread-safe producer-consumer pipeline in Python?',
    options: [
      'Use a plain list shared between threads with no synchronisation',
      'Use queue.Queue(maxsize=N), which is already thread-safe: producers call put() (blocking if full), consumers call get() (blocking if empty), naturally providing back-pressure without manual locks',
      'Use a global dict and manual polling with time.sleep()',
      'Spawn a new thread for every single item produced, with no shared queue at all'
    ],
    correctAnswer:
      'Use queue.Queue(maxsize=N), which is already thread-safe: producers call put() (blocking if full), consumers call get() (blocking if empty), naturally providing back-pressure without manual locks',
    explanation:
      'queue.Queue internally uses a lock and condition variables, so multiple producer/consumer threads can safely put()/get() without you writing your own synchronisation. Setting maxsize bounds memory usage and creates natural back-pressure: producers block once the queue is full, preventing runaway memory growth if consumers fall behind.',
    tags: ['producer-consumer', 'queue', 'thread-safety', 'concurrency', 'mnc', 'coding']
  },
  {
    id: 'py-099',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a multi-tenant Python SaaS backend to isolate customer data?',
    options: [
      'Store all tenants\' data in one shared table with no tenant identifier',
      'Choose an isolation strategy appropriate to scale/compliance needs — separate databases per tenant, separate schemas, or a shared schema with a mandatory tenant_id column enforced at the ORM/query layer (and row-level security where supported) — and ensure every query is scoped by tenant',
      'Rely on the frontend to only display the correct tenant\'s data',
      'Give every tenant admin access to the full underlying database'
    ],
    correctAnswer:
      'Choose an isolation strategy appropriate to scale/compliance needs — separate databases per tenant, separate schemas, or a shared schema with a mandatory tenant_id column enforced at the ORM/query layer (and row-level security where supported) — and ensure every query is scoped by tenant',
    explanation:
      'Separate databases/schemas give the strongest isolation (good for compliance-heavy customers) but are operationally heavier at scale. A shared schema with tenant_id is cheaper to operate but requires rigorous enforcement — a middleware or ORM-level default filter that automatically scopes every query by the current tenant to prevent one customer ever seeing another\'s data, backed by database row-level security as defence in depth.',
    tags: ['multi-tenancy', 'data-isolation', 'saas', 'system-design', 'mnc']
  },
  {
    id: 'py-100',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you profile and optimise memory usage of a Python service processing large datasets?',
    options: [
      'Load the entire dataset into a list and hope it fits in RAM',
      'Use tracemalloc/memory_profiler to find high-allocation hotspots, prefer generators/streaming iteration over materialising full lists, use __slots__ or more compact data structures (arrays, NumPy) for large homogeneous collections, and process data in bounded chunks',
      'Increase server RAM indefinitely instead of investigating the code',
      'Convert all data to strings, since strings use the least memory in Python'
    ],
    correctAnswer:
      'Use tracemalloc/memory_profiler to find high-allocation hotspots, prefer generators/streaming iteration over materialising full lists, use __slots__ or more compact data structures (arrays, NumPy) for large homogeneous collections, and process data in bounded chunks',
    explanation:
      'A plain Python list of millions of dicts is memory-heavy due to per-object overhead. Streaming with generators, using __slots__ on custom record classes, or switching to columnar/NumPy arrays for numeric data can cut memory usage substantially. tracemalloc.take_snapshot() comparisons pinpoint exactly which allocations grew between two points in execution.',
    tags: ['memory-profiling', 'optimisation', 'large-data', 'performance', 'mnc']
  },
  {
    id: 'py-101',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a client-side (SDK-level) feature flag system for a Python backend service?',
    options: [
      'Hardcode boolean constants and redeploy for every flag change',
      'Fetch flag configuration from a remote service or config store, cache it locally with a refresh interval, expose an is_enabled(flag_key, context) API supporting percentage rollouts (deterministic hashing of a stable user id) and per-user/segment overrides',
      'Store flags only in environment variables requiring a full restart to change',
      'Use a single global variable toggled manually in production via SSH'
    ],
    correctAnswer:
      'Fetch flag configuration from a remote service or config store, cache it locally with a refresh interval, expose an is_enabled(flag_key, context) API supporting percentage rollouts (deterministic hashing of a stable user id) and per-user/segment overrides',
    explanation:
      'A production flag SDK periodically polls (or subscribes via webhook/streaming) a config service, caches results locally to avoid a network round-trip per check, and computes rollout membership deterministically — hash(user_id + flag_key) % 100 < percentage — so the same user consistently gets the same flag state across requests.',
    tags: ['feature-flags', 'system-design', 'architecture', 'mnc']
  },
  {
    id: 'py-102',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design comprehensive observability (logging, metrics, tracing) for a distributed Python microservices system?',
    options: [
      'Rely solely on print() statements shipped to stdout',
      'Use structured logging (JSON logs with a correlation/trace ID), emit metrics (Prometheus client) for latency/error-rate/throughput, and instrument requests with distributed tracing (OpenTelemetry) so a single request can be followed across service boundaries',
      'Only log errors, never successful requests, to save disk space',
      'Manually correlate logs across services by matching timestamps'
    ],
    correctAnswer:
      'Use structured logging (JSON logs with a correlation/trace ID), emit metrics (Prometheus client) for latency/error-rate/throughput, and instrument requests with distributed tracing (OpenTelemetry) so a single request can be followed across service boundaries',
    explanation:
      'The three pillars of observability: structured logs (queryable JSON, not free text) tagged with a trace_id propagated across service calls; metrics (via prometheus_client) exposed for dashboards and alerting on SLOs; and distributed tracing (OpenTelemetry spans) that reconstructs the full path and latency breakdown of a request across many microservices.',
    tags: ['observability', 'opentelemetry', 'logging', 'metrics', 'tracing', 'mnc']
  },
  {
    id: 'py-103',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'How would you prevent SQL injection in a Python application that queries a database?',
    options: [
      'Manually escape quotes in user input with string replace calls',
      'Always use parameterised queries/prepared statements (via the DB-API\'s cursor.execute(query, params) or an ORM), never build SQL by concatenating or formatting raw user input into the query string',
      'Validate that user input contains only letters before using string formatting for the query',
      'Rely on a web application firewall as the only line of defence'
    ],
    correctAnswer:
      'Always use parameterised queries/prepared statements (via the DB-API\'s cursor.execute(query, params) or an ORM), never build SQL by concatenating or formatting raw user input into the query string',
    explanation:
      'cursor.execute("SELECT * FROM users WHERE name = %s", (name,)) sends the value separately from the SQL structure, so the database never interprets it as executable SQL syntax — this is the definitive fix, not an additional layer. f"SELECT * FROM users WHERE name = \'{name}\'" is vulnerable regardless of how carefully you try to sanitise the string yourself.',
    tags: ['sql-injection', 'security', 'parameterised-queries', 'mnc']
  },
  {
    id: 'py-104',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a reliable webhook delivery system in Python for a SaaS platform?',
    options: [
      'Send the webhook synchronously in the request that triggered the event, with no retries',
      'Enqueue webhook deliveries as background tasks, sign payloads (HMAC) so receivers can verify authenticity, retry with exponential backoff on failure, and track delivery status with a dead-letter mechanism after exhausting retries',
      'Send every webhook exactly once with no way to verify authenticity or handle failures',
      'Require the receiving service to poll your API instead of using webhooks at all'
    ],
    correctAnswer:
      'Enqueue webhook deliveries as background tasks, sign payloads (HMAC) so receivers can verify authenticity, retry with exponential backoff on failure, and track delivery status with a dead-letter mechanism after exhausting retries',
    explanation:
      'Sending webhooks inline with the triggering request couples your API\'s latency/reliability to a third party\'s endpoint. Queuing delivery (Celery task) decouples this. HMAC-SHA256 signing the payload with a shared secret lets receivers verify the request truly came from you. Retries with backoff (and a visible delivery log/dead-letter queue) handle the receiver being temporarily down.',
    tags: ['webhooks', 'hmac', 'reliability', 'system-design', 'mnc']
  },
  {
    id: 'py-105',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you scale a Django or FastAPI application to handle a sudden 10x spike in traffic?',
    options: [
      'Manually restart the server whenever it seems slow',
      'Combine horizontal autoscaling of stateless app instances behind a load balancer, connection pooling to the database, aggressive caching of expensive/read-heavy endpoints, and shedding or queueing non-critical work under load',
      'Increase the number of database connections without bound',
      'Switch the entire application to a different programming language mid-incident'
    ],
    correctAnswer:
      'Combine horizontal autoscaling of stateless app instances behind a load balancer, connection pooling to the database, aggressive caching of expensive/read-heavy endpoints, and shedding or queueing non-critical work under load',
    explanation:
      'Autoscaling adds instances as load increases, but only helps if the app is stateless and the database isn\'t the bottleneck — connection pooling (pgbouncer, SQLAlchemy pool) prevents exhausting DB connections as instance count grows. Caching read-heavy endpoints (Redis) reduces DB load per request. Under extreme load, gracefully shedding low-priority requests (returning 503 with Retry-After) protects core functionality rather than letting everything degrade uniformly.',
    tags: ['scalability', 'autoscaling', 'load-balancing', 'performance', 'mnc']
  },
  {
    id: 'py-106',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement role-based access control (RBAC) in a Python web API?',
    options: [
      'Check the user\'s role with an if statement copy-pasted into every view function',
      'Define roles and permissions centrally, attach required permissions to routes/views via a decorator or middleware that checks the authenticated user\'s roles against them, and enforce it server-side for every request regardless of what the client UI shows',
      'Trust a role field sent by the client in the request body',
      'Store permission checks only in the frontend JavaScript'
    ],
    correctAnswer:
      'Define roles and permissions centrally, attach required permissions to routes/views via a decorator or middleware that checks the authenticated user\'s roles against them, and enforce it server-side for every request regardless of what the client UI shows',
    explanation:
      '@require_permission("edit:post") above a view function centralises the check and keeps it consistent across the codebase, rather than duplicating "if not user.is_admin" logic everywhere. Permissions must be derived from server-side authenticated state (e.g. a JWT claim verified with a secret/public key), never trusted from client-supplied fields, since those can be forged.',
    tags: ['rbac', 'access-control', 'security', 'system-design', 'mnc']
  },
  {
    id: 'py-107',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you implement a type-safe dependency injection container in Python using type hints?',
    options: [
      'Use global variables to hold every dependency',
      'Maintain a registry (dict) mapping an abstract type/interface to a factory or singleton instance; a resolve(interface_type) function looks up and returns the bound implementation, with type hints on resolve() letting static checkers confirm the returned type',
      'Instantiate every dependency directly inside the class that needs it',
      'Use only class inheritance, with no separate container at all'
    ],
    correctAnswer:
      'Maintain a registry (dict) mapping an abstract type/interface to a factory or singleton instance; a resolve(interface_type) function looks up and returns the bound implementation, with type hints on resolve() letting static checkers confirm the returned type',
    explanation:
      'container.register(UserRepository, PostgresUserRepository) stores a mapping; container.resolve(UserRepository) returns the bound concrete implementation. This decouples business logic from concrete infrastructure choices (e.g. swapping a Postgres repository for an in-memory fake in tests) without changing the code that depends on the abstract interface.',
    tags: ['dependency-injection', 'typing', 'architecture', 'mnc']
  },
  {
    id: 'py-108',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a real-time notification delivery system (push, email, SMS) from a Python backend?',
    options: [
      'Send every notification type synchronously inline with the triggering request',
      'Publish a notification event to a queue, have separate workers per channel (push/email/SMS) consume and deliver it via their respective provider APIs, track delivery/read status, and apply per-user preferences and rate limiting before sending',
      'Poll every user\'s device every second to check for pending notifications',
      'Store all notifications only in a single unindexed log file'
    ],
    correctAnswer:
      'Publish a notification event to a queue, have separate workers per channel (push/email/SMS) consume and deliver it via their respective provider APIs, track delivery/read status, and apply per-user preferences and rate limiting before sending',
    explanation:
      'Decoupling "an event happened" from "deliver it across N channels" via a queue means a slow email provider doesn\'t block push notifications or the original request. Per-channel workers can independently retry and scale. Respecting user notification preferences and applying rate limits (e.g. max 1 digest email/hour) prevents notification fatigue and abuse.',
    tags: ['notifications', 'real-time', 'message-queue', 'system-design', 'mnc']
  },
  {
    id: 'py-109',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you reduce cold-start latency for a Python serverless function (e.g. AWS Lambda)?',
    options: [
      'Serverless functions have no cold-start overhead in Python, so nothing needs optimising',
      'Minimise package size and heavy imports at module load time, use provisioned concurrency to keep instances warm, lazy-load rarely used dependencies inside the handler rather than at import time, and choose a lighter runtime/base image',
      'Always import every possible dependency at the top of the file regardless of use',
      'Increase the function\'s memory allocation as the only necessary fix'
    ],
    correctAnswer:
      'Minimise package size and heavy imports at module load time, use provisioned concurrency to keep instances warm, lazy-load rarely used dependencies inside the handler rather than at import time, and choose a lighter runtime/base image',
    explanation:
      'Cold starts pay the cost of initialising the runtime and running all module-level imports before the handler runs. Deferring an expensive, rarely-needed import (e.g. import pandas) to inside the specific code path that uses it avoids paying that cost on every cold start. Provisioned concurrency keeps a pool of pre-warmed instances ready, trading cost for consistent latency.',
    tags: ['serverless', 'lambda', 'cold-start', 'performance', 'mnc']
  },
  {
    id: 'py-110',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a comprehensive error monitoring and alerting system for a Python production service?',
    options: [
      'Only check logs manually after a customer reports an issue',
      'Capture unhandled exceptions and structured error context (via Sentry or similar) with stack traces, request context, and user/session info; define alert thresholds on error-rate spikes; and route alerts to on-call via PagerDuty/Slack integrations',
      'Log errors only to local disk with no aggregation or alerting',
      'Silently retry on every exception without ever surfacing it'
    ],
    correctAnswer:
      'Capture unhandled exceptions and structured error context (via Sentry or similar) with stack traces, request context, and user/session info; define alert thresholds on error-rate spikes; and route alerts to on-call via PagerDuty/Slack integrations',
    explanation:
      'sentry_sdk.init() auto-captures unhandled exceptions with full stack traces and request context, grouping similar errors so a single root cause doesn\'t flood you with thousands of duplicate alerts. Alert rules on error-rate percentage increases (not just raw counts) catch regressions proportionally, and on-call integrations ensure someone is notified promptly rather than errors sitting unnoticed in a dashboard.',
    tags: ['error-monitoring', 'sentry', 'observability', 'alerting', 'mnc']
  },
  {
    id: 'py-111',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design database schema migrations for a Python application with zero downtime?',
    options: [
      'Take the application offline while running every migration',
      'Use a migration tool (Alembic/Django migrations) with backward-compatible, additive changes deployed ahead of code changes (expand-contract pattern) — add new columns as nullable first, deploy code that writes to both old and new, backfill data, then remove old columns in a later release',
      'Directly edit the production database schema by hand via a SQL console',
      'Always drop and recreate the entire schema for every migration'
    ],
    correctAnswer:
      'Use a migration tool (Alembic/Django migrations) with backward-compatible, additive changes deployed ahead of code changes (expand-contract pattern) — add new columns as nullable first, deploy code that writes to both old and new, backfill data, then remove old columns in a later release',
    explanation:
      'The expand-contract (parallel change) pattern avoids downtime: first "expand" the schema additively (new nullable column) so old code keeps working; deploy new code that writes to both old and new fields; backfill historical data; then, once all instances run the new code, "contract" by dropping the old column in a separate later migration. This avoids a moment where old and new code can\'t both function against the schema.',
    tags: ['migrations', 'alembic', 'zero-downtime', 'database', 'mnc']
  },
  {
    id: 'py-112',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you implement a finite state machine (FSM) in Python for an order-processing workflow?',
    options: [
      'Using a long chain of if/elif statements checking a status string everywhere it is used',
      'Define states and allowed transitions in a configuration structure (dict mapping (state, event) -> next_state), validate every transition against it before mutating status, and trigger entry/exit side effects (e.g. sending a notification) on state change',
      'Store the state as a free-text field with no validation of what values or transitions are allowed',
      'FSMs are not applicable to business workflows, only to hardware systems'
    ],
    correctAnswer:
      'Define states and allowed transitions in a configuration structure (dict mapping (state, event) -> next_state), validate every transition against it before mutating status, and trigger entry/exit side effects (e.g. sending a notification) on state change',
    explanation:
      'transitions = {("draft", "submit"): "submitted", ("submitted", "approve"): "approved"}. A transition(current_state, event) function looks up the pair and raises if it\'s not an allowed move, preventing invalid states like "approved" jumping straight from "draft". Libraries like python-statemachine or transitions formalise this with hooks for on_enter/on_exit actions.',
    tags: ['fsm', 'state-machine', 'workflow', 'mnc', 'coding']
  },
  {
    id: 'py-113',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement distributed locking across multiple Python service instances (e.g. to ensure only one instance runs a scheduled job)?',
    options: [
      'Use a threading.Lock, which works across separate processes and machines',
      'Use a distributed lock backed by Redis (SET key value NX PX ttl, e.g. via the Redlock algorithm) or a database row lock, ensuring the lock automatically expires (TTL) so a crashed holder doesn\'t block others forever',
      'Have each instance simply check a boolean flag in its own local memory',
      'Rely on all instances happening to run at exactly the same millisecond to avoid conflicts'
    ],
    correctAnswer:
      'Use a distributed lock backed by Redis (SET key value NX PX ttl, e.g. via the Redlock algorithm) or a database row lock, ensuring the lock automatically expires (TTL) so a crashed holder doesn\'t block others forever',
    explanation:
      'threading.Lock only coordinates threads within a single process — useless across separate machines. SET lock_key unique_token NX PX 30000 atomically acquires a lock only if it doesn\'t already exist, with a TTL so it self-releases if the holder crashes before explicitly releasing it, preventing a permanently stuck lock.',
    tags: ['distributed-locking', 'redis', 'redlock', 'distributed-systems', 'mnc']
  },
  {
    id: 'py-114',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you speed up a Python application\'s startup and deployment in a containerised environment?',
    options: [
      'Install every possible dependency in the image regardless of whether it is used',
      'Use a multi-stage Docker build with a slim base image, pin and cache dependency installation layers, precompile bytecode, and only copy the minimal runtime artefacts into the final image to reduce image size and startup time',
      'Rebuild the entire image from scratch (no layer caching) on every single deploy',
      'Run pip install inside the container at every application startup'
    ],
    correctAnswer:
      'Use a multi-stage Docker build with a slim base image, pin and cache dependency installation layers, precompile bytecode, and only copy the minimal runtime artefacts into the final image to reduce image size and startup time',
    explanation:
      'A multi-stage build compiles/installs dependencies in a builder stage, then copies only the resulting site-packages and app code into a slim final image (python:3.x-slim), avoiding build tools bloating the runtime image. Ordering COPY requirements.txt and RUN pip install before copying the rest of the app code lets Docker cache the dependency layer across builds when only app code changes.',
    tags: ['docker', 'deployment', 'containers', 'performance', 'mnc']
  },
  {
    id: 'py-115',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a Python SDK for third-party developers with strong backward-compatibility guarantees?',
    options: [
      'Introduce breaking changes freely in patch releases whenever convenient',
      'Follow semantic versioning strictly, deprecate features gradually with DeprecationWarning before removal in a major version, keep a detailed changelog and migration guide, and maintain type stubs so IDEs/type checkers catch breaking usage early',
      'Publish the SDK with no version numbers at all',
      'Require every consumer to pin to an exact, unchanging version forever'
    ],
    correctAnswer:
      'Follow semantic versioning strictly, deprecate features gradually with DeprecationWarning before removal in a major version, keep a detailed changelog and migration guide, and maintain type stubs so IDEs/type checkers catch breaking usage early',
    explanation:
      'warnings.warn("old_method is deprecated, use new_method", DeprecationWarning) surfaces upcoming removals to consumers without immediately breaking them. Bumping the major version (per semver) signals a breaking change explicitly. A MIGRATION.md and .pyi type stubs help downstream users (and their type checkers) catch incompatibilities before runtime.',
    tags: ['sdk', 'semver', 'backward-compatibility', 'api-design', 'mnc']
  },
  {
    id: 'py-116',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you build a comprehensive automated testing strategy for a large Python codebase?',
    options: [
      'Rely exclusively on manual QA testing before every release',
      'Layer tests: fast unit tests (pytest) for pure logic, integration tests hitting a real test database/services, contract tests validating API compatibility between services, and a smaller set of end-to-end tests for critical user journeys, all gated in CI',
      'Write only end-to-end tests, since they cover the most code per test',
      'Write only unit tests and skip integration/e2e coverage entirely'
    ],
    correctAnswer:
      'Layer tests: fast unit tests (pytest) for pure logic, integration tests hitting a real test database/services, contract tests validating API compatibility between services, and a smaller set of end-to-end tests for critical user journeys, all gated in CI',
    explanation:
      'The testing pyramid favours many fast, isolated unit tests (using fixtures/mocks) at the base, fewer integration tests that exercise real dependencies (a test database via pytest fixtures, testcontainers), and a small number of slow, brittle end-to-end tests reserved for the highest-value user flows. Contract tests (e.g. Pact) catch breaking API changes between microservices before they reach production.',
    tags: ['testing', 'pytest', 'testing-pyramid', 'ci', 'mnc']
  },
  {
    id: 'py-117',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you implement a custom in-memory pub/sub event bus in Python for a modular application?',
    options: [
      'Have every module import every other module directly and call functions on each other',
      'Maintain a central registry mapping event names to a list of subscriber callables; publish(event, payload) iterates and invokes each subscriber, isolating failures per-handler so one broken subscriber doesn\'t stop the others; support both sync and async handlers',
      'Use global variables that every module reads and writes directly',
      'Require all communication to go through writing and reading temporary files'
    ],
    correctAnswer:
      'Maintain a central registry mapping event names to a list of subscriber callables; publish(event, payload) iterates and invokes each subscriber, isolating failures per-handler so one broken subscriber doesn\'t stop the others; support both sync and async handlers',
    explanation:
      'class EventBus: def __init__(self): self._subs = defaultdict(list); def subscribe(self, event, fn): self._subs[event].append(fn); def publish(self, event, payload): for fn in self._subs[event]: try: fn(payload) except Exception: log.exception(...). This decouples modules (they only depend on the bus, not each other directly), which is central to plugin-style architectures.',
    tags: ['pub-sub', 'event-bus', 'architecture', 'mnc', 'coding']
  },
  {
    id: 'py-118',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a high-throughput data ingestion service in Python that reads from Kafka and writes to a data warehouse?',
    options: [
      'Process and commit one Kafka message at a time synchronously with no batching',
      'Consume in batches (micro-batching) to amortise write overhead, use manual offset commits only after a batch is durably written (at-least-once delivery), handle consumer group rebalancing gracefully, and scale by adding partitions/consumers',
      'Use a single consumer with no consumer group, regardless of topic partition count',
      'Discard messages that fail to process instead of retrying or logging them'
    ],
    correctAnswer:
      'Consume in batches (micro-batching) to amortise write overhead, use manual offset commits only after a batch is durably written (at-least-once delivery), handle consumer group rebalancing gracefully, and scale by adding partitions/consumers',
    explanation:
      'Batching reads/writes amortises per-record overhead (network round trips, warehouse insert cost). Committing Kafka offsets only after a batch is confirmed written to the warehouse gives at-least-once delivery semantics — a crash before commit means the batch is reprocessed, so the warehouse write path should be idempotent. Kafka\'s consumer groups let you scale throughput by adding partitions and consumer instances.',
    tags: ['kafka', 'data-ingestion', 'streaming', 'system-design', 'mnc']
  },
  {
    id: 'py-119',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a Python system to safely execute untrusted user-submitted code (e.g. a coding-challenge platform)?',
    options: [
      'Call exec() on the submitted code directly inside the main application process',
      'Run each submission in an isolated sandbox — a locked-down container or microVM (gVisor/Firecracker) with strict CPU/memory/time limits, no network access, and a read-only filesystem — never in the same process or trust boundary as the main application',
      'Use a Python virtual environment as the only isolation mechanism',
      'Trust user code as long as it passes a regex-based keyword blacklist'
    ],
    correctAnswer:
      'Run each submission in an isolated sandbox — a locked-down container or microVM (gVisor/Firecracker) with strict CPU/memory/time limits, no network access, and a read-only filesystem — never in the same process or trust boundary as the main application',
    explanation:
      'Executing untrusted code with exec() in-process is essentially granting it full control of your application (filesystem access, memory, even monkey-patching your own code). A regex blacklist is trivially bypassable. Real isolation requires OS/hypervisor-level sandboxing — containers with dropped capabilities and no network, or stronger microVM isolation (Firecracker, gVisor) — combined with strict resource/time limits to also prevent denial-of-service via infinite loops.',
    tags: ['sandboxing', 'security', 'code-execution', 'system-design', 'mnc']
  },
  {
    id: 'py-120',
    topic: 'python',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a production-grade custom logging pipeline in a Python microservices architecture?',
    options: [
      'Use print() statements and redirect stdout to a text file',
      'Emit structured JSON logs with contextual fields (trace_id, service name, severity) via a configured logging.Logger, ship them asynchronously to a centralised aggregator (ELK/Loki), and apply sampling/log-level controls to manage volume and cost at scale',
      'Log every single variable value at every line for maximum visibility',
      'Store logs only in each container\'s ephemeral local filesystem'
    ],
    correctAnswer:
      'Emit structured JSON logs with contextual fields (trace_id, service name, severity) via a configured logging.Logger, ship them asynchronously to a centralised aggregator (ELK/Loki), and apply sampling/log-level controls to manage volume and cost at scale',
    explanation:
      'A JSON formatter on Python\'s logging module makes logs machine-parseable and queryable in an aggregator, unlike free-text print() output. Attaching a trace_id (propagated from an incoming request header) lets you filter logs for one specific request across every microservice it touched. Because containers are ephemeral, logs must be shipped off-box promptly (via a sidecar or async handler) or they are lost when the container is replaced.',
    tags: ['logging', 'observability', 'structured-logging', 'microservices', 'mnc']
  }
];