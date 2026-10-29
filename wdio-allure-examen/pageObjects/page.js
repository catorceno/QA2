export default class Page {
    async open(path = ''){
        await browser.url(`https://biblioteca-qa.pages.dev/${path}`)
    }
}