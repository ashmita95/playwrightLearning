import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => { 
    await page.goto('http://uitestingplayground.com/ajax')
    await page.locator('#ajaxButton').click()
}) 

test('Auto Waiting', async({page}) =>{
    // const successMessage = await page.locator('.bg-success').textContent()
    // expect(successMessage).toBe('Data loaded with AJAX get request.')

    // await page.waitForSelector('.bg-success')
    // const successMessage = await page.locator('.bg-success').allTextContents()
    // expect(successMessage).toContain('Data loaded with AJAX get request.')

    const successMessage = page.locator('.bg-success')
    await expect(successMessage).toHaveText('Data loaded with AJAX get request.', {timeout: 20000})

})


test('alternative element', async({page}) =>{
    const successMessage = page.locator('.bg-success')

    // ----- wait for locator
    //await page.waitForSelector('.bg-success')

    // ----- wait for particular response
    //await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

    // ----- wait for network calls to be completed NOT RECOMENDED
    await page.waitForLoadState('networkidle')
    const successMessageText = await successMessage.allTextContents()
    expect(successMessageText).toContain('Data loaded with AJAX get request.')

})

test.only('timeout', async({page}) =>{
    //test.setTimeout(10000)
    test.slow()
    const successButton = page.locator('.bg-success')    
    await successButton.click({timeout:16000})

    // ----- wait for locator
    //await page.waitForSelector('.bg-success')

    // ----- wait for particular response
    //await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

    // ----- wait for network calls to be completed NOT RECOMENDED
    // await page.waitForLoadState('networkidle')
    // const successMessageText = await successMessage.allTextContents()
    // expect(successMessageText).toContain('Data loaded with AJAX get request.')

})
