// https://the-internet.herokuapp.com/checkboxes

const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


const options = new chrome.Options()
  .addArguments('--disable-extensions')
  .addArguments('--incognito')
  .addArguments('--window-size=1920,1080'); 

async function marcarCheckboxes(driver){
  await driver.get('https://the-internet.herokuapp.com/checkboxes');
  await driver.wait(until.elementLocated(By.css('input[type="checkbox"]')), 5000);

  const checkboxes = await driver.findElements(By.css('input[type="checkbox"]'));
  console.log(`Se encontraron ${checkboxes.length} checkboxes`);

  for(let i = 0; i < checkboxes.length; i++){
    const checkbox = checkboxes[i];

    const previousState = await checkbox.isSelected();
    await checkbox.click();
    const nextState = await checkbox.isSelected();

    console.log(`checkbox "${i+1}: ${previousState} -> ${nextState}`)
  }
}

(async function runTests() {
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    await driver.manage().window().maximize();

    await marcarCheckboxes(driver);

    const caps = await driver.getCapabilities();
    console.log('goog:chromeOptions usados →', caps.get('goog:chromeOptions'));
  } catch (err) {
    console.error('Error en las pruebas:', err);
  } finally {
    await driver.quit();
  }
})();