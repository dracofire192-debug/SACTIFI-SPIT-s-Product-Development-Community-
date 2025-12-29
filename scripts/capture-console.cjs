const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error('PAGE ERROR:', msg.text());
    } else {
      console.log('PAGE LOG:', msg.type(), msg.text());
    }
  });
  page.on('pageerror', err => {
    console.error('PAGEERROR event:', err.stack || err.message || err);
  });
  try {
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle2', timeout: 30000 });
    // Wait to capture any runtime errors
    await page.waitForTimeout(5000);
  } catch (e) {
    console.error('Navigation failed:', e.message);
  }
  await browser.close();
})();