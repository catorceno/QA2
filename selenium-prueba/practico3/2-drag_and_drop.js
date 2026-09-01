// https://the-internet.herokuapp.com/drag_and_drop

const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


const options = new chrome.Options()
  .addArguments('--disable-extensions')
  .addArguments('--incognito')
  .addArguments('--window-size=1920,1080'); 

async function dragAdnDrop(driver){
  await driver.get('https://the-internet.herokuapp.com/drag_and_drop');
  await driver.wait(until.elementLocated(By.id('column-a')), 5000);
  await driver.wait(until.elementLocated(By.id('column-b')), 5000);

  const columnA = await driver.findElement(By.id('column-a'));
  const columnB = await driver.findElement(By.id('column-b'));
  console.log(`Antes: Columna A = ${await columnA.getText()} y Columna B = ${await columnB.getText()}`);

  const actions = driver.actions({ bridge: true });
  await actions
    .move({ origin: columnA })
    .press()
    .move({ origin: columnB })
    .release()
    .perform();
  
  await driver.sleep(5000);

  const columnAafter = await driver.findElement(By.id('column-a'));
  const columnBafter = await driver.findElement(By.id('column-b'));
  console.log(`Después: Columna A = ${await columnA.getText()} y Columna B = ${await columnB.getText()}`);
}

(async function runTests() {
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    await driver.manage().window().maximize();

    await dragAdnDrop(driver);

    const caps = await driver.getCapabilities();
    console.log('goog:chromeOptions usados →', caps.get('goog:chromeOptions'));
  } catch (err) {
    console.error('Error en las pruebas:', err);
  } finally {
    await driver.quit();
  }
})();