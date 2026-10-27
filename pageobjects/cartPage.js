import Page from './page.js'

class CartPage extends Page {
    get cartItems() { return $$('.cart_item') }
    get cartItemNames() { return $$('.cart_item .inventory_item_name') }
    get checkoutButton() { return $('#checkout') }
    get continueShoppingButton() { return $('#continue-shopping') }

    _slug(name) {
        return name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    }

    async open() {
        await super.open('/cart.html')
    }

    async isLoaded() {
        return $('.cart_list').isDisplayed()
    }

    async getItemCount() {
        return (await this.cartItems).length
    }

    async getItemNames() {
        const items = await this.cartItemNames
        return Promise.all(items.map(i => i.getText()))
    }

    async removeItem(name) {
        const btn = $(`#remove-${this._slug(name)}`)
        await btn.click()
        await browser.takeScreenshot()
    }

    async continueShopping() {
        await this.continueShoppingButton.click()
        await browser.takeScreenshot()
    }

    async checkout() {
        await this.checkoutButton.click()
        await browser.takeScreenshot()
    }
}

export default new CartPage()
