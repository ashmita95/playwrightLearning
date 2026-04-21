import {expect} from '@playwright/test'
export class LoginPage{
    constructor(page){
        this.page = page
        this.loginLink = page.locator('#login2')
        this.emailInput = page.locator('#loginusername')
        this.passwordInput = page.locator('input[id="loginpassword"]')
        this.loginButton = page.locator('button[onclick="logIn()"]')
        this.logoutButton = page.locator('#logout2')
    }

    async gotoPage(){
        await this.page.goto('https://www.demoblaze.com/')
    }

    async login(email,password){
        await this.loginLink.click()
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
        await expect(this.logoutButton).toBeVisible()
    }
}