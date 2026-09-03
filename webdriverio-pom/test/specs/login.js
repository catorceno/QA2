import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/loginPage.js'
import SecurePage from '../pageobjects/securePage.js'

describe('Login en HerokuApp con POM', () => {
    beforeEach(async () => {
        await LoginPage.open()
    })

    it('Debe iniciar sesión exitosamente con credenciales válidas', async () => {
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await SecurePage.isMessageDisplayed('You logged into a secure area!')
    })

    it('Debe fallar el login con credenciales inválidas', async () => {
        await LoginPage.login('usuario_invalido', 'clave_invalida')
        await SecurePage.isMessageDisplayed('Your username is invalid!')

    })
})