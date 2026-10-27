import Page from './page.js'

class LoginPage extends Page {
    get inputUsername() { return $('#user-name') }
    get inputPassword() { return $('#password') }
    get btnLogin() { return $('#login-button') }
    get errorMessage() { return $('[data-test="error"]') }

    async open() {
        await super.open('/')
    }

    async login(username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await browser.takeScreenshot()
        await this.btnLogin.click()
    }

    async getErrorMessage() {
        await this.errorMessage.waitForDisplayed()
        return this.errorMessage.getText()
    }
}

export default new LoginPage()
