import {test,expect} from '@playwright/test'

test('Table', async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator('#productTable')

    //1 Total no of rows and columns
    const columns = await table.locator('thead tr th')
    console.log(await columns.count())
    await expect(await columns.count()).toBe(4)

    const rows = await table.locator('tbody tr')
    console.log(await rows.count())    
    await expect(await rows.count()).toBe(5)

    //2 select particular checkbox of a row based on product name
    // const matchRow = await rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Smartwatch'
    // })
    // await matchRow.locator("input[type='checkbox']").check()

    //3 select multiple product by resuing function in js
    // await selectProduct(page,rows,'Smartphone')
    // await selectProduct(page,rows,'Laptop')
    // await selectProduct(page,rows,'Wireless Earbuds')

    //4 print all product details by using loop
    // for(let i=0; i< await rows.count(); i++){
    //     let row = rows.nth(i)
    //     let tds = row.locator('td')
    //     for(let j=0; j< await tds.count()-1; j++){
    //         console.log(await tds.nth(j).textContent())
    //     }
    // }

    // 5 read paginated data from the table

    const pages = await page.locator('.pagination li a')
    const totalPages = await pages.count()
    for(let p=0; p< totalPages; p++){
        if(p>0){
            await pages.nth(p).click()
        }
        for(let i=0; i< await rows.count(); i++){
            let row = rows.nth(i)
            let tds = row.locator('td')
            for(let j=0; j< await tds.count()-1; j++){
                console.log(await tds.nth(j).textContent())
            }
        }
        await page.waitForTimeout(3000)
    }    

    await page.waitForTimeout(3000)
})

async function selectProduct(page, rows, name){
    const matchRow = await rows.filter({
             has: page.locator('td'),
             hasText: name
    })
await matchRow.locator("input[type='checkbox']").check()
}