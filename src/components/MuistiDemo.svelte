<script>
  import { dictionaries } from "../i18n";

  let { lang = "en" } = $props();
  let strings = $derived(dictionaries[lang].demo.muisti);

  const cards = [
    { front: "🦌", back: "poro — reindeer" },
    { front: "🌌", back: "revontulet — northern lights" },
    { front: "🧣", back: "lapaset — mittens" },
  ];

  let index = $state(0);
  let flipped = $state(false);
  let feedback = $state("");

  function toggle() {
    if (!feedback) flipped = !flipped;
  }

  function grade(label, daysKey) {
    feedback = strings.feedback(label, strings.inDays[daysKey]);
    setTimeout(() => {
      feedback = "";
      flipped = false;
      index = (index + 1) % cards.length;
    }, 800);
  }

  let card = $derived(cards[index]);
</script>

<div class="flex flex-col items-center gap-4">
  <button
    type="button"
    onclick={toggle}
    class="flex h-28 w-full items-center justify-center rounded-xl border border-hairline bg-paper px-4 text-center transition hover:border-ribbon/40"
  >
    <span class="font-serif text-2xl text-ink">
      {flipped ? card.back : card.front}
    </span>
  </button>

  <div class="flex h-9 items-center text-sm text-ink-soft">
    {#if feedback}
      <span class="text-ribbon">{feedback}</span>
    {:else if !flipped}
      <span>{strings.tapToReveal}</span>
    {:else}
      <span>{strings.howWellKnew}</span>
    {/if}
  </div>

  {#if flipped && !feedback}
    <div class="flex gap-2">
      <button
        type="button"
        onclick={() => grade(strings.again, "10 minutes")}
        class="rounded-full border border-hairline px-3 py-1 text-xs text-ink-soft transition hover:border-ribbon/40 hover:text-ribbon"
      >
        {strings.again}
      </button>
      <button
        type="button"
        onclick={() => grade(strings.good, "4 days")}
        class="rounded-full border border-hairline px-3 py-1 text-xs text-ink-soft transition hover:border-ribbon/40 hover:text-ribbon"
      >
        {strings.good}
      </button>
      <button
        type="button"
        onclick={() => grade(strings.easy, "9 days")}
        class="rounded-full border border-hairline px-3 py-1 text-xs text-ink-soft transition hover:border-ribbon/40 hover:text-ribbon"
      >
        {strings.easy}
      </button>
    </div>
  {/if}
</div>

<p class="mt-4 text-center font-serif text-xs italic text-ink-soft/70">
  {strings.tagline}
</p>
