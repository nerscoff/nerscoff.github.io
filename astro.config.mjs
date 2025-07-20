// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  site: 'https://nerscoff-coffee.github.io',
  prefetch: {
    defaultStrategy: 'hover',
    prefetchAll: true,
  },
  experimental: {
    clientPrerender: true,
  },
  integrations: [mdx(), react()],
  vite: { plugins: [tailwindcss()] },
})
