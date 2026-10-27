import Page from './page.js'

class InventoryPage extends Page {
    get inventoryItems() { return $$('.inventory_item') }
    get inventoryItemNames() { return $$('.inventory_item_name') }
    get inventoryItemPrices() { return $$('.inventory_item_price') }
    get sortDropdown() { return $('[data-test="product-sort-container"]') }
    get cartBadge() { return $('.shopping_cart_badge') }
    get cartLink() { return $('.shopping_cart_link') }
    get burgerMenuBtn() { return $('#react-burger-menu-btn') }
    get logoutLink() { return $('#logout_sidebar_link') }

    // Convierte "Sauce Labs Backpack" -> "sauce-labs-backpack"
    _slug(name) {
        return name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    }

    async open() {
        await super.open('/inventory.html')
    }

    async isLoaded() {
        return $('.inventory_list').isDisplayed()
    }

    async getProductCount() {
        return (await this.inventoryItems).length
    }

    async getProductNames() {
        const items = await this.inventoryItemNames
        return Promise.all(items.map(i => i.getText()))
    }

    async getProductPrices() {
        const items = await this.inventoryItemPrices
        const texts = await Promise.all(items.map(i => i.getText()))
        return texts.map(t => parseFloat(t.replace('$', '')))
    }

    async addProductToCart(name) {
        const btn = $(`#add-to-cart-${this._slug(name)}`)
        await btn.click()
        await browser.takeScreenshot()
    }

    async removeProductFromCart(name) {
        const btn = $(`#remove-${this._slug(name)}`)
        await btn.click()
        await browser.takeScreenshot()
    }

    async getCartCount() {
        if (await this.cartBadge.isExisting()) {
            return this.cartBadge.getText()
        }
        return null
    }

    async openCart() {
        await this.cartLink.click()
        await browser.takeScreenshot()
    }

    async sortBy(optionLabel) {
        await this.sortDropdown.selectByVisibleText(optionLabel)
        await browser.takeScreenshot()
    }

    async openProductDetail(name) {
        const link = $(`.inventory_item_name=${name}`)
        await link.click()
        await browser.takeScreenshot()
    }

    async logout() {
        await this.burgerMenuBtn.click()
        await this.logoutLink.waitForDisplayed()
        await this.logoutLink.click()
        await browser.takeScreenshot()
    }
}

export default new InventoryPage()
