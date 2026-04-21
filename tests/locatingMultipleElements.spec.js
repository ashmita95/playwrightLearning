import {test,expect} from '@playwright/test';

test('Locate Multiple elements', async({page})=>{
    await page.goto('https://www.demoblaze.com/')

    await page.waitForSelector('div #tbodyid div h4 a')

    const products = await page.$$('div #tbodyid div h4 a')

    for(const product of products){
        const productName = await product.textContent()
        console.log(productName)
    }

})