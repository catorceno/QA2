import { Given, When, Then } from '@wdio/cucumber-framework'
import { expect } from '@wdio/globals'
import InventoryPage from '../../pageobjects/inventoryPage.js'
import CartPage from '../../pageobjects/cartPage.js'

Given('abro el carrito de compras', async () => {
    await InventoryPage.openCart()
    await expect(await CartPage.isLoaded()).toBe(true)
})

Then('debería ver {int} producto\\(s\\) en el carrito', async (count) => {
    const total = await CartPage.getItemCount()
    await expect(total).toBe(count)
    await browser.takeScreenshot()
})

Then('debería ver el producto {string} en el carrito', async (name) => {
    const names = await CartPage.getItemNames()
    await expect(names).toContain(name)
    await browser.takeScreenshot()
})

When('elimino el producto {string} del carrito', async (name) => {
    await CartPage.removeItem(name)
})

When('presiono continuar comprando', async () => {
    await CartPage.continueShopping()
})

Then('debería regresar a la página de productos', async () => {
    await expect(await InventoryPage.isLoaded()).toBe(true)
    await browser.takeScreenshot()
})

When('presiono el botón de checkout', async () => {
    await CartPage.checkout()
})
