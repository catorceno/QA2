import Page from './page.js'

class CheckoutStepOnePage extends Page {
    get inputFirstName() { return $('#first-name') }
    get inputLastName() { return $('#last-name') }
    get inputPostalCode() { return $('#postal-code') }
    get continueButton() { return $('#continue') }
    get cancelButton() { return $('#cancel') }
    get errorMessage() { return $('[data-test="error"]') }

    async open() {
        await super.open('/checkout-step-one.html')
    }

    async isLoaded() {
        return $('.checkout_info').isDisplayed()
    }

    async fillInfo(firstName, lastName, postalCode) {
        if (firstName) await this.inputFirstName.setValue(firstName)
        if (lastName) await this.inputLastName.setValue(lastName)
        if (postalCode) await this.inputPostalCode.setValue(postalCode)
        await browser.takeScreenshot()
    }

    async continueCheckout() {
        await this.continueButton.click()
        await browser.takeScreenshot()
    }

    async cancel() {
        await this.cancelButton.click()
        await browser.takeScreenshot()
    }

    async getErrorMessage() {
        await this.errorMessage.waitForDisplayed()
        return this.errorMessage.getText()
    }
}

export default new CheckoutStepOnePage()
