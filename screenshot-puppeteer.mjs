import puppeteer from 'puppeteer-core';
import { chromium } from 'playwright';

async function takeScreenshots() {
  // Get the path to Playwright's chromium
  const browserPath = '/root/.cache/ms-playwright/chromium-1194/chrome-linux/chrome';

  const browser = await puppeteer.launch({
    executablePath: browserPath,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--disable-software-rasterizer',
      '--disable-extensions'
    ]
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    console.log('Navigating to site...');
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 10000 });
    await new Promise(r => setTimeout(r, 2000));

    console.log('Taking screenshot of home page...');
    await page.screenshot({ path: 'screenshot-home.png' });
    console.log('✅ Home page screenshot saved!');

    // Click builder
    await page.click('button:nth-of-type(2)');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: 'screenshot-builder.png' });
    console.log('✅ Builder page screenshot saved!');

    // Click gallery
    await page.click('button:nth-of-type(3)');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: 'screenshot-gallery.png' });
    console.log('✅ Gallery page screenshot saved!');

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
}

takeScreenshots();
