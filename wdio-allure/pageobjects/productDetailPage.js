import Page from './page.js'

class ProductDetailPage extends Page {
    get title() { return $('.inventory_details_name') }
    get backButton() { return $('#back-to-products') }

    async getTitle() {
        await this.title.waitForDisplayed()
        return this.title.getText()
    }

    async backToProducts() {
        await this.backButton.click()
        await browser.takeScreenshot()
    }
}

export default new ProductDetailPage()
