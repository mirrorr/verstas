<script>
  const entries = [
    {
      title: "The Boy in the Striped Pyjamas",
      author: "John Boyne",
      rating: 4,
      note: "An intensely emotional read — a history lesson you won't forget.",
    },
    {
      title: "Sauna Moments",
      author: "Katri Savola",
      rating: 3,
      note: "Great new vocabulary, short and sweet stories.",
    },
    {
      title: "Avengers",
      author: "Marvel",
      rating: 5,
      note: "Because it's fun and exciting — because, well, they're superheroes.",
    },
  ];

  let index = $state(0);
  let flipping = $state(false);

  function next() {
    flipping = true;
    setTimeout(() => {
      index = (index + 1) % entries.length;
      flipping = false;
    }, 160);
  }

  let entry = $derived(entries[index]);
</script>

<div class="flex flex-col gap-4 sm:flex-row sm:items-stretch">
  <div
    class="relative flex h-20 w-16 shrink-0 flex-col items-center justify-center gap-2 self-center overflow-hidden rounded-sm bg-gradient-to-br from-[#8c7355] to-[#4f3d2a] px-2 py-3 text-center shadow-[2px_4px_8px_rgba(43,36,29,0.35)] sm:h-auto sm:self-stretch"
    aria-hidden="true"
  >
    <span class="h-px w-5 bg-paper/40"></span>
    <span class="line-clamp-3 font-serif text-[10px] font-bold leading-snug text-paper">
      {entry.title}
    </span>
    <span class="h-px w-5 bg-paper/40"></span>
  </div>

  <div
    class="min-w-0 flex-1 transition-all duration-150 ease-out"
    class:opacity-0={flipping}
    class:translate-x-1={flipping}
  >
    <p class="font-serif text-lg text-ink">{entry.title}</p>
    <p class="text-sm text-ink-soft">{entry.author}</p>
    <p class="mt-1 text-ribbon" aria-label={`${entry.rating} out of 5 stars`}>
      {"★".repeat(entry.rating)}{"☆".repeat(5 - entry.rating)}
    </p>
    <p class="mt-2 font-serif italic text-ink-soft">"{entry.note}"</p>
  </div>
</div>

<button
  type="button"
  onclick={next}
  class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition hover:text-ribbon"
>
  Turn the page
  <span aria-hidden="true">→</span>
</button>

<p class="mt-4 font-serif text-xs italic text-ink-soft/70">
  Every book is a matter of taste.
</p>
