# Verstas — Project Brief

## Project

Personal portfolio site showcasing indie apps, starting with:
- **Lukumaku** — book journaling — https://luku.netlify.app/
- **Muisti** — spaced-repetition flashcards — https://muista.netlify.app/

More projects will be added over time.

## Vibe

Immersive but minimalistic. Calm, tactile, warm — like the "workshop" these
apps were built in, not a generic dev portfolio. Small delightful details
tied to building/designing/learning, e.g.:
- a scroll progress indicator styled as a bookmark ribbon (`ScrollRibbon.svelte`)
- a footer written as a book "colophon" (`Footer.astro`)
- live micro-interactive previews of each app instead of static screenshots

Focus copy on user-facing **benefits** of each tool, not feature lists.

## Structure

Hero (one-line promise) → project cards (icon, name, one-line benefit, live
mini-demo, tags) → footer with short creator bio + LinkedIn link.

## Tech stack

- Astro (islands architecture, minimal JS by default)
- Svelte for interactive islands
- Tailwind CSS
- View Transitions API for page-to-page nav
- Deploy target: Netlify

## Design system

- Warm neutral base, one accent color (a bookmark-ribbon red, see
  `--color-ribbon` in `src/styles/global.css`)
- Humanist/serif headings (Fraunces), sans body text (Inter)
- Generous whitespace
- No gradients, glow, or particle effects — restraint over decoration

## Conventions

- New projects get a `ProjectCard` entry in `src/pages/index.astro` with a
  matching `.svelte` demo component (`client:visible`) under
  `src/components/`.
- Keep interactivity scoped to small Svelte islands; pages stay mostly
  static Astro/HTML.
- Update the LinkedIn URL in `Footer.astro` (currently a placeholder) once
  finalized.
