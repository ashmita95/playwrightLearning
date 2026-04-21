import { test, expect, chromium } from '@playwright/test';

test('positive login test - QA', async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 2000 });
  const page = await browser.newPage();
  // Visit QA environment
  await page.goto("https://bsl.qa.clockworkrecruiting.dev");

  // Fill login credentials
  await page.getByRole('textbox', { name: 'email' }).fill("ashmita+cypress@clockworkrecruiting.com");
  await page.getByRole('textbox', { name: 'password' }).fill("KREETI@12345");

  // Click login
  await page.locator('input[type="submit"]').click()  
  await expect(await page.url()).toBe("https://account.qa.clockworkrecruiting.dev/accounts")

  await page.waitForTimeout(3000)
  //await logout(page);
});

// Example logout helper
async function logout(page) {
  const logoutButton = page.locator('[data-testid="logout-button"]');
  if (await logoutButton.isVisible()) {
    await logoutButton.click();
    await expect(page).toHaveURL(/login/);
  }
}
