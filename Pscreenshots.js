const puppeteer = require('puppeteer');

 module.export = async function  getScreenHots (url){
        try{
            const browser = await puppeteer.launch({headless: false});
            const page = await browser.newPage();
            await page.goto(url);
            await page.setViewport({width: 1920, height: 1080});

            const video = await page.$('.html-video-player');
            await page.evaluate(() => {
                let dom = document.querySelector('.ytp-chrome-bottom');
                dom.style.display = 'none';
            })
            await page.keyboard.press('Space');
            let image = await video.screenshot({encoding: 'base64'});

            browser.close();
            return image;
        }catch(err) { 
            console.log(err.response)
        }
    };



