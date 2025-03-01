import { test } from '@playwright/test';

test('test browser', async ({ page }) => {
  // point this to wherever you want
  await page.goto('http://localhost:5173/tradebot-test');

  // keep browser open
  await page.pause();
});
