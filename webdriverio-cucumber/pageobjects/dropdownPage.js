import Page from './page.js'

class DropdownPage extends Page {
    get dropdown() { return $('#dropdown') }

    async open() {
        await super.open('dropdown')
    }

    async selectOption(optionText) {
        await this.dropdown.selectByVisibleText(optionText)
    }

    async getSelectedValue() {
        return await this.dropdown.getValue()
    }
}

export default new DropdownPage()
