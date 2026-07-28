export const en = {
  lang: "en",
  meta: {
    title: "The Workshop — indie apps, carefully made",
    description:
      "A small workshop building calm, useful apps: Lukumaku for book journaling and Muisti for spaced-repetition flashcards.",
  },
  hero: {
    eyebrow: "The Workshop",
    title: "Digital tools, built for you.",
    subtitle:
      "Carefully crafted design and ideas into practical solutions. Free and local.",
  },
  card: {
    visit: (name: string) => `Visit ${name}`,
    whatsInside: "What's inside",
  },
  projects: {
    lukumaku: {
      benefit:
        "A living diary for what you read — small rewards keep you motivated, and fellow readers help you find what's next.",
      tags: ["reading", "journaling", "habit"],
      benefits: [
        "A private diary for every book — ratings, notes, and progress in one place.",
        "Add a book in seconds — search fills in the title, author, and cover for you.",
        "Keep a wishlist and turn it into a journal entry the moment you finish reading.",
        "Discover your next read through recommendations from other readers — just the title, author, and why, never their private notes.",
        "Set a yearly reading goal, and if you like, compare progress with friends in a private reading circle or an opt-in leaderboard.",
        "Export your journal as JSON or CSV anytime.",
      ],
    },
    muisti: {
      benefit:
        "Small daily reviews that build a streak, timed to the way memory fades.",
      tags: ["flashcards", "memory", "spaced repetition"],
      benefits: [
        "Reviews are timed to the science of memory (the Ebbinghaus forgetting curve), not guesswork.",
        "Study however's fastest — keyboard shortcuts on desktop, swipe gestures on mobile.",
        "Build a deck in seconds — paste a list of front/back pairs and you're studying.",
        "Watch your recall curve flatten over time, with streaks and a review heatmap to keep you motivated.",
        "Own your decks — import or export as JSON or CSV anytime.",
        "Looks great everywhere, day or night — full dark mode, responsive on any device.",
      ],
    },
  },
  demo: {
    lukumaku: {
      turnThePage: "Turn the page",
      tagline: "Every book is a matter of taste.",
    },
    muisti: {
      tapToReveal: "Tap the card to reveal",
      howWellKnew: "How well did you know it?",
      again: "Again",
      good: "Good",
      easy: "Easy",
      inDays: {
        "10 minutes": "10 minutes",
        "4 days": "4 days",
        "9 days": "9 days",
      },
      feedback: (label: string, days: string) => `${label} — next review in ${days}`,
      tagline: "One card a day keeps the streak alive.",
    },
  },
  footer: {
    colophon: (year: number) =>
      `Set in Fraunces & Inter. Built with Astro, Svelte and Tailwind, and bound together on a quiet afternoon in ${year}.`,
    madeBy: "Made by",
    madeBySuffix: "— a workshop of one, building small tools worth returning to.",
    linkedin: "Say hello on LinkedIn",
  },
};

export type Dict = typeof en;
