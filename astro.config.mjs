import { defineConfig } from 'astro/config';

// Static output. Any browser-only APIs (like localStorage) must run in a
// client-side boundary, never during the build/SSR pass.
export default defineConfig({
  server: { host: true, port: 4321 },
});
