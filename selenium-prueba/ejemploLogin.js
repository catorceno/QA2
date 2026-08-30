// 5000 --> son milisegundos

const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


const options = new chrome.Options()
  .addArguments('--disable-extensions')
  .addArguments('--incognito')
  .addArguments('--window-size=1920,1080'); 

async function loginExitoso(driver) {
  await driver.get('https://the-internet.herokuapp.com/login');
  await driver.wait(until.elementLocated(By.id('username')), 5000);
  await driver.wait(until.elementLocated(By.id('password')), 5000);
  await driver.findElement(By.id('username')).sendKeys('tomsmith');
  await driver.findElement(By.id('password')).sendKeys('SuperSecretPassword!');
  await driver.findElement(By.css('button[type="submit"]')).click();
  const successMsg = await driver.wait(until.elementLocated(By.id('flash')), 5000);
  console.log('Login Exitoso →', await successMsg.getText());
}

async function loginFallido(driver) {
  await driver.get('https://the-internet.herokuapp.com/login');
  await driver.wait(until.elementLocated(By.id('username')), 5000);
  await driver.wait(until.elementLocated(By.id('password')), 5000);
  await driver.findElement(By.id('username')).sendKeys('wrond-user');
  await driver.findElement(By.id('password')).sendKeys('wrong-password');
  await driver.findElement(By.css('button[type="submit"]')).click();
  const failedMsg = await driver.wait(until.elementLocated(By.id('flash')), 5000);
  console.log('Login Fallido →', await failedMsg.getText());
}

(async function runTests() {
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    await driver.manage().window().maximize();

    await loginExitoso(driver);
    await loginFallido(driver);

    const caps = await driver.getCapabilities();
    console.log('goog:chromeOptions usados →', caps.get('goog:chromeOptions'));
  } catch (err) {
    console.error('Error en las pruebas:', err);
  } finally {
    await driver.quit();
  }
})();