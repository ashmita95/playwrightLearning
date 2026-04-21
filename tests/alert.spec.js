import {test,expect} from '@playwright/test'

test('Alert with ok', async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //enable alert window
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })

    await page.click('#alertBtn')
    await page.waitForTimeout(5000)
})

test.skip('Alert with ok and cancel', async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //enable alert window
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept()// close by using ok
        //await dialog.dismiss()// close by using cancel
    })

    await page.click('#confirmBtn')
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')
    await page.waitForTimeout(5000)
})

test.skip('Prompt Dialog', async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //enable alert window
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('John')// close by using ok
        //await dialog.dismiss()// close by using cancel
    })

    await page.click('#promptBtn')
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello John! How are you today?')
    await page.waitForTimeout(5000)
})