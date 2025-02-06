import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: process.env.NODE_ENB === 'production' ? 'Repository name' : '/',
  base: process.env.NODE_ENB === 'production' ? 'vite-template-react' : '/',
  plugins: [react()],
})
