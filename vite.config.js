import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// During `npm run dev`, requests to /api are forwarded to a local PHP server
// (run `php -S localhost:8000` from the repo root) so the forms can be tested
// end to end. In production the built site and /api live on the same host.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
  },
});
