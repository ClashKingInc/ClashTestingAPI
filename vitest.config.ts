import { defineConfig } from 'vitest/config';
import { cloudflareTest } from '@cloudflare/vitest-plugin';
export default defineConfig({
  plugins: [cloudflareTest({ wrangler: { configPath: './wrangler.jsonc' } })],
  test: {
    include: ['test/**/*.test.ts'],
    // The first fetch lazily imports the Worker through Vite. Shared CI runners
    // can exceed Vitest's 5s default; the deployed bundle is tested separately.
    testTimeout: 15_000,
  },
});
