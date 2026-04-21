import {test,expect} from '@playwright/test'

test('inputbox', async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.selectOption('#colors',['Red','Blue','Yellow'])

    //assertions
    //1. check no of options in dd
    //await expect(page.locator('#colors option')).toHaveCount(7)

    //2. check no of option in dd using js array
    //const options = await page.$$('#colors option')
    //expect(options.length).toBe(7)

    //3. presence of values in the dd
    const options = await page.locator('#colors').textContent()
    expect(options.includes('Red')).toBeTruthy()
    expect(options.includes('Black')).toBeFalsy()

    await page.waitForTimeout(5000)

})