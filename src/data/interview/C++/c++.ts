/**
 * src/data/interview/cpp.ts
 * C++ Interview Questions (120 items)
 * Levels: Beginner (30) → Intermediate (35) → Advanced (30) → MNC (25)
 */

import { InterviewQuestion } from '@/src/types/interview';

export const cppQuestions: InterviewQuestion[] = [

  // ─────────────────────────────────────────────
  // BEGINNER  (cpp-001 – cpp-030)
  // ─────────────────────────────────────────────

  {
    id: 'cpp-001',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the main difference between "struct" and "class" in C++?',
    options: [
      'There is no difference at all',
      'Struct members are public by default; class members are private by default',
      'Structs cannot have member functions',
      'Classes cannot be used with templates'
    ],
    correctAnswer: 'Struct members are public by default; class members are private by default',
    explanation: 'The only language-level difference between "struct" and "class" is the default access specifier: members and base classes default to public in a struct and private in a class. Both can have constructors, methods, and inheritance.',
    tags: ['struct', 'class', 'fundamentals']
  },
  {
    id: 'cpp-002',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does the "#include" directive do?',
    options: [
      'It links object files at runtime',
      'It tells the preprocessor to textually insert the contents of a header file before compilation',
      'It imports a compiled module at link time only',
      'It declares a namespace alias'
    ],
    correctAnswer: 'It tells the preprocessor to textually insert the contents of a header file before compilation',
    explanation: '"#include" is a preprocessor directive. Before actual compilation begins, the preprocessor replaces the "#include" line with the full text of the named header file, which is why repeated includes need include guards or "#pragma once".',
    tags: ['preprocessor', 'headers', 'fundamentals']
  },
  {
    id: 'cpp-003',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the difference between "==" and "=" in C++?',
    options: [
      'They are interchangeable',
      '"=" is assignment; "==" is the equality comparison operator',
      '"==" is only valid for pointers',
      '"=" can only be used inside loops'
    ],
    correctAnswer: '"=" is assignment; "==" is the equality comparison operator',
    explanation: '"=" assigns the value on the right to the variable on the left. "==" compares two values and produces a boolean result. Accidentally writing "if (x = 5)" instead of "if (x == 5)" is a classic bug, since the assignment expression itself evaluates to the assigned value.',
    tags: ['operators', 'fundamentals']
  },
  {
    id: 'cpp-004',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is a pointer in C++?',
    options: [
      'A variable that stores the memory address of another variable',
      'A reserved keyword for function parameters only',
      'A type used exclusively for arrays',
      'A synonym for a reference'
    ],
    correctAnswer: 'A variable that stores the memory address of another variable',
    explanation: 'A pointer, declared with "*", holds the memory address of another object. Dereferencing it with "*ptr" accesses the value stored at that address. Pointers can be reassigned to point elsewhere and can be null, unlike references.',
    tags: ['pointers', 'fundamentals']
  },
  {
    id: 'cpp-005',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is a reference in C++?',
    options: [
      'An alias for an existing variable that must be initialized when declared',
      'A pointer that can be null',
      'A type-safe array',
      'A synonym for a macro'
    ],
    correctAnswer: 'An alias for an existing variable that must be initialized when declared',
    explanation: 'A reference, declared with "&", is an alias bound to an existing object at the time of declaration. Unlike a pointer, it cannot be reseated to refer to a different object afterward, and it cannot be null.',
    tags: ['references', 'fundamentals']
  },
  {
    id: 'cpp-006',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'What does the following code print?\n\nint x = 10;\nint& ref = x;\nref = 20;\nstd::cout << x;',
    options: ['10', '20', 'Undefined behavior', 'Compile error'],
    correctAnswer: '20',
    explanation: 'Since "ref" is a reference bound to "x", modifying "ref" directly modifies "x" itself, because they refer to the same memory location. Printing "x" after "ref = 20" outputs 20.',
    tags: ['references', 'coding']
  },
  {
    id: 'cpp-007',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the purpose of a constructor in a C++ class?',
    options: [
      'To destroy an object when it goes out of scope',
      'To initialize an object\'s state when it is created',
      'To copy one object into another',
      'To define static class members'
    ],
    correctAnswer: 'To initialize an object\'s state when it is created',
    explanation: 'A constructor is a special member function automatically called when an object is created, responsible for initializing the object\'s data members and acquiring any resources it needs.',
    tags: ['constructors', 'classes', 'fundamentals']
  },
  {
    id: 'cpp-008',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the purpose of a destructor in a C++ class?',
    options: [
      'To allocate memory for new objects',
      'To clean up resources when an object goes out of scope or is explicitly deleted',
      'To copy the object into a new instance',
      'To overload the assignment operator'
    ],
    correctAnswer: 'To clean up resources when an object goes out of scope or is explicitly deleted',
    explanation: 'A destructor, written as "~ClassName()", is automatically invoked when an object\'s lifetime ends, typically used to release resources like dynamically allocated memory, file handles, or locks.',
    tags: ['destructors', 'classes', 'fundamentals']
  },
  {
    id: 'cpp-009',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is function overloading?',
    options: [
      'Calling a function more times than it is defined',
      'Defining multiple functions with the same name but different parameter lists',
      'Replacing a function\'s implementation at runtime',
      'Inheriting a function from a base class'
    ],
    correctAnswer: 'Defining multiple functions with the same name but different parameter lists',
    explanation: 'Function overloading lets multiple functions share the same name as long as their parameter types, count, or order differ, allowing the compiler to select the appropriate one based on the arguments at the call site.',
    tags: ['function-overloading', 'functions']
  },
  {
    id: 'cpp-010',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What header is required to use "std::vector"?',
    options: ['<list>', '<vector>', '<array>', '<container>'],
    correctAnswer: '<vector>',
    explanation: '"std::vector" is declared in the "<vector>" header from the C++ Standard Library. It must be included before "std::vector" can be used.',
    tags: ['stl', 'vector', 'headers']
  },
  {
    id: 'cpp-011',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the difference between stack memory and heap memory?',
    options: [
      'They are the same thing with different names',
      'Stack memory is automatically managed and freed when a scope ends; heap memory is manually managed via "new"/"delete" (or smart pointers) and persists until explicitly freed',
      'Heap memory is faster to access than stack memory in all cases',
      'Stack memory can only store pointers'
    ],
    correctAnswer: 'Stack memory is automatically managed and freed when a scope ends; heap memory is manually managed via "new"/"delete" (or smart pointers) and persists until explicitly freed',
    explanation: 'Stack-allocated objects are automatically destroyed when their enclosing scope exits, following strict LIFO order. Heap-allocated objects (via "new") live until explicitly destroyed with "delete" or managed by a smart pointer, and must be manually managed to avoid leaks.',
    tags: ['memory-management', 'stack', 'heap']
  },
  {
    id: 'cpp-012',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does "new" do in C++?',
    options: [
      'Declares a new variable on the stack',
      'Allocates memory on the heap and returns a pointer to it, optionally invoking a constructor',
      'Creates a new namespace',
      'Defines a new class'
    ],
    correctAnswer: 'Allocates memory on the heap and returns a pointer to it, optionally invoking a constructor',
    explanation: '"new" dynamically allocates memory on the heap for an object (calling its constructor if it has one) and returns a pointer to that memory. Every "new" should eventually be paired with a corresponding "delete" to avoid a memory leak.',
    tags: ['new', 'memory-management', 'pointers']
  },
  {
    id: 'cpp-013',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'What is wrong with this code?\n\nint* ptr = new int(5);\nptr = new int(10);',
    options: [
      'Nothing is wrong with it',
      'The first allocated memory is leaked because its address is overwritten before being freed',
      '"new int(5)" is invalid syntax',
      'Pointers cannot be reassigned'
    ],
    correctAnswer: 'The first allocated memory is leaked because its address is overwritten before being freed',
    explanation: 'Reassigning "ptr" to a new heap allocation without first calling "delete ptr" on the original allocation loses the only reference to that first block of memory, making it impossible to free — a memory leak.',
    tags: ['memory-leaks', 'pointers', 'coding']
  },
  {
    id: 'cpp-014',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the purpose of "const" when applied to a function parameter, e.g. "void f(const std::string& s)"?',
    options: [
      'It makes the function run faster automatically',
      'It promises the function will not modify the referenced object, while still avoiding a copy',
      'It forces the parameter to be passed by value',
      'It makes the parameter optional'
    ],
    correctAnswer: 'It promises the function will not modify the referenced object, while still avoiding a copy',
    explanation: 'Passing by "const&" avoids the cost of copying the argument (especially for large objects like strings) while telling both the compiler and other developers that the function will not modify the caller\'s object.',
    tags: ['const', 'references', 'function-parameters']
  },
  {
    id: 'cpp-015',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the difference between "std::vector" and a C-style array?',
    options: [
      'They are identical in every respect',
      '"std::vector" can dynamically resize at runtime and manages its own memory; a C-style array has a fixed size and no built-in memory management',
      'C-style arrays support bounds checking, but std::vector does not',
      '"std::vector" cannot store primitive types'
    ],
    correctAnswer: '"std::vector" can dynamically resize at runtime and manages its own memory; a C-style array has a fixed size and no built-in memory management',
    explanation: '"std::vector" is a dynamic-array container that automatically grows as elements are added and manages its own heap allocation and deallocation. A C-style array has a fixed size known at compile time (or allocation time) and provides no automatic resizing or memory management.',
    tags: ['vector', 'arrays', 'stl']
  },
  {
    id: 'cpp-016',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is a namespace used for?',
    options: [
      'To define a new data type',
      'To group related identifiers (functions, classes, variables) under a common name to avoid naming collisions',
      'To allocate memory dynamically',
      'To declare a function as inline'
    ],
    correctAnswer: 'To group related identifiers (functions, classes, variables) under a common name to avoid naming collisions',
    explanation: 'Namespaces, declared with "namespace name { ... }", scope identifiers under a named region, which prevents naming conflicts between different libraries or parts of a large codebase that might otherwise define the same identifier name.',
    tags: ['namespaces', 'fundamentals']
  },
  {
    id: 'cpp-017',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does "using namespace std;" do?',
    options: [
      'It deletes the std namespace',
      'It brings all identifiers from the "std" namespace into the current scope, so they can be used without the "std::" prefix',
      'It creates an alias called "std"',
      'It is required at the top of every C++ file'
    ],
    correctAnswer: 'It brings all identifiers from the "std" namespace into the current scope, so they can be used without the "std::" prefix',
    explanation: '"using namespace std;" imports every name from the standard namespace into the current scope. It is convenient but commonly discouraged in headers or large codebases because it can introduce naming collisions and reduces clarity about where an identifier comes from.',
    tags: ['namespaces', 'using-directive']
  },
  {
    id: 'cpp-018',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the difference between "public", "private", and "protected" access specifiers?',
    options: [
      'They have no effect on compilation, only documentation value',
      '"public" members are accessible from anywhere; "private" only within the class itself; "protected" within the class and its derived classes',
      '"protected" is accessible from anywhere except the class itself',
      '"private" allows access from derived classes but not external code'
    ],
    correctAnswer: '"public" members are accessible from anywhere; "private" only within the class itself; "protected" within the class and its derived classes',
    explanation: 'These access specifiers control visibility: "public" members are accessible to any code with access to the object, "private" members only to the class\'s own member functions and friends, and "protected" members to the class itself and any classes that inherit from it.',
    tags: ['access-specifiers', 'classes', 'encapsulation']
  },
  {
    id: 'cpp-019',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is inheritance in C++?',
    options: [
      'A mechanism where a class (derived) acquires properties and behaviors from another class (base)',
      'A way to copy a class\'s implementation into a new file',
      'A restriction that prevents classes from having member functions',
      'A feature exclusive to abstract classes'
    ],
    correctAnswer: 'A mechanism where a class (derived) acquires properties and behaviors from another class (base)',
    explanation: 'Inheritance, declared as "class Derived : public Base { ... }", lets a derived class reuse and extend the members of a base class, forming an "is-a" relationship and enabling polymorphism.',
    tags: ['inheritance', 'oop', 'fundamentals']
  },
  {
    id: 'cpp-020',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the purpose of the "this" pointer inside a non-static member function?',
    options: [
      'It points to the base class instance',
      'It points to the object instance on which the member function was called',
      'It is only valid inside constructors',
      'It refers to the function\'s return value'
    ],
    correctAnswer: 'It points to the object instance on which the member function was called',
    explanation: 'Within a non-static member function, "this" is an implicit pointer to the specific object the function is operating on, allowing the function to access that object\'s own members, even when a local variable shares a name with a member.',
    tags: ['this-pointer', 'classes', 'fundamentals']
  },
  {
    id: 'cpp-021',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'What does the following print?\n\nfor (int i = 0; i < 3; i++) {\n  std::cout << i << " ";\n}',
    options: ['0 1 2', '1 2 3', '0 1 2 3', '3 2 1'],
    correctAnswer: '0 1 2',
    explanation: 'The loop initializes "i" to 0, continues while "i < 3", and increments "i" after each iteration. It prints 0, 1, and 2, then stops once "i" reaches 3 (since "3 < 3" is false).',
    tags: ['loops', 'coding']
  },
  {
    id: 'cpp-022',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is operator overloading?',
    options: [
      'Using too many operators in a single expression',
      'Defining custom behavior for an existing operator (like "+" or "==") when applied to a user-defined type',
      'A compiler optimization technique',
      'A restriction that disables certain operators'
    ],
    correctAnswer: 'Defining custom behavior for an existing operator (like "+" or "==") when applied to a user-defined type',
    explanation: 'Operator overloading lets you define how built-in operators behave for your own classes, for example overloading "+" so that two custom "Vector2D" objects can be added together with natural syntax like "a + b".',
    tags: ['operator-overloading', 'classes']
  },
  {
    id: 'cpp-023',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the difference between "while" and "do-while" loops?',
    options: [
      'They are functionally identical',
      'A "while" loop checks its condition before the first iteration; a "do-while" loop executes the body at least once before checking the condition',
      '"do-while" loops cannot use "break"',
      '"while" loops can only iterate a fixed number of times'
    ],
    correctAnswer: 'A "while" loop checks its condition before the first iteration; a "do-while" loop executes the body at least once before checking the condition',
    explanation: 'A "do-while" loop guarantees its body runs at least once, since the condition is checked after the first execution, whereas a regular "while" loop checks the condition first and may never execute the body at all.',
    tags: ['loops', 'control-flow']
  },
  {
    id: 'cpp-024',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the purpose of "static" when applied to a class member variable?',
    options: [
      'It makes the variable accessible only within that one object instance',
      'It creates a single shared variable across all instances of the class, rather than one copy per object',
      'It prevents the variable from ever being modified',
      'It makes the variable thread-local'
    ],
    correctAnswer: 'It creates a single shared variable across all instances of the class, rather than one copy per object',
    explanation: 'A "static" member variable belongs to the class itself rather than to any individual object, meaning there is exactly one copy shared across all instances, and it can typically be accessed without needing an object at all (e.g. "ClassName::member").',
    tags: ['static', 'classes']
  },
  {
    id: 'cpp-025',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does "sizeof" return?',
    options: [
      'The number of elements in an array',
      'The size, in bytes, that a type or object occupies in memory',
      'The maximum value a type can hold',
      'The number of bits in a type'
    ],
    correctAnswer: 'The size, in bytes, that a type or object occupies in memory',
    explanation: '"sizeof" is a compile-time operator that returns the size in bytes occupied by a type or expression\'s type, which is useful for low-level memory calculations, though the exact byte sizes of fundamental types are implementation-defined within constraints set by the standard.',
    tags: ['sizeof', 'memory']
  },
  {
    id: 'cpp-026',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the difference between "int* p" and "int& r" as ways to refer to a variable?',
    options: [
      'They behave identically in every situation',
      'A pointer can be reassigned to point elsewhere or be null; a reference is permanently bound to one object and cannot be null',
      'References use more memory than pointers',
      'Pointers cannot be passed to functions'
    ],
    correctAnswer: 'A pointer can be reassigned to point elsewhere or be null; a reference is permanently bound to one object and cannot be null',
    explanation: 'Once a reference is initialized, it is permanently bound to that one object and can never refer to anything else or be null. A pointer is a separate object that stores an address and can be reassigned, including to "nullptr".',
    tags: ['pointers', 'references', 'fundamentals']
  },
  {
    id: 'cpp-027',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the purpose of a default constructor?',
    options: [
      'A constructor that takes exactly one argument',
      'A constructor that can be called with no arguments, either explicitly written or implicitly generated by the compiler',
      'A constructor that is automatically deleted',
      'A constructor used only for copying objects'
    ],
    correctAnswer: 'A constructor that can be called with no arguments, either explicitly written or implicitly generated by the compiler',
    explanation: 'A default constructor requires no arguments to be called. If a class defines no constructors at all, the compiler implicitly generates one (unless this is suppressed by other declared constructors), which default-initializes the object\'s members.',
    tags: ['constructors', 'classes']
  },
  {
    id: 'cpp-028',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the difference between "char", "int", and "float" in terms of what they represent?',
    options: [
      'They are all interchangeable representations of the same data',
      '"char" typically holds a single byte/character, "int" holds whole numbers, and "float" holds single-precision floating-point (decimal) numbers',
      '"char" is used only for arrays of text',
      '"float" cannot represent negative numbers'
    ],
    correctAnswer: '"char" typically holds a single byte/character, "int" holds whole numbers, and "float" holds single-precision floating-point (decimal) numbers',
    explanation: 'These are fundamental built-in types: "char" usually represents a single byte (often used for characters), "int" represents signed whole numbers, and "float" represents single-precision floating-point numbers capable of representing fractional values, with "double" offering greater precision.',
    tags: ['data-types', 'fundamentals']
  },
  {
    id: 'cpp-029',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does "std::string" provide over a raw C-style "char*" string?',
    options: [
      'Nothing — they have identical capabilities',
      'Automatic memory management, dynamic resizing, and a rich set of member functions for manipulation, instead of manual buffer management',
      '"std::string" cannot be concatenated',
      '"char*" supports more operators than std::string'
    ],
    correctAnswer: 'Automatic memory management, dynamic resizing, and a rich set of member functions for manipulation, instead of manual buffer management',
    explanation: '"std::string" manages its own underlying buffer, automatically growing as needed and handling memory cleanup via RAII, whereas a "char*" string requires manual allocation, careful null-termination, and manual memory management, making it significantly more error-prone.',
    tags: ['string', 'stl', 'memory-management']
  },
  {
    id: 'cpp-030',
    topic: 'cpp',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is a header file (".h" or ".hpp") typically used for?',
    options: [
      'To store compiled binary code',
      'To declare interfaces (function signatures, class definitions, constants) that can be shared across multiple source files',
      'To define the program\'s entry point exclusively',
      'To store runtime configuration values'
    ],
    correctAnswer: 'To declare interfaces (function signatures, class definitions, constants) that can be shared across multiple source files',
    explanation: 'Header files typically contain declarations (not full implementations, aside from inline/template code) that multiple ".cpp" source files can include, allowing them to share class definitions, function prototypes, and constants without duplicating code.',
    tags: ['headers', 'compilation', 'fundamentals']
  },

  // ─────────────────────────────────────────────
  // INTERMEDIATE  (cpp-031 – cpp-065)
  // ─────────────────────────────────────────────

  {
    id: 'cpp-031',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is RAII (Resource Acquisition Is Initialization)?',
    options: [
      'A runtime error-checking mechanism',
      'A design principle where resources are acquired in a constructor and released in the destructor, tying resource lifetime to object lifetime',
      'A way to prevent multiple inheritance',
      'A compiler optimization for stack allocation'
    ],
    correctAnswer: 'A design principle where resources are acquired in a constructor and released in the destructor, tying resource lifetime to object lifetime',
    explanation: 'RAII ensures that resources like memory, file handles, and locks are always released when the owning object goes out of scope, even if an exception is thrown. std::unique_ptr, std::lock_guard, and std::fstream are all RAII wrappers.',
    tags: ['raii', 'resource-management', 'idioms']
  },
  {
    id: 'cpp-032',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a virtual function and why is it needed?',
    options: [
      'A function that exists only at compile time',
      'A member function declared with "virtual" that enables dynamic dispatch, allowing a derived class override to be called through a base class pointer or reference at runtime',
      'A function that cannot be overridden in derived classes',
      'A function with no implementation'
    ],
    correctAnswer: 'A member function declared with "virtual" that enables dynamic dispatch, allowing a derived class override to be called through a base class pointer or reference at runtime',
    explanation: 'Without "virtual", calling a function through a base pointer always invokes the base version (static dispatch). With "virtual", the runtime uses the object\'s actual (dynamic) type to call the correct override, enabling polymorphism. The mechanism is the vtable.',
    tags: ['virtual-functions', 'polymorphism', 'vtable', 'oop']
  },
  {
    id: 'cpp-033',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a pure virtual function and what does it mean for a class that contains one?',
    options: [
      'A virtual function with a default implementation that derived classes can optionally override',
      'A virtual function declared with "= 0", making its class abstract — it cannot be instantiated directly and derived classes must override it',
      'A function that is automatically deleted in derived classes',
      'A function with no parameters'
    ],
    correctAnswer: 'A virtual function declared with "= 0", making its class abstract — it cannot be instantiated directly and derived classes must override it',
    explanation: 'Declaring "virtual void draw() = 0;" creates a pure virtual function. The class becomes abstract and cannot be instantiated. Any concrete (non-abstract) derived class must provide an implementation. This enforces an interface contract across the inheritance hierarchy.',
    tags: ['pure-virtual', 'abstract-class', 'interfaces', 'oop']
  },
  {
    id: 'cpp-034',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the Rule of Three (or Five) in C++?',
    options: [
      'A class should have at most three member variables',
      'If a class needs a custom destructor, copy constructor, or copy assignment operator, it almost certainly needs all three (Rule of Three); with move semantics, also the move constructor and move assignment (Rule of Five)',
      'Every class must have exactly three constructors',
      'A guideline about the maximum number of base classes'
    ],
    correctAnswer: 'If a class needs a custom destructor, copy constructor, or copy assignment operator, it almost certainly needs all three (Rule of Three); with move semantics, also the move constructor and move assignment (Rule of Five)',
    explanation: 'If your class manages a resource (e.g. raw pointer), the compiler-generated copy/move/destroy operations will be incorrect. You must define all relevant special member functions consistently to avoid double-free, shallow copies, or resource leaks.',
    tags: ['rule-of-three', 'rule-of-five', 'special-members', 'idioms']
  },
  {
    id: 'cpp-035',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What are smart pointers and how do std::unique_ptr and std::shared_ptr differ?',
    options: [
      'They are raw pointers with extra syntax',
      'RAII wrappers for heap objects: unique_ptr has sole ownership (non-copyable, movable); shared_ptr allows shared ownership via reference counting, destroyed when the last owner is released',
      'shared_ptr is always faster than unique_ptr',
      'unique_ptr requires manual deletion'
    ],
    correctAnswer: 'RAII wrappers for heap objects: unique_ptr has sole ownership (non-copyable, movable); shared_ptr allows shared ownership via reference counting, destroyed when the last owner is released',
    explanation: 'std::unique_ptr models exclusive ownership — it cannot be copied, only moved. When the unique_ptr is destroyed, the resource is freed. std::shared_ptr maintains a reference count; the resource is freed only when the last shared_ptr owning it is destroyed. Prefer unique_ptr unless shared ownership is genuinely needed.',
    tags: ['smart-pointers', 'unique-ptr', 'shared-ptr', 'memory-management']
  },
  {
    id: 'cpp-036',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a template in C++ and what problem does it solve?',
    options: [
      'A runtime mechanism for switching implementations',
      'A compile-time parameterisation mechanism that allows writing type-generic functions and classes, with the compiler generating concrete versions for each type used',
      'A preprocessor macro with type checking',
      'A way to define abstract classes'
    ],
    correctAnswer: 'A compile-time parameterisation mechanism that allows writing type-generic functions and classes, with the compiler generating concrete versions for each type used',
    explanation: 'Templates eliminate code duplication for type-specific logic. "template<typename T> T max(T a, T b)" works for any comparable type. The compiler instantiates a concrete version for each unique type it is called with, providing type safety without runtime overhead.',
    tags: ['templates', 'generics', 'compile-time']
  },
  {
    id: 'cpp-037',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the STL and what are its main components?',
    options: [
      'A third-party library for graphics',
      'The Standard Template Library: a part of the C++ standard library providing generic containers, iterators, algorithms, and function objects that work together through a unified iterator interface',
      'A set of macros for string manipulation only',
      'A runtime that replaces the OS'
    ],
    correctAnswer: 'The Standard Template Library: a part of the C++ standard library providing generic containers, iterators, algorithms, and function objects that work together through a unified iterator interface',
    explanation: 'The STL\'s four pillars are: containers (vector, map, set, list, deque…), iterators (input, output, forward, bidirectional, random-access), algorithms (sort, find, transform, accumulate…), and function objects/lambdas. Algorithms operate on iterator ranges, making them container-agnostic.',
    tags: ['stl', 'containers', 'iterators', 'algorithms']
  },
  {
    id: 'cpp-038',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between std::map and std::unordered_map?',
    options: [
      'They are identical in performance and ordering',
      'std::map stores keys in sorted order using a red-black tree (O(log n) operations); std::unordered_map uses a hash table for average O(1) operations but no ordering',
      'std::unordered_map cannot store custom types',
      'std::map allows duplicate keys'
    ],
    correctAnswer: 'std::map stores keys in sorted order using a red-black tree (O(log n) operations); std::unordered_map uses a hash table for average O(1) operations but no ordering',
    explanation: 'Use std::map when you need sorted iteration or range queries. Use std::unordered_map for faster average-case lookups when ordering does not matter. Custom types in unordered_map require a custom hash functor and equality operator.',
    tags: ['map', 'unordered-map', 'stl', 'data-structures']
  },
  {
    id: 'cpp-039',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is move semantics and what problem does it solve?',
    options: [
      'A way to physically move objects in memory',
      'A C++11 feature that transfers ownership of a resource from one object to another (via rvalue references and std::move) without expensive deep copies, enabling efficient return of large objects',
      'A mechanism for moving objects between threads',
      'A garbage collection strategy'
    ],
    correctAnswer: 'A C++11 feature that transfers ownership of a resource from one object to another (via rvalue references and std::move) without expensive deep copies, enabling efficient return of large objects',
    explanation: 'Before C++11, returning a large object from a function caused an expensive copy. Move semantics allow the resource (e.g. heap buffer) to be "stolen" from a temporary (rvalue), leaving the source in a valid but empty state. This makes operations like push_back on vectors of strings dramatically faster.',
    tags: ['move-semantics', 'rvalue-references', 'c++11', 'performance']
  },
  {
    id: 'cpp-040',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is an rvalue reference (&&) and how does it differ from an lvalue reference (&)?',
    options: [
      'They are the same — both bind to any expression',
      'An lvalue reference (&) binds to named, persistent objects; an rvalue reference (&&) binds to temporaries or objects explicitly cast with std::move, enabling move constructors and perfect forwarding',
      'rvalue references are only used with primitives',
      '&& is a logical AND inside type declarations'
    ],
    correctAnswer: 'An lvalue reference (&) binds to named, persistent objects; an rvalue reference (&&) binds to temporaries or objects explicitly cast with std::move, enabling move constructors and perfect forwarding',
    explanation: 'Lvalues are objects with identity (a name, an address). Rvalues are temporaries or expressions whose resources can be safely "stolen". Rvalue references (T&&) were introduced in C++11 to distinguish these, enabling move constructors and perfect forwarding in templates.',
    tags: ['rvalue-references', 'lvalue', 'move-semantics', 'c++11']
  },
  {
    id: 'cpp-041',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a lambda expression in C++?',
    options: [
      'A named function stored in a global variable',
      'An anonymous function object defined inline, optionally capturing variables from its enclosing scope, introduced in C++11',
      'A macro that generates a class',
      'A type alias for std::function'
    ],
    correctAnswer: 'An anonymous function object defined inline, optionally capturing variables from its enclosing scope, introduced in C++11',
    explanation: 'Lambdas have the form [capture](params) -> return_type { body }. The capture list specifies which outer variables are accessible: [&] captures by reference, [=] by value, or specific names. The compiler generates an anonymous functor class behind the scenes.',
    tags: ['lambdas', 'c++11', 'functional', 'closures']
  },
  {
    id: 'cpp-042',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is exception handling in C++ and what are the key keywords?',
    options: [
      'A way to abort the program on any error',
      '"try" wraps code that may throw; "throw" raises an exception; "catch" handles specific exception types. Stack unwinding destroys local objects automatically during propagation',
      'Exceptions are only for out-of-memory errors',
      '"catch" is only valid inside classes'
    ],
    correctAnswer: '"try" wraps code that may throw; "throw" raises an exception; "catch" handles specific exception types. Stack unwinding destroys local objects automatically during propagation',
    explanation: 'When an exception is thrown, C++ unwinds the call stack, calling destructors for all local objects in scope (preserving RAII guarantees) until a matching catch block is found. Uncaught exceptions call std::terminate. catch(...) catches all types.',
    tags: ['exceptions', 'try-catch', 'stack-unwinding', 'error-handling']
  },
  {
    id: 'cpp-043',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the "override" specifier do in C++11?',
    options: [
      'It prevents a function from being called',
      'It tells the compiler to verify that the function actually overrides a virtual function in the base class, producing an error if no such virtual function exists',
      'It makes a function run faster',
      'It marks a function as deprecated'
    ],
    correctAnswer: 'It tells the compiler to verify that the function actually overrides a virtual function in the base class, producing an error if no such virtual function exists',
    explanation: 'Without "override", a typo in the function signature silently creates a new non-virtual function instead of overriding the base. "override" makes this a compile error, catching common bugs like wrong parameter types or misspelled names.',
    tags: ['override', 'virtual', 'c++11', 'oop']
  },
  {
    id: 'cpp-044',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the "final" specifier do?',
    options: [
      'It marks a variable as constant',
      'Applied to a class, it prevents further inheritance; applied to a virtual function, it prevents further overriding in derived classes',
      'It causes a function to be inlined',
      'It is equivalent to "= delete"'
    ],
    correctAnswer: 'Applied to a class, it prevents further inheritance; applied to a virtual function, it prevents further overriding in derived classes',
    explanation: '"class Foo final { ... }" means no class can inherit from Foo. "virtual void f() final;" means no derived class can override f. This enables compiler de-virtualisation optimisations and communicates design intent.',
    tags: ['final', 'inheritance', 'virtual', 'c++11']
  },
  {
    id: 'cpp-045',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is std::weak_ptr and why is it needed?',
    options: [
      'A pointer that owns an object weakly, allowing the object to be destroyed',
      'A non-owning reference to an object managed by std::shared_ptr, used to break circular reference cycles that would otherwise prevent garbage collection',
      'A deprecated alias for std::shared_ptr',
      'A pointer that expires after a fixed time'
    ],
    correctAnswer: 'A non-owning reference to an object managed by std::shared_ptr, used to break circular reference cycles that would otherwise prevent garbage collection',
    explanation: 'If two shared_ptrs point to each other, the reference count never reaches zero — a memory leak. weak_ptr observes a shared_ptr-managed object without incrementing the reference count. To access the object, call .lock() which returns a shared_ptr (empty if the object is already destroyed).',
    tags: ['weak-ptr', 'shared-ptr', 'memory-management', 'cycles']
  },
  {
    id: 'cpp-046',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What is the output of the following?\n\nstd::vector<int> v = {1, 2, 3};\nfor (auto& x : v) x *= 2;\nfor (auto x : v) std::cout << x << " ";',
    options: ['1 2 3', '2 4 6', '1 4 9', 'Undefined behavior'],
    correctAnswer: '2 4 6',
    explanation: 'The first range-for loop captures each element by reference ("auto& x") and doubles it in place, modifying the vector. The second loop captures by value and prints each element, outputting 2 4 6.',
    tags: ['range-for', 'auto', 'vector', 'coding']
  },
  {
    id: 'cpp-047',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between "delete" and "delete[]"?',
    options: [
      'They are interchangeable',
      '"delete" frees a single heap-allocated object and calls its destructor; "delete[]" frees a heap-allocated array, calling the destructor for every element',
      '"delete[]" is only for primitive arrays',
      '"delete" works for arrays allocated with "new[]"'
    ],
    correctAnswer: '"delete" frees a single heap-allocated object and calls its destructor; "delete[]" frees a heap-allocated array, calling the destructor for every element',
    explanation: 'Mismatching "new" with "delete[]" or "new[]" with "delete" is undefined behavior. "new[]" stores the number of elements so that "delete[]" knows how many destructors to call before freeing the block. Always match new↔delete and new[]↔delete[].',
    tags: ['delete', 'arrays', 'memory-management', 'undefined-behavior']
  },
  {
    id: 'cpp-048',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a copy constructor and when is it invoked?',
    options: [
      'A constructor called when an object is destroyed',
      'A constructor that initializes a new object as a copy of an existing object of the same type, invoked on pass-by-value, return-by-value, and direct copy initialization',
      'A constructor that takes no parameters',
      'A constructor used only with inheritance'
    ],
    correctAnswer: 'A constructor that initializes a new object as a copy of an existing object of the same type, invoked on pass-by-value, return-by-value, and direct copy initialization',
    explanation: 'The copy constructor has the signature "T(const T& other)". It is invoked when passing objects by value to functions, returning objects by value, and writing "T b = a;". If not explicitly defined, the compiler generates one that copies each member — which is problematic for classes managing heap memory.',
    tags: ['copy-constructor', 'special-members', 'classes']
  },
  {
    id: 'cpp-049',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between "std::array" and "std::vector"?',
    options: [
      'They are functionally identical',
      'std::array has a fixed compile-time size and is typically stack-allocated with zero overhead; std::vector has a dynamic size and heap-allocates its elements',
      'std::vector is always faster than std::array',
      'std::array cannot store user-defined types'
    ],
    correctAnswer: 'std::array has a fixed compile-time size and is typically stack-allocated with zero overhead; std::vector has a dynamic size and heap-allocates its elements',
    explanation: 'std::array<T, N> is a thin wrapper around a C array with the size encoded in the type; it has no dynamic allocation and fits well on the stack. std::vector allocates on the heap and can grow, but incurs a pointer indirection. Prefer std::array when the size is known at compile time.',
    tags: ['array', 'vector', 'stl', 'performance']
  },
  {
    id: 'cpp-050',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does "constexpr" mean in C++?',
    options: [
      'A constant that can only be set at runtime',
      'An expression or function that can be evaluated at compile time if given compile-time arguments, enabling compile-time computation and use in constant expressions',
      'A type modifier similar to "const" but for expressions',
      'A keyword that inlines all function calls'
    ],
    correctAnswer: 'An expression or function that can be evaluated at compile time if given compile-time arguments, enabling compile-time computation and use in constant expressions',
    explanation: '"constexpr int square(int x) { return x * x; }" can be called with a constant argument and the result embedded directly in the binary. "constexpr" variables are guaranteed compile-time constants. This improves performance and enables use in template parameters and array sizes.',
    tags: ['constexpr', 'compile-time', 'c++11', 'c++14']
  },
  {
    id: 'cpp-051',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between std::list and std::vector in terms of performance characteristics?',
    options: [
      'std::list is always faster',
      'std::vector provides O(1) random access and cache-friendly iteration; std::list provides O(1) insertion/removal at any position but O(n) access and poor cache performance due to pointer chasing',
      'std::list supports random access but std::vector does not',
      'They have identical performance in all cases'
    ],
    correctAnswer: 'std::vector provides O(1) random access and cache-friendly iteration; std::list provides O(1) insertion/removal at any position but O(n) access and poor cache performance due to pointer chasing',
    explanation: 'std::vector stores elements contiguously, giving excellent cache locality and O(1) indexed access. std::list (doubly-linked) has O(1) splice and mid-list insert/erase but nodes are scattered in memory. In practice, std::vector often outperforms std::list even for insert-heavy workloads due to cache effects.',
    tags: ['list', 'vector', 'stl', 'performance', 'cache']
  },
  {
    id: 'cpp-052',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is perfect forwarding and std::forward?',
    options: [
      'A way to copy arguments perfectly',
      'A template technique using forwarding references (T&&) and std::forward<T> to pass arguments to another function preserving their lvalue/rvalue category, avoiding unnecessary copies',
      'A method to forward function calls across DLL boundaries',
      'A replacement for std::move'
    ],
    correctAnswer: 'A template technique using forwarding references (T&&) and std::forward<T> to pass arguments to another function preserving their lvalue/rvalue category, avoiding unnecessary copies',
    explanation: 'In "template<typename T> void wrapper(T&& arg) { target(std::forward<T>(arg)); }", if an lvalue is passed, it stays an lvalue; if an rvalue, it stays an rvalue. Without std::forward, named rvalue references are treated as lvalues, defeating move semantics. This is how make_unique and emplace_back work.',
    tags: ['perfect-forwarding', 'std-forward', 'templates', 'move-semantics']
  },
  {
    id: 'cpp-053',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between "std::sort" and "std::stable_sort"?',
    options: [
      'They always produce the same result',
      'std::sort (O(n log n), introsort) does not preserve relative order of equal elements; std::stable_sort (O(n log² n) or O(n log n) with extra memory) preserves the relative order of equal elements',
      'std::stable_sort is always faster',
      'std::sort only works with random-access iterators while std::stable_sort works with any iterator'
    ],
    correctAnswer: 'std::sort (O(n log n), introsort) does not preserve relative order of equal elements; std::stable_sort (O(n log² n) or O(n log n) with extra memory) preserves the relative order of equal elements',
    explanation: 'Use std::sort for maximum speed when equality order does not matter. Use std::stable_sort when equivalent elements must maintain their original relative positions — for example, sorting a list of students by grade while preserving their alphabetical order within the same grade.',
    tags: ['sort', 'stable-sort', 'algorithms', 'stl']
  },
  {
    id: 'cpp-054',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a functor (function object) in C++?',
    options: [
      'A raw function pointer',
      'An object of a class that overloads operator(), behaving like a function but able to carry state — used as predicates and comparators for STL algorithms',
      'A macro that wraps a function',
      'A pointer to a member function'
    ],
    correctAnswer: 'An object of a class that overloads operator(), behaving like a function but able to carry state — used as predicates and comparators for STL algorithms',
    explanation: 'struct Adder { int n; int operator()(int x) const { return x + n; } }. Adder add5{5}; add5(3); // 8. Functors are more powerful than function pointers because they carry state, and the compiler can inline their operator() calls. Lambdas generate anonymous functor classes behind the scenes.',
    tags: ['functor', 'operator-overloading', 'stl', 'functional']
  },
  {
    id: 'cpp-055',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What does std::move do to an object?',
    options: [
      'Physically moves the object to a new memory location',
      'Casts the argument to an rvalue reference, signalling that its resources may be "stolen" by a move constructor or move assignment operator',
      'Copies the object and destroys the original',
      'Swaps two objects in place'
    ],
    correctAnswer: 'Casts the argument to an rvalue reference, signalling that its resources may be "stolen" by a move constructor or move assignment operator',
    explanation: 'std::move is simply a static_cast to T&&. It does not move anything itself; it enables move construction/assignment. After being moved from, an object is in a valid but unspecified state. Use std::move when passing an lvalue to a move constructor to avoid a copy.',
    tags: ['std-move', 'move-semantics', 'rvalue-references', 'coding']
  },
  {
    id: 'cpp-056',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is an initializer list constructor and what advantage does it offer?',
    options: [
      'A constructor that takes a std::initializer_list<T> parameter, allowing brace-initialization with a variable number of elements',
      'A constructor that initializes only the first member',
      'A constructor generated automatically for aggregates',
      'A way to initialize static members'
    ],
    correctAnswer: 'A constructor that takes a std::initializer_list<T> parameter, allowing brace-initialization with a variable number of elements',
    explanation: 'MyContainer(std::initializer_list<int> il) allows "MyContainer c = {1, 2, 3, 4};". std::vector, std::set, and std::map all use this. Initializer-list constructors are preferred by the compiler over other constructors when brace-initialization is used, which can sometimes cause surprising overload resolution.',
    tags: ['initializer-list', 'constructors', 'c++11']
  },
  {
    id: 'cpp-057',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between "std::endl" and "\\n"?',
    options: [
      'They produce the same output on all platforms',
      '"\\n" inserts a newline character; "std::endl" inserts a newline AND flushes the output buffer, which is significantly slower when many lines are printed',
      '"std::endl" adds two newlines',
      '"\\n" flushes the buffer but std::endl does not'
    ],
    correctAnswer: '"\\n" inserts a newline character; "std::endl" inserts a newline AND flushes the output buffer, which is significantly slower when many lines are printed',
    explanation: 'Flushing forces the underlying I/O buffer to write to the OS immediately, which is expensive. For performance-sensitive output (e.g. inside tight loops), prefer "\\n". Use std::endl only when you explicitly need to flush, such as before waiting for user input.',
    tags: ['iostream', 'performance', 'output', 'buffers']
  },
  {
    id: 'cpp-058',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a delegating constructor in C++11?',
    options: [
      'A constructor that calls a base class constructor',
      'A constructor that calls another constructor of the same class in its member initializer list, avoiding duplicated initialization logic',
      'A virtual constructor',
      'A constructor that delegates work to a friend class'
    ],
    correctAnswer: 'A constructor that calls another constructor of the same class in its member initializer list, avoiding duplicated initialization logic',
    explanation: 'Before C++11, shared initialization logic required a private init() function. C++11 allows: "Foo(int x, int y) : Foo(x) { this->y = y; }" — one constructor delegates to another. The target constructor fully initializes the object before the delegating constructor body runs.',
    tags: ['delegating-constructors', 'constructors', 'c++11']
  },
  {
    id: 'cpp-059',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is std::optional and when should you use it?',
    options: [
      'A nullable pointer type',
      'A wrapper that may or may not contain a value of type T, avoiding null pointers and out-of-band sentinel values for "no result"',
      'A thread-safe optional value',
      'A compile-time conditional type'
    ],
    correctAnswer: 'A wrapper that may or may not contain a value of type T, avoiding null pointers and out-of-band sentinel values for "no result"',
    explanation: 'std::optional<T> (C++17) represents an optional value. Use it for functions that may not return a meaningful result: "std::optional<int> find(...)". Check with has_value() or the boolean conversion, access with *opt or opt.value(). It avoids raw pointer returns and magic sentinel values like -1.',
    tags: ['optional', 'c++17', 'nullability', 'api-design']
  },
  {
    id: 'cpp-060',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is std::variant and how does it differ from a C-style union?',
    options: [
      'They are identical',
      'std::variant<A, B, C> is a type-safe tagged union that knows which type it currently holds and calls constructors/destructors correctly; C unions do not track the active member and are unsafe with non-trivial types',
      'std::variant uses more memory than a union',
      'C unions support type-safe access; std::variant does not'
    ],
    correctAnswer: 'std::variant<A, B, C> is a type-safe tagged union that knows which type it currently holds and calls constructors/destructors correctly; C unions do not track the active member and are unsafe with non-trivial types',
    explanation: 'A C union storing a non-trivial object (with a constructor) results in undefined behavior if you read the wrong member. std::variant stores a discriminator, properly constructs/destructs the active member, and provides std::get<T> (throws on wrong type) and std::visit for pattern-matching style dispatch.',
    tags: ['variant', 'union', 'c++17', 'type-safety']
  },
  {
    id: 'cpp-061',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is multiple inheritance and what is the diamond problem?',
    options: [
      'Inheriting from more than one base class; the diamond problem occurs when two base classes share a common ancestor, causing ambiguity and potential data duplication',
      'Multiple inheritance is not supported in C++',
      'The diamond problem only occurs with virtual functions',
      'Multiple inheritance requires all base classes to be abstract'
    ],
    correctAnswer: 'Inheriting from more than one base class; the diamond problem occurs when two base classes share a common ancestor, causing ambiguity and potential data duplication',
    explanation: 'In "class D : public B, public C" where both B and C inherit from A, D would contain two copies of A\'s members. Virtual inheritance ("class B : virtual public A") ensures only one shared copy of A exists in D. std::iostream uses virtual inheritance of std::ios.',
    tags: ['multiple-inheritance', 'diamond-problem', 'virtual-inheritance', 'oop']
  },
  {
    id: 'cpp-062',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the "auto" keyword used for in modern C++?',
    options: [
      'Automatic memory allocation',
      'Type deduction — the compiler infers the type of a variable or function return type from the initializer or return statement, reducing verbosity',
      'Declaring global variables',
      'Making variables thread-local'
    ],
    correctAnswer: 'Type deduction — the compiler infers the type of a variable or function return type from the initializer or return statement, reducing verbosity',
    explanation: '"auto it = myMap.begin();" deduces the iterator type automatically. "auto" is especially useful for complex template types, lambda types, and range-for loops. In C++14, "auto" can be used as a function return type. Note that "auto" deduces the value type (strips references and top-level const), so use "auto&" or "const auto&" to avoid copies.',
    tags: ['auto', 'type-deduction', 'c++11', 'modern-cpp']
  },
  {
    id: 'cpp-063',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What is wrong with the following code?\n\nstd::string& getName() {\n  std::string name = "Alice";\n  return name;\n}',
    options: [
      'Nothing is wrong',
      'It returns a reference to a local variable that is destroyed when the function returns — a dangling reference causing undefined behavior',
      'std::string cannot be returned by reference',
      'The function needs the "const" qualifier'
    ],
    correctAnswer: 'It returns a reference to a local variable that is destroyed when the function returns — a dangling reference causing undefined behavior',
    explanation: 'Local variables are destroyed at the end of their scope (the function). Returning a reference to one produces a dangling reference; any use of the returned reference is undefined behavior. Return by value instead, or ensure the object outlives the reference (e.g. static local or member variable).',
    tags: ['dangling-reference', 'undefined-behavior', 'scope', 'coding']
  },
  {
    id: 'cpp-064',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is structured binding (C++17)?',
    options: [
      'A way to bind data members to memory addresses',
      'A syntax "auto [a, b] = pair;" that decomposes a struct, pair, tuple, or array into named variables in a single declaration',
      'A binding between a class and its template parameters',
      'A way to bind lambda captures'
    ],
    correctAnswer: 'A syntax "auto [a, b] = pair;" that decomposes a struct, pair, tuple, or array into named variables in a single declaration',
    explanation: '"auto [key, val] = *myMap.begin();" destructures a std::pair into two named variables. Works with arrays, structs with all-public members, and types providing tuple-like get<>. Greatly improves readability of loop bodies over maps and multi-value returns.',
    tags: ['structured-bindings', 'c++17', 'tuple', 'destructuring']
  },
  {
    id: 'cpp-065',
    topic: 'cpp',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between pre-increment (++i) and post-increment (i++) in terms of performance for iterators?',
    options: [
      'They are always identical in performance',
      'Pre-increment increments in place and returns the modified object by reference; post-increment must save a copy of the old value, increment, then return the copy — making it potentially slower for complex types like iterators',
      'Post-increment is always faster',
      'Pre-increment is only valid for pointers'
    ],
    correctAnswer: 'Pre-increment increments in place and returns the modified object by reference; post-increment must save a copy of the old value, increment, then return the copy — making it potentially slower for complex types like iterators',
    explanation: 'For built-in types, the compiler optimises both to the same code. For class types (like STL iterators), operator++(int) must create a temporary copy to return the old value, which has real overhead. Prefer ++it over it++ in loops unless the old value is specifically needed.',
    tags: ['increment', 'iterators', 'performance', 'operators']
  },

  // ─────────────────────────────────────────────
  // ADVANCED  (cpp-066 – cpp-095)
  // ─────────────────────────────────────────────

  {
    id: 'cpp-066',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is template specialization and partial specialization?',
    options: [
      'A way to restrict templates to one type only',
      'Full specialization provides a completely custom implementation for a specific type; partial specialization provides a custom implementation for a family of types (e.g. all pointer types T*), with the primary template as the fallback',
      'Both are identical mechanisms',
      'Partial specialization is only available for function templates'
    ],
    correctAnswer: 'Full specialization provides a completely custom implementation for a specific type; partial specialization provides a custom implementation for a family of types (e.g. all pointer types T*), with the primary template as the fallback',
    explanation: '"template<> class Stack<bool>" fully specialises Stack for bool (bit-packing). "template<typename T> class Stack<T*>" partially specialises for all pointer types. Note: function templates can only be fully specialised; partial specialisation is only for class/variable templates.',
    tags: ['template-specialization', 'partial-specialization', 'templates', 'advanced']
  },
  {
    id: 'cpp-067',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is CRTP (Curiously Recurring Template Pattern)?',
    options: [
      'A runtime polymorphism alternative using dynamic_cast',
      'A static polymorphism idiom where a class Derived inherits from Base<Derived>, allowing the base to call derived methods at compile time without virtual dispatch overhead',
      'A pattern for creating singletons',
      'A way to implement multiple inheritance safely'
    ],
    correctAnswer: 'A static polymorphism idiom where a class Derived inherits from Base<Derived>, allowing the base to call derived methods at compile time without virtual dispatch overhead',
    explanation: 'template<typename Derived> class Base { void interface() { static_cast<Derived*>(this)->impl(); } }; class Derived : public Base<Derived> { void impl(); };. CRTP enables zero-overhead polymorphism (no vtable), mixins (adding functionality via the base), and the "enable_shared_from_this" pattern in the standard library.',
    tags: ['crtp', 'templates', 'static-polymorphism', 'idioms']
  },
  {
    id: 'cpp-068',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is template metaprogramming (TMP)?',
    options: [
      'Writing programs that generate C++ source files',
      'Using C++ templates as a compile-time computation engine — performing type manipulations, conditional logic, and value computations entirely at compile time, producing zero-runtime-overhead results',
      'A debugging technique for complex templates',
      'A runtime reflection mechanism'
    ],
    correctAnswer: 'Using C++ templates as a compile-time computation engine — performing type manipulations, conditional logic, and value computations entirely at compile time, producing zero-runtime-overhead results',
    explanation: 'The Turing-complete C++ template system can compute Fibonacci numbers, determine if types are the same (std::is_same), strip qualifiers (std::remove_const), and select types conditionally (std::conditional). constexpr and if constexpr (C++17) provide cleaner alternatives for value computation, while type traits and concept libraries are built on TMP.',
    tags: ['tmp', 'templates', 'compile-time', 'metaprogramming']
  },
  {
    id: 'cpp-069',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What are variadic templates?',
    options: [
      'Templates that can only take one type parameter',
      'Templates that accept any number of template parameters (type or non-type) via the "..." pack expansion syntax, enabling type-safe variadic functions like std::make_tuple and std::printf replacements',
      'Templates that vary at runtime',
      'Templates for variable-length arrays'
    ],
    correctAnswer: 'Templates that accept any number of template parameters (type or non-type) via the "..." pack expansion syntax, enabling type-safe variadic functions like std::make_tuple and std::printf replacements',
    explanation: '"template<typename... Args> void log(Args&&... args)" accepts zero or more arguments of any type. Pack expansion "f(args...)" expands the pack. Used to implement std::tuple, std::make_unique, std::apply, and any type-safe variadic API. Fold expressions (C++17) simplify pack operations: "(... + args)".',
    tags: ['variadic-templates', 'parameter-pack', 'c++11', 'c++17']
  },
  {
    id: 'cpp-070',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What are concepts (C++20) and how do they improve template error messages?',
    options: [
      'Runtime type constraints',
      'Named compile-time predicates on template parameters that provide meaningful error messages when constraints are not satisfied, replacing verbose SFINAE and enable_if patterns',
      'A new syntax for abstract classes',
      'A way to restrict namespace visibility'
    ],
    correctAnswer: 'Named compile-time predicates on template parameters that provide meaningful error messages when constraints are not satisfied, replacing verbose SFINAE and enable_if patterns',
    explanation: '"template<typename T> requires std::integral<T> T gcd(T a, T b)" uses the std::integral concept. If called with a float, the error says "constraints not satisfied" rather than pages of template instantiation noise. Concepts can be defined with "concept Addable = requires(T a, T b) { a + b; }".',
    tags: ['concepts', 'c++20', 'constraints', 'templates', 'sfinae']
  },
  {
    id: 'cpp-071',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is SFINAE (Substitution Failure Is Not An Error)?',
    options: [
      'A runtime error-handling strategy',
      'A template resolution rule: when substituting a template argument causes an error in the immediate context of the function signature, that specialization is silently discarded rather than producing a compile error, allowing overload resolution to continue',
      'A linker optimization',
      'A way to suppress all compiler warnings'
    ],
    correctAnswer: 'A template resolution rule: when substituting a template argument causes an error in the immediate context of the function signature, that specialization is silently discarded rather than producing a compile error, allowing overload resolution to continue',
    explanation: 'SFINAE enables conditional template instantiation. "template<typename T, typename = std::enable_if_t<std::is_integral_v<T>>> void f(T);" is excluded from the overload set for non-integral T. This is the foundation of type traits and was the primary pre-C++20 mechanism for constrained templates. Concepts (C++20) replace most SFINAE use cases.',
    tags: ['sfinae', 'enable-if', 'templates', 'overload-resolution']
  },
  {
    id: 'cpp-072',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is undefined behavior (UB) in C++ and why is it dangerous?',
    options: [
      'Behavior defined as implementation-specific',
      'Code for which the C++ standard imposes no requirements — the compiler may assume it never occurs and optimise accordingly, potentially producing unpredictable results that change with optimization level or compiler version',
      'Behavior that always causes a crash',
      'Behavior caught by the runtime'
    ],
    correctAnswer: 'Code for which the C++ standard imposes no requirements — the compiler may assume it never occurs and optimise accordingly, producing unpredictable results that change with optimization level or compiler version',
    explanation: 'Common UB: signed integer overflow, out-of-bounds array access, use-after-free, dereferencing null, data races, reading an uninitialized variable. Compilers exploit UB for optimisation (dead code elimination based on "this can\'t happen"). Use AddressSanitizer, UBSanitizer, and ThreadSanitizer to detect UB.',
    tags: ['undefined-behavior', 'ub', 'safety', 'advanced']
  },
  {
    id: 'cpp-073',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is std::move_only_function vs std::function (C++23)?',
    options: [
      'They are identical',
      'std::function requires callables to be copyable (heap-allocates internally); std::move_only_function (C++23) accepts move-only callables, avoids unnecessary copies, and has no small-buffer-overflow limitations',
      'std::function is deprecated in C++23',
      'std::move_only_function only works with lambdas'
    ],
    correctAnswer: 'std::function requires callables to be copyable (heap-allocates internally); std::move_only_function (C++23) accepts move-only callables, avoids unnecessary copies, and has no small-buffer-overflow limitations',
    explanation: 'std::function uses type erasure with heap allocation for large callables and requires the callable to be CopyConstructible. This prevents storing unique_ptrs in lambdas captured into std::function. std::move_only_function lifts the copyability requirement. For zero-overhead type erasure, consider function_ref (C++26 proposal) or hand-rolled vtable erasure.',
    tags: ['std-function', 'move-only-function', 'c++23', 'type-erasure']
  },
  {
    id: 'cpp-074',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the copy-and-swap idiom?',
    options: [
      'Using std::copy then std::swap on two containers',
      'An idiom for implementing a strongly exception-safe copy assignment operator: take the argument by value (invoking the copy constructor), then swap the internals with *this — the old data is destroyed when the local copy goes out of scope',
      'Swapping two objects to avoid copies',
      'A way to implement move assignment using swap'
    ],
    correctAnswer: 'An idiom for implementing a strongly exception-safe copy assignment operator: take the argument by value (invoking the copy constructor), then swap the internals with *this — the old data is destroyed when the local copy goes out of scope',
    explanation: '"T& operator=(T other) { swap(*this, other); return *this; }" — the copy happens in the parameter (copy constructor, exception-safe), swap is noexcept, and the old data is cleaned up in other\'s destructor. This achieves strong exception safety and handles self-assignment correctly.',
    tags: ['copy-and-swap', 'exception-safety', 'idioms', 'assignment-operator']
  },
  {
    id: 'cpp-075',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What are coroutines in C++20?',
    options: [
      'A multi-threaded execution model',
      'Functions that can suspend execution and later be resumed, retaining their local state between suspension points, enabling cooperative multitasking, generators, and async/await patterns without threads',
      'Lambdas that run in parallel',
      'A way to call C from C++'
    ],
    correctAnswer: 'Functions that can suspend execution and later be resumed, retaining their local state between suspension points, enabling cooperative multitasking, generators, and async/await patterns without threads',
    explanation: 'C++20 coroutines use co_await, co_yield, and co_return. A function becomes a coroutine when it uses any of these. The compiler transforms it into a state machine heap-allocated as a coroutine frame. Used in networking (cppcoro, Asio), generators, and lazy ranges. Higher-level abstractions like generators and task types must be built on top of the low-level machinery.',
    tags: ['coroutines', 'c++20', 'co-await', 'async']
  },
  {
    id: 'cpp-076',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the memory model in C++11 and what does it guarantee for multi-threaded programs?',
    options: [
      'C++ has no defined multi-threading support',
      'A formal specification of how memory operations in one thread are observed by others, defining happens-before relationships, sequentially consistent atomics, acquire-release semantics, and data race as undefined behavior',
      'A guarantee that all memory operations are visible immediately to all threads',
      'A model that replaces OS-level synchronization entirely'
    ],
    correctAnswer: 'A formal specification of how memory operations in one thread are observed by others, defining happens-before relationships, sequentially consistent atomics, acquire-release semantics, and data race as undefined behavior',
    explanation: 'The C++11 memory model formally defines when writes in thread A are visible to reads in thread B. Atomic operations on std::atomic<T> with appropriate memory_order (seq_cst, acquire, release, relaxed, acq_rel) establish synchronization. Any unsynchronized concurrent access to shared non-atomic data is a data race — undefined behavior.',
    tags: ['memory-model', 'concurrency', 'atomics', 'c++11', 'advanced']
  },
  {
    id: 'cpp-077',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is type erasure in C++ and how is it implemented?',
    options: [
      'Casting types to void*',
      'A technique to store objects of different types with a common interface without inheritance, typically using virtual dispatch, function pointers, or templated wrappers to hide the concrete type',
      'Removing type information with reinterpret_cast',
      'A compiler optimization removing redundant type checks'
    ],
    correctAnswer: 'A technique to store objects of different types with a common interface without inheritance, typically using virtual dispatch, function pointers, or templated wrappers to hide the concrete type',
    explanation: 'std::function, std::any, and std::shared_ptr<void> all use type erasure. The classic approach: an abstract interface (Concept) + templated concrete wrapper (Model<T> : Concept). The outer handle holds a unique_ptr<Concept>. This achieves value semantics without exposing the concrete type to callers.',
    tags: ['type-erasure', 'polymorphism', 'std-function', 'std-any', 'advanced']
  },
  {
    id: 'cpp-078',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is std::atomic and when do you need it?',
    options: [
      'A thread-safe container for complex data',
      'A wrapper around a scalar or pointer type guaranteeing atomic (indivisible) read-modify-write operations without explicit locks, necessary for any shared variable accessed from multiple threads',
      'An atomic transaction system for databases',
      'A way to disable compiler optimizations for a variable'
    ],
    correctAnswer: 'A wrapper around a scalar or pointer type guaranteeing atomic (indivisible) read-modify-write operations without explicit locks, necessary for any shared variable accessed from multiple threads',
    explanation: 'Even "x++" on a shared int is not atomic — it\'s a read, increment, write sequence that can be interleaved. std::atomic<int> x; x.fetch_add(1); is guaranteed indivisible. Use std::atomic for simple flags, counters, and lock-free data structures. For complex operations on multiple variables, use a mutex.',
    tags: ['atomics', 'concurrency', 'lock-free', 'threads']
  },
  {
    id: 'cpp-079',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between std::mutex, std::recursive_mutex, and std::shared_mutex?',
    options: [
      'They are all identical',
      'mutex: non-recursive exclusive lock; recursive_mutex: allows the same thread to lock multiple times without deadlock; shared_mutex: supports multiple concurrent readers (shared lock) and exclusive writers (unique lock)',
      'recursive_mutex is deprecated in C++17',
      'shared_mutex is only for process-level synchronization'
    ],
    correctAnswer: 'mutex: non-recursive exclusive lock; recursive_mutex: allows the same thread to lock multiple times without deadlock; shared_mutex: supports multiple concurrent readers (shared lock) and exclusive writers (unique lock)',
    explanation: 'std::mutex: locking an already-locked mutex from the same thread is UB. std::recursive_mutex: safe for reentrant algorithms at the cost of slightly higher overhead. std::shared_mutex (C++17): use std::shared_lock for reading (multiple concurrent) and std::unique_lock for writing (exclusive), implementing the readers-writer pattern.',
    tags: ['mutex', 'shared-mutex', 'recursive-mutex', 'concurrency']
  },
  {
    id: 'cpp-080',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is return value optimization (RVO) and named RVO (NRVO)?',
    options: [
      'A linker technique for faster startup',
      'Compiler optimizations that construct a returned object directly in the caller\'s storage, eliminating the copy/move constructor call entirely — RVO for unnamed temporaries, NRVO for named local variables',
      'A runtime check that avoids unnecessary returns',
      'An optimization for returning references'
    ],
    correctAnswer: 'Compiler optimizations that construct a returned object directly in the caller\'s storage, eliminating the copy/move constructor call entirely — RVO for unnamed temporaries, NRVO for named local variables',
    explanation: 'Since C++17, RVO (copy elision for prvalues) is mandatory. NRVO is still optional but widely implemented. This means "return BigObject(args);" has zero copy cost. Avoid hindering RVO by returning different named variables from different branches — compilers cannot always apply NRVO in that case.',
    tags: ['rvo', 'nrvo', 'copy-elision', 'performance', 'c++17']
  },
  {
    id: 'cpp-081',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is placement new in C++ and when is it used?',
    options: [
      'Allocating objects in a specific memory arena or buffer, constructing an object at a pre-allocated address without additional heap allocation',
      'A way to place objects on the stack using "new"',
      'An alternative to "new" that uses less memory',
      'A feature for replacing one object with another in the same address'
    ],
    correctAnswer: 'Allocating objects in a specific memory arena or buffer, constructing an object at a pre-allocated address without additional heap allocation',
    explanation: '"new (ptr) MyClass(args);" constructs a MyClass at the address ptr without allocating memory. Used in custom allocators, memory pools, and std::optional/std::variant internals. You must manually call the destructor: "ptr->~MyClass();". Never use regular delete on placement-new objects.',
    tags: ['placement-new', 'memory-management', 'allocators', 'advanced']
  },
  {
    id: 'cpp-082',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What are C++20 ranges and how do they improve on iterator pairs?',
    options: [
      'A container type for numeric ranges',
      'A lazy, composable abstraction over sequences that replaces algorithm(begin, end) pairs with views and pipes (range | transform | filter), enabling declarative, zero-overhead data pipelines',
      'A syntax for integer ranges like Python\'s range()',
      'A replacement for std::vector'
    ],
    correctAnswer: 'A lazy, composable abstraction over sequences that replaces algorithm(begin, end) pairs with views and pipes (range | transform | filter), enabling declarative, zero-overhead data pipelines',
    explanation: '"namespace views = std::views; auto result = data | views::filter(isEven) | views::transform(square) | views::take(5);" — each view is lazy; elements are processed only when iterated. Range algorithms (std::ranges::sort(v)) accept the whole container. Views have no temporary container overhead.',
    tags: ['ranges', 'views', 'c++20', 'lazy-evaluation', 'algorithms']
  },
  {
    id: 'cpp-083',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is std::span and why is it preferred over passing pointer+size pairs?',
    options: [
      'A smart pointer for arrays',
      'A lightweight non-owning view over a contiguous sequence of objects (static or dynamic extent), replacing raw pointer+size pairs while being bounds-checkable and compatible with vectors, arrays, and C arrays',
      'A thread-safe array wrapper',
      'A dynamic array with fixed maximum size'
    ],
    correctAnswer: 'A lightweight non-owning view over a contiguous sequence of objects (static or dynamic extent), replacing raw pointer+size pairs while being bounds-checkable and compatible with vectors, arrays, and C arrays',
    explanation: '"void process(std::span<const int> data)" accepts any contiguous container. std::span<T, N> has compile-time extent; std::span<T> has runtime extent. Avoids pointer+size pairs, enables safe iteration, and works with std::array, std::vector, and C arrays uniformly. Does not own the data.',
    tags: ['span', 'c++20', 'views', 'api-design', 'safety']
  },
  {
    id: 'cpp-084',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between std::condition_variable::wait and wait_for?',
    options: [
      'They are identical',
      'wait blocks indefinitely until notified (with predicate re-check to handle spurious wakeups); wait_for blocks for at most a specified duration, returning a cv_status indicating timeout or success',
      'wait_for does not accept predicates',
      'wait is only available on POSIX systems'
    ],
    correctAnswer: 'wait blocks indefinitely until notified (with predicate re-check to handle spurious wakeups); wait_for blocks for at most a specified duration, returning a cv_status indicating timeout or success',
    explanation: 'Always use the predicate overload: "cv.wait(lock, []{ return ready; });" handles spurious wakeups. "cv.wait_for(lock, 100ms, pred)" returns true if the predicate is satisfied, false on timeout. Condition variables must be used with std::unique_lock<std::mutex>.',
    tags: ['condition-variable', 'concurrency', 'threading', 'spurious-wakeup']
  },
  {
    id: 'cpp-085',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'What is the output of the following code and why?\n\nint i = 0;\nstd::cout << i++ << " " << ++i;',
    options: [
      '0 2',
      '0 1',
      'Undefined behavior',
      '1 2'
    ],
    correctAnswer: 'Undefined behavior',
    explanation: 'Before C++17, the order of evaluation of function arguments (including operator<< arguments) was unsequenced. Modifying "i" twice between sequence points (i++ and ++i both modify i with no intervening sequence point) is undefined behavior. C++17 sequenced operator<< left-to-right, making this "0 2" in C++17+, but still implementation-defined in C++14.',
    tags: ['undefined-behavior', 'sequence-points', 'evaluation-order', 'coding']
  },
  {
    id: 'cpp-086',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is std::jthread (C++20) and how does it improve on std::thread?',
    options: [
      'A thread that uses less memory',
      'A joining thread that automatically joins on destruction (preventing termination for unjoinable threads) and supports cooperative cancellation via stop_token/stop_source',
      'A thread that runs with higher priority',
      'A thread pool implementation'
    ],
    correctAnswer: 'A joining thread that automatically joins on destruction (preventing termination for unjoinable threads) and supports cooperative cancellation via stop_token/stop_source',
    explanation: 'std::thread calls std::terminate if destroyed while joinable. std::jthread destructs safely by joining automatically. The associated stop_token can be polled or waited on to implement cooperative cancellation: the running thread checks stop_token::stop_requested() and returns cleanly.',
    tags: ['jthread', 'c++20', 'threading', 'stop-token', 'concurrency']
  },
  {
    id: 'cpp-087',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the Pimpl idiom (pointer to implementation)?',
    options: [
      'Using raw pointers instead of references',
      'Hiding private implementation details behind an opaque pointer to a forward-declared implementation class, reducing compile-time dependencies and providing a stable ABI',
      'A pattern for implementing pure interfaces',
      'A way to avoid virtual functions'
    ],
    correctAnswer: 'Hiding private implementation details behind an opaque pointer to a forward-declared implementation class, reducing compile-time dependencies and providing a stable ABI',
    explanation: 'class Widget { struct Impl; std::unique_ptr<Impl> pImpl; }; The Impl definition lives in the .cpp file. Clients only see Widget\'s header, avoiding recompilation when Impl changes. This also provides a stable ABI and hides implementation from library users. The Rule of Five applies to the outer class.',
    tags: ['pimpl', 'abi', 'compile-time', 'idioms', 'encapsulation']
  },
  {
    id: 'cpp-088',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is std::launder and when is it required?',
    options: [
      'A function to sanitize memory before use',
      'A function that tells the compiler to not assume aliasing rules across an object\'s lifetime boundary — required after placement new into existing storage to obtain a valid pointer to the new object',
      'A way to clear memory securely',
      'A function to reinterpret a pointer type safely'
    ],
    correctAnswer: 'A function that tells the compiler to not assume aliasing rules across an object\'s lifetime boundary — required after placement new into existing storage to obtain a valid pointer to the new object',
    explanation: 'When you placement-new a new object over existing storage and then use the original pointer, the compiler may cache the old object\'s values. std::launder(ptr) prevents the compiler from using stale cached values and tells it the pointed-to object\'s lifetime has changed. Needed in std::optional and std::variant implementations.',
    tags: ['std-launder', 'placement-new', 'lifetime', 'advanced', 'ub']
  },
  {
    id: 'cpp-089',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What are allocator-aware containers and how do custom allocators work in C++?',
    options: [
      'Containers that use malloc directly',
      'Containers parameterised on an Allocator type that can use custom memory sources (memory pools, arenas, stack buffers) instead of the global heap, enabling performance and determinism improvements in critical systems',
      'Containers that count all allocations automatically',
      'Containers that use garbage collection'
    ],
    correctAnswer: 'Containers that parameterised on an Allocator type that can use custom memory sources (memory pools, arenas, stack buffers) instead of the global heap, enabling performance and determinism improvements in critical systems',
    explanation: 'All STL containers accept a second Allocator template parameter. Custom allocators provide allocate(n) and deallocate(p, n). std::pmr (C++17) uses runtime-polymorphic allocators via memory_resource: pmr::monotonic_buffer_resource for fast arena allocation, pmr::unsynchronized_pool_resource for pools. This avoids expensive heap calls in game loops and real-time systems.',
    tags: ['allocators', 'pmr', 'memory-management', 'c++17', 'advanced']
  },
  {
    id: 'cpp-090',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is EBO (Empty Base Optimization)?',
    options: [
      'Removing unused base classes at link time',
      'A compiler optimization that allows a base class with no data members to occupy zero bytes when used as a base (not a member), commonly exploited by std::tuple and std::unique_ptr to store empty deleters/allocators without overhead',
      'Optimizing empty constructors away',
      'A way to share base class memory across derived classes'
    ],
    correctAnswer: 'A compiler optimization that allows a base class with no data members to occupy zero bytes when used as a base (not a member), commonly exploited by std::tuple and std::unique_ptr to store empty deleters/allocators without overhead',
    explanation: 'C++ requires every complete object to have a unique address, so even an empty class has sizeof == 1. But as a base, EBO allows it to share the address of the derived class subobject, costing zero bytes. std::unique_ptr stores its deleter via EBO — a stateless custom deleter adds no size overhead.',
    tags: ['ebo', 'empty-base-optimization', 'templates', 'performance', 'advanced']
  },
  {
    id: 'cpp-091',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between dynamic_cast, static_cast, reinterpret_cast, and const_cast?',
    options: [
      'They are all identical',
      'static_cast: compile-time checked conversion between related types; dynamic_cast: runtime-checked downcast with RTTI; reinterpret_cast: low-level bit reinterpretation with no type safety; const_cast: adds or removes const/volatile qualifiers only',
      'dynamic_cast is the fastest cast',
      'const_cast can change the underlying type'
    ],
    correctAnswer: 'static_cast: compile-time checked conversion between related types; dynamic_cast: runtime-checked downcast with RTTI; reinterpret_cast: low-level bit reinterpretation with no type safety; const_cast: adds or removes const/volatile qualifiers only',
    explanation: 'Prefer static_cast for numeric conversions and upcasts. Use dynamic_cast for safe downcasting (returns nullptr for pointers, throws std::bad_cast for references on failure). Avoid reinterpret_cast except for low-level system code. Use const_cast only when interfacing with APIs that are not const-correct. Never use C-style casts — they silently chain through these in order.',
    tags: ['casts', 'dynamic-cast', 'static-cast', 'reinterpret-cast', 'const-cast']
  },
  {
    id: 'cpp-092',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the "most vexing parse" in C++?',
    options: [
      'A compiler bug related to parsing templates',
      'An ambiguity where the compiler interprets what looks like a variable definition as a function declaration, e.g. "Widget w(Widget());" declares a function w, not a Widget object',
      'An error caused by missing semicolons',
      'A problem with recursive template instantiation'
    ],
    correctAnswer: 'An ambiguity where the compiler interprets what looks like a variable definition as a function declaration, e.g. "Widget w(Widget());" declares a function w, not a Widget object',
    explanation: '"Widget w(Widget());" is parsed as a function named "w" returning Widget and taking a function pointer. Avoid this with brace initialization: "Widget w{Widget{}}" or "Widget w = Widget(Widget{})". This is one reason uniform initialization with braces was introduced in C++11.',
    tags: ['most-vexing-parse', 'parsing', 'quirks', 'c++11']
  },
  {
    id: 'cpp-093',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is std::future and std::promise and how do they relate?',
    options: [
      'Both represent the same async object',
      'std::promise is the write end of a single-use async channel (set_value/set_exception); std::future is the read end (get() blocks until the value is ready), enabling communication between threads without explicit shared state',
      'std::future is used for multi-producer, multi-consumer queues',
      'std::promise is a replacement for std::thread'
    ],
    correctAnswer: 'std::promise is the write end of a single-use async channel (set_value/set_exception); std::future is the read end (get() blocks until the value is ready), enabling communication between threads without explicit shared state',
    explanation: 'A promise-future pair shares an internal shared state. Thread A holds the future; thread B holds the promise and calls set_value(). Thread A\'s future.get() returns the value or re-throws the exception. std::async returns a future directly. std::shared_future allows multiple consumers of the same result.',
    tags: ['future', 'promise', 'async', 'concurrency', 'c++11']
  },
  {
    id: 'cpp-094',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is std::any and when would you use it over std::variant?',
    options: [
      'They are identical',
      'std::any holds a value of any type with type-erased storage, checked at runtime via any_cast; use when the set of types is not known at compile time. std::variant holds one of a fixed compile-time set of types with exhaustive pattern matching',
      'std::any is faster than std::variant',
      'std::variant supports any type; std::any has a fixed type list'
    ],
    correctAnswer: 'std::any holds a value of any type with type-erased storage, checked at runtime via any_cast; use when the set of types is not known at compile time. std::variant holds one of a fixed compile-time set of types with exhaustive pattern matching',
    explanation: 'std::any is like a type-safe void* — use for plugin systems, scripting engines, or heterogeneous data stores where types are not known statically. std::variant is preferred when you know the possible types — it enables exhaustive std::visit, is more efficient, and provides compile-time exhaustiveness checking.',
    tags: ['std-any', 'variant', 'type-erasure', 'c++17']
  },
  {
    id: 'cpp-095',
    topic: 'cpp',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is structured exception safety and what are the four exception safety guarantees?',
    options: [
      'No-throw, basic, strong, nothrow-all',
      'No guarantee (operation may leave object in an invalid state), Basic guarantee (valid but unspecified state), Strong guarantee (commit-or-rollback — no observable change on failure), No-throw guarantee (never throws)',
      'There are only two levels: safe and unsafe',
      'Exception safety only applies to constructors'
    ],
    correctAnswer: 'No guarantee (operation may leave object in an invalid state), Basic guarantee (valid but unspecified state), Strong guarantee (commit-or-rollback — no observable change on failure), No-throw guarantee (never throws)',
    explanation: 'Aim for at least the Basic guarantee in all code. The Strong guarantee is achievable via copy-and-swap. The No-throw guarantee (mark with noexcept) is required for move constructors and destructors for optimal STL performance — std::vector\'s reallocation only uses move if the move constructor is noexcept.',
    tags: ['exception-safety', 'noexcept', 'strong-guarantee', 'basic-guarantee']
  },

  // ─────────────────────────────────────────────
  // MNC LEVEL  (cpp-096 – cpp-120)
  // ─────────────────────────────────────────────

  {
    id: 'cpp-096',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a high-performance memory pool allocator in C++?',
    options: [
      'Using malloc for every allocation',
      'Pre-allocate a large block; subdivide into fixed-size chunks; maintain a free-list of available chunks; allocate by popping from the free list and deallocate by pushing back — O(1) alloc/free with excellent cache locality',
      'Using std::vector to track allocations',
      'Using a garbage collector'
    ],
    correctAnswer: 'Pre-allocate a large block; subdivide into fixed-size chunks; maintain a free-list of available chunks; allocate by popping from the free list and deallocate by pushing back — O(1) alloc/free with excellent cache locality',
    explanation: 'Memory pools eliminate heap fragmentation and amortize system call overhead. Fixed-size pools are trivial; variable-size use segregated free lists (size-class buckets). For thread safety, use per-thread caches with a shared global pool. std::pmr::pool_resource implements this in the standard library. Embed the next pointer in the free chunk itself to avoid extra allocations.',
    tags: ['memory-pool', 'allocators', 'performance', 'system-design', 'mnc']
  },
  {
    id: 'cpp-097',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How do you implement a lock-free queue in C++ using std::atomic?',
    options: [
      'Using a mutex around a std::deque',
      'A Michael-Scott queue using atomic head/tail pointers with compare_exchange_weak CAS loops; enqueue atomically links a new node at the tail, dequeue atomically advances the head, both without locks',
      'Using std::atomic<std::queue<T>>',
      'A lock-free queue is impossible without hardware support'
    ],
    correctAnswer: 'A Michael-Scott queue using atomic head/tail pointers with compare_exchange_weak CAS loops; enqueue atomically links a new node at the tail, dequeue atomically advances the head, both without locks',
    explanation: 'The Michael-Scott algorithm uses dummy head nodes. Enqueue: allocate node, CAS next of current tail from nullptr to new node, then advance tail. Dequeue: read head->next (the real first element), CAS head forward. Requires ABA protection (tagged pointers or hazard pointers). Avoid for most production use — consider a bounded SPSC queue (single-producer single-consumer) for maximum throughput.',
    tags: ['lock-free', 'atomics', 'concurrent-data-structures', 'cas', 'mnc']
  },
  {
    id: 'cpp-098',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you optimize a C++ hot path for cache performance?',
    options: [
      'Use more heap allocations for flexibility',
      'Apply data-oriented design: use struct-of-arrays (SoA) over array-of-structs (AoS), keep hot data contiguous, avoid pointer chasing, prefetch with __builtin_prefetch, use alignas to align to cache lines, and minimize false sharing in multi-threaded code',
      'Use virtual functions for flexibility in the hot path',
      'Allocate all data on the heap for speed'
    ],
    correctAnswer: 'Apply data-oriented design: use struct-of-arrays (SoA) over array-of-structs (AoS), keep hot data contiguous, avoid pointer chasing, prefetch with __builtin_prefetch, use alignas to align to cache lines, and minimize false sharing in multi-threaded code',
    explanation: 'Cache performance dominates modern CPU performance. AoS (array of {x,y,z}) wastes bandwidth if only x is needed; SoA (separate x[], y[], z[] arrays) accesses only needed data. False sharing: two threads writing adjacent cache-line words invalidate each other\'s cache; pad with alignas(64). Profile with perf/vtune before optimizing.',
    tags: ['cache-performance', 'data-oriented-design', 'soa', 'false-sharing', 'mnc']
  },
  {
    id: 'cpp-099',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a plugin system in C++ with ABI stability?',
    options: [
      'Expose all implementation details in headers',
      'Define a pure virtual C++ interface or a flat C API in the plugin boundary; version the interface; load plugins with dlopen/LoadLibrary; use factory functions returning interface pointers; avoid STL types across the boundary',
      'Share std::vector and std::string directly across plugin boundaries',
      'Use templates for all plugin interfaces'
    ],
    correctAnswer: 'Define a pure virtual C++ interface or a flat C API in the plugin boundary; version the interface; load plugins with dlopen/LoadLibrary; use factory functions returning interface pointers; avoid STL types across the boundary',
    explanation: 'C++ ABI is not standardized across compilers/versions. The safest plugin boundary is a C API (extern "C" factory functions returning opaque handles). Pure virtual interfaces work if the plugin and host use the same compiler version. Never pass std::string or std::vector across the boundary — their layouts differ. Version interfaces with inheritance for backward compat.',
    tags: ['plugin-system', 'abi', 'shared-library', 'system-design', 'mnc']
  },
  {
    id: 'cpp-100',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'What techniques do you use to minimize binary size in an embedded C++ project?',
    options: [
      'Enable all optimizations including -O3',
      'Use -Os or -Oz, disable exceptions and RTTI (-fno-exceptions -fno-rtti), avoid virtual functions, use link-time optimization (LTO), gc-sections with -ffunction-sections -fdata-sections --gc-sections, and avoid std::iostream',
      'Include all STL headers for completeness',
      'Use dynamic linking for all libraries'
    ],
    correctAnswer: 'Use -Os or -Oz, disable exceptions and RTTI (-fno-exceptions -fno-rtti), avoid virtual functions, use link-time optimization (LTO), gc-sections with -ffunction-sections -fdata-sections --gc-sections, and avoid std::iostream',
    explanation: 'Embedded systems have tight flash constraints. -fno-exceptions saves the unwinding tables (often 10–20% of binary). -fno-rtti removes type_info objects. LTO allows the linker to eliminate dead code across translation units. --gc-sections removes unreferenced functions/data. std::iostream can add 50–100KB; use printf or custom output instead.',
    tags: ['embedded', 'binary-size', 'lto', 'rtti', 'exceptions', 'mnc']
  },
  {
    id: 'cpp-101',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How do you implement a type-safe heterogeneous event bus in modern C++?',
    options: [
      'Using a global std::vector of void*',
      'Use a std::unordered_map keyed by std::type_index mapping to type-erased handler lists; subscribe<EventType>(handler) stores the handler; publish<EventType>(event) looks up by type_index and invokes all handlers',
      'Using a single global callback function',
      'Using std::any as the event type for all handlers'
    ],
    correctAnswer: 'Use a std::unordered_map keyed by std::type_index mapping to type-erased handler lists; subscribe<EventType>(handler) stores the handler; publish<EventType>(event) looks up by type_index and invokes all handlers',
    explanation: 'template<typename E> void subscribe(std::function<void(const E&)> h) { handlers[typeid(E)].push_back([h](const void* e){ h(*static_cast<const E*>(e)); }); }. publish casts and dispatches. Thread safety requires a mutex or read-copy-update. Subscription tokens (RAII unsubscribe handles) prevent stale handlers.',
    tags: ['event-bus', 'type-erasure', 'type-index', 'design-patterns', 'mnc']
  },
  {
    id: 'cpp-102',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How do you profile and identify performance bottlenecks in a C++ application?',
    options: [
      'Add std::cout timing to every function',
      'Use sampling profilers (perf, VTune, Instruments) for CPU hotspots, instrumenting profilers (Tracy, Optick) for frame-level detail, std::chrono high-resolution timers for micro-benchmarks, and Google Benchmark for reproducible measurements',
      'Only optimize after profiling with Valgrind',
      'Rely on compiler warnings for performance hints'
    ],
    correctAnswer: 'Use sampling profilers (perf, VTune, Instruments) for CPU hotspots, instrumenting profilers (Tracy, Optick) for frame-level detail, std::chrono high-resolution timers for micro-benchmarks, and Google Benchmark for reproducible measurements',
    explanation: 'Sampling profilers interrupt the process and record the call stack — low overhead. perf stat shows cache misses, branch mispredictions, and IPC. Heaptrack/massif profiles heap usage over time. Google Benchmark controls for CPU frequency scaling and reports ns/iteration. Always profile with optimizations enabled (-O2/-O3) on release builds.',
    tags: ['profiling', 'benchmarking', 'performance', 'tools', 'mnc']
  },
  {
    id: 'cpp-103',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a thread pool in C++?',
    options: [
      'Spawning a new thread for every task',
      'Pre-create N threads; each thread loops on a shared task queue (deque + mutex + condition_variable); submit() enqueues a packaged_task and returns a future; threads pick tasks in FIFO order; graceful shutdown signals all threads',
      'Using a single background thread for all work',
      'Using std::async for every task'
    ],
    correctAnswer: 'Pre-create N threads; each thread loops on a shared task queue (deque + mutex + condition_variable); submit() enqueues a packaged_task and returns a future; threads pick tasks in FIFO order; graceful shutdown signals all threads',
    explanation: 'Thread pool avoids the overhead of repeated thread creation. Use hardware_concurrency() for N. std::packaged_task<void()> wraps any callable; get_future() provides the result. Shutdown: set a stop flag and notify_all(). Work-stealing pools (like TBB) use per-thread deques to reduce contention. C++23\'s std::execution may standardize this.',
    tags: ['thread-pool', 'concurrency', 'packaged-task', 'condition-variable', 'mnc']
  },
  {
    id: 'cpp-104',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'What are common C++ security vulnerabilities and how do you prevent them?',
    options: [
      'C++ has no security vulnerabilities by design',
      'Buffer overflows (use std::array/vector with at()), use-after-free (use smart pointers and RAII), integer overflow (use -ftrapv or safeint), format string attacks (prefer type-safe streams), and uninitialized reads (value-initialize all variables). Use ASan, TSan, MSan, and fuzzing',
      'Only SQL injection is relevant in C++',
      'Compile in debug mode to prevent vulnerabilities'
    ],
    correctAnswer: 'Buffer overflows (use std::array/vector with at()), use-after-free (use smart pointers and RAII), integer overflow (use -ftrapv or safeint), format string attacks (prefer type-safe streams), and uninitialized reads (value-initialize all variables). Use ASan, TSan, MSan, and fuzzing',
    explanation: 'Memory safety is the primary C++ security concern. AddressSanitizer detects buffer overflows and use-after-free at runtime. MemorySanitizer finds uninitialized reads. ThreadSanitizer finds data races. Fuzzing (libFuzzer, AFL++) finds inputs triggering vulnerabilities. Enable stack canaries (-fstack-protector-all), ASLR, and CFI (Control Flow Integrity) for deployed binaries.',
    tags: ['security', 'asan', 'buffer-overflow', 'use-after-free', 'mnc']
  },
  {
    id: 'cpp-105',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a zero-copy serialization system in C++?',
    options: [
      'Using JSON for all data formats',
      'Use FlatBuffers or Cap\'n Proto: store data in a layout-compatible memory format so it can be used directly from the buffer without deserialization; schema-driven code generation produces accessors; memory-map the file for true zero-copy I/O',
      'Serialize with std::memcpy for every struct',
      'Use XML for human-readability'
    ],
    correctAnswer: 'Use FlatBuffers or Cap\'n Proto: store data in a layout-compatible memory format so it can be used directly from the buffer without deserialization; schema-driven code generation produces accessors; memory-map the file for true zero-copy I/O',
    explanation: 'FlatBuffers encodes data in a flat memory layout; the generated C++ accessors read directly from the raw buffer without parsing — O(1) access, no allocation. Cap\'n Proto goes further with no encoding/decoding at all. For custom protocols: pack structs (pragmatic pack), use network byte order (htons/ntohl), validate with CBOR or protobuf. mmap enables the OS to page data on demand.',
    tags: ['serialization', 'zero-copy', 'flatbuffers', 'capnproto', 'mnc']
  },
  {
    id: 'cpp-106',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How do you handle shared library versioning and ABI compatibility in C++?',
    options: [
      'Never change function signatures',
      'Use semantic versioning for the library, soname versioning (libfoo.so.1), symbol versioning scripts to expose only stable API, the Pimpl idiom and opaque handles to isolate internals, and restrict the public API to C-compatible or fixed-layout types',
      'Recompile all consumers on every change',
      'Use dynamic_cast to handle ABI differences at runtime'
    ],
    correctAnswer: 'Use semantic versioning for the library, soname versioning (libfoo.so.1), symbol versioning scripts to expose only stable API, the Pimpl idiom and opaque handles to isolate internals, and restrict the public API to C-compatible or fixed-layout types',
    explanation: 'ABI breaks happen when: changing vtable layout (adding/reordering virtual functions), changing class size, changing function signatures. Mitigate: never change public base class virtuals; add functionality via non-virtual functions or new classes; use linker version scripts (--version-script) to hide private symbols; verify with ABI compliance checker tools like abidiff.',
    tags: ['abi', 'shared-library', 'versioning', 'pimpl', 'mnc']
  },
  {
    id: 'cpp-107',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'What is SIMD and how do you use it in C++?',
    options: [
      'A multi-threading framework',
      'Single Instruction, Multiple Data: CPU instructions that operate on multiple data elements simultaneously (e.g. adding 8 floats in one instruction). Used via intrinsics (<immintrin.h>), auto-vectorization hints (aligned data, restrict), or libraries like Eigen, xsimd, std::experimental::simd',
      'A compiler flag for optimization',
      'A way to use multiple CPU cores'
    ],
    correctAnswer: 'Single Instruction, Multiple Data: CPU instructions that operate on multiple data elements simultaneously (e.g. adding 8 floats in one instruction). Used via intrinsics (<immintrin.h>), auto-vectorization hints (aligned data, restrict), or libraries like Eigen, xsimd, std::experimental::simd',
    explanation: 'AVX2 processes 256 bits at once (8 floats or 4 doubles). Use alignas(32) for aligned data. Intrinsics: _mm256_add_ps adds 8 floats. For portability, prefer auto-vectorization: write scalar loops, align data, avoid aliasing (use restrict or __restrict__), and let -O2 -march=native vectorize. Verify with compiler explorer or perf.',
    tags: ['simd', 'avx', 'vectorization', 'performance', 'mnc']
  },
  {
    id: 'cpp-108',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a compile-time reflection system in C++?',
    options: [
      'Using dynamic_cast at runtime',
      'Use template-based trait registration: REFLECT macros generate constexpr tuples of field name/pointer pairs; iterate at compile time with std::apply or if constexpr; C++26 static reflection (P2996) will provide built-in __reflect() intrinsics',
      'Using std::type_info only',
      'Compile-time reflection is impossible in C++'
    ],
    correctAnswer: 'Use template-based trait registration: REFLECT macros generate constexpr tuples of field name/pointer pairs; iterate at compile time with std::apply or if constexpr; C++26 static reflection (P2996) will provide built-in __reflect() intrinsics',
    explanation: 'BOOST_HANA and Magic Enum implement partial reflection via macros/intrinsics. Custom approach: REFLECT(Foo, x, y, z) generates a traits specialization with a constexpr tuple of {"x", &Foo::x}, {"y", &Foo::y}. Use std::apply to iterate fields for serialisation, hashing, or UI binding. P2996 (C++26) will make this a language feature.',
    tags: ['reflection', 'compile-time', 'templates', 'metaprogramming', 'mnc']
  },
  {
    id: 'cpp-109',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How do you use compile-time computations (consteval, constexpr) to improve runtime performance?',
    options: [
      'Compile-time computations have no runtime benefit',
      'Evaluate lookup tables, hash maps, CRC tables, prime sieves, and error strings at compile time with constexpr/consteval functions and constinit variables, so the binary contains pre-computed data rather than runtime computation',
      'Use macros instead of constexpr for performance',
      'consteval runs slower than runtime due to compiler overhead'
    ],
    correctAnswer: 'Evaluate lookup tables, hash maps, CRC tables, prime sieves, and error strings at compile time with constexpr/consteval functions and constinit variables, so the binary contains pre-computed data rather than runtime computation',
    explanation: 'constexpr auto SIN_TABLE = generate_sin_table<256>(); computes 256 sin values at compile time. consteval (C++20) forces compile-time evaluation. constinit guarantees constant initialization, avoiding static initialization order problems. Move regex compilation, JSON parsing, and compression tables to compile time using these features.',
    tags: ['constexpr', 'consteval', 'constinit', 'compile-time', 'performance', 'mnc']
  },
  {
    id: 'cpp-110',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you build a C++ coroutine-based async I/O framework?',
    options: [
      'Using blocking I/O with threads',
      'Combine C++20 coroutines with an event loop (epoll/io_uring on Linux, IOCP on Windows): co_await suspends the coroutine and registers a completion callback; the event loop resumes the coroutine handle when the I/O completes; tasks compose naturally with co_await',
      'Using std::async for all I/O',
      'Coroutines cannot be used for I/O'
    ],
    correctAnswer: 'Combine C++20 coroutines with an event loop (epoll/io_uring on Linux, IOCP on Windows): co_await suspends the coroutine and registers a completion callback; the event loop resumes the coroutine handle when the I/O completes; tasks compose naturally with co_await',
    explanation: 'io_uring (Linux 5.1+) provides a ring buffer of submission/completion events enabling true async I/O without system call overhead. A custom awaitable wraps the I/O submission; its await_suspend registers the coroutine_handle as the completion continuation. Libraries like liburing, Asio (C++23 executor proposal), and cppcoro provide ready-made building blocks.',
    tags: ['coroutines', 'async-io', 'io-uring', 'event-loop', 'c++20', 'mnc']
  },
  {
    id: 'cpp-111',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a safe, generic object pool in C++ with RAII handles?',
    options: [
      'Using a global array of raw pointers',
      'Pre-allocate N objects; issue std::unique_ptr with a custom deleter that returns the object to the pool rather than destroying it; use std::deque or intrusive list as the free list; provide acquire() returning a RAII handle (PoolHandle<T>)',
      'Allocate and destroy on every acquire/release',
      'Use std::shared_ptr with a counter'
    ],
    correctAnswer: 'Pre-allocate N objects; issue std::unique_ptr with a custom deleter that returns the object to the pool rather than destroying it; use std::deque or intrusive list as the free list; provide acquire() returning a RAII handle (PoolHandle<T>)',
    explanation: 'Custom deleter: auto deleter = [this](T* p){ pool_.push_back(p); }; return std::unique_ptr<T, decltype(deleter)>(obj, deleter);. The handle type is a unique_ptr with a custom deleter — it is RAII-safe and moveable. For thread-safety, protect the free list with a mutex or use a lock-free stack. Reset the object state on release to prevent stale data leaks.',
    tags: ['object-pool', 'raii', 'custom-deleter', 'unique-ptr', 'mnc']
  },
  {
    id: 'cpp-112',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'What is branch prediction and how do you help the CPU predict branches in C++?',
    options: [
      'Branches are always predicted perfectly by modern CPUs',
      'Branch prediction is the CPU\'s guess about which path an if/switch will take; help it with [[likely]]/[[unlikely]] attributes (C++20), sort data to make branches predictable, prefer branchless code for tight loops, and use profile-guided optimization (PGO)',
      'Use more branches to give the CPU more data',
      'Only SIMD code is affected by branch prediction'
    ],
    correctAnswer: 'Branch prediction is the CPU\'s guess about which path an if/switch will take; help it with [[likely]]/[[unlikely]] attributes (C++20), sort data to make branches predictable, prefer branchless code for tight loops, and use profile-guided optimization (PGO)',
    explanation: 'A branch misprediction costs 10–20 cycles on modern CPUs. [[likely]] if (condition) hints the compiler to layout code for the common path. Branchless: use conditional moves (ternary often compiles to cmov). Sort arrays before processing — a sorted array makes "if x > threshold" perfectly predictable. PGO instruments the binary, profiles real workloads, and recompiles with actual branch probabilities.',
    tags: ['branch-prediction', 'likely-unlikely', 'pgo', 'performance', 'mnc']
  },
  {
    id: 'cpp-113',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a header-only C++ library and what are the tradeoffs?',
    options: [
      'Put everything in a single .cpp file',
      'Implement all code in headers (using inline, template, constexpr): easy distribution (drop-in include), no separate compilation step. Tradeoffs: longer compile times, increased binary size from multiple instantiations, internal details exposed, harder to maintain ABI stability',
      'Header-only libraries are always the best approach',
      'Use shared libraries for header-only code'
    ],
    correctAnswer: 'Implement all code in headers (using inline, template, constexpr): easy distribution (drop-in include), no separate compilation step. Tradeoffs: longer compile times, increased binary size from multiple instantiations, internal details exposed, harder to maintain ABI stability',
    explanation: 'Header-only works well for small, template-heavy libraries (Catch2, nlohmann/json, GLM). For larger libraries, use explicit template instantiation declarations to reduce compile times. Precompiled headers (PCH) and C++20 modules mitigate compilation overhead. Provide an optional "single-file" amalgamation for easy embedding.',
    tags: ['header-only', 'library-design', 'templates', 'compile-times', 'mnc']
  },
  {
    id: 'cpp-114',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How do you implement a compile-time state machine using C++ templates or constexpr?',
    options: [
      'Using a runtime switch-case statement',
      'Define states as types, transitions as template specializations or constexpr tables; validate at compile time that all transitions are valid; use std::variant<States...> for the current state with std::visit for dispatch — zero-overhead state machine with compile-time verification',
      'Using a map of strings to function pointers',
      'State machines cannot be compile-time in C++'
    ],
    correctAnswer: 'Define states as types, transitions as template specializations or constexpr tables; validate at compile time that all transitions are valid; use std::variant<States...> for the current state with std::visit for dispatch — zero-overhead state machine with compile-time verification',
    explanation: 'Boost.MSM and boost::sml use template-based state machine definitions that generate optimal code. Simple approach: constexpr tables of (state, event) → (next_state, action) pairs; validate all states and events are handled at compile time with static_assert. std::visit on std::variant<Idle, Running, Error> enables exhaustive dispatch without virtual functions.',
    tags: ['state-machine', 'templates', 'variant', 'compile-time', 'mnc']
  },
  {
    id: 'cpp-115',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'What is link-time optimization (LTO) and whole program optimization (WPO) in C++?',
    options: [
      'Optimizations that only affect header files',
      'LTO/WPO defer optimization to link time when the full call graph is visible across translation units, enabling cross-module inlining, dead code elimination, and interprocedural constant propagation — typically 5–15% runtime improvement',
      'A way to reduce link times',
      'Optimizations exclusive to debug builds'
    ],
    correctAnswer: 'LTO/WPO defer optimization to link time when the full call graph is visible across translation units, enabling cross-module inlining, dead code elimination, and interprocedural constant propagation — typically 5–15% runtime improvement',
    explanation: 'Enable with -flto (GCC/Clang) or /GL /LTCG (MSVC). Thin LTO (Clang) provides most of the benefit with much faster link times by creating per-module summaries. Pair with -fvisibility=hidden to hide internal symbols, enabling more aggressive optimization and reducing the exported symbol table for shared libraries.',
    tags: ['lto', 'wpo', 'optimization', 'linker', 'performance', 'mnc']
  },
  {
    id: 'cpp-116',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a domain-specific language (DSL) embedded in C++ using expression templates?',
    options: [
      'Using std::string concatenation',
      'Expression templates build a compile-time tree of operation nodes (Add<Mul<A,B>,C>) by overloading operators to return expression objects rather than values; the tree is evaluated lazily when assigned to a result, fusing operations and eliminating temporaries — used in Eigen, Blaze, and LLDB\'s type system',
      'Using a separate parser for the DSL',
      'Expression templates require C++ macros'
    ],
    correctAnswer: 'Expression templates build a compile-time tree of operation nodes (Add<Mul<A,B>,C>) by overloading operators to return expression objects rather than values; the tree is evaluated lazily when assigned to a result, fusing operations and eliminating temporaries — used in Eigen, Blaze, and LLDB\'s type system',
    explanation: 'template<typename L, typename R> struct Add { L l; R r; auto eval(int i) { return l.eval(i) + r.eval(i); } }. operator+(Vec a, Vec b) returns Add<Vec,Vec> not a Vec. The full expression "a + b * c" builds the tree Add<Vec, Mul<Vec,Vec>>. eval() traverses it once, fusing all operations — no intermediate temporaries, no extra loops. C++20 constexpr and ranges reduce the need but expression templates remain the performance ceiling for linear algebra.',
    tags: ['expression-templates', 'dsl', 'eigen', 'lazy-evaluation', 'mnc']
  },
  {
    id: 'cpp-117',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'How do you write secure cryptographic code in C++?',
    options: [
      'Implement cryptographic primitives from scratch',
      'Use audited libraries (OpenSSL, libsodium, Botan); never roll your own crypto; use constant-time comparison (CRYPTO_memcmp or std::equal with a HMAC to prevent timing attacks); zeroize secret memory (SecureZeroMemory / explicit_bzero); avoid caching secrets in registers; use hardware RNG (RAND_bytes)',
      'Store keys in global variables for easy access',
      'Use MD5 for fast secure hashing'
    ],
    correctAnswer: 'Use audited libraries (OpenSSL, libsodium, Botan); never roll your own crypto; use constant-time comparison (CRYPTO_memcmp or std::equal with a HMAC to prevent timing attacks); zeroize secret memory (SecureZeroMemory / explicit_bzero); avoid caching secrets in registers; use hardware RNG (RAND_bytes)',
    explanation: 'Cryptographic pitfalls in C++: std::memset on secrets may be optimised out (use SecureZeroMemory or volatile); string comparison with == is not constant-time (use CRYPTO_memcmp); std::rand is not cryptographically secure; stack secrets may be swapped to disk. libsodium\'s high-level API (crypto_box, crypto_secretbox, crypto_sign) abstracts away most pitfalls safely.',
    tags: ['cryptography', 'security', 'timing-attacks', 'libsodium', 'mnc']
  },
  {
    id: 'cpp-118',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How do C++20 modules improve on the traditional header/source file model?',
    options: [
      'Modules are just precompiled headers with a new syntax',
      'Modules partition code into named units with explicit import/export; they are parsed and compiled once into Binary Module Interface (BMI) files; macros do not leak across module boundaries; compile times improve dramatically for large codebases; no include guards needed',
      'Modules replace the linker',
      'Modules are only for standard library code'
    ],
    correctAnswer: 'Modules partition code into named units with explicit import/export; they are parsed and compiled once into Binary Module Interface (BMI) files; macros do not leak across module boundaries; compile times improve dramatically for large codebases; no include guards needed',
    explanation: '"export module math;" followed by "export int add(int, int);" exposes only what is explicitly exported. Importers see no macros or unexported names. BMIs are compiled once per module (not once per including translation unit). Large codebases see 10–40x compile time reductions. Partial adoption is possible: "module;" + header units bridge headers into modules.',
    tags: ['modules', 'c++20', 'compile-times', 'bmi', 'tooling', 'mnc']
  },
  {
    id: 'cpp-119',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a heterogeneous task graph execution engine in C++?',
    options: [
      'Execute all tasks in a single thread in sequence',
      'Model tasks as nodes in a DAG with dependency edges; topologically sort or use a reference-count-to-zero trigger (decrement predecessor count on completion, enqueue when it reaches zero); execute ready tasks on a thread pool; support heterogeneous executors (CPU, GPU, IO)',
      'Use a single global queue for all task types',
      'Use std::async for every individual task'
    ],
    correctAnswer: 'Model tasks as nodes in a DAG with dependency edges; topologically sort or use a reference-count-to-zero trigger (decrement predecessor count on completion, enqueue when it reaches zero); execute ready tasks on a thread pool; support heterogeneous executors (CPU, CPU-SIMD, GPU-CUDA, IO)',
    explanation: 'Systems like Intel TBB Flow Graph, CUDA Graphs, and Taskflow implement this pattern. Each node stores its payload and a successor list. On completion, atomically decrement each successor\'s pending count; if it hits zero, submit to the appropriate executor. Cycle detection at graph construction time. Critical-path-first scheduling minimizes makespan.',
    tags: ['task-graph', 'dag', 'parallelism', 'thread-pool', 'system-design', 'mnc']
  },
  {
    id: 'cpp-120',
    topic: 'cpp',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How do you build a production-grade C++ project with CMake, testing, sanitizers, and CI?',
    options: [
      'Use a single Makefile with hardcoded compiler flags',
      'Use CMake with modern targets (target_include_directories, target_link_libraries); CTest + Google Test/Catch2 for testing; AddressSanitizer/UBSanitizer builds as separate CMake presets; clang-tidy and cppcheck for static analysis; ccache to speed incremental builds; GitHub Actions/GitLab CI for PR gates',
      'Compile manually and share binaries',
      'Use only release builds in CI'
    ],
    correctAnswer: 'Use CMake with modern targets (target_include_directories, target_link_libraries); CTest + Google Test/Catch2 for testing; AddressSanitizer/UBSanitizer builds as separate CMake presets; clang-tidy and cppcheck for static analysis; ccache to speed incremental builds; GitHub Actions/GitLab CI for PR gates',
    explanation: 'Modern CMake (3.15+) avoids global flags; each target declares its own requirements. CMakePresets.json standardizes Debug/Release/Sanitizer/RelWithDebInfo configurations. CI pipeline: configure → build → unit tests → sanitizer runs → static analysis → packaging. Conan or vcpkg for dependency management. clang-format for consistent style enforced as a CI gate.',
    tags: ['cmake', 'ci', 'sanitizers', 'testing', 'tooling', 'mnc']
  }
];