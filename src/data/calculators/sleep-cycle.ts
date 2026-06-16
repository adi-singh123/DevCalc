import { Calculator } from "@/src/types/calculator";

export const sleepCycleCalculator: Calculator = {
  slug: "sleep-cycle-calculator",

  name: "Sleep Cycle Calculator",

  description:
    "Calculate the best time to sleep or wake up based on natural sleep cycles. Improve sleep quality, wake up refreshed, and optimize your sleep schedule with our Sleep Cycle Calculator.",

  category: "Health",

  isPopular: false,

  seo: {
    title:
      "Sleep Cycle Calculator - Find the Best Time to Sleep & Wake Up",

    description:
      "Use our free Sleep Cycle Calculator to determine the ideal bedtime or wake-up time based on 90-minute sleep cycles. Improve sleep quality and wake up feeling refreshed.",

    keywords: [
      "sleep cycle calculator",
      "sleep calculator",
      "best time to sleep calculator",
      "best time to wake up calculator",
      "sleep schedule calculator",
      "sleep timing calculator",
      "bedtime calculator",
      "wake up calculator",
      "sleep planner",
      "sleep tracker calculator",
      "healthy sleep calculator",
      "sleep duration calculator",
      "sleep rhythm calculator",
      "sleep quality calculator",
      "online sleep calculator",
      "free sleep cycle calculator",
      "sleep optimization calculator",
      "sleep pattern calculator",
      "sleep management calculator",
      "90 minute sleep cycle calculator",
      "sleep routine calculator",
      "sleep health calculator",
      "ideal bedtime calculator",
      "ideal wake time calculator",
      "circadian rhythm calculator",
    ],
  },

  steps: [
    {
      step: 1,
      title: "Choose Your Goal",
      description:
        "Select whether you want to calculate your ideal bedtime or wake-up time.",
      icon: "clock",
    },

    {
      step: 2,
      title: "Enter Time",
      description:
        "Provide your desired wake-up time or bedtime.",
      icon: "clock",
    },

    {
      step: 3,
      title: "Calculate Sleep Cycles",
      description:
        "The calculator uses 90-minute sleep cycles and average sleep onset time.",
      icon: "calculator",
    },

    {
      step: 4,
      title: "View Recommendations",
      description:
        "See the best times to sleep or wake up for optimal rest.",
      icon: "result",
    },
  ],

  formula: {
    title: "Sleep Cycle Formula",

    formula:
      "Total Sleep Time = Number of Cycles × 90 Minutes + 15 Minutes Sleep Onset",

    explanation:
      "A typical sleep cycle lasts approximately 90 minutes. Most adults complete 4 to 6 sleep cycles per night. This calculator estimates ideal bedtimes and wake-up times based on complete sleep cycles and average time needed to fall asleep.",

    example: {
      input:
        "Desired Wake-Up Time: 7:00 AM",

      output:
        "Recommended Bedtimes: 9:45 PM, 11:15 PM, 12:45 AM",
    },

    useCases: [
      "Sleep Planning",
      "Healthy Sleep Habits",
      "Improving Sleep Quality",
      "Productivity Optimization",
      "Recovery and Wellness",
      "Fitness Recovery",
      "Daily Routine Planning",
      "Shift Work Scheduling",
      "Student Sleep Management",
      "Work-Life Balance",
    ],
  },

  faqs: [
    {
      question:
        "What is a Sleep Cycle Calculator?",
      answer:
        "A Sleep Cycle Calculator helps determine the best time to sleep or wake up based on natural 90-minute sleep cycles.",
    },

    {
      question:
        "How long is a sleep cycle?",
      answer:
        "A typical sleep cycle lasts about 90 minutes and includes light sleep, deep sleep, and REM sleep stages.",
    },

    {
      question:
        "How many sleep cycles should I get?",
      answer:
        "Most adults benefit from 5 to 6 complete sleep cycles per night, which equals approximately 7.5 to 9 hours of sleep.",
    },

    {
      question:
        "Why do I feel tired after sleeping 8 hours?",
      answer:
        "Waking up in the middle of a sleep cycle can cause grogginess even if you sleep for a long time. Timing your wake-up at the end of a cycle may help.",
    },

    {
      question:
        "Does this calculator account for the time needed to fall asleep?",
      answer:
        "Yes. Most sleep cycle calculations include approximately 15 minutes for falling asleep.",
    },

    {
      question:
        "Can a Sleep Cycle Calculator improve sleep quality?",
      answer:
        "While it cannot guarantee better sleep, it can help align sleep and wake times with natural sleep cycles, potentially improving how refreshed you feel.",
    },

    {
      question:
        "What is REM sleep?",
      answer:
        "REM (Rapid Eye Movement) sleep is a sleep stage associated with dreaming, memory consolidation, and cognitive recovery.",
    },

    {
      question:
        "Is this Sleep Cycle Calculator free?",
      answer:
        "Yes. You can calculate sleep schedules, bedtimes, and wake-up times online unlimited times completely free.",
    },
  ],
};