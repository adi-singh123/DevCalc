import type { Calculator } from "@/src/types/calculator";

export const examCountdownCalculator: Calculator = {
  slug: "exam-countdown-calculator",
  name: "Exam Countdown Calculator",
  description: "Create a saved exam countdown with daily study goals, preparation milestones, an exam calendar, study streaks, progress tracking, and private bookmarks.",
  category: "Education",
  isPopular: true,
  compareWith: ["study-hours-calculator", "marks-required-calculator", "attendance-calculator", "final-grade-calculator"],
  editorialIntro: "Create an exam plan once and return each day to log study time, maintain a streak, review milestones, and keep short revision bookmarks. Your planner is stored in localStorage on the current browser, so no account is required.",
  benchmarkContext: {
    title: "Persistent exam preparation dashboard",
    badge: "Saved on this device",
    stat: "Countdown, calendar, streaks, goals and bookmarks",
    description: "Date-only arithmetic avoids time-of-day errors. The dashboard separates the main learning window from a suggested final 20% revision window and recalculates as the exam approaches.",
    source: "Gregorian calendar arithmetic and user-defined study targets",
    lastUpdated: "October 2026",
  },
  seo: {
    title: "Exam Countdown Calculator and Study Planner",
    description: "Create a private exam countdown dashboard with days remaining, milestones, calendar, daily progress, study streaks, revision planning, and saved bookmarks.",
    keywords: ["exam countdown calculator", "days until exam", "exam study planner", "study countdown", "exam calendar", "study streak tracker", "revision planner", "exam preparation dashboard", "days left for exam", "exam tracker"],
  },
  steps: [
    { step: 1, title: "Enter exam details", description: "Name the examination, select its official date and enter the number of syllabus topics.", icon: "calendar" },
    { step: 2, title: "Set a daily target", description: "Choose a sustainable number of study hours for an ordinary day.", icon: "clock" },
    { step: 3, title: "Save the countdown", description: "Create a dashboard that remains available in localStorage on this browser.", icon: "calculator" },
    { step: 4, title: "Track preparation", description: "Log study blocks, build a streak, review milestones and save revision bookmarks.", icon: "result" },
  ],
  formula: {
    title: "Exam countdown and study-capacity formula",
    formula: "Available Study Hours = Days Remaining × Daily Study Hours",
    explanation: "The calculator compares local calendar dates rather than timestamps, then multiplies the remaining whole days by the daily target. It suggests reserving approximately 20% of those days for revision.",
    example: { input: "30 days remaining × 4 study hours", output: "120 planned study hours" },
    useCases: ["School and university exams", "Competitive exam preparation", "Revision scheduling", "Daily study tracking", "Syllabus milestone planning"],
  },
  faqs: [
    { question: "How is the exam countdown calculated?", answer: "It compares today's local calendar date with the selected future exam date. Using date-only arithmetic prevents the current time of day from incorrectly adding or removing a day." },
    { question: "Can I estimate total study hours?", answer: "Yes. Remaining calendar days are multiplied by your daily study-hour target. Treat this as planning capacity rather than guaranteed productive time." },
    { question: "Will my exam plan still be available when I return?", answer: "Yes, on the same browser and device. The plan, study log and bookmarks are stored in localStorage. They disappear if browser data is cleared, private browsing is used, or you choose Clear saved plan." },
    { question: "How is the study streak calculated?", answer: "The current streak counts consecutive calendar days ending today with at least one logged study block. A day without recorded minutes ends the current streak." },
    { question: "How are revision days estimated?", answer: "The dashboard reserves approximately 20% of the remaining calendar days for revision, with at least one revision day while time remains. Adjust this suggestion to your syllabus and exam format." },
    { question: "What can I save as a bookmark?", answer: "You can save a topic name plus a short note, chapter reference or useful link. Bookmarks remain only in this browser." },
    { question: "Can I use it for competitive exams?", answer: "Yes. The planner works for school, university, certification and competitive examinations. Always confirm the official date and reporting instructions separately." },
    { question: "Does it send automatic exam notifications?", answer: "Not yet. The dashboard saves progress locally but does not promise background reminders. Reliable closed-app reminders require notification permission and an active Web Push subscription service." },
  ],
  seoContent: `<h2>What is an Exam Countdown Calculator?</h2>
<p>An exam countdown calculator measures the calendar days between today and a future examination. DevCalc extends that basic calculation into a reusable preparation dashboard with a daily study target, syllabus-topic estimate, revision window, milestone dates, study calendar, progress log, streak and private bookmarks.</p>

<h2>A countdown that remembers your plan</h2>
<p>After creating a plan, the exam name, date, daily target, study log and bookmarks are stored in localStorage on the current browser. When you return on the same device, the dashboard restores the information and recalculates the remaining days. No account is required.</p>
<p>Local storage is convenient but is not cloud backup. Clearing site data, using private browsing or moving to another browser or device can remove access to the plan. Keep official dates and essential notes somewhere else as well.</p>

<h2>How the study dashboard works</h2>
<ul><li><strong>Accurate date countdown:</strong> date-only calendar arithmetic avoids time-of-day and daylight-saving errors.</li><li><strong>Daily progress:</strong> log 15, 30 or 60-minute study blocks and compare the total with your daily target.</li><li><strong>Study streak:</strong> consecutive days with recorded study time form the current streak.</li><li><strong>Revision allocation:</strong> the final 20% of available days is reserved as a suggested revision period.</li><li><strong>Topic pacing:</strong> syllabus topics are distributed into a weekly target across the learning period.</li><li><strong>Calendar:</strong> the exam month highlights the examination date and days where study was logged.</li><li><strong>Bookmarks:</strong> save chapter reminders, resource links or short revision notes locally.</li></ul>

<h2>How available study hours are calculated</h2>
<p>Available study hours = whole calendar days remaining × daily study target. For example, 30 remaining days at four hours per day provides a theoretical capacity of 120 hours. This is a planning estimate, not a promise that every hour will be completed.</p>
<p>Allow time for sleep, classes, work, health, travel and unexpected responsibilities. A smaller sustainable target is generally more useful than an ambitious schedule that is repeatedly missed.</p>

<h2>Learning days and revision days</h2>
<p>The dashboard recommends using roughly 80% of the remaining days for syllabus learning and 20% for revision. With 50 days remaining, that suggests about 40 learning days and 10 revision days. This is only a starting structure: practical subjects, mock tests and very large syllabi may need a different split.</p>

<h2>Using countdown milestones</h2>
<p>The planner marks 30-day, 14-day, 7-day and 1-day checkpoints. At 30 days, verify syllabus coverage. At 14 days, identify weak areas. At seven days, focus on timed practice and condensed notes. Use the last day for light review, examination logistics and adequate sleep rather than attempting an entire new unit.</p>

<h2>Recommended study time</h2>
<table><thead><tr><th>Situation</th><th>Planning approach</th></tr></thead><tbody><tr><td>School examinations</td><td>Short daily sessions distributed across subjects</td></tr><tr><td>University examinations</td><td>Combine concept review with problem practice</td></tr><tr><td>Competitive examinations</td><td>Long-term topic cycles, mock tests and error review</td></tr><tr><td>Less than seven days</td><td>Prioritize high-weight topics and retrieval practice</td></tr></tbody></table>
<p>The correct target depends on preparation level and personal circumstances. More hours do not automatically mean better learning. Focus, active recall, practice questions, feedback and sleep quality also matter.</p>

<h2>Study streaks without unhealthy pressure</h2>
<p>A streak can encourage consistency, but it should not reward exhaustion. Logging a shorter focused session on a difficult day can preserve momentum, while rest may still be necessary during illness or burnout. The streak is a behavioural prompt, not a judgement of preparation quality.</p>

<h2>How to use study bookmarks</h2>
<p>Bookmarks are useful for recording the next chapter to revise, a difficult formula, a mock-test mistake or a resource URL. Keep entries short and actionable. Because they are stored locally, do not use the field for passwords, personal identification numbers or sensitive information.</p>

<h2>Practical preparation tips</h2>
<ul><li>Break large subjects into measurable topics.</li><li>Use active recall instead of repeatedly rereading notes.</li><li>Schedule past papers under realistic time limits.</li><li>Review mistakes and record why each answer was wrong.</li><li>Alternate difficult and lighter tasks to manage attention.</li><li>Protect sleep during the final revision period.</li><li>Verify the official date, time, venue and admission rules.</li></ul>

<h2>Privacy and important limitations</h2>
<p>Your planner is stored locally in the browser and is not synchronized between devices. The calculator cannot know syllabus difficulty, current mastery, interruptions or the quality of each study hour. Use the output as an adjustable planning aid rather than a guarantee of examination performance.</p>`,
};
