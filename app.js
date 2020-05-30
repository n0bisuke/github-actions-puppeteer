const puppeteer = require('puppeteer');

(async () => {
    const URL = `https://twitter.com/n0bisuke`;

    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    await page.goto(URL); //URLにアクセス
    // Get the "viewport" of the page, as reported by the page.
    const dimensions = await page.evaluate(() => {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            title: document.title,
            deviceScaleFactor: window.devicePixelRatio
        };
    });

    console.log('Dimensions:', dimensions);
    console.log('タイトル:', dimensions.title); 

    await browser.close();
})();