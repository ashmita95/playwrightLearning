import {test,expect} from '@playwright/test'

test('Page ScreenShot', async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register')
    await page.screenshot({path:'tests/screenShot/'+Date.now()+'HomePage.png'})

})

test('Full Page ScreenShot', async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register')
    await page.screenshot({path:'tests/screenShot/'+Date.now()+'FullPage.png', fullPage:true})

})

test('Element ScreenShot', async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register')
    await page.locator("//div[@class='footer-block follow-us']").screenshot({path:'tests/screenShot/'+Date.now()+'links.png'})

})