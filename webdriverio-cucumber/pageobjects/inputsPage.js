import Page from './page.js'

class InputsPage extends Page {
    get numberInput() { return $('input[type="number"]') }

    async open() {
        await super.open('inputs')
    }

    async setValue(value) {
        await this.numberInput.setValue(value)
    }

    async getValue() {
        return await this.numberInput.getValue()
    }

    async pressArrowUp() {
        await this.numberInput.click()
        await browser.keys('ArrowUp')
    }

    async pressArrowDown() {
        await browser.keys('ArrowDown')
    }
}

export default new InputsPage()
