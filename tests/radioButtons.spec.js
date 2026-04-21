import {test,expect} from '@playwright/test'

test('radiobuttons', async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Female radio button
    await page.getByLabel('Female').check()
    //await page.check("label[for='female']")

    await expect(page.getByLabel('Female')).toBeChecked()
    expect(await page.getByLabel('Female').isChecked()).toBeTruthy()

    //Male radio button
    expect(await page.locator("//input[@id='male']").isChecked()).toBeFalsy()

    await page.waitForTimeout(5000)// pause code to see the result on ui

})