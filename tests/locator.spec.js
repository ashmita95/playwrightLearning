import {test,expect} from '@playwright/test';

test('Locate Multiple elements', async({page})=>{
    await page.goto('https://www.demoblaze.com/')

    await page.locator('#login2').click()

    //await page.locator('#loginusername').fill('pavanol')
    await page.fill('#loginusername','pavanol')
    //await page.type('#loginusername','pavanol')

    await page.fill('input[id="loginpassword"]','test@123')

    await page.click('button[onclick="logIn()"]')

    const logoutButton = page.locator('a#logout2')
    await expect(logoutButton).toBeVisible()

    await page.close()

})