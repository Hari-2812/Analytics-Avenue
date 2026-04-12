import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    chunkSizeWarningLimit: 1000,

    cssCodeSplit: true,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {

            if (id.includes('react')) {
              return 'vendor'
            }

            if (id.includes('gsap')) {
              return 'gsap'
            }

            if (id.includes('swiper')) {
              return 'swiper'
            }

            return 'vendor'
          }
        }
      }
    }
  }
})