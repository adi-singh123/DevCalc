/**
 * src/data/interview/typescript.ts
 * TypeScript Interview Questions (120 items)
 */

import { InterviewQuestion } from '@/src/types/interview';

export const typescriptQuestions: InterviewQuestion[] = [
  {
    id: 'ts-001',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the primary difference between "interface" and "type" in TypeScript?',
    options: [
      'Interfaces are extensible, types are not',
      'Types support unions, interfaces do not',
      'Interfaces are for classes, types are for objects',
      'No difference, they are identical'
    ],
    correctAnswer: 'Types support unions, interfaces do not',
    explanation: 'While both share many features, type aliases allow for union types and tuple definitions, whereas interfaces are primarily designed to define the shape of objects and are more easily merged via declaration merging.',
    tags: ['types', 'interfaces', 'fundamentals']
  },
  {
    id: 'ts-002',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does TypeScript add on top of JavaScript?',
    options: [
      'A new runtime engine',
      'Static type checking at compile time',
      'A replacement for the JavaScript syntax',
      'Automatic memory management'
    ],
    correctAnswer: 'Static type checking at compile time',
    explanation: 'TypeScript is a superset of JavaScript that adds optional static typing. It compiles (transpiles) down to plain JavaScript and does not introduce a new runtime; type errors are caught before code execution.',
    tags: ['fundamentals', 'compiler']
  },
  {
    id: 'ts-003',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which keyword is used to declare a variable whose type should be inferred but never reassigned?',
    options: ['var', 'let', 'const', 'readonly'],
    correctAnswer: 'const',
    explanation: '"const" declares a block-scoped variable that cannot be reassigned after initialization. TypeScript will infer the narrowest possible literal type for primitives declared with const where applicable.',
    tags: ['variables', 'fundamentals']
  },
  {
    id: 'ts-004',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the "any" type used for in TypeScript?',
    options: [
      'It restricts a variable to numbers only',
      'It opts a variable out of type checking',
      'It is the default return type of every function',
      'It enforces strict null checks'
    ],
    correctAnswer: 'It opts a variable out of type checking',
    explanation: '"any" disables type checking for that variable, allowing it to hold a value of any shape. It is useful for gradual migration from JavaScript but defeats the purpose of TypeScript if overused.',
    tags: ['any', 'types']
  },
  {
    id: 'ts-005',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the safer alternative to "any" introduced in TypeScript 3.0?',
    options: ['object', 'unknown', 'never', 'void'],
    correctAnswer: 'unknown',
    explanation: '"unknown" is a type-safe counterpart to "any". You can assign anything to an "unknown" variable, but you cannot use it until you narrow its type with a type guard, unlike "any" which allows any operation.',
    tags: ['unknown', 'any', 'types']
  },
  {
    id: 'ts-006',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Output',
    question: 'What is the output type of a function annotated as ": void"?',
    options: [
      'It must return null',
      'It must return undefined explicitly',
      'It indicates the function does not return a meaningful value',
      'It causes a compile error if anything is returned'
    ],
    correctAnswer: 'It indicates the function does not return a meaningful value',
    explanation: '"void" signals the absence of a meaningful return value. Functions can still technically return undefined, but callers are not expected to use the return value.',
    tags: ['void', 'functions']
  },
  {
    id: 'ts-007',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'How do you define an array of strings in TypeScript?',
    options: ['Array<string>() ', 'string[] or Array<string>', 'string{}', '[string]'],
    correctAnswer: 'string[] or Array<string>',
    explanation: 'Both "string[]" and the generic form "Array<string>" are equivalent ways to type an array containing only strings.',
    tags: ['arrays', 'generics', 'fundamentals']
  },
  {
    id: 'ts-008',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'What does the following code produce?\n\nfunction add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(2, 3));',
    options: ['"23"', '5', 'Error', 'undefined'],
    correctAnswer: '5',
    explanation: 'The function adds two numbers and returns a number. Since both arguments are typed as numbers, "+" performs numeric addition, producing 5.',
    tags: ['functions', 'coding']
  },
  {
    id: 'ts-009',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is a tuple in TypeScript?',
    options: [
      'An array with a fixed length and known types at each position',
      'A function that returns multiple values',
      'A type alias for objects',
      'An immutable version of an array'
    ],
    correctAnswer: 'An array with a fixed length and known types at each position',
    explanation: 'A tuple, e.g. "[string, number]", is an array-like structure where the length and the type of each element are fixed and known ahead of time.',
    tags: ['tuples', 'arrays', 'fundamentals']
  },
  {
    id: 'ts-010',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'How do you make a property optional in an interface?',
    options: ['Use "?" after the property name', 'Use "optional" keyword', 'Assign it "undefined" as a default', 'Wrap it in "Partial<>" individually'],
    correctAnswer: 'Use "?" after the property name',
    explanation: 'Appending "?" to a property name, e.g. "age?: number", marks it as optional, meaning the property may be omitted when creating an object of that interface.',
    tags: ['interfaces', 'optional-properties']
  },
  {
    id: 'ts-011',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does the "readonly" modifier do to a property?',
    options: [
      'Prevents the property from being read outside the class',
      'Prevents reassignment of the property after initialization',
      'Marks the property as deprecated',
      'Makes the property optional'
    ],
    correctAnswer: 'Prevents reassignment of the property after initialization',
    explanation: '"readonly" allows a property to be set once, typically during object creation or in a constructor, and prevents any reassignment afterward. It is a compile-time check only.',
    tags: ['readonly', 'interfaces']
  },
  {
    id: 'ts-012',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which file extension is used for TypeScript files containing JSX?',
    options: ['.ts', '.tsx', '.jsts', '.tjs'],
    correctAnswer: '.tsx',
    explanation: 'Files that contain JSX syntax and are written in TypeScript use the ".tsx" extension so the compiler knows to parse JSX expressions.',
    tags: ['jsx', 'tooling']
  },
  {
    id: 'ts-013',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the purpose of the "tsconfig.json" file?',
    options: [
      'It stores runtime environment variables',
      'It configures the TypeScript compiler options and project settings',
      'It lists npm package dependencies',
      'It defines ESLint rules'
    ],
    correctAnswer: 'It configures the TypeScript compiler options and project settings',
    explanation: '"tsconfig.json" tells the TypeScript compiler (tsc) which files to include, which compiler options to use (target, module, strict mode, etc.), and other project-level settings.',
    tags: ['tsconfig', 'tooling']
  },
  {
    id: 'ts-014',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'How do you define a union type that can be either a string or a number?',
    options: ['string & number', 'string | number', 'string + number', 'Union<string, number>'],
    correctAnswer: 'string | number',
    explanation: 'The pipe "|" operator creates a union type, meaning the variable can hold a value of either type listed. "string | number" means the value can be a string OR a number.',
    tags: ['union-types', 'fundamentals']
  },
  {
    id: 'ts-015',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Output',
    question: 'What is the type of "x" after this code runs?\n\nlet x = "hello";',
    options: ['any', 'string', 'String', 'unknown'],
    correctAnswer: 'string',
    explanation: 'TypeScript uses type inference to deduce that "x" is of type "string" based on the assigned literal value, even though no explicit type annotation was provided.',
    tags: ['type-inference', 'fundamentals']
  },
  {
    id: 'ts-016',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does the "never" type represent?',
    options: [
      'A value that is always null',
      'A type for variables that are never initialized',
      'A type representing values that never occur, such as a function that always throws',
      'A deprecated alias for "void"'
    ],
    correctAnswer: 'A type representing values that never occur, such as a function that always throws',
    explanation: '"never" is used for functions that never return normally — either they always throw an error or contain an infinite loop. It is also the result of exhaustive type narrowing when no cases remain.',
    tags: ['never', 'types']
  },
  {
    id: 'ts-017',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'How do you allow a function parameter to be optional?',
    options: ['Use "?" after the parameter name', 'Assign it a default value of null', 'Use the "optional" keyword', 'Wrap the parameter type in brackets'],
    correctAnswer: 'Use "?" after the parameter name',
    explanation: 'Adding "?" after a parameter name, e.g. "function greet(name?: string)", makes that parameter optional. Optional parameters must come after required ones.',
    tags: ['functions', 'optional-parameters']
  },
  {
    id: 'ts-018',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is "strict mode" in the TypeScript compiler?',
    options: [
      'A runtime mode that disables eval()',
      'A bundle of strict type-checking options enabled via the "strict" flag',
      'A linting tool bundled with TypeScript',
      'A mode that only allows ES5 syntax'
    ],
    correctAnswer: 'A bundle of strict type-checking options enabled via the "strict" flag',
    explanation: 'Setting "strict: true" in tsconfig.json enables a family of stricter type-checking flags at once, including "strictNullChecks", "noImplicitAny", and others, catching more potential bugs.',
    tags: ['strict-mode', 'tsconfig']
  },
  {
    id: 'ts-019',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which of the following correctly defines an enum in TypeScript?',
    options: [
      'enum Color = { Red, Green, Blue }',
      'enum Color { Red, Green, Blue }',
      'const enum Color: { Red, Green, Blue }',
      'type Color = enum { Red, Green, Blue }'
    ],
    correctAnswer: 'enum Color { Red, Green, Blue }',
    explanation: 'Enums are declared using the "enum" keyword followed by the name and a set of members in braces, without an equals sign: "enum Color { Red, Green, Blue }". By default, members are auto-numbered starting at 0.',
    tags: ['enums', 'fundamentals']
  },
  {
    id: 'ts-020',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the difference between "null" and "undefined" in TypeScript?',
    options: [
      'They are completely interchangeable with no distinction',
      '"undefined" means a variable was declared but not assigned; "null" represents an intentional absence of value',
      '"null" is only valid for objects, "undefined" only for primitives',
      '"undefined" is a runtime-only concept that does not exist in TypeScript'
    ],
    correctAnswer: '"undefined" means a variable was declared but not assigned; "null" represents an intentional absence of value',
    explanation: 'Conventionally, "undefined" indicates a variable has not yet been given a value, while "null" is an explicit assignment indicating "no value here on purpose." With "strictNullChecks" enabled, TypeScript treats them as distinct types.',
    tags: ['null', 'undefined', 'fundamentals']
  },
  {
    id: 'ts-021',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'How do you type a function that takes a string and returns nothing?',
    options: [
      'function log(msg: string): void {}',
      'function log(msg: string): null {}',
      'function log(msg: string): never {}',
      'function log(msg: string) {}'
    ],
    correctAnswer: 'function log(msg: string): void {}',
    explanation: '"void" is the correct return type annotation for a function that performs an action but does not return a usable value.',
    tags: ['functions', 'void']
  },
  {
    id: 'ts-022',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does declaration merging allow you to do with interfaces?',
    options: [
      'Combine two unrelated interfaces into a union',
      'Declare the same interface multiple times and have TypeScript merge their members',
      'Convert an interface into a type alias automatically',
      'Delete properties from an existing interface'
    ],
    correctAnswer: 'Declare the same interface multiple times and have TypeScript merge their members',
    explanation: 'If you declare an interface with the same name more than once, TypeScript merges all the declarations into a single interface containing all the members. Type aliases do not support this behavior.',
    tags: ['interfaces', 'declaration-merging']
  },
  {
    id: 'ts-023',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'How do you extend one interface from another?',
    options: [
      'interface Dog implements Animal {}',
      'interface Dog extends Animal {}',
      'interface Dog : Animal {}',
      'interface Dog inherits Animal {}'
    ],
    correctAnswer: 'interface Dog extends Animal {}',
    explanation: 'The "extends" keyword is used for interface inheritance, allowing "Dog" to inherit all members of "Animal" and add its own.',
    tags: ['interfaces', 'inheritance']
  },
  {
    id: 'ts-024',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What access modifier makes a class member accessible only within the same class?',
    options: ['public', 'protected', 'private', 'readonly'],
    correctAnswer: 'private',
    explanation: '"private" restricts access to the declaring class only — not even subclasses can access it. "protected" allows access in subclasses, and "public" (the default) allows access from anywhere.',
    tags: ['classes', 'access-modifiers']
  },
  {
    id: 'ts-025',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is type assertion in TypeScript?',
    options: [
      'A runtime check that throws if a type does not match',
      'A way to tell the compiler to treat a value as a specific type without changing it at runtime',
      'A method to test types using Jest',
      'A built-in function to validate JSON schemas'
    ],
    correctAnswer: 'A way to tell the compiler to treat a value as a specific type without changing it at runtime',
    explanation: 'Type assertions, written as "value as Type" or "<Type>value", tell the compiler to treat a value as a given type. They have no effect at runtime and do not perform any actual validation or conversion.',
    tags: ['type-assertion', 'fundamentals']
  },
  {
    id: 'ts-026',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'What does this code print?\n\ninterface Person {\n  name: string;\n}\nconst p = { name: "Alice", age: 30 } as Person;\nconsole.log(p.name);',
    options: ['"Alice"', 'undefined', 'Compile error', '30'],
    correctAnswer: '"Alice"',
    explanation: 'The "as Person" assertion tells the compiler to treat the object as type Person, restricting type-checking to that shape, but the underlying object still has all its original properties at runtime. Accessing "p.name" returns "Alice".',
    tags: ['type-assertion', 'coding']
  },
  {
    id: 'ts-027',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'How do you define a function type using a type alias?',
    options: [
      'type Adder = (a: number, b: number) => number;',
      'type Adder = function(a: number, b: number): number;',
      'type Adder = (number, number): number;',
      'interface Adder = (a: number, b: number) => number;'
    ],
    correctAnswer: 'type Adder = (a: number, b: number) => number;',
    explanation: 'Function types use arrow syntax in their type signature: parameter names and types, followed by "=>", followed by the return type.',
    tags: ['function-types', 'type-aliases']
  },
  {
    id: 'ts-028',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the purpose of the "as const" assertion?',
    options: [
      'It converts a variable into a constant at runtime',
      'It narrows literal types and makes object properties readonly',
      'It forces a variable to be of type "const"',
      'It disables type inference entirely'
    ],
    correctAnswer: 'It narrows literal types and makes object properties readonly',
    explanation: '"as const" tells TypeScript to infer the narrowest possible (literal) types for an expression and to treat array and object literals as deeply readonly, which is useful for creating precise, immutable constants.',
    tags: ['as-const', 'literal-types']
  },
  {
    id: 'ts-029',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which TypeScript feature lets you check the type of a variable at runtime within an "if" block to narrow it?',
    options: ['Type assertion', 'Type guard', 'Type alias', 'Declaration merging'],
    correctAnswer: 'Type guard',
    explanation: 'Type guards, such as "typeof x === \'string\'" or "x instanceof MyClass", are runtime checks that TypeScript uses to narrow a variable\'s type within a conditional block.',
    tags: ['type-guards', 'narrowing']
  },
  {
    id: 'ts-030',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What command compiles a TypeScript file using the installed compiler?',
    options: ['ts-node compile file.ts', 'tsc file.ts', 'node file.ts --typescript', 'npm run typescript file.ts'],
    correctAnswer: 'tsc file.ts',
    explanation: '"tsc" is the TypeScript Compiler CLI command. Running "tsc file.ts" compiles the file into a corresponding JavaScript file using default or tsconfig-defined settings.',
    tags: ['tooling', 'cli']
  },
  {
    id: 'ts-031',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a generic in TypeScript?',
    options: [
      'A type that can only hold numbers',
      'A way to write reusable code that works with multiple types while preserving type information',
      'A special kind of enum',
      'A deprecated feature replaced by "any"'
    ],
    correctAnswer: 'A way to write reusable code that works with multiple types while preserving type information',
    explanation: 'Generics, written as "<T>", allow functions, classes, and interfaces to operate on a variety of types while still providing type safety, since the specific type is captured and enforced at the call site.',
    tags: ['generics', 'fundamentals']
  },
  {
    id: 'ts-032',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What is the inferred type of T when calling "identity<T>(value: T): T" as "identity(42)"?',
    options: ['any', 'number', 'unknown', 'object'],
    correctAnswer: 'number',
    explanation: 'TypeScript infers the generic type parameter "T" from the argument passed in. Since "42" is a number literal, "T" is inferred as "number" for that call.',
    tags: ['generics', 'type-inference']
  },
  {
    id: 'ts-033',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the "keyof" operator do?',
    options: [
      'Returns the values of an object at runtime',
      'Produces a union type of the property names (keys) of a given type',
      'Checks if a key exists in an object',
      'Deletes a key from a type'
    ],
    correctAnswer: 'Produces a union type of the property names (keys) of a given type',
    explanation: '"keyof T" produces a union of string (or number/symbol) literal types representing all the property keys of "T". For example, "keyof { a: number; b: string }" yields "\'a\' | \'b\'".',
    tags: ['keyof', 'advanced-types']
  },
  {
    id: 'ts-034',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the built-in "Partial<T>" utility type?',
    options: [
      'Makes all properties of T required',
      'Makes all properties of T optional',
      'Removes all properties from T',
      'Creates a readonly version of T'
    ],
    correctAnswer: 'Makes all properties of T optional',
    explanation: '"Partial<T>" produces a new type with all of T\'s properties marked as optional ("?"), which is commonly used for update or patch operations where only some fields are provided.',
    tags: ['utility-types', 'partial']
  },
  {
    id: 'ts-035',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does "Pick<T, K>" do?',
    options: [
      'Removes properties K from type T',
      'Creates a type by selecting only the properties K from type T',
      'Picks a random property from T',
      'Creates a union of T and K'
    ],
    correctAnswer: 'Creates a type by selecting only the properties K from type T',
    explanation: '"Pick<T, K>" constructs a type by picking the set of properties "K" (which must be keys of T) from "T", discarding the rest.',
    tags: ['utility-types', 'pick']
  },
  {
    id: 'ts-036',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does "Omit<T, K>" do?',
    options: [
      'Creates a type with all properties of T except those in K',
      'Creates a type with only properties in K',
      'Marks properties in K as optional',
      'Throws a compile error if K is not a key of T'
    ],
    correctAnswer: 'Creates a type with all properties of T except those in K',
    explanation: '"Omit<T, K>" is the inverse of "Pick" — it constructs a type by taking all properties from "T" and removing those specified in "K".',
    tags: ['utility-types', 'omit']
  },
  {
    id: 'ts-037',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a mapped type?',
    options: [
      'A type produced by iterating over the keys of another type to transform its properties',
      'A type that maps strings to numbers only',
      'A special array type',
      'A runtime map data structure'
    ],
    correctAnswer: 'A type produced by iterating over the keys of another type to transform its properties',
    explanation: 'Mapped types use syntax like "{ [K in keyof T]: SomeTransform<T[K]> }" to build a new type by iterating over an existing type\'s keys, optionally transforming each property\'s type, optionality, or readonly status.',
    tags: ['mapped-types', 'advanced-types']
  },
  {
    id: 'ts-038',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What are conditional types used for?',
    options: [
      'Running if/else logic at runtime',
      'Selecting one of two types based on a type-level condition, using the "extends ? :" syntax',
      'Declaring optional properties',
      'Validating runtime conditions in functions'
    ],
    correctAnswer: 'Selecting one of two types based on a type-level condition, using the "extends ? :" syntax',
    explanation: 'Conditional types, written as "T extends U ? X : Y", let you choose between two types based on whether T is assignable to U, enabling powerful type-level logic such as in the built-in "Extract" and "Exclude" types.',
    tags: ['conditional-types', 'advanced-types']
  },
  {
    id: 'ts-039',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the "infer" keyword used for?',
    options: [
      'To explicitly declare a generic type parameter',
      'To extract and capture a type within a conditional type',
      'To suppress type inference for a variable',
      'To convert a type into "any"'
    ],
    correctAnswer: 'To extract and capture a type within a conditional type',
    explanation: '"infer" is used inside conditional types to introduce a new type variable that captures part of a matched type, such as extracting a function\'s return type in "ReturnType<T> = T extends (...args: any[]) => infer R ? R : never".',
    tags: ['infer', 'conditional-types']
  },
  {
    id: 'ts-040',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What does "ReturnType<typeof myFunc>" produce if "myFunc" is "() => { id: number }"?',
    options: ['"() => { id: number }"', '"{ id: number }"', '"number"', '"void"'],
    correctAnswer: '"{ id: number }"',
    explanation: '"ReturnType<T>" extracts the return type of a function type "T". Since "myFunc" returns "{ id: number }", that is the resulting type.',
    tags: ['utility-types', 'return-type']
  },
  {
    id: 'ts-041',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between "extends" used in generics constraints versus interface inheritance?',
    options: [
      'There is no difference, they behave identically',
      'In generics, "extends" constrains what types T can be; in interfaces, it inherits members',
      '"extends" in generics is only valid for classes',
      'Generic "extends" cannot use union types'
    ],
    correctAnswer: 'In generics, "extends" constrains what types T can be; in interfaces, it inherits members',
    explanation: 'In "function f<T extends object>(x: T)", "extends" constrains the generic parameter to types assignable to "object". In "interface B extends A", it performs interface inheritance, copying members from A into B.',
    tags: ['generics', 'extends']
  },
  {
    id: 'ts-042',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a discriminated union?',
    options: [
      'A union type where each member has a common literal property used to narrow the type',
      'A union of more than three types',
      'A type that discriminates against null values',
      'An interface that cannot be extended'
    ],
    correctAnswer: 'A union type where each member has a common literal property used to narrow the type',
    explanation: 'A discriminated union has a shared "discriminant" property (e.g. "kind: \'circle\' | \'square\'") with a literal type in each member, which TypeScript uses to narrow the exact shape inside conditional checks like a switch statement.',
    tags: ['discriminated-unions', 'narrowing']
  },
  {
    id: 'ts-043',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'Given:\n\ntype Shape = { kind: "circle"; radius: number } | { kind: "square"; side: number };\nfunction area(s: Shape) {\n  if (s.kind === "circle") return Math.PI * s.radius ** 2;\n  return s.side ** 2;\n}\n\nWhat allows accessing "s.radius" safely inside the if block?',
    options: [
      'Type assertion',
      'Discriminated union narrowing based on the "kind" property',
      'The "any" type',
      'Declaration merging'
    ],
    correctAnswer: 'Discriminated union narrowing based on the "kind" property',
    explanation: 'Because "kind" is a literal discriminant, checking "s.kind === \'circle\'" narrows "s" to the circle variant inside that block, making "s.radius" safely accessible without a type assertion.',
    tags: ['discriminated-unions', 'narrowing', 'coding']
  },
  {
    id: 'ts-044',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does "Record<K, V>" represent?',
    options: [
      'An array of key-value pairs',
      'An object type with keys of type K and values of type V',
      'A database record interface',
      'A tuple of exactly two elements'
    ],
    correctAnswer: 'An object type with keys of type K and values of type V',
    explanation: '"Record<K, V>" constructs an object type whose keys are of type "K" (usually string, number, or a union of literals) and whose values are all of type "V".',
    tags: ['utility-types', 'record']
  },
  {
    id: 'ts-045',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is function overloading in TypeScript?',
    options: [
      'Defining multiple call signatures for a single function implementation',
      'Calling a function more times than it was defined',
      'Replacing a function definition at runtime',
      'A way to define private functions inside classes'
    ],
    correctAnswer: 'Defining multiple call signatures for a single function implementation',
    explanation: 'Function overloading lets you declare multiple signatures (different parameter/return type combinations) for the same function name, followed by a single implementation that must be compatible with all declared overloads.',
    tags: ['function-overloading', 'functions']
  },
  {
    id: 'ts-046',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of an abstract class?',
    options: [
      'A class that cannot have any methods',
      'A base class that cannot be instantiated directly and may define abstract methods to be implemented by subclasses',
      'A class only usable with generics',
      'A class that is automatically exported'
    ],
    correctAnswer: 'A base class that cannot be instantiated directly and may define abstract methods to be implemented by subclasses',
    explanation: '"abstract class" declares a class that cannot be instantiated on its own. It can define both concrete methods and abstract methods (signatures without implementations) that subclasses are required to implement.',
    tags: ['classes', 'abstract']
  },
  {
    id: 'ts-047',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the "satisfies" operator (introduced in TypeScript 4.9) do?',
    options: [
      'Validates a value against a type without widening or changing its inferred type',
      'Forces a runtime check against a type',
      'Replaces "as" assertions entirely',
      'Only works with primitive types'
    ],
    correctAnswer: 'Validates a value against a type without widening or changing its inferred type',
    explanation: '"satisfies" checks that an expression conforms to a given type while preserving the most specific inferred type of the expression itself, unlike a type annotation which would widen the variable to the declared type.',
    tags: ['satisfies', 'type-inference']
  },
  {
    id: 'ts-048',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Debugging',
    question: 'Why does this code throw a compile error?\n\nfunction getLength(value: string | null) {\n  return value.length;\n}',
    options: [
      '"length" is not a valid property of strings',
      '"value" could be null, and "null" has no "length" property',
      'Function parameters cannot use union types',
      'The function is missing a return type annotation'
    ],
    correctAnswer: '"value" could be null, and "null" has no "length" property',
    explanation: 'With "strictNullChecks" enabled, TypeScript requires you to handle the "null" case before accessing properties, e.g. with "if (value === null) return 0;" or by using optional chaining.',
    tags: ['strict-null-checks', 'debugging']
  },
  {
    id: 'ts-049',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the non-null assertion operator "!" do?',
    options: [
      'Negates a boolean value',
      'Tells the compiler to treat a value as non-null/non-undefined without a runtime check',
      'Throws an error if the value is null at compile time',
      'Converts a value to its boolean inverse'
    ],
    correctAnswer: 'Tells the compiler to treat a value as non-null/non-undefined without a runtime check',
    explanation: 'The "!" postfix operator, e.g. "value!.length", asserts to the compiler that "value" is not null or undefined at that point. It performs no runtime check, so misuse can still cause a runtime error.',
    tags: ['non-null-assertion', 'strict-null-checks']
  },
  {
    id: 'ts-050',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between "Exclude<T, U>" and "Extract<T, U>"?',
    options: [
      'They are aliases for the same utility type',
      '"Exclude" removes members of T assignable to U; "Extract" keeps only members of T assignable to U',
      '"Exclude" works on objects, "Extract" works on arrays',
      '"Extract" removes properties, "Exclude" removes methods'
    ],
    correctAnswer: '"Exclude" removes members of T assignable to U; "Extract" keeps only members of T assignable to U',
    explanation: '"Exclude<T, U>" filters out union members of "T" that are assignable to "U", while "Extract<T, U>" does the opposite, keeping only the members that are assignable to "U".',
    tags: ['utility-types', 'exclude', 'extract']
  },
  {
    id: 'ts-051',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a namespace used for in TypeScript?',
    options: [
      'To declare global CSS class names',
      'To logically group related code and avoid naming collisions, primarily in non-module codebases',
      'To define a new primitive type',
      'To create database schemas'
    ],
    correctAnswer: 'To logically group related code and avoid naming collisions, primarily in non-module codebases',
    explanation: 'Namespaces, declared with the "namespace" keyword, organize code under a named scope to avoid global naming collisions. In modern module-based codebases, ES modules are generally preferred over namespaces.',
    tags: ['namespaces', 'modules']
  },
  {
    id: 'ts-052',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does "Required<T>" do?',
    options: [
      'Makes all properties of T optional',
      'Makes all properties of T required, removing any "?" modifiers',
      'Validates that an object satisfies T at runtime',
      'Throws an error if any property of T is missing'
    ],
    correctAnswer: 'Makes all properties of T required, removing any "?" modifiers',
    explanation: '"Required<T>" is the opposite of "Partial<T>" — it constructs a type where every property of "T" is mandatory, even if it was originally marked optional.',
    tags: ['utility-types', 'required']
  },
  {
    id: 'ts-053',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How do generics work with classes?',
    options: [
      'Classes cannot use generics',
      'A class can declare type parameters that are used across its properties and methods, e.g. "class Box<T> { value: T; }"',
      'Generic classes must always extend "Array"',
      'Only abstract classes support generics'
    ],
    correctAnswer: 'A class can declare type parameters that are used across its properties and methods, e.g. "class Box<T> { value: T; }"',
    explanation: 'Generic classes declare type parameters in angle brackets after the class name. These parameters can then be used to type properties, method parameters, and return types throughout the class.',
    tags: ['generics', 'classes']
  },
  {
    id: 'ts-054',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is structural typing (also called "duck typing") in TypeScript?',
    options: [
      'Types are compared by name only',
      'Two types are considered compatible if their members have the same structure, regardless of their declared names',
      'Types must inherit from a common ancestor to be compatible',
      'Only primitive types support structural comparison'
    ],
    correctAnswer: 'Two types are considered compatible if their members have the same structure, regardless of their declared names',
    explanation: 'TypeScript uses structural typing: an object is compatible with a type if it has at least the same shape (properties and methods), regardless of how it was constructed or what it was explicitly declared as.',
    tags: ['structural-typing', 'type-system']
  },
  {
    id: 'ts-055',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What is the type of "merged" in the following code?\n\ntype A = { a: number };\ntype B = { b: string };\ntype Merged = A & B;\nconst merged: Merged = { a: 1, b: "x" };',
    options: [
      'It is a union and only one of a or b is required',
      'It is an intersection type requiring both "a: number" and "b: string"',
      'It is invalid syntax',
      'It defaults to "any"'
    ],
    correctAnswer: 'It is an intersection type requiring both "a: number" and "b: string"',
    explanation: 'The "&" operator creates an intersection type, combining all members of both types. A value of type "A & B" must satisfy both "A" and "B" simultaneously.',
    tags: ['intersection-types', 'coding']
  },
  {
    id: 'ts-056',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a type predicate, e.g. "function isString(x: unknown): x is string"?',
    options: [
      'A function that always returns a boolean and has no other purpose',
      'A custom type guard function whose return type tells the compiler how to narrow the argument when true',
      'A deprecated feature replaced by "typeof"',
      'A way to predict runtime performance'
    ],
    correctAnswer: 'A custom type guard function whose return type tells the compiler how to narrow the argument when true',
    explanation: 'A type predicate, written as "paramName is Type" in the return position, lets you write reusable custom type guards. When the function returns true, TypeScript narrows the checked variable to the specified type within that branch.',
    tags: ['type-guards', 'type-predicates']
  },
  {
    id: 'ts-057',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does "Awaited<T>" (introduced in TypeScript 4.5) do?',
    options: [
      'Pauses execution until T resolves',
      'Recursively unwraps the resolved value type of a Promise',
      'Converts any type into a Promise',
      'Checks if a value is currently pending'
    ],
    correctAnswer: 'Recursively unwraps the resolved value type of a Promise',
    explanation: '"Awaited<T>" models what "await" does to a type, recursively unwrapping nested Promises. For example, "Awaited<Promise<Promise<number>>>" resolves to "number".',
    tags: ['utility-types', 'promises', 'awaited']
  },
  {
    id: 'ts-058',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a literal type?',
    options: [
      'A type that matches any string',
      'A type representing one specific value, such as "type Status = \'active\'"',
      'A type only usable in enums',
      'A synonym for "const"'
    ],
    correctAnswer: 'A type representing one specific value, such as "type Status = \'active\'"',
    explanation: 'Literal types narrow a primitive type down to a single exact value. "type Status = \'active\'" means a variable of that type can hold only the exact string "active", not any string.',
    tags: ['literal-types', 'type-system']
  },
  {
    id: 'ts-059',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Debugging',
    question: 'Why does the following fail to compile?\n\nfunction printAll(items: string[]) {\n  for (const item of items) {\n    console.log(item.toUppercase());\n  }\n}',
    options: [
      'Arrays cannot be iterated with "for...of"',
      '"toUppercase" is misspelled; the correct method is "toUpperCase"',
      '"console.log" does not accept strings',
      'The function is missing a return type'
    ],
    correctAnswer: '"toUppercase" is misspelled; the correct method is "toUpperCase"',
    explanation: 'TypeScript will flag "toUppercase" as a property that does not exist on type "string" because the correct, case-sensitive built-in method name is "toUpperCase".',
    tags: ['debugging', 'strings']
  },
  {
    id: 'ts-060',
    topic: 'typescript',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between "interface" merging and "type" intersection when combining two object shapes?',
    options: [
      'They always produce incompatible results',
      'Interfaces merge automatically by re-declaration; types must be explicitly combined using "&"',
      'Type aliases merge automatically; interfaces require "&"',
      'Both require the "extends" keyword'
    ],
    correctAnswer: 'Interfaces merge automatically by re-declaration; types must be explicitly combined using "&"',
    explanation: 'Declaring the same interface name twice causes automatic declaration merging. Type aliases do not support this; to combine two type aliases you must explicitly intersect them with "&".',
    tags: ['interfaces', 'type-aliases', 'intersection-types']
  },
  {
    id: 'ts-061',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between covariance and contravariance as they apply to function parameter types?',
    options: [
      'They are unrelated to TypeScript and only apply to Java',
      'Covariance allows substituting a subtype where a supertype is expected; function parameters are typically checked contravariantly for soundness',
      'Contravariance only applies to return types',
      'TypeScript does not support either concept'
    ],
    correctAnswer: 'Covariance allows substituting a subtype where a supertype is expected; function parameters are typically checked contravariantly for soundness',
    explanation: 'Return types are covariant (a function returning a more specific type can substitute one returning a more general type), while function parameter types are ideally contravariant for soundness, though TypeScript checks method parameters bivariantly by default for practical compatibility reasons.',
    tags: ['variance', 'type-theory', 'advanced-types']
  },
  {
    id: 'ts-062',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What are template literal types, introduced in TypeScript 4.1?',
    options: [
      'A way to interpolate runtime variables into types',
      'Types built using template literal syntax to combine string literal types, e.g. "type Greeting = `Hello, ${string}`"',
      'A replacement for tagged template functions',
      'A feature exclusive to JSX'
    ],
    correctAnswer: 'Types built using template literal syntax to combine string literal types, e.g. "type Greeting = `Hello, ${string}`"',
    explanation: 'Template literal types let you build new string literal types by combining literal types within backtick syntax, similar to JavaScript template literals, but operating entirely at the type level.',
    tags: ['template-literal-types', 'advanced-types']
  },
  {
    id: 'ts-063',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'What does the following resolve to?\n\ntype EventName<T extends string> = `on${Capitalize<T>}`;\ntype ClickEvent = EventName<"click">;',
    options: ['"onclick"', '"OnClick"', '"onClick"', 'Compile error'],
    correctAnswer: '"onClick"',
    explanation: '"Capitalize<T>" uppercases the first character of the literal string type, turning "click" into "Click". The template literal type then prepends "on", producing "onClick".',
    tags: ['template-literal-types', 'utility-types', 'coding']
  },
  {
    id: 'ts-064',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How do you write a recursive type to represent a deeply nested JSON value?',
    options: [
      'Recursive types are not supported in TypeScript',
      'By defining a type alias that references itself in a union, e.g. "type Json = string | number | boolean | null | Json[] | { [key: string]: Json };"',
      'Only interfaces can be recursive, not type aliases',
      'By using the "recursive" keyword'
    ],
    correctAnswer: 'By defining a type alias that references itself in a union, e.g. "type Json = string | number | boolean | null | Json[] | { [key: string]: Json };"',
    explanation: 'TypeScript type aliases can reference themselves to define recursive structures, which is the standard way to model arbitrarily nested data like JSON values.',
    tags: ['recursive-types', 'advanced-types']
  },
  {
    id: 'ts-065',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you implement a "DeepReadonly<T>" utility type that makes all nested properties readonly?',
    options: [
      'type DeepReadonly<T> = Readonly<T>;',
      'type DeepReadonly<T> = { readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K] };',
      'type DeepReadonly<T> = T & { readonly: true };',
      'DeepReadonly is a built-in TypeScript utility type'
    ],
    correctAnswer: 'type DeepReadonly<T> = { readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K] };',
    explanation: 'A deep readonly mapped type must recurse into object-typed properties, applying the same transformation, rather than just making the top-level properties readonly as the built-in "Readonly<T>" does.',
    tags: ['mapped-types', 'recursion', 'utility-types', 'coding']
  },
  {
    id: 'ts-066',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is a "const type parameter" (introduced in TypeScript 5.0), e.g. "function f<const T>(x: T)"?',
    options: [
      'It makes the generic function immutable at runtime',
      'It infers literal types for the argument by default, similar to applying "as const" automatically',
      'It restricts T to only primitive types',
      'It prevents the function from being called with generics explicitly specified'
    ],
    correctAnswer: 'It infers literal types for the argument by default, similar to applying "as const" automatically',
    explanation: 'A "const" type parameter tells the compiler to infer the most specific (literal) type for that generic argument by default, without requiring the caller to write "as const" explicitly.',
    tags: ['generics', 'const-type-parameters']
  },
  {
    id: 'ts-067',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between "unique symbol" and a regular "symbol" type?',
    options: [
      'There is no difference',
      '"unique symbol" refers to one specific symbol value, usable as a literal type, while "symbol" represents any symbol',
      '"unique symbol" can only be used in enums',
      '"unique symbol" is deprecated'
    ],
    correctAnswer: '"unique symbol" refers to one specific symbol value, usable as a literal type, while "symbol" represents any symbol',
    explanation: '"unique symbol" is a subtype of "symbol" that refers to one specific, distinct symbol — typically declared with "const" and used for nominal typing patterns, since regular "symbol" cannot distinguish between different symbol values at the type level.',
    tags: ['symbols', 'advanced-types']
  },
  {
    id: 'ts-068',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'System Design',
    question: 'How can TypeScript generics be used to enforce a builder pattern with compile-time validation of required steps?',
    options: [
      'It is not possible to validate step order at compile time',
      'By having each builder method return a new generic type that tracks which steps have been completed, only exposing a "build()" method once all required generics indicate completion',
      'By using runtime assertions only',
      'By marking all builder methods as "private"'
    ],
    correctAnswer: 'By having each builder method return a new generic type that tracks which steps have been completed, only exposing a "build()" method once all required generics indicate completion',
    explanation: 'A type-safe builder pattern threads generic state (often boolean flags or accumulated keys) through each chained method, returning a new type each time. The "build()" method is conditionally typed or omitted from intermediate states, available only once all required generics are satisfied.',
    tags: ['design-patterns', 'generics', 'builder-pattern']
  },
  {
    id: 'ts-069',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of TypeScript\'s "declare" keyword?',
    options: [
      'To define a new variable with runtime initialization',
      'To describe the shape of something that exists elsewhere (e.g. a global, or a JS library) without providing an implementation',
      'To declare a class as abstract',
      'To create a new namespace'
    ],
    correctAnswer: 'To describe the shape of something that exists elsewhere (e.g. a global, or a JS library) without providing an implementation',
    explanation: '"declare" is used in ambient declarations (typically in ".d.ts" files) to tell the compiler that a variable, function, class, or module exists at runtime, without TypeScript needing to compile an implementation for it.',
    tags: ['declare', 'ambient-declarations', 'declaration-files']
  },
  {
    id: 'ts-070',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of a ".d.ts" declaration file?',
    options: [
      'It contains compiled JavaScript output',
      'It contains only type information describing the shape of a JavaScript library or module, with no executable code',
      'It is used exclusively for testing',
      'It replaces the need for a tsconfig.json'
    ],
    correctAnswer: 'It contains only type information describing the shape of a JavaScript library or module, with no executable code',
    explanation: '".d.ts" files contain pure type declarations, allowing TypeScript to type-check code that uses a plain JavaScript library by describing its API surface without containing any runtime logic itself.',
    tags: ['declaration-files', 'tooling']
  },
  {
    id: 'ts-071',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'Why can deeply recursive conditional types sometimes cause TypeScript compilation to slow down significantly or fail?',
    options: [
      'TypeScript compiles types at runtime, causing memory leaks',
      'The compiler has to evaluate type-level recursion, and excessively deep or complex recursive types can hit internal recursion depth limits or become computationally expensive to resolve',
      'Recursive types are always converted into "any" after one level',
      'It is a bug present in every TypeScript version'
    ],
    correctAnswer: 'The compiler has to evaluate type-level recursion, and excessively deep or complex recursive types can hit internal recursion depth limits or become computationally expensive to resolve',
    explanation: 'TypeScript performs type checking and inference at compile time using its own internal type-evaluation engine. Highly recursive or combinatorially complex types (like some recursive template literal or mapped type chains) can be expensive to evaluate, sometimes triggering "Type instantiation is excessively deep" errors.',
    tags: ['performance', 'recursive-types', 'compiler']
  },
  {
    id: 'ts-072',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What does "asserts" mean in a function signature like "function assertIsString(val: unknown): asserts val is string"?',
    options: [
      'It is a syntax error',
      'It is an assertion function that narrows the type of its argument in the calling scope if it does not throw',
      'It forces the function to always throw',
      'It works identically to a normal type predicate but only for classes'
    ],
    correctAnswer: 'It is an assertion function that narrows the type of its argument in the calling scope if it does not throw',
    explanation: 'Assertion functions, using the "asserts" keyword, tell the compiler that if the function returns without throwing, the asserted condition holds for the remainder of the enclosing scope — narrowing "val" to "string" after the call.',
    tags: ['assertion-functions', 'narrowing']
  },
  {
    id: 'ts-073',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between "noImplicitAny" and "strictNullChecks" compiler flags?',
    options: [
      'They are the same flag under different names',
      '"noImplicitAny" flags variables/parameters that the compiler cannot infer and silently treats as "any"; "strictNullChecks" prevents null/undefined from being assignable to other types unless explicitly included',
      '"strictNullChecks" only applies to function return types',
      '"noImplicitAny" disables all type checking'
    ],
    correctAnswer: '"noImplicitAny" flags variables/parameters that the compiler cannot infer and silently treats as "any"; "strictNullChecks" prevents null/undefined from being assignable to other types unless explicitly included',
    explanation: 'These are two independent strict-mode flags. "noImplicitAny" catches places where TypeScript would otherwise silently fall back to "any" due to missing type information. "strictNullChecks" makes "null" and "undefined" distinct types that must be explicitly handled rather than being implicitly assignable everywhere.',
    tags: ['tsconfig', 'strict-mode', 'compiler-flags']
  },
  {
    id: 'ts-074',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you write a generic "DeepPartial<T>" utility type for nested objects?',
    options: [
      'type DeepPartial<T> = Partial<T>;',
      'type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;',
      'type DeepPartial<T> = { [K in keyof T]: T[K] | undefined };',
      'DeepPartial requires a runtime library and cannot be written purely with types'
    ],
    correctAnswer: 'type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;',
    explanation: 'Unlike the built-in "Partial<T>" which only makes top-level properties optional, a "DeepPartial" must check if a property\'s type is an object and recursively apply the same transformation, falling back to the original type for primitives.',
    tags: ['advanced-types', 'generics', 'utility-types']
  },
  {
    id: 'ts-075',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between a "type-only import" (e.g. "import type { Foo } from \'./foo\'") and a regular import?',
    options: [
      'There is no functional difference',
      'A type-only import is guaranteed to be fully erased at compile time and never produces a runtime import, which can help avoid circular dependency issues and unnecessary bundling',
      'Type-only imports can only be used in ".d.ts" files',
      'Type-only imports always throw if the module does not exist at runtime'
    ],
    correctAnswer: 'A type-only import is guaranteed to be fully erased at compile time and never produces a runtime import, which can help avoid circular dependency issues and unnecessary bundling',
    explanation: '"import type" explicitly signals that only type information is being imported, so the compiler can safely elide the import entirely in the emitted JavaScript, which is useful for tree-shaking and avoiding side-effectful runtime imports of modules used only for their types.',
    tags: ['modules', 'import-type', 'tooling']
  },
  {
    id: 'ts-076',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is "module augmentation" used for in TypeScript?',
    options: [
      'To delete exports from an existing module',
      'To add new members to an existing module\'s types from outside that module, often used to extend third-party library types',
      'To compile multiple modules into one bundle',
      'To rename exported members'
    ],
    correctAnswer: 'To add new members to an existing module\'s types from outside that module, often used to extend third-party library types',
    explanation: 'Module augmentation lets you re-declare an existing module (using "declare module \'module-name\' { ... }") and merge additional members into it, commonly used to add custom properties to library types like extending Express\'s "Request" object.',
    tags: ['module-augmentation', 'declaration-merging']
  },
  {
    id: 'ts-077',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What does the "this" parameter in a function signature, e.g. "function f(this: HTMLElement, event: Event)", accomplish?',
    options: [
      'It declares "this" as a regular function argument passed by the caller',
      'It lets the compiler type-check the value of "this" inside the function without it being a callable parameter',
      'It is invalid syntax in TypeScript',
      'It forces the function to be called as a class method'
    ],
    correctAnswer: 'It lets the compiler type-check the value of "this" inside the function without it being a callable parameter',
    explanation: 'A "this" parameter is a special, compiler-only parameter (erased at runtime) that explicitly documents and checks the expected type of "this" when the function is called, which is especially useful for callback-style APIs like DOM event handlers.',
    tags: ['this-parameter', 'functions']
  },
  {
    id: 'ts-078',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between index signatures and "Record<K, V>"?',
    options: [
      'They are unrelated concepts',
      'They are largely equivalent for many cases, but index signatures allow more flexible key constraints (like string and number index signatures together) while Record is a simpler utility built on mapped types',
      'Index signatures can only use number keys',
      'Record types cannot have a finite set of keys'
    ],
    correctAnswer: 'They are largely equivalent for many cases, but index signatures allow more flexible key constraints (like string and number index signatures together) while Record is a simpler utility built on mapped types',
    explanation: 'An index signature like "{ [key: string]: number }" describes an open-ended object shape directly, while "Record<string, number>" is a utility type that produces an equivalent mapped type; index signatures also support combining string and number signatures with specific compatibility rules.',
    tags: ['index-signatures', 'record', 'advanced-types']
  },
  {
    id: 'ts-079',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What problem do "branded types" (also called nominal typing emulation) solve in TypeScript?',
    options: [
      'They make compilation faster',
      'They prevent structurally identical but semantically different types (like UserId and ProductId, both strings) from being accidentally interchanged',
      'They are required for all string types',
      'They replace the need for interfaces'
    ],
    correctAnswer: 'They prevent structurally identical but semantically different types (like UserId and ProductId, both strings) from being accidentally interchanged',
    explanation: 'Since TypeScript uses structural typing, two distinct types with the same shape (e.g. two different string-based IDs) are otherwise interchangeable. Branded types add a synthetic, unused property (a "brand") to force the compiler to treat them as distinct, simulating nominal typing.',
    tags: ['branded-types', 'nominal-typing', 'advanced-types']
  },
  {
    id: 'ts-080',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you create a branded "UserId" type to prevent mixing it up with a plain string?',
    options: [
      'type UserId = string;',
      'type UserId = string & { readonly __brand: "UserId" };',
      'class UserId extends String {}',
      'interface UserId { value: string }'
    ],
    correctAnswer: 'type UserId = string & { readonly __brand: "UserId" };',
    explanation: 'Intersecting "string" with an object containing a unique, unused brand property creates a type that is structurally distinct from a plain string, requiring an explicit cast to create one and preventing accidental mixing with other string-based IDs.',
    tags: ['branded-types', 'coding']
  },
  {
    id: 'ts-081',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the role of "tsBuildInfo" and incremental compilation?',
    options: [
      'It stores runtime logs from the application',
      'It caches information about a previous compilation to speed up subsequent builds by only re-checking changed files and their dependents',
      'It is required for all TypeScript projects regardless of size',
      'It replaces the need for a tsconfig.json file'
    ],
    correctAnswer: 'It caches information about a previous compilation to speed up subsequent builds by only re-checking changed files and their dependents',
    explanation: 'With "incremental: true" (or "composite" projects), TypeScript writes a ".tsbuildinfo" file recording information from the prior build, allowing future builds to skip re-analyzing unchanged files, significantly improving build performance on large codebases.',
    tags: ['performance', 'incremental-compilation', 'tooling']
  },
  {
    id: 'ts-082',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is "project references" in TypeScript, and why is it used in monorepos?',
    options: [
      'A way to import npm packages automatically',
      'A feature that lets a TypeScript project depend on other TypeScript projects, enabling incremental, isolated builds across a multi-package codebase',
      'A deprecated feature replaced by Lerna',
      'A runtime dependency injection mechanism'
    ],
    correctAnswer: 'A feature that lets a TypeScript project depend on other TypeScript projects, enabling incremental, isolated builds across a multi-package codebase',
    explanation: 'Project references, configured via "references" in tsconfig.json along with "composite: true", let large codebases (often monorepos) split into smaller projects that build incrementally and independently, improving build times and enforcing clearer dependency boundaries.',
    tags: ['project-references', 'monorepo', 'tooling']
  },
  {
    id: 'ts-083',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What does "exactOptionalPropertyTypes" change about optional properties?',
    options: [
      'It removes support for optional properties entirely',
      'It distinguishes between a property being absent and a property being explicitly set to "undefined"',
      'It makes all properties required by default',
      'It only affects array types'
    ],
    correctAnswer: 'It distinguishes between a property being absent and a property being explicitly set to "undefined"',
    explanation: 'Normally, "prop?: string" is treated the same as "prop?: string | undefined", allowing explicit assignment of "undefined". With "exactOptionalPropertyTypes" enabled, the property must either be omitted entirely or hold an actual string — explicitly assigning "undefined" becomes an error unless "undefined" is part of the declared type.',
    tags: ['tsconfig', 'optional-properties', 'strict-mode']
  },
  {
    id: 'ts-084',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of variadic tuple types (introduced in TypeScript 4.0)?',
    options: [
      'They allow tuples of unlimited, unknown length only',
      'They let you use the spread operator within tuple types to compose or manipulate tuples generically, e.g. "type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]"',
      'They are only used for function overloads',
      'They replace regular array types entirely'
    ],
    correctAnswer: 'They let you use the spread operator within tuple types to compose or manipulate tuples generically, e.g. "type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]"',
    explanation: 'Variadic tuple types allow spreading generic tuple/array types within other tuple types, enabling powerful generic compositions like concatenation, head/tail extraction, and typed function argument manipulation (used heavily in libraries that type "bind", "apply", or middleware chains).',
    tags: ['variadic-tuples', 'advanced-types']
  },
  {
    id: 'ts-085',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What does "Parameters<T>" extract from a function type?',
    options: [
      'The return type of the function',
      'A tuple type containing the types of the function\'s parameters',
      'The number of parameters as a numeric type',
      'The "this" type of the function'
    ],
    correctAnswer: 'A tuple type containing the types of the function\'s parameters',
    explanation: '"Parameters<T>" is a built-in utility type that extracts the parameter types of a function type "T" as a tuple, which is useful for deriving argument types generically without retyping them.',
    tags: ['utility-types', 'parameters']
  },
  {
    id: 'ts-086',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between "in" and "in keyof" when used in mapped types?',
    options: [
      'They are interchangeable in all contexts',
      '"in keyof T" iterates over the literal keys of an existing type T, while "in" alone is used with a custom union of keys, e.g. "[K in \'a\' | \'b\']"',
      '"in" can only be used with arrays',
      '"in keyof" is invalid syntax'
    ],
    correctAnswer: '"in keyof T" iterates over the literal keys of an existing type T, while "in" alone is used with a custom union of keys, e.g. "[K in \'a\' | \'b\']"',
    explanation: 'Mapped types always use "K in SomeUnion" — when that union is derived from an existing type\'s keys, you write "keyof T" as the union; but you can also map over any other union of string/number/symbol literals directly without "keyof".',
    tags: ['mapped-types', 'keyof', 'advanced-types']
  },
  {
    id: 'ts-087',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of key remapping in mapped types using "as" (introduced in TypeScript 4.1), e.g. "{ [K in keyof T as `get${string & K}`]: () => T[K] }"?',
    options: [
      'It is used to assert types within the mapped type',
      'It allows renaming/transforming the resulting property keys during the mapping, rather than just transforming their values',
      'It only works with numeric keys',
      'It converts the mapped type into an interface'
    ],
    correctAnswer: 'It allows renaming/transforming the resulting property keys during the mapping, rather than just transforming their values',
    explanation: 'Key remapping with "as" inside a mapped type clause lets you compute a new key name (often using template literal types) for each property, enabling patterns like generating getter method names from data property names.',
    tags: ['mapped-types', 'key-remapping', 'advanced-types']
  },
  {
    id: 'ts-088',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does TypeScript handle excess property checks for object literals?',
    options: [
      'It never checks for excess properties',
      'When assigning an object literal directly to a typed variable, TypeScript flags properties not declared in the target type, even though the same object via a variable would be allowed due to structural typing',
      'Excess properties are always silently allowed',
      'Excess property checks only apply to classes'
    ],
    correctAnswer: 'When assigning an object literal directly to a typed variable, TypeScript flags properties not declared in the target type, even though the same object via a variable would be allowed due to structural typing',
    explanation: 'Excess property checking is a special, stricter check applied only to object literals assigned directly (not through an intermediate variable), designed to catch likely typos or mistakes, even though structural typing would otherwise permit extra properties.',
    tags: ['excess-property-checks', 'structural-typing']
  },
  {
    id: 'ts-089',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of the "InstanceType<T>" utility type?',
    options: [
      'It checks if a value is an instance of a class at runtime',
      'It extracts the instance type produced by constructing a given constructor function/class type',
      'It returns the name of a class as a string literal',
      'It converts an interface into a class'
    ],
    correctAnswer: 'It extracts the instance type produced by constructing a given constructor function/class type',
    explanation: '"InstanceType<T>" takes a constructor type (like "typeof MyClass") and produces the type of the instance that constructor creates, which is useful when you have a reference to a class itself rather than an instance.',
    tags: ['utility-types', 'instance-type', 'classes']
  },
  {
    id: 'ts-090',
    topic: 'typescript',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Security',
    question: 'Why does TypeScript\'s type system not provide runtime safety guarantees on its own?',
    options: [
      'TypeScript types are checked at runtime by default',
      'Type annotations are erased during compilation to JavaScript, so untyped or external data (API responses, JSON.parse results) is not actually validated unless checked explicitly at runtime',
      'TypeScript automatically generates runtime validators for every type',
      'TypeScript cannot compile to JavaScript without a runtime type library'
    ],
    correctAnswer: 'Type annotations are erased during compilation to JavaScript, so untyped or external data (API responses, JSON.parse results) is not actually validated unless checked explicitly at runtime',
    explanation: 'TypeScript is a compile-time-only type system; all type annotations are erased in the emitted JavaScript. Data coming from outside the type system\'s knowledge (network responses, user input, "JSON.parse") can violate assumed types at runtime, so libraries like Zod or io-ts are often used for actual runtime validation.',
    tags: ['security', 'runtime-validation', 'type-erasure']
  },
  {
    id: 'ts-091',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'When designing a large-scale TypeScript monorepo shared across multiple teams, what is the main tradeoff of using project references versus a single flat tsconfig?',
    options: [
      'Project references always compile slower with no benefit',
      'Project references add upfront configuration complexity but enable faster incremental builds, enforce clearer module boundaries, and prevent accidental cross-package circular dependencies',
      'A flat tsconfig is required for any project using more than one package',
      'Project references are only relevant for JavaScript, not TypeScript'
    ],
    correctAnswer: 'Project references add upfront configuration complexity but enable faster incremental builds, enforce clearer module boundaries, and prevent accidental cross-package circular dependencies',
    explanation: 'Project references trade initial setup complexity (each package needs its own tsconfig with "composite: true" and explicit "references") for substantial long-term benefits in build speed, dependency clarity, and the ability to build/test individual packages in isolation — important at scale where a flat config would force full-project re-checks on every change.',
    tags: ['system-design', 'monorepo', 'project-references', 'tooling']
  },
  {
    id: 'ts-092',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'In a large API client library, how can you use generics and conditional types to produce a fully typed result based on an endpoint string, e.g. "request<\'GET /users/:id\'>"?',
    options: [
      'This level of type safety is impossible without code generation',
      'By defining a mapped type of endpoint-to-response/request shapes, then using a generic constrained to "keyof" that map, with conditional types deriving the parameter and response types per call',
      'By using "any" for all request and response types',
      'By writing a separate function for every possible endpoint manually'
    ],
    correctAnswer: 'By defining a mapped type of endpoint-to-response/request shapes, then using a generic constrained to "keyof" that map, with conditional types deriving the parameter and response types per call',
    explanation: 'A common pattern is to define a central type mapping endpoint identifiers to their request/response shapes, then write a generic "request<E extends keyof ApiMap>(endpoint: E): Promise<ApiMap[E][\'response\']>" so the compiler infers the exact response type from the literal string passed in, giving full autocomplete and type safety without per-endpoint boilerplate functions.',
    tags: ['system-design', 'generics', 'api-design', 'advanced-types']
  },
  {
    id: 'ts-093',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'What is "type-only" build performance impact of using deeply nested template literal types across thousands of string union members, and how would you mitigate it?',
    options: [
      'There is no performance impact since types are erased at compile time and compilation cost is irrelevant',
      'Combinatorial expansion of template literal types over large unions can dramatically slow the type checker; mitigation includes narrowing unions earlier, avoiding unnecessary cross-products, and using "string" with runtime validation for very large key sets',
      'TypeScript automatically caches all template literal type computations indefinitely with zero cost',
      'The only fix is to disable type checking entirely for that file'
    ],
    correctAnswer: 'Combinatorial expansion of template literal types over large unions can dramatically slow the type checker; mitigation includes narrowing unions earlier, avoiding unnecessary cross-products, and using "string" with runtime validation for very large key sets',
    explanation: 'Even though types are erased before runtime, the compiler itself still has to evaluate every type at compile time, and combining large unions via template literals can cause an explosion in the number of types the checker must materialize, leading to slow builds or editor lag — a real engineering tradeoff between type precision and developer experience at scale.',
    tags: ['performance', 'template-literal-types', 'compiler', 'scalability']
  },
  {
    id: 'ts-094',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Design Patterns',
    question: 'How would you implement a type-safe Observer/Event-Emitter pattern where listener callback argument types are inferred from the event name?',
    options: [
      'It requires casting every listener argument to "any"',
      'By defining a generic interface mapping event names to their payload types, then constraining the "on"/"emit" methods so the payload parameter type is looked up via that map using the event name as an index',
      'Event emitters cannot be made type-safe in TypeScript',
      'By creating a separate class for every event type'
    ],
    correctAnswer: 'By defining a generic interface mapping event names to their payload types, then constraining the "on"/"emit" methods so the payload parameter type is looked up via that map using the event name as an index',
    explanation: 'A common type-safe emitter pattern defines "interface EventMap { click: { x: number; y: number }; close: void }" and types "on<K extends keyof EventMap>(event: K, cb: (payload: EventMap[K]) => void)", so calling "on(\'click\', payload => ...)" automatically infers "payload" as "{ x: number; y: number }".',
    tags: ['design-patterns', 'observer-pattern', 'generics', 'event-emitter']
  },
  {
    id: 'ts-095',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'When migrating a large legacy JavaScript codebase to TypeScript incrementally, what is the recommended strategy regarding "strict" mode?',
    options: [
      'Enable full "strict" mode on day one across the entire codebase',
      'Start with "allowJs" and a relaxed config, incrementally convert files, and progressively enable individual strict flags (or use "strict" with targeted "// @ts-expect-error" suppressions) as coverage improves',
      'Avoid using TypeScript\'s compiler entirely and rely only on JSDoc comments',
      'Strict mode cannot be enabled incrementally; it is all-or-nothing per project'
    ],
    correctAnswer: 'Start with "allowJs" and a relaxed config, incrementally convert files, and progressively enable individual strict flags (or use "strict" with targeted "// @ts-expect-error" suppressions) as coverage improves',
    explanation: 'Large migrations typically begin with looser settings (allowing ".js" files, "noImplicitAny: false") to get type-checking running at all, then incrementally tighten strictness flags file-by-file or directory-by-directory as types are added, rather than attempting a disruptive big-bang strict-mode adoption.',
    tags: ['system-design', 'migration', 'strict-mode', 'tsconfig']
  },
  {
    id: 'ts-096',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'Why is relying solely on TypeScript interfaces insufficient for validating data received from an external API at a security boundary?',
    options: [
      'TypeScript interfaces are checked at runtime and provide full protection automatically',
      'Interfaces are erased at compile time and provide no runtime guarantee; malformed or malicious payloads can still pass through untyped boundaries unless explicitly validated with a runtime schema library',
      'Interfaces can only describe primitive types, not objects',
      'TypeScript automatically rejects any object that does not match a declared interface'
    ],
    correctAnswer: 'Interfaces are erased at compile time and provide no runtime guarantee; malformed or malicious payloads can still pass through untyped boundaries unless explicitly validated with a runtime schema library',
    explanation: 'Because TypeScript types disappear after compilation, casting an API response "as MyInterface" only satisfies the compiler — it performs zero runtime verification. For genuine security and data-integrity guarantees at trust boundaries, runtime validation (e.g. with Zod, io-ts, or manual checks) is required in addition to static types.',
    tags: ['security', 'runtime-validation', 'type-erasure', 'api-boundaries']
  },
  {
    id: 'ts-097',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Design Patterns',
    question: 'How can the Visitor design pattern be made exhaustive and type-safe in TypeScript using discriminated unions?',
    options: [
      'The Visitor pattern cannot be implemented with discriminated unions',
      'By defining the visited types as a discriminated union and writing a visit function with a switch over the discriminant, using a "never" check in the default case so the compiler errors if a new variant is added without a corresponding handler',
      'By using "any" for all visited node types',
      'By creating a separate class hierarchy with no shared discriminant'
    ],
    correctAnswer: 'By defining the visited types as a discriminated union and writing a visit function with a switch over the discriminant, using a "never" check in the default case so the compiler errors if a new variant is added without a corresponding handler',
    explanation: 'Assigning the switch discriminant to a variable typed "never" in the default/exhaustive-check branch causes a compile error if any union member is left unhandled, since only an impossible/empty type is assignable to "never" — this turns missing-case bugs into compile-time errors as soon as a new variant is added to the union.',
    tags: ['design-patterns', 'visitor-pattern', 'discriminated-unions', 'exhaustiveness-checking']
  },
  {
    id: 'ts-098',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'Write the exhaustiveness-check helper used in the pattern from the previous question.',
    options: [
      'function assertNever(x: any): any { return x; }',
      'function assertNever(x: never): never { throw new Error("Unexpected value: " + x); }',
      'function assertNever(x: unknown): void {}',
      'function assertNever<T>(x: T): T { return x; }'
    ],
    correctAnswer: 'function assertNever(x: never): never { throw new Error("Unexpected value: " + x); }',
    explanation: 'Typing the parameter as "never" means the function can only be called with a value the compiler believes is impossible to reach. If a new union member is added but not handled in the switch, that unhandled value will not be narrowed to "never" at the call site, producing a compile-time type error before the code can even run.',
    tags: ['exhaustiveness-checking', 'never', 'coding']
  },
  {
    id: 'ts-099',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How should shared type definitions be structured across a microservices architecture where multiple services are written in TypeScript and need consistent contract types?',
    options: [
      'Duplicate type definitions manually in every service to avoid coupling',
      'Publish shared contract types as a versioned internal package (or generate them from a schema like OpenAPI/Protobuf), so all services consume a single source of truth and contract changes are versioned explicitly',
      'Use "any" for all inter-service payloads to avoid type mismatches',
      'Store all type definitions only in comments, since types cannot be shared across separate codebases'
    ],
    correctAnswer: 'Publish shared contract types as a versioned internal package (or generate them from a schema like OpenAPI/Protobuf), so all services consume a single source of truth and contract changes are versioned explicitly',
    explanation: 'At organizational scale, the standard approach is to treat the contract as a versioned artifact — either a shared internal npm package containing hand-written or generated types, or types auto-generated from a schema definition (OpenAPI, Protobuf, GraphQL SDL) — so that breaking contract changes are caught via semantic versioning and CI rather than silent drift between services.',
    tags: ['system-design', 'microservices', 'shared-types', 'api-contracts']
  },
  {
    id: 'ts-100',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'In a large React + TypeScript codebase, why might overusing complex generic component props (e.g. deeply generic higher-order components) degrade both compiler performance and IDE responsiveness?',
    options: [
      'Generic components have no measurable effect on tooling performance',
      'Each generic instantiation requires the type checker to re-resolve and cache distinct type instances, and deeply nested or highly polymorphic generics multiply this work across every usage site, slowing both "tsc" and editor language-service responsiveness',
      'React explicitly forbids the use of generics in component props',
      'TypeScript automatically converts all generic props to "any" in React projects'
    ],
    correctAnswer: 'Each generic instantiation requires the type checker to re-resolve and cache distinct type instances, and deeply nested or highly polymorphic generics multiply this work across every usage site, slowing both "tsc" and editor language-service responsiveness',
    explanation: 'Every distinct generic instantiation is effectively a new type the compiler must compute and check, so heavily generic component APIs used across hundreds of call sites in a large app can meaningfully slow down both full builds and the language service used for IDE features like autocomplete and hover, which is a real, frequently underestimated scalability concern.',
    tags: ['performance', 'generics', 'react', 'scalability']
  },
  {
    id: 'ts-101',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'What is the practical implication of TypeScript\'s structural type system when designing public library APIs intended for external consumption?',
    options: [
      'Structural typing has no implications for library design',
      'Consumers can pass any object that matches a type\'s shape, even unintentionally, so libraries that need strict identity guarantees (e.g. distinguishing semantically different but structurally identical types) must use branding or nominal-typing techniques',
      'Library authors must avoid interfaces entirely and use only classes',
      'Structural typing prevents libraries from exporting any object types'
    ],
    correctAnswer: 'Consumers can pass any object that matches a type\'s shape, even unintentionally, so libraries that need strict identity guarantees (e.g. distinguishing semantically different but structurally identical types) must use branding or nominal-typing techniques',
    explanation: 'Because TypeScript checks shape rather than declared identity, a library exposing a type like "Meters = number" cannot, by default, prevent a caller from passing a plain number intended as "Seconds". Library authors who need that level of safety must deliberately introduce branded/nominal types rather than relying on structural typing alone.',
    tags: ['structural-typing', 'api-design', 'library-design', 'branded-types']
  },
  {
    id: 'ts-102',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Debugging',
    question: 'A teammate reports that a deeply generic utility function compiles fine in isolation but produces an inscrutable, multi-thousand-character error message when used in a real codebase. What is the most effective debugging approach?',
    options: [
      'Ignore the error since it compiles in isolation',
      'Break the generic chain into intermediate named types, check each constraint individually, and use the TypeScript Playground or "hover" types in the editor to inspect intermediate inferred types at each step',
      'Replace all generics with "any" to silence the error permanently',
      'Delete the function and rewrite the entire module in JavaScript'
    ],
    correctAnswer: 'Break the generic chain into intermediate named types, check each constraint individually, and use the TypeScript Playground or "hover" types in the editor to inspect intermediate inferred types at each step',
    explanation: 'Long, deeply nested generic error messages are usually the result of a chain of inferences failing at one specific link. Isolating intermediate steps into named types (even temporarily) and inspecting inferred types at each stage with the editor or Playground is far more productive than trying to parse the full nested error message, and avoids the anti-pattern of suppressing the issue with "any".',
    tags: ['debugging', 'generics', 'tooling', 'developer-experience']
  },
  {
    id: 'ts-103',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'When designing a plugin architecture where third-party plugins extend a core application\'s types, what TypeScript feature is most appropriate to let plugins safely add new properties to shared interfaces (e.g. a global "Config" object)?',
    options: [
      'Plugins should redefine the entire "Config" interface from scratch',
      'Module augmentation / declaration merging, so each plugin\'s package can extend the shared "Config" interface with its own additional properties without modifying the core package',
      'Plugins must use runtime reflection since types cannot be extended externally',
      '"any" typing across the entire plugin boundary'
    ],
    correctAnswer: 'Module augmentation / declaration merging, so each plugin\'s package can extend the shared "Config" interface with its own additional properties without modifying the core package',
    explanation: 'Declaration merging via module augmentation is the standard pattern for extensible plugin architectures — each plugin can declare "declare module \'core-package\' { interface Config { myPluginOption: string } }", and TypeScript merges all such declarations into a single, fully typed "Config" interface across the application.',
    tags: ['system-design', 'module-augmentation', 'plugin-architecture', 'declaration-merging']
  },
  {
    id: 'ts-104',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'What is the distinction between "bivariant" method parameter checking and the stricter "strictFunctionTypes" behavior for standalone function types?',
    options: [
      'They behave identically in all TypeScript versions',
      'Method shorthand syntax in interfaces/classes is checked bivariantly for parameters (looser, for practical compatibility with common OOP patterns), while standalone function type properties are checked contravariantly under "strictFunctionTypes", catching more unsound assignments',
      '"strictFunctionTypes" only affects return types, never parameters',
      'Bivariant checking was removed entirely in TypeScript 5'
    ],
    correctAnswer: 'Method shorthand syntax in interfaces/classes is checked bivariantly for parameters (looser, for practical compatibility with common OOP patterns), while standalone function type properties are checked contravariantly under "strictFunctionTypes", catching more unsound assignments',
    explanation: 'TypeScript deliberately keeps method-syntax parameter checks bivariant (a long-standing pragmatic tradeoff for OOP-style override patterns), while "strictFunctionTypes" tightens checking for function-typed properties/variables declared with arrow or function-type syntax, making those contravariant and catching genuinely unsound substitutions that bivariant checking would miss.',
    tags: ['variance', 'strict-function-types', 'type-theory', 'advanced-types']
  },
  {
    id: 'ts-105',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'In a CI pipeline for a large TypeScript monorepo, what combination of techniques most effectively reduces total type-checking time?',
    options: [
      'Disabling type checking entirely during CI and only checking locally',
      'Using project references with "composite" builds for incremental compilation, parallelizing independent package builds, caching ".tsbuildinfo" between CI runs, and isolating slow type-level computations into well-tested, stable utility packages',
      'Running "tsc" once per file individually with no shared cache',
      'Switching the entire codebase to "any" types to speed up checking'
    ],
    correctAnswer: 'Using project references with "composite" builds for incremental compilation, parallelizing independent package builds, caching ".tsbuildinfo" between CI runs, and isolating slow type-level computations into well-tested, stable utility packages',
    explanation: 'Real-world large-scale TypeScript CI optimization combines several complementary techniques: composite project references for incrementality, build caching across CI runs, parallel execution of independent packages, and architecturally isolating expensive type-level logic so it is computed once and reused rather than re-evaluated across every consuming package.',
    tags: ['performance', 'ci-cd', 'monorepo', 'project-references']
  },
  {
    id: 'ts-106',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you type a generic "pipe" function that composes an arbitrary number of single-argument functions, preserving full type safety across the chain?',
    options: [
      'function pipe(...fns: any[]): any { return (x: any) => fns.reduce((v, f) => f(v), x); }',
      'function pipe<A, B, C>(f1: (a: A) => B, f2: (b: B) => C): (a: A) => C { return a => f2(f1(a)); } — and define additional overloads for more functions',
      'Type-safe variadic composition is not possible in TypeScript',
      'function pipe(fns: Function[]): Function { return fns[0]; }'
    ],
    correctAnswer: 'function pipe<A, B, C>(f1: (a: A) => B, f2: (b: B) => C): (a: A) => C { return a => f2(f1(a)); } — and define additional overloads for more functions',
    explanation: 'Fully type-safe variadic "pipe"/"compose" functions are typically implemented via a series of generic overload signatures (one per supported arity) so each chain length has a precisely typed signature, since a single fully generic recursive variadic signature for arbitrary-length heterogeneous chains is difficult to express cleanly, though some libraries use recursive conditional types with variadic tuples to approximate it.',
    tags: ['generics', 'function-composition', 'overloads', 'coding']
  },
  {
    id: 'ts-107',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'When exposing a TypeScript-typed GraphQL or REST API schema to external consumers, what risk does relying purely on generated TypeScript types (without server-side runtime validation) introduce?',
    options: [
      'No risk — generated types guarantee runtime correctness automatically',
      'Generated types only describe the intended contract at compile time for the server\'s own code; they do nothing to validate or sanitize actual incoming request payloads, which still requires explicit runtime validation/sanitization on the server',
      'Generated types eliminate the need for any authentication',
      'Generated types automatically reject malformed JSON before parsing'
    ],
    correctAnswer: 'Generated types only describe the intended contract at compile time for the server\'s own code; they do nothing to validate or sanitize actual incoming request payloads, which still requires explicit runtime validation/sanitization on the server',
    explanation: 'Schema-generated types (from GraphQL SDL, OpenAPI, or similar) improve developer experience and internal consistency, but they are erased at runtime just like hand-written types. A malicious or malformed request body bypasses them entirely unless the server independently validates incoming data against the schema at runtime — type generation is not a substitute for input validation.',
    tags: ['security', 'api-design', 'runtime-validation', 'graphql']
  },
  {
    id: 'ts-108',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'What architectural approach helps prevent "type drift" between a frontend TypeScript application and its backend when both evolve independently over time?',
    options: [
      'Manually syncing types via copy-paste whenever a developer remembers to',
      'Establishing a single source of truth for the contract (shared types package, generated client from an OpenAPI/GraphQL schema, or a tRPC-style end-to-end typed API) combined with CI checks that fail builds on contract incompatibility',
      'Avoiding type sharing entirely and relying on documentation alone',
      'Using "unknown" for all API responses indefinitely'
    ],
    correctAnswer: 'Establishing a single source of truth for the contract (shared types package, generated client from an OpenAPI/GraphQL schema, or a tRPC-style end-to-end typed API) combined with CI checks that fail builds on contract incompatibility',
    explanation: 'Type drift is fundamentally a process problem solved by removing manual synchronization from the equation: either generate both client and server types from one schema, share a types package with versioned releases, or use an end-to-end typed RPC layer, and back it with CI checks that catch contract breakage automatically rather than relying on developer diligence.',
    tags: ['system-design', 'api-contracts', 'frontend-backend', 'type-drift']
  },
  {
    id: 'ts-109',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Design Patterns',
    question: 'How can the Strategy pattern be implemented in a type-safe way such that each strategy implementation is statically verified against a shared interface?',
    options: [
      'Strategies should be implemented as plain objects with no shared type',
      'By defining a strategy interface (e.g. "interface SortStrategy<T> { sort(items: T[]): T[] }") and having each concrete strategy class implement it, so the compiler enforces conformance and allows interchangeable use wherever the interface type is expected',
      'By using string identifiers and "any"-typed strategy functions resolved via a switch statement',
      'TypeScript does not support the Strategy pattern'
    ],
    correctAnswer: 'By defining a strategy interface (e.g. "interface SortStrategy<T> { sort(items: T[]): T[] }") and having each concrete strategy class implement it, so the compiler enforces conformance and allows interchangeable use wherever the interface type is expected',
    explanation: 'The Strategy pattern maps naturally onto TypeScript interfaces: defining a generic interface for the interchangeable behavior and having each strategy class "implement" it lets the compiler verify every strategy is structurally compatible, while consuming code can depend only on the interface type for full interchangeability.',
    tags: ['design-patterns', 'strategy-pattern', 'interfaces', 'generics']
  },
  {
    id: 'ts-110',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'Why might a senior engineer choose "interface" over "type" for public library APIs even when both could express the same shape?',
    options: [
      'There is never a meaningful reason to prefer one over the other',
      'Interfaces produce generally clearer error messages for object shapes, support declaration merging (useful for consumers to augment library types), and are conventionally favored in many style guides for object/class shapes, while type aliases are preferred for unions, tuples, and complex compositions',
      '"type" aliases cannot be exported from a module',
      'Interfaces compile to faster JavaScript than type aliases'
    ],
    correctAnswer: 'Interfaces produce generally clearer error messages for object shapes, support declaration merging (useful for consumers to augment library types), and are conventionally favored in many style guides for object/class shapes, while type aliases are preferred for unions, tuples, and complex compositions',
    explanation: 'This is a real, debated style decision rather than a hard technical rule: interfaces support declaration merging (valuable for extensible library APIs) and many teams find their error messages and "extends" semantics slightly clearer for plain object shapes, while type aliases remain necessary for unions, mapped types, and conditional types that interfaces cannot express. There is no runtime performance difference since both are fully erased.',
    tags: ['interfaces', 'type-aliases', 'api-design', 'best-practices']
  },
  {
    id: 'ts-111',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a type-safe dependency injection container in TypeScript that resolves dependencies with correct, non-"any" types?',
    options: [
      'It is impossible to type a DI container without using "any" for all resolved values',
      'By using a typed registry (often a "Map" or object keyed by symbol/string tokens) combined with generics and conditional/mapped types that associate each token with its corresponding concrete type, so "container.resolve<MyServiceToken>()" returns the correctly typed service without manual casting',
      'By requiring every consumer to manually cast every resolved dependency',
      'By using runtime reflection exclusively, since TypeScript has no compile-time metadata'
    ],
    correctAnswer: 'By using a typed registry (often a "Map" or object keyed by symbol/string tokens) combined with generics and conditional/mapped types that associate each token with its corresponding concrete type, so "container.resolve<MyServiceToken>()" returns the correctly typed service without manual casting',
    explanation: 'Type-safe DI containers typically maintain a compile-time mapping between registration tokens (often "unique symbol" or branded types) and their associated service types, using generics on "register"/"resolve" methods so the type system — not runtime casting — guarantees the resolved value matches the expected type for that token.',
    tags: ['system-design', 'dependency-injection', 'generics', 'design-patterns']
  },
  {
    id: 'ts-112',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'What is the performance implication of using "enum" versus a "const" object with "as const" and a derived union type for representing a fixed set of string constants?',
    options: [
      'Both compile to identical JavaScript with no difference',
      'Regular (non-const) enums generate runtime object code with reverse mappings, adding bundle size and a small runtime cost, while "as const" objects (or "const enum", which is erased but has its own caveats with isolated module compilation) can avoid that overhead at the cost of slightly different ergonomics',
      'Enums are always faster than any object-based alternative',
      '"as const" objects cannot be used as types, only as values'
    ],
    correctAnswer: 'Regular (non-const) enums generate runtime object code with reverse mappings, adding bundle size and a small runtime cost, while "as const" objects (or "const enum", which is erased but has its own caveats with isolated module compilation) can avoid that overhead at the cost of slightly different ergonomics',
    explanation: 'Standard TypeScript enums compile into actual runtime objects (including reverse number-to-name mappings for numeric enums), which adds to bundle size. "as const" object literals combined with "typeof" and indexed access types achieve a similar developer experience with a flatter runtime footprint, which is why some style guides and tools (including certain bundler/transpiler setups) prefer them over enums for performance-sensitive or tree-shaking-conscious codebases.',
    tags: ['performance', 'enums', 'as-const', 'bundle-size']
  },
  {
    id: 'ts-113',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Debugging',
    question: 'A function typed to return "Promise<User>" is actually returning "Promise<User | undefined>" at runtime in production, but the compiler never flagged it. What is the most likely root cause to investigate?',
    options: [
      'TypeScript itself has a bug and cannot be trusted',
      'An unsafe type assertion ("as User") or a non-null assertion ("!") was likely used somewhere in the code to silence a legitimate type error, suppressing the compiler\'s warning about the possible "undefined" value',
      'Promises cannot be typed in TypeScript at all',
      '"strictNullChecks" was never relevant to Promise types'
    ],
    correctAnswer: 'An unsafe type assertion ("as User") or a non-null assertion ("!") was likely used somewhere in the code to silence a legitimate type error, suppressing the compiler\'s warning about the possible "undefined" value',
    explanation: 'This is a classic real-world bug pattern: the type system was correct in flagging the possibility of "undefined", but a developer used an assertion to bypass the error rather than handling the case, which removes the compiler\'s protection entirely for that expression and lets the actual runtime mismatch slip through silently.',
    tags: ['debugging', 'type-assertion', 'non-null-assertion', 'production-bugs']
  },
  {
    id: 'ts-114',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'In a codebase enforcing a strict architectural boundary (e.g. domain logic must not import from the infrastructure layer), how can TypeScript\'s module system be combined with tooling to enforce this at scale?',
    options: [
      'TypeScript types alone can enforce architectural import boundaries',
      'TypeScript\'s type system does not enforce import direction; this requires complementary tooling such as ESLint rules (e.g. "eslint-plugin-boundaries" or path-based custom rules) or project references that physically prevent disallowed imports at the build level',
      'Renaming files is sufficient to prevent disallowed imports',
      'Using "namespace" instead of ES modules automatically enforces boundaries'
    ],
    correctAnswer: 'TypeScript\'s type system does not enforce import direction; this requires complementary tooling such as ESLint rules (e.g. "eslint-plugin-boundaries" or path-based custom rules) or project references that physically prevent disallowed imports at the build level',
    explanation: 'TypeScript itself does not understand or enforce "architectural layers" — it only checks types. Enforcing import direction rules at scale typically requires either lint rules that statically analyze import paths against allowed patterns, or structuring the codebase with project references where a lower layer simply cannot reference a higher one because no reference path exists in tsconfig.',
    tags: ['system-design', 'architecture', 'tooling', 'eslint']
  },
  {
    id: 'ts-115',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'What is the significance of TypeScript\'s "unsound" type system, and why was this design choice made deliberately?',
    options: [
      'TypeScript\'s type system is fully sound and never permits incorrect type assignments',
      'TypeScript intentionally permits certain unsound operations (like bivariant method parameters or array covariance) to remain compatible with idiomatic, pre-existing JavaScript patterns, trading some theoretical type safety for practical usability',
      'Unsoundness is an unintentional bug the TypeScript team has been unable to fix',
      'Unsoundness only affects the "any" type and nothing else'
    ],
    correctAnswer: 'TypeScript intentionally permits certain unsound operations (like bivariant method parameters or array covariance) to remain compatible with idiomatic, pre-existing JavaScript patterns, trading some theoretical type safety for practical usability',
    explanation: 'TypeScript\'s designers have been explicit that the type system favors practicality over perfect soundness — features like array covariance (allowing "Dog[]" where "Animal[]" is expected, which can technically be unsafe) and bivariant method checking exist because a fully sound system would reject too many common, generally-safe-in-practice JavaScript patterns, hurting adoption and developer experience.',
    tags: ['type-theory', 'soundness', 'language-design']
  },
  {
    id: 'ts-116',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Design Patterns',
    question: 'How would you implement a type-safe State Machine pattern in TypeScript such that invalid state transitions are caught at compile time?',
    options: [
      'State machines cannot be statically typed; all transition validation must happen at runtime',
      'By modeling states and their allowed transitions as a discriminated union or a mapped type of "current state -> allowed next states", then typing the "transition" function\'s parameter as constrained to only the states reachable from the current one',
      'By using a single "any"-typed string for the current state',
      'By hardcoding all transitions as runtime "if" statements with no type-level representation'
    ],
    correctAnswer: 'By modeling states and their allowed transitions as a discriminated union or a mapped type of "current state -> allowed next states", then typing the "transition" function\'s parameter as constrained to only the states reachable from the current one',
    explanation: 'A type-safe state machine typically encodes each state as a member of a discriminated union and defines a type-level map of valid transitions (often as a mapped type keyed by current state, whose value is a union of valid next states). The "transition" function can then use a generic constrained by that map so calling it with an invalid next state for the current state is a compile-time error rather than a runtime bug.',
    tags: ['design-patterns', 'state-machine', 'discriminated-unions', 'generics']
  },
  {
    id: 'ts-117',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'When a TypeScript application uses "JSON.parse()" on data from an untrusted source and immediately assigns the result to a strongly typed variable via a type assertion, what category of vulnerability does this practice most directly risk enabling?',
    options: [
      'It has no security implications since TypeScript validates JSON automatically',
      'It risks downstream logic operating on attacker-controlled or malformed data as if it were trusted and well-formed, since the assertion provides no actual validation — this can enable injection, broken authorization checks, or crashes depending on how the unvalidated data is subsequently used',
      'It only risks a compile-time warning, never a runtime issue',
      'It is only a concern for binary data, not JSON'
    ],
    correctAnswer: 'It risks downstream logic operating on attacker-controlled or malformed data as if it were trusted and well-formed, since the assertion provides no actual validation — this can enable injection, broken authorization checks, or crashes depending on how the unvalidated data is subsequently used',
    explanation: '"JSON.parse(input) as TrustedShape" is a compile-time-only claim; if the underlying data does not actually match the asserted shape (or contains malicious values), all subsequent code operates on a false assumption of safety. Depending on what the data is used for downstream, this can contribute to anything from application crashes to more serious issues like injection or authorization bypass — which is why runtime schema validation at trust boundaries is a standard recommendation, not an optional nicety.',
    tags: ['security', 'type-assertion', 'runtime-validation', 'untrusted-data']
  },
  {
    id: 'ts-118',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'What is the primary advantage of an end-to-end typed RPC approach (such as tRPC) over a traditionally typed REST client in a full-stack TypeScript application?',
    options: [
      'There is no meaningful advantage; both approaches are functionally identical',
      'Types flow directly from the server\'s actual implementation to the client without a separate schema generation or synchronization step, so contract changes are caught immediately by the compiler at build time rather than relying on regenerating or manually updating client types',
      'End-to-end RPC eliminates the need for any runtime validation entirely',
      'REST clients always have stronger type safety than RPC approaches'
    ],
    correctAnswer: 'Types flow directly from the server\'s actual implementation to the client without a separate schema generation or synchronization step, so contract changes are caught immediately by the compiler at build time rather than relying on regenerating or manually updating client types',
    explanation: 'End-to-end typed RPC frameworks infer client-side types directly from the server\'s actual router/procedure definitions (often via TypeScript\'s own inference, not a generated artifact), so a server-side signature change immediately surfaces as a type error on the client at compile time, removing an entire class of synchronization bugs that traditional REST + manually maintained or regenerated client types are prone to.',
    tags: ['system-design', 'rpc', 'api-contracts', 'full-stack-typescript']
  },
  {
    id: 'ts-119',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'How does TypeScript\'s control flow analysis enable type narrowing across multiple statements, and what are its limitations with closures?',
    options: [
      'Control flow analysis has no limitations and narrows perfectly in every scenario',
      'TypeScript tracks how a variable\'s type is refined through assignments, conditionals, and assertions within a single function scope, but narrowing is generally not preserved inside nested closures, since the compiler cannot guarantee the outer variable was not reassigned before the closure executes',
      'Control flow analysis only works for "const" variables, never "let"',
      'Narrowing is preserved perfectly across asynchronous callbacks with no caveats'
    ],
    correctAnswer: 'TypeScript tracks how a variable\'s type is refined through assignments, conditionals, and assertions within a single function scope, but narrowing is generally not preserved inside nested closures, since the compiler cannot guarantee the outer variable was not reassigned before the closure executes',
    explanation: 'A classic gotcha: narrowing a "let"-declared outer variable (e.g. via "if (typeof x === \'string\')") and then using "x" inside a callback defined within that block does not retain the narrowed type, because the compiler cannot statically prove the callback executes before "x" could be reassigned. This is a well-known limitation engineers run into with patterns like "setTimeout" callbacks referencing narrowed outer variables.',
    tags: ['control-flow-analysis', 'narrowing', 'closures', 'type-theory']
  },
  {
    id: 'ts-120',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How do you create a deep partial utility type for nested objects?',
    options: [
      'Using mapped types and recursion',
      'Using Utility types provided by TS lib',
      'Using interface extension',
      'Using conditional types only'
    ],
    correctAnswer: 'Using mapped types and recursion',
    explanation: 'A DeepPartial type uses a mapped type to iterate over object keys and recursion to handle nested objects until they are primitive types.',
    tags: ['advanced-types', 'generics', 'utility-types']
  }
];

