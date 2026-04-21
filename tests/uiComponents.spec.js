import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => { 
    await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard')
})

test.describe('form layout',() =>{
    test.beforeEach(async({page}) =>{
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
    })

    test('input field', async({page})=>{
        const emailInputField = page.locator('nb-card', {hasText: 'Using the Grid'}).getByRole('textbox',{name:'Email'})
        await emailInputField.fill('ashmita@gmail.com')
        // await emailInputField.clear()

        //await emailInputField.pressSequentially('ashmita@gmail.com',{delay:2000})
        const emailInputValue = await emailInputField.inputValue()
        expect(emailInputValue).toEqual('ashmita@gmail.com')

        await expect(emailInputField).toHaveValue('ashmita@gmail.com')
    })

    test('radio buttons', async({page})=>{
        const gridForm = page.locator('nb-card', {hasText: 'Using the Grid'})
        //await gridForm.getByLabel('Option 1').check({force:true})
        await gridForm.getByRole('radio',{name:'Option 1'}).check({force:true})
        expect(await gridForm.getByRole('radio',{name:'Option 1'}).isChecked()).toBeTruthy()
        await expect(gridForm.getByRole('radio',{name:'Option 1'})).toBeChecked()

        await gridForm.getByRole('radio',{name:'Option 2'}).check({force:true})
        expect(await gridForm.getByRole('radio',{name:'Option 1'}).isChecked()).toBeFalsy()
        expect(await gridForm.getByRole('radio',{name:'Option 2'}).isChecked()).toBeTruthy()
    })

})

test('checkboxes', async({page})=>{
    await page.locator("a[title='Modal & Overlays']").click()
    await page.locator("a[title='Toastr']").click()

    await page.getByRole('checkbox',{name:'Hide on click'}).check({force:true})
    await page.getByRole('checkbox',{name:'Hide on click'}).uncheck({force:true})

    await page.getByRole('checkbox',{name:'Prevent arising of duplicate toast'}).check({force:true})

    const checkboxes = page.getByRole('checkbox')

    for(const box of await checkboxes.all()){
        await box.check({force:true})
        expect(await box.isChecked()).toBeTruthy()
    }

    await page.waitForTimeout(5000)
})


test.only('tooltip', async({page})=>{
    await page.locator("a[title='Modal & Overlays']").click()
    await page.locator("a[title='Tooltip']").click()

    const tooltipcard = page.locator('nb-card',{hasText:'Tooltip Placements'})
    await tooltipcard.getByRole('button',{name:'Top'}).hover()
    const tooltip = await page.locator('nb-tooltip').textContent()
    expect(tooltip).toBe('This is a tooltip')
    await page.waitForTimeout(5000)
})