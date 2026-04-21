import {test,expect} from '@playwright/test'

test('radiobuttons', async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#monday').check()
    await expect(page.locator('#monday')).toBeChecked()
    expect(await page.locator('#monday').isChecked()).toBeTruthy()

    expect(await page.locator('#sunday').isChecked()).toBeFalsy()

    const checkboxLocators = ['#monday', '#sunday', '#saturday']

    //select multiple checkboxes
    for(const locator of checkboxLocators){
        await page.locator(locator).check()
    }

    await page.waitForTimeout(5000)
    
    //unselect multiple selecetd checkboxes

    for(const locator of checkboxLocators){
        if(await page.locator(locator).isChecked()){
            await page.locator(locator).uncheck()
        }
        
    }

    await page.waitForTimeout(5000)// pause code

})