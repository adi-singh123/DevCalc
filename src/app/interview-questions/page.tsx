/**
 * app/interview-questions/page.tsx
 * Interview Home Page - SEO optimized, production-ready landing for all interview topics.
 */



import React from "react";
import { Metadata } from 'next';
import { interviewTopics } from '@/src/data/interview';
import { InterviewTopicCard } from '@/src/components/interview/InterviewTopicCard';
import Breadcrumb from "@/src/components/seo/Breadcrumb";
import BreadcrumbSchema from "@/src/components/seo/BreadcrumbSchema";
import WhyChooseDevCalc from '@/src/components/interview/WhyChooseDevCalc';
import TopCompanies from '@/src/components/interview/TopCompanies';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PopularCalculators from '@/src/components/calculator/PopularCalculators';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Technical Interview Questions 2026 | JavaScript, React, DSA, System Design | DevCalc',
  description: 'Ace your next software engineering interview with 1500+ curated technical interview questions covering JavaScript, React, Next.js, TypeScript, Node.js, SQL, DSA, and System Design. Free prep for freshers and experienced developers targeting Google, Amazon, Microsoft, TCS, and Infosys.',
  keywords: [
    // Core intent
    'Technical Interview Questions',
    'Developer Interview Questions',
    'Software Engineer Interview Questions',
    'Programming Interview Questions',
    'Coding Interview Questions',
    'Coding Interview Preparation',
    'Technical Interview Preparation',
    'Interview Questions and Answers',
    'Top Interview Questions 2025',
    'Latest Interview Questions',
    'Most Asked Interview Questions',
    'Online Interview Quiz',
    'Technical MCQ Questions',
    'Interview MCQ',
    'Programming MCQ',
    'Computer Science Interview Questions',
    'Software Developer Interview',
    'IT Interview Questions',
    'Job Interview Preparation',
    'Placement Interview Questions',
    'Campus Placement Questions',
    'Technical Assessment Questions',
    'Developer Quiz',
    'Coding Quiz',
    'Technical Quiz',
    'Software Engineering Quiz',
    'Interview Practice',
    'Mock Interview Questions',
    'Online Coding Test',
    'Programming Test',
    'Interview Preparation Guide',

    // Programming Languages
    'JavaScript Interview Questions',
    'TypeScript Interview Questions',
    'Python Interview Questions',
    'Java Interview Questions',
    'C Interview Questions',
    'C++ Interview Questions',
    'C Sharp Interview Questions',
    'Go Interview Questions',
    'Golang Interview Questions',
    'PHP Interview Questions',
    'Rust Interview Questions',
    'Kotlin Interview Questions',
    'Swift Interview Questions',
    'Ruby Interview Questions',

    // Frontend
    'HTML Interview Questions',
    'CSS Interview Questions',
    'Bootstrap Interview Questions',
    'Tailwind CSS Interview Questions',
    'React Interview Questions',
    'React JS Interview Questions',
    'Next.js Interview Questions',
    'Angular Interview Questions',
    'Vue.js Interview Questions',
    'Redux Interview Questions',
    'Frontend Developer Interview Questions',

    // Backend
    'Node.js Interview Questions',
    'Express.js Interview Questions',
    'NestJS Interview Questions',
    'ASP.NET Interview Questions',
    'Spring Boot Interview Questions',
    'Django Interview Questions',
    'Flask Interview Questions',
    'Laravel Interview Questions',
    'Backend Developer Interview Questions',
    'REST API Interview Questions',
    'GraphQL Interview Questions',

    // Database
    'SQL Interview Questions',
    'MySQL Interview Questions',
    'PostgreSQL Interview Questions',
    'MongoDB Interview Questions',
    'Redis Interview Questions',
    'Database Interview Questions',
    'DBMS Interview Questions',

    // DevOps & Cloud
    'Docker Interview Questions',
    'Kubernetes Interview Questions',
    'AWS Interview Questions',
    'Azure Interview Questions',
    'Google Cloud Interview Questions',
    'CI/CD Interview Questions',
    'Jenkins Interview Questions',
    'Linux Interview Questions',
    'Git Interview Questions',
    'GitHub Interview Questions',
    'DevOps Interview Questions',

    // CS Fundamentals
    'Data Structures Interview Questions',
    'Algorithms Interview Questions',
    'DSA Interview Questions',
    'System Design Interview Questions',
    'Operating System Interview Questions',
    'Computer Networks Interview Questions',
    'OOP Interview Questions',
    'Object Oriented Programming Interview Questions',
    'Design Patterns Interview Questions',
    'Microservices Interview Questions',

    // Experience Based
    'Interview Questions for Freshers',
    'Interview Questions for Experienced Developers',
    'Junior Developer Interview Questions',
    'Senior Software Engineer Interview Questions',
    'Full Stack Developer Interview Questions',

    // Company Specific
    'Google Interview Questions',
    'Microsoft Interview Questions',
    'Amazon Interview Questions',
    'Meta Interview Questions',
    'Apple Interview Questions',
    'Netflix Interview Questions',
    'FAANG Interview Questions',
    'TCS Interview Questions',
    'Infosys Interview Questions',
    'Wipro Interview Questions',
    'Accenture Interview Questions',
    'Capgemini Interview Questions',
    'Cognizant Interview Questions',
    'Deloitte Interview Questions',

    // Long-tail & Question-form
    'how to prepare for technical interview',
    'how many DSA questions to solve for interview',
    'system design interview preparation guide',
    'JavaScript interview questions for freshers',
    'React interview questions for 2 years experience',
    'how to crack MNC interviews',
    'interview preparation in 30 days',
    'interview preparation in one week',
    'what to study for software engineer interview',
    'how to answer tell me about yourself developer',
    'best resources for coding interview preparation',
    'how to prepare for FAANG interview',

    // Search Intent
    'Free Interview Questions',
    'Interview Questions with Answers',
    'Interview Questions with Explanation',
    'Practice Interview Questions',
    'Technical Interview Practice',
    'Programming Interview Guide',
    'Best Interview Questions 2025',
    'Online Interview Preparation',
  ],
  alternates: {
    canonical: "https://www.devcalc.in/interview-questions",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    title: 'Technical Interview Questions 2025 | JavaScript, React, DSA, System Design | DevCalc',
    description: 'Ace your next software engineering interview with 1500+ curated questions covering JavaScript, React, Next.js, TypeScript, Node.js, SQL, DSA, and System Design. Free for freshers and experienced developers.',
    url: "https://www.devcalc.in/interview-questions",
    siteName: "DevCalc",
    type: "website",
    images: [
      {
        url: "https://www.devcalc.in/og/interview-questions.png",
        width: 1200,
        height: 630,
        alt: "DevCalc Technical Interview Questions – JavaScript, React, DSA, System Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Interview Questions 2025 | DevCalc",
    description: "1500+ curated technical interview questions for JavaScript, React, DSA, System Design and more. Free prep for all experience levels.",
    images: ["https://www.devcalc.in/og/interview-questions.png"],
    site: "@devcalcin",
  },
};

// --- Constants ---
const breadcrumbSchemaItems = [
  { name: "Home", href: "/" },
  { name: "Interview Questions", href: "/interview-questions" },
];

const faqs = [
  {
    q: "What are technical interview questions and why do companies ask them?",
    a: "Technical interview questions are structured assessments designed to measure a developer's depth of knowledge in programming languages, frameworks, data structures, algorithms, and system design. Companies ask them because a candidate's academic background or resume alone cannot predict how they will perform when solving real engineering problems under constraints. A technical interview simulates the actual thinking process required on the job: breaking down ambiguous requirements, choosing the right data structure, optimizing for time and space complexity, and communicating decisions to teammates. At product companies like Google, Amazon, and Microsoft, technical rounds directly determine whether an engineer can operate at the expected bar for their level. At service-based companies like TCS, Infosys, and Wipro, they screen for fundamental programming ability and language proficiency. Understanding this purpose helps you prepare with the right mindset — the goal is not memorisation but demonstrating structured, confident problem-solving."
  },
  {
    q: "How should freshers prepare for technical interviews from scratch?",
    a: "If you are a fresher with no work experience, your preparation should follow a clear, phased approach. Start with core computer science fundamentals: operating systems, computer networks, DBMS, and object-oriented programming. These appear in almost every campus placement and MNC screening round. Simultaneously, strengthen your grasp of at least one programming language — JavaScript or Python are recommended for their broad applicability. Next, move to data structures and algorithms: arrays, linked lists, trees, graphs, hashmaps, and sorting algorithms. Solve 100–150 problems on platforms like LeetCode or GeeksforGeeks, starting with Easy-level problems and gradually moving to Medium. Once fundamentals are in place, learn one frontend framework like React and one backend runtime like Node.js so you can build small, complete projects. A project with a live URL, a GitHub repository with a proper README, and the ability to explain every architectural decision will differentiate you from hundreds of other freshers. Finally, practice behavioural questions using the STAR method — Situation, Task, Action, Result — because HR rounds are eliminators at scale."
  },
  {
    q: "How should experienced developers prepare for senior-level interviews?",
    a: "Experienced developers often make the mistake of over-indexing on coding rounds and under-preparing for system design and behavioural interviews, which carry far greater weight at the senior level. Start by auditing your current knowledge gaps: if you have been working primarily in frontend, spend dedicated time on distributed systems, databases, caching, and API design. For system design, practice designing real systems — URL shorteners, notification services, e-commerce platforms, social feeds — and articulate the trade-offs you are making: consistency vs. availability, SQL vs. NoSQL, monolith vs. microservices. Revisit algorithmic thinking too, since companies like Google and Meta expect senior engineers to solve Medium-to-Hard DSA problems fluently. Strengthen your resume to reflect impact with numbers: 'Reduced page load time by 40%' is significantly more compelling than 'Worked on performance improvements.' Practice narrating your project architecture clearly in under five minutes, because interviewers at this level are evaluating your communication skills alongside your technical depth."
  },
  {
    q: "How many DSA questions should I solve before my interview?",
    a: "The number of questions matters less than the quality and variety of your practice. A common misconception is that solving 500 LeetCode problems guarantees success. In practice, 150–200 well-understood problems across all major topics — arrays, strings, binary search, two pointers, sliding window, recursion, dynamic programming, trees, graphs, heaps, and tries — will prepare you for most interviews at product companies. The key principle is pattern recognition: once you deeply understand the sliding window pattern, you can solve dozens of problems that follow it. For service-based companies and campus placements, 80–100 problems covering Easy and Medium difficulty is typically sufficient. Track your progress by topic rather than by count. If you have solved 30 tree problems but only 5 graph problems, spend the next two weeks on graphs and BFS/DFS traversal. Revisiting problems you have previously solved — without looking at the solution — is one of the highest-yield revision techniques available."
  },
  {
    q: "How do system design interviews work and how should I prepare?",
    a: "System design interviews are open-ended conversations where the interviewer gives you a vague product requirement — 'Design Twitter' or 'Design a ride-sharing backend' — and expects you to drive the discussion. There is no single correct answer; the interviewer is evaluating your ability to clarify requirements, make reasonable assumptions, estimate scale, propose a high-level architecture, and iteratively refine it under constraints. A reliable framework is: clarify functional and non-functional requirements first, then estimate traffic and data volume, design the API layer, propose the database schema and choose between SQL and NoSQL with justification, add caching (Redis), message queues (Kafka/RabbitMQ) for async processing, and discuss how you would scale the system horizontally. Topics you must be comfortable with include load balancers, CDNs, database sharding and replication, consistent hashing, rate limiting, and CAP theorem. System design is typically only tested at companies for mid-level and senior roles, but learning it early gives you a significant advantage over peers who delay it."
  },
  {
    q: "How should I prepare for a technical interview in 30 days?",
    a: "A 30-day preparation plan works well if structured week by week. Week one: revisit CS fundamentals — DBMS, OS concepts (processes, threads, memory management), computer networks (TCP/IP, HTTP, DNS), and OOP principles. Week two: focus on data structures and algorithms — arrays, linked lists, stacks, queues, trees, graphs, and sorting. Aim for 8–10 problems per day, mixing Easy and Medium difficulty. Week three: technology-specific preparation — whichever stack your target role requires. If it is a JavaScript/React role, practice component design, hooks, performance optimisation, and browser fundamentals. If it is a backend role, focus on Node.js, REST API design, authentication (JWT, OAuth), and SQL query optimisation. Week four: system design basics, mock interviews, and behavioural preparation. Record a mock interview video of yourself. Watching the playback reveals communication habits you cannot notice in the moment — filler words, rushing past edge cases, not clarifying requirements."
  },
  {
    q: "How do I prepare for a technical interview in just one week?",
    a: "One week demands ruthless prioritisation. Day one: revise the most commonly asked topics in your target stack. For JavaScript roles, that means closures, the event loop, promises, and ES6+. For full-stack, add REST API design and basic SQL. Days two and three: solve 20–30 high-frequency LeetCode problems in the Easy–Medium range — two-sum, valid parentheses, longest substring without repeating characters, binary search variants, and BFS/DFS traversal. Days four and five: focus entirely on the technologies listed in the job description. Read the official documentation for one major framework (React or Node.js) and practice explaining concepts aloud — not just reading them. Day six: do two complete mock interviews. Use a friend, a platform like Pramp, or record yourself. Identify the three biggest gaps revealed and target them. Day seven: light revision, rest, and logistics — confirm the interview link, check your internet connection, prepare your workspace, and sleep well. Exhausted candidates underperform relative to their actual knowledge."
  },
  {
    q: "How do coding interviews actually work at product companies?",
    a: "At most product companies, the coding interview is a 45–60 minute live session — either in a shared editor like CoderPad or on a whiteboard for on-site rounds. The interviewer gives you a problem statement and expects you to engage immediately by asking clarifying questions: What are the input constraints? Can the array be empty? Should I handle null inputs? This demonstrates that you understand requirements before coding, which is exactly what engineers do in production. After clarifying, describe your intended approach before writing a single line of code. This allows the interviewer to give early feedback if you are heading in a wrong direction. Write clean, readable code — good variable names and logical structure matter even in interviews. Once you have a working solution, proactively discuss its time and space complexity using Big O notation, then suggest optimisations. At companies like Google and Meta, the bar is typically a working Medium-difficulty solution within 30 minutes with clear communication throughout."
  },
  {
    q: "How are online assessments (OA) and MCQ rounds evaluated?",
    a: "Online assessments are the first filter at most companies. They typically combine MCQ sections covering computer science theory with one to three coding problems, all under a strict time limit ranging from 60 to 120 minutes. For the MCQ section, expect questions on output prediction (what does this code print?), complexity analysis (what is the time complexity of this algorithm?), and conceptual knowledge of DBMS, OS, and networking. These questions reward fast, accurate recall — practise under timed conditions weekly, not just the night before. For the coding section, read all problems before starting. Some problems are harder than they appear while others have elegant one-line solutions. Test edge cases explicitly: empty arrays, single elements, maximum integer values, and negative numbers. Many OA platforms also track your keystroke patterns, copy-paste behaviour, and tab switches, so avoid switching windows. At service-based companies, clearing the OA cutoff (typically 60–70%) with consistency in time management is often enough to advance to the next round."
  },
  {
    q: "How do I answer 'Tell me about yourself' in a developer interview?",
    a: "This is the most predictable question in any interview and the most frequently fumbled. Treat it as your 90-second product pitch, not a biography. A strong response follows the Present–Past–Future structure: start with who you are right now and what you build, then briefly describe the experience that shaped you, and end with why you are excited about this specific role. For example: 'I am a frontend engineer with three years of experience building React applications for e-commerce platforms. In my current role, I led the migration from a class component architecture to hooks, which reduced our average bundle size by 22%. Before this, I worked on a startup where I wore multiple hats — handling both the React frontend and the Node.js backend. I am drawn to this role because your team is solving distributed data problems at scale, which aligns with where I want to grow as an engineer.' This answer is specific, quantified, and forward-looking. Practise it until it sounds natural, not memorised."
  },
  {
    q: "What projects should I add to my resume as a developer?",
    a: "The best projects for a developer resume share three qualities: they solve a real problem, they demonstrate technical depth, and you can defend every design decision with confidence. Avoid generic tutorial projects — a simple to-do list or weather app signals that you followed instructions rather than engineered a solution. Instead, build something that has a genuine use case and incorporates at least one non-trivial technical challenge: real-time updates using WebSockets, an authentication flow with JWT and refresh token rotation, a server-side rendered Next.js application with dynamic open graph images, or a REST API with rate limiting and caching. For each project on your resume, be ready to answer: Why did you choose this tech stack? What was the hardest problem you encountered and how did you solve it? How would you scale this if it had 100,000 users? If you can answer these fluently, the project adds genuine value to your resume. A deployed project with a live URL and a clean GitHub repository demonstrates execution ability that descriptions alone cannot."
  },
  {
    q: "How do I explain my project architecture in a technical interview?",
    a: "Interviewers ask about project architecture to assess whether you made intentional engineering decisions or simply followed a tutorial. Structure your explanation using the C4 model of communication: start at the highest level (what does the system do and for whom?), then describe the major components and how they interact, then drill into any specific technical decisions the interviewer shows interest in. Use precise vocabulary: 'We used an event-driven architecture where the Order Service published events to a Kafka topic, which the Notification Service consumed to send emails asynchronously — this decoupled the two services so a slow email provider would not block order completion.' If your project is simpler, be honest and focus on what you did learn: 'It is a monolith — if I were scaling it, I would extract the authentication module into a separate service because it is stateless and independently deployable.' Admitting limitations while articulating how you would address them is far more impressive than overclaiming."
  },
  {
    q: "How do I prepare for HR and behavioural interview rounds?",
    a: "Behavioural interviews are eliminators at scale — many technically strong candidates are rejected because they struggle to articulate their experience clearly. The most reliable framework is STAR: Situation (briefly set the context), Task (what was your specific responsibility?), Action (what did you do, step by step?), Result (what was the measurable outcome?). Prepare five to eight STAR stories from your experience that can be adapted to common questions: a time you resolved a conflict, a time you failed and what you learned, a time you improved a process, and a time you disagreed with a decision and how you handled it. If you are a fresher without work experience, draw from academic projects, hackathons, or open source contributions. Avoid vague answers like 'I am a team player.' Instead, prove it with a specific story. Research the company before the HR round — interviewers notice when candidates have not read the company's engineering blog or recent product launches, and it signals low genuine interest."
  },
  {
    q: "How do FAANG interviews differ from service-based company interviews?",
    a: "FAANG interviews (Google, Amazon, Meta, Apple, Netflix) are structured around a consistent, calibrated evaluation framework. Every round — regardless of interviewer — assesses you against a defined set of competencies: coding ability, problem-solving clarity, communication, and for senior roles, system design and leadership principles. The coding bar is Medium-to-Hard LeetCode with an expectation of clean code, edge case handling, and Big O analysis. Amazon uniquely incorporates Leadership Principles questions in every round, expecting STAR-format answers tied to their specific principles. Service-based companies like TCS, Infosys, Wipro, and Accenture focus more heavily on MCQ filtering, aptitude tests, and fundamental programming knowledge. The coding problems are typically Easy to Medium. Communication skills, a strong CGPA (for freshers), and knowledge of at least one full-stack technology are weighted more heavily. The preparation strategy differs accordingly: FAANG preparation requires 3–6 months of systematic effort; service-based company preparation can be effective in 4–8 weeks with focused fundamentals."
  },
  {
    q: "What are the most common mistakes candidates make in technical interviews?",
    a: "The most damaging mistake is diving into code before fully understanding the problem. This signals that you write code before thinking — a red flag for any engineering team. Always spend the first three to five minutes asking clarifying questions and confirming your understanding of the expected input/output. The second most common mistake is silence: failing to narrate your thinking process. Interviewers cannot evaluate reasoning they cannot hear. Think out loud even when uncertain — 'I am considering a hashmap here because I need O(1) lookups, but I want to check whether the space trade-off is acceptable given the constraint.' The third mistake is over-optimising too early. Get a working brute-force solution first, then optimise. A working O(n²) solution is worth more than an incomplete O(n log n) attempt. Other frequent mistakes include ignoring edge cases, writing uncommented code that is impossible to follow, not testing solutions after writing them, and failing to ask what the interviewer is looking for when you are genuinely stuck."
  },
  {
    q: "How do I reduce interview anxiety and perform better under pressure?",
    a: "Interview anxiety is nearly universal, but it can be managed with the right preparation and mindset shifts. The most effective long-term anxiety reducer is volume of practice — the more mock interviews you do, the less threatening a real one feels. Pramp, Interviewing.io, and peer mock interviews all help, but even recording yourself solving a problem on video reduces the novelty of being observed while coding. In the interview itself, reframe 'I am being tested' to 'I am having a technical conversation with a peer.' This mental shift is not merely motivational — it changes your communication style from defensive to collaborative. When you encounter a problem you cannot immediately solve, say it explicitly: 'I have not seen this exact pattern before, but let me think through what approaches could work.' Interviewers value intellectual honesty over bluffing. Prepare a pre-interview routine: a short walk, a focused warm-up session solving one Easy problem to prime your mind, and a deliberate five-minute breathing exercise before joining the call all measurably improve performance."
  },
  {
    q: "How do I negotiate my salary as a software engineer?",
    a: "Salary negotiation is a skill most developers undervalue, partly because they are more comfortable with code than with uncomfortable conversations. The first principle is never to anchor yourself — avoid naming a number first if possible. If pressed, provide a range based on market research rather than your current salary, which has no bearing on your market value. Resources like Glassdoor, Levels.fyi, and LinkedIn Salary give reliable data for specific roles, companies, and locations. When you receive an offer, respond with genuine enthusiasm followed by a request for time to review: 'This is exciting — I would like a day or two to review the full package and come back to you.' During negotiation, the most powerful statement is: 'I am genuinely excited about this role. Based on my research and the value I would bring, I was expecting something closer to X. Is there flexibility there?' Most companies have a negotiation buffer built into initial offers. For senior roles at product companies, the difference between accepting the first offer and negotiating respectfully is often 10–20% in total compensation — a gap that compounds significantly over a career."
  },
  {
    q: "How should I use mock interviews in my preparation?",
    a: "Mock interviews are the highest-leverage practice tool available and the most underused. The goal of a mock interview is not to practise problems — it is to practise performing under observation. The experience of thinking clearly, communicating simultaneously, and writing code while someone watches is genuinely different from solo practice, and it must be trained separately. Schedule at least four to six mock interviews before any important interview. Use a combination of peer mocks (with a friend who is also preparing) and platform-based mocks on Pramp or Interviewing.io for the experience of interviewing with a stranger. After each mock, do a structured debrief: what clarifying questions did you miss? Did you communicate your approach before coding? Did you handle edge cases? Did you manage your time well? Video-record your mock sessions when possible — watching yourself is uncomfortable but extraordinarily informative. Interviewers commonly report that candidates who clearly do mock interviews regularly are noticeably more confident and efficient than those who only practise alone."
  },
  {
    q: "How should I approach revising before the day of an interview?",
    a: "The 48 hours before an interview should be devoted to consolidation, not new learning. Introducing unfamiliar concepts in this window creates false confidence and surface-level knowledge that collapses under questioning. Instead, review your personal notes, re-read the questions you bookmarked as difficult during your preparation, and redo two or three medium-difficulty problems you have previously solved without looking at your solutions. This active recall exercise reinforces neural pathways more effectively than passive re-reading. On the day before, write a short summary of the three or four topics you feel least confident about — concepts like dynamic programming, system design trade-offs, or CSS stacking contexts — and spend one focused hour on each. Go to sleep at a reasonable time. Cognitive performance degrades measurably after poor sleep, affecting both working memory and communication clarity. On the interview day itself, solve one Easy problem 30 minutes before the session to warm up your reasoning engine without fatiguing it."
  },
  {
    q: "What topics should experienced backend developers prioritise for senior interviews?",
    a: "Senior backend interviews are less about whether you can write a REST endpoint and more about how you would design, scale, secure, and operate a complex distributed system. The highest-priority topics are distributed systems fundamentals (consistency, availability, partition tolerance, and the trade-offs in CAP theorem), database internals (how indexes work under the hood, query planning, connection pooling, and replication strategies), and API design at scale (versioning, idempotency, rate limiting, and backward compatibility). You should be comfortable with event-driven architecture — when to use Kafka, RabbitMQ, or AWS SQS, and what guarantees each provides. Security is heavily weighted: OWASP Top 10, SQL injection prevention, SSRF, JWT vulnerabilities, and secure secrets management. Performance engineering topics include caching strategies (write-through, write-back, cache invalidation), CDN usage, and profiling Node.js or Python services to find bottlenecks. Communication is equally important at the senior level — you will be evaluated on how clearly you document decisions, write design proposals, and mentor junior engineers."
  },
  {
    q: "How should full stack developers prepare for interviews?",
    a: "Full stack developer interviews are demanding because they test breadth across frontend, backend, and infrastructure in addition to depth in at least one area. The most effective approach is to identify which layer you will be assessed most heavily on based on the job description, and lead with strength there while maintaining competence across the others. Foundational full stack topics include: component architecture and state management in React, server-side rendering with Next.js, REST and GraphQL API design, authentication flows (JWT, sessions, OAuth), SQL schema design and query optimisation, and basic DevOps — Docker, environment configuration, and CI/CD pipelines. During the interview, emphasise that you can reason across the entire request lifecycle: from a user clicking a button in the browser, through the network layer, through the API server, into the database, and back. This end-to-end thinking is what distinguishes a strong full stack engineer from someone who merely knows two separate things. Build one complete project — frontend, backend, database, deployed — and practise explaining every layer of it fluently."
  },
  {
    q: "How do I track and improve my interview performance over time?",
    a: "Most developers treat interview preparation as a binary pass/fail rather than a skill that improves iteratively with deliberate practice. Keep a preparation journal — a simple document or Notion page — where you log every interview and mock session with three entries: what questions were asked (or what topics you practised), what you did well, and one specific thing you will improve before the next session. Over four to six weeks, patterns will emerge: you might notice that you consistently rush past clarifying questions, or that you struggle with graph traversal problems, or that you freeze when an interviewer says 'How would you optimise this further?' Each identified pattern becomes a targeted practice item. Track your LeetCode or similar progress by topic, not just total count, and re-solve problems you got wrong after a two-week gap without looking at the solution. If you are consistently performing well in mock interviews but failing real ones, the gap is usually communication or anxiety management rather than technical knowledge — address those separately with the frameworks described in the anxiety preparation question above."
  },
  {
    q: "Should I learn design patterns before technical interviews?",
    a: "Design patterns are rarely tested directly in entry-level or junior interviews, but they become increasingly relevant as you target mid-level and senior roles. At the mid-level, interviewers may ask you to identify and apply a pattern in a live coding scenario: implementing an Observer pattern for event handling, a Factory pattern for object creation, or a Strategy pattern to replace conditionals in business logic. At the senior level, design patterns are assumed knowledge — the conversation is about when NOT to use them, how to recognise when a simpler approach is clearer, and how patterns translate to the specific language or framework you are working with. The most frequently tested patterns for JavaScript and TypeScript developers are Observer, Factory, Singleton (including its pitfalls), Module, Decorator, and Proxy. Rather than memorising the GoF catalogue, understand the problem each pattern solves. If you can explain 'I used an Observer pattern here because the component needed to react to state changes without the state knowing anything about the component,' you demonstrate applied understanding, which is what interviewers are actually measuring."
  },
  {
    q: "How do I prepare for microservices and cloud architecture questions?",
    a: "Microservices architecture questions are common at companies running large distributed systems, and they appear in both senior engineering and solution architect interviews. The core topics to understand are service decomposition (how to split a monolith into independently deployable services), inter-service communication (synchronous REST/gRPC vs. asynchronous messaging with Kafka or RabbitMQ), service discovery, API gateways, and distributed tracing. A question interviewers frequently ask is: 'What are the trade-offs of microservices versus a monolith?' The correct answer acknowledges that microservices add operational complexity — network failures, distributed transactions, data consistency across services — and that they are only the right choice when the organisational and scaling benefits outweigh those costs. For cloud architecture, understand the major AWS services relevant to application development: EC2, Lambda, S3, RDS, DynamoDB, CloudFront, API Gateway, SQS, and SNS. You do not need deep DevOps expertise for most engineering roles, but being able to describe how a web application is deployed and scaled on AWS (or Azure/GCP) demonstrates engineering maturity that hiring managers at product companies actively look for."
  },
];

// --- FAQ JSON-LD Schema ---
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs .map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": a.replace(/<[^>]+>/g, ''),
    },
  })),
};


