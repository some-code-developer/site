import { defineConfig, sharpImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.some-code.com',
  integrations: [tailwind(), react(), sitemap()],
  experimental: {
    assets: true,
  },
  compressHTML: true,
  image: {
    service: sharpImageService(),
  },
})
