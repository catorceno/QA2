import Page from './page.js'

class LoginPage extends Page {
    get inputUsername() { return $('#login-username') }
    get inputPassword() { return $('#login-password') }
    get btnLogin() { return $('#btn-login') }

    async open(){
        await super.open('login')
    }

    async login(username, password){
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await browser.takeScreenshot()
        await this.btnLogin.click()
    }
}

export default new LoginPage()