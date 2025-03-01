import { defineConfig, devices } from '@playwright/test'; // import devices
const base = 'http://localhost:5173/tradebot-test';
const devServerUrl = 'http://localhost:5173/tradebot-test';

export default defineConfig({
  projects: [
    {
      name: 'chrome',
      use: { ...devices['Galaxy S8'] },
    },
    {
      name: 'safari',
      use: {
        ...devices['iPhone 6'],
      },
    },
  ],
  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: base,
  },
  webServer: {
    command: 'npm run dev',
    url: devServerUrl,
  },
});
