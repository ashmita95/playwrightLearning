import {test,expect} from '@playwright/test'

test('bootstrap DD', async({page}) =>{
    await page.goto('https://mdbootstrap.com/docs/standard/extended/dropdown-checkbox')
    await page.locator('#accept_cookies_btn').click()
    await page.locator('#dropdownMenuButton').click()

    // const options = page.locator('ul li input')
    // expect(options).toHaveCount(4)

    // const options = await page.$$('ul> li input')
    // expect(options.length).toBe(4)

    //Select/dselect multiple options from dd, here we can do it by value as well by using textContent() but inthe particular page all the dd text was same so we have clicked by the locator only
    const options = await page.$$('ul li label')
    for(const option of options){
        await option.click()
    }
    await page.waitForTimeout(5000)

})