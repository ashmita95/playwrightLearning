import {test,expect} from '@playwright/test'

test('inputbox', async({page}) =>{
    await page.goto('https://gotranscript.com/text-compare')

    await page.locator('textarea[name="text1"]').fill('Welcome to automation')
    //await page.type('textarea[name="text1"]', 'Welcome to automation')

    //Ctrl+a
    await page.keyboard.press('Control+A')

    //Ctrl+c
    await page.keyboard.press('Control+C')

    //tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //Ctrl+v
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(5000)
})