import{test,expect} from '@playwright/test'

test('hidden option dropdown', async({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const logo = page.getByAltText('company-branding')
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button',{type:"submit"}).click()

    await page.locator("//span[normalize-space()='PIM']").click()

    await page.locator('//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]').click()
    await page.waitForTimeout(3000)
    const options = await page.$$("div[role='listbox'] span")
    for(const option of options){
        const jobtitle = await option.textContent()
        //console.log(jobtitle)
        if(jobtitle.includes('QA Engineer')){
            await option.click()
            break
        }
    }
    await page.waitForTimeout(3000);
})