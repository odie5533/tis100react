import { chromium } from 'playwright';

async function testRender() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--disable-dev-shm-usage', '--no-sandbox', '--disable-gpu']
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    // Get page title
    const title = await page.title();
    console.log('Page title:', title);

    // Get the main heading
    const heading = await page.$eval('h1', el => el.textContent);
    console.log('Main heading:', heading);

    // Get navigation items
    const navItems = await page.$$eval('.nav-links button', buttons =>
      buttons.map(b => b.textContent)
    );
    console.log('Navigation items:', navItems);

    // Check if rainbow text is present
    const hasRainbow = await page.$('.rainbow-text');
    console.log('Has rainbow text:', !!hasRainbow);

    // Try to get HTML content (first 500 chars)
    const html = await page.content();
    console.log('\nHTML preview (first 500 chars):\n', html.substring(0, 500));

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
}

testRender();
