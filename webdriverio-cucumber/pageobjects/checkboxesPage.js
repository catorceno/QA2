import Page from './page.js'

class CheckboxesPage {
    get checkbox1 () { return $('#checkboxes input:nth-child(1)'); }
    get checkbox2 () { return $('#checkboxes input:nth-child(3)'); }

    async open () {
        await super.open('checkboxes');
    }

    async toggleCheckbox1 () {
        await this.checkbox1.click();
    }

    async toggleCheckbox2 () {
        await this.checkbox2.click();
    }
}

export default new CheckboxesPage();