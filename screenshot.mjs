import { chromium } from 'playwright';

async function takeScreenshots() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--disable-dev-shm-usage', '--no-sandbox']
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  try {
    // Navigate to the site
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);

    // Take screenshot of home page
    await page.screenshot({ path: 'screenshot-home.png' });
    console.log('✅ Home page screenshot saved!');

    // Navigate to builder
    await page.click('text=🔨 Builder');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'screenshot-builder.png' });
    console.log('✅ Builder page screenshot saved!');

    // Navigate to gallery
    await page.click('text=🖼️ Gallery');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'screenshot-gallery.png' });
    console.log('✅ Gallery page screenshot saved!');

    // Navigate to web rings
    await page.click('text=💫 WebRings');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'screenshot-webrings.png' });
    console.log('✅ WebRings page screenshot saved!');

    // Navigate to profile
    await page.click('text=👤 Profile');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'screenshot-profile.png' });
    console.log('✅ Profile page screenshot saved!');
  } catch (error) {
    console.error('Error taking screenshots:', error.message);
  } finally {
    await browser.close();
  }
}

takeScreenshots();
