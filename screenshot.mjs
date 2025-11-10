import { chromium } from 'playwright';

async function takeScreenshots() {
  const browser = await chromium.launch({
    executablePath: '/root/.cache/ms-playwright/chromium-1194/chrome-linux/chrome',
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--single-process',
      '--no-zygote'
    ]
  });
  const context = await browser.newContext({
    viewport: { width: 1400, height: 900 }
  });
  const page = await context.newPage();

  try {
    // Take screenshot of home page
    console.log('Loading home page...');
    await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(2000); // Wait for animations
    await page.screenshot({ path: 'home-page.png' });
    console.log('✓ Home page screenshot saved');

    // Take screenshot of gallery
    console.log('Loading gallery...');
    await page.goto('http://localhost:5173/gallery', { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'gallery-page.png' });
    console.log('✓ Gallery page screenshot saved');

    // Take screenshot of a monster detail page
    console.log('Loading monster detail...');
    await page.goto('http://localhost:5173/monster/vamp-002', { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'monster-detail.png' });
    console.log('✓ Monster detail screenshot saved');

    console.log('\n✨ All screenshots captured successfully!');
  } catch (error) {
    console.error('Error taking screenshots:', error.message);
  } finally {
    await browser.close();
  }
}

takeScreenshots().catch(console.error);