export default function InterviewHomePage() {



  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      {/* FAQ JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* SEO Breadcrumbs */}
        <BreadcrumbSchema items={breadcrumbSchemaItems.map(i => ({ name: i.name, url: i.href }))} />
        <div className="py-4">
          <Breadcrumb items={[{ label: "Interview Questions" }]} />
        </div>

        {/* Hero Section */}
        <header className="text-center py-16 lg:py-24">
          <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
            100% Free Preparation
          </span>
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            Master Technical Interviews
          </h1>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Scale your career with curated interview questions, interactive MCQs, and deep-dive explanations for top-tier tech roles — from freshers targeting campus placements to senior engineers aiming for FAANG.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[ { val: "1500+", label: "Questions" }, { val: "4", label: "Difficulty Levels" }, { val: "100%", label: "Free" }, { val: "MNC", label: "Ready" } ].map((stat) => (
              <div key={stat.label} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.val}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </header>

        {/* Technology Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 text-center">Choose Your Interview Technology</h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12">Select a track to start your journey — beginner to senior, theory to system design.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interviewTopics.map((topic) => (
              <InterviewTopicCard key={topic.id} topic={topic} />
            ))}
          </div>
          
          <p className="text-center mt-12 text-slate-500 italic">
            More technologies like Angular, Vue, Python, Java, C++, Docker, AWS, MongoDB, and System Design are being added regularly.
          </p>
        </section>

        {/* Comprehensive Guide Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Technical Interview Preparation Guide</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Whether you are a fresher preparing for campus placements or a senior engineer targeting a FAANG switch, a structured approach to interview preparation is what separates consistent performers from candidates who rely on luck. This guide walks through every stage of the modern software engineering interview process — from understanding what companies actually evaluate, to mastering DSA, to navigating system design conversations and negotiating your offer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Guide Item 1 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Interview Process</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
                <li>• <strong>Online Assessment:</strong> MCQ filtering and timed coding challenges that screen candidates at scale. Expect output-prediction questions, complexity analysis, and one to three algorithmic problems.</li>
                <li>• <strong>MCQ Round:</strong> Core CS fundamentals covering DBMS, OS, OOP, and language-specific syntax. Speed and accuracy matter equally here.</li>
                <li>• <strong>Coding Round:</strong> Live problem solving in a shared editor. Interviewers assess not just correctness but your thought process, edge case handling, and Big O awareness.</li>
                <li>• <strong>Technical Discussion:</strong> A deep-dive into your projects, architectural decisions, and technology choices. Expect follow-up questions on every claim you make.</li>
                <li>• <strong>System Design:</strong> Open-ended scalability conversations for mid-level and senior roles. No single right answer — the interviewer evaluates how you frame trade-offs.</li>
                <li>• <strong>HR Round:</strong> Behavioural and culture-fit assessment using STAR-format questions. This round eliminates technically strong candidates who communicate poorly.</li>
              </ul>
            </div>

            {/* Guide Item 2 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Roadmap by Experience Level</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                <strong>Freshers:</strong> Build strong CS fundamentals first — DBMS, OS, computer networks, and OOP. Then learn HTML, CSS, and JavaScript thoroughly before moving to React and Node.js. Aim for 100–150 Easy-to-Medium DSA problems and two complete deployed projects.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                <strong>2–4 Years Experience:</strong> Deepen framework knowledge (React hooks, Next.js rendering strategies, Node.js event loop), add TypeScript proficiency, and begin system design preparation. Contribute to open source to signal engineering maturity.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                <strong>Senior (5+ Years):</strong> System design, distributed systems, performance engineering, and leadership principles dominate. Quantify your resume impact and practise narrating architectural decisions concisely.
              </p>
              <div className="inline-block bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full">
                Focus: Design Patterns & Scalability
              </div>
            </div>

            {/* Guide Item 3 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Pro Tips from Interviewers</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
                <li>• <strong>Clarify before coding:</strong> Asking the right clarifying questions is itself a signal of engineering maturity. Spend the first three minutes of any coding round confirming constraints.</li>
                <li>• <strong>Narrate your thinking:</strong> Interviewers cannot evaluate reasoning they cannot hear. Think out loud — even uncertainty, expressed clearly, demonstrates structured problem-solving.</li>
                <li>• <strong>Write a brute-force first:</strong> A working O(n²) solution is worth more than an incomplete optimal one. Get something running, then optimise collaboratively with the interviewer.</li>
                <li>• <strong>Resume precision:</strong> Every bullet point should be a specific, quantified achievement. Reduced API latency by 35% outperforms Improved backend performance every time.</li>
                <li>• <strong>Mock interviews weekly:</strong> The experience of thinking and communicating simultaneously under observation is a distinct skill that solo practice does not develop.</li>
                <li>• <strong>Test your setup:</strong> For remote interviews, verify your internet connection, microphone, and camera 30 minutes before the session. Technical difficulties are never neutral.</li>
              </ul>
            </div>
          </div>
        </section>
        <TopCompanies/>
        <WhyChooseDevCalc/>
{/* FAQ Section */}
<section className="mt-16 lg:mt-24 mb-6">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
        Frequently Asked Questions
      </h2>

      <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
        Find answers to the most common technical interview questions.
      </p>
    </div>

    <div className="space-y-4">
      {faqs.map((item, idx) => (
        <details
          key={idx}
          className="group rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 sm:px-6">
            <div className="flex flex-1 items-start gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-bold">
                ?
              </span>

              <span className="text-base sm:text-lg font-semibold leading-7 text-slate-900 dark:text-white">
                {item.q}
              </span>
            </div>

            <ChevronDown
              size={22}
              className="mt-1 shrink-0 text-slate-500 transition-transform duration-300 group-open:rotate-180"
            />
          </summary>

          <div className="border-t border-slate-200 dark:border-slate-700 px-5 pb-6 pt-5 sm:px-6">
            <div
              className="
                prose
                prose-slate
                dark:prose-invert
                max-w-none
                prose-p:text-slate-700
                dark:prose-p:text-slate-300
                prose-p:leading-8
              "
              dangerouslySetInnerHTML={{ __html: item.a }}
            />
          </div>
        </details>
      ))}
    </div>
  </div>
</section>
        <PopularCalculators  
          currentSlug="developer-tool"/>
      </div>
    </main>
  );
}