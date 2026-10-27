import { When, Then } from '@wdio/cucumber-framework'
import { expect } from '@wdio/globals'
import InventoryPage from '../../pageobjects/inventoryPage.js'
import ProductDetailPage from '../../pageobjects/productDetailPage.js'
import LoginPage from '../../pageobjects/loginPage.js'

Then('debería ver {int} productos en el listado', async (count) => {
    const total = await InventoryPage.getProductCount()
    await expect(total).toBe(count)
    await browser.takeScreenshot()
})

When('ordeno los productos por {string}', async (criterio) => {
    await InventoryPage.sortBy(criterio)
})

Then('los productos deberían quedar ordenados por {string}', async (criterio) => {
    if (criterio.startsWith('Name')) {
        const names = await InventoryPage.getProductNames()
        const sorted = [...names].sort()
        if (criterio.includes('Z to A')) sorted.reverse()
        await expect(names).toEqual(sorted)
    } else {
        const prices = await InventoryPage.getProductPrices()
        const sorted = [...prices].sort((a, b) => a - b)
        if (criterio.includes('high to low')) sorted.reverse()
        await expect(prices).toEqual(sorted)
    }
    await browser.takeScreenshot()
})

When('agrego el producto {string} al carrito', async (name) => {
    await InventoryPage.addProductToCart(name)
})

When('quito el producto {string} del carrito', async (name) => {
    await InventoryPage.removeProductFromCart(name)
})

Then('el ícono del carrito debería mostrar {string} producto\\(s\\)', async (count) => {
    const badge = await InventoryPage.getCartCount()
    await expect(badge).toBe(count)
    await browser.takeScreenshot()
})

Then('el ícono del carrito no debería mostrar contador', async () => {
    const badge = await InventoryPage.getCartCount()
    await expect(badge).toBe(null)
    await browser.takeScreenshot()
})

When('abro el detalle del producto {string}', async (name) => {
    await InventoryPage.openProductDetail(name)
})

Then('debería ver la página de detalle del producto {string}', async (name) => {
    const title = await ProductDetailPage.getTitle()
    await expect(title).toBe(name)
    await browser.takeScreenshot()
})

When('cierro sesión desde el menú lateral', async () => {
    await InventoryPage.logout()
})

Then('debería regresar a la página de login', async () => {
    await expect(await LoginPage.inputUsername.isDisplayed()).toBe(true)
    await browser.takeScreenshot()
})
