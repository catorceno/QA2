const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function example() {
    const options = new chrome.Options();
    options.addArguments('--start-maximized');
    options.addArguments('--disable-infobars');
    options.addArguments('--disable-extensions');
    options.addArguments('--incognito');
    options.excludeSwitches('enable-automation');
    options.addArguments('--disable-blink-features=AutomationControlled');
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    try {
        await driver.get('https://www.google.com');
        await driver.findElement(By.name('q')).sendKeys('Pruebas', Key.RETURN);
        await driver.wait(until.titleContains('Pruebas'), 5000);
    } finally {
        await driver.quit();
    }
})();