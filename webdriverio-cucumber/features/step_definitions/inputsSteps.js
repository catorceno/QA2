import { Given, When, Then } from '@wdio/cucumber-framework'
import InputsPage from '../../pageobjects/inputsPage.js'

Given('estoy en la página de inputs', async () => {
    await InputsPage.open()
})

When('escribo el valor {string} en el input numérico', async (valor) => {
    await InputsPage.setValue(valor)
})

When('incremento el valor con la flecha hacia arriba', async () => {
    await InputsPage.pressArrowUp()
})

When('decremento el valor con la flecha hacia abajo dos veces', async () => {
    await InputsPage.pressArrowDown()
    await InputsPage.pressArrowDown()
})

Then('el valor del input debería ser {string}', async (valorEsperado) => {
    const valor = await InputsPage.getValue()
    expect(valor).toEqual(valorEsperado)
})
