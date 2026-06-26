/**
 * app/interview-questions/page.tsx
 * Interview Home Page - SEO optimized, production-ready landing for all interview topics.
 */

import React from 'react';
import { Metadata } from 'next';
import { interviewTopics } from '@/src/data/interview';
import { InterviewTopicCard } from '@/src/components/interview/InterviewTopicCard';
import Breadcrumb from "@/src/components/seo/Breadcrumb";
import BreadcrumbSchema from "@/src/components/seo/BreadcrumbSchema";
import WhyChooseDevCalc from '@/src/components/interview/WhyChooseDevCalc';
import TopCompanies from '@/src/components/interview/TopCompanies';

import PopularCalculators from '@/src/components/calculator/PopularCalculators';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Master Technical Interview Questions | Frontend, Backend & Coding Prep | DevCalc',
  description: 'Comprehensive technical interview preparation guide. Master JavaScript, React, Next.js, TypeScript, Node.js, and SQL with 1500+ curated questions, MCQs, and expert strategies for MNC-level success.',
keywords: [
  'Developer Interview Questions',
  'Technical Interview Questions',
  'Software Engineer Interview Questions',
  'Programming Interview Questions',
  'Coding Interview Questions',
  'Coding Interview Preparation',
  'Technical Interview Preparation',
  'Interview Questions and Answers',
  'Top Interview Questions',
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

  // Backend
  'Node.js Interview Questions',
  'Express.js Interview Questions',
  'NestJS Interview Questions',
  'ASP.NET Interview Questions',
  'Spring Boot Interview Questions',
  'Django Interview Questions',
  'Flask Interview Questions',
  'Laravel Interview Questions',

  // Database
  'SQL Interview Questions',
  'MySQL Interview Questions',
  'PostgreSQL Interview Questions',
  'MongoDB Interview Questions',
  'Redis Interview Questions',
  'Database Interview Questions',

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

  // CS Fundamentals
  'Data Structures Interview Questions',
  'Algorithms Interview Questions',
  'DSA Interview Questions',
  'System Design Interview Questions',
  'Operating System Interview Questions',
  'Computer Networks Interview Questions',
  'DBMS Interview Questions',
  'OOP Interview Questions',
  'Object Oriented Programming Interview Questions',
  'Design Patterns Interview Questions',

  // Experience Based
  'Interview Questions for Freshers',
  'Interview Questions for Experienced',
  'Junior Developer Interview Questions',
  'Senior Software Engineer Interview Questions',
  'Frontend Developer Interview Questions',
  'Backend Developer Interview Questions',
  'Full Stack Developer Interview Questions',

  // Company Specific
  'Google Interview Questions',
  'Microsoft Interview Questions',
  'Amazon Interview Questions',
  'Meta Interview Questions',
  'Apple Interview Questions',
  'Netflix Interview Questions',
  'Uber Interview Questions',
  'Adobe Interview Questions',
  'Oracle Interview Questions',
  'Salesforce Interview Questions',
  'TCS Interview Questions',
  'Infosys Interview Questions',
  'Wipro Interview Questions',
  'Accenture Interview Questions',
  'Capgemini Interview Questions',
  'Cognizant Interview Questions',
  'Deloitte Interview Questions',

  // Search Intent
  'Free Interview Questions',
  'Interview Questions with Answers',
  'Interview Questions with Explanation',
  'Practice Interview Questions',
  'Technical Interview Practice',
  'Programming Interview Guide',
  'Software Engineer Interview Preparation',
  'Developer Interview Preparation',
  'Best Interview Questions',
  'Interview Questions PDF',
  'Online Interview Preparation',
],
  alternates: {
    canonical: "https://www.devcalc.in/interview-questions",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    title: 'Master Technical Interview Questions | DevCalc',
    description: 'Prepare for your next software engineering role with our structured roadmap and 1500+ technical interview questions.',
    url: "https://www.devcalc.in/interview-questions",
    siteName: "DevCalc",
    type: "website",
  }
};

// --- Constants ---
const breadcrumbSchemaItems = [
  { name: "Home", href: "/" },
  { name: "Interview Questions", href: "/interview-questions" },
];

