import {test,expect} from '@playwright/test'

test('assertion test', async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register')
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    const pageLogo = page.locator('.header-logo')

    await expect(pageLogo).toBeVisible()

    await expect(page.getByPlaceholder('Search store')).toBeEnabled()

    const maleRadiobutton = page.locator('#gender-male')
    await maleRadiobutton.check()
    await expect(maleRadiobutton).toBeChecked()

    const newsLetterBox = page.getByRole('checkbox',{name:"Newsletter:"})
    await expect(newsLetterBox).toBeChecked()

    const registerButton = page.locator('#register-button')
    await expect(registerButton).toHaveAttribute('type','submit')

    await expect(page.locator('.page-title')).toHaveText('Register')

    await expect(page.locator('.page-title')).toContainText('Reg')

    const emailInput = page.getByRole('textbox',{name:"email"})
    await emailInput.fill('test@gmail.com')
    await expect(emailInput).toHaveValue('test@gmail.com')
    //await emailInput.clear() //---to clear the typed values

    //useful for count elemet in dd
    //   expect(locator).toHaveCount()

    //negative assertion, for every type of assertion
    //expect(loactor).not.toHaveURL()
})