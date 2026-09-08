import Page from './page.js'

class DragAndDropPage extends Page {
    get boxA() { return $('#column-a') }
    get boxB() { return $('#column-b') }

    async open() {
        await super.open('drag_and_drop')
    }

    async getBoxAText() {
        return await this.boxA.getText()
    }

    async getBoxBText() {
        return await this.boxB.getText()
    }

    async dragBoxAToBoxB() {
        await this.boxA.dragAndDrop(this.boxB)
    }
}

export default new DragAndDropPage()
