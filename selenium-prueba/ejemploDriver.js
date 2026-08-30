const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

(async function example() {
    const driverPath = path.resolve('C:/Users/camila/Downloads/QA2/selenium-prueba/utilitarios/chromedriver-win64/chromedriver-win64/chromedriver.exe'); 
    const service = new chrome.ServiceBuilder(driverPath);
    let options = new chrome.Options();
    options.addArguments('--start-maximized');
    options.addArguments('--disable-infobars');
    options.addArguments('--disable-extensions');
    options.addArguments('--incognito');
    options.excludeSwitches('enable-automation');
    options.addArguments('--disable-blink-features=AutomationControlled');

    // Construir driver con opciones y servicio específico
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .setChromeService(service) 
        .build();

    try {
        await driver.get('https://www.google.com');
        let searchBox = await driver.findElement(By.name('q'));
        await searchBox.sendKeys('Pruebas', Key.RETURN);
        await driver.wait(until.titleContains('Pruebas'), 10000);
        console.log('Prueba completada con éxito');
    } catch (err) {
        console.error('Ocurrió un error:', err);
    } finally {
        await driver.quit();
    }
})();