import { test, expect } from "@playwright/test";

test('should fail', async ({ page }) => {
  await page.goto('https://www.google.com/');

  await expect(page).toHaveURL(/hello/i);
})