/**
 * src/data/interview/java.ts
 * Java Interview Questions (Difficult Set)
 * Levels: Beginner (10) -> Intermediate (35) -> Advanced (40) -> MNC (35)
 */

import { InterviewQuestion } from '@/src/types/interview';

export const javaQuestions: InterviewQuestion[] = [
  // ===================== BEGINNER (10) =====================
  {
    id: 'java-001',
    topic: 'java',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What makes Java "platform independent"?',
    options: [
      'Java source code is interpreted directly by the operating system',
      'Java compiles to bytecode that runs on any device with a compatible JVM, rather than targeting a specific OS/CPU',
      'Java programs can only run on Windows',
      'Java requires a different compiler for each operating system'
    ],
    correctAnswer: 'Java compiles to bytecode that runs on any device with a compatible JVM, rather than targeting a specific OS/CPU',
    explanation: 'The "write once, run anywhere" principle comes from javac compiling source into platform-neutral bytecode, which the Java Virtual Machine then interprets/JIT-compiles for the host platform.',
    tags: ['jvm', 'fundamentals']
  },
  {
    id: 'java-002',
    topic: 'java',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which keyword is used to create a subclass that inherits from a parent class?',
    options: [
      'implements',
      'inherits',
      'extends',
      'super'
    ],
    correctAnswer: 'extends',
    explanation: 'A class uses extends to inherit fields and methods from a single parent class, since Java supports only single class inheritance (multiple inheritance of type is achieved via interfaces).',
    tags: ['oop', 'inheritance']
  },
  {
    id: 'java-003',
    topic: 'java',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'What is the output?\n\nSystem.out.println(5 / 2);',
    options: [
      '2',
      '2.5',
      '2.0',
      'A compile error'
    ],
    correctAnswer: '2',
    explanation: 'Since both operands are int literals, Java performs integer division, truncating the fractional part, resulting in 2 rather than 2.5.',
    tags: ['operators', 'output', 'types']
  },
  {
    id: 'java-004',
    topic: 'java',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the entry point method signature for a runnable Java application?',
    options: [
      'void main(String args)',
      'public static void main(String[] args)',
      'public void main()',
      'static main(String[] args)'
    ],
    correctAnswer: 'public static void main(String[] args)',
    explanation: 'The JVM looks for this exact public static void main(String[] args) signature as the application\u2019s entry point, since it must be callable without instantiating the class.',
    tags: ['fundamentals', 'syntax']
  },
  {
    id: 'java-005',
    topic: 'java',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which of these is a primitive type in Java?',
    options: [
      'String',
      'Integer',
      'int',
      'Object'
    ],
    correctAnswer: 'int',
    explanation: 'int is one of Java\u2019s eight primitive types (byte, short, int, long, float, double, char, boolean); String, Integer, and Object are all reference types.',
    tags: ['types', 'fundamentals']
  },
  {
    id: 'java-006',
    topic: 'java',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does the "final" keyword mean when applied to a variable?',
    options: [
      'The variable can be reassigned only once more',
      'The variable\u2019s reference cannot be reassigned after initialization (though a final object\u2019s internal state may still be mutable)',
      'The variable is automatically garbage collected',
      'The variable becomes a constant available globally'
    ],
    correctAnswer: 'The variable\u2019s reference cannot be reassigned after initialization (though a final object\u2019s internal state may still be mutable)',
    explanation: 'final on a variable locks the reference/value after assignment, but for object references, the referenced object\u2019s own fields can still change unless the object itself is designed to be immutable.',
    tags: ['final', 'fundamentals']
  },
  {
    id: 'java-007',
    topic: 'java',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the purpose of a constructor in a Java class?',
    options: [
      'To destroy an object when no longer needed',
      'To define static utility methods',
      'To initialize a newly created object\u2019s state',
      'To override a parent class method'
    ],
    correctAnswer: 'To initialize a newly created object\u2019s state',
    explanation: 'A constructor is invoked automatically when an object is instantiated with "new", typically used to set initial field values or perform setup logic.',
    tags: ['oop', 'constructors']
  },
  {
    id: 'java-008',
    topic: 'java',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which collection type does NOT allow duplicate elements?',
    options: [
      'List',
      'Set',
      'ArrayList',
      'LinkedList'
    ],
    correctAnswer: 'Set',
    explanation: 'The Set interface explicitly models a mathematical set, where each element can appear at most once, unlike List implementations which permit duplicates and maintain insertion order/index.',
    tags: ['collections', 'fundamentals']
  },
  {
    id: 'java-009',
    topic: 'java',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does the "throws" keyword in a method signature indicate?',
    options: [
      'The method always throws an exception when called',
      'The method declares that it may propagate one or more checked exceptions to its caller, who must handle or further declare them',
      'The method catches all exceptions internally',
      'The method is deprecated'
    ],
    correctAnswer: 'The method declares that it may propagate one or more checked exceptions to its caller, who must handle or further declare them',
    explanation: 'Java\u2019s checked exception system requires methods that may throw a checked exception (one not extending RuntimeException) to declare it via throws, so callers are forced to either catch it or declare it themselves.',
    tags: ['exceptions', 'fundamentals']
  },
  {
    id: 'java-010',
    topic: 'java',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is autoboxing in Java?',
    options: [
      'Automatic memory allocation for arrays',
      'The automatic compiler-driven conversion between a primitive type and its corresponding wrapper class (e.g., int to Integer)',
      'A technique for boxing UI components in Swing',
      'Automatic casting between unrelated reference types'
    ],
    correctAnswer: 'The automatic compiler-driven conversion between a primitive type and its corresponding wrapper class (e.g., int to Integer)',
    explanation: 'Autoboxing lets primitives be used where an object is expected (such as in collections) by automatically wrapping them in their corresponding wrapper class, with unboxing performing the reverse conversion.',
    tags: ['autoboxing', 'wrapper-classes']
  },

  // ===================== INTERMEDIATE (35) =====================
  {
    id: 'java-011',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What does the following output?\n\nInteger a = 127, b = 127;\nInteger c = 128, d = 128;\nSystem.out.println(a == b);\nSystem.out.println(c == d);',
    options: [
      'false then true',
      'true then false',
      'true then true',
      'false then false'
    ],
    correctAnswer: 'true then false',
    explanation: 'The Integer cache pools boxed values from -128 to 127, so a and b reference the same cached object (== is true); 128 falls outside the cache range, so c and d are distinct objects, making == false despite equal values.',
    tags: ['autoboxing', 'integer-cache', 'gotchas']
  },
  {
    id: 'java-012',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between == and .equals() when comparing two String objects?',
    options: [
      '== always performs a content comparison for Strings',
      '.equals() compares object references just like ==',
      '== compares reference identity (whether both variables point to the same object); .equals() compares the actual character content',
      'They are functionally identical for all String comparisons'
    ],
    correctAnswer: '== compares reference identity (whether both variables point to the same object); .equals() compares the actual character content',
    explanation: 'Since String overrides equals() to perform value-based comparison, two distinct String objects with identical content are .equals() but may not be == unless they are the same object or both happen to reference the same interned string.',
    tags: ['strings', 'equals', 'gotchas']
  },
  {
    id: 'java-013',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the Java String pool, and how does it relate to string literals?',
    options: [
      'A pool of pre-allocated memory blocks used for all objects, not just strings',
      'A special memory region in the heap where the JVM stores unique String literal instances so identical literals are reused/shared rather than duplicated',
      'A thread pool dedicated to string processing',
      'A deprecated feature removed in modern Java'
    ],
    correctAnswer: 'A special memory region in the heap where the JVM stores unique String literal instances so identical literals are reused/shared rather than duplicated',
    explanation: 'When a String literal is created, the JVM checks the string pool first; if an equal string already exists there, the existing reference is reused, which is why two literals with the same content are typically == true, unlike strings created via "new String()".',
    tags: ['strings', 'string-pool', 'memory']
  },
  {
    id: 'java-014',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'Why are String objects immutable in Java, and what is one consequence of this design?',
    options: [
      'Strings are not actually immutable; this is a common misconception',
      'Immutability is enforced only at compile time with no runtime guarantee',
      'Immutability supports safe sharing (e.g., via the string pool) and thread safety without synchronization, but means operations like concatenation in a loop create many intermediate objects unless StringBuilder is used',
      'Immutability exists purely for historical/legacy reasons with no practical benefit'
    ],
    correctAnswer: 'Immutability supports safe sharing (e.g., via the string pool) and thread safety without synchronization, but means operations like concatenation in a loop create many intermediate objects unless StringBuilder is used',
    explanation: 'Because String instances never change after creation, they can be freely shared (string pool, as hash keys, across threads) without defensive copying, but naive repeated concatenation creates a new String object each time, motivating the use of StringBuilder for performance-sensitive string building.',
    tags: ['strings', 'immutability', 'performance']
  },
  {
    id: 'java-015',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between an abstract class and an interface in modern Java (8+)?',
    options: [
      'Interfaces cannot have any method bodies even with default methods',
      'A class can extend only one abstract class but implement multiple interfaces; abstract classes can hold instance state (non-static fields) and constructors, while interfaces (even with default/static methods) cannot hold instance state',
      'Abstract classes can be implemented by multiple unrelated classes just like interfaces',
      'There is no meaningful difference since Java 8 introduced default methods'
    ],
    correctAnswer: 'A class can extend only one abstract class but implement multiple interfaces; abstract classes can hold instance state (non-static fields) and constructors, while interfaces (even with default/static methods) cannot hold instance state',
    explanation: 'Even though Java 8+ interfaces can provide default and static method implementations, they still cannot declare instance fields or constructors; the single-inheritance-of-state restriction and multiple-interface-implementation capability remain the key structural distinctions from abstract classes.',
    tags: ['oop', 'interfaces', 'abstract-class']
  },
  {
    id: 'java-016',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What is the output?\n\nclass Animal { String sound() { return "..."; } }\nclass Dog extends Animal { String sound() { return "Bark"; } }\npublic class Main {\n  public static void main(String[] args) {\n    Animal a = new Dog();\n    System.out.println(a.sound());\n  }\n}',
    options: [
      'A compile error since Animal has no Bark method',
      '"..."',
      '"Bark"',
      'NullPointerException'
    ],
    correctAnswer: '"Bark"',
    explanation: 'Method calls on instance (non-static) methods are resolved via dynamic dispatch based on the object\u2019s actual runtime type (Dog), not its declared compile-time type (Animal), so the overridden sound() in Dog executes.',
    tags: ['polymorphism', 'dynamic-dispatch', 'output']
  },
  {
    id: 'java-017',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is method overloading, and how does it differ from method overriding?',
    options: [
      'Overloading defines multiple methods with the same name but different parameter lists within the same class, resolved at compile time; overriding redefines a parent class\u2019s method with the identical signature in a subclass, resolved at runtime',
      'Overloading and overriding are interchangeable terms for the same mechanism',
      'Overloading can only occur across different classes, never within one',
      'Overriding requires the method to have a different return type than the parent'
    ],
    correctAnswer: 'Overloading defines multiple methods with the same name but different parameter lists within the same class, resolved at compile time; overriding redefines a parent class\u2019s method with the identical signature in a subclass, resolved at runtime',
    explanation: 'Overloading is a compile-time (static) polymorphism mechanism distinguished by parameter types/count, while overriding is runtime (dynamic) polymorphism where the JVM determines which implementation to invoke based on the actual object type.',
    tags: ['oop', 'overloading', 'overriding']
  },
  {
    id: 'java-018',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the contract between hashCode() and equals() that every Java class overriding equals() must respect?',
    options: [
      'Objects that are equal according to equals() must produce the same hashCode(); objects with the same hashCode() are not required to be equal',
      'hashCode() and equals() have no relationship and can be implemented independently',
      'Every object must override hashCode() to return a unique value across the entire JVM',
      'equals() must always return false if hashCode() values differ, but hashCode() can be left unimplemented'
    ],
    correctAnswer: 'Objects that are equal according to equals() must produce the same hashCode(); objects with the same hashCode() are not required to be equal',
    explanation: 'Violating this contract (e.g., overriding equals() without overriding hashCode()) breaks the correctness of hash-based collections like HashMap/HashSet, since equal objects could end up in different buckets and never be found via lookups.',
    tags: ['equals', 'hashcode', 'collections']
  },
  {
    id: 'java-019',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between checked and unchecked exceptions in Java?',
    options: [
      'Checked exceptions must be declared or caught at compile time (subclasses of Exception excluding RuntimeException); unchecked exceptions (RuntimeException and its subclasses, plus Error) are not enforced by the compiler',
      'Unchecked exceptions can only be thrown by the JVM itself, never by user code',
      'Checked exceptions are always fatal and terminate the program',
      'There is no real distinction in modern Java versions'
    ],
    correctAnswer: 'Checked exceptions must be declared or caught at compile time (subclasses of Exception excluding RuntimeException); unchecked exceptions (RuntimeException and its subclasses, plus Error) are not enforced by the compiler',
    explanation: 'The compiler enforces that checked exceptions like IOException are either caught or declared via throws, forcing explicit handling, while unchecked exceptions like NullPointerException or IllegalArgumentException can propagate without any compile-time declaration requirement.',
    tags: ['exceptions', 'checked-exceptions']
  },
  {
    id: 'java-020',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What is the output?\n\ntry {\n  return 1;\n} finally {\n  System.out.println("finally");\n}',
    options: [
      'It returns 1 without printing "finally"',
      'It prints "finally" then returns 1',
      'A compile error since return cannot be used with try/finally',
      'It returns 1 then prints "finally" afterward, outside the method'
    ],
    correctAnswer: 'It prints "finally" then returns 1',
    explanation: 'The finally block always executes before the method actually returns control to the caller, even when a return statement is encountered in the try block, so "finally" is printed prior to the method completing with the return value.',
    tags: ['exceptions', 'finally', 'control-flow']
  },
  {
    id: 'java-021',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of generics in Java (e.g., List<String>)?',
    options: [
      'They allow runtime type checking only, with no compile-time benefit',
      'They provide compile-time type safety for collections and classes, eliminating the need for explicit casting and catching type mismatches before runtime',
      'They are purely cosmetic syntax sugar with no functional effect',
      'They allow primitive types to be used directly as type parameters'
    ],
    correctAnswer: 'They provide compile-time type safety for collections and classes, eliminating the need for explicit casting and catching type mismatches before runtime',
    explanation: 'Before generics, collections stored raw Objects requiring manual casting and risking ClassCastException at runtime; generics let the compiler enforce and check element types at compile time, though primitives must still be boxed since type parameters cannot be primitive.',
    tags: ['generics', 'type-safety']
  },
  {
    id: 'java-022',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is "type erasure" in Java generics?',
    options: [
      'Generic type information is completely removed by the compiler after compile-time checks, so at runtime List<String> and List<Integer> share the same erased type List',
      'Generic types are converted into reflection-based dynamic types at runtime',
      'Type erasure only applies to primitive arrays',
      'It refers to deleting unused generic classes during garbage collection'
    ],
    correctAnswer: 'Generic type information is completely removed by the compiler after compile-time checks, so at runtime List<String> and List<Integer> share the same erased type List',
    explanation: 'Java implements generics via type erasure for backward compatibility with pre-generics bytecode; this means generic type parameters are unavailable at runtime via reflection in most cases, and is why you cannot create an array of a generic type or perform instanceof checks against a parameterized type directly.',
    tags: ['generics', 'type-erasure']
  },
  {
    id: 'java-023',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between ArrayList and LinkedList in terms of performance characteristics?',
    options: [
      'ArrayList offers O(1) random access but O(n) insertion/removal in the middle (due to shifting); LinkedList offers O(1) insertion/removal given a node reference but O(n) random access',
      'They have identical performance characteristics for all operations',
      'LinkedList always outperforms ArrayList regardless of access pattern',
      'ArrayList cannot be resized after creation'
    ],
    correctAnswer: 'ArrayList offers O(1) random access but O(n) insertion/removal in the middle (due to shifting); LinkedList offers O(1) insertion/removal given a node reference but O(n) random access',
    explanation: 'ArrayList is backed by a contiguous resizable array, giving fast indexed access but requiring element shifting for mid-list insertions/removals; LinkedList is a doubly-linked list, giving fast insertion/removal once positioned but requiring sequential traversal to reach an arbitrary index.',
    tags: ['collections', 'arraylist', 'linkedlist', 'performance']
  },
  {
    id: 'java-024',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between HashMap and TreeMap?',
    options: [
      'TreeMap permits null keys while HashMap does not',
      'HashMap offers average O(1) get/put with no ordering guarantee; TreeMap maintains keys in sorted order via a red-black tree, offering O(log n) operations',
      'HashMap is always slower than TreeMap regardless of operation',
      'They are functionally identical, differing only in internal naming'
    ],
    correctAnswer: 'HashMap offers average O(1) get/put with no ordering guarantee; TreeMap maintains keys in sorted order via a red-black tree, offering O(log n) operations',
    explanation: 'HashMap uses hash bucketing for fast average-case lookups with unspecified iteration order, while TreeMap maintains a sorted structure (via Comparable or a provided Comparator), trading some performance for guaranteed ordering and range-query capabilities like firstKey()/lastKey().',
    tags: ['collections', 'hashmap', 'treemap']
  },
  {
    id: 'java-025',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What happens when two different keys produce the same hash bucket index in a HashMap (a hash collision)?',
    options: [
      'The second key silently overwrites the first regardless of equals()',
      'A ConcurrentModificationException is thrown',
      'The HashMap rejects the second insertion entirely',
      'Both entries are stored in the same bucket as a linked list (or, since Java 8, a balanced tree once a threshold is exceeded), and equals() is used to distinguish keys within that bucket'
    ],
    correctAnswer: 'Both entries are stored in the same bucket as a linked list (or, since Java 8, a balanced tree once a threshold is exceeded), and equals() is used to distinguish keys within that bucket',
    explanation: 'HashMap handles collisions by chaining entries within the same bucket; since Java 8, buckets with many collisions (above a threshold, default 8) are treeified into a red-black tree to bound worst-case lookup to O(log n) instead of O(n), guarding against degenerate hashCode() implementations.',
    tags: ['hashmap', 'collisions', 'internals']
  },
  {
    id: 'java-026',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the "static" keyword mean when applied to a method?',
    options: [
      'The method belongs to the class itself rather than any instance, and can be called without creating an object',
      'The method can only be called once per program execution',
      'The method automatically becomes thread-safe',
      'The method cannot accept any parameters'
    ],
    correctAnswer: 'The method belongs to the class itself rather than any instance, and can be called without creating an object',
    explanation: 'Static methods are associated with the class rather than instances, cannot access instance (non-static) fields/methods directly, and are commonly used for utility functions or factory methods.',
    tags: ['static', 'fundamentals']
  },
  {
    id: 'java-027',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the try-with-resources statement?',
    options: [
      'It allows skipping exception handling entirely for resource operations',
      'It automatically closes any resource implementing AutoCloseable at the end of the block, even if an exception occurs, without requiring an explicit finally block',
      'It is used exclusively for database transactions',
      'It prevents resources from ever throwing exceptions'
    ],
    correctAnswer: 'It automatically closes any resource implementing AutoCloseable at the end of the block, even if an exception occurs, without requiring an explicit finally block',
    explanation: 'try-with-resources, introduced in Java 7, automatically invokes close() on any resource declared in the try parentheses once the block exits (normally or via exception), eliminating boilerplate finally blocks and a common source of resource leak bugs.',
    tags: ['exceptions', 'try-with-resources', 'resource-management']
  },
  {
    id: 'java-028',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What is the output?\n\nList<Integer> nums = List.of(1, 2, 3);\nnums.add(4);',
    options: [
      'It prints [1, 2, 3, 4]',
      'It throws UnsupportedOperationException, since List.of() creates an immutable list',
      'It silently does nothing and the list remains [1, 2, 3]',
      'It throws a ClassCastException'
    ],
    correctAnswer: 'It throws UnsupportedOperationException, since List.of() creates an immutable list',
    explanation: 'List.of() (and Map.of(), Set.of()) create immutable collection implementations introduced in Java 9; any structural modification attempt like add() throws UnsupportedOperationException at runtime.',
    tags: ['collections', 'immutability', 'gotchas']
  },
  {
    id: 'java-029',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a functional interface in Java, and how does it relate to lambda expressions?',
    options: [
      'An interface containing only static methods',
      'An interface with exactly one abstract method, which can be implemented concisely using a lambda expression or method reference instead of an anonymous class',
      'Any interface in the java.util.function package only',
      'An interface that cannot have default methods'
    ],
    correctAnswer: 'An interface with exactly one abstract method, which can be implemented concisely using a lambda expression or method reference instead of an anonymous class',
    explanation: 'A functional interface (often annotated with @FunctionalInterface for compile-time enforcement) has a single abstract method (SAM), letting the compiler treat a lambda expression as an instance implementing that interface, e.g., Comparator, Runnable, or custom interfaces.',
    tags: ['functional-interfaces', 'lambdas']
  },
  {
    id: 'java-030',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What does the following Stream pipeline output?\n\nList<Integer> result = Stream.of(1, 2, 3, 4, 5)\n  .filter(n -> n % 2 == 0)\n  .map(n -> n * n)\n  .collect(Collectors.toList());\nSystem.out.println(result);',
    options: [
      '[4, 16]',
      '[1, 9, 25]',
      '[2, 4]',
      '[1, 4, 9, 16, 25]'
    ],
    correctAnswer: '[4, 16]',
    explanation: 'The filter keeps even numbers (2 and 4), and map squares each remaining element (2\u00b2=4, 4\u00b2=16), producing the final collected list [4, 16].',
    tags: ['streams', 'output', 'functional-programming']
  },
  {
    id: 'java-031',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the key characteristic of Java Streams that distinguishes them from collections like List?',
    options: [
      'Streams store elements persistently like a collection, just with extra methods',
      'Streams are lazy and describe a pipeline of computation that is only executed when a terminal operation is invoked, and are consumed (single-use) rather than reusable',
      'Streams always execute eagerly the moment each intermediate operation is called',
      'Streams can be iterated multiple times just like a List'
    ],
    correctAnswer: 'Streams are lazy and describe a pipeline of computation that is only executed when a terminal operation is invoked, and are consumed (single-use) rather than reusable',
    explanation: 'Intermediate operations like filter/map build up a lazy computation pipeline that does no actual work until a terminal operation (collect, forEach, reduce) triggers execution; once consumed by a terminal operation, a Stream cannot be reused and attempting to do so throws IllegalStateException.',
    tags: ['streams', 'laziness']
  },
  {
    id: 'java-032',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between Comparable and Comparator?',
    options: [
      'Comparable defines a class\u2019s single natural ordering via compareTo() implemented within the class itself; Comparator defines an external, possibly multiple, ordering strategy via compare(), implementable independent of the class',
      'Comparator can only be used with primitive arrays',
      'Comparable allows multiple sort orders per class while Comparator allows only one',
      'They are interchangeable with identical method signatures and purposes'
    ],
    correctAnswer: 'Comparable defines a class\u2019s single natural ordering via compareTo() implemented within the class itself; Comparator defines an external, possibly multiple, ordering strategy via compare(), implementable independent of the class',
    explanation: 'A class implements Comparable to define its single intrinsic ordering (e.g., alphabetical for String), while Comparator instances can be created externally (often as lambdas) to define arbitrary, even multiple, custom sort orders without modifying the class itself.',
    tags: ['comparable', 'comparator', 'sorting']
  },
  {
    id: 'java-033',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the Optional<T> class introduced in Java 8?',
    options: [
      'It replaces all uses of null with a faster primitive alternative',
      'It is a container object that may or may not hold a non-null value, used to explicitly model the possible absence of a value in return types and discourage unchecked null dereferencing',
      'It automatically catches all NullPointerExceptions thrown anywhere in the program',
      'It is only usable as a method parameter, never a return type'
    ],
    correctAnswer: 'It is a container object that may or may not hold a non-null value, used to explicitly model the possible absence of a value in return types and discourage unchecked null dereferencing',
    explanation: 'Optional encourages API designers to make the possibility of "no value" explicit in the type system rather than relying on undocumented nullable returns, providing methods like isPresent(), orElse(), and map() to handle absence functionally, though it is generally discouraged as a field type or method parameter.',
    tags: ['optional', 'null-handling', 'java8']
  },
  {
    id: 'java-034',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the "synchronized" keyword in Java?',
    options: [
      'It marks a variable as thread-local',
      'It ensures a block of code or method can only be executed by one thread at a time on a given monitor (lock), preventing race conditions on shared mutable state',
      'It automatically parallelizes a method across multiple threads',
      'It permanently disables garbage collection during execution'
    ],
    correctAnswer: 'It ensures a block of code or method can only be executed by one thread at a time on a given monitor (lock), preventing race conditions on shared mutable state',
    explanation: 'synchronized acquires an intrinsic lock (monitor) associated with an object (or the Class object for static methods) before entering the block, ensuring mutual exclusion so only one thread can execute the protected critical section at a time, which is foundational for thread-safe shared state access.',
    tags: ['concurrency', 'synchronized', 'thread-safety']
  },
  {
    id: 'java-035',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between a thread\'s "wait()" and "sleep()" methods?',
    options: [
      'wait() releases the held monitor lock and waits to be notified; sleep() pauses the current thread for a fixed duration without releasing any locks it holds',
      'sleep() can only be called inside a synchronized block, but wait() cannot',
      'They are functionally identical, differing only in naming convention',
      'wait() is a static method on Thread while sleep() is an instance method on Object'
    ],
    correctAnswer: 'wait() releases the held monitor lock and waits to be notified; sleep() pauses the current thread for a fixed duration without releasing any locks it holds',
    explanation: 'Object.wait() must be called within a synchronized block and releases the object\u2019s monitor so other threads can acquire it, resuming only when notified (or timed out); Thread.sleep() simply pauses execution for a specified time while retaining any locks the thread currently holds, which can cause contention if used carelessly inside synchronized code.',
    tags: ['concurrency', 'wait', 'sleep']
  },
  {
    id: 'java-036',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the "volatile" keyword?',
    options: [
      'It guarantees atomic compound operations like increment on the variable',
      'It ensures that reads and writes to the variable are made directly to/from main memory, providing visibility guarantees across threads, but does not provide atomicity for compound operations',
      'It makes the variable immutable',
      'It is functionally identical to synchronized'
    ],
    correctAnswer: 'It ensures that reads and writes to the variable are made directly to/from main memory, providing visibility guarantees across threads, but does not provide atomicity for compound operations',
    explanation: 'volatile prevents threads from caching a stale value in CPU registers or local caches, ensuring visibility of the latest write across threads, but operations like count++ are still not atomic since they involve a read-modify-write sequence that volatile alone does not protect from interleaving.',
    tags: ['concurrency', 'volatile', 'visibility']
  },
  {
    id: 'java-037',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the JVM\'s garbage collector primarily reclaim?',
    options: [
      'Disk space used by log files',
      'CPU cycles wasted on idle threads',
      'Heap memory occupied by objects that are no longer reachable from any active GC root (e.g., stack variables, static fields)',
      'Memory used by the operating system kernel'
    ],
    correctAnswer: 'Heap memory occupied by objects that are no longer reachable from any active GC root (e.g., stack variables, static fields)',
    explanation: 'The JVM\u2019s garbage collector traces reachability from GC roots and reclaims heap memory for objects no longer reachable, automating memory management and avoiding the manual free() bugs common in unmanaged languages.',
    tags: ['garbage-collection', 'memory', 'jvm']
  },
  {
    id: 'java-038',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between the JVM heap and stack?',
    options: [
      'The heap stores objects and is shared across all threads; the stack stores method call frames, local variables, and references, with each thread having its own private stack',
      'The stack stores all objects while the heap stores only primitive values',
      'They are interchangeable terms for the same memory region',
      'The heap is cleared after every method call returns'
    ],
    correctAnswer: 'The heap stores objects and is shared across all threads; the stack stores method call frames, local variables, and references, with each thread having its own private stack',
    explanation: 'Objects (and arrays) are allocated on the shared heap and managed by the garbage collector, while each thread maintains its own stack of frames holding local primitive variables and object references, which is popped automatically as methods return.',
    tags: ['jvm', 'memory', 'heap', 'stack']
  },
  {
    id: 'java-039',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the Java Reflection API?',
    options: [
      'To automatically generate documentation from comments',
      'To inspect and manipulate classes, methods, and fields at runtime, even private ones, enabling frameworks like dependency injection and serialization libraries to operate generically',
      'To compile Java source code into bytecode',
      'To improve runtime performance by skipping the JIT compiler'
    ],
    correctAnswer: 'To inspect and manipulate classes, methods, and fields at runtime, even private ones, enabling frameworks like dependency injection and serialization libraries to operate generically',
    explanation: 'Reflection allows code to examine and interact with the metadata of classes (methods, constructors, annotations, fields) at runtime, which frameworks like Spring or Jackson rely on heavily to perform generic dependency injection, serialization, or proxying without hardcoding specific types.',
    tags: ['reflection', 'jvm', 'frameworks']
  },
  {
    id: 'java-040',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of annotations like @Override and @Deprecated?',
    options: [
      'They change the runtime behavior of the annotated code by default',
      'They provide metadata that tools, the compiler, or frameworks can act on; @Override lets the compiler verify a method actually overrides a superclass/interface method, while @Deprecated signals discouraged usage',
      'Annotations are purely documentation comments with zero compiler involvement',
      'Annotations can only be applied to classes, never methods or fields'
    ],
    correctAnswer: 'They provide metadata that tools, the compiler, or frameworks can act on; @Override lets the compiler verify a method actually overrides a superclass/interface method, while @Deprecated signals discouraged usage',
    explanation: '@Override is a compile-time check that catches accidental overloading instead of intended overriding (e.g., due to a typo in the method signature), while @Deprecated communicates to tooling and developers that an API element should be avoided, often triggering compiler warnings.',
    tags: ['annotations', 'fundamentals']
  },
  {
    id: 'java-041',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the Singleton design pattern, and what is one common pitfall when implementing it naively in a multi-threaded Java application?',
    options: [
      'A pattern ensuring a class has only one instance and provides a global access point; a naive lazy-initialization implementation without synchronization can create multiple instances under concurrent first-time access',
      'A pattern that prevents a class from ever being instantiated',
      'It guarantees thread safety automatically with no additional considerations',
      'It is identical to the Factory pattern'
    ],
    correctAnswer: 'A pattern ensuring a class has only one instance and provides a global access point; a naive lazy-initialization implementation without synchronization can create multiple instances under concurrent first-time access',
    explanation: 'A simple "if (instance == null) instance = new Singleton();" check-then-act pattern is racy under concurrent access, potentially creating multiple instances; safe implementations use synchronized methods, double-checked locking with volatile, or the initialization-on-demand holder idiom (a static nested class).',
    tags: ['design-patterns', 'singleton', 'concurrency']
  },
  {
    id: 'java-042',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is dependency injection, and how does the Spring Framework typically apply it?',
    options: [
      'A pattern where a class\u2019s dependencies are supplied externally (constructor, setter, or field injection) rather than the class creating them itself; Spring\u2019s IoC container manages object creation and wiring based on configuration/annotations',
      'A pattern requiring every class to instantiate its own dependencies directly within its constructor',
      'A pattern exclusively for injecting database connection strings',
      'A deprecated pattern replaced entirely by static factory methods in modern Spring'
    ],
    correctAnswer: 'A pattern where a class\u2019s dependencies are supplied externally (constructor, setter, or field injection) rather than the class creating them itself; Spring\u2019s IoC container manages object creation and wiring based on configuration/annotations',
    explanation: 'Dependency injection inverts control over object creation: instead of a class instantiating its collaborators directly, those dependencies are provided (injected) by an external container, decoupling classes from concrete implementations and easing testing via mock substitution.',
    tags: ['design-patterns', 'dependency-injection', 'spring']
  },
  {
    id: 'java-043',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of JDBC (Java Database Connectivity)?',
    options: [
      'A standard Java API providing a vendor-neutral interface for connecting to and executing queries against relational databases',
      'A built-in object-relational mapping framework replacing the need for SQL entirely',
      'A caching layer for HTTP responses',
      'A templating engine for generating HTML from database results'
    ],
    correctAnswer: 'A standard Java API providing a vendor-neutral interface for connecting to and executing queries against relational databases',
    explanation: 'JDBC defines interfaces like Connection, Statement, and ResultSet that database vendors implement via drivers, allowing Java code to interact with different relational databases through a consistent API regardless of the underlying vendor.',
    tags: ['jdbc', 'database']
  },
  {
    id: 'java-044',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Security',
    question: 'Why are PreparedStatement objects preferred over Statement when executing SQL queries containing user input?',
    options: [
      'PreparedStatement separates the SQL command structure from bound parameter data, so user input is never interpreted as executable SQL, preventing SQL injection; Statement requires manual string concatenation, which is injection-prone',
      'PreparedStatement is always slower but more readable',
      'Statement automatically escapes all user input by default',
      'There is no security difference between them'
    ],
    correctAnswer: 'PreparedStatement separates the SQL command structure from bound parameter data, so user input is never interpreted as executable SQL, preventing SQL injection; Statement requires manual string concatenation, which is injection-prone',
    explanation: 'PreparedStatement pre-compiles the SQL with placeholders, then binds parameter values as data rather than executable code, closing off the injection vector that naive string-concatenated Statement queries are vulnerable to.',
    tags: ['jdbc', 'security', 'sql-injection']
  },
  {
    id: 'java-045',
    topic: 'java',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of unit testing frameworks like JUnit in Java development?',
    options: [
      'To replace the need for a compiler',
      'To allow writing automated, repeatable tests that verify individual units of code behave correctly, typically run as part of the build process to catch regressions early',
      'To generate production deployment artifacts',
      'To automatically fix bugs found during testing'
    ],
    correctAnswer: 'To allow writing automated, repeatable tests that verify individual units of code behave correctly, typically run as part of the build process to catch regressions early',
    explanation: 'JUnit provides annotations (@Test, @BeforeEach) and assertion methods to define automated test cases that can be run repeatedly and integrated into CI pipelines, helping catch regressions as code evolves, often combined with mocking libraries like Mockito for isolating units under test.',
    tags: ['testing', 'junit']
  },

  // ===================== ADVANCED (40) =====================
  {
    id: 'java-046',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the generational hypothesis underlying most JVM garbage collectors, and how does it shape heap structure?',
    options: [
      'It assumes all objects live equally long, so the heap is treated as a single uniform region',
      'It assumes most objects die young, so the heap is divided into a small, frequently-collected Young Generation (with Eden and Survivor spaces) and a larger, less frequently collected Old Generation for long-lived objects',
      'It only applies to objects allocated via reflection',
      'It eliminates the need for any garbage collection algorithm'
    ],
    correctAnswer: 'It assumes most objects die young, so the heap is divided into a small, frequently-collected Young Generation (with Eden and Survivor spaces) and a larger, less frequently collected Old Generation for long-lived objects',
    explanation: 'Empirically, most objects become garbage shortly after allocation; generational collectors exploit this by allocating new objects in Eden, promoting survivors through Survivor spaces, and eventually moving long-lived objects to the Old Generation, allowing cheap, frequent minor GCs on the small young space instead of scanning the entire heap each time.',
    tags: ['garbage-collection', 'jvm', 'generational-gc']
  },
  {
    id: 'java-047',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'What is the key trade-off between the G1, ZGC, and Parallel garbage collectors in modern JVMs?',
    options: [
      'They are functionally identical with only different names',
      'Parallel GC maximizes throughput at the cost of longer stop-the-world pauses; G1 balances throughput and pause time with region-based collection; ZGC/Shenandoah prioritize extremely low pause times (sub-millisecond, largely concurrent) often at some throughput/memory overhead cost',
      'ZGC is always strictly worse than Parallel GC in every metric',
      'G1 cannot be used with heaps larger than 4GB'
    ],
    correctAnswer: 'Parallel GC maximizes throughput at the cost of longer stop-the-world pauses; G1 balances throughput and pause time with region-based collection; ZGC/Shenandoah prioritize extremely low pause times (sub-millisecond, largely concurrent) often at some throughput/memory overhead cost',
    explanation: 'Choosing a GC algorithm is a latency-vs-throughput trade-off: batch processing jobs may prefer Parallel GC\u2019s raw throughput despite pauses, while low-latency services (trading systems, interactive APIs) often choose G1 or the newer concurrent collectors like ZGC/Shenandoah, which do most work concurrently with application threads to minimize pause times even on very large heaps.',
    tags: ['garbage-collection', 'g1', 'zgc', 'performance']
  },
  {
    id: 'java-048',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between a "minor GC" and a "major/full GC"?',
    options: [
      'A minor GC collects the Young Generation only, is typically fast and frequent; a major/full GC collects the Old Generation (often the entire heap), is typically slower and less frequent, and can cause noticeably longer application pauses',
      'A minor GC is more expensive than a major GC',
      'They are the same operation under different names depending on JVM vendor',
      'Major GCs only occur when the application explicitly calls System.gc()'
    ],
    correctAnswer: 'A minor GC collects the Young Generation only, is typically fast and frequent; a major/full GC collects the Old Generation (often the entire heap), is typically slower and less frequent, and can cause noticeably longer application pauses',
    explanation: 'Minor GCs operate on the small, fast-to-scan Young Generation and occur frequently with low individual cost, while major/full GCs reclaim the larger Old Generation (sometimes the whole heap), which involves scanning far more live data and historically causes the visible "stop-the-world" pauses that performance-sensitive applications try to minimize.',
    tags: ['garbage-collection', 'jvm', 'performance']
  },
  {
    id: 'java-049',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is a memory leak in the context of a managed, garbage-collected language like Java, given that the GC reclaims unreachable objects automatically?',
    options: [
      'Memory leaks are impossible in Java since the garbage collector reclaims everything eventually',
      'A "logical" leak occurs when objects remain reachable (e.g., held by a long-lived static collection, cache without eviction, or unclosed listener registration) even though the application no longer needs them, preventing the GC from reclaiming memory it otherwise could',
      'Memory leaks in Java only occur due to native code bugs, never pure Java code',
      'A memory leak refers exclusively to disk space exhaustion, not heap memory'
    ],
    correctAnswer: 'A "logical" leak occurs when objects remain reachable (e.g., held by a long-lived static collection, cache without eviction, or unclosed listener registration) even though the application no longer needs them, preventing the GC from reclaiming memory it otherwise could',
    explanation: 'Since the GC only frees genuinely unreachable objects, a "Java memory leak" is really an unintentional, ever-growing reachability chain, classically caused by static collections that grow without bound, caches lacking eviction policies, or registered listeners/callbacks that are never deregistered, keeping otherwise-dead objects artificially alive.',
    tags: ['memory-leaks', 'garbage-collection', 'debugging']
  },
  {
    id: 'java-050',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Debugging',
    question: 'How would you diagnose a suspected memory leak in a running production Java application?',
    options: [
      'Simply restart the JVM and hope the leak resolves itself permanently',
      'Increase the -Xmx heap size indefinitely as the only mitigation',
      'Capture heap dumps (via jmap or automatic on OutOfMemoryError) at different points in time and compare object retention using a tool like Eclipse MAT or VisualVM to identify growing object counts and their GC root retention paths',
      'Disable garbage collection temporarily to observe memory growth'
    ],
    correctAnswer: 'Capture heap dumps (via jmap or automatic on OutOfMemoryError) at different points in time and compare object retention using a tool like Eclipse MAT or VisualVM to identify growing object counts and their GC root retention paths',
    explanation: 'Comparing heap dumps over time reveals which object types are growing unexpectedly, and tools like Eclipse Memory Analyzer can trace the "path to GC roots" for suspect objects, revealing exactly which reference chain (e.g., a static cache or listener list) is unintentionally retaining them.',
    tags: ['debugging', 'memory-leaks', 'profiling']
  },
  {
    id: 'java-051',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the Java Memory Model (JMM), and why is it essential for understanding correct concurrent programming in Java?',
    options: [
      'It refers only to physical RAM allocation strategies used by the OS',
      'It formally defines how and when changes made by one thread to shared memory become visible to other threads, establishing rules (happens-before relationships) that programs must follow to avoid undefined behavior from compiler/CPU reordering',
      'It is a deprecated specification replaced entirely by the volatile keyword',
      'It only applies to single-threaded applications'
    ],
    correctAnswer: 'It formally defines how and when changes made by one thread to shared memory become visible to other threads, establishing rules (happens-before relationships) that programs must follow to avoid undefined behavior from compiler/CPU reordering',
    explanation: 'Without the JMM\u2019s happens-before guarantees (established via synchronized blocks, volatile, thread start/join, etc.), compilers and CPUs are free to reorder instructions and cache values locally for performance, which can cause one thread to never observe another thread\u2019s writes, leading to subtle, hard-to-reproduce concurrency bugs absent proper synchronization.',
    tags: ['concurrency', 'java-memory-model', 'happens-before']
  },
  {
    id: 'java-052',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'What subtle bug exists in this double-checked locking singleton implementation?\n\nclass Singleton {\n  private static Singleton instance;\n  public static Singleton getInstance() {\n    if (instance == null) {\n      synchronized (Singleton.class) {\n        if (instance == null) {\n          instance = new Singleton();\n        }\n      }\n    }\n    return instance;\n  }\n}',
    options: [
      'The outer null check is unnecessary and should be removed entirely',
      'Without declaring the instance field as volatile, another thread could observe a partially constructed object due to instruction reordering during object construction, since "instance = new Singleton()" is not atomic at the memory-visibility level',
      'synchronized cannot be applied to a class object like Singleton.class',
      'This code will never compile due to the nested if statements'
    ],
    correctAnswer: 'Without declaring the instance field as volatile, another thread could observe a partially constructed object due to instruction reordering during object construction, since "instance = new Singleton()" is not atomic at the memory-visibility level',
    explanation: 'Object construction involves multiple steps (allocate memory, run constructor, assign reference) that can be reordered by the JIT/CPU absent proper memory barriers; a thread reading the un-volatile instance field outside the synchronized block could see a non-null reference to an object whose constructor hasn\u2019t fully completed, a classic and historically notorious double-checked locking bug fixed by declaring instance as volatile.',
    tags: ['concurrency', 'singleton', 'double-checked-locking', 'gotchas']
  },
  {
    id: 'java-053',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of java.util.concurrent.atomic classes like AtomicInteger, and how do they achieve thread safety without traditional locks?',
    options: [
      'They internally use synchronized blocks identically to a regular int wrapped in an object',
      'They use hardware-supported compare-and-swap (CAS) operations to atomically update values, retrying the operation if another thread modified the value concurrently, achieving lock-free thread safety for simple operations',
      'They are simply thread-local copies of primitive values with no cross-thread coordination',
      'They disable garbage collection for the wrapped value to ensure consistency'
    ],
    correctAnswer: 'They use hardware-supported compare-and-swap (CAS) operations to atomically update values, retrying the operation if another thread modified the value concurrently, achieving lock-free thread safety for simple operations',
    explanation: 'Atomic classes leverage CPU-level compare-and-swap instructions to perform optimistic concurrency: a thread reads the current value, computes a new value, and attempts to atomically swap it in only if the value hasn\u2019t changed since the read, retrying on failure, avoiding the overhead and contention risk of traditional locks for simple counter/reference updates.',
    tags: ['concurrency', 'atomic', 'cas', 'lock-free']
  },
  {
    id: 'java-054',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between ConcurrentHashMap and a synchronized HashMap (Collections.synchronizedMap)?',
    options: [
      'ConcurrentHashMap permits null keys and values while synchronizedMap does not',
      'ConcurrentHashMap uses fine-grained internal locking/CAS (lock striping across segments/bins) allowing concurrent reads and writes from multiple threads with much higher throughput; synchronizedMap wraps every operation with a single coarse-grained lock on the entire map, serializing all access',
      'They are functionally and performance-wise identical',
      'synchronizedMap is always faster under high concurrency'
    ],
    correctAnswer: 'ConcurrentHashMap uses fine-grained internal locking/CAS (lock striping across segments/bins) allowing concurrent reads and writes from multiple threads with much higher throughput; synchronizedMap wraps every operation with a single coarse-grained lock on the entire map, serializing all access',
    explanation: 'synchronizedMap serializes all access through one lock, meaning even read operations from different threads block each other; ConcurrentHashMap instead partitions internal locking at a much finer granularity (and uses lock-free reads in many cases), allowing significantly higher concurrent throughput, at the cost of slightly weaker consistency guarantees for some compound operations.',
    tags: ['concurrency', 'concurrenthashmap', 'collections']
  },
  {
    id: 'java-055',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is a deadlock, and what four conditions must simultaneously hold for one to occur?',
    options: [
      'A deadlock only occurs when a single thread calls a recursive synchronized method',
      'A deadlock occurs when two or more threads are each waiting indefinitely for a resource held by the other; it requires mutual exclusion, hold-and-wait, no preemption, and circular wait to all simultaneously hold',
      'A deadlock is synonymous with a livelock and they have identical causes',
      'Deadlocks can only occur with database connections, never in-process locks'
    ],
    correctAnswer: 'A deadlock occurs when two or more threads are each waiting indefinitely for a resource held by the other; it requires mutual exclusion, hold-and-wait, no preemption, and circular wait to all simultaneously hold',
    explanation: 'These four Coffman conditions (resources cannot be shared, threads hold one resource while waiting for another, resources cannot be forcibly taken, and a circular chain of waiting threads exists) must all be present for deadlock; breaking any one, such as always acquiring locks in a consistent global order to eliminate circular wait, prevents it.',
    tags: ['concurrency', 'deadlock']
  },
  {
    id: 'java-056',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'What is wrong with this code, and how does it risk deadlock?\n\nvoid transfer(Account from, Account to, double amt) {\n  synchronized (from) {\n    synchronized (to) {\n      from.debit(amt);\n      to.credit(amt);\n    }\n  }\n}',
    options: [
      'It cannot deadlock since both locks are acquired within the same method',
      'If two threads simultaneously call transfer(A, B, ...) and transfer(B, A, ...), they can acquire locks in opposite order (one locks A then waits for B, the other locks B then waits for A), causing a classic circular-wait deadlock; fixing it requires a consistent lock ordering (e.g., by account ID)',
      'synchronized cannot be nested inside another synchronized block',
      'The bug is unrelated to locking and is purely a logic error in debit/credit'
    ],
    correctAnswer: 'If two threads simultaneously call transfer(A, B, ...) and transfer(B, A, ...), they can acquire locks in opposite order (one locks A then waits for B, the other locks B then waits for A), causing a classic circular-wait deadlock; fixing it requires a consistent lock ordering (e.g., by account ID)',
    explanation: 'Acquiring two locks in an order determined by argument order, rather than a fixed global order, opens the door to circular wait when concurrent transfers happen in opposite directions; the standard fix imposes a deterministic lock acquisition order (e.g., always locking the account with the smaller ID first) regardless of transfer direction.',
    tags: ['concurrency', 'deadlock', 'gotchas']
  },
  {
    id: 'java-057',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of the ExecutorService and thread pool abstraction in java.util.concurrent?',
    options: [
      'It replaces the need for the JVM entirely with a custom runtime',
      'It manages a pool of reusable worker threads to execute submitted tasks, avoiding the overhead of creating a new OS thread per task and providing structured lifecycle management (shutdown, task queuing, rejection policies)',
      'It is used only for scheduling, never for executing immediate tasks',
      'It guarantees tasks execute in strict submission order regardless of pool size'
    ],
    correctAnswer: 'It manages a pool of reusable worker threads to execute submitted tasks, avoiding the overhead of creating a new OS thread per task and providing structured lifecycle management (shutdown, task queuing, rejection policies)',
    explanation: 'Creating a new native thread per task is expensive; ExecutorService implementations (fixed, cached, scheduled thread pools) reuse a managed set of worker threads, queue excess tasks, and provide configurable rejection policies when the pool and queue are saturated, all under a clean lifecycle API (submit, shutdown, awaitTermination).',
    tags: ['concurrency', 'executorservice', 'thread-pools']
  },
  {
    id: 'java-058',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the risk of using Executors.newCachedThreadPool() under unbounded, bursty load in production?',
    options: [
      'It cannot create more than 10 threads regardless of load',
      'newCachedThreadPool() creates new threads as needed with no upper bound, so a sudden burst of long-running or blocked tasks can spawn an unbounded number of threads, exhausting memory or OS thread limits',
      'It is always slower than a fixed thread pool under any load',
      'It blocks all task submission until a thread becomes available'
    ],
    correctAnswer: 'newCachedThreadPool() creates new threads as needed with no upper bound, so a sudden burst of long-running or blocked tasks can spawn an unbounded number of threads, exhausting memory or OS thread limits',
    explanation: 'Because the cached thread pool has no maximum pool size and uses a SynchronousQueue (effectively no real queuing), if tasks arrive faster than they complete (especially if they block on I/O), the pool will keep creating new threads without bound, which is a common production incident cause; bounded pools with explicit queue limits and rejection policies are safer for unpredictable workloads.',
    tags: ['concurrency', 'thread-pools', 'production', 'gotchas']
  },
  {
    id: 'java-059',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of the CompletableFuture class introduced in Java 8?',
    options: [
      'It replaces all uses of Thread entirely',
      'It represents a future result of an asynchronous computation that can be composed declaratively (thenApply, thenCombine, exceptionally) without manually blocking and managing callbacks, enabling non-blocking asynchronous pipelines',
      'It is a synonym for Runnable with no additional capability',
      'It can only be used for I/O operations, never CPU-bound tasks'
    ],
    correctAnswer: 'It represents a future result of an asynchronous computation that can be composed declaratively (thenApply, thenCombine, exceptionally) without manually blocking and managing callbacks, enabling non-blocking asynchronous pipelines',
    explanation: 'Unlike the older Future interface, which only supports blocking get() to retrieve a result, CompletableFuture supports a rich functional composition API for chaining dependent async stages, combining multiple futures, and handling errors, enabling expressive non-blocking asynchronous workflows.',
    tags: ['concurrency', 'completablefuture', 'async']
  },
  {
    id: 'java-060',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of Virtual Threads (Project Loom), introduced as a stable feature in modern Java versions?',
    options: [
      'They permanently replace platform (OS) threads, eliminating the need for any thread pools',
      'They are lightweight, JVM-managed threads that can be created in the millions, decoupling logical concurrency from expensive OS thread allocation, allowing simple blocking-style code to scale to massive concurrency without the complexity of reactive/async programming models',
      'They only improve CPU-bound computation performance, never I/O-bound concurrency',
      'They are a deprecated, removed feature from early Java versions'
    ],
    correctAnswer: 'They are lightweight, JVM-managed threads that can be created in the millions, decoupling logical concurrency from expensive OS thread allocation, allowing simple blocking-style code to scale to massive concurrency without the complexity of reactive/async programming models',
    explanation: 'Virtual threads are scheduled by the JVM onto a small pool of carrier (platform) threads, automatically "unmounting" a virtual thread when it blocks on I/O so the carrier thread can run other virtual threads; this lets developers write straightforward, blocking-style synchronous code that can still scale to handle huge numbers of concurrent connections, addressing a major pain point that previously pushed developers toward complex reactive frameworks.',
    tags: ['concurrency', 'virtual-threads', 'project-loom']
  },
  {
    id: 'java-061',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between class loading phases: loading, linking (verification, preparation, resolution), and initialization?',
    options: [
      'They all occur as a single atomic step with no distinguishable phases',
      'Loading reads the class bytecode into the JVM; linking verifies bytecode correctness, allocates memory for static fields with default values, and resolves symbolic references; initialization runs static initializers and assigns actual static field values, occurring lazily on first active use',
      'Initialization always occurs before loading',
      'Linking only applies to interfaces, never to classes'
    ],
    correctAnswer: 'Loading reads the class bytecode into the JVM; linking verifies bytecode correctness, allocates memory for static fields with default values, and resolves symbolic references; initialization runs static initializers and assigns actual static field values, occurring lazily on first active use',
    explanation: 'The JVM specification defines a precise multi-phase class lifecycle; understanding that initialization (running static blocks and assigning declared static field values) is deferred until first active use explains subtleties like the initialization-on-demand holder idiom for thread-safe lazy singletons.',
    tags: ['jvm', 'class-loading', 'internals']
  },
  {
    id: 'java-062',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of a custom ClassLoader, and where is this commonly leveraged in enterprise Java applications?',
    options: [
      'Custom class loaders are purely theoretical and never used in real applications',
      'A custom ClassLoader can load classes from non-standard sources (network, encrypted jars, dynamically generated bytecode) and enables classloader isolation, used by application servers and plugin systems (e.g., Tomcat\u2019s per-webapp classloaders) to allow multiple applications with conflicting dependency versions to run within the same JVM',
      'It is required for every single Java application regardless of complexity',
      'It replaces the need for the Reflection API entirely'
    ],
    correctAnswer: 'A custom ClassLoader can load classes from non-standard sources (network, encrypted jars, dynamically generated bytecode) and enables classloader isolation, used by application servers and plugin systems (e.g., Tomcat\u2019s per-webapp classloaders) to allow multiple applications with conflicting dependency versions to run within the same JVM',
    explanation: 'Java\u2019s delegation-based classloader hierarchy can be extended to create isolated namespaces; this underpins application servers that host multiple web applications with potentially conflicting library versions side-by-side, and plugin architectures that dynamically load/unload modules at runtime.',
    tags: ['jvm', 'classloader', 'architecture']
  },
  {
    id: 'java-063',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'What does the following output, and why?\n\npublic class Base {\n  public Base() { print(); }\n  public void print() { System.out.println("Base"); }\n}\npublic class Derived extends Base {\n  private String name = "Derived";\n  @Override public void print() { System.out.println(name); }\n}\nnew Derived();',
    options: [
      '"Base"',
      'A compile error since print() cannot be overridden in a constructor call chain',
      'NullPointerException',
      '"null" — because the Base constructor invokes the overridden print(), but Derived\u2019s field initializers haven\u2019t run yet at that point'
    ],
    correctAnswer: '"null" — because the Base constructor invokes the overridden print(), but Derived\u2019s field initializers haven\u2019t run yet at that point',
    explanation: 'Java constructs objects top-down: the Base constructor runs first (before Derived\u2019s field initializers), but since print() is overridden and dispatched dynamically, it invokes Derived\u2019s implementation, which reads the not-yet-initialized "name" field, printing null; this is a classic and dangerous pitfall of calling overridable methods from constructors.',
    tags: ['oop', 'constructors', 'polymorphism', 'gotchas']
  },
  {
    id: 'java-064',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between covariant return types and contravariant parameter types when overriding a method?',
    options: [
      'Java supports covariant return types (an overriding method may return a subtype of the original return type), but does NOT support overloaded-style contravariant parameter widening for true overriding; changing parameter types creates an overload, not an override',
      'Java supports both covariant returns and contravariant parameters identically for overriding',
      'Neither covariance nor contravariance is supported anywhere in Java',
      'Covariant returns are only allowed for primitive return types'
    ],
    correctAnswer: 'Java supports covariant return types (an overriding method may return a subtype of the original return type), but does NOT support overloaded-style contravariant parameter widening for true overriding; changing parameter types creates an overload, not an override',
    explanation: 'Since Java 5, an overriding method can narrow (covariantly change) its return type to a subtype of the parent\u2019s declared return type, which is useful for fluent builder patterns; however, the parameter list must match exactly for true overriding, since any change to parameter types instead defines a separate overloaded method, not an override, which is a frequent source of confusion (and the motivation for @Override to catch such mistakes).',
    tags: ['oop', 'covariance', 'overriding']
  },
  {
    id: 'java-065',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the diamond problem, and how does Java\'s interface default method resolution handle it?',
    options: [
      'Java forbids a class from implementing two interfaces that both declare a default method with the same signature under any circumstance',
      'When a class implements two interfaces that each provide a conflicting default method with the same signature, Java forces the implementing class to explicitly override the method (optionally calling a specific interface\u2019s version via InterfaceName.super.method()), refusing to silently pick one',
      'Java automatically picks the default method from whichever interface is listed first in the implements clause',
      'The diamond problem does not apply to Java since it lacks multiple inheritance entirely'
    ],
    correctAnswer: 'When a class implements two interfaces that each provide a conflicting default method with the same signature, Java forces the implementing class to explicitly override the method (optionally calling a specific interface\u2019s version via InterfaceName.super.method()), refusing to silently pick one',
    explanation: 'Java\u2019s default methods reintroduced a limited form of the classic multiple-inheritance diamond problem; rather than guessing which implementation to use, the compiler requires the implementing class to resolve the ambiguity explicitly, optionally delegating to a specific parent interface\u2019s default implementation using the InterfaceName.super.methodName() syntax.',
    tags: ['interfaces', 'default-methods', 'diamond-problem']
  },
  {
    id: 'java-066',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of sealed classes/interfaces, introduced as a stable feature in recent Java versions?',
    options: [
      'They prevent a class from ever being instantiated',
      'They restrict which classes/interfaces are permitted to extend or implement them (declared via a "permits" clause), enabling exhaustive pattern matching with switch and providing stronger compile-time guarantees about the closed set of subtypes',
      'They are a synonym for final classes with no additional capability',
      'They automatically make all subclasses immutable'
    ],
    correctAnswer: 'They restrict which classes/interfaces are permitted to extend or implement them (declared via a "permits" clause), enabling exhaustive pattern matching with switch and providing stronger compile-time guarantees about the closed set of subtypes',
    explanation: 'Sealed types explicitly enumerate their allowed direct subtypes, giving the compiler complete knowledge of the type hierarchy; this enables exhaustiveness checking in pattern-matching switch expressions (no default branch needed if all permitted subtypes are covered) while still allowing controlled extensibility, unlike a fully final class.',
    tags: ['sealed-classes', 'pattern-matching', 'modern-java']
  },
  {
    id: 'java-067',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of Java Records, introduced as a stable feature in recent Java versions?',
    options: [
      'They are a deprecated alternative to enums',
      'They provide a concise syntax for declaring immutable data carrier classes, automatically generating a canonical constructor, accessor methods, equals(), hashCode(), and toString() based on the declared components',
      'They are mutable classes optimized for high-frequency field updates',
      'They replace interfaces entirely for defining contracts'
    ],
    correctAnswer: 'They provide a concise syntax for declaring immutable data carrier classes, automatically generating a canonical constructor, accessor methods, equals(), hashCode(), and toString() based on the declared components',
    explanation: 'A record like "record Point(int x, int y) {}" eliminates the substantial boilerplate previously needed to hand-write an immutable value class with proper equals/hashCode/toString, while still allowing additional methods, compact constructors for validation, and implementing interfaces.',
    tags: ['records', 'immutability', 'modern-java']
  },
  {
    id: 'java-068',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the SOLID Liskov Substitution Principle, and how can a subclass violate it even while compiling correctly?',
    options: [
      'It states that subclasses must be substitutable for their base class without altering correctness; a subclass can violate it by weakening postconditions, strengthening preconditions, or throwing new unexpected exceptions in an overridden method, even though it still compiles',
      'It is purely a naming convention with no behavioral implication',
      'It only applies to abstract classes, never concrete subclasses',
      'Violating it always results in a compile-time error'
    ],
    correctAnswer: 'It states that subclasses must be substitutable for their base class without altering correctness; a subclass can violate it by weakening postconditions, strengthening preconditions, or throwing new unexpected exceptions in an overridden method, even though it still compiles',
    explanation: 'A classic example is a Square class extending Rectangle that overrides setWidth()/setHeight() to keep both dimensions equal; this compiles fine and satisfies the type signature, but violates client expectations established by the Rectangle contract (independently settable width/height), breaking code that relies on Rectangle\u2019s documented behavior, illustrating that LSP violations are behavioral, not syntactic.',
    tags: ['solid', 'liskov-substitution', 'oop-design']
  },
  {
    id: 'java-069',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does the Builder design pattern address the "telescoping constructor" anti-pattern in Java?',
    options: [
      'It eliminates the need for constructors entirely by using only static fields',
      'Instead of providing many overloaded constructors for every combination of optional parameters, the Builder pattern uses a separate builder object with fluent setter-like methods to incrementally configure an object before a final build() call constructs it, improving readability and avoiding ambiguous parameter ordering',
      'It is identical in purpose to the Singleton pattern',
      'It requires every field to be mutable and public'
    ],
    correctAnswer: 'Instead of providing many overloaded constructors for every combination of optional parameters, the Builder pattern uses a separate builder object with fluent setter-like methods to incrementally configure an object before a final build() call constructs it, improving readability and avoiding ambiguous parameter ordering',
    explanation: 'When a class has many optional constructor parameters, telescoping constructors (one overload per combination) become unwieldy and error-prone due to positional argument ambiguity; the Builder pattern instead exposes named, chainable methods to set each property before a final build(), producing immutable objects with self-documenting construction code.',
    tags: ['design-patterns', 'builder-pattern']
  },
  {
    id: 'java-070',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of the Spring Framework\'s AOP (Aspect-Oriented Programming) support, and what is a common use case?',
    options: [
      'AOP replaces the need for object-oriented programming entirely',
      'AOP allows cross-cutting concerns (logging, transaction management, security checks) to be modularized separately from core business logic and woven in at specified join points (e.g., before/after method execution) via proxies or bytecode weaving, avoiding scattering the same boilerplate across many classes',
      'AOP is only used for unit testing, never production code',
      'AOP requires rewriting every class to extend a common Aspect base class'
    ],
    correctAnswer: 'AOP allows cross-cutting concerns (logging, transaction management, security checks) to be modularized separately from core business logic and woven in at specified join points (e.g., before/after method execution) via proxies or bytecode weaving, avoiding scattering the same boilerplate across many classes',
    explanation: 'Concerns like transaction demarcation (@Transactional) or method-level logging would otherwise need to be manually repeated across many unrelated classes; Spring AOP intercepts method calls matching a defined pointcut expression and applies the cross-cutting advice transparently via dynamically generated proxies, keeping business logic classes clean.',
    tags: ['spring', 'aop', 'design-patterns']
  },
  {
    id: 'java-071',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between Spring\'s @Component, @Service, @Repository, and @Controller stereotype annotations, given they all ultimately register a bean?',
    options: [
      'They are functionally completely identical with literally zero behavioral difference under any circumstance',
      'While all are specializations of @Component (and thus all trigger component scanning/bean registration), @Repository additionally enables automatic translation of persistence-layer exceptions into Spring\u2019s unified DataAccessException hierarchy, and @Controller/@Service primarily communicate architectural intent/layer to developers and certain framework tooling',
      '@Service can only be applied to interfaces, never concrete classes',
      '@Controller is required for any class containing business logic, regardless of whether it handles HTTP requests'
    ],
    correctAnswer: 'While all are specializations of @Component (and thus all trigger component scanning/bean registration), @Repository additionally enables automatic translation of persistence-layer exceptions into Spring\u2019s unified DataAccessException hierarchy, and @Controller/@Service primarily communicate architectural intent/layer to developers and certain framework tooling',
    explanation: 'All four are meta-annotated with @Component, so component scanning treats them equivalently for bean registration purposes, but @Repository carries the additional behavior of enabling Spring\u2019s persistence exception translation aspect, while the others mainly serve as semantic markers conveying architectural layering for readability and certain AOP pointcut targeting.',
    tags: ['spring', 'annotations', 'architecture']
  },
  {
    id: 'java-072',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the N+1 select problem in JPA/Hibernate, and how is it commonly resolved?',
    options: [
      'It occurs when fetching N parent entities lazily triggers one additional query per entity to load an association, totaling N+1 queries; resolved via JOIN FETCH in JPQL, entity graphs, or batch fetching configuration',
      'It refers to a database having exactly one more table than expected',
      'It is unrelated to lazy loading and only occurs with native SQL queries',
      'It can only be fixed by switching to eager fetching globally for every association in the application'
    ],
    correctAnswer: 'It occurs when fetching N parent entities lazily triggers one additional query per entity to load an association, totaling N+1 queries; resolved via JOIN FETCH in JPQL, entity graphs, or batch fetching configuration',
    explanation: 'Default lazy loading of associations means iterating over N parent entities and accessing a lazy collection/reference on each triggers N separate additional queries; explicit JOIN FETCH, @EntityGraph, or Hibernate\u2019s batch-size fetching configuration collapse this into far fewer queries by eagerly loading the needed associations in the initial query or in efficient batches.',
    tags: ['jpa', 'hibernate', 'n+1-problem', 'performance']
  },
  {
    id: 'java-073',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between JPA\'s FetchType.LAZY and FetchType.EAGER, and why is indiscriminate use of EAGER on collections often discouraged?',
    options: [
      'LAZY loads the association immediately upon entity load; EAGER defers loading until accessed',
      'EAGER loads the associated data immediately as part of the owning entity\u2019s query; LAZY defers loading until the association is actually accessed; defaulting collections to EAGER can cause unnecessary, expensive joins/queries to be executed even when the association is never used, and can silently multiply query cost across nested associations',
      'Both behave identically in modern Hibernate versions',
      'EAGER and LAZY only apply to single entity references, never to collections'
    ],
    correctAnswer: 'EAGER loads the associated data immediately as part of the owning entity\u2019s query; LAZY defers loading until the association is actually accessed; defaulting collections to EAGER can cause unnecessary, expensive joins/queries to be executed even when the association is never used, and can silently multiply query cost across nested associations',
    explanation: 'Eagerly fetching every association by default risks loading large object graphs unnecessarily and can compound across nested entity relationships, often causing severe and hard-to-diagnose performance issues; LAZY (the default for collections) loading on demand combined with explicit, targeted eager fetching where actually needed (via JOIN FETCH/EntityGraph for specific use cases) is generally the recommended approach.',
    tags: ['jpa', 'hibernate', 'fetch-strategy', 'performance']
  },
  {
    id: 'java-074',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the Hibernate/JPA "first-level cache" (persistence context), and how does it differ from the optional second-level cache?',
    options: [
      'They are identical caches with different names depending on the JPA provider',
      'The first-level cache is scoped to a single EntityManager/Session and automatically caches entities within that unit of work, ensuring identity (the same query for the same entity returns the same object instance); the second-level cache is an optional, shared cache spanning multiple sessions/transactions, often backed by an external provider like Ehcache or Redis',
      'The second-level cache is always enabled by default with no configuration',
      'The first-level cache persists data permanently to disk'
    ],
    correctAnswer: 'The first-level cache is scoped to a single EntityManager/Session and automatically caches entities within that unit of work, ensuring identity (the same query for the same entity returns the same object instance); the second-level cache is an optional, shared cache spanning multiple sessions/transactions, often backed by an external provider like Ehcache or Redis',
    explanation: 'The mandatory first-level cache guarantees that within a single persistence context, repeated lookups for the same entity by ID return the identical in-memory object (supporting JPA\u2019s identity guarantee), while the second-level cache is an opt-in, application-wide cache that can serve entity data across multiple sessions/requests, reducing database round trips at the cost of needing careful invalidation/consistency management.',
    tags: ['jpa', 'hibernate', 'caching']
  },
  {
    id: 'java-075',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of @Transactional propagation settings like REQUIRED, REQUIRES_NEW, and NESTED in Spring?',
    options: [
      'They are purely cosmetic and have no effect on actual transaction behavior',
      'They define how a method\u2019s transaction interacts with an already-existing transaction in the calling context: REQUIRED joins the existing transaction (or creates one if none exists); REQUIRES_NEW suspends any existing transaction and starts an independent one; NESTED creates a savepoint within the existing transaction that can be rolled back independently',
      'REQUIRES_NEW always reuses the calling method\u2019s existing transaction',
      'NESTED is identical to REQUIRED in every database'
    ],
    correctAnswer: 'They define how a method\u2019s transaction interacts with an already-existing transaction in the calling context: REQUIRED joins the existing transaction (or creates one if none exists); REQUIRES_NEW suspends any existing transaction and starts an independent one; NESTED creates a savepoint within the existing transaction that can be rolled back independently',
    explanation: 'Choosing the right propagation behavior matters for correctness: REQUIRES_NEW is useful when a sub-operation (like audit logging) must commit independently of the outer transaction\u2019s eventual rollback, while NESTED (database-dependent support) allows partial rollback to a savepoint without aborting the entire enclosing transaction, unlike REQUIRED which simply shares the same atomic unit.',
    tags: ['spring', 'transactions', 'propagation']
  },
  {
    id: 'java-076',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'Why does calling a @Transactional-annotated method from another method within the same Spring bean (self-invocation) often fail to actually start a transaction?',
    options: [
      'Spring\u2019s @Transactional only works on interface methods, never concrete classes',
      'Spring AOP\u2019s default proxy-based mechanism intercepts calls made through the externally visible proxy object; an internal self-invocation bypasses the proxy entirely (calling "this" directly), so the transactional advice (and other AOP-applied behavior) never gets invoked',
      'Self-invocation always throws a runtime exception in Spring',
      '@Transactional methods cannot call other methods within the same class at all'
    ],
    correctAnswer: 'Spring AOP\u2019s default proxy-based mechanism intercepts calls made through the externally visible proxy object; an internal self-invocation bypasses the proxy entirely (calling "this" directly), so the transactional advice (and other AOP-applied behavior) never gets invoked',
    explanation: 'Spring\u2019s default AOP implementation wraps beans in a dynamic proxy that intercepts external calls to apply advice (transactions, security, etc.); however, calling another method on "this" from within the same class bypasses the proxy entirely, invoking the raw, un-advised method directly, a very common and subtle source of "transaction not applied" bugs that requires restructuring (e.g., self-injection or splitting into separate beans) to fix.',
    tags: ['spring', 'aop', 'transactions', 'gotchas']
  },
  {
    id: 'java-077',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of Spring Boot\'s auto-configuration mechanism?',
    options: [
      'It requires every bean to be manually defined in XML',
      'It automatically configures beans based on classpath contents and application properties, applying sensible defaults (e.g., auto-configuring a DataSource if a JDBC driver is on the classpath) that developers can override, drastically reducing boilerplate configuration',
      'It is a deprecated feature replaced entirely by manual @Configuration classes',
      'It only works for testing environments, never production'
    ],
    correctAnswer: 'It automatically configures beans based on classpath contents and application properties, applying sensible defaults (e.g., auto-configuring a DataSource if a JDBC driver is on the classpath) that developers can override, drastically reducing boilerplate configuration',
    explanation: 'Spring Boot\u2019s @EnableAutoConfiguration mechanism inspects the classpath and existing bean definitions, conditionally registering beans (via @ConditionalOnClass, @ConditionalOnMissingBean, etc.) to provide convention-over-configuration defaults that significantly reduce the manual setup traditionally required in plain Spring applications, while still allowing explicit overrides.',
    tags: ['spring-boot', 'auto-configuration']
  },
  {
    id: 'java-078',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What does the "fail-fast" behavior of standard Java collection iterators (like ArrayList\'s) mean, and why does it occur?',
    options: [
      'Iterators always process elements faster than a regular for loop',
      'If a collection is structurally modified (elements added/removed) while being iterated, other than through the iterator\u2019s own remove() method, the iterator detects this via a modCount check and throws a ConcurrentModificationException rather than risking undefined behavior',
      'Fail-fast means the iterator silently skips any modified elements without error',
      'It only applies to thread-safe collections like ConcurrentHashMap'
    ],
    correctAnswer: 'If a collection is structurally modified (elements added/removed) while being iterated, other than through the iterator\u2019s own remove() method, the iterator detects this via a modCount check and throws a ConcurrentModificationException rather than risking undefined behavior',
    explanation: 'Standard (non-concurrent) collections track a modCount that increments on structural modification; the iterator captures this count at creation and checks it on each next() call, throwing ConcurrentModificationException if it detects a mismatch, providing a best-effort safety net against the otherwise undefined behavior of modifying a collection mid-iteration.',
    tags: ['collections', 'iterators', 'fail-fast']
  },
  {
    id: 'java-079',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Why is overriding equals() without also overriding compareTo() consistently (or vice versa) a dangerous pitfall for classes used in sorted collections like TreeSet?',
    options: [
      'TreeSet ignores compareTo() entirely and always relies solely on equals()',
      'TreeSet (and TreeMap) use compareTo() (or a provided Comparator), not equals(), to determine both ordering and element uniqueness; if compareTo() returns 0 for objects that are not equals()-equal (or vice versa), the set\u2019s behavior becomes inconsistent with the general Set contract, silently dropping or misordering elements',
      'This pitfall only affects ArrayList, never TreeSet',
      'Java automatically synchronizes compareTo() and equals() at compile time'
    ],
    correctAnswer: 'TreeSet (and TreeMap) use compareTo() (or a provided Comparator), not equals(), to determine both ordering and element uniqueness; if compareTo() returns 0 for objects that are not equals()-equal (or vice versa), the set\u2019s behavior becomes inconsistent with the general Set contract, silently dropping or misordering elements',
    explanation: 'A TreeSet treats two elements as "the same" if compareTo() returns 0, regardless of what equals() says; a "natural ordering inconsistent with equals" (per the Comparable Javadoc) can silently cause distinct, non-equal objects to be treated as duplicates and discarded from the set, a subtle correctness bug that doesn\u2019t manifest with hash-based collections like HashSet.',
    tags: ['collections', 'treeset', 'comparable', 'gotchas']
  },
  {
    id: 'java-080',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of the Java Platform Module System (JPMS), introduced in Java 9?',
    options: [
      'It replaces JAR files entirely with a new incompatible packaging format',
      'It introduces a higher-level module abstraction over packages, allowing explicit declaration of dependencies and exported packages (via module-info.java), enabling strong encapsulation of internal implementation details that even reflection cannot bypass unless explicitly opened',
      'It is purely a build-tool feature with zero JVM runtime enforcement',
      'It only applies to the JDK\u2019s own internal modules, never application code'
    ],
    correctAnswer: 'It introduces a higher-level module abstraction over packages, allowing explicit declaration of dependencies and exported packages (via module-info.java), enabling strong encapsulation of internal implementation details that even reflection cannot bypass unless explicitly opened',
    explanation: 'JPMS lets a module explicitly declare which packages it exports for use by other modules (requires/exports in module-info.java), with non-exported packages strongly encapsulated, meaning even reflective access from outside is blocked by default unless the module specifically "opens" that package, addressing long-standing issues with classpath-based JAR encapsulation.',
    tags: ['jpms', 'modules', 'java9']
  },
  {
    id: 'java-081',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'What is JIT (Just-In-Time) compilation, and how does it relate to "warm-up" behavior observed in JVM benchmarking?',
    options: [
      'JIT compiles all bytecode to native machine code before the program even starts running',
      'The JVM initially interprets bytecode, profiling which methods are "hot" (executed frequently), and progressively compiles those methods into optimized native machine code at runtime (via C1/C2 compilers); this means early executions are slower (interpreted) until the JIT has compiled and optimized the hot paths, producing the characteristic warm-up performance curve',
      'JIT compilation only applies to single-threaded applications',
      'JIT and AOT (ahead-of-time) compilation are functionally identical with no performance difference'
    ],
    correctAnswer: 'The JVM initially interprets bytecode, profiling which methods are "hot" (executed frequently), and progressively compiles those methods into optimized native machine code at runtime (via C1/C2 compilers); this means early executions are slower (interpreted) until the JIT has compiled and optimized the hot paths, producing the characteristic warm-up performance curve',
    explanation: 'The HotSpot JVM uses tiered compilation, starting with interpretation, then a fast client compiler (C1) for moderately hot methods, and finally an aggressively optimizing server compiler (C2) for the hottest methods, using runtime profiling data unavailable to static compilers; this explains why microbenchmarks must account for warm-up iterations before measuring steady-state performance, and motivates newer AOT-compiled alternatives (like GraalVM native image) for fast cold-start scenarios.',
    tags: ['jvm', 'jit', 'performance']
  },
  {
    id: 'java-082',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between GraalVM Native Image compilation and traditional JIT-compiled execution on a standard JVM?',
    options: [
      'Native Image compiles the application ahead-of-time into a standalone native executable with no JVM required at runtime, offering near-instant startup and lower memory footprint, but trades away runtime profile-guided JIT optimization and requires careful handling of reflection/dynamic class loading at build time',
      'They are functionally and performance-wise identical in every respect',
      'Native Image still requires installing a full JDK on the deployment target',
      'JIT compilation always produces faster steady-state performance than Native Image under all workloads'
    ],
    correctAnswer: 'Native Image compiles the application ahead-of-time into a standalone native executable with no JVM required at runtime, offering near-instant startup and lower memory footprint, but trades away runtime profile-guided JIT optimization and requires careful handling of reflection/dynamic class loading at build time',
    explanation: 'GraalVM Native Image performs static analysis and ahead-of-time compilation, producing a self-contained binary ideal for fast-starting, low-memory environments like serverless functions or containers, but loses the JIT\u2019s ability to optimize based on actual runtime profiling data, and reflection/dynamic proxies must typically be explicitly configured since the closed-world assumption at build time can\u2019t see all dynamically reachable code paths automatically.',
    tags: ['graalvm', 'native-image', 'performance', 'jvm']
  },
  {
    id: 'java-083',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of the Decorator design pattern, and how is it exemplified by the java.io package\'s stream classes?',
    options: [
      'It allows behavior to be added to an individual object dynamically by wrapping it in another object implementing the same interface, exemplified by wrapping a FileInputStream in a BufferedInputStream, which adds buffering without modifying FileInputStream itself',
      'It replaces the need for inheritance entirely across the entire language',
      'It is identical to the Adapter pattern with a different name',
      'It can only be applied to final classes'
    ],
    correctAnswer: 'It allows behavior to be added to an individual object dynamically by wrapping it in another object implementing the same interface, exemplified by wrapping a FileInputStream in a BufferedInputStream, which adds buffering without modifying FileInputStream itself',
    explanation: 'java.io is a textbook example of the Decorator pattern: wrapper classes like BufferedInputStream, DataInputStream, or GZIPInputStream all implement the same InputStream interface while wrapping and layering additional behavior around an underlying stream, letting capabilities be composed flexibly at runtime instead of requiring a combinatorial explosion of subclasses.',
    tags: ['design-patterns', 'decorator', 'io']
  },
  {
    id: 'java-084',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between checked exceptions and the use of unchecked exceptions for representing business/domain errors in modern Java API design, and what trade-off does this involve?',
    options: [
      'Checked exceptions force callers to explicitly handle or propagate domain-specific failure cases at compile time, improving explicitness and discoverability, but can lead to verbose, boilerplate-heavy code and clash poorly with functional-style APIs like Streams/lambdas, which is why many modern frameworks favor unchecked exceptions for such cases',
      'Unchecked exceptions are always strictly inferior and should never be used for business logic',
      'Checked exceptions have no effect on lambda expressions or Stream pipelines',
      'There is no meaningful trade-off; the choice is purely stylistic with zero practical implications'
    ],
    correctAnswer: 'Checked exceptions force callers to explicitly handle or propagate domain-specific failure cases at compile time, improving explicitness and discoverability, but can lead to verbose, boilerplate-heavy code and clash poorly with functional-style APIs like Streams/lambdas, which is why many modern frameworks favor unchecked exceptions for such cases',
    explanation: 'While checked exceptions document and enforce explicit handling of recoverable error conditions, functional interfaces used in Streams (like Function<T,R>) do not permit declaring checked exceptions on their abstract method, forcing awkward workarounds (wrapping in unchecked exceptions or try/catch inside lambdas); this friction, plus concerns about API evolution flexibility, is why many modern Java libraries and frameworks lean toward unchecked exceptions even for domain-specific failures.',
    tags: ['exceptions', 'api-design', 'streams']
  },
  {
    id: 'java-085',
    topic: 'java',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of pattern matching for switch (a stable feature in recent Java versions) combined with sealed interfaces?',
    options: [
      'It only works with String values in switch statements',
      'It allows a switch expression to match against the runtime type of an object (including deconstructing records), and when combined with a sealed type hierarchy, the compiler can verify exhaustiveness across all permitted subtypes without requiring a default branch',
      'It eliminates the need for the instanceof operator everywhere',
      'It replaces traditional if/else entirely across the language with no exceptions'
    ],
    correctAnswer: 'It allows a switch expression to match against the runtime type of an object (including deconstructing records), and when combined with a sealed type hierarchy, the compiler can verify exhaustiveness across all permitted subtypes without requiring a default branch',
    explanation: 'Pattern matching for switch lets each case test and bind to a specific type (and even deconstruct record components directly in the pattern), and when the switched value\u2019s type is sealed, the compiler knows the complete, closed set of possible subtypes and can statically verify every case is handled, catching missing cases at compile time rather than relying on a runtime default fallback.',
    tags: ['pattern-matching', 'sealed-classes', 'modern-java']
  },

  // ===================== MNC (35) =====================
  {
    id: 'java-086',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'You are designing a high-throughput Java microservice expected to handle 50,000 requests/sec with strict p99 latency requirements. What JVM and architectural choices would you prioritize?',
    options: [
      'Run with default JVM heap settings and a single replica for simplicity',
      'Choose a low-pause GC (G1 or ZGC) tuned for the workload, right-size the thread pool/connection pools to avoid contention, warm up the JIT before serving production traffic, horizontally scale stateless instances behind a load balancer, and continuously monitor GC pause times and p99 latency',
      'Disable garbage collection entirely to eliminate pause-related latency',
      'Use the largest possible heap size on a single instance to avoid any horizontal scaling'
    ],
    correctAnswer: 'Choose a low-pause GC (G1 or ZGC) tuned for the workload, right-size the thread pool/connection pools to avoid contention, warm up the JIT before serving production traffic, horizontally scale stateless instances behind a load balancer, and continuously monitor GC pause times and p99 latency',
    explanation: 'High-throughput, latency-sensitive Java services require deliberate GC selection/tuning to bound pause times, pre-warming the JIT (since cold interpreted code is much slower), appropriately sized thread/connection pools to avoid resource contention, horizontal scaling for elasticity, and ongoing observability into GC and latency metrics, since default settings are rarely optimal for demanding production workloads.',
    tags: ['system-design', 'performance', 'jvm-tuning', 'scalability']
  },
  {
    id: 'java-087',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'Your Java service shows periodic latency spikes that correlate with GC logs showing long "stop-the-world" pauses, even though average heap utilization looks healthy. How would you diagnose and address this?',
    options: [
      'Simply increase -Xmx without further analysis since more memory always helps',
      'Analyze GC logs (e.g., via GCViewer or JVM\u2019s built-in unified logging) to identify whether minor or major GCs are causing the pauses, check for excessive object allocation rate or premature promotion to Old Gen, consider switching to/tuning a low-pause collector (G1/ZGC), and review for unnecessarily large or long-lived object retention',
      'Disable the JIT compiler to reduce GC pressure',
      'Restart the JVM every few minutes as a permanent production strategy'
    ],
    correctAnswer: 'Analyze GC logs (e.g., via GCViewer or JVM\u2019s built-in unified logging) to identify whether minor or major GCs are causing the pauses, check for excessive object allocation rate or premature promotion to Old Gen, consider switching to/tuning a low-pause collector (G1/ZGC), and review for unnecessarily large or long-lived object retention',
    explanation: 'GC log analysis reveals the actual pause distribution and cause (e.g., frequent minor GCs from high allocation rate, or rare but long full GCs from Old Gen pressure); addressing the root cause may involve reducing unnecessary allocations/promotions, tuning generation sizing, or moving to a concurrent low-pause collector better suited to the application\u2019s latency requirements, rather than blindly increasing heap size.',
    tags: ['performance', 'garbage-collection', 'debugging', 'latency']
  },
  {
    id: 'java-088',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a distributed rate limiter for a Java-based API gateway running across many stateless service instances?',
    options: [
      'Track counts in a static Java field within each instance independently',
      'Use a centralized, atomic store like Redis (INCR + EXPIRE, or a Lua-scripted sliding window algorithm) accessible by all instances, since in-memory counters in one JVM instance are invisible to others behind a load balancer',
      'Have each instance independently decide limits with no coordination, accepting wide inconsistency',
      'Rely on the client to self-report and enforce its own rate limit'
    ],
    correctAnswer: 'Use a centralized, atomic store like Redis (INCR + EXPIRE, or a Lua-scripted sliding window algorithm) accessible by all instances, since in-memory counters in one JVM instance are invisible to others behind a load balancer',
    explanation: 'Since each stateless service instance has independent JVM memory, an in-process counter only limits traffic hitting that specific instance; a shared, atomic external store ensures the rate limit is enforced consistently across the entire fleet regardless of which instance handles a given request.',
    tags: ['system-design', 'rate-limiting', 'distributed-systems']
  },
  {
    id: 'java-089',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'What subtle concurrency bug exists in this lazy-initialized cache, and how would you fix it for thread safety?\n\nprivate Map<String, Object> cache = new HashMap<>();\npublic Object get(String key) {\n  if (!cache.containsKey(key)) {\n    cache.put(key, computeExpensive(key));\n  }\n  return cache.get(key);\n}',
    options: [
      'HashMap is fully thread-safe by default, so no change is needed',
      'Concurrent access from multiple threads can corrupt HashMap\u2019s internal structure (or cause lost updates/infinite loops in older versions) since it is not thread-safe; fix by using ConcurrentHashMap with computeIfAbsent() for an atomic check-and-compute',
      'The bug is that containsKey() is deprecated and should not be used',
      'computeExpensive() must be declared static to be thread-safe'
    ],
    correctAnswer: 'Concurrent access from multiple threads can corrupt HashMap\u2019s internal structure (or cause lost updates/infinite loops in older versions) since it is not thread-safe; fix by using ConcurrentHashMap with computeIfAbsent() for an atomic check-and-compute',
    explanation: 'Plain HashMap provides no thread-safety guarantees; concurrent structural modification can corrupt internal bucket/tree structures, and the separate containsKey()/put() calls form a non-atomic check-then-act race allowing redundant or lost computation; replacing with ConcurrentHashMap and using its atomic computeIfAbsent(key, k -> computeExpensive(k)) fixes both the thread-safety and race condition issues in one step.',
    tags: ['concurrency', 'collections', 'caching', 'gotchas']
  },
  {
    id: 'java-090',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design idempotent payment-processing endpoints in a Java Spring Boot service to safely handle client retries on network timeouts?',
    options: [
      'Disable retries entirely at the client to avoid the problem',
      'Require an Idempotency-Key header, persist the key alongside the operation\u2019s result within the same database transaction before returning, and on detecting a duplicate key (via a unique constraint), return the originally stored response instead of reprocessing the payment',
      'Rely solely on the database\u2019s auto-increment primary key to detect duplicates after the fact',
      'Generate a new idempotency key server-side on every request to simplify tracking'
    ],
    correctAnswer: 'Require an Idempotency-Key header, persist the key alongside the operation\u2019s result within the same database transaction before returning, and on detecting a duplicate key (via a unique constraint), return the originally stored response instead of reprocessing the payment',
    explanation: 'A client-supplied idempotency key, checked and recorded atomically (typically via a unique database constraint) within the same transaction as the payment operation, lets the server safely recognize and short-circuit a retried request by returning the original outcome, preventing double-charging when the client cannot tell whether its original request actually succeeded.',
    tags: ['system-design', 'idempotency', 'spring', 'payments']
  },
  {
    id: 'java-091',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a circuit breaker for outgoing HTTP calls from a Spring Boot microservice to an unreliable downstream dependency?',
    options: [
      'Retry every failed call indefinitely with no backoff',
      'Use a library like Resilience4j to track failure rates per dependency; once a configured failure threshold is exceeded, the circuit "opens" to fail fast without calling the dependency, periodically transitions to "half-open" to test a limited number of trial requests, and fully "closes" again once the dependency proves healthy',
      'Block all outgoing calls application-wide after any single failure of any dependency',
      'Catch exceptions silently and always return a hardcoded success response'
    ],
    correctAnswer: 'Use a library like Resilience4j to track failure rates per dependency; once a configured failure threshold is exceeded, the circuit "opens" to fail fast without calling the dependency, periodically transitions to "half-open" to test a limited number of trial requests, and fully "closes" again once the dependency proves healthy',
    explanation: 'Resilience4j (and similar circuit breaker libraries, often integrated as a Spring annotation/aspect) implement the classic closed/open/half-open state machine per protected call, preventing cascading failures by quickly failing requests to a known-bad dependency rather than letting every caller wait on slow timeouts, while periodically probing for recovery to restore normal traffic automatically.',
    tags: ['system-design', 'circuit-breaker', 'resilience4j', 'spring']
  },
  {
    id: 'java-092',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you architect a multi-tenant SaaS Java application built on Spring/JPA to ensure strict data isolation between tenants while sharing application infrastructure?',
    options: [
      'Store every tenant\u2019s data in one unscoped table relying solely on each repository method remembering to filter by tenant',
      'Combine a centrally enforced tenant context (e.g., a Hibernate filter or interceptor automatically applying a tenant_id predicate based on the authenticated request\u2019s derived tenant, never a client-supplied value) with database-level defense-in-depth such as row-level security or schema-per-tenant for especially sensitive tenants',
      'Give every tenant a fully separate Spring Boot deployment with no shared infrastructure whatsoever',
      'Trust a tenant_id field included directly in the client\u2019s request body'
    ],
    correctAnswer: 'Combine a centrally enforced tenant context (e.g., a Hibernate filter or interceptor automatically applying a tenant_id predicate based on the authenticated request\u2019s derived tenant, never a client-supplied value) with database-level defense-in-depth such as row-level security or schema-per-tenant for especially sensitive tenants',
    explanation: 'Manually remembering to filter every single query by tenant is fragile against a single missed query introducing a cross-tenant data leak; centralizing enforcement through a Hibernate @Filter or interceptor tied to the authenticated session\u2019s derived tenant (never trusting client-supplied tenant identifiers), layered with database-level isolation, provides robust defense-in-depth.',
    tags: ['system-design', 'multi-tenancy', 'security', 'jpa']
  },
  {
    id: 'java-093',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'What is wrong with this Spring REST controller from a production-readiness perspective?\n\n@GetMapping("/users")\npublic List<User> getUsers() {\n  return userRepository.findAll();\n}',
    options: [
      'Nothing; this is production-ready as written',
      '@GetMapping cannot be used without an explicit produces attribute',
      'It lacks pagination, risking unbounded result sets that strain memory and network at scale, and exposes the raw entity directly (potentially leaking internal fields or lazy-loading exceptions) rather than mapping to a dedicated DTO',
      'findAll() always returns null if the table is empty'
    ],
    correctAnswer: 'It lacks pagination, risking unbounded result sets that strain memory and network at scale, and exposes the raw entity directly (potentially leaking internal fields or lazy-loading exceptions) rather than mapping to a dedicated DTO',
    explanation: 'Returning an unpaginated full table scan risks severe memory/network strain as the table grows, and directly serializing JPA entities risks leaking sensitive/internal fields, triggering lazy-initialization exceptions outside the persistence context, or coupling the API contract too tightly to the database schema; production code should paginate (e.g., Pageable) and map to explicit response DTOs.',
    tags: ['spring', 'api-design', 'pagination', 'production']
  },
  {
    id: 'java-094',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a reliable background job processing system in Java to ensure no job is silently lost if a worker JVM crashes mid-execution?',
    options: [
      'Store pending jobs only in an in-memory queue within the application',
      'Use a durable, externally persisted queue (e.g., a database-backed job table, RabbitMQ, or Kafka with consumer offset management) where a job is only marked complete after successful processing, configure visibility timeouts/redelivery so a crashed worker\u2019s job becomes available again, and route repeatedly-failing jobs to a dead-letter destination for investigation',
      'Process all jobs synchronously within the originating HTTP request to avoid the need for any queue',
      'Rely on a cron job polling without any locking, accepting duplicate processing as unavoidable'
    ],
    correctAnswer: 'Use a durable, externally persisted queue (e.g., a database-backed job table, RabbitMQ, or Kafka with consumer offset management) where a job is only marked complete after successful processing, configure visibility timeouts/redelivery so a crashed worker\u2019s job becomes available again, and route repeatedly-failing jobs to a dead-letter destination for investigation',
    explanation: 'Reliability requires the queue itself (not just application memory) to be the durable system of record for pending work, acknowledging completion only after successful processing so a crashed worker\u2019s in-flight job becomes eligible for redelivery, with bounded retries and a dead-letter mechanism preventing both job loss and infinite poison-pill retry loops.',
    tags: ['system-design', 'queues', 'reliability', 'kafka']
  },
  {
    id: 'java-095',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'Why might a Java microservice deployed in Kubernetes get OOM-killed despite -Xmx being set comfortably below the container\'s memory limit?',
    options: [
      'OOM kills only ever happen due to disk space exhaustion, never memory',
      'The JVM\u2019s total memory footprint extends beyond the heap (-Xmx) to include metaspace, thread stacks, native/direct buffers, and JIT code cache; if these off-heap regions aren\u2019t accounted for, total RSS can exceed the container\u2019s cgroup memory limit even with a conservative heap setting',
      'Kubernetes ignores memory limits for Java applications specifically',
      '-Xmx has no relationship to the container\u2019s actual memory usage'
    ],
    correctAnswer: 'The JVM\u2019s total memory footprint extends beyond the heap (-Xmx) to include metaspace, thread stacks, native/direct buffers, and JIT code cache; if these off-heap regions aren\u2019t accounted for, total RSS can exceed the container\u2019s cgroup memory limit even with a conservative heap setting',
    explanation: 'A common production incident pattern: engineers size -Xmx based on the container\u2019s memory limit without budgeting for thread stacks (each consuming memory, multiplied across thread pool size), metaspace for class metadata, direct ByteBuffers, and the JIT compiler\u2019s code cache, all of which count toward the cgroup memory limit that Kubernetes enforces, leading to OOM kills despite the heap itself never being exhausted.',
    tags: ['jvm', 'kubernetes', 'memory', 'production']
  },
  {
    id: 'java-096',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design schema-compatible, zero-downtime rolling deployments for a Java Spring Boot service backed by a relational database, where a column needs to be renamed?',
    options: [
      'Rename the column in a single migration and deploy new code simultaneously, accepting a brief outage window',
      'Apply the expand-contract pattern: add the new column while retaining the old one, deploy code that dual-writes both and reads from the new column with fallback, backfill historical data, and only drop the old column in a later, separate deployment once all instances are confirmed running the new code',
      'Skip database migrations entirely and handle the rename purely in application-level mapping with no schema change',
      'Manually edit the schema through a GUI tool during live traffic with no migration tooling involved'
    ],
    correctAnswer: 'Apply the expand-contract pattern: add the new column while retaining the old one, deploy code that dual-writes both and reads from the new column with fallback, backfill historical data, and only drop the old column in a later, separate deployment once all instances are confirmed running the new code',
    explanation: 'During a rolling Kubernetes/load-balanced deployment, old and new application versions may run concurrently against the same database for a window of time; a direct rename would break whichever version expects the prior schema, so the expand-contract pattern decomposes the change into safe, backward-compatible steps that tolerate both versions coexisting before finally removing the deprecated column.',
    tags: ['system-design', 'database', 'migrations', 'zero-downtime']
  },
  {
    id: 'java-097',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'A Java application deserializes objects using native Java serialization (ObjectInputStream.readObject()) from an untrusted network source. What critical vulnerability does this introduce, and how is it mitigated?',
    options: [
      'There is no risk since Java serialization is cryptographically signed by default',
      'It is vulnerable to deserialization attacks, where a crafted serialized payload can trigger arbitrary code execution via "gadget chains" in classes already present on the classpath; mitigation includes avoiding native Java deserialization of untrusted data entirely, using safer formats like JSON, or employing a strict deserialization allowlist filter (ObjectInputFilter)',
      'The only risk is increased CPU usage, with no security implication',
      'This vulnerability was fully eliminated starting in Java 8 with no further action needed'
    ],
    correctAnswer: 'It is vulnerable to deserialization attacks, where a crafted serialized payload can trigger arbitrary code execution via "gadget chains" in classes already present on the classpath; mitigation includes avoiding native Java deserialization of untrusted data entirely, using safer formats like JSON, or employing a strict deserialization allowlist filter (ObjectInputFilter)',
    explanation: 'Java\u2019s built-in serialization mechanism reconstructs objects by invoking constructors and methods (including readObject() overrides) based purely on the serialized bytes; if any class reachable on the classpath has a chainable sequence of method calls ("gadget chain") leading to dangerous behavior, an attacker-crafted payload can trigger remote code execution purely through deserialization, which is why untrusted Java-native deserialization is considered a serious, historically exploited vulnerability class, best mitigated by avoiding it or applying strict allowlist-based ObjectInputFilters.',
    tags: ['security', 'deserialization', 'java-serialization']
  },
  {
    id: 'java-098',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'A Java service\'s thread dump under load shows many threads BLOCKED on the same monitor, with throughput far below expectations despite low CPU usage. What is the likely cause, and how would you fix it?',
    options: [
      'The CPU is simply too slow and needs to be upgraded',
      'A single coarse-grained synchronized block/lock is serializing access to a hot resource, creating a bottleneck; the fix is to reduce the critical section\u2019s scope, use finer-grained locking, switch to a concurrent data structure (e.g., ConcurrentHashMap, lock striping), or use a lock-free/CAS-based approach where applicable',
      'The application needs more heap memory to resolve thread contention',
      'BLOCKED threads always indicate a deadlock that requires an immediate restart'
    ],
    correctAnswer: 'A single coarse-grained synchronized block/lock is serializing access to a hot resource, creating a bottleneck; the fix is to reduce the critical section\u2019s scope, use finer-grained locking, switch to a concurrent data structure (e.g., ConcurrentHashMap, lock striping), or use a lock-free/CAS-based approach where applicable',
    explanation: 'Many threads in BLOCKED state waiting on the same monitor, combined with low CPU usage, is a classic sign of lock contention rather than a CPU bottleneck or deadlock (deadlocked threads would be permanently blocked, not cycling through, and overall throughput would stall completely rather than just being low); analyzing the thread dump\u2019s monitor ownership reveals the contended lock, which should be narrowed in scope or replaced with a more concurrency-friendly mechanism.',
    tags: ['concurrency', 'performance', 'debugging', 'thread-dump']
  },
  {
    id: 'java-099',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a search feature for a Java-based e-commerce platform with millions of products, given that LIKE-based queries against the primary relational database scale poorly?',
    options: [
      'Add more database read replicas as the sole solution, keeping LIKE queries unchanged',
      'Offload full-text search to a dedicated search engine (Elasticsearch/OpenSearch) maintaining an inverted index, synchronize it asynchronously from the primary database (via change-data-capture or application-level events published on write), and query the search engine directly for search requests rather than treating it as the system of record',
      'Cache LIKE query results indefinitely in application memory across all instances',
      'Switch the primary database engine entirely just to gain better LIKE performance'
    ],
    correctAnswer: 'Offload full-text search to a dedicated search engine (Elasticsearch/OpenSearch) maintaining an inverted index, synchronize it asynchronously from the primary database (via change-data-capture or application-level events published on write), and query the search engine directly for search requests rather than treating it as the system of record',
    explanation: 'Wildcard LIKE queries generally cannot leverage standard B-tree indexes efficiently at scale; a purpose-built search engine\u2019s inverted index structure handles full-text relevance, faceting, and fuzzy matching far more efficiently, with the relational database remaining the authoritative source of truth and the search index kept eventually consistent through asynchronous synchronization.',
    tags: ['system-design', 'search', 'elasticsearch', 'scalability']
  },
  {
    id: 'java-100',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a distributed lock in Java using Redis to ensure a scheduled task runs on exactly one instance among many horizontally scaled service replicas?',
    options: [
      'Use a static boolean flag in the JVM, assuming only one instance will ever run',
      'Have each instance attempt an atomic SET key uniqueValue NX PX ttl on Redis; only the instance that successfully sets the key proceeds with the task, release the lock via a script that verifies ownership (matching value) before deleting it, and rely on the TTL for automatic recovery if the lock holder crashes',
      'Have all instances run the scheduled task simultaneously and deduplicate results afterward',
      'Use a shared in-memory Java object across all running instances'
    ],
    correctAnswer: 'Have each instance attempt an atomic SET key uniqueValue NX PX ttl on Redis; only the instance that successfully sets the key proceeds with the task, release the lock via a script that verifies ownership (matching value) before deleting it, and rely on the TTL for automatic recovery if the lock holder crashes',
    explanation: 'Each replica is an independent JVM with no shared memory, so coordination must go through an external atomic store; Redis\u2019s SET ... NX with an expiry provides atomic, mutually exclusive lock acquisition, a unique value lets the holder safely verify ownership before release (typically via a Lua script for atomicity), and the TTL guards against indefinite lock holding if the owning instance crashes.',
    tags: ['system-design', 'distributed-locking', 'redis', 'scheduling']
  },
  {
    id: 'java-101',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'What concurrency bug does this inventory decrement code have, and what is the correct fix at the database/application level?\n\nint stock = jdbcTemplate.queryForObject("SELECT stock FROM products WHERE id=?", Integer.class, id);\nif (stock > 0) {\n  jdbcTemplate.update("UPDATE products SET stock = ? WHERE id = ?", stock - 1, id);\n}',
    options: [
      'There is no bug since JDBC guarantees thread safety for all queries automatically',
      'A classic check-then-act race condition allows two concurrent requests to both read the same stock value before either writes back, both decrementing as if safe, causing overselling; fix with an atomic UPDATE products SET stock = stock - 1 WHERE id = ? AND stock > 0, checking the affected row count, or use SELECT ... FOR UPDATE within an explicit transaction',
      'The bug is that queryForObject() cannot be used with parameterized queries',
      'Adding more application server instances automatically resolves this race condition'
    ],
    correctAnswer: 'A classic check-then-act race condition allows two concurrent requests to both read the same stock value before either writes back, both decrementing as if safe, causing overselling; fix with an atomic UPDATE products SET stock = stock - 1 WHERE id = ? AND stock > 0, checking the affected row count, or use SELECT ... FOR UPDATE within an explicit transaction',
    explanation: 'Reading a value in one statement and conditionally writing in a separate statement creates a window where concurrent requests can interleave on stale data; expressing the check-and-decrement as a single atomic UPDATE with a WHERE condition (and verifying the affected row count to detect failure) or explicitly locking the row for the transaction\u2019s duration removes the race entirely at the database level.',
    tags: ['concurrency', 'race-conditions', 'jdbc', 'database', 'gotchas']
  },
  {
    id: 'java-102',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design observability (logging, metrics, distributed tracing) for a Java-based microservices architecture using Spring Boot, where a single user action spans multiple services?',
    options: [
      'Rely solely on each service\u2019s local log files with no aggregation or correlation',
      'Implement structured (JSON) logging with a correlation/trace ID propagated across service boundaries via HTTP headers (using tools like Micrometer Tracing/OpenTelemetry), export application and business metrics to a system like Prometheus, and visualize distributed traces (e.g., via Zipkin/Jaeger) to follow a request\u2019s full path and latency breakdown across services',
      'Disable all logging in production for performance reasons',
      'Use exclusively the JVM\u2019s built-in flight recorder as the sole observability tool'
    ],
    correctAnswer: 'Implement structured (JSON) logging with a correlation/trace ID propagated across service boundaries via HTTP headers (using tools like Micrometer Tracing/OpenTelemetry), export application and business metrics to a system like Prometheus, and visualize distributed traces (e.g., via Zipkin/Jaeger) to follow a request\u2019s full path and latency breakdown across services',
    explanation: 'Spring Boot\u2019s ecosystem provides strong integration points (Micrometer for metrics, Micrometer Tracing/OpenTelemetry for distributed tracing) that, combined with structured logs carrying a propagated trace ID, let operators correlate a single logical request across every service it touches, visualize latency contributed by each hop, and quickly localize the source of failures or slowness in a way isolated per-service logs cannot achieve.',
    tags: ['system-design', 'observability', 'microservices', 'spring-boot']
  },
  {
    id: 'java-103',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'Why can excessive use of checked exceptions combined with broad catch (Exception e) blocks in a large Java codebase create a maintainability and reliability risk?',
    options: [
      'Catching Exception broadly can inadvertently swallow unrelated runtime errors (including programming bugs like NullPointerException) alongside the intended checked exception, masking real defects, while also making it harder to reason about which specific failure modes a piece of code actually handles versus merely suppresses',
      'There is no risk since Java automatically distinguishes checked from unchecked exceptions even inside a broad catch block',
      'Broad catch blocks always improve performance by reducing exception handling overhead',
      'Checked exceptions cannot be caught by a generic catch (Exception e) block at all'
    ],
    correctAnswer: 'Catching Exception broadly can inadvertently swallow unrelated runtime errors (including programming bugs like NullPointerException) alongside the intended checked exception, masking real defects, while also making it harder to reason about which specific failure modes a piece of code actually handles versus merely suppresses',
    explanation: 'A catch (Exception e) clause catches both the intended checked exceptions and any unrelated unchecked exceptions (often genuine bugs) that happen to occur within the try block, which can silently mask defects that should have surfaced as failures; disciplined exception handling catches specific exception types and lets truly unexpected runtime exceptions propagate rather than uniformly suppressing everything.',
    tags: ['exceptions', 'code-quality', 'production']
  },
  {
    id: 'java-104',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'A Java API endpoint computing a complex report takes 10 seconds, occasionally causing gateway timeouts. What architectural fix addresses this most robustly at scale, beyond just optimizing the underlying query?',
    options: [
      'Increase the client and gateway timeout indefinitely to match worst-case execution time',
      'Decouple report generation into an asynchronous job: the API immediately returns a job ID (202 Accepted), a background worker (e.g., via Spring\u2019s @Async or a dedicated job queue/Kafka consumer) computes and stores the result, and the client polls a status endpoint or receives a webhook/WebSocket notification on completion, avoiding holding an HTTP thread for the full duration',
      'Simply add more application instances behind the load balancer with no other change',
      'Switch the endpoint from GET to POST as the primary fix'
    ],
    correctAnswer: 'Decouple report generation into an asynchronous job: the API immediately returns a job ID (202 Accepted), a background worker (e.g., via Spring\u2019s @Async or a dedicated job queue/Kafka consumer) computes and stores the result, and the client polls a status endpoint or receives a webhook/WebSocket notification on completion, avoiding holding an HTTP thread for the full duration',
    explanation: 'Long-running synchronous HTTP requests are fragile against gateway and client timeout limits and tie up scarce server threads for their entire duration; the standard scalable fix decouples the expensive computation into an asynchronous job pattern, with the synchronous API call returning quickly and the actual result delivered via polling or push notification once ready.',
    tags: ['system-design', 'performance', 'async-processing']
  },
  {
    id: 'java-105',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'Why does naive use of String concatenation with the "+" operator inside a loop processing millions of records cause severe performance degradation, despite the compiler optimizing simple "+" usage with StringBuilder under the hood?',
    options: [
      'The "+" operator always uses StringBuilder optimally regardless of context, so there is never a performance issue',
      'Inside a loop, the compiler typically creates a new StringBuilder instance on each iteration (rather than reusing one across iterations) to perform that single concatenation, so the loop still allocates and discards a fresh, growing String object on every pass, leading to O(n\u00b2) total character copying as the string grows; explicitly reusing a single StringBuilder across the loop avoids this',
      'String concatenation with "+" is always identical in performance to StringBuilder.append() with no caveats',
      'This issue only affects single-threaded code, never multi-threaded loops'
    ],
    correctAnswer: 'Inside a loop, the compiler typically creates a new StringBuilder instance on each iteration (rather than reusing one across iterations) to perform that single concatenation, so the loop still allocates and discards a fresh, growing String object on every pass, leading to O(n\u00b2) total character copying as the string grows; explicitly reusing a single StringBuilder across the loop avoids this',
    explanation: 'While javac does compile a single "a + b" expression to use StringBuilder internally, it does so per-statement, not across loop iterations; accumulating a string with result += line inside a loop still produces a new immutable String (and discards the previous one) on every iteration, with each concatenation copying the entire accumulated content again, making explicit single-StringBuilder reuse essential for efficient large-scale string building.',
    tags: ['performance', 'strings', 'gotchas']
  },
  {
    id: 'java-106',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a notification system in a Java/Spring application that must reliably deliver via multiple channels (email, SMS, push) while avoiding notification storms during a downstream provider outage?',
    options: [
      'Send all channels synchronously and sequentially within the triggering HTTP request',
      'Dispatch each channel as an independent message to a queue (e.g., Kafka topic or RabbitMQ queue per channel) consumed by dedicated workers with their own exponential backoff/retry policy, apply a circuit breaker per downstream provider to stop hammering a failing channel, and route exhausted retries to a dead-letter queue for visibility',
      'Retry indefinitely with no backoff whenever any channel fails',
      'Drop notifications entirely on the first failure with absolutely no retry mechanism'
    ],
    correctAnswer: 'Dispatch each channel as an independent message to a queue (e.g., Kafka topic or RabbitMQ queue per channel) consumed by dedicated workers with their own exponential backoff/retry policy, apply a circuit breaker per downstream provider to stop hammering a failing channel, and route exhausted retries to a dead-letter queue for visibility',
    explanation: 'Decoupling each notification channel into its own queue and consumer group with independent retry/backoff settings prevents a struggling channel (e.g., an SMS gateway outage) from blocking or delaying others, while a per-provider circuit breaker avoids amplifying load against an already failing dependency, and a dead-letter queue preserves permanently failed messages for operator visibility rather than silently dropping them.',
    tags: ['system-design', 'notifications', 'resilience', 'kafka']
  },
  {
    id: 'java-107',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'In a Kafka-based event-driven Java architecture, why does "at-least-once" delivery semantics require consumer-side idempotency, and how is this typically implemented?',
    options: [
      'At-least-once delivery guarantees no duplicates, so idempotency is never needed',
      'Kafka can redeliver a message after a consumer processes it but crashes before committing its offset, so the same message may be processed more than once; consumers typically track processed message IDs (often via a unique constraint on a dedup table, or by making the downstream operation itself naturally idempotent) to ensure reprocessing has no additional effect',
      'Idempotency in Kafka consumers is automatically handled by the Kafka broker with zero application code required',
      'At-least-once semantics only apply to producers, never to consumers'
    ],
    correctAnswer: 'Kafka can redeliver a message after a consumer processes it but crashes before committing its offset, so the same message may be processed more than once; consumers typically track processed message IDs (often via a unique constraint on a dedup table, or by making the downstream operation itself naturally idempotent) to ensure reprocessing has no additional effect',
    explanation: 'Because committing an offset and processing the message are two separate steps, a crash between processing and committing causes Kafka to redeliver that message on consumer restart/rebalance; without consumer-side idempotency (e.g., a deduplication table keyed by message ID checked atomically with the business effect, or naturally idempotent operations like upserts), this redelivery can cause duplicate side effects such as double-counting or duplicate notifications.',
    tags: ['kafka', 'system-design', 'idempotency', 'messaging']
  },
  {
    id: 'java-108',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you reduce cold-start latency for a Java Spring Boot application deployed as a serverless function (e.g., AWS Lambda), given the JVM\'s traditionally slow startup characteristics?',
    options: [
      'Always provision the maximum available memory regardless of actual need as the only fix',
      'Use a lightweight framework profile (e.g., Spring Boot\u2019s lazy initialization, or migrating to GraalVM Native Image/Quarkus for ahead-of-time compilation), minimize classpath scanning and unnecessary auto-configuration, and leverage provisioned concurrency where available to keep instances warm',
      'Run a full traditional Spring Boot application with all auto-configuration enabled and no further optimization',
      'Increase the function timeout indefinitely instead of addressing startup time'
    ],
    correctAnswer: 'Use a lightweight framework profile (e.g., Spring Boot\u2019s lazy initialization, or migrating to GraalVM Native Image/Quarkus for ahead-of-time compilation), minimize classpath scanning and unnecessary auto-configuration, and leverage provisioned concurrency where available to keep instances warm',
    explanation: 'Traditional JVM startup (class loading, reflection-heavy Spring component scanning, JIT warm-up) is a poor fit for serverless cold starts; reducing classpath scanning scope, enabling lazy bean initialization, or moving to AOT-compiled runtimes like GraalVM Native Image (or lighter frameworks like Quarkus designed for fast startup) directly addresses the root cause, while provisioned concurrency sidesteps the issue operationally by keeping warm instances ready.',
    tags: ['serverless', 'performance', 'spring-boot', 'graalvm']
  },
  {
    id: 'java-109',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a Java-based system to handle "eventual consistency" between a primary relational database and a denormalized Redis-based read cache for a high-traffic product listing page?',
    options: [
      'Attempt to update Redis and the database within the exact same millisecond using busy-waiting to force synchronization',
      'Write to the primary database as the source of truth within a transaction, then asynchronously invalidate or refresh the affected cache keys via an event (e.g., published after successful commit, consumed by a cache-update listener), accepting a brief, bounded window of staleness and designing cache TTLs/UI expectations accordingly',
      'Never cache anything to sidestep consistency concerns entirely',
      'Treat Redis as the sole source of truth and stop writing to the relational database altogether'
    ],
    correctAnswer: 'Write to the primary database as the source of truth within a transaction, then asynchronously invalidate or refresh the affected cache keys via an event (e.g., published after successful commit, consumed by a cache-update listener), accepting a brief, bounded window of staleness and designing cache TTLs/UI expectations accordingly',
    explanation: 'Synchronizing two different storage technologies atomically is impractical; the pragmatic, scalable pattern commits the authoritative write to the relational database first (often using a transactional outbox to reliably publish the corresponding event), then asynchronously propagates the change to the cache, explicitly accepting a small, bounded consistency lag rather than pretending perfect synchronization is achievable.',
    tags: ['system-design', 'caching', 'eventual-consistency', 'redis']
  },
  {
    id: 'java-110',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'How would you securely manage secrets (database credentials, API keys) for a Java Spring Boot application deployed across multiple environments, avoiding the anti-pattern of committing them to version control?',
    options: [
      'Hardcode credentials directly in application.properties and commit it to the repository',
      'Externalize secrets via environment variables or a dedicated secrets manager (e.g., AWS Secrets Manager, HashiCorp Vault, or Spring Cloud Config with encrypted properties) injected at deploy/runtime, keep only non-sensitive placeholder/example configuration in version control, and support periodic credential rotation without requiring code changes',
      'Encode secrets with Base64 in the properties file as the primary security measure',
      'Store secrets in a Java static final String constant for compile-time safety'
    ],
    correctAnswer: 'Externalize secrets via environment variables or a dedicated secrets manager (e.g., AWS Secrets Manager, HashiCorp Vault, or Spring Cloud Config with encrypted properties) injected at deploy/runtime, keep only non-sensitive placeholder/example configuration in version control, and support periodic credential rotation without requiring code changes',
    explanation: 'Secrets must never be committed to source control, and Base64 is merely encoding, not encryption, providing no real protection; the standard production approach injects secrets from a secure external source at runtime, decoupling credential rotation from application deployments and keeping the actual secret values entirely out of the codebase.',
    tags: ['security', 'secrets-management', 'spring-boot']
  },
  {
    id: 'java-111',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a feature flag / gradual rollout system for a Java microservices fleet, allowing a new feature to be enabled for 1% of traffic before full rollout?',
    options: [
      'Hardcode the feature behind a boolean constant requiring a full redeploy to adjust the rollout percentage',
      'Use a centralized feature flag service or configuration store queried per request (with local caching for performance), applying deterministic, consistent bucketing (e.g., hashing a stable user ID modulo 100) so a given user consistently sees the same variant across requests rather than flickering',
      'Randomly decide the flag state on every single request with no consistency per user',
      'Deploy two entirely separate application versions and split traffic via raw DNS round robin with no flag system'
    ],
    correctAnswer: 'Use a centralized feature flag service or configuration store queried per request (with local caching for performance), applying deterministic, consistent bucketing (e.g., hashing a stable user ID modulo 100) so a given user consistently sees the same variant across requests rather than flickering',
    explanation: 'A production-grade rollout mechanism decouples deployment from release: flag state is checked at request time from a fast, centrally updatable store (often cached locally with periodic refresh to avoid per-request network calls), and deterministic hashing of a stable identifier ensures each user is consistently bucketed into the same variant, avoiding a jarring flickering experience while still allowing instant percentage adjustments.',
    tags: ['system-design', 'feature-flags', 'rollout']
  },
  {
    id: 'java-112',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'Why is relying on java.util.Random (rather than java.security.SecureRandom) for generating password reset tokens or session identifiers a security risk?',
    options: [
      'java.util.Random is a cryptographically secure generator just like SecureRandom, so there is no risk',
      'java.util.Random is a linear congruential generator whose internal state can be inferred from a sequence of outputs, making generated values predictable; SecureRandom uses a cryptographically secure algorithm suitable for security-sensitive token generation',
      'java.util.Random can only generate integers, never usable token strings, making it unrelated to this use case',
      'The only issue with java.util.Random is that it is slower than SecureRandom, with no security implication'
    ],
    correctAnswer: 'java.util.Random is a linear congruential generator whose internal state can be inferred from a sequence of outputs, making generated values predictable; SecureRandom uses a cryptographically secure algorithm suitable for security-sensitive token generation',
    explanation: 'java.util.Random\u2019s deterministic, seed-based linear congruential algorithm is well-suited for simulations or games but not security, since observing a handful of outputs can allow an attacker to reconstruct internal state and predict future values; SecureRandom is specifically designed to resist such prediction and is the correct choice for tokens, session IDs, and other security-sensitive randomness.',
    tags: ['security', 'randomness', 'tokens']
  },
  {
    id: 'java-113',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'What subtle bug exists in this rate-limiting interceptor, common in real Java codebases?\n\nprivate Map<String, Integer> counts = new HashMap<>();\npublic boolean allow(String clientId) {\n  int count = counts.getOrDefault(clientId, 0);\n  counts.put(clientId, count + 1);\n  return count < 100;\n}',
    options: [
      'getOrDefault() cannot be used with Integer values',
      'The HashMap is not thread-safe under concurrent access (risking corruption/lost updates), the counter never resets per time window causing permanent blocking once exceeded, and per-client memory grows unbounded with no eviction; fix with a TTL-based, atomically updated store like a ConcurrentHashMap combined with scheduled cleanup, or an external store like Redis with expiry',
      'There is no bug; this implementation is production-ready',
      'getOrDefault() always throws a NullPointerException for a missing key'
    ],
    correctAnswer: 'The HashMap is not thread-safe under concurrent access (risking corruption/lost updates), the counter never resets per time window causing permanent blocking once exceeded, and per-client memory grows unbounded with no eviction; fix with a TTL-based, atomically updated store like a ConcurrentHashMap combined with scheduled cleanup, or an external store like Redis with expiry',
    explanation: 'This implementation has three compounding production issues: a plain HashMap is unsafe under concurrent requests (the get-then-put sequence is also a non-atomic race), the count never resets per a time window so any client that ever hit 100 requests is blocked forever, and the map grows without bound as new clientIds appear with no eviction strategy, all of which a TTL-aware, atomically-updating, externally shared store (like Redis with sliding window expiry) resolves.',
    tags: ['rate-limiting', 'concurrency', 'memory-leaks', 'gotchas']
  },
  {
    id: 'java-114',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design retry logic for a Java client calling a flaky downstream HTTP API, to avoid worsening an ongoing outage?',
    options: [
      'Never retry under any circumstances regardless of the failure type',
      'Retry immediately and indefinitely with zero delay between attempts',
      'Use exponential backoff with randomized jitter, a bounded maximum retry count, and respect any Retry-After header the downstream service provides, ideally combined with a circuit breaker to stop retrying entirely once the dependency is clearly unhealthy',
      'Retry only on successful (2xx) responses, never on failures'
    ],
    correctAnswer: 'Use exponential backoff with randomized jitter, a bounded maximum retry count, and respect any Retry-After header the downstream service provides, ideally combined with a circuit breaker to stop retrying entirely once the dependency is clearly unhealthy',
    explanation: 'Naive, immediate, unbounded retries can amplify load on an already struggling dependency, turning a partial outage into a complete one (a "retry storm"); exponential backoff with jitter spreads retries out over time and across clients, a bounded retry count prevents infinite loops, honoring Retry-After cooperates with the server\u2019s own signal, and pairing retries with a circuit breaker stops futile repeated attempts once the dependency is known to be down.',
    tags: ['system-design', 'resilience', 'retries', 'http']
  },
  {
    id: 'java-115',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'Why might enabling HTTP connection pooling (e.g., via Apache HttpClient or Java 11+ HttpClient with a connection pool) on outgoing calls significantly improve throughput for a Java service making many requests to the same downstream host?',
    options: [
      'It reuses existing TCP/TLS connections rather than performing a fresh handshake for every request, reducing per-request latency and connection setup overhead',
      'It automatically compresses request payloads, which is the primary source of improvement',
      'Connection pooling has no measurable performance benefit in modern networks',
      'It disables TLS entirely to speed up transfer'
    ],
    correctAnswer: 'It reuses existing TCP/TLS connections rather than performing a fresh handshake for every request, reducing per-request latency and connection setup overhead',
    explanation: 'Without connection pooling/keep-alive, each outgoing HTTP call may incur a new TCP handshake (and TLS negotiation for HTTPS), which is comparatively expensive; reusing a pool of established connections amortizes that setup cost across many requests to the same host, substantially reducing tail latency and improving throughput under load, especially when calling chatty downstream services.',
    tags: ['performance', 'http', 'networking', 'connection-pooling']
  },
  {
    id: 'java-116',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a Java-based system to safely apply rolling, backward-compatible API contract changes (e.g., adding a required field) without breaking existing mobile app clients that cannot be force-updated instantly?',
    options: [
      'Make the field required immediately in a single deployment, accepting that older app versions will break',
      'Introduce the field as optional initially with a sensible default/fallback on both client and server, version the API explicitly (e.g., via a URL or header version) if a true breaking change is unavoidable, and only retire support for the old contract once client adoption metrics confirm sufficiently low usage of outdated versions',
      'Avoid ever changing the API contract once any client has integrated with it',
      'Silently change the field\u2019s meaning without any communication or versioning, relying on clients to adapt automatically'
    ],
    correctAnswer: 'Introduce the field as optional initially with a sensible default/fallback on both client and server, version the API explicitly (e.g., via a URL or header version) if a true breaking change is unavoidable, and only retire support for the old contract once client adoption metrics confirm sufficiently low usage of outdated versions',
    explanation: 'Mobile clients in particular cannot be assumed to update instantly (or sometimes ever, for some users), so backward-compatible evolution (additive optional fields, sensible defaults) is preferred over breaking changes; when a genuinely breaking change is unavoidable, explicit API versioning combined with monitoring real client version adoption before deprecating the old contract prevents abruptly breaking users still on older app versions.',
    tags: ['system-design', 'api-versioning', 'backward-compatibility']
  },
  {
    id: 'java-117',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'Why can naive use of nested loops with database calls inside a Spring service method (e.g., querying related data per item inside a loop) cause severe production performance degradation, and what is the typical fix?',
    options: [
      'Database connections are unlimited so this pattern never causes issues at any scale',
      'Each iteration issues a separate round-trip database query, turning what could be a single batched query into N (or N\u00d7M) network round trips, multiplying latency linearly (or worse) with data size; the fix is to batch the queries (e.g., a single IN clause, a JOIN, or JPA\u2019s batch fetching/entity graphs) rather than querying per item',
      'The fix is always to add more application server instances, not to change the query pattern',
      'This pattern only affects read operations, never write-heavy code paths'
    ],
    correctAnswer: 'Each iteration issues a separate round-trip database query, turning what could be a single batched query into N (or N\u00d7M) network round trips, multiplying latency linearly (or worse) with data size; the fix is to batch the queries (e.g., a single IN clause, a JOIN, or JPA\u2019s batch fetching/entity graphs) rather than querying per item',
    explanation: 'This is the classic N+1 (or worse, nested N\u00d7M) query anti-pattern: each network round trip to the database carries fixed latency overhead that compounds badly when issued per loop iteration instead of batched; replacing per-item queries with a single query using an IN clause, a JOIN, or JPA batch fetching/entity graph configuration collapses many round trips into one or a small constant number, which is essential for scaling beyond small datasets.',
    tags: ['performance', 'database', 'n+1-problem', 'spring']
  },
  {
    id: 'java-118',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a multi-region active-active Java service deployment to handle a regional outage without significant data loss or downtime?',
    options: [
      'Deploy only in a single region, accepting that a regional outage means full downtime',
      'Use a multi-region database replication strategy appropriate for the consistency requirements (e.g., synchronous replication for strict consistency at the cost of latency, or asynchronous/eventually-consistent replication for lower latency with a defined RPO), route traffic via global load balancing/DNS failover, and design the application to be largely stateless so any region can serve any request',
      'Manually fail over by having an engineer SSH into servers and redeploy after an outage is detected',
      'Replicate data nightly via a manual batch export/import process'
    ],
    correctAnswer: 'Use a multi-region database replication strategy appropriate for the consistency requirements (e.g., synchronous replication for strict consistency at the cost of latency, or asynchronous/eventually-consistent replication for lower latency with a defined RPO), route traffic via global load balancing/DNS failover, and design the application to be largely stateless so any region can serve any request',
    explanation: 'True multi-region resilience requires both the application layer (stateless, horizontally scalable services deployable identically in each region) and the data layer (a replication strategy explicitly chosen based on the acceptable consistency/latency/data-loss trade-offs for the use case) to be designed for regional failure, combined with automated traffic routing (global load balancer or DNS-based failover) that can redirect users away from an impaired region without manual intervention.',
    tags: ['system-design', 'multi-region', 'high-availability', 'disaster-recovery']
  },
  {
    id: 'java-119',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'A Java service using Hibernate shows good performance in staging with small test datasets, but production queries against a table with 80 million rows are extremely slow despite an index existing on the filtered column. What is a likely overlooked cause, and how would you diagnose it?',
    options: [
      'Indexes are universally ineffective on tables larger than a few million rows, so this is expected',
      'The query planner may be bypassing the index due to low selectivity, an implicit type mismatch between the Java-bound parameter and column type, or a non-sargable expression (e.g., applying a function to the indexed column in the WHERE clause); diagnose with the database\u2019s EXPLAIN/EXPLAIN ANALYZE rather than assuming the index is being used as intended',
      'Increasing the JVM heap size always resolves slow SQL queries regardless of cause',
      'Hibernate inherently ignores all database indexes by design'
    ],
    correctAnswer: 'The query planner may be bypassing the index due to low selectivity, an implicit type mismatch between the Java-bound parameter and column type, or a non-sargable expression (e.g., applying a function to the indexed column in the WHERE clause); diagnose with the database\u2019s EXPLAIN/EXPLAIN ANALYZE rather than assuming the index is being used as intended',
    explanation: 'Defining an index doesn\u2019t guarantee the query planner will use it effectively; common production-scale culprits include the optimizer choosing a full scan due to poor cardinality estimation, a Java-bound parameter type mismatching the column type preventing index usage, or wrapping the indexed column in a function in the WHERE clause, none of which are visible from small staging datasets but become apparent and diagnosable via the actual database execution plan at production scale.',
    tags: ['performance', 'hibernate', 'database', 'query-optimization']
  },
  {
    id: 'java-120',
    topic: 'java',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you architect the migration of a monolithic Java application\'s "Orders" module into an independent microservice with minimal risk, while the monolith continues serving production traffic?',
    options: [
      'Cut over all traffic to the new service immediately in a single big-bang deployment with no fallback path',
      'Apply the Strangler Fig pattern: introduce a routing facade in front of Orders functionality, incrementally redirect specific operations to the new service while the monolith continues serving the rest, keep data synchronized during the transition (e.g., dual writes, an outbox pattern, or change-data-capture), and progressively expand the new service\u2019s scope until the monolith\u2019s Orders code can be safely retired',
      'Copy the entire monolith codebase verbatim as the new microservice with no architectural changes',
      'Run both the monolith and new service indefinitely in parallel without ever fully completing the migration'
    ],
    correctAnswer: 'Apply the Strangler Fig pattern: introduce a routing facade in front of Orders functionality, incrementally redirect specific operations to the new service while the monolith continues serving the rest, keep data synchronized during the transition (e.g., dual writes, an outbox pattern, or change-data-capture), and progressively expand the new service\u2019s scope until the monolith\u2019s Orders code can be safely retired',
    explanation: 'The Strangler Fig pattern minimizes migration risk by progressively routing slices of functionality to the new service behind a stable facade rather than attempting a risky full cutover; maintaining data consistency throughout the transition (via dual writes, a transactional outbox, or CDC-based syncing) allows both implementations to safely coexist while traffic is gradually shifted, with the legacy code only decommissioned once the new service has proven itself across all relevant cases.',
    tags: ['system-design', 'microservices', 'strangler-fig', 'migration']
  }
];