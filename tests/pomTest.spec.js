import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import { CartPage } from '../pages/cartPage';

test('test', async({page})=>{
    //Login
    const loginpage = new LoginPage(page)
    await loginpage.gotoPage()
    await loginpage.login('pavanol','test@123')

    //HomePage
    const homePage = new HomePage(page)
    await homePage.addProductToCart('Samsung galaxy s6')
    await homePage.gotoCart()

    //CartPage
    const cart = new CartPage(page)
    const status = await cart.checkProductInCart('Samsung galaxy s6')
    expect(status).toBe(true)
  
})