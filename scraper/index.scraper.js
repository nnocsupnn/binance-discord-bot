const { By, Key, until } = require("selenium-webdriver");
const webdriver = require('selenium-webdriver')
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");



const currency2float = strN => Number(strN.replace(/[^0-9.-]+/g,""));


module.exports = {
    condition: (...args) => {
        if (!args.length) return;


    },

    scrape: async () => {
        chrome.setDefaultService(
            new chrome.ServiceBuilder(chromedriver.path).build()
        );

        var driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();
    
        try {
            // Navigate to Url
            await driver.get('https://www.binance.com/en/trade/BNB_USDT?d=1');
    
            setInterval(async () => {
                await driver.wait(until.elementLocated(By.className('css-2kxqg4')), 10000);
                // let result = await firstResult.getAttribute('textContent');

                let elements = await driver.findElements(By.className("css-2kxqg4"));
                for(let e of elements) {
                    let results = await e.findElements(By.className("css-vurnku"));
                    for (value of results) {
                        let txtValue = await value.getText();
                        console.log(`${txtValue}`)
                        console.log(`---`)
                    }
                }
            }, 1000)
        } finally {
            // (await driver).quit();
        }
    }
}

module.exports.scrape();


