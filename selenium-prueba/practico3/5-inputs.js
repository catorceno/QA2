// https://the-internet.herokuapp.com/inputs

const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


const options = new chrome.Options()
  .addArguments('--disable-extensions')
  .addArguments('--incognito')
  .addArguments('--window-size=1920,1080'); 

async function probarInputNumerico(driver) {
  await driver.get('https://the-internet.herokuapp.com/inputs');
  await driver.wait(until.elementLocated(By.css('input[type="number"]')), 5000);

  const input = await driver.findElement(By.css('input[type="number"]'));

  // Caso 1: ingresar un número válido
  await input.sendKeys('42');
  let valor = await input.getAttribute('value');
  console.log('Valor ingresado →', valor);

  // Caso 2: limpiar e incrementar el valor con las flechas del teclado
  await input.clear();
  await input.sendKeys('10');
  await input.sendKeys(Key.ARROW_UP);
  await input.sendKeys(Key.ARROW_UP);
  valor = await input.getAttribute('value');
  console.log('Valor tras incrementar con flechas (10 + 2) →', valor);

  // Caso 3: intentar ingresar texto no numérico (el campo debe rechazarlo)
  await input.clear();
  await input.sendKeys('abc');
  valor = await input.getAttribute('value');
  console.log('Valor tras intentar ingresar texto no numérico →', `"${valor}"`, '(se espera vacío)');

  // Caso 4: ingresar un número negativo
  await input.clear();
  await input.sendKeys('-15');
  valor = await input.getAttribute('value');
  console.log('Valor ingresado (negativo) →', valor);
}

(async function runTests() {
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    await driver.manage().window().maximize();

    await probarInputNumerico(driver);

    const caps = await driver.getCapabilities();
    console.log('goog:chromeOptions usados →', caps.get('goog:chromeOptions'));
  } catch (err) {
    console.error('Error en las pruebas:', err);
  } finally {
    await driver.quit();
  }
})();