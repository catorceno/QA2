import Page from './page.js'

class InfiniteScrollPage extends Page {
    get paragraphs() { return $$('.jscroll-added') }

    async open() {
        await super.open('infinite_scroll')
    }

    async countParagraphs() {
        return (await this.paragraphs).length
    }

    async scrollToBottom() {
        await browser.execute(() => window.scrollTo(0, document.body.scrollHeight))
        await browser.pause(1000)
    }
}

export default new InfiniteScrollPage()
