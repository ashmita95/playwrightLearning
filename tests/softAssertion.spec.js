import {test,expect} from '@playwright/test'

test('soft assertion', async({page}) =>{
    await page.goto('https://www.demoblaze.com/')

    //hard assertion
    // await expect(page).toHaveTitle('STORE123')
    // await expect(page).toHaveURL('https://www.demoblaze.com/')
    // await expect(page.locator('.navbar-brand')).toBeVisible()

    //soft assertion
    await expect.soft(page).toHaveTitle('STORE123')
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/')
    await expect.soft(page.locator('.navbar-brand')).toBeVisible()
})