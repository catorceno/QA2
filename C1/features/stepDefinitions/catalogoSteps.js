import { When, Then } from "@wdio/cucumber-framework";
import { expect } from '@wdio/globals'
import CatalogoPage from "../../pageObjects/catalogoPage"

When('abro el detalle del libro {string}', async (titulo) => {
    await CatalogoPage.abrirDetalle(titulo)
    await browser.takeScreenshot()
})

Then('debería ver el detalle del libro {string}', async (titulo) => {
    const tituloDetalle = await CatalogoPage.getTituloDetalle()
    await expect(tituloDetalle).toBe(titulo)
    const url = await browser.getUrl()
    await expect(url).toContain('/catalogo/')
    await browser.takeScreenshot()
})

When('solicito el préstamo del libro', async () => {
    await CatalogoPage.abrirModalPrestamo()
    await browser.takeScreenshot()
})

When('selecciono la fecha de devolución a {int} días', async (dias) => {
    await CatalogoPage.seleccionarFechaDevolucion(dias)
    await browser.takeScreenshot()
})

Then('debería ver un plazo de préstamo de {int} días', async (dias) => {
    const fechaEsperada = CatalogoPage.formatearFecha(CatalogoPage.sumarDias(dias))
    const fechaActual = await CatalogoPage.getFechaDevolucion()
    await expect(fechaActual).toBe(fechaEsperada)

    const plazo = await CatalogoPage.getTextoPlazo()
    await expect(plazo).toContain(`${dias} días`)
    await browser.takeScreenshot()
})

When('confirmo el préstamo', async () => {
    await CatalogoPage.confirmarPrestamo()
    await browser.takeScreenshot()
})

Then('debería ver el libro {string} en mis préstamos', async (titulo) => {
    await CatalogoPage.irAMisPrestamos()
    const elemento = $(`//main//*[contains(normalize-space(text()),"${titulo}")]`)
    await elemento.waitForDisplayed({ timeout: 10000 })
    await expect(elemento).toBeDisplayed()
    await browser.takeScreenshot()
})