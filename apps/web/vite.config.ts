/// <reference types='vitest' />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/web',
  plugins: [react(), nxViteTsPaths()],
  preview: {
    host: 'localhost',
    open: true,
    port: 4300,
  },
  server: {
    host: 'localhost',
    open: true,
    port: 4200,
  },
  test: {
    cache: {
      dir: '../../node_modules/.vitest',
    },
    coverage: {
      provider: 'v8',
    },
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
