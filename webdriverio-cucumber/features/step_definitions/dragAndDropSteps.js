import { Given, When, Then } from '@wdio/cucumber-framework'
import DragAndDropPage from '../../pageobjects/dragAndDropPage.js'

let textoInicialA
let textoInicialB

Given('estoy en la página de drag and drop', async () => {
    await DragAndDropPage.open()
    textoInicialA = await DragAndDropPage.getBoxAText()
    textoInicialB = await DragAndDropPage.getBoxBText()
})

When('arrastro el cuadro A hacia el cuadro B', async () => {
    await DragAndDropPage.dragBoxAToBoxB()
})

Then('el contenido de los cuadros debería estar intercambiado', async () => {
    await expect(DragAndDropPage.boxA).toHaveText(textoInicialB)
    await expect(DragAndDropPage.boxB).toHaveText(textoInicialA)
})
