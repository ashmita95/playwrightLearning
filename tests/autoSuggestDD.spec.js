import { test, expect } from '@playwright/test';

test('Auto Suggest DD with iframe', async ({ page }) => {
  await page.goto('https://jqueryui.com/autocomplete/');
  
  const frame = page.frameLocator('.demo-frame');
  const input = frame.locator('#tags');
  
  // Type text (not fill)
  await input.type('java');

// Wait for dropdown to appear
//await frame.locator('.ui-autocomplete li').first().waitFor({ state: 'visible' });
await page.waitForTimeout(3000)

// Get all options and print them
const options = frame.locator('ul.ui-autocomplete li');
const count = await options.count();
console.log(`Found ${count} suggestions:`);

for (let i = 0; i < count; i++) {
  const value = await options.nth(i).textContent()
  if(value.includes('JavaScript')){
    await options.nth(i).click()
    break
  }
}
  await page.waitForTimeout(3000);
});
