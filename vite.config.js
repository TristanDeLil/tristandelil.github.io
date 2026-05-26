import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If deploying to username.github.io → base: '/'
  // If deploying to username.github.io/repo-name → base: '/repo-name/'
  base: '/',
  build: { outDir: 'docs' },
})
