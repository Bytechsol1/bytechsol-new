import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, 'dist');

// Routes to pre-render (Matches your sitemap)
const routes = [
  '/',
  '/about',
  '/services',
  '/services/Ai-Ml',
  '/services/E-Commerce-solutions',
  '/services/ERP-service',
  '/services/brand-building',
  '/services/custom-web',
  '/services/odoo-services',
  '/services/seo-service',
  '/services/web-app',
  '/services/website-design-and-development',
  '/blog',
  '/careers',
  '/contact'
];

async function prerender() {
  console.log('📦 Starting Pre-rendering...');
  // Launch a hidden Chrome browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const route of routes) {
    try {
      // 1. Prepare folder structure
      const folderPath = route === '/' ? distPath : path.join(distPath, route);
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }

      // 2. Visit the local server (Must be running!)
      await page.goto(`http://localhost:8000${route}`, { waitUntil: 'networkidle0' });

      // 3. Grab the HTML
      let html = await page.content();

      // 4. Fix image paths (remove "assets/" prefix for root relative paths)
      html = html.replace(/src="assets\//g, 'src="/assets/')
                 .replace(/href="assets\//g, 'href="/assets/');

      // 5. Save the file
      fs.writeFileSync(path.join(folderPath, 'index.html'), html);
      console.log(`✅ Generated: ${route}`);
    } catch (err) {
      console.error(`❌ Failed: ${route}`, err);
    }
  }

  await browser.close();
  console.log('🎉 Pre-rendering complete!');
}

prerender();