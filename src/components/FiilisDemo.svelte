<script>
  import { dictionaries } from "../i18n";

  let { lang = "en" } = $props();
  let strings = $derived(dictionaries[lang].demo.fiilis);

  const moods = ["😩", "😕", "😐", "🙂", "😄"];
  const chips = [
    { emoji: "🏃", key: "exercise" },
    { emoji: "😴", key: "sleep" },
    { emoji: "💼", key: "work" },
    { emoji: "🧖", key: "sauna" },
  ];

  let selectedMood = $state(null);
  let selectedChips = $state(new Set());
  let saved = $state(false);
  let streak = $state(3);

  function pickMood(mood) {
    selectedMood = mood;
    saved = false;
  }

  function toggleChip(key) {
    const next = new Set(selectedChips);
    next.has(key) ? next.delete(key) : next.add(key);
    selectedChips = next;
  }

  function save() {
    if (!selectedMood) return;
    saved = true;
    streak += 1;
    setTimeout(() => {
      saved = false;
      selectedMood = null;
      selectedChips = new Set();
    }, 1400);
  }
</script>

<div class="flex flex-col gap-4">
  <div>
    <p class="text-sm text-ink-soft">{strings.prompt}</p>
    <div class="mt-2 flex gap-2">
      {#each moods as mood}
        <button
          type="button"
          onclick={() => pickMood(mood)}
          class="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border text-xl transition {selectedMood ===
          mood
            ? 'border-ribbon bg-ribbon/10'
            : 'border-hairline hover:border-ribbon/40'}"
        >
          {mood}
        </button>
      {/each}
    </div>
  </div>

  {#if selectedMood}
    <div>
      <p class="text-sm text-ink-soft">{strings.chipsPrompt}</p>
      <div class="mt-2 flex flex-wrap gap-2">
        {#each chips as chip}
          <button
            type="button"
            onclick={() => toggleChip(chip.key)}
            class="cursor-pointer rounded-full border px-3 py-1 text-xs transition {selectedChips.has(
              chip.key,
            )
              ? 'border-ribbon bg-ribbon/10 text-ribbon'
              : 'border-hairline text-ink-soft hover:border-ribbon/40'}"
          >
            {chip.emoji} {strings.chipLabels[chip.key]}
          </button>
        {/each}
      </div>
    </div>

    <button
      type="button"
      onclick={save}
      class="inline-flex w-fit cursor-pointer items-center rounded-full bg-ribbon px-4 py-1.5 text-sm font-medium text-paper transition hover:bg-ribbon-dim"
    >
      {strings.save}
    </button>
  {/if}

  <div class="flex h-6 items-center text-sm text-ribbon">
    {#if saved}
      <span>{strings.saved(streak)}</span>
    {/if}
  </div>
</div>

<p class="mt-2 font-serif text-xs italic text-ink-soft/70">
  {strings.tagline}
</p>
