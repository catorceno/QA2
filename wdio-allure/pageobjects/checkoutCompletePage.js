import Page from './page.js'

class CheckoutCompletePage extends Page {
    get completeHeader() { return $('.complete-header') }
    get backHomeButton() { return $('#back-to-products') }

    async open() {
        await super.open('/checkout-complete.html')
    }

    async getCompleteMessage() {
        await this.completeHeader.waitForDisplayed()
        return this.completeHeader.getText()
    }

    async backToProducts() {
        await this.backHomeButton.click()
        await browser.takeScreenshot()
    }
}

export default new CheckoutCompletePage()
