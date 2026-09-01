// https://the-internet.herokuapp.com/dropdown

const { Builder, By, until, Select } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


const options = new chrome.Options()
  .addArguments('--disable-extensions')
  .addArguments('--incognito')
  .addArguments('--window-size=1920,1080'); 

async function selectOptionDropdown(driver){
  await driver.get('https://the-internet.herokuapp.com/dropdown');
  await driver.wait(until.elementLocated(By.id('dropdown')), 5000);

  const dropdown = await driver.findElement(By.id('dropdown'));
  const select = new Select(dropdown);

  await select.selectByValue('1');
  let actualOption = await select.getFirstSelectedOption();
  console.log(`Opción seleccionada: ${await actualOption.getText()}`);

  await driver.sleep(500);

  await select.selectByValue('2');
  actualOption = await select.getFirstSelectedOption();
  console.log(`Opción seleccionada: ${await actualOption.getText()}`);
}
(async function runTests() {
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    await driver.manage().window().maximize();

    await selectOptionDropdown(driver);

    const caps = await driver.getCapabilities();
    console.log('goog:chromeOptions usados →', caps.get('goog:chromeOptions'));
  } catch (err) {
    console.error('Error en las pruebas:', err);
  } finally {
    await driver.quit();
  }
})();