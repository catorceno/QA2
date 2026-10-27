import Page from './page.js'

class CheckoutStepTwoPage extends Page {
    get subtotalLabel() { return $('.summary_subtotal_label') }
    get taxLabel() { return $('.summary_tax_label') }
    get totalLabel() { return $('.summary_total_label') }
    get finishButton() { return $('#finish') }
    get cancelButton() { return $('#cancel') }

    async open() {
        await super.open('/checkout-step-two.html')
    }

    async isLoaded() {
        return $('.checkout_summary_container').isDisplayed()
    }

    _parseMoney(text) {
        return parseFloat(text.replace(/[^0-9.]/g, ''))
    }

    async getSubtotal() {
        return this._parseMoney(await this.subtotalLabel.getText())
    }

    async getTax() {
        return this._parseMoney(await this.taxLabel.getText())
    }

    async getTotal() {
        return this._parseMoney(await this.totalLabel.getText())
    }

    async finish() {
        await this.finishButton.click()
        await browser.takeScreenshot()
    }

    async cancel() {
        await this.cancelButton.click()
        await browser.takeScreenshot()
    }
}

export default new CheckoutStepTwoPage()
