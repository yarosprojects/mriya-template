import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { locales, defaultLocale } from './src/consts/locales';
import node from "@astrojs/node";

import react from '@astrojs/react';

export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  i18n: {
    locales: locales,
    defaultLocale: defaultLocale,
    routing: {
      prefixDefaultLocale: true,
    },
  },

  vite: {
    plugins: [tailwindcss()]
  },

  trailingSlash: 'always',
  site: 'https://localhost:4321',
  base: '/',

  redirects: {
    '/': `/${defaultLocale}/`,
  },

  integrations: [react()]
});