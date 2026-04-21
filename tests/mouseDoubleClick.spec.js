import {test,expect} from '@playwright/test'

test('Mouse Double Click', async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const buttonCopy = page.locator("//button[normalize-space()='Copy Text']")
    //double click
    await buttonCopy.dblclick()

    const field2 = page.locator('#field2')
    await expect(field2).toHaveValue('Hello World!')

    await page.waitForTimeout(3000)
})