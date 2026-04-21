import {test,expect} from '@playwright/test'

test('Page ScreenShot', async({page})=>{
    await page.goto('https://www.demoblaze.com/')

    await page.locator('#login2').click()
    await page.fill('#loginusername','pavanol')
    await page.fill('input[id="loginpassword"]','test@123')
    await page.getByRole('button',{name:'Log In'}).click()
    await expect(page.locator('a#logout2')).toBeVisible()

})