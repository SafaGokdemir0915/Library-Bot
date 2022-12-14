const puppeteer = require("puppeteer")

async function start() {
    // userDataDir: "./tmp"
    const browser = await puppeteer.launch({ headless: false, defaultViewport: false, })
    const page = await browser.newPage()
    await page.goto("https://script.google.com/a/wwprsd.org/macros/s/AKfycbzlYIIojm9X58AZK4geOgvViTtTzFSigomYA4X7jklpgGOZ738/exec?school=551")

    await page.waitForSelector('#identifierId')
    await page.click("#identifierId")
    await page.type("#identifierId", "23sg1133")
    await page.click("#identifierNext")
    await page.waitForSelector("#password")
    await page.reload() 
    await page.type("input[type=password]", "WWP7coolgreenseagulls")
    await page.click("#passwordNext")
    await page.waitForNavigation()
    await page.waitForNavigation()

    await page.waitForTimeout(1000)
    
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
}

start()