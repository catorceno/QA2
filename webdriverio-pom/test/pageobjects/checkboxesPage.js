import Page from "./page";

class CheckboxesPage extends Page {
    get checkboxes() { return $$('#checkboxes input[type="checkbox"]') }

    async checkbox(index) {
        await this.checkboxes[indexes].click();
    }

    async open() {
        await super.open('checkboxes');
    } 
}