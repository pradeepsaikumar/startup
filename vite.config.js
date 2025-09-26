import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 4173,
    allowedHosts: ['deeprap-it-solutions-3.onrender.com']
  },
  server: {
    host: '0.0.0.0'
  }
})