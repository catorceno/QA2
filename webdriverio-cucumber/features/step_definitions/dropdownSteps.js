import { Given, When, Then } from '@wdio/cucumber-framework'
import DropdownPage from '../../pageobjects/dropdownPage.js'

Given('estoy en la página del dropdown', async () => {
    await DropdownPage.open()
})

When('selecciono la opción {string}', async (opcion) => {
    await DropdownPage.selectOption(opcion)
})

Then('el valor seleccionado debería ser {string}', async (valorEsperado) => {
    const valor = await DropdownPage.getSelectedValue()
    expect(valor).toEqual(valorEsperado)
})
