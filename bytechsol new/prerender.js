import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, 'dist');

let routes = [
  '/',
  '/about/',
  '/services/',
  '/services/ai-ml/',
  '/services/e-commerce-solutions/',
  '/services/erp-service/',
  '/services/brand-building/',
  '/services/custom-web/',
  '/services/odoo-services/',
  '/services/seo-service/',
  '/services/web-app/',
  '/services/website-design-and-development/',
  '/blog/',
  '/careers/',
  '/contact/'
];

function isBlogDetailRoute(route) {
  return route.startsWith('/blog/') && route !== '/blog/';
}

async function fetchBlogRoutes() {
  try {
    console.log('Fetching sitemap from WordPress...');
    const { data } = await axios.get('https://bytechsol.com/cms/post-sitemap.xml');

    const parser = new XMLParser();
    const result = parser.parse(data);

    let urls = result.urlset.url;
    if (!Array.isArray(urls)) {
      urls = [urls];
    }

    const blogRoutes = urls.map((u) => {
      const loc = u.loc;
      return loc
        .replace('https://bytechsol.com/cms/', '/blog/')
        .replace('https://bytechsol.com/', '/');
    });

    console.log(`Found ${blogRoutes.length} blog posts to pre-render.`);
    return blogRoutes;
  } catch (err) {
    console.error('Could not fetch sitemap:', err.message);
    return [];
  }
}

async function waitForRouteContent(page, route) {
  if (isBlogDetailRoute(route)) {
    await page.waitForFunction(
      () => {
        const text = document.body?.innerText || '';
        return Boolean(
          document.querySelector('.blog-detail-title') ||
          text.includes('Post not found.')
        );
      },
      { timeout: 30000 }
    );
    return;
  }

  if (route === '/blog/') {
    await page.waitForFunction(
      () => {
        const cards = document.querySelectorAll('.blog-card, .blog-link');
        return cards.length > 0;
      },
      { timeout: 15000 }
    );
    return;
  }

  await page.waitForSelector('#root', { timeout: 10000 });
}

async function prerender() {
  const blogRoutes = await fetchBlogRoutes();
  const allRoutes = [...new Set([...routes, ...blogRoutes])];

  console.log('Starting pre-rendering...');

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setCacheEnabled(false);
  await page.setExtraHTTPHeaders({ 'x-prerender': '1' });

  page.on('pageerror', (error) => {
    console.error('Page error:', error.message);
  });

  page.on('requestfailed', (request) => {
    const failure = request.failure();
    console.warn(`Request failed: ${request.url()}${failure ? ` (${failure.errorText})` : ''}`);
  });

  for (const route of allRoutes) {
    try {
      const cleanRoute = route.replace(/\/$/, '');
      const folderPath = route === '/' ? distPath : path.join(distPath, cleanRoute);

      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }

      const url = `http://localhost:8081${route}`;
      console.log(`Rendering: ${url}`);

      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });

      try {
        await waitForRouteContent(page, route);
      } catch (error) {
        console.warn(`Warning: content wait timed out for ${route}. Saving current HTML.`);
      }

      let html = await page.content();
      html = html
        .replace(/src="assets\//g, 'src="/assets/')
        .replace(/href="assets\//g, 'href="/assets/');

      fs.writeFileSync(path.join(folderPath, 'index.html'), html);
      console.log(`Generated: ${route}`);
    } catch (err) {
      console.error(`Failed: ${route}`, err.message);
    }
  }

  await browser.close();
  console.log('Pre-rendering complete!');
}

prerender();
