# Verstas — The Workshop

A personal portfolio site showcasing indie apps, starting with **[Lukumaku](https://luku.netlify.app/)** (book journaling) and **[Muisti](https://muista.netlify.app/)** (spaced-repetition flashcards), with more to come.

"Verstas" is Finnish for *workshop* — a place where things are built by hand, patiently and carefully, one piece at a time. The site aims for that feel: immersive but minimalistic, calm, tactile, warm — not a generic dev portfolio.

## What's here

- **Hero** — one-line promise.
- **Project cards** — icon, name, one-line benefit, a live micro-interactive demo (not a static screenshot), and tags.
- **Footer** — a short creator bio written like a book colophon, plus a LinkedIn link.

Small delightful details tie back to building/designing/learning: a scroll progress indicator styled as a bookmark ribbon, live mini-demos of each app, and copy that focuses on user-facing benefits rather than feature lists.

## Stack

- [Astro](https://astro.build/) — islands architecture, minimal JS by default
- [Svelte](https://svelte.dev/) — interactive islands (the live demos)
- [Tailwind CSS](https://tailwindcss.com/) — warm neutral palette, one accent color
- View Transitions API for page-to-page navigation
- Deploy target: Netlify

## Getting started

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run preview`.

## Project structure

```
src/
  components/   Astro & Svelte components
  layouts/      Page layout(s)
  pages/        Routes (index.astro)
  styles/       Global styles
public/         Static assets
```

See [CLAUDE.md](CLAUDE.md) for the full design brief and conventions.
