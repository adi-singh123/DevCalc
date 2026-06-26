/**
 * src/data/interview/react.ts
 * React Interview Questions (120 items)
 * Levels: Beginner (10) → Intermediate (35) → Advanced (40) → MNC (35)
 */

import { InterviewQuestion } from '@/src/types/interview';

export const reactQuestions: InterviewQuestion[] = [

  // ─────────────────────────────────────────────
  // BEGINNER  (react-001 – react-010)
  // Not fully basic — each tests real understanding
  // ─────────────────────────────────────────────

  {
    id: 'react-001',
    topic: 'react',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the Virtual DOM and how does React use it?',
    options: [
      'A lightweight JS representation of the real DOM used for diffing and minimal UI updates',
      'A browser-native feature for fast rendering',
      'A server-side cache for HTML',
      'A direct replacement for the real DOM'
    ],
    correctAnswer: 'A lightweight JS representation of the real DOM used for diffing and minimal UI updates',
    explanation:
      'React maintains a Virtual DOM — a plain JS object tree mirroring the real DOM. On state change, React creates a new Virtual DOM, diffs it against the previous one (reconciliation), and applies only the minimal set of real DOM changes (patches). This avoids costly full re-renders.',
    tags: ['virtual-dom', 'reconciliation', 'rendering']
  },
  {
    id: 'react-002',
    topic: 'react',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is JSX and why does React use it instead of plain JavaScript?',
    options: [
      'A syntax extension that lets you write HTML-like markup in JS, compiled to React.createElement calls',
      'A separate templating language like Handlebars',
      'A browser API for rendering HTML',
      'A replacement for CSS in components'
    ],
    correctAnswer: 'A syntax extension that lets you write HTML-like markup in JS, compiled to React.createElement calls',
    explanation:
      'JSX is syntactic sugar. <div className="box">Hello</div> compiles to React.createElement("div", { className: "box" }, "Hello"). It is not required — you can use createElement directly — but JSX is far more readable for describing UI trees and catches tag-mismatch errors at compile time.',
    tags: ['jsx', 'babel', 'createElement']
  },
  {
    id: 'react-003',
    topic: 'react',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the difference between props and state in React?',
    options: [
      'Props are read-only inputs from a parent; state is mutable data managed inside the component',
      'Props are mutable; state is read-only',
      'Both are identical — state is just local props',
      'Props are for styling; state is for logic'
    ],
    correctAnswer: 'Props are read-only inputs from a parent; state is mutable data managed inside the component',
    explanation:
      'Props flow top-down and cannot be modified by the receiving component (immutable from its perspective). State is owned by the component that declares it and can be updated with setState/useState, triggering a re-render. Changing props requires the parent to re-render.',
    tags: ['props', 'state', 'data-flow']
  },
  {
    id: 'react-004',
    topic: 'react',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Why does React require a key prop when rendering lists?',
    options: [
      'Keys help React identify which list items changed, were added, or removed, enabling efficient reconciliation',
      'Keys apply CSS styles to list items',
      'Keys are required by the browser DOM spec',
      'Keys set the tab order of elements'
    ],
    correctAnswer: 'Keys help React identify which list items changed, were added, or removed, enabling efficient reconciliation',
    explanation:
      'Without stable keys, React re-renders every list item on any change. With unique, stable keys (preferably IDs, not array indexes), React reuses existing DOM nodes and only updates changed items. Using index as key breaks when items are reordered, causing subtle bugs with component state.',
    tags: ['keys', 'lists', 'reconciliation', 'performance']
  },
  {
    id: 'react-005',
    topic: 'react',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the difference between a controlled and uncontrolled component?',
    options: [
      'Controlled: form value driven by React state; Uncontrolled: form value managed by the DOM via refs',
      'Controlled components use class syntax; uncontrolled use function syntax',
      'Uncontrolled components cannot submit forms',
      'Controlled components are faster always'
    ],
    correctAnswer: 'Controlled: form value driven by React state; Uncontrolled: form value managed by the DOM via refs',
    explanation:
      'In a controlled input, value={state} and onChange={setState} make React the single source of truth. In an uncontrolled input, the DOM manages the value and you read it via a ref (ref.current.value). Controlled is preferred for validation and conditional logic; uncontrolled is simpler for file inputs or third-party integrations.',
    tags: ['controlled', 'uncontrolled', 'forms', 'refs']
  },
  {
    id: 'react-006',
    topic: 'react',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does the useEffect hook do and when does it run?',
    options: [
      'It runs side effects after every render by default, or after specified dependency changes, and can return a cleanup function',
      'It runs before the component renders',
      'It replaces setState for async operations',
      'It only runs once on component mount'
    ],
    correctAnswer: 'It runs side effects after every render by default, or after specified dependency changes, and can return a cleanup function',
    explanation:
      'useEffect(fn, deps) schedules fn after the DOM is painted. With no deps array it runs after every render. With [] it runs only on mount/unmount. With [a, b] it re-runs when a or b change. The returned cleanup runs before the next effect and on unmount — use it to cancel subscriptions, clear timers, or abort fetches.',
    tags: ['useEffect', 'lifecycle', 'side-effects', 'hooks']
  },
  {
    id: 'react-007',
    topic: 'react',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the difference between useState and useReducer?',
    options: [
      'useState is for simple scalar state; useReducer is better for complex state with multiple sub-values or transitions that depend on previous state',
      'useReducer is slower than useState',
      'useState supports async updates; useReducer does not',
      'useReducer is only for global state'
    ],
    correctAnswer: 'useState is for simple scalar state; useReducer is better for complex state with multiple sub-values or transitions that depend on previous state',
    explanation:
      'useState(initialValue) returns [value, setValue]. useReducer(reducer, initialState) returns [state, dispatch]. useReducer centralises state transitions in a pure reducer function, making complex logic easier to test and reason about. It also avoids stale-closure issues since the reducer always receives the latest state.',
    tags: ['useState', 'useReducer', 'state', 'hooks']
  },
  {
    id: 'react-008',
    topic: 'react',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is React Context and when should you use it?',
    options: [
      'A way to pass data through the component tree without prop-drilling, suited for theme, locale, or current user',
      'A replacement for all state management libraries',
      'A way to share imperative methods between components',
      'A browser API exposed through React'
    ],
    correctAnswer: 'A way to pass data through the component tree without prop-drilling, suited for theme, locale, or current user',
    explanation:
      'createContext + Provider makes a value available to any descendant via useContext without threading props through every intermediate component. However, any change to the context value re-renders all consumers — avoid high-frequency updates. For complex global state prefer Zustand, Jotai, or Redux.',
    tags: ['context', 'prop-drilling', 'useContext', 'state']
  },
  {
    id: 'react-009',
    topic: 'react',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the purpose of React.Fragment and when do you use it?',
    options: [
      'To group multiple elements without adding an extra DOM node',
      'To lazy-load components',
      'To create portals outside the root div',
      'To memoize a component subtree'
    ],
    correctAnswer: 'To group multiple elements without adding an extra DOM node',
    explanation:
      'React components must return a single root element. Wrapping siblings in a <div> adds an unnecessary DOM node that can break CSS layouts (e.g., flexbox children). <React.Fragment> (shorthand <></>) groups children without any DOM output. The long form supports a key prop for use in lists.',
    tags: ['fragment', 'jsx', 'rendering', 'dom']
  },
  {
    id: 'react-010',
    topic: 'react',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What happens when you call setState (or a useState setter) inside a component?',
    options: [
      'React schedules a re-render; the new state is not immediately available in the same execution context',
      'The component re-renders synchronously before the next line executes',
      'The DOM updates immediately before the next render',
      'All sibling components also re-render immediately'
    ],
    correctAnswer: 'React schedules a re-render; the new state is not immediately available in the same execution context',
    explanation:
      'State updates in React are asynchronous by default. React batches multiple updates (React 18 batches even inside async events). After calling setState, the current render still sees the old state value; the new value is available in the next render. Use the functional updater (prev => prev + 1) when the new state depends on previous state.',
    tags: ['setState', 'batching', 'rendering', 'hooks']
  },

  // ─────────────────────────────────────────────
  // INTERMEDIATE  (react-011 – react-045)
  // ─────────────────────────────────────────────

  {
    id: 'react-011',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How does React reconciliation work and what is the diffing algorithm?',
    options: [
      'React diffs Virtual DOM trees top-down, using element type and key to decide reuse vs destroy, with O(n) complexity via heuristics',
      'React diffs all nodes with an O(n³) algorithm',
      'React always destroys and recreates the entire subtree on state change',
      'Reconciliation only runs for class components'
    ],
    correctAnswer: 'React diffs Virtual DOM trees top-down, using element type and key to decide reuse vs destroy, with O(n) complexity via heuristics',
    explanation:
      'React\'s reconciler applies two heuristics: (1) Different element types → destroy old subtree, create new one. (2) Same type → update existing node\'s attributes/props. Keys uniquely identify siblings so React can reorder without recreation. These heuristics make reconciliation O(n) rather than the theoretical O(n³) of general tree-diff algorithms.',
    tags: ['reconciliation', 'diffing', 'virtual-dom', 'performance']
  },
  {
    id: 'react-012',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is React Fiber and how does it improve on the old stack reconciler?',
    options: [
      'Fiber is the reimplemented reconciler using a linked-list work unit, enabling interruptible, prioritised, incremental rendering',
      'Fiber is a new CSS-in-JS solution from React',
      'Fiber replaces the event system in React 18',
      'Fiber is the old reconciler that React is replacing'
    ],
    correctAnswer: 'Fiber is the reimplemented reconciler using a linked-list work unit, enabling interruptible, prioritised, incremental rendering',
    explanation:
      'The old stack reconciler was recursive and couldn\'t be paused — long renders blocked the main thread. Fiber represents work as a linked list of "fiber nodes," each corresponding to a component. The renderer can pause work between fibers, prioritise urgent updates (user input), and resume later — this is the foundation of Concurrent Mode.',
    tags: ['fiber', 'reconciler', 'concurrent-mode', 'internals']
  },
  {
    id: 'react-013',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between useCallback and useMemo?',
    options: [
      'useCallback memoizes a function reference; useMemo memoizes the return value of a function',
      'useMemo memoizes a function; useCallback memoizes its return value',
      'Both are identical — useCallback is just shorthand for useMemo',
      'useCallback prevents all re-renders; useMemo only caches expensive calculations'
    ],
    correctAnswer: 'useCallback memoizes a function reference; useMemo memoizes the return value of a function',
    explanation:
      'useCallback(fn, deps) returns the same function reference between renders unless deps change — prevents child re-renders when the function is passed as a prop. useMemo(fn, deps) calls fn and caches the result — avoids expensive recalculations. useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).',
    tags: ['useCallback', 'useMemo', 'memoization', 'performance']
  },
  {
    id: 'react-014',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is React.memo and when should you use it?',
    options: [
      'A higher-order component that skips re-rendering if props have not shallowly changed',
      'A hook that caches component output',
      'A replacement for PureComponent in class components',
      'A way to memoize Context values'
    ],
    correctAnswer: 'A higher-order component that skips re-rendering if props have not shallowly changed',
    explanation:
      'React.memo(Component) wraps a component; React skips re-rendering it if parent re-renders but props are shallowly equal. It accepts a custom comparison function as the second argument. Use it for expensive pure components that receive stable props. Avoid overusing — the comparison itself has a cost; only memo when profiling confirms unnecessary re-renders.',
    tags: ['React.memo', 'memoization', 'performance', 'rendering']
  },
  {
    id: 'react-015',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the useRef hook and what are its two main use cases?',
    options: [
      'Accessing DOM nodes directly, and storing mutable values that persist across renders without triggering re-renders',
      'Managing state without causing re-renders',
      'Forwarding refs to child components',
      'Only for storing previous state values'
    ],
    correctAnswer: 'Accessing DOM nodes directly, and storing mutable values that persist across renders without triggering re-renders',
    explanation:
      'useRef returns a mutable object { current: initialValue }. Use case 1: attach to a DOM element with ref={ref} to call .focus(), measure dimensions, etc. Use case 2: store any mutable value (timer IDs, previous state, subscriptions) that should survive re-renders without causing them — like an instance variable in a class.',
    tags: ['useRef', 'refs', 'dom', 'mutable-values']
  },
  {
    id: 'react-016',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between useEffect and useLayoutEffect?',
    options: [
      'useLayoutEffect fires synchronously after DOM mutations but before the browser paints; useEffect fires asynchronously after paint',
      'useLayoutEffect is deprecated in React 18',
      'useEffect fires before the DOM is updated; useLayoutEffect fires after',
      'Both fire at the same time — useLayoutEffect just has a different name'
    ],
    correctAnswer: 'useLayoutEffect fires synchronously after DOM mutations but before the browser paints; useEffect fires asynchronously after paint',
    explanation:
      'useLayoutEffect runs in the same phase as componentDidMount/componentDidUpdate — blocking paint. Use it to measure DOM layout or synchronously mutate the DOM before the user sees it (avoid flash). useEffect runs after paint, making it non-blocking and suitable for most side effects. Server-side: useLayoutEffect is a no-op (warns in dev); use useEffect or an isomorphic pattern.',
    tags: ['useLayoutEffect', 'useEffect', 'lifecycle', 'dom', 'rendering']
  },
  {
    id: 'react-017',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What are custom hooks and what rules govern them?',
    options: [
      'Functions starting with "use" that can call other hooks, enabling reuse of stateful logic across components',
      'HOCs renamed as functions',
      'Hooks that replace Redux reducers',
      'Any JavaScript function used inside a component'
    ],
    correctAnswer: 'Functions starting with "use" that can call other hooks, enabling reuse of stateful logic across components',
    explanation:
      'Custom hooks extract stateful logic (e.g., useWindowSize, useFetch) without changing component hierarchy. They must follow the Rules of Hooks: only call hooks at the top level (not inside loops/conditions), and only call them from React function components or other custom hooks. The "use" prefix enables the React linter to enforce these rules.',
    tags: ['custom-hooks', 'hooks', 'reusability', 'rules-of-hooks']
  },
  {
    id: 'react-018',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How does prop drilling work and what are the main solutions?',
    options: [
      'Passing props through many intermediary components; solved by Context, state management libraries, or component composition',
      'A performance optimisation technique',
      'A way to pass refs through components',
      'A React 18 feature for automatic prop forwarding'
    ],
    correctAnswer: 'Passing props through many intermediary components; solved by Context, state management libraries, or component composition',
    explanation:
      'Prop drilling occurs when data must pass through many components that don\'t use it, just to reach a deeply nested child. Solutions: (1) React Context for low-frequency data (theme, user). (2) State management (Zustand, Redux) for global client state. (3) Component composition — pass the fully-rendered child as a prop/children instead of data, eliminating intermediaries.',
    tags: ['prop-drilling', 'context', 'composition', 'state-management']
  },
  {
    id: 'react-019',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is React.lazy and Suspense, and how do they work together?',
    options: [
      'React.lazy() dynamically imports a component; Suspense displays a fallback while the lazy component loads',
      'React.lazy() defers rendering to the next frame; Suspense handles Promise rejection',
      'Both are deprecated in React 18',
      'Suspense is only for data fetching, not code splitting'
    ],
    correctAnswer: 'React.lazy() dynamically imports a component; Suspense displays a fallback while the lazy component loads',
    explanation:
      'const LazyComp = React.lazy(() => import("./Component")) creates a lazy-loaded component. When rendered inside <Suspense fallback={<Spinner/>}>, React shows the fallback until the chunk loads. In React 18, Suspense also integrates with data-fetching via use() and libraries like React Query, making it a general async boundary.',
    tags: ['lazy', 'suspense', 'code-splitting', 'async']
  },
  {
    id: 'react-020',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What are Error Boundaries and how do you implement them?',
    options: [
      'Class components implementing componentDidCatch and getDerivedStateFromError to catch render errors and show a fallback UI',
      'try/catch wrappers around useEffect',
      'A built-in React hook for catching errors',
      'Middleware in React Router for 404 handling'
    ],
    correctAnswer: 'Class components implementing componentDidCatch and getDerivedStateFromError to catch render errors and show a fallback UI',
    explanation:
      'Error Boundaries must be class components (no hook equivalent yet). getDerivedStateFromError(error) updates state to render a fallback. componentDidCatch(error, info) logs the error. They catch errors during rendering, lifecycle methods, and constructors in the child tree — but not inside event handlers (use try/catch there) or async code.',
    tags: ['error-boundaries', 'class-components', 'error-handling', 'lifecycle']
  },
  {
    id: 'react-021',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is forwardRef and when is it needed?',
    options: [
      'A utility to forward a ref from a parent through a function component to a DOM element or child component inside it',
      'A way to copy refs between components',
      'A React 18 hook replacing useRef',
      'A HOC for passing refs in class components'
    ],
    correctAnswer: 'A utility to forward a ref from a parent through a function component to a DOM element or child component inside it',
    explanation:
      'Function components cannot receive refs via ref prop by default. React.forwardRef((props, ref) => <input ref={ref} />) exposes the inner DOM element to the parent. Needed for reusable input/button components, headless UI libraries, and focus management. In React 19, ref can be passed as a regular prop without forwardRef.',
    tags: ['forwardRef', 'refs', 'dom', 'component-design']
  },
  {
    id: 'react-022',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the useImperativeHandle hook and when should it be used?',
    options: [
      'Used with forwardRef to expose a custom, limited API from a child component to the parent via a ref, rather than exposing the raw DOM node',
      'A hook to call imperative DOM methods from useEffect',
      'A replacement for forwardRef in React 18',
      'Used to override React\'s rendering behaviour imperatively'
    ],
    correctAnswer: 'Used with forwardRef to expose a custom, limited API from a child component to the parent via a ref, rather than exposing the raw DOM node',
    explanation:
      'useImperativeHandle(ref, () => ({ focus: () => inputRef.current.focus() }), []) lets you control exactly what the parent can do with the ref. Instead of exposing the full DOM element (and its entire API), you expose only the methods you intend. Common in design system components (Modal.open(), Carousel.next()).',
    tags: ['useImperativeHandle', 'forwardRef', 'refs', 'component-design']
  },
  {
    id: 'react-023',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the Context + useReducer pattern and how does it compare to Redux?',
    options: [
      'A lightweight state management pattern using Context for distribution and useReducer for transitions, suitable for moderate complexity without Redux boilerplate',
      'An exact replacement for Redux in all cases',
      'A pattern only for form state',
      'Context + useReducer is slower than Redux in all cases'
    ],
    correctAnswer: 'A lightweight state management pattern using Context for distribution and useReducer for transitions, suitable for moderate complexity without Redux boilerplate',
    explanation:
      'Context + useReducer mirrors Redux (store = Context, dispatch = Context value, reducer = same). Suitable for medium-sized apps. Limitations: no middleware, no devtools (without react-devtools), and all consumers re-render on every dispatch unless context is split. Redux Toolkit adds middleware, Immer, and devtools — worth it for large teams or complex async flows.',
    tags: ['context', 'useReducer', 'redux', 'state-management', 'patterns']
  },
  {
    id: 'react-024',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How does React handle events differently from the native DOM?',
    options: [
      'React uses synthetic events delegated to the root, normalising cross-browser differences and pooling events (pre-React 17)',
      'React adds a listener to every DOM node directly',
      'React bypasses the browser event system entirely',
      'React events are identical to native DOM events'
    ],
    correctAnswer: 'React uses synthetic events delegated to the root, normalising cross-browser differences and pooling events (pre-React 17)',
    explanation:
      'React\'s SyntheticEvent wraps native events with a consistent cross-browser API. Since React 17, events are delegated to the root container (not document), making multiple React roots on one page possible. Event pooling (reusing SyntheticEvent objects) was removed in React 17. React\'s events fire after native event handlers.',
    tags: ['synthetic-events', 'event-delegation', 'event-system', 'react-17']
  },
  {
    id: 'react-025',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between server-side rendering (SSR) and client-side rendering (CSR) in React?',
    options: [
      'SSR generates HTML on the server per request, improving TTFB and SEO; CSR ships a minimal HTML shell and renders in the browser via JS',
      'SSR is always faster than CSR in all scenarios',
      'CSR is deprecated in Next.js',
      'SSR and CSR produce different React component APIs'
    ],
    correctAnswer: 'SSR generates HTML on the server per request, improving TTFB and SEO; CSR ships a minimal HTML shell and renders in the browser via JS',
    explanation:
      'SSR sends fully-rendered HTML to the browser, giving faster First Contentful Paint and better SEO (crawlers see content). The client then hydrates (attaches React to existing HTML). CSR ships a nearly empty HTML shell; JS downloads, executes, and renders everything — slower initial load but simpler deployment. SSG pre-renders at build time for even faster delivery.',
    tags: ['ssr', 'csr', 'ssg', 'rendering', 'next.js']
  },
  {
    id: 'react-026',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What are React portals and when would you use them?',
    options: [
      'Portals render children into a different DOM node outside the parent\'s DOM hierarchy while preserving React context and event bubbling',
      'Portals allow teleporting components between pages',
      'Portals are an SSR-only feature',
      'Portals bypass React reconciliation'
    ],
    correctAnswer: 'Portals render children into a different DOM node outside the parent\'s DOM hierarchy while preserving React context and event bubbling',
    explanation:
      'ReactDOM.createPortal(child, domNode) renders child into domNode anywhere in the DOM — typically document.body for modals, tooltips, or dropdowns that need to escape overflow:hidden or z-index stacking contexts. Events still bubble through the React tree (not the DOM tree), and React Context remains available.',
    tags: ['portals', 'dom', 'modals', 'rendering']
  },
  {
    id: 'react-027',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How does React\'s batching work and what changed in React 18?',
    options: [
      'Pre-18: batched only inside React event handlers; React 18 automatic batching applies everywhere including setTimeout, Promises, and native events',
      'React has always batched all updates everywhere',
      'React 18 removed batching to simplify the mental model',
      'Batching only applies to useReducer, not useState'
    ],
    correctAnswer: 'Pre-18: batched only inside React event handlers; React 18 automatic batching applies everywhere including setTimeout, Promises, and native events',
    explanation:
      'Before React 18, calling setState three times inside a Promise resolved to three separate renders. React 18\'s automatic batching groups all state updates in the same task/microtask into a single render. Use flushSync() from react-dom to opt out of batching when you need synchronous updates (e.g., measuring layout after state change).',
    tags: ['batching', 'react-18', 'automatic-batching', 'flushSync', 'rendering']
  },
  {
    id: 'react-028',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the children prop pattern and how does it enable component composition?',
    options: [
      'The children prop passes JSX between opening and closing component tags, enabling flexible slot-based composition without prop drilling',
      'children is a special array of component types',
      'children must always be a string in React',
      'children is only available in class components'
    ],
    correctAnswer: 'The children prop passes JSX between opening and closing component tags, enabling flexible slot-based composition without prop drilling',
    explanation:
      'Any JSX between <Comp> and </Comp> becomes props.children. This enables compound component patterns, layout components (Card, Modal), and render-prop alternatives. You can inspect/clone children with React.Children utilities or pass named slots as separate props (header={<H/>} footer={<F/>}).',
    tags: ['children', 'composition', 'compound-components', 'render-props']
  },
  {
    id: 'react-029',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the render props pattern and what problems does it solve?',
    options: [
      'A pattern where a component accepts a function as a prop that returns JSX, enabling cross-cutting logic sharing without HOCs',
      'A way to conditionally render components',
      'A pattern for rendering lists efficiently',
      'A synonym for component composition'
    ],
    correctAnswer: 'A pattern where a component accepts a function as a prop that returns JSX, enabling cross-cutting logic sharing without HOCs',
    explanation:
      '<DataFetcher url="/api" render={data => <List items={data}/>}/> shares fetch logic without coupling it to a specific UI. The function receives state from DataFetcher and returns JSX. This pattern solves "wrapper hell" from HOCs. Custom hooks have largely superseded render props for logic sharing but render props still shine for UI injection.',
    tags: ['render-props', 'composition', 'patterns', 'hoc']
  },
  {
    id: 'react-030',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the Higher-Order Component (HOC) pattern and what are its trade-offs?',
    options: [
      'A function that takes a component and returns an enhanced component with additional props or behaviour; trade-off is props collision, wrapper hell, and static typing complexity',
      'A component that renders other components in a loop',
      'A React 18 replacement for hooks',
      'A pattern only for authentication checks'
    ],
    correctAnswer: 'A function that takes a component and returns an enhanced component with additional props or behaviour; trade-off is props collision, wrapper hell, and static typing complexity',
    explanation:
      'withAuth(Component) wraps Component with auth-check logic. Trade-offs: multiple HOCs create deeply nested DevTools trees (wrapper hell), prop names can collide, and TypeScript requires careful generics. Custom hooks are preferred for logic reuse; HOCs are still useful for cross-cutting concerns like analytics wrapping or feature flagging entire components.',
    tags: ['hoc', 'patterns', 'composition', 'typescript']
  },
  {
    id: 'react-031',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'How would you implement a custom useFetch hook with loading, error, and data states?',
    options: [
      'useState for {data, loading, error}, useEffect to call fetch, AbortController for cleanup on dependency change or unmount',
      'useCallback wrapping fetch with no cleanup',
      'useReducer only, no cleanup needed',
      'Direct fetch in render without hooks'
    ],
    correctAnswer: 'useState for {data, loading, error}, useEffect to call fetch, AbortController for cleanup on dependency change or unmount',
    explanation:
      'const { data, loading, error } = useFetch(url). Inside useEffect: create AbortController, set loading true, fetch with signal, on success set data, on error set error (ignore AbortError), return () => controller.abort() as cleanup. This prevents setState on unmounted components and cancels in-flight requests on url change.',
    tags: ['custom-hooks', 'fetch', 'useEffect', 'AbortController', 'coding']
  },
  {
    id: 'react-032',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the compound component pattern in React?',
    options: [
      'A set of components that share implicit state via Context, designed to work together like Select + Option or Tabs + Tab',
      'Components composed inside a loop',
      'HOCs stacked on top of each other',
      'Components that render inside portals'
    ],
    correctAnswer: 'A set of components that share implicit state via Context, designed to work together like Select + Option or Tabs + Tab',
    explanation:
      '<Tabs> manages state in a Context. <Tabs.List>, <Tabs.Tab>, <Tabs.Panel> consume it. The parent doesn\'t need to wire up props manually — the components coordinate through their shared context. This pattern is used in Radix UI, Headless UI, and Reach UI for flexible, accessible component APIs.',
    tags: ['compound-components', 'context', 'patterns', 'api-design']
  },
  {
    id: 'react-033',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How do you optimise React context to prevent unnecessary re-renders?',
    options: [
      'Split contexts by update frequency, memoize values with useMemo, use context selectors or state management libraries with selector support',
      'Use a single large context for all data',
      'Wrap every consumer in React.memo',
      'Context cannot be optimised — switch to Redux always'
    ],
    correctAnswer: 'Split contexts by update frequency, memoize values with useMemo, use context selectors or state management libraries with selector support',
    explanation:
      'Any Context value change re-renders all consumers. Strategies: (1) Split into separate contexts (UserContext, ThemeContext) so only relevant consumers update. (2) Memoize the value: const value = useMemo(() => ({user, updateUser}), [user]). (3) Use use-context-selector or Jotai/Zustand which support selector-based subscriptions for granular updates.',
    tags: ['context', 'performance', 'memoization', 're-renders', 'optimization']
  },
  {
    id: 'react-034',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between React.StrictMode and production mode?',
    options: [
      'StrictMode intentionally double-invokes render and lifecycle methods in development to surface side-effect bugs; production mode runs each once',
      'StrictMode is slower because it adds type checking at runtime',
      'StrictMode is the production configuration',
      'StrictMode prevents all console.log output'
    ],
    correctAnswer: 'StrictMode intentionally double-invokes render and lifecycle methods in development to surface side-effect bugs; production mode runs each once',
    explanation:
      'In React 18, StrictMode double-invokes: function component bodies, useState/useReducer initializers, useMemo/useCallback, getDerivedStateFromProps. It also mounts, unmounts, and remounts effects once to detect missing cleanup. This catches impure renders and effect leaks early. No effect in production builds.',
    tags: ['strict-mode', 'development', 'debugging', 'effects']
  },
  {
    id: 'react-035',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How does React handle form validation and what are the recommended approaches?',
    options: [
      'Built-in HTML5 validation, controlled component validation in onChange/onSubmit, or libraries like React Hook Form or Formik with schema validation (Zod/Yup)',
      'React provides a built-in form validation hook',
      'All validation must happen server-side only',
      'Use document.querySelector for form values and validate imperatively'
    ],
    correctAnswer: 'Built-in HTML5 validation, controlled component validation in onChange/onSubmit, or libraries like React Hook Form or Formik with schema validation (Zod/Yup)',
    explanation:
      'Options: (1) HTML5 required/pattern/minLength attributes (simple, accessible). (2) Controlled components: validate in onChange and store errors in state. (3) React Hook Form (uncontrolled, minimal re-renders, register API) + Zod resolver for type-safe schema validation. RHF is preferred for complex forms — it avoids re-renders on each keystroke.',
    tags: ['forms', 'validation', 'react-hook-form', 'zod', 'controlled']
  },
  {
    id: 'react-036',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of getDerivedStateFromProps and what replaced it?',
    options: [
      'A static lifecycle to derive state from props before render; largely replaced by memoization with useMemo or computing derived values inline during render',
      'A hook for class components only',
      'A way to mutate props before they reach child components',
      'A lifecycle that replaced componentWillMount'
    ],
    correctAnswer: 'A static lifecycle to derive state from props before render; largely replaced by memoization with useMemo or computing derived values inline during render',
    explanation:
      'getDerivedStateFromProps is complex, error-prone (fires on every render), and anti-pattern-prone (mirroring props in state). Modern alternatives: compute derived values directly in render (no state needed), useMemo for expensive derivations, or useEffect to sync external prop changes. Prefer computing values over storing them in state.',
    tags: ['getDerivedStateFromProps', 'lifecycle', 'class-components', 'derived-state']
  },
  {
    id: 'react-037',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the useId hook introduced in React 18?',
    options: [
      'Generates a stable, unique ID per component instance for accessibility attributes, safe for SSR because it produces the same ID on server and client',
      'Generates a random UUID on every render',
      'A replacement for document.getElementById',
      'Creates unique keys for list items'
    ],
    correctAnswer: 'Generates a stable, unique ID per component instance for accessibility attributes, safe for SSR because it produces the same ID on server and client',
    explanation:
      'useId() solves the classic problem of generating IDs for label/input pairs or ARIA attributes in a way that is consistent between SSR and client hydration. IDs produced by useId contain ":" to make them globally unique. Do not use useId for list keys — use data IDs instead.',
    tags: ['useId', 'react-18', 'accessibility', 'ssr', 'hooks']
  },
  {
    id: 'react-038',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How do you share logic between components without render props, HOCs, or hooks?',
    options: [
      'Component composition — render a child component or pass JSX as props so the parent handles the logic while the child controls the UI',
      'Global variables shared between module files',
      'Copy-pasting the logic in each component',
      'Using a mixin pattern like in Vue 2'
    ],
    correctAnswer: 'Component composition — render a child component or pass JSX as props so the parent handles the logic while the child controls the UI',
    explanation:
      'Instead of drilling via props or wrapping with HOCs, pass the rendered element as a prop: <Layout sidebar={<UserList/>}>. The Layout handles positioning logic; UserList handles its own rendering. This "inversion of control" eliminates prop drilling and avoids HOC wrapper hell while keeping components decoupled.',
    tags: ['composition', 'inversion-of-control', 'patterns', 'reusability']
  },
  {
    id: 'react-039',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the useTransition hook in React 18?',
    options: [
      'Marks a state update as non-urgent, allowing React to interrupt it to handle more urgent updates like user input, keeping the UI responsive',
      'Animates component transitions with CSS',
      'Defers rendering to after the next frame',
      'A replacement for useEffect for side effects'
    ],
    correctAnswer: 'Marks a state update as non-urgent, allowing React to interrupt it to handle more urgent updates like user input, keeping the UI responsive',
    explanation:
      'const [isPending, startTransition] = useTransition(). Wrap non-urgent updates in startTransition(() => setSearchQuery(value)). React can interrupt and restart this render if a more urgent update (like typing) arrives. isPending lets you show a loading indicator without blocking the UI. Ideal for search results, tab switching, and list filtering.',
    tags: ['useTransition', 'concurrent-mode', 'react-18', 'performance', 'hooks']
  },
  {
    id: 'react-040',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is useDeferredValue and how does it differ from useTransition?',
    options: [
      'useDeferredValue defers a value (like a prop) you don\'t control; useTransition wraps a state setter you do control',
      'useDeferredValue is the same as useTransition',
      'useDeferredValue blocks the UI; useTransition does not',
      'useDeferredValue is only for strings'
    ],
    correctAnswer: 'useDeferredValue defers a value (like a prop) you don\'t control; useTransition wraps a state setter you do control',
    explanation:
      'When you receive a prop or context value you can\'t wrap in startTransition, use const deferredQuery = useDeferredValue(query). React will keep showing the old deferred value while rendering the new one in the background. The UI updates with the new value once ready, similar to Concurrent rendering debounce. Use React.memo with the deferred value to skip re-renders of expensive subtrees.',
    tags: ['useDeferredValue', 'useTransition', 'concurrent-mode', 'react-18', 'performance']
  },
  {
    id: 'react-041',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How does React handle CSS styling, and what are the main approaches?',
    options: [
      'Plain CSS/Modules, CSS-in-JS (styled-components, Emotion), utility-first (Tailwind), and inline styles — each with different tradeoffs in scoping, performance, and DX',
      'React only supports inline styles via the style prop',
      'CSS Modules are deprecated in React 18',
      'Only styled-components is officially supported'
    ],
    correctAnswer: 'Plain CSS/Modules, CSS-in-JS (styled-components, Emotion), utility-first (Tailwind), and inline styles — each with different tradeoffs in scoping, performance, and DX',
    explanation:
      'CSS Modules: locally scoped class names, zero runtime. CSS-in-JS (styled-components, Emotion): co-located styles, dynamic theming, runtime cost (Emotion has zero-runtime option). Tailwind: utility classes, no custom CSS, excellent for teams with design tokens. Inline styles: no selectors, pseudo-classes, or media queries. Choosing depends on team, SSR requirements, and bundle constraints.',
    tags: ['css', 'css-modules', 'css-in-js', 'tailwind', 'styling']
  },
  {
    id: 'react-042',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is reconciliation bailout and how does React skip subtrees?',
    options: [
      'When a component returns the same element reference or React.memo indicates unchanged props, React skips re-rendering that entire subtree',
      'A way to cancel a render in progress',
      'An error boundary that prevents render errors from propagating',
      'A React DevTools feature for skipping components'
    ],
    correctAnswer: 'When a component returns the same element reference or React.memo indicates unchanged props, React skips re-rendering that entire subtree',
    explanation:
      'React bails out of re-rendering a subtree when: (1) React.memo wrapper detects shallowly equal props. (2) useState setter called with the same value (Object.is comparison). (3) useMemo/useCallback with stable deps. (4) A component returns the same element reference (e.g., const el = useMemo(() => <ExpensiveComp/>, [])). Bailout = skip diffing entire subtree.',
    tags: ['reconciliation', 'bailout', 'performance', 'React.memo', 'optimization']
  },
  {
    id: 'react-043',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'How would you implement a debounced search input in React?',
    options: [
      'useState for input value, useEffect with a setTimeout that clears on each input change, triggering the search only after the delay elapses',
      'Using useCallback with a debounce inside the event handler',
      'Using useMemo on the search results only',
      'Throttling the onChange event at the browser level'
    ],
    correctAnswer: 'useState for input value, useEffect with a setTimeout that clears on each input change, triggering the search only after the delay elapses',
    explanation:
      'Pattern: const [query, setQuery] = useState(""). useEffect(() => { const timer = setTimeout(() => search(query), 300); return () => clearTimeout(timer); }, [query]). Each query change resets the timer. Alternatively, store the debounced function in useRef so it persists across renders without becoming a dep. Or use a useDebouncedValue custom hook wrapping this pattern.',
    tags: ['debounce', 'useEffect', 'performance', 'coding', 'custom-hooks']
  },
  {
    id: 'react-044',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between declarative and imperative programming as it applies to React?',
    options: [
      'React is declarative — you describe what the UI should look like for a given state; React handles how to update the DOM',
      'React is imperative — you call DOM methods directly to update the UI',
      'Declarative and imperative produce different outputs in React',
      'React uses an imperative model internally but exposes a declarative API'
    ],
    correctAnswer: 'React is declarative — you describe what the UI should look like for a given state; React handles how to update the DOM',
    explanation:
      'Imperative: document.getElementById("btn").style.color = "red". Declarative: <button style={{color: isError ? "red" : "black"}}/>. In React you express the desired outcome for any state; React\'s reconciler figures out the minimal DOM mutations. This mental model scales better — you reason about state, not DOM operations.',
    tags: ['declarative', 'imperative', 'mental-model', 'philosophy']
  },
  {
    id: 'react-045',
    topic: 'react',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'How does React\'s key prop work with animations and component state?',
    options: [
      'Changing key forces React to unmount and remount the component, resetting all state and triggering enter animations — a deliberate reset mechanism',
      'key is only for performance and has no effect on state',
      'key changes trigger a soft update without unmounting',
      'key changes only affect list items, not individual components'
    ],
    correctAnswer: 'Changing key forces React to unmount and remount the component, resetting all state and triggering enter animations — a deliberate reset mechanism',
    explanation:
      'When key changes, React treats it as a completely new component — old one unmounts (cleanup runs), new one mounts (fresh state). This is a useful pattern: <Component key={userId}/> automatically resets when userId changes, avoiding complex useEffect reset logic. It also triggers CSS/animation enter states because the element is new to the DOM.',
    tags: ['key', 'remounting', 'state-reset', 'animation', 'reconciliation']
  },

  // ─────────────────────────────────────────────
  // ADVANCED  (react-046 – react-085)
  // ─────────────────────────────────────────────

  {
    id: 'react-046',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does React Concurrent Mode differ from legacy mode, and what problems does it solve?',
    options: [
      'Concurrent Mode allows React to prepare multiple UI versions simultaneously, interrupt low-priority renders for high-priority updates, and implement time-slicing — eliminating jank on complex UIs',
      'Concurrent Mode adds multi-threading to JavaScript',
      'Concurrent Mode is only for mobile React Native apps',
      'Concurrent Mode replaces the event loop with a custom scheduler'
    ],
    correctAnswer: 'Concurrent Mode allows React to prepare multiple UI versions simultaneously, interrupt low-priority renders for high-priority updates, and implement time-slicing — eliminating jank on complex UIs',
    explanation:
      'Legacy mode renders synchronously — a long render blocks the main thread. Concurrent Mode uses Fiber\'s work-loop with priority lanes. React 18\'s createRoot() opts into Concurrent Mode. Urgent updates (typing) can interrupt non-urgent ones (search results rendering), preventing dropped frames. Suspense, useTransition, and useDeferredValue all require Concurrent Mode.',
    tags: ['concurrent-mode', 'fiber', 'time-slicing', 'react-18', 'lanes']
  },
  {
    id: 'react-047',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What are React\'s priority lanes and how does the scheduler assign them?',
    options: [
      'Lanes are bit masks representing update priority (SyncLane, InputContinuousLane, DefaultLane, TransitionLane, IdleLane); React assigns lanes based on event source and schedules accordingly',
      'Lanes are CSS specificity levels applied to components',
      'Lanes are parallel render threads in React 18',
      'Lanes are only used in React Native'
    ],
    correctAnswer: 'Lanes are bit masks representing update priority (SyncLane, InputContinuousLane, DefaultLane, TransitionLane, IdleLane); React assigns lanes based on event source and schedules accordingly',
    explanation:
      'React uses a bitmask system for priority. User-blocking input events → SyncLane (highest). Continuous events (scroll, drag) → InputContinuousLane. Default setState → DefaultLane. startTransition → TransitionLanes (multiple). Idle → IdleLane. React processes higher-priority lanes first and can defer lower-priority work.',
    tags: ['lanes', 'priority', 'scheduler', 'concurrent-mode', 'internals']
  },
  {
    id: 'react-048',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does React Server Components (RSC) differ from SSR?',
    options: [
      'RSC components run only on the server and are never sent as JS to the client; SSR renders components to HTML on the server but ships the full JS bundle for hydration',
      'RSC is just a rename of SSR in React 18',
      'RSC requires a database connection; SSR does not',
      'SSR components have no JS; RSC components ship full JS bundles'
    ],
    correctAnswer: 'RSC components run only on the server and are never sent as JS to the client; SSR renders components to HTML on the server but ships the full JS bundle for hydration',
    explanation:
      'RSC are zero-bundle: their code never ships to the browser. They can access server resources (DB, filesystem) directly. They output a special serialised format (RSC payload) streamed to the client. Client Components (marked "use client") are the interactive shell that hydrates. SSR ships the full component code as JS; RSC doesn\'t. Next.js App Router uses RSC by default.',
    tags: ['rsc', 'server-components', 'ssr', 'next.js', 'bundle-size']
  },
  {
    id: 'react-049',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does streaming SSR with Suspense work in React 18?',
    options: [
      'React sends HTML in chunks; Suspense boundaries stream their content when ready, allowing the browser to progressively render without waiting for all data',
      'Streaming SSR sends JS bundles in multiple chunks',
      'Suspense in SSR only shows a loading spinner until all data is ready, then flushes',
      'Streaming SSR requires a WebSocket connection'
    ],
    correctAnswer: 'React sends HTML in chunks; Suspense boundaries stream their content when ready, allowing the browser to progressively render without waiting for all data',
    explanation:
      'renderToPipeableStream (Node) / renderToReadableStream (Edge) stream HTML progressively. Suspense boundaries act as async slots — React sends a placeholder initially, then streams the resolved HTML inline (replacing via a script tag). Users see above-fold content instantly while below-fold loads. This eliminates the "waterfall wait for all data before sending HTML" problem of traditional SSR.',
    tags: ['streaming-ssr', 'suspense', 'react-18', 'performance', 'next.js']
  },
  {
    id: 'react-050',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is selective hydration and how does it improve interactivity?',
    options: [
      'React 18 can hydrate Suspense boundaries independently and prioritises hydrating components the user interacts with first, before fully hydrating the rest of the page',
      'Selective hydration only hydrates visible components via IntersectionObserver',
      'Selective hydration skips hydration for server-only components',
      'It is a Gatsby-specific feature unrelated to React 18'
    ],
    correctAnswer: 'React 18 can hydrate Suspense boundaries independently and prioritises hydrating components the user interacts with first, before fully hydrating the rest of the page',
    explanation:
      'In React 18, each <Suspense> boundary hydrates independently. If a user clicks on a not-yet-hydrated component, React immediately prioritises hydrating that boundary so the click can be handled, then continues hydrating the rest. This makes pages interactive faster without forcing a full synchronous hydration pass.',
    tags: ['selective-hydration', 'react-18', 'hydration', 'concurrent-mode', 'performance']
  },
  {
    id: 'react-051',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does React\'s use() hook work, and what can it unwrap?',
    options: [
      'use(promise) reads a Promise\'s value during render, suspending the component until the Promise resolves; use(context) reads a Context like useContext but can be called conditionally',
      'use() is a replacement for useEffect for async data fetching',
      'use() only works with React Query providers',
      'use() can only be called in Server Components'
    ],
    correctAnswer: 'use(promise) reads a Promise\'s value during render, suspending the component until the Promise resolves; use(context) reads a Context like useContext but can be called conditionally',
    explanation:
      'use() is a new React hook that can be called inside conditionals and loops (unlike other hooks). use(promise) integrates with Suspense — the component suspends until the Promise resolves, then returns its value. use(context) reads a Context value. Typically paired with a data-fetching library that caches/dedupes the Promise.',
    tags: ['use', 'react-19', 'suspense', 'hooks', 'server-components']
  },
  {
    id: 'react-052',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What are React Server Actions and how do they work?',
    options: [
      'Async functions marked with "use server" that run on the server, callable from Client Components via forms or event handlers, enabling mutations without manual API routes',
      'Server-side useEffect equivalents',
      'REST endpoints auto-generated by Next.js from component code',
      'Actions dispatched to a Redux store on the server'
    ],
    correctAnswer: 'Async functions marked with "use server" that run on the server, callable from Client Components via forms or event handlers, enabling mutations without manual API routes',
    explanation:
      'Server Actions ("use server") are serialised RPC calls. When a Client Component calls a Server Action, Next.js sends a POST request with serialised arguments; the server runs the function and returns the result. Progressive enhancement: if used in a <form action={serverAction}>, it works without JS. After mutation, revalidatePath/revalidateTag refreshes server data.',
    tags: ['server-actions', 'next.js', 'rsc', 'mutations', 'progressive-enhancement']
  },
  {
    id: 'react-053',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the double-invocation behavior in React StrictMode and why does it exist?',
    options: [
      'React intentionally mounts, unmounts, and remounts effects in dev to ensure effects properly clean up and components are resilient to future concurrent features',
      'StrictMode runs components twice for performance benchmarking',
      'Double-invocation detects infinite render loops',
      'It is a bug in React 18 that will be fixed in React 19'
    ],
    correctAnswer: 'React intentionally mounts, unmounts, and remounts effects in dev to ensure effects properly clean up and components are resilient to future concurrent features',
    explanation:
      'In React 18 StrictMode, useEffect fires twice: mount → cleanup → mount. This simulates the future behavior where React may offscreen/pause/resume components. If your effect doesn\'t clean up properly (e.g., a subscription created twice), StrictMode surfaces the bug. This is a dev-only behavior — production runs effects once.',
    tags: ['strict-mode', 'useEffect', 'double-invocation', 'concurrent-mode', 'debugging']
  },
  {
    id: 'react-054',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How do you implement a truly performant infinite scroll in React?',
    options: [
      'Combine virtual scrolling (react-virtual), Intersection Observer for load triggers, React Query with infinite queries for paginated fetching, and stable keys to prevent remounting',
      'Append items to a list and re-render all on each page load',
      'Use a setTimeout to fetch new pages at regular intervals',
      'Fetch all data upfront and use CSS to hide off-screen items'
    ],
    correctAnswer: 'Combine virtual scrolling (react-virtual), Intersection Observer for load triggers, React Query with infinite queries for paginated fetching, and stable keys to prevent remounting',
    explanation:
      'At scale: useInfiniteQuery (React Query) manages paginated fetching and caching. useIntersectionObserver on a sentinel element triggers fetchNextPage(). @tanstack/react-virtual renders only visible rows, keeping the DOM node count constant. Stable entity IDs as keys prevent unnecessary remounts. This handles millions of items at 60fps.',
    tags: ['infinite-scroll', 'virtual-scroll', 'react-query', 'performance', 'intersection-observer']
  },
  {
    id: 'react-055',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between React\'s render phase and commit phase?',
    options: [
      'Render phase: pure computation of what changed (interruptible in Concurrent Mode); Commit phase: applying changes to the DOM (always synchronous and non-interruptible)',
      'Render phase writes to the DOM; commit phase cleans up effects',
      'Both phases are synchronous in all React versions',
      'The commit phase runs useEffect; the render phase runs useMemo'
    ],
    correctAnswer: 'Render phase: pure computation of what changed (interruptible in Concurrent Mode); Commit phase: applying changes to the DOM (always synchronous and non-interruptible)',
    explanation:
      'Render phase (reconciliation): React calls component functions, computes the new fiber tree, and diffs against the previous — pure work with no side effects. In Concurrent Mode, this can be paused and restarted. Commit phase: React flushes DOM mutations (mutationEffects), then fires layout effects (useLayoutEffect), then schedules passive effects (useEffect). Commit is always synchronous.',
    tags: ['render-phase', 'commit-phase', 'fiber', 'effects', 'internals']
  },
  {
    id: 'react-056',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How do you handle stale closures in React hooks, and what patterns prevent them?',
    options: [
      'Use the functional updater form of setState, include all dependencies in useEffect/useCallback, or store mutable values in refs accessed inside effects',
      'Always use useCallback on every function to prevent staleness',
      'Stale closures are prevented automatically by React 18',
      'Avoid closures entirely by using class components'
    ],
    correctAnswer: 'Use the functional updater form of setState, include all dependencies in useEffect/useCallback, or store mutable values in refs accessed inside effects',
    explanation:
      'A stale closure captures an old value of a variable. Patterns: (1) Functional updater: setCount(c => c + 1) always uses current count. (2) List all changing values in deps arrays. (3) "Ref trick": const callbackRef = useRef(callback); useEffect(() => { callbackRef.current = callback; }); — the effect always reads the latest callback without resubscribing. React Compiler (auto-memoization) will largely address this in future.',
    tags: ['stale-closures', 'useEffect', 'useCallback', 'refs', 'advanced']
  },
  {
    id: 'react-057',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the React Compiler (formerly React Forget) and what problem does it solve?',
    options: [
      'A compiler that automatically inserts useMemo, useCallback, and React.memo calls at build time, eliminating the need to manually optimise re-renders',
      'A TypeScript compiler plugin for type-checking React props',
      'A tool that compiles JSX to vanilla JS without React runtime',
      'A bundler optimisation for tree-shaking React components'
    ],
    correctAnswer: 'A compiler that automatically inserts useMemo, useCallback, and React.memo calls at build time, eliminating the need to manually optimise re-renders',
    explanation:
      'React Compiler analyses component code statically and inserts memoisation at the correct granularity. It ensures referential stability of values/functions automatically, eliminating manual useCallback/useMemo and reducing human error (missed deps, over-memoisation). Shipped in React 19 and already used in production at Meta (Instagram).',
    tags: ['react-compiler', 'react-forget', 'memoization', 'react-19', 'performance']
  },
  {
    id: 'react-058',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does Zustand differ from Redux and when would you choose each?',
    options: [
      'Zustand has minimal boilerplate, no provider, and uses subscriptions with selectors; Redux Toolkit has middleware, devtools, and normalized state patterns — better for large teams needing strict conventions',
      'Zustand is slower than Redux for all use cases',
      'Redux is client-side only; Zustand works with SSR',
      'Both use the same underlying Flux architecture'
    ],
    correctAnswer: 'Zustand has minimal boilerplate, no provider, and uses subscriptions with selectors; Redux Toolkit has middleware, devtools, and normalized state patterns — better for large teams needing strict conventions',
    explanation:
      'Zustand: create a store as a hook (useStore), access with selectors, no Provider wrapping needed. Extremely low boilerplate. Zustand stores can live outside React. Redux Toolkit: opinionated (slices, RTK Query), excellent devtools with time-travel debugging, mature middleware (thunk, saga). Choose Zustand for small-medium apps; Redux for large apps needing reproducible state and strict team conventions.',
    tags: ['zustand', 'redux', 'state-management', 'comparison', 'architecture']
  },
  {
    id: 'react-059',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is atomic state management (Jotai/Recoil) and how does it differ from store-based approaches?',
    options: [
      'Atomic state defines fine-grained atoms of state; components subscribe to individual atoms, so only components reading a changed atom re-render — unlike stores where a single state object can trigger broad updates',
      'Atomic state uses Web Workers for isolation',
      'Jotai and Recoil are identical in implementation',
      'Atomic state is only suitable for form state'
    ],
    correctAnswer: 'Atomic state defines fine-grained atoms of state; components subscribe to individual atoms, so only components reading a changed atom re-render — unlike stores where a single state object can trigger broad updates',
    explanation:
      'Jotai: atom(initialValue) creates a unit of state. useAtom(atom) subscribes only to that atom. Derived atoms (computed from other atoms) only recalculate when their source atoms change. This is similar to Signals/Vue 3\'s reactivity. Recoil uses a DAG of atoms/selectors. The granularity avoids the need for selectors+shallow-equal that Zustand/Redux require.',
    tags: ['jotai', 'recoil', 'atomic-state', 'state-management', 'signals']
  },
  {
    id: 'react-060',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does React Query (TanStack Query) manage server state differently from client state libraries?',
    options: [
      'React Query treats fetched data as a cache with TTL, stale-while-revalidate, background refetching, deduplication, and mutation invalidation — fundamentally different from client state which is created locally',
      'React Query replaces useState for all state needs',
      'React Query stores data in localStorage automatically',
      'React Query requires Redux to function'
    ],
    correctAnswer: 'React Query treats fetched data as a cache with TTL, stale-while-revalidate, background refetching, deduplication, and mutation invalidation — fundamentally different from client state which is created locally',
    explanation:
      'Server state is asynchronous, shared, and has a source of truth elsewhere (the server). React Query manages: caching with configurable staleTime/cacheTime, deduplicating identical requests in flight, background refetching when window refocuses, optimistic updates with rollback, and cache invalidation after mutations. This replaces dozens of lines of useEffect+useState+error handling boilerplate.',
    tags: ['react-query', 'server-state', 'caching', 'data-fetching', 'tanstack']
  },
  {
    id: 'react-061',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you implement optimistic UI updates with React Query mutations?',
    options: [
      'useMutation with onMutate (cancel queries, snapshot old data, update cache optimistically), onError (rollback to snapshot), and onSettled (invalidate queries to sync with server)',
      'Update local state before the request and reconcile on response',
      'Use useEffect to watch the mutation status and update UI',
      'Disable the form and wait for server confirmation before updating UI'
    ],
    correctAnswer: 'useMutation with onMutate (cancel queries, snapshot old data, update cache optimistically), onError (rollback to snapshot), and onSettled (invalidate queries to sync with server)',
    explanation:
      'Pattern: onMutate: await queryClient.cancelQueries(["todos"]), snapshot old data with getQueryData, setQueryData with optimistic value. onError: queryClient.setQueryData(["todos"], snapshot) to rollback. onSettled: queryClient.invalidateQueries(["todos"]) to sync with server truth. The UI feels instant while the server request is in flight.',
    tags: ['optimistic-updates', 'react-query', 'mutations', 'ux', 'coding']
  },
  {
    id: 'react-062',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does React\'s reconciler handle component identity vs instance identity?',
    options: [
      'React identifies components by their position in the tree + key. Same type + same position = same instance (state preserved). Different type or key = destroy old, create new instance',
      'React identifies components by their function reference',
      'Each render creates a new component instance always',
      'React uses object identity (===) to compare components'
    ],
    correctAnswer: 'React identifies components by their position in the tree + key. Same type + same position = same instance (state preserved). Different type or key = destroy old, create new instance',
    explanation:
      'This is why: <A/> switching to <B/> in the same position resets state (different type). <A key="x"/> → <A key="y"/> resets state (different key). <A/> → <A/> preserves state (same type, same position). Understanding this prevents surprises when conditionally rendering different component types at the same tree position.',
    tags: ['component-identity', 'reconciliation', 'keys', 'state', 'internals']
  },
  {
    id: 'react-063',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of React.startTransition vs scheduler.unstable_scheduleCallback?',
    options: [
      'startTransition is the stable public API for marking non-urgent updates; scheduleCallback is React\'s internal scheduler API used by the framework, not intended for application code',
      'Both are identical — startTransition is just a wrapper',
      'scheduleCallback is for SSR; startTransition is for CSR',
      'startTransition is deprecated in favour of scheduleCallback in React 18'
    ],
    correctAnswer: 'startTransition is the stable public API for marking non-urgent updates; scheduleCallback is React\'s internal scheduler API used by the framework, not intended for application code',
    explanation:
      'startTransition(fn) is the public API — stable and intended for app use. The scheduler package\'s unstable_scheduleCallback is React\'s internal work-scheduling primitive, used internally for rendering. Application code should use startTransition, useTransition, or the Scheduler API (scheduler.postTask) rather than internal unstable APIs.',
    tags: ['startTransition', 'scheduler', 'concurrent-mode', 'internals', 'advanced']
  },
  {
    id: 'react-064',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does React Native differ from React DOM in terms of the rendering pipeline?',
    options: [
      'React Native\'s renderer (Fabric) translates the component tree to native platform views via a JSI bridge, bypassing the DOM entirely; React DOM produces HTML elements',
      'React Native is a wrapper around a WebView',
      'React Native uses the DOM on mobile browsers',
      'React Native and React DOM share the same renderer'
    ],
    correctAnswer: 'React Native\'s renderer (Fabric) translates the component tree to native platform views via a JSI bridge, bypassing the DOM entirely; React DOM produces HTML elements',
    explanation:
      'React\'s reconciler is renderer-agnostic (Fiber is shared). The renderer is swappable: react-dom renders to the browser DOM, react-native\'s Fabric renderer creates native UIView/ViewGroup elements via JSI (JavaScript Interface). Fabric is synchronous and supports C++ TurboModules. react-three-fiber uses R3F as a custom renderer for Three.js scenes.',
    tags: ['react-native', 'fabric', 'jsi', 'renderer', 'cross-platform']
  },
  {
    id: 'react-065',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you build a performant drag-and-drop list in React?',
    options: [
      'Use @dnd-kit with SortableContext and DndContext, virtualise the list with react-virtual for large lists, and use transforms (not DOM reordering) during drag to avoid layout thrashing',
      'Track mouse position in useState and re-render the full list on every mousemove',
      'Use HTML5 draggable attribute with onDrop handlers on each item',
      'Use CSS order property to reorder items and update state on drop'
    ],
    correctAnswer: 'Use @dnd-kit with SortableContext and DndContext, virtualise the list with react-virtual for large lists, and use transforms (not DOM reordering) during drag to avoid layout thrashing',
    explanation:
      'DnD-kit uses pointer events (accessible, touch-friendly), applies CSS transform to the dragged item (no layout recalculation), and only commits the array reorder on drop via arrayMove. For large lists: react-virtual ensures only visible rows are rendered. Avoid react-beautiful-dnd (deprecated). Collision detection algorithms (closestCenter, rectIntersection) handle complex layouts.',
    tags: ['drag-and-drop', 'dnd-kit', 'performance', 'coding', 'accessibility']
  },
  {
    id: 'react-066',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How would you implement code-level performance profiling in a React application?',
    options: [
      'Use the React Profiler API (onRenderCallback), React DevTools Profiler, and the User Timing API (performance.mark) to identify slow renders with component-level granularity',
      'Only use Lighthouse for React performance',
      'Use console.time around setState calls',
      'React has no profiling capabilities — use browser DevTools only'
    ],
    correctAnswer: 'Use the React Profiler API (onRenderCallback), React DevTools Profiler, and the User Timing API (performance.mark) to identify slow renders with component-level granularity',
    explanation:
      '<Profiler id="List" onRender={(id, phase, actualDuration, baseDuration)=>{}} /> wraps components and reports render timings. React DevTools Profiler visualises component render times and flame graphs. In production, the Profiler needs react-dom/profiling build. Combine with performance.mark/measure for custom spans sent to RUM/APM tools.',
    tags: ['profiling', 'performance', 'react-profiler', 'devtools', 'advanced']
  },
  {
    id: 'react-067',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the "Lifting State Up" pattern and when does it cause performance issues?',
    options: [
      'Moving state to a common ancestor so siblings can share it; causes performance issues when the ancestor has many unrelated children that re-render on every state change',
      'A React 18 feature for automatic state hoisting',
      'A pattern for moving state from hooks to the store',
      'Lifting state always improves performance by centralising renders'
    ],
    correctAnswer: 'Moving state to a common ancestor so siblings can share it; causes performance issues when the ancestor has many unrelated children that re-render on every state change',
    explanation:
      'Lifting state is correct for sharing — but placing high-frequency state (mouse position, input value) high in the tree causes the entire subtree to re-render on every change. Solutions: (1) React.memo on unrelated children. (2) Colocate state as low as possible. (3) Use atomic state (Jotai) or Zustand selectors to subscribe granularly. (4) Component composition to avoid re-renders in unrelated siblings.',
    tags: ['lifting-state', 'performance', 're-renders', 'architecture', 'patterns']
  },
  {
    id: 'react-068',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does React Testing Library\'s philosophy differ from Enzyme?',
    options: [
      'RTL tests user-visible behaviour via accessible queries (getByRole, getByText); Enzyme tested implementation details (component state, instance methods) making tests brittle to refactors',
      'RTL is slower than Enzyme for all test scenarios',
      'Enzyme is the modern standard; RTL is deprecated',
      'Both test the same things — they just have different syntax'
    ],
    correctAnswer: 'RTL tests user-visible behaviour via accessible queries (getByRole, getByText); Enzyme tested implementation details (component state, instance methods) making tests brittle to refactors',
    explanation:
      'RTL\'s guiding principle: "Test the software the way users use it." Queries like getByRole, getByLabelText, and getByText match what screen readers and users see. Tests survive refactoring (class → function component, state reorganisation) because they test behaviour not implementation. Enzyme\'s .state() and .instance() tests broke on every refactor.',
    tags: ['testing', 'RTL', 'enzyme', 'testing-philosophy', 'accessibility']
  },
  {
    id: 'react-069',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How would you implement a real-time feature in React (e.g., live comments) without over-fetching?',
    options: [
      'Use WebSocket or SSE for push updates, update the React Query/SWR cache imperatively on message receipt, and display optimistic updates for the local user',
      'Poll the server every second with setInterval',
      'Refetch all data on window focus only',
      'Use Suspense to automatically poll for new data'
    ],
    correctAnswer: 'Use WebSocket or SSE for push updates, update the React Query/SWR cache imperatively on message receipt, and display optimistic updates for the local user',
    explanation:
      'Pattern: connect to WebSocket in a custom useWebSocket hook (cleanup on unmount). On message, call queryClient.setQueryData(["comments"], oldData => [...oldData, newComment]) to push to cache without a network request. For the sending user, show optimistic update immediately. This avoids polling and ensures all clients receive real-time updates.',
    tags: ['real-time', 'websocket', 'react-query', 'optimistic-updates', 'sse']
  },
  {
    id: 'react-070',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the "footgun" of including objects/arrays in useEffect dependency arrays?',
    options: [
      'Objects and arrays are compared by reference; a new object/array created in render will always be "different" even if content is unchanged, causing infinite effect loops',
      'Objects in deps cause memory leaks',
      'useEffect does not support object dependencies',
      'React flattens object deps automatically, so it is safe'
    ],
    correctAnswer: 'Objects and arrays are compared by reference; a new object/array created in render will always be "different" even if content is unchanged, causing infinite effect loops',
    explanation:
      'const options = { page: 1 } inside render creates a new reference each render. useEffect(() => fetchData(options), [options]) runs after every render — an infinite loop if fetchData triggers re-render. Solutions: (1) List primitive values as deps (page). (2) useMemo(() => ({ page: 1 }), [page]) for stable reference. (3) Use useRef. (4) Move the object outside the component if constant.',
    tags: ['useEffect', 'deps-array', 'footgun', 'reference-equality', 'debugging']
  },
  {
    id: 'react-071',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you implement a React hook for managing complex multi-step wizard state?',
    options: [
      'useReducer with step-based actions (NEXT, PREV, SET_DATA, RESET), combined with useContext to distribute state across wizard step components',
      'A single useState string tracking the current step only',
      'Multiple useState calls, one per step',
      'Store wizard state in localStorage directly'
    ],
    correctAnswer: 'useReducer with step-based actions (NEXT, PREV, SET_DATA, RESET), combined with useContext to distribute state across wizard step components',
    explanation:
      'Wizard state: { currentStep, steps[], data{} }. Reducer handles NEXT (increment step, validate current), PREV, SET_STEP_DATA (merge data), RESET. Expose [state, dispatch] via WizardContext. Each step component reads from context and dispatches. useCallback memoises goNext/goPrev helpers. This scales to arbitrary steps without prop drilling or parent state explosion.',
    tags: ['wizard', 'useReducer', 'context', 'state-machine', 'coding']
  },
  {
    id: 'react-072',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How do you handle accessibility (a11y) in React component design?',
    options: [
      'Use semantic HTML, ARIA attributes (role, aria-label, aria-expanded), manage focus (useRef + .focus()), and test with react-testing-library getByRole queries and jest-axe',
      'Add alt text to images only',
      'Accessibility is handled automatically by React',
      'Use tabIndex={0} on all div elements to make them focusable'
    ],
    correctAnswer: 'Use semantic HTML, ARIA attributes (role, aria-label, aria-expanded), manage focus (useRef + .focus()), and test with react-testing-library getByRole queries and jest-axe',
    explanation:
      'React a11y: prefer semantic elements (<button> over <div onClick>). Use aria-label for icon-only buttons. Manage focus in modals (trap focus, restore on close). aria-live regions for dynamic content. Test with jest-axe (toHaveNoViolations()), getByRole in RTL (forces correct ARIA semantics). Use Radix UI or Headless UI for complex accessible primitives.',
    tags: ['accessibility', 'aria', 'focus-management', 'a11y', 'testing']
  },
  {
    id: 'react-073',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the tree-shaking impact of using React and how do you minimise bundle size?',
    options: [
      'React cannot be tree-shaken as a whole but features like React.lazy, Server Components, and third-party code splitting reduce bundle; use bundle analyser to find large deps',
      'React automatically tree-shakes all unused hooks',
      'Import hooks individually: import useState from "react/useState"',
      'Use React 17 which has a smaller bundle than React 18'
    ],
    correctAnswer: 'React cannot be tree-shaken as a whole but features like React.lazy, Server Components, and third-party code splitting reduce bundle; use bundle analyser to find large deps',
    explanation:
      'React\'s core is small (~40kB gzipped for react + react-dom). Bundle bloat usually comes from: large third-party UI libraries (moment.js, full lodash, unoptimized icon libraries), uncode-split routes, and unused CSS-in-JS. Use @next/bundle-analyzer, source-map-explorer, or bundlephobia to diagnose. RSC removes component JS from the client bundle entirely.',
    tags: ['bundle-size', 'tree-shaking', 'performance', 'optimization', 'rsc']
  },
  {
    id: 'react-074',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does React\'s synthetic event system interact with passive event listeners?',
    options: [
      'React\'s delegated listeners are registered as non-passive by default; for performance-critical scroll/touch events, use native addEventListener with {passive: true} via useEffect and a ref',
      'React automatically makes all events passive in React 18',
      'Passive events are unsupported in React',
      'React removes passive event listeners on each re-render'
    ],
    correctAnswer: 'React\'s delegated listeners are registered as non-passive by default; for performance-critical scroll/touch events, use native addEventListener with {passive: true} via useEffect and a ref',
    explanation:
      'Passive event listeners tell the browser "I won\'t call preventDefault()" — allowing it to optimise scroll performance (no wait for JS). React\'s onScroll/onTouchMove JSX props are non-passive by default. For smooth scrolling, attach a native listener: ref.current.addEventListener("touchstart", handler, { passive: true }) in useEffect with cleanup.',
    tags: ['passive-events', 'performance', 'events', 'useEffect', 'advanced']
  },
  {
    id: 'react-075',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does React handle unmounting during async operations, and what is the correct mitigation?',
    options: [
      'If a component unmounts mid-await, subsequent setState calls warn (pre-18) or silently no-op (18+); mitigation is AbortController for fetch and isMounted flags or refs for other async ops',
      'React automatically cancels all async operations on unmount',
      'React throws an error if setState is called after unmount',
      'Unmounting during async operations is impossible in React 18'
    ],
    correctAnswer: 'If a component unmounts mid-await, subsequent setState calls warn (pre-18) or silently no-op (18+); mitigation is AbortController for fetch and isMounted flags or refs for other async ops',
    explanation:
      'React 18 removed the "can\'t perform state update on unmounted component" warning (it was noisy and the update safely no-ops). Still, wasted work is a concern. Use AbortController with fetch. For other async: const mounted = useRef(true); return () => { mounted.current = false }; then check mounted.current before setState. Libraries like React Query handle this automatically.',
    tags: ['unmounting', 'async', 'AbortController', 'cleanup', 'memory-leaks']
  },
  {
    id: 'react-076',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between controlled, derived, and lifted state and when to use each?',
    options: [
      'Controlled: local useState; Derived: computed from existing state/props without storing (useMemo or inline); Lifted: moved to a common ancestor — avoid storing derived state in state',
      'All three require useState to store values',
      'Derived state must always use useEffect to sync',
      'Lifted state always lives in Context'
    ],
    correctAnswer: 'Controlled: local useState; Derived: computed from existing state/props without storing (useMemo or inline); Lifted: moved to a common ancestor — avoid storing derived state in state',
    explanation:
      'Anti-pattern: storing derived state — const [fullName, setFullName] = useState(first + " " + last) requires a useEffect to sync, causes bugs. Instead: const fullName = first + " " + last (inline derivation). useMemo for expensive derivations. Lift state only when siblings need to share it. Keep state as low as possible and derive everything else.',
    tags: ['state', 'derived-state', 'lifted-state', 'architecture', 'anti-patterns']
  },
  {
    id: 'react-077',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does the React DevTools Profiler help diagnose performance issues?',
    options: [
      'It records renders, shows component render duration, reason for render (props/state/context change), and flame/ranked charts to identify the slowest components',
      'It measures network request times only',
      'It only works with class components',
      'It replaces Chrome DevTools Performance tab'
    ],
    correctAnswer: 'It records renders, shows component render duration, reason for render (props/state/context change), and flame/ranked charts to identify the slowest components',
    explanation:
      'Workflow: Start recording in React DevTools Profiler → interact with the app → stop. Flame chart shows render hierarchy and time. Ranked chart lists components by render time. Click a bar to see "Why did this render?" (which prop/state/context changed). Use with React.memo + useCallback to confirm memoisation is working correctly.',
    tags: ['devtools', 'profiler', 'performance', 'debugging', 'react-memo']
  },
  {
    id: 'react-078',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What are the rules of hooks and why does React enforce them?',
    options: [
      'Only call hooks at the top level (no loops/conditions/early returns) and only from React functions — enforced because hook call order determines which state/effect belongs to which hook across renders',
      'Hooks must be defined in a separate file',
      'Hooks cannot be called inside async functions due to Promise constraints',
      'Hooks are enforced by TypeScript, not React'
    ],
    correctAnswer: 'Only call hooks at the top level (no loops/conditions/early returns) and only from React functions — enforced because hook call order determines which state/effect belongs to which hook across renders',
    explanation:
      'React identifies which hook is which by its call order — there are no "labels" or names attached. If a hook is called conditionally, the order can change between renders, causing React to associate state with the wrong hook. The eslint-plugin-react-hooks enforces this statically. React Compiler may eventually relax this constraint.',
    tags: ['rules-of-hooks', 'hooks', 'internals', 'eslint', 'mental-model']
  },
  {
    id: 'react-079',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you implement a useEventListener hook that is safe with stale closures?',
    options: [
      'Store the callback in a ref updated every render; attach the listener once (using the ref) and never re-attach when callback identity changes',
      'Re-add and remove the listener on every render',
      'Use useCallback to memoize the callback and include it in useEffect deps',
      'Attach the listener directly in the component body outside useEffect'
    ],
    correctAnswer: 'Store the callback in a ref updated every render; attach the listener once (using the ref) and never re-attach when callback identity changes',
    explanation:
      'const callbackRef = useRef(callback); useEffect(() => { callbackRef.current = callback; }); — keeps ref current. useEffect(() => { const handler = (e) => callbackRef.current(e); element.addEventListener(event, handler); return () => element.removeEventListener(event, handler); }, [event, element]) — attaches once, always calls the latest callback without re-attaching.',
    tags: ['useEventListener', 'custom-hooks', 'stale-closures', 'refs', 'coding']
  },
  {
    id: 'react-080',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does React implement synthetic event pooling (pre-17) and why was it removed?',
    options: [
      'React reused SyntheticEvent objects after handlers finished for performance; accessing event properties asynchronously returned null — removed in React 17 as modern JS engines handle allocation efficiently',
      'Event pooling is still active in React 18',
      'Pooling was a browser feature, not React-specific',
      'Pooling was removed because it caused memory leaks'
    ],
    correctAnswer: 'React reused SyntheticEvent objects after handlers finished for performance; accessing event properties asynchronously returned null — removed in React 17 as modern JS engines handle allocation efficiently',
    explanation:
      'Pre-React 17: onClick={(e) => setTimeout(() => console.log(e.target), 0)} logged null because the SyntheticEvent was already returned to the pool. You had to call e.persist(). React 17 removed pooling — events are now regular objects, no pooling, no nullification. Modern JS GC handles event object allocation efficiently enough.',
    tags: ['event-pooling', 'synthetic-events', 'react-17', 'internals', 'history']
  },
  {
    id: 'react-081',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between useSyncExternalStore and useEffect + useState for subscribing to external stores?',
    options: [
      'useSyncExternalStore is the correct React 18 API for external stores — it handles concurrent mode tearing; useEffect+useState subscriptions can produce inconsistent UI snapshots in concurrent renders',
      'Both are identical in React 18',
      'useSyncExternalStore is only for Redux',
      'useEffect + useState is preferred for Concurrent Mode'
    ],
    correctAnswer: 'useSyncExternalStore is the correct React 18 API for external stores — it handles concurrent mode tearing; useEffect+useState subscriptions can produce inconsistent UI snapshots in concurrent renders',
    explanation:
      'In Concurrent Mode, React may render a component multiple times before committing. useEffect+useState subscriptions may read different store snapshots across these renders, causing "tearing" (inconsistent UI). useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) guarantees that all components read the same snapshot in a given commit. Zustand, Redux, and Valtio all use it internally.',
    tags: ['useSyncExternalStore', 'concurrent-mode', 'external-stores', 'tearing', 'react-18']
  },
  {
    id: 'react-082',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does the App Router (Next.js 13+) differ from the Pages Router?',
    options: [
      'App Router uses RSC by default, supports nested layouts, streaming, Server Actions, and co-located data fetching; Pages Router uses getServerSideProps/getStaticProps with CSR hydration',
      'App Router is purely client-side',
      'Pages Router supports RSC; App Router does not',
      'Both routers have identical data fetching patterns'
    ],
    correctAnswer: 'App Router uses RSC by default, supports nested layouts, streaming, Server Actions, and co-located data fetching; Pages Router uses getServerSideProps/getStaticProps with CSR hydration',
    explanation:
      'App Router (app/): every component is a Server Component by default ("use client" opts in). Data fetching is co-located in components (async components, fetch with cache options). Nested layouts share UI across routes without re-rendering. Streaming Suspense boundaries. Server Actions for mutations. Pages Router (_app.tsx, _document.tsx): familiar model, CSR with optional SSR/SSG per page.',
    tags: ['next.js', 'app-router', 'pages-router', 'rsc', 'routing']
  },
  {
    id: 'react-083',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What are the key differences between React 18 and React 19?',
    options: [
      'React 19 introduces stable Server Components, Server Actions, the use() hook, ref as a prop (no forwardRef needed), enhanced Error/Suspense boundaries, and the React Compiler as opt-in',
      'React 19 replaces hooks with signals',
      'React 19 removes class components entirely',
      'React 19 drops support for JavaScript and requires TypeScript'
    ],
    correctAnswer: 'React 19 introduces stable Server Components, Server Actions, the use() hook, ref as a prop (no forwardRef needed), enhanced Error/Suspense boundaries, and the React Compiler as opt-in',
    explanation:
      'React 19 key changes: RSC and Server Actions stabilised. use(promise) and use(context). ref passed as a regular prop (forwardRef deprecated). useOptimistic() for optimistic updates. Enhanced form handling (action prop, useFormStatus, useFormState). React Compiler available. Improved hydration error messages. Document metadata (<title>, <meta>) supported natively in components.',
    tags: ['react-19', 'server-components', 'server-actions', 'use', 'react-compiler']
  },
  {
    id: 'react-084',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How do you test React components with MSW (Mock Service Worker)?',
    options: [
      'MSW intercepts HTTP requests at the service worker or Node level, allowing tests to use real fetch calls against mocked API responses without changing application code',
      'MSW mocks React component props directly',
      'MSW requires a running backend server',
      'MSW only works in Storybook, not Jest/Vitest'
    ],
    correctAnswer: 'MSW intercepts HTTP requests at the service worker or Node level, allowing tests to use real fetch calls against mocked API responses without changing application code',
    explanation:
      'Setup: rest.get("/api/user", (req, res, ctx) => res(ctx.json({name: "Alice"}))). In tests (Vitest/Jest with MSW Node handler): your component calls fetch("/api/user") normally; MSW intercepts and returns the mock. No need to mock fetch or axios globally. In Storybook/browser: a Service Worker intercepts. This tests the full stack including request/response handling.',
    tags: ['msw', 'testing', 'mocking', 'api', 'vitest']
  },
  {
    id: 'react-085',
    topic: 'react',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'How does React\'s offscreen rendering (Activity) feature work?',
    options: [
      'React can render a component tree offscreen (invisible, unpainted) while preserving its state, enabling instant show/hide of prerendered content like modals, tabs, and cached list items',
      'Offscreen rendering happens in a Web Worker',
      'Offscreen components are unmounted and remounted on show',
      'Offscreen rendering is only for SSR prerendering'
    ],
    correctAnswer: 'React can render a component tree offscreen (invisible, unpainted) while preserving its state, enabling instant show/hide of prerendered content like modals, tabs, and cached list items',
    explanation:
      '<Activity mode="hidden"> (formerly <Offscreen>) keeps a component in memory but invisible. When revealed (mode="visible"), it shows instantly without remounting. State, scroll position, and focus are preserved. Effects fire with deprioritised scheduling. Enables patterns like preloading the next tab/page while the user is on the current one.',
    tags: ['offscreen', 'activity', 'concurrent-mode', 'performance', 'react-19']
  },

  // ─────────────────────────────────────────────
  // MNC LEVEL  (react-086 – react-120)
  // ─────────────────────────────────────────────

  {
    id: 'react-086',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you architect a large-scale React application for 50+ engineers?',
    options: [
      'Feature-based folder structure, micro-frontends or module federation for team autonomy, shared design system package, contract testing, feature flags, and independent CI/CD per domain',
      'A single large component file per feature',
      'One Redux store with all state, shared across all teams',
      'Each team uses a different framework without shared conventions'
    ],
    correctAnswer: 'Feature-based folder structure, micro-frontends or module federation for team autonomy, shared design system package, contract testing, feature flags, and independent CI/CD per domain',
    explanation:
      'At scale: organise by domain/feature (src/features/checkout), not by type (src/components, src/hooks). Webpack 5 Module Federation or single-spa for team autonomy with independent deployments. A shared component library (versioned, Storybook docs). Contract tests (Pact) prevent API integration regressions. Feature flags (LaunchDarkly) for safe rollouts. ADRs for architectural decisions.',
    tags: ['architecture', 'scalability', 'micro-frontends', 'module-federation', 'mnc']
  },
  {
    id: 'react-087',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a real-time collaborative whiteboard in React?',
    options: [
      'Canvas (react-konva or Fabric.js) for rendering, CRDT (Yjs) for conflict-free multi-user state sync, WebSocket for broadcast, and optimistic local updates with rollback',
      'A shared SVG rendered fresh on every user action',
      'A polling-based approach with server-side merge',
      'Store all state in a single WebSocket message on each change'
    ],
    correctAnswer: 'Canvas (react-konva or Fabric.js) for rendering, CRDT (Yjs) for conflict-free multi-user state sync, WebSocket for broadcast, and optimistic local updates with rollback',
    explanation:
      'Architecture: react-konva renders canvas shapes as React components. Yjs document represents shared state (shapes map). Local changes applied immediately (optimistic), then synced via y-websocket provider. Remote changes merged by CRDT — no conflicts. Awareness (Yjs) tracks cursor positions of other users. Undo/redo via Yjs UndoManager.',
    tags: ['whiteboard', 'crdt', 'yjs', 'canvas', 'collaboration', 'mnc']
  },
  {
    id: 'react-088',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How would you achieve a 100 Lighthouse Performance score for a React application?',
    options: [
      'SSG or SSR with Next.js, edge CDN, AVIF images with explicit dimensions, preloaded LCP image, minimal critical CSS inline, route-split code, no render-blocking resources, and INP < 200ms via scheduler.yield()',
      'Minify all JavaScript and enable Gzip',
      'Remove all animations',
      'Use React.memo on every component'
    ],
    correctAnswer: 'SSG or SSR with Next.js, edge CDN, AVIF images with explicit dimensions, preloaded LCP image, minimal critical CSS inline, route-split code, no render-blocking resources, and INP < 200ms via scheduler.yield()',
    explanation:
      'Checklist: LCP < 2.5s (preload LCP image, no lazy-load above fold, fast TTFB via edge). CLS < 0.1 (explicit image dimensions, no layout shift). INP < 200ms (break long tasks with scheduler.yield() or startTransition). FID/INP: reduce main thread work. Code split routes. Preconnect to API domains. Eliminate unused polyfills. Self-host fonts with font-display: swap.',
    tags: ['lighthouse', 'performance', 'core-web-vitals', 'next.js', 'mnc']
  },
  {
    id: 'react-089',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How do you build a design token-driven component library for a large product with multiple themes?',
    options: [
      'Define tokens in JSON (style-dictionary), generate CSS custom properties and JS tokens, implement theme switching via CSS variables at the root, ship as a versioned npm package with Storybook docs',
      'Hardcode hex values in each component',
      'Use separate CSS files per theme and switch via className',
      'Store theme values in localStorage and update with JavaScript'
    ],
    correctAnswer: 'Define tokens in JSON (style-dictionary), generate CSS custom properties and JS tokens, implement theme switching via CSS variables at the root, ship as a versioned npm package with Storybook docs',
    explanation:
      'Style Dictionary transforms token definitions to multiple platforms (CSS custom props, JS constants, iOS Swift, Android XML). Themes are defined as token overrides. In React, <ThemeProvider theme={dark}> applies data-theme="dark" to root, switching CSS variables. Components use --color-primary etc. Zero JS runtime overhead for theme switching. Chromatic visual regression catches token changes.',
    tags: ['design-tokens', 'theming', 'style-dictionary', 'component-library', 'mnc']
  },
  {
    id: 'react-090',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a comprehensive front-end observability platform for a React SPA?',
    options: [
      'Capture errors (ErrorBoundary + window.onerror), performance (Web Vitals + Performance Observer + User Timing), user sessions (rrweb), and feature flag analytics; correlate with traceId; send batched to Datadog/Sentry',
      'Use console.error for all errors',
      'Only monitor network requests via the browser DevTools Network tab',
      'Rely solely on server-side logs'
    ],
    correctAnswer: 'Capture errors (ErrorBoundary + window.onerror), performance (Web Vitals + Performance Observer + User Timing), user sessions (rrweb), and feature flag analytics; correlate with traceId; send batched to Datadog/Sentry',
    explanation:
      'Full observability: (1) Error tracking — ErrorBoundary + unhandledrejection, enrich with user context + breadcrumbs + session replay (Sentry). (2) Performance — web-vitals library for CWV, User Timing for custom spans, Long Tasks API for blocking work. (3) Session replay (rrweb) for reproduction. (4) Correlate FE errors with BE traces via traceId header. (5) Batch and beacon events on pagehide.',
    tags: ['observability', 'error-tracking', 'performance', 'sentry', 'mnc']
  },
  {
    id: 'react-091',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you build a type-safe, scalable form system that handles complex validation and server errors?',
    options: [
      'React Hook Form with Zod resolver for schema validation, useFormContext for nested fields, Server Actions returning validation errors mapped to field paths, and optimistic updates on submit',
      'A single useState for the entire form object',
      'HTML5 built-in validation only',
      'Formik with Yup for all forms regardless of complexity'
    ],
    correctAnswer: 'React Hook Form with Zod resolver for schema validation, useFormContext for nested fields, Server Actions returning validation errors mapped to field paths, and optimistic updates on submit',
    explanation:
      'Architecture: Zod schema defines validation (shared between client and server). RHF register/Controller wraps fields — minimal re-renders (only changed field updates). useFormContext in compound form components. Server Actions return { errors: { fieldName: "message" } }; setError() maps them to fields. useOptimistic for instant feedback. Type inference from Zod ensures end-to-end type safety.',
    tags: ['forms', 'react-hook-form', 'zod', 'server-actions', 'type-safety', 'mnc']
  },
  {
    id: 'react-092',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a permission-based UI rendering system in React?',
    options: [
      'Fetch permissions at auth, store in a context/store, expose usePermission() hook and <Can permission="edit:post"> component; enforce permissions server-side regardless of client state',
      'Show/hide elements using CSS visibility based on user role',
      'Fetch permissions on every component mount',
      'Store roles in localStorage and read them on each render'
    ],
    correctAnswer: 'Fetch permissions at auth, store in a context/store, expose usePermission() hook and <Can permission="edit:post"> component; enforce permissions server-side regardless of client state',
    explanation:
      'Pattern: decode JWT claims or fetch /me on login. Store permissions array in PermissionContext. usePermission("edit:post") returns boolean. <Can permission="delete:user" fallback={<ReadOnly/>}> renders conditionally. Critical: UI access control is UX-only — all actions must be authorised on the server. Never trust client-side permission checks for sensitive operations.',
    tags: ['permissions', 'rbac', 'access-control', 'security', 'mnc']
  },
  {
    id: 'react-093',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'How do you prevent and diagnose re-render cascades in a large React tree?',
    options: [
      'Use React DevTools Profiler to identify the trigger, then apply React.memo, stable references (useCallback/useMemo), context splitting, or state colocation to break the cascade',
      'Add React.memo to every component as a precaution',
      'Use shouldComponentUpdate in all function components',
      'Increase React\'s render batch size'
    ],
    correctAnswer: 'Use React DevTools Profiler to identify the trigger, then apply React.memo, stable references (useCallback/useMemo), context splitting, or state colocation to break the cascade',
    explanation:
      'Diagnosis: React DevTools Profiler "Why did this render?" + react-scan library highlights re-rendering components visually. Common causes: (1) Context value changes re-render all consumers (split context). (2) New object/function references each render (memoize). (3) State too high in tree (colocate). (4) List without keys (causes full re-renders). Fix the root cause, not symptoms.',
    tags: ['re-renders', 'performance', 'profiler', 'React.memo', 'optimization', 'mnc']
  },
  {
    id: 'react-094',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a micro-frontend architecture with Module Federation in React?',
    options: [
      'Each team owns a Webpack 5 Module Federation remote exposing components; a shell app (host) composes them at runtime; shared singletons (react, react-dom) are federated to avoid duplicate instances',
      'Each team builds a separate single-page application linked via iframes',
      'All teams share one monolithic Webpack config and deploy together',
      'Module Federation requires all teams to use the same React version'
    ],
    correctAnswer: 'Each team owns a Webpack 5 Module Federation remote exposing components; a shell app (host) composes them at runtime; shared singletons (react, react-dom) are federated to avoid duplicate instances',
    explanation:
      'MF config: remote exposes({ "./Checkout": "./src/Checkout" }). Host consumes const Checkout = React.lazy(() => import("checkout/Checkout")). Shared: { react: { singleton: true, requiredVersion: "^18" } } prevents multiple React instances (context breaking). Versioning: use requiredVersion ranges. Contract testing ensures shell-remote compatibility. Separate CI/CD per remote.',
    tags: ['micro-frontends', 'module-federation', 'webpack', 'architecture', 'mnc']
  },
  {
    id: 'react-095',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design the state management architecture for a complex multi-step checkout flow?',
    options: [
      'XState for the checkout FSM (cart → address → payment → confirmation with guards and rollback), React Query for server validation, useOptimistic for immediate feedback, and persist to localStorage for recovery',
      'A single useState object for all checkout data',
      'Redux with one slice per step',
      'React Router state only, passing all data via location.state'
    ],
    correctAnswer: 'XState for the checkout FSM (cart → address → payment → confirmation with guards and rollback), React Query for server validation, useOptimistic for immediate feedback, and persist to localStorage for recovery',
    explanation:
      'Checkout is inherently a state machine with guards (can\'t proceed to payment without valid address), parallel states (loading indicator + form), and rollback (payment failure → back to payment step). XState v5 models this explicitly. React Query validates server-side (address lookup, promo code). Persist state to localStorage/sessionStorage for browser refresh recovery.',
    tags: ['xstate', 'fsm', 'checkout', 'state-management', 'system-design', 'mnc']
  },
  {
    id: 'react-096',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you implement a virtualized, searchable, async dropdown with keyboard navigation in React?',
    options: [
      'Combobox pattern (ARIA 1.2): useCombobox hook (Downshift or Radix), react-virtual for dropdown list, React Query for debounced async search, roving focus management, and proper ARIA attributes',
      'A native HTML <select> element with JavaScript filtering',
      'A <ul> list with onClick handlers and no ARIA',
      'A modal with a full-page search interface'
    ],
    correctAnswer: 'Combobox pattern (ARIA 1.2): useCombobox hook (Downshift or Radix), react-virtual for dropdown list, React Query for debounced async search, roving focus management, and proper ARIA attributes',
    explanation:
      'Requirements: ARIA combobox pattern (role=combobox, aria-expanded, aria-activedescendant, aria-autocomplete). Keyboard: Arrow keys move active item, Enter selects, Escape closes. React Query + debounce for async search. react-virtual renders only visible options. Downshift or Radix Combobox provide the state machine. This is a common senior interview coding task.',
    tags: ['combobox', 'accessibility', 'virtual-scroll', 'keyboard-navigation', 'mnc', 'coding']
  },
  {
    id: 'react-097',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement an A/B testing system integrated with React components?',
    options: [
      'A hook-based API (useExperiment("checkout-cta")) fetching assignments from an experiment service, rendering variants with React context, tracking exposure events on render, and supporting SSR-safe assignment',
      'Randomly rendering different components using Math.random()',
      'Using separate URL paths for each variant',
      'A/B testing is handled entirely server-side with no React integration'
    ],
    correctAnswer: 'A hook-based API (useExperiment("checkout-cta")) fetching assignments from an experiment service, rendering variants with React context, tracking exposure events on render, and supporting SSR-safe assignment',
    explanation:
      'Architecture: fetch experiment assignments on app init (or from cookie/header for SSR). Store in ExperimentContext. useExperiment(key) returns variant string. Track exposure once per session (useRef guard). For SSR: pass assignment via cookie → server reads → renders correct variant → no hydration mismatch. Support forced variant via URL param for QA.',
    tags: ['ab-testing', 'experiments', 'context', 'ssr', 'system-design', 'mnc']
  },
  {
    id: 'react-098',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you build a complex data table component that scales to production needs?',
    options: [
      'TanStack Table (headless) for sorting/filtering/pagination logic, react-virtual for row virtualisation, React Query for server-side data, column pinning and resize via CSS variables, and accessible column headers',
      'An HTML <table> with data in state and no virtualisation',
      'A <div> grid with absolute positioning for all cells',
      'A third-party grid library like AG Grid with no customisation'
    ],
    correctAnswer: 'TanStack Table (headless) for sorting/filtering/pagination logic, react-virtual for row virtualisation, React Query for server-side data, column pinning and resize via CSS variables, and accessible column headers',
    explanation:
      'Production data table: TanStack Table v8 (headless, framework-agnostic core) handles sorting, filtering, column visibility, row selection, and pagination. react-virtual renders only visible rows (10k+ rows at 60fps). React Query with server-side sorting/filtering (send params to API). Column resize via CSS variables. ARIA role=grid, columnheader, rowheader for accessibility.',
    tags: ['data-table', 'tanstack-table', 'virtual-scroll', 'react-query', 'mnc']
  },
  {
    id: 'react-099',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Security',
    question: 'How do you secure a React application against XSS, CSRF, and clickjacking?',
    options: [
      'XSS: CSP with nonces + DOMPurify + avoid dangerouslySetInnerHTML; CSRF: SameSite cookies + double-submit token; Clickjacking: X-Frame-Options: DENY or CSP frame-ancestors none',
      'Escape all HTML on the client with innerHTML',
      'Only use HTTPS to prevent all attacks',
      'React automatically prevents all XSS'
    ],
    correctAnswer: 'XSS: CSP with nonces + DOMPurify + avoid dangerouslySetInnerHTML; CSRF: SameSite cookies + double-submit token; Clickjacking: X-Frame-Options: DENY or CSP frame-ancestors none',
    explanation:
      'React escapes text content by default, preventing most XSS. Risks: dangerouslySetInnerHTML with unsanitised input, href="javascript:...", and third-party scripts. CSP blocks inline scripts. DOMPurify strips dangerous HTML before inserting. CSRF: httpOnly+SameSite=Strict cookies, CSRF token for non-GET. Clickjacking: Content-Security-Policy: frame-ancestors \'none\'.',
    tags: ['xss', 'csrf', 'clickjacking', 'security', 'csp', 'mnc']
  },
  {
    id: 'react-100',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a comprehensive testing strategy for a React application at a FAANG company?',
    options: [
      'Static (TypeScript + ESLint + jest-axe), unit (Vitest for pure logic), integration (RTL + MSW for components), E2E (Playwright for critical user journeys), visual regression (Chromatic), and performance budgets in CI',
      'Only E2E tests for maximum confidence',
      'Only unit tests for maximum speed',
      'Manual QA testing by a dedicated team'
    ],
    correctAnswer: 'Static (TypeScript + ESLint + jest-axe), unit (Vitest for pure logic), integration (RTL + MSW for components), E2E (Playwright for critical user journeys), visual regression (Chromatic), and performance budgets in CI',
    explanation:
      'FAANG testing pyramid: TypeScript catches type errors at compile time. ESLint (including react-hooks plugin) catches rule violations. Vitest for utils/hooks in isolation. RTL + MSW for components testing real HTTP paths. Playwright E2E for auth, checkout, core journeys. Chromatic visual regression on every PR. Lighthouse CI performance budget gate. Coverage threshold (≥80%) for critical paths.',
    tags: ['testing', 'vitest', 'playwright', 'chromatic', 'ci', 'mnc']
  },
  {
    id: 'react-101',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement ISR (Incremental Static Regeneration) and when would you choose it over SSR or SSG?',
    options: [
      'ISR (Next.js revalidate) regenerates pages in the background after a time interval, serving stale content instantly; choose over SSR (per-request cost) when data is semi-static, over SSG when data changes more than build time',
      'ISR is just server-side rendering with caching',
      'ISR requires a database query on every user request',
      'ISR is only for the /blog route'
    ],
    correctAnswer: 'ISR (Next.js revalidate) regenerates pages in the background after a time interval, serving stale content instantly; choose over SSR (per-request cost) when data is semi-static, over SSG when data changes more than build time',
    explanation:
      'Next.js ISR: export const revalidate = 60 in a Server Component (App Router) or revalidateTag("products") in a Server Action. First request after expiry triggers background regeneration — user gets stale page, next user gets fresh. Trade-off: stale period vs server cost. SSR: always fresh, but latency per request. SSG: fastest, but only for truly static content.',
    tags: ['isr', 'next.js', 'ssr', 'ssg', 'caching', 'mnc']
  },
  {
    id: 'react-102',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a comprehensive internationalisation (i18n) system for a React app with 20+ locales?',
    options: [
      'react-i18next with locale-split JSON bundles loaded on demand, RTL CSS (logical properties), locale-aware formatting (Intl API), pluralisation rules, and type-safe translation keys with TypeScript',
      'Hard-code all strings in each locale in one large object',
      'Translate text with an API call on every render',
      'Use Google Translate widget as the only solution'
    ],
    correctAnswer: 'react-i18next with locale-split JSON bundles loaded on demand, RTL CSS (logical properties), locale-aware formatting (Intl API), pluralisation rules, and type-safe translation keys with TypeScript',
    explanation:
      'i18n architecture: react-i18next with backend plugin loads only the needed locale JSON (lazy). Intl.NumberFormat, Intl.DateTimeFormat, Intl.RelativeTimeFormat for locale-aware formatting (currencies, dates). Pluralisation via i18next plural rules. RTL: use logical CSS properties (margin-inline-start vs margin-left). Type safety: i18next-resources-to-backend generates typed keys. Extract-merge-translate CI pipeline.',
    tags: ['i18n', 'react-i18next', 'rtl', 'localisation', 'typescript', 'mnc']
  },
  {
    id: 'react-103',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you implement a custom renderer (like react-three-fiber) using React\'s reconciler?',
    options: [
      'Use react-reconciler package, define host config methods (createInstance, appendChildToContainer, commitUpdate, etc.) that map React elements to your target platform\'s primitives',
      'Fork the React repository and modify the renderer',
      'Use ReactDOM.createPortal to redirect renders',
      'Custom renderers are not possible without React source access'
    ],
    correctAnswer: 'Use react-reconciler package, define host config methods (createInstance, appendChildToContainer, commitUpdate, etc.) that map React elements to your target platform\'s primitives',
    explanation:
      'react-reconciler exposes the Fiber reconciler as a package. You implement a host config: createInstance(type, props) → create your object (Three.js Mesh, canvas node). appendChildToContainer/removeChild manage the tree. commitUpdate(instance, newProps) diffs prop changes. React handles all scheduling, priority, Suspense — you only define how primitives are created and updated.',
    tags: ['custom-renderer', 'react-reconciler', 'react-three-fiber', 'internals', 'mnc']
  },
  {
    id: 'react-104',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How do you handle cross-cutting concerns (auth, logging, analytics) in a large React app without polluting components?',
    options: [
      'Middleware-style HOCs or wrappers at the router level, custom hooks for reusable concerns, React Context for injectable dependencies, and component composition for slot-based cross-cutting',
      'Add auth and analytics checks to every component directly',
      'Use a global singleton with direct DOM access',
      'Cross-cutting concerns cannot be abstracted in React'
    ],
    correctAnswer: 'Middleware-style HOCs or wrappers at the router level, custom hooks for reusable concerns, React Context for injectable dependencies, and component composition for slot-based cross-cutting',
    explanation:
      'Patterns: (1) Route-level HOC — withAuth(ProtectedRoute) at the router wraps entire routes. (2) usePageView() hook in a layout component automatically tracks navigation. (3) ErrorBoundary + Sentry at strategic tree levels. (4) AnalyticsContext with useTrack() hook for component-level events. (5) Server-side middleware (Next.js middleware.ts) for auth redirects without client JS.',
    tags: ['cross-cutting', 'hoc', 'middleware', 'analytics', 'auth', 'mnc']
  },
  {
    id: 'react-105',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you build a high-performance dashboard with real-time charts updating at 60fps?',
    options: [
      'Use Canvas-based charting (Chart.js or uPlot), Web Workers for data processing, requestAnimationFrame for render scheduling, and avoid React re-renders during animation by using imperative canvas APIs',
      'Re-render a React component with new data on every WebSocket message',
      'Use SVG charts and update via setState on each data point',
      'Use a table instead of charts for performance'
    ],
    correctAnswer: 'Use Canvas-based charting (Chart.js or uPlot), Web Workers for data processing, requestAnimationFrame for render scheduling, and avoid React re-renders during animation by using imperative canvas APIs',
    explanation:
      'Real-time chart architecture: uPlot is extremely fast (Canvas-based, no React). WebSocket data goes to a Web Worker for aggregation (off main thread). Worker sends processed data back; a ref holds the chart instance. chart.current.setData(data) imperatively — no React re-render. requestAnimationFrame batches updates. This achieves 60fps with thousands of data points.',
    tags: ['charts', 'canvas', 'real-time', 'web-worker', 'performance', 'mnc']
  },
  {
    id: 'react-106',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement optimistic UI with conflict resolution in a collaborative React app?',
    options: [
      'Apply updates locally immediately, tag with a client-generated ID, send to server; on conflict (409), receive server truth and rebase local pending changes on top; show conflict UI if unresolvable',
      'Block the UI until the server confirms every action',
      'Apply updates only after server confirms, with no optimistic UI',
      'Use last-write-wins without conflict detection'
    ],
    correctAnswer: 'Apply updates locally immediately, tag with a client-generated ID, send to server; on conflict (409), receive server truth and rebase local pending changes on top; show conflict UI if unresolvable',
    explanation:
      'Linear-style optimistic UI: generate client ID for each operation. Apply immediately to local state. Send to server with expected version number. Server returns 200 (accepted) or 409 (conflict + server state). On conflict: rebase pending operations on server state where possible; show conflict resolution UI for irresolvable cases. Use an operation log to replay pending ops over the new base.',
    tags: ['optimistic-ui', 'conflict-resolution', 'collaboration', 'ux', 'mnc']
  },
  {
    id: 'react-107',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement progressive enhancement in a React/Next.js application?',
    options: [
      'Ensure core functionality works without JS using Server Components and server-side form handling (Server Actions with native form action), then enhance with client interactivity via "use client"',
      'Require JavaScript for all functionality — it is a React app',
      'Progressive enhancement only applies to non-React sites',
      'Use a separate no-JS HTML fallback site'
    ],
    correctAnswer: 'Ensure core functionality works without JS using Server Components and server-side form handling (Server Actions with native form action), then enhance with client interactivity via "use client"',
    explanation:
      'Next.js App Router progressive enhancement: <form action={serverAction}> works with native HTML form submission — no JS needed for CRUD. Server Components render HTML without shipping JS. Client Components are the enhancement layer for interactivity. This approach works for users with JS disabled/slow connections and improves SEO. Test by disabling JS in DevTools.',
    tags: ['progressive-enhancement', 'next.js', 'server-actions', 'server-components', 'accessibility', 'mnc']
  },
  {
    id: 'react-108',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design the data fetching strategy for a complex dashboard with 10+ widgets?',
    options: [
      'Parallel fetching with React Query, each widget manages its own query with individual loading/error states, stale-while-revalidate per widget, shared cache for common entities, and waterfall prevention via prefetching',
      'Fetch all dashboard data in one useEffect on mount',
      'Fetch data in a parent and pass as props to all widgets',
      'Use GraphQL subscriptions for all 10 widgets simultaneously'
    ],
    correctAnswer: 'Parallel fetching with React Query, each widget manages its own query with individual loading/error states, stale-while-revalidate per widget, shared cache for common entities, and waterfall prevention via prefetching',
    explanation:
      'Architecture: each widget owns its useQuery — isolated loading/error states prevent one slow widget from blocking others. React Query deduplicates identical requests. Normalised cache (entity-based) shares user/org data across widgets. Prefetch on route transition: queryClient.prefetchQuery for above-fold widgets. For GraphQL: fragment colocation fetches only needed fields per widget.',
    tags: ['data-fetching', 'react-query', 'dashboard', 'parallel-requests', 'mnc']
  },
  {
    id: 'react-109',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement code-splitting and lazy loading at an enterprise scale with 500+ routes?',
    options: [
      'Route-based code splitting with React.lazy, Webpack magic comments for chunk naming (stable cache keys), React Query prefetching on hover/focus, and a route registry for automated splitting',
      'Load all routes eagerly in one bundle',
      'Code splitting is only for initial load — all subsequent routes load the full bundle',
      'Use a separate CDN domain for each route chunk'
    ],
    correctAnswer: 'Route-based code splitting with React.lazy, Webpack magic comments for chunk naming (stable cache keys), React Query prefetching on hover/focus, and a route registry for automated splitting',
    explanation:
      'Enterprise code splitting: React Router v6 lazy() or Next.js automatic per-page splitting. Webpack chunk names (/* webpackChunkName: "admin-users" */) ensure stable filenames for long-term caching. Prefetch on link hover: queryClient.prefetchQuery + dynamic import() of the route chunk. Sentry release tracking for chunk-level error attribution. Bundle budget CI gate (bundlesize package).',
    tags: ['code-splitting', 'react.lazy', 'webpack', 'performance', 'caching', 'mnc']
  },
  {
    id: 'react-110',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a rich text editor in React that supports collaboration?',
    options: [
      'Use ProseMirror or Slate.js for the editor model, Yjs for CRDT-based collaboration, hocuspocus/y-websocket for sync, and React for the toolbar and UI overlay',
      'Use a contenteditable div with innerHTML',
      'Use a native textarea with custom formatting applied server-side',
      'Build the editor from scratch using canvas'
    ],
    correctAnswer: 'Use ProseMirror or Slate.js for the editor model, Yjs for CRDT-based collaboration, hocuspocus/y-websocket for sync, and React for the toolbar and UI overlay',
    explanation:
      'Architecture: ProseMirror (battle-tested, used by Notion) or Slate.js manage the document model. Tiptap wraps ProseMirror with a React-friendly API. Yjs provides the CRDT layer — prosemirror-y-sync binds the two. Hocuspocus (Node.js) is the WebSocket server for Yjs. React renders the toolbar, mention dropdowns, and block menus. Comment threads use anchored ranges.',
    tags: ['rich-text-editor', 'prosemirror', 'yjs', 'collaboration', 'mnc']
  },
  {
    id: 'react-111',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you implement a React hook for window resize events that is performant and handles SSR?',
    options: [
      'useEffect with a throttled resize listener, initialise to undefined on server and actual dimensions on client, cleanup listener on unmount, and use useLayoutEffect only if synchronous measurement is needed',
      'useState initialised with window.innerWidth directly',
      'useEffect polling window dimensions with setInterval',
      'A global resize handler stored in a module-level variable'
    ],
    correctAnswer: 'useEffect with a throttled resize listener, initialise to undefined on server and actual dimensions on client, cleanup listener on unmount, and use useLayoutEffect only if synchronous measurement is needed',
    explanation:
      'SSR-safe useWindowSize: initialise with undefined (server has no window). useEffect (runs only client-side): const handleResize = throttle(() => setSize({ width: window.innerWidth, height: window.innerHeight }), 100); window.addEventListener("resize", handleResize); return () => window.removeEventListener("resize", handleResize). Return size with undefined checks for SSR consumers. Use ResizeObserver for element-level sizing.',
    tags: ['useWindowSize', 'custom-hooks', 'ssr', 'performance', 'mnc', 'coding']
  },
  {
    id: 'react-112',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you build a React component library with zero-runtime CSS-in-JS?',
    options: [
      'Use vanilla-extract, Panda CSS, or StyleX for static CSS extraction at build time — components ship CSS classes, not runtime style injection, enabling streaming SSR and eliminating FOUC',
      'Use styled-components with server-side style injection',
      'Use inline styles for all components',
      'Zero-runtime CSS-in-JS is impossible with React'
    ],
    correctAnswer: 'Use vanilla-extract, Panda CSS, or StyleX for static CSS extraction at build time — components ship CSS classes, not runtime style injection, enabling streaming SSR and eliminating FOUC',
    explanation:
      'Runtime CSS-in-JS (styled-components, Emotion) injects styles at render time — problematic for streaming SSR. Zero-runtime alternatives: vanilla-extract (TypeScript CSS at build time, generates .css files). StyleX (Meta): atomic CSS extracted at compile time, used in React.dev. Panda CSS: design-token-aware utility class generation. All produce static CSS — no runtime overhead, works with Suspense streaming.',
    tags: ['css-in-js', 'zero-runtime', 'vanilla-extract', 'stylex', 'streaming-ssr', 'mnc']
  },
  {
    id: 'react-113',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you handle complex async orchestration in React (dependent queries, parallel with join, retry)?',
    options: [
      'React Query\'s dependent queries (enabled flag), parallel queries via useQueries, suspense mode for waterfall elimination, retry/backoff config, and React Suspense boundaries for loading states',
      'Chain useEffect hooks for sequential async operations',
      'Use async/await in component bodies directly',
      'All async operations should be moved to Redux middleware'
    ],
    correctAnswer: 'React Query\'s dependent queries (enabled flag), parallel queries via useQueries, suspense mode for waterfall elimination, retry/backoff config, and React Suspense boundaries for loading states',
    explanation:
      'Patterns: Dependent: useQuery(["orders", userId], fetchOrders, { enabled: !!userId }). Parallel: useQueries([{ queryKey: ["profile"] }, { queryKey: ["permissions"] }]) — runs concurrently, returns array. Suspense: <Suspense> + useQuery({ suspense: true }) — component suspends automatically. Retry: { retry: 3, retryDelay: attempt => 2 ** attempt * 1000 }. Data Loader pattern prefetches on navigation.',
    tags: ['react-query', 'async-orchestration', 'dependent-queries', 'parallel', 'mnc']
  },
  {
    id: 'react-114',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you build a React app that works seamlessly offline and syncs when reconnected?',
    options: [
      'Service Worker (Workbox) for asset/API caching, IndexedDB for structured offline data, Background Sync API for deferred mutations, and CRDT or last-write-wins for conflict resolution on reconnect',
      'Store all data in localStorage and sync on every action',
      'Show an error page when offline',
      'Disable all user interactions when navigator.onLine is false'
    ],
    correctAnswer: 'Service Worker (Workbox) for asset/API caching, IndexedDB for structured offline data, Background Sync API for deferred mutations, and CRDT or last-write-wins for conflict resolution on reconnect',
    explanation:
      'Offline-first React: Workbox precaches app shell. API responses cached with stale-while-revalidate. Mutations queued in IndexedDB when offline. Background Sync replays queued mutations on reconnect. React Query\'s persistQueryClient plugin persists the query cache to IndexedDB. Conflict resolution: server-wins for most cases; CRDT (Yjs) for concurrent edits.',
    tags: ['offline-first', 'service-worker', 'indexeddb', 'background-sync', 'pwa', 'mnc']
  },
  {
    id: 'react-115',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a plugin/extension system for a React application (like Figma plugins)?',
    options: [
      'Sandbox plugins in an iframe or Worker (security boundary), expose a typed postMessage API, use React portals for plugin-rendered UI, and version the plugin API with breaking change detection',
      'Allow plugins to import React components directly',
      'Execute plugin code with eval() in the main thread',
      'Load plugins as ES modules directly in the main app bundle'
    ],
    correctAnswer: 'Sandbox plugins in an iframe or Worker (security boundary), expose a typed postMessage API, use React portals for plugin-rendered UI, and version the plugin API with breaking change detection',
    explanation:
      'Security-first plugin system (like Figma): plugins run in a sandboxed iframe (no access to main DOM) or Worker. Main app exposes a typed API via postMessage (Comlink simplifies this). Plugin UI is in the iframe, main-thread-controlled UI in the host. API versioning via capability objects. Approval pipeline for marketplace plugins. CSP restricts iframe capabilities.',
    tags: ['plugins', 'sandboxing', 'iframe', 'postMessage', 'security', 'mnc']
  },
  {
    id: 'react-116',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement skeleton screens and progressive content loading in React?',
    options: [
      'React.Suspense with skeleton fallbacks at granular levels, CSS animation for pulse effect, staggered reveal via CSS animation-delay, and prioritise above-fold content with fetchpriority',
      'Show a full-page spinner until all content is loaded',
      'Load all content eagerly and hide with CSS until ready',
      'Use a setTimeout to delay showing skeleton screens'
    ],
    correctAnswer: 'React.Suspense with skeleton fallbacks at granular levels, CSS animation for pulse effect, staggered reveal via CSS animation-delay, and prioritise above-fold content with fetchpriority',
    explanation:
      'Best practice: wrap individual content sections in <Suspense fallback={<SkeletonCard/>}> — not the entire page. This allows above-fold content to show while below-fold sections are still loading. Skeleton components use CSS animation: shimmer or pulse (@keyframes). Stagger reveals with animation-delay for a polished feel. fetchpriority="high" on above-fold data fetches.',
    tags: ['skeleton-screens', 'suspense', 'loading-states', 'ux', 'performance', 'mnc']
  },
  {
    id: 'react-117',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you manage global loading and error states for all API calls in a React app?',
    options: [
      'React Query\'s global callbacks (onError in QueryClient defaultOptions), a toast notification system (react-hot-toast), network status detection, and per-query override capability',
      'Check isLoading and isError in every component separately',
      'Use a global useState in the root component for all errors',
      'Show a full-page error for any API failure'
    ],
    correctAnswer: 'React Query\'s global callbacks (onError in QueryClient defaultOptions), a toast notification system (react-hot-toast), network status detection, and per-query override capability',
    explanation:
      'Architecture: new QueryClient({ defaultOptions: { queries: { onError: globalErrorHandler }, mutations: { onError: globalErrorHandler } } }). globalErrorHandler shows a toast for network errors, logs to Sentry, and shows an auth redirect for 401. Individual queries can override: useQuery(..., { onError: customHandler }). useNetworkStatus hook monitors navigator.onLine for connection-aware UI.',
    tags: ['error-handling', 'react-query', 'global-state', 'ux', 'mnc']
  },
  {
    id: 'react-118',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How do you implement end-to-end type safety from a React frontend to a Node.js backend?',
    options: [
      'Shared Zod schemas between client and server, tRPC for type-safe RPC with zero codegen, or GraphQL + graphql-code-generator for schema-first types, with strict TypeScript in both layers',
      'Manually keep frontend and backend types synchronised',
      'Use any type on the frontend to avoid API type mismatches',
      'Generate types from OpenAPI spec (Swagger) on every API change'
    ],
    correctAnswer: 'Shared Zod schemas between client and server, tRPC for type-safe RPC with zero codegen, or GraphQL + graphql-code-generator for schema-first types, with strict TypeScript in both layers',
    explanation:
      'tRPC approach: define procedures in a router (input: z.object({...}), output: inferenced from return type). Client imports the AppRouter type and gets full autocomplete + type checking with no codegen. For REST: a shared @company/api-types package with Zod schemas validates at runtime and provides TypeScript types. Breaking API changes become TypeScript errors in CI.',
    tags: ['type-safety', 'trpc', 'zod', 'graphql', 'typescript', 'fullstack', 'mnc']
  },
  {
    id: 'react-119',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement an infinite canvas (like Excalidraw) in React?',
    options: [
      'Canvas (2D context or WebGL) with a viewport transform matrix, React for the UI layer (toolbar, properties), event handling for pan/zoom, quadtree for spatial querying, and offscreen canvas for background rendering',
      'An absolutely positioned div with overflow:hidden',
      'SVG with React state for every element position',
      'A large scrollable iframe'
    ],
    correctAnswer: 'Canvas (2D context or WebGL) with a viewport transform matrix, React for the UI layer (toolbar, properties), event handling for pan/zoom, quadtree for spatial querying, and offscreen canvas for background rendering',
    explanation:
      'Architecture: canvas.getContext("2d") with a 3x3 transform matrix for pan/zoom (ctx.setTransform). React renders NO canvas elements — it manages toolbar, sidebars, and selection overlays. Canvas drawing is imperative in a requestAnimationFrame loop. Quadtree (rbush library) handles hit-testing and culling off-screen elements. OffscreenCanvas in a Worker renders static backgrounds. State held in a plain JS store with React only for UI chrome.',
    tags: ['infinite-canvas', 'webgl', 'excalidraw', 'pan-zoom', 'performance', 'mnc']
  },
  {
    id: 'react-120',
    topic: 'react',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you implement a window resize event hook that is performant, SSR-safe, and handles edge cases?',
    options: [
      'useEffect with throttled ResizeObserver on document.documentElement, SSR-safe initialisation, cleanup on unmount, debounce for font/zoom resize events, and proper TypeScript typing',
      'window.onresize = handler directly in the component',
      'Polling with setInterval(checkSize, 100)',
      'CSS media queries only, no JavaScript needed'
    ],
    correctAnswer: 'useEffect with throttled ResizeObserver on document.documentElement, SSR-safe initialisation, cleanup on unmount, debounce for font/zoom resize events, and proper TypeScript typing',
    explanation:
      'Production useWindowSize: prefer ResizeObserver over the resize event (captures font-size/zoom changes). Guard with typeof window !== "undefined" for SSR. Throttle/debounce to avoid flooding state updates. Cleanup: observer.disconnect() in useEffect return. TypeScript: return type of {width: number | undefined, height: number | undefined}. Consider using useSyncExternalStore for concurrent-safe external subscription.',
    tags: ['useWindowSize', 'resize-observer', 'custom-hooks', 'ssr', 'typescript', 'mnc']
  }
];