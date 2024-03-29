import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { themeColor } from './src/styles/theme'

/// <reference types="vitest" />

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'inline',
      includeAssets: ['react.svg', 'vite.svg', 'square.png'],
      manifestFilename: 'manifest.json',
      manifest: {
        short_name: 'reactVite',
        name: 'reactVite',
        start_url: '.',
        display: 'standalone',
        theme_color: themeColor,
        background_color: '#ffffff',
        id: '/',
        scope: '.',
        lang: 'en',
        icons: [
          {
            src: 'square.png',
            type: 'image/png',
            sizes: '400x400',
          },
        ],
      },
    }),
  ],
  test: {},
})
