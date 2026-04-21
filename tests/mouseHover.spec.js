import {test,expect} from '@playwright/test'

test('Mouse Hover', async({page}) =>{
    await page.goto('https://www.w3schools.com/css/css_dropdowns.asp')
    await page.waitForSelector("//button[@class='dropbtn dropbtn2'][text()='Dropdown Menu']")
    const dropdownMenu = await page.locator("//button[@class='dropbtn dropbtn2'][text()='Dropdown Menu']")
    const link2 = await page.locator("(//a[contains(text(),'Link 2')])[2]")
    await dropdownMenu.hover()
    await link2.hover()

    await page.waitForTimeout(3000)
})
