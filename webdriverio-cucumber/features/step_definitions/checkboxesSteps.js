import { Given, When, Then } from '@wdio/cucumber-framework'
import CheckboxesPage from '../../pageobjects/checkboxesPage.js'

Given('estoy en la página de checkboxes', async () => {
    await CheckboxesPage.open()
})

When('marco el primer checkbox', async () => {
    await CheckboxesPage.toggleCheckbox1()
})

When('desmarco el segundo checkbox', async () => {
    await CheckboxesPage.toggleCheckbox2()
})

Then('el primer checkbox debería estar marcado', async () => {
    await expect(CheckboxesPage.checkbox1).toBeSelected()
})

Then('el segundo checkbox debería estar desmarcado', async () => {
    await expect(CheckboxesPage.checkbox2).not.toBeSelected()
})
