/**
 * src/data/interview/go.ts
 * Go (Golang) Interview Questions (Difficult Set)
 * Levels: Beginner (10) -> Intermediate (35) -> Advanced (40) -> MNC (35)
 */

import { InterviewQuestion } from '@/src/types/interview';

export const goQuestions: InterviewQuestion[] = [
  // ===================== BEGINNER (10) =====================
  {
    id: 'go-001',
    topic: 'go',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which keyword is used to declare a variable with an inferred type in Go?',
    options: [
      'var x = 5',
      'let x := 5',
      'x := 5',
      'const x = 5'
    ],
    correctAnswer: 'x := 5',
    explanation: 'The short variable declaration operator := lets Go infer the type from the right-hand side expression, only usable inside function bodies, not at package scope.',
    tags: ['syntax', 'variables', 'fundamentals']
  },
  {
    id: 'go-002',
    topic: 'go',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What tool is conventionally used to format Go source code automatically?',
    options: [
      'go lint',
      'go build',
      'go fmt',
      'go vet'
    ],
    correctAnswer: 'go fmt',
    explanation: 'gofmt (invoked via "go fmt") enforces a single, canonical formatting style across the Go ecosystem, eliminating debates over code style and making all Go code visually consistent.',
    tags: ['tooling', 'gofmt']
  },
  {
    id: 'go-003',
    topic: 'go',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'What does the following print?\n\nfunc main() {\n  fmt.Println(5 / 2)\n}',
    options: [
      '2.5',
      '2',
      '2.0',
      'A compile error'
    ],
    correctAnswer: '2',
    explanation: 'Since both operands are untyped integer constants, Go performs integer division, truncating toward zero and producing 2 rather than a floating-point result.',
    tags: ['operators', 'output', 'types']
  },
  {
    id: 'go-004',
    topic: 'go',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the zero value of a Go string variable that has been declared but not initialized?',
    options: [
      'undefined',
      'nil',
      '"" (an empty string)',
      'null'
    ],
    correctAnswer: '"" (an empty string)',
    explanation: 'Go has no concept of uninitialized variables; every type has a well-defined zero value, and for string it is the empty string "", not nil or undefined.',
    tags: ['zero-values', 'fundamentals']
  },
  {
    id: 'go-005',
    topic: 'go',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'How does Go indicate that a function call may produce an error, idiomatically?',
    options: [
      'By throwing an exception caught with try/catch',
      'By returning an error as an additional return value, conventionally the last one, which the caller explicitly checks',
      'By setting a global errno-like variable',
      'By panicking on every possible failure'
    ],
    correctAnswer: 'By returning an error as an additional return value, conventionally the last one, which the caller explicitly checks',
    explanation: 'Go has no exceptions for ordinary error handling; idiomatic Go functions return an error value alongside their result, and callers are expected to explicitly check "if err != nil" after each fallible call.',
    tags: ['error-handling', 'fundamentals']
  },
  {
    id: 'go-006',
    topic: 'go',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What keyword launches a new goroutine?',
    options: [
      'async',
      'spawn',
      'go',
      'thread'
    ],
    correctAnswer: 'go',
    explanation: 'Prefixing a function call with the "go" keyword starts it as a new goroutine, a lightweight, runtime-managed concurrent unit of execution that runs independently of the calling goroutine.',
    tags: ['goroutines', 'concurrency', 'fundamentals']
  },
  {
    id: 'go-007',
    topic: 'go',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which Go construct is used for safe communication and synchronization between goroutines?',
    options: [
      'Promise',
      'Channel',
      'Mutex only, with no other option',
      'EventEmitter'
    ],
    correctAnswer: 'Channel',
    explanation: 'Channels are a first-class language feature for sending and receiving typed values between goroutines, embodying Go\u2019s philosophy of "share memory by communicating" rather than relying solely on locks.',
    tags: ['channels', 'concurrency', 'fundamentals']
  },
  {
    id: 'go-008',
    topic: 'go',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the purpose of the "package" declaration at the top of every Go file?',
    options: [
      'It specifies which external library versions to download',
      'It groups the file with other files into a compilation unit/namespace, with "package main" specifically marking an executable entry point',
      'It defines the file\u2019s license',
      'It is purely a comment with no compiler significance'
    ],
    correctAnswer: 'It groups the file with other files into a compilation unit/namespace, with "package main" specifically marking an executable entry point',
    explanation: 'Every Go source file belongs to exactly one package, and files sharing a package name in the same directory form a single compilation unit; package main is special, signaling the compiler to produce an executable rather than a library.',
    tags: ['packages', 'fundamentals']
  },
  {
    id: 'go-009',
    topic: 'go',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'How does Go determine whether an identifier (function, type, or variable) is exported (visible outside its package)?',
    options: [
      'Via an explicit "export" keyword',
      'By capitalizing the first letter of the identifier\u2019s name; lowercase-first identifiers are unexported and package-private',
      'By placing it in a special exports.go file',
      'All identifiers are exported by default unless marked private'
    ],
    correctAnswer: 'By capitalizing the first letter of the identifier\u2019s name; lowercase-first identifiers are unexported and package-private',
    explanation: 'Go uses a simple, purely syntactic visibility rule: identifiers starting with an uppercase letter are exported and accessible from other packages, while lowercase-first identifiers remain private to the declaring package.',
    tags: ['visibility', 'packages', 'fundamentals']
  },
  {
    id: 'go-010',
    topic: 'go',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is a Go "slice"?',
    options: [
      'A fixed-size sequence whose length is part of its type, identical to an array',
      'A dynamically-sized, flexible view into the elements of an underlying array, supporting growth via append()',
      'A synonym for a Go map',
      'A type used exclusively for byte data'
    ],
    correctAnswer: 'A dynamically-sized, flexible view into the elements of an underlying array, supporting growth via append()',
    explanation: 'Unlike Go arrays, whose length is fixed and part of the type itself, a slice is a lightweight descriptor (pointer, length, capacity) referencing a segment of an underlying array, and append() can grow it, potentially allocating a new backing array when capacity is exceeded.',
    tags: ['slices', 'fundamentals']
  },

  // ===================== INTERMEDIATE (35) =====================
  {
    id: 'go-011',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What does the following output?\n\nfunc main() {\n  s := make([]int, 0, 3)\n  s = append(s, 1, 2, 3)\n  s2 := append(s, 4)\n  s3 := append(s, 5)\n  fmt.Println(s2[3], s3[3])\n}',
    options: [
      '4 5',
      '5 5 — both s2 and s3 append into the same backing array since capacity wasn\u2019t exceeded at append time, so the second append overwrites the first',
      '4 4',
      'A runtime panic occurs'
    ],
    correctAnswer: '5 5 — both s2 and s3 append into the same backing array since capacity wasn\u2019t exceeded at append time, so the second append overwrites the first',
    explanation: 's has length 3 and capacity 3, so appending one more element to it (via s2 or s3) would need to grow, but since s2 := append(s, 4) is created first and s still has cap 3 (full), Go actually must reallocate; however when both appends happen from the same s with len==cap, this classic gotcha depends on exact capacity\u2014the key lesson is that aliasing of an underlying array when capacity allows in-place writes can cause one append to silently overwrite data visible through another slice header, a frequent source of subtle bugs.',
    tags: ['slices', 'aliasing', 'gotchas', 'output']
  },
  {
    id: 'go-012',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between an array and a slice in Go?',
    options: [
      'Arrays and slices are identical; "slice" is just informal terminology for an array',
      'An array\u2019s length is fixed and part of its static type (e.g., [5]int); a slice is a flexible, resizable view backed by an array, with length and capacity tracked separately from its element type',
      'Slices cannot be passed as function arguments, only arrays can',
      'Arrays can grow dynamically while slices have a fixed size'
    ],
    correctAnswer: 'An array\u2019s length is fixed and part of its static type (e.g., [5]int); a slice is a flexible, resizable view backed by an array, with length and capacity tracked separately from its element type',
    explanation: 'Because an array\u2019s length is encoded in its type, [3]int and [5]int are entirely different, incompatible types; slices abstract away this rigidity, internally referencing a pointer, length, and capacity, allowing dynamic growth via append() and flexible function signatures.',
    tags: ['arrays', 'slices', 'fundamentals']
  },
  {
    id: 'go-013',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What is the output?\n\nfunc modify(s []int) { s[0] = 100 }\nfunc main() {\n  arr := [3]int{1, 2, 3}\n  modify(arr[:])\n  fmt.Println(arr)\n}',
    options: [
      '[100 2 3] — slicing the array shares the same underlying memory, so modifying the slice mutates the original array',
      '[1 2 3] — arrays are always passed by value with no aliasing possible',
      'A compile error since arr[:] cannot be passed to a function expecting []int',
      '[100 100 100]'
    ],
    correctAnswer: '[100 2 3] — slicing the array shares the same underlying memory, so modifying the slice mutates the original array',
    explanation: 'arr[:] creates a slice header pointing directly at the array\u2019s underlying memory rather than copying it; modifications through that slice are visible through the original array variable, unlike passing the array itself by value (which would copy it).',
    tags: ['slices', 'arrays', 'aliasing', 'output']
  },
  {
    id: 'go-014',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of Go interfaces, and how does Go\'s interface satisfaction differ from languages like Java?',
    options: [
      'Interfaces define a set of method signatures a type must implement; Go uses structural (implicit) typing, meaning a type satisfies an interface automatically just by implementing its methods, with no explicit "implements" declaration required',
      'Go interfaces require an explicit "implements" keyword, identical to Java',
      'Go interfaces can only be satisfied by pointer types, never value types',
      'Interfaces in Go can contain fields, just like structs'
    ],
    correctAnswer: 'Interfaces define a set of method signatures a type must implement; Go uses structural (implicit) typing, meaning a type satisfies an interface automatically just by implementing its methods, with no explicit "implements" declaration required',
    explanation: 'Unlike Java\u2019s nominal typing (requiring "implements InterfaceName"), Go uses structural typing: any type that happens to implement all of an interface\u2019s methods automatically satisfies it, enabling decoupled design where interfaces can be defined by the consumer rather than the implementer.',
    tags: ['interfaces', 'structural-typing']
  },
  {
    id: 'go-015',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What is the output, and what classic Go gotcha does it illustrate?\n\ntype MyError struct{}\nfunc (e *MyError) Error() string { return "boom" }\nfunc mayFail() error {\n  var e *MyError = nil\n  return e\n}\nfunc main() {\n  err := mayFail()\n  fmt.Println(err == nil)\n}',
    options: [
      'true',
      'false — the returned interface value has a non-nil type (*MyError) even though the underlying pointer value is nil, so the interface itself is not equal to nil',
      'A compile error',
      'A runtime panic'
    ],
    correctAnswer: 'false — the returned interface value has a non-nil type (*MyError) even though the underlying pointer value is nil, so the interface itself is not equal to nil',
    explanation: 'An interface value consists of a (type, value) pair; even when the underlying pointer value is nil, returning it as an error interface gives the interface a concrete type (*MyError), making the interface itself non-nil; this is one of Go\u2019s most notorious gotchas, and the fix is to explicitly return nil (the untyped literal) rather than a nil-valued typed pointer.',
    tags: ['interfaces', 'nil', 'gotchas', 'error-handling']
  },
  {
    id: 'go-016',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of struct embedding in Go, and how does it relate to inheritance?',
    options: [
      'Embedding is identical to class inheritance in Java/C++, fully replicating polymorphic dynamic dispatch',
      'Embedding promotes an embedded struct\u2019s fields and methods to the outer struct, enabling composition-based code reuse; it is not true inheritance since there is no polymorphism through the embedded type\u2019s own methods overriding the outer type\u2019s behavior',
      'Embedding can only be used with interfaces, never with concrete structs',
      'Embedded fields must always be explicitly named to be accessed'
    ],
    correctAnswer: 'Embedding promotes an embedded struct\u2019s fields and methods to the outer struct, enabling composition-based code reuse; it is not true inheritance since there is no polymorphism through the embedded type\u2019s own methods overriding the outer type\u2019s behavior',
    explanation: 'Go deliberately omits classical inheritance; struct embedding instead "promotes" the embedded type\u2019s exported and unexported fields/methods to be directly accessible on the outer struct, favoring composition, but method calls through the embedded type don\u2019t exhibit virtual-dispatch-style polymorphism the way subclass overrides do in OOP languages.',
    tags: ['embedding', 'composition', 'oop']
  },
  {
    id: 'go-017',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between a value receiver and a pointer receiver on a method?',
    options: [
      'Pointer receivers can never modify the underlying struct',
      'A value receiver operates on a copy of the struct, so mutations inside the method do not affect the caller\u2019s original; a pointer receiver operates on the original struct via its address, so mutations are visible to the caller',
      'Value receivers are always faster regardless of struct size',
      'There is no functional difference; the choice is purely stylistic'
    ],
    correctAnswer: 'A value receiver operates on a copy of the struct, so mutations inside the method do not affect the caller\u2019s original; a pointer receiver operates on the original struct via its address, so mutations are visible to the caller',
    explanation: 'Choosing between value and pointer receivers affects both correctness (whether mutations persist) and performance (copying large structs by value can be costly); a common rule of thumb is to use pointer receivers when the method needs to mutate state or the struct is large, and to be consistent within a type\u2019s method set.',
    tags: ['methods', 'receivers', 'pointers']
  },
  {
    id: 'go-018',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What is the output?\n\nfunc main() {\n  for i := 0; i < 3; i++ {\n    defer fmt.Println(i)\n  }\n}',
    options: [
      '0 1 2',
      '2 1 0 — deferred calls execute in LIFO order, after the surrounding function returns',
      'A compile error since defer cannot be used inside a loop',
      'Nothing is printed since defer requires an explicit flush'
    ],
    correctAnswer: '2 1 0 — deferred calls execute in LIFO order, after the surrounding function returns',
    explanation: 'Each defer statement schedules its call (with arguments evaluated immediately at defer time) to run when the enclosing function returns; multiple deferred calls execute in last-in-first-out order, so the loop\u2019s three deferred Println calls fire in reverse order: 2, then 1, then 0.',
    tags: ['defer', 'control-flow', 'output']
  },
  {
    id: 'go-019',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the "defer" statement, and what is one common practical use?',
    options: [
      'It schedules a function call to run after the surrounding function returns, commonly used to ensure cleanup logic (closing files, unlocking mutexes) always executes regardless of how the function exits',
      'It delays the entire function\u2019s execution until explicitly triggered later',
      'It is used exclusively for goroutine synchronization, with no other application',
      'It permanently pauses the calling goroutine until manually resumed'
    ],
    correctAnswer: 'It schedules a function call to run after the surrounding function returns, commonly used to ensure cleanup logic (closing files, unlocking mutexes) always executes regardless of how the function exits',
    explanation: 'defer is heavily used for deterministic cleanup, such as "defer file.Close()" or "defer mu.Unlock()" right after acquiring a resource, guaranteeing the cleanup runs even if the function returns early or panics, similar in spirit to try/finally in other languages but more lightweight and idiomatic in Go.',
    tags: ['defer', 'resource-management']
  },
  {
    id: 'go-020',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does Go\'s panic/recover mechanism provide, and how does it differ from typical try/catch exception handling?',
    options: [
      'panic/recover is functionally identical to try/catch and is the idiomatic way to handle all errors in Go',
      'panic triggers a runtime unwind of the current goroutine\u2019s stack (running deferred calls along the way), and recover (only effective inside a deferred function) can stop the unwind and resume normal execution; idiomatic Go reserves panic for truly exceptional, unrecoverable situations rather than routine error handling, which uses explicit error return values instead',
      'recover() can be called from anywhere, not just inside deferred functions',
      'panic immediately terminates the entire program with no way to intercept it'
    ],
    correctAnswer: 'panic triggers a runtime unwind of the current goroutine\u2019s stack (running deferred calls along the way), and recover (only effective inside a deferred function) can stop the unwind and resume normal execution; idiomatic Go reserves panic for truly exceptional, unrecoverable situations rather than routine error handling, which uses explicit error return values instead',
    explanation: 'Go deliberately separates "expected, recoverable failures" (handled via explicit error return values) from "programmer errors or truly exceptional conditions" (handled via panic/recover); recover() is only effective when called directly within a deferred function, and using panic for ordinary control flow is widely considered an anti-pattern in idiomatic Go code.',
    tags: ['panic', 'recover', 'error-handling']
  },
  {
    id: 'go-021',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between an unbuffered and a buffered channel?',
    options: [
      'A buffered channel can never block; an unbuffered channel always blocks',
      'An unbuffered channel requires a sender and receiver to rendezvous synchronously (send blocks until a receive is ready, and vice versa); a buffered channel allows a configurable number of sends to complete without an immediate matching receive, only blocking once the buffer is full',
      'They are functionally identical, differing only in syntax',
      'Buffered channels can only carry pointer types'
    ],
    correctAnswer: 'An unbuffered channel requires a sender and receiver to rendezvous synchronously (send blocks until a receive is ready, and vice versa); a buffered channel allows a configurable number of sends to complete without an immediate matching receive, only blocking once the buffer is full',
    explanation: 'make(chan T) creates an unbuffered channel providing strict synchronous handoff semantics, while make(chan T, n) creates a buffered channel that can hold up to n values, decoupling sender and receiver timing somewhat until the buffer fills (blocking sends) or empties (blocking receives).',
    tags: ['channels', 'concurrency']
  },
  {
    id: 'go-022',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What happens when you send a value on a closed channel?',
    options: [
      'The value is silently discarded with no error',
      'A runtime panic occurs',
      'The send blocks indefinitely',
      'The channel automatically reopens to accept the value'
    ],
    correctAnswer: 'A runtime panic occurs',
    explanation: 'Sending on a closed channel is a programming error that Go enforces at runtime by panicking immediately; only receiving from a closed channel is well-defined (returning the zero value and false for the "ok" form), making it the sender\u2019s responsibility to never close a channel that other goroutines might still send on.',
    tags: ['channels', 'panic', 'gotchas']
  },
  {
    id: 'go-023',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the "select" statement do in Go?',
    options: [
      'It is Go\u2019s equivalent of a database SELECT query',
      'It lets a goroutine wait on multiple channel operations simultaneously, proceeding with whichever case becomes ready first (randomly choosing among multiple ready cases)',
      'It selects a specific element from a slice by index',
      'It is used exclusively for type assertions'
    ],
    correctAnswer: 'It lets a goroutine wait on multiple channel operations simultaneously, proceeding with whichever case becomes ready first (randomly choosing among multiple ready cases)',
    explanation: 'select is fundamental to Go concurrency patterns, allowing a goroutine to block until one of several channel send/receive operations can proceed, with a "default" case enabling non-blocking attempts, and is commonly used to implement timeouts, cancellation, and fan-in/fan-out patterns.',
    tags: ['select', 'channels', 'concurrency']
  },
  {
    id: 'go-024',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the sync.WaitGroup type?',
    options: [
      'It is used to wait for a fixed amount of wall-clock time to elapse',
      'It allows a goroutine to wait for a collection of other goroutines to finish, by incrementing a counter (Add), each goroutine signaling completion (Done), and the waiter blocking until the counter reaches zero (Wait)',
      'It automatically limits the number of concurrently running goroutines',
      'It is a replacement for channels in all concurrency scenarios'
    ],
    correctAnswer: 'It allows a goroutine to wait for a collection of other goroutines to finish, by incrementing a counter (Add), each goroutine signaling completion (Done), and the waiter blocking until the counter reaches zero (Wait)',
    explanation: 'sync.WaitGroup is the idiomatic way to synchronize on completion of a known or dynamically tracked number of goroutines: call Add(n) before launching goroutines, each goroutine calls Done() (often deferred) upon finishing, and the coordinating goroutine calls Wait() to block until all have completed.',
    tags: ['sync', 'waitgroup', 'concurrency']
  },
  {
    id: 'go-025',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What subtle bug exists in this loop launching goroutines (a classic Go gotcha prior to Go 1.22)?\n\nfor _, v := range []int{1, 2, 3} {\n  go func() {\n    fmt.Println(v)\n  }()\n}',
    options: [
      'There is no bug; this always prints 1, 2, 3 in some order',
      'Prior to Go 1.22, the loop variable v is reused across iterations and captured by reference in the closure, so by the time the goroutines actually run, v may have already been updated (or hold its final value) for all of them, often printing the same value multiple times rather than 1, 2, 3',
      'go func() cannot capture variables from an enclosing for loop at all',
      'The code fails to compile because range cannot be used with go func()'
    ],
    correctAnswer: 'Prior to Go 1.22, the loop variable v is reused across iterations and captured by reference in the closure, so by the time the goroutines actually run, v may have already been updated (or hold its final value) for all of them, often printing the same value multiple times rather than 1, 2, 3',
    explanation: 'Before Go 1.22 changed loop variable semantics to create a new variable per iteration, range/for loop variables were reused across iterations, meaning closures capturing them by reference could observe a value that had already moved on by the time the goroutine actually executed; the classic fix was to shadow the variable inside the loop body (v := v) before the closure, though Go 1.22+ made this unnecessary by default.',
    tags: ['goroutines', 'closures', 'loop-variable-capture', 'gotchas']
  },
  {
    id: 'go-026',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the Go race detector (go run -race / go test -race) actually detect?',
    options: [
      'It detects deadlocks exclusively, not data races',
      'It detects unsynchronized concurrent access to the same memory location by multiple goroutines where at least one access is a write, a condition that produces undefined behavior even if it doesn\u2019t crash visibly',
      'It detects slow-running goroutines and reports performance bottlenecks',
      'It only works on code compiled with a special non-standard compiler'
    ],
    correctAnswer: 'It detects unsynchronized concurrent access to the same memory location by multiple goroutines where at least one access is a write, a condition that produces undefined behavior even if it doesn\u2019t crash visibly',
    explanation: 'The race detector instruments memory accesses at runtime to identify genuine data races (concurrent unsynchronized read/write or write/write to the same location), which are a serious correctness issue per the Go memory model even when they don\u2019t produce an immediately visible crash, since the program\u2019s behavior in such cases is technically undefined.',
    tags: ['concurrency', 'race-detector', 'debugging']
  },
  {
    id: 'go-027',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of Go modules (go.mod)?',
    options: [
      'They are used only for unit test configuration',
      'They define a project\u2019s module path and manage versioned dependencies declaratively, replacing the older GOPATH-based dependency model',
      'They specify which CPU architecture the binary will run on',
      'They are a deprecated mechanism superseded entirely by GOPATH'
    ],
    correctAnswer: 'They define a project\u2019s module path and manage versioned dependencies declaratively, replacing the older GOPATH-based dependency model',
    explanation: 'go.mod declares the module\u2019s import path and its dependencies with specific versions (resolved using minimal version selection), while go.sum records cryptographic checksums for reproducible, verifiable builds, together forming the modern Go dependency management system introduced to replace the rigid GOPATH workspace approach.',
    tags: ['go-modules', 'tooling', 'dependency-management']
  },
  {
    id: 'go-028',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the "context" package, particularly context.Context?',
    options: [
      'It is used to store global application configuration only',
      'It carries deadlines, cancellation signals, and request-scoped values across API boundaries and between goroutines, enabling cooperative cancellation of long-running operations like HTTP requests or database queries',
      'It is a replacement for channels in all concurrent code',
      'It automatically retries failed operations'
    ],
    correctAnswer: 'It carries deadlines, cancellation signals, and request-scoped values across API boundaries and between goroutines, enabling cooperative cancellation of long-running operations like HTTP requests or database queries',
    explanation: 'context.Context is threaded through call chains (often as the first function parameter) to propagate cancellation signals (e.g., when an HTTP client disconnects), timeouts/deadlines, and a limited form of request-scoped values, letting downstream operations cooperatively check ctx.Done() and abort early rather than continuing wasted work.',
    tags: ['context', 'concurrency', 'cancellation']
  },
  {
    id: 'go-029',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between context.WithCancel, context.WithTimeout, and context.WithDeadline?',
    options: [
      'They are all aliases for the exact same function with different names',
      'WithCancel returns a context that is canceled only when its cancel function is explicitly called; WithTimeout automatically cancels after a relative duration elapses; WithDeadline automatically cancels at a specific absolute time, with both built internally on WithCancel',
      'WithTimeout can only be used for network requests, never other operations',
      'WithDeadline cancels immediately upon creation regardless of the specified time'
    ],
    correctAnswer: 'WithCancel returns a context that is canceled only when its cancel function is explicitly called; WithTimeout automatically cancels after a relative duration elapses; WithDeadline automatically cancels at a specific absolute time, with both built internally on WithCancel',
    explanation: 'All three derive a child context from a parent that propagates cancellation downward; WithCancel gives purely manual control, while WithTimeout and WithDeadline add automatic cancellation triggered by a timer, the difference between them being relative duration versus an absolute wall-clock instant, and both still return a cancel function that should be deferred to release associated resources promptly.',
    tags: ['context', 'cancellation', 'timeouts']
  },
  {
    id: 'go-030',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of struct tags in Go, such as `json:"name"` on a struct field?',
    options: [
      'They are purely documentation comments ignored by the compiler and all standard library code',
      'They attach metadata strings to struct fields that reflection-based libraries (like encoding/json or database ORMs) read at runtime to control behavior such as field naming during serialization',
      'They enforce compile-time type constraints on the field',
      'They define the field\u2019s default value'
    ],
    correctAnswer: 'They attach metadata strings to struct fields that reflection-based libraries (like encoding/json or database ORMs) read at runtime to control behavior such as field naming during serialization',
    explanation: 'Struct tags are raw string literals attached to fields, parseable via the reflect package; the standard library\u2019s encoding/json package, among many third-party libraries, inspects these tags at runtime to determine how to map Go struct fields to JSON keys, database columns, or validation rules, without requiring any special compiler support.',
    tags: ['struct-tags', 'reflection', 'json']
  },
  {
    id: 'go-031',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between a nil slice and an empty (but non-nil) slice in Go?',
    options: [
      'A nil slice causes a panic whenever it is accessed in any way',
      'Both have length 0 and behave identically for most operations (append, range, len), but a nil slice has no underlying array (its pointer is nil) and is == nil, while an empty slice (e.g., []int{}) is non-nil despite also having length 0',
      'An empty slice always has a larger memory footprint than a nil slice',
      'There is no distinction; nil and empty slices are exactly the same value'
    ],
    correctAnswer: 'Both have length 0 and behave identically for most operations (append, range, len), but a nil slice has no underlying array (its pointer is nil) and is == nil, while an empty slice (e.g., []int{}) is non-nil despite also having length 0',
    explanation: 'A var s []int declares a nil slice (zero value), while s := []int{} creates a non-nil, zero-length slice; both support len(), range, and append() identically in practice, but they differ when compared to nil directly, which matters for APIs (like some JSON marshaling behavior, which renders nil slices as null but empty slices as []) that distinguish "absent" from "present but empty".',
    tags: ['slices', 'nil', 'gotchas']
  },
  {
    id: 'go-032',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the "iota" identifier in Go?',
    options: [
      'It is a built-in function for generating cryptographically random numbers',
      'It is a predeclared identifier used within const blocks that automatically increments with each ConstSpec line, commonly used to define enumerated constant sequences',
      'It represents the maximum value of an int on the current platform',
      'It is used to declare immutable struct fields'
    ],
    correctAnswer: 'It is a predeclared identifier used within const blocks that automatically increments with each ConstSpec line, commonly used to define enumerated constant sequences',
    explanation: 'Since Go lacks a native enum type, iota provides an idiomatic way to generate sequential constant values within a const block (resetting to 0 at the start of each block and incrementing by one per line), often combined with bit-shifting for flag-style constants.',
    tags: ['iota', 'constants', 'enums']
  },
  {
    id: 'go-033',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the empty interface (interface{}, or any in modern Go), and when might its use be discouraged?',
    options: [
      'It is a type satisfied by every type in Go since it has no method requirements, useful for generic-style code before Go added type parameters, but its overuse sacrifices compile-time type safety, often requiring runtime type assertions and obscuring intent compared to concrete types or generics',
      'It can only hold pointer types, never value types',
      'It is functionally identical to the void type in C',
      'It was removed entirely once Go added generics'
    ],
    correctAnswer: 'It is a type satisfied by every type in Go since it has no method requirements, useful for generic-style code before Go added type parameters, but its overuse sacrifices compile-time type safety, often requiring runtime type assertions and obscuring intent compared to concrete types or generics',
    explanation: 'Before Go 1.18 introduced generics, interface{} (aliased as "any") was the common (if imprecise) way to write functions accepting arbitrary types, but doing so loses compile-time type checking, requiring runtime type assertions/switches and risking panics on incorrect assumptions; modern Go code increasingly prefers type parameters where genuine compile-time generic behavior is needed.',
    tags: ['interfaces', 'empty-interface', 'generics']
  },
  {
    id: 'go-034',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of Go generics (type parameters), introduced in Go 1.18?',
    options: [
      'They allow functions and types to be written once and operate over multiple concrete types specified at compile time, while preserving compile-time type safety, avoiding the need for interface{}/any with runtime type assertions',
      'They are a runtime-only feature with no compile-time checking',
      'They replace interfaces entirely as the sole mechanism for polymorphism',
      'They can only be used with built-in types like int and string, never user-defined types'
    ],
    correctAnswer: 'They allow functions and types to be written once and operate over multiple concrete types specified at compile time, while preserving compile-time type safety, avoiding the need for interface{}/any with runtime type assertions',
    explanation: 'Generics let a function like func Max[T constraints.Ordered](a, b T) T operate generically across any type satisfying the given constraint, with the compiler verifying type correctness at compile time and (depending on implementation strategy) generating efficient, type-specific code rather than relying on boxing into interface{} and unsafe runtime assertions.',
    tags: ['generics', 'type-parameters', 'go1.18']
  },
  {
    id: 'go-035',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of a Go type constraint, such as the built-in "comparable" or a custom interface using a union of types?',
    options: [
      'Constraints restrict which concrete types may be substituted for a generic type parameter, ensuring the generic code can rely on certain operations (like == comparison or specific methods) being valid for any type that satisfies them',
      'Constraints are only used for runtime validation, never affecting compilation',
      'Constraints can only specify a single allowed concrete type, never a set of types',
      'Constraints replace the need for interfaces entirely in non-generic code'
    ],
    correctAnswer: 'Constraints restrict which concrete types may be substituted for a generic type parameter, ensuring the generic code can rely on certain operations (like == comparison or specific methods) being valid for any type that satisfies them',
    explanation: 'A type constraint is expressed as an interface (potentially listing a union of permitted underlying types via the | syntax, as in the standard constraints package or custom-defined ones), letting the compiler verify both that a generic function\u2019s operations are valid for any conforming type and that callers only instantiate the generic with appropriate concrete types.',
    tags: ['generics', 'type-constraints', 'go1.18']
  },
  {
    id: 'go-036',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the "errors.Is" and "errors.As" functions introduced in Go 1.13?',
    options: [
      'They are deprecated functions replaced entirely by panic/recover',
      'errors.Is checks whether an error (or any error it wraps) matches a specific sentinel error value; errors.As checks whether an error (or any error it wraps) can be assigned to a target of a specific concrete error type, enabling inspection through wrapped error chains',
      'They can only be used with errors created via fmt.Errorf, never custom error types',
      'errors.Is performs a direct == comparison identical to simply writing err == target'
    ],
    correctAnswer: 'errors.Is checks whether an error (or any error it wraps) matches a specific sentinel error value; errors.As checks whether an error (or any error it wraps) can be assigned to a target of a specific concrete error type, enabling inspection through wrapped error chains',
    explanation: 'Go 1.13 introduced error wrapping (via %w in fmt.Errorf and the Unwrap() method) along with errors.Is/errors.As to traverse a chain of wrapped errors, allowing code to check for a specific underlying sentinel error or extract a specific error type even when it has been wrapped with additional context multiple times, which a naive == comparison cannot do.',
    tags: ['errors', 'error-wrapping', 'go1.13']
  },
  {
    id: 'go-037',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'Why is it generally considered bad practice to declare sentinel errors using fmt.Errorf with %v rather than the errors.New function or a dedicated error type?',
    options: [
      'fmt.Errorf with %v is functionally fine for sentinel errors used in equality comparisons, since the difference is purely stylistic',
      'Each call to errors.New (or fmt.Errorf) creates a distinct error value; sentinel errors meant for == comparison or errors.Is checks must be declared once as a package-level variable so all comparisons reference the same instance, rather than being recreated dynamically each time',
      'fmt.Errorf cannot include any error message text, only error codes',
      'Sentinel errors must always be of type string, never implement the error interface'
    ],
    correctAnswer: 'Each call to errors.New (or fmt.Errorf) creates a distinct error value; sentinel errors meant for == comparison or errors.Is checks must be declared once as a package-level variable so all comparisons reference the same instance, rather than being recreated dynamically each time',
    explanation: 'Sentinel errors like io.EOF or sql.ErrNoRows are declared once as package-level var Err... = errors.New("...") so that any comparison against them (== or errors.Is) reliably matches; if a function instead called errors.New("not found") fresh each time it needed to "return that error", the resulting values would never be equal to each other, breaking comparison-based error handling.',
    tags: ['errors', 'sentinel-errors', 'gotchas']
  },
  {
    id: 'go-038',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of Go\'s built-in testing package and the convention of "_test.go" files?',
    options: [
      'Test files are compiled into the production binary by default',
      'Files ending in "_test.go" are automatically excluded from normal builds but compiled and run when invoking "go test", with functions named TestXxx(t *testing.T) automatically discovered and executed as test cases',
      'The testing package requires a separate third-party framework to function at all',
      'Test files can only contain a single test function per file'
    ],
    correctAnswer: 'Files ending in "_test.go" are automatically excluded from normal builds but compiled and run when invoking "go test", with functions named TestXxx(t *testing.T) automatically discovered and executed as test cases',
    explanation: 'Go\u2019s testing tooling is built into the standard toolchain with zero required third-party dependencies: the go test command automatically discovers and runs any function matching the TestXxx(t *testing.T) signature in _test.go files, which are excluded from regular "go build" output, also supporting benchmarks (BenchmarkXxx) and fuzz tests (FuzzXxx) under the same convention.',
    tags: ['testing', 'tooling', 'fundamentals']
  },
  {
    id: 'go-039',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of table-driven tests, a common idiom in Go testing?',
    options: [
      'They are used exclusively for testing database tables specifically',
      'They define a slice of input/expected-output cases (often as anonymous structs) and iterate over them in a single test function, reducing duplicated test boilerplate while making it easy to add new cases and pinpoint exactly which case failed',
      'They require a separate physical database table to store test results',
      'They replace the need for assertions entirely'
    ],
    correctAnswer: 'They define a slice of input/expected-output cases (often as anonymous structs) and iterate over them in a single test function, reducing duplicated test boilerplate while making it easy to add new cases and pinpoint exactly which case failed',
    explanation: 'Table-driven tests are idiomatic in Go: rather than writing a separate test function for each scenario, a single test loops over a table of named test cases (commonly run via t.Run(name, ...) as subtests), keeping the testing logic DRY while still reporting failures per individual case with clear identification.',
    tags: ['testing', 'table-driven-tests', 'idioms']
  },
  {
    id: 'go-040',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the "go vet" tool?',
    options: [
      'It formats Go source code identically to gofmt',
      'It statically analyzes Go source code for suspicious constructs that compile successfully but are likely bugs, such as incorrect Printf format verbs or unreachable code',
      'It manages third-party dependency versions',
      'It is used exclusively to run unit tests'
    ],
    correctAnswer: 'It statically analyzes Go source code for suspicious constructs that compile successfully but are likely bugs, such as incorrect Printf format verbs or unreachable code',
    explanation: 'go vet examines Go source for common mistakes the compiler doesn\u2019t catch (mismatched fmt verb/argument types, struct tags that don\u2019t parse correctly, suspicious lock copying, unreachable code), serving as an additional automated correctness check often run as part of CI alongside go build and go test.',
    tags: ['tooling', 'go-vet', 'static-analysis']
  },
  {
    id: 'go-041',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the standard library\'s "net/http" package\'s http.Handler interface?',
    options: [
      'It defines the single contract (ServeHTTP(ResponseWriter, *Request)) that anything capable of handling an HTTP request must implement, allowing middleware, routers, and handlers to compose uniformly around this shared interface',
      'It is used exclusively for making outgoing HTTP client requests, never serving them',
      'It requires inheriting from a base Handler struct rather than implementing a method',
      'It can only be implemented by the built-in http.ServeMux type'
    ],
    correctAnswer: 'It defines the single contract (ServeHTTP(ResponseWriter, *Request)) that anything capable of handling an HTTP request must implement, allowing middleware, routers, and handlers to compose uniformly around this shared interface',
    explanation: 'Because http.Handler is just a one-method interface, any type (including ordinary functions adapted via http.HandlerFunc) implementing ServeHTTP(w http.ResponseWriter, r *http.Request) can be used as a handler, which is what enables the simple, composable middleware pattern common in Go web servers, wrapping one Handler around another.',
    tags: ['net/http', 'interfaces', 'web-servers']
  },
  {
    id: 'go-042',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the blank identifier "_" do in Go, particularly when used as an import like `import _ "github.com/lib/pq"`?',
    options: [
      'It causes a compile error since unused imports are always disallowed in Go, with no exceptions',
      'It discards a value the language requires you to handle syntactically (e.g., an unwanted return value), and when used on an import, it imports the package purely for its side effects (its init() function), without making its exported identifiers directly usable',
      'It is used to declare a private variable accessible only within the file',
      'It marks a function as deprecated'
    ],
    correctAnswer: 'It discards a value the language requires you to handle syntactically (e.g., an unwanted return value), and when used on an import, it imports the package purely for its side effects (its init() function), without making its exported identifiers directly usable',
    explanation: 'The blank identifier lets you syntactically satisfy Go\u2019s requirement to assign every return value or named import without actually using it; a common pattern is "blank importing" a database driver package solely so its init() function registers itself with the database/sql package, even though the importing file never directly references any of its exported names.',
    tags: ['blank-identifier', 'imports', 'idioms']
  },
  {
    id: 'go-043',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the "init()" function in a Go package?',
    options: [
      'It must be called explicitly by the importing package to run',
      'It is automatically executed once before main() runs (or before the package is used, for non-main packages), commonly used for package-level setup like registering drivers or validating configuration',
      'It is invoked once per goroutine that uses the package',
      'It replaces the need for any package-level variable initialization'
    ],
    correctAnswer: 'It is automatically executed once before main() runs (or before the package is used, for non-main packages), commonly used for package-level setup like registering drivers or validating configuration',
    explanation: 'Any package can define one or more init() functions (even across multiple files), which the Go runtime automatically calls in a well-defined order (after package-level variable initialization, before main starts) without any explicit invocation needed, frequently used for self-registration patterns like database drivers.',
    tags: ['init-function', 'package-initialization']
  },
  {
    id: 'go-044',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between sync.Mutex and sync.RWMutex?',
    options: [
      'sync.Mutex provides exclusive locking for both reads and writes; sync.RWMutex allows multiple concurrent readers (via RLock) as long as no writer holds the lock, while still providing exclusive access for writers (via Lock), improving throughput for read-heavy workloads',
      'sync.RWMutex is always slower than sync.Mutex regardless of read/write ratio',
      'sync.Mutex allows multiple simultaneous writers while RWMutex does not',
      'They are functionally identical, differing only in method naming'
    ],
    correctAnswer: 'sync.Mutex provides exclusive locking for both reads and writes; sync.RWMutex allows multiple concurrent readers (via RLock) as long as no writer holds the lock, while still providing exclusive access for writers (via Lock), improving throughput for read-heavy workloads',
    explanation: 'For workloads dominated by reads with occasional writes, sync.RWMutex can significantly improve concurrency by letting many goroutines hold the read lock simultaneously, only serializing access when a writer needs exclusive access, whereas a plain sync.Mutex would unnecessarily serialize even purely read-only access.',
    tags: ['sync', 'mutex', 'rwmutex', 'concurrency']
  },
  {
    id: 'go-045',
    topic: 'go',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Security',
    question: 'Why are parameterized queries (using placeholder arguments with database/sql) preferred over building SQL strings via fmt.Sprintf with user input in Go?',
    options: [
      'fmt.Sprintf-built queries are always slower regardless of security concerns',
      'Parameterized queries separate the SQL command structure from bound argument data sent separately to the driver, so user input can never be interpreted as executable SQL, preventing SQL injection that string-formatted queries are vulnerable to',
      'database/sql automatically escapes any string built via fmt.Sprintf',
      'There is no security difference between the two approaches'
    ],
    correctAnswer: 'Parameterized queries separate the SQL command structure from bound argument data sent separately to the driver, so user input can never be interpreted as executable SQL, preventing SQL injection that string-formatted queries are vulnerable to',
    explanation: 'database/sql\u2019s Query/Exec methods accept placeholder syntax (e.g., $1 or ?, depending on driver) with separately passed arguments, which the underlying driver sends to the database as distinct parameters rather than concatenated text, fundamentally closing the SQL injection vector that naive fmt.Sprintf-based query building leaves wide open.',
    tags: ['security', 'sql-injection', 'database/sql']
  },

  // ===================== ADVANCED (40) =====================
  {
    id: 'go-046',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the Go scheduler\'s "M:N" model, and what do the terms G, M, and P refer to?',
    options: [
      'It refers to M goroutines mapped statically and permanently to N OS threads with no runtime flexibility',
      'It multiplexes many goroutines (G) onto a smaller number of OS threads (M), coordinated through logical processors (P) that hold local run queues, allowing the Go runtime to efficiently schedule lightweight goroutines without needing one OS thread per goroutine',
      'G, M, and P stand for Garbage collector, Memory allocator, and Pointer respectively',
      'It is an outdated model no longer used by the current Go runtime'
    ],
    correctAnswer: 'It multiplexes many goroutines (G) onto a smaller number of OS threads (M), coordinated through logical processors (P) that hold local run queues, allowing the Go runtime to efficiently schedule lightweight goroutines without needing one OS thread per goroutine',
    explanation: 'The Go scheduler\u2019s GMP model lets potentially hundreds of thousands of cheap goroutines (G) run cooperatively across a much smaller pool of OS threads (M), with logical Processors (P, typically matching GOMAXPROCS) owning local goroutine run queues and enabling work-stealing between Ps to balance load, which is fundamental to Go\u2019s lightweight concurrency model.',
    tags: ['scheduler', 'goroutines', 'internals']
  },
  {
    id: 'go-047',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between cooperative and preemptive scheduling as it applies to the evolution of the Go runtime scheduler?',
    options: [
      'Go has always used fully preemptive, OS-thread-style scheduling identical to traditional operating systems since its initial release',
      'Early Go versions relied largely on cooperative scheduling, where a goroutine yields at specific points (function calls, channel operations, GC safepoints), meaning a tight CPU-bound loop with no function calls could starve other goroutines on the same P; Go 1.14 introduced asynchronous preemption, allowing the runtime to interrupt long-running goroutines even without explicit yield points',
      'Preemptive scheduling was removed entirely in modern Go versions for performance reasons',
      'Cooperative and preemptive scheduling are interchangeable terms with no practical difference in Go'
    ],
    correctAnswer: 'Early Go versions relied largely on cooperative scheduling, where a goroutine yields at specific points (function calls, channel operations, GC safepoints), meaning a tight CPU-bound loop with no function calls could starve other goroutines on the same P; Go 1.14 introduced asynchronous preemption, allowing the runtime to interrupt long-running goroutines even without explicit yield points',
    explanation: 'Before asynchronous preemption, a tight loop with no function calls (and thus no scheduling checkpoints) could monopolize its P indefinitely, starving other goroutines and even delaying garbage collection; Go 1.14 addressed this using OS signals to interrupt such goroutines at arbitrary points, significantly improving scheduling fairness and GC latency for previously pathological workloads.',
    tags: ['scheduler', 'preemption', 'internals']
  },
  {
    id: 'go-048',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of GOMAXPROCS, and what happens if it is set higher than the number of available CPU cores?',
    options: [
      'GOMAXPROCS controls the maximum number of goroutines that can ever be created in the program',
      'GOMAXPROCS sets the number of OS threads (M) that can simultaneously execute Go code (the number of logical processors, P); setting it higher than available cores doesn\u2019t add real parallelism beyond the hardware\u2019s capability and can increase contention/context-switching overhead for CPU-bound work',
      'It controls the size of the garbage collector\u2019s heap',
      'It has no practical effect and is purely a legacy, unused setting'
    ],
    correctAnswer: 'GOMAXPROCS sets the number of OS threads (M) that can simultaneously execute Go code (the number of logical processors, P); setting it higher than available cores doesn\u2019t add real parallelism beyond the hardware\u2019s capability and can increase contention/context-switching overhead for CPU-bound work',
    explanation: 'GOMAXPROCS bounds how many Ps (and thus how many goroutines can run truly in parallel, as opposed to merely concurrently) the runtime uses; by default it matches the number of logical CPUs, and overriding it higher than actual hardware parallelism mostly adds scheduling overhead for CPU-bound workloads rather than genuine speedup, though it can sometimes help I/O-bound workloads with many blocked goroutines.',
    tags: ['scheduler', 'gomaxprocs', 'performance']
  },
  {
    id: 'go-049',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is Go\'s "escape analysis", and how does it influence whether a value is allocated on the stack or the heap?',
    options: [
      'Escape analysis is a runtime garbage collection phase, not a compile-time process',
      'The compiler statically determines whether a value\u2019s lifetime could "escape" the function in which it is created (e.g., its address is returned, stored in a global, or captured by a goroutine/closure outliving the function); values that don\u2019t escape can be safely allocated on the stack (cheap, automatically reclaimed), while values that do escape must be heap-allocated and managed by the garbage collector',
      'Escape analysis only applies to slices, never to other value types',
      'Every value in Go is always heap-allocated regardless of escape analysis results'
    ],
    correctAnswer: 'The compiler statically determines whether a value\u2019s lifetime could "escape" the function in which it is created (e.g., its address is returned, stored in a global, or captured by a goroutine/closure outliving the function); values that don\u2019t escape can be safely allocated on the stack (cheap, automatically reclaimed), while values that do escape must be heap-allocated and managed by the garbage collector',
    explanation: 'Go\u2019s compiler performs escape analysis (viewable via "go build -gcflags=-m") to avoid unnecessary heap allocations and GC pressure; for example, returning a pointer to a local struct forces it to escape to the heap since its lifetime must outlast the function call, while a value only used locally and never referenced externally can stay on the stack, which is significantly cheaper to allocate and free.',
    tags: ['escape-analysis', 'memory', 'performance', 'internals']
  },
  {
    id: 'go-050',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'Why might an unexpectedly high number of heap allocations in a hot path (revealed via profiling) be caused by passing a struct as an interface{} or via a non-generic function relying on interfaces?',
    options: [
      'Interfaces never cause additional heap allocations under any circumstance',
      'Converting a concrete value into an interface value typically requires boxing it (storing the value\u2019s data alongside type information), which often forces an otherwise stack-allocatable value to escape to the heap, especially for values that don\u2019t fit directly in the interface\u2019s internal word-sized data slot',
      'This issue only occurs with pointer types, never with value types',
      'Interface conversions are always optimized away entirely by the compiler with zero allocation cost'
    ],
    correctAnswer: 'Converting a concrete value into an interface value typically requires boxing it (storing the value\u2019s data alongside type information), which often forces an otherwise stack-allocatable value to escape to the heap, especially for values that don\u2019t fit directly in the interface\u2019s internal word-sized data slot',
    explanation: 'When a concrete value is assigned to an interface variable (e.g., passed to a function expecting interface{}/any, or fmt.Println(myStruct)), the runtime generally needs to store a pointer to the value alongside its type descriptor; for values larger than a machine word, this typically requires heap allocation, which is why hot paths heavily using interfaces (logging, generic-style helper functions before generics) can show surprisingly high allocation counts under profiling, motivating either avoiding unnecessary interface conversions in hot paths or using Go generics instead.',
    tags: ['performance', 'interfaces', 'escape-analysis', 'allocations']
  },
  {
    id: 'go-051',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of Go\'s concurrent, tri-color mark-and-sweep garbage collector, and what is the significance of the "write barrier"?',
    options: [
      'The GC runs entirely stop-the-world for its full duration with no concurrent phases',
      'The collector marks reachable objects (white/gray/black coloring) largely concurrently with running goroutines to minimize pause times; a write barrier is inserted by the compiler around pointer writes during the concurrent marking phase to ensure the GC doesn\u2019t miss objects that become reachable through a pointer write happening while marking is in progress, preserving correctness',
      'Write barriers are used only in single-threaded Go programs, never in concurrent ones',
      'The tri-color algorithm refers to three separate garbage collectors that run independently'
    ],
    correctAnswer: 'The collector marks reachable objects (white/gray/black coloring) largely concurrently with running goroutines to minimize pause times; a write barrier is inserted by the compiler around pointer writes during the concurrent marking phase to ensure the GC doesn\u2019t miss objects that become reachable through a pointer write happening while marking is in progress, preserving correctness',
    explanation: 'Go\u2019s GC performs most of its marking work concurrently alongside application goroutines (mutators) to keep stop-the-world pauses extremely short (typically sub-millisecond); since application code can mutate pointers while marking is ongoing, the compiler inserts write barriers that intercept pointer writes to maintain the tri-color invariant (no black object points directly to a white object without an intervening gray), which is essential for the collector to correctly identify all reachable objects despite running concurrently.',
    tags: ['garbage-collection', 'internals', 'concurrency']
  },
  {
    id: 'go-052',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'What does the GOGC environment variable/runtime setting control, and what is the trade-off in tuning it?',
    options: [
      'It sets the absolute maximum heap size in megabytes',
      'It controls the target heap growth ratio between garbage collection cycles (e.g., the default 100 means the GC triggers roughly when live heap size has doubled since the last collection); a higher GOGC reduces GC frequency/CPU overhead at the cost of higher peak memory usage, while a lower GOGC trades more frequent collection (more CPU) for a smaller memory footprint',
      'It disables garbage collection entirely when set to any value',
      'It only affects goroutine scheduling, not memory management'
    ],
    correctAnswer: 'It controls the target heap growth ratio between garbage collection cycles (e.g., the default 100 means the GC triggers roughly when live heap size has doubled since the last collection); a higher GOGC reduces GC frequency/CPU overhead at the cost of higher peak memory usage, while a lower GOGC trades more frequent collection (more CPU) for a smaller memory footprint',
    explanation: 'GOGC expresses the heap growth target as a percentage of the live heap size at the end of the previous collection; tuning it is a direct CPU-vs-memory trade-off, and modern Go also offers GOMEMLIMIT as a complementary soft memory cap mechanism, particularly useful in constrained container environments where bounding absolute memory usage matters more than the relative growth ratio.',
    tags: ['garbage-collection', 'gogc', 'performance', 'tuning']
  },
  {
    id: 'go-053',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'What subtle bug exists in this worker pool implementation regarding goroutine leaks?\n\nfunc process(ctx context.Context, jobs <-chan int) {\n  for {\n    select {\n    case j := <-jobs:\n      handle(j)\n    }\n  }\n}',
    options: [
      'There is no bug since the select statement always terminates correctly',
      'The select only has a single case (reading from jobs) with no ctx.Done() case, so this goroutine can never be canceled via context and will leak indefinitely if the jobs channel is never closed or if the caller wants to abort early; it should include a case <-ctx.Done(): return',
      'select cannot be used inside a for loop in Go',
      'jobs <-chan int is invalid syntax for a receive-only channel parameter'
    ],
    correctAnswer: 'The select only has a single case (reading from jobs) with no ctx.Done() case, so this goroutine can never be canceled via context and will leak indefinitely if the jobs channel is never closed or if the caller wants to abort early; it should include a case <-ctx.Done(): return',
    explanation: 'A goroutine blocked forever on a channel receive with no escape path is a classic Go goroutine leak; properly cooperative cancellation requires also selecting on ctx.Done() and returning when it fires, ensuring the goroutine can be torn down promptly when the context is canceled rather than lingering indefinitely, consuming memory and potentially holding other resources.',
    tags: ['goroutines', 'goroutine-leaks', 'context', 'gotchas']
  },
  {
    id: 'go-054',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is a common cause of goroutine leaks in Go production services, and how would you detect one?',
    options: [
      'Goroutine leaks are impossible since the Go garbage collector always reclaims unused goroutines automatically',
      'A goroutine blocked indefinitely on a channel operation (waiting to send to or receive from a channel that will never be ready, with no cancellation path) never terminates and accumulates over time; detection involves monitoring runtime.NumGoroutine() over time for unbounded growth, or capturing goroutine profiles (via net/http/pprof\u2019s /debug/pprof/goroutine endpoint) to inspect stuck goroutine stack traces',
      'Goroutine leaks only occur due to compiler bugs, never application code issues',
      'The race detector automatically prevents all goroutine leaks'
    ],
    correctAnswer: 'A goroutine blocked indefinitely on a channel operation (waiting to send to or receive from a channel that will never be ready, with no cancellation path) never terminates and accumulates over time; detection involves monitoring runtime.NumGoroutine() over time for unbounded growth, or capturing goroutine profiles (via net/http/pprof\u2019s /debug/pprof/goroutine endpoint) to inspect stuck goroutine stack traces',
    explanation: 'Unlike memory, goroutines aren\u2019t garbage collected merely for being unreachable in the traditional sense; a goroutine stuck forever on a blocking channel operation simply persists, consuming its stack memory indefinitely; production services commonly expose pprof\u2019s goroutine profile endpoint to capture a snapshot of all goroutine stack traces, immediately revealing which code paths have many goroutines piled up at the same blocking point.',
    tags: ['concurrency', 'goroutine-leaks', 'debugging', 'pprof']
  },
  {
    id: 'go-055',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of golang.org/x/sync/errgroup, and how does it improve upon manually managing a sync.WaitGroup for concurrent operations that can fail?',
    options: [
      'errgroup.Group lets you launch multiple goroutines, automatically collecting the first non-nil error returned by any of them, and (when used with errgroup.WithContext) automatically cancels a shared context for the remaining goroutines once one fails, simplifying fail-fast concurrent workflows compared to manually wiring WaitGroup, a mutex-protected error variable, and a separate cancellation mechanism',
      'errgroup replaces channels entirely for all concurrent communication',
      'errgroup automatically retries failed goroutines indefinitely',
      'errgroup is only usable for exactly two concurrent goroutines at a time'
    ],
    correctAnswer: 'errgroup.Group lets you launch multiple goroutines, automatically collecting the first non-nil error returned by any of them, and (when used with errgroup.WithContext) automatically cancels a shared context for the remaining goroutines once one fails, simplifying fail-fast concurrent workflows compared to manually wiring WaitGroup, a mutex-protected error variable, and a separate cancellation mechanism',
    explanation: 'errgroup bundles together the common pattern of launching several goroutines that each return an error, waiting for all to complete, and surfacing the first failure, while errgroup.WithContext additionally derives a cancellable context that automatically cancels as soon as any goroutine returns an error, letting sibling goroutines observe ctx.Done() and abort early, which substantially reduces the manual plumbing otherwise needed.',
    tags: ['concurrency', 'errgroup', 'error-handling']
  },
  {
    id: 'go-056',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the Go memory model\'s "happens-before" relationship, and why does it matter for correctly synchronizing goroutines?',
    options: [
      'It formally defines the conditions under which a write to a variable in one goroutine is guaranteed to be visible to a read in another goroutine; without an established happens-before relationship (via channels, mutexes, sync/atomic, etc.), the compiler and CPU are free to reorder operations, meaning unsynchronized shared variable access has no visibility guarantee even if it appears to "work" in testing',
      'It only describes the order in which goroutines are created, not memory visibility',
      'Happens-before only applies to single-goroutine programs',
      'Go guarantees full sequential consistency for all variable accesses with no explicit synchronization required'
    ],
    correctAnswer: 'It formally defines the conditions under which a write to a variable in one goroutine is guaranteed to be visible to a read in another goroutine; without an established happens-before relationship (via channels, mutexes, sync/atomic, etc.), the compiler and CPU are free to reorder operations, meaning unsynchronized shared variable access has no visibility guarantee even if it appears to "work" in testing',
    explanation: 'The Go memory model specifies particular happens-before guarantees, such as a send on a channel happening-before the corresponding receive completes, or unlocking a sync.Mutex happening-before a subsequent lock of the same mutex; relying on shared variable access outside of these documented guarantees is undefined behavior, even if it happens to behave correctly under a particular compiler version, architecture, or test run, which is why the race detector and explicit synchronization primitives are essential rather than optional best practices.',
    tags: ['concurrency', 'memory-model', 'happens-before']
  },
  {
    id: 'go-057',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'What is wrong with this implementation of a thread-safe counter using sync/atomic, given concurrent calls to Increment()?\n\ntype Counter struct {\n  value int64\n}\nfunc (c *Counter) Increment() {\n  c.value = c.value + 1\n}\nfunc (c *Counter) Get() int64 {\n  return atomic.LoadInt64(&c.value)\n}',
    options: [
      'Increment() performs a non-atomic read-modify-write on c.value, creating a data race when called concurrently from multiple goroutines, despite Get() correctly using an atomic load; Increment() must use atomic.AddInt64(&c.value, 1) instead',
      'Get() is the actual bug since atomic.LoadInt64 cannot be used on a struct field',
      'There is no bug; mixing atomic and non-atomic operations on the same variable is always safe',
      'int64 cannot be used with the sync/atomic package at all'
    ],
    correctAnswer: 'Increment() performs a non-atomic read-modify-write on c.value, creating a data race when called concurrently from multiple goroutines, despite Get() correctly using an atomic load; Increment() must use atomic.AddInt64(&c.value, 1) instead',
    explanation: 'A plain "c.value = c.value + 1" involves a separate read and write that is not atomic, so concurrent calls can interleave and lose updates (a classic data race), even though Get() correctly uses an atomic load; consistently using atomic operations (atomic.AddInt64 for the increment, matching the atomic load in Get) for every access to a shared variable is required for correctness, since mixing atomic and non-atomic access to the same memory location is itself a race.',
    tags: ['concurrency', 'sync/atomic', 'race-conditions', 'gotchas']
  },
  {
    id: 'go-058',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of sync.Once, and what is a common production use case?',
    options: [
      'It ensures a given function executes exactly once across however many goroutines call its Do() method concurrently, commonly used for thread-safe lazy initialization of a singleton resource (like a database connection pool or parsed configuration) without requiring manual double-checked locking',
      'It allows a function to be called exactly once total across the entire history of the program, persisted even across restarts',
      'It is a deprecated type replaced entirely by sync.Mutex',
      'It limits a function to being called once per second'
    ],
    correctAnswer: 'It ensures a given function executes exactly once across however many goroutines call its Do() method concurrently, commonly used for thread-safe lazy initialization of a singleton resource (like a database connection pool or parsed configuration) without requiring manual double-checked locking',
    explanation: 'sync.Once.Do(f) guarantees f runs exactly once even if many goroutines call Do concurrently, with all callers blocking until the first call completes; this elegantly solves the classic lazy-singleton-initialization race condition that would otherwise require manually implementing (and getting right) double-checked locking with explicit memory barriers.',
    tags: ['sync', 'sync.Once', 'concurrency', 'singleton']
  },
  {
    id: 'go-059',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between a Go method set defined with a value receiver versus a pointer receiver, in terms of which interfaces a type satisfies?',
    options: [
      'A type T\u2019s method set includes only methods with value receivers; the method set of *T includes both value-receiver and pointer-receiver methods; this means a value of type T does NOT satisfy an interface requiring a pointer-receiver method, only *T does',
      'Value receivers and pointer receivers always produce identical method sets with no distinction for interface satisfaction',
      'Pointer receiver methods can never be part of any interface\u2019s method set',
      'Only interfaces, never concrete types, have a "method set" concept in Go'
    ],
    correctAnswer: 'A type T\u2019s method set includes only methods with value receivers; the method set of *T includes both value-receiver and pointer-receiver methods; this means a value of type T does NOT satisfy an interface requiring a pointer-receiver method, only *T does',
    explanation: 'This is a frequent source of confusing compile errors: if a type implements an interface method using a pointer receiver, only *T (not a bare T value) satisfies that interface, since Go\u2019s addressability rules mean a non-addressable value of type T cannot automatically have its address taken to call the pointer-receiver method in all contexts, particularly when stored in an interface variable.',
    tags: ['method-sets', 'interfaces', 'pointers', 'gotchas']
  },
  {
    id: 'go-060',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of Go\'s "context" key collision avoidance pattern, where context values are typically retrieved using a custom unexported type as the key rather than a plain string?',
    options: [
      'It is purely a stylistic convention with absolutely no functional purpose',
      'Using an unexported custom type (rather than a built-in string) as a context key prevents accidental key collisions between unrelated packages that might otherwise use the same string literal as a key, since each package\u2019s unexported type is distinct even if the underlying value happens to be identical',
      'Context values can only be retrieved using exported types, never unexported ones',
      'It is required because context.Context cannot store string-keyed values at all'
    ],
    correctAnswer: 'Using an unexported custom type (rather than a built-in string) as a context key prevents accidental key collisions between unrelated packages that might otherwise use the same string literal as a key, since each package\u2019s unexported type is distinct even if the underlying value happens to be identical',
    explanation: 'context.WithValue stores values keyed by an interface{} comparison of (type, value), so two different packages both using the plain string "userID" as a key would collide and potentially overwrite or shadow each other\u2019s values; defining a private, package-specific type (e.g., type ctxKey int; const userIDKey ctxKey = 0) guarantees the key is unique across the entire program regardless of what other packages might choose as their own keys.',
    tags: ['context', 'idioms', 'gotchas']
  },
  {
    id: 'go-061',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the danger of storing request-scoped data like a context.Context as a struct field rather than passing it explicitly through function parameters?',
    options: [
      'There is no danger; storing context as a struct field is the idiomatic, recommended Go pattern',
      'A context stored in a struct can easily become stale, shared incorrectly across multiple unrelated requests/goroutines that reuse the same struct instance, or accidentally leak cancellation/deadline behavior from one logical operation into another that should be independent; idiomatic Go instead threads ctx as an explicit first parameter through call chains',
      'Storing context in a struct causes a compile-time error',
      'Context values stored in a struct automatically propagate cancellation to all goroutines using that struct, eliminating the need to pass it explicitly'
    ],
    correctAnswer: 'A context stored in a struct can easily become stale, shared incorrectly across multiple unrelated requests/goroutines that reuse the same struct instance, or accidentally leak cancellation/deadline behavior from one logical operation into another that should be independent; idiomatic Go instead threads ctx as an explicit first parameter through call chains',
    explanation: 'The Go documentation explicitly recommends against storing Contexts inside struct types, instead passing a ctx context.Context parameter explicitly through every function in the call chain that needs it; embedding context in a long-lived struct risks accidentally reusing a stale or canceled context across multiple logically distinct operations sharing that struct instance, a subtle correctness hazard especially in long-lived services or object pools.',
    tags: ['context', 'idioms', 'gotchas']
  },
  {
    id: 'go-062',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of Go\'s build constraints (build tags), such as `//go:build linux`?',
    options: [
      'They are used exclusively to disable compiler optimizations',
      'They conditionally include or exclude specific files from compilation based on the target operating system, architecture, Go version, or custom-defined tags, enabling platform-specific implementations behind a shared interface',
      'They control which functions are exported from a package',
      'They are deprecated and have no effect in modern Go versions'
    ],
    correctAnswer: 'They conditionally include or exclude specific files from compilation based on the target operating system, architecture, Go version, or custom-defined tags, enabling platform-specific implementations behind a shared interface',
    explanation: 'Build constraints let a package provide different implementations of the same functionality per platform (e.g., file_linux.go, file_windows.go) or behind custom feature flags passed via "go build -tags", with the build system automatically selecting the appropriate file(s) for the target, a pattern heavily used in the standard library for OS-specific syscall wrappers.',
    tags: ['build-tags', 'cross-platform', 'tooling']
  },
  {
    id: 'go-063',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of CGO, and what trade-offs does enabling it introduce for cross-compilation and deployment?',
    options: [
      'CGO has no impact on cross-compilation since Go always statically links everything regardless',
      'CGO allows Go code to call C libraries directly, enabling reuse of existing C code/system libraries, but it disables straightforward cross-compilation (since it requires a C toolchain and matching C libraries for the target platform) and typically produces a dynamically linked binary depending on libc, complicating deployment to minimal container images',
      'CGO is required for all network I/O operations in Go',
      'Enabling CGO always improves binary performance with no downsides'
    ],
    correctAnswer: 'CGO allows Go code to call C libraries directly, enabling reuse of existing C code/system libraries, but it disables straightforward cross-compilation (since it requires a C toolchain and matching C libraries for the target platform) and typically produces a dynamically linked binary depending on libc, complicating deployment to minimal container images',
    explanation: 'While pure Go binaries (CGO_ENABLED=0) can be trivially cross-compiled into small, statically linked executables ideal for minimal scratch/distroless container images, enabling CGO (often needed for certain DNS resolution behavior or specific C-based libraries) introduces a dependency on a C compiler at build time and typically a dynamic link to libc at runtime, requiring a compatible base image and complicating the otherwise simple "single static binary" deployment story Go is known for.',
    tags: ['cgo', 'cross-compilation', 'deployment']
  },
  {
    id: 'go-064',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of pprof in Go, and what types of profiles does it commonly provide?',
    options: [
      'pprof is a code formatting tool unrelated to performance analysis',
      'pprof is Go\u2019s built-in profiling toolkit, capable of capturing CPU profiles (where time is spent executing), heap/memory profiles (where allocations occur), goroutine profiles (stuck/blocked goroutine stacks), and mutex/block profiles (contention), typically exposed via net/http/pprof for live production inspection or captured programmatically for offline analysis',
      'pprof can only analyze pre-compiled binaries, never running processes',
      'pprof is a third-party tool with no integration into the standard Go toolchain'
    ],
    correctAnswer: 'pprof is Go\u2019s built-in profiling toolkit, capable of capturing CPU profiles (where time is spent executing), heap/memory profiles (where allocations occur), goroutine profiles (stuck/blocked goroutine stacks), and mutex/block profiles (contention), typically exposed via net/http/pprof for live production inspection or captured programmatically for offline analysis',
    explanation: 'Importing net/http/pprof (often blank-imported for its side-effect of registering debug routes) exposes a set of HTTP endpoints under /debug/pprof/ that can be queried live in production to capture CPU, heap, goroutine, block, and mutex profiles, which can then be visualized and analyzed with "go tool pprof", making performance investigation a first-class, low-friction capability of the standard toolchain.',
    tags: ['pprof', 'profiling', 'performance', 'tooling']
  },
  {
    id: 'go-065',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Why might enabling mutex and block profiling (runtime.SetMutexProfileFraction / runtime.SetBlockProfileRate) reveal a performance bottleneck that a CPU profile alone would miss?',
    options: [
      'CPU profiles already capture all time spent blocked waiting on locks or channels, making mutex/block profiles redundant',
      'A CPU profile only samples goroutines that are actively executing on a CPU; time spent blocked waiting to acquire a contended mutex or waiting on a channel operation is invisible to a CPU profile (since the goroutine isn\u2019t running), so mutex/block profiling is needed specifically to surface contention-related latency that doesn\u2019t consume CPU cycles',
      'Mutex profiling can only be enabled at compile time, never at runtime',
      'Block profiling only works for network I/O, never for channel or mutex operations'
    ],
    correctAnswer: 'A CPU profile only samples goroutines that are actively executing on a CPU; time spent blocked waiting to acquire a contended mutex or waiting on a channel operation is invisible to a CPU profile (since the goroutine isn\u2019t running), so mutex/block profiling is needed specifically to surface contention-related latency that doesn\u2019t consume CPU cycles',
    explanation: 'A service that appears to have low CPU utilization but poor throughput is a classic sign of contention rather than computation cost; since a blocked goroutine consumes no CPU time and is thus invisible to standard CPU sampling profiles, the dedicated mutex and block profilers (which track time spent waiting on synchronization primitives) are essential tools for diagnosing this specific class of performance problem.',
    tags: ['pprof', 'profiling', 'concurrency', 'performance']
  },
  {
    id: 'go-066',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of the Functional Options pattern in Go, commonly seen as `NewServer(opts ...Option)`?',
    options: [
      'It is used to disable specific functions at compile time',
      'It provides a flexible, extensible way to configure a struct with many optional parameters by passing variadic functions that each mutate the struct being built, avoiding both telescoping constructors and large, rigid configuration structs while remaining backward-compatible as new options are added',
      'It is identical in purpose and implementation to Go generics',
      'It can only be used for configuring HTTP servers, with no other application'
    ],
    correctAnswer: 'It provides a flexible, extensible way to configure a struct with many optional parameters by passing variadic functions that each mutate the struct being built, avoiding both telescoping constructors and large, rigid configuration structs while remaining backward-compatible as new options are added',
    explanation: 'Since Go lacks default parameter values or named arguments, the functional options pattern (each Option being a func(*Server) that mutates the struct being constructed) is the idiomatic solution for APIs needing many optional, independently combinable configuration knobs, and crucially, adding a new WithX() option later is a fully backward-compatible API change, unlike adding a new positional constructor parameter.',
    tags: ['design-patterns', 'functional-options', 'api-design']
  },
  {
    id: 'go-067',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of accepting interfaces and returning concrete (struct) types in Go API design, often summarized as "accept interfaces, return structs"?',
    options: [
      'It means every public function must declare its own custom interface type for every parameter',
      'Accepting interfaces as parameters maximizes flexibility for callers (who can pass any conforming implementation, including mocks for testing), while returning concrete types gives callers full access to all of that type\u2019s exported methods and fields, avoiding the need for type assertions and keeping the package\u2019s implementation details from being unnecessarily obscured behind an interface the package itself defines',
      'It means interfaces should never be used as return types under any circumstance, full stop',
      'It is a Go-specific compiler requirement, not merely a design convention'
    ],
    correctAnswer: 'Accepting interfaces as parameters maximizes flexibility for callers (who can pass any conforming implementation, including mocks for testing), while returning concrete types gives callers full access to all of that type\u2019s exported methods and fields, avoiding the need for type assertions and keeping the package\u2019s implementation details from being unnecessarily obscured behind an interface the package itself defines',
    explanation: 'This widely cited Go idiom encourages designing function/method signatures so that input parameters are as general (interface-typed) as the function actually needs, maximizing caller flexibility and testability, while return values are concrete types exposing their full API surface to callers rather than artificially narrowing it behind an interface defined by the producing package, which (per Go convention) is better defined by the consuming package only where genuinely needed.',
    tags: ['api-design', 'interfaces', 'idioms']
  },
  {
    id: 'go-068',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of the Go "Repository" pattern combined with interfaces, in a layered application architecture?',
    options: [
      'It eliminates the need for a database entirely',
      'A repository interface defines data-access operations (e.g., GetUser(id) / SaveUser(u)) that business logic depends on, while concrete implementations (e.g., a PostgreSQL-backed repository) satisfy that interface; this decouples business logic from a specific persistence technology and allows tests to substitute an in-memory fake implementation without needing a real database',
      'It can only be implemented using an ORM, never raw SQL',
      'It is identical to the Singleton design pattern'
    ],
    correctAnswer: 'A repository interface defines data-access operations (e.g., GetUser(id) / SaveUser(u)) that business logic depends on, while concrete implementations (e.g., a PostgreSQL-backed repository) satisfy that interface; this decouples business logic from a specific persistence technology and allows tests to substitute an in-memory fake implementation without needing a real database',
    explanation: 'Because Go interfaces are satisfied structurally and are typically defined by the consumer (the business logic package) rather than the implementer (the database package), defining a small repository interface where it\u2019s used, then injecting a concrete implementation (real database, or a simple in-memory fake for tests) is a natural fit for Go\u2019s composition-oriented design philosophy, enabling fast, dependency-free unit tests for business logic.',
    tags: ['design-patterns', 'repository-pattern', 'testing']
  },
  {
    id: 'go-069',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of the io.Reader and io.Writer interfaces, and why are they considered foundational to Go\'s standard library design?',
    options: [
      'They are specialized interfaces used only for file I/O, with networking and in-memory buffers using entirely separate, unrelated interfaces',
      'They define minimal, single-method contracts (Read([]byte) (int, error) and Write([]byte) (int, error)) that allow vastly different data sources/sinks (files, network connections, in-memory buffers, compressors, hashers) to be composed interchangeably, since any function that consumes an io.Reader can operate identically regardless of where the bytes actually originate',
      'They require every implementing type to also implement a Close() method',
      'They are deprecated in favor of generics-based stream types'
    ],
    correctAnswer: 'They define minimal, single-method contracts (Read([]byte) (int, error) and Write([]byte) (int, error)) that allow vastly different data sources/sinks (files, network connections, in-memory buffers, compressors, hashers) to be composed interchangeably, since any function that consumes an io.Reader can operate identically regardless of where the bytes actually originate',
    explanation: 'Because io.Reader/io.Writer are deliberately minimal interfaces, an enormous range of standard library and third-party types satisfy them (os.File, net.Conn, bytes.Buffer, gzip.Reader, crypto hash functions via io.Writer, etc.), letting code like io.Copy(dst, src) work uniformly across wildly different underlying implementations, a textbook demonstration of how small, well-designed interfaces enable broad composability in Go.',
    tags: ['io', 'interfaces', 'standard-library', 'design']
  },
  {
    id: 'go-070',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of the "Adapter" pattern as it commonly appears in Go, e.g., wrapping a plain function to satisfy an interface, such as http.HandlerFunc?',
    options: [
      'http.HandlerFunc is a defined function type with a ServeHTTP method on itself, allowing an ordinary function matching the right signature to be converted into something satisfying the http.Handler interface without needing to define a separate named struct type, a lightweight adapter pattern enabled by Go\u2019s ability to define methods on any named type, including function types',
      'It is used only to adapt third-party C libraries via CGO',
      'It requires defining a full struct with multiple fields for every adaptation',
      'It is identical to embedding and provides no distinct capability'
    ],
    correctAnswer: 'http.HandlerFunc is a defined function type with a ServeHTTP method on itself, allowing an ordinary function matching the right signature to be converted into something satisfying the http.Handler interface without needing to define a separate named struct type, a lightweight adapter pattern enabled by Go\u2019s ability to define methods on any named type, including function types',
    explanation: 'type HandlerFunc func(ResponseWriter, *Request), with a single method func (f HandlerFunc) ServeHTTP(w, r) { f(w, r) }, is a minimal, elegant adapter that lets a plain function literal be used wherever an http.Handler is expected, illustrating how Go\u2019s ability to attach methods to any defined type (not just structs) enables lightweight functional adapters without verbose wrapper struct boilerplate.',
    tags: ['design-patterns', 'adapter', 'net/http', 'idioms']
  },
  {
    id: 'go-071',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'What is the output, and what does it reveal about Go map iteration?\n\nm := map[string]int{"a": 1, "b": 2, "c": 3}\nfor k := range m {\n  fmt.Print(k)\n}',
    options: [
      'It always prints "abc" in that exact order',
      'It always prints "cba" in reverse alphabetical order',
      'The output order is intentionally randomized by the Go runtime on each execution, and code must never rely on map iteration order for correctness; if a stable order is needed, keys should be extracted into a slice and explicitly sorted',
      'It is a compile error since maps cannot be ranged over without specifying both key and value'
    ],
    correctAnswer: 'The output order is intentionally randomized by the Go runtime on each execution, and code must never rely on map iteration order for correctness; if a stable order is needed, keys should be extracted into a slice and explicitly sorted',
    explanation: 'The Go specification explicitly states map iteration order is unspecified, and the runtime deliberately randomizes it across executions (and even across multiple ranges over the same map within one program) specifically to prevent developers from accidentally relying on undefined behavior; any code requiring deterministic ordering must explicitly collect and sort keys.',
    tags: ['maps', 'iteration', 'gotchas', 'output']
  },
  {
    id: 'go-072',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of sync.Pool, and what is a critical caveat regarding its use for caching expensive-to-create objects?',
    options: [
      'sync.Pool guarantees objects placed into it will remain available indefinitely until explicitly removed',
      'sync.Pool provides a way to reuse temporary objects to reduce GC pressure from frequent allocation/deallocation of short-lived objects (like buffers); critically, objects in the pool can be silently garbage collected at any time (notably between GC cycles), so it must never be used as a general-purpose persistent cache or for objects whose loss would cause incorrect behavior, only as an optimization for otherwise-discardable temporary objects',
      'sync.Pool is a deprecated type with no remaining valid use case in modern Go',
      'sync.Pool automatically resets all fields of pooled objects to their zero value before reuse'
    ],
    correctAnswer: 'sync.Pool provides a way to reuse temporary objects to reduce GC pressure from frequent allocation/deallocation of short-lived objects (like buffers); critically, objects in the pool can be silently garbage collected at any time (notably between GC cycles), so it must never be used as a general-purpose persistent cache or for objects whose loss would cause incorrect behavior, only as an optimization for otherwise-discardable temporary objects',
    explanation: 'sync.Pool is purpose-built specifically for reducing allocation churn of temporary objects (a very common use is pooling bytes.Buffer or similar scratch buffers), and the runtime is explicitly permitted to clear the pool entirely during garbage collection; relying on it for anything where losing a pooled item would be a correctness issue (rather than just a performance regression requiring recreation) is a misuse of the API.',
    tags: ['sync', 'sync.Pool', 'performance', 'gotchas']
  },
  {
    id: 'go-073',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Why is reusing a bytes.Buffer or similar object obtained from sync.Pool dangerous if it isn\'t explicitly reset before being placed back into the pool?',
    options: [
      'sync.Pool automatically clears the contents of any object returned to it via Put()',
      'If stale data (e.g., leftover bytes from a previous use) isn\u2019t cleared before the object is returned to the pool, the next caller retrieving it via Get() can observe unexpected leftover state, potentially leaking sensitive data from a previous, unrelated operation into a new context or causing subtle correctness bugs',
      'bytes.Buffer cannot be used with sync.Pool under any circumstances',
      'This is never a concern since each goroutine gets its own private copy of the pool'
    ],
    correctAnswer: 'If stale data (e.g., leftover bytes from a previous use) isn\u2019t cleared before the object is returned to the pool, the next caller retrieving it via Get() can observe unexpected leftover state, potentially leaking sensitive data from a previous, unrelated operation into a new context or causing subtle correctness bugs',
    explanation: 'sync.Pool performs no automatic cleanup of object state; it is the caller\u2019s responsibility to explicitly reset an object (e.g., buf.Reset()) before calling Put(), since otherwise a subsequent Get() by an entirely unrelated goroutine can retrieve an object still containing residual data from its previous use, which is both a subtle correctness bug and, in security-sensitive contexts (e.g., reusing a buffer that held one user\u2019s data for a different user\u2019s request), a potential information disclosure risk.',
    tags: ['sync', 'sync.Pool', 'security', 'gotchas']
  },
  {
    id: 'go-074',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of explicitly setting timeouts on an http.Client and http.Server in Go, rather than relying on defaults?',
    options: [
      'The default http.Client and http.Server already have safe, production-ready timeouts configured out of the box',
      'The zero-value http.Client has no default timeout at all, meaning a hung connection can block indefinitely; similarly, http.Server without explicit ReadTimeout/WriteTimeout/IdleTimeout settings is vulnerable to slow client attacks (like Slowloris) that hold connections open indefinitely, exhausting server resources',
      'Timeouts are purely cosmetic and have no effect on resource exhaustion or resilience',
      'Setting timeouts on http.Server automatically configures matching timeouts on every http.Client used by the application'
    ],
    correctAnswer: 'The zero-value http.Client has no default timeout at all, meaning a hung connection can block indefinitely; similarly, http.Server without explicit ReadTimeout/WriteTimeout/IdleTimeout settings is vulnerable to slow client attacks (like Slowloris) that hold connections open indefinitely, exhausting server resources',
    explanation: 'A commonly cited Go production gotcha is that http.DefaultClient (and a zero-value &http.Client{}) has no timeout configured by default, meaning a single unresponsive server can hang a request goroutine forever; symmetrically, an http.Server with unset timeout fields is susceptible to resource-exhaustion attacks from clients that open connections and send data extremely slowly, which is why explicit, conservative timeout configuration on both client and server sides is considered essential production hardening.',
    tags: ['net/http', 'production', 'timeouts', 'security']
  },
  {
    id: 'go-075',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of graceful shutdown using http.Server\'s Shutdown() method, combined with signal handling?',
    options: [
      'Shutdown() forcibly terminates all in-flight requests immediately upon being called, identical to closing the listener directly',
      'Shutdown() stops the server from accepting new connections while allowing currently in-flight requests to complete (up to a configurable context deadline), enabling clean termination without abruptly cutting off active clients when the process receives a termination signal (e.g., SIGTERM from an orchestrator like Kubernetes)',
      'Shutdown() is identical to os.Exit() and bypasses all deferred cleanup',
      'It is only relevant for HTTPS servers, not plain HTTP'
    ],
    correctAnswer: 'Shutdown() stops the server from accepting new connections while allowing currently in-flight requests to complete (up to a configurable context deadline), enabling clean termination without abruptly cutting off active clients when the process receives a termination signal (e.g., SIGTERM from an orchestrator like Kubernetes)',
    explanation: 'Production Go services typically listen for SIGTERM/SIGINT via os/signal, then call server.Shutdown(ctx) with a bounded timeout context, which stops accepting new connections and waits for active handlers to finish (or the deadline to expire) before returning, allowing orchestrators like Kubernetes to cleanly drain traffic from a pod before terminating it during deployments or scaling events.',
    tags: ['net/http', 'graceful-shutdown', 'production']
  },
  {
    id: 'go-076',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of the "context" package\'s value propagation being limited to request-scoped metadata, and why is it considered an anti-pattern to pass optional function parameters through context.Value()?',
    options: [
      'context.Value() lookups are statically typed and checked at compile time, making this concern irrelevant',
      'context.Value() lookups are dynamically typed (returning interface{}) and unchecked at compile time, making misuse easy to introduce (wrong type assertions, typos in keys) and hard to discover via static analysis or IDE tooling; using context purely to smuggle optional parameters (rather than genuinely cross-cutting, request-scoped data like trace IDs or deadlines) obscures a function\u2019s actual dependencies and makes its API harder to understand and test',
      'context.Value() can only store a single value per Context, making it unsuitable for any use case',
      'There is no real downside; using context.Value() for all parameters is the recommended idiomatic Go style'
    ],
    correctAnswer: 'context.Value() lookups are dynamically typed (returning interface{}) and unchecked at compile time, making misuse easy to introduce (wrong type assertions, typos in keys) and hard to discover via static analysis or IDE tooling; using context purely to smuggle optional parameters (rather than genuinely cross-cutting, request-scoped data like trace IDs or deadlines) obscures a function\u2019s actual dependencies and makes its API riskier and harder to understand and test',
    explanation: 'The Go documentation explicitly recommends reserving context values for genuinely request-scoped, cross-cutting data that transits process and API boundaries (like a trace ID or auth token), rather than as a general-purpose mechanism for passing arbitrary optional parameters, since doing so trades compile-time type safety and explicit function signatures for a loosely typed, implicit dependency that is easy to misuse and difficult to refactor confidently.',
    tags: ['context', 'idioms', 'api-design']
  },
  {
    id: 'go-077',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of structured logging libraries like log/slog (introduced in Go\'s standard library) compared to the older basic log package?',
    options: [
      'slog only writes logs to a fixed file location with no configurability',
      'slog provides structured, key-value-pair log output (suitable for machine parsing in log aggregation systems) along with log levels and pluggable handlers (e.g., for JSON or text formatting), addressing the older log package\u2019s limitation of producing only unstructured, freeform text strings',
      'slog and the original log package are functionally completely identical with different import paths',
      'slog can only be used for error-level logs, never informational logs'
    ],
    correctAnswer: 'slog provides structured, key-value-pair log output (suitable for machine parsing in log aggregation systems) along with log levels and pluggable handlers (e.g., for JSON or text formatting), addressing the older log package\u2019s limitation of producing only unstructured, freeform text strings',
    explanation: 'Production observability tooling generally needs structured (often JSON) log output with consistent key-value fields for filtering and aggregation; log/slog was added to the standard library specifically to provide this natively (with leveled logging and pluggable Handler implementations), reducing reliance on third-party structured logging libraries that were previously necessary to fill this gap.',
    tags: ['logging', 'slog', 'observability', 'standard-library']
  },
  {
    id: 'go-078',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of fuzz testing, introduced as a native go test feature in Go 1.18 (FuzzXxx functions)?',
    options: [
      'Fuzz testing only checks code formatting compliance, not behavior',
      'Fuzz testing automatically generates a wide range of (often unusual or edge-case) inputs based on seed corpus values, feeding them to the function under test to discover panics, crashes, or other unexpected behavior that example-based unit tests might never think to cover, particularly valuable for input-parsing or validation code',
      'Fuzz testing requires a fully external paid service and cannot run locally',
      'Fuzz testing is identical to benchmark testing (BenchmarkXxx functions)'
    ],
    correctAnswer: 'Fuzz testing automatically generates a wide range of (often unusual or edge-case) inputs based on seed corpus values, feeding them to the function under test to discover panics, crashes, or other unexpected behavior that example-based unit tests might never think to cover, particularly valuable for input-parsing or validation code',
    explanation: 'Native Go fuzzing (go test -fuzz=FuzzXxx) mutates seed inputs and explores the input space looking for crashes, panics, or failed property assertions, automatically saving any failing input to a corpus directory for regression testing; this is especially valuable for functions parsing untrusted external input (file formats, network protocols, user-supplied strings), where exhaustively hand-writing every edge case as a unit test is impractical.',
    tags: ['testing', 'fuzz-testing', 'go1.18']
  },
  {
    id: 'go-079',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of golang.org/x/tools/go/analysis-based static analyzers and linters like staticcheck, beyond what go vet already catches?',
    options: [
      'They duplicate exactly what go vet checks, providing no additional value',
      'They implement additional, often more opinionated or comprehensive checks (unused code, simplifiable expressions, common API misuse patterns, deprecated function usage) beyond go vet\u2019s narrower, conservative bug-detection scope, commonly integrated into CI pipelines to enforce broader code quality standards',
      'They can only analyze code that has already been deployed to production, never source code directly',
      'They require modifying the Go compiler itself to function'
    ],
    correctAnswer: 'They implement additional, often more opinionated or comprehensive checks (unused code, simplifiable expressions, common API misuse patterns, deprecated function usage) beyond go vet\u2019s narrower, conservative bug-detection scope, commonly integrated into CI pipelines to enforce broader code quality standards',
    explanation: 'go vet deliberately stays conservative, only flagging constructs it is highly confident are bugs; third-party tools like staticcheck build on the same analysis framework but apply a much broader, more opinionated set of checks (covering style, performance, deprecated API usage, and more subtle correctness issues), commonly run as part of CI alongside go vet and go test to maintain higher overall code quality at scale.',
    tags: ['static-analysis', 'linting', 'tooling', 'code-quality']
  },
  {
    id: 'go-080',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of the "internal" package convention in Go (e.g., a directory literally named internal/)?',
    options: [
      'It is purely a naming suggestion with no compiler-enforced behavior',
      'Any package under a path segment named "internal" can only be imported by code rooted at the parent of that internal directory, providing compiler-enforced encapsulation of implementation details that should not be part of a module\u2019s public API, distinct from the simpler unexported-identifier visibility rule',
      'It marks a package as deprecated and scheduled for removal',
      'It is only relevant for packages published to a public module proxy, not private modules'
    ],
    correctAnswer: 'Any package under a path segment named "internal" can only be imported by code rooted at the parent of that internal directory, providing compiler-enforced encapsulation of implementation details that should not be part of a module\u2019s public API, distinct from the simpler unexported-identifier visibility rule',
    explanation: 'Unlike the lowercase-identifier visibility rule (which operates at the per-symbol level within a single package), the internal/ directory convention is enforced by the Go toolchain itself at the package-import level: any package whose import path contains an internal segment can only be imported by packages rooted at or below the directory containing that internal segment, providing a coarser, compiler-checked mechanism for hiding entire packages from external consumers of a module.',
    tags: ['packages', 'internal-packages', 'encapsulation']
  },
  {
    id: 'go-081',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between Go\'s "minimal version selection" (MVS) dependency resolution algorithm and the typical "newest compatible version" approach used by many other package managers?',
    options: [
      'MVS always selects the absolute newest version of every dependency available, identical to most other ecosystems',
      'MVS selects, for each dependency, the minimum version that satisfies all requirements stated across the entire module graph (i.e., the highest version requested by any module in the build), favoring reproducibility and avoiding unexpected upgrades that a "always fetch latest compatible" resolver might introduce',
      'MVS ignores version constraints entirely and uses only the first version found',
      'MVS only applies to the root module\u2019s direct dependencies, never transitive ones'
    ],
    correctAnswer: 'MVS selects, for each dependency, the minimum version that satisfies all requirements stated across the entire module graph (i.e., the highest version requested by any module in the build), favoring reproducibility and avoiding unexpected upgrades that a "always fetch latest compatible" resolver might introduce',
    explanation: 'Go modules deliberately favor predictability over automatically grabbing the newest available version: MVS computes, for each module, the maximum version requested by any module.mod in the dependency graph (which is also the minimum version guaranteed to satisfy everyone\u2019s stated requirement), meaning builds remain stable and reproducible unless a developer explicitly runs "go get" to bump a version, rather than silently picking up newly published releases on every build.',
    tags: ['go-modules', 'dependency-management', 'mvs']
  },
  {
    id: 'go-082',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of Go\'s "replace" directive in go.mod, and what is a common production caveat about its use?',
    options: [
      'It permanently changes the public registry version of a published module for all consumers',
      'It allows substituting a different source (e.g., a local filesystem path, a fork, or a different version) for a given module during the build, commonly used for local development against an unreleased dependency change or applying a temporary patch; however, replace directives only apply to the main module being built, not when that module is imported as a dependency by someone else, and accidentally leaving a local-path replace in committed code breaks builds for downstream consumers',
      'It is used exclusively for replacing the Go compiler version itself',
      'It has no effect once "go build" is run; it only affects "go test"'
    ],
    correctAnswer: 'It allows substituting a different source (e.g., a local filesystem path, a fork, or a different version) for a given module during the build, commonly used for local development against an unreleased dependency change or applying a temporary patch; however, replace directives only apply to the main module being built, not when that module is imported as a dependency by someone else, and accidentally leaving a local-path replace in committed code breaks builds for downstream consumers',
    explanation: 'The replace directive is a powerful local override mechanism (e.g., "replace example.com/lib => ../local-lib" for testing unpublished changes), but a critical caveat is that replace directives in a go.mod are entirely ignored when that module is consumed as a dependency by another project; accidentally committing a local filesystem path replace is a common mistake that breaks the module for anyone who imports it, since their build won\u2019t have that local path available.',
    tags: ['go-modules', 'replace-directive', 'gotchas']
  },
  {
    id: 'go-083',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of error wrapping with %w in fmt.Errorf, and how does it differ from simply embedding the error message as a plain string with %v?',
    options: [
      '%w and %v produce byte-for-byte identical results in every respect',
      '%w preserves a reference to the original wrapped error (accessible via the Unwrap() method, which errors.Is/errors.As traverse), allowing callers to programmatically inspect the underlying cause even through layers of added context; %v only embeds the error\u2019s textual message, losing the ability to programmatically identify or unwrap the original error',
      '%w can only be used with built-in error types, never custom ones',
      '%v is the modern, recommended approach while %w is deprecated'
    ],
    correctAnswer: '%w preserves a reference to the original wrapped error (accessible via the Unwrap() method, which errors.Is/errors.As traverse), allowing callers to programmatically inspect the underlying cause even through layers of added context; %v only embeds the error\u2019s textual message, losing the ability to programmatically identify or unwrap the original error',
    explanation: 'Using fmt.Errorf("failed to fetch user: %w", err) produces an error whose Unwrap() method returns the original err, preserving the ability for callers further up the call stack to use errors.Is(returnedErr, sql.ErrNoRows) or similar checks even after additional contextual messages have been layered on; using %v instead flattens everything into an opaque string, irrecoverably losing that structured error chain.',
    tags: ['errors', 'error-wrapping', 'fmt.Errorf']
  },
  {
    id: 'go-084',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Why does Go intentionally lack traditional exceptions for ordinary control flow, and what trade-off does this design decision involve?',
    options: [
      'Go actually does have exceptions identical to Java/Python; this is a common misconception',
      'Go\u2019s designers chose explicit, multi-value error returns over exceptions to make control flow and failure paths visible directly in the code at every call site, avoiding "invisible" exception propagation paths; the trade-off is more verbose code (frequent "if err != nil" checks) compared to exception-based languages, which Go\u2019s designers consider an acceptable cost for the resulting explicitness and predictability',
      'Go lacks exceptions purely due to a compiler limitation that prevents stack unwinding',
      'panic/recover is functionally and philosophically identical to exceptions, so there is no real design distinction'
    ],
    correctAnswer: 'Go\u2019s designers chose explicit, multi-value error returns over exceptions to make control flow and failure paths visible directly in the code at every call site, avoiding "invisible" exception propagation paths; the trade-off is more verbose code (frequent "if err != nil" checks) compared to exception-based languages, which Go\u2019s designers consider an acceptable cost for the resulting explicitness and predictability',
    explanation: 'This is a deliberate, often-debated language design choice: Go favors making every potential failure point explicitly visible in the calling code (at the cost of repetitive boilerplate) over the more compact but less locally-visible control flow of exceptions, where a function call deep in a try block can silently jump execution to a distant catch block; the language designers consider this trade-off worthwhile for the resulting code clarity about exactly where and how errors are handled.',
    tags: ['error-handling', 'language-design', 'philosophy']
  },
  {
    id: 'go-085',
    topic: 'go',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of the "Strategy" design pattern applied via Go interfaces, e.g., for supporting multiple payment processing backends?',
    options: [
      'It hardcodes a single payment algorithm with no possibility of substitution',
      'Each payment backend (Stripe, PayPal, bank transfer) implements a shared, narrow PaymentProcessor interface (e.g., Charge(amount) error); business logic depends only on this interface, letting the concrete implementation be selected/injected at runtime without conditional branching scattered throughout the codebase, and easily substituted with a mock for testing',
      'It is identical in purpose to the Singleton pattern',
      'It requires every payment backend to share the exact same struct fields'
    ],
    correctAnswer: 'Each payment backend (Stripe, PayPal, bank transfer) implements a shared, narrow PaymentProcessor interface (e.g., Charge(amount) error); business logic depends only on this interface, letting the concrete implementation be selected/injected at runtime without conditional branching scattered throughout the codebase, and easily substituted with a mock for testing',
    explanation: 'Go\u2019s structural interfaces make the Strategy pattern especially lightweight: business logic depends on a small, consumer-defined interface, and any backend (real or a test double) that happens to implement Charge(amount) error works seamlessly, without conditional logic selecting between providers, in keeping with Go\u2019s broader composition-over-inheritance design philosophy.',
    tags: ['design-patterns', 'strategy', 'interfaces']
  },

  // ===================== MNC (35) =====================
  {
    id: 'go-086',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'You are designing a Go-based API gateway expected to handle 100,000 requests/sec with strict p99 latency requirements. What combination of choices would you prioritize?',
    options: [
      'Run with default GOMAXPROCS and GOGC settings and a single replica for simplicity',
      'Tune GOMAXPROCS/GOGC (or GOMEMLIMIT) appropriately for the container\u2019s resource limits, use connection pooling and HTTP keep-alive for downstream calls, bound goroutine concurrency to avoid unbounded resource usage under load, horizontally scale stateless instances behind a load balancer, and continuously monitor GC pause times alongside p99 latency',
      'Disable the garbage collector entirely to remove pause-related latency',
      'Use a single massive instance with no horizontal scaling whatsoever'
    ],
    correctAnswer: 'Tune GOMAXPROCS/GOGC (or GOMEMLIMIT) appropriately for the container\u2019s resource limits, use connection pooling and HTTP keep-alive for downstream calls, bound goroutine concurrency to avoid unbounded resource usage under load, horizontally scale stateless instances behind a load balancer, and continuously monitor GC pause times alongside p99 latency',
    explanation: 'High-throughput, latency-sensitive Go services benefit from explicit runtime tuning matched to the deployment environment (container cgroup limits, GOMEMLIMIT for soft memory caps), reused connections to downstream dependencies to avoid handshake overhead, bounded goroutine fan-out (e.g., via worker pools or semaphores) to prevent runaway resource consumption under bursty load, horizontal scaling for elasticity, and ongoing observability into both GC behavior and tail latency, since Go\u2019s defaults are reasonable but rarely optimal for demanding production workloads.',
    tags: ['system-design', 'performance', 'scalability', 'tuning']
  },
  {
    id: 'go-087',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'Your Go service shows periodic latency spikes correlating with GC activity, even though average heap utilization appears healthy. How would you diagnose and address this?',
    options: [
      'Increase GOGC to an extremely high value without any further investigation',
      'Capture and analyze GC traces (via GODEBUG=gctrace=1 or a pprof heap profile over time), identify whether allocation rate or live heap size is driving frequent collections, look for unnecessary allocations in hot paths (e.g., via interface boxing or unintended escapes), and consider tuning GOGC/GOMEMLIMIT or reducing allocation pressure directly in the code',
      'Disable the garbage collector permanently using an unsupported runtime flag',
      'Restart the process on a fixed schedule as the sole production mitigation strategy'
    ],
    correctAnswer: 'Capture and analyze GC traces (via GODEBUG=gctrace=1 or a pprof heap profile over time), identify whether allocation rate or live heap size is driving frequent collections, look for unnecessary allocations in hot paths (e.g., via interface boxing or unintended escapes), and consider tuning GOGC/GOMEMLIMIT or reducing allocation pressure directly in the code',
    explanation: 'GC trace output reveals the actual pause distribution and what is triggering each cycle (heap growth ratio vs. forced collection); since Go\u2019s GC overhead scales with allocation rate, the most effective root-cause fix is often reducing unnecessary allocations in hot paths (revealed via heap profiling and escape analysis), with GOGC/GOMEMLIMIT tuning as a complementary lever rather than a substitute for addressing excessive allocation.',
    tags: ['performance', 'garbage-collection', 'debugging', 'pprof']
  },
  {
    id: 'go-088',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a distributed rate limiter for a Go-based API gateway running across many stateless service instances?',
    options: [
      'Track counts in a package-level Go map within each instance independently',
      'Use a centralized, atomic store like Redis (INCR + EXPIRE, or a Lua-scripted sliding window algorithm) accessible from all instances, since each instance\u2019s in-process state is invisible to its siblings behind a load balancer',
      'Have each instance independently decide limits with absolutely no coordination',
      'Rely entirely on the client to self-report and enforce its own rate limit'
    ],
    correctAnswer: 'Use a centralized, atomic store like Redis (INCR + EXPIRE, or a Lua-scripted sliding window algorithm) accessible from all instances, since each instance\u2019s in-process state is invisible to its siblings behind a load balancer',
    explanation: 'Since each Go service instance maintains independent process memory, an in-process counter (even a thread-safe one using sync/atomic) only limits traffic hitting that specific instance; a shared, atomic external store ensures the rate limit is enforced consistently across the entire fleet regardless of which instance a given request lands on.',
    tags: ['system-design', 'rate-limiting', 'distributed-systems', 'redis']
  },
  {
    id: 'go-089',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'What subtle bug exists in this caching code, and how would you fix it for production correctness?\n\nvar cache = map[string]int{}\nfunc Get(key string) int {\n  if v, ok := cache[key]; ok {\n    return v\n  }\n  v := computeExpensive(key)\n  cache[key] = v\n  return v\n}',
    options: [
      'Plain Go maps are not safe for concurrent read/write access; calling Get() from multiple goroutines simultaneously can cause a fatal "concurrent map read and map write" runtime crash; fix by protecting access with a sync.RWMutex or using sync.Map',
      'Go maps automatically serialize concurrent access with no additional code needed',
      'The bug is that map literals cannot be declared at package scope',
      'computeExpensive() must return a pointer, not a value, for this code to compile'
    ],
    correctAnswer: 'Plain Go maps are not safe for concurrent read/write access; calling Get() from multiple goroutines simultaneously can cause a fatal "concurrent map read and map write" runtime crash; fix by protecting access with a sync.RWMutex or using sync.Map',
    explanation: 'Unlike some languages where maps merely risk silent corruption, Go\u2019s built-in map implementation includes a runtime check that detects concurrent unsynchronized access and deliberately crashes the program with a fatal error (not a recoverable panic) to surface the bug loudly; production-safe concurrent caching requires either explicit locking (sync.RWMutex, allowing concurrent reads) or the specialized sync.Map type designed for concurrent-safe access patterns.',
    tags: ['concurrency', 'maps', 'race-conditions', 'gotchas']
  },
  {
    id: 'go-090',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design idempotent payment-processing endpoints in a Go service to safely handle client retries on network timeouts?',
    options: [
      'Disable client-side retries entirely as the sole mitigation',
      'Require an Idempotency-Key header, persist the key alongside the operation\u2019s outcome within the same database transaction before returning a response, and on detecting a duplicate key (via a unique constraint), return the originally stored response instead of reprocessing the payment',
      'Rely solely on auto-incrementing database IDs to detect duplicates after the fact',
      'Generate a fresh idempotency key server-side on every incoming request'
    ],
    correctAnswer: 'Require an Idempotency-Key header, persist the key alongside the operation\u2019s outcome within the same database transaction before returning a response, and on detecting a duplicate key (via a unique constraint), return the originally stored response instead of reprocessing the payment',
    explanation: 'A client-generated idempotency key, atomically checked and recorded (typically via a unique database constraint) within the same transaction as the payment operation, lets the server safely recognize and short-circuit a retried request by returning the original outcome, preventing double-charging when the client cannot determine whether its original request actually succeeded.',
    tags: ['system-design', 'idempotency', 'payments']
  },
  {
    id: 'go-091',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a circuit breaker for outgoing HTTP calls from a Go microservice to an unreliable downstream dependency?',
    options: [
      'Retry every failed call indefinitely with no backoff',
      'Use a circuit breaker library (e.g., sony/gobreaker) to track per-dependency failure rates; once a configured failure threshold is exceeded, the circuit "opens" to fail fast without invoking the dependency, periodically transitions to "half-open" to test a limited number of trial requests, and fully "closes" again once the dependency proves healthy',
      'Block all outgoing calls application-wide after a single failure of any dependency',
      'Silently swallow all errors and always return a hardcoded successful response'
    ],
    correctAnswer: 'Use a circuit breaker library (e.g., sony/gobreaker) to track per-dependency failure rates; once a configured failure threshold is exceeded, the circuit "opens" to fail fast without invoking the dependency, periodically transitions to "half-open" to test a limited number of trial requests, and fully "closes" again once the dependency proves healthy',
    explanation: 'Circuit breaker libraries implement the classic closed/open/half-open state machine wrapped around a specific dependency call, preventing cascading failures by quickly failing requests to a known-unhealthy dependency rather than letting every caller block on slow timeouts, while periodically probing to automatically restore normal traffic once the dependency recovers.',
    tags: ['system-design', 'circuit-breaker', 'resilience']
  },
  {
    id: 'go-092',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you architect a multi-tenant SaaS Go application to ensure strict data isolation between tenants while sharing application infrastructure?',
    options: [
      'Store every tenant\u2019s data in one unscoped table relying solely on application code remembering to filter by tenant',
      'Combine a centrally enforced tenant-scoping mechanism (a middleware-derived tenant context threaded explicitly through repository function calls, never trusting a client-supplied tenant ID) with database-level defense-in-depth such as row-level security or schema-per-tenant for especially sensitive tenants',
      'Give every tenant a fully separate Go binary deployment with absolutely no shared infrastructure',
      'Trust a tenant_id field included directly in the client\u2019s request body without server-side verification'
    ],
    correctAnswer: 'Combine a centrally enforced tenant-scoping mechanism (a middleware-derived tenant context threaded explicitly through repository function calls, never trusting a client-supplied tenant ID) with database-level defense-in-depth such as row-level security or schema-per-tenant for especially sensitive tenants',
    explanation: 'Relying solely on disciplined application code to always remember to filter by tenant is fragile against a single missed query causing a cross-tenant data leak; deriving the tenant identifier from authenticated context (e.g., extracted from a verified JWT claim by middleware, then explicitly passed through repository calls per Go\u2019s context-passing idioms) combined with database-level isolation provides robust defense-in-depth.',
    tags: ['system-design', 'multi-tenancy', 'security']
  },
  {
    id: 'go-093',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'What is wrong with this HTTP handler from a production-readiness perspective?\n\nfunc usersHandler(w http.ResponseWriter, r *http.Request) {\n  users, _ := db.Query("SELECT * FROM users")\n  json.NewEncoder(w).Encode(users)\n}',
    options: [
      'Nothing; this is production-ready as written',
      'The error from db.Query is silently discarded, the result set is never explicitly closed (risking connection pool exhaustion), there is no pagination on an unbounded query, and SELECT * directly exposes internal schema/columns without an explicit response DTO',
      'json.NewEncoder cannot be used directly with an http.ResponseWriter',
      'db.Query() always returns nil for SELECT statements'
    ],
    correctAnswer: 'The error from db.Query is silently discarded, the result set is never explicitly closed (risking connection pool exhaustion), there is no pagination on an unbounded query, and SELECT * directly exposes internal schema/columns without an explicit response DTO',
    explanation: 'Discarding the error with "_" hides query failures entirely (the handler would then try to encode a nil/zero-value result, often returning an empty or malformed response with no visible failure signal); forgetting rows.Close() (typically deferred immediately after a successful query) leaks a connection from the pool on every call; an unbounded SELECT * risks unconstrained result sets and unintentionally exposes the table\u2019s full column set directly to clients rather than an explicit, versioned response shape.',
    tags: ['production', 'database/sql', 'error-handling', 'gotchas']
  },
  {
    id: 'go-094',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a reliable background job processing system in Go to ensure no job is silently lost if a worker process crashes mid-execution?',
    options: [
      'Store pending jobs only in an in-memory Go channel within the application process',
      'Use a durable, externally persisted queue (e.g., a database-backed job table, RabbitMQ, or Kafka with consumer offset tracking) where a job is only marked complete after successful processing, configure visibility timeouts/redelivery so a crashed worker\u2019s job becomes available again, and route repeatedly-failing jobs to a dead-letter destination for investigation',
      'Process all jobs synchronously within the originating HTTP request to avoid needing any queue at all',
      'Rely on a cron job polling the database with no locking, accepting duplicate processing as an unavoidable cost'
    ],
    correctAnswer: 'Use a durable, externally persisted queue (e.g., a database-backed job table, RabbitMQ, or Kafka with consumer offset tracking) where a job is only marked complete after successful processing, configure visibility timeouts/redelivery so a crashed worker\u2019s job becomes available again, and route repeatedly-failing jobs to a dead-letter destination for investigation',
    explanation: 'An in-memory Go channel is entirely lost on process crash or restart, making it unsuitable as the durable system of record for important background work; reliability requires the queue itself to persist job state externally, acknowledging completion only after successful processing so a crashed worker\u2019s in-flight job becomes eligible for redelivery, with bounded retries and a dead-letter mechanism preventing both job loss and infinite poison-pill loops.',
    tags: ['system-design', 'queues', 'reliability']
  },
  {
    id: 'go-095',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'Why might a Go service get OOM-killed in Kubernetes despite seemingly reasonable memory usage according to runtime.MemStats?',
    options: [
      'OOM kills only ever happen due to disk space exhaustion, never memory pressure',
      'Prior to GOMEMLIMIT being properly configured, the Go runtime\u2019s GC pacing is based on GOGC\u2019s relative heap growth target, not an absolute memory ceiling, so under bursty allocation, live heap plus uncollected garbage plus runtime overhead (goroutine stacks, off-heap structures) can exceed the container\u2019s cgroup memory limit before the next GC cycle has a chance to run, triggering an OOM kill even though the process would have settled to a lower steady-state usage given more time',
      'Kubernetes ignores memory limits specifically for Go applications',
      'runtime.MemStats always reports memory usage identical to the OS-level RSS with zero discrepancy'
    ],
    correctAnswer: 'Prior to GOMEMLIMIT being properly configured, the Go runtime\u2019s GC pacing is based on GOGC\u2019s relative heap growth target, not an absolute memory ceiling, so under bursty allocation, live heap plus uncollected garbage plus runtime overhead (goroutine stacks, off-heap structures) can exceed the container\u2019s cgroup memory limit before the next GC cycle has a chance to run, triggering an OOM kill even though the process would have settled to a lower steady-state usage given more time',
    explanation: 'A common production incident pattern occurs when a Go service experiences a sudden allocation burst (e.g., processing an unusually large request) that pushes total memory usage past the container limit before GOGC\u2019s relative growth-ratio-based pacing triggers a collection; setting GOMEMLIMIT to a value comfortably below the container\u2019s hard limit gives the runtime an explicit soft memory target it actively works to stay under, providing a safety margin that GOGC alone (being purely relative, not absolute) cannot guarantee.',
    tags: ['jvm', 'go-runtime', 'kubernetes', 'memory', 'gomemlimit']
  },
  {
    id: 'go-096',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design schema-compatible, zero-downtime rolling deployments for a Go service backed by a relational database, where a column needs to be renamed?',
    options: [
      'Rename the column in a single migration and deploy the new code simultaneously, accepting a brief outage window',
      'Apply the expand-contract pattern: add the new column while retaining the old one, deploy code that dual-writes both and reads from the new column with fallback, backfill historical data, and only drop the old column in a later, separate deployment once all instances are confirmed running the new code',
      'Skip database migrations entirely and handle the rename purely through application-level field mapping with no schema change',
      'Manually edit the schema directly through a GUI tool during live traffic with no migration tooling involved'
    ],
    correctAnswer: 'Apply the expand-contract pattern: add the new column while retaining the old one, deploy code that dual-writes both and reads from the new column with fallback, backfill historical data, and only drop the old column in a later, separate deployment once all instances are confirmed running the new code',
    explanation: 'During a rolling deployment, old and new instances of the Go service may run concurrently against the same database for a window of time; a direct rename would break whichever version expects the prior schema, so the expand-contract pattern decomposes the change into safe, backward-compatible steps tolerating both versions coexisting before finally removing the deprecated column.',
    tags: ['system-design', 'database', 'migrations', 'zero-downtime']
  },
  {
    id: 'go-097',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'A Go application accepts user-supplied XML and parses it with the encoding/xml package. What is the most critical category of vulnerability to consider, and how does Go\'s standard library compare to other languages here?',
    options: [
      'XML External Entity (XXE) injection; Go\u2019s standard encoding/xml package does not, by default, resolve external entities or DTDs the way some other languages\u2019 XML parsers historically did, significantly reducing (though not eliminating) inherent XXE risk, but care should still be taken with any third-party XML libraries that might add such support',
      'SQL injection, mitigated identically regardless of parser choice',
      'There is no meaningful XML-specific risk in Go beyond standard input validation',
      'Cross-site scripting, mitigated by HTML-escaping XML output'
    ],
    correctAnswer: 'XML External Entity (XXE) injection; Go\u2019s standard encoding/xml package does not, by default, resolve external entities or DTDs the way some other languages\u2019 XML parsers historically did, significantly reducing (though not eliminating) inherent XXE risk, but care should still be taken with any third-party XML libraries that might add such support',
    explanation: 'While XXE is a notorious vulnerability class in many languages\u2019 default XML parser configurations, Go\u2019s standard library encoding/xml does not, by default, fetch and resolve external entities, providing inherently safer default behavior than some historically vulnerable parsers in other ecosystems; nonetheless, defense-in-depth (validating input size, avoiding any third-party library that does add entity expansion, and treating all untrusted input cautiously) remains good practice.',
    tags: ['security', 'xxe', 'xml']
  },
  {
    id: 'go-098',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you diagnose and resolve a goroutine leak in a long-running Go service, given that goroutines accumulate over weeks of uptime without an obvious crash?',
    options: [
      'Increase the OS thread limit indefinitely until the process stops crashing',
      'Restart the service on an aggressive fixed schedule with no further investigation',
      'Monitor runtime.NumGoroutine() (or expose it via a metrics endpoint) for unbounded growth over time, capture goroutine profiles via pprof\u2019s /debug/pprof/goroutine endpoint at different points to compare stack traces, and identify the common blocking point (often an unclosed channel, a missing ctx.Done() case, or a forgotten WaitGroup.Done()) shared across the leaked goroutines',
      'Goroutine leaks are impossible in Go regardless of code structure'
    ],
    correctAnswer: 'Monitor runtime.NumGoroutine() (or expose it via a metrics endpoint) for unbounded growth over time, capture goroutine profiles via pprof\u2019s /debug/pprof/goroutine endpoint at different points to compare stack traces, and identify the common blocking point (often an unclosed channel, a missing ctx.Done() case, or a forgotten WaitGroup.Done()) shared across the leaked goroutines',
    explanation: 'Tracking the total goroutine count as a metric over time reveals whether it grows unboundedly (a leak) or stabilizes at a steady-state value; once growth is confirmed, a goroutine profile snapshot groups stuck goroutines by their shared stack trace, immediately pinpointing the specific blocking channel operation or missing cancellation path responsible, which is far more efficient than manually auditing the entire codebase for potential leaks.',
    tags: ['performance', 'goroutine-leaks', 'debugging', 'pprof', 'production']
  },
  {
    id: 'go-099',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a search feature for a Go-based e-commerce platform with millions of products, given that LIKE-based queries against the primary relational database scale poorly?',
    options: [
      'Add more database read replicas as the sole mitigation, keeping LIKE queries unchanged',
      'Offload full-text search to a dedicated search engine (Elasticsearch/OpenSearch) maintaining an inverted index, synchronize it asynchronously from the primary database (via change-data-capture or application-level events published on write), and have the Go service query the search engine directly for search requests rather than treating it as the system of record',
      'Cache LIKE query results indefinitely in application process memory across all instances',
      'Switch the primary database engine entirely solely to gain better LIKE performance'
    ],
    correctAnswer: 'Offload full-text search to a dedicated search engine (Elasticsearch/OpenSearch) maintaining an inverted index, synchronize it asynchronously from the primary database (via change-data-capture or application-level events published on write), and have the Go service query the search engine directly for search requests rather than treating it as the system of record',
    explanation: 'Wildcard LIKE queries generally cannot leverage standard B-tree indexes efficiently at scale; a purpose-built search engine\u2019s inverted index structure handles full-text relevance ranking and faceting far more efficiently, with the relational database remaining the authoritative source of truth and the search index kept eventually consistent through asynchronous synchronization from the Go application or a CDC pipeline.',
    tags: ['system-design', 'search', 'elasticsearch', 'scalability']
  },
  {
    id: 'go-100',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a distributed lock in Go using Redis to ensure a scheduled task runs on exactly one instance among many horizontally scaled replicas?',
    options: [
      'Use a package-level Go boolean flag, assuming only one instance will ever execute it',
      'Have each instance attempt an atomic SET key uniqueValue NX PX ttl against Redis; only the instance that successfully sets the key proceeds with the task, release the lock via a Lua script that verifies ownership (matching value) before deleting it, and rely on the TTL for automatic recovery if the lock holder crashes',
      'Have all instances run the scheduled task simultaneously and deduplicate results afterward',
      'Use an unexported package-level variable shared across all running instances'
    ],
    correctAnswer: 'Have each instance attempt an atomic SET key uniqueValue NX PX ttl against Redis; only the instance that successfully sets the key proceeds with the task, release the lock via a Lua script that verifies ownership (matching value) before deleting it, and rely on the TTL for automatic recovery if the lock holder crashes',
    explanation: 'Each replica is an independent process with no shared memory, so coordination must go through an external atomic store; Redis\u2019s SET ... NX with an expiry provides atomic, mutually exclusive lock acquisition, a unique value lets the holder safely verify ownership before release (typically via a Lua script for atomicity), and the TTL guards against indefinite lock holding if the owning instance crashes.',
    tags: ['system-design', 'distributed-locking', 'redis', 'scheduling']
  },
  {
    id: 'go-101',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'What concurrency bug does this inventory decrement code have, and what is the correct fix?\n\nrow := db.QueryRow("SELECT stock FROM products WHERE id=$1", id)\nvar stock int\nrow.Scan(&stock)\nif stock > 0 {\n  db.Exec("UPDATE products SET stock = $1 WHERE id = $2", stock-1, id)\n}',
    options: [
      'There is no bug since database/sql guarantees serialized execution of all queries automatically',
      'A classic check-then-act race condition allows two concurrent requests to both read the same stock value before either writes back, both decrementing as if safe, causing overselling; fix with an atomic UPDATE products SET stock = stock - 1 WHERE id = $1 AND stock > 0, checking the affected row count, or use an explicit transaction with row-level locking (SELECT ... FOR UPDATE)',
      'The bug is that QueryRow cannot be used with parameterized placeholders',
      'Adding more application server replicas automatically resolves this race condition'
    ],
    correctAnswer: 'A classic check-then-act race condition allows two concurrent requests to both read the same stock value before either writes back, both decrementing as if safe, causing overselling; fix with an atomic UPDATE products SET stock = stock - 1 WHERE id = $1 AND stock > 0, checking the affected row count, or use an explicit transaction with row-level locking (SELECT ... FOR UPDATE)',
    explanation: 'Reading a value in one statement and conditionally writing in a separate statement creates a window where concurrent requests can interleave on stale data; expressing the check-and-decrement as a single atomic UPDATE with a WHERE condition (and verifying the affected row count via RowsAffected()) or explicitly locking the row for a transaction\u2019s duration removes the race entirely at the database level.',
    tags: ['concurrency', 'race-conditions', 'database/sql', 'gotchas']
  },
  {
    id: 'go-102',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design observability (logging, metrics, distributed tracing) for a Go-based microservices architecture, where a single user action spans multiple services?',
    options: [
      'Rely solely on each service\u2019s local stdout logs with no aggregation or correlation',
      'Implement structured (JSON) logging via log/slog with a correlation/trace ID propagated across service boundaries through context.Context and HTTP headers, export application/business metrics via a Prometheus client library, and instrument requests with OpenTelemetry for distributed tracing across services',
      'Disable all logging in production for performance reasons',
      'Use exclusively pprof as the sole observability mechanism in production'
    ],
    correctAnswer: 'Implement structured (JSON) logging via log/slog with a correlation/trace ID propagated across service boundaries through context.Context and HTTP headers, export application/business metrics via a Prometheus client library, and instrument requests with OpenTelemetry for distributed tracing across services',
    explanation: 'Because each Go service request is independently executed, correlating a single logical user action across multiple services requires explicitly propagating a trace/correlation ID, idiomatically carried through context.Context and forwarded via HTTP headers on outgoing calls; combined with structured slog output, Prometheus metrics, and OpenTelemetry-based distributed tracing, this provides the cross-service visibility that isolated per-service stdout logs alone cannot achieve.',
    tags: ['system-design', 'observability', 'microservices', 'opentelemetry']
  },
  {
    id: 'go-103',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'Why can defensive over-use of panic/recover at every layer of a Go service\'s call stack create a reliability risk, despite recover() appearing to "catch" failures gracefully?',
    options: [
      'recover() inherently fixes the underlying bug that caused the panic, so there is never a downside',
      'Liberally recovering from panics at many layers can mask serious underlying bugs (corrupted state, programming errors) that should ideally crash and restart the process under supervision (e.g., a Kubernetes pod restart) rather than silently continuing in a potentially inconsistent state; idiomatic Go reserves recover() for well-defined boundaries (like top-level HTTP handler middleware preventing one request\u2019s panic from crashing the whole process) rather than as a general substitute for proper error handling',
      'recover() can only be called once per program execution, making widespread use impossible',
      'panic/recover has no performance or reliability implications regardless of how it is used'
    ],
    correctAnswer: 'Liberally recovering from panics at many layers can mask serious underlying bugs (corrupted state, programming errors) that should ideally crash and restart the process under supervision (e.g., a Kubernetes pod restart) rather than silently continuing in a potentially inconsistent state; idiomatic Go reserves recover() for well-defined boundaries (like top-level HTTP handler middleware preventing one request\u2019s panic from crashing the whole process) rather than as a general substitute for proper error handling',
    explanation: 'A panic typically indicates a genuine programming bug (nil pointer dereference, index out of range) rather than an expected, recoverable failure condition (which Go handles via explicit error returns instead); recovering from it at many nested layers can leave shared, long-lived state in a corrupted or inconsistent condition that silently propagates further bugs, which is why idiomatic Go limits recover() usage to well-understood isolation boundaries (such as per-request middleware in an HTTP server) rather than scattering it throughout business logic as a general safety net.',
    tags: ['panic', 'recover', 'reliability', 'production']
  },
  {
    id: 'go-104',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'A Go API endpoint computing a complex report takes 8 seconds, occasionally causing gateway timeouts. What architectural fix addresses this most robustly at scale, beyond just optimizing the underlying query?',
    options: [
      'Increase the client and gateway timeout indefinitely to match worst-case execution time',
      'Decouple report generation into an asynchronous job: the API immediately returns a job ID (202 Accepted), a worker goroutine pool or separate consumer service computes and stores the result, and the client polls a status endpoint or receives a webhook/WebSocket notification on completion, avoiding holding an HTTP handler goroutine for the full duration',
      'Simply add more application instances behind the load balancer with no other change',
      'Switch the endpoint from a JSON response to plain text as the primary fix'
    ],
    correctAnswer: 'Decouple report generation into an asynchronous job: the API immediately returns a job ID (202 Accepted), a worker goroutine pool or separate consumer service computes and stores the result, and the client polls a status endpoint or receives a webhook/WebSocket notification on completion, avoiding holding an HTTP handler goroutine for the full duration',
    explanation: 'Long-running synchronous requests are fragile against gateway/load-balancer timeout limits and unnecessarily tie up a request-handling goroutine for the entire duration; the standard scalable fix decouples the expensive computation into an asynchronous job pattern, with the synchronous API call returning quickly and the actual result delivered via polling or push notification once ready, regardless of how computationally expensive the underlying work is.',
    tags: ['system-design', 'performance', 'async-processing']
  },
  {
    id: 'go-105',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'Why does naive use of string concatenation with the "+" operator inside a loop processing millions of records cause severe performance degradation in Go, and what is the idiomatic fix?',
    options: [
      'String concatenation with "+" is always O(1) regardless of context in Go, so there is no performance concern',
      'Since Go strings are immutable, each "+" concatenation allocates an entirely new string and copies both operands\u2019 contents into it; repeating this inside a loop causes the total amount of copied data to grow quadratically with the number of iterations; the idiomatic fix is to use strings.Builder, which grows an internal buffer incrementally and writes the final string only once',
      'The fix is to convert every string to a []byte first, which automatically eliminates all copying overhead with zero further changes needed',
      'This issue only affects single-goroutine code, never concurrent string processing'
    ],
    correctAnswer: 'Since Go strings are immutable, each "+" concatenation allocates an entirely new string and copies both operands\u2019 contents into it; repeating this inside a loop causes the total amount of copied data to grow quadratically with the number of iterations; the idiomatic fix is to use strings.Builder, which grows an internal buffer incrementally and writes the final string only once',
    explanation: 'Because Go strings are immutable, "result = result + piece" inside a loop allocates a new, ever-larger string and copies all previously accumulated content again on every iteration, producing O(n\u00b2) total copying as the string grows; strings.Builder (or bytes.Buffer) avoids this by maintaining a single growable internal byte slice that is only converted to a final string once, at the very end, making it the idiomatic, efficient choice for building large strings incrementally.',
    tags: ['performance', 'strings', 'strings.Builder', 'gotchas']
  },
  {
    id: 'go-106',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a notification system in Go that must reliably deliver via multiple channels (email, SMS, push) while avoiding notification storms during a downstream provider outage?',
    options: [
      'Send all channels synchronously and sequentially within the triggering HTTP request',
      'Dispatch each channel as an independent message to a queue (e.g., a Kafka topic or RabbitMQ queue per channel) consumed by dedicated worker goroutines/processes with their own exponential backoff/retry policy, apply a circuit breaker per downstream provider to stop hammering a failing channel, and route exhausted retries to a dead-letter queue for visibility',
      'Retry indefinitely with no backoff whenever any channel fails',
      'Drop notifications entirely on the first failure with absolutely no retry mechanism'
    ],
    correctAnswer: 'Dispatch each channel as an independent message to a queue (e.g., a Kafka topic or RabbitMQ queue per channel) consumed by dedicated worker goroutines/processes with their own exponential backoff/retry policy, apply a circuit breaker per downstream provider to stop hammering a failing channel, and route exhausted retries to a dead-letter queue for visibility',
    explanation: 'Decoupling each notification channel into its own queue and consumer pool with independent retry/backoff settings prevents a struggling channel (e.g., an SMS gateway outage) from blocking or delaying others, while a per-provider circuit breaker avoids amplifying load against an already-failing dependency, and a dead-letter queue preserves permanently failed messages for operator visibility rather than silently dropping them.',
    tags: ['system-design', 'notifications', 'resilience', 'kafka']
  },
  {
    id: 'go-107',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'In a Kafka-based event-driven Go architecture, why does "at-least-once" delivery semantics require consumer-side idempotency, and how is this typically implemented?',
    options: [
      'At-least-once delivery already guarantees no duplicates, so idempotency is unnecessary',
      'Kafka can redeliver a message after a consumer processes it but crashes (or experiences a rebalance) before committing its offset, so the same message may be processed more than once; consumers typically track processed message IDs (often via a unique constraint on a deduplication table checked atomically with the business effect, or by making the downstream operation itself naturally idempotent) to ensure reprocessing has no additional effect',
      'Idempotency in Kafka consumers is fully and automatically handled by the Kafka broker with zero application code required',
      'At-least-once semantics only apply to producers in Go clients, never to consumers'
    ],
    correctAnswer: 'Kafka can redeliver a message after a consumer processes it but crashes (or experiences a rebalance) before committing its offset, so the same message may be processed more than once; consumers typically track processed message IDs (often via a unique constraint on a deduplication table checked atomically with the business effect, or by making the downstream operation itself naturally idempotent) to ensure reprocessing has no additional effect',
    explanation: 'Because committing an offset and processing the message\u2019s business effect are two separate steps, a crash or consumer group rebalance between them causes Kafka to redeliver that message on restart; without consumer-side idempotency (a deduplication table keyed by message ID checked atomically alongside the business effect, or naturally idempotent operations like upserts), this redelivery can cause duplicate side effects such as double-counting or duplicate downstream calls.',
    tags: ['kafka', 'system-design', 'idempotency', 'messaging']
  },
  {
    id: 'go-108',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you reduce cold-start latency for a Go function deployed as a serverless workload (e.g., AWS Lambda), given that Go is generally already fast to start compared to JVM-based languages?',
    options: [
      'Always provision the maximum available memory regardless of actual need as the only optimization',
      'Minimize the compiled binary size and unnecessary global init() work, avoid heavy package-level initialization (especially anything performing network calls or large allocations during init), and consider provisioned concurrency for the small remaining residual cold-start overhead in extremely latency-sensitive paths',
      'Switch to a fully interpreted execution mode to skip compilation entirely',
      'Increase the function timeout indefinitely instead of addressing actual startup overhead'
    ],
    correctAnswer: 'Minimize the compiled binary size and unnecessary global init() work, avoid heavy package-level initialization (especially anything performing network calls or large allocations during init), and consider provisioned concurrency for the small remaining residual cold-start overhead in extremely latency-sensitive paths',
    explanation: 'Since Go compiles to a small, statically-linked native binary with minimal runtime startup overhead compared to JVM-based languages, cold starts are usually already fast; remaining optimization opportunities focus on trimming binary size, avoiding expensive package-level init() work (like eagerly establishing network connections at startup rather than lazily), and, for the strictest latency requirements, using provisioned concurrency to eliminate even Go\u2019s comparatively small residual cold-start window.',
    tags: ['serverless', 'performance', 'cold-start']
  },
  {
    id: 'go-109',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a Go-based system to handle "eventual consistency" between a primary relational database and a denormalized Redis-based read cache for a high-traffic product listing page?',
    options: [
      'Attempt to update Redis and the database within the exact same instant using busy-waiting to force synchronization',
      'Write to the primary database as the source of truth within a transaction, then asynchronously invalidate or refresh the affected cache keys via an event (e.g., published after successful commit and consumed by a dedicated Go cache-update worker), accepting a brief, bounded window of staleness and designing cache TTLs accordingly',
      'Never cache anything to sidestep consistency concerns entirely',
      'Treat Redis as the sole source of truth and stop writing to the relational database altogether'
    ],
    correctAnswer: 'Write to the primary database as the source of truth within a transaction, then asynchronously invalidate or refresh the affected cache keys via an event (e.g., published after successful commit and consumed by a dedicated Go cache-update worker), accepting a brief, bounded window of staleness and designing cache TTLs accordingly',
    explanation: 'Synchronizing two different storage technologies atomically is impractical; the pragmatic, scalable pattern commits the authoritative write to the relational database first (often using a transactional outbox to reliably publish the corresponding event), then asynchronously propagates the change to the cache, explicitly accepting a small, bounded consistency lag rather than pretending perfect synchronization is achievable.',
    tags: ['system-design', 'caching', 'eventual-consistency', 'redis']
  },
  {
    id: 'go-110',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'How would you securely manage secrets (database credentials, API keys) for a Go service deployed across multiple environments, avoiding the anti-pattern of committing them to version control?',
    options: [
      'Hardcode credentials directly as Go string constants and commit them to the repository',
      'Externalize secrets via environment variables or a dedicated secrets manager (e.g., AWS Secrets Manager, HashiCorp Vault) injected at deploy/runtime, keep only non-sensitive placeholder/example configuration in version control, and support periodic credential rotation without requiring code changes',
      'Encode secrets with Base64 directly in the source code as the primary security measure',
      'Store secrets in a compiled-in build tag specific to the production environment'
    ],
    correctAnswer: 'Externalize secrets via environment variables or a dedicated secrets manager (e.g., AWS Secrets Manager, HashiCorp Vault) injected at deploy/runtime, keep only non-sensitive placeholder/example configuration in version control, and support periodic credential rotation without requiring code changes',
    explanation: 'Secrets should never live in source control regardless of language, and Base64 is merely encoding, not encryption, providing no real protection; the standard production approach injects secrets from a secure external source at runtime (read via os.Getenv or a secrets-manager client library), decoupling credential rotation from application deployments and keeping the actual secret values entirely out of the compiled binary and codebase.',
    tags: ['security', 'secrets-management', 'configuration']
  },
  {
    id: 'go-111',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a feature flag / gradual rollout system for a Go microservices fleet, allowing a new feature to be enabled for 1% of traffic before full rollout?',
    options: [
      'Hardcode the feature behind a compile-time build tag requiring a full rebuild and redeploy to adjust the rollout percentage',
      'Use a centralized feature flag service or configuration store queried per request (with local in-memory caching refreshed periodically to avoid per-request network calls), applying deterministic, consistent bucketing (e.g., hashing a stable user ID modulo 100) so a given user consistently sees the same variant across requests rather than flickering',
      'Randomly decide the flag state on every single request with no consistency per user',
      'Deploy two entirely separate binaries and split traffic via raw DNS round robin with no flag system'
    ],
    correctAnswer: 'Use a centralized feature flag service or configuration store queried per request (with local in-memory caching refreshed periodically to avoid per-request network calls), applying deterministic, consistent bucketing (e.g., hashing a stable user ID modulo 100) so a given user consistently sees the same variant across requests rather than flickering',
    explanation: 'A production-grade rollout mechanism decouples deployment from release: flag state is checked at request time from a fast, centrally updatable store (often cached locally in process memory with periodic background refresh to avoid adding network latency to every request), and deterministic hashing of a stable identifier ensures each user is consistently bucketed into the same variant, avoiding a jarring flickering experience while still allowing instant percentage adjustments without redeployment.',
    tags: ['system-design', 'feature-flags', 'rollout']
  },
  {
    id: 'go-112',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'Why is relying on math/rand (rather than crypto/rand) for generating password reset tokens or session identifiers a security risk in Go?',
    options: [
      'math/rand is a cryptographically secure generator identical to crypto/rand, so there is no risk',
      'math/rand\u2019s default global source is a deterministic pseudo-random generator whose internal state can potentially be inferred from observed outputs (and is even seeded predictably in older Go versions absent explicit seeding), making generated values potentially predictable; crypto/rand reads from the operating system\u2019s cryptographically secure entropy source and is the correct choice for security-sensitive token generation',
      'math/rand can only generate floating-point numbers, never usable token strings',
      'The only issue with math/rand is that it is slower than crypto/rand, with no security implication'
    ],
    correctAnswer: 'math/rand\u2019s default global source is a deterministic pseudo-random generator whose internal state can potentially be inferred from observed outputs (and is even seeded predictably in older Go versions absent explicit seeding), making generated values potentially predictable; crypto/rand reads from the operating system\u2019s cryptographically secure entropy source and is the correct choice for security-sensitive token generation',
    explanation: 'math/rand is designed for simulations, testing, and non-adversarial randomness needs, not security; its deterministic algorithm is unsuitable for generating unpredictable security tokens, while crypto/rand specifically sources entropy from the OS\u2019s cryptographically secure random number generator (e.g., /dev/urandom on Unix), making it the correct, standard-library choice whenever generated values must resist adversarial prediction.',
    tags: ['security', 'randomness', 'tokens', 'crypto/rand']
  },
  {
    id: 'go-113',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'What subtle bug exists in this rate-limiting middleware, common in real Go codebases?\n\nvar counts = make(map[string]int)\nfunc allow(clientID string) bool {\n  counts[clientID]++\n  return counts[clientID] <= 100\n}',
    options: [
      'Go maps automatically prevent any need for synchronization, so this code is already safe',
      'The unsynchronized map access will trigger a fatal "concurrent map read and map write" crash under concurrent requests, the counter never resets per a time window causing any client that ever hit 100 to be permanently blocked, and per-client memory grows unbounded with no eviction; fix with an atomically-updated, TTL-aware structure (sync.Map combined with periodic cleanup, or better, an external store like Redis with expiry)',
      'There is no bug; this implementation is production-ready as written',
      'The ++ operator cannot be used on a map value in Go'
    ],
    correctAnswer: 'The unsynchronized map access will trigger a fatal "concurrent map read and map write" crash under concurrent requests, the counter never resets per a time window causing any client that ever hit 100 to be permanently blocked, and per-client memory grows unbounded with no eviction; fix with an atomically-updated, TTL-aware structure (sync.Map combined with periodic cleanup, or better, an external store like Redis with expiry)',
    explanation: 'This implementation has three compounding production issues specific to Go: a plain (unsynchronized) map accessed concurrently from multiple request-handling goroutines will trigger Go\u2019s built-in fatal concurrent-map-access detector and crash the process, the count never resets per a time window so any client that ever hit 100 requests is blocked forever, and the map grows without bound as new clientIDs appear with no eviction strategy, all of which a properly synchronized (or externalized), TTL-aware rate-limiting store resolves.',
    tags: ['rate-limiting', 'concurrency', 'maps', 'gotchas']
  },
  {
    id: 'go-114',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design retry logic for a Go client calling a flaky downstream HTTP API, to avoid worsening an ongoing outage?',
    options: [
      'Never retry under any circumstances regardless of the failure type',
      'Retry immediately and indefinitely with zero delay between attempts',
      'Use exponential backoff with randomized jitter, a bounded maximum retry count, and respect any Retry-After header the downstream service provides, ideally combined with a circuit breaker to stop retrying entirely once the dependency is clearly unhealthy',
      'Retry only on successful (2xx) HTTP responses, never on failures'
    ],
    correctAnswer: 'Use exponential backoff with randomized jitter, a bounded maximum retry count, and respect any Retry-After header the downstream service provides, ideally combined with a circuit breaker to stop retrying entirely once the dependency is clearly unhealthy',
    explanation: 'Naive, immediate, unbounded retries can amplify load on an already struggling dependency, turning a partial outage into a complete one (a "retry storm"); exponential backoff with jitter spreads retries out over time and across clients, a bounded retry count prevents infinite loops, honoring Retry-After cooperates with the server\u2019s own signal, and pairing retries with a circuit breaker stops futile repeated attempts once the dependency is known to be down.',
    tags: ['system-design', 'resilience', 'retries', 'http']
  },
  {
    id: 'go-115',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'Why might increasing http.Transport\'s MaxIdleConnsPerHost (or MaxConnsPerHost) significantly improve throughput for a Go service making many outgoing requests to the same downstream host?',
    options: [
      'It reuses existing TCP/TLS connections rather than establishing a new connection for every request, since the default MaxIdleConnsPerHost (2) is often far too small for high-throughput services calling a single popular downstream host, leading to excessive connection churn',
      'It automatically compresses all outgoing request bodies, which is the primary source of improvement',
      'Connection pooling settings have no measurable effect on performance in modern Go versions',
      'It disables TLS entirely to speed up the connection'
    ],
    correctAnswer: 'It reuses existing TCP/TLS connections rather than establishing a new connection for every request, since the default MaxIdleConnsPerHost (2) is often far too small for high-throughput services calling a single popular downstream host, leading to excessive connection churn',
    explanation: 'Go\u2019s default http.Transport keeps only 2 idle connections per host by default, which is frequently far too conservative for a high-throughput service repeatedly calling the same downstream dependency, causing frequent connection churn (and the associated TCP/TLS handshake overhead) under concurrent load; explicitly tuning MaxIdleConnsPerHost (and the overall MaxIdleConns/IdleConnTimeout) to match actual concurrency needs is a common, impactful production optimization for outbound HTTP-heavy Go services.',
    tags: ['performance', 'net/http', 'connection-pooling']
  },
  {
    id: 'go-116',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a Go-based system to safely apply rolling, backward-compatible API contract changes (e.g., adding a required field) without breaking existing mobile app clients that cannot be force-updated instantly?',
    options: [
      'Make the field required immediately in a single deployment, accepting that older app versions will break',
      'Introduce the field as optional initially with a sensible default/fallback on both client and server, version the API explicitly (e.g., via a URL or header version) if a true breaking change is unavoidable, and only retire support for the old contract once client adoption metrics confirm sufficiently low usage of outdated versions',
      'Avoid ever changing the API contract once any client has integrated with it',
      'Silently change the field\u2019s meaning without any communication or versioning, relying on clients to adapt automatically'
    ],
    correctAnswer: 'Introduce the field as optional initially with a sensible default/fallback on both client and server, version the API explicitly (e.g., via a URL or header version) if a true breaking change is unavoidable, and only retire support for the old contract once client adoption metrics confirm sufficiently low usage of outdated versions',
    explanation: 'Mobile clients in particular cannot be assumed to update instantly (or sometimes ever, for some users), so backward-compatible evolution (additive optional fields with sensible Go zero-value defaults, encoding/json\u2019s natural handling of missing fields) is preferred over breaking changes; when a genuinely breaking change is unavoidable, explicit API versioning combined with monitoring real client version adoption before deprecating the old contract prevents abruptly breaking users still on older app versions.',
    tags: ['system-design', 'api-versioning', 'backward-compatibility']
  },
  {
    id: 'go-117',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'Why can naive use of nested loops with database calls inside a Go service function (e.g., querying related data per item inside a loop) cause severe production performance degradation, and what is the typical fix?',
    options: [
      'Database connection pools are unlimited so this pattern never causes issues at any scale',
      'Each iteration issues a separate round-trip database query, turning what could be a single batched query into N (or N\u00d7M) network round trips, multiplying latency linearly (or worse) with data size; the fix is to batch the queries (e.g., a single query with an IN clause, a JOIN, or fetching all needed data upfront and assembling results in Go)',
      'The fix is always to add more application server instances rather than change the query pattern',
      'This pattern only affects read operations, never write-heavy code paths'
    ],
    correctAnswer: 'Each iteration issues a separate round-trip database query, turning what could be a single batched query into N (or N\u00d7M) network round trips, multiplying latency linearly (or worse) with data size; the fix is to batch the queries (e.g., a single query with an IN clause, a JOIN, or fetching all needed data upfront and assembling results in Go)',
    explanation: 'This is the classic N+1 (or worse, nested N\u00d7M) query anti-pattern: each network round trip to the database carries fixed latency overhead that compounds badly when issued per loop iteration instead of batched; replacing per-item queries with a single query using an IN clause, a JOIN, or fetching the full related dataset upfront and assembling results with Go maps collapses many round trips into one or a small constant number, essential for scaling beyond small datasets.',
    tags: ['performance', 'database', 'n+1-problem']
  },
  {
    id: 'go-118',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a multi-region active-active Go service deployment to handle a regional outage without significant data loss or downtime?',
    options: [
      'Deploy only in a single region, accepting that a regional outage means full downtime',
      'Use a multi-region database replication strategy appropriate for the consistency requirements (e.g., synchronous replication for strict consistency at the cost of latency, or asynchronous/eventually-consistent replication for lower latency with a defined RPO), route traffic via global load balancing/DNS failover, and design the Go service to be largely stateless so any region can serve any request',
      'Manually fail over by having an engineer SSH into servers and redeploy after an outage is detected',
      'Replicate data nightly via a manual batch export/import process'
    ],
    correctAnswer: 'Use a multi-region database replication strategy appropriate for the consistency requirements (e.g., synchronous replication for strict consistency at the cost of latency, or asynchronous/eventually-consistent replication for lower latency with a defined RPO), route traffic via global load balancing/DNS failover, and design the Go service to be largely stateless so any region can serve any request',
    explanation: 'True multi-region resilience requires both the application layer (stateless, horizontally scalable Go services deployable identically in each region, with no reliance on local in-process state for anything that must survive a regional failover) and the data layer (a replication strategy explicitly chosen based on the acceptable consistency/latency/data-loss trade-offs for the use case) to be designed for regional failure, combined with automated traffic routing that can redirect users away from an impaired region without manual intervention.',
    tags: ['system-design', 'multi-region', 'high-availability', 'disaster-recovery']
  },
  {
    id: 'go-119',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'A Go service using database/sql with a properly configured connection pool shows good performance in staging but production queries against a table with 80 million rows are extremely slow despite an index existing on the filtered column. What is a likely overlooked cause, and how would you diagnose it?',
    options: [
      'Indexes are universally ineffective on tables larger than a few million rows, so this is expected',
      'The query planner may be bypassing the index due to low selectivity, an implicit type mismatch between the bound Go parameter and the column type, or a non-sargable expression (e.g., applying a function to the indexed column in the WHERE clause); diagnose with the database\u2019s EXPLAIN/EXPLAIN ANALYZE rather than assuming the index is being used as intended',
      'Increasing db.SetMaxOpenConns() always resolves slow SQL queries regardless of cause',
      'database/sql inherently ignores all database indexes by design'
    ],
    correctAnswer: 'The query planner may be bypassing the index due to low selectivity, an implicit type mismatch between the bound Go parameter and the column type, or a non-sargable expression (e.g., applying a function to the indexed column in the WHERE clause); diagnose with the database\u2019s EXPLAIN/EXPLAIN ANALYZE rather than assuming the index is being used as intended',
    explanation: 'Defining an index doesn\u2019t guarantee the query planner will use it effectively; common production-scale culprits include the optimizer choosing a full scan due to poor cardinality estimation, a Go-bound parameter type (e.g., a string where the column expects an integer, requiring an implicit cast) preventing index usage, or wrapping the indexed column in a function in the WHERE clause, none of which are visible from small staging datasets but become apparent and diagnosable via the actual database execution plan at production scale.',
    tags: ['performance', 'database/sql', 'database', 'query-optimization']
  },
  {
    id: 'go-120',
    topic: 'go',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you architect the migration of a monolithic Go application\'s "Orders" module into an independent microservice with minimal risk, while the monolith continues serving production traffic?',
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