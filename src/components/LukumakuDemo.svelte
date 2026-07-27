<script>
  const entries = [
    {
      title: "The Overstory",
      author: "Richard Powers",
      rating: 5,
      note: "Finished under a blanket. Cried twice.",
      pages: "512 / 512",
    },
    {
      title: "Piranesi",
      author: "Susanna Clarke",
      rating: 4,
      note: "Rereading already — still eerie, still gentle.",
      pages: "134 / 272",
    },
    {
      title: "Braiding Sweetgrass",
      author: "Robin Wall Kimmerer",
      rating: 5,
      note: "One chapter a night. No rush at all.",
      pages: "88 / 400",
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
    class="h-16 w-12 shrink-0 self-center rounded-sm bg-ribbon/80 shadow-[2px_2px_0_var(--color-ribbon-dim)] sm:h-auto sm:self-stretch"
    aria-hidden="true"
  ></div>

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
    <p class="mt-2 text-xs uppercase tracking-wide text-ink-soft/70">
      {entry.pages} pages
    </p>
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
