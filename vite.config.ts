import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@testing-library/jest-dom', 'jest-environment-jsdom'],
  },
  resolve: {
    mainFields: [],
  },
})
