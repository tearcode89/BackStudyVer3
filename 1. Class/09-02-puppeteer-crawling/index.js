import puppeteer from "puppeteer";

async function startCrawling() {
    const browser = await puppeteer.launch({ headless: 'new'}); // 브라우저 시작 // headless 옵셥은 브라우저가 실행은 되는데 우리 눈
    // 앞에 보이게 할건지 아닌지를 결정
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 })
    await page.goto('https://www.goodchoice.kr/product/search/2')
    await new Promise((page) => setTimeout(page, 1000));

    const PickStageInfo = await page.waitForSelector(
        "#poduct_list_area > li:nth-child(2) > a > div > div.name > div > span"
    )
    const Stage = await PickStageInfo?.evaluate(el => el.textContent)

    const PickLocationInfo = await page.waitForSelector(
        "#poduct_list_area > li:nth-child(2) > a > div > div.name > p:nth-child(4)"
    )
    const Location = await PickLocationInfo?.evaluate(el => el.textContent)

    const PickPriceInfo = await page.waitForSelector(
        "#poduct_list_area > li:nth-child(2) > a > div > div.price > p > b"
    )
    const Price = await PickPriceInfo?.evaluate(el => el.textContent)

    console.log(Stage)
    console.log(Location.trim())
    console.log(Price)
}

startCrawling();

