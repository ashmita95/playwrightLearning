import {test,expect} from '@playwright/test';
//
test.beforeEach(async({page})=>{
    //page = await browser.newPage()
    await page.goto('https://www.demoblaze.com/')

    await page.locator('#login2').click()
    await page.fill('#loginusername','pavanol')
    await page.fill('input[id="loginpassword"]','test@123')
    await page.click('button[onclick="logIn()"]')
})

test.afterEach(async({page}) =>{
    await page.locator('a#logout2').click()  
})



test('Home Page Test', async({page})=>{ 
    await page.waitForSelector('.hrefch')
    const products = await page.$$('.hrefch')
    expect(products.length).toBe(9)      

    await page.waitForTimeout(5000)

})

test('Add Product to Cart', async({page})=>{
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space()='Add to cart']").click()

    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })
    await page.waitForTimeout(5000)

})