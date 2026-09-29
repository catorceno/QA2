import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from '@wdio/globals'
import RegistroPage from "../../pageObjects/registroPage"
import LoginPage from "../../pageObjects/loginPage"

// Credenciales del usuario creado en el escenario (con sufijo único)
let credenciales = {}

Given('estoy en la página de registro de Biblioteca QA', async () => {
    await RegistroPage.open()
    await browser.takeScreenshot()
})

When('completo el formulario de registro con nombre {string}, correo {string}, usuario {string}, contraseña {string} y tipo de usuario {string}',
    async (nombre, correo, usuario, password, tipo) => {
        // Sufijo único para poder ejecutar el test varias veces (los datos quedan en localStorage)
        const sufijo = Date.now().toString().slice(-6)
        const [local, dominio] = correo.split('@')
        credenciales = {
            nombre,
            correo: `${local}${sufijo}@${dominio}`,
            usuario: `${usuario}${sufijo}`,
            password,
            tipo
        }
        await RegistroPage.completarFormulario(credenciales)
        await browser.takeScreenshot()
    })

When('acepto los términos y condiciones', async () => {
    await RegistroPage.aceptarTerminos()
    await browser.takeScreenshot()
})

When('creo la cuenta', async () => {
    await RegistroPage.crearCuenta()

    // Si la app redirige a /login tras el registro, iniciar sesión con la cuenta nueva
    const url = await browser.getUrl()
    if (url.includes('/login')) {
        await LoginPage.login(credenciales.usuario, credenciales.password)
    }
    await browser.takeScreenshot()
})

Then('debería ver el nombre {string} en la cabecera', async (nombre) => {
    const texto = await RegistroPage.getTextoCabecera()
    await expect(texto).toContain(nombre)
    await browser.takeScreenshot()
})