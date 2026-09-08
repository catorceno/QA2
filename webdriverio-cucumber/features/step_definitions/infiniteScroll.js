import { Given, When, Then } from '@wdio/cucumber-framework'
import InfiniteScrollPage from '../../pageobjects/infiniteScrollPage.js'

let parrafosIniciales

Given('estoy en la página de infinite scroll', async () => {
    await InfiniteScrollPage.open()
    parrafosIniciales = await InfiniteScrollPage.countParagraphs()
})

When('hago scroll hacia abajo {int} veces', async (veces) => {
    for (let i = 0; i < veces; i++) {
        await InfiniteScrollPage.scrollToBottom()
    }
})

Then('debería haberse agregado más párrafos', async () => {
    const parrafosFinales = await InfiniteScrollPage.countParagraphs()
    expect(parrafosFinales).toBeGreaterThan(parrafosIniciales)
})
