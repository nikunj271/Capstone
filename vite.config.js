import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // any request from the browser to /api/* will be forwarded to http://localhost:3000
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        // optional: rewrite the path if your backend mount is different
        // rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  }
})
