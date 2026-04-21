import {test,expect} from '@playwright/test'

test('handle dropdown', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //If the DD have select tag then we can use the following

    //await page.locator('#country').selectOption({label:'India'})//label//recomended
    //await page.locator('#country').selectOption('India')//using visible text//recomended
    //await page.locator('#country').selectOption({value:"uk"})// using value attribute
    //await page.locator('#country').selectOption({index: 1})// using index number
    //await page.selectOption('#country',{label:'India'})//by selectoption directly//recomended

    //Asssertion
    //1--check all options in DD 
    //const allOptions = page.locator('#country option')
    //await expect(allOptions).toHaveCount(10)

    //2--check all options in DD 
    //const allOptions = await page.$$('#country option')//store in a form of array
    //console.log("number of options:", allOptions.length)
    //await expect(allOptions.length).toBe(10)

    //3--check a presence of value in the DD
    //const content = await page.locator('#country').textContent()
    //await expect(content.includes('India')).toBeTruthy()

    //4--check a presence of value in the DD
    // const allOptions = await page.$$('#country option')
    // let status = false
    // for(const option of allOptions){
    //     //console.log(await option.textContent())
    //     let value = await option.textContent()
    //     if(value.includes('India')){
        //value.includes('France') is similar to value == 'France'
    //         status = true
    //         break
    //     }
    // }
    // await expect(status).toBeTruthy()

    // select options from dd using for loop
    const allOptions = await page.$$('#country option')
    //console.log(allOptions)
    for(const option of allOptions){
        let value = await option.textContent()        
        if(value.includes('France')){
            //value.includes('France') is similar to value == 'France'
            await page.selectOption("#country", value.trim())
            break
        }
    }
    
    
    await page.waitForTimeout(500)
})