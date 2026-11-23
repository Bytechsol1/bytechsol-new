// Local, read-only browser checks. No forms are submitted.
const fs = require('node:fs');
const path = require('node:path');
const puppeteer = require('puppeteer');

const out = path.resolve(__dirname, '../artifacts/case-study-review');
const cases = ['odoo-erp', 'loop', 'voxiq', 'cmjl', 'clockit', 'labour-tracking', 'frigo-flow', 'skynode-partners'];
const selected = process.argv.find(arg => arg.startsWith('--case='))?.slice(7);
const selectedCases = selected ? [selected] : cases;
const baseUrl = process.env.CASE_STUDY_BASE_URL || 'http://localhost:5173';

(async () => {
  fs.mkdirSync(out, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    userDataDir: path.join(out, 'browser-profile'),
    timeout: 20000,
    protocolTimeout: 20000,
    args: ['--disable-gpu', '--no-first-run', '--no-default-browser-check', '--disable-crash-reporter', '--disable-breakpad', '--disable-extensions', '--no-sandbox'],
  });
  const report = [];
  try {
    console.log('Local browser ready');
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', request => {
      const hostname = new URL(request.url()).hostname;
      if (hostname && !['localhost', '127.0.0.1'].includes(hostname)) request.abort();
      else request.continue();
    });
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    for (const slug of selectedCases) {
      const errors = [];
      const onError = error => errors.push(error.message);
      page.on('pageerror', onError);
      for (const width of [1440, 1024, 768, 390]) {
        await page.setViewport({ width, height: 1000, deviceScaleFactor: 1 });
        await page.goto(`${baseUrl}/portfolio/${slug}/`, { waitUntil: 'domcontentloaded', timeout: 30000 });
        await page.waitForSelector('main h1');
        await page.evaluate(() => document.fonts.ready);
        const metrics = await page.evaluate(() => {
          const main = document.querySelector('main');
          const visible = el => Boolean(el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden');
          return {
            heading: main.querySelector('h1').innerText,
            readable: main.classList.contains('case-study-readable'),
            font: getComputedStyle(main).fontFamily,
            horizontalOverflow: document.documentElement.scrollWidth > innerWidth + 1,
            overflowing: [...main.querySelectorAll('*')].filter(el => {
              if (!visible(el) || el.closest('[role="tablist"], nav, [class*="table-scroll"], [class*="lightbox"]')) return false;
              const r = el.getBoundingClientRect();
              return r.width > 0 && (r.right > innerWidth + 2 || r.left < -2);
            }).slice(0, 8).map(el => `${el.tagName}.${el.className}`),
            smallParagraphs: [...main.querySelectorAll('p')].filter(el => visible(el) && parseFloat(getComputedStyle(el).fontSize) < 16).map(el => ({ text: el.textContent.slice(0, 75), size: getComputedStyle(el).fontSize })),
          };
        });
        if (width === 1440 || width === 390) await page.screenshot({ path: path.join(out, `${slug}-${width}.png`) });
        if (slug === 'odoo-erp') {
          await page.$eval('#odoo-delivery', el => el.scrollIntoView({ block: 'start', behavior: 'instant' }));
          await page.screenshot({ path: path.join(out, `odoo-delivery-${width}.png`) });
        }
        const brokenImages = await page.evaluate(async () => {
          const imgs = [...document.querySelectorAll('main img')];
          imgs.forEach(img => { img.loading = 'eager'; });
          await Promise.race([Promise.all(imgs.map(img => img.complete ? Promise.resolve() : new Promise(resolve => { img.addEventListener('load', resolve, { once: true }); img.addEventListener('error', resolve, { once: true }); }))), new Promise(resolve => setTimeout(resolve, 7000))]);
          return imgs.filter(img => img.complete && img.naturalWidth === 0).map(img => img.getAttribute('src'));
        });
        report.push({ slug, width, ...metrics, brokenImages, errors: [...errors] });
        console.log(JSON.stringify({ slug, width, readable: metrics.readable, overflow: metrics.horizontalOverflow, overflowElements: metrics.overflowing, smallParagraphs: metrics.smallParagraphs.length, brokenImages: brokenImages.length, errors: errors.length }));
      }
      page.off('pageerror', onError);
    }
    fs.writeFileSync(path.join(out, selected ? `${selected}-report.json` : 'report.json'), JSON.stringify(report, null, 2));
    if (report.some(row => !row.readable || row.horizontalOverflow || row.smallParagraphs.length || row.brokenImages.length || row.errors.length)) process.exitCode = 1;
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
