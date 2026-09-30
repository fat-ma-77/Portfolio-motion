import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages project sites, set base to "/REPO_NAME/"
// For a user site (username.github.io), keep base as "/"
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
  server: {
    watch: {
      ignored: ['**/public/assets/**'],
    },
  },
})
