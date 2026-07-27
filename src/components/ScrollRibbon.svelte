<script>
  let progress = $state(0);

  function updateProgress() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
  }

  $effect(() => {
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    document.addEventListener("astro:page-load", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      document.removeEventListener("astro:page-load", updateProgress);
    };
  });
</script>

<div class="ribbon-track" aria-hidden="true">
  <div class="ribbon" style:height="{Math.max(progress * 100, 4)}vh"></div>
</div>

<style>
  .ribbon-track {
    position: fixed;
    top: 0;
    right: clamp(0.75rem, 4vw, 2rem);
    width: 10px;
    height: 100vh;
    pointer-events: none;
    z-index: 50;
  }

  .ribbon {
    width: 100%;
    background: var(--color-ribbon);
    box-shadow: 0 1px 3px rgba(43, 36, 29, 0.25);
    transition: height 120ms ease-out;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 9px), 50% 100%, 0 calc(100% - 9px));
  }

  @media (prefers-reduced-motion: reduce) {
    .ribbon {
      transition: none;
    }
  }
</style>
