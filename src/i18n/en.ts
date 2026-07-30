export const en = {
  lang: "en",
  meta: {
    title: "The Workshop — indie apps, carefully made",
    description:
      "A small workshop building calm, useful apps: Lukumaku for book journaling, Muisti for spaced-repetition flashcards, and Fiilis for a ten-second mood journal.",
  },
  hero: {
    eyebrow: "The Workshop",
    title: "Digital tools, built for you.",
    subtitle:
      "Carefully crafted design and ideas into practical solutions. Free and local.",
    jumpTo: (name: string) => `Jump to ${name}`,
    moreToCome: "+ more to come",
  },
  card: {
    visit: (name: string) => `Visit ${name}`,
    whatsInside: "What's inside",
    demo: "Demo",
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
    fiilis: {
      benefit:
        "A ten-second mood log that turns into a history worth looking back on.",
      tags: ["mood", "journaling", "streaks"],
      benefits: [
        "Log your day in about ten seconds — a face, a few taps, maybe a line, done.",
        "Look back at a month of coloured days, a full timeline, and streaks that don't guilt you — a run ending yesterday still counts today as open.",
        "See real patterns, like whether you feel better on good-sleep days, once there's enough history to compare.",
        "Works fully offline as an installable app — entries sync automatically once you're back online, never twice.",
        "If you use Lukumaku or Muisti too, Fiilis can (only if you opt in) suggest a matching chip for days you studied or read — read-only, never written for you.",
        "Export your whole history as JSON or CSV anytime, and import it back in later.",
      ],
    },
  },
  demo: {
    lukumaku: {
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
    fiilis: {
      prompt: "How was your day?",
      chipsPrompt: "What happened?",
      chipLabels: {
        exercise: "Exercise",
        sleep: "Good sleep",
        work: "Work",
        sauna: "Sauna",
      },
      save: "Save",
      saved: (streak: number) => `Saved — day ${streak} streak`,
      tagline: "A ten-second log, and a history worth looking back on.",
    },
  },
  footer: {
    madeBy: "Made by",
    madeBySuffix: "— a workshop of one, building small tools worth returning to.",
    linkedin: "Say hello on LinkedIn",
    pwaNote:
      "Every app here — this site included — works right in the browser and installs like a native app on your phone or computer, all of it built together with Claude Code.",
    installGuideLabel: "See how to install →",
    installHref: "/install",
  },
  install: {
    meta: {
      title: "Install it like an app — The Workshop",
      description:
        "How to install Lukumaku, Muisti, or any app from The Workshop on your phone or computer — no app store needed.",
    },
    eyebrow: "Guide",
    title: "Install it like an app.",
    intro:
      "These are Progressive Web Apps — no app store needed. Add one to your home screen and it opens full-screen, works offline, and feels just like a native app.",
    platforms: [
      {
        name: "iPhone & iPad (Safari)",
        steps: [
          "Open the app in Safari.",
          "Tap the Share icon (square with an arrow).",
          'Scroll down and tap "Add to Home Screen".',
          'Tap "Add" — done.',
        ],
      },
      {
        name: "Android (Chrome)",
        steps: [
          "Open the app in Chrome.",
          "Tap the ⋮ menu in the top right.",
          'Tap "Install app" (or "Add to Home screen").',
          "Confirm — it's now on your home screen.",
        ],
      },
      {
        name: "Desktop (Chrome or Edge)",
        steps: [
          "Open the app in Chrome or Edge.",
          "Click the install icon in the address bar.",
          'Click "Install".',
          "It opens in its own window, like any other app.",
        ],
      },
    ],
    backLabel: "← Back to The Workshop",
    backHref: "/",
  },
};

export type Dict = typeof en;
