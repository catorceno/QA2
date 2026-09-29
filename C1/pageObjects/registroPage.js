import Page from "./page";

class RegistroPage extends Page {
    get inputNombre() { return $('input[name="fullName"]') }
    get inputCorreo() { return $('input[name="email"]') }
    get inputUsuario() { return $('input[name="username"]') }
    get inputPassword() { return $('input[name="password"]') }
    get inputConfirmar() { return $('input[name="confirmPassword"]') }
    get selectTipo() { return $('select[name="userType"]') }
    get checkTerminos() { return $('input[name="acceptTerms"]') }
    get btnCrearCuenta() { return $('button[name="btnRegister"]') }
    get nombreCabecera() { return $('header.header') }

    async open() {
        await super.open('registro')
        await this.inputNombre.waitForDisplayed({ timeout: 10000 })
    }

    async completarFormulario({ nombre, correo, usuario, password, tipo }) {
        await this.inputNombre.setValue(nombre)
        await this.inputCorreo.setValue(correo)
        await this.inputUsuario.setValue(usuario)
        await this.inputPassword.setValue(password)
        await this.inputConfirmar.setValue(password)
        await this.selectTipo.selectByVisibleText(tipo)
    }

    async aceptarTerminos() {
        if (!(await this.checkTerminos.isSelected())) {
            await this.checkTerminos.click()
        }
    }

    async crearCuenta() {
        await this.btnCrearCuenta.waitForClickable({ timeout: 5000 })
        await this.btnCrearCuenta.click()
        // Esperar a salir de /registro
        await browser.waitUntil(
            async () => !(await browser.getUrl()).includes('/registro'),
            { timeout: 10000, timeoutMsg: 'La app no salió de /registro tras crear la cuenta' }
        )
    }

    async getTextoCabecera() {
        await this.nombreCabecera.waitForDisplayed({ timeout: 10000 })
        return await this.nombreCabecera.getText()
    }
}

export default new RegistroPage()