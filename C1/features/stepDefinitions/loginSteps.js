import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from '@wdio/globals'
import LoginPage from "../../pageObjects/loginPage";


Given('I\'m at SauceDemo\'s login page', async () => {
    await LoginPage.open()
    await browser.takeScreenshot()
})

Given('I\'m logged as {string} at SauceDemo', async (username) => {
    await LoginPage.open()
    await LoginPage.login(username, 'secret_sauce')
    // await expect(await InventoryPage.isLoaded()).toBe(true)
    await browser.takeScreenshot()
})

When('I enter username {string} and password {string}', async (username, password) => {
    await LoginPage.login(username, password)
    await browser.takeScreenshot()
})

Then('it should successfully access the products page', async () => {
    // await expect(await InventoryPage.isLoaded()).toBe(true)
    const url = await browser.getUrl()
    await expect(url).toContain('inventory.html')
    await browser.takeScreenshot()
})

Then('it should display error message {string}', async (expectedMessage) => {
    const message = await LoginPage.getErrorMessage()
    await expect(message).toContain(expectedMessage)
    await browser.takeScreenshot()
})