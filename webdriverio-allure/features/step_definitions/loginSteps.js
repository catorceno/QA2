import { Given, When, Then } from '@wdio/cucumber-framework'
import { expect } from '@wdio/globals'
import LoginPage from '../../pageobjects/loginPage.js'
import InventoryPage from '../../pageobjects/inventoryPage.js'

Given('estoy en la página de login de SauceDemo', async () => {
    await LoginPage.open()
    await browser.takeScreenshot()
})

// Step compartido: usado como precondición por las demás features
// (inventory, cart, checkout) para arrancar ya autenticado.
Given('inicio sesión como {string} en SauceDemo', async (username) => {
    await LoginPage.open()
    await LoginPage.login(username, 'secret_sauce')
    await expect(await InventoryPage.isLoaded()).toBe(true)
    await browser.takeScreenshot()
})

When('ingreso el usuario {string} y la contraseña {string}', async (username, password) => {
    await LoginPage.login(username, password)
    await browser.takeScreenshot()
})

Then('debería acceder correctamente a la página de productos', async () => {
    await expect(await InventoryPage.isLoaded()).toBe(true)
    const url = await browser.getUrl()
    await expect(url).toContain('inventory.html')
    await browser.takeScreenshot()
})

Then('debería ver el mensaje de error {string}', async (expectedMessage) => {
    const message = await LoginPage.getErrorMessage()
    await expect(message).toContain(expectedMessage)
    await browser.takeScreenshot()
})
