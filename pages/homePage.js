import{expect} from '@playwright/test';

export class HomePage{
    constructor(page){
        this.page = page
        this.productlists = '.hrefch'
        this.addToCartButton = "//a[normalize-space()='Add to cart']"
        this.cart = "//a[@id='cartur']"
    }
    async addProductToCart(productName){
        await this.page.waitForSelector(this.productlists)
        const productlist = await this.page.$$(this.productlists)
        for(const product of productlist){
            console.log(await product.textContent())
            if(productName === await product.textContent()){
                await product.click()
                break;
            }
        }
        this.page.on('dialog',async(dialog) =>{
            //console.log(dialog.message())
            expect(dialog.type()).toContain('alert')
            expect(dialog.message()).toContain('Product added.')
            await dialog.accept()              
        })
        await this.page.locator(this.addToCartButton).click()
    }

    async gotoCart(){
        await this.page.locator(this.cart).click()
    }
}