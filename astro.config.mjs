import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://verstas.netlify.app',
  i18n: {
    locales: ['en', 'fi'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
});
