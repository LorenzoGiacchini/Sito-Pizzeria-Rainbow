import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://lorenzogiacchini.github.io',
  base: '/Sito-Pizzeria-Rainbow',
  integrations: [tailwind()],
});
