import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from '@wdio/globals'
import LoginPage from "../../pageObjects/loginPage";
import CatalogoPage from "../../pageObjects/catalogoPage"

Given('estoy en la página de login de Biblioteca QA', async () => {
    await LoginPage.open()
    await browser.takeScreenshot()
})

Given('estoy logeando como {string} en Biblioteca QA', async (username) => {
    await LoginPage.open()
    await LoginPage.login(username, 'Lector123!')
    await expect(await CatalogoPage.isLoaded()).toBe(true)
    await browser.takeScreenshot()
})

When('ingreso el usuario {string} y la contraseña {string}', async (username, password) => {
    await LoginPage.login(username, password)
    await browser.takeScreenshot()
})

Then('debería acceder correctamente a la página de catálogo', async () => {
    await expect(await CatalogoPage.isLoaded()).toBe(true)
    const url = await browser.getUrl()
    await expect(url).toContain('catalogo')
    await browser.takeScreenshot()
})

// verificar que el libro este registrado