// https://the-internet.herokuapp.com/infinite_scroll

const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


const options = new chrome.Options()
  .addArguments('--disable-extensions')
  .addArguments('--incognito')
  .addArguments('--window-size=1920,1080'); 

async function infiniteScroll(driver){
  await driver.get('https://the-internet.herokuapp.com/infinite_scroll');
  await driver.wait(until.elementLocated(By.css('.jscroll-added')), 5000);

  const initialParagraphs = (await driver.findElements(By.css('.jscroll-added'))).length;
  console.log(`Párrafos cargados al inicio: ${initialParagraphs}`);

  const SCROLL_AMOUNT = 5;

  for (let i = 1; i <= SCROLL_AMOUNT; i++) {
    // Bajamos hasta el final del documento para disparar la carga de más contenido
    await driver.executeScript('window.scrollTo(0, document.body.scrollHeight);');

    // Esperamos a que aparezca un nuevo párrafo respecto a la cantidad anterior
    const cantidadPrevia = (await driver.findElements(By.css('.jscroll-added'))).length;
    await driver.wait(async () => {
      const cantidadActual = (await driver.findElements(By.css('.jscroll-added'))).length;
      return cantidadActual > cantidadPrevia;
    }, 5000);

    const cantidadActual = (await driver.findElements(By.css('.jscroll-added'))).length;
    console.log(`Scroll #${i} → párrafos cargados: ${cantidadActual}`);
  }

  const cantidadFinal = (await driver.findElements(By.css('.jscroll-added'))).length;
  console.log(`Total de párrafos cargados tras ${SCROLL_AMOUNT} scrolls: ${cantidadFinal}`);
}

(async function runTests() {
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    await driver.manage().window().maximize();

    await infiniteScroll(driver);

    const caps = await driver.getCapabilities();
    console.log('goog:chromeOptions usados →', caps.get('goog:chromeOptions'));
  } catch (err) {
    console.error('Error en las pruebas:', err);
  } finally {
    await driver.quit();
  }
})();