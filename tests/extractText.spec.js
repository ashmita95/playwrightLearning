import {test,expect} from '@playwright/test'

test('extrating text/values', async({page}) =>{
    await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard')
    await page.locator("a[title='Forms']").click()
    await page.locator("a[title='Form Layouts']").click()

    //single text value
    const basicForm = page.locator('nb-card').filter({hasText: 'Basic form'})
    const buttonText = await basicForm.locator('button').textContent()
    expect(buttonText).toBe('Submit')

    //Multiple values
    const allRadioButtons = await page.locator('nb-radio').allTextContents()
    expect(allRadioButtons).toContain('Option 1')

    //
    const input = basicForm.getByPlaceholder('Email')
    await input.fill('test@example.com')
    const inputValue = await input.inputValue()
    expect(inputValue).toEqual('test@example.com')
})