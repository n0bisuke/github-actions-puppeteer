const puppeteer = require('puppeteer');
let launchOption = {};

//GitHub Pages上
if(process.env.PUPPETEER_EXEC_PATH){
    launchOption = {
        executablePath: process.env.PUPPETEER_EXEC_PATH, // set by docker container
        headless: false,
    }
}

(async () => {
    const URL = `https://twitter.com/n0bisuke`;
    
    const browser = await puppeteer.launch(launchOption);
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

    await browser.close();
})();