const interviewFaqs = [
  { q: "What are technical interview questions?", a: "Technical interview questions assess your problem-solving skills, language proficiency, and architectural knowledge across various programming stacks." },
  { q: "How do beginners prepare?", a: "Beginners should focus on core fundamentals (HTML/CSS/JS) before moving to framework-specific questions and basic data structures." },
  { q: "Are these questions suitable for MNC interviews?", a: "Yes, our MNC-tier questions focus on system design, optimization, and complex architectural trade-offs." },
  { q: "Are explanations included?", a: "Every question on DevCalc comes with a detailed explanation to help you understand the 'why' behind the answer." },
  { q: "Do I need an account?", a: "You can browse most resources freely, but creating an account helps track your progress across different stages." },
  { q: "Can I practice on mobile?", a: "Our platform is fully responsive and optimized for a seamless mobile experience." },
  { q: "How many questions should I solve daily?", a: "Consistency is key. Aim for 5-10 high-quality questions per day to build long-term retention." },
  { q: "Which technologies are covered?", a: "We cover a wide range including JavaScript, React, Next.js, TypeScript, Node.js, SQL, and more." },
  { q: "Are coding questions included?", a: "Yes, our platform includes a blend of theory, MCQs, and practical coding challenges." },
  { q: "Difference between MCQ and coding interview?", a: "MCQs test theoretical breadth and syntax knowledge, while coding interviews test logic, algorithmic efficiency, and implementation skills." },
  { q: "Is DevCalc free?", a: "Yes, our core interview preparation resources are free to help every developer succeed." },
  { q: "Will new questions be added?", a: "We regularly update our database with the latest industry-standard questions." },
  { q: "Can experienced developers use this?", a: "Absolutely. Our advanced and system design modules are curated for senior-level engineering roles." },
  { q: "How are stages unlocked?", a: "Stages are unlocked as you master fundamental concepts and demonstrate proficiency in previous levels." },
  { q: "How should I revise before interview?", a: "Focus on our 'Final Preparation Checklist' and revisit your bookmarked questions and weak areas." }
];

export default function InterviewHomePage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
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
            Scale your career with curated interview questions, interactive MCQs, and deep-dive explanations for top-tier tech roles.
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
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12">Select a track to start your journey.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interviewTopics.map((topic) => (
              <InterviewTopicCard key={topic.id} topic={topic} />
            ))}
          </div>
          
          <p className="text-center mt-12 text-slate-500 italic">
            More technologies like Angular, Vue, Python, Java, C++, Docker, AWS, MongoDB, and System Design are being added regularly.
          </p>
        </section>

        {/* Comprehensive Guide Section - UI Optimized */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Technical Interview Preparation Guide</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">Everything you need to master your next software engineering interview.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Guide Item 1 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Process</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
                <li>• <strong>Online Assessment:</strong> Coding filters</li>
                <li>• <strong>MCQ Round:</strong> Core fundamentals</li>
                <li>• <strong>Coding Round:</strong> Live problem solving</li>
                <li>• <strong>Technical Discussion:</strong> Architecture deep-dives</li>
                <li>• <strong>System Design:</strong> Scalability focus</li>
                <li>• <strong>HR Round:</strong> Behavioral & culture fit</li>
              </ul>
            </div>

            {/* Guide Item 2 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Roadmap & Prep</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Start with HTML, CSS, and JS foundations. Move to React/Next.js, then master TypeScript and SQL. Advanced roles require deep knowledge in Performance, Security, and Scalability.
              </p>
              <div className="inline-block bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full">
                Focus: Design Patterns
              </div>
            </div>

            {/* Guide Item 3 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Pro Tips</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
                <li>• <strong>Communicate:</strong> Narrate your logic.</li>
                <li>• <strong>Resume:</strong> Keep it clean and relevant.</li>
                <li>• <strong>Setup:</strong> Test mic/video for remote.</li>
                <li>• <strong>Clarify:</strong> Ask questions first.</li>
                <li>• <strong>Practice:</strong> Standard algorithms daily.</li>
              </ul>
            </div>
          </div>
        </section>
        <TopCompanies/>

        <WhyChooseDevCalc/>

        {/* FAQ Section */}
        <section className="mt-20 mb-3">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {interviewFaqs.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                <h4 className="font-semibold text-lg text-blue-600 dark:text-blue-400 mb-2">{item.q}</h4>
                <p className="text-slate-600 dark:text-slate-400">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
        <PopularCalculators  
          currentSlug="developer-tool"/>
      </div>
    </main>
  );
}