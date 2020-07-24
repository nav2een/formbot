const puppeteer = require("puppeteer");
const argv = require("minimist")(process.argv.slice(2));

const waitTime = argv.t * 1000 || 30000;

async function run() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.example.com/", {
      timeout: 0,
    });
    await page.click('input[value="1234"]');
    await Promise.all([
      page.waitForNavigation({
        timeout: 0,
      }),
      page.click(".done-button"),
    ]);
    let message = await page.$eval(".thanks-message", (el) => el.textContent);
    if (message === "Thank you!") {
      console.log(
        `${new Date().toLocaleTimeString()} - Successfully submitted`
      );
    }
    await browser.close();
  } catch (error) {
    console.error(error);
  }
}

function timeout(ms) {
  console.log(`waiting for minimum ${ms / 1000} seconds...`);
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
  while (true) {
    await Promise.all([run(), timeout(waitTime)]);
  }
})();
