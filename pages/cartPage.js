export class CartPage{
    constructor(page){
        this.page = page
        this.noOfProducts = "//tbody[@id='tbodyid']/tr/td[2]"
    }

    async checkProductInCart(productName){
      await this.page.waitForSelector(this.noOfProducts)
        const cartProductList = await this.page.$$(this.noOfProducts)
        for(const product of cartProductList){
            console.log(await product.textContent())
            if(productName == await product.textContent()){
                return true
            }
        }
        return false
    }
}
