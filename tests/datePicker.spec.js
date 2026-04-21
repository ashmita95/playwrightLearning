import {test,expect} from '@playwright/test'

test('Table', async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //await page.fill('#datepicker','10/26/2025')

    //if directly adding date is not allowed
    const year ="2024"
    const month = "October"
    const date = "20"

    await page.click('#datepicker')

    while(true){
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()
        const currentYear = await page.locator('.ui-datepicker-year').textContent()

        if(currentYear==year && currentMonth == month){
            break;
        }

        else{
            //await page.locator("a[title='Next']").click()// future date
            await page.locator("a[title='Prev']").click()// previous date
        }
    }
// date selection using for loop
    /*const dates = await page.$$('.ui-state-default')
    for(const dt of dates){
        if(await dt.textContent() == date){
            await dt.click()
            break;
        }
    }*/

// date selection without loop

    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)
    await page.waitForTimeout(5000)
})