import { When, Then } from '@wdio/cucumber-framework'
import { expect } from '@wdio/globals'
import CheckoutStepOnePage from '../../pageobjects/checkoutStepOnePage.js'
import CheckoutStepTwoPage from '../../pageobjects/checkoutStepTwoPage.js'
import CheckoutCompletePage from '../../pageobjects/checkoutCompletePage.js'
import CartPage from '../../pageobjects/cartPage.js'

Then('debería ver el formulario de información de envío', async () => {
    await expect(await CheckoutStepOnePage.isLoaded()).toBe(true)
    await browser.takeScreenshot()
})

When('completo el formulario con nombre {string}, apellido {string} y código postal {string}', async (firstName, lastName, postalCode) => {
    await CheckoutStepOnePage.fillInfo(firstName, lastName, postalCode)
})

When('presiono continuar con el checkout', async () => {
    await CheckoutStepOnePage.continueCheckout()
})

Then('debería ver el resumen del pedido', async () => {
    await expect(await CheckoutStepTwoPage.isLoaded()).toBe(true)
    await browser.takeScreenshot()
})

Then('debería ver el mensaje de error de checkout {string}', async (expectedMessage) => {
    const message = await CheckoutStepOnePage.getErrorMessage()
    await expect(message).toContain(expectedMessage)
    await browser.takeScreenshot()
})

When('finalizo la compra', async () => {
    await CheckoutStepTwoPage.finish()
})

Then('debería ver el mensaje {string}', async (expectedMessage) => {
    const message = await CheckoutCompletePage.getCompleteMessage()
    await expect(message).toBe(expectedMessage)
    await browser.takeScreenshot()
})

When('cancelo el checkout', async () => {
    await CheckoutStepOnePage.cancel()
})

Then('debería regresar al carrito de compras', async () => {
    await expect(await CartPage.isLoaded()).toBe(true)
    await browser.takeScreenshot()
})

Then('el total del pedido debería ser igual al subtotal más el impuesto', async () => {
    const subtotal = await CheckoutStepTwoPage.getSubtotal()
    const tax = await CheckoutStepTwoPage.getTax()
    const total = await CheckoutStepTwoPage.getTotal()
    await expect(Math.round((subtotal + tax) * 100)).toBe(Math.round(total * 100))
    await browser.takeScreenshot()
})
